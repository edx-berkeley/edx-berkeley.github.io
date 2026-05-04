import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data-88e.github.io",
        pathname: "/assets/images/**",
      },
    ],
  },
};

export default nextConfig;
