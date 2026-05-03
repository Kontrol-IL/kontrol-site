"use client";

/**
 * Image placeholder. Renders a tasteful gray block with the slug shown faintly.
 * Every placeholder slug must have a corresponding entry in `docs/IMAGE_ASSETS.md`
 * with the GPT Image 2 prompt + alt text + description.
 *
 * Once an asset is delivered, swap `<Placeholder>` for `<Image>` (next/image)
 * with the matching alt and the slug as filename.
 */

interface PlaceholderProps {
  /** Unique kebab-case identifier. Must match an entry in docs/IMAGE_ASSETS.md. */
  slug: string;
  /** Hebrew alt text that will be used when the real image lands. */
  alt: string;
  /** CSS aspect-ratio (e.g., "16/9", "4/3", "1/1"). Defaults to "16/9". */
  aspectRatio?: string;
  /** Border radius. Defaults to 14. */
  radius?: number;
  /** Override caption display. Defaults to slug. */
  caption?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Placeholder({
  slug,
  alt,
  aspectRatio = "16/9",
  radius = 14,
  caption,
  className,
  style,
}: PlaceholderProps) {
  return (
    <div
      data-image-slot={slug}
      role="img"
      aria-label={alt}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        borderRadius: radius,
        background:
          "linear-gradient(135deg, rgba(57,101,200,0.10) 0%, rgba(99,102,241,0.05) 100%)",
        border: "1px dashed rgba(255,255,255,0.14)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Subtle grid texture so it doesn't feel empty */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          padding: "10px 18px",
          borderRadius: 6,
          background: "rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          fontFamily: "var(--font-heebo), sans-serif",
          fontSize: 12,
          color: "rgba(255,255,255,0.65)",
          letterSpacing: "0.08em",
          textAlign: "center",
          maxWidth: "85%",
        }}
      >
        <div style={{ marginBottom: 4, color: "rgba(255,255,255,0.45)", fontSize: 10 }}>
          IMAGE PENDING
        </div>
        <div style={{ fontWeight: 600 }}>{caption || slug}</div>
      </div>
    </div>
  );
}
