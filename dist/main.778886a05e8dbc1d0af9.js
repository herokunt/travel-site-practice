!function(e){function t(t){for(var r,s,l=t[0],c=t[1],a=t[2],d=0,h=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);h.length;)h.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={0:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=function(e){return s.p+""+({}[e]||e)+"."+{2:"fa018a7e0b1a5807cb31"}[e]+".js"}(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(a);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[e]=void 0}};var a=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var u=c;o.push([136,1]),n()}({136:function(e,t,n){n(137),e.exports=n(350)},339:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);n(339),n(340);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(t){return e.toggleMenu()}))}},{key:"toggleMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded")}}])&&r(t.prototype,n),i&&r(t,i),e}(),o=n(96);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hiddenItems=Array.from(t),this.revealThreshold=n,this.browserHeight=window.innerHeight,this.scrollThrottle=Object(o.throttle)(this.calcCaller,200).bind(this),this.events(),this.hideItemsOnLoad()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",Object(o.debounce)((function(){return e.browserHeight=window.innerHeight}),350))}},{key:"hideItemsOnLoad",value:function(){this.hiddenItems.forEach((function(e){e.classList.add("reveal-item"),e.isHidden=!0})),this.hiddenItems[this.hiddenItems.length-1].isLastItem=!0}},{key:"calcCaller",value:function(){var e=this;console.log("runn"),this.hiddenItems.forEach((function(t){t.isHidden&&e.calculateScrollPosition(t)}))}},{key:"calculateScrollPosition",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&e.getBoundingClientRect().y/this.browserHeight*100>this.revealThreshold&&(e.classList.add("reveal-item--is-visible"),e.isHidden=!1,e.isLastItem&&(this.hiddenItems=this.hiddenItems.filter((function(e){return!0===e.isHidden})),0===this.hiddenItems.length?window.removeEventListener("scroll",this.scrollThrottle):this.hiddenItems[this.hiddenItems.length-1].isLastItem=!0))}}])&&s(t.prototype,n),r&&s(t,r),e}(),c=n(135),a=n.n(c),u=n(95),d=n.n(u);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f,v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.navLinks=document.querySelectorAll(".primary-nav a"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.scrollDirection=null,this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",a()((function(){return e.runOnScroll()}),100)),window.addEventListener("resize",d()((function(){return e.browserHeight=window.innerHeight}),250))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):(this.siteHeader.classList.remove("site-header--dark"),this.navLinks.forEach((function(e){return e.classList.remove("is-current-link")}))),this.pageSections.forEach((function(t){return e.calculateScrollPosition(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calculateScrollPosition",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().y/this.browserHeight*100;if(t>1&&t<30&&"down"==this.scrollDirection||t<70&&"up"==this.scrollDirection){this.navLinks.forEach((function(e){return e.classList.remove("is-current-link")}));var n=e.getAttribute("data-matching-link");document.querySelector(n).classList.add("is-current-link")}}}}])&&h(t.prototype,n),r&&h(t,r),e}();new l(document.querySelectorAll(".feature-item"),25),new l(document.querySelectorAll(".testimonial"),40),new i,new v,document.body.addEventListener("click",(function(e){e.target.classList.contains("open-modal")&&(e.preventDefault(),void 0===f?n.e(2).then(n.bind(null,351)).then((function(e){f=new e.default,setTimeout(f.openModal(),20)})).catch((function(){return console.log("error")})):f.openModal())}))}});