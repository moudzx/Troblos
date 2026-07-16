export function GeometricDivider({ className }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center items-center overflow-hidden py-8 ${className || ""}`}>
      <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 0L110 15L125 10L115 25L125 40L110 35L100 50L90 35L75 40L85 25L75 10L90 15L100 0Z" fill="hsl(var(--primary))" opacity="0.8"/>
        <path d="M30 10L35 20L45 15L40 25L45 35L35 30L30 40L25 30L15 35L20 25L15 15L25 20L30 10Z" fill="hsl(var(--secondary))" opacity="0.6"/>
        <path d="M170 10L175 20L185 15L180 25L185 35L175 30L170 40L165 30L155 35L160 25L155 15L165 20L170 10Z" fill="hsl(var(--secondary))" opacity="0.6"/>
        <line x1="0" y1="25" x2="60" y2="25" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3"/>
        <line x1="140" y1="25" x2="200" y2="25" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3"/>
      </svg>
    </div>
  );
}
