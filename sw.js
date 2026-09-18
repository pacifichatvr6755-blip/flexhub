// Minimal Service Worker required for PWA installation functionality
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Let the browser fetch pages normally from GitHub Pages
  e.respondWith(fetch(e.request));
});
