(function(){
  if (document.querySelector('[data-sample-ui-init]')) return;
  const marker = document.createElement('meta');
  marker.setAttribute('data-sample-ui-init', '');
  document.head.appendChild(marker);

  // Fonts
  ["https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap","https://fonts.googleapis.com/icon?family=Material+Icons"].forEach(function(href) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = href;
    document.head.appendChild(l);
  });

  // Material theme + component styles
  const s = document.createElement('style');
  s.textContent = "sample-ui{--mat-sys-background: light-dark(#faf9fd, #121316);--mat-sys-error: light-dark(#ba1a1a, #ffb4ab);--mat-sys-error-container: light-dark(#ffdad6, #93000a);--mat-sys-inverse-on-surface: light-dark(#f2f0f4, #2f3033);--mat-sys-inverse-primary: light-dark(#abc7ff, #005cbb);--mat-sys-inverse-surface: light-dark(#2f3033, #e3e2e6);--mat-sys-on-background: light-dark(#1a1b1f, #e3e2e6);--mat-sys-on-error: light-dark(#ffffff, #690005);--mat-sys-on-error-container: light-dark(#93000a, #ffdad6);--mat-sys-on-primary: light-dark(#ffffff, #002f65);--mat-sys-on-primary-container: light-dark(#00458f, #d7e3ff);--mat-sys-on-primary-fixed: light-dark(#001b3f, #001b3f);--mat-sys-on-primary-fixed-variant: light-dark(#00458f, #00458f);--mat-sys-on-secondary: light-dark(#ffffff, #283041);--mat-sys-on-secondary-container: light-dark(#3e4759, #dae2f9);--mat-sys-on-secondary-fixed: light-dark(#131c2b, #131c2b);--mat-sys-on-secondary-fixed-variant: light-dark(#3e4759, #3e4759);--mat-sys-on-surface: light-dark(#1a1b1f, #e3e2e6);--mat-sys-on-surface-variant: light-dark(#44474e, #e0e2ec);--mat-sys-on-tertiary: light-dark(#ffffff, #0001ac);--mat-sys-on-tertiary-container: light-dark(#0000ef, #e0e0ff);--mat-sys-on-tertiary-fixed: light-dark(#00006e, #00006e);--mat-sys-on-tertiary-fixed-variant: light-dark(#0000ef, #0000ef);--mat-sys-outline: light-dark(#74777f, #8e9099);--mat-sys-outline-variant: light-dark(#c4c6d0, #44474e);--mat-sys-primary: light-dark(#005cbb, #abc7ff);--mat-sys-primary-container: light-dark(#d7e3ff, #00458f);--mat-sys-primary-fixed: light-dark(#d7e3ff, #d7e3ff);--mat-sys-primary-fixed-dim: light-dark(#abc7ff, #abc7ff);--mat-sys-scrim: light-dark(#000000, #000000);--mat-sys-secondary: light-dark(#565e71, #bec6dc);--mat-sys-secondary-container: light-dark(#dae2f9, #3e4759);--mat-sys-secondary-fixed: light-dark(#dae2f9, #dae2f9);--mat-sys-secondary-fixed-dim: light-dark(#bec6dc, #bec6dc);--mat-sys-shadow: light-dark(#000000, #000000);--mat-sys-surface: light-dark(#faf9fd, #121316);--mat-sys-surface-bright: light-dark(#faf9fd, #38393c);--mat-sys-surface-container: light-dark(#efedf0, #1f2022);--mat-sys-surface-container-high: light-dark(#e9e7eb, #292a2c);--mat-sys-surface-container-highest: light-dark(#e3e2e6, #343537);--mat-sys-surface-container-low: light-dark(#f4f3f6, #1a1b1f);--mat-sys-surface-container-lowest: light-dark(#ffffff, #0d0e11);--mat-sys-surface-dim: light-dark(#dbd9dd, #121316);--mat-sys-surface-tint: light-dark(#005cbb, #abc7ff);--mat-sys-surface-variant: light-dark(#e0e2ec, #44474e);--mat-sys-tertiary: light-dark(#343dff, #bec2ff);--mat-sys-tertiary-container: light-dark(#e0e0ff, #0000ef);--mat-sys-tertiary-fixed: light-dark(#e0e0ff, #e0e0ff);--mat-sys-tertiary-fixed-dim: light-dark(#bec2ff, #bec2ff);--mat-sys-neutral-variant20: #2d3038;--mat-sys-neutral10: #1a1b1f;--mat-sys-level0: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mat-sys-level1: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mat-sys-level2: 0px 3px 3px -2px rgba(0, 0, 0, .2), 0px 3px 4px 0px rgba(0, 0, 0, .14), 0px 1px 8px 0px rgba(0, 0, 0, .12);--mat-sys-level3: 0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);--mat-sys-level4: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mat-sys-level5: 0px 7px 8px -4px rgba(0, 0, 0, .2), 0px 12px 17px 2px rgba(0, 0, 0, .14), 0px 5px 22px 4px rgba(0, 0, 0, .12);--mat-sys-body-large: 400 1rem / 1.5rem Roboto;--mat-sys-body-large-font: Roboto;--mat-sys-body-large-line-height: 1.5rem;--mat-sys-body-large-size: 1rem;--mat-sys-body-large-tracking: .031rem;--mat-sys-body-large-weight: 400;--mat-sys-body-medium: 400 .875rem / 1.25rem Roboto;--mat-sys-body-medium-font: Roboto;--mat-sys-body-medium-line-height: 1.25rem;--mat-sys-body-medium-size: .875rem;--mat-sys-body-medium-tracking: .016rem;--mat-sys-body-medium-weight: 400;--mat-sys-body-small: 400 .75rem / 1rem Roboto;--mat-sys-body-small-font: Roboto;--mat-sys-body-small-line-height: 1rem;--mat-sys-body-small-size: .75rem;--mat-sys-body-small-tracking: .025rem;--mat-sys-body-small-weight: 400;--mat-sys-display-large: 400 3.562rem / 4rem Roboto;--mat-sys-display-large-font: Roboto;--mat-sys-display-large-line-height: 4rem;--mat-sys-display-large-size: 3.562rem;--mat-sys-display-large-tracking: -.016rem;--mat-sys-display-large-weight: 400;--mat-sys-display-medium: 400 2.812rem / 3.25rem Roboto;--mat-sys-display-medium-font: Roboto;--mat-sys-display-medium-line-height: 3.25rem;--mat-sys-display-medium-size: 2.812rem;--mat-sys-display-medium-tracking: 0;--mat-sys-display-medium-weight: 400;--mat-sys-display-small: 400 2.25rem / 2.75rem Roboto;--mat-sys-display-small-font: Roboto;--mat-sys-display-small-line-height: 2.75rem;--mat-sys-display-small-size: 2.25rem;--mat-sys-display-small-tracking: 0;--mat-sys-display-small-weight: 400;--mat-sys-headline-large: 400 2rem / 2.5rem Roboto;--mat-sys-headline-large-font: Roboto;--mat-sys-headline-large-line-height: 2.5rem;--mat-sys-headline-large-size: 2rem;--mat-sys-headline-large-tracking: 0;--mat-sys-headline-large-weight: 400;--mat-sys-headline-medium: 400 1.75rem / 2.25rem Roboto;--mat-sys-headline-medium-font: Roboto;--mat-sys-headline-medium-line-height: 2.25rem;--mat-sys-headline-medium-size: 1.75rem;--mat-sys-headline-medium-tracking: 0;--mat-sys-headline-medium-weight: 400;--mat-sys-headline-small: 400 1.5rem / 2rem Roboto;--mat-sys-headline-small-font: Roboto;--mat-sys-headline-small-line-height: 2rem;--mat-sys-headline-small-size: 1.5rem;--mat-sys-headline-small-tracking: 0;--mat-sys-headline-small-weight: 400;--mat-sys-label-large: 500 .875rem / 1.25rem Roboto;--mat-sys-label-large-font: Roboto;--mat-sys-label-large-line-height: 1.25rem;--mat-sys-label-large-size: .875rem;--mat-sys-label-large-tracking: .006rem;--mat-sys-label-large-weight: 500;--mat-sys-label-large-weight-prominent: 700;--mat-sys-label-medium: 500 .75rem / 1rem Roboto;--mat-sys-label-medium-font: Roboto;--mat-sys-label-medium-line-height: 1rem;--mat-sys-label-medium-size: .75rem;--mat-sys-label-medium-tracking: .031rem;--mat-sys-label-medium-weight: 500;--mat-sys-label-medium-weight-prominent: 700;--mat-sys-label-small: 500 .688rem / 1rem Roboto;--mat-sys-label-small-font: Roboto;--mat-sys-label-small-line-height: 1rem;--mat-sys-label-small-size: .688rem;--mat-sys-label-small-tracking: .031rem;--mat-sys-label-small-weight: 500;--mat-sys-title-large: 400 1.375rem / 1.75rem Roboto;--mat-sys-title-large-font: Roboto;--mat-sys-title-large-line-height: 1.75rem;--mat-sys-title-large-size: 1.375rem;--mat-sys-title-large-tracking: 0;--mat-sys-title-large-weight: 400;--mat-sys-title-medium: 500 1rem / 1.5rem Roboto;--mat-sys-title-medium-font: Roboto;--mat-sys-title-medium-line-height: 1.5rem;--mat-sys-title-medium-size: 1rem;--mat-sys-title-medium-tracking: .009rem;--mat-sys-title-medium-weight: 500;--mat-sys-title-small: 500 .875rem / 1.25rem Roboto;--mat-sys-title-small-font: Roboto;--mat-sys-title-small-line-height: 1.25rem;--mat-sys-title-small-size: .875rem;--mat-sys-title-small-tracking: .006rem;--mat-sys-title-small-weight: 500;--mat-sys-corner-extra-large: 28px;--mat-sys-corner-extra-large-top: 28px 28px 0 0;--mat-sys-corner-extra-small: 4px;--mat-sys-corner-extra-small-top: 4px 4px 0 0;--mat-sys-corner-full: 9999px;--mat-sys-corner-large: 16px;--mat-sys-corner-large-end: 0 16px 16px 0;--mat-sys-corner-large-start: 16px 0 0 16px;--mat-sys-corner-large-top: 16px 16px 0 0;--mat-sys-corner-medium: 12px;--mat-sys-corner-none: 0;--mat-sys-corner-small: 8px;--mat-sys-dragged-state-layer-opacity: .16;--mat-sys-focus-state-layer-opacity: .12;--mat-sys-hover-state-layer-opacity: .08;--mat-sys-pressed-state-layer-opacity: .12;color-scheme:light;display:block;color:var(--mat-sys-on-surface);font:var(--mat-sys-body-medium)}\n\n";
  document.head.appendChild(s);
})();

