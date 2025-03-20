import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.google.com"],
  },
  reactStrictMode: true, // Make sure React Strict Mode is enabled for debugging
};

export default nextConfig;