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
  }
};

export default nextConfig;
