import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empty turbopack config to acknowledge we're using Turbopack
  // Velite will be run manually via `npm run velite` or in a separate build step
  turbopack: {},
};

export default nextConfig;
