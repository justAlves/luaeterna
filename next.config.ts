import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "widgets.astronomyapi.com",
        port: '',
        pathname: "/moon-phase/generated/*",
      },
      {
        protocol: "https",
        hostname: "tieafcjteebgebgmknsi.supabase.co",
        port: '',
        pathname: "/storage/v1/object/public/uploads//*",
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};

export default nextConfig;
