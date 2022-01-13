'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b2b565f7763316835a40255bb4ec07b5",
"index.html": "562d6251f8e89f8747ce10c3a9334db9",
"/": "562d6251f8e89f8747ce10c3a9334db9",
"main.dart.js": "1f7536b4141fff0ef4ecb8e5fddc4d03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a56cce7e6bbd910f7c1f592abb4dbe33",
".git/config": "6f73107719c60904a65065f06c27087e",
".git/objects/6f/cbedfd21e1af0c3fee609be2ceeccfac943872": "694550e39751c5a50d563cdddaf7b194",
".git/objects/9e/18b5892a8eb62455a722a963d296332b47810b": "cffe4b888e2157ac6d292c23fe72d25a",
".git/objects/9e/af38b1398fab066821dd21081ca30aef2d6cc1": "427bc13b97bbb622dc1454022de3e70f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/56/959770561fd8f75c636753e36dc181c712437e": "6259182060bad737a0b8b2f0e1b8e3ba",
".git/objects/0e/9a8176c5f4a67aca40571be2755a2b17d1d52d": "53c5b20e82bbc3efa7d361272c144add",
".git/objects/34/b018b160c58e5887e2609f2fc8495bf8d10162": "6d105fe81a5aea3dea60f585f6e69ec4",
".git/objects/05/febfded0f92ac3d7651c48577d49d251e63e42": "6d6f4f0b8160436002df09209c2f4ac9",
".git/objects/02/69eb33a783ce27f329e811e0b9a9ad888e7774": "b1135ddf219c113641ba4219a08d2941",
".git/objects/a3/7371df9da1fe59fa5b1fce8877e38d1b465c02": "697e3c20108d3e87ae587fabfca0e1c5",
".git/objects/d0/0ec0001b09fa9b28d0e92478633e8155d41441": "ac24cbc6126d078ca6e9ac5a2f964903",
".git/objects/df/d4f6626b1045270b4cee325b8455c342c52d13": "bfa2df4e02ae33206558879960ceabf3",
".git/objects/b4/28ac22de39f9285a78e7f34c674c050837e429": "e4d4a35c3a72f2881d7cce633f4f1c87",
".git/objects/d6/d4e4c4f4ce7d133da4504382c2a95e163bf661": "d3c21fe2864021303bbd28cd0647d1eb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/656888f72fd97f9a0c4816983a2c5958b80f16": "d6fa471d887da7eaf8487a14ccba9f27",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c9/fbf0f9586665ed08cd6e5b87c84f11ac2c18a4": "5f0c608732df9fc05a6a1a365ce796e0",
".git/objects/f5/5c4c34200d34c9f4835a91e58533a186dc5a5d": "2dfe2797f45f978e09562dd9ece999af",
".git/objects/cf/e6cb9c3319d97d56c6a4df8b78f8e39d839a87": "a7a2a04847628e5ba21e365012189a6b",
".git/objects/e4/e7848b28e503e58048fc3b8e91272fc819b1b3": "5b9150667fc7246fbf1432cf38b5fc0b",
".git/objects/fe/3ad5dbad2c867d88e8546301ddf900e038b7f4": "910a4d24ac2e016280e4dee10dc3fadd",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/fe/61d8f1f61586f3b5d4fc24bdfc42ca5f6fb93d": "5bbd514b600845ac87e03ba862cb4231",
".git/objects/c8/c12e2e5e0f6d858d71a6f192c639a3b0e43c5e": "3bb27c64c986fd50f05da0c35febc611",
".git/objects/fb/731b4fd4d4926a9005fc2dc468bc2eb2ed4756": "d14ca7743ad86d224ab3119ff7e30262",
".git/objects/27/857d10a18818c8c23072ba5b730ba2cce6c2cf": "e5ba5854ea8b95c992c86bbfddfe7cb9",
".git/objects/16/8363317bd6d58ed20d096ffb9ae755c217b5c5": "34fbdb0da78cc5766fb9f3f68d4f9dde",
".git/objects/1f/0720bf4f2514d1b0eef096f93394444781b86f": "deccdbc428e44f8d788b3b6df3a72b6f",
".git/objects/28/5de253e024f9162f99dfa9583fe04be4ee4655": "76e3f2f06fee4e1abbbc8bc2ec43a96a",
".git/objects/8a/fcc4c5ee0ef2c901c36ed488549b8b49cf6b9b": "b4725c92288bfb332b28977e1a65801b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/8d750889d509fb3cbfb1544357cedf4bc32f36": "5dc9fa1d4517a3067c80025372d7cb6f",
".git/objects/86/d7b6574d2b10163805dc649f4b75037b5b5838": "2e88db9cc1e879947e31d9a33ee552c1",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/43/0b506cd1e4d15a2d0be60e3183022c384956c9": "0b746d612d808c3a08de61906dfffb9a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/3f/fc2e16daa6de63f797d964443c751f94edc29e": "6fbd1d37d3ddc6a7965e90d5293232ef",
".git/objects/30/9a55ba2c18b58438bb312af977e73635884952": "b7379b4c8228cd52a8160d0c63df5318",
".git/objects/5e/08217898409b9ab1b85b8560f2feabe23467f3": "2276df9de25c78b5e3113cd291de0f48",
".git/objects/6d/b63227e55a74db443d0d62afa109f44e85a710": "c6145c48413ab1c0fb3a69bb5654de16",
".git/objects/01/04b1c8aa29d8cac35f726a10df4d240383fdaf": "6a919291936d7310253312d8e6c318d1",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/63/3105a7a773b7943d87e2919b50383888bacde5": "1f079968721ac340b6409f12e1e18ba8",
".git/objects/64/ef84c145cf08f0aa62e6d7c0bfb1f3a4793da9": "7539ad00be877f89cb3f0d65fa8b4184",
".git/objects/d3/6a3702817e807a33be0a8f9e92b0dce06d5d9d": "ceb921f4cc7627ce103ed2378c4650ef",
".git/objects/b8/22d5c227f0e47be17e4a884dc3264ecaa1a1af": "0f51305f17a93550368943ec83f086bb",
".git/objects/b8/fd501f4d181b5704539025499854e3f338d048": "ca8ac4a15f153cfad42b46622b8f8168",
".git/objects/b1/b1a6581c4438741014db8db2ef20f3cd24bf1b": "3ac4c8e09dcca9ebca1de710ddebef8f",
".git/objects/b6/267fce1350efdef5e3ad4e80a9932abf766562": "22e4f1cf66d17fb04a43c22f4f1b00f1",
".git/objects/b6/7359f07bfdfae23c4ae2f081811219e3556bfb": "ab024443775012f0f030218c50cb7d3b",
".git/objects/d5/7604e44b306b9be84408718da3b4a4c7fd275b": "9f9cc4b045e7bd9645c7365632c7caab",
".git/objects/d2/8d4e1fcf1da419ab0dce1b1803d90c999f7fb4": "c1ce3084f33cdd0a4ba6af285eb75309",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/260c56238047c425df068e9c620e3d6527790f": "2d35537bc4f306d70085c8d3848adeaa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/01f9c0aad42aeb8a9f4f415b659e41612eefef": "c1b3a6e7bb813013a66553ccc2fece2c",
".git/objects/c5/e96cc687690e74a589ad6bd5476062ac99657b": "84c90811f1e5e269c24c2dfd0cc4d4d0",
".git/objects/c5/b1f8be9b4b8a8d828becff963c4713dd38b925": "1ee730d9f50fb6c204705267118b14bc",
".git/objects/c2/cc5e936361302119b7429d00a856aec7b17866": "91dfe5955342df1c6bd9de395203d12e",
".git/objects/cb/aa6ec6dc4e2f4681ce0236dfa7fd3146fa8ca4": "519d842fd153f6fa93c44aa584fcb297",
".git/objects/e0/002c4ad1f4a9ebd95a7b781accf292a2cfb6a7": "d22a997d50895860e46edce4e01adc73",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/ade01f4ebb22070fc1d98e7cc1410decd14c7f": "bbf110ae85e8b117f264d3644b4ed37c",
".git/objects/70/2fd6791d5d731682a574914fc278c4764f8da2": "6cb2dc9341951f8e1a17ee91fee3cad2",
".git/objects/4f/047db9a0e2df65099bbd7173951f3c80b7129e": "dd215cce10edebcd47a1554f1b98cd31",
".git/objects/8d/ae39201d0a41faaa9cccbba0eb23cb1b246796": "377034ba38a50cb61ffe7fa87945c8ff",
".git/objects/40/b203082895ff304978af0f3527639f90c2a29b": "09e1b37e78d2bc006acbd9d8cee1b8a0",
".git/objects/2b/710aa305c9ba7fb319dcbb012c64e910426c77": "330a32d7c094b0a21adcfb49f3f581b4",
".git/objects/7a/0b13f483a3a2c54bfc527a39772993ffe07842": "fb3e5e4f88fc9f6de24b3fb415347ca1",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/8e/a929464899b0e38b599f1a96a3ae2833a2134c": "c1362e3ccb85e2f911a27f2c9aae7693",
".git/objects/22/a4fb60d61f9df08be8d41f35bbda968103743f": "80e37514e3279501eac7319d860b8443",
".git/objects/22/7b354f0484206e2c19a9a28a10c8bcd140a3e0": "63b6636ee989448c4cf5d8625117c438",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "47ce62195bf2c0e90fdbfd2c38fadd16",
".git/logs/refs/heads/main": "6dc12431e3c35088b899429e465ecb48",
".git/logs/refs/remotes/origin/main": "916455e3f2c2f28bcb81f79dfe39cbb5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "39beeced747fcae80159d0bc3c10e78a",
".git/refs/remotes/origin/main": "39beeced747fcae80159d0bc3c10e78a",
".git/index": "f9f678a158ad3f6be47f89dadafbc402",
".git/COMMIT_EDITMSG": "901001e2fe2af9329484ec5743c8f9de",
".git/FETCH_HEAD": "d2533ff5c52835b4265c3591d50c5e5c",
"assets/AssetManifest.json": "6e6c087f6e210488d082ab1aa3002fce",
"assets/NOTICES": "e23dc97c67298ca260af12991adcd012",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "cadfcf986f26d830521e9a63350f4dbd",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/lib/assets/logo.png": "014e47d72c89a1810694dab3580a9fff",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
