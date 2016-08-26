/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*--------------------------------------------------

---------------------------------------------------*/
var CACHE_NAME = 'app-v1';
var CACHE_FILES = [
    'index.html',
    'images/icons/icon-152x152.png',
    'js/app.js'
];

/*--------------------------------------------------
Install service worker
---------------------------------------------------*/
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(CACHE_FILES);
        }).then(function() {
           return self.skipWaiting();
       })
    );
});

/*--------------------------------------------------

---------------------------------------------------*/
self.addEventListener('activate', function (event) {
    //console.log('Activated', event);
    //console.log('Activated');
    //event.waitUntil(self.clients.claim());
    return self.clients.claim();
});
/*--------------------------------------------------

---------------------------------------------------*/

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
        if (response) {return response;}
        return fetch(event.request);
      }
    )
    //new Response("Hello")
  );
});



