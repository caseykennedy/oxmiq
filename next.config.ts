import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "source.unsplash.com" }],
    dangerouslyAllowSVG: true,
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === "production",
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production",
  },
  trailingSlash: false,
  swcMinify: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
