import type { NextConfig } from "next";

const repo = "portfolio"; // nom EXACT du repo GitHub
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   basePath: isProd ? `/${repo}` : "",
//   assetPrefix: isProd ? `/${repo}/` : "",
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;