var CACHE = 'diary-v2';
var ASSETS = ['./', 'index.html', 'raciona.html', 'trenirovki.html', 'raciona.webmanifest', 'trenirovki.webmanifest',
  'raciona-192.png', 'raciona-512.png', 'trenirovki-192.png', 'trenirovki-512.png'];
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
/* Cached copy first, fresh copy fetched in the background for the next open. */
self.addEventListener('fetch', function(e){
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(caches.match(e.request, {ignoreSearch:true}).then(function(cached){
    var net = fetch(e.request).then(function(r){
      if (r && r.ok) { var copy = r.clone(); caches.open(CACHE).then(function(c){ c.put(e.request, copy); }); }
      return r;
    }).catch(function(){ return cached; });
    return cached || net;
  }));
});
