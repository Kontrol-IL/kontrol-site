import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Pre-restructure 3-city URLs → /branches/{city}
      { source: "/ashdod", destination: "/branches/ashdod", permanent: true },
      { source: "/rishon-letzion", destination: "/branches/rishon-letzion", permanent: true },
      { source: "/modiin", destination: "/branches/modiin", permanent: true },
      // Old /cities index → /branches index
      { source: "/cities", destination: "/branches", permanent: true },
    ];
  },

  // Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "rvmbg74tecxvwd8l.private.blob.vercel-storage.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default nextConfig;
