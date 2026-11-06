const starColors = ["189,222,255", "251,224,186", "192,178,255"];
const cursorLife = 260;
const dustLimit = 56;
const skyEdge = [[0, 71], [215, 100], [400, 107], [710, 149], [1000, 242],
  [1280, 398], [1530, 601], [1672, 756]];

function skyHeight(x) {
  const right = skyEdge.findIndex(([edgeX]) => edgeX >= x);
  if (right <= 0) return skyEdge[0][1];
  const [leftX, leftY] = skyEdge[right - 1];
  const [rightX, rightY] = skyEdge[right];
  return leftY + (rightY - leftY) * (x - leftX) / (rightX - leftX);
}

function skyStars(width) {
  const stars = [];
  let seed = 430721;
  const sample = () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  for (let index = 0; index < 68; index += 1) {
    const x = (index + sample()) * width / 68;
    const y = 8 + sample() * (skyHeight(x) - 25);
    if ((x > 175 && x < 251 && y < 81) || (x > 1330 && y < 189)) continue;
    stars.push({
      x, y, size: .7 + sample() * 1.55,
      color: starColors[Math.floor(sample() * starColors.length)],
      phase: sample() * 2 * Math.PI, rate: .8 + sample() * 1.9,
    });
  }

  stars.push(
    { x: 900, y: 70, size: 2.85, color: starColors[0], phase: .2, rate: 1.4 },
    { x: 758, y: 8, size: 1.9, color: starColors[1], phase: 3, rate: 1.1 },
    { x: 1516, y: 271, size: 2.3, color: starColors[0], phase: 5.2, rate: 1.6 },
  );
  return stars;
}

