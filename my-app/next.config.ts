import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/admin/login",
        destination: "/login",
        permanent: false,
      },
      {
        source: "/admin/auth/login",
        destination: "/login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
