// Service Worker المحرك المسؤول عن تفعيل ميزة التثبيت كتطبيق
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // ترك ملف الـ fetch فارغاً ليقوم المتصفح بجلب البيانات من الإنترنت مباشرة
});
