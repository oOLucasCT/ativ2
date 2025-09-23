self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-saudacao-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icon-192.png",
                "icon-512.png",
                "dia.jpeg",
                "madrugada.jpg"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});