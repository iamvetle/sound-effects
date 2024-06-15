// service-worker.js

// Optional: Set the version of your service worker
const CACHE_VERSION = "v1";

// Optional: Define the cache name
const CACHE_NAME = `sound-effects-app-cache-${CACHE_VERSION}`;

// Optional: List of assets to cache
const assets = [
	"ah-smith.mp3",
	"among-us-sound.mp3",
	"app.js",
	"applause-clapping.mp3",
	"audience-impressed-laugh.mp3",
	"bass-drop.mp3",
	"fart.mp3",
	"favicon.ico",
	"filelist.txt",
	"huh-cat.mp3",
	"icons.json",
	"manifest.json",
	"oh-my-god-bruh-oh-hell-naw-man-wtf.mp3",
	"oh-no-fart.mp3",
	"samsung-notification-sound.mp3",
	"sitcom-audience-laugh.mp3",
	"sw.js",
	"vine-boom.mp3",
	"wet-fart.mp3",
	"what-up-guys.mp3",
	"aaa.mp3",
	"androidandroid-launchericon-144-144.png",
	"androidandroid-launchericon-192-192.png",
	"androidandroid-launchericon-48-48.png",
	"androidandroid-launchericon-512-512.png",
	"androidandroid-launchericon-72-72.png",
	"androidandroid-launchericon-96-96.png",
	"ios\\100.png",
	"ios\\1024.png",
	"ios\\114.png",
	"ios\\120.png",
	"ios\\128.png",
	"ios\\144.png",
	"ios\\152.png",
	"ios\\16.png",
	"ios\\167.png",
	"ios\\180.png",
	"ios\\192.png",
	"ios\\20.png",
	"ios\\256.png",
	"ios\\29.png",
	"ios\\32.png",
	"ios\\40.png",
	"ios\\50.png",
	"ios\\512.png",
	"ios\\57.png",
	"ios\\58.png",
	"ios\\60.png",
	"ios\\64.png",
	"ios\\72.png",
	"ios\\76.png",
	"ios80.png",
	"ios87.png",
	"windows11LargeTile.scale-100.png",
	"windows11LargeTile.scale-125.png",
	"windows11LargeTile.scale-150.png",
	"windows11LargeTile.scale-200.png",
	"windows11LargeTile.scale-400.png",
	"windows11SmallTile.scale-100.png",
	"windows11SmallTile.scale-125.png",
	"windows11SmallTile.scale-150.png",
	"windows11SmallTile.scale-200.png",
	"windows11SmallTile.scale-400.png",
	"windows11SplashScreen.scale-100.png",
	"windows11SplashScreen.scale-125.png",
	"windows11SplashScreen.scale-150.png",
	"windows11SplashScreen.scale-200.png",
	"windows11SplashScreen.scale-400.png",
	"windows11Square150x150Logo.scale-100.png",
	"windows11Square150x150Logo.scale-125.png",
	"windows11Square150x150Logo.scale-150.png",
	"windows11Square150x150Logo.scale-200.png",
	"windows11Square150x150Logo.scale-400.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-16.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-20.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-24.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-256.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-30.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-32.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-36.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-40.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-44.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-48.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-60.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-64.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-72.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-80.png",
	"windows11Square44x44Logo.altform-lightunplated_targetsize-96.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-16.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-20.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-24.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-256.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-30.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-32.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-36.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-40.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-44.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-48.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-60.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-64.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-72.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-80.png",
	"windows11Square44x44Logo.altform-unplated_targetsize-96.png",
	"windows11Square44x44Logo.scale-100.png",
	"windows11Square44x44Logo.scale-125.png",
	"windows11Square44x44Logo.scale-150.png",
	"windows11Square44x44Logo.scale-200.png",
	"windows11Square44x44Logo.scale-400.png",
	"windows11Square44x44Logo.targetsize-16.png",
	"windows11Square44x44Logo.targetsize-20.png",
	"windows11Square44x44Logo.targetsize-24.png",
	"windows11Square44x44Logo.targetsize-256.png",
	"windows11Square44x44Logo.targetsize-30.png",
	"windows11Square44x44Logo.targetsize-32.png",
];

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
