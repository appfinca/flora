(this["webpackJsonpflora-landing"]=this["webpackJsonpflora-landing"]||[]).push([[9],{258:function(e,t,a){},260:function(e,t,a){"use strict";var l=a(6),s=a(23),n=a(91),o=a.n(n),r=a(0),i=a.n(r),c=a(92),u=["bsPrefix","fluid","as","className"],m=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,r=e.as,m=void 0===r?"div":r,p=e.className,d=Object(s.a)(e,u),f=Object(c.a)(a,"container"),h="string"===typeof n?"-"+n:"-fluid";return i.a.createElement(m,Object(l.a)({ref:t},d,{className:o()(p,n?""+f+h:f)}))}));m.displayName="Container",m.defaultProps={fluid:!1},t.a=m},261:function(e,t,a){"use strict";var l=a(6),s=a(23),n=a(91),o=a.n(n),r=a(0),i=a.n(r),c=a(92),u=["bsPrefix","className","as"],m=["xl","lg","md","sm","xs"],p=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.as,p=void 0===r?"div":r,d=Object(s.a)(e,u),f=Object(c.a)(a,"col"),h=[],E=[];return m.forEach((function(e){var t,a,l,s=d[e];if(delete d[e],"object"===typeof s&&null!=s){var n=s.span;t=void 0===n||n,a=s.offset,l=s.order}else t=s;var o="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+f+o:""+f+o+"-"+t),null!=l&&E.push("order"+o+"-"+l),null!=a&&E.push("offset"+o+"-"+a)})),h.length||h.push(f),i.a.createElement(p,Object(l.a)({},d,{ref:t,className:o.a.apply(void 0,[n].concat(h,E))}))}));p.displayName="Col",t.a=p},262:function(e,t,a){"use strict";var l=a(1),s=a(0),n=a(94),o=a(29);function r(e){var t=function(){var e=s.useContext(n.a);return Object(o.c)(e),e}(),a=t.formatMessage,l=t.textComponent,r=void 0===l?s.Fragment:l,i=e.id,c=e.description,u=e.defaultMessage,m=e.values,p=e.children,d=e.tagName,f=void 0===d?r:d,h=a({id:i,description:c,defaultMessage:u},m,{ignoreTag:e.ignoreTag});return"function"===typeof p?p(Array.isArray(h)?h:[h]):f?s.createElement(f,null,s.Children.toArray(h)):s.createElement(s.Fragment,null,h)}r.displayName="FormattedMessage";var i=s.memo(r,(function(e,t){var a=e.values,s=Object(l.c)(e,["values"]),n=t.values,r=Object(l.c)(t,["values"]);return Object(o.d)(n,a)&&Object(o.d)(s,r)}));i.displayName="MemoizedFormattedMessage";t.a=i},265:function(e,t,a){"use strict";var l=a(6),s=a(23),n=a(91),o=a.n(n),r=a(0),i=a.n(r),c=a(92),u=["bsPrefix","className","noGutters","as"],m=["xl","lg","md","sm","xs"],p=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.noGutters,p=e.as,d=void 0===p?"div":p,f=Object(s.a)(e,u),h=Object(c.a)(a,"row"),E=h+"-cols",g=[];return m.forEach((function(e){var t,a=f[e];delete f[e];var l="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&g.push(""+E+l+"-"+t)})),i.a.createElement(d,Object(l.a)({ref:t},f,{className:o.a.apply(void 0,[n,h,r&&"no-gutters"].concat(g))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},354:function(e,t,a){e.exports={component:"AppWhitelist_component__5QmmO",screenshot:"AppWhitelist_screenshot__A3tdQ",footer:"AppWhitelist_footer__2TDhf"}},355:function(e,t,a){e.exports=a.p+"static/media/banner.989b72f2.jpg"},356:function(e,t,a){e.exports=a.p+"static/media/preview.8f37534a.jpg"},357:function(e,t,a){e.exports=a.p+"static/media/app-access.ba2f74aa.svg"},379:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var l=a(354),s=a.n(l),n=(a(258),a(355)),o=a.n(n),r=a(356),i=a.n(r),c=a(357),u=a.n(c),m=a(0),p=a.n(m),d=a(93),f=a(262),h=a(91),E=a.n(h),g=a(260),y=a(265),v=a(261),w=a(140);function b(e){let{locale:t}=e;const a=Object(m.useContext)(w.AppContext);return p.a.createElement("div",{className:E()(s.a.component)},p.a.createElement(d.a,null,p.a.createElement("title",null,a.intl.formatMessage({id:"AppWhitelist.pageTitle",defaultMessage:"App Whitelist"}))),p.a.createElement("div",{className:"d-none"},p.a.createElement("div",{id:"topic"},p.a.createElement(f.a,{id:"AppWhitelist.app.topic",defaultMessage:"Tip"})),p.a.createElement("div",{id:"title"},p.a.createElement(f.a,{id:"AppWhitelist.app.title",defaultMessage:"Unlocking your potential with App Whitelist"})),p.a.createElement("img",{id:"banner",src:i.a,alt:""})),p.a.createElement("div",{className:"position-relative"},p.a.createElement("div",{className:s.a.mask}),p.a.createElement("img",{src:o.a,className:"img-fluid d-block mx-auto",alt:""})),p.a.createElement(g.a,null,p.a.createElement("h2",{className:"mt-4 mb-2"},p.a.createElement(f.a,{id:"AppWhitelist.title",defaultMessage:"Unlocking Your Potential with App Whitelist",values:{primary:e=>p.a.createElement("span",{className:"text-primary-dark"},e)}})),p.a.createElement("h6",{className:"mb-3"},p.a.createElement(f.a,{id:"AppWhitelist.subtitle",defaultMessage:"The power to focus on your terms."})),p.a.createElement("p",null,p.a.createElement(f.a,{id:"AppWhitelist.greet1",defaultMessage:"As you know, Flora helps you stay on task and avoid distractions by blocking other apps while you are growing trees. However, we recognize that some of you need to use certain apps, such as a calculator or dictionary app, to complete your tasks effectively. That\u2019s why we\u2019ve developed a <em>whitelist</em> feature that allows you to use some apps during a Focus session without killing your tree.",values:{ui:e=>"\u201c".concat(e,"\u201d"),em:e=>p.a.createElement("em",null,e)}})),p.a.createElement("h4",{className:"mt-4 mb-3"},p.a.createElement(f.a,{id:"AppWhitelist.header.how",defaultMessage:"How Does It Work"})),p.a.createElement(y.a,{className:"justify-content-center"},p.a.createElement(v.a,{xs:11},p.a.createElement("div",{className:"mb-4 position-relative"},p.a.createElement("div",{className:s.a.mask}),p.a.createElement("img",{src:u.a,className:E()(s.a.screenshot,"img-fluid d-block mx-auto shadow"),alt:""})))),p.a.createElement("p",null,p.a.createElement(f.a,{id:"AppWhitelist.stepStart",defaultMessage:"To use this new feature, please upgrade your iOS to version 16.1+ and Flora app to version 3.5+. Then, open the app and follow the steps below:",values:{ui:e=>"\u201c".concat(e,"\u201d"),em:e=>p.a.createElement("em",null,e)}})),p.a.createElement("ol",null,p.a.createElement("li",null,p.a.createElement("p",null,p.a.createElement(f.a,{id:"AppWhitelist.step1",defaultMessage:"Go to the <ui>More</ui> tab and turn on the <ui>Allow apps during Focus</ui> option.",values:{ui:e=>"\u201c".concat(e,"\u201d")}}))),p.a.createElement("li",null,p.a.createElement("p",null,p.a.createElement(f.a,{id:"AppWhitelist.step2",defaultMessage:"Grant Flora access to Screen Time on your device.",values:{ui:e=>"\u201c".concat(e,"\u201d")}}))),p.a.createElement("li",null,p.a.createElement("p",null,p.a.createElement(f.a,{id:"AppWhitelist.step3",defaultMessage:"Tap on the <ui>Allow all apps</ui> option below. From there, you can select the apps you want to use during your Focus sessions.",values:{ui:e=>"\u201c".concat(e,"\u201d"),em:e=>p.a.createElement("em",null,e)}})))),p.a.createElement("p",null,p.a.createElement(f.a,{id:"AppWhitelist.stepEnd",defaultMessage:"Now, when growing a tree, if you try to open an app that\u2019s not in your whitelist, you'll see a shield screen telling you to go back to the iOS Home screen. This is a reminder that we\u2019re here to help you stay focused on your tasks, and we want to make sure you\u2019re aware of any distractions that may be tempting you away from your goals.",values:{ui:e=>"\u201c".concat(e,"\u201d"),em:e=>p.a.createElement("em",null,e)}})),p.a.createElement("h4",{className:"mt-4 mb-3"},p.a.createElement(f.a,{id:"AppWhitelist.header.feedback",defaultMessage:"Share Your Feedback with Us"})),p.a.createElement("p",null,p.a.createElement(f.a,{id:"AppWhitelist.feedback1",defaultMessage:"We\u2019re thrilled to offer this new feature to our Flora users. It\u2019s our goal to help you unlock your potential and achieve your dreams, and we believe that this whitelist feature is a step in that direction. We want to encourage you to use it to customize your Focus sessions to your specific needs, and to make the most of your time with Flora.",values:{em:e=>p.a.createElement("em",null,e)}})),p.a.createElement("p",{className:"mb-5"},p.a.createElement(f.a,{id:"AppWhitelist.feedback2",defaultMessage:"As always, we\u2019re here to support you on your journey. If you have any questions or feedback, don\u2019t hesitate to reach out to us. We love to hear from you and to continue improving our app to meet your needs. Together, we can grow trees and cultivate our focus, one task at a time. Let's do this<em>!</em>",values:{em:e=>p.a.createElement("em",null,e)}}))),p.a.createElement("section",{className:E()(s.a.footer,"px-1 py-5")},p.a.createElement(g.a,null,p.a.createElement("p",{className:"q"},p.a.createElement(f.a,{id:"AppWhitelist.faq.when.q",defaultMessage:"Q: When should I enable app whitelist?",values:{em:e=>p.a.createElement("em",null,e)}})),p.a.createElement("div",null,p.a.createElement(f.a,{id:"AppWhitelist.faq.when.a",defaultMessage:"<p>For many users, Flora\u2019s default app-blocking behavior works just right to help them stay focused in today\u2019s digital age, where phones are the major source of distractions. However, if you work with your phone and need certain apps to complete your task, consider enabling the whitelist feature.</p>",values:{em:e=>p.a.createElement("em",null,e),ui:e=>"\u201c".concat(e,"\u201d"),p:e=>p.a.createElement("p",null,e),ol:e=>p.a.createElement("ol",null,e),li:e=>p.a.createElement("li",null,p.a.createElement("p",null,e))}})),p.a.createElement("p",{className:"q"},p.a.createElement(f.a,{id:"AppWhitelist.faq.treeKilled.q",defaultMessage:"Q: Can the whitelist feature guarantee that my tree will never die during a Focus session?",values:{em:e=>p.a.createElement("em",null,e)}})),p.a.createElement("div",null,p.a.createElement(f.a,{id:"AppWhitelist.faq.treeKilled.a",defaultMessage:"<p>No. When the whitelist feature is enabled, you will kill a tree if you try to cancel an ongoing Focus session by, for example, killing the Flora app. Therefore, it\u2019s still important to be mindful and committed to your Focus session in order to successfully grow your tree.</p>",values:{em:e=>p.a.createElement("em",null,e),ui:e=>"\u201c".concat(e,"\u201d"),p:e=>p.a.createElement("p",null,e),ol:e=>p.a.createElement("ol",null,e),li:e=>p.a.createElement("li",null,p.a.createElement("p",null,e))}})))))}}}]);
//# sourceMappingURL=9.56709bde.chunk.js.map