/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
  crossOrigin: "anonymous",
};

export default nextConfig;
