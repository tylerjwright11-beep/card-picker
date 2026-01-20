self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("card-picker").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js"
      ]);
    })
  );
});
