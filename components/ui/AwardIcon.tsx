type AwardIconProps = {
  name: "awwwards" | "behance";
  className?: string;
};

export function AwardIcon({ name, className = "h-10 w-10" }: AwardIconProps) {
  if (name === "behance") {
    return (
      <svg
        viewBox="0 0 52 52"
        className={className}
        fill="none"
        aria-hidden
      >
        <rect width="52" height="52" rx="10" fill="rgba(255,255,255,0.08)" />
        <text
          x="26"
          y="33"
          textAnchor="middle"
          fill="#EEEEEE"
          fontSize="16"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
        >
          Bē
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 52 52" className={className} fill="none" aria-hidden>
      <rect width="52" height="52" rx="10" fill="rgba(255,255,255,0.08)" />
      <text
        x="26"
        y="34"
        textAnchor="middle"
        fill="#EEEEEE"
        fontSize="22"
        fontFamily="Georgia, serif"
        fontWeight="700"
      >
        W.
      </text>
    </svg>
  );
}
