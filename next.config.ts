import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    // Local media uses ?v= cache-busting query strings, so allow them.
    localPatterns: [{ pathname: "/media/**" }],
  },
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/projects/silent-bones",
        destination: "/books/silent-bones/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
