// Register service worker to control making site work offline
//2
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/insetos/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}