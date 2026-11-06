const TAU = 2 * Math.PI;

function polar(radius, angle) {
  return `${(radius * Math.cos(angle)).toFixed(2)} ${(radius * Math.sin(angle)).toFixed(2)}`;
}

function toothOutline(radius, count, bore) {
  const profile = [[-.5, -5.5], [-.31, -5.5], [-.21, 5], [.21, 5], [.31, -5.5]];
  const points = [];
  for (let tooth = 0; tooth < count; tooth += 1) {
    for (const [phase, depth] of profile) {
      points.push(polar(radius + depth, (tooth + phase) * TAU / count));
    }
  }
  const opening = bore ? ` M ${bore} 0 A ${bore} ${bore} 0 1 0 ${-bore} 0 A ${bore} ${bore} 0 1 0 ${bore} 0 Z` : "";
  return `M ${points.join(" L ")} Z${opening}`;
}

function mountGear(layer, { id, x, y, radius, count, bore, phase }) {
  const wheel = document.createElementNS("http://www.w3.org/2000/svg", "g");
  wheel.setAttribute("class", "clock-gear");
  wheel.setAttribute("transform", `translate(${x} ${y})`);
  const brushedCuts = [];
  for (let tooth = 0; tooth < count * 2; tooth += 1) {
    const angle = tooth * TAU / (count * 2);
    const inner = tooth % 2 ? radius - 11 : radius - 18;
    brushedCuts.push(`M ${polar(inner, angle)} L ${polar(radius - 7, angle)}`);
  }
  const screws = [];
  const screwRadius = bore ? bore + 10 : radius * .53;
  for (let screw = 0; screw < (bore ? 12 : 6); screw += 1) {
    const angle = screw * TAU / (bore ? 12 : 6);
    screws.push(`<g transform="translate(${polar(screwRadius, angle)}) rotate(${angle * 180 / Math.PI})">
      <circle r="3.6" fill="#31435e" stroke="#b9b5ae" stroke-width=".8"/>
      <path d="M -2 0 H 2" stroke="#111b2d" stroke-width="1.1"/>
    </g>`);
  }
  wheel.innerHTML = `
    <defs>
      <path id="${id}-profile" fill-rule="evenodd" d="${toothOutline(radius, count, bore)}"/>
      <linearGradient id="${id}-alloy" gradientUnits="userSpaceOnUse"
        x1="${-radius}" y1="${-radius * .7}" x2="${radius}" y2="${radius * .7}">
        <stop stop-color="#1c2d44"/>
        <stop offset=".21" stop-color="#687e98"/>
        <stop offset=".29" stop-color="#a5b3c1"/>
        <stop offset=".40" stop-color="#425873"/>
        <stop offset=".67" stop-color="#526783"/>
        <stop offset=".80" stop-color="#a6a99f"/>
        <stop offset=".85" stop-color="#c7bca5"/>
        <stop offset=".94" stop-color="#586780"/>
        <stop offset="1" stop-color="#293e5c"/>
      </linearGradient>
    </defs>
    <g transform="translate(1 16)">
      <use class="gear-depth" href="#${id}-profile" fill="#0b1427" stroke="#344258" stroke-width="1.8"/>
    </g>
    <g transform="translate(.6 8)">
      <use class="gear-depth" href="#${id}-profile" fill="#26334b" stroke="#435571" stroke-width=".9"/>
    </g>
    <g class="gear-rotor">
      <use href="#${id}-profile" fill="url(#${id}-alloy)" stroke="#bdc6d2" stroke-opacity=".66" stroke-width="1.15"/>
      <circle r="${radius - 21}" fill="none" stroke="#182940" stroke-width="2.3" opacity=".76"/>
      <circle r="${radius - 24}" fill="none" stroke="#d0c7b4" stroke-width=".8" opacity=".55"/>
      <path d="${brushedCuts.join(" ")}" fill="none" stroke="#15243b" stroke-opacity=".62" stroke-width="1.2"/>
      ${screws.join("")}
    </g>
    ${bore ? "" : '<circle r="16" fill="#23364f" stroke="#a6b5c8" stroke-width="1.8"/><circle r="8" fill="#8b9ab0" stroke="#dbe6f1" stroke-width="1.2"/>'}
  `;
  layer.append(wheel);
  const rotor = wheel.querySelector(".gear-rotor");
  const depths = wheel.querySelectorAll(".gear-depth");
  const alloy = wheel.querySelector("linearGradient");
  return degrees => {
    const angle = (degrees + phase) % 360;
    const rotation = `rotate(${angle})`;
    rotor.setAttribute("transform", rotation);
    for (const depth of depths) depth.setAttribute("transform", rotation);
    // The teeth pass through a light fixed to the clock housing.
    alloy.setAttribute("gradientTransform", `rotate(${-angle})`);
  };
}

export function createGearTrain(layer) {
  const driver = { radius: 235, count: 64 };
  const pinion = { radius: driver.radius * 18 / driver.count, count: 18 };
  const meshAngle = .225;
  const pitchDistance = driver.radius + pinion.radius;
  const phase = meshAngle * 180 / Math.PI;
  const drive = mountGear(layer, { id: "drive-wheel", x: 0, y: 0, bore: 198, phase, ...driver });
  const follow = mountGear(layer, {
    id: "pinion-wheel",
    x: pitchDistance * Math.cos(meshAngle),
    y: pitchDistance * Math.sin(meshAngle),
    bore: 0,
    phase: phase + 180 + 180 / pinion.count,
    ...pinion,
  });

  return elapsed => {
    const degrees = elapsed * 360 / 63000;
    drive(degrees);
    follow(-degrees * driver.count / pinion.count);
  };
}
