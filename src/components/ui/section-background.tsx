"use client";

export default function SectionBackground() {
  return (
    <div className="absolute inset-0 -z-0 h-full w-full">
      {/* Blue radial spotlight (from hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_560px_at_50%_200px,rgba(57,101,200,0.15),transparent)]" />
      {/* Small grid (from hero) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#3965C820_1px,transparent_1px),linear-gradient(to_bottom,#3965C820_1px,transparent_1px)] bg-[size:18px_18px]" />
    </div>
  );
}
