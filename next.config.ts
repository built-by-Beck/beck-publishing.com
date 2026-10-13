import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every page is static, so export plain files to out/ and serve them from
  // free static hosting (Firebase Hosting) instead of paid App Hosting.
  output: "export",
  trailingSlash: true,
  images: {
    // Image optimization needs a server; static export serves originals.
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  // redirects() is unsupported in static export. /projects/silent-bones is
  // handled by firebase.json plus the client redirect page.
};

export default nextConfig;
