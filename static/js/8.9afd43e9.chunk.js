(this["webpackJsonpflora-landing"]=this["webpackJsonpflora-landing"]||[]).push([[8],{258:function(e,a,t){},260:function(e,a,t){"use strict";var n=t(6),r=t(23),l=t(91),i=t.n(l),s=t(0),o=t.n(s),c=t(92),u=["bsPrefix","fluid","as","className"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.fluid,s=e.as,d=void 0===s?"div":s,m=e.className,f=Object(r.a)(e,u),g=Object(c.a)(t,"container"),p="string"===typeof l?"-"+l:"-fluid";return o.a.createElement(d,Object(n.a)({ref:a},f,{className:i()(m,l?""+g+p:g)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.a=d},261:function(e,a,t){"use strict";var n=t(6),r=t(23),l=t(91),i=t.n(l),s=t(0),o=t.n(s),c=t(92),u=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.as,m=void 0===s?"div":s,f=Object(r.a)(e,u),g=Object(c.a)(t,"col"),p=[],y=[];return d.forEach((function(e){var a,t,n,r=f[e];if(delete f[e],"object"===typeof r&&null!=r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var i="xs"!==e?"-"+e:"";a&&p.push(!0===a?""+g+i:""+g+i+"-"+a),null!=n&&y.push("order"+i+"-"+n),null!=t&&y.push("offset"+i+"-"+t)})),p.length||p.push(g),o.a.createElement(m,Object(n.a)({},f,{ref:a,className:i.a.apply(void 0,[l].concat(p,y))}))}));m.displayName="Col",a.a=m},262:function(e,a,t){"use strict";var n=t(6),r=t(23),l=t(91),i=t.n(l),s=t(0),o=t.n(s),c=t(92),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.noGutters,m=e.as,f=void 0===m?"div":m,g=Object(r.a)(e,u),p=Object(c.a)(t,"row"),y=p+"-cols",h=[];return d.forEach((function(e){var a,t=g[e];delete g[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&h.push(""+y+n+"-"+a)})),o.a.createElement(f,Object(n.a)({ref:a},g,{className:i.a.apply(void 0,[l,p,s&&"no-gutters"].concat(h))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},a.a=m},263:function(e,a,t){"use strict";var n=t(1),r=t(0),l=t(94),i=t(29);function s(e){var a=function(){var e=r.useContext(l.a);return Object(i.c)(e),e}(),t=a.formatMessage,n=a.textComponent,s=void 0===n?r.Fragment:n,o=e.id,c=e.description,u=e.defaultMessage,d=e.values,m=e.children,f=e.tagName,g=void 0===f?s:f,p=t({id:o,description:c,defaultMessage:u},d,{ignoreTag:e.ignoreTag});return"function"===typeof m?m(Array.isArray(p)?p:[p]):g?r.createElement(g,null,r.Children.toArray(p)):r.createElement(r.Fragment,null,p)}s.displayName="FormattedMessage";var o=r.memo(s,(function(e,a){var t=e.values,r=Object(n.c)(e,["values"]),l=a.values,s=Object(n.c)(a,["values"]);return Object(i.d)(l,t)&&Object(i.d)(r,s)}));o.displayName="MemoizedFormattedMessage";a.a=o},347:function(e,a,t){e.exports={component:"StylizeGarden_component__3RdZS",shiftLeft:"StylizeGarden_shiftLeft__3_EtW",widget:"StylizeGarden_widget__14Y0v",footer:"StylizeGarden_footer__3YwPJ"}},348:function(e,a,t){e.exports=t.p+"static/media/banner.382eef52.png"},349:function(e,a,t){e.exports=t.p+"static/media/preview.70a54713.png"},350:function(e,a,t){e.exports=t.p+"static/media/linear-garden.6449a88b.png"},351:function(e,a,t){e.exports=t.p+"static/media/beautify-diversity.9e23e0a6.svg"},352:function(e,a,t){e.exports=t.p+"static/media/beautify-color.f8666601.svg"},353:function(e,a,t){e.exports=t.p+"static/media/beautify-unique.c387ce12.svg"},354:function(e,a,t){e.exports=t.p+"static/media/big-garden.a9e8bb8f.svg"},382:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(347),r=t.n(n),l=(t(258),t(348)),i=t.n(l),s=t(349),o=t.n(s),c=t(350),u=t.n(c),d=t(351),m=t.n(d),f=t(352),g=t.n(f),p=t(353),y=t.n(p),h=t(354),E=t.n(h),v=t(0),b=t.n(v),w=t(93),G=t(263),x=t(91),N=t.n(x),S=t(260),z=t(262),M=t(261),k=t(140);function j(e){let{locale:a}=e;const t=Object(v.useContext)(k.AppContext);return b.a.createElement("div",{className:N()(r.a.component)},b.a.createElement(w.a,null,b.a.createElement("title",null,t.intl.formatMessage({id:"StylizeGarden.pageTitle",defaultMessage:"Your Garden, Your Style"}))),b.a.createElement("div",{className:"d-none"},b.a.createElement("div",{id:"topic"},b.a.createElement(G.a,{id:"StylizeGarden.app.topic",defaultMessage:"Update"})),b.a.createElement("div",{id:"title"},b.a.createElement(G.a,{id:"StylizeGarden.app.title",defaultMessage:"Your Garden, Your Style"})),b.a.createElement("img",{id:"banner",src:o.a,alt:""})),b.a.createElement("div",{className:"position-relative"},b.a.createElement("div",{className:r.a.mask}),b.a.createElement("img",{src:i.a,className:"img-fluid d-block mx-auto",alt:""})),b.a.createElement(S.a,null,b.a.createElement("h2",{className:"mt-4 mb-2"},b.a.createElement(G.a,{id:"StylizeGarden.title",defaultMessage:"Your Garden, Your Style"})),b.a.createElement("h6",{className:"mb-3"},b.a.createElement(G.a,{id:"StylizeGarden.subtitle",defaultMessage:"Unique, Fabulous, and Rewarding"})),b.a.createElement("p",null,b.a.createElement(G.a,{id:"StylizeGarden.greetings",defaultMessage:"Hello, dear Flora enthusiasts! We know how hard you\u2019ve been working to sprinkle a little greenery and bloom into your lovely digital Garden. Up until now, your Garden has blossomed under an automatic layout, beautifully unpredictable in its arrangement. However, we\u2019ve received a bouquet of feedback requesting more creative control over how your Garden grows."})),b.a.createElement("p",null,b.a.createElement(G.a,{id:"StylizeGarden.announcement",defaultMessage:"We\u2019re thrilled to announce an update: a fresh, linear <ui>Garden</ui> view designed to put the pruning shears back in your hands, giving you the freedom to shape your Garden\u2019s look.",values:{ui:e=>"\u201c".concat(e,"\u201d"),em:e=>b.a.createElement("em",null,e)}})),b.a.createElement(z.a,{className:"justify-content-center my-5"},b.a.createElement(M.a,{xs:12},b.a.createElement("div",{className:r.a.shiftLeft},b.a.createElement("img",{src:u.a,className:"img-fluid d-block mx-auto",alt:""})))),b.a.createElement("h4",{className:"mt-4 mb-3"},b.a.createElement(G.a,{id:"StylizeGarden.header.features",defaultMessage:"What\u2019s New"})),b.a.createElement("p",null,b.a.createElement(G.a,{id:"StylizeGarden.features",defaultMessage:"In your updated Garden, your plants will now line up in a neat row, with the freshest additions taking pride of place on the right. As time goes by, your plants will shift leftwards, making room for new life. This movement serves as a gentle reminder that a vibrant Garden requires regular care and new growth, motivating you to keep focused and engaged with your tasks."})),b.a.createElement("h4",{className:"mt-4 mb-3"},b.a.createElement(G.a,{id:"StylizeGarden.header.beautify",defaultMessage:"Beautify Your Garden"})),b.a.createElement("p",null,b.a.createElement(G.a,{id:"StylizeGarden.beautify.start",defaultMessage:"You now have a delightful challenge of deciding which plants to grow next when starting your Focus sessions. Here are some tips to cultivate a Garden that\u2019s not only lush but also uniquely yours:"})),b.a.createElement("ul",null,b.a.createElement("li",null,b.a.createElement("p",null,b.a.createElement(G.a,{id:"StylizeGarden.beautify.1",defaultMessage:"<em>Diversify Your Planting</em>: Avoid planting trees in a row. Since trees are spaced further apart, this can leave empty spaces in your Garden. Instead, intersperse them with flowers or fruit plants to create a denser, more vibrant look.",values:{ui:e=>"\u201c".concat(e,"\u201d"),em:e=>b.a.createElement("em",null,e)}})),b.a.createElement(z.a,{className:"justify-content-center my-3"},b.a.createElement(M.a,{xs:12},b.a.createElement("img",{src:m.a,className:"img-fluid d-block mx-auto",alt:""})))),b.a.createElement("li",null,b.a.createElement("p",null,b.a.createElement(G.a,{id:"StylizeGarden.beautify.2",defaultMessage:"<em>Color Coordination</em>: Harmonize your Garden by mixing plants with similar or complementary colors. This will create a visually soothing space.",values:{ui:e=>"\u201c".concat(e,"\u201d"),em:e=>b.a.createElement("em",null,e)}})),b.a.createElement(z.a,{className:"justify-content-center my-3"},b.a.createElement(M.a,{xs:5},b.a.createElement("img",{src:g.a,className:"img-fluid d-block mx-auto",alt:""})))),b.a.createElement("li",null,b.a.createElement("p",null,b.a.createElement(G.a,{id:"StylizeGarden.beautify.3",defaultMessage:"<em>Personal Touch</em>: Dedicate certain plants to celebrate milestones or special events in your life, adding layers of personal significance to your digital green space.",values:{ui:e=>"\u201c".concat(e,"\u201d"),em:e=>b.a.createElement("em",null,e)}})),b.a.createElement(z.a,{className:"justify-content-center my-3"},b.a.createElement(M.a,{xs:6},b.a.createElement("img",{src:y.a,className:"img-fluid d-block mx-auto",alt:""}))))),b.a.createElement("p",null,b.a.createElement(G.a,{id:"StylizeGarden.beautify.end",defaultMessage:"But don\u2019t let the suggestions limit your creativity! Your Garden is a canvas for your imagination. Realize it, and share it with your friends. Green thumbs always inspire each other."})),b.a.createElement("h4",{className:"mt-4 mb-3"},b.a.createElement(G.a,{id:"StylizeGarden.header.bigGarden",defaultMessage:"Big Garden for Expert Planters"})),b.a.createElement("p",null,b.a.createElement(G.a,{id:"StylizeGarden.bigGarden",defaultMessage:"For our most dedicated gardeners who have won the <ui>Expert Planter</ui> badge, we\u2019re introducing the <ui>Big Garden</ui>. This is where you can admire all your trees in one place. If you\u2019re not an <ui>Expert Planter</ui> yet, keep up the great work! Your giant forest of achievements awaits.",values:{ui:e=>"\u201c".concat(e,"\u201d"),em:e=>b.a.createElement("em",null,e)}})),b.a.createElement(z.a,{className:"justify-content-center my-3"},b.a.createElement(M.a,{xs:12,className:"px-0"},b.a.createElement("img",{src:E.a,className:"img-fluid d-block mx-auto",alt:""}))),b.a.createElement("h4",{className:"mt-4 mb-3"},b.a.createElement(G.a,{id:"StylizeGarden.header.closing",defaultMessage:"The Challenge Begins"})),b.a.createElement("p",{className:"pb-5"},b.a.createElement(G.a,{id:"StylizeGarden.closing",defaultMessage:"Give your brain this new Garden to tend to and see how it flourishes under your care. We\u2019re eager to see the Gardens you cultivate. Happy gardening, and remember, we\u2019re always here to listen to your feedback."}))))}}}]);
//# sourceMappingURL=8.9afd43e9.chunk.js.map