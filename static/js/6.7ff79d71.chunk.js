(this["webpackJsonpflora-landing"]=this["webpackJsonpflora-landing"]||[]).push([[6],{422:function(e,t,a){"use strict";var n=a(13),r=a(41),o=a(1),s=a.n(o),l=a(425);function c(e){return!e||"#"===e.trim()}var i=s.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"a":a,i=e.disabled,u=e.onKeyDown,f=Object(r.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,a=f.onClick;(i||c(t))&&e.preventDefault(),i?e.stopPropagation():a&&a(e)};return c(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),i&&(f.tabIndex=-1,f["aria-disabled"]=!0),s.a.createElement(o,Object(n.a)({ref:t},f,{onClick:d,onKeyDown:Object(l.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),u)}))}));i.displayName="SafeAnchor",t.a=i},425:function(e,t,a){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)}},426:function(e,t,a){"use strict";var n=a(13),r=a(41),o=a(128),s=a.n(o),l=a(1),c=a.n(l),i=a(129),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.fluid,l=e.as,u=void 0===l?"div":l,f=e.className,d=Object(r.a)(e,["bsPrefix","fluid","as","className"]),p=Object(i.a)(a,"container"),m="string"===typeof o?"-"+o:"-fluid";return c.a.createElement(u,Object(n.a)({ref:t},d,{className:s()(f,o?""+p+m:p)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},438:function(e,t,a){"use strict";var n=a(13),r=a(41),o=a(128),s=a.n(o),l=a(1),c=a.n(l),i=a(129),u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,f=void 0===l?"div":l,d=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(i.a)(a,"col"),m=[],v=[];return u.forEach((function(e){var t,a,n,r=d[e];if(delete d[e],"object"===typeof r&&null!=r){var o=r.span;t=void 0===o||o,a=r.offset,n=r.order}else t=r;var s="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+p+s:""+p+s+"-"+t),null!=n&&v.push("order"+s+"-"+n),null!=a&&v.push("offset"+s+"-"+a)})),m.length||m.push(p),c.a.createElement(f,Object(n.a)({},d,{ref:t,className:s.a.apply(void 0,[o].concat(m,v))}))}));f.displayName="Col",t.a=f},465:function(e,t,a){"use strict";var n=a(13),r=a(41),o=a(128),s=a.n(o),l=a(1),c=a.n(l),i=a(129),u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.noGutters,f=e.as,d=void 0===f?"div":f,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(i.a)(a,"row"),v=m+"-cols",y=[];return u.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&y.push(""+v+n+"-"+t)})),c.a.createElement(d,Object(n.a)({ref:t},p,{className:s.a.apply(void 0,[o,m,l&&"no-gutters"].concat(y))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},466:function(e,t,a){"use strict";var n=a(13),r=a(41),o=a(128),s=a.n(o),l=a(1),c=a.n(l),i=a(129),u=a(422),f=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.variant,l=e.size,f=e.active,d=e.className,p=e.block,m=e.type,v=e.as,y=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(i.a)(a,"btn"),g=s()(d,b,f&&"active",b+"-"+o,p&&b+"-block",l&&b+"-"+l);if(y.href)return c.a.createElement(u.a,Object(n.a)({},y,{as:v,ref:t,className:s()(g,y.disabled&&"disabled")}));t&&(y.ref=t),m?y.type=m:v||(y.type="button");var h=v||"button";return c.a.createElement(h,Object(n.a)({},y,{className:g}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=f},467:function(e,t,a){"use strict";var n=a(1),r=a(132),o=a(54),s=a(124),l=a.n(s),c=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(t,a)};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},u=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<a;t++)for(var o=arguments[t],s=0,l=o.length;s<l;s++,r++)n[r]=o[s];return n},f=l.a||s,d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.shouldComponentUpdate=function(e){var t=this.props,a=t.values,n=i(t,["values"]),r=e.values,o=i(e,["values"]);return!f(r,a)||!f(n,o)},t.prototype.render=function(){var e=this;return n.createElement(r.a.Consumer,null,(function(t){Object(o.c)(t);var a=t.formatMessage,r=t.textComponent,s=void 0===r?n.Fragment:r,l=e.props,c=l.id,i=l.description,f=l.defaultMessage,d=l.values,p=l.children,m=l.tagName,v=void 0===m?s:m,y=a({id:c,description:i,defaultMessage:f},d);return Array.isArray(y)||(y=[y]),"function"===typeof p?p(y):v?n.createElement.apply(n,u([v,null],y)):y}))},t.displayName="FormattedMessage",t}(n.Component);t.a=d},486:function(e,t,a){e.exports={component:"NotFound_component__12QTm",gearsImg:"NotFound_gearsImg__3h30-"}},487:function(e,t,a){e.exports=a.p+"static/media/gears.8e85058e.svg"},502:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(486),r=a.n(n),o=a(487),s=a.n(o),l=a(1),c=a.n(l),i=a(130),u=a(467),f=a(128),d=a.n(f),p=a(426),m=a(465),v=a(438),y=a(466),b=a(202);function g(e){e.locale;var t=Object(l.useContext)(b.AppContext);return c.a.createElement("div",{className:d()(r.a.component,"d-flex justify-content-center align-items-center")},c.a.createElement(i.a,null,c.a.createElement("title",null,t.intl.formatMessage({id:"NotFound.pageTitle",defaultMessage:"404 Not Found"}))),c.a.createElement(p.a,null,c.a.createElement(m.a,null,c.a.createElement(v.a,{xs:"12"},c.a.createElement("h1",{className:"display-3 mb-0"},c.a.createElement(u.a,{id:"NotFound.title",defaultMessage:"404 Not Found"})))),c.a.createElement(m.a,{className:"justify-content-center"},c.a.createElement(v.a,{xs:"10",sm:"8",md:"7",lg:"6",xl:"5"},c.a.createElement("img",{className:d()(r.a.gearsImg,"img-fluid my-5 my-sm-3 my-md-4"),src:s.a,alt:"Gears"}))),c.a.createElement(m.a,{className:"justify-content-center"},c.a.createElement(v.a,{md:"10",lg:"8",xl:"7"},c.a.createElement("p",null,c.a.createElement(u.a,{id:"NotFound.text",defaultMessage:"The requested page does not exist. Please make sure that you entered the correct URL. Or you can navigate to our homepage to find what you need."})),c.a.createElement("p",null,c.a.createElement(y.a,{variant:"primary",size:"lg",href:"/"},c.a.createElement(u.a,{id:"NotFound.button",defaultMessage:"Go to Homepage"})))))))}}}]);
//# sourceMappingURL=6.7ff79d71.chunk.js.map