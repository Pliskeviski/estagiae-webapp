const withImages = require('next-images');
const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
module.exports = withImages(
  withFonts({
    projectRoot: __dirname,
    reactStrictMode: true,
    devIndicators: {
      autoPrerender: false,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: [
        'media-exp1.licdn.com',
        'estagiae-storage.sfo3.cdn.digitaloceanspaces.com',
      ],
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `${process.env.API_URL}/:path*`,
        },
        {
          source: '/vagas',
          destination: '/jobs-list',
        },
      ];
    },
  })
);
