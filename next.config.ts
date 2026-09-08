import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // 1. Disable Next.js's automatic internal 308 normalization loop
  //trailingSlash: false, 
  skipTrailingSlashRedirect: true,
  turbopack: {},
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000, // Check for file changes every second
        aggregateTimeout: 300, // Delay rebuild slightly for stability
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'goa.paruluniversity.ac.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.paruluniversity.ac.in',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      ];
  },
  async redirects() {
    return [
      // NEW RULE: Intercepts trailing slashes and forces a 301 instead of a 308
      {
        source: '/:path+/', 
        destination: '/:path+', 
        statusCode: 301, 
      },
      {
        source: '/faculty-of-hotel-management',
        destination: '/faculty/hotel-management',
        statusCode: 301,
      },
      {
        source: '/faculty-of-physiotherapy',
        destination: '/faculty/physiotherapy',
        statusCode: 301,
      },
      {
        source: '/faculty-of-nursing',
        destination: '/faculty/nursing',
        statusCode: 301,
      },
      {
        source: '/faculty-of-pharmacy',
        destination: '/faculty/pharmacy',
        statusCode: 301,
      },
      {
        source: '/faculty-of-management-studies',
        destination: '/faculty/management',
        statusCode: 301,
      },
      {
        source: '/faculty/management-studies',
        destination: '/faculty/management',
        permanent: true,
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap_index.xml',
        permanent: true,
      },
      {
        source: '/about/vision-mission',
        destination: '/about#vision-mission',
        permanent: true,
      },
      {
        source: '/about/vision',
        destination: '/about#vision-mission',
        permanent: true,
      },
      {
        source: '/about/mission',
        destination: '/about#vision-mission',
        permanent: true,
      },
      {
        source: '/about/leadership',
        destination: '/about#leadership',
        permanent: true,
      },
      {
        source: '/about/accreditations-recognitions',
        destination: '/about#accreditations-recognitions',
        permanent: true,
      },
      {
        source: '/about/accreditations',
        destination: '/about#accreditations-recognitions',
        permanent: true,
      },
      {
        source: '/about/why-parul-university-goa',
        destination: '/about#who-we-are',
        permanent: true,
      },
      {
        source: '/about/who-we-are',
        destination: '/about#who-we-are',
        permanent: true,
      },
      {
        source: '/about/chancellors-message',
        destination: '/about#leadership',
        permanent: true,
      },
      {
        source: '/about/presidents-message',
        destination: '/about#leadership',
        permanent: true,
      },
      {
        source: '/about/vice-chancellor',
        destination: '/about#leadership',
        permanent: true,
      },
      {
        source: '/about/board-of-governors',
        destination: '/about#board-of-governors',
        permanent: true,
      },
      {
        source: '/study-abroad',
        destination: '/international/study-abroad',
        permanent: true,
      },
      {
        source: '/why-goa',
        destination: '/about#why-goa',
        permanent: true,
      },
      {
        source: '/about/why-goa',
        destination: '/about#why-goa',
        permanent: true,
      },
      {
        source: '/alumni',
        destination: '/placements#alumni',
        permanent: true,
      },
      {
        source: '/placements/alumni',
        destination: '/placements#alumni',
        permanent: true,
      },
      {
        source: '/stories',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/stories/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
