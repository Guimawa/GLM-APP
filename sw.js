
// Service Worker de base pour GLM Services

self.addEventListener('install', event => {
    console.log('✅ Service Worker installé');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('📦 Service Worker activé');
    return self.clients.claim();
});

self.addEventListener('fetch', event => {
    // Simple passthrough fetch handler
    event.respondWith(fetch(event.request));
});
