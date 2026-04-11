const style = document.createElement("style");
style.textContent = `
.shine {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.shine::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.85) 50%, transparent 70%);
  transform: skewX(-15deg);
  animation: shine-sweep 2s ease-in-out infinite;
  mix-blend-mode: overlay;
  pointer-events: none;
}
@keyframes shine-sweep {
  0%   { left: -100% }
  55%  { left: 150%  }
  100% { left: 150%  }
}
`;
document.head.appendChild(style);

document.querySelectorAll("a").forEach((el) => el.classList.add("shine"));
