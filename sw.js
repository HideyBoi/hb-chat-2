if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),d={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.6def8f34.css",revision:null},{url:"assets/index.ac3870d5.js",revision:null},{url:"index.html",revision:"6dce9ef7701e140fe758eed2170a3252"},{url:"favicon.svg",revision:"1998a2e843892b852709ff997b6e5b83"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"apple-touch-icon.png",revision:"4d275a1e53e10f00b075930727c0f1ec"},{url:"icon-192.png",revision:"dcdfca20bcf85959ca2b3a36b1bea0dc"},{url:"icon-512.png",revision:"f7f8e0859ed2e74e6073a2b1e32ac6db"},{url:"manifest.webmanifest",revision:"d54e111854b01de96de625f73b445e03"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
