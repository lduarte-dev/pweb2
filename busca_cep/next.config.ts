import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  reactCompiler: true,
  images: {
    unoptimized: true, 
  },
  basePath:'/pweb2/busca_cep',
};

export default nextConfig;