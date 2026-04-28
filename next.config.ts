import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
