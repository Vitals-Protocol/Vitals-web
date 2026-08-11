/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fully static export — deployable to Cloudflare Workers Static Assets / Pages.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
