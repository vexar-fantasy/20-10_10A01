import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Produces a minimal self-contained server that is ideal for Docker.
  output: "standalone",
};
export default nextConfig;
