import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "farm1.staticflickr.com",
            },
            {
                protocol: "https",
                hostname: "farm2.staticflickr.com",
            },
            {
                protocol: "https",
                hostname: "farm3.staticflickr.com",
            },
            {
                protocol: "https",
                hostname: "farm4.staticflickr.com",
            },
            {
                protocol: "https",
                hostname: "farm5.staticflickr.com",
            },
            {
                protocol: "https",
                hostname: "farm6.staticflickr.com",
            },
        ],
    },
};

export default nextConfig;
