/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn4.iconfinder.com",
      },
    ],
  },
};


export default nextConfig;
