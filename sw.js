if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const r=e=>n(e,i),o={module:{uri:i},exports:a,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),a)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/74-bc2b50012704cd1f.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/chunks/a9a7754c-76b06c1c829f45bb.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/chunks/cb1608f2-b7f67cd3f3842f05.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/chunks/main-b82de7430d8403b8.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/chunks/pages/_app-910b5d7b7a3a7cc5.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/chunks/pages/index-d90f67c9ccc085ba.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/css/37cb278a61770a00.css",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/css/c8ea7e47f2c654c1.css",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/sCbxyWYdBy_scf9AuxzXI/_buildManifest.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/sCbxyWYdBy_scf9AuxzXI/_middlewareManifest.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/_next/static/sCbxyWYdBy_scf9AuxzXI/_ssgManifest.js",revision:"sCbxyWYdBy_scf9AuxzXI"},{url:"/favicon.ico",revision:"8802bbec8d4697c7aa8ad1acec68e1a2"},{url:"/icon-192x192.png",revision:"af909bd2fc82d71e57a9f12d74204253"},{url:"/icon-256x256.png",revision:"e1719647609b1d2361546a3d9db3a574"},{url:"/icon-384x384.png",revision:"f4199971f858d4fce0c4a0081e5936c8"},{url:"/icon-512x512.png",revision:"2c27fc9975853d5c7774b4a671332a0c"},{url:"/manifest.json",revision:"b462d1c46c263e8f82e87dc8f02d47dc"},{url:"/sounds/alarm-clock-01.mp3",revision:"04c86b8ad8b81f33cd363ee8d7e24ae9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
