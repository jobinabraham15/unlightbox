!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Unlightbox",[],e):"object"==typeof exports?exports.Unlightbox=e():t.Unlightbox=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";t.exports=n(2)},function(t,e,n){var r=n(9).default;t.exports=r,t.exports.default=r},function(t,e,n){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(3),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112;o&&Symbol.for("react.placeholder");var b="function"==typeof Symbol&&Symbol.iterator;function h(t){for(var e=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=0;r<e;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(t,e,n,r,o,i,a,u){if(!t){if(t=void 0,void 0===e)t=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,u],s=0;(t=Error(e.replace(/%s/g,function(){return c[s++]}))).name="Invariant Violation"}throw t.framesToPop=1,t}}(!1,"Minified React error #"+t+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(t,e,n){this.props=t,this.context=e,this.refs=m,this.updater=n||y}function v(){}function w(t,e,n){this.props=t,this.context=e,this.refs=m,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(t,e){"object"!=typeof t&&"function"!=typeof t&&null!=t&&h("85"),this.updater.enqueueSetState(this,t,e,"setState")},g.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},v.prototype=g.prototype;var S=w.prototype=new v;S.constructor=w,r(S,g.prototype),S.isPureReactComponent=!0;var O={current:null,currentDispatcher:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,n){var r=void 0,o={},a=null,u=null;if(null!=e)for(r in void 0!==e.ref&&(u=e.ref),void 0!==e.key&&(a=""+e.key),e)j.call(e,r)&&!x.hasOwnProperty(r)&&(o[r]=e[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}if(t&&t.defaultProps)for(r in c=t.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:t,key:a,ref:u,props:o,_owner:O.current}}function E(t){return"object"==typeof t&&null!==t&&t.$$typeof===i}var k=/\/+/g,R=[];function P(t,e,n,r){if(R.length){var o=R.pop();return o.result=t,o.keyPrefix=e,o.func=n,o.context=r,o.count=0,o}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function I(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>R.length&&R.push(t)}function C(t,e,n){return null==t?0:function t(e,n,r,o){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case a:c=!0}}if(c)return r(o,e,""===n?"."+U(e,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=n+U(u=e[s],s);c+=t(u,l,r,o)}else if(l=null===e||"object"!=typeof e?null:"function"==typeof(l=b&&e[b]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)c+=t(u=u.value,l=n+U(u,s++),r,o);else"object"===u&&h("31","[object Object]"==(r=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return c}(t,"",e,n)}function U(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}(t.key):e.toString(36)}function M(t,e){t.func.call(t.context,e,t.count++)}function L(t,e,n){var r=t.result,o=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?T(t,r,n,function(t){return t}):null!=t&&(E(t)&&(t=function(t,e){return{$$typeof:i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,o+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(k,"$&/")+"/")+n)),r.push(t))}function T(t,e,n,r,o){var i="";null!=n&&(i=(""+n).replace(k,"$&/")+"/"),C(t,L,e=P(e,i,r,o)),I(e)}var A={Children:{map:function(t,e,n){if(null==t)return t;var r=[];return T(t,r,null,e,n),r},forEach:function(t,e,n){if(null==t)return t;C(t,M,e=P(null,null,e,n)),I(e)},count:function(t){return C(t,function(){return null},null)},toArray:function(t){var e=[];return T(t,e,null,function(t){return t}),e},only:function(t){return E(t)||h("143"),t}},createRef:function(){return{current:null}},Component:g,PureComponent:w,createContext:function(t,e){return void 0===e&&(e=null),(t={$$typeof:f,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:l,_context:t},t.Consumer=t,t.unstable_read=function(t,e){var n=O.currentDispatcher;return null===n&&h("277"),n.readContext(t,e)}.bind(null,t),t},forwardRef:function(t){return{$$typeof:d,render:t}},Fragment:u,StrictMode:c,unstable_AsyncMode:p,unstable_Profiler:s,createElement:_,cloneElement:function(t,e,n){(null===t||void 0===t)&&h("267",t);var o=void 0,a=r({},t.props),u=t.key,c=t.ref,s=t._owner;if(null!=e){void 0!==e.ref&&(c=e.ref,s=O.current),void 0!==e.key&&(u=""+e.key);var l=void 0;for(o in t.type&&t.type.defaultProps&&(l=t.type.defaultProps),e)j.call(e,o)&&!x.hasOwnProperty(o)&&(a[o]=void 0===e[o]&&void 0!==l?l[o]:e[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){l=Array(o);for(var f=0;f<o;f++)l[f]=arguments[f+2];a.children=l}return{$$typeof:i,type:t.type,key:u,ref:c,props:a,_owner:s}},createFactory:function(t){var e=_.bind(null,t);return e.type=t,e},isValidElement:E,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:O,assign:r}},$={default:A},N=$&&A||$;t.exports=N.default||N},function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,u=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))o.call(n,s)&&(u[s]=n[s]);if(r){a=r(n);for(var l=0;l<a.length;l++)i.call(n,a[l])&&(u[a[l]]=n[a[l]])}}return u}},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".draggable {\n  cursor: move;\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n\n.draggable:active {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.unlightbox-toolbar {\n  background: #e8e8e8;\n  padding: 10px 0 10px 0;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n\n.unlightbox-toolbar .btn-group {\n  display: block;\n  margin: 0 auto;\n  width: 54%;\n  text-align: center;\n}\n\n.unlightbox-toolbar .btn-group > .toolbar-btn {\n  background: black;\n  opacity: 1;\n  color: white;\n  box-shadow: none;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.unlightbox-toolbar .btn-group > .toolbar-btn:disabled {\n  background: #8a8a8a;\n  border: #474748;\n  cursor: not-allowed;\n}\n\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),a=null,u=0,c=[],s=n(8);function l(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(y(o.parts[a],e))}else{var u=[];for(a=0;a<o.parts.length;a++)u.push(y(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:u}}}}function f(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,n);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return h(e,t.attrs),p(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var c=u++;n=a||(a=b(e)),r=g.bind(null,n,c,!1),o=g.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=s(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return l(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(u=r[a.id]).refs--,o.push(u)}t&&l(f(t,e),e);for(i=0;i<o.length;i++){var u;if(0===(u=o[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete r[u.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=function(t){var e=new Image;return e.src=t,e};n(4);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=u(this,c(e).call(this,t))).getInitialState=function(){return{relX:null,relY:null,dragging:!1,posX:0,posY:0}},n.onMouseDown=function(t){var e=t.pageX,r=t.pageY;if(0===t.button){var o=n.containerRef.current,i=o.offsetLeft,a=o.offsetTop;n.setState({dragging:!0,relX:e-i,relY:r-a}),t.stopPropagation(),t.preventDefault()}},n.onMouseUp=function(t){n.state.dragging&&n.setState({dragging:!1})},n.onMouseMove=function(t){if(n.state.dragging){var e=t.pageX,r=t.pageY;n.setState({posX:e-n.state.relX,posY:r-n.state.relY}),t.stopPropagation(),t.preventDefault()}},n.state=n.getInitialState(),n.containerRef=r.createRef(),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,r["Component"]),function(t,e,n){e&&a(t.prototype,e),n&&a(t,n)}(e,[{key:"render",value:function(){var t=Object.assign({},this.props.innerStyle,{left:this.state.posX,top:this.state.posY,position:"absolute",right:0,marginLeft:0,marginRight:0}),e=Object.assign({},this.props.containerStyle,{position:"relative",width:this.props.outerWidth+"px",height:this.props.outerheight+"px",overflow:"auto"});return r.createElement("div",{style:e},r.createElement("div",{onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp,style:t,ref:this.containerRef,className:"draggable"},this.props.children))}}]),e}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y,m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,b(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,r["Component"]),function(t,e,n){e&&p(t.prototype,e),n&&p(t,n)}(e,[{key:"render",value:function(){var t=this,e=this.props.className?" "+this.props.className:"";return r.createElement("div",{className:"unlightbox-toolbar".concat(e),style:this.props.style},r.createElement("div",{className:"btn-group"},r.createElement("button",{onClick:function(e){t.props.onZoomIn(e)},className:"toolbar-btn",disabled:this.props.zoominState===y.disabled},"Zoom In"),r.createElement("button",{onClick:function(e){t.props.onZoomOut(e)},className:"toolbar-btn",disabled:this.props.zoomoutState===y.disabled},"Zoom Out"),r.createElement("button",{onClick:function(e){t.props.onRotate(e)},className:"toolbar-btn"},"Rotate")))}}]),e}();function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}!function(t){t.active="active",t.disabled="disabled"}(y||(y={})),n.d(e,"default",function(){return x});var j={objectFit:"scale-down",display:"block",margin:"0 auto",position:"relative"},x=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?O(t):e}(this,w(e).call(this,t))).getInitialStates=function(){return{imageRef:r.createRef(),dragableContainerRef:r.createRef(),zoomInState:y.active,zoomOutState:y.active,image:null,imageWidth:null,imageHeight:null,containerWidth:n.props.containerWidth||300,containerHeight:n.props.containerHeight||300,imgRotation:0,imageFit:"scale-down",scale:1}},n.loadImage=function(){var t=O(O(n)),e=o.call(t,n.props.url);e.onload=function(){t.originalImage=e,t.onImageLoad()}},n.disableZoomIn=function(){n.state.zoomInState!==y.disabled&&n.setState({zoomInState:y.disabled})},n.enableZoomIn=function(){n.state.zoomInState!==y.active&&n.setState({zoomInState:y.active})},n.disableZoomOut=function(){n.state.zoomOutState!==y.disabled&&n.setState({zoomOutState:y.disabled})},n.enableZoomOut=function(){n.state.zoomOutState!==y.active&&n.setState({zoomOutState:y.active})},n.zoomIn=function(){n.setState({scale:n.state.scale+(n.props.scaleFactor||.25)})},n.zoomOut=function(){n.setState({scale:n.state.scale-(n.props.scaleFactor||.25)})},n.rotate=function(){var t=n.state.imgRotation;t=t>=270?0:t+90;var e=n.state.image,r=e.height,o=e.width,i=n.state.containerWidth,a=n.state.containerHeight,u=n.getImageProperties(o,r,i,a);n.setState({imgRotation:t,imageHeight:u.height+"px"})},n.getImageFit=function(t,e,r){return t=t||n.state.image.naturalWidth,e=e||n.state.image.naturalHeight,r=r||n.state.containerWidth,t>=e&&t<r?"contain":"scale-down"},n.getImageProperties=function(t,e,n,r){var o,i,a=t/e;return a>1?(i=n/a,o=n):(o=r*a,i=r),i<r&&(i=r),{width:o,height:i}},n.onImageLoad=function(){var t=n.originalImage,e=t.naturalHeight,r=t.naturalWidth,o=n.state.containerWidth,i=n.state.containerHeight,a=n.getImageProperties(r,e,o,i);n.setState({imageWidth:a.width+"px",imageHeight:a.height+"px",image:t})},n.state=n.getInitialStates(),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,r["Component"]),function(t,e,n){e&&v(t.prototype,e),n&&v(t,n)}(e,[{key:"componentDidMount",value:function(){this.loadImage()}},{key:"render",value:function(){var t=Object.assign({},this.props.imageStyles||{},j,{width:this.state.imageWidth,height:this.state.imageHeight,transform:"rotate(".concat(this.state.imgRotation,"deg) scale(").concat(this.state.scale,")"),objectFit:this.state.imageFit||void 0}),e=Object.assign({},this.props.containerStyle,{boxSizing:"border-box"}),n=Object.assign({},this.props.toolbarStyle,{width:this.props.containerWidth});return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement(m,{onZoomIn:this.zoomIn,onZoomOut:this.zoomOut,onRotate:this.rotate,style:n})),r.createElement("div",null,r.createElement("div",null,r.createElement(l,{innerStyle:{width:this.state.containerWidth,height:this.state.containerHeight,overflow:"visible"},containerStyle:e,outerWidth:this.state.containerWidth,outerheight:this.state.containerHeight},this.state.image?r.createElement("img",{style:t,ref:this.state.imageRef,src:this.state.image.src}):r.createElement("h1",{style:{color:"#969696",textAlign:"center",marginTop:"30px"}},r.createElement("div",null,"Loading your image"))))))}}]),e}()}])});