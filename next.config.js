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
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['pt-BR'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'pt-BR',
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
        },
        {
          source: '/vagas',
          destination: '/jobs-list',
        },
      ];
    },
  })
);
