
function ArrowIcon({ size = 20, color = "currentColor", direction = "left" }) {
  const rotation = {
    left: 0,
    down: 90,
    right: 180,
    up: -90,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation[direction] ?? 0}deg)` }}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;
