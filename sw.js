const CACHE_NAME = 'HideandSeek-cache-v1';
const FILES_TO_CACHE = [
  './index.html',
  './manifest.json',
  './logo.png',
  './background.png',
  './Cards/1.png', './Cards/2.png', './Cards/3.png', './Cards/4.png', './Cards/5.png', './Cards/6.png', './Cards/7.png', './Cards/8.png', './Cards/9.png',
  './Cards/10.png', './Cards/11.png', './Cards/12.png', './Cards/13.png', './Cards/14.png', './Cards/15.png', './Cards/16.png', './Cards/17.png', './Cards/18.png',
  './Cards/19.png', './Cards/20.png', './Cards/21.png','./Cards/22.png','./Cards/23.png','./Cards/24.png','./Cards/25.png','./Cards/26.png','./Cards/27.png',
  './Cards/28.png',
  './horari.png',
  './punts.png'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((resp) => resp || fetch(evt.request))
  );
});