var Z_=Object.defineProperty,X_=Object.defineProperties;var Y_=Object.getOwnPropertyDescriptors;var Uo=Object.getOwnPropertySymbols;var rh=Object.prototype.hasOwnProperty,oh=Object.prototype.propertyIsEnumerable;var ih=(t,n,e)=>n in t?Z_(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,x=(t,n)=>{for(var e in n||={})rh.call(n,e)&&ih(t,e,n[e]);if(Uo)for(var e of Uo(n))oh.call(n,e)&&ih(t,e,n[e]);return t},Ie=(t,n)=>X_(t,Y_(n));var Ho=(t,n)=>{var e={};for(var i in t)rh.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&Uo)for(var i of Uo(t))n.indexOf(i)<0&&oh.call(t,i)&&(e[i]=t[i]);return e};var Fe=null,$o=!1,Sc=1,J_=null,Le=Symbol("SIGNAL");function C(t){let n=Fe;return Fe=t,n}function Wo(){return Fe}var Ai={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ni(t){if($o)throw new Error("");if(Fe===null)return;Fe.consumerOnSignalRead(t);let n=Fe.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Fe.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Fe.producers,e!==void 0&&e.producer===t)){Fe.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Fe&&(!i||tb(r,Fe)))return;let o=Oi(Fe),s={producer:t,consumer:Fe,nextProducer:e,prevConsumer:void 0,lastReadVersion:t.version,nextConsumer:void 0};Fe.producersTail=s,n!==void 0?n.nextProducer=s:Fe.producers=s,o&&lh(t,s)}function sh(){Sc++}function Mc(t){if(!(Oi(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Sc)){if(!t.producerMustRecompute(t)&&!ki(t)){Tc(t);return}t.producerRecomputeValue(t),Tc(t)}}function xc(t){if(t.consumers===void 0)return;let n=$o;$o=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||eb(i)}}finally{$o=n}}function Ac(){return Fe?.consumerAllowSignalWrites!==!1}function eb(t){t.dirty=!0,xc(t),t.consumerMarkedDirty?.(t)}function Tc(t){t.dirty=!1,t.lastCleanEpoch=Sc}function jn(t){return t&&ah(t),C(t)}function ah(t){t.producersTail=void 0,t.recomputing=!0}function Ri(t,n){C(n),t&&ch(t)}function ch(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Oi(t))do e=Nc(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function ki(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Mc(e),i!==e.version))return!0}return!1}function wn(t){if(Oi(t)){let n=t.producers;for(;n!==void 0;)n=Nc(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function lh(t,n){let e=t.consumersTail,i=Oi(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)lh(r.producer,r)}function Nc(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Oi(n)){let o=n.producers;for(;o!==void 0;)o=Nc(o)}return e}function Oi(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Rc(t){J_?.(t)}function tb(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function kc(t,n){return Object.is(t,n)}function Go(t,n){let e=Object.create(nb);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Mc(e),Ni(e),e.value===zo)throw e.error;return e.value};return i[Le]=e,Rc(e),i}var Dc=Symbol("UNSET"),Cc=Symbol("COMPUTING"),zo=Symbol("ERRORED"),nb=Ie(x({},Ai),{value:Dc,dirty:!0,error:null,equal:kc,kind:"computed",producerMustRecompute(t){return t.value===Dc||t.value===Cc},producerRecomputeValue(t){if(t.value===Cc)throw new Error("");let n=t.value;t.value=Cc;let e=jn(t),i,r=!1;try{i=t.computation(),C(null),r=n!==Dc&&n!==zo&&i!==zo&&t.equal(n,i)}catch(o){i=zo,t.error=o}finally{Ri(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function ib(){throw new Error}var dh=ib;function uh(t){dh(t)}function Oc(t){dh=t}var rb=null;function Pc(t,n){let e=Object.create(Cr);e.value=t,n!==void 0&&(e.equal=n);let i=()=>fh(e);return i[Le]=e,Rc(e),[i,s=>Dr(e,s),s=>hh(e,s)]}function fh(t){return Ni(t),t.value}function Dr(t,n){Ac()||uh(t),t.equal(t.value,n)||(t.value=n,ob(t))}function hh(t,n){Ac()||uh(t),Dr(t,n(t.value))}var Cr=Ie(x({},Ai),{equal:kc,value:void 0,kind:"signal"});function ob(t){t.version++,sh(),xc(t),rb?.(t)}var Fc=Ie(x({},Ai),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Lc(t){if(t.dirty=!1,t.version>0&&!ki(t))return;t.version++;let n=jn(t);try{t.cleanup(),t.fn()}finally{Ri(t,n)}}var Vc;function qo(){return Vc}function Pt(t){let n=Vc;return Vc=t,n}var ph=Symbol("NotFound");function Pi(t){return t===ph||t?.name==="\u0275NotFound"}function N(t){return typeof t=="function"}function Ko(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Qo=Ko(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Bn(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ve=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(N(i))try{i()}catch(o){n=o instanceof Qo?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{mh(o)}catch(s){n=n??[],s instanceof Qo?n=[...n,...s.errors]:n.push(s)}}if(n)throw new Qo(n)}}add(n){var e;if(n&&n!==this)if(this.closed)mh(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Bn(e,n)}remove(n){let{_finalizers:e}=this;e&&Bn(e,n),n instanceof t&&n._removeParent(this)}};ve.EMPTY=(()=>{let t=new ve;return t.closed=!0,t})();var jc=ve.EMPTY;function Zo(t){return t instanceof ve||t&&"closed"in t&&N(t.remove)&&N(t.add)&&N(t.unsubscribe)}function mh(t){N(t)?t():t.unsubscribe()}var _t={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Fi={setTimeout(t,n,...e){let{delegate:i}=Fi;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Fi;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Xo(t){Fi.setTimeout(()=>{let{onUnhandledError:n}=_t;if(n)n(t);else throw t})}function Tr(){}var gh=Bc("C",void 0,void 0);function vh(t){return Bc("E",void 0,t)}function yh(t){return Bc("N",t,void 0)}function Bc(t,n,e){return{kind:t,value:n,error:e}}var Un=null;function Li(t){if(_t.useDeprecatedSynchronousErrorHandling){let n=!Un;if(n&&(Un={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Un;if(Un=null,e)throw i}}else t()}function _h(t){_t.useDeprecatedSynchronousErrorHandling&&Un&&(Un.errorThrown=!0,Un.error=t)}var Hn=class extends ve{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Zo(n)&&n.add(this)):this.destination=cb}static create(n,e,i){return new Zt(n,e,i)}next(n){this.isStopped?Hc(yh(n),this):this._next(n)}error(n){this.isStopped?Hc(vh(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Hc(gh,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},sb=Function.prototype.bind;function Uc(t,n){return sb.call(t,n)}var $c=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Yo(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Yo(i)}else Yo(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Yo(e)}}},Zt=class extends Hn{constructor(n,e,i){super();let r;if(N(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&_t.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Uc(n.next,o),error:n.error&&Uc(n.error,o),complete:n.complete&&Uc(n.complete,o)}):r=n}this.destination=new $c(r)}};function Yo(t){_t.useDeprecatedSynchronousErrorHandling?_h(t):Xo(t)}function ab(t){throw t}function Hc(t,n){let{onStoppedNotification:e}=_t;e&&Fi.setTimeout(()=>e(t,n))}var cb={closed:!0,next:Tr,error:ab,complete:Tr};var Vi=typeof Symbol=="function"&&Symbol.observable||"@@observable";function bt(t){return t}function bh(t){return t.length===0?bt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var U=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=db(e)?e:new Zt(e,i,r);return Li(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Eh(i),new i((r,o)=>{let s=new Zt({next:a=>{try{e(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Vi](){return this}pipe(...e){return bh(e)(this)}toPromise(e){return e=Eh(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function Eh(t){var n;return(n=t??_t.Promise)!==null&&n!==void 0?n:Promise}function lb(t){return t&&N(t.next)&&N(t.error)&&N(t.complete)}function db(t){return t&&t instanceof Hn||lb(t)&&Zo(t)}function ub(t){return N(t?.lift)}function K(t){return n=>{if(ub(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ee(t,n,e,i,r){return new zc(t,n,e,i,r)}var zc=class extends Hn{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(c){n.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var wh=Ko(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Q=(()=>{class t extends U{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Jo(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new wh}next(e){Li(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Li(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Li(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?jc:(this.currentObservers=null,o.push(e),new ve(()=>{this.currentObservers=null,Bn(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new U;return e.source=this,e}}return t.create=(n,e)=>new Jo(n,e),t})(),Jo=class extends Q{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:jc}};var $n=class extends Q{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Sr={now(){return(Sr.delegate||Date).now()},delegate:void 0};var Mr=class extends Q{constructor(n=1/0,e=1/0,i=Sr){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let c=1;c<i.length&&i[c]<=s;c+=2)a=c;a&&i.splice(0,a+1)}}};var es=class extends ve{constructor(n,e){super()}schedule(n,e=0){return this}};var xr={setInterval(t,n,...e){let{delegate:i}=xr;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=xr;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var ts=class extends es{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return xr.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&xr.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Bn(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var ji=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};ji.now=Sr.now;var ns=class extends ji{constructor(n,e=ji.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Ih=new ns(ts);var is=new U(t=>t.complete());function Dh(t){return t&&N(t.schedule)}function Wc(t){return t[t.length-1]}function rs(t){return N(Wc(t))?t.pop():void 0}function Ft(t){return Dh(Wc(t))?t.pop():void 0}function Ch(t,n){return typeof Wc(t)=="number"?t.pop():n}function Sh(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{l(i.next(d))}catch(u){s(u)}}function c(d){try{l(i.throw(d))}catch(u){s(u)}}function l(d){d.done?o(d.value):r(d.value).then(a,c)}l((i=i.apply(t,n||[])).next())})}function Th(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function zn(t){return this instanceof zn?(this.v=t,this):new zn(t)}function Mh(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(f){return function(m){return Promise.resolve(m).then(f,u)}}function a(f,m){i[f]&&(r[f]=function(g){return new Promise(function(y,E){o.push([f,g,y,E])>1||c(f,g)})},m&&(r[f]=m(r[f])))}function c(f,m){try{l(i[f](m))}catch(g){p(o[0][3],g)}}function l(f){f.value instanceof zn?Promise.resolve(f.value.v).then(d,u):p(o[0][2],f)}function d(f){c("next",f)}function u(f){c("throw",f)}function p(f,m){f(m),o.shift(),o.length&&c(o[0][0],o[0][1])}}function xh(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Th=="function"?Th(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,c){s=t[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var os=t=>t&&typeof t.length=="number"&&typeof t!="function";function ss(t){return N(t?.then)}function as(t){return N(t[Vi])}function cs(t){return Symbol.asyncIterator&&N(t?.[Symbol.asyncIterator])}function ls(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function fb(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ds=fb();function us(t){return N(t?.[ds])}function fs(t){return Mh(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield zn(e.read());if(r)return yield zn(void 0);yield yield zn(i)}}finally{e.releaseLock()}})}function hs(t){return N(t?.getReader)}function de(t){if(t instanceof U)return t;if(t!=null){if(as(t))return hb(t);if(os(t))return pb(t);if(ss(t))return mb(t);if(cs(t))return Ah(t);if(us(t))return gb(t);if(hs(t))return vb(t)}throw ls(t)}function hb(t){return new U(n=>{let e=t[Vi]();if(N(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function pb(t){return new U(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function mb(t){return new U(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Xo)})}function gb(t){return new U(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Ah(t){return new U(n=>{yb(t,n).catch(e=>n.error(e))})}function vb(t){return Ah(fs(t))}function yb(t,n){var e,i,r,o;return Sh(this,void 0,void 0,function*(){try{for(e=xh(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Qe(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function ps(t,n=0){return K((e,i)=>{e.subscribe(ee(i,r=>Qe(i,t,()=>i.next(r),n),()=>Qe(i,t,()=>i.complete(),n),r=>Qe(i,t,()=>i.error(r),n)))})}function ms(t,n=0){return K((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Nh(t,n){return de(t).pipe(ms(n),ps(n))}function Rh(t,n){return de(t).pipe(ms(n),ps(n))}function kh(t,n){return new U(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Oh(t,n){return new U(e=>{let i;return Qe(e,n,()=>{i=t[ds](),Qe(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>N(i?.return)&&i.return()})}function gs(t,n){if(!t)throw new Error("Iterable cannot be null");return new U(e=>{Qe(e,n,()=>{let i=t[Symbol.asyncIterator]();Qe(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Ph(t,n){return gs(fs(t),n)}function Fh(t,n){if(t!=null){if(as(t))return Nh(t,n);if(os(t))return kh(t,n);if(ss(t))return Rh(t,n);if(cs(t))return gs(t,n);if(us(t))return Oh(t,n);if(hs(t))return Ph(t,n)}throw ls(t)}function Xt(t,n){return n?Fh(t,n):de(t)}function Et(...t){let n=Ft(t);return Xt(t,n)}function Gc(t,n){let e=N(t)?t:()=>t,i=r=>r.error(e());return new U(n?r=>n.schedule(i,0,r):i)}function ue(t,n){return K((e,i)=>{let r=0;e.subscribe(ee(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:_b}=Array;function bb(t,n){return _b(n)?t(...n):t(n)}function vs(t){return ue(n=>bb(t,n))}var{isArray:Eb}=Array,{getPrototypeOf:wb,prototype:Ib,keys:Db}=Object;function ys(t){if(t.length===1){let n=t[0];if(Eb(n))return{args:n,keys:null};if(Cb(n)){let e=Db(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function Cb(t){return t&&typeof t=="object"&&wb(t)===Ib}function _s(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function qc(...t){let n=Ft(t),e=rs(t),{args:i,keys:r}=ys(t);if(i.length===0)return Xt([],n);let o=new U(Tb(i,n,r?s=>_s(r,s):bt));return e?o.pipe(vs(e)):o}function Tb(t,n,e=bt){return i=>{Lh(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)Lh(n,()=>{let l=Xt(t[c],n),d=!1;l.subscribe(ee(i,u=>{o[c]=u,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function Lh(t,n,e){t?Qe(e,t,n):n()}function Vh(t,n,e,i,r,o,s,a){let c=[],l=0,d=0,u=!1,p=()=>{u&&!c.length&&!l&&n.complete()},f=g=>l<i?m(g):c.push(g),m=g=>{o&&n.next(g),l++;let y=!1;de(e(g,d++)).subscribe(ee(n,E=>{r?.(E),o?f(E):n.next(E)},()=>{y=!0},void 0,()=>{if(y)try{for(l--;c.length&&l<i;){let E=c.shift();s?Qe(n,s,()=>m(E)):m(E)}p()}catch(E){n.error(E)}}))};return t.subscribe(ee(n,f,()=>{u=!0,p()})),()=>{a?.()}}function Bi(t,n,e=1/0){return N(n)?Bi((i,r)=>ue((o,s)=>n(i,o,r,s))(de(t(i,r))),e):(typeof n=="number"&&(e=n),K((i,r)=>Vh(i,r,t,e)))}function bs(t=1/0){return Bi(bt,t)}function jh(){return bs(1)}function Ui(...t){return jh()(Xt(t,Ft(t)))}function Kc(...t){let n=rs(t),{args:e,keys:i}=ys(t),r=new U(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let d=0;d<s;d++){let u=!1;de(e[d]).subscribe(ee(o,p=>{u||(u=!0,l--),a[d]=p},()=>c--,void 0,()=>{(!c||!u)&&(l||o.next(i?_s(i,a):a),o.complete())}))}});return n?r.pipe(vs(n)):r}function Hi(...t){let n=Ft(t),e=Ch(t,1/0),i=t;return i.length?i.length===1?de(i[0]):bs(e)(Xt(i,n)):is}function Wn(t,n){return K((e,i)=>{let r=0;e.subscribe(ee(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Es(t){return K((n,e)=>{let i=null,r=!1,o;i=n.subscribe(ee(e,void 0,void 0,s=>{o=de(t(s,Es(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Qc(t,n){return N(n)?Bi(t,n,1):Bi(t,1)}function Ar(t,n=Ih){return K((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=s+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}a()}e.subscribe(ee(i,l=>{o=l,s=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function Nr(t){return t<=0?()=>is:K((n,e)=>{let i=0;n.subscribe(ee(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Zc(t,n=bt){return t=t??Sb,K((e,i)=>{let r,o=!0;e.subscribe(ee(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function Sb(t,n){return t===n}function Rr(t){return K((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Yc(t={}){let{connector:n=()=>new Q,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,c,l=0,d=!1,u=!1,p=()=>{a?.unsubscribe(),a=void 0},f=()=>{p(),s=c=void 0,d=u=!1},m=()=>{let g=s;f(),g?.unsubscribe()};return K((g,y)=>{l++,!u&&!d&&p();let E=c=c??n();y.add(()=>{l--,l===0&&!u&&!d&&(a=Xc(m,r))}),E.subscribe(y),!s&&l>0&&(s=new Zt({next:k=>E.next(k),error:k=>{u=!0,p(),a=Xc(f,e,k),E.error(k)},complete:()=>{d=!0,p(),a=Xc(f,i),E.complete()}}),de(g).subscribe(s))})(o)}}function Xc(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Zt({next:()=>{i.unsubscribe(),t()}});return de(n(...e)).subscribe(i)}function kr(t){return Wn((n,e)=>t<=e)}function Gn(...t){let n=Ft(t);return K((e,i)=>{(n?Ui(t,e,n):Ui(t,e)).subscribe(i)})}function $i(t,n){return K((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(ee(i,c=>{r?.unsubscribe();let l=0,d=o++;de(t(c,d)).subscribe(r=ee(i,u=>i.next(n?n(c,u,d,l++):u),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Lt(t){return K((n,e)=>{de(t).subscribe(ee(e,()=>e.complete(),Tr)),!e.closed&&n.subscribe(e)})}function qn(t,n,e){let i=N(t)||n||e?{next:t,error:n,complete:e}:t;return i?K((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(ee(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):bt}var Ms="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",v=class extends Error{code;constructor(n,e){super(jr(n,e)),this.code=n}};function Mb(t){return`NG0${Math.abs(t)}`}function jr(t,n){return`${Mb(t)}${n?": "+n:""}`}function te(t){for(let n in t)if(t[n]===te)return n;throw Error("")}function zh(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function xs(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(xs).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function As(t,n){return t?n?`${t} ${n}`:t:n||""}var xb=te({__forward_ref__:te});function Dn(t){return t.__forward_ref__=Dn,t}function xe(t){return ul(t)?t():t}function ul(t){return typeof t=="function"&&t.hasOwnProperty(xb)&&t.__forward_ref__===Dn}function z(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function W(t){return{providers:t.providers||[],imports:t.imports||[]}}function Ns(t){return Ab(t,Rs)}function Ab(t,n){return t.hasOwnProperty(n)&&t[n]||null}function Nb(t){let n=t?.[Rs]??null;return n||null}function el(t){return t&&t.hasOwnProperty(Is)?t[Is]:null}var Rs=te({\u0275prov:te}),Is=te({\u0275inj:te}),_=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=z({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function fl(t){return t&&!!t.\u0275providers}var hl=te({\u0275cmp:te}),pl=te({\u0275dir:te}),ml=te({\u0275pipe:te});var Pr=te({\u0275fac:te}),Jn=te({__NG_ELEMENT_ID__:te}),Bh=te({__NG_ENV_ID__:te});function en(t){return vl(t,"@Component"),t[hl]||null}function gl(t){return vl(t,"@Directive"),t[pl]||null}function Wh(t){return vl(t,"@Pipe"),t[ml]||null}function vl(t,n){if(t==null)throw new v(-919,!1)}function yl(t){return typeof t=="string"?t:t==null?"":String(t)}var Gh=te({ngErrorCode:te}),Rb=te({ngErrorMessage:te}),kb=te({ngTokenPath:te});function _l(t,n){return qh("",-200,n)}function ks(t,n){throw new v(-201,!1)}function qh(t,n,e){let i=new v(n,t);return i[Gh]=n,i[Rb]=t,e&&(i[kb]=e),i}function Ob(t){return t[Gh]}var tl;function Kh(){return tl}function it(t){let n=tl;return tl=t,n}function bl(t,n,e){let i=Ns(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;ks(t,"")}var Gi=globalThis;var Pb={},Kn=Pb,Fb="__NG_DI_FLAG__",nl=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Qn(e)||0;try{return this.injector.get(n,i&8?null:Kn,i)}catch(r){if(Pi(r))return r;throw r}}};function Lb(t,n=0){let e=qo();if(e===void 0)throw new v(-203,!1);if(e===null)return bl(t,void 0,n);{let i=Vb(n),r=e.retrieve(t,i);if(Pi(r)){if(i.optional)return null;throw r}return r}}function S(t,n=0){return(Kh()||Lb)(xe(t),n)}function h(t,n){return S(t,Qn(n))}function Qn(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Vb(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function il(t){let n=[];for(let e=0;e<t.length;e++){let i=xe(t[e]);if(Array.isArray(i)){if(i.length===0)throw new v(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=jb(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}n.push(S(r,o))}else n.push(S(i))}return n}function jb(t){return t[Fb]}function Zn(t,n){let e=t.hasOwnProperty(Pr);return e?t[Pr]:null}function Qh(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Zh(t){return t.flat(Number.POSITIVE_INFINITY)}function Os(t,n){t.forEach(e=>Array.isArray(e)?Os(e,n):n(e))}function El(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Br(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Xh(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Yh(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Ps(t,n,e){let i=qi(t,n);return i>=0?t[i|1]=e:(i=~i,Yh(t,i,n,e)),i}function Fs(t,n){let e=qi(t,n);if(e>=0)return t[e|1]}function qi(t,n){return Bb(t,n,1)}function Bb(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var Cn={},He=[],Ki=new _(""),Ur=new _("",-1),wl=new _(""),Wi=class{get(n,e=Kn){if(e===Kn){let r=qh("",-201);throw r.name="\u0275NotFound",r}return e}};function Hr(t){return{\u0275providers:t}}function Jh(...t){return{\u0275providers:Il(!0,t),\u0275fromNgModule:!0}}function Il(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return Os(n,s=>{let a=s;Ds(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&ep(r,o),e}function ep(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Dl(r,o=>{n(o,i)})}}function Ds(t,n,e,i){if(t=xe(t),!t)return!1;let r=null,o=el(t),s=!o&&en(t);if(!o&&!s){let c=t.ngModule;if(o=el(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Ds(l,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;Os(o.imports,d=>{Ds(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&ep(l,n)}if(!a){let l=Zn(r)||(()=>new r);n({provide:r,useFactory:l,deps:He},r),n({provide:wl,useValue:r,multi:!0},r),n({provide:Ki,useValue:()=>S(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=t;Dl(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function Dl(t,n){for(let e of t)fl(e)&&(e=e.\u0275providers),Array.isArray(e)?Dl(e,n):n(e)}var Ub=te({provide:String,useValue:te});function tp(t){return t!==null&&typeof t=="object"&&Ub in t}function Hb(t){return!!(t&&t.useExisting)}function $b(t){return!!(t&&t.useFactory)}function Xn(t){return typeof t=="function"}function np(t){return!!t.useClass}var $r=new _(""),ws={},Uh={},Jc;function Qi(){return Jc===void 0&&(Jc=new Wi),Jc}var Ae=class{},Yn=class extends Ae{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,ol(n,s=>this.processProvider(s)),this.records.set(Ur,zi(void 0,this)),r.has("environment")&&this.records.set(Ae,zi(void 0,this));let o=this.records.get($r);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(wl,He,{self:!0}))}retrieve(n,e){let i=Qn(e)||0;try{return this.get(n,Kn,i)}catch(r){if(Pi(r))return r;throw r}}destroy(){Or(this),this._destroyed=!0;let n=C(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),C(n)}}onDestroy(n){return Or(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Or(this);let e=Pt(this),i=it(void 0),r;try{return n()}finally{Pt(e),it(i)}}get(n,e=Kn,i){if(Or(this),n.hasOwnProperty(Bh))return n[Bh](this);let r=Qn(i),o,s=Pt(this),a=it(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=Kb(n)&&Ns(n);d&&this.injectableDefInScope(d)?l=zi(rl(n),ws):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?Qi():this.parent;return e=r&8&&e===Kn?null:e,c.get(n,e)}catch(c){let l=Ob(c);throw l===-200||l===-201?new v(l,null):c}finally{it(a),Pt(s)}}resolveInjectorInitializers(){let n=C(null),e=Pt(this),i=it(void 0),r;try{let o=this.get(Ki,He,{self:!0});for(let s of o)s()}finally{Pt(e),it(i),C(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=xe(n);let e=Xn(n)?n:xe(n&&n.provide),i=Wb(n);if(!Xn(n)&&n.multi===!0){let r=this.records.get(e);r||(r=zi(void 0,ws,!0),r.factory=()=>il(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=C(null);try{if(e.value===Uh)throw _l("");return e.value===ws&&(e.value=Uh,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&qb(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{C(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=xe(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function rl(t){let n=Ns(t),e=n!==null?n.factory:Zn(t);if(e!==null)return e;if(t instanceof _)throw new v(-204,!1);if(t instanceof Function)return zb(t);throw new v(-204,!1)}function zb(t){if(t.length>0)throw new v(-204,!1);let e=Nb(t);return e!==null?()=>e.factory(t):()=>new t}function Wb(t){if(tp(t))return zi(void 0,t.useValue);{let n=Cl(t);return zi(n,ws)}}function Cl(t,n,e){let i;if(Xn(t)){let r=xe(t);return Zn(r)||rl(r)}else if(tp(t))i=()=>xe(t.useValue);else if($b(t))i=()=>t.useFactory(...il(t.deps||[]));else if(Hb(t))i=(r,o)=>S(xe(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=xe(t&&(t.useClass||t.provide));if(Gb(t))i=()=>new r(...il(t.deps));else return Zn(r)||rl(r)}return i}function Or(t){if(t.destroyed)throw new v(-205,!1)}function zi(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function Gb(t){return!!t.deps}function qb(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function Kb(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function ol(t,n){for(let e of t)Array.isArray(e)?ol(e,n):e&&fl(e)?ol(e.\u0275providers,n):n(e)}function Zi(t,n){let e;t instanceof Yn?(Or(t),e=t):e=new nl(t);let i,r=Pt(e),o=it(void 0);try{return n()}finally{Pt(r),it(o)}}function ip(){return Kh()!==void 0||qo()!=null}var wt=0,I=1,T=2,De=3,ht=4,Ve=5,ei=6,Xi=7,Ee=8,Vt=9,jt=10,ae=11,Yi=12,Tl=13,ti=14,$e=15,Tn=16,ni=17,Bt=18,Ut=19,Sl=20,Yt=21,Ls=22,In=23,rt=24,ii=25,Ht=26,Ce=27,rp=1,Ml=6,Sn=7,zr=8,ri=9,fe=10;function tn(t){return Array.isArray(t)&&typeof t[rp]=="object"}function pt(t){return Array.isArray(t)&&t[rp]===!0}function xl(t){return(t.flags&4)!==0}function nn(t){return t.componentOffset>-1}function Vs(t){return(t.flags&1)===1}function $t(t){return!!t.template}function Ji(t){return(t[T]&512)!==0}function oi(t){return(t[T]&256)===256}var op="svg",sp="math";function mt(t){for(;Array.isArray(t);)t=t[wt];return t}function Al(t,n){return mt(n[t])}function It(t,n){return mt(n[t.index])}function js(t,n){return t.data[n]}function gt(t,n){let e=n[t];return tn(e)?e:e[wt]}function ap(t){return(t[T]&4)===4}function Bs(t){return(t[T]&128)===128}function cp(t){return pt(t[De])}function zt(t,n){return n==null?null:t[n]}function Nl(t){t[ni]=0}function Us(t){t[T]&1024||(t[T]|=1024,Bs(t)&&si(t))}function lp(t,n){for(;t>0;)n=n[ti],t--;return n}function er(t){return!!(t[T]&9216||t[rt]?.dirty)}function Hs(t){t[jt].changeDetectionScheduler?.notify(8),t[T]&64&&(t[T]|=1024),er(t)&&si(t)}function si(t){t[jt].changeDetectionScheduler?.notify(0);let n=Jt(t);for(;n!==null&&!(n[T]&8192||(n[T]|=8192,!Bs(n)));)n=Jt(n)}function $s(t,n){if(oi(t))throw new v(911,!1);t[Yt]===null&&(t[Yt]=[]),t[Yt].push(n)}function dp(t,n){if(t[Yt]===null)return;let e=t[Yt].indexOf(n);e!==-1&&t[Yt].splice(e,1)}function Jt(t){let n=t[De];return pt(n)?n[De]:n}function Rl(t){return t[Xi]??=[]}function kl(t){return t.cleanup??=[]}function up(t,n,e,i){let r=Rl(n);r.push(e),t.firstCreatePass&&kl(t).push(i,r.length-1)}var V={lFrame:wp(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var sl=!1;function fp(){return V.lFrame.elementDepthCount}function hp(){V.lFrame.elementDepthCount++}function Ol(){V.lFrame.elementDepthCount--}function pp(){return V.bindingsEnabled}function Pl(){return V.skipHydrationRootTNode!==null}function Fl(t){return V.skipHydrationRootTNode===t}function Ll(){V.skipHydrationRootTNode=null}function F(){return V.lFrame.lView}function Te(){return V.lFrame.tView}function Ne(){let t=Vl();for(;t!==null&&t.type===64;)t=t.parent;return t}function Vl(){return V.lFrame.currentTNode}function mp(){let t=V.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function tr(t,n){let e=V.lFrame;e.currentTNode=t,e.isParent=n}function jl(){return V.lFrame.isParent}function Bl(){V.lFrame.isParent=!1}function Ul(){return sl}function Fr(t){let n=sl;return sl=t,n}function gp(t){return V.lFrame.bindingIndex=t}function ai(){return V.lFrame.bindingIndex++}function Hl(t){let n=V.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function vp(){return V.lFrame.inI18n}function yp(t,n){let e=V.lFrame;e.bindingIndex=e.bindingRootIndex=t,zs(n)}function _p(){return V.lFrame.currentDirectiveIndex}function zs(t){V.lFrame.currentDirectiveIndex=t}function bp(t){let n=V.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function $l(){return V.lFrame.currentQueryIndex}function Ws(t){V.lFrame.currentQueryIndex=t}function Qb(t){let n=t[I];return n.type===2?n.declTNode:n.type===1?t[Ve]:null}function zl(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=Qb(o),r===null||(o=o[ti],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=V.lFrame=Ep();return i.currentTNode=n,i.lView=t,!0}function Gs(t){let n=Ep(),e=t[I];V.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Ep(){let t=V.lFrame,n=t===null?null:t.child;return n===null?wp(t):n}function wp(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Ip(){let t=V.lFrame;return V.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Wl=Ip;function qs(){let t=Ip();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Dp(t){return(V.lFrame.contextLView=lp(t,V.lFrame.contextLView))[Ee]}function rn(){return V.lFrame.selectedIndex}function Mn(t){V.lFrame.selectedIndex=t}function Ks(){let t=V.lFrame;return js(t.tView,t.selectedIndex)}function Gl(){return V.lFrame.currentNamespace}var Cp=!0;function Qs(){return Cp}function Zs(t){Cp=t}function al(t,n=null,e=null,i){let r=Tp(t,n,e,i);return r.resolveInjectorInitializers(),r}function Tp(t,n=null,e=null,i,r=new Set){let o=[e||He,Jh(t)],s;return new Yn(o,n||Qi(),s||null,r)}var ye=class t{static THROW_IF_NOT_FOUND=Kn;static NULL=new Wi;static create(n,e){if(Array.isArray(n))return al({name:""},e,n,"");{let i=n.name??"";return al({name:i},n.parent,n.providers,i)}}static \u0275prov=z({token:t,providedIn:"any",factory:()=>S(Ur)});static __NG_ELEMENT_ID__=-1},O=new _(""),on=(()=>{class t{static __NG_ELEMENT_ID__=Zb;static __NG_ENV_ID__=e=>e}return t})(),Cs=class extends on{_lView;constructor(n){super(),this._lView=n}get destroyed(){return oi(this._lView)}onDestroy(n){let e=this._lView;return $s(e,n),()=>dp(e,n)}};function Zb(){return new Cs(F())}var Sp=!1,Mp=new _(""),ci=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new $n(!1);debugTaskTracker=h(Mp,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new U(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=z({token:t,providedIn:"root",factory:()=>new t})}return t})(),cl=class extends Q{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,ip()&&(this.destroyRef=h(on,{optional:!0})??void 0,this.pendingTasks=h(ci,{optional:!0})??void 0)}emit(n){let e=C(null);try{super.next(n)}finally{C(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof ve&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},he=cl;function Ts(...t){}function ql(t){let n,e;function i(){t=Ts;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function xp(t){return queueMicrotask(()=>t()),()=>{t=Ts}}var Kl="isAngularZone",Lr=Kl+"_ID",Xb=0,A=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new he(!1);onMicrotaskEmpty=new he(!1);onStable=new he(!1);onError=new he(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Sp}=n;if(typeof Zone>"u")throw new v(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,eE(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Kl)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new v(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new v(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,Yb,Ts,Ts);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},Yb={};function Ql(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function Jb(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){ql(()=>{t.callbackScheduled=!1,ll(t),t.isCheckStableRunning=!0,Ql(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),ll(t)}function eE(t){let n=()=>{Jb(t)},e=Xb++;t._inner=t._inner.fork({name:"angular",properties:{[Kl]:!0,[Lr]:e,[Lr+e]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(tE(c))return i.invokeTask(o,s,a,c);try{return Hh(t),i.invokeTask(o,s,a,c)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),$h(t)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return Hh(t),i.invoke(o,s,a,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!nE(c)&&n(),$h(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,ll(t),Ql(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function ll(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Hh(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function $h(t){t._nesting--,Ql(t)}var Vr=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new he;onMicrotaskEmpty=new he;onStable=new he;onError=new he;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function tE(t){return Ap(t,"__ignore_ng_zone__")}function nE(t){return Ap(t,"__scheduler_tick__")}function Ap(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Ze=class{_console=console;handleError(n){this._console.error("ERROR",n)}},li=new _("",{factory:()=>{let t=h(A),n=h(Ae),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Ze),e.handleError(i))})}}}),Np={provide:Ki,useValue:()=>{let t=h(Ze,{optional:!0})},multi:!0};function Xe(t,n){let[e,i,r]=Pc(t,n?.equal),o=e,s=o[Le];return o.set=i,o.update=r,o.asReadonly=Rp.bind(o),o}function Rp(){let t=this[Le];if(t.readonlyFn===void 0){let n=()=>this();n[Le]=t,t.readonlyFn=n}return t.readonlyFn}var sn=new _("",{factory:()=>iE}),iE="ng";var Xs=new _(""),di=new _("",{providedIn:"platform",factory:()=>"unknown"}),nr=new _(""),ui=new _("",{factory:()=>h(O).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Wr=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=rE}return t})();function rE(){return new Wr(F(),Ne())}var ft=class{},Gr=new _("",{factory:()=>!0});var Zl=new _(""),Ys=(()=>{class t{static \u0275prov=z({token:t,providedIn:"root",factory:()=>new dl})}return t})(),dl=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Ss=class{[Le];constructor(n){this[Le]=n}destroy(){this[Le].destroy()}};function Js(t,n){let e=n?.injector??h(ye),i=n?.manualCleanup!==!0?e.get(on):null,r,o=e.get(Wr,null,{optional:!0}),s=e.get(ft);return o!==null?(r=aE(o.view,s,t),i instanceof Cs&&i._lView===o.view&&(i=null)):r=cE(t,e.get(Ys),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Ss(r)}var kp=Ie(x({},Fc),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Fr(!1);try{Lc(this)}finally{Fr(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=C(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],C(t)}}}),oE=Ie(x({},kp),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(wn(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),sE=Ie(x({},kp),{consumerMarkedDirty(){this.view[T]|=8192,si(this.view),this.notifier.notify(13)},destroy(){if(wn(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[In]?.delete(this)}});function aE(t,n,e){let i=Object.create(sE);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=Op(i,e),t[In]??=new Set,t[In].add(i),i.consumerMarkedDirty(i),i}function cE(t,n,e){let i=Object.create(oE);return i.fn=Op(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Op(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function fi(t){return typeof t=="function"&&t[Le]!==void 0}var ea=(()=>{class t{internalPendingTasks=h(ci);scheduler=h(ft);errorHandler=h(li);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();try{e().catch(this.errorHandler).finally(i)}catch(r){this.errorHandler(r),i()}}static \u0275prov=z({token:t,providedIn:"root",factory:()=>new t})}return t})();function io(t){return{toString:t}.toString()}var ca=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}};function pm(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}function TE(t){return t.type.prototype.ngOnChanges&&(t.setInput=ME),SE}function SE(){let t=mm(this),n=t?.current;if(n){let e=t.previous;if(e===Cn)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function ME(t,n,e,i,r){let o=this.declaredInputs[i],s=mm(t)||xE(t,{previous:Cn,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new ca(l&&l.currentValue,e,c===Cn),pm(t,n,r,e)}var cd="__ngSimpleChanges__";function mm(t){return Object.hasOwn(t,cd)&&t[cd]||null}function xE(t,n){return t[cd]=n}var Pp=[];var Z=function(t,n=null,e){for(let i=0;i<Pp.length;i++){let r=Pp[i];r(t,n,e)}},H=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(H||{});function AE(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=TE(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function NE(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function ra(t,n,e){gm(t,n,3,e)}function oa(t,n,e,i){(t[T]&3)===e&&gm(t,n,e,i)}function Xl(t,n){let e=t[T];(e&3)===n&&(e&=16383,e+=1,t[T]=e)}function gm(t,n,e,i){let r=i!==void 0?t[ni]&65535:0,o=i??-1,s=n.length-1,a=0;for(let c=r;c<s;c++)if(typeof n[c+1]=="number"){if(a=n[c],i!=null&&a>=i)break}else n[c]<0&&(t[ni]+=65536),(a<o||o==-1)&&(RE(t,e,n,c),t[ni]=(t[ni]&4294901760)+c+2),c++}function Fp(t,n){Z(H.LifecycleHookStart,t,n);let e=C(null);try{n.call(t)}finally{C(e),Z(H.LifecycleHookEnd,t,n)}}function RE(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[T]>>14<t[ni]>>16&&(t[T]&3)===n&&(t[T]+=16384,Fp(a,o)):Fp(a,o)}var rr=-1,hi=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function kE(t){return(t.flags&8)!==0}function OE(t){return(t.flags&16)!==0}function PE(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];FE(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function vm(t){return t===3||t===4||t===6}function FE(t){return t.charCodeAt(0)===64}function or(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?Lp(t,e,r,null,n[++i]):Lp(t,e,r,null,null))}}return t}function Lp(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function ym(t){return t!==rr}function la(t){return t&32767}function LE(t){return t>>16}function da(t,n){let e=LE(t),i=n;for(;e>0;)i=i[ti],e--;return i}var ld=!0;function Vp(t){let n=ld;return ld=t,n}var VE=256,_m=VE-1,bm=5,jE=0,Wt={};function BE(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Jn)&&(i=e[Jn]),i==null&&(i=e[Jn]=jE++);let r=i&_m,o=1<<r;n.data[t+(r>>bm)]|=o}function ua(t,n){let e=Em(t,n);if(e!==-1)return e;let i=n[I];i.firstCreatePass&&(t.injectorIndex=n.length,Yl(i.data,t),Yl(n,null),Yl(i.blueprint,null));let r=zd(t,n),o=t.injectorIndex;if(ym(r)){let s=la(r),a=da(r,n),c=a[I].data;for(let l=0;l<8;l++)n[o+l]=a[s+l]|c[s+l]}return n[o+8]=r,o}function Yl(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Em(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function zd(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=Tm(r),i===null)return rr;if(e++,r=r[ti],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return rr}function dd(t,n,e){BE(t,n,e)}function UE(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(vm(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function wm(t,n,e){if(e&8||t!==void 0)return t;ks(n,"NodeInjector")}function Im(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Vt],o=it(void 0);try{return r?r.get(n,i,e&8):bl(n,i,e&8)}finally{it(o)}}return wm(i,n,e)}function Dm(t,n,e,i=0,r){if(t!==null){if(n[T]&2048&&!(i&2)){let s=WE(t,n,e,i,Wt);if(s!==Wt)return s}let o=Cm(t,n,e,i,Wt);if(o!==Wt)return o}return Im(n,e,i,r)}function Cm(t,n,e,i,r){let o=$E(e);if(typeof o=="function"){if(!zl(n,t,i))return i&1?wm(r,e,i):Im(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))ks(e);else return s}finally{Wl()}}else if(typeof o=="number"){let s=null,a=Em(t,n),c=rr,l=i&1?n[$e][Ve]:null;for((a===-1||i&4)&&(c=a===-1?zd(t,n):n[a+8],c===rr||!Bp(i,!1)?a=-1:(s=n[I],a=la(c),n=da(c,n)));a!==-1;){let d=n[I];if(jp(o,a,d.data)){let u=HE(a,n,e,s,i,l);if(u!==Wt)return u}c=n[a+8],c!==rr&&Bp(i,n[I].data[a+8]===l)&&jp(o,a,n)?(s=d,a=la(c),n=da(c,n)):a=-1}}return r}function HE(t,n,e,i,r,o){let s=n[I],a=s.data[t+8],c=i==null?nn(a)&&ld:i!=s&&(a.type&3)!==0,l=r&1&&o===a,d=sa(a,s,e,c,l);return d!==null?Zr(n,s,d,a,r):Wt}function sa(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,u=i?a:a+d,p=r?a+d:l;for(let f=u;f<p;f++){let m=s[f];if(f<c&&e===m||f>=c&&m.type===e)return f}if(r){let f=s[c];if(f&&$t(f)&&f.type===e)return c}return null}function Zr(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof hi){let a=o;if(a.resolving)throw _l("");let c=Vp(a.canSeeViewProviders);a.resolving=!0;let l=s[e].type||s[e],d,u=a.injectImpl?it(a.injectImpl):null,p=zl(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&AE(e,s[e],n)}finally{u!==null&&it(u),Vp(c),a.resolving=!1,Wl()}}return o}function $E(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Jn)?t[Jn]:void 0;return typeof n=="number"?n>=0?n&_m:zE:n}function jp(t,n,e){let i=1<<t;return!!(e[n+(t>>bm)]&i)}function Bp(t,n){return!(t&2)&&!(t&1&&n)}var xn=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return Dm(this._tNode,this._lView,n,Qn(i),e)}};function zE(){return new xn(Ne(),F())}function Wd(t){return io(()=>{let n=t.prototype.constructor,e=n[Pr]||ud(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Pr]||ud(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function ud(t){return ul(t)?()=>{let n=ud(xe(t));return n&&n()}:Zn(t)}function WE(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[T]&2048&&!Ji(s);){let a=Cm(o,s,e,i|2,Wt);if(a!==Wt)return a;let c=o.parent;if(!c){let l=s[Sl];if(l){let d=l.get(e,Wt,i&-5);if(d!==Wt)return d}c=Tm(s),s=s[ti]}o=c}return r}function Tm(t){let n=t[I],e=n.type;return e===2?n.declTNode:e===1?t[Ve]:null}function Sm(t){return UE(Ne(),t)}function $(t){return{token:t.token,providedIn:t.autoProvided===!1?null:"root",factory:t.factory,value:void 0}}function GE(){return lr(Ne(),F())}function lr(t,n){return new Y(It(t,n))}var Y=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=GE}return t})();function qE(t){return t instanceof Y?t.nativeElement:t}function KE(){return this._results[Symbol.iterator]()}var an=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Q}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Zh(n);(this._changesDetected=!Qh(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=KE};function Mm(t){return(t.flags&128)===128}var Gd=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Gd||{}),xm=new Map,QE=0;function ZE(){return QE++}function XE(t){xm.set(t[Ut],t)}function fd(t){xm.delete(t[Ut])}var Up="__ngContext__";function sr(t,n){tn(n)?(t[Up]=n[Ut],XE(n)):t[Up]=n}function Am(t){return Rm(t[Yi])}function Nm(t){return Rm(t[ht])}function Rm(t){for(;t!==null&&!pt(t);)t=t[ht];return t}var hd;function qd(t){hd=t}function km(){if(hd!==void 0)return hd;if(typeof document<"u")return document;throw new v(210,!1)}var Om="r";var Pm="di";var Fm=!1,Lm=new _("",{factory:()=>Fm});var Hp=new WeakMap;function YE(t,n){if(t==null||typeof t!="object")return;let e=Hp.get(t);e||(e=new WeakSet,Hp.set(t,e)),e.add(n)}var JE=(t,n,e,i)=>{};function ew(t,n,e,i){JE(t,n,e,i)}function Ia(t){return(t.flags&32)===32}var tw=()=>null;function Vm(t,n,e=!1){return tw(t,n,e)}function jm(t,n){let e=t.contentQueries;if(e!==null){let i=C(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];Ws(o),a.contentQueries(2,n[s],s)}}}finally{C(i)}}}function pd(t,n,e){Ws(0);let i=C(null);try{n(t,e)}finally{C(i)}}function Bm(t,n,e){if(xl(n)){let i=C(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let c=e[s];a.contentQueries(1,c,s)}}}finally{C(i)}}}var Tt=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Tt||{});var ta;function nw(){if(ta===void 0&&(ta=null,Gi.trustedTypes))try{ta=Gi.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return ta}function Da(t){return nw()?.createHTML(t)||t}var cn=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ms})`}},md=class extends cn{getTypeName(){return"HTML"}},gd=class extends cn{getTypeName(){return"Style"}},vd=class extends cn{getTypeName(){return"Script"}},yd=class extends cn{getTypeName(){return"URL"}},_d=class extends cn{getTypeName(){return"ResourceURL"}};function dn(t){return t instanceof cn?t.changingThisBreaksApplicationSecurity:t}function gi(t,n){let e=Um(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Ms})`)}return e===n}function Um(t){return t instanceof cn&&t.getTypeName()||null}function Kd(t){return new md(t)}function Qd(t){return new gd(t)}function Zd(t){return new vd(t)}function Xd(t){return new yd(t)}function Yd(t){return new _d(t)}function iw(t){let n=new Ed(t);return rw()?new bd(n):n}var bd=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Da(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},Ed=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Da(n),e}};function rw(){try{return!!new window.DOMParser().parseFromString(Da(""),"text/html")}catch{return!1}}var ow=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Ca(t){return t=String(t),t.match(ow)?t:"unsafe:"+t}function un(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function ro(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var Hm=un("area,br,col,hr,img,wbr"),$m=un("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),zm=un("rp,rt"),sw=ro(zm,$m),aw=ro($m,un("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),cw=ro(zm,un("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),$p=ro(Hm,aw,cw,sw),Wm=un("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),lw=un("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),dw=un("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),uw=ro(Wm,lw,dw),fw=un("script,style,template"),wd=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=mw(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=pw(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=zp(n).toLowerCase();if(!$p.hasOwnProperty(e))return this.sanitizedSomething=!0,!fw.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!uw.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=o.value;Wm[a]&&(c=Ca(c)),this.buf.push(" ",s,'="',Wp(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=zp(n).toLowerCase();$p.hasOwnProperty(e)&&!Hm.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Wp(n))}};function hw(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function pw(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw Gm(n);return n}function mw(t){let n=t.firstChild;if(n&&hw(t,n))throw Gm(n);return n}function zp(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function Gm(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var gw=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,vw=/([^\#-~ |!])/g;function Wp(t){return t.replace(/&/g,"&amp;").replace(gw,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(vw,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var na;function Jd(t,n){let e=null;try{na=na||iw(t);let i=n?String(n):"";e=na.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=na.getInertBodyElement(i)}while(i!==o);let a=new wd().sanitizeChildren(Gp(e)||e);return Da(a)}finally{if(e){let i=Gp(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function Gp(t){return"content"in t&&yw(t)?t.content:null}function yw(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function _w(t,n){return t.createText(n)}function bw(t,n,e){t.setValue(n,e)}function qm(t,n,e){return t.createElement(n,e)}function fa(t,n,e,i,r){t.insertBefore(n,e,i,r)}function Km(t,n,e){t.appendChild(n,e)}function qp(t,n,e,i,r){i!==null?fa(t,n,e,i,r):Km(t,n,e)}function Qm(t,n,e,i){t.removeChild(null,n,e,i)}function Ew(t,n,e){t.setAttribute(n,"style",e)}function ww(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Zm(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&PE(t,n,i),r!==null&&ww(t,n,r),o!==null&&Ew(t,n,o)}var ze=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(ze||{});function Iw(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Xm="ng-template";function Dw(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&Iw(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(eu(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function eu(t){return t.type===4&&t.value!==Xm}function Cw(t,n,e){let i=t.type===4&&!e?Xm:t.value;return n===i}function Tw(t,n,e){let i=4,r=t.attrs,o=r!==null?xw(r):0,s=!1;for(let a=0;a<n.length;a++){let c=n[a];if(typeof c=="number"){if(!s&&!Dt(i)&&!Dt(c))return!1;if(s&&Dt(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!Cw(t,c,e)||c===""&&n.length===1){if(Dt(i))return!1;s=!0}}else if(i&8){if(r===null||!Dw(t,r,c,e)){if(Dt(i))return!1;s=!0}}else{let l=n[++a],d=Sw(c,r,eu(t),e);if(d===-1){if(Dt(i))return!1;s=!0;continue}if(l!==""){let u;if(d>o?u="":u=r[d+1].toLowerCase(),i&2&&l!==u){if(Dt(i))return!1;s=!0}}}}return Dt(i)||s}function Dt(t){return(t&1)===0}function Sw(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return Aw(n,t)}function Ym(t,n,e=!1){for(let i=0;i<n.length;i++)if(Tw(t,n[i],e))return!0;return!1}function Mw(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function xw(t){for(let n=0;n<t.length;n++){let e=t[n];if(vm(e))return n}return t.length}function Aw(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function Nw(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Kp(t,n){return t?":not("+n.trim()+")":n}function Rw(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!Dt(s)&&(n+=Kp(o,r),r=""),i=s,o=o||!Dt(i);e++}return r!==""&&(n+=Kp(o,r)),n}function kw(t){return t.map(Rw).join(",")}function Ow(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Dt(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var St={},ln=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(ln||{}),Pw;function tu(t,n){return Pw(t,n)}var wP=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Id=new WeakMap,qr=new WeakSet;function Fw(t,n){let e=Id.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),qr.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function Lw(t,n){let e=Id.get(t);e?e.includes(n)||e.push(n):Id.set(t,[n])}var An=new Set,Ta=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Ta||{}),fn=new _(""),Qp=new Set;function hn(t){Qp.has(t)||(Qp.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var nu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=z({token:t,providedIn:"root",factory:()=>new t})}return t})(),iu=[0,1,2,3],Jm=(()=>{class t{ngZone=h(A);scheduler=h(ft);errorHandler=h(Ze,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){h(fn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Z(H.AfterRenderHooksStart),this.executing=!0;for(let i of iu)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Z(H.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[ii]??=[]).push(e),si(i),i[T]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Ta.AFTER_NEXT_RENDER,e):e()}static \u0275prov=z({token:t,providedIn:"root",factory:()=>new t})}return t})(),ha=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[ii];n&&(this.view[ii]=n.filter(e=>e!==this))}};var ru=new _("",{factory:()=>{let t=h(Ae),n=new Set;return t.onDestroy(()=>n.clear()),{queue:n,isScheduled:!1,scheduler:null,injector:t}}});function eg(t,n,e){let i=t.get(ru);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function Vw(t,n){let e=t.get(ru);if(Array.isArray(n))for(let i of n)e.queue.delete(i);else e.queue.delete(n)}function jw(t,n){let e=t.get(ru);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function Bw(t,n){for(let[e,i]of n)eg(t,i.animateFns)}function Zp(t,n,e,i){let r=t?.[Ht]?.enter;n!==null&&r&&r.has(e.index)&&Bw(i,r)}function Xp(t,n,e,i){try{e.get(Ur)}catch{return i(!1)}let r=t?.[Ht];r?.enter?.has(n.index)&&Vw(e,r.enter.get(n.index).animateFns);let o=Uw(t,n,r);if(o.size===0){let s=!1;if(t){let a=[];Sa(t,n,a),s=a.length>0}if(!s)return i(!1)}t&&An.add(t[Ut]),eg(e,()=>Hw(t,n,r||void 0,o,i),r||void 0)}function Uw(t,n,e){let i=new Map,r=e?.leave;if(r&&r.has(n.index)&&i.set(n.index,r.get(n.index)),t&&r)for(let[o,s]of r){if(i.has(o))continue;let c=t[I].data[o].parent;for(;c;){if(c===n){i.set(o,s);break}c=c.parent}}return i}function Hw(t,n,e,i,r){let o=[];if(e&&e.leave)for(let[s]of i){if(!e.leave.has(s))continue;let a=e.leave.get(s);for(let c of a.animateFns){let{promise:l}=c();o.push(l)}e.detachedLeaveAnimationFns=void 0}if(t&&Sa(t,n,o),o.length>0){let s=e||t?.[Ht];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),zw(t,s.running,r)}else Promise.allSettled(o).then(()=>{t&&An.delete(t[Ut]),r(!0)})}else t&&An.delete(t[Ut]),r(!1)}function Sa(t,n,e){if(n.type&12){let r=t[n.index];if(pt(r))for(let o=fe;o<r.length;o++){let s=r[o];s[I].type===2&&$w(s,e)}}let i=n.child;for(;i;)Sa(t,i,e),i=i.next}function $w(t,n){let e=t[Ht];if(e&&e.leave)for(let r of e.leave.values())for(let o of r.animateFns){let{promise:s}=o();n.push(s)}let i=t[I].firstChild;for(;i;)Sa(t,i,n),i=i.next}function zw(t,n,e){n.then(()=>{t[Ht]?.running===n&&(t[Ht].running=void 0,An.delete(t[Ut])),e(!0)})}function ir(t,n,e,i,r,o,s,a){if(r!=null){let c,l=!1;pt(r)?c=r:tn(r)&&(l=!0,r=r[wt]);let d=mt(r);t===0&&i!==null?(Zp(a,i,o,e),s==null?Km(n,i,d):fa(n,i,d,s||null,!0)):t===1&&i!==null?(Zp(a,i,o,e),fa(n,i,d,s||null,!0),Fw(o,d)):t===2?(a?.[Ht]?.leave?.has(o.index)&&Lw(o,d),qr.delete(d),Xp(a,o,e,u=>{if(qr.has(d)){qr.delete(d);return}Qm(n,d,l,u)})):t===3&&(qr.delete(d),Xp(a,o,e,()=>{n.destroyNode(d)})),c!=null&&eI(n,t,e,c,o,i,s)}}function Ww(t,n){tg(t,n),n[wt]=null,n[Ve]=null}function Gw(t,n,e,i,r,o){i[wt]=r,i[Ve]=n,xa(t,i,e,1,r,o)}function tg(t,n){n[jt].changeDetectionScheduler?.notify(9),xa(t,n,n[ae],2,null,null)}function qw(t){let n=t[Yi];if(!n)return Jl(t[I],t);for(;n;){let e=null;if(tn(n))e=n[Yi];else{let i=n[fe];i&&(e=i)}if(!e){for(;n&&!n[ht]&&n!==t;)tn(n)&&Jl(n[I],n),n=n[De];n===null&&(n=t),tn(n)&&Jl(n[I],n),e=n&&n[ht]}n=e}}function ou(t,n){let e=t[ri],i=e.indexOf(n);e.splice(i,1)}function Ma(t,n){if(oi(n))return;let e=n[ae];e.destroyNode&&xa(t,n,e,3,null,null),qw(n)}function Jl(t,n){if(oi(n))return;let e=C(null);try{n[T]&=-129,n[T]|=256,n[rt]&&wn(n[rt]),Qw(t,n),Kw(t,n),n[I].type===1&&n[ae].destroy();let i=n[Tn];if(i!==null&&pt(n[De])){i!==n[De]&&ou(i,n);let r=n[Bt];r!==null&&r.detachView(t)}fd(n)}finally{C(e)}}function Kw(t,n){let e=t.cleanup,i=n[Xi];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[Xi]=null);let r=n[Yt];if(r!==null){n[Yt]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[In];if(o!==null){n[In]=null;for(let s of o)s.destroy()}}function Qw(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof hi)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];Z(H.LifecycleHookStart,a,c);try{c.call(a)}finally{Z(H.LifecycleHookEnd,a,c)}}else{Z(H.LifecycleHookStart,r,o);try{o.call(r)}finally{Z(H.LifecycleHookEnd,r,o)}}}}}function ng(t,n,e){return Zw(t,n.parent,e)}function Zw(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[wt];if(nn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Tt.None||r===Tt.Emulated)return null}return It(i,e)}function ig(t,n,e){return Yw(t,n,e)}function Xw(t,n,e){return t.type&40?It(t,e):null}var Yw=Xw,Yp;function su(t,n,e,i){let r=ng(t,i,n),o=n[ae],s=i.parent||n[Ve],a=ig(s,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)qp(o,r,e[c],a,!1);else qp(o,r,e,a,!1);Yp!==void 0&&Yp(o,i,n,e,r)}function Kr(t,n){if(n!==null){let e=n.type;if(e&3)return It(n,t);if(e&4)return Dd(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Kr(t,i);{let r=t[n.index];return pt(r)?Dd(-1,r):mt(r)}}else{if(e&128)return Kr(t,n.next);if(e&32)return tu(n,t)()||mt(t[n.index]);{let i=rg(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Jt(t[$e]);return Kr(r,i)}else return Kr(t,n.next)}}}return null}function rg(t,n){if(n!==null){let i=t[$e][Ve],r=n.projection;return i.projection[r]}return null}function Dd(t,n){let e=fe+t+1;if(e<n.length){let i=n[e],r=i[I].firstChild;if(r!==null)return Kr(i,r)}return n[Sn]}function au(t,n,e,i,r,o,s){for(;e!=null;){let a=i[Vt];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(s&&n===0&&(c&&sr(mt(c),i),e.flags|=2),!Ia(e))if(l&8)au(t,n,e.child,i,r,o,!1),ir(n,t,a,r,c,e,o,i);else if(l&32){let d=tu(e,i),u;for(;u=d();)ir(n,t,a,r,u,e,o,i);ir(n,t,a,r,c,e,o,i)}else l&16?og(t,n,i,e,r,o):ir(n,t,a,r,c,e,o,i);e=s?e.projectionNext:e.next}}function xa(t,n,e,i,r,o){au(e,i,t.firstChild,n,r,o,!1)}function Jw(t,n,e){let i=n[ae],r=ng(t,e,n),o=e.parent||n[Ve],s=ig(o,e,n);og(i,0,n,e,r,s)}function og(t,n,e,i,r,o){let s=e[$e],c=s[Ve].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];ir(n,t,e[Vt],r,d,i,o,e)}else{let l=c,d=s[De];Mm(i)&&(l.flags|=128),au(t,n,l,d,r,o,!0)}}function eI(t,n,e,i,r,o,s){let a=i[Sn],c=mt(i);a!==c&&ir(n,t,e,o,a,r,s);for(let l=fe;l<i.length;l++){let d=i[l];xa(d[I],d,t,n,o,a)}}function tI(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:ln.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=ln.Important),t.setStyle(e,i,r,o))}}function cu(t,n,e,i,r,o,s,a,c,l,d){let u=Ce+i,p=u+r,f=nI(u,p),m=typeof l=="function"?l():l;return f[I]={type:t,blueprint:f,template:e,queries:null,viewQuery:a,declTNode:n,data:f.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:m,incompleteFirstPass:!1,ssrId:d}}function nI(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:St);return e}function iI(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=cu(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function lu(t,n,e,i,r,o,s,a,c,l,d){let u=n.blueprint.slice();return u[wt]=r,u[T]=i|4|128|8|64|1024,(l!==null||t&&t[T]&2048)&&(u[T]|=2048),Nl(u),u[De]=u[ti]=t,u[Ee]=e,u[jt]=s||t&&t[jt],u[ae]=a||t&&t[ae],u[Vt]=c||t&&t[Vt]||null,u[Ve]=o,u[Ut]=ZE(),u[ei]=d,u[Sl]=l,u[$e]=n.type==2?t[$e]:u,u}function rI(t,n,e){let i=It(n,t),r=iI(e),o=t[jt].rendererFactory,s=du(t,lu(t,r,null,sg(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function sg(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function ag(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function du(t,n){return t[Yi]?t[Tl][ht]=n:t[Yi]=n,t[Tl]=n,n}function G(t=1){cg(Te(),F(),rn()+t,!1)}function cg(t,n,e,i){if(!i)if((n[T]&3)===3){let o=t.preOrderCheckHooks;o!==null&&ra(n,o,e)}else{let o=t.preOrderHooks;o!==null&&oa(n,o,0,e)}Mn(e)}var Aa=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Aa||{});function Cd(t,n,e,i){let r=C(null);try{let[o,s,a]=t.inputs[e],c=null;(s&Aa.SignalBased)!==0&&(c=n[o][Le]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):pm(n,c,o,i)}finally{C(r)}}function lg(t,n,e,i,r){let o=rn(),s=i&2;try{Mn(-1),s&&n.length>Ce&&cg(t,n,Ce,!1);let a=s?H.TemplateUpdateStart:H.TemplateCreateStart;Z(a,r,e),e(i,r)}finally{Mn(o);let a=s?H.TemplateUpdateEnd:H.TemplateCreateEnd;Z(a,r,e)}}function dg(t,n,e){uI(t,n,e),(e.flags&64)===64&&fI(t,n,e)}function uu(t,n,e=It){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function oI(t,n,e,i){let o=i.get(Lm,Fm)||e===Tt.ShadowDom||e===Tt.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);if(s.tagName.toLowerCase()==="script")throw new v(905,!1);return sI(s),s}function sI(t){aI(t)}var aI=()=>null;function cI(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function lI(t,n,e,i,r,o){let s=n[I];if(fu(t,s,n,e,i)){nn(t)&&dI(n,t.index);return}t.type&3&&(e=cI(e)),ug(t,n,e,i,r,o)}function ug(t,n,e,i,r,o){if(t.type&3){let s=It(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function dI(t,n){let e=gt(n,t);e[T]&16||(e[T]|=64)}function uI(t,n,e){let i=e.directiveStart,r=e.directiveEnd;nn(e)&&rI(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||ua(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],c=Zr(n,t,s,e);if(sr(c,n),o!==null&&vI(n,s-i,c,a,e,o),$t(a)){let l=gt(e.index,n);l[Ee]=Zr(n,t,s,e)}}}function fI(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=_p();try{Mn(o);for(let a=i;a<r;a++){let c=t.data[a],l=n[a];zs(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&hI(c,l)}}finally{Mn(-1),zs(s)}}function hI(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function pI(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Ym(n,o.selectors,!1)&&(i??=[],$t(o)?i.unshift(o):i.push(o))}return i}function mI(t,n,e,i,r,o){let s=It(t,n);gI(n[ae],s,o,t.value,e,i,r)}function gI(t,n,e,i,r,o,s){if(o==null)s?.(o,i||"",r),t.removeAttribute(n,r,e);else{let a=s==null?yl(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function vI(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];Cd(i,e,c,l)}}function fg(t,n,e,i,r){let o=Ce+e,s=n[I],a=r(s,n,t,i,e);n[o]=a,tr(t,!0);let c=t.type===2;return c?(Zm(n[ae],a,t),(fp()===0||Vs(t))&&sr(a,n),hp()):sr(a,n),Qs()&&(!c||!Ia(t))&&su(s,n,a,t),t}function hg(t){let n=t;return jl()?Bl():(n=n.parent,tr(n,!1)),n}function yI(t,n){let e=t[Vt];if(!e)return;let i;try{i=e.get(li,null)}catch{i=null}i?.(n)}function fu(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],u=n.data[l];Cd(u,e[l],d,r),a=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];Cd(d,l,i,r),a=!0}return a}function _I(t,n){let e=gt(n,t),i=e[I];bI(i,e);let r=e[wt];r!==null&&e[ei]===null&&(e[ei]=Vm(r,e[Vt])),Z(H.ComponentStart);try{hu(i,e,e[Ee])}finally{Z(H.ComponentEnd,e[Ee])}}function bI(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function hu(t,n,e){Gs(n);try{let i=t.viewQuery;i!==null&&pd(1,i,e);let r=t.template;r!==null&&lg(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Bt]?.finishViewCreation(t),t.staticContentQueries&&jm(t,n),t.staticViewQueries&&pd(2,t.viewQuery,e);let o=t.components;o!==null&&EI(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[T]&=-5,qs()}}function EI(t,n){for(let e=0;e<n.length;e++)_I(t,n[e])}function oo(t,n,e,i){let r=C(null);try{let o=n.tView,a=t[T]&4096?4096:16,c=lu(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[Tn]=l;let d=t[Bt];return d!==null&&(c[Bt]=d.createEmbeddedView(o)),hu(o,c,e),c}finally{C(r)}}function ar(t,n){return!n||n.firstChild===null||Mm(t)}function Xr(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(mt(o)),pt(o)&&pg(o,i);let s=e.type;if(s&8)Xr(t,n,e.child,i);else if(s&32){let a=tu(e,n),c;for(;c=a();)i.push(c)}else if(s&16){let a=rg(n,e);if(Array.isArray(a))i.push(...a);else{let c=Jt(n[$e]);Xr(c[I],c,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function pg(t,n){for(let e=fe;e<t.length;e++){let i=t[e],r=i[I].firstChild;r!==null&&Xr(i[I],i,r,n)}t[Sn]!==t[wt]&&n.push(t[Sn])}function mg(t){if(t[ii]!==null){for(let n of t[ii])n.impl.addSequence(n);t[ii].length=0}}var gg=[];function wI(t){return t[rt]??II(t)}function II(t){let n=gg.pop()??Object.create(CI);return n.lView=t,n}function DI(t){t.lView[rt]!==t&&(t.lView=null,gg.push(t))}var CI=Ie(x({},Ai),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{si(t.lView)},consumerOnSignalRead(){this.lView[rt]=this}});function TI(t){let n=t[rt]??Object.create(SI);return n.lView=t,n}var SI=Ie(x({},Ai),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Jt(t.lView);for(;n&&!vg(n[I]);)n=Jt(n);n&&Us(n)},consumerOnSignalRead(){this.lView[rt]=this}});function vg(t){return t.type!==2}function yg(t){if(t[In]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[In])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[T]&8192)}}var MI=100;function _g(t,n=0){let i=t[jt].rendererFactory,r=!1;r||i.begin?.();try{xI(t,n)}finally{r||i.end?.()}}function xI(t,n){let e=Ul();try{Fr(!0),Td(t,n);let i=0;for(;er(t);){if(i===MI)throw new v(103,!1);i++,Td(t,1)}}finally{Fr(e)}}function AI(t,n,e,i){if(oi(n))return;let r=n[T],o=!1,s=!1;Gs(n);let a=!0,c=null,l=null;o||(vg(t)?(l=wI(n),c=jn(l)):Wo()===null?(a=!1,l=TI(n),c=jn(l)):n[rt]&&(wn(n[rt]),n[rt]=null));try{Nl(n),gp(t.bindingStartIndex),e!==null&&lg(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let f=t.preOrderCheckHooks;f!==null&&ra(n,f,null)}else{let f=t.preOrderHooks;f!==null&&oa(n,f,0,null),Xl(n,0)}if(s||NI(n),yg(n),bg(n,0),t.contentQueries!==null&&jm(t,n),!o)if(d){let f=t.contentCheckHooks;f!==null&&ra(n,f)}else{let f=t.contentHooks;f!==null&&oa(n,f,1),Xl(n,1)}kI(t,n);let u=t.components;u!==null&&wg(n,u,0);let p=t.viewQuery;if(p!==null&&pd(2,p,i),!o)if(d){let f=t.viewCheckHooks;f!==null&&ra(n,f)}else{let f=t.viewHooks;f!==null&&oa(n,f,2),Xl(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Ls]){for(let f of n[Ls])f();n[Ls]=null}o||(mg(n),n[T]&=-73)}catch(d){throw o||si(n),d}finally{l!==null&&(Ri(l,c),a&&DI(l)),qs()}}function bg(t,n){for(let e=Am(t);e!==null;e=Nm(e))for(let i=fe;i<e.length;i++){let r=e[i];Eg(r,n)}}function NI(t){for(let n=Am(t);n!==null;n=Nm(n)){if(!(n[T]&2))continue;let e=n[ri];for(let i=0;i<e.length;i++){let r=e[i];Us(r)}}}function RI(t,n,e){Z(H.ComponentStart);let i=gt(n,t);try{Eg(i,e)}finally{Z(H.ComponentEnd,i[Ee])}}function Eg(t,n){Bs(t)&&Td(t,n)}function Td(t,n){let i=t[I],r=t[T],o=t[rt],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&ki(o)),s||=!1,o&&(o.dirty=!1),t[T]&=-9217,s)AI(i,t,i.template,t[Ee]);else if(r&8192){let a=C(null);try{yg(t),bg(t,1);let c=i.components;c!==null&&wg(t,c,1),mg(t)}finally{C(a)}}}function wg(t,n,e){for(let i=0;i<n.length;i++)RI(t,n[i],e)}function kI(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Mn(~r);else{let o=r,s=e[++i],a=e[++i];yp(s,o);let c=n[o];Z(H.HostBindingsUpdateStart,c);try{a(2,c)}finally{Z(H.HostBindingsUpdateEnd,c)}}}}finally{Mn(-1)}}function pu(t,n){let e=Ul()?64:1088;for(t[jt].changeDetectionScheduler?.notify(n);t;){t[T]|=e;let i=Jt(t);if(Ji(t)&&!i)return t;t=i}return null}function Ig(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function Dg(t,n){let e=fe+n;if(e<t.length)return t[e]}function so(t,n,e,i=!0){let r=n[I];if(OI(r,n,t,e),i){let s=Dd(e,t),a=n[ae],c=a.parentNode(t[Sn]);c!==null&&Gw(r,t[Ve],a,n,c,s)}let o=n[ei];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Cg(t,n){let e=Yr(t,n);return e!==void 0&&Ma(e[I],e),e}function Yr(t,n){if(t.length<=fe)return;let e=fe+n,i=t[e];if(i){let r=i[Tn];r!==null&&r!==t&&ou(r,i),n>0&&(t[e-1][ht]=i[ht]);let o=Br(t,fe+n);Ww(i[I],i);let s=o[Bt];s!==null&&s.detachView(o[I]),i[De]=null,i[ht]=null,i[T]&=-129}return i}function OI(t,n,e,i){let r=fe+i,o=e.length;i>0&&(e[r-1][ht]=n),i<o-fe?(n[ht]=e[r],El(e,fe+i,n)):(e.push(n),n[ht]=null),n[De]=e;let s=n[Tn];s!==null&&e!==s&&Tg(s,n);let a=n[Bt];a!==null&&a.insertView(t),Hs(n),n[T]|=128}function Tg(t,n){let e=t[ri],i=n[De];if(tn(i))t[T]|=2;else{let r=i[De][$e];n[$e]!==r&&(t[T]|=2)}e===null?t[ri]=[n]:e.push(n)}var Nn=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[I];return Xr(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Ee]}set context(n){this._lView[Ee]=n}get destroyed(){return oi(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[De];if(pt(n)){let e=n[zr],i=e?e.indexOf(this):-1;i>-1&&(Yr(n,i),Br(e,i))}this._attachedToViewContainer=!1}Ma(this._lView[I],this._lView)}onDestroy(n){$s(this._lView,n)}markForCheck(){pu(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[T]&=-129}reattach(){Hs(this._lView),this._lView[T]|=128}detectChanges(){this._lView[T]|=1024,_g(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new v(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Ji(this._lView),e=this._lView[Tn];e!==null&&!n&&ou(e,this._lView),tg(this._lView[I],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new v(902,!1);this._appRef=n;let e=Ji(this._lView),i=this._lView[Tn];i!==null&&!e&&Tg(i,this._lView),Hs(this._lView)}};function mu(t){return er(t._lView)||!!(t._lView[T]&64)}function gu(t){Us(t._lView)}var Jr=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=PI;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=oo(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Nn(o)}}return t})();function PI(){return vu(Ne(),F())}function vu(t,n){return t.type&4?new Jr(n,t,lr(t,n)):null}function ao(t,n,e,i,r){let o=t.data[n];if(o===null)o=FI(t,n,e,i,r),vp()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=mp();o.injectorIndex=s===null?-1:s.injectorIndex}return tr(o,!0),o}function FI(t,n,e,i,r){let o=Vl(),s=jl(),a=s?o:o&&o.parent,c=t.data[n]=VI(t,a,e,n,i,r);return LI(t,c,o,s),c}function LI(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function VI(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return Pl()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:Gl(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function jI(t){let n=t[Ml]??[],i=t[De][ae],r=[];for(let o of n)o.data[Pm]!==void 0?r.push(o):BI(o,i);t[Ml]=r}function BI(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[Om];for(;e<r;){let o=i.nextSibling;Qm(n,i,!1),i=o,e++}}}var UI=()=>null,HI=()=>null;function pa(t,n){return UI(t,n)}function Sg(t,n,e){return HI(t,n,e)}var Mg=class{},ot=class{},Mt=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>$I()}return t})();function $I(){let t=F(),n=Ne(),e=gt(n.index,t);return(tn(e)?e:t)[ae]}var xg=(()=>{class t{static \u0275prov=z({token:t,providedIn:"root",factory:()=>null})}return t})();function Ag(t){return t.debugInfo?.className||t.type.name||null}var aa={},ma=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,aa,i);return r!==aa||e===aa?r:this.parentInjector.get(n,e,i)}};function Rn(t,n,e){if(e===St)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function ed(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&YE(r,o);let s=nn(t)?gt(t.index,n):n;pu(s,5);let a=n[Ee],c=Jp(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)c=Jp(n,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function Jp(t,n,e,i){let r=C(null);try{return Z(H.OutputStart,n,e),e(i)!==!1}catch(o){return yI(t,o),!1}finally{Z(H.OutputEnd,n,e),C(r)}}function zI(t,n,e,i,r,o,s,a){let c=Vs(t),l=!1,d=null;if(!i&&c&&(d=GI(n,e,o,t.index)),d!==null){let u=d.__ngLastListenerFn__||d;u.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let u=It(t,e),p=i?i(u):u;ew(e,p,o,a),i||(a.__ngNativeEl__=u);let f=r.listen(p,o,a);if(!WI(o)){let m=i?g=>i(mt(g[t.index])):t.index;Ng(m,n,e,o,a,f,!1)}}return l}function WI(t){return t.startsWith("animation")||t.startsWith("transition")}function GI(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[Xi],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function Ng(t,n,e,i,r,o,s){let a=n.firstCreatePass?kl(n):null,c=Rl(e),l=c.length;c.push(r,o),a&&a.push(i,t,l,(l+1)*(s?-1:1))}function em(t,n,e,i,r,o){let s=n[e],a=n[I],l=a.data[e].outputs[i],u=s[l].subscribe(o);Ng(t.index,a,n,r,o,u,!0)}var Sd=Symbol("BINDING");var vi=new _("");function ga(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=As(r,a);else if(o==2){let c=a,l=n[++s];i=As(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function Na(t,n=0){let e=F();if(e===null)return S(t,n);let i=Ne();return Dm(i,e,xe(t),n)}function qI(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}ZI(t,n,e,a,o,c,l)}o!==null&&i!==null&&KI(e,i,o)}function KI(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new v(-301,!1);i.push(n[r],o)}}function QI(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function ZI(t,n,e,i,r,o,s){let a=i.length,c=null;for(let p=0;p<a;p++){let f=i[p];c===null&&$t(f)&&(c=f,QI(t,e,p)),dd(ua(e,n),t,f.type)}nD(e,t.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let p=0;p<a;p++){let f=i[p];f.providersResolver&&f.providersResolver(f)}let l=!1,d=!1,u=ag(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let p=0;p<a;p++){let f=i[p];if(e.mergedAttrs=or(e.mergedAttrs,f.hostAttrs),YI(t,e,n,u,f),tD(u,f,r),s!==null&&s.has(f)){let[g,y]=s.get(f);e.directiveToIndex.set(f.type,[u,g+e.directiveStart,y+e.directiveStart])}else(o===null||!o.has(f))&&e.directiveToIndex.set(f.type,u);f.contentQueries!==null&&(e.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(e.flags|=64);let m=f.type.prototype;!l&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(m.ngOnChanges||m.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),u++}XI(t,e,o)}function XI(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))tm(0,n,r,i),tm(1,n,r,i),im(n,i,!1);else{let o=e.get(r);nm(0,n,o,i),nm(1,n,o,i),im(n,i,!0)}}}function tm(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),Rg(n,o)}}function nm(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),Rg(n,s)}}function Rg(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function im(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||eu(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let d of l)if(d===n){s??=[],s.push(c,i[a+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){s??=[],s.push(l[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function YI(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Zn(r.type,!0)),s=new hi(o,$t(r),Na,null);t.blueprint[i]=s,e[i]=s,JI(t,n,i,ag(t,e,r.hostVars,St),r)}function JI(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;eD(s)!=a&&s.push(a),s.push(e,i,o)}}function eD(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function tD(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;$t(n)&&(e[""]=t)}}function nD(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function kg(t,n,e,i,r,o,s,a){let c=n[I],l=c.consts,d=zt(l,s),u=ao(c,t,e,i,d);return o&&qI(c,n,u,zt(l,a),r),u.mergedAttrs=or(u.mergedAttrs,u.attrs),u.attrs!==null&&ga(u,u.attrs,!1),u.mergedAttrs!==null&&ga(u,u.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,u),u}function Og(t,n){NE(t,n),xl(n)&&t.queries.elementEnd(n)}function iD(t,n,e,i,r,o){let s=n.consts,a=zt(s,r),c=ao(n,t,e,i,a);if(c.mergedAttrs=or(c.mergedAttrs,c.attrs),o!=null){let l=zt(s,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&ga(c,c.attrs,!1),c.mergedAttrs!==null&&ga(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}var Pg=typeof ShadowRoot<"u",rD=typeof Document<"u";function oD(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Aa.SignalBased)!==0};return r&&(o.transform=r),o})}function sD(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function aD(t,n,e){let i=n instanceof Ae?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new ma(e,i):e}function cD(t){let n=t.get(ot,null);if(n===null)throw new v(407,!1);let e=t.get(xg,null),i=t.get(ft,null),r=t.get(fn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function lD(t,n){let e=Fg(t);return qm(n,e,e==="svg"?op:e==="math"?sp:null)}function Fg(t){return(t.selectors[0][0]||"div").toLowerCase()}var pi=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=oD(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=sD(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=kw(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){Z(H.DynamicComponentStart);let a=C(null);try{let c=this.componentDef,l=aD(c,r||this.ngModule,n),d=cD(l),u=d.tracingService;return u&&u.componentCreate?u.componentCreate(Ag(c),()=>this.createComponentRef(d,l,e,i,o,s)):this.createComponentRef(d,l,e,i,o,s)}finally{C(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,c=dD(r,a,s,o),l=n.rendererFactory.createRenderer(null,a),d=r?oI(l,r,a.encapsulation,e):lD(a,l),u=e.get(vi,null),p=uD(d,()=>e.get(O,null)??km());u&&u.addHost(p);let f=s?.some(rm)||o?.some(y=>typeof y!="function"&&y.bindings.some(rm)),m=lu(null,c,null,512|sg(a),null,null,n,l,e,null,Vm(d,e,!0));u&&Pg&&p instanceof ShadowRoot&&$s(m,()=>{u.removeHost(p)}),m[Ce]=d,Gs(m);let g=null;try{let y=kg(Ce,m,2,"#host",()=>c.directiveRegistry,!0,0);Zm(l,d,y),sr(d,m),dg(c,m,y),Bm(c,y,m),Og(c,y),i!==void 0&&hD(y,this.ngContentSelectors,i),g=gt(y.index,m),m[Ee]=g[Ee],hu(c,m,null)}catch(y){throw g!==null&&fd(g),fd(m),y}finally{Z(H.DynamicComponentEnd),qs()}return new va(this.componentType,m,!!f)}};function dD(t,n,e,i){let r=t?["ng-version","22.0.1"]:Ow(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[Sd].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let u=i[d];if(typeof u!="function")for(let p of u.bindings){a+=p[Sd].requiredVars;let f=d+1;p.create&&(p.targetIdx=f,(o??=[]).push(p)),p.update&&(p.targetIdx=f,(s??=[]).push(p))}}let c=[n];if(i)for(let d of i){let u=typeof d=="function"?d:d.type,p=gl(u);c.push(p)}return cu(0,null,fD(o,s),1,a,c,null,null,null,[r],null)}function uD(t,n){let e=t.getRootNode?.();return rD&&e instanceof Document?e.head:e&&Pg&&e instanceof ShadowRoot?e:n().head}function fD(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function rm(t){let n=t[Sd].kind;return n==="input"||n==="twoWay"}var va=class extends Mg{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=js(e[I],Ce),this.location=lr(this._tNode,e),this.instance=gt(this._tNode.index,e)[Ee],this.hostView=this.changeDetectorRef=new Nn(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=fu(i,r[I],r,n,e);this.previousInputValues.set(n,e);let s=gt(i.index,r);pu(s,1)}get injector(){return new xn(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function hD(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Ra=(()=>{class t{static __NG_ELEMENT_ID__=pD}return t})();function pD(){let t=Ne();return Lg(t,F())}var Md=class t extends Ra{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return lr(this._hostTNode,this._hostLView)}get injector(){return new xn(this._hostTNode,this._hostLView)}get parentInjector(){let n=zd(this._hostTNode,this._hostLView);if(ym(n)){let e=da(n,this._hostLView),i=la(n),r=e[I].data[i+8];return new xn(r,e)}else return new xn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=om(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-fe}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=pa(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,ar(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let c,l=e||{};c=l.index,i=l.injector,r=l.projectableNodes,o=l.environmentInjector||l.ngModuleRef,s=l.directives,a=l.bindings;let d=new pi(en(n)),u=i||this.parentInjector;if(!o&&d.ngModule==null){let E=this.parentInjector.get(Ae,null);E&&(o=E)}let p=en(d.componentType??{}),f=pa(this._lContainer,p?.id??null),m=f?.firstChild??null,g=d.create(u,r,m,o,s,a);return this.insertImpl(g.hostView,c,ar(this._hostTNode,f)),g}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(cp(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let c=r[De],l=new t(c,c[Ve],c[De]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return so(s,r,o,i),n.attachToViewContainerRef(),El(td(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=om(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Yr(this._lContainer,e);i&&(Br(td(this._lContainer),e),Ma(i[I],i))}detach(n){let e=this._adjustIndex(n,-1),i=Yr(this._lContainer,e);return i&&Br(td(this._lContainer),e)!=null?new Nn(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function om(t){return t[zr]}function td(t){return t[zr]||(t[zr]=[])}function Lg(t,n){let e,i=n[t.index];return pt(i)?e=i:(e=Ig(i,n,null,t),n[t.index]=e,du(n,e)),gD(e,n,t,i),new Md(e,t,n)}function mD(t,n){let e=t[ae],i=e.createComment(""),r=It(n,t),o=e.parentNode(r);return fa(e,o,i,e.nextSibling(r),!1),i}var gD=_D,vD=()=>!1;function yD(t,n,e){return vD(t,n,e)}function _D(t,n,e,i){if(t[Sn])return;let r;e.type&8?r=mt(i):r=mD(n,e),t[Sn]=r}var xd=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Ad=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)yu(n,e).matches!==null&&this.queries[e].setDirty()}},ya=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=SD(n):this.predicate=n}},Nd=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Rd=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,bD(e,o)),this.matchTNodeWithReadOption(n,e,sa(e,n,o,!1,!1))}else i===Jr?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,sa(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Y||r===Ra||r===Jr&&e.type&4)this.addMatch(e.index,-2);else{let o=sa(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function bD(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function ED(t,n){return t.type&11?lr(t,n):t.type&4?vu(t,n):null}function wD(t,n,e,i){return e===-1?ED(n,t):e===-2?ID(t,n,i):Zr(t,t[I],e,n)}function ID(t,n,e){if(e===Y)return lr(n,t);if(e===Jr)return vu(n,t);if(e===Ra)return Lg(n,t)}function Vg(t,n,e,i){let r=n[Bt].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=o[l];a.push(wD(n,d,s[c+1],e.metadata.read))}}r.matches=a}return r.matches}function kd(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=Vg(t,n,r,e);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],d=n[-c];for(let u=fe;u<d.length;u++){let p=d[u];p[Tn]===p[De]&&kd(p[I],p,l,i)}if(d[ri]!==null){let u=d[ri];for(let p=0;p<u.length;p++){let f=u[p];kd(f[I],f,l,i)}}}}}return i}function DD(t,n){return t[Bt].queries[n].queryList}function jg(t,n,e){let i=new an((e&4)===4);return up(t,n,i,i.destroy),(n[Bt]??=new Ad).queries.push(new xd(i))-1}function CD(t,n,e){let i=Te();return i.firstCreatePass&&(Bg(i,new ya(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),jg(i,F(),n)}function TD(t,n,e,i){let r=Te();if(r.firstCreatePass){let o=Ne();Bg(r,new ya(n,e,i),o.index),MD(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return jg(r,F(),e)}function SD(t){return t.split(",").map(n=>n.trim())}function Bg(t,n,e){t.queries===null&&(t.queries=new Nd),t.queries.track(new Rd(n,e))}function MD(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function yu(t,n){return t.queries.getByIndex(n)}function xD(t,n){let e=t[I],i=yu(e,n);return i.crossesNgTemplate?kd(e,t,n,[]):Vg(e,t,i,n)}function ka(t){return!!t&&typeof t.then=="function"}function Ug(t){return!!t&&typeof t.subscribe=="function"}var _a=class{};var eo=class extends _a{injector;instance=null;constructor(n){super();let e=new Yn([...n.providers,{provide:_a,useValue:this}],n.parent||Qi(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Hg(t,n,e=null){return new eo({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var AD=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Il(!1,e.type),r=i.length>0?Hg([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=z({token:t,providedIn:"environment",factory:()=>new t(S(Ae))})}return t})();function q(t){return io(()=>{let n=$g(t),e=Ie(x({},n),{type:t.type,decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection!==Gd.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(AD).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Tt.Emulated,styles:t.styles||He,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&hn("NgStandalone"),zg(e);let i=t.dependencies;return e.directiveDefs=sm(i,ND),e.pipeDefs=sm(i,Wh),e.id=OD(e),e})}function ND(t){return en(t)||gl(t)}function X(t){return io(()=>({type:t.type,bootstrap:t.bootstrap||He,declarations:t.declarations||He,imports:t.imports||He,exports:t.exports||He,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function RD(t,n){if(t==null)return Cn;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=Aa.None,c=null),e[o]=[i,a,c],n[o]=s}return e}function kD(t){if(t==null)return Cn;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function ce(t){return io(()=>{let n=$g(t);return zg(n),n})}function $g(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Cn,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||He,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:RD(t.inputs,n),outputs:kD(t.outputs),debugInfo:null}}function zg(t){t.features?.forEach(n=>n(t))}function sm(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function OD(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}var Wg=new _("");var _u=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=h(Wg,{optional:!0})??[];injector=h(ye);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=Zi(this.injector,r);if(ka(o))e.push(o);else if(Ug(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function PD(t){return Object.getPrototypeOf(t.prototype).constructor}function pn(t){let n=PD(t.type),e=!0,i=[t];for(;n;){let r;if($t(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new v(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let s=t;s.inputs=nd(t.inputs),s.declaredInputs=nd(t.declaredInputs),s.outputs=nd(t.outputs);let a=r.hostBindings;a&&BD(t,a);let c=r.viewQuery,l=r.contentQueries;if(c&&VD(t,c),l&&jD(t,l),FD(t,r),zh(t.outputs,r.outputs),$t(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(t),a===pn&&(e=!1)}}n=Object.getPrototypeOf(n)}LD(i)}function FD(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function LD(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=or(r.hostAttrs,e=or(e,r.hostAttrs))}}function nd(t){return t===Cn?{}:t===He?[]:t}function VD(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function jD(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function BD(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function UD(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=or(t.mergedAttrs,t.attrs);let d=t.tView=cu(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),tr(t,!1);let c=HD(e,n,t,i);Qs()&&su(e,n,c,t),sr(c,n);let l=Ig(c,n,c,t);n[i+Ce]=l,du(n,l),yD(l,t,n)}function to(t,n,e,i,r,o,s,a,c,l,d){let u=e+Ce,p;if(n.firstCreatePass){if(p=ao(n,u,4,s||null,a||null),l!=null){let f=zt(n.consts,l);p.localNames=[];for(let m=0;m<f.length;m+=2)p.localNames.push(f[m],-1)}}else p=n.data[u];return UD(p,t,n,e,i,r,o,c),l!=null&&uu(t,p,d),p}var HD=$D;function $D(t,n,e,i){return Zs(!0),n[ae].createComment("")}var bu=new _("");var Eu=new _("");function Gg(){Oc(()=>{let t="";throw new v(600,t)})}var zD=10;var Gt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=h(li);afterRenderManager=h(nu);zonelessEnabled=h(Gr);rootEffectScheduler=h(Ys);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new Q;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=h(ci);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ue(e=>!e))}constructor(){h(fn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=h(Ae);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=ye.NULL){return this._injector.get(A).run(()=>{if(Z(H.BootstrapComponentStart),!this._injector.get(_u).done){let E="";throw new v(405,E)}let a=en(e),c=this._injector.get(_a),l=new pi(a,c);this.componentTypes.push(e);let{hostElement:d,directives:u,bindings:p}=WD(i),f=d||l.selector,m=l.create(r,[],f,c.injector,u,p),g=m.location.nativeElement,y=m.injector.get(bu,null);return y?.registerApplication(g),m.onDestroy(()=>{this.detachView(m.hostView),Qr(this.components,m),y?.unregisterApplication(g)}),this._loadComponent(m),Z(H.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Z(H.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Ta.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Z(H.ChangeDetectionEnd),new v(101,!1);let e=C(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,C(e),this.afterTick.next(),Z(H.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ot,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<zD;){Z(H.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Z(H.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!er(r))continue;let o=i&&!this.zonelessEnabled?0:1;_g(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>er(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Qr(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Eu,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Qr(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new v(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function WD(t){return t===void 0||typeof t=="string"||t instanceof Element?{hostElement:t}:t}function Qr(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Re(t,n,e,i){let r=F(),o=ai();if(Rn(r,o,n)){let s=Te(),a=Ks();mI(a,r,t,n,e,i)}return Re}var Od=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function id(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function GD(t,n,e,i){let r,o,s=0,a=t.length-1,c=void 0;if(Array.isArray(n)){C(i);let l=n.length-1;for(C(null);s<=a&&s<=l;){let d=t.at(s),u=n[s],p=id(s,d,s,u,e);if(p!==0){p<0&&t.updateValue(s,u),s++;continue}let f=t.at(a),m=n[l],g=id(a,f,l,m,e);if(g!==0){g<0&&t.updateValue(a,m),a--,l--;continue}let y=e(s,d),E=e(a,f),k=e(s,u);if(Object.is(k,E)){let J=e(l,m);Object.is(J,y)?(t.swap(s,a),t.updateValue(a,m),l--,a--):t.move(a,s),t.updateValue(s,u),s++;continue}if(r??=new ba,o??=cm(t,s,a,e),Pd(t,r,s,k))t.updateValue(s,u),s++,a++;else if(o.has(k))r.set(y,t.detach(s)),a--;else{let J=t.create(s,n[s]);t.attach(s,J),s++,a++}}for(;s<=l;)am(t,r,e,s,n[s]),s++}else if(n!=null){C(i);let l=n[Symbol.iterator]();C(null);let d=l.next();for(;!d.done&&s<=a;){let u=t.at(s),p=d.value,f=id(s,u,s,p,e);if(f!==0)f<0&&t.updateValue(s,p),s++,d=l.next();else{r??=new ba,o??=cm(t,s,a,e);let m=e(s,p);if(Pd(t,r,s,m))t.updateValue(s,p),s++,a++,d=l.next();else if(!o.has(m))t.attach(s,t.create(s,p)),s++,a++,d=l.next();else{let g=e(s,u);r.set(g,t.detach(s)),a--}}}for(;!d.done;)am(t,r,e,t.length,d.value),d=l.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(l=>{t.destroy(l)})}function Pd(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function am(t,n,e,i,r){if(Pd(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function cm(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var ba=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function We(t,n,e,i,r,o,s,a){hn("NgControlFlow");let c=F(),l=Te(),d=zt(l.consts,o);return to(c,l,t,n,e,i,r,d,256,s,a),wu}function wu(t,n,e,i,r,o,s,a){hn("NgControlFlow");let c=F(),l=Te(),d=zt(l.consts,o);return to(c,l,t,n,e,i,r,d,512,s,a),wu}function Ge(t,n){hn("NgControlFlow");let e=F(),i=ai(),r=e[i]!==St?e[i]:-1,o=r!==-1?Ea(e,Ce+r):void 0,s=0;if(Rn(e,i,t)){let a=C(null);try{if(o!==void 0&&Cg(o,s),t!==-1){let c=Ce+t,l=Ea(e,c),d=jd(e[I],c),u=Sg(l,d,e),p=oo(e,d,n,{dehydratedView:u});so(l,p,s,ar(d,u))}}finally{C(a)}}else if(o!==void 0){let a=Dg(o,s);a!==void 0&&(a[Ee]=n)}}var Fd=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-fe}};function Iu(t){return t}var Ld=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function co(t,n,e,i,r,o,s,a,c,l,d,u,p){hn("NgControlFlow");let f=F(),m=Te(),g=c!==void 0,y=F(),E=a?s.bind(y[$e][Ee]):s,k=new Ld(g,E);y[Ce+t]=k,to(f,m,t+1,n,e,i,r,zt(m.consts,o),256),g&&to(f,m,t+2,c,l,d,u,zt(m.consts,p),512)}var Vd=class extends Od{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-fe}at(n){return this.getLView(n)[Ee].$implicit}attach(n,e){let i=e[ei];this.needsIndexUpdate||=n!==this.length,so(this.lContainer,e,n,ar(this.templateTNode,i)),qD(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,KD(this.lContainer,n),QD(this.lContainer,n)}create(n,e){let i=pa(this.lContainer,this.templateTNode.tView.ssrId);return oo(this.hostLView,this.templateTNode,new Fd(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Ma(n[I],n)}updateValue(n,e){this.getLView(n)[Ee].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Ee].$index=n}getLView(n){return ZD(this.lContainer,n)}};function lo(t){let n=C(null),e=rn();try{let i=F(),r=i[I],o=i[e],s=e+1,a=Ea(i,s);if(o.liveCollection===void 0){let l=jd(r,s);o.liveCollection=new Vd(a,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(GD(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=ai(),d=c.length===0;if(Rn(i,l,d)){let u=e+2,p=Ea(i,u);if(d){let f=jd(r,u),m=Sg(p,f,i),g=oo(i,f,void 0,{dehydratedView:m});so(p,g,0,ar(f,m))}else r.firstUpdatePass&&jI(p),Cg(p,0)}}}finally{C(n)}}function Ea(t,n){return t[n]}function qD(t,n){if(t.length<=fe)return;let e=fe+n,i=t[e],r=i?i[Ht]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Vt];jw(o,r),An.delete(i[Ut]),r.detachedLeaveAnimationFns=void 0}}function KD(t,n){if(t.length<=fe)return;let e=fe+n,i=t[e],r=i?i[Ht]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function QD(t,n){return Yr(t,n)}function ZD(t,n){return Dg(t,n)}function jd(t,n){return js(t,n)}function st(t,n,e){let i=F(),r=ai();if(Rn(i,r,n)){let o=Te(),s=Ks();lI(s,i,t,n,i[ae],e)}return st}function Bd(t,n,e,i,r){fu(n,t,e,r?"class":"style",i)}function R(t,n,e,i){let r=F(),o=r[I],s=t+Ce,a=o.firstCreatePass?kg(s,r,2,n,pI,pp(),e,i):o.data[s];if(nn(a)){let c=r[jt].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate(Ag(l),()=>(lm(t,n,r,a,i),R))}}return lm(t,n,r,a,i),R}function lm(t,n,e,i,r){if(fg(i,e,t,n,qg),Vs(i)){let o=e[I];dg(o,e,i),Bm(o,i,e)}r!=null&&uu(e,i)}function L(){let t=Te(),n=Ne(),e=hg(n);return t.firstCreatePass&&Og(t,e),Fl(e)&&Ll(),Ol(),e.classesWithoutHost!=null&&kE(e)&&Bd(t,e,F(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&OE(e)&&Bd(t,e,F(),e.stylesWithoutHost,!1),L}function qe(t,n,e,i){return R(t,n,e,i),L(),qe}function je(t,n,e,i){let r=F(),o=r[I],s=t+Ce,a=o.firstCreatePass?iD(s,o,2,n,e,i):o.data[s];return fg(a,r,t,n,qg),i!=null&&uu(r,a),je}function Be(){let t=Ne(),n=hg(t);return Fl(n)&&Ll(),Ol(),Be}function at(t,n,e,i){return je(t,n,e,i),Be(),at}var qg=(t,n,e,i,r)=>(Zs(!0),qm(n[ae],i,Gl()));function Oa(t,n,e){let i=F(),r=ai();if(Rn(i,r,n)){let o=Te(),s=Ks();ug(s,i,t,n,i[ae],e)}return Oa}var uo="en-US";var XD=uo;function Kg(t){typeof t=="string"&&(XD=t.toLowerCase().replace(/_/g,"-"))}function ct(t,n,e){let i=F(),r=Te(),o=Ne();return YD(r,i,i[ae],o,t,n,e),ct}function YD(t,n,e,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=ed(i,n,o),zI(i,t,n,s,e,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let u=0;u<d.length;u+=2){let p=d[u],f=d[u+1];c??=ed(i,n,o),em(i,n,p,f,r,c)}if(l&&l.length)for(let u of l)c??=ed(i,n,o),em(i,n,u,r,r,c)}}function kn(t=1){return Dp(t)}function JD(t,n){let e=null,i=Mw(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Ym(t,o,!0):Nw(i,o))return r}return e}function ke(t){let n=F()[$e][Ve];if(!n.projection){let e=t?t.length:1,i=n.projection=Xh(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?JD(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function ie(t,n=0,e,i,r,o){let s=F(),a=Te(),c=i?t+1:null;c!==null&&to(s,a,c,i,r,o,null,e);let l=ao(a,Ce+t,16,null,e||null);l.projection===null&&(l.projection=n),Bl();let u=!s[ei]||Pl();s[$e][Ve].projection[l.projection]===null&&c!==null?eC(s,a,c):u&&!Ia(l)&&Jw(a,s,l)}function eC(t,n,e){let i=Ce+e,r=n.data[i],o=t[i],s=pa(o,r.tView.ssrId),a=oo(t,r,void 0,{dehydratedView:s});so(o,a,0,ar(r,s))}function mn(t,n,e,i){return TD(t,n,e,i),mn}function yi(t,n,e){return CD(t,n,e),yi}function pe(t){let n=F(),e=Te(),i=$l();Ws(i+1);let r=yu(e,i);if(t.dirty&&ap(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=xD(n,i);t.reset(o,qE),t.notifyOnChanges()}return!0}return!1}function me(){return DD(F(),$l())}function ia(t,n){return t<<17|n<<2}function mi(t){return t>>17&32767}function tC(t){return(t&2)==2}function nC(t,n){return t&131071|n<<17}function Ud(t){return t|2}function cr(t){return(t&131068)>>2}function rd(t,n){return t&-131069|n<<2}function iC(t){return(t&1)===1}function Hd(t){return t|1}function rC(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=mi(s),c=cr(s);t[i]=e;let l=!1,d;if(Array.isArray(e)){let u=e;d=u[1],(d===null||qi(u,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let p=mi(t[a+1]);t[i+1]=ia(p,a),p!==0&&(t[p+1]=rd(t[p+1],i)),t[a+1]=nC(t[a+1],i)}else t[i+1]=ia(a,0),a!==0&&(t[a+1]=rd(t[a+1],i)),a=i;else t[i+1]=ia(c,0),a===0?a=i:t[c+1]=rd(t[c+1],i),c=i;l&&(t[i+1]=Ud(t[i+1])),dm(t,d,i,!0),dm(t,d,i,!1),oC(n,d,t,i,o),s=ia(a,c),o?n.classBindings=s:n.styleBindings=s}function oC(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&qi(o,n)>=0&&(e[i+1]=Hd(e[i+1]))}function dm(t,n,e,i){let r=t[e+1],o=n===null,s=i?mi(r):cr(r),a=!1;for(;s!==0&&(a===!1||o);){let c=t[s],l=t[s+1];sC(c,n)&&(a=!0,t[s+1]=i?Hd(l):Ud(l)),s=i?mi(l):cr(l)}a&&(t[e+1]=i?Ud(r):Hd(r))}function sC(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?qi(t,n)>=0:!1}var Ct={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function aC(t){return t.substring(Ct.key,Ct.keyEnd)}function cC(t){return lC(t),Qg(t,Zg(t,0,Ct.textEnd))}function Qg(t,n){let e=Ct.textEnd;return e===n?-1:(n=Ct.keyEnd=dC(t,Ct.key=n,e),Zg(t,n,e))}function lC(t){Ct.key=0,Ct.keyEnd=0,Ct.value=0,Ct.valueEnd=0,Ct.textEnd=t.length}function Zg(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function dC(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function _i(t,n,e){return Xg(t,n,e,!1),_i}function re(t,n){return Xg(t,n,null,!0),re}function Ye(t){fC(yC,uC,t,!0)}function uC(t,n){for(let e=cC(n);e>=0;e=Qg(n,e))Ps(t,aC(n),!0)}function Xg(t,n,e,i){let r=F(),o=Te(),s=Hl(2);if(o.firstUpdatePass&&Jg(o,t,s,i),n!==St&&Rn(r,s,n)){let a=o.data[rn()];ev(o,a,r,r[ae],t,r[s+1]=bC(n,e),i,s)}}function fC(t,n,e,i){let r=Te(),o=Hl(2);r.firstUpdatePass&&Jg(r,null,o,i);let s=F();if(e!==St&&Rn(s,o,e)){let a=r.data[rn()];if(tv(a,i)&&!Yg(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(e=As(c,e||"")),Bd(r,a,s,e,i)}else _C(r,a,s,s[ae],s[o+1],s[o+1]=vC(t,n,e),i,o)}}function Yg(t,n){return n>=t.expandoStartIndex}function Jg(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[rn()],s=Yg(t,e);tv(o,i)&&n===null&&!s&&(n=!1),n=hC(r,o,n,i),rC(r,o,n,e,s,i)}}function hC(t,n,e,i){let r=bp(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=od(null,t,n,e,i),e=no(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=od(r,t,n,e,i),o===null){let c=pC(t,n,i);c!==void 0&&Array.isArray(c)&&(c=od(null,t,n,c[1],i),c=no(c,n.attrs,i),mC(t,n,i,c))}else o=gC(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function pC(t,n,e){let i=e?n.classBindings:n.styleBindings;if(cr(i)!==0)return t[mi(i)]}function mC(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[mi(r)]=i}function gC(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=no(i,s,e)}return no(i,n.attrs,e)}function od(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=no(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function no(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Ps(t,s,e?!0:n[++o]))}return t===void 0?null:t}function vC(t,n,e){if(e==null||e==="")return He;let i=[],r=dn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)Object.hasOwn(r,o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function yC(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Ps(t,i,e)}function _C(t,n,e,i,r,o,s,a){r===St&&(r=He);let c=0,l=0,d=0<r.length?r[0]:null,u=0<o.length?o[0]:null;for(;d!==null||u!==null;){let p=c<r.length?r[c+1]:void 0,f=l<o.length?o[l+1]:void 0,m=null,g;d===u?(c+=2,l+=2,p!==f&&(m=u,g=f)):u===null||d!==null&&d<u?(c+=2,m=d):(l+=2,m=u,g=f),m!==null&&ev(t,n,e,i,m,g,s,a),d=c<r.length?r[c]:null,u=l<o.length?o[l]:null}}function ev(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let c=t.data,l=c[a+1],d=iC(l)?um(c,n,e,r,cr(l),s):void 0;if(!wa(d)){wa(o)||tC(l)&&(o=um(c,null,e,r,a,s));let u=Al(rn(),e);tI(i,s,u,r,o)}}function um(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,u=d===null,p=e[r+1];p===St&&(p=u?He:void 0);let f=u?Fs(p,i):d===i?p:void 0;if(l&&!wa(f)&&(f=Fs(c,i)),wa(f)&&(a=f,s))return a;let m=t[r+1];r=s?mi(m):cr(m)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(a=Fs(c,i))}return a}function wa(t){return t!==void 0}function bC(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=xs(dn(t)))),t}function tv(t,n){return(t.flags&(n?8:16))!==0}function oe(t,n=""){let e=F(),i=Te(),r=t+Ce,o=i.firstCreatePass?ao(i,r,1,n,null):i.data[r],s=EC(i,e,o,n);e[r]=s,Qs()&&su(i,e,s,o),tr(o,!1)}var EC=(t,n,e,i)=>(Zs(!0),_w(n[ae],i));function wC(t,n,e,i=""){return Rn(t,ai(),e)?n+yl(e)+i:St}function qt(t){return fo("",t),qt}function fo(t,n,e){let i=F(),r=wC(i,t,n,e);return r!==St&&IC(i,rn(),r),fo}function IC(t,n,e){let i=Al(n,t);bw(t[ae],i,e)}function fm(t,n,e){let i=Te();i.firstCreatePass&&nv(n,i.data,i.blueprint,$t(t),e)}function nv(t,n,e,i,r){if(t=xe(t),Array.isArray(t))for(let o=0;o<t.length;o++)nv(t[o],n,e,i,r);else{let o=Te(),s=F(),a=Ne(),c=Xn(t)?t:xe(t.provide),l=Cl(t),d=a.providerIndexes&1048575,u=a.directiveStart,p=a.providerIndexes>>20;if(Xn(t)||!t.multi){let f=new hi(l,r,Na,null),m=ad(c,n,r?d:d+p,u);m===-1?(dd(ua(a,s),o,c),sd(o,t,n.length),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(f),s.push(f)):(e[m]=f,s[m]=f)}else{let f=ad(c,n,d+p,u),m=ad(c,n,d,d+p),g=f>=0&&e[f],y=m>=0&&e[m];if(r&&!y||!r&&!g){dd(ua(a,s),o,c);let E=TC(r?CC:DC,e.length,r,i,l,t);!r&&y&&(e[m].providerFactory=E),sd(o,t,n.length,0),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(E),s.push(E)}else{let E=iv(e[r?m:f],l,!r&&i);sd(o,t,f>-1?f:m,E)}!r&&i&&y&&e[m].componentProviders++}}}function sd(t,n,e,i){let r=Xn(n),o=np(n);if(r||o){let c=(o?xe(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function iv(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function ad(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function DC(t,n,e,i,r){return $d(this.multi,[])}function CC(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Zr(i,i[I],this.providerFactory.index,r);s=c.slice(0,a),$d(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],$d(o,s);return s}function $d(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function TC(t,n,e,i,r,o){let s=new hi(t,e,Na,null);return s.multi=[],s.index=n,s.componentProviders=0,iv(s,r,i&&!e),s}function On(t,n){return e=>{e.providersResolver=(i,r)=>fm(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>fm(i,r?r(n):n,!0))}}var rv=(()=>{class t{applicationErrorHandler=h(li);appRef=h(Gt);taskService=h(ci);ngZone=h(A);zonelessEnabled=h(Gr);tracing=h(fn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ve;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Lr):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(h(Zl,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?xp:ql;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Lr+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function Du(){return hn("NgZoneless"),Hr([...Cu(),[]])}function Cu(){return[{provide:ft,useExisting:rv},{provide:A,useClass:Vr},{provide:Gr,useValue:!0}]}function SC(){return typeof $localize<"u"&&$localize.locale||uo}var Tu=new _("",{factory:()=>h(Tu,{optional:!0,skipSelf:!0})||SC()});function dr(t,n){return Go(t,n?.equal)}var av=Symbol("InputSignalNode#UNSET"),VC=Ie(x({},Cr),{transformFn:void 0,applyValueToInputSignal(t,n){Dr(t,n)}});function cv(t,n){let e=Object.create(VC);e.value=t,e.transformFn=n?.transform;function i(){if(Ni(e),e.value===av){let r=null;throw new v(-950,r)}return e.value}return i[Le]=e,i}var Fa=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Sm(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},lv=(()=>{let t=new _("");return t.__NG_ELEMENT_ID__=n=>{let e=Ne();if(e===null)throw new v(-204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new v(-204,!1)},t})();function ov(t,n){return cv(t,n)}function jC(t){return cv(av,t)}var dv=(ov.required=jC,ov);var BC=1e4;var tU=BC-1e3;var Kt=(()=>{class t{static __NG_ELEMENT_ID__=UC}return t})();function UC(t){return HC(Ne(),F(),(t&16)===16)}function HC(t,n,e){if(nn(t)&&!e){let i=gt(t.index,n);return new Nn(i,i)}else if(t.type&175){let i=n[$e];return new Nn(i,n)}return null}var Mu=new _(""),$C=new _("");function ho(t){return!t.moduleRef}function zC(t){let n=ho(t)?t.r3Injector:t.moduleRef.injector,e=n.get(A);return e.run(()=>{ho(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(li),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),ho(t)){let o=()=>n.destroy(),s=t.platformInjector.get(Mu);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Mu);s.add(o),t.moduleRef.onDestroy(()=>{Qr(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return GC(i,e,()=>{let o=n.get(ci),s=o.add(),a=n.get(_u);return a.runInitializers(),a.donePromise.then(()=>{let c=n.get(Tu,uo);if(Kg(c||uo),!n.get($C,!0))return ho(t)?n.get(Gt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(ho(t)){let d=n.get(Gt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return WC?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var WC;function GC(t,n,e){try{let i=e();return ka(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Pa=null;function qC(t=[],n){return ye.create({name:n,providers:[{provide:$r,useValue:"platform"},{provide:Mu,useValue:new Set([()=>Pa=null])},...t]})}function KC(t=[]){if(Pa)return Pa;let n=qC(t);return Pa=n,Gg(),QC(n),n}function QC(t){let n=t.get(Xs,null);Zi(t,()=>{n?.forEach(e=>e())})}function uv(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Z(H.BootstrapApplicationStart);try{let o=r?.injector??KC(i),s=[Cu(),Np,...e||[]],a=new eo({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return zC({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Z(H.BootstrapApplicationEnd)}}function ne(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Oe(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Su=Symbol("NOT_SET"),fv=new Set,ZC=Ie(x({},Cr),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Su,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Su&&!ki(this))return this.signal;try{for(let r of this.cleanup??fv)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=jn(this),i;try{i=this.userFn.apply(null,n)}finally{Ri(this,e)}return(this.value===Su||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),xu=class extends ha{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(on),s),this.scheduler=r;for(let a of iu){let c=e[a];if(c===void 0)continue;let l=Object.create(ZC);l.sequence=this,l.phase=a,l.userFn=c,l.dirty=!0,l.signal=()=>(Ni(l),l.value),l.signal[Le]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[a]=l,this.hooks[a]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??fv)e()}finally{wn(n)}}};function hv(t,n){let e=n?.injector??h(ye),i=e.get(ft),r=e.get(nu),o=e.get(fn,null,{optional:!0});r.impl??=e.get(Jm);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(Wr,null,{optional:!0}),c=new xu(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function La(t,n){let e=en(t),i=n.elementInjector||Qi();return new pi(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function po(t){let n=en(t);if(!n)return null;let e=new pi(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var pv=null;function ur(){return pv}function Ru(t){pv??=t}var mo=class{};function ku(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Ou="browser";function mv(t){return t===Ou}var go=class{_doc;constructor(n){this._doc=n}manager},Va=(()=>{class t extends go{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(S(O))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Ua=new _(""),Vu=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Va));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Va);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new v(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(S(Ua),S(A))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Pu="ng-app-id";function gv(t){for(let n of t)n.remove()}function vv(t,n){let e=n.createElement("style");return e.textContent=t,e}function XC(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Pu}="${n}"],link[${Pu}="${n}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Pu),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Lu(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var ju=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,XC(e,i,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,vv);i?.forEach(r=>this.addUsage(r,this.external,Lu))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(gv(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])gv(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,vv(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Lu(i,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of i.elements)o.parentNode===e?o.remove():r.push(o);i.elements=r}}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(S(O),S(sn),S(ui,8),S(di))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Fu={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Bu=/%COMP%/g;var _v="%COMP%",YC=`_nghost-${_v}`,JC=`_ngcontent-${_v}`,eT=!0,tT=new _("",{factory:()=>eT});function nT(t){return JC.replace(Bu,t)}function iT(t){return YC.replace(Bu,t)}function bv(t,n){return n.map(e=>e.replace(Bu,t))}var _o=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new vo(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Ba?r.applyToHost(e):r instanceof yo&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.tracingService;switch(i.encapsulation){case Tt.Emulated:o=new Ba(c,l,i,this.appId,d,s,a,u);break;case Tt.ShadowDom:return new ja(c,e,i,s,a,this.nonce,u,l);case Tt.ExperimentalIsolatedShadowDom:return new ja(c,e,i,s,a,this.nonce,u);default:o=new yo(c,l,i,d,s,a,u);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(S(Vu),S(vi),S(sn),S(tT),S(O),S(A),S(ui),S(fn,8))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),vo=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Fu[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(yv(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(yv(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new v(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Fu[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Fu[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(ln.DashCase|ln.Important)?n.style.setProperty(e,i,r&ln.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&ln.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=ur().getGlobalEventTarget(this.doc,n),!n))throw new v(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function yv(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var ja=class extends vo{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,c){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=bv(i.id,l);for(let u of l){let p=document.createElement("style");s&&p.setAttribute("nonce",s),p.textContent=u,this.shadowRoot.appendChild(p)}let d=i.getExternalStyles?.();if(d)for(let u of d){let p=Lu(u,r);s&&p.setAttribute("nonce",s),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},yo=class extends vo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,c){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?bv(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&An.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ba=class extends yo{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,c){let l=r+"-"+i.id;super(n,e,i,o,s,a,c,l),this.contentAttr=nT(l),this.hostAttr=iT(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Ha=class t extends mo{supportsDOMEvents=!0;static makeCurrent(){Ru(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=rT();return e==null?null:oT(e)}resetBaseElement(){bo=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return ku(document.cookie,n)}},bo=null;function rT(){return bo=bo||document.head.querySelector("base"),bo?bo.getAttribute("href"):null}function oT(t){return new URL(t,document.baseURI).pathname}var Ev=["alt","control","meta","shift"],sT={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},aT={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},wv=(()=>{class t extends go{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ur().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),Ev.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,i){let r=sT[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Ev.forEach(s=>{if(s!==r){let a=aT[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(S(O))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();async function Uu(t,n){return uv(cT(t,n))}function cT(t,n){return{platformRef:n?.platformRef,appProviders:[...hT,...t?.providers??[]],platformProviders:fT}}function lT(){Ha.makeCurrent()}function dT(){return new Ze}function uT(){return qd(document),document}var fT=[{provide:di,useValue:Ou},{provide:Xs,useValue:lT,multi:!0},{provide:O,useFactory:uT}];var hT=[{provide:$r,useValue:"root"},{provide:Ze,useFactory:dT},{provide:Ua,useClass:Va,multi:!0},{provide:Ua,useClass:wv,multi:!0},_o,{provide:vi,useClass:ju},{provide:ju,useExisting:vi},Vu,{provide:ot,useExisting:_o},[]];var vn=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var zu=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Wu=class{encodeKey(n){return Iv(n)}encodeValue(n){return Iv(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function pT(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var mT=/%(\d[a-f0-9])/gi,gT={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Iv(t){return encodeURIComponent(t).replace(mT,(n,e)=>gT[e]??n)}function $a(t){return`${t}`}var gn=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Wu,n.fromString){if(n.fromObject)throw new v(2805,!1);this.map=pT(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map($a):[$a(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push($a(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf($a(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function vT(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Dv(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Cv(t){return typeof Blob<"u"&&t instanceof Blob}function Tv(t){return typeof FormData<"u"&&t instanceof FormData}function yT(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Hu="Content-Type",Sv="Accept",xv="text/plain",Av="application/json",_T=`${Av}, ${xv}, */*`,fr=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(vT(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new v(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new vn,this.context??=new zu,!this.params)this.params=new gn,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e,c="",l=e.indexOf("#");l!==-1&&(c=e.substring(l),a=e.substring(0,l));let d=a.indexOf("?"),u=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+u+s+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Dv(this.body)||Cv(this.body)||Tv(this.body)||yT(this.body)?this.body:this.body instanceof gn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Tv(this.body)?null:Cv(this.body)?this.body.type||null:Dv(this.body)?null:typeof this.body=="string"?xv:this.body instanceof gn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Av:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,u=n.referrer??this.referrer,p=n.integrity||this.integrity,f=n.referrerPolicy||this.referrerPolicy,m=n.transferCache??this.transferCache,g=n.timeout??this.timeout,y=n.body!==void 0?n.body:this.body,E=n.withCredentials??this.withCredentials,k=n.reportProgress??this.reportProgress,J=n.reportUploadProgress??this.reportUploadProgress,se=n.reportDownloadProgress??this.reportDownloadProgress,lt=n.headers||this.headers,Se=n.params||this.params,be=n.context??this.context;return n.setHeaders!==void 0&&(lt=Object.keys(n.setHeaders).reduce((ge,Ue)=>ge.set(Ue,n.setHeaders[Ue]),lt)),n.setParams&&(Se=Object.keys(n.setParams).reduce((ge,Ue)=>ge.set(Ue,n.setParams[Ue]),Se)),new t(e,i,y,{params:Se,headers:lt,context:be,reportProgress:k,reportUploadProgress:J,reportDownloadProgress:se,responseType:r,withCredentials:E,transferCache:m,keepalive:o,cache:a,priority:s,timeout:g,mode:c,redirect:l,credentials:d,referrer:u,integrity:p,referrerPolicy:f})}},hr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(hr||{}),Eo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new vn,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Gu=class t extends Eo{constructor(n={}){super(n)}type=hr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},wo=class t extends Eo{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=hr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},bi=class extends Eo{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},bT=200;var ET=/^\)\]\}',?\n/,WU=1024*1024,wT=new _("",{factory:()=>null}),IT=(()=>{class t{fetchImpl=h(qu,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=h(A);destroyRef=h(on);maxResponseSize=h(wT);handle(e){return new U(i=>{let r=new AbortController;this.doRequest(e,r.signal,i).then(Ku,s=>i.error(new bi({error:s})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}async doRequest(e,i,r){let o=this.createRequestInit(e),s;try{let y=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,x({signal:i},o)));DT(y),r.next({type:hr.Sent}),s=await y}catch(y){r.error(new bi({error:y,status:y.status??0,statusText:y.statusText,url:e.urlWithParams,headers:y.headers}));return}let a=new vn(s.headers),c=s.statusText,l=s.url||e.urlWithParams,d=s.status,u=null,p=e.reportProgress||e.reportDownloadProgress;if(p&&r.next(new Gu({headers:a,status:d,statusText:c,url:l})),s.body){let y=s.headers.get("content-length"),E=y!==null?Number(y):NaN;this.maxResponseSize!==null&&Number.isFinite(E)&&E>this.maxResponseSize&&Mv(this.maxResponseSize);let k=[],J=s.body.getReader(),se=0,lt,Se,be=typeof Zone<"u"&&Zone.current,ge=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await J.cancel(),ge=!0;break}let{done:dt,value:xi}=await J.read();if(dt)break;if(k.push(xi),se+=xi.length,this.maxResponseSize!==null&&se>this.maxResponseSize&&(await J.cancel(),Mv(this.maxResponseSize)),p){Se=e.responseType==="text"?(Se??"")+(lt??=new TextDecoder).decode(xi,{stream:!0}):void 0;let kt=()=>r.next({type:hr.DownloadProgress,total:Number.isFinite(E)?E:void 0,loaded:se,partialText:Se});be?be.run(kt):kt()}}}),ge){r.complete();return}let Ue=this.concatChunks(k,se);try{let dt=s.headers.get(Hu)??"";u=this.parseBody(e,Ue,dt,d)}catch(dt){r.error(new bi({error:dt,headers:new vn(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=u?bT:0);let f=d>=200&&d<300,m=s.redirected,g=s.type;f?(r.next(new wo({body:u,headers:a,status:d,statusText:c,url:l,redirected:m,responseType:g})),r.complete()):r.error(new bi({error:u,headers:a,status:d,statusText:c,url:l,redirected:m,responseType:g}))}parseBody(e,i,r,o){switch(e.responseType){case"json":let s=new TextDecoder().decode(i).replace(ET,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(o<200||o>=300)return s;throw a}case"text":return new TextDecoder().decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new v(2824,!1);let i={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,s)=>i[o]=s.join(",")),e.headers.has(Sv)||(i[Sv]=_T),!e.headers.has(Hu)){let o=e.detectContentTypeHeader();o!==null&&(i[Hu]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),qu=class{};function Ku(){}function DT(t){t.then(Ku,Ku)}function Mv(t){throw new v(2825,!1)}function CT(t,n){return n(t)}function TT(t,n,e){return(i,r)=>Zi(e,()=>n(i,o=>t(o,r)))}var ST=new _("",{factory:()=>[]}),Nv=new _(""),MT=new _("",{factory:()=>!0});var xT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=S(IT),r},providedIn:"root"})}return t})();var AT=(()=>{class t{backend;injector;chain=null;pendingTasks=h(ea);contributeToStability=h(MT);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(ST),...this.injector.get(Nv,[])]));this.chain=i.reduceRight((r,o)=>TT(r,o,this.injector),CT)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Rr(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(S(xT),S(Ae))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),NT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=S(AT),r},providedIn:"root"})}return t})();function $u(t,n){return x({body:n},t)}var Qu=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof fr)o=e;else{let c;r.headers instanceof vn?c=r.headers:c=new vn(r.headers);let l;r.params&&(r.params instanceof gn?l=r.params:l=new gn({fromObject:r.params})),o=new fr(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=Et(o).pipe(Qc(c=>this.handler.handle(c)));if(e instanceof fr||r.observe==="events")return s;let a=s.pipe(Wn(c=>c instanceof wo));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(ue(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new v(2806,!1);return c.body}));case"blob":return a.pipe(ue(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new v(2807,!1);return c.body}));case"text":return a.pipe(ue(c=>{if(c.body!==null&&typeof c.body!="string")throw new v(2808,!1);return c.body}));default:return a.pipe(ue(c=>c.body))}case"response":return a;default:throw new v(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new gn().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,$u(r,i))}post(e,i,r={}){return this.request("POST",e,$u(r,i))}put(e,i,r={}){return this.request("PUT",e,$u(r,i))}static \u0275fac=function(i){return new(i||t)(S(NT))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=S(kT),r},providedIn:"root"})}return t})(),kT=(()=>{class t extends Zu{_doc=h(O);sanitize(e,i){if(i==null)return null;switch(e){case ze.NONE:return i;case ze.HTML:return gi(i,"HTML")?dn(i):Jd(this._doc,String(i)).toString();case ze.STYLE:return gi(i,"Style")?dn(i):i;case ze.SCRIPT:if(gi(i,"Script"))return dn(i);throw new v(5200,!1);case ze.URL:return gi(i,"URL")?dn(i):Ca(String(i));case ze.RESOURCE_URL:if(gi(i,"ResourceURL"))return dn(i);throw new v(5201,!1);default:throw new v(5202,!1)}}bypassSecurityTrustHtml(e){return Kd(e)}bypassSecurityTrustStyle(e){return Qd(e)}bypassSecurityTrustScript(e){return Zd(e)}bypassSecurityTrustUrl(e){return Xd(e)}bypassSecurityTrustResourceUrl(e){return Yd(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var PT={schedule(t,n){let e=setTimeout(t,n);return()=>clearTimeout(e)}};function FT(t){return t.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}function LT(t){return!!t&&t.nodeType===Node.ELEMENT_NODE}var Xu;function VT(t,n){if(!Xu){let e=Element.prototype;Xu=e.matches||e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}return t.nodeType===Node.ELEMENT_NODE?Xu.call(t,n):!1}function jT(t){let n={};return t.forEach(({propName:e,templateName:i,transform:r})=>{n[FT(i)]=[e,r]}),n}function BT(t,n){return po(t).inputs}function UT(t,n){let e=t.childNodes,i=n.map(()=>[]),r=-1;n.some((o,s)=>o==="*"?(r=s,!0):!1);for(let o=0,s=e.length;o<s;++o){let a=e[o],c=HT(a,n,r);c!==-1&&i[c].push(a)}return i}function HT(t,n,e){let i=e;return LT(t)&&n.some((r,o)=>r!=="*"&&VT(t,r)?(i=o,!0):!1),i}var $T=10,Yu=class{component;componentMirror;inputMap=new Map;constructor(n){this.component=n,this.componentMirror=po(n);for(let e of this.componentMirror.inputs)this.inputMap.set(e.propName,e.templateName)}create(n){return new Ju(this.component,n,this.inputMap)}},Ju=class{component;injector;inputMap;eventEmitters=new Mr(1);events=this.eventEmitters.pipe($i(n=>Hi(...n)));componentRef=null;scheduledDestroyFn=null;initialInputValues=new Map;ngZone;elementZone;appRef;cdScheduler;constructor(n,e,i){this.component=n,this.injector=e,this.inputMap=i,this.ngZone=this.injector.get(A),this.appRef=this.injector.get(Gt),this.cdScheduler=e.get(ft),this.elementZone=typeof Zone>"u"?null:this.ngZone.run(()=>Zone.current)}connect(n){this.runInZone(()=>{if(this.scheduledDestroyFn!==null){this.scheduledDestroyFn(),this.scheduledDestroyFn=null;return}this.componentRef===null&&this.initializeComponent(n)})}disconnect(){this.runInZone(()=>{this.componentRef===null||this.scheduledDestroyFn!==null||(this.scheduledDestroyFn=PT.schedule(()=>{this.componentRef!==null&&(this.componentRef.destroy(),this.componentRef=null)},$T))})}getInputValue(n){return this.runInZone(()=>this.componentRef===null?this.initialInputValues.get(n):this.componentRef.instance[n])}setInputValue(n,e){if(this.componentRef===null){this.initialInputValues.set(n,e);return}this.runInZone(()=>{this.componentRef.setInput(this.inputMap.get(n)??n,e),mu(this.componentRef.hostView)&&(gu(this.componentRef.changeDetectorRef),this.cdScheduler.notify(6))})}initializeComponent(n){let e=ye.create({providers:[],parent:this.injector}),i=UT(n,po(this.component).ngContentSelectors);this.componentRef=La(this.component,{environmentInjector:this.injector,elementInjector:e,hostElement:n,projectableNodes:i}),this.initializeInputs(),this.initializeOutputs(this.componentRef),this.appRef.attachView(this.componentRef.hostView),this.componentRef.hostView.detectChanges()}initializeInputs(){for(let[n,e]of this.initialInputValues)this.setInputValue(n,e);this.initialInputValues.clear()}initializeOutputs(n){let e=po(this.component).outputs.map(({propName:i,templateName:r})=>{let o=n.instance[i];return new U(s=>{let a=o.subscribe(c=>s.next({name:r,value:c}));return()=>a.unsubscribe()})});this.eventEmitters.next(e)}runInZone(n){return this.elementZone&&Zone.current!==this.elementZone?this.ngZone.run(n):n()}},ef=class extends HTMLElement{ngElementEventsSubscription=null};function Rv(t,n){let e=BT(t),i=n.strategyFactory||new Yu(t),r=jT(e);class o extends ef{injector;static observedAttributes=Object.keys(r);get ngElementStrategy(){if(!this._ngElementStrategy){let a=this._ngElementStrategy=i.create(this.injector||n.injector);e.forEach(({propName:c,transform:l})=>{if(!this.hasOwnProperty(c))return;let d=this[c];delete this[c],a.setInputValue(c,d,l)})}return this._ngElementStrategy}_ngElementStrategy;constructor(a){super(),this.injector=a}attributeChangedCallback(a,c,l,d){let[u,p]=r[a];this.ngElementStrategy.setInputValue(u,l,p)}connectedCallback(){let a=!1;this.ngElementStrategy.events&&(this.subscribeToEvents(),a=!0),this.ngElementStrategy.connect(this),a||this.subscribeToEvents()}disconnectedCallback(){this._ngElementStrategy&&this._ngElementStrategy.disconnect(),this.ngElementEventsSubscription&&(this.ngElementEventsSubscription.unsubscribe(),this.ngElementEventsSubscription=null)}subscribeToEvents(){this.ngElementEventsSubscription=this.ngElementStrategy.events.subscribe(a=>{let c=new CustomEvent(a.name,{detail:a.value});this.dispatchEvent(c)})}}return e.forEach(({propName:s,transform:a,isSignal:c})=>{Object.defineProperty(o.prototype,s,{get(){let l=this.ngElementStrategy.getInputValue(s);return c&&fi(l)?l():l},set(l){this.ngElementStrategy.setInputValue(s,l,a)},configurable:!0,enumerable:!0})}),o}var P=(function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t})(P||{}),xt="*";function kv(t,n=null){return{type:P.Sequence,steps:t,options:n}}function tf(t){return{type:P.Style,styles:t,offset:null}}var yn=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},pr=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,i=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++e==o&&this._onFinish()}),s.onDestroy(()=>{++i==o&&this._onDestroy()}),s.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((s,a)=>Math.max(s,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(r)})}getPosition(){let n=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Io="!";function Ov(t){return new v(3e3,!1)}function zT(){return new v(3100,!1)}function WT(){return new v(3101,!1)}function GT(t){return new v(3001,!1)}function qT(t){return new v(3003,!1)}function KT(t){return new v(3004,!1)}function Fv(t,n){return new v(3005,!1)}function Lv(){return new v(3006,!1)}function Vv(){return new v(3007,!1)}function jv(t,n){return new v(3008,!1)}function Bv(t){return new v(3002,!1)}function Uv(t,n,e,i,r){return new v(3010,!1)}function Hv(){return new v(3011,!1)}function $v(){return new v(3012,!1)}function zv(){return new v(3200,!1)}function Wv(){return new v(3202,!1)}function Gv(){return new v(3013,!1)}function qv(t){return new v(3014,!1)}function Kv(t){return new v(3015,!1)}function Qv(t){return new v(3016,!1)}function Zv(t,n){return new v(3404,!1)}function QT(t){return new v(3502,!1)}function Xv(t){return new v(3503,!1)}function Yv(){return new v(3300,!1)}function Jv(t){return new v(3504,!1)}function ey(t){return new v(3301,!1)}function ty(t,n){return new v(3302,!1)}function ny(t){return new v(3303,!1)}function iy(t,n){return new v(3400,!1)}function ry(t){return new v(3401,!1)}function oy(t){return new v(3402,!1)}function sy(t,n){return new v(3505,!1)}function _n(t){switch(t.length){case 0:return new yn;case 1:return t[0];default:return new pr(t)}}function sf(t,n,e=new Map,i=new Map){let r=[],o=[],s=-1,a=null;if(n.forEach(c=>{let l=c.get("offset"),d=l==s,u=d&&a||new Map;c.forEach((p,f)=>{let m=f,g=p;if(f!=="offset")switch(m=t.normalizePropertyName(m,r),g){case Io:g=e.get(f);break;case xt:g=i.get(f);break;default:g=t.normalizeStyleValue(f,m,g,r);break}u.set(m,g)}),d||o.push(u),a=u,s=l}),r.length)throw QT(r);return o}function za(t,n,e,i){switch(n){case"start":t.onStart(()=>i(e&&nf(e,"start",t)));break;case"done":t.onDone(()=>i(e&&nf(e,"done",t)));break;case"destroy":t.onDestroy(()=>i(e&&nf(e,"destroy",t)));break}}function nf(t,n,e){let i=e.totalTime,r=!!e.disabled,o=Wa(t.element,t.triggerName,t.fromState,t.toState,n||t.phaseName,i??t.totalTime,r),s=t._data;return s!=null&&(o._data=s),o}function Wa(t,n,e,i,r="",o=0,s){return{element:t,triggerName:n,fromState:e,toState:i,phaseName:r,totalTime:o,disabled:!!s}}function Je(t,n,e){let i=t.get(n);return i||t.set(n,i=e),i}function af(t){let n=t.indexOf(":"),e=t.substring(1,n),i=t.slice(n+1);return[e,i]}var ZT=typeof document>"u"?null:document.documentElement;function Ga(t){let n=t.parentNode||t.host||null;return n===ZT?null:n}function XT(t){return t.substring(1,6)=="ebkit"}var Ei=null,Pv=!1;function ay(t){Ei||(Ei=YT()||{},Pv=Ei.style?"WebkitAppearance"in Ei.style:!1);let n=!0;return Ei.style&&!XT(t)&&(n=t in Ei.style,!n&&Pv&&(n="Webkit"+t.charAt(0).toUpperCase()+t.slice(1)in Ei.style)),n}function YT(){return typeof document<"u"?document.body:null}function cf(t,n){for(;n;){if(n===t)return!0;n=Ga(n)}return!1}function lf(t,n,e){if(e)return Array.from(t.querySelectorAll(n));let i=t.querySelector(n);return i?[i]:[]}var JT=1e3,df="{{",eS="}}",uf="ng-enter",qa="ng-leave",Do="ng-trigger",Co=".ng-trigger",ff="ng-animating",Ka=".ng-animating";function Qt(t){if(typeof t=="number")return t;let n=t.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:rf(parseFloat(n[1]),n[2])}function rf(t,n){return n==="s"?t*JT:t}function To(t,n,e){return t.hasOwnProperty("duration")?t:nS(t,n,e)}var tS=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function nS(t,n,e){let i,r=0,o="";if(typeof t=="string"){let s=t.match(tS);if(s===null)return n.push(Ov(t)),{duration:0,delay:0,easing:""};i=rf(parseFloat(s[1]),s[2]);let a=s[3];a!=null&&(r=rf(parseFloat(a),s[4]));let c=s[5];c&&(o=c)}else i=t;if(!e){let s=!1,a=n.length;i<0&&(n.push(zT()),s=!0),r<0&&(n.push(WT()),s=!0),s&&n.splice(a,0,Ov(t))}return{duration:i,delay:r,easing:o}}function cy(t){return t.length?t[0]instanceof Map?t:t.map(n=>new Map(Object.entries(n))):[]}function At(t,n,e){n.forEach((i,r)=>{let o=Qa(r);e&&!e.has(r)&&e.set(r,t.style[o]),t.style[o]=i})}function Pn(t,n){n.forEach((e,i)=>{let r=Qa(i);t.style[r]=""})}function mr(t){return Array.isArray(t)?t.length==1?t[0]:kv(t):t}function ly(t,n,e){let i=n.params||{},r=hf(t);r.length&&r.forEach(o=>{i.hasOwnProperty(o)||e.push(GT(o))})}var of=new RegExp(`${df}\\s*(.+?)\\s*${eS}`,"g");function hf(t){let n=[];if(typeof t=="string"){let e;for(;e=of.exec(t);)n.push(e[1]);of.lastIndex=0}return n}function gr(t,n,e){let i=`${t}`,r=i.replace(of,(o,s)=>{let a=n[s];return a==null&&(e.push(qT(s)),a=""),a.toString()});return r==i?t:r}var iS=/-+([a-z0-9])/g;function Qa(t){return t.replace(iS,(...n)=>n[1].toUpperCase())}function dy(t,n){return t===0||n===0}function uy(t,n,e){if(e.size&&n.length){let i=n[0],r=[];if(e.forEach((o,s)=>{i.has(s)||r.push(s),i.set(s,o)}),r.length)for(let o=1;o<n.length;o++){let s=n[o];r.forEach(a=>s.set(a,Za(t,a)))}}return n}function et(t,n,e){switch(n.type){case P.Trigger:return t.visitTrigger(n,e);case P.State:return t.visitState(n,e);case P.Transition:return t.visitTransition(n,e);case P.Sequence:return t.visitSequence(n,e);case P.Group:return t.visitGroup(n,e);case P.Animate:return t.visitAnimate(n,e);case P.Keyframes:return t.visitKeyframes(n,e);case P.Style:return t.visitStyle(n,e);case P.Reference:return t.visitReference(n,e);case P.AnimateChild:return t.visitAnimateChild(n,e);case P.AnimateRef:return t.visitAnimateRef(n,e);case P.Query:return t.visitQuery(n,e);case P.Stagger:return t.visitStagger(n,e);default:throw KT(n.type)}}function Za(t,n){return window.getComputedStyle(t)[n]}var Af=(()=>{class t{validateStyleProperty(e){return ay(e)}containsElement(e,i){return cf(e,i)}getParentElement(e){return Ga(e)}query(e,i,r){return lf(e,i,r)}computeStyle(e,i,r){return r||""}animate(e,i,r,o,s,a=[],c){return new yn(r,o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Ii=class{static NOOP=new Af},Di=class{};var rS=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),tc=class extends Di{normalizePropertyName(n,e){return Qa(n)}normalizeStyleValue(n,e,i,r){let o="",s=i.toString().trim();if(rS.has(e)&&i!==0&&i!=="0")if(typeof i=="number")o="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(Fv(n,i))}return s+o}};var nc="*";function oS(t,n){let e=[];return typeof t=="string"?t.split(/\s*,\s*/).forEach(i=>sS(i,e,n)):e.push(t),e}function sS(t,n,e){if(t[0]==":"){let c=aS(t,e);if(typeof c=="function"){n.push(c);return}t=c}let i=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return e.push(Kv(t)),n;let r=i[1],o=i[2],s=i[3];n.push(fy(r,s));let a=r==nc&&s==nc;o[0]=="<"&&!a&&n.push(fy(s,r))}function aS(t,n){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,i)=>parseFloat(i)>parseFloat(e);case":decrement":return(e,i)=>parseFloat(i)<parseFloat(e);default:return n.push(Qv(t)),"* => *"}}var Xa=new Set(["true","1"]),Ya=new Set(["false","0"]);function fy(t,n){let e=Xa.has(t)||Ya.has(t),i=Xa.has(n)||Ya.has(n);return(r,o)=>{let s=t==nc||t==r,a=n==nc||n==o;return!s&&e&&typeof r=="boolean"&&(s=r?Xa.has(t):Ya.has(t)),!a&&i&&typeof o=="boolean"&&(a=o?Xa.has(n):Ya.has(n)),s&&a}}var wy=":self",cS=new RegExp(`s*${wy}s*,?`,"g");function Iy(t,n,e,i){return new _f(t).build(n,e,i)}var hy="",_f=class{_driver;constructor(n){this._driver=n}build(n,e,i){let r=new bf(e);return this._resetContextStyleTimingState(r),et(this,mr(n),r)}_resetContextStyleTimingState(n){n.currentQuerySelector=hy,n.collectedStyles=new Map,n.collectedStyles.set(hy,new Map),n.currentTime=0}visitTrigger(n,e){let i=e.queryCount=0,r=e.depCount=0,o=[],s=[];return n.name.charAt(0)=="@"&&e.errors.push(Lv()),n.definitions.forEach(a=>{if(this._resetContextStyleTimingState(e),a.type==P.State){let c=a,l=c.name;l.toString().split(/\s*,\s*/).forEach(d=>{c.name=d,o.push(this.visitState(c,e))}),c.name=l}else if(a.type==P.Transition){let c=this.visitTransition(a,e);i+=c.queryCount,r+=c.depCount,s.push(c)}else e.errors.push(Vv())}),{type:P.Trigger,name:n.name,states:o,transitions:s,queryCount:i,depCount:r,options:null}}visitState(n,e){let i=this.visitStyle(n.styles,e),r=n.options&&n.options.params||null;if(i.containsDynamicStyles){let o=new Set,s=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(c=>{hf(c).forEach(l=>{s.hasOwnProperty(l)||o.add(l)})})}),o.size&&e.errors.push(jv(n.name,[...o.values()]))}return{type:P.State,name:n.name,style:i,options:r?{params:r}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let i=et(this,mr(n.animation),e),r=oS(n.expr,e.errors);return{type:P.Transition,matchers:r,animation:i,queryCount:e.queryCount,depCount:e.depCount,options:wi(n.options)}}visitSequence(n,e){return{type:P.Sequence,steps:n.steps.map(i=>et(this,i,e)),options:wi(n.options)}}visitGroup(n,e){let i=e.currentTime,r=0,o=n.steps.map(s=>{e.currentTime=i;let a=et(this,s,e);return r=Math.max(r,e.currentTime),a});return e.currentTime=r,{type:P.Group,steps:o,options:wi(n.options)}}visitAnimate(n,e){let i=fS(n.timings,e.errors);e.currentAnimateTimings=i;let r,o=n.styles?n.styles:tf({});if(o.type==P.Keyframes)r=this.visitKeyframes(o,e);else{let s=n.styles,a=!1;if(!s){a=!0;let l={};i.easing&&(l.easing=i.easing),s=tf(l)}e.currentTime+=i.duration+i.delay;let c=this.visitStyle(s,e);c.isEmptyStep=a,r=c}return e.currentAnimateTimings=null,{type:P.Animate,timings:i,style:r,options:null}}visitStyle(n,e){let i=this._makeStyleAst(n,e);return this._validateStyleAst(i,e),i}_makeStyleAst(n,e){let i=[],r=Array.isArray(n.styles)?n.styles:[n.styles];for(let a of r)typeof a=="string"?a===xt?i.push(a):e.errors.push(Bv(a)):i.push(new Map(Object.entries(a)));let o=!1,s=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(s=a.get("easing"),a.delete("easing")),!o)){for(let c of a.values())if(c.toString().indexOf(df)>=0){o=!0;break}}}),{type:P.Style,styles:i,easing:s,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let i=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;i&&o>0&&(o-=i.duration+i.delay),n.styles.forEach(s=>{typeof s!="string"&&s.forEach((a,c)=>{let l=e.collectedStyles.get(e.currentQuerySelector),d=l.get(c),u=!0;d&&(o!=r&&o>=d.startTime&&r<=d.endTime&&(e.errors.push(Uv(c,d.startTime,d.endTime,o,r)),u=!1),o=d.startTime),u&&l.set(c,{startTime:o,endTime:r}),e.options&&ly(a,e.options,e.errors)})})}visitKeyframes(n,e){let i={type:P.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(Hv()),i;let r=1,o=0,s=[],a=!1,c=!1,l=0,d=n.steps.map(E=>{let k=this._makeStyleAst(E,e),J=k.offset!=null?k.offset:uS(k.styles),se=0;return J!=null&&(o++,se=k.offset=J),c=c||se<0||se>1,a=a||se<l,l=se,s.push(se),k});c&&e.errors.push($v()),a&&e.errors.push(zv());let u=n.steps.length,p=0;o>0&&o<u?e.errors.push(Wv()):o==0&&(p=r/(u-1));let f=u-1,m=e.currentTime,g=e.currentAnimateTimings,y=g.duration;return d.forEach((E,k)=>{let J=p>0?k==f?1:p*k:s[k],se=J*y;e.currentTime=m+g.delay+se,g.duration=se,this._validateStyleAst(E,e),E.offset=J,i.styles.push(E)}),i}visitReference(n,e){return{type:P.Reference,animation:et(this,mr(n.animation),e),options:wi(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:P.AnimateChild,options:wi(n.options)}}visitAnimateRef(n,e){return{type:P.AnimateRef,animation:this.visitReference(n.animation,e),options:wi(n.options)}}visitQuery(n,e){let i=e.currentQuerySelector,r=n.options||{};e.queryCount++,e.currentQuery=n;let[o,s]=lS(n.selector);e.currentQuerySelector=i.length?i+" "+o:o,Je(e.collectedStyles,e.currentQuerySelector,new Map);let a=et(this,mr(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=i,{type:P.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:s,animation:a,originalSelector:n.selector,options:wi(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(Gv());let i=n.timings==="full"?{duration:0,delay:0,easing:"full"}:To(n.timings,e.errors,!0);return{type:P.Stagger,animation:et(this,mr(n.animation),e),timings:i,options:null}}};function lS(t){let n=!!t.split(/\s*,\s*/).find(e=>e==wy);return n&&(t=t.replace(cS,"")),t=t.replace(/@\*/g,Co).replace(/@\w+/g,e=>Co+"-"+e.slice(1)).replace(/:animating/g,Ka),[t,n]}function dS(t){return t?x({},t):null}var bf=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function uS(t){if(typeof t=="string")return null;let n=null;if(Array.isArray(t))t.forEach(e=>{if(e instanceof Map&&e.has("offset")){let i=e;n=parseFloat(i.get("offset")),i.delete("offset")}});else if(t instanceof Map&&t.has("offset")){let e=t;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function fS(t,n){if(t.hasOwnProperty("duration"))return t;if(typeof t=="number"){let o=To(t,n).duration;return pf(o,0,"")}let e=t;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=pf(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=To(e,n);return pf(r.duration,r.delay,r.easing)}function wi(t){return t?(t=x({},t),t.params&&(t.params=dS(t.params))):t={},t}function pf(t,n,e){return{duration:t,delay:n,easing:e}}function Nf(t,n,e,i,r,o,s=null,a=!1){return{type:1,element:t,keyframes:n,preStyleProps:e,postStyleProps:i,duration:r,delay:o,totalTime:r+o,easing:s,subTimeline:a}}var Mo=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let i=this._map.get(n);i||this._map.set(n,i=[]),i.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},hS=1,pS=":enter",mS=new RegExp(pS,"g"),gS=":leave",vS=new RegExp(gS,"g");function Dy(t,n,e,i,r,o=new Map,s=new Map,a,c,l=[]){return new Ef().buildKeyframes(t,n,e,i,r,o,s,a,c,l)}var Ef=class{buildKeyframes(n,e,i,r,o,s,a,c,l,d=[]){l=l||new Mo;let u=new wf(n,e,l,r,o,d,[]);u.options=c;let p=c.delay?Qt(c.delay):0;u.currentTimeline.delayNextStep(p),u.currentTimeline.setStyles([s],null,u.errors,c),et(this,i,u);let f=u.timelines.filter(m=>m.containsAnimation());if(f.length&&a.size){let m;for(let g=f.length-1;g>=0;g--){let y=f[g];if(y.element===e){m=y;break}}m&&!m.allowOnlyTimelineStyles()&&m.setStyles([a],null,u.errors,c)}return f.length?f.map(m=>m.buildKeyframes()):[Nf(e,[],[],[],0,p,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let i=e.subInstructions.get(e.element);if(i){let r=e.createSubContext(n.options),o=e.currentTimeline.currentTime,s=this._visitSubInstructions(i,r,r.options);o!=s&&e.transformIntoNewTimeline(s)}e.previousNode=n}visitAnimateRef(n,e){let i=e.createSubContext(n.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,i),this.visitReference(n.animation,i),e.transformIntoNewTimeline(i.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,i){for(let r of n){let o=r?.delay;if(o){let s=typeof o=="number"?o:Qt(gr(o,r?.params??{},e.errors));i.delayNextStep(s)}}}_visitSubInstructions(n,e,i){let o=e.currentTimeline.currentTime,s=i.duration!=null?Qt(i.duration):null,a=i.delay!=null?Qt(i.delay):null;return s!==0&&n.forEach(c=>{let l=e.appendInstructionToTimeline(c,s,a);o=Math.max(o,l.duration+l.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),et(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let i=e.subContextCount,r=e,o=n.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==P.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=ic);let s=Qt(o.delay);r.delayNextStep(s)}n.steps.length&&(n.steps.forEach(s=>et(this,s,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let i=[],r=e.currentTimeline.currentTime,o=n.options&&n.options.delay?Qt(n.options.delay):0;n.steps.forEach(s=>{let a=e.createSubContext(n.options);o&&a.delayNextStep(o),et(this,s,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(s=>e.currentTimeline.mergeTimelineCollectedStyles(s)),e.transformIntoNewTimeline(r),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let i=n.strValue,r=e.params?gr(i,e.params,e.errors):i;return To(r,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let i=e.currentAnimateTimings=this._visitTiming(n.timings,e),r=e.currentTimeline;i.delay&&(e.incrementTime(i.delay),r.snapshotCurrentStyles());let o=n.style;o.type==P.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(i.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let i=e.currentTimeline,r=e.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let o=r&&r.easing||n.easing;n.isEmptyStep?i.applyEmptyStep(o):i.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let i=e.currentAnimateTimings,r=e.currentTimeline.duration,o=i.duration,a=e.createSubContext().currentTimeline;a.easing=i.easing,n.styles.forEach(c=>{let l=c.offset||0;a.forwardTime(l*o),a.setStyles(c.styles,c.easing,e.errors,e.options),a.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(a),e.transformIntoNewTimeline(r+o),e.previousNode=n}visitQuery(n,e){let i=e.currentTimeline.currentTime,r=n.options||{},o=r.delay?Qt(r.delay):0;o&&(e.previousNode.type===P.Style||i==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=ic);let s=i,a=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=a.length;let c=null;a.forEach((l,d)=>{e.currentQueryIndex=d;let u=e.createSubContext(n.options,l);o&&u.delayNextStep(o),l===e.element&&(c=u.currentTimeline),et(this,n.animation,u),u.currentTimeline.applyStylesToKeyframe();let p=u.currentTimeline.currentTime;s=Math.max(s,p)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(s),c&&(e.currentTimeline.mergeTimelineCollectedStyles(c),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let i=e.parentContext,r=e.currentTimeline,o=n.timings,s=Math.abs(o.duration),a=s*(e.currentQueryTotal-1),c=s*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":c=a-c;break;case"full":c=i.currentStaggerTime;break}let d=e.currentTimeline;c&&d.delayNextStep(c);let u=d.currentTime;et(this,n.animation,e),e.previousNode=n,i.currentStaggerTime=r.currentTime-u+(r.startTime-i.currentTimeline.startTime)}},ic={},wf=class t{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=ic;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,i,r,o,s,a,c){this._driver=n,this.element=e,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=o,this.errors=s,this.timelines=a,this.currentTimeline=c||new rc(this._driver,e,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let i=n,r=this.options;i.duration!=null&&(r.duration=Qt(i.duration)),i.delay!=null&&(r.delay=Qt(i.delay));let o=i.params;if(o){let s=r.params;s||(s=this.options.params={}),Object.keys(o).forEach(a=>{(!e||!s.hasOwnProperty(a))&&(s[a]=gr(o[a],s,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let i=n.params={};Object.keys(e).forEach(r=>{i[r]=e[r]})}}return n}createSubContext(n=null,e,i){let r=e||this.element,o=new t(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=ic,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,i){let r={duration:e??n.duration,delay:this.currentTimeline.currentTime+(i??0)+n.delay,easing:""},o=new If(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,r,n.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,i,r,o,s){let a=[];if(r&&a.push(this.element),n.length>0){n=n.replace(mS,"."+this._enterClassName),n=n.replace(vS,"."+this._leaveClassName);let c=i!=1,l=this._driver.query(this.element,n,c);i!==0&&(l=i<0?l.slice(l.length+i,l.length):l.slice(0,i)),a.push(...l)}return!o&&a.length==0&&s.push(qv(e)),a}},rc=class t{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,i,r){this._driver=n,this.element=e,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new t(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=hS,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,i]of this._globalTimelineStyles)this._backFill.set(e,i||xt),this._currentKeyframe.set(e,xt);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,i,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},s=yS(n,this._globalTimelineStyles);for(let[a,c]of s){let l=gr(c,o,i);this._pendingStyles.set(a,l),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??xt),this._updateStyle(a,l)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,i)=>{let r=this._styleSummary.get(i);(!r||e.time>r.time)&&this._updateStyle(i,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,c)=>{let l=new Map([...this._backFill,...a]);l.forEach((d,u)=>{d===Io?n.add(u):d===xt&&e.add(u)}),i||l.set("offset",c/this.duration),r.push(l)});let o=[...n.values()],s=[...e.values()];if(i){let a=r[0],c=new Map(a);a.set("offset",0),c.set("offset",1),r=[a,c]}return Nf(this.element,r,o,s,this.duration,this.startTime,this.easing,!1)}},If=class extends rc{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,i,r,o,s,a=!1){super(n,e,s.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=a,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],s=i+e,a=e/s,c=new Map(n[0]);c.set("offset",0),o.push(c);let l=new Map(n[0]);l.set("offset",py(a)),o.push(l);let d=n.length-1;for(let u=1;u<=d;u++){let p=new Map(n[u]),f=p.get("offset"),m=e+f*i;p.set("offset",py(m/s)),o.push(p)}i=s,e=0,r="",n=o}return Nf(this.element,n,this.preStyleProps,this.postStyleProps,i,e,r,!0)}};function py(t,n=3){let e=Math.pow(10,n-1);return Math.round(t*e)/e}function yS(t,n){let e=new Map,i;return t.forEach(r=>{if(r==="*"){i??=n.keys();for(let o of i)e.set(o,xt)}else for(let[o,s]of r)e.set(o,s)}),e}function my(t,n,e,i,r,o,s,a,c,l,d,u,p){return{type:0,element:t,triggerName:n,isRemovalTransition:r,fromState:e,fromStyles:o,toState:i,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:d,totalTime:u,errors:p}}var mf={},oc=class{_triggerName;ast;_stateStyles;constructor(n,e,i){this._triggerName=n,this.ast=e,this._stateStyles=i}match(n,e,i,r){return _S(this.ast.matchers,n,e,i,r)}buildStyles(n,e,i){let r=this._stateStyles.get("*");return n!==void 0&&(r=this._stateStyles.get(n?.toString())||r),r?r.buildStyles(e,i):new Map}build(n,e,i,r,o,s,a,c,l,d){let u=[],p=this.ast.options&&this.ast.options.params||mf,f=a&&a.params||mf,m=this.buildStyles(i,f,u),g=c&&c.params||mf,y=this.buildStyles(r,g,u),E=new Set,k=new Map,J=new Map,se=r==="void",lt={params:Cy(g,p),delay:this.ast.options?.delay},Se=d?[]:Dy(n,e,this.ast.animation,o,s,m,y,lt,l,u),be=0;return Se.forEach(ge=>{be=Math.max(ge.duration+ge.delay,be)}),u.length?my(e,this._triggerName,i,r,se,m,y,[],[],k,J,be,u):(Se.forEach(ge=>{let Ue=ge.element,dt=Je(k,Ue,new Set);ge.preStyleProps.forEach(kt=>dt.add(kt));let xi=Je(J,Ue,new Set);ge.postStyleProps.forEach(kt=>xi.add(kt)),Ue!==e&&E.add(Ue)}),my(e,this._triggerName,i,r,se,m,y,Se,[...E.values()],k,J,be))}};function _S(t,n,e,i,r){return t.some(o=>o(n,e,i,r))}function Cy(t,n){let e=x({},n);return Object.entries(t).forEach(([i,r])=>{r!=null&&(e[i]=r)}),e}var Df=class{styles;defaultParams;normalizer;constructor(n,e,i){this.styles=n,this.defaultParams=e,this.normalizer=i}buildStyles(n,e){let i=new Map,r=Cy(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,a)=>{s&&(s=gr(s,r,e));let c=this.normalizer.normalizePropertyName(a,e);s=this.normalizer.normalizeStyleValue(a,c,s,e),i.set(a,s)})}),i}};function bS(t,n,e){return new Cf(t,n,e)}var Cf=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,i){this.name=n,this.ast=e,this._normalizer=i,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new Df(r.style,o,i))}),gy(this.states,"true","1"),gy(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new oc(n,r,this.states))}),this.fallbackTransition=ES(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,i,r){return this.transitionFactories.find(s=>s.match(n,e,i,r))||null}matchStyles(n,e,i){return this.fallbackTransition.buildStyles(n,e,i)}};function ES(t,n,e){let i=[(s,a)=>!0],r={type:P.Sequence,steps:[],options:null},o={type:P.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new oc(t,o,n)}function gy(t,n,e){t.has(n)?t.has(e)||t.set(e,t.get(n)):t.has(e)&&t.set(n,t.get(e))}var wS=new Mo,Tf=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,i){this.bodyNode=n,this._driver=e,this._normalizer=i}register(n,e){let i=[],r=[],o=Iy(this._driver,e,i,r);if(i.length)throw Xv(i);this._animations.set(n,o)}_buildPlayer(n,e,i){let r=n.element,o=sf(this._normalizer,n.keyframes,e,i);return this._driver.animate(r,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,i={}){let r=[],o=this._animations.get(n),s,a=new Map;if(o?(s=Dy(this._driver,e,o,uf,qa,new Map,new Map,i,wS,r),s.forEach(d=>{let u=Je(a,d.element,new Map);d.postStyleProps.forEach(p=>u.set(p,null))})):(r.push(Yv()),s=[]),r.length)throw Jv(r);a.forEach((d,u)=>{d.forEach((p,f)=>{d.set(f,this._driver.computeStyle(u,f,xt))})});let c=s.map(d=>{let u=a.get(d.element);return this._buildPlayer(d,new Map,u)}),l=_n(c);return this._playersById.set(n,l),l.onDestroy(()=>this.destroy(n)),this.players.push(l),l}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let i=this.players.indexOf(e);i>=0&&this.players.splice(i,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw ey(n);return e}listen(n,e,i,r){let o=Wa(e,"","","");return za(this._getPlayer(n),i,o,r),()=>{}}command(n,e,i,r){if(i=="register"){this.register(n,r[0]);return}if(i=="create"){let s=r[0]||{};this.create(n,e,s);return}let o=this._getPlayer(n);switch(i){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(n);break}}},vy="ng-animate-queued",IS=".ng-animate-queued",gf="ng-animate-disabled",DS=".ng-animate-disabled",CS="ng-star-inserted",TS=".ng-star-inserted",SS=[],Ty={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},MS={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Nt="__ng_removed",xo=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let i=n&&n.hasOwnProperty("value"),r=i?n.value:n;if(this.value=AS(r),i){let o=n,{value:s}=o,a=Ho(o,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let i=this.options.params;Object.keys(e).forEach(r=>{i[r]==null&&(i[r]=e[r])})}}},So="void",vf=new xo(So),Sf=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,i){this.id=n,this.hostElement=e,this._engine=i,this._hostClassName="ng-tns-"+n,vt(e,this._hostClassName)}listen(n,e,i,r){if(!this._triggers.has(e))throw ty(i,e);if(i==null||i.length==0)throw ny(e);if(!NS(i))throw iy(i,e);let o=Je(this._elementListeners,n,[]),s={name:e,phase:i,callback:r};o.push(s);let a=Je(this._engine.statesByElement,n,new Map);return a.has(e)||(vt(n,Do),vt(n,Do+"-"+e),a.set(e,vf)),()=>{this._engine.afterFlush(()=>{let c=o.indexOf(s);c>=0&&o.splice(c,1),this._triggers.has(e)||a.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw ry(n);return e}trigger(n,e,i,r=!0){let o=this._getTrigger(e),s=new Ao(this.id,e,n),a=this._engine.statesByElement.get(n);a||(vt(n,Do),vt(n,Do+"-"+e),this._engine.statesByElement.set(n,a=new Map));let c=a.get(e),l=new xo(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&c&&l.absorbOptions(c.options),a.set(e,l),c||(c=vf),!(l.value===So)&&c.value===l.value){if(!OS(c.params,l.params)){let g=[],y=o.matchStyles(c.value,c.params,g),E=o.matchStyles(l.value,l.params,g);g.length?this._engine.reportError(g):this._engine.afterFlush(()=>{Pn(n,y),At(n,E)})}return}let p=Je(this._engine.playersByElement,n,[]);p.forEach(g=>{g.namespaceId==this.id&&g.triggerName==e&&g.queued&&g.destroy()});let f=o.matchTransition(c.value,l.value,n,l.params),m=!1;if(!f){if(!r)return;f=o.fallbackTransition,m=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:f,fromState:c,toState:l,player:s,isFallbackTransition:m}),m||(vt(n,vy),s.onStart(()=>{vr(n,vy)})),s.onDone(()=>{let g=this.players.indexOf(s);g>=0&&this.players.splice(g,1);let y=this._engine.playersByElement.get(n);if(y){let E=y.indexOf(s);E>=0&&y.splice(E,1)}}),this.players.push(s),p.push(s),s}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,i)=>{this._elementListeners.set(i,e.filter(r=>r.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(i=>i.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let i=this._engine.driver.query(n,Co,!0);i.forEach(r=>{if(r[Nt])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(s=>s.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(n,e,i,r){let o=this._engine.statesByElement.get(n),s=new Map;if(o){let a=[];if(o.forEach((c,l)=>{if(s.set(l,c.value),this._triggers.has(l)){let d=this.trigger(n,l,So,r);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,s),i&&_n(a).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),i=this._engine.statesByElement.get(n);if(e&&i){let r=new Set;e.forEach(o=>{let s=o.name;if(r.has(s))return;r.add(s);let c=this._triggers.get(s).fallbackTransition,l=i.get(s)||vf,d=new xo(So),u=new Ao(this.id,s,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:s,transition:c,fromState:l,toState:d,player:u,isFallbackTransition:!0})})}}removeNode(n,e){let i=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let r=!1;if(i.totalAnimations){let o=i.players.length?i.playersByQueriedElement.get(n):[];if(o&&o.length)r=!0;else{let s=n;for(;s=s.parentNode;)if(i.statesByElement.get(s)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(n),r)i.markElementAsRemoved(this.id,n,!1,e);else{let o=n[Nt];(!o||o===Ty)&&(i.afterFlush(()=>this.clearElementCache(n)),i.destroyInnerAnimations(n),i._onRemovalComplete(n,e))}}insertNode(n,e){vt(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let o=i.element,s=this._elementListeners.get(o);s&&s.forEach(a=>{if(a.name==i.triggerName){let c=Wa(o,i.triggerName,i.fromState.value,i.toState.value);c._data=n,za(i.player,a.phase,c,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(i)}),this._queue=[],e.sort((i,r)=>{let o=i.transition.ast.depCount,s=r.transition.ast.depCount;return o==0||s==0?o-s:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},Mf=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,i){this.bodyNode=n,this.driver=e,this._normalizer=i}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(i=>{i.queued&&n.push(i)})}),n}createNamespace(n,e){let i=new Sf(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(i,e):(this.newHostElements.set(e,i),this.collectEnterElement(e)),this._namespaceLookup[n]=i}_balanceNamespaceList(n,e){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let s=!1,a=this.driver.getParentElement(e);for(;a;){let c=r.get(a);if(c){let l=i.indexOf(c);i.splice(l+1,0,n),s=!0;break}a=this.driver.getParentElement(a)}s||i.unshift(n)}else i.push(n);return r.set(e,n),n}register(n,e){let i=this._namespaceLookup[n];return i||(i=this.createNamespace(n,e)),i}registerTrigger(n,e,i){let r=this._namespaceLookup[n];r&&r.register(e,i)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(n);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,i=this.statesByElement.get(n);if(i){for(let r of i.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(n,e,i,r){if(Ja(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,i,r),!0}return!1}insertNode(n,e,i,r){if(!Ja(e))return;let o=e[Nt];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let s=this.collectedLeaveElements.indexOf(e);s>=0&&this.collectedLeaveElements.splice(s,1)}if(n){let s=this._fetchNamespace(n);s&&s.insertNode(e,i)}r&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),vt(n,gf)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),vr(n,gf))}removeNode(n,e,i){if(Ja(e)){let r=n?this._fetchNamespace(n):null;r?r.removeNode(e,i):this.markElementAsRemoved(n,e,!1,i);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,i)}else this._onRemovalComplete(e,i)}markElementAsRemoved(n,e,i,r,o){this.collectedLeaveElements.push(e),e[Nt]={namespaceId:n,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,i,r,o){return Ja(e)?this._fetchNamespace(n).listen(e,i,r,o):()=>{}}_buildInstruction(n,e,i,r,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,i,r,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,Co,!0);e.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,Ka,!0),e.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return _n(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[Nt];if(e&&e.setForRemoval){if(n[Nt]=Ty,e.namespaceId){this.destroyInnerAnimations(n);let i=this._fetchNamespace(e.namespaceId);i&&i.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(gf)&&this.markElementAsDisabled(n,!1),this.driver.query(n,DS,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];vt(r,CS)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{e=this._flushAnimations(i,n)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],e.length?_n(e).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(n){throw oy(n)}_flushAnimations(n,e){let i=new Mo,r=[],o=new Map,s=[],a=new Map,c=new Map,l=new Map,d=new Set;this.disabledNodes.forEach(b=>{d.add(b);let w=this.driver.query(b,IS,!0);for(let D=0;D<w.length;D++)d.add(w[D])});let u=this.bodyNode,p=Array.from(this.statesByElement.keys()),f=by(p,this.collectedEnterElements),m=new Map,g=0;f.forEach((b,w)=>{let D=uf+g++;m.set(w,D),b.forEach(B=>vt(B,D))});let y=[],E=new Set,k=new Set;for(let b=0;b<this.collectedLeaveElements.length;b++){let w=this.collectedLeaveElements[b],D=w[Nt];D&&D.setForRemoval&&(y.push(w),E.add(w),D.hasAnimation?this.driver.query(w,TS,!0).forEach(B=>E.add(B)):k.add(w))}let J=new Map,se=by(p,Array.from(E));se.forEach((b,w)=>{let D=qa+g++;J.set(w,D),b.forEach(B=>vt(B,D))}),n.push(()=>{f.forEach((b,w)=>{let D=m.get(w);b.forEach(B=>vr(B,D))}),se.forEach((b,w)=>{let D=J.get(w);b.forEach(B=>vr(B,D))}),y.forEach(b=>{this.processLeaveNode(b)})});let lt=[],Se=[];for(let b=this._namespaceList.length-1;b>=0;b--)this._namespaceList[b].drainQueuedTransitions(e).forEach(D=>{let B=D.player,Me=D.element;if(lt.push(B),this.collectedEnterElements.length){let Pe=Me[Nt];if(Pe&&Pe.setForMove){if(Pe.previousTriggersValues&&Pe.previousTriggersValues.has(D.triggerName)){let Vn=Pe.previousTriggersValues.get(D.triggerName),ut=this.statesByElement.get(D.element);if(ut&&ut.has(D.triggerName)){let Bo=ut.get(D.triggerName);Bo.value=Vn,ut.set(D.triggerName,Bo)}}B.destroy();return}}let Ot=!u||!this.driver.containsElement(u,Me),nt=J.get(Me),En=m.get(Me),le=this._buildInstruction(D,i,En,nt,Ot);if(le.errors&&le.errors.length){Se.push(le);return}if(Ot){B.onStart(()=>Pn(Me,le.fromStyles)),B.onDestroy(()=>At(Me,le.toStyles)),r.push(B);return}if(D.isFallbackTransition){B.onStart(()=>Pn(Me,le.fromStyles)),B.onDestroy(()=>At(Me,le.toStyles)),r.push(B);return}let nh=[];le.timelines.forEach(Pe=>{Pe.stretchStartingKeyframe=!0,this.disabledNodes.has(Pe.element)||nh.push(Pe)}),le.timelines=nh,i.append(Me,le.timelines);let Q_={instruction:le,player:B,element:Me};s.push(Q_),le.queriedElements.forEach(Pe=>Je(a,Pe,[]).push(B)),le.preStyleProps.forEach((Pe,Vn)=>{if(Pe.size){let ut=c.get(Vn);ut||c.set(Vn,ut=new Set),Pe.forEach((Bo,Ic)=>ut.add(Ic))}}),le.postStyleProps.forEach((Pe,Vn)=>{let ut=l.get(Vn);ut||l.set(Vn,ut=new Set),Pe.forEach((Bo,Ic)=>ut.add(Ic))})});if(Se.length){let b=[];Se.forEach(w=>{b.push(sy(w.triggerName,w.errors))}),lt.forEach(w=>w.destroy()),this.reportError(b)}let be=new Map,ge=new Map;s.forEach(b=>{let w=b.element;i.has(w)&&(ge.set(w,w),this._beforeAnimationBuild(b.player.namespaceId,b.instruction,be))}),r.forEach(b=>{let w=b.element;this._getPreviousPlayers(w,!1,b.namespaceId,b.triggerName,null).forEach(B=>{Je(be,w,[]).push(B),B.destroy()})});let Ue=y.filter(b=>Ey(b,c,l)),dt=new Map;_y(dt,this.driver,k,l,xt).forEach(b=>{Ey(b,c,l)&&Ue.push(b)});let kt=new Map;f.forEach((b,w)=>{_y(kt,this.driver,new Set(b),c,Io)}),Ue.forEach(b=>{let w=dt.get(b),D=kt.get(b);dt.set(b,new Map([...w?.entries()??[],...D?.entries()??[]]))});let wc=[],eh=[],th={};s.forEach(b=>{let{element:w,player:D,instruction:B}=b;if(i.has(w)){if(d.has(w)){D.onDestroy(()=>At(w,B.toStyles)),D.disabled=!0,D.overrideTotalTime(B.totalTime),r.push(D);return}let Me=th;if(ge.size>1){let nt=w,En=[];for(;nt=nt.parentNode;){let le=ge.get(nt);if(le){Me=le;break}En.push(nt)}En.forEach(le=>ge.set(le,Me))}let Ot=this._buildAnimation(D.namespaceId,B,be,o,kt,dt);if(D.setRealPlayer(Ot),Me===th)wc.push(D);else{let nt=this.playersByElement.get(Me);nt&&nt.length&&(D.parentPlayer=_n(nt)),r.push(D)}}else Pn(w,B.fromStyles),D.onDestroy(()=>At(w,B.toStyles)),eh.push(D),d.has(w)&&r.push(D)}),eh.forEach(b=>{let w=o.get(b.element);if(w&&w.length){let D=_n(w);b.setRealPlayer(D)}}),r.forEach(b=>{b.parentPlayer?b.syncPlayerEvents(b.parentPlayer):b.destroy()});for(let b=0;b<y.length;b++){let w=y[b],D=w[Nt];if(vr(w,qa),D&&D.hasAnimation)continue;let B=[];if(a.size){let Ot=a.get(w);Ot&&Ot.length&&B.push(...Ot);let nt=this.driver.query(w,Ka,!0);for(let En=0;En<nt.length;En++){let le=a.get(nt[En]);le&&le.length&&B.push(...le)}}let Me=B.filter(Ot=>!Ot.destroyed);Me.length?RS(this,w,Me):this.processLeaveNode(w)}return y.length=0,wc.forEach(b=>{this.players.push(b),b.onDone(()=>{b.destroy();let w=this.players.indexOf(b);this.players.splice(w,1)}),b.play()}),wc}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,i,r,o){let s=[];if(e){let a=this.playersByQueriedElement.get(n);a&&(s=a)}else{let a=this.playersByElement.get(n);if(a){let c=!o||o==So;a.forEach(l=>{l.queued||!c&&l.triggerName!=r||s.push(l)})}}return(i||r)&&(s=s.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),s}_beforeAnimationBuild(n,e,i){let r=e.triggerName,o=e.element,s=e.isRemovalTransition?void 0:n,a=e.isRemovalTransition?void 0:r;for(let c of e.timelines){let l=c.element,d=l!==o,u=Je(i,l,[]);this._getPreviousPlayers(l,d,s,a,e.toState).forEach(f=>{let m=f.getRealPlayer();m.beforeDestroy&&m.beforeDestroy(),f.destroy(),u.push(f)})}Pn(o,e.fromStyles)}_buildAnimation(n,e,i,r,o,s){let a=e.triggerName,c=e.element,l=[],d=new Set,u=new Set,p=e.timelines.map(m=>{let g=m.element;d.add(g);let y=g[Nt];if(y&&y.removedBeforeQueried)return new yn(m.duration,m.delay);let E=g!==c,k=kS((i.get(g)||SS).map(be=>be.getRealPlayer())).filter(be=>{let ge=be;return ge.element?ge.element===g:!1}),J=o.get(g),se=s.get(g),lt=sf(this._normalizer,m.keyframes,J,se),Se=this._buildPlayer(m,lt,k);if(m.subTimeline&&r&&u.add(g),E){let be=new Ao(n,a,g);be.setRealPlayer(Se),l.push(be)}return Se});l.forEach(m=>{Je(this.playersByQueriedElement,m.element,[]).push(m),m.onDone(()=>xS(this.playersByQueriedElement,m.element,m))}),d.forEach(m=>vt(m,ff));let f=_n(p);return f.onDestroy(()=>{d.forEach(m=>vr(m,ff)),At(c,e.toStyles)}),u.forEach(m=>{Je(r,m,[]).push(f)}),f}_buildPlayer(n,e,i){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,i):new yn(n.duration,n.delay)}},Ao=class{namespaceId;triggerName;element;_player=new yn;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,i){this.namespaceId=n,this.triggerName=e,this.element=i}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,i)=>{e.forEach(r=>za(n,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){Je(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function xS(t,n,e){let i=t.get(n);if(i){if(i.length){let r=i.indexOf(e);i.splice(r,1)}i.length==0&&t.delete(n)}return i}function AS(t){return t??null}function Ja(t){return t&&t.nodeType===1}function NS(t){return t=="start"||t=="done"}function yy(t,n){let e=t.style.display;return t.style.display=n??"none",e}function _y(t,n,e,i,r){let o=[];e.forEach(c=>o.push(yy(c)));let s=[];i.forEach((c,l)=>{let d=new Map;c.forEach(u=>{let p=n.computeStyle(l,u,r);d.set(u,p),(!p||p.length==0)&&(l[Nt]=MS,s.push(l))}),t.set(l,d)});let a=0;return e.forEach(c=>yy(c,o[a++])),s}function by(t,n){let e=new Map;if(t.forEach(a=>e.set(a,[])),n.length==0)return e;let i=1,r=new Set(n),o=new Map;function s(a){if(!a)return i;let c=o.get(a);if(c)return c;let l=a.parentNode;return e.has(l)?c=l:r.has(l)?c=i:c=s(l),o.set(a,c),c}return n.forEach(a=>{let c=s(a);c!==i&&e.get(c).push(a)}),e}function vt(t,n){t.classList?.add(n)}function vr(t,n){t.classList?.remove(n)}function RS(t,n,e){_n(e).onDone(()=>t.processLeaveNode(n))}function kS(t){let n=[];return Sy(t,n),n}function Sy(t,n){for(let e=0;e<t.length;e++){let i=t[e];i instanceof pr?Sy(i.players,n):n.push(i)}}function OS(t,n){let e=Object.keys(t),i=Object.keys(n);if(e.length!=i.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!n.hasOwnProperty(o)||t[o]!==n[o])return!1}return!0}function Ey(t,n,e){let i=e.get(t);if(!i)return!1;let r=n.get(t);return r?i.forEach(o=>r.add(o)):n.set(t,i),e.delete(t),!0}var yr=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,i){this._driver=e,this._normalizer=i,this._transitionEngine=new Mf(n.body,e,i),this._timelineEngine=new Tf(n.body,e,i),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(n,e,i,r,o){let s=n+"-"+r,a=this._triggerCache[s];if(!a){let c=[],l=[],d=Iy(this._driver,o,c,l);if(c.length)throw Zv(r,c);a=bS(r,d,this._normalizer),this._triggerCache[s]=a}this._transitionEngine.registerTrigger(e,r,a)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,i,r){this._transitionEngine.insertNode(n,e,i,r)}onRemove(n,e,i){this._transitionEngine.removeNode(n,e,i)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,i,r){if(i.charAt(0)=="@"){let[o,s]=af(i),a=r;this._timelineEngine.command(o,e,s,a)}else this._transitionEngine.trigger(n,e,i,r)}listen(n,e,i,r,o){if(i.charAt(0)=="@"){let[s,a]=af(i);return this._timelineEngine.listen(s,e,a,o)}return this._transitionEngine.listen(n,e,i,r,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function PS(t,n){let e=null,i=null;return Array.isArray(n)&&n.length?(e=yf(n[0]),n.length>1&&(i=yf(n[n.length-1]))):n instanceof Map&&(e=yf(n)),e||i?new FS(t,e,i):null}var FS=(()=>{class t{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,i,r){this._element=e,this._startStyles=i,this._endStyles=r;let o=t.initialStylesByElement.get(e);o||t.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&At(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(At(this._element,this._initialStyles),this._endStyles&&(At(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(t.initialStylesByElement.delete(this._element),this._startStyles&&(Pn(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Pn(this._element,this._endStyles),this._endStyles=null),At(this._element,this._initialStyles),this._state=3)}}return t})();function yf(t){let n=null;return t.forEach((e,i)=>{LS(i)&&(n=n||new Map,n.set(i,e))}),n}function LS(t){return t==="display"||t==="position"}var sc=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,i,r){this.element=n,this.keyframes=e,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let i=()=>this._onFinish();return e.addEventListener("finish",i),this.onDestroy(()=>{e.removeEventListener("finish",i)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(i=>{e.push(Object.fromEntries(i))}),e}_triggerWebAnimation(n,e,i){let r=this._convertKeyframesToObject(e);try{return n.animate(r,i)}catch{return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&n.set(r,this._finished?i:Za(this.element,r))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},ac=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return cf(n,e)}getParentElement(n){return Ga(n)}query(n,e,i){return lf(n,e,i)}computeStyle(n,e,i){return Za(n,e)}animate(n,e,i,r,o,s=[]){let a=r==0?"both":"forwards",c={duration:i,delay:r,fill:a};o&&(c.easing=o);let l=new Map,d=s.filter(f=>f instanceof sc);dy(i,r)&&d.forEach(f=>{f.currentSnapshot.forEach((m,g)=>l.set(g,m))});let u=cy(e).map(f=>new Map(f));u=uy(n,u,l);let p=PS(n,u);return new sc(n,u,c,p)}};var ec="@",My="@.disabled",cc=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,i,r){this.namespaceId=n,this.delegate=e,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,i,r=!0){this.delegate.insertBefore(n,e,i),this.engine.onInsert(this.namespaceId,e,n,r)}removeChild(n,e,i,r){if(r){this.delegate.removeChild(n,e,i,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){e.charAt(0)==ec&&e==My?this.disableAnimations(n,!!i):this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.delegate.listen(n,e,i,r)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},xf=class extends cc{factory;constructor(n,e,i,r,o){super(e,i,r,o),this.factory=n,this.namespaceId=e}setProperty(n,e,i){e.charAt(0)==ec?e.charAt(1)=="."&&e==My?(i=i===void 0?!0:!!i,this.disableAnimations(n,i)):this.engine.process(this.namespaceId,n,e.slice(1),i):this.delegate.setProperty(n,e,i)}listen(n,e,i,r){if(e.charAt(0)==ec){let o=VS(n),s=e.slice(1),a="";return s.charAt(0)!=ec&&([s,a]=jS(s)),this.engine.listen(this.namespaceId,o,s,a,c=>{let l=c._data||-1;this.factory.scheduleListenerCallback(l,i,c)})}return this.delegate.listen(n,e,i,r)}};function VS(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}function jS(t){let n=t.indexOf("."),e=t.substring(0,n),i=t.slice(n+1);return[e,i]}var lc=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,i){this.delegate=n,this.engine=e,this._zone=i,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(n,e){let r=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let l=this._rendererCache,d=l.get(r);if(!d){let u=()=>l.delete(r);d=new cc("",r,this.engine,u),l.set(r,d)}return d}let o=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,n);let a=l=>{Array.isArray(l)?l.forEach(a):this.engine.registerTrigger(o,s,n,l.name,l)};return e.data.animation.forEach(a),new xf(this,s,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,i){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[s,a]=o;s(a)}),this._animationCallbacksBuffer=[]})}),r.push([e,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var US=(()=>{class t extends yr{constructor(e,i,r){super(e,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||t)(S(O),S(Ii),S(Di))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();function HS(){return new tc}function $S(){return new lc(h(_o),h(yr),h(A))}var xy=[{provide:Di,useFactory:HS},{provide:yr,useClass:US},{provide:ot,useFactory:$S}],V2=[{provide:Ii,useClass:Af},{provide:nr,useValue:"NoopAnimations"},...xy],zS=[{provide:Ii,useFactory:()=>new ac},{provide:nr,useFactory:()=>"BrowserAnimations"},...xy];function Ay(){return hn("NgEagerAnimations"),[...zS]}var Rf;try{Rf=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Rf=!1}var _e=(()=>{class t{_platformId=h(di);isBrowser=this._platformId?mv(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Rf)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var kf;function Ny(){if(kf==null){let t=typeof document<"u"?document.head:null;kf=!!(t&&(t.createShadowRoot||t.attachShadow))}return kf}function Of(t){if(Ny()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Rt(t){return t.composedPath?t.composedPath()[0]:t.target}var No;function Ry(){if(No==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>No=!0}))}finally{No=No||!1}return No}function _r(t){return Ry()?t:!!t.capture}var WS=new _("cdk-dir-doc",{providedIn:"root",factory:()=>h(O)}),GS=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ky(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?GS.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Ro=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Xe("ltr");change=new he;constructor(){let e=h(WS,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ky(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var we=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({})}return t})();var qS=["*",[["mat-toolbar-row"]]],KS=["*","mat-toolbar-row"],QS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),Oy=(()=>{class t{_elementRef=h(Y);_platform=h(_e);_document=h(O);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&mn(o,QS,5),i&2){let s;pe(s=me())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(Ye(r.color?"mat-"+r.color:""),re("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:KS,decls:2,vars:0,template:function(i,r){i&1&&(ke(qS),ie(0),ie(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return t})();var Py=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[we]})}return t})();var XS=["*"];var YS=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],JS=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],eM=new _("MAT_CARD_CONFIG"),Fy=(()=>{class t{appearance;constructor(){let e=h(eM,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&re("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:XS,decls:1,vars:0,template:function(i,r){i&1&&(ke(),ie(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})(),Ly=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var Vy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),jy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})(),By=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&re("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),Uy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:JS,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(ke(YS),ie(0),je(1,"div",0),ie(2,1),Be(),ie(3,2))},encapsulation:2})}return t})();var Hy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();var $y=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[we]})}return t})();function ko(t){return t.buttons===0||t.detail===0}function Oo(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}function Fn(t){return t instanceof Y?t.nativeElement:t}var zy=new _("cdk-input-modality-detector-options"),Wy={ignoreKeys:[18,17,224,91,16]},Gy=650,Pf={passive:!0,capture:!0},qy=(()=>{class t{_platform=h(_e);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new $n(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Rt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Gy||(this._modality.next(ko(e)?"keyboard":"mouse"),this._mostRecentTarget=Rt(e))};_onTouchstart=e=>{if(Oo(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Rt(e)};constructor(){let e=h(A),i=h(O),r=h(zy,{optional:!0});if(this._options=x(x({},Wy),r),this.modalityDetected=this._modality.pipe(kr(1)),this.modalityChanged=this.modalityDetected.pipe(Zc()),this._platform.isBrowser){let o=h(ot).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Pf),o.listen(i,"mousedown",this._onMousedown,Pf),o.listen(i,"touchstart",this._onTouchstart,Pf)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),Po=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Po||{}),Ky=new _("cdk-focus-monitor-default-options"),dc=_r({passive:!0,capture:!0}),Fo=(()=>{class t{_ngZone=h(A);_platform=h(_e);_inputModalityDetector=h(qy);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=h(O);_stopInputModalityDetector=new Q;constructor(){let e=h(Ky,{optional:!0});this._detectionMode=e?.detectionMode||Po.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Rt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Fn(e);if(!this._platform.isBrowser||r.nodeType!==1)return Et();let o=Of(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new Q,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=Fn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Fn(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Po.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Po.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Gy:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Rt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,dc),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,dc)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Lt(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,dc),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,dc),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var uc=new WeakMap,tt=(()=>{class t{_appRef;_injector=h(ye);_environmentInjector=h(Ae);load(e){let i=this._appRef=this._appRef||this._injector.get(Gt),r=uc.get(i);r||(r={loaders:new Set,refs:[]},uc.set(i,r),i.onDestroy(()=>{uc.get(i)?.refs.forEach(o=>o.destroy()),uc.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(La(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var br=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return t})(),fc;function nM(){if(fc===void 0&&(fc=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(fc=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return fc}function Er(t){return nM()?.createHTML(t)||t}function Ff(t){return Array.isArray(t)?t:[t]}var Qy=new Set,Ci,hc=(()=>{class t{_platform=h(_e);_nonce=h(ui,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):rM}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&iM(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function iM(t,n){if(!Qy.has(t))try{Ci||(Ci=document.createElement("style"),n&&Ci.setAttribute("nonce",n),Ci.setAttribute("type","text/css"),document.head.appendChild(Ci)),Ci.sheet&&(Ci.sheet.insertRule(`@media ${t} {body{ }}`,0),Qy.add(t))}catch(e){console.error(e)}}function rM(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Lf=(()=>{class t{_mediaMatcher=h(hc);_zone=h(A);_queries=new Map;_destroySubject=new Q;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Zy(Ff(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Zy(Ff(e)).map(s=>this._registerQuery(s).observable),o=qc(r);return o=Ui(o.pipe(Nr(1)),o.pipe(kr(1),Ar(0))),o.pipe(ue(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:l})=>{a.matches=a.matches||c,a.breakpoints[l]=c}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new U(s=>{let a=c=>this._zone.run(()=>s.next(c));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(Gn(i),ue(({matches:s})=>({query:e,matches:s})),Lt(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function Zy(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var oM=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Xy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({providers:[oM]})}return t})();var jf=(()=>{class t{_platform=h(_e);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return aM(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=sM(mM(e));if(i&&(Yy(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=Yy(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!hM(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return pM(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function sM(t){try{return t.frameElement}catch{return null}}function aM(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function cM(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function lM(t){return uM(t)&&t.type=="hidden"}function dM(t){return fM(t)&&t.hasAttribute("href")}function uM(t){return t.nodeName.toLowerCase()=="input"}function fM(t){return t.nodeName.toLowerCase()=="a"}function t_(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Yy(t){if(!t_(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function hM(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function pM(t){return lM(t)?!1:cM(t)||dM(t)||t.hasAttribute("contenteditable")||t_(t)}function mM(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Ln=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Ln||{}),Jy="cdk-high-contrast-black-on-white",e_="cdk-high-contrast-white-on-black",Vf="cdk-high-contrast-active",n_=(()=>{class t{_platform=h(_e);_hasCheckedHighContrastMode=!1;_document=h(O);_breakpointSubscription;constructor(){this._breakpointSubscription=h(Lf).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Ln.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Ln.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Ln.BLACK_ON_WHITE}return Ln.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Vf,Jy,e_),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Ln.BLACK_ON_WHITE?e.add(Vf,Jy):i===Ln.WHITE_ON_BLACK&&e.add(Vf,e_)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),Bf=(()=>{class t{constructor(){h(n_)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[Xy]})}return t})();var gM=200,pc=class{_letterKeyStream=new Q;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Q;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:gM;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(qn(e=>this._pressedLetters.push(e)),Ar(n),Wn(()=>this._pressedLetters.length>0),ue(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function i_(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var mc=class{_items;_activeItemIndex=Xe(-1);_activeItem=Xe(null);_wrap=!1;_typeaheadSubscription=ve.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof an?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):fi(n)&&(this._effectRef=Js(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new Q;change=new Q;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new pc(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||i_(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return fi(this._items)?this._items():this._items instanceof an?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Lo=class extends mc{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var r_=new Map,Ti=class t{_appId=h(sn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let i=r_.get(n);return i===void 0?i=0:i++,r_.set(n,i),`${n}${e?t._infix+"-":""}${i}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})};var s_=" ";function vM(t,n,e){let i=vc(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(s_)))}function yM(t,n,e){let i=vc(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(s_)):t.removeAttribute(n)}function vc(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var a_="cdk-describedby-message",gc="cdk-describedby-host",Hf=0,c_=(()=>{class t{_platform=h(_e);_document=h(O);_messageRegistry=new Map;_messagesContainer=null;_id=`${Hf++}`;constructor(){h(tt).load(br),this._id=h(sn)+"-"+Hf++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=Uf(i,r);typeof i!="string"?(o_(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=Uf(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${gc}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(gc);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");o_(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Uf(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=vc(e,"aria-describedby").filter(r=>r.indexOf(a_)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);vM(e,"aria-describedby",r.messageElement.id),e.setAttribute(gc,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,yM(e,"aria-describedby",r.messageElement.id),e.removeAttribute(gc)}_isElementDescribedByMessage(e,i){let r=vc(e,"aria-describedby"),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function Uf(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function o_(t,n){t.id||(t.id=`${a_}-${n}-${Hf++}`)}var _M=new _("MATERIAL_ANIMATIONS"),l_=null;function $f(){return h(_M,{optional:!0})?.animationsDisabled||h(nr,{optional:!0})==="NoopAnimations"?"di-disabled":(l_??=h(hc).matchMedia("(prefers-reduced-motion)").matches,l_?"reduced-motion":"enabled")}function yt(){return $f()!=="enabled"}var Ke=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Ke||{}),zf=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ke.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},d_=_r({passive:!0,capture:!0}),Wf=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,d_)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,d_)))}_delegateEventHandler=n=>{let e=Rt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Vo={enterDuration:225,exitDuration:150},bM=800,u_=_r({passive:!0,capture:!0}),f_=["mousedown","touchstart"],h_=["mouseup","mouseleave","touchend","touchcancel"],EM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})(),jo=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Wf;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Fn(i)),o&&o.get(tt).load(EM)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=x(x({},Vo),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||wM(n,e,r),a=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let u=window.getComputedStyle(d),p=u.transitionProperty,f=u.transitionDuration,m=p==="none"||f==="0s"||f==="0s, 0s"||r.width===0&&r.height===0,g=new zf(this,d,i,m);d.style.transform="scale3d(1, 1, 1)",g.state=Ke.FADING_IN,i.persistent||(this._mostRecentTransientRipple=g);let y=null;return!m&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let E=()=>{y&&(y.fallbackTimer=null),clearTimeout(J),this._finishRippleTransition(g)},k=()=>this._destroyRipple(g),J=setTimeout(k,l+100);d.addEventListener("transitionend",E),d.addEventListener("transitioncancel",k),y={onTransitionEnd:E,onTransitionCancel:k,fallbackTimer:J}}),this._activeRipples.set(g,y),(m||!l)&&this._finishRippleTransition(g),g}fadeOutRipple(n){if(n.state===Ke.FADING_OUT||n.state===Ke.HIDDEN)return;let e=n.element,i=x(x({},Vo),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Ke.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Fn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,f_.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{h_.forEach(e=>{this._triggerElement.addEventListener(e,this,u_)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Ke.FADING_IN?this._startFadeOutTransition(n):n.state===Ke.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Ke.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Ke.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ko(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+bM;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Oo(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Ke.VISIBLE||n.config.terminateOnPointerUp&&n.state===Ke.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(f_.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(h_.forEach(e=>n.removeEventListener(e,this,u_)),this._pointerUpEventsRegistered=!1))}};function wM(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Si=new _("mat-ripple-global-options"),Gf=(()=>{class t{_elementRef=h(Y);_animationsDisabled=yt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=h(A),i=h(_e),r=h(Si,{optional:!0}),o=h(ye);this._globalOptions=r||{},this._rippleRenderer=new jo(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:x(x(x({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,x(x({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,x(x({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&re("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var IM={capture:!0},DM=["focus","mousedown","mouseenter","touchstart"],qf="mat-ripple-loader-uninitialized",Kf="mat-ripple-loader-class-name",p_="mat-ripple-loader-centered",yc="mat-ripple-loader-disabled",_c=(()=>{class t{_document=h(O);_animationsDisabled=yt();_globalRippleOptions=h(Si,{optional:!0});_platform=h(_e);_ngZone=h(A);_injector=h(ye);_eventCleanups;_hosts=new Map;constructor(){let e=h(ot).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>DM.map(i=>e.listen(this._document,i,this._onInteraction,IM)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(qf,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Kf))&&e.setAttribute(Kf,i.className||""),i.centered&&e.setAttribute(p_,""),i.disabled&&e.setAttribute(yc,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(yc,""):e.removeAttribute(yc)}_onInteraction=e=>{let i=Rt(e);if(i instanceof HTMLElement){let r=i.closest(`[${qf}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Kf)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Vo.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Vo.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(yc),rippleConfig:{centered:e.hasAttribute(p_),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new jo(a,this._ngZone,i,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:l}),e.removeAttribute(qf)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Mi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2})}return t})();var CM=["*",[["","progressIndicator",""]]],TM=["*","[progressIndicator]"];function SM(t,n){t&1&&(je(0,"div",1),ie(1,1),Be())}var MM=new _("MAT_BUTTON_CONFIG");function m_(t){return t==null?void 0:Oe(t)}var Qf=(()=>{class t{_elementRef=h(Y);_ngZone=h(A);_animationsDisabled=yt();_config=h(MM,{optional:!0});_focusMonitor=h(Fo);_cleanupClick;_renderer=h(Mt);_rippleLoader=h(_c);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=dv(!1,{transform:ne});constructor(){h(tt).load(Mi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(i,r){i&2&&(Re("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ye(r.color?"mat-"+r.color:""),re("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ne],disabled:[2,"disabled","disabled",ne],ariaDisabled:[2,"aria-disabled","ariaDisabled",ne],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ne],tabIndex:[2,"tabIndex","tabIndex",m_],_tabindex:[2,"tabindex","_tabindex",m_],showProgress:[1,"showProgress"]}})}return t})(),Zf=(()=>{class t extends Qf{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[pn],ngContentSelectors:TM,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(CM),at(0,"span",0),ie(1),We(2,SM,2,0,"div",1),at(3,"span",2)(4,"span",3)),i&2&&(G(2),Ge(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();var wr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[we]})}return t})();var xM=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],AM=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function NM(t,n){t&1&&(je(0,"div",2),ie(1,3),Be())}var g_=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),v_=(()=>{class t extends Qf{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=RM(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?g_.get(this._appearance):null,o=g_.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[pn],ngContentSelectors:AM,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(xM),at(0,"span",0),ie(1),je(2,"span",1),ie(3,1),Be(),ie(4,2),We(5,NM,2,0,"div",2),at(6,"span",3)(7,"span",4)),i&2&&(re("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),G(5),Ge(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();function RM(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var y_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[wr,we]})}return t})();function __(t){return Error(`Unable to find icon with the name "${t}"`)}function OM(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function b_(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function E_(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var bn=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},I_=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new bn(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(ze.HTML,r);if(!s)throw E_(r);let a=Er(s);return this._addSvgIconConfig(e,i,new bn("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new bn(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(ze.HTML,i);if(!o)throw E_(i);let s=Er(o);return this._addSvgIconSetConfig(e,new bn("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(ze.RESOURCE_URL,e);if(!i)throw b_(e);let r=this._cachedIconsByUrl.get(i);return r?Et(bc(r)):this._loadSvgIconFromConfig(new bn(e,null)).pipe(qn(o=>this._cachedIconsByUrl.set(i,o)),ue(o=>bc(o)))}getNamedSvgIcon(e,i=""){let r=w_(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):Gc(__(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Et(bc(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ue(i=>bc(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return Et(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Es(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(ze.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),Et(null)})));return Kc(o).pipe(ue(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw __(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(qn(i=>e.svgText=i),ue(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Et(null):this._fetchIcon(e).pipe(qn(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Er("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Er("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw OM();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(ze.RESOURCE_URL,i);if(!s)throw b_(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(ue(l=>Er(l)),Rr(()=>this._inProgressUrlFetches.delete(s)),Yc());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(w_(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return PM(o)?new bn(o.url,null,o.options):new bn(o,null)}}static \u0275fac=function(i){return new(i||t)(S(Qu,8),S(Zu),S(O,8),S(Ze))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bc(t){return t.cloneNode(!0)}function w_(t,n){return t+":"+n}function PM(t){return!!(t.url&&t.options)}var FM=["*"],LM=new _("MAT_ICON_DEFAULT_OPTIONS"),VM=new _("mat-icon-location",{providedIn:"root",factory:()=>{let t=h(O),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),D_=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],jM=D_.map(t=>`[${t}]`).join(", "),BM=/^url\(['"]?#(.*?)['"]?\)$/,C_=(()=>{class t{_elementRef=h(Y);_iconRegistry=h(I_);_location=h(VM);_errorHandler=h(Ze);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ve.EMPTY;constructor(){let e=h(new Fa("aria-hidden"),{optional:!0}),i=h(LM,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(jM),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)D_.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match(BM):null;if(l){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(Nr(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(Re("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Ye(r.color?"mat-"+r.color:""),re("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ne],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:FM,decls:1,vars:0,template:function(i,r){i&1&&(ke(),ie(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return t})(),T_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[we]})}return t})();var S_=new _("");var M_=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var HM=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],$M=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function zM(t,n){t&1&&(R(0,"span",3),ie(1,1),L())}function WM(t,n){t&1&&(R(0,"span",6),ie(1,2),L())}var GM=["*"];var qM=new _("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),x_=new _("MatChipAvatar"),A_=new _("MatChipTrailingIcon"),N_=new _("MatChipEdit"),R_=new _("MatChipRemove"),O_=new _("MatChip"),P_=(()=>{class t{_elementRef=h(Y);_parentChip=h(O_);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){h(tt).load(Mi),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(Re("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),re("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",ne],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Oe(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),KM=(()=>{class t extends P_{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Wd(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&ct("click",function(s){return r._handleClick(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(Re("tabindex",r._getTabindex()),re("mdc-evolution-chip__action--presentational",!1))},features:[pn]})}return t})();var Xf=(()=>{class t{_changeDetectorRef=h(Kt);_elementRef=h(Y);_tagName=h(lv);_ngZone=h(A);_focusMonitor=h(Fo);_globalRippleOptions=h(Si,{optional:!0});_document=h(O);_onFocus=new Q;_onBlur=new Q;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=yt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=h(Ti).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new he;destroyed=new he;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=h(_c);_injector=h(ye);constructor(){let e=h(tt);e.load(Mi),e.load(br),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Hi(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&mn(o,x_,5)(o,N_,5)(o,A_,5)(o,R_,5)(o,x_,5)(o,A_,5)(o,N_,5)(o,R_,5),i&2){let s;pe(s=me())&&(r.leadingIcon=s.first),pe(s=me())&&(r.editIcon=s.first),pe(s=me())&&(r.trailingIcon=s.first),pe(s=me())&&(r.removeIcon=s.first),pe(s=me())&&(r._allLeadingIcons=s),pe(s=me())&&(r._allTrailingIcons=s),pe(s=me())&&(r._allEditIcons=s),pe(s=me())&&(r._allRemoveIcons=s)}},viewQuery:function(i,r){if(i&1&&yi(KM,5),i&2){let o;pe(o=me())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&ct("keydown",function(s){return r._handleKeydown(s)}),i&2&&(Oa("id",r.id),Re("role",r.role)("aria-label",r.ariaLabel),Ye("mat-"+(r.color||"primary")),re("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",ne],highlighted:[2,"highlighted","highlighted",ne],disableRipple:[2,"disableRipple","disableRipple",ne],disabled:[2,"disabled","disabled",ne]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[On([{provide:O_,useExisting:t}])],ngContentSelectors:$M,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(ke(HM),qe(0,"span",0),R(1,"span",1)(2,"span",2),We(3,zM,2,0,"span",3),R(4,"span",4),ie(5),qe(6,"span",5),L()()(),We(7,WM,2,0,"span",6)),i&2&&(G(3),Ge(r.leadingIcon?3:-1),G(4),Ge(r._hasTrailingIcon()?7:-1))},dependencies:[P_],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return t})();var F_=(()=>{class t{_elementRef=h(Y);_changeDetectorRef=h(Kt);_dir=h(Ro,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new Q;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new an;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Gn(null),$i(()=>Hi(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Gn(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new Lo(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(Lt(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(Lt(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Gn(null),Lt(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Lt(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),s=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),a=o||s;this._isValidIndex(r)&&a&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["mat-chip-set"]],contentQueries:function(i,r,o){if(i&1&&mn(o,Xf,5),i&2){let s;pe(s=me())&&(r._chips=s)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,r){i&1&&ct("keydown",function(s){return r._handleKeydown(s)}),i&2&&Re("role",r.role)},inputs:{disabled:[2,"disabled","disabled",ne],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Oe(e)]},ngContentSelectors:GM,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(ke(),je(0,"div",0),ie(1),Be())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return t})();var L_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({providers:[M_,{provide:qM,useValue:{separatorKeyCodes:[13]}}],imports:[wr,we]})}return t})();function ZM(t,n){t&1&&at(0,"div",2)}var XM=new _("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var j_=(()=>{class t{_elementRef=h(Y);_ngZone=h(A);_changeDetectorRef=h(Kt);_renderer=h(Mt);_cleanupTransitionEnd;constructor(){let e=$f(),i=h(XM,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=V_(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=V_(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new he;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,r){i&2&&(Re("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),Ye("mat-"+r.color),re("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Oe],bufferValue:[2,"bufferValue","bufferValue",Oe],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,r){i&1&&(je(0,"div",0),at(1,"div",1),We(2,ZM,1,0,"div",2),Be(),je(3,"div",3),at(4,"span",4),Be(),je(5,"div",5),at(6,"span",4),Be()),i&2&&(G(),_i("flex-basis",r._getBufferBarFlexBasis()),G(),Ge(r.mode==="buffer"?2:-1),G(),_i("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return t})();function V_(t,n=0,e=100){return Math.max(n,Math.min(e,t))}var B_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[we]})}return t})();var JM=new _("MAT_BADGE_CONFIG"),U_="mat-badge-content",e0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["ng-component"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2})}return t})(),H_=(()=>{class t{_ngZone=h(A);_elementRef=h(Y);_ariaDescriber=h(c_);_renderer=h(Mt);_animationsDisabled=yt();_idGenerator=h(Ti);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color;overlap;disabled=!1;position;get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size;hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=h(jf);_document=h(O);constructor(){let e=h(JM,{optional:!0}),i=h(tt);i.load(e0),i.load(br),this._color=e?.color||"primary",this.overlap=e?.overlap??!0,this.position=e?.position||"above after",this.size=e?.size||"medium"}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),i="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(U_),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(i)})}):e.classList.add(i),e}_updateRenderedContent(e){let i=`${e??""}`.trim();this._isInitialized&&i&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=i),this._content=i}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let i=this._elementRef.nativeElement.classList;i.remove(`mat-badge-${this._color}`),e&&i.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${U_}`);for(let i of Array.from(e))i!==this._badgeElement&&i.remove()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(i,r){i&2&&re("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small",r.size==="small")("mat-badge-medium",r.size==="medium")("mat-badge-large",r.size==="large")("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",ne],disabled:[2,"matBadgeDisabled","disabled",ne],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",ne]}})}return t})(),$_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[Bf,we]})}return t})();var z_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[we]})}return t})();var n0=["knob"],i0=["valueIndicatorContainer"];function r0(t,n){if(t&1&&(R(0,"div",2,1)(2,"div",5)(3,"span",6),oe(4),L()()()),t&2){let e=kn();G(4),qt(e.valueIndicatorText)}}var o0=["trackActive"],s0=["*"];function a0(t,n){if(t&1&&qe(0,"div"),t&2){let e=n.$implicit,i=n.$index,r=kn(3);Ye(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),_i("transform",r._calcTickMarkTransform(i))}}function c0(t,n){if(t&1&&co(0,a0,1,4,"div",8,Iu),t&2){let e=kn(2);lo(e._tickMarks)}}function l0(t,n){if(t&1&&(R(0,"div",6,1),We(2,c0,2,0),L()),t&2){let e=kn();G(2),Ge(e._cachedWidth?2:-1)}}function d0(t,n){if(t&1&&qe(0,"mat-slider-visual-thumb",7),t&2){let e=kn();st("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var M=(function(t){return t[t.START=1]="START",t[t.END=2]="END",t})(M||{}),Ir=(function(t){return t[t.ACTIVE=0]="ACTIVE",t[t.INACTIVE=1]="INACTIVE",t})(Ir||{}),Yf=new _("_MatSlider"),W_=new _("_MatSliderThumb"),u0=new _("_MatSliderRangeThumb"),G_=new _("_MatSliderVisualThumb");var f0=(()=>{class t{_cdr=h(Kt);_ngZone=h(A);_slider=h(Yf);_renderer=h(Mt);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=h(Y).nativeElement;_platform=h(_e);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let i=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(i,"pointermove",this._onPointerMove),r.listen(i,"pointerdown",this._onDragStart),r.listen(i,"pointerup",this._onDragEnd),r.listen(i,"pointerleave",this._onMouseLeave),r.listen(i,"focus",this._onFocus),r.listen(i,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let i=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,i);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===Ke.FADING_IN||e?.state===Ke.VISIBLE}_showRipple(e,i){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===M.START?M.END:M.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!i)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let i=this._getSibling();i._isShowingAnyRipple()||(this._hideValueIndicator(),i._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===M.START?M.END:M.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(i,r){if(i&1&&yi(Gf,5)(n0,5)(i0,5),i&2){let o;pe(o=me())&&(r._ripple=o.first),pe(o=me())&&(r._knob=o.first),pe(o=me())&&(r._valueIndicatorContainer=o.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[On([{provide:G_,useExisting:t}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(i,r){i&1&&(We(0,r0,5,1,"div",2),qe(1,"div",3,0)(3,"div",4)),i&2&&(Ge(r.discrete?0:-1),G(3),st("matRippleDisabled",!0))},dependencies:[Gf],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2})}return t})(),q_=(()=>{class t{_ngZone=h(A);_cdr=h(Kt);_elementRef=h(Y);_dir=h(Ro,{optional:!0});_globalRippleOptions=h(Si,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let i=this._getInput(M.END),r=this._getInput(M.START);i&&(i.disabled=this._disabled),r&&(r.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let i=e==null||isNaN(e)?this._min:e;this._min!==i&&this._updateMin(i)}_min=0;color;disableRipple=!1;_updateMin(e){let i=this._min;this._min=e,this._isRange?this._updateMinRange({old:i,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let i=this._getInput(M.END),r=this._getInput(M.START),o=i.value,s=r.value;r.min=e.new,i.min=Math.max(e.new,r.value),r.max=Math.min(i.max,i.value),r._updateWidthInactive(),i._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(i,r):this._onTranslateXChangeBySideEffect(r,i),o!==i.value&&this._onValueChange(i),s!==r.value&&this._onValueChange(r)}_updateMinNonRange(e){let i=this._getInput(M.END);if(i){let r=i.value;i.min=e,i._updateThumbUIByValue(),this._updateTrackUI(i),r!==i.value&&this._onValueChange(i)}}get max(){return this._max}set max(e){let i=e==null||isNaN(e)?this._max:e;this._max!==i&&this._updateMax(i)}_max=100;_updateMax(e){let i=this._max;this._max=e,this._isRange?this._updateMaxRange({old:i,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let i=this._getInput(M.END),r=this._getInput(M.START),o=i.value,s=r.value;i.max=e.new,r.max=Math.min(e.new,i.value),i.min=r.value,i._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,i):this._onTranslateXChangeBySideEffect(i,r),o!==i.value&&this._onValueChange(i),s!==r.value&&this._onValueChange(r)}_updateMaxNonRange(e){let i=this._getInput(M.END);if(i){let r=i.value;i.max=e,i._updateThumbUIByValue(),this._updateTrackUI(i),r!==i.value&&this._onValueChange(i)}}get step(){return this._step}set step(e){let i=isNaN(e)?this._step:e;this._step!==i&&this._updateStep(i)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(M.END),i=this._getInput(M.START),r=e.value,o=i.value,s=i.value;e.min=this._min,i.max=this._max,e.step=this._step,i.step=this._step,this._platform.SAFARI&&(e.value=e.value,i.value=i.value),e.min=Math.max(this._min,i.value),i.max=Math.min(this._max,e.value),i._updateWidthInactive(),e._updateWidthInactive(),e.value<s?this._onTranslateXChangeBySideEffect(i,e):this._onTranslateXChangeBySideEffect(e,i),r!==e.value&&this._onValueChange(e),o!==i.value&&this._onValueChange(i)}_updateStepNonRange(){let e=this._getInput(M.END);if(e){let i=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),i!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=yt();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=dr(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=h(_e);constructor(){h(tt).load(Mi);let e=this._isRtl();hv(()=>{let i=this._isRtl();i!==e&&(e=i,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(M.END),i=this._getInput(M.START);this._isRange=!!e&&!!i,this._cdr.detectChanges();let r=this._getThumb(M.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,i):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,i){e.initProps(),e.initUI(),i.initProps(),i.initUI(),e._updateMinMax(),i._updateMinMax(),e._updateStaticStyles(),i._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),i._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(M.END),i=this._getInput(M.START);e._setIsLeftThumb(),i._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),i.translateX=i._calcTranslateXByValue(),e._updateStaticStyles(),i._updateStaticStyles(),e._updateWidthInactive(),i._updateWidthInactive(),e._updateThumbUIByValue(),i._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(M.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(M.START)._isActive||this._getThumb(M.END)._isActive}_getValue(e=M.END){let i=this._getInput(e);return i?i.value:this.min}_skipUpdate(){return!!(this._getInput(M.START)?._skipUIUpdate||this._getInput(M.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let i=this._trackActive.nativeElement.style;i.left=e.left,i.right=e.right,i.transformOrigin=e.transformOrigin,i.transform=e.transform}_calcTickMarkTransform(e){let i=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-i:i}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,i){this._hasViewInitialized&&(e._updateThumbUIByValue(),i._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(M.END),i=this._getInput(M.START);e._updateThumbUIByValue(),i._updateThumbUIByValue(),e._updateStaticStyles(),i._updateStaticStyles(),e._updateMinMax(),i._updateMinMax(),e._updateWidthInactive(),i._updateWidthInactive()}else{let e=this._getInput(M.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(M.START),i=this._getInput(M.END);return!e||!i?!1:i.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let i=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(i.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let i=this._getThumb(e.thumbPosition===M.END?M.END:M.START);i._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let i=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(i):e._hostElement.setAttribute("aria-valuetext",i),this.discrete){e.thumbPosition===M.START?this.startValueIndicatorText=i:this.endValueIndicatorText=i;let r=this._getThumb(e.thumbPosition);i.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(M.END),i=this._getInput(M.START);e&&this._updateValueIndicatorUI(e),i&&this._updateValueIndicatorUI(i)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let i=e.getSibling();if(!i||!this._cachedWidth)return;let r=Math.abs(i.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-i.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${i.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let i=this._getValue(),r=Math.max(Math.round((i-this.min)/e),0)+1,o=Math.max(Math.round((this.max-i)/e),0)-1;this._isRtl()?r++:o++,this._tickMarks=Array(r).fill(Ir.ACTIVE).concat(Array(o).fill(Ir.INACTIVE))}_updateTickMarkUIRange(e){let i=this._getValue(),r=this._getValue(M.START),o=Math.max(Math.round((r-this.min)/e),0),s=Math.max(Math.round((i-r)/e)+1,0),a=Math.max(Math.round((this.max-i)/e),0);this._tickMarks=Array(o).fill(Ir.INACTIVE).concat(Array(s).fill(Ir.ACTIVE),Array(a).fill(Ir.INACTIVE))}_getInput(e){if(e===M.END&&this._input)return this._input;if(this._inputs?.length)return e===M.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===M.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,i){let r=i.width/2,o=i.x+r,s=i.y+r,a=e.clientX-o,c=e.clientY-s;return Math.pow(a,2)+Math.pow(c,2)<Math.pow(r,2)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=q({type:t,selectors:[["mat-slider"]],contentQueries:function(i,r,o){if(i&1&&mn(o,W_,5)(o,u0,4),i&2){let s;pe(s=me())&&(r._input=s.first),pe(s=me())&&(r._inputs=s)}},viewQuery:function(i,r){if(i&1&&yi(o0,5)(G_,5),i&2){let o;pe(o=me())&&(r._trackActive=o.first),pe(o=me())&&(r._thumbs=o)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(i,r){i&2&&(Ye("mat-"+(r.color||"primary")),re("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",ne],discrete:[2,"discrete","discrete",ne],showTickMarks:[2,"showTickMarks","showTickMarks",ne],min:[2,"min","min",Oe],color:"color",disableRipple:[2,"disableRipple","disableRipple",ne],max:[2,"max","max",Oe],step:[2,"step","step",Oe],displayWith:"displayWith"},exportAs:["matSlider"],features:[On([{provide:Yf,useExisting:t}])],ngContentSelectors:s0,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(i,r){i&1&&(ke(),ie(0),R(1,"div",2),qe(2,"div",3),R(3,"div",4),qe(4,"div",5,0),L(),We(6,l0,3,1,"div",6),L(),We(7,d0,1,3,"mat-slider-visual-thumb",7),qe(8,"mat-slider-visual-thumb",7)),i&2&&(G(6),Ge(r.showTickMarks?6:-1),G(),Ge(r._isRange?7:-1),G(),st("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText))},dependencies:[f0],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
}
.mdc-slider__value-indicator::after {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})();var h0={provide:S_,useExisting:Dn(()=>Jf),multi:!0};var Jf=(()=>{class t{_ngZone=h(A);_elementRef=h(Y);_cdr=h(Kt);_slider=h(Yf);_platform=h(_e);_listenerCleanups;get value(){return Oe(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let i=e+"";if(!this._hasSetInitialValue){this._initialValue=i;return}this._isActive||this._setValue(i)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new he;dragStart=new he;dragEnd=new he;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=M.END;get min(){return Oe(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return Oe(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return Oe(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return ne(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=Xe("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new Q;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=h(Mt);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let i=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=i,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let i=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,s=Math.floor((this._slider.max-this._slider.min)/o),a=this._slider._isRtl()?1-i/r:i/r,l=Math.round(a*s)/s*(this._slider.max-this._slider.min)+this._slider.min,d=Math.round(l/o)*o,u=this.value;if(d===u){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=d,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let i=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),i)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,i){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(i)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=ce({type:t,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(i,r){i&1&&ct("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),i&2&&Re("aria-valuetext",r._valuetext())},inputs:{value:[2,"value","value",Oe]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[On([h0,{provide:W_,useExisting:t}])]})}return t})();var K_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[wr,we]})}return t})();var m0=(t,n)=>n.label;function g0(t,n){if(t&1&&(R(0,"mat-chip",10),oe(1),L()),t&2){let e=n.$implicit;st("highlighted",!0),G(),qt(e.label)}}var Ec=class t{heading="Sample Web Component";subheading="Angular 22 + Material M3";count=Xe(0);notifications=Xe(3);sliderValue=Xe(40);progress=dr(()=>Math.min(100,this.count()*10));tags=[{label:"Angular 22"},{label:"Material M3"},{label:"Web Component"},{label:"Zoneless"}];increment(){this.count.update(n=>n+1)}decrement(){this.count.update(n=>Math.max(0,n-1))}addNotification(){this.notifications.update(n=>n+1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=q({type:t,selectors:[["app-sample-ui"]],inputs:{heading:"heading",subheading:"subheading"},decls:64,vars:9,consts:[[1,"host"],["color","primary"],[1,"toolbar-title"],[1,"spacer"],["mat-icon-button","","matBadgeColor","warn","matBadgeSize","small",3,"click","matBadge"],[1,"content"],[1,"cards"],["appearance","outlined"],["mat-card-avatar","","color","primary"],[1,"description"],[3,"highlighted"],["mat-card-avatar",""],[1,"counter-display"],[1,"progress-label"],["mode","determinate",3,"value"],["align","end"],["mat-stroked-button","",3,"click","disabled"],["mat-flat-button","","color","primary",3,"click"],["min","0","max","100","step","5",2,"width","100%"],["matSliderThumb","",3,"valueChange","value"],[1,"slider-value"]],template:function(e,i){e&1&&(R(0,"div",0)(1,"mat-toolbar",1)(2,"mat-icon"),oe(3,"widgets"),L(),R(4,"span",2),oe(5),L(),qe(6,"span",3),R(7,"button",4),ct("click",function(){return i.addNotification()}),R(8,"mat-icon"),oe(9,"notifications"),L()()(),R(10,"div",5)(11,"div",6)(12,"mat-card",7)(13,"mat-card-header")(14,"mat-icon",8),oe(15,"info"),L(),R(16,"mat-card-title"),oe(17,"Component Info"),L(),R(18,"mat-card-subtitle"),oe(19),L()(),R(20,"mat-card-content")(21,"p",9),oe(22," This web component is built with Angular\xA022 and Angular Material M3. It is registered as a custom element and can be embedded in any portal. "),L(),R(23,"mat-chip-set"),co(24,g0,2,2,"mat-chip",10,m0),L()()(),R(26,"mat-card",7)(27,"mat-card-header")(28,"mat-icon",11),oe(29,"touch_app"),L(),R(30,"mat-card-title"),oe(31,"Counter"),L(),R(32,"mat-card-subtitle"),oe(33,"Click to interact"),L()(),R(34,"mat-card-content")(35,"div",12),oe(36),L(),R(37,"p",13),oe(38),L(),qe(39,"mat-progress-bar",14),L(),R(40,"mat-card-actions",15)(41,"button",16),ct("click",function(){return i.decrement()}),R(42,"mat-icon"),oe(43,"remove"),L(),oe(44," Decrement "),L(),R(45,"button",17),ct("click",function(){return i.increment()}),R(46,"mat-icon"),oe(47,"add"),L(),oe(48," Increment "),L()()(),R(49,"mat-card",7)(50,"mat-card-header")(51,"mat-icon",11),oe(52,"tune"),L(),R(53,"mat-card-title"),oe(54,"Slider"),L(),R(55,"mat-card-subtitle"),oe(56,"Drag to adjust value"),L()(),R(57,"mat-card-content")(58,"mat-slider",18)(59,"input",19),ct("valueChange",function(o){return i.sliderValue.set(o)}),L()(),R(60,"p",20),oe(61,"Value: "),R(62,"strong"),oe(63),L()()()()()()()),e&2&&(G(5),qt(i.heading),G(2),st("matBadge",i.notifications()),G(12),qt(i.subheading),G(5),lo(i.tags),G(12),qt(i.count()),G(2),fo("Progress: ",i.progress(),"%"),G(),st("value",i.progress()),G(2),st("disabled",i.count()<=0),G(18),st("value",i.sliderValue()),G(4),qt(i.sliderValue()))},dependencies:[Py,Oy,$y,Fy,By,Hy,Vy,Uy,jy,Ly,y_,v_,Zf,T_,C_,L_,Xf,F_,B_,j_,$_,H_,z_,K_,q_,Jf],styles:[".host[_ngcontent-%COMP%]{display:block;font-family:Roboto,sans-serif}mat-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:first-child{margin-right:8px}.toolbar-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.content[_ngcontent-%COMP%]{padding:20px}.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}mat-card-content[_ngcontent-%COMP%]{padding-top:12px!important}.description[_ngcontent-%COMP%]{margin-bottom:14px;line-height:1.5;color:var(--mat-sys-on-surface-variant, #555)}mat-chip-set[_ngcontent-%COMP%]{display:block}.counter-display[_ngcontent-%COMP%]{font-size:56px;font-weight:300;text-align:center;padding:8px 0;color:var(--mat-sys-primary, #1976d2)}.progress-label[_ngcontent-%COMP%]{font-size:13px;color:var(--mat-sys-on-surface-variant, #555);margin-bottom:6px}.slider-value[_ngcontent-%COMP%]{margin-top:8px;font-size:14px}"]})};(async()=>{let t=await Uu({providers:[Du(),Ay()]}),n=Rv(Ec,{injector:t.injector});customElements.define("sample-ui",n)})();
/*! Bundled license information:

@angular/core/fesm2022/_effect-chunk.mjs:
@angular/core/fesm2022/_not_found-chunk.mjs:
@angular/core/fesm2022/primitives-signals.mjs:
@angular/core/fesm2022/primitives-di.mjs:
@angular/core/fesm2022/_pending_tasks-chunk.mjs:
@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
@angular/core/fesm2022/core.mjs:
@angular/common/fesm2022/_platform_location-chunk.mjs:
@angular/common/fesm2022/_xhr-chunk.mjs:
@angular/common/fesm2022/common.mjs:
@angular/platform-browser/fesm2022/_dom_renderer-chunk.mjs:
@angular/platform-browser/fesm2022/_browser-chunk.mjs:
@angular/common/fesm2022/_module-chunk.mjs:
@angular/common/fesm2022/http.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
@angular/elements/fesm2022/elements.mjs:
@angular/animations/fesm2022/_private_export-chunk.mjs:
@angular/animations/fesm2022/_util-chunk.mjs:
@angular/animations/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v22.0.1
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