function halo(ctx, x, y, radius, color, alpha) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, `rgba(${color},${alpha})`);
  gradient.addColorStop(.24, `rgba(${color},${alpha * .28})`);
  gradient.addColorStop(1, `rgba(${color},0)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
}

export function createAtmosphere(face, canvas) {
  const ctx = canvas.getContext("2d");
  const sceneWidth = canvas.width;
  const sceneStars = skyStars(sceneWidth);
  const trail = [];
  const dust = [];
  let stars = sceneStars;
  let pointer = null;
  let skyTime = 0;
  let bounds = { x: 0, y: 0, width: sceneWidth, height: canvas.height };

  function fit() {
    const viewport = canvas.getBoundingClientRect();
    const art = face.getBoundingClientRect();
    if (!viewport.width || !viewport.height || !art.width) return;
    const scale = art.width / sceneWidth;
    const density = Math.min(window.devicePixelRatio || 1, sceneWidth / viewport.width);
    const left = art.left - viewport.left;
    const top = art.top - viewport.top;
    canvas.width = Math.round(viewport.width * density);
    canvas.height = Math.round(viewport.height * density);
    ctx.setTransform(scale * density, 0, 0, scale * density, left * density, top * density);
    bounds = { x: -left / scale, y: -top / scale, width: viewport.width / scale, height: viewport.height / scale };

    // Extend the sparse sky into any space above the 16:9 artwork.
    stars = top > 18
      ? sceneStars.concat(sceneStars.filter((_, index) => index % 2 === 0).map(star => ({
        ...star,
        x: bounds.x + bounds.width * star.x / sceneWidth,
        y: bounds.y * (.12 + .81 * Math.abs(Math.sin(star.x * 1.73 + star.phase))),
        size: star.size * .78,
      })))
      : sceneStars;
    draw(skyTime, performance.now());
  }

  function drawSky(time) {
    for (const star of stars) {
      const pulse = (.5 + .5 * Math.sin(time * star.rate + star.phase)) ** 5;
      const alpha = .13 + pulse * .8;
      const radius = star.size * (.54 + .43 * pulse);
      ctx.fillStyle = `rgba(${star.color},${alpha})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, radius, 0, 2 * Math.PI);
      ctx.fill();
      if (star.size < 1.75 || pulse < .45) continue;
      halo(ctx, star.x, star.y, radius * 6, star.color, pulse * .62);
      const ray = radius * (2.3 + 1.5 * pulse);
      ctx.strokeStyle = `rgba(${star.color},${pulse * .5})`;
      ctx.lineWidth = .65;
      ctx.beginPath();
      ctx.moveTo(star.x - ray, star.y);
      ctx.lineTo(star.x + ray, star.y);
      ctx.moveTo(star.x, star.y - ray * .74);
      ctx.lineTo(star.x, star.y + ray * .74);
      ctx.stroke();
    }
  }

  function track(event) {
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
    const box = face.getBoundingClientRect();
    const scale = sceneWidth / box.width;
    const x = (event.clientX - box.left) * scale;
    const y = (event.clientY - box.top) * scale;
    const now = performance.now();
    const next = { x, y, born: now };
    if (!pointer || now - pointer.born > cursorLife || Math.hypot(x - pointer.x, y - pointer.y) > 340) {
      trail.push({ ...next, start: true });
      pointer = next;
      return;
    }
    const dx = x - pointer.x;
    const dy = y - pointer.y;
    const distance = Math.hypot(dx, dy);
    if (distance < 4) return;
    trail.push(next);
    if (trail.length > 30) trail.shift();
    const sparks = Math.min(4, Math.ceil(distance / 28));
    for (let step = 0; step < sparks; step += 1) {
      const amount = (step + .8) / sparks;
      const spread = (Math.random() - .5) * .052;
      dust.push({
        x: pointer.x + dx * amount, y: pointer.y + dy * amount, born: now,
        vx: -dy * spread / distance * 12 - dx / distance * .024,
        vy: dx * spread / distance * 12 - dy / distance * .024,
        life: 330 + Math.random() * 240, size: .65 + Math.random() * 1.5,
      });
    }
    if (dust.length > dustLimit) dust.splice(0, dust.length - dustLimit);
    pointer = next;
  }

  function drawTail(now) {
    while (trail.length && now - trail[0].born >= cursorLife) trail.shift();
    ctx.lineCap = "round";
    for (let index = 1; index < trail.length; index += 1) {
      const from = trail[index - 1];
      const to = trail[index];
      if (to.start) continue;
      const life = (1 - Math.max(0, now - from.born) / cursorLife) ** 2;
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.lineWidth = 7 * life + .65;
      ctx.strokeStyle = `rgba(133,190,255,${life * .19})`;
      ctx.stroke();
      ctx.lineWidth = 1.9 * life + .45;
      ctx.strokeStyle = `rgba(232,246,255,${life * .8})`;
      ctx.stroke();
    }
    for (let index = dust.length - 1; index >= 0; index -= 1) {
      const spark = dust[index];
      const age = Math.max(0, now - spark.born);
      const remaining = 1 - age / spark.life;
      if (remaining <= 0) {
        dust.splice(index, 1);
        continue;
      }
      const x = spark.x + age * spark.vx;
      const y = spark.y + age * spark.vy;
      ctx.fillStyle = `rgba(255,227,179,${remaining * remaining * .83})`;
      ctx.beginPath();
      ctx.arc(x, y, spark.size * (.45 + remaining * .55), 0, 2 * Math.PI);
      ctx.fill();
    }
    if (!pointer) return;
    const brightness = Math.max(0, 1 - (now - pointer.born) / 190);
    if (brightness) halo(ctx, pointer.x, pointer.y, 19, starColors[0], brightness * .72);
  }

  function draw(elapsed, now) {
    skyTime = elapsed;
    ctx.clearRect(bounds.x, bounds.y, bounds.width, bounds.height);
    drawSky(elapsed / 1000);
    drawTail(now);
  }

  new ResizeObserver(fit).observe(canvas);
  fit();

  return {
    track,
    leave() { pointer = null; },
    clear() {
      pointer = null;
      trail.length = 0;
      dust.length = 0;
    },
    draw,
  };
}
