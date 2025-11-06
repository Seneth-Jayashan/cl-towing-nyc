/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // this enables static export
  images: { unoptimized: true }, // disable image optimization
  distDir: 'out',
}

module.exports = nextConfig
