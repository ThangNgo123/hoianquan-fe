import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["d13e9bff825cyt.cloudfront.net"],
  },
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
