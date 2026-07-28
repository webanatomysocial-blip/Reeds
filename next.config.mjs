/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
 output: "export",
  experimental: {
    // Prevent Turbopack from splitting global CSS (e.g. index.css) into
    // partial per-route chunks — with the default `true`, some global
    // classes were being dropped entirely on routes like /about.
    cssChunking: "strict",
  },
};

export default nextConfig;
