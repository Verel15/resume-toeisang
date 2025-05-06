import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    i18n: {
        locales: ['en', 'th'],
        defaultLocale: 'en',
        localeDetection: false,
      },
};

export default nextConfig;
