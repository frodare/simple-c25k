/* eslint-disable */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  ({ request }) => {
    return request.destination === 'image' || request.destination === 'audio';
  },
  new workbox.strategies.CacheFirst()
);
