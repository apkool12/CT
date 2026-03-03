import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Socket 서버는 별도 origin이므로 CORS는 Socket 서버에서 처리
};

export default nextConfig;
