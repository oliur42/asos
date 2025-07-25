/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn4.iconfinder.com",
      },
      {
        protocol: "https",
        hostname: "content.asos-media.com",
      },
        {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      }
    ],
  },
};


export default nextConfig;
