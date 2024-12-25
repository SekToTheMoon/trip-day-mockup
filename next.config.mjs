/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ปิดการตรวจสอบ ESLint ระหว่าง build
  },
};

export default nextConfig;
