import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <motion.svg
      viewBox="0 0 300 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "w-[300px] h-[140px]"}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Kanji Characters */}
      <text
        x="20"
        y="55"
        className="fill-current"
        fontSize="32"
        fontFamily="serif"
      >
        濱
      </text>
      <text
        x="20"
        y="100"
        className="fill-current"
        fontSize="32"
        fontFamily="serif"
      >
        崎
      </text>

      {/* Vertical Divider */}
      <line
        x1="70"
        y1="15"
        x2="70"
        y2="125"
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* HAMA */}
      <text
        x="90"
        y="55"
        className="fill-current"
        fontSize="48"
        fontFamily="serif"
        fontWeight="400"
        letterSpacing="0.02em"
      >
        HAMA
      </text>

      {/* Horizontal Divider */}
      <line
        x1="90"
        y1="70"
        x2="190"
        y2="70"
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* SAKIS */}
      <text
        x="90"
        y="110"
        className="fill-current"
        fontSize="48"
        fontFamily="serif"
        fontWeight="400"
        letterSpacing="0.02em"
      >
        SAKIS
      </text>
    </motion.svg>
  );
}
