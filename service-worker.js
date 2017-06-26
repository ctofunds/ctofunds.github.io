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

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/assets/avatars/icon-cy.jpg","9240f25d85f5ecbbdcafc7c065587f2c"],["/assets/avatars/icon-gsh.jpg","0f1be62f0d1e227120cef24f398a5ea8"],["/assets/avatars/icon-hj.jpg","510bb2d17ecad245b21e032f46a8bbf6"],["/assets/avatars/icon-hx.jpg","f8b1f82dc9cb53774586a331f5d52341"],["/assets/avatars/icon-hx.png","c8f07b0ec953ee3c121a61d012eec30d"],["/assets/avatars/icon-lj.jpg","74a2a1f954d28e664c8f58e6ff73a0fa"],["/assets/avatars/icon-pxl.jpg","5a99c0bbbe0b10a403c7d4d76c1c4f4a"],["/assets/avatars/icon-yym.jpg","74b316cb31242c66c4c51f291eb62cea"],["/assets/clients/esh.png","1530bf918a50183f6574f23799aa1a49"],["/assets/clients/ftxz.png","5013db01f264c322c37914d625914143"],["/assets/clients/goodtalk.png","fac2b5af7de0136efc4289eb0824f607"],["/assets/clients/gtb.png","cdb921433071928809227c1845bcfa25"],["/assets/clients/hitales.png","f5715fb2eab445068fdfde32a9d285d1"],["/assets/clients/ibaby.png","111590db93d7658ada09b84a18f83ae2"],["/assets/clients/lbyc.png","b3c5a0e2cd7df37ddcf15b91586a6574"],["/assets/clients/lxe.png","b0b7e0d7bc134567019bf3fce17b8cd6"],["/assets/clients/myzd.png","f08df781fac9413d73c13b69d757fa7a"],["/assets/clients/tbs.png","ef2f83a9130cfcea65f432b7d41505de"],["/assets/clients/xaap.png","89fe086dddeaf61a56ae856146b20124"],["/assets/clients/xiaozao.png","678439ce47e66516e7d29b47c0c00900"],["/assets/clients/xmyd.png","6788b979b082c88fb14b37c4c14fbb03"],["/assets/clients/ybdc.png","297fd531d2ed294a4419f73451015809"],["/assets/clients/ydd.png","110df364c8ef25833afd509ee49fe578"],["/assets/clients/yky.png","1e3bcbaf1dc66222231abe78a11e3f85"],["/assets/clients/yupaopao.png","12a17f2b4fd92c10583b8e92e49a4e99"],["/assets/dd-clients.jpg","734eb9291c2285bf07681baea1aee7ce"],["/assets/funds.jpg","1da048d1d1f45ad81716789cce86c816"],["/assets/index.css","db62fb891485bf2a2eb4c35383b104e2"],["/assets/index.js","4887f10d980a6e35a2a970036aadf5da"],["/assets/index.src.css","1ee5882c5d746c2debfcead095a7674f"],["/assets/mbg-light.jpg","619b17a8a445e1cb8a5a18c1ef74f492"],["/assets/mbg.jpg","3c37539e82e647049fc3fe1e6fe7663a"],["/assets/mountains-light.jpg","a89775980367a6fe2bc012d6ad7941fe"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

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
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
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

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
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
          return cache.match(urlsToCacheKeys.get(url));
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







