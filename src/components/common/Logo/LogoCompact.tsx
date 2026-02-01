interface LogoCompactProps {
  className?: string;
}

export function LogoCompact({ className }: LogoCompactProps) {
  return (
    <svg
      viewBox="0 0 180 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "w-[180px] h-[50px]"}
    >
      {/* Kanji Characters */}
      <text
        x="5"
        y="22"
        className="fill-current"
        fontSize="16"
        fontFamily="serif"
      >
        濱
      </text>
      <text
        x="5"
        y="42"
        className="fill-current"
        fontSize="16"
        fontFamily="serif"
      >
        崎
      </text>

      {/* Vertical Divider */}
      <line
        x1="32"
        y1="5"
        x2="32"
        y2="45"
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* HAMASAKIS */}
      <text
        x="42"
        y="32"
        className="fill-current"
        fontSize="22"
        fontFamily="serif"
        fontWeight="400"
        letterSpacing="0.02em"
      >
        HAMASAKIS
      </text>
    </svg>
  );
}
