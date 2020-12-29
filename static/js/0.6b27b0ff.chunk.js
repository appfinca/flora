(this["webpackJsonpflora-landing"]=this["webpackJsonpflora-landing"]||[]).push([[0],{425:function(t,n,e){"use strict";function r(t){return t&&t.ownerDocument||document}e.d(n,"a",(function(){return r}))},426:function(t,n,e){"use strict";n.a=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return null!=t})).reduce((function(t,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===t?n:function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];t.apply(this,r),n.apply(this,r)}}),null)}},427:function(t,n,e){"use strict";var r=e(14),i=e(42),o=e(129),a=e.n(o),s=e(0),u=e.n(s),c=e(130),l=u.a.forwardRef((function(t,n){var e=t.bsPrefix,o=t.fluid,s=t.as,l=void 0===s?"div":s,f=t.className,p=Object(i.a)(t,["bsPrefix","fluid","as","className"]),d=Object(c.a)(e,"container"),m="string"===typeof o?"-"+o:"-fluid";return u.a.createElement(l,Object(r.a)({ref:n},p,{className:a()(f,o?""+d+m:d)}))}));l.displayName="Container",l.defaultProps={fluid:!1},n.a=l},429:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(432),i=e(442);function o(t,n,e){void 0===e&&(e=5);var r=!1,o=setTimeout((function(){r||function(t){var n=document.createEvent("HTMLEvents");n.initEvent("transitionend",!0,!0),t.dispatchEvent(n)}(t)}),n+e),a=Object(i.a)(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function a(t,n,e,a){null==e&&(e=function(t){var n=Object(r.a)(t,"transitionDuration")||"",e=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*e}(t)||0);var s=o(t,e,a),u=Object(i.a)(t,"transitionend",n);return function(){s(),u()}}},430:function(t,n,e){"use strict";n.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},432:function(t,n,e){"use strict";var r=e(425);function i(t,n){return function(t){var n=Object(r.a)(t);return n&&n.defaultView||window}(t).getComputedStyle(t,n)}var o=/([A-Z])/g;var a=/^ms-/;function s(t){return function(t){return t.replace(o,"-$1").toLowerCase()}(t).replace(a,"-ms-")}var u=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;n.a=function(t,n){var e="",r="";if("string"===typeof n)return t.style.getPropertyValue(s(n))||i(t).getPropertyValue(s(n));Object.keys(n).forEach((function(i){var o=n[i];o||0===o?!function(t){return!(!t||!u.test(t))}(i)?e+=s(i)+": "+o+";":r+=i+"("+o+") ":t.style.removeProperty(s(i))})),r&&(e+="transform: "+r+";"),t.style.cssText+=";"+e}},436:function(t,n,e){"use strict";function r(t){t.offsetHeight}e.d(n,"a",(function(){return r}))},437:function(t,n,e){"use strict";e.d(n,"c",(function(){return f})),e.d(n,"b",(function(){return p})),e.d(n,"a",(function(){return d})),e.d(n,"d",(function(){return m}));var r=e(42),i=e(31),o=(e(7),e(0)),a=e.n(o),s=e(96),u=e.n(s),c=!1,l=a.a.createContext(null),f="exited",p="entering",d="entered",m="exiting",h=function(t){function n(n,e){var r;r=t.call(this,n,e)||this;var i,o=e&&!e.isMounting?n.enter:n.appear;return r.appearStatus=null,n.in?o?(i=f,r.appearStatus=p):i=d:i=n.unmountOnExit||n.mountOnEnter?"unmounted":f,r.state={status:i},r.nextCallback=null,r}Object(i.a)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&"unmounted"===n.status?{status:f}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==p&&e!==d&&(n=p):e!==p&&e!==d||(n=m)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,r=this.props.timeout;return t=n=e=r,null!=r&&"number"!==typeof r&&(t=r.exit,n=r.enter,e=void 0!==r.appear?r.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===p?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===f&&this.setState({status:"unmounted"})},e.performEnter=function(t){var n=this,e=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[u.a.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!t&&!e||c?this.safeSetState({status:d},(function(){n.props.onEntered(o)})):(this.props.onEnter(o,a),this.safeSetState({status:p},(function(){n.props.onEntering(o,a),n.onTransitionEnd(l,(function(){n.safeSetState({status:d},(function(){n.props.onEntered(o,a)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),r=this.props.nodeRef?void 0:u.a.findDOMNode(this);n&&!c?(this.props.onExit(r),this.safeSetState({status:m},(function(){t.props.onExiting(r),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(r)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(r){e&&(e=!1,n.nextCallback=null,t(r))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(e&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if("unmounted"===t)return null;var n=this.props,e=n.children,i=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,Object(r.a)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(l.Provider,{value:null},"function"===typeof e?e(t,i):a.a.cloneElement(a.a.Children.only(e),i))},n}(a.a.Component);function E(){}h.contextType=l,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},h.UNMOUNTED="unmounted",h.EXITED=f,h.ENTERING=p,h.ENTERED=d,h.EXITING=m;n.e=h},439:function(t,n,e){"use strict";var r=e(14),i=e(42),o=e(129),a=e.n(o),s=e(0),u=e.n(s),c=e(130),l=["xl","lg","md","sm","xs"],f=u.a.forwardRef((function(t,n){var e=t.bsPrefix,o=t.className,s=t.as,f=void 0===s?"div":s,p=Object(i.a)(t,["bsPrefix","className","as"]),d=Object(c.a)(e,"col"),m=[],h=[];return l.forEach((function(t){var n,e,r,i=p[t];if(delete p[t],"object"===typeof i&&null!=i){var o=i.span;n=void 0===o||o,e=i.offset,r=i.order}else n=i;var a="xs"!==t?"-"+t:"";n&&m.push(!0===n?""+d+a:""+d+a+"-"+n),null!=r&&h.push("order"+a+"-"+r),null!=e&&h.push("offset"+a+"-"+e)})),m.length||m.push(d),u.a.createElement(f,Object(r.a)({},p,{ref:n,className:a.a.apply(void 0,[o].concat(m,h))}))}));f.displayName="Col",n.a=f},442:function(t,n,e){"use strict";var r=e(443),i=e(444);n.a=function(t,n,e,o){return Object(r.a)(t,n,e,o),function(){Object(i.a)(t,n,e,o)}}},443:function(t,n,e){"use strict";var r=e(430),i=!1,o=!1;try{var a={get passive(){return i=!0},get once(){return o=i=!0}};r.a&&(window.addEventListener("test",a,a),window.removeEventListener("test",a,!0))}catch(s){}n.a=function(t,n,e,r){if(r&&"boolean"!==typeof r&&!o){var a=r.once,s=r.capture,u=e;!o&&a&&(u=e.__once||function t(r){this.removeEventListener(n,t,s),e.call(this,r)},e.__once=u),t.addEventListener(n,u,i?r:s)}t.addEventListener(n,e,r)}},444:function(t,n,e){"use strict";n.a=function(t,n,e,r){var i=r&&"boolean"!==typeof r?r.capture:r;t.removeEventListener(n,e,i),e.__once&&t.removeEventListener(n,e.__once,i)}},467:function(t,n,e){"use strict";var r=e(14),i=e(42),o=e(129),a=e.n(o),s=e(0),u=e.n(s),c=e(130),l=["xl","lg","md","sm","xs"],f=u.a.forwardRef((function(t,n){var e=t.bsPrefix,o=t.className,s=t.noGutters,f=t.as,p=void 0===f?"div":f,d=Object(i.a)(t,["bsPrefix","className","noGutters","as"]),m=Object(c.a)(e,"row"),h=m+"-cols",E=[];return l.forEach((function(t){var n,e=d[t];delete d[t];var r="xs"!==t?"-"+t:"";null!=(n=null!=e&&"object"===typeof e?e.cols:e)&&E.push(""+h+r+"-"+n)})),u.a.createElement(p,Object(r.a)({ref:n},d,{className:a.a.apply(void 0,[o,m,s&&"no-gutters"].concat(E))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},n.a=f},469:function(t,n,e){"use strict";var r=e(2),i=e(0),o=e(133),a=e(55),s=e(125),u=e.n(s).a||s,c=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(r.b)(n,t),n.prototype.shouldComponentUpdate=function(t){var n=this.props,e=n.values,i=Object(r.c)(n,["values"]),o=t.values,a=Object(r.c)(t,["values"]);return!u(o,e)||!u(i,a)},n.prototype.render=function(){var t=this;return i.createElement(o.a.Consumer,null,(function(n){Object(a.c)(n);var e=n.formatMessage,o=n.textComponent,s=void 0===o?i.Fragment:o,u=t.props,c=u.id,l=u.description,f=u.defaultMessage,p=u.values,d=u.children,m=u.tagName,h=void 0===m?s:m,E=e({id:c,description:l,defaultMessage:f},p);return Array.isArray(E)||(E=[E]),"function"===typeof d?d(E):h?i.createElement.apply(i,Object(r.d)([h,null],E)):E}))},n.displayName="FormattedMessage",n}(i.Component);n.a=c},476:function(t,n,e){"use strict";var r,i=e(14),o=e(42),a=e(129),s=e.n(a),u=e(432),c=e(429),l=e(0),f=e.n(l),p=e(437),d=e(426),m=e(436),h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function E(t,n){var e=n["offset"+t[0].toUpperCase()+t.slice(1)],r=h[t];return e+parseInt(Object(u.a)(n,r[0]),10)+parseInt(Object(u.a)(n,r[1]),10)}var v=((r={})[p.c]="collapse",r[p.d]="collapsing",r[p.b]="collapsing",r[p.a]="collapse show",r),x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:E},b=f.a.forwardRef((function(t,n){var e=t.onEnter,r=t.onEntering,a=t.onEntered,u=t.onExit,h=t.onExiting,x=t.className,b=t.children,g=t.dimension,O=void 0===g?"height":g,y=t.getDimensionValue,j=void 0===y?E:y,N=Object(o.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),w="function"===typeof O?O():O,C=Object(l.useMemo)((function(){return Object(d.a)((function(t){t.style[w]="0"}),e)}),[w,e]),S=Object(l.useMemo)((function(){return Object(d.a)((function(t){var n="scroll"+w[0].toUpperCase()+w.slice(1);t.style[w]=t[n]+"px"}),r)}),[w,r]),k=Object(l.useMemo)((function(){return Object(d.a)((function(t){t.style[w]=null}),a)}),[w,a]),T=Object(l.useMemo)((function(){return Object(d.a)((function(t){t.style[w]=j(w,t)+"px",Object(m.a)(t)}),u)}),[u,j,w]),M=Object(l.useMemo)((function(){return Object(d.a)((function(t){t.style[w]=null}),h)}),[w,h]);return f.a.createElement(p.e,Object(i.a)({ref:n,addEndListener:c.a},N,{"aria-expanded":N.role?N.in:null,onEnter:C,onEntering:S,onEntered:k,onExit:T,onExiting:M}),(function(t,n){return f.a.cloneElement(b,Object(i.a)({},n,{className:s()(x,b.props.className,v[t],"width"===w&&"width")}))}))}));b.defaultProps=x,n.a=b}}]);
//# sourceMappingURL=0.6b27b0ff.chunk.js.map