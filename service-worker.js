/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/blog/public/2020/10/25/computer-science/SSH/week-1/index.html","22ac12bcfc69126b7d003857a667c53c"],["D:/blog/public/2020/10/25/computer-science/SSH/week-2/index.html","b79ca6f2c8984c2d40108aa304414abf"],["D:/blog/public/2020/10/27/computer-science/SSH/week-3/index.html","aae703f2f201f684eb8808db3717f0f6"],["D:/blog/public/2020/10/28/computer-science/SSH/week-4/index.html","c8d2db42d93a82fefc8f44b4c9baaec0"],["D:/blog/public/2020/10/28/computer-science/SSH/week-5/index.html","ea19abbc365e408afcc116e91c1f9d72"],["D:/blog/public/2020/11/04/computer-science/SSH/week-6/index.html","958cbbf068f2947eaf5598e043a59bde"],["D:/blog/public/2020/11/04/computer-science/SSH/week-7/index.html","4bf78119a11023ac7d73dc929786ed79"],["D:/blog/public/2020/11/04/computer-science/SSH/week-8/index.html","bc365175e04cc23dcc98abcc3eb0215e"],["D:/blog/public/2020/11/07/computer-science/SSH/week-9/index.html","6827fac7ccb97203bf9f6fa065953d37"],["D:/blog/public/2020/11/08/computer-science/Big-data/week-1/index.html","47cddff4657d7d200f97add7fb686e57"],["D:/blog/public/2020/11/11/computer-science/Big-data/week-2/index.html","6803a8db5ae08ec5c233d846d843b543"],["D:/blog/public/2020/11/11/computer-science/Big-data/week-3/index.html","0d8d7a0a7478438de48f6bb5d56bc720"],["D:/blog/public/2020/11/11/computer-science/Big-data/week-4/index.html","6fbe778b6b600a043194805b29fcee77"],["D:/blog/public/2020/11/11/computer-science/Big-data/week-5/index.html","ea55b70dac79b8b332dc8b065ec3f90d"],["D:/blog/public/2020/11/11/computer-science/Big-data/week-6/index.html","53840bedcd7de2639c7b40c652ea9fbf"],["D:/blog/public/2020/11/12/computer-science/Project-training/SQLserver/index.html","a4763456871062356b625b26c2284269"],["D:/blog/public/2020/11/17/computer-science/SSM/Day1/index.html","b78d22609c9b922af3fb3f7d9f43995f"],["D:/blog/public/2020/11/21/computer-science/SSH/week-10/index.html","80eaa23a2a0f19ea990fa2261b010029"],["D:/blog/public/404.html","a4c35d71805a8845d61b29e41f31b57f"],["D:/blog/public/about/index.html","fe40591eba1bea7fed5a6d16a2ef3a25"],["D:/blog/public/archives/2020/10/index.html","51868d83873440d3241fdc03d080a46e"],["D:/blog/public/archives/2020/11/index.html","e9f9a1aedafebe637b455b1355aea340"],["D:/blog/public/archives/2020/11/page/2/index.html","fe6dbb79516b08a1ff932084cc8cbab4"],["D:/blog/public/archives/2020/index.html","0f0f897ebdf697e00cf99cd69d87f907"],["D:/blog/public/archives/2020/page/2/index.html","a06320508eec85cb32a8c2b863115cf4"],["D:/blog/public/archives/index.html","08103b5a833efc18d8efe940efbbf46c"],["D:/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/categories/computer-science/Big-data/index.html","1abfa7eb8a95ec676ffd2e4e27538d9a"],["D:/blog/public/categories/computer-science/Project-training/index.html","f0af5af9760333ff2cd05b6d18fc18f1"],["D:/blog/public/categories/computer-science/SSH/index.html","e044279a7a4e44dc06c5888972a0cc46"],["D:/blog/public/categories/computer-science/SSM/index.html","40e2c7a6d145f2424f2e72449d11a141"],["D:/blog/public/categories/computer-science/index.html","1da09555546ea7663b0871537c5d8653"],["D:/blog/public/categories/computer-science/page/2/index.html","b687e62f31fe68ac8d34833ddb218a8d"],["D:/blog/public/categories/index.html","be7f6311fbcc1c1451faa12dda2164c7"],["D:/blog/public/computer-science/Big-data/cover.jpg","218e290dfca7b27a5767055566eb5e53"],["D:/blog/public/computer-science/Project-training/cover.jpg","bca5d9d4a534df4b92917562a038ce51"],["D:/blog/public/computer-science/SSH/cover.jpg","f9196af6f1d7d467a75ce240c3ef044f"],["D:/blog/public/computer-science/SSM/cover.jpg","73aea936e5ae9934b45fe6ec06cc596c"],["D:/blog/public/css/app.css","a1a73a0a0fd8cd24da9ceccdb9d12433"],["D:/blog/public/css/comment.css","550626174b09cbfa1b0fa0fb0e17ea98"],["D:/blog/public/css/mermaid.css","2f50aa131d04ca9305fd49a5d0f9f81e"],["D:/blog/public/friends/index.html","3301a6c6b794635ec9e17be1dd61bb19"],["D:/blog/public/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["D:/blog/public/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/blog/public/images/alipay.png","c10e3f5fc57b9e5f5a02fa359b1a4344"],["D:/blog/public/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["D:/blog/public/images/avatar.jpg","12bc8533f5f4d7a67d5b46168168c244"],["D:/blog/public/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["D:/blog/public/images/paypal.png","0986db629960e3333415b103fa7663be"],["D:/blog/public/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["D:/blog/public/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["D:/blog/public/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["D:/blog/public/images/wechatpay.png","bebbccf57da8d7c08b26e158bea62027"],["D:/blog/public/index.html","27ed34facc5bc542a21ff2aff5f1713a"],["D:/blog/public/js/MiniValine.min.js","0b50c73c29ab199512668d9049481429"],["D:/blog/public/js/app.js","256f17eab8153c5588cb7b2609e1927f"],["D:/blog/public/links/index.html","02a5c08dc33a23da37c459ce7d278b0b"],["D:/blog/public/page/2/index.html","6b16b6016950afee692b688c1ac81799"],["D:/blog/public/tags/HDFS/index.html","bf6b5753023bec35fe76c23f943b0144"],["D:/blog/public/tags/Hbase/index.html","cdf0ad2e88d85ec837b875b11faf40b8"],["D:/blog/public/tags/Hibernate/index.html","de288b4f613672bc83aa0b49dfd5accf"],["D:/blog/public/tags/MyBatis/index.html","63e8076c32159dd2f2c3cadb202a1268"],["D:/blog/public/tags/Oracle/index.html","6492a2cc91ead2386e742a36534c140d"],["D:/blog/public/tags/SQLServer/index.html","401380f0fc9852365d74c7c9b07cb6fa"],["D:/blog/public/tags/SSH/index.html","990ed9e52f93c72c062e1e107f67a027"],["D:/blog/public/tags/SSM/index.html","f5e60daa13c8e3eb93f3aaa581fd67d3"],["D:/blog/public/tags/Zookeeper/index.html","11994fbd334a1034520c9a22cdc9f2af"],["D:/blog/public/tags/hadoop3-1-0/index.html","6cc3d353c8477ae0ed653ff7d64f7194"],["D:/blog/public/tags/index.html","ac933d87800945d2b39a9b7d7c056ee4"],["D:/blog/public/tags/大数据/index.html","131b2414c379a8daeb9a28c839ce21d9"],["D:/blog/public/tags/学习笔记/index.html","c14ae2fc7063af2c66a97c33add70d2b"],["D:/blog/public/tags/学习笔记/page/2/index.html","4383146495bf1f356c3b9b98a4ecf34d"],["D:/blog/public/tags/教程/index.html","4f59d13bb4e9ec35ad82cfac74658842"],["D:/blog/public/tags/项目实训/index.html","3493418c67cbc448fa10d42da1a6db58"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







