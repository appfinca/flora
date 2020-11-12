(this["webpackJsonpflora-landing"]=this["webpackJsonpflora-landing"]||[]).push([[1],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"AppContext",(function(){return y}));var n=a(125),o=(a(205),a(206),a(207),a(216),a(0)),r=a.n(o),c=a(95),l=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(17),s=a(131),m=a(18),p=a(418),u=a(132),d=a(130),f=a(198),h=a.n(f),g=a(199);function E(e){var t=e.small;return r.a.createElement("div",null,r.a.createElement("div",{style:{paddingTop:"6rem",textAlign:"center"}},r.a.createElement(g.a,{animation:"grow",variant:"primary",size:t?"sm":""})))}var y=r.a.createContext(),w=["en","zh-cn","zh-tw"],b=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(5)]).then(a.bind(null,494))})),v=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,498))})),x=Object(o.lazy)((function(){return a.e(8).then(a.bind(null,499))})),j=Object(o.lazy)((function(){return a.e(9).then(a.bind(null,500))})),O=Object(o.lazy)((function(){return a.e(7).then(a.bind(null,501))})),k=Object(o.lazy)((function(){return a.e(6).then(a.bind(null,502))}));function M(){var e=Object(i.f)(),t=e.params.locale;t||(t=(t=navigator.language||navigator.userLanguage).toLowerCase(),w.includes(t)||(t=t.split(/[-_]/)[0],w.includes(t)||(t="en")));var c=Object(o.useState)(t),l=Object(n.a)(c,2),s=l[0],f=l[1],h=Object(o.useState)(),g=Object(n.a)(h,2),M=g[0],F=g[1];if(Object(o.useEffect)((function(){"en"!==t&&(f(t),F(null),a(412)("./".concat(t,".js")).then((function(e){F(e.default)})))}),[t]),"en"!==t&&!M)return r.a.createElement(E,null);var z=Object(m.c)(),A=Object(p.a)({locale:s,messages:M},z),C=e.url;C.endsWith("/")||(C+="/");var P={supportedLocales:w,currentLocale:s,intl:A,urlPrefix:C};return r.a.createElement(y.Provider,{value:P},r.a.createElement(u.b,{value:A},r.a.createElement(d.a,null,r.a.createElement("title",null,A.formatMessage({id:"index.title",defaultMessage:"Flora - Grow Dreams"})),r.a.createElement("meta",{name:"author",content:"AppFinca Inc."}),r.a.createElement("meta",{name:"description",content:A.formatMessage({id:"index.description",defaultMessage:"Flora is a free productivity app that helps you stay focused on your tasks, clear to-do lists, and build positive, life-changing habits. Whenever you want to make progress towards your dreams, grow tree in Flora!"})}),r.a.createElement("link",{rel:"alternate",href:"https://flora.appfinca.com",hreflang:"x-default"}),w.map((function(e,t){return r.a.createElement("link",{key:t,rel:"alternate",href:"https://flora.appfinca.com/"+e,hreflang:e})})),r.a.createElement("script",{type:"application/ld+json"},'{\n            "@context": "http://schema.org",\n            "@type": "WebSite",\n            "name": "'.concat(A.formatMessage({id:"index.title",defaultMessage:"Flora - Grow Dreams"}),'",\n            "url": "https://flora.appfinca.com",\n            "logo": "https://flora.appfinca.com/static/media/icon-512.png",\n            "contactPoint" : [{\n              "@type" : "ContactPoint",\n              "url": "https://flora.appfinca.com/faq",\n              "email": "support@flora.appfinca.com",\n              "contactType": "customer support"\n            }],\n            "sameAs": [\n              "https://www.facebook.com/FloraAppfinca",\n              "https://twitter.com/FloraApp"\n            ]\n          }')),r.a.createElement("script",{type:"application/ld+json"},'{\n            "@context": "http://schema.org",\n            "@type": "Country",\n            "address": {\n              "addressCountry": "US"\n            }\n          }'),r.a.createElement("meta",{property:"fb:app_id",content:"100749660278765"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"https://flora.appfinca.com"+C}),r.a.createElement("meta",{property:"og:site_name",content:"Flora"}),r.a.createElement("meta",{property:"og:title",content:A.formatMessage({id:"index.social.title",defaultMessage:"Flora - Grow Dreams"})}),r.a.createElement("meta",{property:"og:description",content:A.formatMessage({id:"index.social.description",defaultMessage:"A new way to focus on your tasks, clear to-do lists, and build good habits."})}),r.a.createElement("meta",{property:"og:image",content:"https://flora.appfinca.com/static/media/social.png"}),r.a.createElement("meta",{property:"og:locale",content:t}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:site",content:"@FloraApp"}),r.a.createElement("meta",{name:"twitter:title",content:A.formatMessage({id:"index.social.title",defaultMessage:"Flora - Grow Dreams"})}),r.a.createElement("meta",{name:"twitter:description",content:A.formatMessage({id:"index.social.description",defaultMessage:"A new way to focus on your tasks, clear to-do lists, and build good habits."})}),r.a.createElement("meta",{name:"twitter:image",content:"https://flora.appfinca.com/static/media/social.png"})),r.a.createElement(o.Suspense,{fallback:r.a.createElement(E,{small:!0})},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"".concat(C),component:b}),r.a.createElement(i.a,{exact:!0,path:"".concat(C,"faq"),component:v}),r.a.createElement(i.a,{exact:!0,path:"/privacy",component:x}),r.a.createElement(i.a,{exact:!0,path:"/privacy/index.html",component:x}),r.a.createElement(i.a,{exact:!0,path:"/terms",component:j}),r.a.createElement(i.a,{exact:!0,path:"/terms/index.html",component:j}),r.a.createElement(i.a,{exact:!0,path:"/acknowledgements",component:O}),r.a.createElement(i.a,{component:k})))))}var F=document.getElementById("root"),z=l.a.render;F.hasChildNodes()&&(z=l.a.hydrate),z(r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/:locale(".concat(w.join("|"),")"),component:M}),r.a.createElement(i.a,{component:M}))),F),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),h.a.initialize({gtmId:"GTM-PZQ6LWF"})},204:function(e,t,a){e.exports=a(201)},205:function(e,t,a){},206:function(e,t,a){},412:function(e,t,a){var n={"./zh-cn.js":[416,11],"./zh-tw.js":[417,12]};function o(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return a.e(t[1]).then((function(){return a(o)}))}o.keys=function(){return Object.keys(n)},o.id=412,e.exports=o}},[[204,2,3]]]);
//# sourceMappingURL=main.9e6dbf10.chunk.js.map