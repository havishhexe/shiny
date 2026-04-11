const style = document.createElement("style");
style.textContent = `
.shine .s {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.shine .s::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 40%; height: 100%;
  background: linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.92) 50%, transparent 75%);
  transform: skewX(-15deg);
  animation: shine-sweep 2.2s ease-in-out infinite;
  mix-blend-mode: screen;
  pointer-events: none;
}
@keyframes shine-sweep {
  0%   { left: -100% }
  55%  { left: 150%  }
  100% { left: 150%  }
}
`;
document.head.appendChild(style);

document.querySelectorAll("a").forEach((el) => {
  el.classList.add("shine");
  const s = document.createElement("span");
  s.className = "s";
  s.innerHTML = el.innerHTML;
  el.innerHTML = "";
  el.appendChild(s);
});
