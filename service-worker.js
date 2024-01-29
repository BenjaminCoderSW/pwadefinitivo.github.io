// service-worker.js

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('mi-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/estiloIndex.css',
                '/css/estiloMenu.css',
                '/img/appinicio.jpg',
                '/js/ejemplo1.js',
                '/js/listaVideos.js',
                '/vendor/bootstrap-5.2.3-dist/css/bootstrap.min.css',
                '/vendor/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js',
                '/paginas/inicio.html',
                '/paginas/listaVideos.html',
                '/paginas/ejemplo1.html'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
