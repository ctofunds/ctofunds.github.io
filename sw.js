/* eslint-disable no-undef */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js')

const expiration = new workbox.expiration.Plugin({
  maxAgeSeconds: 30 * 24 * 60 * 60
})

workbox.routing.registerRoute(
  /.*\.(?:js|css|png|jpg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'hi.static',
    plugins: [ expiration ]
  })
)

workbox.routing.registerRoute(
  /\/$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'hi.page',
    plugins: [ expiration ]
  })
)
