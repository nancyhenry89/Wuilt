"use strict";var precacheConfig=[["./index.html","a406342ec726cadcc7ec551fc32a2cb3"],["./static/css/main.46414905.css","a9dc00fe008658e279b103bfea471489"],["./static/js/main.8babd7b6.js","06cc6decaec9489ad40c56595b572801"],["./static/media/logo-color.e814f916.png","e814f91600f29c3f0b5bb8b4daa9c84f"],["./static/media/logo.6a605f5d.png","6a605f5d3e9d36c50fdb30525d320ab4"],["./static/media/p1.33720289.png","3372028948b3e7b391336df0bfca1d0b"],["./static/media/p2.d49b3ec9.png","d49b3ec9e3d7ba48d26358470b79f1c6"],["./static/media/p3.4b7d9769.png","4b7d9769532eaa9fbaf3ef3ac4902f88"],["./static/media/p4.5f393c46.png","5f393c4688ce1fe555d1aef7ae38f91c"],["./static/media/p5.848b6901.png","848b6901f2c403c035c69a0e8e936115"],["./static/media/p6.b252936b.png","b252936b81741c90699fd60af1dc1f4a"],["./static/media/p7.168275d4.png","168275d41f46172dab67476ca21ef6b9"],["./static/media/sec1.78c015b3.svg","78c015b3bfd9290fc5e09c56dc1d9e3e"],["./static/media/sec2.4eba08d5.svg","4eba08d56f3b0aded2b34664102dcd42"],["./static/media/sec3.db7ddd6d.svg","db7ddd6dd0430ed82cd3266411a07624"],["./static/media/sec4.96456b4e.svg","96456b4ea2b63d9332dcff72d6b6ee19"],["./static/media/sec5.3a96afdb.svg","3a96afdb0422e3e294112e5b5e8c12f4"],["./static/media/strip1.6a915b80.png","6a915b80c7c405cd9167b4e7aac9b4bd"],["./static/media/strip2.66e17357.png","66e17357b8557472e0a98bc129d03208"],["./static/media/strip3.db74aaf2.png","db74aaf288643235b17403b2518ec5f7"],["./static/media/strip4.c0e62452.png","c0e62452a081fd61846f422fbbff9410"],["./static/media/what1.0eaae4cf.png","0eaae4cf97f576ce90770509f4cc2f35"],["./static/media/what2.442221a1.png","442221a121e3f8d22f01e4d3d0b95157"],["./static/media/what3.adb23c88.png","adb23c889975c5eda0031f98d60fb086"],["./static/media/what4.f19947d6.png","f19947d6bb3b3b37cab4a3dbde8b3f53"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});