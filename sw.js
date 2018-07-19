// teste 12
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('insetos').then(function(cache) {
     return cache.addAll([
       '/insetos/',
       '/insetos/index.html',
       '/insetos/index.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

this.addEventListener("activate", event => {
  var cacheWhitelist = ["insetos"];

  event.waitUntil(
    caches.keys().then(
      keyList => {
        return Promise.all(
          keyList.map( key => {
            if (cacheWhitelist.indexOf(key) === -1) {
              return caches.delete(key);
            }
          })
        );
     })
  );
});