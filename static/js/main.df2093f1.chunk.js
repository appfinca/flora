(this["webpackJsonpflora-landing"]=this["webpackJsonpflora-landing"]||[]).push([[1],{202:function(e,t,a){"use strict";a.r(t),a.d(t,"AppContext",(function(){return y}));var n=a(127),r=(a(206),a(207),a(208),a(217),a(0)),o=a.n(r),c=a(97),l=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(18),s=a(40),m=a(19),p=a(419),u=a(133),d=a(132),f=a(199),h=a.n(f),E=a(200);function g(e){var t=e.small;return o.a.createElement("div",null,o.a.createElement("div",{style:{paddingTop:"6rem",textAlign:"center"}},o.a.createElement(E.a,{animation:"grow",variant:"primary",size:t?"sm":""})))}var y=o.a.createContext(),b=["en","zh-cn","zh-tw"],w=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(5)]).then(a.bind(null,496))})),v=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,499))})),x=Object(r.lazy)((function(){return a.e(9).then(a.bind(null,500))})),j=Object(r.lazy)((function(){return a.e(10).then(a.bind(null,501))})),O=Object(r.lazy)((function(){return a.e(8).then(a.bind(null,502))})),k=Object(r.lazy)((function(){return a.e(7).then(a.bind(null,503))})),F=Object(r.lazy)((function(){return a.e(6).then(a.bind(null,504))}));function M(){var e=Object(i.f)(),t=e.params.locale;t||(t=(t=navigator.language||navigator.userLanguage).toLowerCase(),b.includes(t)||(t=t.split(/[-_]/)[0],b.includes(t)||(t="en")));var c=Object(r.useState)(t),l=Object(n.a)(c,2),f=l[0],h=l[1],E=Object(r.useState)(),M=Object(n.a)(E,2),z=M[0],A=M[1];if(Object(r.useEffect)((function(){"en"!==t&&(h(t),A(null),a(413)("./".concat(t,".js")).then((function(e){A(e.default)})))}),[t]),"en"!==t&&!z)return o.a.createElement(g,null);var C=Object(m.c)(),P=Object(p.a)({locale:f,messages:z},C),q=e.url;q.endsWith("/")||(q+="/");var _={supportedLocales:b,currentLocale:f,intl:P,urlPrefix:q};return o.a.createElement(y.Provider,{value:_},o.a.createElement(u.b,{value:P},o.a.createElement(d.a,null,o.a.createElement("title",null,P.formatMessage({id:"index.title",defaultMessage:"Flora - Green Focus"})),o.a.createElement("meta",{name:"author",content:"AppFinca Inc."}),o.a.createElement("meta",{name:"description",content:P.formatMessage({id:"index.description",defaultMessage:"Flora is a free productivity app that helps you stay off your phone, clear to-do lists, and build positive, life-changing habits. Whenever you want to make progress towards your goals, grow trees in Flora!"})}),o.a.createElement("link",{rel:"alternate",href:"https://flora.appfinca.com",hreflang:"x-default"}),b.map((function(e,t){return o.a.createElement("link",{key:t,rel:"alternate",href:"https://flora.appfinca.com/"+e,hreflang:e})})),o.a.createElement("script",{type:"application/ld+json"},'{\n            "@context": "http://schema.org",\n            "@type": "WebSite",\n            "name": "'.concat(P.formatMessage({id:"index.title",defaultMessage:"Flora - Green Focus"}),'",\n            "url": "https://flora.appfinca.com",\n            "logo": "https://flora.appfinca.com/static/media/icon-512.png",\n            "contactPoint" : [{\n              "@type" : "ContactPoint",\n              "url": "https://flora.appfinca.com/faq",\n              "email": "support@flora.appfinca.com",\n              "contactType": "customer support"\n            }],\n            "sameAs": [\n              "https://www.facebook.com/FloraAppfinca",\n              "https://twitter.com/FloraApp"\n            ]\n          }')),o.a.createElement("script",{type:"application/ld+json"},'{\n            "@context": "http://schema.org",\n            "@type": "Country",\n            "address": {\n              "addressCountry": "US"\n            }\n          }'),o.a.createElement("meta",{property:"fb:app_id",content:"100749660278765"}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:url",content:"https://flora.appfinca.com"+q}),o.a.createElement("meta",{property:"og:site_name",content:"Flora"}),o.a.createElement("meta",{property:"og:title",content:P.formatMessage({id:"index.social.title",defaultMessage:"Flora - Green Focus"})}),o.a.createElement("meta",{property:"og:description",content:P.formatMessage({id:"index.social.description",defaultMessage:"A pleasant way to stay off the phone, clear to-dos, and build new habits."})}),o.a.createElement("meta",{property:"og:image",content:"https://flora.appfinca.com/static/media/social.png"}),o.a.createElement("meta",{property:"og:locale",content:t}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:site",content:"@FloraApp"}),o.a.createElement("meta",{name:"twitter:title",content:P.formatMessage({id:"index.social.title",defaultMessage:"Flora - Green Focus"})}),o.a.createElement("meta",{name:"twitter:description",content:P.formatMessage({id:"index.social.description",defaultMessage:"A pleasant way to stay off the phone, clear to-dos, and build new habits."})}),o.a.createElement("meta",{name:"twitter:image",content:"https://flora.appfinca.com/static/media/social.png"})),o.a.createElement("div",{className:"h-100"},o.a.createElement(r.Suspense,{fallback:o.a.createElement(g,{small:!0})},o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"".concat(q),component:w}),o.a.createElement(i.a,{exact:!0,path:"".concat(q,"faq"),component:v}),o.a.createElement(i.a,{exact:!0,path:"".concat(q,"news/year-end-report-2020"),component:F}),o.a.createElement(i.a,{exact:!0,path:"/privacy",component:x}),o.a.createElement(i.a,{exact:!0,path:"/privacy/index.html",component:x}),o.a.createElement(i.a,{exact:!0,path:"/terms",component:j}),o.a.createElement(i.a,{exact:!0,path:"/terms/index.html",component:j}),o.a.createElement(i.a,{exact:!0,path:"/acknowledgements",component:O}),o.a.createElement(i.a,{component:k}))),o.a.createElement("div",{className:"d-none"},o.a.createElement(s.b,{to:"/"},"/"),o.a.createElement(s.b,{to:"/faq"},"/faq"),o.a.createElement(s.b,{to:"/privacy"},"/privacy"),o.a.createElement(s.b,{to:"/terms"},"/terms"),o.a.createElement(s.b,{to:"/acknowledgements"},"/acknowledgements"),o.a.createElement(s.b,{to:"/news/year-end-report-2020"},"/news/year-end-report-2020"),b.map((function(e,t){return o.a.createElement("div",null,o.a.createElement(s.b,{key:"/".concat(e,"/"),to:"/".concat(e,"/")},"/".concat(e,"/")),o.a.createElement(s.b,{key:"/".concat(e,"/faq"),to:"/".concat(e,"/faq")},"/".concat(e,"/faq")),o.a.createElement(s.b,{key:"/".concat(e,"/news/year-end-report-2020"),to:"/".concat(e,"/news/year-end-report-2020")},"/".concat(e,"/news/year-end-report-2020")))}))))))}var z=document.getElementById("root"),A=l.a.render;z.hasChildNodes()&&(A=l.a.hydrate),A(o.a.createElement(s.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/:locale(".concat(b.join("|"),")"),component:M}),o.a.createElement(i.a,{component:M}))),z),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),h.a.initialize({gtmId:"GTM-PZQ6LWF"})},205:function(e,t,a){e.exports=a(202)},206:function(e,t,a){},207:function(e,t,a){},413:function(e,t,a){var n={"./zh-cn.js":[417,12],"./zh-tw.js":[418,13]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=413,e.exports=r}},[[205,2,3]]]);
//# sourceMappingURL=main.df2093f1.chunk.js.map