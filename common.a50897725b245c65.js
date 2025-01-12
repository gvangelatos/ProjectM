"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(P,w,a)=>{a.d(w,{c:()=>i});var m=a(4261),c=a(1086),r=a(8607);const i=(e,o)=>{let t,n;const f=(d,E,v)=>{if(typeof document>"u")return;const p=document.elementFromPoint(d,E);p&&o(p)&&!p.disabled?p!==t&&(s(),g(p,v)):s()},g=(d,E)=>{t=d,n||(n=t);const v=t;(0,m.w)(()=>v.classList.add("ion-activated")),E()},s=(d=!1)=>{if(!t)return;const E=t;(0,m.w)(()=>E.classList.remove("ion-activated")),d&&n!==t&&t.click(),t=void 0};return(0,r.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>f(d.currentX,d.currentY,c.a),onMove:d=>f(d.currentX,d.currentY,c.b),onEnd:()=>{s(!0),(0,c.h)(),n=void 0}})}},8438:(P,w,a)=>{a.d(w,{g:()=>c});var m=a(8476);const c=()=>{if(void 0!==m.w)return m.w.Capacitor}},5572:(P,w,a)=>{a.d(w,{c:()=>m,i:()=>c});const m=(r,i,e)=>"function"==typeof e?e(r,i):"string"==typeof e?r[e]===i[e]:Array.isArray(i)?i.includes(r):r===i,c=(r,i,e)=>void 0!==r&&(Array.isArray(r)?r.some(o=>m(o,i,e)):m(r,i,e))},3351:(P,w,a)=>{a.d(w,{g:()=>m});const m=(o,t,n,f,g)=>r(o[1],t[1],n[1],f[1],g).map(s=>c(o[0],t[0],n[0],f[0],s)),c=(o,t,n,f,g)=>g*(3*t*Math.pow(g-1,2)+g*(-3*n*g+3*n+f*g))-o*Math.pow(g-1,3),r=(o,t,n,f,g)=>e((f-=g)-3*(n-=g)+3*(t-=g)-(o-=g),3*n-6*t+3*o,3*t-3*o,o).filter(d=>d>=0&&d<=1),e=(o,t,n,f)=>{if(0===o)return((o,t,n)=>{const f=t*t-4*o*n;return f<0?[]:[(-t+Math.sqrt(f))/(2*o),(-t-Math.sqrt(f))/(2*o)]})(t,n,f);const g=(3*(n/=o)-(t/=o)*t)/3,s=(2*t*t*t-9*t*n+27*(f/=o))/27;if(0===g)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-g),-Math.sqrt(-g)];const d=Math.pow(s/2,2)+Math.pow(g/3,3);if(0===d)return[Math.pow(s/2,.5)-t/3];if(d>0)return[Math.pow(-s/2+Math.sqrt(d),1/3)-Math.pow(s/2+Math.sqrt(d),1/3)-t/3];const E=Math.sqrt(Math.pow(-g/3,3)),v=Math.acos(-s/(2*Math.sqrt(Math.pow(-g/3,3)))),p=2*Math.pow(E,1/3);return[p*Math.cos(v/3)-t/3,p*Math.cos((v+2*Math.PI)/3)-t/3,p*Math.cos((v+4*Math.PI)/3)-t/3]}},5083:(P,w,a)=>{a.d(w,{i:()=>m});const m=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(P,w,a)=>{a.r(w),a.d(w,{startFocusVisible:()=>i});const m="ion-focused",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=e=>{let o=[],t=!0;const n=e?e.shadowRoot:document,f=e||document.body,g=M=>{o.forEach(l=>l.classList.remove(m)),M.forEach(l=>l.classList.add(m)),o=M},s=()=>{t=!1,g([])},d=M=>{t=r.includes(M.key),t||g([])},E=M=>{if(t&&void 0!==M.composedPath){const l=M.composedPath().filter(u=>!!u.classList&&u.classList.contains("ion-focusable"));g(l)}},v=()=>{n.activeElement===f&&g([])};return n.addEventListener("keydown",d),n.addEventListener("focusin",E),n.addEventListener("focusout",v),n.addEventListener("touchstart",s,{passive:!0}),n.addEventListener("mousedown",s),{destroy:()=>{n.removeEventListener("keydown",d),n.removeEventListener("focusin",E),n.removeEventListener("focusout",v),n.removeEventListener("touchstart",s),n.removeEventListener("mousedown",s)},setFocus:g}}},1086:(P,w,a)=>{a.d(w,{I:()=>c,a:()=>t,b:()=>n,c:()=>o,d:()=>g,h:()=>f});var m=a(8438),c=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(c||{});const i={getEngine(){const s=(0,m.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const d=(0,m.g)();return"web"!==(null==d?void 0:d.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const d=this.getEngine();d&&d.impact({style:s.style})},notification(s){const d=this.getEngine();d&&d.notification({type:s.type})},selection(){this.impact({style:c.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},e=()=>i.available(),o=()=>{e()&&i.selection()},t=()=>{e()&&i.selectionStart()},n=()=>{e()&&i.selectionChanged()},f=()=>{e()&&i.selectionEnd()},g=s=>{e()&&i.impact(s)}},909:(P,w,a)=>{a.d(w,{I:()=>o,a:()=>g,b:()=>e,c:()=>E,d:()=>p,f:()=>s,g:()=>f,i:()=>n,p:()=>v,r:()=>M,s:()=>d});var m=a(467),c=a(4920),r=a(4929);const e="ion-content",o=".ion-content-scroll-host",t=`${e}, ${o}`,n=l=>"ION-CONTENT"===l.tagName,f=function(){var l=(0,m.A)(function*(u){return n(u)?(yield new Promise(h=>(0,c.c)(u,h)),u.getScrollElement()):u});return function(h){return l.apply(this,arguments)}}(),g=l=>l.querySelector(o)||l.querySelector(t),s=l=>l.closest(t),d=(l,u)=>n(l)?l.scrollToTop(u):Promise.resolve(l.scrollTo({top:0,left:0,behavior:u>0?"smooth":"auto"})),E=(l,u,h,y)=>n(l)?l.scrollByPoint(u,h,y):Promise.resolve(l.scrollBy({top:h,left:u,behavior:y>0?"smooth":"auto"})),v=l=>(0,r.b)(l,e),p=l=>{if(n(l)){const h=l.scrollY;return l.scrollY=!1,h}return l.style.setProperty("overflow","hidden"),!0},M=(l,u)=>{n(l)?l.scrollY=u:l.style.removeProperty("overflow")}},3992:(P,w,a)=>{a.d(w,{a:()=>m,b:()=>E,c:()=>t,d:()=>v,e:()=>R,f:()=>o,g:()=>p,h:()=>r,i:()=>c,j:()=>_,k:()=>C,l:()=>n,m:()=>s,n:()=>M,o:()=>g,p:()=>e,q:()=>i,r:()=>O,s:()=>D,t:()=>d,u:()=>h,v:()=>y,w:()=>f,x:()=>l,y:()=>u});const m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",R="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(P,w,a)=>{a.d(w,{c:()=>i,g:()=>e});var m=a(8476),c=a(4920),r=a(4929);const i=(t,n,f)=>{let g,s;if(void 0!==m.w&&"MutationObserver"in m.w){const p=Array.isArray(n)?n:[n];g=new MutationObserver(M=>{for(const l of M)for(const u of l.addedNodes)if(u.nodeType===Node.ELEMENT_NODE&&p.includes(u.slot))return f(),void(0,c.r)(()=>d(u))}),g.observe(t,{childList:!0,subtree:!0})}const d=p=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(l=>{f();for(const u of l)for(const h of u.removedNodes)h.nodeType===Node.ELEMENT_NODE&&h.slot===n&&v()}),s.observe(null!==(M=p.parentElement)&&void 0!==M?M:p,{subtree:!0,childList:!0})},v=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{g&&(g.disconnect(),g=void 0),v()}}},e=(t,n,f)=>{const g=null==t?0:t.toString().length,s=o(g,n);if(void 0===f)return s;try{return f(g,n)}catch(d){return(0,r.a)("Exception in provided `counterFormatter`.",d),s}},o=(t,n)=>`${t} / ${n}`},1622:(P,w,a)=>{a.r(w),a.d(w,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>O,keyboardDidClose:()=>l,keyboardDidOpen:()=>p,keyboardDidResize:()=>M,resetKeyboardAssist:()=>g,setKeyboardClose:()=>v,setKeyboardOpen:()=>E,startKeyboardAssist:()=>s,trackViewportChanges:()=>y});var m=a(4379);a(8438),a(8476);const i="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},n={},f=!1;const g=()=>{t={},n={},f=!1},s=_=>{if(m.K.getEngine())d(_);else{if(!_.visualViewport)return;n=O(_.visualViewport),_.visualViewport.onresize=()=>{y(_),p()||M(_)?E(_):l(_)&&v(_)}}},d=_=>{_.addEventListener("keyboardDidShow",C=>E(_,C)),_.addEventListener("keyboardDidHide",()=>v(_))},E=(_,C)=>{u(_,C),f=!0},v=_=>{h(_),f=!1},p=()=>!f&&t.width===n.width&&(t.height-n.height)*n.scale>150,M=_=>f&&!l(_),l=_=>f&&n.height===_.innerHeight,u=(_,C)=>{const R=new CustomEvent(i,{detail:{keyboardHeight:C?C.keyboardHeight:_.innerHeight-n.height}});_.dispatchEvent(R)},h=_=>{const C=new CustomEvent(e);_.dispatchEvent(C)},y=_=>{t=Object.assign({},n),n=O(_.visualViewport)},O=_=>({width:Math.round(_.width),height:Math.round(_.height),offsetTop:_.offsetTop,offsetLeft:_.offsetLeft,pageTop:_.pageTop,pageLeft:_.pageLeft,scale:_.scale})},4379:(P,w,a)=>{a.d(w,{K:()=>i,a:()=>r});var m=a(8438),c=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(c||{}),r=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(r||{});const i={getEngine(){const e=(0,m.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(o=>{if(o.code!==c.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(P,w,a)=>{a.d(w,{c:()=>o});var m=a(467),c=a(8476),r=a(4379);const i=t=>{if(void 0===c.d||t===r.a.None||void 0===t)return null;const n=c.d.querySelector("ion-app");return null!=n?n:c.d.body},e=t=>{const n=i(t);return null===n?0:n.clientHeight},o=function(){var t=(0,m.A)(function*(n){let f,g,s,d;const E=function(){var u=(0,m.A)(function*(){const h=yield r.K.getResizeMode(),y=void 0===h?void 0:h.mode;f=()=>{void 0===d&&(d=e(y)),s=!0,v(s,y)},g=()=>{s=!1,v(s,y)},null==c.w||c.w.addEventListener("keyboardWillShow",f),null==c.w||c.w.addEventListener("keyboardWillHide",g)});return function(){return u.apply(this,arguments)}}(),v=(u,h)=>{n&&n(u,p(h))},p=u=>{if(0===d||d===e(u))return;const h=i(u);return null!==h?new Promise(y=>{const _=new ResizeObserver(()=>{h.clientHeight===d&&(_.disconnect(),y())});_.observe(h)}):void 0};return yield E(),{init:E,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",f),null==c.w||c.w.removeEventListener("keyboardWillHide",g),f=g=void 0},isKeyboardVisible:()=>s}});return function(f){return t.apply(this,arguments)}}()},7838:(P,w,a)=>{a.d(w,{c:()=>c});var m=a(467);const c=()=>{let r;return{lock:function(){var e=(0,m.A)(function*(){const o=r;let t;return r=new Promise(n=>t=n),void 0!==o&&(yield o),t});return function(){return e.apply(this,arguments)}}()}}},9001:(P,w,a)=>{a.d(w,{c:()=>r});var m=a(8476),c=a(4920);const r=(i,e,o)=>{let t;const n=()=>!(void 0===e()||void 0!==i.label||null===o()),g=()=>{const d=e();if(void 0===d)return;if(!n())return void d.style.removeProperty("width");const E=o().scrollWidth;if(0===E&&null===d.offsetParent&&void 0!==m.w&&"IntersectionObserver"in m.w){if(void 0!==t)return;const v=t=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(g(),v.disconnect(),t=void 0)},{threshold:.01,root:i});v.observe(d)}else d.style.setProperty("width",.75*E+"px")};return{calculateNotchWidth:()=>{n()&&(0,c.r)(()=>{g()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(P,w,a)=>{a.d(w,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(r,i,e)=>{const o=r*i/e-r+"ms",t=2*Math.PI*i/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(r,i,e)=>{const o=i/e,t=r*o-r+"ms",n=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(r,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(r,i,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*i+(i<e/2?180:-180)}deg)`,"animation-delay":r*i/e-r+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(r,i,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*i+(i<e/2?180:-180)}deg)`,"animation-delay":r*i/e-r+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(r,i,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":r*i/e-r+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(r,i,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":r*i/e-r+"ms"}})}}},7166:(P,w,a)=>{a.r(w),a.d(w,{createSwipeBackGesture:()=>e});var m=a(4920),c=a(5083),r=a(8607);a(1970);const e=(o,t,n,f,g)=>{const s=o.ownerDocument.defaultView;let d=(0,c.i)(o);const v=h=>d?-h.deltaX:h.deltaX;return(0,r.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:h=>(d=(0,c.i)(o),(h=>{const{startX:O}=h;return d?O>=s.innerWidth-50:O<=50})(h)&&t()),onStart:n,onMove:h=>{const O=v(h)/s.innerWidth;f(O)},onEnd:h=>{const y=v(h),O=s.innerWidth,_=y/O,C=(h=>d?-h.velocityX:h.velocityX)(h),R=C>=0&&(C>.2||y>O/2),b=(R?1-_:_)*O;let L=0;if(b>5){const x=b/Math.abs(C);L=Math.min(x,540)}g(R,_<=0?.01:(0,m.j)(0,_,.9999),L)}})}},2935:(P,w,a)=>{a.d(w,{w:()=>m});const m=(i,e,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{o(c(n,e))});return t.observe(i,{childList:!0,subtree:!0}),t},c=(i,e)=>{let o;return i.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)o=r(t.addedNodes[n],e)||o}),o},r=(i,e)=>{if(1!==i.nodeType)return;const o=i;return(o.tagName===e.toUpperCase()?[o]:Array.from(o.querySelectorAll(e))).find(n=>n.value===o.value)}},7875:(P,w,a)=>{a.r(w),a.d(w,{RiddlePagePageModule:()=>E});var m=a(177),c=a(4341),r=a(4742),i=a(5194),e=a(4438),o=a(3656),t=a(6697),n=a(2610);const f=v=>({wiggle:v});let g=(()=>{var v;class p{constructor(){this.activeRiddle={solved:!1,riddleText:"",locked:!1,title:"",solution:[""]},this.riddleList=[],this.enabledWiggle=!1,this.navCtrl=(0,e.WQX)(o.q9),this.alertCtrl=(0,e.WQX)(r.hG),this.toastCtrl=(0,e.WQX)(r.K_),this.riddlesService=(0,e.WQX)(n.M)}ngOnInit(){}checkAnswer(){var l,u;null!==(l=this.answerInput)&&void 0!==l&&l.toLowerCase()&&(this.activeRiddle.solution.includes(null===(u=this.answerInput)||void 0===u?void 0:u.toLowerCase())?this.showAlert(`The answer was ${this.answerInput}`,"Correct!"):(this.toastCtrl.create({message:"Opps! that is the wrong answer... But you have infinite tries because you are cute!",duration:3500,position:"bottom",icon:"close-circle-outline",color:"danger"}).then(h=>{h.present()}),this.enabledWiggle=!0,setTimeout(()=>{this.enabledWiggle=!1},500)))}showAlert(l,u){this.alertCtrl.create({header:u,message:l,buttons:[{text:"Give me my gift!",role:"confirm",handler:()=>{this.riddlesService.solvedRiddles.pipe((0,t.s)(1)).subscribe(y=>{this.riddlesService.setSolvedRiddles(y+1)}),this.activeRiddle.solved=!0;const h=localStorage.getItem("activeRiddle");h&&(this.riddleList[+h]=this.activeRiddle,+h+2<=this.riddleList.length&&(this.riddleList[+h+1].locked=!1)),localStorage.setItem("riddleListData",JSON.stringify(this.riddleList)),this.navCtrl.navigateBack("/tabs/tab1")}}]}).then(h=>h.present())}ionViewWillEnter(){var l;const u=localStorage.getItem("activeRiddle");u||this.navCtrl.navigateBack("/tabs/tab1"),this.riddleList=JSON.parse(null!==(l=localStorage.getItem("riddleListData"))&&void 0!==l?l:""),u&&(this.activeRiddle=this.riddleList[+u]),this.answerInput=""}}return(v=p).\u0275fac=function(l){return new(l||v)},v.\u0275cmp=e.VBU({type:v,selectors:[["app-riddle-page"]],decls:22,vars:10,consts:[[3,"translucent"],["slot","start"],["defaultHref","/tabs/tab1"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"md-text"],["label","Answer Here","label-placement","floating","fill","outline","placeholder","Answer",1,"ion-margin-top",3,"ngModelChange","ngClass","ngModel"],[1,"ion-text-end"],["fill","clear","slot","end","aria-label","Try",3,"click"],["slot","icon-only","size","large","name","arrow-forward-outline","aria-hidden","true"]],template:function(l,u){1&l&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s()()(),e.j41(6,"ion-content",3)(7,"ion-header",4)(8,"ion-toolbar")(9,"ion-title",5),e.EFF(10),e.k0s()()(),e.j41(11,"ion-card")(12,"ion-card-header")(13,"ion-card-title"),e.EFF(14),e.k0s()(),e.j41(15,"ion-card-content")(16,"span",6),e.EFF(17),e.k0s(),e.j41(18,"ion-input",7),e.mxI("ngModelChange",function(y){return e.DH7(u.answerInput,y)||(u.answerInput=y),y}),e.k0s(),e.j41(19,"div",8)(20,"ion-button",9),e.bIt("click",function(){return u.checkAnswer()}),e.nrm(21,"ion-icon",10),e.k0s()()()()()),2&l&&(e.Y8G("translucent",!0),e.R7$(5),e.JRh(u.activeRiddle.title),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(4),e.JRh(u.activeRiddle.title),e.R7$(4),e.JRh(u.activeRiddle.title),e.R7$(3),e.JRh(u.activeRiddle.riddleText),e.R7$(),e.Y8G("ngClass",e.eq3(8,f,u.enabledWiggle)),e.R50("ngModel",u.answerInput))},dependencies:[m.MD,m.YU,c.YN,c.BC,c.vS,r.bv,r.Jm,r.QW,r.b_,r.I9,r.ME,r.tN,r.W9,r.eU,r.iq,r.$w,r.BC,r.ai,r.Gw,r.el,c.X1],styles:["ion-card[_ngcontent-%COMP%]{max-width:500px;margin-left:auto;margin-right:auto}ion-card-title[_ngcontent-%COMP%]{font-size:36px}.md-text[_ngcontent-%COMP%]{font-size:22px}@keyframes _ngcontent-%COMP%_wiggle{0%{transform:translate(0)}25%{transform:translate(5px)}50%{transform:translate(-5px)}75%{transform:translate(5px)}to{transform:translate(0)}}.wiggle[_ngcontent-%COMP%]{display:inline-block;animation:_ngcontent-%COMP%_wiggle .5s infinite}"]}),p})();const s=[{path:"",component:g}];let d=(()=>{var v;class p{}return(v=p).\u0275fac=function(l){return new(l||v)},v.\u0275mod=e.$C({type:v}),v.\u0275inj=e.G2t({imports:[i.iI.forChild(s),i.iI]}),p})(),E=(()=>{var v;class p{}return(v=p).\u0275fac=function(l){return new(l||v)},v.\u0275mod=e.$C({type:v}),v.\u0275inj=e.G2t({imports:[m.MD,c.YN,r.bv,g,d]}),p})()},2610:(P,w,a)=>{a.d(w,{M:()=>r});var m=a(4412),c=a(4438);let r=(()=>{var i;class e{constructor(){this._solvedRiddles=new m.t(0)}get solvedRiddles(){return this._solvedRiddles}initializeSolvedRiddled(){const t=localStorage.getItem("solvedRiddlesNumber");t?this._solvedRiddles.next(+JSON.parse(t)):(localStorage.setItem("solvedRiddlesNumber",JSON.stringify(0)),this._solvedRiddles.next(0))}setSolvedRiddles(t){localStorage.setItem("solvedRiddlesNumber",JSON.stringify(t)),this._solvedRiddles.next(t)}}return(i=e).\u0275fac=function(t){return new(t||i)},i.\u0275prov=c.jDH({token:i,factory:i.\u0275fac,providedIn:"root"}),e})()}}]);