if ("serviceWorker" in navigator) {
	window.addEventListener("load", async () => {
		try {
			// Register the service worker
			const registration = await navigator.serviceWorker.register(
				"/sw.js"
			);
			console.log("Service worker registered:", registration);
		} catch (error) {
			console.error("Failed to register service worker:", error);
		}
	});
} else {
	console.log("Service workers are not supported in this browser");
}
