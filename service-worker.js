/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d720e731a77b984a3974b5dd84cbd23b"
  },
  {
    "url": "assets/css/0.styles.3e35db35.css",
    "revision": "c3d6a63808d944b6221f553cc38256f6"
  },
  {
    "url": "assets/img/content_ContentIdExistsException.e63aa91c.png",
    "revision": "e63aa91c265266ca7f6c5c7af5ff58a7"
  },
  {
    "url": "assets/img/content_RequiredFieldsMissingException.7b3c20e5.png",
    "revision": "7b3c20e5326c0240a564999c7943bd39"
  },
  {
    "url": "assets/img/delete_content_part1.6942da49.png",
    "revision": "6942da492299971635bdd1b6ab69af7d"
  },
  {
    "url": "assets/img/delete_content_part2.1fe44c63.png",
    "revision": "1fe44c6389197b40b998bf834c7262e3"
  },
  {
    "url": "assets/img/delete_user_part1.8293e1d0.png",
    "revision": "8293e1d0616a5c7273487c12f2a8e23a"
  },
  {
    "url": "assets/img/delete_user_part2.ef759d75.png",
    "revision": "ef759d7509d65711664d149a0d8785f8"
  },
  {
    "url": "assets/img/get_content_by_id.7f07ac3e.png",
    "revision": "7f07ac3e1816345b6cc8872d21f0e5e8"
  },
  {
    "url": "assets/img/get_content.2058744b.png",
    "revision": "2058744b8d776a071d280f684485f3ee"
  },
  {
    "url": "assets/img/get_user_by_id.a8ab37af.png",
    "revision": "a8ab37af9bcbd4e3456b83f65eb090c6"
  },
  {
    "url": "assets/img/get_user.783de999.png",
    "revision": "783de9999d55e884e5780d1936460c58"
  },
  {
    "url": "assets/img/patch_content.22c7a545.png",
    "revision": "22c7a545b844791440f858e0da07ec90"
  },
  {
    "url": "assets/img/patch_user.8c08481c.png",
    "revision": "8c08481c7b0a7b9b6826d7dba3fc2487"
  },
  {
    "url": "assets/img/post_content.7eb0f945.png",
    "revision": "7eb0f945ee4f99f5634334d3fc311ffc"
  },
  {
    "url": "assets/img/post_user.4e8759b3.png",
    "revision": "4e8759b3c8720af35a1c0174ef4696b0"
  },
  {
    "url": "assets/img/relational_schema.ce95178e.png",
    "revision": "ce95178e03036cd4d2d2ffe1a92aaba3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.a536f42d.png",
    "revision": "a536f42de3cfc689fbcbf64586601dbd"
  },
  {
    "url": "assets/img/user_AlreadyRegisteredException.d1ae0cab.png",
    "revision": "d1ae0cab4fdea43255dc9ca792b79241"
  },
  {
    "url": "assets/img/user_DataMissingException.0861053f.png",
    "revision": "0861053f23b401a7c364335c339aad5b"
  },
  {
    "url": "assets/js/1.fa0f9e95.js",
    "revision": "d3c746de68ab33679b247ef691d2f214"
  },
  {
    "url": "assets/js/10.a25c399d.js",
    "revision": "1436749cb9a4a1a48c1040f6deb1a30a"
  },
  {
    "url": "assets/js/13.b0e42ce0.js",
    "revision": "2fe0c28ed0d4463ac43da01194672599"
  },
  {
    "url": "assets/js/14.6f2774a3.js",
    "revision": "253e93307f17d07314d7d88a6146d024"
  },
  {
    "url": "assets/js/15.b05635fa.js",
    "revision": "a919500bf5d1cced825a63c498bfcb57"
  },
  {
    "url": "assets/js/16.60c318a5.js",
    "revision": "70e369bad22a9c0b63fc553218a95b9c"
  },
  {
    "url": "assets/js/17.1d784f80.js",
    "revision": "df469838023f4976ee8d4c8bff88acff"
  },
  {
    "url": "assets/js/18.dfcf19a0.js",
    "revision": "33b73a3420ad4c5e1b07f45f97d59d3c"
  },
  {
    "url": "assets/js/19.da6e89ab.js",
    "revision": "8c66ceb39e765ea06c5b32f88e172245"
  },
  {
    "url": "assets/js/2.02b935ee.js",
    "revision": "bce63c984b4dbe377920a00d3042e1aa"
  },
  {
    "url": "assets/js/20.32f6ef60.js",
    "revision": "46ee77b5474275acdca51b7aba023081"
  },
  {
    "url": "assets/js/21.3d4d6998.js",
    "revision": "f3e36cd49b873e145b3d58217f5ede51"
  },
  {
    "url": "assets/js/22.1ffa5051.js",
    "revision": "5e84dcf5bde07ddeadaa643ea7ac0db2"
  },
  {
    "url": "assets/js/23.5c8b8a66.js",
    "revision": "d33b8ced611e13454f516b5ad47862f9"
  },
  {
    "url": "assets/js/24.9fd27316.js",
    "revision": "2263bb935e02d0f753439c6ef878e53b"
  },
  {
    "url": "assets/js/25.57ca684d.js",
    "revision": "311af35267b01bb887ca9b9d1e17fdaf"
  },
  {
    "url": "assets/js/26.1c768af4.js",
    "revision": "83d3771eefb52dd9b5e63762fdf2df47"
  },
  {
    "url": "assets/js/27.02e857a3.js",
    "revision": "63c47aec0622cd655535b0c724524296"
  },
  {
    "url": "assets/js/28.b0f42dc8.js",
    "revision": "dcc6524e95736af195091ce208c3641d"
  },
  {
    "url": "assets/js/29.d4963f5a.js",
    "revision": "8923fa61a95365c0df4f3105ee48be60"
  },
  {
    "url": "assets/js/3.8bd21318.js",
    "revision": "50aec8abe01b14d767874f9fb59abfde"
  },
  {
    "url": "assets/js/30.329a3fb8.js",
    "revision": "00a54adb748c1d7df2693bea5f6204e9"
  },
  {
    "url": "assets/js/31.a2715113.js",
    "revision": "13e015f32ee98925cc29e77defcb7cc4"
  },
  {
    "url": "assets/js/32.0bce2d6b.js",
    "revision": "03361376f0e45271487c486f8e7f8afc"
  },
  {
    "url": "assets/js/33.2de47943.js",
    "revision": "9f58220ce4def77198a270873b75b3a2"
  },
  {
    "url": "assets/js/34.3e4dfb0a.js",
    "revision": "a7ffd2c2db28d1c21683167f012dba9f"
  },
  {
    "url": "assets/js/35.4aec0ab6.js",
    "revision": "9790b9978582649b4972b8fc80add213"
  },
  {
    "url": "assets/js/36.613fb90a.js",
    "revision": "eb550a1e558cb76bab7c3e6921ff46b6"
  },
  {
    "url": "assets/js/37.cd1a5f89.js",
    "revision": "7013f57a66715284d063cc23d556954c"
  },
  {
    "url": "assets/js/38.c073e9f2.js",
    "revision": "c60654fae4d3840d07cf968f2b142441"
  },
  {
    "url": "assets/js/39.e0b989f3.js",
    "revision": "b4d8d6b708510b5cf6ebb65fc0c34403"
  },
  {
    "url": "assets/js/4.b7523a4a.js",
    "revision": "120892a19d45c2b1397b34e3ca80ca9a"
  },
  {
    "url": "assets/js/41.2632cd02.js",
    "revision": "577afda509df90359c78bd4693decd17"
  },
  {
    "url": "assets/js/5.6a35fee5.js",
    "revision": "0bfbc97a1aa84482a5613ab35ec9a4d5"
  },
  {
    "url": "assets/js/6.f5201e81.js",
    "revision": "3ca7288b40daae506feb436f85c2813e"
  },
  {
    "url": "assets/js/7.e9507045.js",
    "revision": "be3cad15559fe3b120b8e3e774854d92"
  },
  {
    "url": "assets/js/8.2898e25d.js",
    "revision": "50ee0bd6536417e8f9bd77330f0bbc94"
  },
  {
    "url": "assets/js/9.c995df08.js",
    "revision": "71f028de5cdfdd796c0aee0f731c4054"
  },
  {
    "url": "assets/js/app.b94676a3.js",
    "revision": "4e8d5e5104e519f422c84d0046edd7cc"
  },
  {
    "url": "assets/js/vendors~docsearch.3d0a96ce.js",
    "revision": "757e27ac72b0c8ac4ca88199a7ab0c4a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "64387daf8a854b6a6ba49237f74288e4"
  },
  {
    "url": "design/index.html",
    "revision": "1372147e4d8ae02d4d4ade8ae4c4d059"
  },
  {
    "url": "index.html",
    "revision": "1c8779a2941b3a746e5dfe634aeb1842"
  },
  {
    "url": "intro/index.html",
    "revision": "04ade871c5737ba7bd6f726b93ecdffe"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "afbca43153eb5dd323bc07d565dfcf21"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "99357f363419215d8f637e512b0165c3"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "e23807e04da1fd35e8da65d4c5e2081d"
  },
  {
    "url": "software/index.html",
    "revision": "645d5295c3ba03f3d954bbffcc16a95b"
  },
  {
    "url": "test/index.html",
    "revision": "3e3894a6906cb2a037a2b2eac4f9a5b8"
  },
  {
    "url": "use cases/index.html",
    "revision": "f18d33e14c36c34dc3f69897623a7ea4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
