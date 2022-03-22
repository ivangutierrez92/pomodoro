/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  assetPrefix: '.',
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});
