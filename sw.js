const cacheName = 'JidokaAr';

const cachedFiles = [
    '/assets/images/card-back.png',
    '/assets/images/card-front.png',
    '/assets/images/Jidoka192VrLogo.png',
    '/assets/images/Jidoka512VrLogo.png',
    '/assets/images/marble-texture.png',
    '/assets/images/profile.png',
    '/assets/models/beer.gltf',
    '/assets/models/logo.gltf',
	'assets/scripts/local.1.2.0-aframe.min.js',
	'assets/scripts/local.mind-ar-js@1.1.5-dist-mindar-image-aframe.prod.js',
	'assets/scripts/local.mind-ar-js@1.1.5-mindar-image.prod.js',
    '/assets/targets/both-targets.mind',
    '/assets/targets/card-back-targets.mind',
    '/assets/targets/card-front-targets.mind',
	'/assets/rick-roll.mp4',
	'/index.html',
	'/index.js',
	'/styles.css',
	'/manifest.webmanifest',
];

self.addEventListener( 'install', function (event) {
    event.waitUntil(
		caches.open( cacheName )
			.then( cache => {
				return cache.addAll( cachedFiles );
			} )
			.then( () => self.skipWaiting() )
			.catch( err => console.warn( err ) )
	);
})

self.addEventListener( 'activate', function (event) {
    event.waitUntil(
		caches.keys()
			.then( keyList => {
				return Promise.all( keyList.map( key => {
					if ( key !== cacheName ) {
						return caches.delete( key );
					}
				} ) )

			} )
	);

	return self.clients.claim();
})

self.addEventListener( 'fetch', function (event) {
    event.respondWith(
        caches.match( event.request )
			.then( response => {
				return response || fetch( event.request )
			} )
	);
})
