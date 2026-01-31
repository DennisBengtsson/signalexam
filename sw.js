const CACHE_NAME = 'ra-utbildning-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js',
    '/js/quiz.js',
    '/js/progress.js',
    '/js/data/chapters.js',
    '/js/data/questions.js',
    '/pages/test/prov.html',
    '/pages/test/ovning.html',
    '/pages/profil/statistik.html'
];

// Installera service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Hämta från cache, fallback till nätverk
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
