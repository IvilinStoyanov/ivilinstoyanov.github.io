(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{iydT:function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return f}));var o=n("ofXK"),i=n("tyNb"),r=n("ljCc"),a=n("fXoL");let s=(()=>{class t{constructor(){this.isParticleInvoked=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const c=function(){return["/projects"]},l=[{path:"",component:(()=>{class t{constructor(t){this.globalService=t}ngOnInit(){!0===this.globalService.isParticleInvoked&&r.destroy(),r.init({selector:".background",color:["#d09c91","#8e8e8e"],maxParticles:200}),this.globalService.isParticleInvoked=!0}}return t.\u0275fac=function(e){return new(e||t)(a.Ib(s))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-home"]],decls:17,vars:2,consts:[[1,"background-image"],[1,"left-side-menu"],[1,"vl"],["href","https://github.com/IvilinStoyanov","target","_blank",1,"theme"],[1,"icofont-github"],["href","https://www.instagram.com/ivilinstoyanov","target","_blank",1,"theme"],[1,"icofont-instagram"],["href","https://www.facebook.com/ivilin.stoyanov","target","_blank",1,"theme"],[1,"icofont-facebook"],[1,"banner-text","text-center"],[1,"theme","animated","fadeInUp","delay-2s"],[1,"text-muted","animated","fadeInUp","delay-2s"],[1,"expand-more","animated","fadeIn","delay-2s","hover",3,"routerLink"],[1,"background",2,"width","100%","height","100%"]],template:function(t,e){1&t&&(a.Jb(0,"div",0),a.Mb(1,"div",1),a.Jb(2,"div",2),a.Mb(3,"a",3),a.Jb(4,"i",4),a.Lb(),a.Mb(5,"a",5),a.Jb(6,"i",6),a.Lb(),a.Mb(7,"a",7),a.Jb(8,"i",8),a.Lb(),a.Jb(9,"div",2),a.Lb(),a.Mb(10,"div",9),a.Mb(11,"h1",10),a.nc(12,"Ivilin Stoyanov"),a.Lb(),a.Mb(13,"h5",11),a.nc(14,"Web Developer <> Web Designer"),a.Lb(),a.Lb(),a.Jb(15,"div",12),a.Jb(16,"canvas",13)),2&t&&(a.wb(15),a.ac("routerLink",a.cc(1,c)))},directives:[i.g],styles:[".background[_ngcontent-%COMP%]{position:absolute;display:block;top:0;left:0;z-index:-1;min-height:100vh}.background-image[_ngcontent-%COMP%]{width:100%;height:100vh;position:fixed;top:0;left:0;background:url(home-bg-min.b6e2f9a1a27b97739ffe.png) no-repeat 100% 100% fixed;background-size:contain;overflow-x:hidden;z-index:-1}.left-side-menu[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);top:50%;left:20px;display:flex;flex-direction:column}.left-side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{all:unset;text-decoration:none;padding:20px 5px 30px 25px;cursor:pointer}.left-side-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.left-side-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#d09c91}.left-side-menu[_ngcontent-%COMP%]   .vl[_ngcontent-%COMP%]{border-left:1px solid grey;height:86px;margin-left:33px}@media only screen and (max-width:600px){.left-side-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px}.left-side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:15px 10px 15px 5px}.left-side-menu[_ngcontent-%COMP%]   .vl[_ngcontent-%COMP%]{border-left:1px solid grey;height:66px;margin-left:12px}}.banner-text[_ngcontent-%COMP%]{color:rgba(0,0,0,.8);font-family:Arvo,Ubunto,serif;position:absolute;display:block;top:50%;left:50%;z-index:1;transform:translate(-50%,-50%)}.banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:58px}.banner-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:20px}@media only screen and (max-width:600px){.banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:36px}.banner-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:12px}}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[i.j.forChild(l)],i.j]}),t})(),f=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[o.b,p]]}),t})()},ljCc:function(t,e,n){var o,i=function(t,e){"use strict";var n,o={};function i(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}return(n=function(){var t=this;t.defaults={responsive:null,selector:null,maxParticles:100,sizeVariations:3,showParticles:!0,speed:.5,color:"#000000",minDistance:120,connectParticles:!1},t.element=null,t.context=null,t.ratio=null,t.breakpoints=[],t.activeBreakpoint=null,t.breakpointSettings=[],t.originalSettings=null,t.storage=[],t.usingPolyfill=!1}).prototype.init=function(t){var e=this;return e.options=e._extend(e.defaults,t),e.originalSettings=JSON.parse(JSON.stringify(e.options)),e._animate=e._animate.bind(e),e._initializeCanvas(),e._initializeEvents(),e._registerBreakpoints(),e._checkResponsive(),e._initializeStorage(),e._animate(),e},n.prototype.destroy=function(){var e=this;e.storage=[],e.element.remove(),t.removeEventListener("resize",e.listener,!1),t.clearTimeout(e._animation),cancelAnimationFrame(e._animation)},n.prototype._initializeCanvas=function(){var n=this;if(!n.options.selector)return console.warn("particles.js: No selector specified! Check https://github.com/marcbruederlin/particles.js#options"),!1;n.element=e.querySelector(n.options.selector),n.context=n.element.getContext("2d"),n.ratio=(t.devicePixelRatio||1)/(n.context.webkitBackingStorePixelRatio||n.context.mozBackingStorePixelRatio||n.context.msBackingStorePixelRatio||n.context.oBackingStorePixelRatio||n.context.backingStorePixelRatio||1),n.element.width=n.element.offsetParent?n.element.offsetParent.clientWidth*n.ratio:n.element.clientWidth*n.ratio,n.element.height=n.element.offsetParent&&"BODY"===n.element.offsetParent.nodeName?t.innerHeight*n.ratio:n.element.offsetParent?n.element.offsetParent.clientHeight*n.ratio:n.element.clientHeight*n.ratio,n.element.style.width="100%",n.element.style.height="100%",n.context.scale(n.ratio,n.ratio)},n.prototype._initializeEvents=function(){var e=this;e.listener=(function(){e._resize()}).bind(this),t.addEventListener("resize",e.listener,!1)},n.prototype._initializeStorage=function(){var t=this;t.storage=[];for(var e=t.options.maxParticles;e--;)t.storage.push(new o(t.context,t.options))},n.prototype._registerBreakpoints=function(){var t,e,n,o=this,i=o.options.responsive||null;if("object"==typeof i&&null!==i&&i.length){for(t in i)if(n=o.breakpoints.length-1,e=i[t].breakpoint,i.hasOwnProperty(t)){for(;n>=0;)o.breakpoints[n]&&o.breakpoints[n]===e&&o.breakpoints.splice(n,1),n--;o.breakpoints.push(e),o.breakpointSettings[e]=i[t].options}o.breakpoints.sort((function(t,e){return e-t}))}},n.prototype._checkResponsive=function(){var e,n=this,o=!1,i=t.innerWidth;if(n.options.responsive&&n.options.responsive.length&&null!==n.options.responsive){for(e in o=null,n.breakpoints)n.breakpoints.hasOwnProperty(e)&&i<=n.breakpoints[e]&&(o=n.breakpoints[e]);null!==o?(n.activeBreakpoint=o,n.options=n._extend(n.options,n.breakpointSettings[o])):null!==n.activeBreakpoint&&(n.activeBreakpoint=null,o=null,n.options=n._extend(n.options,n.originalSettings))}},n.prototype._refresh=function(){this._initializeStorage(),this._draw()},n.prototype._resize=function(){var e=this;e.element.width=e.element.offsetParent?e.element.offsetParent.clientWidth*e.ratio:e.element.clientWidth*e.ratio,e.element.height=e.element.offsetParent&&"BODY"===e.element.offsetParent.nodeName?t.innerHeight*e.ratio:e.element.offsetParent?e.element.offsetParent.clientHeight*e.ratio:e.element.clientHeight*e.ratio,e.context.scale(e.ratio,e.ratio),clearTimeout(e.windowDelay),e.windowDelay=t.setTimeout((function(){e._checkResponsive(),e._refresh()}),50)},n.prototype._animate=function(){var e=this;e._draw(),e._animation=t.requestAnimFrame(e._animate)},n.prototype.resumeAnimation=function(){this._animation||this._animate()},n.prototype.pauseAnimation=function(){var e=this;e._animation&&(e.usingPolyfill?t.clearTimeout(e._animation):(t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame)(e._animation),e._animation=null)},n.prototype._draw=function(){var e=this,n=e.element,o=n.offsetParent?n.offsetParent.clientWidth:n.clientWidth,r=n.offsetParent?n.offsetParent.clientHeight:n.clientHeight,a=e.options.showParticles,s=e.storage;n.offsetParent&&"BODY"===n.offsetParent.nodeName&&(r=t.innerHeight),e.context.clearRect(0,0,n.width,n.height),e.context.beginPath();for(var c=s.length;c--;){var l=s[c];a&&l._draw(),l._updateCoordinates(o,r)}e.options.connectParticles&&(s.sort(i),e._updateEdges())},n.prototype._updateEdges=function(){for(var t=this,e=t.options.minDistance,n=Math.sqrt,o=Math.abs,i=t.storage,r=i.length,a=0;a<r;a++)for(var s=i[a],c=a+1;c<r;c++){var l,p=i[c],f=s.x-p.x,d=s.y-p.y;if(l=n(f*f+d*d),o(f)>e)break;l<=e&&t._drawEdge(s,p,1.2-l/e)}},n.prototype._drawEdge=function(t,e,n){var o=this,i=o.context.createLinearGradient(t.x,t.y,e.x,e.y),r=this._hex2rgb(t.color),a=this._hex2rgb(e.color);i.addColorStop(0,"rgba("+r.r+","+r.g+","+r.b+","+n+")"),i.addColorStop(1,"rgba("+a.r+","+a.g+","+a.b+","+n+")"),o.context.beginPath(),o.context.strokeStyle=i,o.context.moveTo(t.x,t.y),o.context.lineTo(e.x,e.y),o.context.stroke(),o.context.fill(),o.context.closePath()},n.prototype._extend=function(t,e){return Object.keys(e).forEach((function(n){t[n]=e[n]})),t},n.prototype._hex2rgb=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},(o=function(n,o){var i=this,r=Math.random,a=o.speed,s=o.color instanceof Array?o.color[Math.floor(Math.random()*o.color.length)]:o.color;i.context=n,i.options=o;var c=e.querySelector(o.selector);i.x=c.offsetParent?r()*c.offsetParent.clientWidth:r()*c.clientWidth,i.y=c.offsetParent&&"BODY"===c.offsetParent.nodeName?r()*t.innerHeight:c.offsetParent?r()*c.offsetParent.clientHeight:r()*c.clientHeight,i.vx=r()*a*2-a,i.vy=r()*a*2-a,i.radius=r()*r()*o.sizeVariations,i.color=s,i._draw()}).prototype._draw=function(){var t=this;t.context.save(),t.context.translate(t.x,t.y),t.context.moveTo(0,0),t.context.beginPath(),t.context.arc(0,0,t.radius,0,2*Math.PI,!1),t.context.fillStyle=t.color,t.context.fill(),t.context.restore()},o.prototype._updateCoordinates=function(t,e){var n=this,o=n.x+this.vx,i=n.y+this.vy,r=n.radius;o+r>t?o=r:o-r<0&&(o=t-r),i+r>e?i=r:i-r<0&&(i=e-r),n.x=o,n.y=i},t.requestAnimFrame=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||(this._usingPolyfill=!0,function(e){return t.setTimeout(e,1e3/60)})}(),new n}(window,document);!function(){"use strict";void 0===(o=(function(){return i}).call(e,n,e,t))||(t.exports=o)}()}}]);