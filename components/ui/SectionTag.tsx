type SectionTagProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export function SectionTag({ children, icon }: SectionTagProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm text-white/90">
      {icon ?? (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-[10px] text-accent">
          ✦
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
