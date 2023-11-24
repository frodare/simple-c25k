/* eslint-disable */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  ({ request }) => {
    // return true;
    return request.destination === 'image' || request.destination === 'audio';
  },
  // new workbox.strategies.CacheFirst()
  new workbox.strategies.NetworkFirst()
);
