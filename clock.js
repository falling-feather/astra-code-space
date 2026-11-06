import { createAtmosphere } from "./clock-atmosphere.js";
import { createGearTrain } from "./clock-gears.js";

(() => {
  const clock = document.querySelector(".clock");
  const stage = document.querySelector(".clock-stage");
  const face = stage.querySelector(".clock-face");
  const navigation = stage.querySelector(".clock-nav");
  const markerLayer = stage.querySelector(".clock-markers");
  const hand = stage.querySelector(".hand");
  const shadow = stage.querySelector(".hand-shadow");
  const tip = stage.querySelector(".hand-tip");
  const trail = stage.querySelector(".clock-trail");
  const trailLight = stage.querySelector("#sweep-light");
  const detentTick = stage.querySelector(".detent-tick");
  const detentGlint = stage.querySelector(".detent-glint");
  const toggle = stage.querySelector(".motion-toggle");
  const status = document.querySelector("#clock-status");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pivot = { x: 446, y: 541 };
  const revolutionTime = 44000;
  const detentTime = 190;
  const dialPeriod = 32000;
  const dialTravel = 112;
  const atmosphere = createAtmosphere(face, clock.querySelector(".clock-atmosphere"));
  const drawGears = createGearTrain(stage.querySelector(".gear-train"));

  let perimeter = 0;
  const segments = Array.from(stage.querySelectorAll("[data-orbit]"), path => {
    const length = path.getTotalLength();
    const segment = { path, start: perimeter, end: perimeter + length };
    perimeter = segment.end;
    return segment;
  });
  const detents = new Map(segments.map(segment => [segment.path.dataset.orbit, segment]));

  let position = detents.get("trace").start - 62;
  let turn = null;
  let frameId = 0;
  let lastFrame = 0;
  let paused = false;
  let skyTime = 0;
  let gearTime = 0;
  let dialTime = 0;
  let engaged = null;

  function wrap(distance) {
    const offset = distance % perimeter;
    return offset < 0 ? offset + perimeter : offset;
  }

  function pointAt(distance) {
    const offset = wrap(distance);
    const segment = segments.find(entry => offset < entry.end);
    return segment.path.getPointAtLength(offset - segment.start);
  }

  function tangentAt(distance) {
    const before = pointAt(distance - 3);
    const after = pointAt(distance + 3);
    return Math.atan2(after.y - before.y, after.x - before.x);
  }

  function mountMarker(detent, link) {
    const base = pointAt(detent.start);
    const [notchX, notchY] = detent.path.dataset.notch.split(" ").map(Number);
    const vector = { x: notchX - base.x, y: notchY - base.y };
    const stem = `M 0 0 L ${vector.x} ${vector.y}`;
    const crownAngle = 90 + Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "g");
    marker.setAttribute("class", "clock-marker");
    marker.dataset.marker = detent.path.dataset.orbit;
    marker.innerHTML = `
      <path d="${stem}" transform="translate(2 3)" stroke="#030b20" stroke-width="7"/>
      <path d="${stem}" stroke="currentColor" stroke-width="4.8"/>
      <path d="${stem}" transform="translate(-1 0)" stroke="#fff7e8" stroke-opacity=".55" stroke-width="1.3"/>
      <use class="index-knob" href="#index-crystal" transform="translate(${vector.x} ${vector.y}) rotate(${crownAngle})"/>
    `;
    markerLayer.append(marker);
    detent.marker = marker;
    detent.link = link;
    detent.base = base;
    detent.vector = vector;
    detent.tangent = tangentAt(detent.start);

    const highlight = () => marker.toggleAttribute("data-highlight", link.matches(":hover, :focus-visible"));
    for (const eventName of ["pointerenter", "pointerleave", "focus", "blur"]) {
      link.addEventListener(eventName, highlight);
    }
  }

  function drawDial(shift) {
    for (const detent of detents.values()) {
      const distance = detent.start + shift;
      const point = pointAt(distance);
      const rotation = tangentAt(distance) - detent.tangent;
      detent.pose = { distance, point, rotation };
      detent.marker.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${rotation * 180 / Math.PI})`);
      detent.link.style.setProperty("--shift-x", point.x - detent.base.x);
      detent.link.style.setProperty("--shift-y", point.y - detent.base.y);
    }
  }

  function setEngaged(detent) {
    if (engaged) {
      engaged.marker.removeAttribute("data-engaged");
      engaged.link.removeAttribute("data-engaged");
    }
    engaged = detent;
    if (engaged) {
      engaged.marker.setAttribute("data-engaged", "");
      engaged.link.setAttribute("data-engaged", "");
    }
  }

  function draw(distance, trailLength = 0) {
    position = wrap(distance);
    const { x, y } = pointAt(position);
    const dx = x - pivot.x;
    const dy = y - pivot.y;
    const length = Math.hypot(dx, dy);
    const transform = `matrix(${dx} ${dy} ${-dy / length} ${dx / length} ${pivot.x} ${pivot.y})`;
    hand.setAttribute("transform", transform);
    shadow.setAttribute("transform", transform);
    tip.setAttribute("transform", `translate(${x} ${y})`);

    if (!trailLength) {
      trail.setAttribute("d", "");
      return;
    }

    const tail = pointAt(position - trailLength);
    const points = [`M ${tail.x} ${tail.y}`];
    for (let step = 1; step <= 10; step += 1) {
      const point = pointAt(position - trailLength * (1 - step / 10));
      points.push(`L ${point.x} ${point.y}`);
    }
    trail.setAttribute("d", points.join(" "));
    trailLight.setAttribute("x1", tail.x);
    trailLight.setAttribute("y1", tail.y);
    trailLight.setAttribute("x2", x);
    trailLight.setAttribute("y2", y);
  }

  function arrive(detent) {
    const { distance, point: { x, y }, rotation } = detent.pose;
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);
    const notchX = x + detent.vector.x * cos - detent.vector.y * sin;
    const notchY = y + detent.vector.x * sin + detent.vector.y * cos;
    draw(distance);
    detentTick.setAttribute("d", `M ${x} ${y} L ${notchX} ${notchY}`);
    detentGlint.setAttribute("cx", x);
    detentGlint.setAttribute("cy", y);
    stage.dataset.motion = "arrived";
  }

  function animate(now) {
    frameId = 0;
    const elapsed = lastFrame ? Math.min(80, now - lastFrame) : 0;
    lastFrame = now;
    const focused = document.activeElement;
    const holdsDial = navigation.matches(":hover") ||
      (navigation.contains(focused) && focused.matches(":focus-visible"));
    if (!turn && elapsed && !holdsDial) {
      dialTime += elapsed;
      drawDial(dialTravel * Math.sin(dialTime * 2 * Math.PI / dialPeriod));
    }
    skyTime += elapsed;
    gearTime += elapsed * (turn ? 1.65 : 1);
    drawGears(gearTime);
    atmosphere.draw(skyTime, now);
    if (turn) {
      const turnElapsed = now - turn.started;
      if (turnElapsed < turn.duration) {
        const progress = turnElapsed / turn.duration;
        const eased = progress * progress * (3 - 2 * progress);
        const trace = Math.sign(turn.distance) * Math.min(72, Math.abs(turn.distance) * eased);
        draw(turn.from + turn.distance * eased, trace);
      } else if (stage.dataset.motion !== "arrived") {
        arrive(turn.detent);
        turn.arrivedAt = now;
      } else if (now - turn.arrivedAt >= detentTime) {
        goToSelectedPage();
        return;
      }
    } else if (!paused && !reducedMotion.matches) {
      draw(position + perimeter * elapsed / revolutionTime, 38);
    }
    requestFrame();
  }

  function requestFrame() {
    if (!frameId && !document.hidden && (turn || (!paused && !reducedMotion.matches))) {
      frameId = requestAnimationFrame(animate);
    }
  }

  function stopFrame() {
    cancelAnimationFrame(frameId);
    frameId = 0;
    lastFrame = 0;
  }

  function goToSelectedPage() {
    const href = turn.href;
    turn = null;
    stopFrame();
    location.assign(href);
  }

  function syncMotion() {
    stopFrame();
    toggle.hidden = reducedMotion.matches;
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.title = paused ? "继续动效" : "暂停动效";
    atmosphere.clear();
    atmosphere.draw(skyTime, performance.now());
    drawGears(gearTime);
    if (turn && (paused || reducedMotion.matches)) {
      goToSelectedPage();
      return;
    }
    if (!turn) {
      stage.dataset.motion = paused || reducedMotion.matches ? "paused" : "cruising";
      draw(position);
    }
    requestFrame();
  }

  for (const link of navigation.querySelectorAll("[data-stop]")) {
    const detent = detents.get(link.dataset.stop);
    mountMarker(detent, link);
    link.addEventListener("click", event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey ||
          paused || reducedMotion.matches) return;
      event.preventDefault();
      const distance = wrap(detent.pose.distance - position + perimeter / 2) - perimeter / 2;
      const duration = Math.abs(distance) < 2 ? 0 : 350 + 310 * Math.abs(distance) / (perimeter / 2);
      turn = { detent, distance, duration, from: position, started: performance.now(), href: link.href };
      setEngaged(detent);
      stage.dataset.motion = "turning";
      status.textContent = `正在前往 ${link.textContent.trim()}`;
      requestFrame();
    });
  }
  drawDial(0);

  toggle.addEventListener("click", () => {
    paused = !paused;
    syncMotion();
  });
  reducedMotion.addEventListener("change", syncMotion);
  clock.addEventListener("pointermove", event => {
    if (!paused && !reducedMotion.matches) atmosphere.track(event);
  });
  clock.addEventListener("pointerleave", atmosphere.leave);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopFrame();
      atmosphere.clear();
      if (turn) goToSelectedPage();
    } else {
      requestFrame();
    }
  });
  window.addEventListener("pagehide", stopFrame);
  window.addEventListener("pageshow", event => {
    if (event.persisted) {
      turn = null;
      setEngaged(null);
      status.textContent = "";
      syncMotion();
    }
  });
  syncMotion();
})();
