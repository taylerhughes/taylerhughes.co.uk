import { withContentlayer } from "next-contentlayer";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:"images.unsplash.com"
      }
    ],
  },
  output: "standalone",
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    // Important: return the modified config
    // https://nextjs.org/docs/messages/undefined-webpack-config
    return config;
  },
};

export default bundleAnalyzer(withContentlayer(nextConfig));
