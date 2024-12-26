
const nextConfig = {
  typescript : {
    ignoreBuildErrors : true
  },
  eslint :{
    ignoreDuringBuilds: true
  },
  experimental: {
    after: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;

