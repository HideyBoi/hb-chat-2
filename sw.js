if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const f=e=>s(e,o),c={module:{uri:o},exports:t,require:f};i[o]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.00c9f77f.css",revision:null},{url:"assets/index.dd63608b.js",revision:null},{url:"firebase-messaging-sw.js",revision:"882fb596bb8bc929db0c8408d5383d45"},{url:"index.html",revision:"f81366e90c8e6f330adff5f241f51659"},{url:"favicon.svg",revision:"1998a2e843892b852709ff997b6e5b83"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"apple-touch-icon.png",revision:"4d275a1e53e10f00b075930727c0f1ec"},{url:"icon-192.png",revision:"dcdfca20bcf85959ca2b3a36b1bea0dc"},{url:"icon-512.png",revision:"f7f8e0859ed2e74e6073a2b1e32ac6db"},{url:"manifest.webmanifest",revision:"d54e111854b01de96de625f73b445e03"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
