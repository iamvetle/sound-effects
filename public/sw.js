// service-worker.js

// Optional: Set the version of your service worker
const CACHE_VERSION = "v1";

// Optional: Define the cache name
const CACHE_NAME = `sound-effects-app-cache-${CACHE_VERSION}`;

// Optional: List of assets to cache
const assets = ["manifest.json", "sw.js"];

// Installation event: Cache assets
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("Cachine shell assets");
			cache.addAll(assets);
		})
	);
});

// Activation event: Clean up old caches
self.addEventListener("activate", (event) => {
	console.log("Service worker activated");
	event.waitUntil(
		caches.keys().then((keys) => {
			console.log(keys);
			return Promise.all(
				keys.map((key) => {
					if (key !== CACHE_NAME) {
						return caches.delete(key);
					}
				})
			);
		})
	);
});

// Fetch event: Serve cached assets
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	);
});
