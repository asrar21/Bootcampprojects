var CACHE_NAME = 'my-site-cache-v2';
var datacachename;
var urlsToCache = [
  '/',
  '/index.html',
  '/index.js',
  '/sw.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('[Serviceworker] Fetch',event.request.url);
  if(event.request.url.startsWith("https://api.github.com/")){
    caches.open(datacachename).then(function(cache){
      return fetch(event.request).then(function(response){
        cache.put(event.request,response.clone());
        return response;
      })
    })
  }
  else{
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          return response||fecth(event.request);
        })
      );
    }
  });
        
          // Cache hit - return response
        


self.addEventListener('activate', function(event) {

    var cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
    caches.keys().then(function(cacheNames) {
        return Promise.all(
        cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
            }
        })
        );
    })
    );
});