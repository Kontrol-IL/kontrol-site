"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-0">
      {/* Aurora glow (from footer) */}
      <div className="absolute top-1/2 left-1/2 w-[70vw] h-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(57,101,200,0.25)_0%,rgba(57,101,200,0.10)_40%,transparent_65%)] blur-[60px] animate-[mf-breathe_8s_ease-in-out_infinite_alternate]" />
      {/* Large grid with mask (from footer) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
    </div>
  );
}
