/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    reactStrictMode: true,
    experimental: {
      logging: true, // เพิ่มการแสดงข้อผิดพลาด
    },
    ignoreDuringBuilds: true, // ปิดการตรวจสอบ ESLint ระหว่าง build
  },
};

export default nextConfig;
