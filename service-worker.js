self.addEventListener('install', (event) => {
    // Aquí puedes precachear activos, por ejemplo:
    event.waitUntil(
        caches.open('mi-cache').then((cache) => {
            return cache.addAll([
                '/', // Cachear la página principal
                'background.png', // Cachear otros recursos necesarios
                // Añade más archivos que necesites
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Si hay una respuesta en cache, devuélvela; si no, busca en la red
            return response || fetch(event.request);
        })
    );
});
