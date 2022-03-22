/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  assetPrefix: '.',
  basePath: '/pomodoro',
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});
