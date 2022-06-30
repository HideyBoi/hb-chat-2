var qA=Object.defineProperty,HA=Object.defineProperties;var WA=Object.getOwnPropertyDescriptors;var Ow=Object.getOwnPropertySymbols;var KA=Object.prototype.hasOwnProperty,GA=Object.prototype.propertyIsEnumerable;var Lw=(t,e,n)=>e in t?qA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Zr=(t,e)=>{for(var n in e||(e={}))KA.call(e,n)&&Lw(t,n,e[n]);if(Ow)for(var n of Ow(e))GA.call(e,n)&&Lw(t,n,e[n]);return t},Xu=(t,e)=>HA(t,WA(e));const QA=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};QA();var Re={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=Symbol.for("react.element"),YA=Symbol.for("react.portal"),XA=Symbol.for("react.fragment"),JA=Symbol.for("react.strict_mode"),ZA=Symbol.for("react.profiler"),eR=Symbol.for("react.provider"),tR=Symbol.for("react.context"),nR=Symbol.for("react.forward_ref"),rR=Symbol.for("react.suspense"),iR=Symbol.for("react.memo"),sR=Symbol.for("react.lazy"),Mw=Symbol.iterator;function oR(t){return t===null||typeof t!="object"?null:(t=Mw&&t[Mw]||t["@@iterator"],typeof t=="function"?t:null)}var zI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jI=Object.assign,qI={};function sa(t,e,n){this.props=t,this.context=e,this.refs=qI,this.updater=n||zI}sa.prototype.isReactComponent={};sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function HI(){}HI.prototype=sa.prototype;function Rg(t,e,n){this.props=t,this.context=e,this.refs=qI,this.updater=n||zI}var Ng=Rg.prototype=new HI;Ng.constructor=Rg;jI(Ng,sa.prototype);Ng.isPureReactComponent=!0;var Fw=Array.isArray,WI=Object.prototype.hasOwnProperty,Dg={current:null},KI={key:!0,ref:!0,__self:!0,__source:!0};function GI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)WI.call(e,r)&&!KI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wu,type:t,key:s,ref:o,props:i,_owner:Dg.current}}function aR(t,e){return{$$typeof:wu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pg(t){return typeof t=="object"&&t!==null&&t.$$typeof===wu}function lR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $w=/\/+/g;function Af(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lR(""+t.key):e.toString(36)}function Dc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wu:case YA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Af(o,0):r,Fw(i)?(n="",t!=null&&(n=t.replace($w,"$&/")+"/"),Dc(i,e,n,"",function(u){return u})):i!=null&&(Pg(i)&&(i=aR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($w,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Af(s,a);o+=Dc(s,e,n,l,i)}else if(l=oR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Af(s,a++),o+=Dc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ju(t,e,n){if(t==null)return t;var r=[],i=0;return Dc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Pc={transition:null},cR={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Pc,ReactCurrentOwner:Dg};ae.Children={map:Ju,forEach:function(t,e,n){Ju(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ju(t,function(){e++}),e},toArray:function(t){return Ju(t,function(e){return e})||[]},only:function(t){if(!Pg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=sa;ae.Fragment=XA;ae.Profiler=ZA;ae.PureComponent=Rg;ae.StrictMode=JA;ae.Suspense=rR;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cR;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)WI.call(e,l)&&!KI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:wu,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:tR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eR,_context:t},t.Consumer=t};ae.createElement=GI;ae.createFactory=function(t){var e=GI.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:nR,render:t}};ae.isValidElement=Pg;ae.lazy=function(t){return{$$typeof:sR,_payload:{_status:-1,_result:t},_init:uR}};ae.memo=function(t,e){return{$$typeof:iR,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Pc.transition;Pc.transition={};try{t()}finally{Pc.transition=e}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(t,e){return Wt.current.useCallback(t,e)};ae.useContext=function(t){return Wt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Wt.current.useEffect(t,e)};ae.useId=function(){return Wt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Wt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};ae.useRef=function(t){return Wt.current.useRef(t)};ae.useState=function(t){return Wt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Wt.current.useTransition()};ae.version="18.1.0";Re.exports=ae;var ds=Re.exports,Up={},QI={exports:{}},_n={},YI={exports:{}},XI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,Q){var K=M.length;M.push(Q);e:for(;0<K;){var w=K-1>>>1,I=M[w];if(0<i(I,Q))M[w]=Q,M[K]=I,K=w;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var Q=M[0],K=M.pop();if(K!==Q){M[0]=K;e:for(var w=0,I=M.length,zn=I>>>1;w<zn;){var un=2*(w+1)-1,Zn=M[un],ye=un+1,Ot=M[ye];if(0>i(Zn,K))ye<I&&0>i(Ot,Zn)?(M[w]=Ot,M[ye]=K,w=ye):(M[w]=Zn,M[un]=K,w=un);else if(ye<I&&0>i(Ot,K))M[w]=Ot,M[ye]=K,w=ye;else break e}}return Q}function i(M,Q){var K=M.sortIndex-Q.sortIndex;return K!==0?K:M.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=M)r(u),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(u)}}function S(M){if(v=!1,g(M),!p)if(n(l)!==null)p=!0,Qt(x);else{var Q=n(u);Q!==null&&Pt(S,Q.startTime-M)}}function x(M,Q){p=!1,v&&(v=!1,m(R),R=-1),f=!0;var K=d;try{for(g(Q),h=n(l);h!==null&&(!(h.expirationTime>Q)||M&&!U());){var w=h.callback;if(typeof w=="function"){h.callback=null,d=h.priorityLevel;var I=w(h.expirationTime<=Q);Q=t.unstable_now(),typeof I=="function"?h.callback=I:h===n(l)&&r(l),g(Q)}else r(l);h=n(l)}if(h!==null)var zn=!0;else{var un=n(u);un!==null&&Pt(S,un.startTime-Q),zn=!1}return zn}finally{h=null,d=K,f=!1}}var E=!1,C=null,R=-1,H=5,G=-1;function U(){return!(t.unstable_now()-G<H)}function Y(){if(C!==null){var M=t.unstable_now();G=M;var Q=!0;try{Q=C(!0,M)}finally{Q?te():(E=!1,C=null)}}else E=!1}var te;if(typeof y=="function")te=function(){y(Y)};else if(typeof MessageChannel!="undefined"){var Qe=new MessageChannel,Gt=Qe.port2;Qe.port1.onmessage=Y,te=function(){Gt.postMessage(null)}}else te=function(){k(Y,0)};function Qt(M){C=M,E||(E=!0,te())}function Pt(M,Q){R=k(function(){M(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){p||f||(p=!0,Qt(x))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var Q=3;break;default:Q=d}var K=d;d=Q;try{return M()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,Q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var K=d;d=M;try{return Q()}finally{d=K}},t.unstable_scheduleCallback=function(M,Q,K){var w=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?w+K:w):K=w,M){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=K+I,M={id:c++,callback:Q,priorityLevel:M,startTime:K,expirationTime:I,sortIndex:-1},K>w?(M.sortIndex=K,e(u,M),n(l)===null&&M===n(u)&&(v?(m(R),R=-1):v=!0,Pt(S,K-w))):(M.sortIndex=I,e(l,M),p||f||(p=!0,Qt(x))),M},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(M){var Q=d;return function(){var K=d;d=Q;try{return M.apply(this,arguments)}finally{d=K}}}})(XI);YI.exports=XI;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JI=Re.exports,yn=YI.exports;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ZI=new Set,Cl={};function Bs(t,e){Bo(t,e),Bo(t+"Capture",e)}function Bo(t,e){for(Cl[t]=e,t=0;t<e.length;t++)ZI.add(e[t])}var Fr=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Bp=Object.prototype.hasOwnProperty,hR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uw={},Bw={};function dR(t){return Bp.call(Bw,t)?!0:Bp.call(Uw,t)?!1:hR.test(t)?Bw[t]=!0:(Uw[t]=!0,!1)}function fR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pR(t,e,n,r){if(e===null||typeof e=="undefined"||fR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Og=/[\-:]([a-z])/g;function Lg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Og,Lg);Et[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Og,Lg);Et[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Og,Lg);Et[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mg(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pR(e,n,i,r)&&(n=null),r||i===null?dR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wr=JI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zu=Symbol.for("react.element"),ao=Symbol.for("react.portal"),lo=Symbol.for("react.fragment"),Fg=Symbol.for("react.strict_mode"),Vp=Symbol.for("react.profiler"),eE=Symbol.for("react.provider"),tE=Symbol.for("react.context"),$g=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),jp=Symbol.for("react.suspense_list"),Ug=Symbol.for("react.memo"),ii=Symbol.for("react.lazy"),nE=Symbol.for("react.offscreen"),Vw=Symbol.iterator;function Ca(t){return t===null||typeof t!="object"?null:(t=Vw&&t[Vw]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Rf;function Ya(t){if(Rf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rf=e&&e[1]||""}return`
`+Rf+t}var Nf=!1;function Df(t,e){if(!t||Nf)return"";Nf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ya(t):""}function mR(t){switch(t.tag){case 5:return Ya(t.type);case 16:return Ya("Lazy");case 13:return Ya("Suspense");case 19:return Ya("SuspenseList");case 0:case 2:case 15:return t=Df(t.type,!1),t;case 11:return t=Df(t.type.render,!1),t;case 1:return t=Df(t.type,!0),t;default:return""}}function qp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lo:return"Fragment";case ao:return"Portal";case Vp:return"Profiler";case Fg:return"StrictMode";case zp:return"Suspense";case jp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tE:return(t.displayName||"Context")+".Consumer";case eE:return(t._context.displayName||"Context")+".Provider";case $g:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ug:return e=t.displayName||null,e!==null?e:qp(t.type)||"Memo";case ii:e=t._payload,t=t._init;try{return qp(t(e))}catch{}}return null}function gR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qp(e);case 8:return e===Fg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yR(t){var e=rE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ec(t){t._valueTracker||(t._valueTracker=yR(t))}function iE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function th(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hp(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function zw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sE(t,e){e=e.checked,e!=null&&Mg(t,"checked",e,!1)}function Wp(t,e){sE(t,e);var n=Ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kp(t,e.type,Ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kp(t,e,n){(e!=="number"||th(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xa=Array.isArray;function To(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Xa(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ei(n)}}function oE(t,e){var n=Ei(e.value),r=Ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function aE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?aE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tc,lE=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vR=["Webkit","ms","Moz","O"];Object.keys(sl).forEach(function(t){vR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sl[e]=sl[t]})});function uE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sl.hasOwnProperty(t)&&sl[t]?(""+e).trim():e+"px"}function cE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var wR=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yp(t,e){if(e){if(wR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function Xp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jp=null;function Bg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zp=null,xo=null,bo=null;function Ww(t){if(t=Eu(t)){if(typeof Zp!="function")throw Error(P(280));var e=t.stateNode;e&&(e=sd(e),Zp(t.stateNode,t.type,e))}}function hE(t){xo?bo?bo.push(t):bo=[t]:xo=t}function dE(){if(xo){var t=xo,e=bo;if(bo=xo=null,Ww(t),e)for(t=0;t<e.length;t++)Ww(e[t])}}function fE(t,e){return t(e)}function pE(){}var Pf=!1;function mE(t,e,n){if(Pf)return t(e,n);Pf=!0;try{return fE(t,e,n)}finally{Pf=!1,(xo!==null||bo!==null)&&(pE(),dE())}}function Rl(t,e){var n=t.stateNode;if(n===null)return null;var r=sd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var em=!1;if(Fr)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){em=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{em=!1}function _R(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ol=!1,nh=null,rh=!1,tm=null,IR={onError:function(t){ol=!0,nh=t}};function ER(t,e,n,r,i,s,o,a,l){ol=!1,nh=null,_R.apply(IR,arguments)}function kR(t,e,n,r,i,s,o,a,l){if(ER.apply(this,arguments),ol){if(ol){var u=nh;ol=!1,nh=null}else throw Error(P(198));rh||(rh=!0,tm=u)}}function Vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kw(t){if(Vs(t)!==t)throw Error(P(188))}function SR(t){var e=t.alternate;if(!e){if(e=Vs(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kw(i),t;if(s===r)return Kw(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function yE(t){return t=SR(t),t!==null?vE(t):null}function vE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vE(t);if(e!==null)return e;t=t.sibling}return null}var wE=yn.unstable_scheduleCallback,Gw=yn.unstable_cancelCallback,TR=yn.unstable_shouldYield,xR=yn.unstable_requestPaint,Ve=yn.unstable_now,bR=yn.unstable_getCurrentPriorityLevel,Vg=yn.unstable_ImmediatePriority,_E=yn.unstable_UserBlockingPriority,ih=yn.unstable_NormalPriority,CR=yn.unstable_LowPriority,IE=yn.unstable_IdlePriority,td=null,fr=null;function AR(t){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(td,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:DR,RR=Math.log,NR=Math.LN2;function DR(t){return t>>>=0,t===0?32:31-(RR(t)/NR|0)|0}var nc=64,rc=4194304;function Ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ja(a):(s&=o,s!==0&&(r=Ja(s)))}else o=n&~i,o!==0?r=Ja(o):s!==0&&(r=Ja(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qn(e),i=1<<n,r|=t[n],e&=~i;return r}function PR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=PR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function EE(){var t=nc;return nc<<=1,(nc&4194240)===0&&(nc=64),t}function Of(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _u(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function LR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function kE(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var SE,jg,TE,xE,bE,rm=!1,ic=[],pi=null,mi=null,gi=null,Nl=new Map,Dl=new Map,oi=[],MR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qw(t,e){switch(t){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":mi=null;break;case"mouseover":case"mouseout":gi=null;break;case"pointerover":case"pointerout":Nl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(e.pointerId)}}function Ra(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Eu(e),e!==null&&jg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function FR(t,e,n,r,i){switch(e){case"focusin":return pi=Ra(pi,t,e,n,r,i),!0;case"dragenter":return mi=Ra(mi,t,e,n,r,i),!0;case"mouseover":return gi=Ra(gi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Nl.set(s,Ra(Nl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Dl.set(s,Ra(Dl.get(s)||null,t,e,n,r,i)),!0}return!1}function CE(t){var e=ss(t.target);if(e!==null){var n=Vs(e);if(n!==null){if(e=n.tag,e===13){if(e=gE(n),e!==null){t.blockedOn=e,bE(t.priority,function(){TE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=im(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jp=r,n.target.dispatchEvent(r),Jp=null}else return e=Eu(n),e!==null&&jg(e),t.blockedOn=n,!1;e.shift()}return!0}function Yw(t,e,n){Oc(t)&&n.delete(e)}function $R(){rm=!1,pi!==null&&Oc(pi)&&(pi=null),mi!==null&&Oc(mi)&&(mi=null),gi!==null&&Oc(gi)&&(gi=null),Nl.forEach(Yw),Dl.forEach(Yw)}function Na(t,e){t.blockedOn===e&&(t.blockedOn=null,rm||(rm=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,$R)))}function Pl(t){function e(i){return Na(i,t)}if(0<ic.length){Na(ic[0],t);for(var n=1;n<ic.length;n++){var r=ic[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pi!==null&&Na(pi,t),mi!==null&&Na(mi,t),gi!==null&&Na(gi,t),Nl.forEach(e),Dl.forEach(e),n=0;n<oi.length;n++)r=oi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<oi.length&&(n=oi[0],n.blockedOn===null);)CE(n),n.blockedOn===null&&oi.shift()}var Co=Wr.ReactCurrentBatchConfig,oh=!0;function UR(t,e,n,r){var i=fe,s=Co.transition;Co.transition=null;try{fe=1,qg(t,e,n,r)}finally{fe=i,Co.transition=s}}function BR(t,e,n,r){var i=fe,s=Co.transition;Co.transition=null;try{fe=4,qg(t,e,n,r)}finally{fe=i,Co.transition=s}}function qg(t,e,n,r){if(oh){var i=im(t,e,n,r);if(i===null)qf(t,e,r,ah,n),Qw(t,r);else if(FR(i,t,e,n,r))r.stopPropagation();else if(Qw(t,r),e&4&&-1<MR.indexOf(t)){for(;i!==null;){var s=Eu(i);if(s!==null&&SE(s),s=im(t,e,n,r),s===null&&qf(t,e,r,ah,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qf(t,e,r,null,n)}}var ah=null;function im(t,e,n,r){if(ah=null,t=Bg(r),t=ss(t),t!==null)if(e=Vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ah=t,null}function AE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bR()){case Vg:return 1;case _E:return 4;case ih:case CR:return 16;case IE:return 536870912;default:return 16}default:return 16}}var ci=null,Hg=null,Lc=null;function RE(){if(Lc)return Lc;var t,e=Hg,n=e.length,r,i="value"in ci?ci.value:ci.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Lc=i.slice(t,1<r?1-r:void 0)}function Mc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sc(){return!0}function Xw(){return!1}function In(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sc:Xw,this.isPropagationStopped=Xw,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wg=In(oa),Iu=Oe({},oa,{view:0,detail:0}),VR=In(Iu),Lf,Mf,Da,nd=Oe({},Iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Da&&(Da&&t.type==="mousemove"?(Lf=t.screenX-Da.screenX,Mf=t.screenY-Da.screenY):Mf=Lf=0,Da=t),Lf)},movementY:function(t){return"movementY"in t?t.movementY:Mf}}),Jw=In(nd),zR=Oe({},nd,{dataTransfer:0}),jR=In(zR),qR=Oe({},Iu,{relatedTarget:0}),Ff=In(qR),HR=Oe({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),WR=In(HR),KR=Oe({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GR=In(KR),QR=Oe({},oa,{data:0}),Zw=In(QR),YR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JR[t])?!!e[t]:!1}function Kg(){return ZR}var eN=Oe({},Iu,{key:function(t){if(t.key){var e=YR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kg,charCode:function(t){return t.type==="keypress"?Mc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tN=In(eN),nN=Oe({},nd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),e0=In(nN),rN=Oe({},Iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kg}),iN=In(rN),sN=Oe({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),oN=In(sN),aN=Oe({},nd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lN=In(aN),uN=[9,13,27,32],Gg=Fr&&"CompositionEvent"in window,al=null;Fr&&"documentMode"in document&&(al=document.documentMode);var cN=Fr&&"TextEvent"in window&&!al,NE=Fr&&(!Gg||al&&8<al&&11>=al),t0=String.fromCharCode(32),n0=!1;function DE(t,e){switch(t){case"keyup":return uN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function PE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var uo=!1;function hN(t,e){switch(t){case"compositionend":return PE(e);case"keypress":return e.which!==32?null:(n0=!0,t0);case"textInput":return t=e.data,t===t0&&n0?null:t;default:return null}}function dN(t,e){if(uo)return t==="compositionend"||!Gg&&DE(t,e)?(t=RE(),Lc=Hg=ci=null,uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return NE&&e.locale!=="ko"?null:e.data;default:return null}}var fN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function r0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fN[t.type]:e==="textarea"}function OE(t,e,n,r){hE(r),e=lh(e,"onChange"),0<e.length&&(n=new Wg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ll=null,Ol=null;function pN(t){HE(t,0)}function rd(t){var e=fo(t);if(iE(e))return t}function mN(t,e){if(t==="change")return e}var LE=!1;if(Fr){var $f;if(Fr){var Uf="oninput"in document;if(!Uf){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),Uf=typeof i0.oninput=="function"}$f=Uf}else $f=!1;LE=$f&&(!document.documentMode||9<document.documentMode)}function s0(){ll&&(ll.detachEvent("onpropertychange",ME),Ol=ll=null)}function ME(t){if(t.propertyName==="value"&&rd(Ol)){var e=[];OE(e,Ol,t,Bg(t)),mE(pN,e)}}function gN(t,e,n){t==="focusin"?(s0(),ll=e,Ol=n,ll.attachEvent("onpropertychange",ME)):t==="focusout"&&s0()}function yN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rd(Ol)}function vN(t,e){if(t==="click")return rd(e)}function wN(t,e){if(t==="input"||t==="change")return rd(e)}function _N(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:_N;function Ll(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bp.call(e,i)||!Xn(t[i],e[i]))return!1}return!0}function o0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function a0(t,e){var n=o0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=o0(n)}}function FE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?FE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $E(){for(var t=window,e=th();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=th(t.document)}return e}function Qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IN(t){var e=$E(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&FE(n.ownerDocument.documentElement,n)){if(r!==null&&Qg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=a0(n,s);var o=a0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var EN=Fr&&"documentMode"in document&&11>=document.documentMode,co=null,sm=null,ul=null,om=!1;function l0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;om||co==null||co!==th(r)||(r=co,"selectionStart"in r&&Qg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ul&&Ll(ul,r)||(ul=r,r=lh(sm,"onSelect"),0<r.length&&(e=new Wg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=co)))}function oc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ho={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},Bf={},UE={};Fr&&(UE=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function id(t){if(Bf[t])return Bf[t];if(!ho[t])return t;var e=ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in UE)return Bf[t]=e[n];return t}var BE=id("animationend"),VE=id("animationiteration"),zE=id("animationstart"),jE=id("transitionend"),qE=new Map,u0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Oi(t,e){qE.set(t,e),Bs(e,[t])}for(var Vf=0;Vf<u0.length;Vf++){var zf=u0[Vf],kN=zf.toLowerCase(),SN=zf[0].toUpperCase()+zf.slice(1);Oi(kN,"on"+SN)}Oi(BE,"onAnimationEnd");Oi(VE,"onAnimationIteration");Oi(zE,"onAnimationStart");Oi("dblclick","onDoubleClick");Oi("focusin","onFocus");Oi("focusout","onBlur");Oi(jE,"onTransitionEnd");Bo("onMouseEnter",["mouseout","mouseover"]);Bo("onMouseLeave",["mouseout","mouseover"]);Bo("onPointerEnter",["pointerout","pointerover"]);Bo("onPointerLeave",["pointerout","pointerover"]);Bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TN=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function c0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kR(r,e,void 0,t),t.currentTarget=null}function HE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;c0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;c0(i,a,u),s=l}}}if(rh)throw t=tm,rh=!1,tm=null,t}function Ee(t,e){var n=e[hm];n===void 0&&(n=e[hm]=new Set);var r=t+"__bubble";n.has(r)||(WE(e,t,2,!1),n.add(r))}function jf(t,e,n){var r=0;e&&(r|=4),WE(n,t,r,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Ml(t){if(!t[ac]){t[ac]=!0,ZI.forEach(function(n){n!=="selectionchange"&&(TN.has(n)||jf(n,!1,t),jf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ac]||(e[ac]=!0,jf("selectionchange",!1,e))}}function WE(t,e,n,r){switch(AE(e)){case 1:var i=UR;break;case 4:i=BR;break;default:i=qg}n=i.bind(null,e,n,t),i=void 0,!em||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qf(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ss(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}mE(function(){var u=s,c=Bg(n),h=[];e:{var d=qE.get(t);if(d!==void 0){var f=Wg,p=t;switch(t){case"keypress":if(Mc(n)===0)break e;case"keydown":case"keyup":f=tN;break;case"focusin":p="focus",f=Ff;break;case"focusout":p="blur",f=Ff;break;case"beforeblur":case"afterblur":f=Ff;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Jw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=jR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=iN;break;case BE:case VE:case zE:f=WR;break;case jE:f=oN;break;case"scroll":f=VR;break;case"wheel":f=lN;break;case"copy":case"cut":case"paste":f=GR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=e0}var v=(e&4)!==0,k=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var y=u,g;y!==null;){g=y;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=Rl(y,m),S!=null&&v.push(Fl(y,S,g)))),k)break;y=y.return}0<v.length&&(d=new f(d,p,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Jp&&(p=n.relatedTarget||n.fromElement)&&(ss(p)||p[$r]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=u,p=p?ss(p):null,p!==null&&(k=Vs(p),p!==k||p.tag!==5&&p.tag!==6)&&(p=null)):(f=null,p=u),f!==p)){if(v=Jw,S="onMouseLeave",m="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(v=e0,S="onPointerLeave",m="onPointerEnter",y="pointer"),k=f==null?d:fo(f),g=p==null?d:fo(p),d=new v(S,y+"leave",f,n,c),d.target=k,d.relatedTarget=g,S=null,ss(c)===u&&(v=new v(m,y+"enter",p,n,c),v.target=g,v.relatedTarget=k,S=v),k=S,f&&p)t:{for(v=f,m=p,y=0,g=v;g;g=eo(g))y++;for(g=0,S=m;S;S=eo(S))g++;for(;0<y-g;)v=eo(v),y--;for(;0<g-y;)m=eo(m),g--;for(;y--;){if(v===m||m!==null&&v===m.alternate)break t;v=eo(v),m=eo(m)}v=null}else v=null;f!==null&&h0(h,d,f,v,!1),p!==null&&k!==null&&h0(h,k,p,v,!0)}}e:{if(d=u?fo(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var x=mN;else if(r0(d))if(LE)x=wN;else{x=yN;var E=gN}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=vN);if(x&&(x=x(t,u))){OE(h,x,n,c);break e}E&&E(t,d,u),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Kp(d,"number",d.value)}switch(E=u?fo(u):window,t){case"focusin":(r0(E)||E.contentEditable==="true")&&(co=E,sm=u,ul=null);break;case"focusout":ul=sm=co=null;break;case"mousedown":om=!0;break;case"contextmenu":case"mouseup":case"dragend":om=!1,l0(h,n,c);break;case"selectionchange":if(EN)break;case"keydown":case"keyup":l0(h,n,c)}var C;if(Gg)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else uo?DE(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(NE&&n.locale!=="ko"&&(uo||R!=="onCompositionStart"?R==="onCompositionEnd"&&uo&&(C=RE()):(ci=c,Hg="value"in ci?ci.value:ci.textContent,uo=!0)),E=lh(u,R),0<E.length&&(R=new Zw(R,t,null,n,c),h.push({event:R,listeners:E}),C?R.data=C:(C=PE(n),C!==null&&(R.data=C)))),(C=cN?hN(t,n):dN(t,n))&&(u=lh(u,"onBeforeInput"),0<u.length&&(c=new Zw("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}HE(h,e)})}function Fl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Rl(t,n),s!=null&&r.unshift(Fl(t,s,i)),s=Rl(t,e),s!=null&&r.push(Fl(t,s,i))),t=t.return}return r}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function h0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Rl(n,s),l!=null&&o.unshift(Fl(n,l,a))):i||(l=Rl(n,s),l!=null&&o.push(Fl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xN=/\r\n?/g,bN=/\u0000|\uFFFD/g;function d0(t){return(typeof t=="string"?t:""+t).replace(xN,`
`).replace(bN,"")}function lc(t,e,n){if(e=d0(e),d0(t)!==e&&n)throw Error(P(425))}function uh(){}var am=null,lm=null;function um(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cm=typeof setTimeout=="function"?setTimeout:void 0,CN=typeof clearTimeout=="function"?clearTimeout:void 0,f0=typeof Promise=="function"?Promise:void 0,AN=typeof queueMicrotask=="function"?queueMicrotask:typeof f0!="undefined"?function(t){return f0.resolve(null).then(t).catch(RN)}:cm;function RN(t){setTimeout(function(){throw t})}function Hf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Pl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pl(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function p0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var aa=Math.random().toString(36).slice(2),rr="__reactFiber$"+aa,$l="__reactProps$"+aa,$r="__reactContainer$"+aa,hm="__reactEvents$"+aa,NN="__reactListeners$"+aa,DN="__reactHandles$"+aa;function ss(t){var e=t[rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$r]||n[rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=p0(t);t!==null;){if(n=t[rr])return n;t=p0(t)}return e}t=n,n=t.parentNode}return null}function Eu(t){return t=t[rr]||t[$r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function sd(t){return t[$l]||null}var dm=[],po=-1;function Li(t){return{current:t}}function Se(t){0>po||(t.current=dm[po],dm[po]=null,po--)}function _e(t,e){po++,dm[po]=t.current,t.current=e}var ki={},Rt=Li(ki),sn=Li(!1),ws=ki;function Vo(t,e){var n=t.type.contextTypes;if(!n)return ki;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function on(t){return t=t.childContextTypes,t!=null}function ch(){Se(sn),Se(Rt)}function m0(t,e,n){if(Rt.current!==ki)throw Error(P(168));_e(Rt,e),_e(sn,n)}function KE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,gR(t)||"Unknown",i));return Oe({},n,r)}function hh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ki,ws=Rt.current,_e(Rt,t),_e(sn,sn.current),!0}function g0(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=KE(t,e,ws),r.__reactInternalMemoizedMergedChildContext=t,Se(sn),Se(Rt),_e(Rt,t)):Se(sn),_e(sn,n)}var Tr=null,od=!1,Wf=!1;function GE(t){Tr===null?Tr=[t]:Tr.push(t)}function PN(t){od=!0,GE(t)}function Mi(){if(!Wf&&Tr!==null){Wf=!0;var t=0,e=fe;try{var n=Tr;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tr=null,od=!1}catch(i){throw Tr!==null&&(Tr=Tr.slice(t+1)),wE(Vg,Mi),i}finally{fe=e,Wf=!1}}return null}var ON=Wr.ReactCurrentBatchConfig;function qn(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var dh=Li(null),fh=null,mo=null,Yg=null;function Xg(){Yg=mo=fh=null}function Jg(t){var e=dh.current;Se(dh),t._currentValue=e}function fm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ao(t,e){fh=t,Yg=mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(tn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Yg!==t)if(t={context:t,memoizedValue:e,next:null},mo===null){if(fh===null)throw Error(P(308));mo=t,fh.dependencies={lanes:0,firstContext:t}}else mo=mo.next=t;return e}var Kn=null,si=!1;function Zg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function QE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yi(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,$k(t)?(t=n.interleaved,t===null?(e.next=e,Kn===null?Kn=[n]:Kn.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function Fc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zg(t,n)}}function y0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ph(t,e,n,r){var i=t.updateQueue;si=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,v=a;switch(d=e,f=n,v.tag){case 1:if(p=v.payload,typeof p=="function"){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,d=typeof p=="function"?p.call(f,h,d):p,d==null)break e;h=Oe({},h,d);break e;case 2:si=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Es|=o,t.lanes=o,t.memoizedState=h}}function v0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var YE=new JI.Component().refs;function pm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ad={isMounted:function(t){return(t=t._reactInternals)?Vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=wi(t),s=Or(r,i);s.payload=e,n!=null&&(s.callback=n),yi(t,s),e=Rn(t,i,r),e!==null&&Fc(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=wi(t),s=Or(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),yi(t,s),e=Rn(t,i,r),e!==null&&Fc(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=wi(t),i=Or(n,r);i.tag=2,e!=null&&(i.callback=e),yi(t,i),e=Rn(t,r,n),e!==null&&Fc(e,t,r)}};function w0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ll(n,r)||!Ll(i,s):!0}function XE(t,e,n){var r=!1,i=ki,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(i=on(e)?ws:Rt.current,r=e.contextTypes,s=(r=r!=null)?Vo(t,i):ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ad,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ad.enqueueReplaceState(e,e.state,null)}function mm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=YE,Zg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pn(s):(s=on(e)?ws:Rt.current,i.context=Vo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ad.enqueueReplaceState(i,i.state,null),ph(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var go=[],yo=0,mh=null,gh=0,kn=[],Sn=0,_s=null,Cr=1,Ar="";function Qi(t,e){go[yo++]=gh,go[yo++]=mh,mh=t,gh=e}function JE(t,e,n){kn[Sn++]=Cr,kn[Sn++]=Ar,kn[Sn++]=_s,_s=t;var r=Cr;t=Ar;var i=32-Qn(r)-1;r&=~(1<<i),n+=1;var s=32-Qn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cr=1<<32-Qn(e)+i|n<<i|r,Ar=s+t}else Cr=1<<s|n<<i|r,Ar=t}function ey(t){t.return!==null&&(Qi(t,1),JE(t,1,0))}function ty(t){for(;t===mh;)mh=go[--yo],go[yo]=null,gh=go[--yo],go[yo]=null;for(;t===_s;)_s=kn[--Sn],kn[Sn]=null,Ar=kn[--Sn],kn[Sn]=null,Cr=kn[--Sn],kn[Sn]=null}var mn=null,en=null,be=!1,Wn=null;function ZE(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function I0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,en=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_s!==null?{id:Cr,overflow:Ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,en=null,!0):!1;default:return!1}}function gm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ym(t){if(be){var e=en;if(e){var n=e;if(!I0(t,e)){if(gm(t))throw Error(P(418));e=br(n.nextSibling);var r=mn;e&&I0(t,e)?ZE(r,n):(t.flags=t.flags&-4097|2,be=!1,mn=t)}}else{if(gm(t))throw Error(P(418));t.flags=t.flags&-4097|2,be=!1,mn=t}}}function E0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Pa(t){if(t!==mn)return!1;if(!be)return E0(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!um(t.type,t.memoizedProps)),e&&(e=en)){if(gm(t)){for(t=en;t;)t=br(t.nextSibling);throw Error(P(418))}for(;e;)ZE(t,e),e=br(e.nextSibling)}if(E0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=mn?br(t.stateNode.nextSibling):null;return!0}function zo(){en=mn=null,be=!1}function ny(t){Wn===null?Wn=[t]:Wn.push(t)}function Oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===YE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function uc(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function k0(t){var e=t._init;return e(t._payload)}function ek(t){function e(m,y){if(t){var g=m.deletions;g===null?(m.deletions=[y],m.flags|=16):g.push(y)}}function n(m,y){if(!t)return null;for(;y!==null;)e(m,y),y=y.sibling;return null}function r(m,y){for(m=new Map;y!==null;)y.key!==null?m.set(y.key,y):m.set(y.index,y),y=y.sibling;return m}function i(m,y){return m=Si(m,y),m.index=0,m.sibling=null,m}function s(m,y,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<y?(m.flags|=2,y):g):(m.flags|=2,y)):(m.flags|=1048576,y)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,y,g,S){return y===null||y.tag!==6?(y=Jf(g,m.mode,S),y.return=m,y):(y=i(y,g),y.return=m,y)}function l(m,y,g,S){var x=g.type;return x===lo?c(m,y,g.props.children,S,g.key):y!==null&&(y.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ii&&k0(x)===y.type)?(S=i(y,g.props),S.ref=Oa(m,y,g),S.return=m,S):(S=zc(g.type,g.key,g.props,null,m.mode,S),S.ref=Oa(m,y,g),S.return=m,S)}function u(m,y,g,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==g.containerInfo||y.stateNode.implementation!==g.implementation?(y=Zf(g,m.mode,S),y.return=m,y):(y=i(y,g.children||[]),y.return=m,y)}function c(m,y,g,S,x){return y===null||y.tag!==7?(y=ps(g,m.mode,S,x),y.return=m,y):(y=i(y,g),y.return=m,y)}function h(m,y,g){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Jf(""+y,m.mode,g),y.return=m,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zu:return g=zc(y.type,y.key,y.props,null,m.mode,g),g.ref=Oa(m,null,y),g.return=m,g;case ao:return y=Zf(y,m.mode,g),y.return=m,y;case ii:var S=y._init;return h(m,S(y._payload),g)}if(Xa(y)||Ca(y))return y=ps(y,m.mode,g,null),y.return=m,y;uc(m,y)}return null}function d(m,y,g,S){var x=y!==null?y.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:a(m,y,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zu:return g.key===x?l(m,y,g,S):null;case ao:return g.key===x?u(m,y,g,S):null;case ii:return x=g._init,d(m,y,x(g._payload),S)}if(Xa(g)||Ca(g))return x!==null?null:c(m,y,g,S,null);uc(m,g)}return null}function f(m,y,g,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,a(y,m,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Zu:return m=m.get(S.key===null?g:S.key)||null,l(y,m,S,x);case ao:return m=m.get(S.key===null?g:S.key)||null,u(y,m,S,x);case ii:var E=S._init;return f(m,y,g,E(S._payload),x)}if(Xa(S)||Ca(S))return m=m.get(g)||null,c(y,m,S,x,null);uc(y,S)}return null}function p(m,y,g,S){for(var x=null,E=null,C=y,R=y=0,H=null;C!==null&&R<g.length;R++){C.index>R?(H=C,C=null):H=C.sibling;var G=d(m,C,g[R],S);if(G===null){C===null&&(C=H);break}t&&C&&G.alternate===null&&e(m,C),y=s(G,y,R),E===null?x=G:E.sibling=G,E=G,C=H}if(R===g.length)return n(m,C),be&&Qi(m,R),x;if(C===null){for(;R<g.length;R++)C=h(m,g[R],S),C!==null&&(y=s(C,y,R),E===null?x=C:E.sibling=C,E=C);return be&&Qi(m,R),x}for(C=r(m,C);R<g.length;R++)H=f(C,m,R,g[R],S),H!==null&&(t&&H.alternate!==null&&C.delete(H.key===null?R:H.key),y=s(H,y,R),E===null?x=H:E.sibling=H,E=H);return t&&C.forEach(function(U){return e(m,U)}),be&&Qi(m,R),x}function v(m,y,g,S){var x=Ca(g);if(typeof x!="function")throw Error(P(150));if(g=x.call(g),g==null)throw Error(P(151));for(var E=x=null,C=y,R=y=0,H=null,G=g.next();C!==null&&!G.done;R++,G=g.next()){C.index>R?(H=C,C=null):H=C.sibling;var U=d(m,C,G.value,S);if(U===null){C===null&&(C=H);break}t&&C&&U.alternate===null&&e(m,C),y=s(U,y,R),E===null?x=U:E.sibling=U,E=U,C=H}if(G.done)return n(m,C),be&&Qi(m,R),x;if(C===null){for(;!G.done;R++,G=g.next())G=h(m,G.value,S),G!==null&&(y=s(G,y,R),E===null?x=G:E.sibling=G,E=G);return be&&Qi(m,R),x}for(C=r(m,C);!G.done;R++,G=g.next())G=f(C,m,R,G.value,S),G!==null&&(t&&G.alternate!==null&&C.delete(G.key===null?R:G.key),y=s(G,y,R),E===null?x=G:E.sibling=G,E=G);return t&&C.forEach(function(Y){return e(m,Y)}),be&&Qi(m,R),x}function k(m,y,g,S){if(typeof g=="object"&&g!==null&&g.type===lo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Zu:e:{for(var x=g.key,E=y;E!==null;){if(E.key===x){if(x=g.type,x===lo){if(E.tag===7){n(m,E.sibling),y=i(E,g.props.children),y.return=m,m=y;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ii&&k0(x)===E.type){n(m,E.sibling),y=i(E,g.props),y.ref=Oa(m,E,g),y.return=m,m=y;break e}n(m,E);break}else e(m,E);E=E.sibling}g.type===lo?(y=ps(g.props.children,m.mode,S,g.key),y.return=m,m=y):(S=zc(g.type,g.key,g.props,null,m.mode,S),S.ref=Oa(m,y,g),S.return=m,m=S)}return o(m);case ao:e:{for(E=g.key;y!==null;){if(y.key===E)if(y.tag===4&&y.stateNode.containerInfo===g.containerInfo&&y.stateNode.implementation===g.implementation){n(m,y.sibling),y=i(y,g.children||[]),y.return=m,m=y;break e}else{n(m,y);break}else e(m,y);y=y.sibling}y=Zf(g,m.mode,S),y.return=m,m=y}return o(m);case ii:return E=g._init,k(m,y,E(g._payload),S)}if(Xa(g))return p(m,y,g,S);if(Ca(g))return v(m,y,g,S);uc(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,y!==null&&y.tag===6?(n(m,y.sibling),y=i(y,g),y.return=m,m=y):(n(m,y),y=Jf(g,m.mode,S),y.return=m,m=y),o(m)):n(m,y)}return k}var jo=ek(!0),tk=ek(!1),ku={},pr=Li(ku),Ul=Li(ku),Bl=Li(ku);function os(t){if(t===ku)throw Error(P(174));return t}function ry(t,e){switch(_e(Bl,e),_e(Ul,t),_e(pr,ku),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qp(e,t)}Se(pr),_e(pr,e)}function qo(){Se(pr),Se(Ul),Se(Bl)}function nk(t){os(Bl.current);var e=os(pr.current),n=Qp(e,t.type);e!==n&&(_e(Ul,t),_e(pr,n))}function iy(t){Ul.current===t&&(Se(pr),Se(Ul))}var Ne=Li(0);function yh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kf=[];function sy(){for(var t=0;t<Kf.length;t++)Kf[t]._workInProgressVersionPrimary=null;Kf.length=0}var $c=Wr.ReactCurrentDispatcher,Gf=Wr.ReactCurrentBatchConfig,Is=0,Pe=null,Ye=null,it=null,vh=!1,cl=!1,Vl=0,LN=0;function Tt(){throw Error(P(321))}function oy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function ay(t,e,n,r,i,s){if(Is=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$c.current=t===null||t.memoizedState===null?UN:BN,t=n(r,i),cl){s=0;do{if(cl=!1,Vl=0,25<=s)throw Error(P(301));s+=1,it=Ye=null,e.updateQueue=null,$c.current=VN,t=n(r,i)}while(cl)}if($c.current=wh,e=Ye!==null&&Ye.next!==null,Is=0,it=Ye=Pe=null,vh=!1,e)throw Error(P(300));return t}function ly(){var t=Vl!==0;return Vl=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Pe.memoizedState=it=t:it=it.next=t,it}function On(){if(Ye===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=it===null?Pe.memoizedState:it.next;if(e!==null)it=e,Ye=t;else{if(t===null)throw Error(P(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},it===null?Pe.memoizedState=it=t:it=it.next=t}return it}function zl(t,e){return typeof e=="function"?e(t):e}function Qf(t){var e=On(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Is&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Pe.lanes|=c,Es|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Xn(r,e.memoizedState)||(tn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Es|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yf(t){var e=On(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Xn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function rk(){}function ik(t,e){var n=Pe,r=On(),i=e(),s=!Xn(r.memoizedState,i);if(s&&(r.memoizedState=i,tn=!0),r=r.queue,uy(ak.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,jl(9,ok.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(P(349));(Is&30)!==0||sk(n,e,i)}return i}function sk(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ok(t,e,n,r){e.value=n,e.getSnapshot=r,lk(e)&&Rn(t,1,-1)}function ak(t,e,n){return n(function(){lk(e)&&Rn(t,1,-1)})}function lk(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function S0(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zl,lastRenderedState:t},e.queue=t,t=t.dispatch=$N.bind(null,Pe,t),[e.memoizedState,t]}function jl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function uk(){return On().memoizedState}function Uc(t,e,n,r){var i=tr();Pe.flags|=t,i.memoizedState=jl(1|e,n,void 0,r===void 0?null:r)}function ld(t,e,n,r){var i=On();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&oy(r,o.deps)){i.memoizedState=jl(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=jl(1|e,n,s,r)}function T0(t,e){return Uc(8390656,8,t,e)}function uy(t,e){return ld(2048,8,t,e)}function ck(t,e){return ld(4,2,t,e)}function hk(t,e){return ld(4,4,t,e)}function dk(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fk(t,e,n){return n=n!=null?n.concat([t]):null,ld(4,4,dk.bind(null,e,t),n)}function cy(){}function pk(t,e){var n=On();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mk(t,e){var n=On();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gk(t,e,n){return(Is&21)===0?(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n):(Xn(n,e)||(n=EE(),Pe.lanes|=n,Es|=n,t.baseState=!0),e)}function MN(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Gf.transition;Gf.transition={};try{t(!1),e()}finally{fe=n,Gf.transition=r}}function yk(){return On().memoizedState}function FN(t,e,n){var r=wi(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vk(t)?wk(e,n):(_k(t,e,n),n=jt(),t=Rn(t,r,n),t!==null&&Ik(t,e,r))}function $N(t,e,n){var r=wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vk(t))wk(e,i);else{_k(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Xn(a,o))return}catch{}finally{}n=jt(),t=Rn(t,r,n),t!==null&&Ik(t,e,r)}}function vk(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function wk(t,e){cl=vh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _k(t,e,n){$k(t)?(t=e.interleaved,t===null?(n.next=n,Kn===null?Kn=[e]:Kn.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function Ik(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zg(t,n)}}var wh={readContext:Pn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},UN={readContext:Pn,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:T0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4194308,4,dk.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uc(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FN.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:S0,useDebugValue:cy,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=S0(!1),e=t[0];return t=MN.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=tr();if(be){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),Ze===null)throw Error(P(349));(Is&30)!==0||sk(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,T0(ak.bind(null,r,s,t),[t]),r.flags|=2048,jl(9,ok.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=Ze.identifierPrefix;if(be){var n=Ar,r=Cr;n=(r&~(1<<32-Qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BN={readContext:Pn,useCallback:pk,useContext:Pn,useEffect:uy,useImperativeHandle:fk,useInsertionEffect:ck,useLayoutEffect:hk,useMemo:mk,useReducer:Qf,useRef:uk,useState:function(){return Qf(zl)},useDebugValue:cy,useDeferredValue:function(t){var e=On();return gk(e,Ye.memoizedState,t)},useTransition:function(){var t=Qf(zl)[0],e=On().memoizedState;return[t,e]},useMutableSource:rk,useSyncExternalStore:ik,useId:yk,unstable_isNewReconciler:!1},VN={readContext:Pn,useCallback:pk,useContext:Pn,useEffect:uy,useImperativeHandle:fk,useInsertionEffect:ck,useLayoutEffect:hk,useMemo:mk,useReducer:Yf,useRef:uk,useState:function(){return Yf(zl)},useDebugValue:cy,useDeferredValue:function(t){var e=On();return Ye===null?e.memoizedState=t:gk(e,Ye.memoizedState,t)},useTransition:function(){var t=Yf(zl)[0],e=On().memoizedState;return[t,e]},useMutableSource:rk,useSyncExternalStore:ik,useId:yk,unstable_isNewReconciler:!1};function hy(t,e){try{var n="",r=e;do n+=mR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function vm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zN=typeof WeakMap=="function"?WeakMap:Map;function Ek(t,e,n){n=Or(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ih||(Ih=!0,bm=r),vm(t,e)},n}function kk(t,e,n){n=Or(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vm(t,e),typeof r!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function x0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tD.bind(null,t,e,n),e.then(t,t))}function b0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function C0(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Or(-1,1),e.tag=2,yi(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Sk,wm,Tk,xk;Sk=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wm=function(){};Tk=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,os(pr.current);var s=null;switch(n){case"input":i=Hp(t,i),r=Hp(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=Gp(t,i),r=Gp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uh)}Yp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};xk=function(t,e,n,r){n!==r&&(e.flags|=4)};function La(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function jN(t,e,n){var r=e.pendingProps;switch(ty(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return on(e.type)&&ch(),xt(e),null;case 3:return r=e.stateNode,qo(),Se(sn),Se(Rt),sy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Wn!==null&&(Rm(Wn),Wn=null))),wm(t,e),xt(e),null;case 5:iy(e);var i=os(Bl.current);if(n=e.type,t!==null&&e.stateNode!=null)Tk(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return xt(e),null}if(t=os(pr.current),Pa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rr]=e,r[$l]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Za.length;i++)Ee(Za[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":zw(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":qw(r,s),Ee("invalid",r)}Yp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&lc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lc(r.textContent,a,t),i=["children",""+a]):Cl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":ec(r),jw(r,s,!0);break;case"textarea":ec(r),Hw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=aE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rr]=e,t[$l]=r,Sk(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xp(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Za.length;i++)Ee(Za[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":zw(t,r),i=Hp(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":qw(t,r),i=Gp(t,r),Ee("invalid",t);break;default:i=r}Yp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Al(t,l):typeof l=="number"&&Al(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ee("scroll",t):l!=null&&Mg(t,s,l,o))}switch(n){case"input":ec(t),jw(t,r,!1);break;case"textarea":ec(t),Hw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ei(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?To(t,!!r.multiple,s,!1):r.defaultValue!=null&&To(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)xk(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=os(Bl.current),os(pr.current),Pa(e)){if(r=e.stateNode,n=e.memoizedProps,r[rr]=e,(s=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:lc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rr]=e,e.stateNode=r}return xt(e),null;case 13:if(Se(Ne),r=e.memoizedState,be&&en!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=en;r;)r=br(r.nextSibling);return zo(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=Pa(e),t===null){if(!r)throw Error(P(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(P(317));r[rr]=e}else zo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return xt(e),null}return Wn!==null&&(Rm(Wn),Wn=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?Pa(e):n=t.memoizedState!==null,r!==n&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Ne.current&1)!==0?Je===0&&(Je=3):yy())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return qo(),wm(t,e),t===null&&Ml(e.stateNode.containerInfo),xt(e),null;case 10:return Jg(e.type._context),xt(e),null;case 17:return on(e.type)&&ch(),xt(e),null;case 19:if(Se(Ne),s=e.memoizedState,s===null)return xt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)La(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=yh(t),o!==null){for(e.flags|=128,La(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>Ho&&(e.flags|=128,r=!0,La(s,!1),e.lanes=4194304)}else{if(!r)if(t=yh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),La(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return xt(e),null}else 2*Ve()-s.renderingStartTime>Ho&&n!==1073741824&&(e.flags|=128,r=!0,La(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Ne.current,_e(Ne,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return gy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(hn&1073741824)!==0&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}var qN=Wr.ReactCurrentOwner,tn=!1;function Mt(t,e,n,r){e.child=t===null?tk(e,null,n,r):jo(e,t.child,n,r)}function A0(t,e,n,r,i){n=n.render;var s=e.ref;return Ao(e,i),r=ay(t,e,n,r,s,i),n=ly(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ur(t,e,i)):(be&&n&&ey(e),e.flags|=1,Mt(t,e,r,i),e.child)}function R0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bk(t,e,s,r,i)):(t=zc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ll,n(o,r)&&t.ref===e.ref)return Ur(t,e,i)}return e.flags|=1,t=Si(s,r),t.ref=e.ref,t.return=e,e.child=t}function bk(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ll(s,r)&&t.ref===e.ref)if(tn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(tn=!0);else return e.lanes=t.lanes,Ur(t,e,i)}return _m(t,e,n,r,i)}function Ck(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(wo,hn),hn|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(wo,hn),hn|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(wo,hn),hn|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(wo,hn),hn|=r;return Mt(t,e,i,n),e.child}function Ak(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _m(t,e,n,r,i){var s=on(n)?ws:Rt.current;return s=Vo(e,s),Ao(e,i),n=ay(t,e,n,r,s,i),r=ly(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ur(t,e,i)):(be&&r&&ey(e),e.flags|=1,Mt(t,e,n,i),e.child)}function N0(t,e,n,r,i){if(on(n)){var s=!0;hh(e)}else s=!1;if(Ao(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),XE(e,n,r),mm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=on(n)?ws:Rt.current,u=Vo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_0(e,o,r,u),si=!1;var d=e.memoizedState;o.state=d,ph(e,r,o,i),l=e.memoizedState,a!==r||d!==l||sn.current||si?(typeof c=="function"&&(pm(e,n,c,r),l=e.memoizedState),(a=si||w0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,QE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=on(n)?ws:Rt.current,l=Vo(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&_0(e,o,r,l),si=!1,d=e.memoizedState,o.state=d,ph(e,r,o,i);var p=e.memoizedState;a!==h||d!==p||sn.current||si?(typeof f=="function"&&(pm(e,n,f,r),p=e.memoizedState),(u=si||w0(e,n,u,r,d,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Im(t,e,n,r,s,i)}function Im(t,e,n,r,i,s){Ak(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&g0(e,n,!1),Ur(t,e,s);r=e.stateNode,qN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jo(e,t.child,null,s),e.child=jo(e,null,a,s)):Mt(t,e,a,s),e.memoizedState=r.state,i&&g0(e,n,!0),e.child}function Rk(t){var e=t.stateNode;e.pendingContext?m0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&m0(t,e.context,!1),ry(t,e.containerInfo)}function D0(t,e,n,r,i){return zo(),ny(i),e.flags|=256,Mt(t,e,n,r),e.child}var cc={dehydrated:null,treeContext:null,retryLane:0};function hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function P0(t,e){return{baseLanes:t.baseLanes|e,cachePool:null,transitions:t.transitions}}function Nk(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ne,i&1),t===null)return ym(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Sh(i,r,0,null),t=ps(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hc(n),e.memoizedState=cc,t):Em(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,dc(t,e,n,Error(P(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sh({mode:"visible",children:r.children},i,0,null),s=ps(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&jo(e,t.child,null,n),e.child.memoizedState=hc(n),e.memoizedState=cc,s);if((e.mode&1)===0)e=dc(t,e,n,null);else if(a.data==="$!")e=dc(t,e,n,Error(P(419)));else if(r=(n&t.childLanes)!==0,tn||r){if(r=Ze,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,Rn(t,r,-1))}yy(),e=dc(t,e,n,Error(P(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=nD.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,en=br(a.nextSibling),mn=e,be=!0,Wn=null,n!==null&&(kn[Sn++]=Cr,kn[Sn++]=Ar,kn[Sn++]=_s,Cr=n.id,Ar=n.overflow,_s=e),e=Em(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=L0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?hc(n):P0(i,n),s.childLanes=t.childLanes&~n,e.memoizedState=cc,r):(n=O0(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=L0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?hc(n):P0(i,n),s.childLanes=t.childLanes&~n,e.memoizedState=cc,r):(n=O0(t,e,r.children,n),e.memoizedState=null,n)}function Em(t,e){return e=Sh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function O0(t,e,n,r){var i=t.child;return t=i.sibling,n=Si(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function L0(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=Si(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=Si(o,r):(r=ps(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function dc(t,e,n,r){return r!==null&&ny(r),jo(e,t.child,null,n),t=Em(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function M0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fm(t.return,e,n)}function Xf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Dk(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Mt(t,e,r.children,n),r=Ne.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&M0(t,n,e);else if(t.tag===19)M0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ne,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xf(e,!0,n,null,s);break;case"together":Xf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Es|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HN(t,e,n){switch(e.tag){case 3:Rk(e),zo();break;case 5:nk(e);break;case 1:on(e.type)&&hh(e);break;case 4:ry(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(dh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ne,Ne.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Nk(t,e,n):(_e(Ne,Ne.current&1),t=Ur(t,e,n),t!==null?t.sibling:null);_e(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Dk(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,Ck(t,e,n)}return Ur(t,e,n)}function WN(t,e){switch(ty(e),e.tag){case 1:return on(e.type)&&ch(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qo(),Se(sn),Se(Rt),sy(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return iy(e),null;case 13:if(Se(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Ne),null;case 4:return qo(),null;case 10:return Jg(e.type._context),null;case 22:case 23:return gy(),null;case 24:return null;default:return null}}var fc=!1,bt=!1,KN=typeof WeakSet=="function"?WeakSet:Set,V=null;function vo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function km(t,e,n){try{n()}catch(r){Le(t,e,r)}}var F0=!1;function GN(t,e){if(am=oh,t=$E(),Qg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lm={focusedElem:t,selectionRange:n},oh=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var p=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,k=p.memoizedState,m=e.stateNode,y=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:qn(e.type,v),k);m.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var g=e.stateNode.containerInfo;if(g.nodeType===1)g.textContent="";else if(g.nodeType===9){var S=g.body;S!=null&&(S.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){Le(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return p=F0,F0=!1,p}function hl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&km(e,n,s)}i=i.next}while(i!==r)}}function ud(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pk(t){var e=t.alternate;e!==null&&(t.alternate=null,Pk(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rr],delete e[$l],delete e[hm],delete e[NN],delete e[DN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ok(t){return t.tag===5||t.tag===3||t.tag===4}function $0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ok(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uh));else if(r!==4&&(t=t.child,t!==null))for(Tm(t,e,n),t=t.sibling;t!==null;)Tm(t,e,n),t=t.sibling}function xm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xm(t,e,n),t=t.sibling;t!==null;)xm(t,e,n),t=t.sibling}var pt=null,Hn=!1;function ei(t,e,n){for(n=n.child;n!==null;)Lk(t,e,n),n=n.sibling}function Lk(t,e,n){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(td,n)}catch{}switch(n.tag){case 5:bt||vo(n,e);case 6:var r=pt,i=Hn;pt=null,ei(t,e,n),pt=r,Hn=i,pt!==null&&(Hn?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(Hn?(t=pt,n=n.stateNode,t.nodeType===8?Hf(t.parentNode,n):t.nodeType===1&&Hf(t,n),Pl(t)):Hf(pt,n.stateNode));break;case 4:r=pt,i=Hn,pt=n.stateNode.containerInfo,Hn=!0,ei(t,e,n),pt=r,Hn=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&km(n,e,o),i=i.next}while(i!==r)}ei(t,e,n);break;case 1:if(!bt&&(vo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}ei(t,e,n);break;case 21:ei(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,ei(t,e,n),bt=r):ei(t,e,n);break;default:ei(t,e,n)}}function U0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KN),e.forEach(function(r){var i=rD.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,Hn=!1;break e;case 3:pt=a.stateNode.containerInfo,Hn=!0;break e;case 4:pt=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(pt===null)throw Error(P(160));Lk(s,o,i),pt=null,Hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mk(e,t),e=e.sibling}function Mk(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),er(t),r&4){try{hl(3,t,t.return),ud(3,t)}catch(p){Le(t,t.return,p)}try{hl(5,t,t.return)}catch(p){Le(t,t.return,p)}}break;case 1:jn(e,t),er(t),r&512&&n!==null&&vo(n,n.return);break;case 5:if(jn(e,t),er(t),r&512&&n!==null&&vo(n,n.return),t.flags&32){var i=t.stateNode;try{Al(i,"")}catch(p){Le(t,t.return,p)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sE(i,s),Xp(a,o);var u=Xp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?cE(i,h):c==="dangerouslySetInnerHTML"?lE(i,h):c==="children"?Al(i,h):Mg(i,c,h,u)}switch(a){case"input":Wp(i,s);break;case"textarea":oE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?To(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?To(i,!!s.multiple,s.defaultValue,!0):To(i,!!s.multiple,s.multiple?[]:"",!1))}i[$l]=s}catch(p){Le(t,t.return,p)}}break;case 6:if(jn(e,t),er(t),r&4){if(t.stateNode===null)throw Error(P(162));u=t.stateNode,c=t.memoizedProps;try{u.nodeValue=c}catch(p){Le(t,t.return,p)}}break;case 3:if(jn(e,t),er(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pl(e.containerInfo)}catch(p){Le(t,t.return,p)}break;case 4:jn(e,t),er(t);break;case 13:jn(e,t),er(t),u=t.child,u.flags&8192&&u.memoizedState!==null&&(u.alternate===null||u.alternate.memoizedState===null)&&(py=Ve()),r&4&&U0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(c=bt)||u,jn(e,t),bt=c):jn(e,t),er(t),r&8192){c=t.memoizedState!==null;e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uE("display",o))}catch(p){Le(t,t.return,p)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(p){Le(t,t.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}if(c&&!u&&(t.mode&1)!==0)for(V=t,t=t.child;t!==null;){for(u=V=t;V!==null;){switch(c=V,h=c.child,c.tag){case 0:case 11:case 14:case 15:hl(4,c,c.return);break;case 1:if(vo(c,c.return),s=c.stateNode,typeof s.componentWillUnmount=="function"){d=c,f=c.return;try{i=d,s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(p){Le(d,f,p)}}break;case 5:vo(c,c.return);break;case 22:if(c.memoizedState!==null){V0(u);continue}}h!==null?(h.return=c,V=h):V0(u)}t=t.sibling}}break;case 19:jn(e,t),er(t),r&4&&U0(t);break;case 21:break;default:jn(e,t),er(t)}}function er(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ok(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Al(i,""),r.flags&=-33);var s=$0(t);xm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$0(t);Tm(t,a,o);break;default:throw Error(P(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QN(t,e,n){V=t,Fk(t)}function Fk(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||bt;a=fc;var u=bt;if(fc=o,(bt=l)&&!u)for(V=i;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?z0(i):l!==null?(l.return=o,V=l):z0(i);for(;s!==null;)V=s,Fk(s),s=s.sibling;V=i,fc=a,bt=u}B0(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,V=s):B0(t)}}function B0(t){for(;V!==null;){var e=V;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:bt||ud(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&v0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}v0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Pl(h)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(P(163))}bt||e.flags&512&&Sm(e)}catch(d){Le(e,e.return,d)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function V0(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function z0(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ud(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{Sm(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{Sm(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var YN=Math.ceil,_h=Wr.ReactCurrentDispatcher,dy=Wr.ReactCurrentOwner,An=Wr.ReactCurrentBatchConfig,he=0,Ze=null,We=null,vt=0,hn=0,wo=Li(0),Je=0,ql=null,Es=0,cd=0,fy=0,dl=null,Zt=null,py=0,Ho=1/0,Sr=null,Ih=!1,bm=null,vi=null,pc=!1,hi=null,Eh=0,fl=0,Cm=null,Bc=-1,Vc=0;function jt(){return(he&6)!==0?Ve():Bc!==-1?Bc:Bc=Ve()}function wi(t){return(t.mode&1)===0?1:(he&2)!==0&&vt!==0?vt&-vt:ON.transition!==null?(Vc===0&&(Vc=EE()),Vc):(t=fe,t!==0||(t=window.event,t=t===void 0?16:AE(t.type)),t)}function Rn(t,e,n){if(50<fl)throw fl=0,Cm=null,Error(P(185));var r=hd(t,e);return r===null?null:(_u(r,e,n),((he&2)===0||r!==Ze)&&(r===Ze&&((he&2)===0&&(cd|=e),Je===4&&ai(r,vt)),an(r,n),e===1&&he===0&&(t.mode&1)===0&&(Ho=Ve()+500,od&&Mi())),r)}function hd(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function $k(t){return(Ze!==null||Kn!==null)&&(t.mode&1)!==0&&(he&2)===0}function an(t,e){var n=t.callbackNode;OR(t,e);var r=sh(t,t===Ze?vt:0);if(r===0)n!==null&&Gw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gw(n),e===1)t.tag===0?PN(j0.bind(null,t)):GE(j0.bind(null,t)),AN(function(){he===0&&Mi()}),n=null;else{switch(kE(r)){case 1:n=Vg;break;case 4:n=_E;break;case 16:n=ih;break;case 536870912:n=IE;break;default:n=ih}n=Wk(n,Uk.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uk(t,e){if(Bc=-1,Vc=0,(he&6)!==0)throw Error(P(327));var n=t.callbackNode;if(Ro()&&t.callbackNode!==n)return null;var r=sh(t,t===Ze?vt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=kh(t,r);else{e=r;var i=he;he|=2;var s=Vk();(Ze!==t||vt!==e)&&(Sr=null,Ho=Ve()+500,fs(t,e));do try{ZN();break}catch(a){Bk(t,a)}while(1);Xg(),_h.current=s,he=i,We!==null?e=0:(Ze=null,vt=0,e=Je)}if(e!==0){if(e===2&&(i=nm(t),i!==0&&(r=i,e=Am(t,i))),e===1)throw n=ql,fs(t,0),ai(t,r),an(t,Ve()),n;if(e===6)ai(t,r);else{if(i=t.current.alternate,(r&30)===0&&!XN(i)&&(e=kh(t,r),e===2&&(s=nm(t),s!==0&&(r=s,e=Am(t,s))),e===1))throw n=ql,fs(t,0),ai(t,r),an(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Yi(t,Zt,Sr);break;case 3:if(ai(t,r),(r&130023424)===r&&(e=py+500-Ve(),10<e)){if(sh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cm(Yi.bind(null,t,Zt,Sr),e);break}Yi(t,Zt,Sr);break;case 4:if(ai(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YN(r/1960))-r,10<r){t.timeoutHandle=cm(Yi.bind(null,t,Zt,Sr),r);break}Yi(t,Zt,Sr);break;case 5:Yi(t,Zt,Sr);break;default:throw Error(P(329))}}}return an(t,Ve()),t.callbackNode===n?Uk.bind(null,t):null}function Am(t,e){var n=dl;return t.current.memoizedState.isDehydrated&&(fs(t,e).flags|=256),t=kh(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Rm(e)),t}function Rm(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function XN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ai(t,e){for(e&=~fy,e&=~cd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),r=1<<n;t[n]=-1,e&=~r}}function j0(t){if((he&6)!==0)throw Error(P(327));Ro();var e=sh(t,0);if((e&1)===0)return an(t,Ve()),null;var n=kh(t,e);if(t.tag!==0&&n===2){var r=nm(t);r!==0&&(e=r,n=Am(t,r))}if(n===1)throw n=ql,fs(t,0),ai(t,e),an(t,Ve()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yi(t,Zt,Sr),an(t,Ve()),null}function my(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Ho=Ve()+500,od&&Mi())}}function ks(t){hi!==null&&hi.tag===0&&(he&6)===0&&Ro();var e=he;he|=1;var n=An.transition,r=fe;try{if(An.transition=null,fe=1,t)return t()}finally{fe=r,An.transition=n,he=e,(he&6)===0&&Mi()}}function gy(){hn=wo.current,Se(wo)}function fs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,CN(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(ty(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ch();break;case 3:qo(),Se(sn),Se(Rt),sy();break;case 5:iy(r);break;case 4:qo();break;case 13:Se(Ne);break;case 19:Se(Ne);break;case 10:Jg(r.type._context);break;case 22:case 23:gy()}n=n.return}if(Ze=t,We=t=Si(t.current,null),vt=hn=e,Je=0,ql=null,fy=cd=Es=0,Zt=dl=null,Kn!==null){for(e=0;e<Kn.length;e++)if(n=Kn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kn=null}return t}function Bk(t,e){do{var n=We;try{if(Xg(),$c.current=wh,vh){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vh=!1}if(Is=0,it=Ye=Pe=null,cl=!1,Vl=0,dy.current=null,n===null||n.return===null){Je=1,ql=e,We=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=b0(o);if(f!==null){f.flags&=-257,C0(f,o,a,s,e),f.mode&1&&x0(s,u,e),e=f,l=u;var p=e.updateQueue;if(p===null){var v=new Set;v.add(l),e.updateQueue=v}else p.add(l);break e}else{if((e&1)===0){x0(s,u,e),yy();break e}l=Error(P(426))}}else if(be&&a.mode&1){var k=b0(o);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),C0(k,o,a,s,e),ny(l);break e}}s=l,Je!==4&&(Je=2),dl===null?dl=[s]:dl.push(s),l=hy(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var m=Ek(a,l,e);y0(a,m);break e;case 1:s=l;var y=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vi===null||!vi.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var S=kk(a,s,e);y0(a,S);break e}}a=a.return}while(a!==null)}jk(n)}catch(x){e=x,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function Vk(){var t=_h.current;return _h.current=wh,t===null?wh:t}function yy(){(Je===0||Je===3||Je===2)&&(Je=4),Ze===null||(Es&268435455)===0&&(cd&268435455)===0||ai(Ze,vt)}function kh(t,e){var n=he;he|=2;var r=Vk();(Ze!==t||vt!==e)&&(Sr=null,fs(t,e));do try{JN();break}catch(i){Bk(t,i)}while(1);if(Xg(),he=n,_h.current=r,We!==null)throw Error(P(261));return Ze=null,vt=0,Je}function JN(){for(;We!==null;)zk(We)}function ZN(){for(;We!==null&&!TR();)zk(We)}function zk(t){var e=Hk(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?jk(t):We=e,dy.current=null}function jk(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=jN(n,e,hn),n!==null){We=n;return}}else{if(n=WN(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,We=null;return}}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Je===0&&(Je=5)}function Yi(t,e,n){var r=fe,i=An.transition;try{An.transition=null,fe=1,eD(t,e,n,r)}finally{An.transition=i,fe=r}return null}function eD(t,e,n,r){do Ro();while(hi!==null);if((he&6)!==0)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LR(t,s),t===Ze&&(We=Ze=null,vt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||pc||(pc=!0,Wk(ih,function(){return Ro(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=An.transition,An.transition=null;var o=fe;fe=1;var a=he;he|=4,dy.current=null,GN(t,n),Mk(n,t),IN(lm),oh=!!am,lm=am=null,t.current=n,QN(n),xR(),he=a,fe=o,An.transition=s}else t.current=n;if(pc&&(pc=!1,hi=t,Eh=i),s=t.pendingLanes,s===0&&(vi=null),AR(n.stateNode),an(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)r(e[n]);if(Ih)throw Ih=!1,t=bm,bm=null,t;return(Eh&1)!==0&&t.tag!==0&&Ro(),s=t.pendingLanes,(s&1)!==0?t===Cm?fl++:(fl=0,Cm=t):fl=0,Mi(),null}function Ro(){if(hi!==null){var t=kE(Eh),e=An.transition,n=fe;try{if(An.transition=null,fe=16>t?16:t,hi===null)var r=!1;else{if(t=hi,hi=null,Eh=0,(he&6)!==0)throw Error(P(331));var i=he;for(he|=4,V=t.current;V!==null;){var s=V,o=s.child;if((V.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:hl(8,c,s)}var h=c.child;if(h!==null)h.return=c,V=h;else for(;V!==null;){c=V;var d=c.sibling,f=c.return;if(Pk(c),c===u){V=null;break}if(d!==null){d.return=f,V=d;break}V=f}}}var p=s.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}V=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:hl(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,V=m;break e}V=s.return}}var y=t.current;for(V=y;V!==null;){o=V;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,V=g;else e:for(o=y;V!==null;){if(a=V,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ud(9,a)}}catch(x){Le(a,a.return,x)}if(a===o){V=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,V=S;break e}V=a.return}}if(he=i,Mi(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(td,t)}catch{}r=!0}return r}finally{fe=n,An.transition=e}}return!1}function q0(t,e,n){e=hy(n,e),e=Ek(t,e,1),yi(t,e),e=jt(),t=hd(t,1),t!==null&&(_u(t,1,e),an(t,e))}function Le(t,e,n){if(t.tag===3)q0(t,t,n);else for(;e!==null;){if(e.tag===3){q0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vi===null||!vi.has(r))){t=hy(n,t),t=kk(e,t,1),yi(e,t),t=jt(),e=hd(e,1),e!==null&&(_u(e,1,t),an(e,t));break}}e=e.return}}function tD(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(vt&n)===n&&(Je===4||Je===3&&(vt&130023424)===vt&&500>Ve()-py?fs(t,0):fy|=n),an(t,e)}function qk(t,e){e===0&&((t.mode&1)===0?e=1:(e=rc,rc<<=1,(rc&130023424)===0&&(rc=4194304)));var n=jt();t=hd(t,e),t!==null&&(_u(t,e,n),an(t,n))}function nD(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qk(t,n)}function rD(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),qk(t,n)}var Hk;Hk=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)tn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return tn=!1,HN(t,e,n);tn=(t.flags&131072)!==0}else tn=!1,be&&(e.flags&1048576)!==0&&JE(e,gh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=Vo(e,Rt.current);Ao(e,n),i=ay(null,e,r,t,i,n);var s=ly();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(r)?(s=!0,hh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zg(e),i.updater=ad,e.stateNode=i,i._reactInternals=e,mm(e,r,t,n),e=Im(null,e,r,!0,s,n)):(e.tag=0,be&&s&&ey(e),Mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sD(r),t=qn(r,t),i){case 0:e=_m(null,e,r,t,n);break e;case 1:e=N0(null,e,r,t,n);break e;case 11:e=A0(null,e,r,t,n);break e;case 14:e=R0(null,e,r,qn(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),_m(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),N0(t,e,r,i,n);case 3:e:{if(Rk(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,QE(t,e),ph(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(P(423)),e=D0(t,e,r,n,i);break e}else if(r!==i){i=Error(P(424)),e=D0(t,e,r,n,i);break e}else for(en=br(e.stateNode.containerInfo.firstChild),mn=e,be=!0,Wn=null,n=tk(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zo(),r===i){e=Ur(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return nk(e),t===null&&ym(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,um(r,i)?o=null:s!==null&&um(r,s)&&(e.flags|=32),Ak(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&ym(e),null;case 13:return Nk(t,e,n);case 4:return ry(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jo(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),A0(t,e,r,i,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(dh,r._currentValue),r._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===i.children&&!sn.current){e=Ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Or(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ao(e,n),i=Pn(i),r=r(i),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,i=qn(r,e.pendingProps),i=qn(r.type,i),R0(t,e,r,i,n);case 15:return bk(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,on(r)?(t=!0,hh(e)):t=!1,Ao(e,n),XE(e,r,i),mm(e,r,i,n),Im(null,e,r,!0,t,n);case 19:return Dk(t,e,n);case 22:return Ck(t,e,n)}throw Error(P(156,e.tag))};function Wk(t,e){return wE(t,e)}function iD(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,r){return new iD(t,e,n,r)}function vy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sD(t){if(typeof t=="function")return vy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$g)return 11;if(t===Ug)return 14}return 2}function Si(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case lo:return ps(n.children,i,s,e);case Fg:o=8,i|=8;break;case Vp:return t=xn(12,n,e,i|2),t.elementType=Vp,t.lanes=s,t;case zp:return t=xn(13,n,e,i),t.elementType=zp,t.lanes=s,t;case jp:return t=xn(19,n,e,i),t.elementType=jp,t.lanes=s,t;case nE:return Sh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eE:o=10;break e;case tE:o=9;break e;case $g:o=11;break e;case Ug:o=14;break e;case ii:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=xn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ps(t,e,n,r){return t=xn(7,t,r,e),t.lanes=n,t}function Sh(t,e,n,r){return t=xn(22,t,r,e),t.elementType=nE,t.lanes=n,t.stateNode={},t}function Jf(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function Zf(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oD(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Of(0),this.expirationTimes=Of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Of(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wy(t,e,n,r,i,s,o,a,l){return t=new oD(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zg(s),t}function aD(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ao,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Kk(t){if(!t)return ki;t=t._reactInternals;e:{if(Vs(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(on(n))return KE(t,n,e)}return e}function Gk(t,e,n,r,i,s,o,a,l){return t=wy(n,r,!0,t,i,s,o,a,l),t.context=Kk(null),n=t.current,r=jt(),i=wi(n),s=Or(r,i),s.callback=e!=null?e:null,yi(n,s),t.current.lanes=i,_u(t,i,r),an(t,r),t}function dd(t,e,n,r){var i=e.current,s=jt(),o=wi(i);return n=Kk(n),e.context===null?e.context=n:e.pendingContext=n,e=Or(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),yi(i,e),t=Rn(i,o,s),t!==null&&Fc(t,i,o),o}function Th(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function H0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _y(t,e){H0(t,e),(t=t.alternate)&&H0(t,e)}function lD(){return null}var Qk=typeof reportError=="function"?reportError:function(t){console.error(t)};function Iy(t){this._internalRoot=t}fd.prototype.render=Iy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));dd(t,e,null,null)};fd.prototype.unmount=Iy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ks(function(){dd(null,t,null,null)}),e[$r]=null}};function fd(t){this._internalRoot=t}fd.prototype.unstable_scheduleHydration=function(t){if(t){var e=xE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<oi.length&&e!==0&&e<oi[n].priority;n++);oi.splice(n,0,t),n===0&&CE(t)}};function Ey(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function W0(){}function uD(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Th(o);s.call(u)}}var o=Gk(e,r,t,0,null,!1,!1,"",W0);return t._reactRootContainer=o,t[$r]=o.current,Ml(t.nodeType===8?t.parentNode:t),ks(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Th(l);a.call(u)}}var l=wy(t,0,!1,null,null,!1,!1,"",W0);return t._reactRootContainer=l,t[$r]=l.current,Ml(t.nodeType===8?t.parentNode:t),ks(function(){dd(e,l,n,r)}),l}function md(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Th(o);a.call(l)}}dd(e,o,t,i)}else o=uD(n,e,t,i,r);return Th(o)}SE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ja(e.pendingLanes);n!==0&&(zg(e,n|1),an(e,Ve()),(he&6)===0&&(Ho=Ve()+500,Mi()))}break;case 13:var r=jt();ks(function(){return Rn(t,1,r)}),_y(t,1)}};jg=function(t){if(t.tag===13){var e=jt();Rn(t,134217728,e),_y(t,134217728)}};TE=function(t){if(t.tag===13){var e=jt(),n=wi(t);Rn(t,n,e),_y(t,n)}};xE=function(){return fe};bE=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Zp=function(t,e,n){switch(e){case"input":if(Wp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sd(r);if(!i)throw Error(P(90));iE(r),Wp(r,i)}}}break;case"textarea":oE(t,n);break;case"select":e=n.value,e!=null&&To(t,!!n.multiple,e,!1)}};fE=my;pE=ks;var cD={usingClientEntryPoint:!1,Events:[Eu,fo,sd,hE,dE,my]},Ma={findFiberByHostInstance:ss,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},hD={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||lD,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{td=mc.inject(hD),fr=mc}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cD;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ey(e))throw Error(P(200));return aD(t,e,null,n)};_n.createRoot=function(t,e){if(!Ey(t))throw Error(P(299));var n=!1,r="",i=Qk;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wy(t,1,!1,null,null,n,!1,r,i),t[$r]=e.current,Ml(t.nodeType===8?t.parentNode:t),new Iy(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=yE(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return ks(t)};_n.hydrate=function(t,e,n){if(!pd(e))throw Error(P(200));return md(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Ey(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Qk;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Gk(e,null,t,1,n!=null?n:null,i,!1,s,o),t[$r]=e.current,Ml(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fd(e)};_n.render=function(t,e,n){if(!pd(e))throw Error(P(200));return md(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!pd(t))throw Error(P(40));return t._reactRootContainer?(ks(function(){md(null,null,t,!1,function(){t._reactRootContainer=null,t[$r]=null})}),!0):!1};_n.unstable_batchedUpdates=my;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pd(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return md(t,e,n,!1,r)};_n.version="18.1.0-next-22edb9f77-20220426";function Yk(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yk)}catch(t){console.error(t)}}Yk(),QI.exports=_n;var K0=QI.exports;Up.createRoot=K0.createRoot,Up.hydrateRoot=K0.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xk(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},fD=function(t){const e=Xk(t);return Jk.encodeByteArray(e,!0)},xh=function(t){return fD(t).replace(/\./g,"")},pD=function(t){try{return Jk.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function bh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mD(n)||(t[n]=bh(t[n],e[n]));return t}function mD(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xh(JSON.stringify(n)),xh(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eS(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function ky(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yD(){return typeof self=="object"&&self.self===self}function Sy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vD(){return xe().indexOf("Electron/")>=0}function Ty(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wD(){return xe().indexOf("MSAppHost/")>=0}function _D(){return!ky()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hl(){return typeof indexedDB=="object"}function ID(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ED,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,r)}}function kD(t,e){return t.replace(SD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function TD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nm(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Q0(s)&&Q0(o)){if(!Nm(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Q0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function el(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tS(t,e){const n=new xD(t,e);return n.subscribe.bind(n)}class xD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ep),i.error===void 0&&(i.error=ep),i.complete===void 0&&(i.complete=ep);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ep(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){return t&&t._delegate?t._delegate:t}class Ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RD(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AD(t){return t===Xi?void 0:t}function RD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=[];var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const nS={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},DD=ce.INFO,PD={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},OD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=DD,this._logHandler=OD,this._userLogHandler=null,xy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}function LD(t){xy.forEach(e=>{e.setLogLevel(t)})}function MD(t,e){for(const n of xy){let r=null;e&&e.level&&(r=nS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ce[s].toLowerCase(),message:a,args:o,type:i.name})}}}const FD=(t,e)=>e.some(n=>t instanceof n);let Y0,X0;function $D(){return Y0||(Y0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UD(){return X0||(X0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rS=new WeakMap,Dm=new WeakMap,iS=new WeakMap,tp=new WeakMap,by=new WeakMap;function BD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_i(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rS.set(n,t)}).catch(()=>{}),by.set(e,t),e}function VD(t){if(Dm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dm.set(t,e)}let Pm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _i(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zD(t){Pm=t(Pm)}function jD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(np(this),e,...n);return iS.set(r,e.sort?e.sort():[e]),_i(r)}:UD().includes(t)?function(...e){return t.apply(np(this),e),_i(rS.get(this))}:function(...e){return _i(t.apply(np(this),e))}}function qD(t){return typeof t=="function"?jD(t):(t instanceof IDBTransaction&&VD(t),FD(t,$D())?new Proxy(t,Pm):t)}function _i(t){if(t instanceof IDBRequest)return BD(t);if(tp.has(t))return tp.get(t);const e=qD(t);return e!==t&&(tp.set(t,e),by.set(e,t)),e}const np=t=>by.get(t);function HD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_i(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_i(o.result),l.oldVersion,l.newVersion,_i(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const WD=["get","getKey","getAll","getAllKeys","count"],KD=["put","add","delete","clear"],rp=new Map;function J0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rp.get(e))return rp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return rp.set(e,s),s}zD(t=>Xu(Zr({},t),{get:(e,n,r)=>J0(e,n)||t.get(e,n,r),has:(e,n)=>!!J0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Om="@firebase/app",Z0="0.7.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new yd("@firebase/app"),YD="@firebase/app-compat",XD="@firebase/analytics-compat",JD="@firebase/analytics",ZD="@firebase/app-check-compat",eP="@firebase/app-check",tP="@firebase/auth",nP="@firebase/auth-compat",rP="@firebase/database",iP="@firebase/database-compat",sP="@firebase/functions",oP="@firebase/functions-compat",aP="@firebase/installations",lP="@firebase/installations-compat",uP="@firebase/messaging",cP="@firebase/messaging-compat",hP="@firebase/performance",dP="@firebase/performance-compat",fP="@firebase/remote-config",pP="@firebase/remote-config-compat",mP="@firebase/storage",gP="@firebase/storage-compat",yP="@firebase/firestore",vP="@firebase/firestore-compat",wP="firebase",_P="9.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="[DEFAULT]",IP={[Om]:"fire-core",[YD]:"fire-core-compat",[JD]:"fire-analytics",[XD]:"fire-analytics-compat",[eP]:"fire-app-check",[ZD]:"fire-app-check-compat",[tP]:"fire-auth",[nP]:"fire-auth-compat",[rP]:"fire-rtdb",[iP]:"fire-rtdb-compat",[sP]:"fire-fn",[oP]:"fire-fn-compat",[aP]:"fire-iid",[lP]:"fire-iid-compat",[uP]:"fire-fcm",[cP]:"fire-fcm-compat",[hP]:"fire-perf",[dP]:"fire-perf-compat",[fP]:"fire-rc",[pP]:"fire-rc-compat",[mP]:"fire-gcs",[gP]:"fire-gcs-compat",[yP]:"fire-fst",[vP]:"fire-fst-compat","fire-js":"fire-js",[wP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Map,Wl=new Map;function Ch(t,e){try{t.container.addComponent(e)}catch(n){Cy.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sS(t,e){t.container.addOrOverwriteComponent(e)}function Br(t){const e=t.name;if(Wl.has(e))return Cy.debug(`There were multiple attempts to register component ${e}.`),!1;Wl.set(e,t);for(const n of Ti.values())Ch(n,t);return!0}function oS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function EP(t,e,n=Ss){oS(t,e).clearInstance(n)}function kP(){Wl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},xi=new zs("app","Firebase",SP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=_P;function aS(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ss,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw xi.create("bad-app-name",{appName:String(r)});const i=Ti.get(r);if(i){if(Nm(t,i.options)&&Nm(n,i.config))return i;throw xi.create("duplicate-app",{appName:r})}const s=new ND(r);for(const a of Wl.values())s.addComponent(a);const o=new TP(t,n,s);return Ti.set(r,o),o}function xP(t=Ss){const e=Ti.get(t);if(!e)throw xi.create("no-app",{appName:t});return e}function bP(){return Array.from(Ti.values())}async function lS(t){const e=t.name;Ti.has(e)&&(Ti.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Nn(t,e,n){var r;let i=(r=IP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cy.warn(a.join(" "));return}Br(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function uS(t,e){if(t!==null&&typeof t!="function")throw xi.create("invalid-log-argument");MD(t,e)}function cS(t){LD(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="firebase-heartbeat-database",AP=1,Kl="firebase-heartbeat-store";let ip=null;function hS(){return ip||(ip=HD(CP,AP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kl)}}}).catch(t=>{throw xi.create("storage-open",{originalErrorMessage:t.message})})),ip}async function RP(t){var e;try{return(await hS()).transaction(Kl).objectStore(Kl).get(dS(t))}catch(n){throw xi.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function e_(t,e){var n;try{const i=(await hS()).transaction(Kl,"readwrite");return await i.objectStore(Kl).put(e,dS(t)),i.done}catch(r){throw xi.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function dS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=1024,DP=30*24*60*60*1e3;class PP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=t_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=DP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=t_(),{heartbeatsToSend:n,unsentEntries:r}=OP(this._heartbeatsCache.heartbeats),i=xh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function t_(){return new Date().toISOString().substring(0,10)}function OP(t,e=NP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),n_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),n_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hl()?ID().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return e_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return e_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function n_(t){return xh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t){Br(new Ln("platform-logger",e=>new GD(e),"PRIVATE")),Br(new Ln("heartbeat",e=>new PP(e),"PRIVATE")),Nn(Om,Z0,t),Nn(Om,Z0,"esm2017"),Nn("fire-js","")}MP("");var FP=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Fi,_DEFAULT_ENTRY_NAME:Ss,_addComponent:Ch,_addOrOverwriteComponent:sS,_apps:Ti,_clearComponents:kP,_components:Wl,_getProvider:oS,_registerComponent:Br,_removeServiceInstance:EP,deleteApp:lS,getApp:xP,getApps:bP,initializeApp:aS,onLog:uS,registerVersion:Nn,setLogLevel:cS,FirebaseError:ln},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n){this._delegate=e,this.firebase=n,Ch(e,new Ln("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),lS(this._delegate)))}_getService(e,n=Ss){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ss){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ch(this._delegate,e)}_addOrOverwriteComponent(e){sS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},r_=new zs("app-compat","Firebase",UP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Nn,setLogLevel:cS,onLog:uS,apps:null,SDK_VERSION:Fi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:FP}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Ss,!G0(e,u))throw r_.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=aS(u,c);if(G0(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(Br(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw r_.create("invalid-app-argument",{appName:c});return f[h]()};u.serviceProps!==void 0&&bh(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){const t=BP($P);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:fS,extendNamespace:e,createSubscribe:tS,ErrorFactory:zs,deepExtend:bh});function e(n){bh(t,n)}return t}const VP=fS();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new yd("@firebase/app-compat"),zP="@firebase/app-compat",jP="0.1.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){Nn(zP,jP,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(yD()&&self.firebase!==void 0){i_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&i_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const qt=VP;qP();var HP="firebase",WP="9.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.registerVersion(HP,WP,"app-compat");var KP=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},z,Ay=Ay||{},ee=KP||self;function Ah(){}function Lm(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Su(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function GP(t){return Object.prototype.hasOwnProperty.call(t,sp)&&t[sp]||(t[sp]=++QP)}var sp="closure_uid_"+(1e9*Math.random()>>>0),QP=0;function YP(t,e,n){return t.call.apply(t.bind,arguments)}function XP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=YP:wt=XP,wt.apply(null,arguments)}function gc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function St(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function $i(){this.s=this.s,this.o=this.o}var JP=0;$i.prototype.s=!1;$i.prototype.na=function(){!this.s&&(this.s=!0,this.M(),JP!=0)&&GP(this)};$i.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},mS=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function ZP(t){e:{var e=qO;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function s_(t){return Array.prototype.concat.apply([],arguments)}function Ry(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Rh(t){return/^[\s\xa0]*$/.test(t)}var o_=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Bt(t,e){return t.indexOf(e)!=-1}function op(t,e){return t<e?-1:t>e?1:0}var Vt;e:{var a_=ee.navigator;if(a_){var l_=a_.userAgent;if(l_){Vt=l_;break e}}Vt=""}function Ny(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function gS(t){const e={};for(const n in t)e[n]=t[n];return e}var u_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<u_.length;s++)n=u_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Dy(t){return Dy[" "](t),t}Dy[" "]=Ah;function eO(t){var e=rO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var tO=Bt(Vt,"Opera"),Wo=Bt(Vt,"Trident")||Bt(Vt,"MSIE"),vS=Bt(Vt,"Edge"),Mm=vS||Wo,wS=Bt(Vt,"Gecko")&&!(Bt(Vt.toLowerCase(),"webkit")&&!Bt(Vt,"Edge"))&&!(Bt(Vt,"Trident")||Bt(Vt,"MSIE"))&&!Bt(Vt,"Edge"),nO=Bt(Vt.toLowerCase(),"webkit")&&!Bt(Vt,"Edge");function _S(){var t=ee.document;return t?t.documentMode:void 0}var Nh;e:{var ap="",lp=function(){var t=Vt;if(wS)return/rv:([^\);]+)(\)|;)/.exec(t);if(vS)return/Edge\/([\d\.]+)/.exec(t);if(Wo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(nO)return/WebKit\/(\S+)/.exec(t);if(tO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lp&&(ap=lp?lp[1]:""),Wo){var up=_S();if(up!=null&&up>parseFloat(ap)){Nh=String(up);break e}}Nh=ap}var rO={};function iO(){return eO(function(){let t=0;const e=o_(String(Nh)).split("."),n=o_("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=op(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||op(i[2].length==0,s[2].length==0)||op(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Fm;if(ee.document&&Wo){var c_=_S();Fm=c_||parseInt(Nh,10)||void 0}else Fm=void 0;var sO=Fm,oO=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",Ah,e),ee.removeEventListener("test",Ah,e)}catch{}return t}();function At(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};function Gl(t,e){if(At.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wS){e:{try{Dy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:aO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gl.Z.h.call(this)}}St(Gl,At);var aO={2:"touch",3:"pen",4:"mouse"};Gl.prototype.h=function(){Gl.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Tu="closure_listenable_"+(1e6*Math.random()|0),lO=0;function uO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++lO,this.ca=this.fa=!1}function vd(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function wd(t){this.src=t,this.g={},this.h=0}wd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Um(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new uO(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function $m(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=pS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Um(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Py="closure_lm_"+(1e6*Math.random()|0),cp={};function IS(t,e,n,r,i){if(r&&r.once)return kS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)IS(t,e[s],n,r,i);return null}return n=My(n),t&&t[Tu]?t.N(e,n,Su(r)?!!r.capture:!!r,i):ES(t,e,n,!1,r,i)}function ES(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Su(i)?!!i.capture:!!i,a=Ly(t);if(a||(t[Py]=a=new wd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=cO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)oO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(TS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cO(){function t(n){return e.call(t.src,t.listener,n)}var e=hO;return t}function kS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)kS(t,e[s],n,r,i);return null}return n=My(n),t&&t[Tu]?t.O(e,n,Su(r)?!!r.capture:!!r,i):ES(t,e,n,!0,r,i)}function SS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)SS(t,e[s],n,r,i);else r=Su(r)?!!r.capture:!!r,n=My(n),t&&t[Tu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Um(s,n,r,i),-1<n&&(vd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ly(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Um(e,n,r,i)),(n=-1<t?e[t]:null)&&Oy(n))}function Oy(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Tu])$m(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(TS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ly(e))?($m(n,t),n.h==0&&(n.src=null,e[Py]=null)):vd(t)}}}function TS(t){return t in cp?cp[t]:cp[t]="on"+t}function hO(t,e){if(t.ca)t=!0;else{e=new Gl(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Oy(t),t=n.call(r,e)}return t}function Ly(t){return t=t[Py],t instanceof wd?t:null}var hp="__closure_events_fn_"+(1e9*Math.random()>>>0);function My(t){return typeof t=="function"?t:(t[hp]||(t[hp]=function(e){return t.handleEvent(e)}),t[hp])}function lt(){$i.call(this),this.i=new wd(this),this.P=this,this.I=null}St(lt,$i);lt.prototype[Tu]=!0;lt.prototype.removeEventListener=function(t,e,n,r){SS(this,t,e,n,r)};function _t(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new At(e,t);else if(e instanceof At)e.target=e.target||t;else{var i=e;e=new At(r,t),yS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yc(o,r,!0,e)&&i}if(o=e.g=t,i=yc(o,r,!0,e)&&i,i=yc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yc(o,r,!1,e)&&i}lt.prototype.M=function(){if(lt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vd(n[r]);delete t.g[e],t.h--}}this.I=null};lt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};lt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&$m(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fy=ee.JSON.stringify;function dO(){var t=bS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class fO{constructor(){this.h=this.g=null}add(e,n){const r=xS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var xS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new pO,t=>t.reset());class pO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mO(t){ee.setTimeout(()=>{throw t},0)}function $y(t,e){Bm||gO(),Vm||(Bm(),Vm=!0),bS.add(t,e)}var Bm;function gO(){var t=ee.Promise.resolve(void 0);Bm=function(){t.then(yO)}}var Vm=!1,bS=new fO;function yO(){for(var t;t=dO();){try{t.h.call(t.g)}catch(n){mO(n)}var e=xS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vm=!1}function _d(t,e){lt.call(this),this.h=t||1,this.g=e||ee,this.j=wt(this.kb,this),this.l=Date.now()}St(_d,lt);z=_d.prototype;z.da=!1;z.S=null;z.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),_t(this,"tick"),this.da&&(Uy(this),this.start()))}};z.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uy(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}z.M=function(){_d.Z.M.call(this),Uy(this),delete this.g};function By(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function CS(t){t.g=By(()=>{t.g=null,t.i&&(t.i=!1,CS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vO extends $i{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:CS(this)}M(){super.M(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ql(t){$i.call(this),this.h=t,this.g={}}St(Ql,$i);var h_=[];function AS(t,e,n,r){Array.isArray(n)||(n&&(h_[0]=n.toString()),n=h_);for(var i=0;i<n.length;i++){var s=IS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function RS(t){Ny(t.g,function(e,n){this.g.hasOwnProperty(n)&&Oy(e)},t),t.g={}}Ql.prototype.M=function(){Ql.Z.M.call(this),RS(this)};Ql.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Id(){this.g=!0}Id.prototype.Aa=function(){this.g=!1};function wO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function _O(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Io(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+EO(t,n)+(r?" "+r:"")})}function IO(t,e){t.info(function(){return"TIMEOUT: "+e})}Id.prototype.info=function(){};function EO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fy(n)}catch{return e}}var js={},d_=null;function Ed(){return d_=d_||new lt}js.Ma="serverreachability";function NS(t){At.call(this,js.Ma,t)}St(NS,At);function Yl(t){const e=Ed();_t(e,new NS(e))}js.STAT_EVENT="statevent";function DS(t,e){At.call(this,js.STAT_EVENT,t),this.stat=e}St(DS,At);function zt(t){const e=Ed();_t(e,new DS(e,t))}js.Na="timingevent";function PS(t,e){At.call(this,js.Na,t),this.size=e}St(PS,At);function xu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var kd={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},OS={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Vy(){}Vy.prototype.h=null;function f_(t){return t.h||(t.h=t.i())}function LS(){}var bu={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function zy(){At.call(this,"d")}St(zy,At);function jy(){At.call(this,"c")}St(jy,At);var zm;function Sd(){}St(Sd,Vy);Sd.prototype.g=function(){return new XMLHttpRequest};Sd.prototype.i=function(){return{}};zm=new Sd;function Cu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ql(this),this.P=kO,t=Mm?125:void 0,this.W=new _d(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new MS}function MS(){this.i=null,this.g="",this.h=!1}var kO=45e3,jm={},Dh={};z=Cu.prototype;z.setTimeout=function(t){this.P=t};function qm(t,e,n){t.K=1,t.v=xd(Vr(e)),t.s=n,t.U=!0,FS(t,null)}function FS(t,e){t.F=Date.now(),Au(t),t.A=Vr(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),qS(n.h,"t",r),t.C=0,n=t.l.H,t.h=new MS,t.g=cT(t.l,n?e:null,!t.s),0<t.O&&(t.L=new vO(wt(t.Ia,t,t.g),t.O)),AS(t.V,t.g,"readystatechange",t.gb),e=t.H?gS(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Yl(),wO(t.j,t.u,t.A,t.m,t.X,t.s)}z.gb=function(t){t=t.target;const e=this.L;e&&Rr(t)==3?e.l():this.Ia(t)};z.Ia=function(t){try{if(t==this.g)e:{const c=Rr(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Mm||this.g&&(this.h.h||this.g.ga()||y_(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Yl(3):Yl(2)),Td(this);var n=this.g.ba();this.N=n;t:if($S(this)){var r=y_(this.g);t="";var i=r.length,s=Rr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){as(this),pl(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,_O(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rh(a)){var u=a;break t}}u=null}if(n=u)Io(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hm(this,n);else{this.i=!1,this.o=3,zt(12),as(this),pl(this);break e}}this.U?(US(this,c,o),Mm&&this.i&&c==3&&(AS(this.V,this.W,"tick",this.fb),this.W.start())):(Io(this.j,this.m,o,null),Hm(this,o)),c==4&&as(this),this.i&&!this.I&&(c==4?oT(this.l,this):(this.i=!1,Au(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,zt(12)):(this.o=0,zt(13)),as(this),pl(this)}}}catch{}finally{}};function $S(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function US(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=SO(t,n),i==Dh){e==4&&(t.o=4,zt(14),r=!1),Io(t.j,t.m,null,"[Incomplete Response]");break}else if(i==jm){t.o=4,zt(15),Io(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Io(t.j,t.m,i,null),Hm(t,i);$S(t)&&i!=Dh&&i!=jm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,zt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jy(e),e.L=!0,zt(11))):(Io(t.j,t.m,n,"[Invalid Chunked Response]"),as(t),pl(t))}z.fb=function(){if(this.g){var t=Rr(this.g),e=this.g.ga();this.C<e.length&&(Td(this),US(this,t,e),this.i&&t!=4&&Au(this))}};function SO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Dh:(n=Number(e.substring(n,r)),isNaN(n)?jm:(r+=1,r+n>e.length?Dh:(e=e.substr(r,n),t.C=r+n,e)))}z.cancel=function(){this.I=!0,as(this)};function Au(t){t.Y=Date.now()+t.P,BS(t,t.P)}function BS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xu(wt(t.eb,t),e)}function Td(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}z.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(IO(this.j,this.A),this.K!=2&&(Yl(),zt(17)),as(this),this.o=2,pl(this)):BS(this,this.Y-t)};function pl(t){t.l.G==0||t.I||oT(t.l,t)}function as(t){Td(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Uy(t.W),RS(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hm(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Wm(n.i,t))){if(n.I=t.N,!t.J&&Wm(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Mh(n),Ad(n);else break e;Xy(n),zt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=xu(wt(n.ab,n),6e3));if(1>=KS(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ls(n,11)}else if((t.J||n.g==t)&&Mh(n),!Rh(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;!s.g&&(Bt(p,"spdy")||Bt(p,"quic")||Bt(p,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Wy(s,s.h),s.h=null))}if(r.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,Ce(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=uT(r,r.H?r.la:null,r.W),o.J){GS(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Td(a),Au(a)),r.g=o}else iT(r);0<n.l.length&&Rd(n)}else u[0]!="stop"&&u[0]!="close"||ls(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ls(n,7):Yy(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Yl(4)}catch{}}function TO(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Lm(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function qy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lm(t)||typeof t=="string")mS(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Lm(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=TO(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function ua(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ua)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}z=ua.prototype;z.R=function(){Hy(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};z.T=function(){return Hy(this),this.g.concat()};function Hy(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ts(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ts(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}z.get=function(t,e){return Ts(this.h,t)?this.h[t]:e};z.set=function(t,e){Ts(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};z.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Ts(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var VS=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function xO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xs(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof xs){this.g=e!==void 0?e:t.g,Ph(this,t.j),this.s=t.s,Oh(this,t.i),Lh(this,t.m),this.l=t.l,e=t.h;var n=new Xl;n.i=e.i,e.g&&(n.g=new ua(e.g),n.h=e.h),p_(this,n),this.o=t.o}else t&&(n=String(t).match(VS))?(this.g=!!e,Ph(this,n[1]||"",!0),this.s=ml(n[2]||""),Oh(this,n[3]||"",!0),Lh(this,n[4]),this.l=ml(n[5]||"",!0),p_(this,n[6]||"",!0),this.o=ml(n[7]||"")):(this.g=!!e,this.h=new Xl(null,this.g))}xs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(tl(e,m_,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(tl(e,m_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(tl(n,n.charAt(0)=="/"?NO:RO,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",tl(n,PO)),t.join("")};function Vr(t){return new xs(t)}function Ph(t,e,n){t.j=n?ml(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oh(t,e,n){t.i=n?ml(e,!0):e}function Lh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function p_(t,e,n){e instanceof Xl?(t.h=e,OO(t.h,t.g)):(n||(e=tl(e,DO)),t.h=new Xl(e,t.g))}function Ce(t,e,n){t.h.set(e,n)}function xd(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bO(t){return t instanceof xs?Vr(t):new xs(t,void 0)}function CO(t,e,n,r){var i=new xs(null,void 0);return t&&Ph(i,t),e&&Oh(i,e),n&&Lh(i,n),r&&(i.l=r),i}function ml(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function tl(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,AO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function AO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var m_=/[#\/\?@]/g,RO=/[#\?:]/g,NO=/[#\?]/g,DO=/[#\?@]/g,PO=/#/g;function Xl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ui(t){t.g||(t.g=new ua,t.h=0,t.i&&xO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=Xl.prototype;z.add=function(t,e){Ui(this),this.i=null,t=ca(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zS(t,e){Ui(t),e=ca(t,e),Ts(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ts(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Hy(t)))}function jS(t,e){return Ui(t),e=ca(t,e),Ts(t.g.h,e)}z.forEach=function(t,e){Ui(this),this.g.forEach(function(n,r){mS(n,function(i){t.call(e,i,r,this)},this)},this)};z.T=function(){Ui(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};z.R=function(t){Ui(this);var e=[];if(typeof t=="string")jS(this,t)&&(e=s_(e,this.g.get(ca(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=s_(e,t[n])}return e};z.set=function(t,e){return Ui(this),this.i=null,t=ca(this,t),jS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function qS(t,e,n){zS(t,e),0<n.length&&(t.i=null,t.g.set(ca(t,e),Ry(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ca(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function OO(t,e){e&&!t.j&&(Ui(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(zS(this,r),qS(this,i,n))},t)),t.j=e}var LO=class{constructor(t,e){this.h=t,this.g=e}};function HS(t){this.l=t||MO,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ea&&ee.g.Ea()&&ee.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var MO=10;function WS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function KS(t){return t.h?1:t.g?t.g.size:0}function Wm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wy(t,e){t.g?t.g.add(e):t.h=e}function GS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}HS.prototype.cancel=function(){if(this.i=QS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function QS(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ry(t.i)}function Ky(){}Ky.prototype.stringify=function(t){return ee.JSON.stringify(t,void 0)};Ky.prototype.parse=function(t){return ee.JSON.parse(t,void 0)};function FO(){this.g=new Ky}function $O(t,e,n){const r=n||"";try{qy(t,function(i,s){let o=i;Su(i)&&(o=Fy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function UO(t,e){const n=new Id;if(ee.Image){const r=new Image;r.onload=gc(vc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gc(vc,n,r,"TestLoadImage: error",!1,e),r.onabort=gc(vc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gc(vc,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ru(t){this.l=t.$b||null,this.j=t.ib||!1}St(Ru,Vy);Ru.prototype.g=function(){return new bd(this.l,this.j)};Ru.prototype.i=function(t){return function(){return t}}({});function bd(t,e){lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}St(bd,lt);var Gy=0;z=bd.prototype;z.open=function(t,e){if(this.readyState!=Gy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jl(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ee).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nu(this)),this.readyState=Gy};z.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jl(this)),this.g&&(this.readyState=3,Jl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ee.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;YS(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function YS(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}z.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nu(this):Jl(this),this.readyState==3&&YS(this)}};z.Ua=function(t){this.g&&(this.response=this.responseText=t,Nu(this))};z.Ta=function(t){this.g&&(this.response=t,Nu(this))};z.ha=function(){this.g&&Nu(this)};function Nu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jl(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Jl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(bd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var BO=ee.JSON.parse;function Ge(t){lt.call(this),this.headers=new ua,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=XS,this.K=this.L=!1}St(Ge,lt);var XS="",VO=/^https?$/i,zO=["POST","PUT"];z=Ge.prototype;z.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():zm.g(),this.C=this.u?f_(this.u):f_(zm),this.g.onreadystatechange=wt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){g_(this,s);return}t=n||"";const i=new ua(this.headers);r&&qy(r,function(s,o){i.set(o,s)}),r=ZP(i.T()),n=ee.FormData&&t instanceof ee.FormData,!(0<=pS(zO,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{eT(this),0<this.B&&((this.K=jO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.pa,this)):this.A=By(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){g_(this,s)}};function jO(t){return Wo&&iO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function qO(t){return t.toLowerCase()=="content-type"}z.pa=function(){typeof Ay!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function g_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,JS(t),Cd(t)}function JS(t){t.D||(t.D=!0,_t(t,"complete"),_t(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),Cd(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cd(this,!0)),Ge.Z.M.call(this)};z.Fa=function(){this.s||(this.F||this.v||this.l?ZS(this):this.cb())};z.cb=function(){ZS(this)};function ZS(t){if(t.h&&typeof Ay!="undefined"&&(!t.C[1]||Rr(t)!=4||t.ba()!=2)){if(t.v&&Rr(t)==4)By(t.Fa,0,t);else if(_t(t,"readystatechange"),Rr(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(VS)[1]||null;if(!i&&ee.self&&ee.self.location){var s=ee.self.location.protocol;i=s.substr(0,s.length-1)}r=!VO.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var o=2<Rr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",JS(t)}}finally{Cd(t)}}}}function Cd(t,e){if(t.g){eT(t);const n=t.g,r=t.C[0]?Ah:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=r}catch{}}}function eT(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}function Rr(t){return t.g?t.g.readyState:0}z.ba=function(){try{return 2<Rr(this)?this.g.status:-1}catch{return-1}};z.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),BO(e)}};function y_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case XS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Da=function(){return this.m};z.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function HO(t){let e="";return Ny(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Qy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=HO(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Fa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tT(t){this.za=0,this.l=[],this.h=new Id,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Fa("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Fa("baseRetryDelayMs",5e3,t),this.$a=Fa("retryDelaySeedMs",1e4,t),this.Ya=Fa("forwardChannelMaxRetries",2,t),this.ra=Fa("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new HS(t&&t.concurrentRequestLimit),this.Ca=new FO,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}z=tT.prototype;z.ma=8;z.G=1;function Yy(t){if(nT(t),t.G==3){var e=t.V++,n=Vr(t.F);Ce(n,"SID",t.J),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Du(t,n),e=new Cu(t,t.h,e,void 0),e.K=2,e.v=xd(Vr(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon&&(n=ee.navigator.sendBeacon(e.v.toString(),"")),!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=cT(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Au(e)}lT(t)}z.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ad(t){t.g&&(Jy(t),t.g.cancel(),t.g=null)}function nT(t){Ad(t),t.u&&(ee.clearTimeout(t.u),t.u=null),Mh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function dp(t,e){t.l.push(new LO(t.Za++,e)),t.G==3&&Rd(t)}function Rd(t){WS(t.i)||t.m||(t.m=!0,$y(t.Ha,t),t.C=0)}function WO(t,e){return KS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=xu(wt(t.Ha,t,e),aT(t,t.C)),t.C++,!0)}z.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Cu(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=gS(s),yS(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rT(this,i,e),n=Vr(this.F),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),Du(this,n),this.o&&s&&Qy(n,this.o,s),Wy(this.i,i),this.Ra&&Ce(n,"TYPE","init"),this.ja?(Ce(n,"$req",e),Ce(n,"SID","null"),i.$=!0,qm(i,n,null)):qm(i,n,e),this.G=2}}else this.G==3&&(t?v_(this,t):this.l.length==0||WS(this.i)||v_(this))};function v_(t,e){var n;e?n=e.m:n=t.V++;const r=Vr(t.F);Ce(r,"SID",t.J),Ce(r,"RID",n),Ce(r,"AID",t.U),Du(t,r),t.o&&t.s&&Qy(r,t.o,t.s),n=new Cu(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=rT(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Wy(t.i,n),qm(n,r,e)}function Du(t,e){t.j&&qy({},function(n,r){Ce(e,r,n)})}function rT(t,e,n){n=Math.min(t.l.length,n);var r=t.j?wt(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{$O(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function iT(t){t.g||t.u||(t.Y=1,$y(t.Ga,t),t.A=0)}function Xy(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=xu(wt(t.Ga,t),aT(t,t.A)),t.A++,!0)}z.Ga=function(){if(this.u=null,sT(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=xu(wt(this.bb,this),t)}};z.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,zt(10),Ad(this),sT(this))};function Jy(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function sT(t){t.g=new Cu(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Vr(t.oa);Ce(e,"RID","rpc"),Ce(e,"SID",t.J),Ce(e,"CI",t.N?"0":"1"),Ce(e,"AID",t.U),Du(t,e),Ce(e,"TYPE","xmlhttp"),t.o&&t.s&&Qy(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=xd(Vr(e)),n.s=null,n.U=!0,FS(n,t)}z.ab=function(){this.v!=null&&(this.v=null,Ad(this),Xy(this),zt(19))};function Mh(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function oT(t,e){var n=null;if(t.g==e){Mh(t),Jy(t),t.g=null;var r=2}else if(Wm(t.i,e))n=e.D,GS(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ed(),_t(r,new PS(r,n)),Rd(t)}else iT(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&WO(t,e)||r==2&&Xy(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ls(t,5);break;case 4:ls(t,10);break;case 3:ls(t,6);break;default:ls(t,2)}}}function aT(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ls(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=wt(t.jb,t);n||(n=new xs("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Ph(n,"https"),xd(n)),UO(n.toString(),r)}else zt(2);t.G=0,t.j&&t.j.va(e),lT(t),nT(t)}z.jb=function(t){t?(this.h.info("Successfully pinged google.com"),zt(2)):(this.h.info("Failed to ping google.com"),zt(1))};function lT(t){t.G=0,t.I=-1,t.j&&((QS(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ry(t.l),t.l.length=0),t.j.ua())}function uT(t,e,n){let r=bO(n);if(r.i!="")e&&Oh(r,e+"."+r.i),Lh(r,r.m);else{const i=ee.location;r=CO(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Ny(t.aa,function(i,s){Ce(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ce(r,e,n),Ce(r,"VER",t.ma),Du(t,r),r}function cT(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ge(new Ru({ib:!0})):new Ge(t.qa),e.L=t.H,e}function hT(){}z=hT.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Oa=function(){};function Fh(){if(Wo&&!(10<=Number(sO)))throw Error("Environmental error: no available transport.")}Fh.prototype.g=function(t,e){return new vn(t,e)};function vn(t,e){lt.call(this),this.g=new tT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Rh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ha(this)}St(vn,lt);vn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),$y(wt(t.hb,t,e))),zt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=uT(t,null,t.W),Rd(t)};vn.prototype.close=function(){Yy(this.g)};vn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,dp(this.g,e)}else this.v?(e={},e.__data__=Fy(t),dp(this.g,e)):dp(this.g,t)};vn.prototype.M=function(){this.g.j=null,delete this.j,Yy(this.g),delete this.g,vn.Z.M.call(this)};function dT(t){zy.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}St(dT,zy);function fT(){jy.call(this),this.status=1}St(fT,jy);function ha(t){this.g=t}St(ha,hT);ha.prototype.xa=function(){_t(this.g,"a")};ha.prototype.wa=function(t){_t(this.g,new dT(t))};ha.prototype.va=function(t){_t(this.g,new fT)};ha.prototype.ua=function(){_t(this.g,"b")};Fh.prototype.createWebChannel=Fh.prototype.g;vn.prototype.send=vn.prototype.u;vn.prototype.open=vn.prototype.m;vn.prototype.close=vn.prototype.close;kd.NO_ERROR=0;kd.TIMEOUT=8;kd.HTTP_ERROR=6;OS.COMPLETE="complete";LS.EventType=bu;bu.OPEN="a";bu.CLOSE="b";bu.ERROR="c";bu.MESSAGE="d";lt.prototype.listen=lt.prototype.N;Ge.prototype.listenOnce=Ge.prototype.O;Ge.prototype.getLastError=Ge.prototype.La;Ge.prototype.getLastErrorCode=Ge.prototype.Da;Ge.prototype.getStatus=Ge.prototype.ba;Ge.prototype.getResponseJson=Ge.prototype.Qa;Ge.prototype.getResponseText=Ge.prototype.ga;Ge.prototype.send=Ge.prototype.ea;var KO=function(){return new Fh},GO=function(){return Ed()},fp=kd,QO=OS,YO=js,w_={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},XO=Ru,wc=LS,JO=Ge;const __="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da="9.8.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new yd("@firebase/firestore");function Km(){return bi.logLevel}function ZO(t){bi.setLogLevel(t)}function D(t,...e){if(bi.logLevel<=ce.DEBUG){const n=e.map(Zy);bi.debug(`Firestore (${da}): ${t}`,...n)}}function Ke(t,...e){if(bi.logLevel<=ce.ERROR){const n=e.map(Zy);bi.error(`Firestore (${da}): ${t}`,...n)}}function Zl(t,...e){if(bi.logLevel<=ce.WARN){const n=e.map(Zy);bi.warn(`Firestore (${da}): ${t}`,...n)}}function Zy(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t="Unexpected state"){const e=`FIRESTORE (${da}) INTERNAL ASSERTION FAILED: `+t;throw Ke(e),new Error(e)}function J(t,e){t||j()}function eL(t,e){t||j()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class nL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rL{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ot,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ot)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new pT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new st(e)}}class iL{constructor(e,n,r){this.type="FirstParty",this.user=st.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class sL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new iL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aL{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.p=n.token,new oL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Ko(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function gT(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ae(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ae(0,0))}static max(){return new X(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return eu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof eu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends eu{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const uL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends eu{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return uL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ue.fromString(e))}static fromName(e){return new F(ue.fromString(e).popFirst(5))}static empty(){return new F(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ue(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Gm(t){return t.fields.find(e=>e.kind===2)}function Ji(t){return t.fields.filter(e=>e.kind!==2)}yT.UNKNOWN_ID=-1;class cL{constructor(e,n){this.fieldPath=e,this.kind=n}}class $h{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new $h(0,wn.min())}}function vT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new wn(i,F.empty(),e)}function wT(t){return new wn(t.readTime,t.key,-1)}class wn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wn(X.min(),F.empty(),-1)}static max(){return new wn(X.max(),F.empty(),-1)}}function ev(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==_T)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.T=new ot,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{n.error?this.T.reject(new gl(e,n.error)):this.T.resolve()},this.transaction.onerror=r=>{const i=tv(r.target.error);this.T.reject(new gl(e,i))}}static open(e,n,r,i){try{return new Nd(n,e.transaction(i,r))}catch(s){throw new gl(n,s)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(D("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new dL(n)}}class Gn{constructor(e,n,r){this.name=e,this.version=n,this.P=r,Gn.v(xe())===12.2&&Ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return D("SimpleDb","Removing database:",e),Zi(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!Hl())return!1;if(Gn.S())return!0;const e=xe(),n=Gn.v(e),r=0<n&&n<10,i=Gn.D(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static S(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.C)==="YES"}static N(e,n){return e.store(n)}static v(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static D(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async k(e){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new gl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new N(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new N(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new gl(e,o))},i.onupgradeneeded=s=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.P.O(o,i.transaction,s.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.M&&(this.db.onversionchange=n=>this.M(n)),this.db}F(e){this.M=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const a=Nd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.R(),u)).catch(u=>(a.abort(u),T.reject(u))).toPromise();return l.catch(()=>{}),await a.A,l}catch(a){const l=a.name!=="FirebaseError"&&o<3;if(D("SimpleDb","Transaction failed with error:",a.message,"Retrying:",l),this.close(),!l)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class hL{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return Zi(this.$.delete())}}class gl extends N{constructor(e,n){super(b.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Vi(t){return t.name==="IndexedDbTransactionError"}class dL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(D("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Zi(r)}add(e){return D("SimpleDb","ADD",this.store.name,e,e),Zi(this.store.add(e))}get(e){return Zi(this.store.get(e)).next(n=>(n===void 0&&(n=null),D("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return D("SimpleDb","DELETE",this.store.name,e),Zi(this.store.delete(e))}count(){return D("SimpleDb","COUNT",this.store.name),Zi(this.store.count())}K(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new T((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new T((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}W(e,n){D("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Y(e){const n=this.cursor({});return new T((r,i)=>{n.onerror=s=>{const o=tv(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new T((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new hL(a),u=n(a.primaryKey,a.value,l);if(u instanceof T){const c=u.catch(h=>(l.done(),T.reject(h)));r.push(c)}l.isDone?i():l.U===null?a.continue():a.continue(l.U)}}).next(()=>T.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Zi(t){return new T((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=tv(r.target.error);n(i)}})}let I_=!1;function tv(t){const e=Gn.v(xe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return I_||(I_=!0,setTimeout(()=>{throw r},0)),r}}return t}class fL{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}Z(e){D("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{D("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(n){Vi(n)?D("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Bi(n)}await this.Z(1)})}}class pL{constructor(e,n){this.localStore=e,this.persistence=n}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.et(n,e))}et(e,n){const r=new Set;let i=n,s=!0;return T.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return D("IndexBackiller",`Processing collection: ${o}`),this.nt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}nt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.st(i,s)).next(a=>(D("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}st(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=wT(s);ev(o,r)>0&&(r=o)}),new wn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ET(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.ot=-1;class Fe{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _c(this.root,e,this.comparator,!1)}getReverseIterator(){return new _c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _c(this.root,e,this.comparator,!0)}}class _c{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:mt.RED,this.left=i!=null?i:mt.EMPTY,this.right=s!=null?s:mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new k_(this.data.getIterator())}getIteratorFrom(e){return new k_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ge(this.comparator);return n.data=e,n}}class k_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function to(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new gn([])}unionWith(e){let n=new ge(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ko(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new tt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const gL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(t){if(J(!!t),typeof t=="string"){let e=0;const n=gL.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bs(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kT(t){const e=t.mapValue.fields.__previous_value__;return nv(e)?kT(e):e}function tu(t){const e=Ci(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class zr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){return t==null}function nu(t){return t===0&&1/t==-1/0}function ST(t){return typeof t=="number"&&Number.isInteger(t)&&!nu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},jc={nullValue:"NULL_VALUE"};function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nv(t)?4:TT(t)?9007199254740991:10:j()}function vr(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tu(t).isEqual(tu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ci(r.timestampValue),o=Ci(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return bs(r.bytesValue).isEqual(bs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Me(r.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(r.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Me(r.integerValue)===Me(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Me(r.doubleValue),o=Me(i.doubleValue);return s===o?nu(s)===nu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ko(t.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(E_(s)!==E_(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!vr(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function ru(t,e){return(t.values||[]).find(n=>vr(n,e))!==void 0}function Ai(t,e){if(t===e)return 0;const n=Cs(t),r=Cs(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Me(i.integerValue||i.doubleValue),a=Me(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return S_(t.timestampValue,e.timestampValue);case 4:return S_(tu(t),tu(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(i,s){const o=bs(i),a=bs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ie(o[l],a[l]);if(u!==0)return u}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ie(Me(i.latitude),Me(s.latitude));return o!==0?o:ie(Me(i.longitude),Me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ai(o[l],a[l]);if(u)return u}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===di.mapValue&&s===di.mapValue)return 0;if(i===di.mapValue)return 1;if(s===di.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ie(a[c],u[c]);if(h!==0)return h;const d=Ai(o[a[c]],l[u[c]]);if(d!==0)return d}return ie(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function S_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Ci(t),r=Ci(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function No(t){return Qm(t)}function Qm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ci(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Qm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Qm(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function As(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ym(t){return!!t&&"integerValue"in t}function iu(t){return!!t&&"arrayValue"in t}function T_(t){return!!t&&"nullValue"in t}function x_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qc(t){return!!t&&"mapValue"in t}function yl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function vL(t){return"nullValue"in t?jc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?As(zr.empty(),F.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:j()}function wL(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?As(zr.empty(),F.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?di:j()}function b_(t,e){const n=Ai(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function C_(t,e){const n=Ai(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yl(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=yl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());qc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];qc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(yl(this.value))}}function xT(t){const e=[];return qs(t.fields,(n,r)=>{const i=new ze([n]);if(qc(r)){const s=xT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new we(e,0,X.min(),X.min(),gt.empty(),0)}static newFoundDocument(e,n,r){return new we(e,1,n,X.min(),r,0)}static newNoDocument(e,n){return new we(e,2,n,X.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new we(e,3,n,X.min(),gt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function A_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new _L(t,e,n,r,i,s,o)}function Rs(t){const e=B(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+No(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Pu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>No(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>No(r)).join(",")),e.ut=n}return e.ut}function IL(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${No(r.value)}`;var r}).join(", ")}]`),Pu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>No(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>No(n)).join(",")),`Target(${e})`}function Ou(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!AL(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!vr(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!P_(t.startAt,e.startAt)&&P_(t.endAt,e.endAt)}function Uh(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Bh(t,e){return t.filters.filter(n=>n instanceof yt&&n.field.isEqual(e))}function R_(t,e,n){let r=jc,i=!0;for(const s of Bh(t,e)){let o=jc,a=!0;switch(s.op){case"<":case"<=":o=vL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=jc}b_({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];b_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function N_(t,e,n){let r=di,i=!0;for(const s of Bh(t,e)){let o=di,a=!0;switch(s.op){case">=":case">":o=wL(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=di}C_({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];C_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}class yt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new EL(e,n,r):n==="array-contains"?new TL(e,r):n==="in"?new xL(e,r):n==="not-in"?new bL(e,r):n==="array-contains-any"?new CL(e,r):new yt(e,n,r)}static ct(e,n,r){return n==="in"?new kL(e,r):new SL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Ai(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.at(Ai(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class EL extends yt{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.at(n)}}class kL extends yt{constructor(e,n){super(e,"in",n),this.keys=bT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SL extends yt{constructor(e,n){super(e,"not-in",n),this.keys=bT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class TL extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return iu(n)&&ru(n.arrayValue,this.value)}}class xL extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ru(this.value.arrayValue,n)}}class bL extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ru(this.value.arrayValue,n)}}class CL extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ru(this.value.arrayValue,r))}}class Ri{constructor(e,n){this.position=e,this.inclusive=n}}class Do{constructor(e,n="asc"){this.field=e,this.dir=n}}function AL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function D_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=Ai(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function P_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function CT(t,e,n,r,i,s,o,a){return new Kr(t,e,n,r,i,s,o,a)}function fa(t){return new Kr(t)}function RL(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function iv(t){for(const e of t.filters)if(e.ht())return e.field;return null}function sv(t){return t.collectionGroup!==null}function Go(t){const e=B(t);if(e.lt===null){e.lt=[];const n=iv(e),r=rv(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Do(n)),e.lt.push(new Do(ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Do(ze.keyField(),s))}}}return e.lt}function Mn(t){const e=B(t);if(!e.ft)if(e.limitType==="F")e.ft=A_(e.path,e.collectionGroup,Go(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Go(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Do(s.field,o))}const r=e.endAt?new Ri(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ri(e.startAt.position,e.startAt.inclusive):null;e.ft=A_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function AT(t,e,n){return new Kr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lu(t,e){return Ou(Mn(t),Mn(e))&&t.limitType===e.limitType}function RT(t){return`${Rs(Mn(t))}|lt:${t.limitType}`}function Xm(t){return`Query(target=${IL(Mn(t))}; limitType=${t.limitType})`}function ov(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=D_(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Go(n),r)||n.endAt&&!function(i,s,o){const a=D_(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Go(n),r))}(t,e)}function NT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DT(t){return(e,n)=>{let r=!1;for(const i of Go(t)){const s=NL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function NL(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ai(a,l):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nu(e)?"-0":e}}function OT(t){return{integerValue:""+t}}function LT(t,e){return ST(e)?OT(e):PT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this._=void 0}}function DL(t,e,n){return t instanceof Qo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ns?FT(t,e):t instanceof Ds?$T(t,e):function(r,i){const s=MT(r,i),o=O_(s)+O_(r._t);return Ym(s)&&Ym(r._t)?OT(o):PT(r.wt,o)}(t,e)}function PL(t,e,n){return t instanceof Ns?FT(t,e):t instanceof Ds?$T(t,e):n}function MT(t,e){return t instanceof Yo?Ym(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Qo extends Dd{}class Ns extends Dd{constructor(e){super(),this.elements=e}}function FT(t,e){const n=UT(e);for(const r of t.elements)n.some(i=>vr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ds extends Dd{constructor(e){super(),this.elements=e}}function $T(t,e){let n=UT(e);for(const r of t.elements)n=n.filter(i=>!vr(i,r));return{arrayValue:{values:n}}}class Yo extends Dd{constructor(e,n){super(),this.wt=e,this._t=n}}function O_(t){return Me(t.integerValue||t.doubleValue)}function UT(t){return iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n){this.field=e,this.transform=n}}function OL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ns&&r instanceof Ns||n instanceof Ds&&r instanceof Ds?Ko(n.elements,r.elements,vr):n instanceof Yo&&r instanceof Yo?vr(n._t,r._t):n instanceof Qo&&r instanceof Qo}(t.transform,e.transform)}class LL{constructor(e,n){this.version=e,this.transformResults=n}}class De{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pd{}function BT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ma(t.key,De.none()):new pa(t.key,t.data,De.none());{const n=t.data,r=gt.empty();let i=new ge(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Gr(t.key,r,new gn(i.toArray()),De.none())}}function ML(t,e,n){t instanceof pa?function(r,i,s){const o=r.value.clone(),a=M_(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Gr?function(r,i,s){if(!Hc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=M_(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(VT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function vl(t,e,n,r){return t instanceof pa?function(i,s,o,a){if(!Hc(i.precondition,s))return o;const l=i.value.clone(),u=F_(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gr?function(i,s,o,a){if(!Hc(i.precondition,s))return o;const l=F_(i.fieldTransforms,a,s),u=s.data;return u.setAll(VT(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Hc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function FL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=MT(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function L_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ko(n,r,(i,s)=>OL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pa extends Pd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gr extends Pd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function VT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function M_(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,PL(o,a,n[i]))}return r}function F_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,DL(s,o,e))}return r}class ma extends Pd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class av extends Pd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,le;function zT(t){switch(t){default:return j();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function jT(t){if(t===void 0)return Ke("GRPC error has no .code"),b.UNKNOWN;switch(t){case je.OK:return b.OK;case je.CANCELLED:return b.CANCELLED;case je.UNKNOWN:return b.UNKNOWN;case je.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case je.INTERNAL:return b.INTERNAL;case je.UNAVAILABLE:return b.UNAVAILABLE;case je.UNAUTHENTICATED:return b.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case je.NOT_FOUND:return b.NOT_FOUND;case je.ALREADY_EXISTS:return b.ALREADY_EXISTS;case je.PERMISSION_DENIED:return b.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case je.ABORTED:return b.ABORTED;case je.OUT_OF_RANGE:return b.OUT_OF_RANGE;case je.UNIMPLEMENTED:return b.UNIMPLEMENTED;case je.DATA_LOSS:return b.DATA_LOSS;default:return j()}}(le=je||(je={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ET(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=new Fe(F.comparator);function rn(){return UL}const qT=new Fe(F.comparator);function nl(...t){let e=qT;for(const n of t)e=e.insert(n.key,n);return e}function HT(t){let e=qT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return wl()}function WT(){return wl()}function wl(){return new zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const BL=new Fe(F.comparator),VL=new ge(F.comparator);function se(...t){let e=VL;for(const n of t)e=e.add(n);return e}const zL=new ge(ie);function Od(){return zL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,$u.createSynthesizedTargetChangeForCurrentChange(e,n)),new Fu(X.min(),r,Od(),rn(),se())}}class $u{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new $u(tt.EMPTY_BYTE_STRING,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class KT{constructor(e,n){this.targetId=e,this.It=n}}class GT{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $_{constructor(){this.Tt=0,this.Et=B_(),this.At=tt.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=se(),n=se(),r=se();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new $u(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=B_()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class jL{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=rn(),this.Bt=U_(),this.Lt=new ge(ie)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Ot(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(Uh(s))if(r===0){const o=new F(s.path);this.Kt(n,o,we.newNoDocument(o,X.min()))}else J(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&Uh(a.target)){const l=new F(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,we.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=se();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ht(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new Fu(e,n,this.Lt,this.$t,r);return this.$t=rn(),this.Bt=U_(),this.Lt=new ge(ie),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new $_,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new ge(ie),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new $_),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function U_(){return new Fe(F.comparator)}function B_(){return new Fe(F.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class WL{constructor(e,n){this.databaseId=e,this.dt=n}}function su(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QT(t,e){return t.dt?e.toBase64():e.toUint8Array()}function KL(t,e){return su(t,e.toTimestamp())}function at(t){return J(!!t),X.fromTimestamp(function(e){const n=Ci(e);return new Ae(n.seconds,n.nanos)}(t))}function lv(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function YT(t){const e=ue.fromString(t);return J(ix(e)),e}function ou(t,e){return lv(t.databaseId,e.path)}function mr(t,e){const n=YT(e);if(n.get(1)!==t.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(JT(n))}function Jm(t,e){return lv(t.databaseId,e)}function XT(t){const e=YT(t);return e.length===4?ue.emptyPath():JT(e)}function au(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function JT(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function V_(t,e,n){return{name:ou(t,e),fields:n.value.mapValue.fields}}function ZT(t,e,n){const r=mr(t,e.name),i=at(e.updateTime),s=new gt({mapValue:{fields:e.fields}}),o=we.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function GL(t,e){return"found"in e?function(n,r){J(!!r.found),r.found.name,r.found.updateTime;const i=mr(n,r.found.name),s=at(r.found.updateTime),o=new gt({mapValue:{fields:r.found.fields}});return we.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){J(!!r.missing),J(!!r.readTime);const i=mr(n,r.missing),s=at(r.readTime);return we.newNoDocument(i,s)}(t,e):j()}function QL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.dt?(J(u===void 0||typeof u=="string"),tt.fromBase64String(u||"")):(J(u===void 0||u instanceof Uint8Array),tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?b.UNKNOWN:jT(l.code);return new N(u,l.message||"")}(o);n=new GT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mr(t,r.document.name),s=at(r.document.updateTime),o=new gt({mapValue:{fields:r.document.fields}}),a=we.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Wc(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mr(t,r.document),s=r.readTime?at(r.readTime):X.min(),o=we.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Wc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mr(t,r.document),s=r.removedTargetIds||[];n=new Wc([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new $L(i),o=r.targetId;n=new KT(o,s)}}return n}function lu(t,e){let n;if(e instanceof pa)n={update:V_(t,e.key,e.value)};else if(e instanceof ma)n={delete:ou(t,e.key)};else if(e instanceof Gr)n={update:V_(t,e.key,e.data),updateMask:nM(e.fieldMask)};else{if(!(e instanceof av))return j();n={verify:ou(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Qo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ns)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ds)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yo)return{fieldPath:s.field.canonicalString(),increment:o._t};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:KL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(t,e.precondition)),n}function Zm(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?De.updateTime(at(i.updateTime)):i.exists!==void 0?De.exists(i.exists):De.none()}(e.currentDocument):De.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)J(o.setToServerValue==="REQUEST_TIME"),a=new Qo;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Ns(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Ds(u)}else"increment"in o?a=new Yo(s,o.increment):j();const l=ze.fromServerFormat(o.fieldPath);return new Mu(l,a)}(t,i)):[];if(e.update){e.update.name;const i=mr(t,e.update.name),s=new gt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new gn(l.map(u=>ze.fromServerFormat(u)))}(e.updateMask);return new Gr(i,s,o,n,r)}return new pa(i,s,n,r)}if(e.delete){const i=mr(t,e.delete);return new ma(i,n)}if(e.verify){const i=mr(t,e.verify);return new av(i,n)}return j()}function YL(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?at(r.updateTime):at(i);return s.isEqual(X.min())&&(s=at(i)),new LL(s,r.transformResults||[])}(n,e))):[]}function ex(t,e){return{documents:[Jm(t,e.path)]}}function tx(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Jm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(x_(h.value))return{unaryFilter:{field:no(h.field),op:"IS_NAN"}};if(T_(h.value))return{unaryFilter:{field:no(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(x_(h.value))return{unaryFilter:{field:no(h.field),op:"IS_NOT_NAN"}};if(T_(h.value))return{unaryFilter:{field:no(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:no(h.field),op:ZL(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:no(c.field),direction:JL(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.dt||Pu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function nx(t){let e=XT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=rx(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Do(Eo(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Pu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ri(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ri(d,h)}(n.endAt)),CT(e,i,o,s,a,"F",l,u)}function XL(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function rx(t){return t?t.unaryFilter!==void 0?[tM(t)]:t.fieldFilter!==void 0?[eM(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>rx(e)).reduce((e,n)=>e.concat(n)):j():[]}function JL(t){return qL[t]}function ZL(t){return HL[t]}function no(t){return{fieldPath:t.canonicalString()}}function Eo(t){return ze.fromServerFormat(t.fieldPath)}function eM(t){return yt.create(Eo(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function tM(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Eo(t.unaryFilter.field);return yt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Eo(t.unaryFilter.field);return yt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Eo(t.unaryFilter.field);return yt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Eo(t.unaryFilter.field);return yt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function nM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ix(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=z_(e)),e=rM(t.get(n),e);return z_(e)}function rM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function z_(t){return t+""}function hr(t){const e=t.length;if(J(e>=2),e===2)return J(t.charAt(0)===""&&t.charAt(1)===""),ue.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&j(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:j()}s=o+2}return new ue(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t,e){return[t,Ht(e)]}function sx(t,e,n){return[t,Ht(e),n]}const iM={},sM=["prefixPath","collectionGroup","readTime","documentId"],oM=["prefixPath","collectionGroup","documentId"],aM=["collectionGroup","readTime","prefixPath","documentId"],lM=["canonicalId","targetId"],uM=["targetId","path"],cM=["path","targetId"],hM=["collectionId","parent"],dM=["indexId","uid"],fM=["uid","sequenceNumber"],pM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],mM=["indexId","uid","orderedDocumentKey"],gM=["userId","collectionPath","documentId"],yM=["userId","collectionPath","largestBatchId"],vM=["userId","collectionGroup","largestBatchId"],ox=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],wM=[...ox,"documentOverlays"],ax=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lx=ax,_M=[...lx,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg extends IT{constructor(e,n){super(),this.ee=e,this.currentSequenceNumber=n}}function ct(t,e){const n=B(t);return Gn.N(n.ee,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ML(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=WT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=BT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Ko(this.mutations,e.mutations,(n,r)=>L_(n,r))&&Ko(this.baseMutations,e.baseMutations,(n,r)=>L_(n,r))}}class cv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=BL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cv(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r,i,s=X.min(),o=X.min(),a=tt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.ne=e}}function IM(t,e){let n;if(e.document)n=ZT(t.ne,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=F.fromSegments(e.noDocument.path),i=Os(e.noDocument.readTime);n=we.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return j();{const r=F.fromSegments(e.unknownDocument.path),i=Os(e.unknownDocument.version);n=we.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Ae(r[0],r[1]);return X.fromTimestamp(i)}(e.readTime)),n}function q_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Vh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:ou(i,s.key),fields:s.data.value.mapValue.fields,updateTime:su(i,s.version.toTimestamp())}}(t.ne,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ps(e.version)};else{if(!e.isUnknownDocument())return j();r.unknownDocument={path:n.path.toArray(),version:Ps(e.version)}}return r}function Vh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ps(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Os(t){const e=new Ae(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function es(t,e){const n=(e.baseMutations||[]).map(s=>Zm(t.ne,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Zm(t.ne,s)),i=Ae.fromMillis(e.localWriteTimeMs);return new uv(e.batchId,i,n,r)}function rl(t){const e=Os(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Os(t.lastLimboFreeSnapshotVersion):X.min();let r;var i;return t.query.documents!==void 0?(J((i=t.query).documents.length===1),r=Mn(fa(XT(i.documents[0])))):r=function(s){return Mn(nx(s))}(t.query),new Ii(r,t.targetId,0,t.lastListenSequenceNumber,e,n,tt.fromBase64String(t.resumeToken))}function cx(t,e){const n=Ps(e.snapshotVersion),r=Ps(e.lastLimboFreeSnapshotVersion);let i;i=Uh(e.target)?ex(t.ne,e.target):tx(t.ne,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Rs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function dv(t){const e=nx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?AT(e,e.limit,"L"):e}function pp(t,e){return new hv(e.largestBatchId,Zm(t.ne,e.overlayMutation))}function H_(t,e){const n=e.path.lastSegment();return[t,Ht(e.path.popLast()),n]}function W_(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ps(r.readTime),documentKey:Ht(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{getBundleMetadata(e,n){return K_(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Os(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return K_(e).put({bundleId:(r=n).id,createTime:Ps(at(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return G_(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:dv(i.bundledQuery),readTime:Os(i.readTime)};var i})}saveNamedQuery(e,n){return G_(e).put(function(r){return{name:r.name,readTime:Ps(at(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function K_(t){return ct(t,"bundles")}function G_(t){return ct(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n){this.wt=e,this.userId=n}static se(e,n){const r=n.uid||"";return new Ld(e,r)}getOverlay(e,n){return $a(e).get(H_(this.userId,n)).next(r=>r?pp(this.wt,r):null)}getOverlays(e,n){const r=cr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new hv(n,o);i.push(this.ie(e,a))}),T.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ht(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push($a(e).W("collectionPathOverlayIndex",a))}),T.waitFor(s)}getOverlaysForCollection(e,n,r){const i=cr(),s=Ht(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return $a(e).K("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=pp(this.wt,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=cr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return $a(e).J({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=pp(this.wt,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}ie(e,n){return $a(e).put(function(r,i,s){const[o,a,l]=H_(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:lu(r.ne,s.mutation)}}(this.wt,this.userId,n))}}function $a(t){return ct(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){}re(e,n){this.oe(e,n),n.ue()}oe(e,n){if("nullValue"in e)this.ce(n,5);else if("booleanValue"in e)this.ce(n,10),n.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(n,15),n.ae(Me(e.integerValue));else if("doubleValue"in e){const r=Me(e.doubleValue);isNaN(r)?this.ce(n,13):(this.ce(n,15),nu(r)?n.ae(0):n.ae(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ce(n,20),typeof r=="string"?n.he(r):(n.he(`${r.seconds||""}`),n.ae(r.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,n),this.fe(n);else if("bytesValue"in e)this.ce(n,30),n.de(bs(e.bytesValue)),this.fe(n);else if("referenceValue"in e)this._e(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ce(n,45),n.ae(r.latitude||0),n.ae(r.longitude||0)}else"mapValue"in e?TT(e)?this.ce(n,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,n),this.fe(n)):"arrayValue"in e?(this.me(e.arrayValue,n),this.fe(n)):j()}le(e,n){this.ce(n,25),this.ge(e,n)}ge(e,n){n.he(e)}we(e,n){const r=e.fields||{};this.ce(n,55);for(const i of Object.keys(r))this.le(i,n),this.oe(r[i],n)}me(e,n){const r=e.values||[];this.ce(n,50);for(const i of r)this.oe(i,n)}_e(e,n){this.ce(n,37),F.fromName(e).path.forEach(r=>{this.ce(n,60),this.ge(r,n)})}ce(e,n){e.ae(n)}fe(e){e.ae(2)}}ts.ye=new ts;function kM(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function Q_(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=kM(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class SM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ie(r.value),r=n.next();this.Te()}Ee(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ae(r.value),r=n.next();this.Re()}be(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ie(r);else if(r<2048)this.Ie(960|r>>>6),this.Ie(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ie(480|r>>>12),this.Ie(128|63&r>>>6),this.Ie(128|63&r);else{const i=n.codePointAt(0);this.Ie(240|i>>>18),this.Ie(128|63&i>>>12),this.Ie(128|63&i>>>6),this.Ie(128|63&i)}}this.Te()}Pe(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const i=n.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}ve(e){const n=this.Ve(e),r=Q_(n);this.Se(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}De(e){const n=this.Ve(e),r=Q_(n);this.Se(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Oe(){return this.buffer.slice(0,this.position)}Ve(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ie(e){const n=255&e;n===0?(this.xe(0),this.xe(255)):n===255?(this.xe(255),this.xe(0)):this.xe(n)}Ae(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class TM{constructor(e){this.Me=e}de(e){this.Me.pe(e)}he(e){this.Me.be(e)}ae(e){this.Me.ve(e)}ue(){this.Me.Ce()}}class xM{constructor(e){this.Me=e}de(e){this.Me.Ee(e)}he(e){this.Me.Pe(e)}ae(e){this.Me.De(e)}ue(){this.Me.Ne()}}class Ua{constructor(){this.Me=new SM,this.Fe=new TM(this.Me),this.$e=new xM(this.Me)}seed(e){this.Me.seed(e)}Be(e){return e===0?this.Fe:this.$e}Oe(){return this.Me.Oe()}reset(){this.Me.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Le(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ns(this.indexId,this.documentKey,this.arrayValue,r)}}function Ki(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Y_(t.arrayValue,e.arrayValue),n!==0?n:(n=Y_(t.directionalValue,e.directionalValue),n!==0?n:F.comparator(t.documentKey,e.documentKey)))}function Y_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const n of e.filters){const r=n;r.ht()?this.Ke=r:this.qe.push(r)}}Ge(e){const n=Gm(e);if(n!==void 0&&!this.Qe(n))return!1;const r=Ji(e);let i=0,s=0;for(;i<r.length&&this.Qe(r[i]);++i);if(i===r.length)return!0;if(this.Ke!==void 0){const o=r[i];if(!this.je(this.Ke,o)||!this.We(this.Ue[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ue.length||!this.We(this.Ue[s++],o))return!1}return!0}Qe(e){for(const n of this.qe)if(this.je(n,e))return!0;return!1}je(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}We(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(){this.ze=new fv}addToCollectionParentIndex(e,n){return this.ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(wn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(wn.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class fv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ge(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ge(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Uint8Array(0);class AM{constructor(e,n){this.user=e,this.databaseId=n,this.He=new fv,this.Je=new zi(r=>Rs(r),(r,i)=>Ou(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.He.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.He.add(n)});const s={collectionId:r,parent:Ht(i)};return X_(e).put(s)}return T.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[gT(n),""],!1,!0);return X_(e).K(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(hr(o.parent))}return r})}addFieldIndex(e,n){const r=Ec(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Va(e);return s.next(a=>{o.put(W_(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ec(e),i=Va(e),s=Ba(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Ba(e);let i=!0;const s=new Map;return T.forEach(this.Ye(n),o=>this.Xe(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=se();const a=[];return T.forEach(s,(l,u)=>{var c;D("IndexedDbIndexManager",`Using index ${c=l,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${Rs(n)}`);const h=function(g,S){const x=Gm(S);if(x===void 0)return null;for(const E of Bh(g,x.fieldPath))switch(E.op){case"array-contains-any":return E.value.arrayValue.values||[];case"array-contains":return[E.value]}return null}(u,l),d=function(g,S){const x=new Map;for(const E of Ji(S))for(const C of Bh(g,E.fieldPath))switch(C.op){case"==":case"in":x.set(E.fieldPath.canonicalString(),C.value);break;case"not-in":case"!=":return x.set(E.fieldPath.canonicalString(),C.value),Array.from(x.values())}return null}(u,l),f=function(g,S){const x=[];let E=!0;for(const C of Ji(S)){const R=C.kind===0?R_(g,C.fieldPath,g.startAt):N_(g,C.fieldPath,g.startAt);x.push(R.value),E&&(E=R.inclusive)}return new Ri(x,E)}(u,l),p=function(g,S){const x=[];let E=!0;for(const C of Ji(S)){const R=C.kind===0?N_(g,C.fieldPath,g.endAt):R_(g,C.fieldPath,g.endAt);x.push(R.value),E&&(E=R.inclusive)}return new Ri(x,E)}(u,l),v=this.Ze(l,u,f),k=this.Ze(l,u,p),m=this.tn(l,u,d),y=this.en(l.indexId,h,v,f.inclusive,k,p.inclusive,m);return T.forEach(y,g=>r.j(g,n.limit).next(S=>{S.forEach(x=>{const E=F.fromSegments(x.documentKey);o.has(E)||(o=o.add(E),a.push(E))})}))}).next(()=>a)}return T.resolve(null)})}Ye(e){let n=this.Je.get(e);return n||(n=[e],this.Je.set(e,n),n)}en(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.nn(n[h/u]):Ic,f=this.sn(e,d,r[h%u],i),p=this.rn(e,d,s[h%u],o),v=a.map(k=>this.sn(e,d,k,!0));c.push(...this.createRange(f,p,v))}return c}sn(e,n,r,i){const s=new ns(e,F.empty(),n,r);return i?s:s.Le()}rn(e,n,r,i){const s=new ns(e,F.empty(),n,r);return i?s.Le():s}Xe(e,n){const r=new bM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Ge(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;return T.forEach(this.Ye(n),i=>this.Xe(e,i).next(s=>{s?r!==0&&s.fields.length<function(o){let a=new ge(ze.comparator),l=!1;for(const u of o.filters){const c=u;c.field.isKeyField()||(c.op==="array-contains"||c.op==="array-contains-any"?l=!0:a=a.add(c.field))}for(const u of o.orderBy)u.field.isKeyField()||(a=a.add(u.field));return a.size+(l?1:0)}(i)&&(r=1):r=0})).next(()=>r)}on(e,n){const r=new Ua;for(const i of Ji(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Be(i.kind);ts.ye.re(s,o)}return r.Oe()}nn(e){const n=new Ua;return ts.ye.re(e,n.Be(0)),n.Oe()}un(e,n){const r=new Ua;return ts.ye.re(As(this.databaseId,n),r.Be(function(i){const s=Ji(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Oe()}tn(e,n,r){if(r===null)return[];let i=[];i.push(new Ua);let s=0;for(const o of Ji(e)){const a=r[s++];for(const l of i)if(this.cn(n,o.fieldPath)&&iu(a))i=this.an(i,o,a);else{const u=l.Be(o.kind);ts.ye.re(a,u)}}return this.hn(i)}Ze(e,n,r){return this.tn(e,n,r.position)}hn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Oe();return n}an(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ua;l.seed(a.Oe()),ts.ye.re(o,l.Be(n.kind)),s.push(l)}return s}cn(e,n){return!!e.filters.find(r=>r instanceof yt&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ec(e),i=Va(e);return(n?r.K("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.K()).next(s=>{const o=[];return T.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(u,c){const h=c?new $h(c.sequenceNumber,new wn(Os(c.readTime),new F(hr(c.documentKey)),c.largestBatchId)):$h.empty(),d=u.fields.map(([f,p])=>new cL(ze.fromServerFormat(f),p));return new yT(u.indexId,u.collectionGroup,d,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ie(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ec(e),s=Va(e);return this.ln(e).next(o=>i.K("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>T.forEach(a,l=>s.put(W_(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return T.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?T.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),T.forEach(a,l=>this.fn(e,i,l).next(u=>{const c=this.dn(s,l);return u.isEqual(c)?T.resolve():this._n(e,s,l,u,c)}))))})}wn(e,n,r,i){return Ba(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.un(r,n.key),documentKey:n.key.path.toArray()})}mn(e,n,r,i){return Ba(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.un(r,n.key),n.key.path.toArray()])}fn(e,n,r){const i=Ba(e);let s=new ge(Ki);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.un(r,n)])},(o,a)=>{s=s.add(new ns(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}dn(e,n){let r=new ge(Ki);const i=this.on(n,e);if(i==null)return r;const s=Gm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(iu(o))for(const a of o.arrayValue.values||[])r=r.add(new ns(n.indexId,e.key,this.nn(a),i))}else r=r.add(new ns(n.indexId,e.key,Ic,i));return r}_n(e,n,r,i,s){D("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,l,u,c,h){const d=a.getIterator(),f=l.getIterator();let p=to(d),v=to(f);for(;p||v;){let k=!1,m=!1;if(p&&v){const y=u(p,v);y<0?m=!0:y>0&&(k=!0)}else p!=null?m=!0:k=!0;k?(c(v),v=to(f)):m?(h(p),p=to(d)):(p=to(d),v=to(f))}}(i,s,Ki,a=>{o.push(this.wn(e,n,r,a))},a=>{o.push(this.mn(e,n,r,a))}),T.waitFor(o)}ln(e){let n=1;return Va(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Ki(o,a)).filter((o,a,l)=>!a||Ki(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ki(o,e),l=Ki(o,n);if(a===0)i[0]=e.Le();else if(a>0&&l<0)i.push(o),i.push(o.Le());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ic,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ic,[]]));return s}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(J_)}getMinOffset(e,n){return T.mapArray(this.Ye(n),r=>this.Xe(e,r).next(i=>i||j())).next(J_)}}function X_(t){return ct(t,"collectionParents")}function Ba(t){return ct(t,"indexEntries")}function Ec(t){return ct(t,"indexConfiguration")}function Va(t){return ct(t,"indexState")}function J_(t){J(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;ev(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new wn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{J(a===1)}));const u=[];for(const c of n.mutations){const h=sx(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return T.waitFor(s).next(()=>u)}function zh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw j();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);class Md{constructor(e,n,r,i){this.userId=e,this.wt=n,this.indexManager=r,this.referenceDelegate=i,this.gn={}}static se(e,n,r,i){J(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Md(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ti(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=oo(e),o=ti(e);return o.add({}).next(a=>{J(typeof a=="number");const l=new uv(a,n,r,i),u=function(d,f,p){const v=p.baseMutations.map(m=>lu(d.ne,m)),k=p.mutations.map(m=>lu(d.ne,m));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:v,mutations:k}}(this.wt,this.userId,l),c=[];let h=new ge((d,f)=>ie(d.canonicalString(),f.canonicalString()));for(const d of i){const f=sx(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,iM))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.gn[a]=l.keys()}),T.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return ti(e).get(n).next(r=>r?(J(r.userId===this.userId),es(this.wt,r)):null)}yn(e,n){return this.gn[n]?T.resolve(this.gn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.gn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ti(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(J(a.batchId>=r),s=es(this.wt,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ti(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ti(e).K("userMutationsIndex",n).next(r=>r.map(i=>es(this.wt,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Kc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return oo(e).J({range:i},(o,a,l)=>{const[u,c,h]=o,d=hr(c);if(u===this.userId&&n.path.isEqual(d))return ti(e).get(h).next(f=>{if(!f)throw j();J(f.userId===this.userId),s.push(es(this.wt,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(ie);const i=[];return n.forEach(s=>{const o=Kc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=oo(e).J({range:a},(u,c,h)=>{const[d,f,p]=u,v=hr(f);d===this.userId&&s.path.isEqual(v)?r=r.add(p):h.done()});i.push(l)}),T.waitFor(i).next(()=>this.pn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Kc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ge(ie);return oo(e).J({range:o},(l,u,c)=>{const[h,d,f]=l,p=hr(d);h===this.userId&&r.isPrefixOf(p)?p.length===i&&(a=a.add(f)):c.done()}).next(()=>this.pn(e,a))}pn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ti(e).get(s).next(o=>{if(o===null)throw j();J(o.userId===this.userId),r.push(es(this.wt,o))}))}),T.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return hx(e.ee,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.In(n.batchId)}),T.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return T.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return oo(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=hr(s[1]);i.push(l)}else a.done()}).next(()=>{J(i.length===0)})})}containsKey(e,n){return dx(e,this.userId,n)}Tn(e){return fx(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function dx(t,e,n){const r=Kc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return oo(t).J({range:s,H:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function ti(t){return ct(t,"mutations")}function oo(t){return ct(t,"documentMutations")}function fx(t){return ct(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Ls(0)}static Rn(){return new Ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e,n){this.referenceDelegate=e,this.wt=n}allocateTargetId(e){return this.bn(e).next(n=>{const r=new Ls(n.highestTargetId);return n.highestTargetId=r.next(),this.Pn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.bn(e).next(n=>X.fromTimestamp(new Ae(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Pn(e,i)))}addTargetData(e,n){return this.vn(e,n).next(()=>this.bn(e).next(r=>(r.targetCount+=1,this.Vn(n,r),this.Pn(e,r))))}updateTargetData(e,n){return this.vn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ro(e).delete(n.targetId)).next(()=>this.bn(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.Pn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ro(e).J((o,a)=>{const l=rl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>T.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ro(e).J((r,i)=>{const s=rl(i);n(s)})}bn(e){return e1(e).get("targetGlobalKey").next(n=>(J(n!==null),n))}Pn(e,n){return e1(e).put("targetGlobalKey",n)}vn(e,n){return ro(e).put(cx(this.wt,n))}Vn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Rs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ro(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=rl(a);Ou(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=li(e);return n.forEach(o=>{const a=Ht(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),T.waitFor(i)}removeMatchingKeys(e,n,r){const i=li(e);return T.forEach(n,s=>{const o=Ht(s.path);return T.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=li(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=li(e);let s=se();return i.J({range:r,H:!0},(o,a,l)=>{const u=hr(o[1]),c=new F(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Ht(n.path),i=IDBKeyRange.bound([r],[gT(r)],!1,!0);let s=0;return li(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}te(e,n){return ro(e).get(n).next(r=>r?rl(r):null)}}function ro(t){return ct(t,"targets")}function e1(t){return ct(t,"targetGlobal")}function li(t){return ct(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class NM{constructor(e){this.Sn=e,this.buffer=new ge(t1),this.Dn=0}Cn(){return++this.Dn}xn(e){const n=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();t1(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Nn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return this.Nn!==null}kn(e){D("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vi(n)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Bi(n)}await this.kn(3e5)})}}class PM{constructor(e,n){this.On=e,this.params=n}calculateTargetCount(e,n){return this.On.Mn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return T.resolve(nn.ot);const r=new NM(n);return this.On.forEachTarget(e,i=>r.xn(i.sequenceNumber)).next(()=>this.On.Fn(e,i=>r.xn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.On.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.On.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),T.resolve(Z_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Z_):this.$n(e,n))}getCacheSize(e){return this.On.getCacheSize(e)}$n(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Km()<=ce.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),T.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new PM(r,i)}(this,n)}Mn(e){const n=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Bn(e){let n=0;return this.Fn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Fn(e,n){return this.Ln(e,(r,i)=>n(i))}addReference(e,n,r){return kc(e,r)}removeReference(e,n,r){return kc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return kc(e,n)}Un(e,n){return function(r,i){let s=!1;return fx(r).Y(o=>dx(r,o,i).next(a=>(a&&(s=!0),T.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ln(e,(o,a)=>{if(a<=n){const l=this.Un(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),li(e).delete([0,Ht(o.path)])))});i.push(l)}}).next(()=>T.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return kc(e,n)}Ln(e,n){const r=li(e);let i,s=nn.ot;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==nn.ot&&n(new F(hr(i)),s),s=u,i=l):s=nn.ot}).next(()=>{s!==nn.ot&&n(new F(hr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function kc(t,e){return li(t).put(function(n,r){return{targetId:0,path:Ht(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.changes=new zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Gi(e).put(r)}removeEntry(e,n,r){return Gi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Vh(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.qn(e,r)))}getEntry(e,n){let r=we.newInvalidDocument(n);return Gi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(za(n))},(i,s)=>{r=this.Kn(n,s)}).next(()=>r)}Gn(e,n){let r={size:0,document:we.newInvalidDocument(n)};return Gi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(za(n))},(i,s)=>{r={document:this.Kn(n,s),size:zh(s)}}).next(()=>r)}getEntries(e,n){let r=rn();return this.Qn(e,n,(i,s)=>{const o=this.Kn(i,s);r=r.insert(i,o)}).next(()=>r)}jn(e,n){let r=rn(),i=new Fe(F.comparator);return this.Qn(e,n,(s,o)=>{const a=this.Kn(s,o);r=r.insert(s,a),i=i.insert(s,zh(o))}).next(()=>({documents:r,Wn:i}))}Qn(e,n,r){if(n.isEmpty())return T.resolve();let i=new ge(i1);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(za(i.first()),za(i.last())),o=i.getIterator();let a=o.getNext();return Gi(e).J({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=F.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&i1(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.q(za(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),Vh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gi(e).K(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=rn();for(const l of o){const u=this.Kn(F.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=rn();const o=r1(n,r),a=r1(n,wn.max());return Gi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.Kn(F.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new MM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return n1(e).get("remoteDocumentGlobalKey").next(n=>(J(!!n),n))}qn(e,n){return n1(e).put("remoteDocumentGlobalKey",n)}Kn(e,n){if(n){const r=IM(this.wt,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return we.newInvalidDocument(e)}}function mx(t){return new LM(t)}class MM extends px{constructor(e,n){super(),this.zn=e,this.trackRemovals=n,this.Hn=new zi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ge((s,o)=>ie(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Hn.get(s);if(n.push(this.zn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=q_(this.zn.wt,o);i=i.add(s.path.popLast()),r+=zh(l)-a.size,n.push(this.zn.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=q_(this.zn.wt,o.convertToNoDocument(X.min()));n.push(this.zn.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.zn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.zn.updateMetadata(e,r)),T.waitFor(n)}getFromCache(e,n){return this.zn.Gn(e,n).next(r=>(this.Hn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.zn.jn(e,n).next(({documents:r,Wn:i})=>(i.forEach((s,o)=>{this.Hn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function n1(t){return ct(t,"remoteDocumentGlobal")}function Gi(t){return ct(t,"remoteDocumentsV14")}function za(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function r1(t,e){const n=e.documentKey.path.toArray();return[t,Vh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function i1(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ie(n[s],r[s]),i)return i;return i=ie(n.length,r.length),i||(i=ie(n[n.length-2],r[r.length-2]),i||ie(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&vl(r.mutation,i,gn.empty(),Ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=nl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=rn();const o=wl(),a=wl();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Gr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),vl(c.mutation,u,c.mutation.getFieldMask(),Ae.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new FM(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wl();let i=new Fe((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||gn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||se()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=WT();c.forEach(d=>{if(!s.has(d)){const f=BT(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(cr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,se())).next(c=>({batchId:a,changes:HT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=nl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=nl();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new Kr(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,we.newInvalidDocument(u)))});let o=nl();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&vl(u.mutation,l,gn.empty(),Ae.now()),ov(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(we.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return T.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:at(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:dv(r.bundledQuery),readTime:at(r.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(){this.overlays=new Fe(F.comparator),this.Xn=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=cr(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=cr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=cr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hv(n,r));let s=this.Xn.get(n);s===void 0&&(s=se(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.Zn=new ge(rt.ts),this.es=new ge(rt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new rt(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new F(new ue([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new F(new ue([])),r=new rt(n,e),i=new rt(n,e+1);let s=se();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return F.comparator(e.key,n.key)||ie(e.ls,n.ls)}static ns(e,n){return ie(e.ls,n.ls)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new ge(rt.ts)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uv(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new rt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(ie);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),T.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new rt(new F(s),0);let a=new ge(ie);return this.ds.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ls)),!0)},o),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return T.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new rt(n,0),i=this.ds.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e){this.ps=e,this.docs=new Fe(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():we.newInvalidDocument(n))}getEntries(e,n){let r=rn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():we.newInvalidDocument(i))}),T.resolve(r)}getAllFromCollection(e,n,r){let i=rn();const s=new F(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||ev(wT(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,r,i){j()}Is(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zM(this)}getSize(e){return T.resolve(this.size)}}class zM extends px{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.persistence=e,this.Ts=new zi(n=>Rs(n),Ou),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Es=0,this.As=new pv,this.targetCount=0,this.Rs=Ls.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),T.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.vn(n),T.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,n){this.bs={},this.overlays={},this.Ps=new nn(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new jM(this),this.indexManager=new CM,this.remoteDocumentCache=function(r){return new VM(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new ux(n),this.Ds=new $M(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new BM(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new qM(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return T.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class qM extends IT{constructor(e){super(),this.currentSequenceNumber=e}}class Fd{constructor(e){this.persistence=e,this.ks=new pv,this.Os=null}static Ms(e){return new Fd(e)}get Fs(){if(this.Os)return this.Os;throw j()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),T.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Fs,r=>{const i=F.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return T.or([()=>T.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e){this.wt=e}O(e,n,r,i){const s=new Nd("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",j_,{unique:!0}),a.createObjectStore("documentMutations")}(e),s1(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=T.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),s1(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").K().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",j_,{unique:!0});const c=l.store("mutations"),h=u.map(d=>c.put(d));return T.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Bs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(s)))),r<7&&i>=7&&(o=o.next(()=>this.Us(s))),r<8&&i>=8&&(o=o.next(()=>this.qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Ks(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:gM});l.createIndex("collectionPathOverlayIndex",yM,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",vM,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:sM});l.createIndex("documentKeyIndex",oM),l.createIndex("collectionGroupIndex",aM)}(e)).next(()=>this.Gs(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.Qs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:dM}).createIndex("sequenceNumberIndex",fM,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:pM}).createIndex("documentKeyIndex",mM,{unique:!1})}(e))),o}Ls(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=zh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Bs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.K().next(i=>T.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.K("userMutationsIndex",o).next(a=>T.forEach(a,l=>{J(l.userId===s.userId);const u=es(this.wt,l);return hx(e,s.userId,u).next(()=>{})}))}))}Us(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new ue(o),u=function(c){return[0,Ht(c)]}(l);s.push(n.get(u).next(c=>c?T.resolve():(h=>n.put({targetId:0,path:Ht(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>T.waitFor(s))})}qs(e,n){e.createObjectStore("collectionParents",{keyPath:hM});const r=n.store("collectionParents"),i=new fv,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Ht(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new ue(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],u)=>{const c=hr(a);return s(c.popLast())}))}Ks(e){const n=e.store("targets");return n.J((r,i)=>{const s=rl(i),o=cx(this.wt,s);return n.put(o)})}Gs(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=(u=o,u.document?new F(ue.fromString(u.document.name).popFirst(5)):u.noDocument?F.fromSegments(u.noDocument.path):u.unknownDocument?F.fromSegments(u.unknownDocument.path):j()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>T.waitFor(i))}Qs(e,n){const r=n.store("mutations"),i=mx(this.wt),s=new yx(Fd.Ms,this.wt.ne);return r.K().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:se();es(this.wt,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),T.forEach(a,(l,u)=>{const c=new st(u),h=Ld.se(this.wt,c),d=s.getIndexManager(c),f=Md.se(c,this.wt,d,s.referenceDelegate);return new gx(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new eg(n,nn.ot),l).next()})})}}function s1(t){t.createObjectStore("targetDocuments",{keyPath:uM}).createIndex("documentTargetsIndex",cM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",lM,{unique:!0}),t.createObjectStore("targetGlobal")}const mp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class mv{constructor(e,n,r,i,s,o,a,l,u,c,h=14){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.js=s,this.window=o,this.document=a,this.Ws=u,this.zs=c,this.Hs=h,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=d=>Promise.resolve(),!mv.V())throw new N(b.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new OM(this,i),this.ei=n+"main",this.wt=new ux(l),this.ni=new Gn(this.ei,this.Hs,new HM(this.wt)),this.Vs=new RM(this.referenceDelegate,this.wt),this.remoteDocumentCache=mx(this.wt),this.Ds=new EM,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,c===!1&&Ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new N(b.FAILED_PRECONDITION,mp);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Vs.getHighestSequenceNumber(e))}).then(e=>{this.Ps=new nn(e,this.Ws)}).then(()=>{this.vs=!0}).catch(e=>(this.ni&&this.ni.close(),Promise.reject(e)))}ci(e){return this.ti=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget(async()=>{this.started&&await this.ii()}))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Sc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ai(e).next(n=>{n||(this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)))})}).next(()=>this.hi(e)).next(n=>this.isPrimary&&!n?this.li(e).next(()=>!1):!!n&&this.fi(e).next(()=>!0))).catch(e=>{if(Vi(e))return D("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.js.enqueueRetryable(()=>this.ti(e)),this.isPrimary=e})}ai(e){return ja(e).get("owner").next(n=>T.resolve(this.di(n)))}_i(e){return Sc(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ct(n,"clientMetadata");return r.K().next(i=>{const s=this.gi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return T.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.si)for(const n of e)this.si.removeItem(this.yi(n.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ii().then(()=>this.wi()).then(()=>this.ui()))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?T.resolve(!0):ja(e).get("owner").next(n=>{if(n!==null&&this.mi(n.leaseTimestampMs,5e3)&&!this.pi(n.ownerId)){if(this.di(n)&&this.networkEnabled)return!0;if(!this.di(n)){if(!n.allowTabSynchronization)throw new N(b.FAILED_PRECONDITION,mp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Sc(e).K().next(r=>this.gi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&D("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new eg(e,nn.ot);return this.li(n).next(()=>this._i(n))}),this.ni.close(),this.Ai()}gi(e,n){return e.filter(r=>this.mi(r.updateTimeMs,n)&&!this.pi(r.clientId))}Ri(){return this.runTransaction("getActiveClients","readonly",e=>Sc(e).K().next(n=>this.gi(n,18e5).map(r=>r.clientId)))}get started(){return this.vs}getMutationQueue(e,n){return Md.se(e,this.wt,n,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new AM(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return Ld.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,n,r){D("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Hs)===15?_M:o===14?lx:o===13?ax:o===12?wM:o===11?ox:void j();var o;let a;return this.ni.runTransaction(e,i,s,l=>(a=new eg(l,this.Ps?this.Ps.next():nn.ot),n==="readwrite-primary"?this.ai(a).next(u=>!!u||this.hi(a)).next(u=>{if(!u)throw Ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)),new N(b.FAILED_PRECONDITION,_T);return r(a)}).next(u=>this.fi(a).next(()=>u)):this.bi(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}bi(e){return ja(e).get("owner").next(n=>{if(n!==null&&this.mi(n.leaseTimestampMs,5e3)&&!this.pi(n.ownerId)&&!this.di(n)&&!(this.zs||this.allowTabSynchronization&&n.allowTabSynchronization))throw new N(b.FAILED_PRECONDITION,mp)})}fi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ja(e).put("owner",n)}static V(){return Gn.V()}li(e){const n=ja(e);return n.get("owner").next(r=>this.di(r)?(D("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):T.resolve())}mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ke(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ys=()=>{this.js.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ii()))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground=this.document.visibilityState==="visible")}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Js=()=>{this.Ii(),_D()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var n;try{const r=((n=this.si)===null||n===void 0?void 0:n.getItem(this.yi(e)))!==null;return D("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ke("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(e){Ke("Failed to set zombie client id.",e)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch{}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ja(t){return ct(t,"owner")}function Sc(t){return ct(t,"clientMetadata")}function gv(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){return T.resolve(null)}xi(e,n,r,i){return RL(n)||i.isEqual(X.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Oi(n,o,r,i)?this.Ni(e,n):(Km()<=ce.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xm(n)),this.Mi(e,o,n,vT(i,-1)))})}ki(e,n){let r=new ge(DT(e));return n.forEach((i,s)=>{ov(e,s)&&(r=r.add(s))}),r}Oi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return Km()<=ce.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Xm(n)),this.Di.getDocumentsMatchingQuery(e,n,wn.min())}Mi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Fe(ie),this.Bi=new zi(s=>Rs(s),Ou),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gx(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function wx(t,e,n,r){return new WM(t,e,n,r)}async function _x(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=se();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function KM(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=T.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const v=l.docVersions.get(f);J(v!==null),p.version.compareTo(v)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=se();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ix(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function GM(t,e){const n=B(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(tt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(p,v,k){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,f,c)&&a.push(n.Vs.updateTargetData(s,f))});let l=rn(),u=se();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Ex(s,o,e.documentUpdates).next(c=>{l=c.Gi,u=c.Qi})),!r.isEqual(X.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.$i=i,s))}function Ex(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=rn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function QM(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xo(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new Ii(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function Jo(t,e,n){const r=B(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vi(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function jh(t,e,n){const r=B(t);let i=X.min(),s=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=B(a),h=c.Bi.get(u);return h!==void 0?T.resolve(c.$i.get(h)):c.Vs.getTargetData(l,u)}(r,o,Mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:se())).next(a=>(Tx(r,NT(e),a),{documents:a,ji:s})))}function kx(t,e){const n=B(t),r=B(n.Vs),i=n.$i.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.te(s,e).next(o=>o?o.target:null))}function Sx(t,e){const n=B(t),r=n.Li.get(e)||X.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Ui.getAllFromCollectionGroup(i,e,vT(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Tx(n,e,i),i))}function Tx(t,e,n){let r=X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}async function YM(t,e,n,r){const i=B(t);let s=se(),o=rn();for(const u of n){const c=e.Wi(u.metadata.name);u.document&&(s=s.add(c));const h=e.zi(u);h.setReadTime(e.Hi(u.metadata.readTime)),o=o.insert(c,h)}const a=i.Ui.newChangeBuffer({trackRemovals:!0}),l=await Xo(i,function(u){return Mn(fa(ue.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Ex(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Vs.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Vs.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.Gi,c.Qi)).next(()=>c.Gi)))}async function XM(t,e,n=se()){const r=await Xo(t,Mn(dv(e.bundledQuery))),i=B(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=at(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ds.saveNamedQuery(s,e);const a=r.withResumeToken(tt.EMPTY_BYTE_STRING,o);return i.$i=i.$i.insert(a.targetId,a),i.Vs.updateTargetData(s,a).next(()=>i.Vs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Vs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ds.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t,e){return`firestore_clients_${t}_${e}`}function a1(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function gp(t,e){return`firestore_targets_${t}_${e}`}class qh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Ji(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new N(i.error.code,i.error.message))),o?new qh(e,n,i.state,s):(Ke("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _l{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Ji(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new N(r.error.code,r.error.message))),s?new _l(e,r.state,i):(Ke("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ji(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Od();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=ST(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Hh(e,s):(Ke("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class vv{constructor(e,n){this.clientId=e,this.onlineState=n}static Ji(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new vv(n.clientId,n.onlineState):(Ke("SharedClientState",`Failed to parse online state: ${e}`),null)}}class tg{constructor(){this.activeTargetIds=Od()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yp{constructor(e,n,r,i,s){this.window=e,this.js=n,this.persistenceKey=r,this.tr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new Fe(ie),this.started=!1,this.ir=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.rr=o1(this.persistenceKey,this.tr),this.ur=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.sr=this.sr.insert(this.tr,new tg),this.cr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.lr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.dr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const r of e){if(r===this.tr)continue;const i=this.getItem(o1(this.persistenceKey,r));if(i){const s=Hh.Ji(r,i);s&&(this.sr=this.sr.insert(s.clientId,s))}}this._r();const n=this.storage.getItem(this.lr);if(n){const r=this.wr(n);r&&this.mr(r)}for(const r of this.ir)this.nr(r);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let n=!1;return this.sr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,n,r){this.yr(e,n,r),this.pr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(gp(this.persistenceKey,e));if(r){const i=_l.Ji(e,r);i&&(n=i.state)}}return this.Ir.Xi(e),this._r(),n}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(gp(this.persistenceKey,e))}updateQueryState(e,n,r){this.Tr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.pr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return D("SharedClientState","READ",e,n),n}setItem(e,n){D("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){D("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const n=e;if(n.storageArea===this.storage){if(D("SharedClientState","EVENT",n.key,n.newValue),n.key===this.rr)return void Ke("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.cr.test(n.key)){if(n.newValue==null){const r=this.Rr(n.key);return this.br(r,null)}{const r=this.Pr(n.key,n.newValue);if(r)return this.br(r.clientId,r)}}else if(this.ar.test(n.key)){if(n.newValue!==null){const r=this.vr(n.key,n.newValue);if(r)return this.Vr(r)}}else if(this.hr.test(n.key)){if(n.newValue!==null){const r=this.Sr(n.key,n.newValue);if(r)return this.Dr(r)}}else if(n.key===this.lr){if(n.newValue!==null){const r=this.wr(n.newValue);if(r)return this.mr(r)}}else if(n.key===this.ur){const r=function(i){let s=nn.ot;if(i!=null)try{const o=JSON.parse(i);J(typeof o=="number"),s=o}catch(o){Ke("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==nn.ot&&this.sequenceNumberHandler(r)}else if(n.key===this.dr){const r=this.Cr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Nr(i)))}}}else this.ir.push(n)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,n,r){const i=new qh(this.currentUser,e,n,r),s=a1(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Yi())}pr(e){const n=a1(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Er(e){const n={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(n))}Tr(e,n,r){const i=gp(this.persistenceKey,e),s=new _l(e,n,r);this.setItem(i,s.Yi())}Ar(e){const n=JSON.stringify(Array.from(e));this.setItem(this.dr,n)}Rr(e){const n=this.cr.exec(e);return n?n[1]:null}Pr(e,n){const r=this.Rr(e);return Hh.Ji(r,n)}vr(e,n){const r=this.ar.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return qh.Ji(new st(s),i,n)}Sr(e,n){const r=this.hr.exec(e),i=Number(r[1]);return _l.Ji(i,n)}wr(e){return vv.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);D("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Or(e.targetId,e.state,e.error)}br(e,n){const r=n?this.sr.insert(e,n):this.sr.remove(e),i=this.gr(this.sr),s=this.gr(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Mr(o,a).then(()=>{this.sr=r})}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let n=Od();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class xx{constructor(){this.Fr=new tg,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new tg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);D("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>(D("RestConnection","Received: ",l),l),l=>{throw Zl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+da,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=ZM[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new JO;a.listenOnce(QO.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case fp.NO_ERROR:const u=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(u)),s(u);break;case fp.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case fp.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(p)>=0?p:b.UNKNOWN}(h.status);o(new N(d,h.message))}else o(new N(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(b.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=KO(),o=GO(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new XO({})),this.uo(a.initMessageHeaders,n,r),eS()||gd()||vD()||Ty()||wD()||Sy()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");D("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new eF({jr:p=>{h?D("Connection","Not sending because WebChannel is closed:",p):(c||(D("Connection","Opening WebChannel transport."),u.open(),c=!0),D("Connection","WebChannel sending:",p),u.send(p))},Wr:()=>u.close()}),f=(p,v,k)=>{p.listen(v,m=>{try{k(m)}catch(y){setTimeout(()=>{throw y},0)}})};return f(u,wc.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),f(u,wc.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),d.eo())}),f(u,wc.EventType.ERROR,p=>{h||(h=!0,Zl("Connection","WebChannel transport errored:",p),d.eo(new N(b.UNAVAILABLE,"The operation could not be completed")))}),f(u,wc.EventType.MESSAGE,p=>{var v;if(!h){const k=p.data[0];J(!!k);const m=k,y=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(y){D("Connection","WebChannel received error:",y);const g=y.status;let S=function(E){const C=je[E];if(C!==void 0)return jT(C)}(g),x=y.message;S===void 0&&(S=b.INTERNAL,x="Unknown error status: "+g+" with message "+y.message),h=!0,d.eo(new N(S,x)),u.close()}else D("Connection","WebChannel received:",k),d.no(k)}}),f(o,YO.STAT_EVENT,p=>{p.stat===w_.PROXY?D("Connection","Detected buffering proxy"):p.stat===w_.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(){return typeof window!="undefined"?window:null}function Gc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){return new WL(t,!0)}class wv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new wv(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nF extends Cx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=QL(this.wt,e),r=function(i){if(!("targetChange"in i))return X.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?X.min():s.readTime?at(s.readTime):X.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=au(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=Uh(a)?{documents:ex(i,a)}:{query:tx(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=QT(i,s.resumeToken):s.snapshotVersion.compareTo(X.min())>0&&(o.readTime=su(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=XL(this.wt,e);r&&(n.labels=r),this.Mo(n)}jo(e){const n={};n.database=au(this.wt),n.removeTarget=e,this.Mo(n)}}class rF extends Cx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=YL(e.writeResults,e.commitTime),r=at(e.commitTime);return this.listener.Jo(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=au(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lu(this.wt,r))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(b.UNKNOWN,i.toString())})}ao(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(b.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class sF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Ke(n),this.su=!1):D("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{ji(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=B(a);l.lu.add(4),await ga(l),l._u.set("Unknown"),l.lu.delete(4),await Bu(l)}(this))})}),this._u=new sF(r,i)}}async function Bu(t){if(ji(t))for(const e of t.fu)await e(!0)}async function ga(t){for(const e of t.fu)await e(!1)}function $d(t,e){const n=B(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ev(n)?Iv(n):va(n).Co()&&_v(n,e))}function uu(t,e){const n=B(t),r=va(n);n.hu.delete(e),r.Co()&&Ax(n,e),n.hu.size===0&&(r.Co()?r.ko():ji(n)&&n._u.set("Unknown"))}function _v(t,e){t.wu.Nt(e.targetId),va(t).Qo(e)}function Ax(t,e){t.wu.Nt(e),va(t).jo(e)}function Iv(t){t.wu=new jL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),va(t).start(),t._u.iu()}function Ev(t){return ji(t)&&!va(t).Do()&&t.hu.size>0}function ji(t){return B(t).lu.size===0}function Rx(t){t.wu=void 0}async function aF(t){t.hu.forEach((e,n)=>{_v(t,e)})}async function lF(t,e){Rx(t),Ev(t)?(t._u.uu(e),Iv(t)):t._u.set("Unknown")}async function uF(t,e,n){if(t._u.set("Online"),e instanceof GT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wh(t,r)}else if(e instanceof Wc?t.wu.Ut(e):e instanceof KT?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(X.min()))try{const r=await Ix(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(l);u&&i.hu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(tt.EMPTY_BYTE_STRING,l.snapshotVersion)),Ax(i,a);const u=new Ii(l.target,a,1,l.sequenceNumber);_v(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Wh(t,r)}}async function Wh(t,e,n){if(!Vi(e))throw e;t.lu.add(1),await ga(t),t._u.set("Offline"),n||(n=()=>Ix(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Bu(t)})}function Nx(t,e){return e().catch(n=>Wh(t,n,e))}async function ya(t){const e=B(t),n=Ni(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;cF(e);)try{const i=await QM(e.localStore,r);if(i===null){e.au.length===0&&n.ko();break}r=i.batchId,hF(e,i)}catch(i){await Wh(e,i)}Dx(e)&&Px(e)}function cF(t){return ji(t)&&t.au.length<10}function hF(t,e){t.au.push(e);const n=Ni(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Dx(t){return ji(t)&&!Ni(t).Do()&&t.au.length>0}function Px(t){Ni(t).start()}async function dF(t){Ni(t).Xo()}async function fF(t){const e=Ni(t);for(const n of t.au)e.Ho(n.mutations)}async function pF(t,e,n){const r=t.au.shift(),i=cv.from(r,e,n);await Nx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ya(t)}async function mF(t,e){e&&Ni(t).zo&&await async function(n,r){if(i=r.code,zT(i)&&i!==b.ABORTED){const s=n.au.shift();Ni(n).No(),await Nx(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ya(n)}var i}(t,e),Dx(t)&&Px(t)}async function u1(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=ji(n);n.lu.add(3),await ga(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Bu(n)}async function ng(t,e){const n=B(t);e?(n.lu.delete(2),await Bu(n)):e||(n.lu.add(2),await ga(n),n._u.set("Unknown"))}function va(t){return t.mu||(t.mu=function(e,n,r){const i=B(e);return i.tu(),new nF(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:aF.bind(null,t),Jr:lF.bind(null,t),Go:uF.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Ev(t)?Iv(t):t._u.set("Unknown")):(await t.mu.stop(),Rx(t))})),t.mu}function Ni(t){return t.gu||(t.gu=function(e,n,r){const i=B(e);return i.tu(),new rF(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:dF.bind(null,t),Jr:mF.bind(null,t),Yo:fF.bind(null,t),Jo:pF.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await ya(t)):(await t.gu.stop(),t.au.length>0&&(D("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new kv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(t,e){if(Ke("AsyncQueue",`${e}: ${t}`),Vi(t))return new N(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=nl(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.yu=new Fe(F.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):j():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zo{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Zo(e,n,Po.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(){this.Iu=void 0,this.listeners=[]}}class yF{constructor(){this.queries=new zi(e=>RT(e),Lu),this.onlineState="Unknown",this.Tu=new Set}}async function Sv(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gF),i)try{s.Iu=await n.onListen(r)}catch(o){const a=wa(o,`Initialization of query '${Xm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&xv(n)}async function Tv(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vF(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&xv(n)}function wF(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function xv(t){t.Tu.forEach(e=>{e.next()})}class bv{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e,n){this.payload=e,this.byteLength=n}Cu(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.wt=e}Wi(e){return mr(this.wt,e)}zi(e){return e.metadata.exists?ZT(this.wt,e.document,!1):we.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return at(e)}}class IF{constructor(e,n,r){this.xu=e,this.localStore=n,this.wt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Ox(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n;const r=ue.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ku(e){const n=new Map,r=new h1(this.wt);for(const i of e)if(i.metadata.queries){const s=r.Wi(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||se()).add(s);n.set(o,a)}}return n}async complete(){const e=await YM(this.localStore,new h1(this.wt),this.documents,this.xu.id),n=this.ku(this.documents);for(const r of this.queries)await XM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Mu:e}}}function Ox(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.key=e}}class Mx{constructor(e){this.key=e}}class Fx{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=se(),this.mutatedKeys=se(),this.Lu=DT(e),this.Uu=new Po(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new c1,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=ov(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let k=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(r.track({type:3,doc:f}),k=!0):this.Qu(d,f)||(r.track({type:2,doc:f}),k=!0,(l&&this.Lu(f,l)>0||u&&this.Lu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),k=!0):d&&!f&&(r.track({type:1,doc:d}),k=!0,(l||u)&&(a=!0)),k&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Oi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((u,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return f(h)-f(d)}(u.type,c.type)||this.Lu(u.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new Zo(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new c1,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=se(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new Mx(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new Lx(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=se();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Zo.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class EF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kF{constructor(e){this.key=e,this.Xu=!1}}class SF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new zi(a=>RT(a),Lu),this.ec=new Map,this.nc=new Set,this.sc=new Fe(F.comparator),this.ic=new Map,this.rc=new pv,this.oc={},this.uc=new Map,this.cc=Ls.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function TF(t,e){const n=Dv(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await Xo(n.localStore,Mn(e));n.isPrimaryClient&&$d(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Cv(n,e,r,a==="current")}return i}async function Cv(t,e,n,r){t.hc=(c,h,d)=>async function(f,p,v,k){let m=p.view.Ku(v);m.Oi&&(m=await jh(f.localStore,p.query,!1).then(({documents:S})=>p.view.Ku(S,m)));const y=k&&k.targetChanges.get(p.targetId),g=p.view.applyChanges(m,f.isPrimaryClient,y);return rg(f,p.targetId,g.zu),g.snapshot}(t,c,h,d);const i=await jh(t.localStore,e,!0),s=new Fx(e,i.ji),o=s.Ku(i.documents),a=$u.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);rg(t,n,l.zu);const u=new EF(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function xF(t,e){const n=B(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!Lu(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Jo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),uu(n.remoteStore,r.targetId),ea(n,r.targetId)}).catch(Bi)):(ea(n,r.targetId),await Jo(n.localStore,r.targetId,!0))}async function bF(t,e,n){const r=Pv(t);try{const i=await function(s,o){const a=B(s),l=Ae.now(),u=o.reduce((d,f)=>d.add(f.key),se());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=rn(),p=se();return a.Ui.getEntries(d,u).next(v=>{f=v,f.forEach((k,m)=>{m.isValidDocument()||(p=p.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const k=[];for(const m of o){const y=FL(m,c.get(m.key).overlayedDocument);y!=null&&k.push(new Gr(m.key,y,xT(y.value.mapValue),De.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,k,o)}).next(v=>{h=v;const k=v.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(d,v.batchId,k)})}).then(()=>({batchId:h.batchId,changes:HT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.oc[s.currentUser.toKey()];l||(l=new Fe(ie)),l=l.insert(o,a),s.oc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Qr(r,i.changes),await ya(r.remoteStore)}catch(i){const s=wa(i,"Failed to persist write");n.reject(s)}}async function $x(t,e){const n=B(t);try{const r=await GM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?J(o.Xu):i.removedDocuments.size>0&&(J(o.Xu),o.Xu=!1))}),await Qr(n,r,e)}catch(r){await Bi(r)}}function d1(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=B(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Eu(o)&&(l=!0)}),l&&xv(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CF(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new Fe(F.comparator);o=o.insert(s,we.newNoDocument(s,X.min()));const a=se().add(s),l=new Fu(X.min(),new Map,new ge(ie),o,a);await $x(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),Nv(r)}else await Jo(r.localStore,e,!1).then(()=>ea(r,e,n)).catch(Bi)}async function AF(t,e){const n=B(t),r=e.batch.batchId;try{const i=await KM(n.localStore,e);Rv(n,r,null),Av(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qr(n,i)}catch(i){await Bi(i)}}async function RF(t,e,n){const r=B(t);try{const i=await function(s,o){const a=B(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(J(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Rv(r,e,n),Av(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qr(r,i)}catch(i){await Bi(i)}}async function NF(t,e){const n=B(t);ji(n.remoteStore)||D("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=B(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.uc.get(r)||[];i.push(e),n.uc.set(r,i)}catch(r){const i=wa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Av(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function Rv(t,e,n){const r=B(t);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function ea(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||Ux(t,r)})}function Ux(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(uu(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Nv(t))}function rg(t,e,n){for(const r of n)r instanceof Lx?(t.rc.addReference(r.key,e),DF(t,r)):r instanceof Mx?(D("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||Ux(t,r.key)):j()}function DF(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(D("SyncEngine","New document in limbo: "+n),t.nc.add(r),Nv(t))}function Nv(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new F(ue.fromString(e)),r=t.cc.next();t.ic.set(r,new kF(n)),t.sc=t.sc.insert(n,r),$d(t.remoteStore,new Ii(Mn(fa(n.path)),r,2,nn.ot))}}async function Qr(t,e,n){const r=B(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=yv.Vi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const u=B(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Pi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>T.forEach(h.vi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Vi(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.$i.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.$i=u.$i.insert(h,p)}}}(r.localStore,s))}async function PF(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await _x(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new N(b.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qr(n,r.Ki)}}function OF(t,e){const n=B(t),r=n.ic.get(e);if(r&&r.Xu)return se().add(r.key);{let i=se();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}async function LF(t,e){const n=B(t),r=await jh(n.localStore,e.query,!0),i=e.view.Ju(r);return n.isPrimaryClient&&rg(n,e.targetId,i.zu),i}async function MF(t,e){const n=B(t);return Sx(n.localStore,e).then(r=>Qr(n,r))}async function FF(t,e,n,r){const i=B(t),s=await function(o,a){const l=B(o),u=B(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",c=>u.yn(c,a).next(h=>h?l.localDocuments.getDocuments(c,h):T.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ya(i.remoteStore):n==="acknowledged"||n==="rejected"?(Rv(i,e,r||null),Av(i,e),function(o,a){B(B(o).mutationQueue).In(a)}(i.localStore,e)):j(),await Qr(i,s)):D("SyncEngine","Cannot apply mutation batch with id: "+e)}async function $F(t,e){const n=B(t);if(Dv(n),Pv(n),e===!0&&n.ac!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await f1(n,r.toArray());n.ac=!0,await ng(n.remoteStore,!0);for(const s of i)$d(n.remoteStore,s)}else if(e===!1&&n.ac!==!1){const r=[];let i=Promise.resolve();n.ec.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ea(n,o),Jo(n.localStore,o,!0))),uu(n.remoteStore,o)}),await i,await f1(n,r),function(s){const o=B(s);o.ic.forEach((a,l)=>{uu(o.remoteStore,l)}),o.rc.cs(),o.ic=new Map,o.sc=new Fe(F.comparator)}(n),n.ac=!1,await ng(n.remoteStore,!1)}}async function f1(t,e,n){const r=B(t),i=[],s=[];for(const o of e){let a;const l=r.ec.get(o);if(l&&l.length!==0){a=await Xo(r.localStore,Mn(l[0]));for(const u of l){const c=r.tc.get(u),h=await LF(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await kx(r.localStore,o);a=await Xo(r.localStore,u),await Cv(r,Bx(u),o,!1)}i.push(a)}return r.Zu.Go(s),i}function Bx(t){return CT(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function UF(t){const e=B(t);return B(B(e.localStore).persistence).Ri()}async function BF(t,e,n,r){const i=B(t);if(i.ac)return void D("SyncEngine","Ignoring unexpected query state notification.");const s=i.ec.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await Sx(i.localStore,NT(s[0])),a=Fu.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await Qr(i,o,a);break}case"rejected":await Jo(i.localStore,e,!0),ea(i,e,r);break;default:j()}}async function VF(t,e,n){const r=Dv(t);if(r.ac){for(const i of e){if(r.ec.has(i)){D("SyncEngine","Adding an already active target "+i);continue}const s=await kx(r.localStore,i),o=await Xo(r.localStore,s);await Cv(r,Bx(s),o.targetId,!1),$d(r.remoteStore,o)}for(const i of n)r.ec.has(i)&&await Jo(r.localStore,i,!1).then(()=>{uu(r.remoteStore,i),ea(r,i)}).catch(Bi)}}function Dv(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$x.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CF.bind(null,e),e.Zu.Go=vF.bind(null,e.eventManager),e.Zu.lc=wF.bind(null,e.eventManager),e}function Pv(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RF.bind(null,e),e}function zF(t,e,n){const r=B(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=B(h),p=at(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",v=>f.Ds.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(p)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Ox(a));const l=new IF(a,i.localStore,s.wt);let u=await s.fc();for(;u;){const h=await l.Nu(u);h&&o._updateProgress(h),u=await s.fc()}const c=await l.complete();return await Qr(i,c.Mu,void 0),await function(h,d){const f=B(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ds.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Ou)}catch(a){return Zl("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Vx{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Uu(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return wx(this.persistence,new vx,e.initialUser,this.wt)}_c(e){return new yx(Fd.Ms,this.wt)}dc(e){return new xx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zx extends Vx{constructor(e,n,r){super(),this.yc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await Pv(this.yc.syncEngine),await ya(this.yc.remoteStore),await this.persistence.ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wc(e){return wx(this.persistence,new vx,e.initialUser,this.wt)}mc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new DM(r,e.asyncQueue,n)}gc(e,n){const r=new pL(n,this.persistence);return new fL(e.asyncQueue,r)}_c(e){const n=gv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new mv(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,bx(),Gc(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new xx}}class jF extends zx{constructor(e,n){super(e,n,!1),this.yc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.yc.syncEngine;this.sharedClientState instanceof yp&&(this.sharedClientState.syncEngine={kr:FF.bind(null,n),Or:BF.bind(null,n),Mr:VF.bind(null,n),Ri:UF.bind(null,n),Nr:MF.bind(null,n)},await this.sharedClientState.start()),await this.persistence.ci(async r=>{await $F(this.yc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}dc(e){const n=bx();if(!yp.V(n))throw new N(b.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=gv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new yp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ov{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>d1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PF.bind(null,this.syncEngine),await ng(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yF}createDatastore(e){const n=Uu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new tF(i));var i;return function(s,o,a,l){return new iF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>d1(this.syncEngine,a,0),o=l1.V()?new l1:new JM,new oF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new SF(r,i,s,o,a,l);return u&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);D("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await ga(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(e,n){this.Ec=e,this.wt=n,this.metadata=new ot,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then(r=>{r&&r.Cu()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(e===null)return null;const n=this.Ac.decode(e),r=Number(n);isNaN(r)&&this.Pc(`length string (${n}) is not valid number`);const i=await this.vc(r);return new _F(JSON.parse(i),e.length+r)}Vc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async bc(){for(;this.Vc()<0&&!await this.Sc(););if(this.buffer.length===0)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const n=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new N(b.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=B(r),o=au(s.wt)+"/documents",a={documents:i.map(h=>ou(s.wt,h))},l=await s.ao("BatchGetDocuments",o,a),u=new Map;l.forEach(h=>{const d=GL(s.wt,h);u.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=u.get(h.toString());J(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ma(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=F.fromPath(r);this.mutations.push(new av(i,this.precondition(i)))}),await async function(n,r){const i=B(n),s=au(i.wt)+"/documents",o={writes:r.map(a=>lu(i.wt,a))};await i.ro("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw j();n=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new N(b.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?De.updateTime(n):De.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new N(b.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return De.updateTime(n)}return De.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Dc=r.maxAttempts,this.So=new wv(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io(async()=>{const e=new HF(this.datastore),n=this.xc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Nc(i)}))}).catch(r=>{this.Nc(r)})})}xc(e){try{const n=this.updateFunction(e);return!Pu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Cc(),Promise.resolve()))):this.deferred.reject(e)}kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!zT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=mT.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jx(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _x(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function qx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Lv(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>u1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>u1(e.remoteStore,s)),t.onlineComponents=e}async function Lv(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await jx(t,new Vx)),t.offlineComponents}async function Bd(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await qx(t,new Ov)),t.onlineComponents}function Hx(t){return Lv(t).then(e=>e.persistence)}function Mv(t){return Lv(t).then(e=>e.localStore)}function Wx(t){return Bd(t).then(e=>e.remoteStore)}function Fv(t){return Bd(t).then(e=>e.syncEngine)}async function ta(t){const e=await Bd(t),n=e.eventManager;return n.onListen=TF.bind(null,e.syncEngine),n.onUnlisten=xF.bind(null,e.syncEngine),n}function GF(t){return t.asyncQueue.enqueue(async()=>{const e=await Hx(t),n=await Wx(t);return e.setNetworkEnabled(!0),function(r){const i=B(r);return i.lu.delete(0),Bu(i)}(n)})}function QF(t){return t.asyncQueue.enqueue(async()=>{const e=await Hx(t),n=await Wx(t);return e.setNetworkEnabled(!1),async function(r){const i=B(r);i.lu.add(0),await ga(i),i._u.set("Offline")}(n)})}function YF(t,e){const n=new ot;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,l){const u=B(a);return u.persistence.runTransaction("read document","readonly",c=>u.localDocuments.getDocument(c,l))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new N(b.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=wa(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Mv(t),e,n)),n.promise}function Kx(t,e,n={}){const r=new ot;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Ud({next:h=>{s.enqueueAndForget(()=>Tv(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new N(b.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new N(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new bv(fa(o.path),u,{includeMetadataChanges:!0,Du:!0});return Sv(i,c)}(await ta(t),t.asyncQueue,e,n,r)),r.promise}function XF(t,e){const n=new ot;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await jh(r,i,!0),a=new Fx(i,o.ji),l=a.Ku(o.documents),u=a.applyChanges(l,!1);s.resolve(u.snapshot)}catch(o){const a=wa(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Mv(t),e,n)),n.promise}function Gx(t,e,n={}){const r=new ot;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Ud({next:h=>{s.enqueueAndForget(()=>Tv(i,c)),h.fromCache&&a.source==="server"?l.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new bv(o,u,{includeMetadataChanges:!0,Du:!0});return Sv(i,c)}(await ta(t),t.asyncQueue,e,n,r)),r.promise}function JF(t,e){const n=new Ud(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){B(r).Tu.add(i),i.next()}(await ta(t),n)),()=>{n.Tc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){B(r).Tu.delete(i)}(await ta(t),n))}}function ZF(t,e,n){const r=new ot;return t.asyncQueue.enqueueAndForget(async()=>{const i=await function(s){return Bd(s).then(o=>o.datastore)}(t);new WF(t.asyncQueue,i,n,e,r).run()}),r.promise}function e$(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(l,u){return new qF(l,u)}(function(l,u){if(l instanceof Uint8Array)return p1(l,u);if(l instanceof ArrayBuffer)return p1(new Uint8Array(l),u);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Uu(e));t.asyncQueue.enqueueAndForget(async()=>{zF(await Fv(t),i,r)})}function t$(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=B(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ds.getNamedQuery(s,r))}(await Mv(t),e))}const m1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t,e,n){if(!n)throw new N(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qx(t,e,n,r){if(e===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function g1(t){if(!F.isDocumentKey(t))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function y1(t){if(F.isDocumentKey(t))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function de(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vd(t);throw new N(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Yx(t,e){if(e<=0)throw new N(b.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Qx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new v1({}),this._settingsFrozen=!1,e instanceof zr?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(i.options.projectId)}(e))}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new v1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new tL;switch(n.type){case"gapi":const r=n.client;return J(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new sL(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=m1.get(e);n&&(D("ComponentProvider","Removing Datastore"),m1.delete(e),n.terminate())}(this),Promise.resolve()}}function n$(t,e,n,r={}){var i;const s=(t=de(t,Vu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Zl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=st.MOCK_USER;else{o=Zk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new st(l)}t._authCredentials=new nL(new pT(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}}class Nt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class gr extends Nt{constructor(e,n,r){super(e,n,fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new F(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function Xx(t,e,...n){if(t=q(t),$v("collection","path",e),t instanceof Vu){const r=ue.fromString(e,...n);return y1(r),new gr(t,null,r)}{if(!(t instanceof Te||t instanceof gr))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return y1(r),new gr(t.firestore,null,r)}}function r$(t,e){if(t=de(t,Vu),$v("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Nt(t,null,function(n){return new Kr(ue.emptyPath(),n)}(e))}function Kh(t,e,...n){if(t=q(t),arguments.length===1&&(e=mT.I()),$v("doc","path",e),t instanceof Vu){const r=ue.fromString(e,...n);return g1(r),new Te(t,null,new F(r))}{if(!(t instanceof Te||t instanceof gr))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return g1(r),new Te(t.firestore,t instanceof gr?t.converter:null,new F(r))}}function Jx(t,e){return t=q(t),e=q(e),(t instanceof Te||t instanceof gr)&&(e instanceof Te||e instanceof gr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Uv(t,e){return t=q(t),e=q(e),t instanceof Nt&&e instanceof Nt&&t.firestore===e.firestore&&Lu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new wv(this,"async_queue_retry"),this.Kc=()=>{const n=Gc();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new ot;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!Vi(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Oc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=kv.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&j()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function ig(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class s${constructor(){this._progressObserver={},this._taskCompletionResolver=new ot,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o$=-1;class $e extends Vu{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new i$,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Zx(this),this._firestoreClient.terminate()}}function ht(t){return t._firestoreClient||Zx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zx(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new yL(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new KF(t._authCredentials,t._appCheckCredentials,t._queue,r)}function a$(t,e){tb(t=de(t,$e));const n=ht(t),r=t._freezeSettings(),i=new Ov;return eb(n,i,new zx(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function l$(t){tb(t=de(t,$e));const e=ht(t),n=t._freezeSettings(),r=new Ov;return eb(e,r,new jF(r,n.cacheSizeBytes))}function eb(t,e,n){const r=new ot;return t.asyncQueue.enqueue(async()=>{try{await jx(t,n),await qx(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function u$(t){if(t._initialized&&!t._terminated)throw new N(b.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ot;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Gn.V())return Promise.resolve();const r=n+"main";await Gn.delete(r)}(gv(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function c$(t){return function(e){const n=new ot;return e.asyncQueue.enqueueAndForget(async()=>NF(await Fv(e),n)),n.promise}(ht(t=de(t,$e)))}function h$(t){return GF(ht(t=de(t,$e)))}function d$(t){return QF(ht(t=de(t,$e)))}function f$(t,e){const n=ht(t=de(t,$e)),r=new s$;return e$(n,t._databaseId,e,r),r}function p$(t,e){return t$(ht(t=de(t,$e)),e).then(n=>n?new Nt(t,null,n.query):null)}function tb(t){if(t._initialized||t._terminated)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wr(tt.fromBase64String(e))}catch(n){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wr(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m$=/^__.*__$/;class g${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new pa(e,this.data,n,this.fieldTransforms)}}class nb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function rb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class jd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new jd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.sa(e),i}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Gh(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(rb(this.Zc)&&m$.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class y${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||Uu(e)}aa(e,n,r,i=!1){return new jd({Zc:e,methodName:n,ca:r,path:ze.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Ws(t){const e=t._freezeSettings(),n=Uu(t._databaseId);return new y$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qd(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);jv("Data must be an object, but it was:",o,r);const a=ob(r,o);let l,u;if(s.merge)l=new gn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=sg(e,h,n);if(!o.contains(d))throw new N(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);lb(c,d)||c.push(d)}l=new gn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new g$(new gt(a),l,u)}class zu extends Hs{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zu}}function ib(t,e,n){return new jd({Zc:3,ca:e.settings.ca,methodName:t._methodName,na:n},e.databaseId,e.wt,e.ignoreUndefinedProperties)}class Bv extends Hs{_toFieldTransform(e){return new Mu(e.path,new Qo)}isEqual(e){return e instanceof Bv}}class v$ extends Hs{constructor(e,n){super(e),this.ha=n}_toFieldTransform(e){const n=ib(this,e,!0),r=this.ha.map(s=>Ks(s,n)),i=new Ns(r);return new Mu(e.path,i)}isEqual(e){return this===e}}class w$ extends Hs{constructor(e,n){super(e),this.ha=n}_toFieldTransform(e){const n=ib(this,e,!0),r=this.ha.map(s=>Ks(s,n)),i=new Ds(r);return new Mu(e.path,i)}isEqual(e){return this===e}}class _$ extends Hs{constructor(e,n){super(e),this.la=n}_toFieldTransform(e){const n=new Yo(e.wt,LT(e.wt,this.la));return new Mu(e.path,n)}isEqual(e){return this===e}}function Vv(t,e,n,r){const i=t.aa(1,e,n);jv("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();qs(r,(l,u)=>{const c=qv(e,l,n);u=q(u);const h=i.ia(c);if(u instanceof zu)s.push(c);else{const d=Ks(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new gn(s);return new nb(o,a,i.fieldTransforms)}function zv(t,e,n,r,i,s){const o=t.aa(1,e,n),a=[sg(e,r,n)],l=[i];if(s.length%2!=0)throw new N(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(sg(e,s[d])),l.push(s[d+1]);const u=[],c=gt.empty();for(let d=a.length-1;d>=0;--d)if(!lb(u,a[d])){const f=a[d];let p=l[d];p=q(p);const v=o.ia(f);if(p instanceof zu)u.push(f);else{const k=Ks(p,v);k!=null&&(u.push(f),c.set(f,k))}}const h=new gn(u);return new nb(c,h,o.fieldTransforms)}function sb(t,e,n,r=!1){return Ks(n,t.aa(r?4:3,e))}function Ks(t,e){if(ab(t=q(t)))return jv("Unsupported field value:",e,t),ob(t,e);if(t instanceof Hs)return function(n,r){if(!rb(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ks(o,r.ra(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=q(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return LT(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ae.fromDate(n);return{timestampValue:su(r.wt,i)}}if(n instanceof Ae){const i=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:su(r.wt,i)}}if(n instanceof zd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wr)return{bytesValue:QT(r.wt,n._byteString)};if(n instanceof Te){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${Vd(n)}`)}(t,e)}function ob(t,e){const n={};return ET(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(t,(r,i)=>{const s=Ks(i,e.ea(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ab(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof zd||t instanceof wr||t instanceof Te||t instanceof Hs)}function jv(t,e,n){if(!ab(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Vd(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function sg(t,e,n){if((e=q(e))instanceof Di)return e._internalPath;if(typeof e=="string")return qv(t,e);throw Gh("Field path arguments must be of type string or ",t,!1,void 0,n)}const I$=new RegExp("[~\\*/\\[\\]]");function qv(t,e,n){if(e.search(I$)>=0)throw Gh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Di(...e.split("."))._internalPath}catch{throw Gh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(b.INVALID_ARGUMENT,a+t+l)}function lb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new E$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class E$ extends cu{data(){return super.data()}}function Hd(t,e){return typeof e=="string"?qv(t,e):e instanceof Di?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jr extends cu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Il extends jr{data(e={}){return super.data(e)}}class Pi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new us(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Il(this._firestore,this._userDataWriter,r.key,r,new us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Il(r._firestore,r._userDataWriter,o.doc.key,o.doc,new us(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Il(r._firestore,r._userDataWriter,o.doc.key,o.doc,new us(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:k$(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function k$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}function ub(t,e){return t instanceof jr&&e instanceof jr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Pi&&e instanceof Pi&&t._firestore===e._firestore&&Uv(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ju{}function ni(t,...e){for(const n of e)t=n._apply(t);return t}class S$ extends ju{constructor(e,n,r){super(),this.fa=e,this.da=n,this._a=r,this.type="where"}_apply(e){const n=Ws(e.firestore),r=function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new N(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){_1(c,u);const f=[];for(const p of c)f.push(w1(a,i,p));h={arrayValue:{values:f}}}else h=w1(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||_1(c,u),h=sb(o,s,c,u==="in"||u==="not-in");const d=yt.create(l,u,h);return function(f,p){if(p.ht()){const k=iv(f);if(k!==null&&!k.isEqual(p.field))throw new N(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${k.toString()}' and '${p.field.toString()}'`);const m=rv(f);m!==null&&mb(f,p.field,m)}const v=function(k,m){for(const y of k.filters)if(m.indexOf(y.op)>=0)return y.op;return null}(f,function(k){switch(k){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(v!==null)throw v===p.op?new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${v.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new Nt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Kr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function T$(t,e,n){const r=e,i=Hd("where",t);return new S$(i,r,n)}class x$ extends ju{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Do(i,s);return function(a,l){if(rv(a)===null){const u=iv(a);u!==null&&mb(a,u,l.field)}}(r,o),o}(e._query,this.fa,this.wa);return new Nt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Kr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function b$(t,e="asc"){const n=e,r=Hd("orderBy",t);return new x$(r,n)}class hb extends ju{constructor(e,n,r){super(),this.type=e,this.ma=n,this.ga=r}_apply(e){return new Nt(e.firestore,e.converter,AT(e._query,this.ma,this.ga))}}function C$(t){return Yx("limit",t),new hb("limit",t,"F")}function A$(t){return Yx("limitToLast",t),new hb("limitToLast",t,"L")}class db extends ju{constructor(e,n,r){super(),this.type=e,this.ya=n,this.pa=r}_apply(e){const n=pb(e,this.type,this.ya,this.pa);return new Nt(e.firestore,e.converter,function(r,i){return new Kr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function R$(...t){return new db("startAt",t,!0)}function N$(...t){return new db("startAfter",t,!1)}class fb extends ju{constructor(e,n,r){super(),this.type=e,this.ya=n,this.pa=r}_apply(e){const n=pb(e,this.type,this.ya,this.pa);return new Nt(e.firestore,e.converter,function(r,i){return new Kr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function D$(...t){return new fb("endBefore",t,!1)}function P$(...t){return new fb("endAt",t,!0)}function pb(t,e,n,r){if(n[0]=q(n[0]),n[0]instanceof cu)return function(i,s,o,a,l){if(!a)throw new N(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of Go(i))if(c.field.isKeyField())u.push(As(s,a.key));else{const h=a.data.field(c.field);if(nv(h))throw new N(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new N(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Ri(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ws(t.firestore);return function(s,o,a,l,u,c){const h=s.explicitOrderBy;if(u.length>h.length)throw new N(b.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const p=u[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new N(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof p}`);if(!sv(s)&&p.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${p}' contains a slash.`);const v=s.path.child(ue.fromString(p));if(!F.isDocumentKey(v))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const k=new F(v);d.push(As(o,k))}else{const v=sb(a,l,p);d.push(v)}}return new Ri(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function w1(t,e,n){if(typeof(n=q(n))=="string"){if(n==="")throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sv(e)&&n.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!F.isDocumentKey(r))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return As(t,new F(r))}if(n instanceof Te)return As(t,n._key);throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vd(n)}.`)}function _1(t,e){if(!Array.isArray(t)||t.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new N(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function mb(t,e,n){if(!n.isEqual(e))throw new N(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O$={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const r={};return qs(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new zd(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kT(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(tu(e));default:return null}}convertTimestamp(e){const n=Ci(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);J(ix(r));const i=new zr(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||Ke(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class L$ extends Hv{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M${constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ws(e)}set(e,n,r){this._verifyNotCommitted();const i=ui(e,this._firestore),s=Wd(i.converter,n,r),o=qd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,De.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ui(e,this._firestore);let o;return o=typeof(n=q(n))=="string"||n instanceof Di?zv(this._dataReader,"WriteBatch.update",s._key,n,r,i):Vv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,De.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ui(e,this._firestore);return this._mutations=this._mutations.concat(new ma(n._key,De.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ui(t,e){if((t=q(t)).firestore!==e)throw new N(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F$(t){t=de(t,Te);const e=de(t.firestore,$e);return Kx(ht(e),t._key).then(n=>Wv(e,t,n))}class Gs extends Hv{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,n)}}function $$(t){t=de(t,Te);const e=de(t.firestore,$e),n=ht(e),r=new Gs(e);return YF(n,t._key).then(i=>new jr(e,r,t._key,i,new us(i!==null&&i.hasLocalMutations,!0),t.converter))}function U$(t){t=de(t,Te);const e=de(t.firestore,$e);return Kx(ht(e),t._key,{source:"server"}).then(n=>Wv(e,t,n))}function B$(t){t=de(t,Nt);const e=de(t.firestore,$e),n=ht(e),r=new Gs(e);return cb(t._query),Gx(n,t._query).then(i=>new Pi(e,r,t,i))}function V$(t){t=de(t,Nt);const e=de(t.firestore,$e),n=ht(e),r=new Gs(e);return XF(n,t._query).then(i=>new Pi(e,r,t,i))}function z$(t){t=de(t,Nt);const e=de(t.firestore,$e),n=ht(e),r=new Gs(e);return Gx(n,t._query,{source:"server"}).then(i=>new Pi(e,r,t,i))}function I1(t,e,n){t=de(t,Te);const r=de(t.firestore,$e),i=Wd(t.converter,e,n);return qu(r,[qd(Ws(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,De.none())])}function E1(t,e,n,...r){t=de(t,Te);const i=de(t.firestore,$e),s=Ws(i);let o;return o=typeof(e=q(e))=="string"||e instanceof Di?zv(s,"updateDoc",t._key,e,n,r):Vv(s,"updateDoc",t._key,e),qu(i,[o.toMutation(t._key,De.exists(!0))])}function j$(t){return qu(de(t.firestore,$e),[new ma(t._key,De.none())])}function q$(t,e){const n=de(t.firestore,$e),r=Kh(t),i=Wd(t.converter,e);return qu(n,[qd(Ws(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,De.exists(!1))]).then(()=>r)}function Qh(t,...e){var n,r,i;t=q(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ig(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ig(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Te)u=de(t.firestore,$e),c=fa(t._key.path),l={next:h=>{e[o]&&e[o](Wv(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=de(t,Nt);u=de(h.firestore,$e),c=h._query;const d=new Gs(u);l={next:f=>{e[o]&&e[o](new Pi(u,d,h,f))},error:e[o+1],complete:e[o+2]},cb(t._query)}return function(h,d,f,p){const v=new Ud(p),k=new bv(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>Sv(await ta(h),k)),()=>{v.Tc(),h.asyncQueue.enqueueAndForget(async()=>Tv(await ta(h),k))}}(ht(u),c,a,l)}function H$(t,e){return JF(ht(t=de(t,$e)),ig(e)?e:{next:e})}function qu(t,e){return function(n,r){const i=new ot;return n.asyncQueue.enqueueAndForget(async()=>bF(await Fv(n),r,i)),i.promise}(ht(t),e)}function Wv(t,e,n){const r=n.docs.get(e._key),i=new Gs(t);return new jr(t,i,e._key,r,new us(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W$ extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ws(e)}get(e){const n=ui(e,this._firestore),r=new L$(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return j();const s=i[0];if(s.isFoundDocument())return new cu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new cu(this._firestore,r,n._key,null,n.converter);throw j()})}set(e,n,r){const i=ui(e,this._firestore),s=Wd(i.converter,n,r),o=qd(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=ui(e,this._firestore);let o;return o=typeof(n=q(n))=="string"||n instanceof Di?zv(this._dataReader,"Transaction.update",s._key,n,r,i):Vv(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=ui(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ui(e,this._firestore),r=new Gs(this._firestore);return super.get(e).then(i=>new jr(this._firestore,r,n._key,i._document,new us(!1,!1),n.converter))}}function K$(t,e,n){t=de(t,$e);const r=Object.assign(Object.assign({},O$),n);return function(i){if(i.maxAttempts<1)throw new N(b.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),ZF(ht(t),i=>e(new W$(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G$(){return new zu("deleteField")}function Q$(){return new Bv("serverTimestamp")}function Y$(...t){return new v$("arrayUnion",t)}function X$(...t){return new w$("arrayRemove",t)}function J$(t){return new _$("increment",t)}(function(t,e=!0){(function(n){da=n})(Fi),Br(new Ln("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new $e(i,new rL(n.getProvider("auth-internal")),new aL(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Nn(__,"3.4.10",t),Nn(__,"3.4.10","esm2017")})();const Z$="@firebase/firestore-compat",e2="0.1.19";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new N("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){if(typeof Uint8Array=="undefined")throw new N("unimplemented","Uint8Arrays are not available in this environment.")}function S1(){if(!mL())throw new N("unimplemented","Blobs are unavailable in Firestore in this environment.")}class hu{constructor(e){this._delegate=e}static fromBase64String(e){return S1(),new hu(wr.fromBase64String(e))}static fromUint8Array(e){return k1(),new hu(wr.fromUint8Array(e))}toBase64(){return S1(),this._delegate.toBase64()}toUint8Array(){return k1(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t){return t2(t,["next","error","complete"])}function t2(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{enableIndexedDbPersistence(e,n){return a$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return l$(e._delegate)}clearIndexedDbPersistence(e){return u$(e._delegate)}}class gb{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof zr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Zl("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){n$(this._delegate,e,n,r)}enableNetwork(){return h$(this._delegate)}disableNetwork(){return d$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Qx("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return c$(this._delegate)}onSnapshotsInSync(e){return H$(this._delegate,e)}get app(){if(!this._appCompat)throw new N("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new na(this,Xx(this._delegate,e))}catch(n){throw $t(n,"collection()","Firestore.collection()")}}doc(e){try{return new bn(this,Kh(this._delegate,e))}catch(n){throw $t(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ft(this,r$(this._delegate,e))}catch(n){throw $t(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return K$(this._delegate,n=>e(new yb(this,n)))}batch(){return ht(this._delegate),new vb(new M$(this._delegate,e=>qu(this._delegate,e)))}loadBundle(e){return f$(this._delegate,e)}namedQuery(e){return p$(this._delegate,e).then(n=>n?new Ft(this,n):null)}}class Kd extends Hv{constructor(e){super(),this.firestore=e}convertBytes(e){return new hu(new wr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return bn.forKey(n,this.firestore,null)}}function r2(t){ZO(t)}class yb{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Kd(e)}get(e){const n=cs(e);return this._delegate.get(n).then(r=>new du(this._firestore,new jr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=cs(e);return r?(Kv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=cs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=cs(e);return this._delegate.delete(n),this}}class vb{constructor(e){this._delegate=e}set(e,n,r){const i=cs(e);return r?(Kv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=cs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=cs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ms{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Il(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new fu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ms.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ms(e,new Kd(e),n),i.set(n,s)),s}}Ms.INSTANCES=new WeakMap;class bn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Kd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new N("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new bn(n,new Te(n._delegate,r,new F(e)))}static forKey(e,n,r){return new bn(n,new Te(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new na(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new na(this.firestore,Xx(this._delegate,e))}catch(n){throw $t(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=q(e),e instanceof Te?Jx(this._delegate,e):!1}set(e,n){n=Kv("DocumentReference.set",n);try{return n?I1(this._delegate,e,n):I1(this._delegate,e)}catch(r){throw $t(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?E1(this._delegate,e):E1(this._delegate,e,n,...r)}catch(i){throw $t(i,"updateDoc()","DocumentReference.update()")}}delete(){return j$(this._delegate)}onSnapshot(...e){const n=wb(e),r=_b(e,i=>new du(this.firestore,new jr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Qh(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=$$(this._delegate):(e==null?void 0:e.source)==="server"?n=U$(this._delegate):n=F$(this._delegate),n.then(r=>new du(this.firestore,new jr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new bn(this.firestore,e?this._delegate.withConverter(Ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function $t(t,e,n){return t.message=t.message.replace(e,n),t}function wb(t){for(const e of t)if(typeof e=="object"&&!og(e))return e;return{}}function _b(t,e){var n,r;let i;return og(t[0])?i=t[0]:og(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class du{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new bn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return ub(this._delegate,e._delegate)}}class fu extends du{data(e){const n=this._delegate.data(e);return eL(n!==void 0),n}}class Ft{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Kd(e)}where(e,n,r){try{return new Ft(this.firestore,ni(this._delegate,T$(e,n,r)))}catch(i){throw $t(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ft(this.firestore,ni(this._delegate,b$(e,n)))}catch(r){throw $t(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ft(this.firestore,ni(this._delegate,C$(e)))}catch(n){throw $t(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ft(this.firestore,ni(this._delegate,A$(e)))}catch(n){throw $t(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ft(this.firestore,ni(this._delegate,R$(...e)))}catch(n){throw $t(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ft(this.firestore,ni(this._delegate,N$(...e)))}catch(n){throw $t(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ft(this.firestore,ni(this._delegate,D$(...e)))}catch(n){throw $t(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ft(this.firestore,ni(this._delegate,P$(...e)))}catch(n){throw $t(n,"endAt()","Query.endAt()")}}isEqual(e){return Uv(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=V$(this._delegate):(e==null?void 0:e.source)==="server"?n=z$(this._delegate):n=B$(this._delegate),n.then(r=>new ag(this.firestore,new Pi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=wb(e),r=_b(e,i=>new ag(this.firestore,new Pi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Qh(this._delegate,n,r)}withConverter(e){return new Ft(this.firestore,e?this._delegate.withConverter(Ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class i2{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new fu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ag{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ft(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new fu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new i2(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new fu(this._firestore,r))})}isEqual(e){return ub(this._delegate,e._delegate)}}class na extends Ft{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new bn(this.firestore,e):null}doc(e){try{return e===void 0?new bn(this.firestore,Kh(this._delegate)):new bn(this.firestore,Kh(this._delegate,e))}catch(n){throw $t(n,"doc()","CollectionReference.doc()")}}add(e){return q$(this._delegate,e).then(n=>new bn(this.firestore,n))}isEqual(e){return Jx(this._delegate,e._delegate)}withConverter(e){return new na(this.firestore,e?this._delegate.withConverter(Ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function cs(t){return de(t,Te)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(...e){this._delegate=new Di(...e)}static documentId(){return new Gv(ze.keyField().canonicalString())}isEqual(e){return e=q(e),e instanceof Di?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._delegate=e}static serverTimestamp(){const e=Q$();return e._methodName="FieldValue.serverTimestamp",new rs(e)}static delete(){const e=G$();return e._methodName="FieldValue.delete",new rs(e)}static arrayUnion(...e){const n=Y$(...e);return n._methodName="FieldValue.arrayUnion",new rs(n)}static arrayRemove(...e){const n=X$(...e);return n._methodName="FieldValue.arrayRemove",new rs(n)}static increment(e){const n=J$(e);return n._methodName="FieldValue.increment",new rs(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2={Firestore:gb,GeoPoint:zd,Timestamp:Ae,Blob:hu,Transaction:yb,WriteBatch:vb,DocumentReference:bn,DocumentSnapshot:du,Query:Ft,QueryDocumentSnapshot:fu,QuerySnapshot:ag,CollectionReference:na,FieldPath:Gv,FieldValue:rs,setLogLevel:r2,CACHE_SIZE_UNLIMITED:o$};function o2(t,e){t.INTERNAL.registerComponent(new Ln("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},s2)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t){o2(t,(e,n)=>new gb(e,n,new n2)),t.registerVersion(Z$,e2)}a2(qt);function Qv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const qa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},io={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Ib(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u2=l2,c2=Ib,Eb=new zs("auth","Firebase",Ib());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=new yd("@firebase/auth");function Qc(t,...e){T1.logLevel<=ce.ERROR&&T1.error(`Auth (${Fi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw Yv(t,...e)}function It(t,...e){return Yv(t,...e)}function kb(t,e,n){const r=Object.assign(Object.assign({},c2()),{[e]:n});return new zs("auth","Firebase",r).create(e,{appName:t.name})}function _a(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(t,"argument-error"),kb(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Eb.create(t,...e)}function L(t,e,...n){if(!t)throw Yv(e,...n)}function dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qc(e),new Error(e)}function Jn(t,e){t||dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new Map;function fn(t){Jn(t instanceof Function,"Expected a class definition");let e=x1.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,x1.set(t,e),e)}function h2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xv(){return b1()==="http:"||b1()==="https:"}function b1(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xv()||Sy()||"connection"in navigator)?navigator.onLine:!0}function f2(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=eS()||gd()}get(){return d2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=new Hu(3e4,6e4);function nt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dt(t,e,n,r,i={}){return Tb(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=la(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Sb.fetch()(xb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Tb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},p2),e);try{const i=new g2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw il(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw il(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw il(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kb(t,c,u);kt(t,c)}}catch(i){if(i instanceof ln)throw i;kt(t,"network-request-failed")}}async function Yr(t,e,n,r,i={}){const s=await dt(t,e,n,r,i);return"mfaPendingCredential"in s&&kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Jv(t.config,i):`${t.config.apiScheme}://${i}`}class g2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),m2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y2(t,e){return dt(t,"POST","/v1/accounts:delete",e)}async function v2(t,e){return dt(t,"POST","/v1/accounts:update",e)}async function w2(t,e){return dt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _2(t,e=!1){const n=q(t),r=await n.getIdToken(e),i=Gd(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:El(vp(i.auth_time)),issuedAtTime:El(vp(i.iat)),expirationTime:El(vp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vp(t){return Number(t)*1e3}function Gd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qc("JWT malformed, contained fewer than 3 sections"),null;try{const i=pD(n);return i?JSON.parse(i):(Qc("Failed to decode base64 JWT payload"),null)}catch(i){return Qc("Caught error parsing JWT payload as JSON",i),null}}function I2(t){const e=Gd(t);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&E2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function E2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=El(this.lastLoginAt),this.creationTime=El(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qr(t,w2(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?x2(s.providerUserInfo):[],a=T2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bb(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function S2(t){const e=q(t);await mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function T2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function x2(t){return t.map(e=>{var{providerId:n}=e,r=Qv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(t,e){const n=await Tb(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=xb(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):I2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await b2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new gu;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gu,this.toJSON())}_performRefresh(){return dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e){L(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ms{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qr(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _2(this,e)}reload(){return S2(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qr(this,y2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,y=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:S,isAnonymous:x,providerData:E,stsTokenManager:C}=n;L(g&&C,e,"internal-error");const R=gu.fromJSON(this.name,C);L(typeof g=="string",e,"internal-error"),ri(h,e.name),ri(d,e.name),L(typeof S=="boolean",e,"internal-error"),L(typeof x=="boolean",e,"internal-error"),ri(f,e.name),ri(p,e.name),ri(v,e.name),ri(k,e.name),ri(m,e.name),ri(y,e.name);const H=new ms({uid:g,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:x,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:R,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(H.providerData=E.map(G=>Object.assign({},G))),k&&(H._redirectEventId=k),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new gu;i.updateFromServerResponse(n);const s=new ms({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await mu(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cb.type="NONE";const ra=Cb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t,e,n){return`firebase:${t}:${e}:${n}`}class Oo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=gs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Oo(fn(ra),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||fn(ra);const o=gs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ms._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Oo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Oo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ab(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Db(e))return"Blackberry";if(Pb(e))return"Webos";if(Zv(e))return"Safari";if((e.includes("chrome/")||Rb(e))&&!e.includes("edge/"))return"Chrome";if(Wu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ab(t=xe()){return/firefox\//i.test(t)}function Zv(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rb(t=xe()){return/crios\//i.test(t)}function Nb(t=xe()){return/iemobile/i.test(t)}function Wu(t=xe()){return/android/i.test(t)}function Db(t=xe()){return/blackberry/i.test(t)}function Pb(t=xe()){return/webos/i.test(t)}function Ia(t=xe()){return/iphone|ipad|ipod/i.test(t)}function C2(t=xe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function A2(t=xe()){var e;return Ia(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function R2(){return Ty()&&document.documentMode===10}function Ob(t=xe()){return Ia(t)||Wu(t)||Pb(t)||Db(t)||/windows phone/i.test(t)||Nb(t)}function N2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t,e=[]){let n;switch(t){case"Browser":n=C1(xe());break;case"Worker":n=`${C1(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A1(this),this.idTokenSubscription=new A1(this),this.beforeStateQueue=new D2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eb,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mu(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?q(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ut(t){return q(t)}class A1{constructor(e){this.auth=e,this.observer=null,this.addObserver=tS(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function O2(t,e,n){const r=ut(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Mb(e),{host:o,port:a}=L2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||M2()}function Mb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function L2(t){const e=Mb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:R1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:R1(o)}}}function R1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function M2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dr("not implemented")}_getIdTokenResponse(e){return dr("not implemented")}_linkToIdToken(e,n){return dr("not implemented")}_getReauthenticationResolver(e){return dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t,e){return dt(t,"POST","/v1/accounts:resetPassword",nt(t,e))}async function $b(t,e){return dt(t,"POST","/v1/accounts:update",e)}async function F2(t,e){return dt(t,"POST","/v1/accounts:update",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $2(t,e){return Yr(t,"POST","/v1/accounts:signInWithPassword",nt(t,e))}async function Qd(t,e){return dt(t,"POST","/v1/accounts:sendOobCode",nt(t,e))}async function U2(t,e){return Qd(t,e)}async function B2(t,e){return Qd(t,e)}async function V2(t,e){return Qd(t,e)}async function z2(t,e){return Qd(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",nt(t,e))}async function q2(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends Ea{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $2(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return j2(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return $b(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return q2(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e){return Yr(t,"POST","/v1/accounts:signInWithIdp",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="http://localhost";class _r extends Ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new _r(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:H2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W2(t,e){return dt(t,"POST","/v1/accounts:sendVerificationCode",nt(t,e))}async function K2(t,e){return Yr(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,e))}async function G2(t,e){const n=await Yr(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,e));if(n.temporaryProof)throw il(t,"account-exists-with-different-credential",n);return n}const Q2={USER_NOT_FOUND:"user-not-found"};async function Y2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Yr(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,n),Q2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Ea{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ys({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ys({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return K2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return G2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Y2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ys({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J2(t){const e=_o(el(t)).link,n=e?_o(el(e)).deep_link_id:null,r=_o(el(t)).deep_link_id;return(r?_o(el(r)).link:null)||r||n||e||t}class Yd{constructor(e){var n,r,i,s,o,a;const l=_o(el(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=X2((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=J2(e);try{return new Yd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.providerId=qi.PROVIDER_ID}static credential(e,n){return yu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yd.parseLink(n);return L(r,"argument-error"),yu._fromEmailAndCode(e,r.code,r.tenantId)}}qi.PROVIDER_ID="password";qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends Xr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Lo extends ka{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return L("providerId"in n&&"signInMethod"in n,"argument-error"),_r._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return L(e.idToken||e.accessToken,"argument-error"),_r._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Lo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Lo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Lo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends ka{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ka{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="http://localhost";class ia extends Ea{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ia(r,s)}static _create(e,n){return new ia(e,n)}buildRequest(){return{requestUri:Z2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eU="saml.";class Yh extends Xr{constructor(e){L(e.startsWith(eU),"argument-error"),super(e)}static credentialFromResult(e){return Yh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Yh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ia.fromJSON(e);return L(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ia._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ka{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ub(t,e){return Yr(t,"POST","/v1/accounts:signUp",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ms._fromIdTokenResponse(e,r,i),o=N1(r);return new Fn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=N1(r);return new Fn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function N1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tU(t){var e;const n=ut(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Fn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ub(n,{returnSecureToken:!0}),i=await Fn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xh(e,n,r,i)}}function Bb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nU(t,e){const n=q(t);await Xd(!0,n,e);const{providerUserInfo:r}=await v2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Vb(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function ew(t,e,n=!1){const r=await qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fn._forOperation(t,"link",r)}async function Xd(t,e,n){await mu(e);const r=Vb(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";L(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await qr(t,Bb(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=Gd(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),Fn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t,e,n=!1){const r="signIn",i=await Bb(t,r,e),s=await Fn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Jd(t,e){return jb(ut(t),e)}async function qb(t,e){const n=q(t);return await Xd(!1,n,e.providerId),ew(n,e)}async function Hb(t,e){return zb(q(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rU(t,e){return Yr(t,"POST","/v1/accounts:signInWithCustomToken",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iU(t,e){const n=ut(t),r=await rU(n,{token:e,returnSecureToken:!0}),i=await Fn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?tw._fromServerResponse(e,n):kt(e,"internal-error")}}class tw extends Zd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new tw(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t,e,n){var r;L(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),L(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(L(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(L(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sU(t,e,n){const r=q(t),i={requestType:"PASSWORD_RESET",email:e};n&&ef(r,i,n),await B2(r,i)}async function oU(t,e,n){await Fb(q(t),{oobCode:e,newPassword:n})}async function aU(t,e){await F2(q(t),{oobCode:e})}async function Wb(t,e){const n=q(t),r=await Fb(n,{oobCode:e}),i=r.requestType;switch(L(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":L(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":L(r.mfaInfo,n,"internal-error");default:L(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Zd._fromServerResponse(ut(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function lU(t,e){const{data:n}=await Wb(q(t),e);return n.email}async function uU(t,e,n){const r=ut(t),i=await Ub(r,{returnSecureToken:!0,email:e,password:n}),s=await Fn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function cU(t,e,n){return Jd(q(t),qi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hU(t,e,n){const r=q(t),i={requestType:"EMAIL_SIGNIN",email:e};L(n.handleCodeInApp,r,"argument-error"),n&&ef(r,i,n),await V2(r,i)}function dU(t,e){const n=Yd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function fU(t,e,n){const r=q(t),i=qi.credentialWithLink(e,n||pu());return L(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Jd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pU(t,e){return dt(t,"POST","/v1/accounts:createAuthUri",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mU(t,e){const n=Xv()?pu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await pU(q(t),r);return i||[]}async function gU(t,e){const n=q(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&ef(n.auth,i,e);const{email:s}=await U2(n.auth,i);s!==t.email&&await t.reload()}async function yU(t,e,n){const r=q(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&ef(r.auth,s,n);const{email:o}=await z2(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vU(t,e){return dt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wU(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=q(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qr(r,vU(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function _U(t,e){return Kb(q(t),e,null)}function IU(t,e){return Kb(q(t),null,e)}async function Kb(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await qr(t,$b(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EU(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Gd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Mo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new kU(s,i);case"github.com":return new SU(s,i);case"google.com":return new TU(s,i);case"twitter.com":return new xU(s,i,t.screenName||null);case"custom":case"anonymous":return new Mo(s,null);default:return new Mo(s,r,i)}}class Mo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Gb extends Mo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class kU extends Mo{constructor(e,n){super(e,"facebook.com",n)}}class SU extends Gb{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class TU extends Mo{constructor(e,n){super(e,"google.com",n)}}class xU extends Gb{constructor(e,n,r){super(e,"twitter.com",n,r)}}function bU(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:EU(n)}function CU(t,e,n,r){return q(t).onAuthStateChanged(e,n,r)}class hs{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new hs("enroll",e)}static _fromMfaPendingCredential(e){return new hs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return hs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return hs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ut(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Zd._fromServerResponse(r,a));L(i.mfaPendingCredential,r,"internal-error");const o=hs._fromMfaPendingCredential(i.mfaPendingCredential);return new nw(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Fn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return L(n.user,r,"internal-error"),Fn._forOperation(n.user,n.operationType,u);default:kt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function AU(t,e){var n;const r=q(t),i=e;return L(e.customData.operationType,r,"argument-error"),L((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),nw._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RU(t,e){return dt(t,"POST","/v2/accounts/mfaEnrollment:start",nt(t,e))}function NU(t,e){return dt(t,"POST","/v2/accounts/mfaEnrollment:finalize",nt(t,e))}function DU(t,e){return dt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",nt(t,e))}class rw{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Zd._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new rw(e)}async getSession(){return hs._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await qr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await qr(this.user,DU(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const wp=new WeakMap;function PU(t){const e=q(t);return wp.has(e)||wp.set(e,rw._fromUser(e)),wp.get(e)}const Jh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jh,"1"),this.storage.removeItem(Jh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OU(){const t=xe();return Zv(t)||Ia(t)}const LU=1e3,MU=10;class Yb extends Qb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OU()&&N2(),this.fallbackToPolling=Ob(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);R2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yb.type="LOCAL";const iw=Yb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb extends Qb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xb.type="SESSION";const Fs=Xb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FU(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new tf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await FU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $U{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ku("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function UU(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(){return typeof Xe().WorkerGlobalScope!="undefined"&&typeof Xe().importScripts=="function"}async function BU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VU(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zU(){return sw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="firebaseLocalStorageDb",jU=1,Zh="firebaseLocalStorage",Zb="fbase_key";class Gu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nf(t,e){return t.transaction([Zh],e?"readwrite":"readonly").objectStore(Zh)}function qU(){const t=indexedDB.deleteDatabase(Jb);return new Gu(t).toPromise()}function lg(){const t=indexedDB.open(Jb,jU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zh,{keyPath:Zb})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zh)?e(r):(r.close(),await qU(),e(await lg()))})})}async function D1(t,e,n){const r=nf(t,!0).put({[Zb]:e,value:n});return new Gu(r).toPromise()}async function HU(t,e){const n=nf(t,!1).get(e),r=await new Gu(n).toPromise();return r===void 0?null:r.value}function P1(t,e){const n=nf(t,!0).delete(e);return new Gu(n).toPromise()}const WU=800,KU=3;class eC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KU)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tf._getInstance(zU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BU(),!this.activeServiceWorker)return;this.sender=new $U(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lg();return await D1(e,Jh,"1"),await P1(e,Jh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>D1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HU(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>P1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nf(i,!1).getAll();return new Gu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eC.type="LOCAL";const vu=eC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GU(t,e){return dt(t,"POST","/v2/accounts/mfaSignIn:start",nt(t,e))}function QU(t,e){return dt(t,"POST","/v2/accounts/mfaSignIn:finalize",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YU(t){return(await dt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XU().appendChild(r)})}function nC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JU=500,ZU=6e4,Tc=1e12;class eB{constructor(e){this.auth=e,this.counter=Tc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new tB(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Tc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Tc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Tc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class tB{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;L(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=nB(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},ZU)},JU))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function nB(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=nC("rcb"),rB=new Hu(3e4,6e4),iB="https://www.google.com/recaptcha/api.js?";class sB{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Xe().grecaptcha}load(e,n=""){return L(oB(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Xe().grecaptcha):new Promise((r,i)=>{const s=Xe().setTimeout(()=>{i(It(e,"network-request-failed"))},rB.get());Xe()[_p]=()=>{Xe().clearTimeout(s),delete Xe()[_p];const a=Xe().grecaptcha;if(!a){i(It(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${iB}?${la({onload:_p,render:"explicit",hl:n})}`;tC(o).catch(()=>{clearTimeout(s),i(It(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Xe().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function oB(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class aB{async load(e){return new eB(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="recaptcha",lB={theme:"light",type:"image"};class uB{constructor(e,n=Object.assign({},lB),r){this.parameters=n,this.type=rC,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ut(r),this.isInvisible=this.parameters.size==="invisible",L(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;L(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new aB:new sB,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){L(!this.parameters.sitekey,this.auth,"argument-error"),L(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),L(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Xe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){L(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){L(Xv()&&!sw(),this.auth,"internal-error"),await cB(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await YU(this.auth);L(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return L(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function cB(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ys._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function hB(t,e,n){const r=ut(t),i=await rf(r,e,q(n));return new ow(i,s=>Jd(r,s))}async function dB(t,e,n){const r=q(t);await Xd(!1,r,"phone");const i=await rf(r.auth,e,q(n));return new ow(i,s=>qb(r,s))}async function fB(t,e,n){const r=q(t),i=await rf(r.auth,e,q(n));return new ow(i,s=>Hb(r,s))}async function rf(t,e,n){var r;const i=await n.verify();try{L(typeof i=="string",t,"argument-error"),L(n.type===rC,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return L(o.type==="enroll",t,"internal-error"),(await RU(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{L(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return L(a,t,"missing-multi-factor-info"),(await GU(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await W2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function pB(t,e){await ew(q(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.providerId=Yn.PROVIDER_ID,this.auth=ut(e)}verifyPhoneNumber(e,n){return rf(this.auth,e,q(n))}static credential(e,n){return ys._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Yn.credentialFromTaggedObject(n)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ys._fromTokenResponse(n,r):null}}Yn.PROVIDER_ID="phone";Yn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t,e){return e?fn(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw extends Ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mB(t){return jb(t.auth,new aw(t),t.bypassAuthState)}function gB(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),zb(n,new aw(t),t.bypassAuthState)}async function yB(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),ew(n,new aw(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mB;case"linkViaPopup":case"linkViaRedirect":return yB;case"reauthViaPopup":case"reauthViaRedirect":return gB;default:kt(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vB=new Hu(2e3,1e4);async function wB(t,e,n){const r=ut(t);_a(t,e,Xr);const i=Qs(r,n);return new Nr(r,"signInViaPopup",e,i).executeNotNull()}async function _B(t,e,n){const r=q(t);_a(r.auth,e,Xr);const i=Qs(r.auth,n);return new Nr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function IB(t,e,n){const r=q(t);_a(r.auth,e,Xr);const i=Qs(r.auth,n);return new Nr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Nr extends iC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,vB.get())};e()}}Nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EB="pendingRedirect",kl=new Map;class kB extends iC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=kl.get(this.auth._key());if(!e){try{const r=await SB(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}kl.set(this.auth._key(),e)}return this.bypassAuthState||kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SB(t,e){const n=oC(e),r=sC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function lw(t,e){return sC(t)._set(oC(e),"true")}function TB(){kl.clear()}function uw(t,e){kl.set(t._key(),e)}function sC(t){return fn(t._redirectPersistence)}function oC(t){return gs(EB,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xB(t,e,n){return bB(t,e,n)}async function bB(t,e,n){const r=ut(t);_a(t,e,Xr);const i=Qs(r,n);return await lw(i,r),i._openRedirect(r,e,"signInViaRedirect")}function CB(t,e,n){return AB(t,e,n)}async function AB(t,e,n){const r=q(t);_a(r.auth,e,Xr);const i=Qs(r.auth,n);await lw(i,r.auth);const s=await aC(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function RB(t,e,n){return NB(t,e,n)}async function NB(t,e,n){const r=q(t);_a(r.auth,e,Xr);const i=Qs(r.auth,n);await Xd(!1,r,e.providerId),await lw(i,r.auth);const s=await aC(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function DB(t,e){return await ut(t)._initializationPromise,sf(t,e,!1)}async function sf(t,e,n=!1){const r=ut(t),i=Qs(r,e),o=await new kB(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function aC(t){const e=Ku(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PB=10*60*1e3;class lC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OB(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PB&&this.cachedEventUids.clear(),this.cachedEventUids.has(O1(e))}saveEventToCache(e){this.cachedEventUids.add(O1(e)),this.lastProcessedEventTime=Date.now()}}function O1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OB(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e={}){return dt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MB=/^https?/;async function FB(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cC(t);for(const n of e)try{if($B(n))return}catch{}kt(t,"unauthorized-domain")}function $B(t){const e=pu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MB.test(n))return!1;if(LB.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UB=new Hu(3e4,6e4);function L1(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BB(t){return new Promise((e,n)=>{var r,i,s;function o(){L1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L1(),n(It(t,"network-request-failed"))},timeout:UB.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xe().gapi)===null||s===void 0)&&s.load)o();else{const a=nC("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},tC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yc=null,e})}let Yc=null;function VB(t){return Yc=Yc||BB(t),Yc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zB=new Hu(5e3,15e3),jB="__/auth/iframe",qB="emulator/auth/iframe",HB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KB(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jv(e,qB):`https://${t.config.authDomain}/${jB}`,r={apiKey:e.apiKey,appName:t.name,v:Fi},i=WB.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${la(r).slice(1)}`}async function GB(t){const e=await VB(t),n=Xe().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:KB(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HB,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=Xe().setTimeout(()=>{s(o)},zB.get());function l(){Xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YB=500,XB=600,JB="_blank",ZB="http://localhost";class M1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eV(t,e,n,r=YB,i=XB){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},QB),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xe().toLowerCase();n&&(a=Rb(u)?JB:n),Ab(u)&&(e=e||ZB,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(A2(u)&&a!=="_self")return tV(e||"",a),new M1(null);const h=window.open(e||"",a,c);L(h,t,"popup-blocked");try{h.focus()}catch{}return new M1(h)}function tV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV="__/auth/handler",rV="emulator/auth/handler";function ug(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fi,eventId:i};if(e instanceof Xr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof ka){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${iV(t)}?${la(a).slice(1)}`}function iV({config:t}){return t.emulator?Jv(t,rV):`https://${t.authDomain}/${nV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="webStorageSupport";class sV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fs,this._completeRedirectFn=sf,this._overrideRedirectResult=uw}async _openPopup(e,n,r,i){var s;Jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=ug(e,n,r,pu(),i);return eV(e,o,Ku())}async _openRedirect(e,n,r,i){return await this._originValidation(e),UU(ug(e,n,r,pu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GB(e),r=new lC(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ip,{type:Ip},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ip];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FB(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ob()||Zv()||Ia()}}const oV=sV;class aV{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return dr("unexpected MultiFactorSessionType")}}}class cw extends aV{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new cw(e)}_finalizeEnroll(e,n,r){return NU(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return QU(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class hC{constructor(){}static assertion(e){return cw._fromCredential(e)}}hC.FACTOR_ID="phone";var F1="@firebase/auth",$1="0.20.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cV(t){Br(new Ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{L(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lb(t)},c=new P2(a,l,u);return h2(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new Ln("auth-internal",e=>{const n=ut(e.getProvider("auth").getImmediate());return(r=>new lV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(F1,$1,uV(t)),Nn(F1,$1,"esm2017")}cV("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV=2e3;async function dV(t,e,n){var r;const{BuildInfo:i}=$s();Jn(e.sessionId,"AuthEvent did not contain a session ID");const s=await yV(e.sessionId),o={};return Ia()?o.ibi=i.packageName:Wu()?o.apn=i.packageName:kt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,ug(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function fV(t){const{BuildInfo:e}=$s(),n={};Ia()?n.iosBundleId=e.packageName:Wu()?n.androidPackageName=e.packageName:kt(t,"operation-not-supported-in-this-environment"),await cC(t,n)}function pV(t){const{cordova:e}=$s();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,C2()?"_blank":"_system","location=yes"),n(i)})})}async function mV(t,e,n){const{cordova:r}=$s();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(It(t,"redirect-cancelled-by-user"))},hV))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Wu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function gV(t){var e,n,r,i,s,o,a,l,u,c;const h=$s();L(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),L(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),L(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),L(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),L(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function yV(t){const e=vV(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function vV(t){if(Jn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV=20;class _V extends lC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function IV(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:SV(),postBody:null,tenantId:t.tenantId,error:It(t,"no-auth-event")}}function EV(t,e){return cg()._set(hg(t),e)}async function U1(t){const e=await cg()._get(hg(t));return e&&await cg()._remove(hg(t)),e}function kV(t,e){var n,r;const i=xV(e);if(i.includes("/__/auth/callback")){const s=Xc(i),o=s.firebaseError?TV(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?It(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function SV(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<wV;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function cg(){return fn(iw)}function hg(t){return gs("authEvent",t.config.apiKey,t.name)}function TV(t){try{return JSON.parse(t)}catch{return null}}function xV(t){const e=Xc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Xc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Xc(i).link||i||r||n||t}function Xc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return _o(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV=500;class CV{constructor(){this._redirectPersistence=Fs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=sf,this._overrideRedirectResult=uw}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new _V(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){kt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){gV(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),TB(),await this._originValidation(e);const o=IV(e,r,i);await EV(e,o);const a=await dV(e,o,n),l=await pV(a);return mV(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fV(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=$s(),o=setTimeout(async()=>{await U1(e),n.onEvent(B1())},bV),a=async c=>{clearTimeout(o);const h=await U1(e);let d=null;h&&(c==null?void 0:c.url)&&(d=kV(h,c.url)),n.onEvent(d||B1())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;$s().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const AV=CV;function B1(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:It("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(t,e){ut(t)._logFramework(e)}var NV="@firebase/auth-compat",DV="0.2.16";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PV=1e3;function Sl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function OV(){return Sl()==="http:"||Sl()==="https:"}function dC(t=xe()){return!!((Sl()==="file:"||Sl()==="ionic:"||Sl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function LV(){return gd()||ky()}function MV(){return Ty()&&(document==null?void 0:document.documentMode)===11}function FV(t=xe()){return/Edge\/\d+/.test(t)}function $V(t=xe()){return MV()||FV(t)}function fC(){try{const t=self.localStorage,e=Ku();if(t)return t.setItem(e,"1"),t.removeItem(e),$V()?Hl():!0}catch{return hw()&&Hl()}return!1}function hw(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ep(){return(OV()||Sy()||dC())&&!LV()&&fC()&&!hw()}function pC(){return dC()&&typeof document!="undefined"}async function UV(){return pC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},PV);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function BV(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={LOCAL:"local",NONE:"none",SESSION:"session"},Ha=L,mC="persistence";function VV(t,e){if(Ha(Object.values(dn).includes(e),t,"invalid-persistence-type"),gd()){Ha(e!==dn.SESSION,t,"unsupported-persistence-type");return}if(ky()){Ha(e===dn.NONE,t,"unsupported-persistence-type");return}if(hw()){Ha(e===dn.NONE||e===dn.LOCAL&&Hl(),t,"unsupported-persistence-type");return}Ha(e===dn.NONE||fC(),t,"unsupported-persistence-type")}async function dg(t){await t._initializationPromise;const e=gC(),n=gs(mC,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function zV(t,e){const n=gC();if(!n)return[];const r=gs(mC,t,e);switch(n.getItem(r)){case dn.NONE:return[ra];case dn.LOCAL:return[vu,Fs];case dn.SESSION:return[Fs];default:return[]}}function gC(){var t;try{return((t=BV())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV=L;class fi{constructor(){this.browserResolver=fn(oV),this.cordovaResolver=fn(AV),this.underlyingResolver=null,this._redirectPersistence=Fs,this._completeRedirectFn=sf,this._overrideRedirectResult=uw}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return pC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return jV(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await UV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){return t.unwrap()}function qV(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(t){return vC(t)}function WV(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new KV(t,AU(t,e))}else if(r){const i=vC(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function vC(t){const{_tokenResponse:e}=t instanceof ln?t.customData:t;if(!e)return null;if(!(t instanceof ln)&&"temporaryProof"in e&&"phoneNumber"in e)return Yn.credentialFromResult(t);const n=e.providerId;if(!n||n===qa.PASSWORD)return null;let r;switch(n){case qa.GOOGLE:r=sr;break;case qa.FACEBOOK:r=ir;break;case qa.GITHUB:r=or;break;case qa.TWITTER:r=ar;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ia._create(n,a):_r._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Lo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof ln?r.credentialFromError(t):r.credentialFromResult(t)}function Jt(t,e){return e.catch(n=>{throw n instanceof ln&&WV(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:HV(n),additionalUserInfo:bU(n),user:Dr.getOrCreate(i)}})}async function fg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Jt(t,n.confirm(r))}}class KV{constructor(e,n){this.resolver=n,this.auth=qV(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Jt(yC(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this._delegate=e,this.multiFactor=PU(e)}static getOrCreate(e){return Dr.USER_MAP.has(e)||Dr.USER_MAP.set(e,new Dr(e)),Dr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Jt(this.auth,qb(this._delegate,e))}async linkWithPhoneNumber(e,n){return fg(this.auth,dB(this._delegate,e,n))}async linkWithPopup(e){return Jt(this.auth,IB(this._delegate,e,fi))}async linkWithRedirect(e){return await dg(ut(this.auth)),RB(this._delegate,e,fi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Jt(this.auth,Hb(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return fg(this.auth,fB(this._delegate,e,n))}reauthenticateWithPopup(e){return Jt(this.auth,_B(this._delegate,e,fi))}async reauthenticateWithRedirect(e){return await dg(ut(this.auth)),CB(this._delegate,e,fi)}sendEmailVerification(e){return gU(this._delegate,e)}async unlink(e){return await nU(this._delegate,e),this}updateEmail(e){return _U(this._delegate,e)}updatePassword(e){return IU(this._delegate,e)}updatePhoneNumber(e){return pB(this._delegate,e)}updateProfile(e){return wU(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return yU(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Dr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=L;class pg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Wa(r,"invalid-api-key",{appName:e.name}),Wa(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?fi:void 0;this._delegate=n.initialize({options:{persistence:GV(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(u2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Dr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){O2(this._delegate,e,n)}applyActionCode(e){return aU(this._delegate,e)}checkActionCode(e){return Wb(this._delegate,e)}confirmPasswordReset(e,n){return oU(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Jt(this._delegate,uU(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return mU(this._delegate,e)}isSignInWithEmailLink(e){return dU(this._delegate,e)}async getRedirectResult(){Wa(Ep(),this._delegate,"operation-not-supported-in-this-environment");const e=await DB(this._delegate,fi);return e?Jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){RV(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=V1(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=V1(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return hU(this._delegate,e,n)}sendPasswordResetEmail(e,n){return sU(this._delegate,e,n||void 0)}async setPersistence(e){VV(this._delegate,e);let n;switch(e){case dn.SESSION:n=Fs;break;case dn.LOCAL:n=await fn(vu)._isAvailable()?vu:iw;break;case dn.NONE:n=ra;break;default:return kt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Jt(this._delegate,tU(this._delegate))}signInWithCredential(e){return Jt(this._delegate,Jd(this._delegate,e))}signInWithCustomToken(e){return Jt(this._delegate,iU(this._delegate,e))}signInWithEmailAndPassword(e,n){return Jt(this._delegate,cU(this._delegate,e,n))}signInWithEmailLink(e,n){return Jt(this._delegate,fU(this._delegate,e,n))}signInWithPhoneNumber(e,n){return fg(this._delegate,hB(this._delegate,e,n))}async signInWithPopup(e){return Wa(Ep(),this._delegate,"operation-not-supported-in-this-environment"),Jt(this._delegate,wB(this._delegate,e,fi))}async signInWithRedirect(e){return Wa(Ep(),this._delegate,"operation-not-supported-in-this-environment"),await dg(this._delegate),xB(this._delegate,e,fi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return lU(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}pg.Persistence=dn;function V1(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Dr.getOrCreate(o)),error:e,complete:n}}function GV(t,e){const n=zV(t,e);if(typeof self!="undefined"&&!n.includes(vu)&&n.push(vu),typeof window!="undefined")for(const r of[iw,Fs])n.includes(r)||n.push(r);return n.includes(ra)||n.push(ra),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.providerId="phone",this._delegate=new Yn(yC(qt.auth()))}static credential(e,n){return Yn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}dw.PHONE_SIGN_IN_METHOD=Yn.PHONE_SIGN_IN_METHOD;dw.PROVIDER_ID=Yn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV=L;class YV{constructor(e,n,r=qt.app()){var i;QV((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new uB(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XV="auth-compat";function JV(t){t.INTERNAL.registerComponent(new Ln(XV,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new pg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:io.EMAIL_SIGNIN,PASSWORD_RESET:io.PASSWORD_RESET,RECOVER_EMAIL:io.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:io.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:io.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:io.VERIFY_EMAIL}},EmailAuthProvider:qi,FacebookAuthProvider:ir,GithubAuthProvider:or,GoogleAuthProvider:sr,OAuthProvider:Lo,SAMLAuthProvider:Yh,PhoneAuthProvider:dw,PhoneMultiFactorGenerator:hC,RecaptchaVerifier:YV,TwitterAuthProvider:ar,Auth:pg,AuthCredential:Ea,Error:ln}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(NV,DV)}JV(qt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="firebasestorage.googleapis.com",_C="storageBucket",ZV=2*60*1e3,ez=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends ln{constructor(e,n){super(kp(e),`Firebase Storage: ${n} (${kp(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}_codeEquals(e){return kp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function kp(t){return"storage/"+t}function fw(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue("unknown",t)}function tz(t){return new Ue("object-not-found","Object '"+t+"' does not exist.")}function nz(t){return new Ue("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rz(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue("unauthenticated",t)}function iz(){return new Ue("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function sz(t){return new Ue("unauthorized","User does not have permission to access '"+t+"'.")}function oz(){return new Ue("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function IC(){return new Ue("canceled","User canceled the upload/download.")}function az(t){return new Ue("invalid-url","Invalid URL '"+t+"'.")}function lz(t){return new Ue("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function uz(){return new Ue("no-default-bucket","No default bucket found. Did you set the '"+_C+"' property when initializing the app?")}function EC(){return new Ue("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function cz(){return new Ue("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function hz(){return new Ue("no-download-url","The given file does not have any download URLs.")}function Fo(t){return new Ue("invalid-argument",t)}function kC(){return new Ue("app-deleted","The Firebase app was deleted.")}function SC(t){return new Ue("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Tl(t,e){return new Ue("invalid-format","String does not match format '"+t+"': "+e)}function Ka(t){throw new Ue("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ct.makeFromUrl(e,n)}catch{return new Ct(e,"")}if(r.path==="")return r;throw lz(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},v=n===wC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${k}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<g.length;S++){const x=g[S],E=x.regex.exec(e);if(E){const C=E[x.indices.bucket];let R=E[x.indices.path];R||(R=""),r=new Ct(C,R),x.postModify(r);break}}if(r==null)throw az(e);return r}}class dz{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fz(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...k){u||(u=!0,e.apply(null,k))}function h(k){i=setTimeout(()=>{i=null,t(f,l())},k)}function d(){s&&clearTimeout(s)}function f(k,...m){if(u){d();return}if(k){d(),c.call(null,k,...m);return}if(l()||o){d(),c.call(null,k,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let p=!1;function v(k){p||(p=!0,d(),!u&&(i!==null?(k||(a=2),clearTimeout(i),h(0)):k||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function pz(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mz(t){return t!==void 0}function gz(t){return typeof t=="function"}function yz(t){return typeof t=="object"&&!Array.isArray(t)}function of(t){return typeof t=="string"||t instanceof String}function z1(t){return pw()&&t instanceof Blob}function pw(){return typeof Blob!="undefined"}function mg(t,e,n,r){if(r<e)throw Fo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function TC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vs||(vs={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vz{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new xc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===vs.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===vs.ABORT;r(!1,new xc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new xc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());mz(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=fw();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?kC():IC();o(l)}else{const l=oz();o(l)}};this.canceled_?n(!1,new xc(!1,null,!0)):this.backoffId_=fz(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pz(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class xc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function wz(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _z(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Iz(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ez(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kz(t,e,n,r,i,s){const o=TC(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return Iz(l,e),wz(l,n),_z(l,s),Ez(l,r),new vz(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sz(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function Tz(...t){const e=Sz();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(pw())return new Blob(t);throw new Ue("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function xz(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bz(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sp{constructor(e,n){this.data=e,this.contentType=n||null}}function xC(t,e){switch(t){case Cn.RAW:return new Sp(bC(e));case Cn.BASE64:case Cn.BASE64URL:return new Sp(CC(t,e));case Cn.DATA_URL:return new Sp(Az(e),Rz(e))}throw fw()}function bC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Cz(t){let e;try{e=decodeURIComponent(t)}catch{throw Tl(Cn.DATA_URL,"Malformed data URL.")}return bC(e)}function CC(t,e){switch(t){case Cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Tl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Tl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bz(e)}catch{throw Tl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class AC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Tl(Cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Nz(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Az(t){const e=new AC(t);return e.base64?CC(Cn.BASE64,e.rest):Cz(e.rest)}function Rz(t){return new AC(t).contentType}function Nz(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){let r=0,i="";z1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(z1(this.data_)){const r=this.data_,i=xz(r,e,n);return i===null?null:new xr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new xr(r,!0)}}static getBlob(...e){if(pw()){const n=e.map(r=>r instanceof xr?r.data_:r);return new xr(Tz.apply(null,n))}else{const n=e.map(o=>of(o)?xC(Cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new xr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t){let e;try{e=JSON.parse(t)}catch{return null}return yz(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dz(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Pz(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function RC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oz(t,e){return e}class Lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Oz}}let bc=null;function Lz(t){return!of(t)||t.length<2?t:RC(t)}function af(){if(bc)return bc;const t=[];t.push(new Lt("bucket")),t.push(new Lt("generation")),t.push(new Lt("metageneration")),t.push(new Lt("name","fullPath",!0));function e(s,o){return Lz(o)}const n=new Lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Lt("size");return i.xform=r,t.push(i),t.push(new Lt("timeCreated")),t.push(new Lt("updated")),t.push(new Lt("md5Hash",null,!0)),t.push(new Lt("cacheControl",null,!0)),t.push(new Lt("contentDisposition",null,!0)),t.push(new Lt("contentEncoding",null,!0)),t.push(new Lt("contentLanguage",null,!0)),t.push(new Lt("contentType",null,!0)),t.push(new Lt("metadata","customMetadata",!0)),bc=t,bc}function Mz(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ct(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Fz(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Mz(r,t),r}function NC(t,e,n){const r=mw(e);return r===null?null:Fz(t,r,n)}function $z(t,e,n,r){const i=mw(e);if(i===null||!of(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=Hi(d,n,r),p=TC({alt:"media",token:u});return f+p})[0]}function gw(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="prefixes",q1="items";function Uz(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[j1])for(const i of n[j1]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Ct(e,s));r.prefixes.push(o)}if(n[q1])for(const i of n[q1]){const s=t._makeStorageReference(new Ct(e,i.name));r.items.push(s)}return r}function Bz(t,e,n){const r=mw(n);return r===null?null:Uz(t,e,r)}class Jr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){if(!t)throw fw()}function lf(t,e){function n(r,i){const s=NC(t,i,e);return yr(s!==null),s}return n}function Vz(t,e){function n(r,i){const s=Bz(t,e,i);return yr(s!==null),s}return n}function zz(t,e){function n(r,i){const s=NC(t,i,e);return yr(s!==null),$z(s,i,t.host,t._protocol)}return n}function Sa(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=iz():i=rz():n.getStatus()===402?i=nz(t.bucket):n.getStatus()===403?i=sz(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function uf(t){const e=Sa(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=tz(t.path)),s.serverResponse=i.serverResponse,s}return n}function DC(t,e,n){const r=e.fullServerUrl(),i=Hi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Jr(i,s,lf(t,n),o);return a.errorHandler=uf(e),a}function jz(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Hi(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new Jr(a,l,Vz(t,e.bucket),u);return c.urlParams=s,c.errorHandler=Sa(e),c}function qz(t,e,n){const r=e.fullServerUrl(),i=Hi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Jr(i,s,zz(t,n),o);return a.errorHandler=uf(e),a}function Hz(t,e,n,r){const i=e.fullServerUrl(),s=Hi(i,t.host,t._protocol),o="PATCH",a=gw(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,c=new Jr(s,o,lf(t,r),u);return c.headers=l,c.body=a,c.errorHandler=uf(e),c}function Wz(t,e){const n=e.fullServerUrl(),r=Hi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new Jr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=uf(e),a}function Kz(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function PC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Kz(null,e)),r}function Gz(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let S=0;S<2;S++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=PC(e,r,i),c=gw(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=xr.getBlob(h,r,d);if(f===null)throw EC();const p={name:u.fullPath},v=Hi(s,t.host,t._protocol),k="POST",m=t.maxUploadRetryTime,y=new Jr(v,k,lf(t,n),m);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Sa(e),y}class ed{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function yw(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{yr(!1)}return yr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Qz(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=PC(e,r,i),a={name:o.fullPath},l=Hi(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=gw(o,n),d=t.maxUploadRetryTime;function f(v){yw(v);let k;try{k=v.getResponseHeader("X-Goog-Upload-URL")}catch{yr(!1)}return yr(of(k)),k}const p=new Jr(l,u,f,d);return p.urlParams=a,p.headers=c,p.body=h,p.errorHandler=Sa(e),p}function Yz(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=yw(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{yr(!1)}h||yr(!1);const d=Number(h);return yr(!isNaN(d)),new ed(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Jr(n,o,s,a);return l.headers=i,l.errorHandler=Sa(e),l}const H1=256*1024;function Xz(t,e,n,r,i,s,o,a){const l=new ed(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw cz();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c,p={"X-Goog-Upload-Command":c===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,d);if(v===null)throw EC();function k(S,x){const E=yw(S,["active","final"]),C=l.current+c,R=r.size();let H;return E==="final"?H=lf(e,s)(S,x):H=null,new ed(C,R,E==="final",H)}const m="POST",y=e.maxUploadRetryTime,g=new Jr(n,m,k,y);return g.headers=p,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=Sa(t),g}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jz={STATE_CHANGED:"state_changed"},Ut={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Tp(t){switch(t){case"running":case"pausing":case"canceling":return Ut.RUNNING;case"paused":return Ut.PAUSED;case"success":return Ut.SUCCESS;case"canceled":return Ut.CANCELED;case"error":return Ut.ERROR;default:return Ut.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zz{constructor(e,n,r){if(gz(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class ej{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ka("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ka("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ka("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ka("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ka("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class tj extends ej{initXhr(){this.xhr_.responseType="text"}}function lr(){return new tj}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=af(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Qz(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,lr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=Yz(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,lr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=H1*this._chunkMultiplier,n=new ed(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=Xz(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,lr,i,s);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){H1*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=DC(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,lr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Gz(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,lr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=IC(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Tp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new Zz(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Tp(this._state)){case Ut.SUCCESS:so(this._resolve.bind(null,this.snapshot))();break;case Ut.CANCELED:case Ut.ERROR:const n=this._reject;so(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Tp(this._state)){case Ut.RUNNING:case Ut.PAUSED:e.next&&so(e.next.bind(e,this.snapshot))();break;case Ut.SUCCESS:e.complete&&so(e.complete.bind(e))();break;case Ut.CANCELED:case Ut.ERROR:e.error&&so(e.error.bind(e,this._error))();break;default:e.error&&so(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this._service=e,n instanceof Ct?this._location=n:this._location=Ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Us(e,n)}get root(){const e=new Ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return RC(this._location.path)}get storage(){return this._service}get parent(){const e=Dz(this._location.path);if(e===null)return null;const n=new Ct(this._location.bucket,e);return new Us(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw SC(e)}}function nj(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new OC(t,new xr(e),n)}function rj(t){const e={prefixes:[],items:[]};return LC(t,e).then(()=>e)}async function LC(t,e,n){const i=await MC(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await LC(t,e,i.nextPageToken)}function MC(t,e){e!=null&&typeof e.maxResults=="number"&&mg("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=jz(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,lr)}function ij(t){t._throwIfRoot("getMetadata");const e=DC(t.storage,t._location,af());return t.storage.makeRequestWithTokens(e,lr)}function sj(t,e){t._throwIfRoot("updateMetadata");const n=Hz(t.storage,t._location,e,af());return t.storage.makeRequestWithTokens(n,lr)}function oj(t){t._throwIfRoot("getDownloadURL");const e=qz(t.storage,t._location,af());return t.storage.makeRequestWithTokens(e,lr).then(n=>{if(n===null)throw hz();return n})}function aj(t){t._throwIfRoot("deleteObject");const e=Wz(t.storage,t._location);return t.storage.makeRequestWithTokens(e,lr)}function FC(t,e){const n=Pz(t._location.path,e),r=new Ct(t._location.bucket,n);return new Us(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lj(t){return/^[A-Za-z]+:\/\//.test(t)}function uj(t,e){return new Us(t,e)}function $C(t,e){if(t instanceof vw){const n=t;if(n._bucket==null)throw uz();const r=new Us(n,n._bucket);return e!=null?$C(r,e):r}else return e!==void 0?FC(t,e):t}function cj(t,e){if(e&&lj(e)){if(t instanceof vw)return uj(t,e);throw Fo("To use ref(service, url), the first argument must be a Storage instance.")}else return $C(t,e)}function W1(t,e){const n=e==null?void 0:e[_C];return n==null?null:Ct.makeFromBucketSpec(n,t)}function hj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Zk(i,t.app.options.projectId))}class vw{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=wC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ZV,this._maxUploadRetryTime=ez,this._requests=new Set,i!=null?this._bucket=Ct.makeFromBucketSpec(i,this._host):this._bucket=W1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,e):this._bucket=W1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){mg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){mg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Us(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new dz(kC());{const s=kz(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const K1="@firebase/storage",G1="0.9.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dj="storage";function fj(t,e,n){return t=q(t),nj(t,e,n)}function pj(t){return t=q(t),ij(t)}function mj(t,e){return t=q(t),sj(t,e)}function gj(t,e){return t=q(t),MC(t,e)}function yj(t){return t=q(t),rj(t)}function vj(t){return t=q(t),oj(t)}function wj(t){return t=q(t),aj(t)}function Q1(t,e){return t=q(t),cj(t,e)}function _j(t,e){return FC(t,e)}function Ij(t,e,n,r={}){hj(t,e,n,r)}function Ej(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vw(n,r,i,e,Fi)}function kj(){Br(new Ln(dj,Ej,"PUBLIC").setMultipleInstances(!0)),Nn(K1,G1,""),Nn(K1,G1,"esm2017")}kj();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Cc(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Cc(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Cc(o,this,this._ref)):s={next:n.next?o=>n.next(new Cc(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class X1{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Mr(e,this._service))}get items(){return this._delegate.items.map(e=>new Mr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=_j(this._delegate,e);return new Mr(n,this.storage)}get root(){return new Mr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Mr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new Y1(fj(this._delegate,e,n),this)}putString(e,n=Cn.RAW,r){this._throwIfRoot("putString");const i=xC(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new Y1(new OC(this._delegate,new xr(i.data,!0),s),this)}listAll(){return yj(this._delegate).then(e=>new X1(e,this.storage))}list(e){return gj(this._delegate,e||void 0).then(n=>new X1(n,this.storage))}getMetadata(){return pj(this._delegate)}updateMetadata(e){return mj(this._delegate,e)}getDownloadURL(){return vj(this._delegate)}delete(){return this._throwIfRoot("delete"),wj(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw SC(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(J1(e))throw Fo("ref() expected a child path but got a URL, use refFromURL instead.");return new Mr(Q1(this._delegate,e),this)}refFromURL(e){if(!J1(e))throw Fo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Ct.makeFromUrl(e,this._delegate.host)}catch{throw Fo("refFromUrl() expected a valid full URL but got an invalid one.")}return new Mr(Q1(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){Ij(this._delegate,e,n,r)}}function J1(t){return/^[A-Za-z]+:\/\//.test(t)}const Sj="@firebase/storage-compat",Tj="0.1.15";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xj="storage-compat";function bj(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new UC(n,r)}function Cj(t){const e={TaskState:Ut,TaskEvent:Jz,StringFormat:Cn,Storage:UC,Reference:Mr};t.INTERNAL.registerComponent(new Ln(xj,bj,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Sj,Tj)}Cj(qt);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Aj(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function Rj(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ko=function(){return ko=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ko.apply(this,arguments)},BC=function(t){return{loading:t==null,value:t}},Nj=function(){return function(t,e){switch(e.type){case"error":return ko(ko({},t),{error:e.error,loading:!1,value:void 0});case"reset":return BC(e.defaultValue);case"value":return ko(ko({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Dj=function(t){var e=t?t():void 0,n=Re.exports.useReducer(Nj(),BC(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return Re.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},gg=function(t,e){var n=Dj(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;Re.exports.useEffect(function(){var u=CU(t,function(c){return Aj(void 0,void 0,void 0,function(){var h;return Rj(this,function(d){switch(d.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return d.sent(),[3,4];case 3:return h=d.sent(),s(h),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]);var l=[a,i,r];return Re.exports.useMemo(function(){return l},l)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var So=function(){return So=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},So.apply(this,arguments)},VC=function(t){return{loading:t==null,value:t}},Pj=function(){return function(t,e){switch(e.type){case"error":return So(So({},t),{error:e.error,loading:!1,value:void 0});case"reset":return VC(e.defaultValue);case"value":return So(So({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Oj=function(t){var e=t?t():void 0,n=Re.exports.useReducer(Pj(),VC(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return Re.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Lj=function(t,e,n){var r=Re.exports.useRef(t);return Re.exports.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},Mj=function(t,e){var n=!t&&!e,r=!!t&&!!e&&Uv(t,e);return n||r},Fj=function(t,e){return Lj(t,Mj,e)},$j=function(t,e){var n=Oj(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,l=n.value,u=Fj(t,s);Re.exports.useEffect(function(){if(!u.current){a(void 0);return}var h=e!=null&&e.snapshotListenOptions?Qh(u.current,e.snapshotListenOptions,a,o):Qh(u.current,a,o);return function(){h()}},[u.current]);var c=[l,i,r];return Re.exports.useMemo(function(){return c},c)},zC=function(t,e){var n=e==null?void 0:e.snapshotOptions,r=$j(t,e),i=r[0],s=r[1],o=r[2],a=Uj(i,n),l=[a,s,o,i];return Re.exports.useMemo(function(){return l},l)},Uj=function(t,e){return Re.exports.useMemo(function(){return t==null?void 0:t.docs.map(function(n){return n.data(e)})},[t,e])};const Z1=["http","https","mailto","tel"];function Bj(t){const e=(t||"").trim(),n=e.charAt(0);if(n==="#"||n==="/")return e;const r=e.indexOf(":");if(r===-1)return e;let i=-1;for(;++i<Z1.length;){const s=Z1[i];if(r===s.length&&e.slice(0,s.length).toLowerCase()===s)return e}return i=e.indexOf("?"),i!==-1&&r>i||(i=e.indexOf("#"),i!==-1&&r>i)?e:"javascript:void(0)"}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var jC=function(e){return e!=null&&e.constructor!=null&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)};function xl(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?eI(t.position):"start"in t||"end"in t?eI(t):"line"in t||"column"in t?yg(t):""}function yg(t){return tI(t&&t.line)+":"+tI(t&&t.column)}function eI(t){return yg(t&&t.start)+"-"+yg(t&&t.end)}function tI(t){return t&&typeof t=="number"?t:1}class Un extends Error{constructor(e,n,r){const i=[null,null];let s={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof n=="string"&&(r=n,n=void 0),typeof r=="string"){const o=r.indexOf(":");o===-1?i[1]=r:(i[0]=r.slice(0,o),i[1]=r.slice(o+1))}n&&("type"in n||"position"in n?n.position&&(s=n.position):"start"in n||"end"in n?s=n:("line"in n||"column"in n)&&(s.start=n)),this.name=xl(n)||"1:1",this.message=typeof e=="object"?e.message:e,this.stack=typeof e=="object"?e.stack:"",this.reason=this.message,this.fatal,this.line=s.start.line,this.column=s.start.column,this.source=i[0],this.ruleId=i[1],this.position=s,this.actual,this.expected,this.file,this.url,this.note}}Un.prototype.file="";Un.prototype.name="";Un.prototype.reason="";Un.prototype.message="";Un.prototype.stack="";Un.prototype.fatal=null;Un.prototype.column=null;Un.prototype.line=null;Un.prototype.source=null;Un.prototype.ruleId=null;Un.prototype.position=null;const nr={basename:Vj,dirname:zj,extname:jj,join:qj,sep:"/"};function Vj(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Qu(t);let n=0,r=-1,i=t.length,s;if(e===void 0||e.length===0||e.length>t.length){for(;i--;)if(t.charCodeAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":t.slice(n,r)}if(e===t)return"";let o=-1,a=e.length-1;for(;i--;)if(t.charCodeAt(i)===47){if(s){n=i+1;break}}else o<0&&(s=!0,o=i+1),a>-1&&(t.charCodeAt(i)===e.charCodeAt(a--)?a<0&&(r=i):(a=-1,r=o));return n===r?r=o:r<0&&(r=t.length),t.slice(n,r)}function zj(t){if(Qu(t),t.length===0)return".";let e=-1,n=t.length,r;for(;--n;)if(t.charCodeAt(n)===47){if(r){e=n;break}}else r||(r=!0);return e<0?t.charCodeAt(0)===47?"/":".":e===1&&t.charCodeAt(0)===47?"//":t.slice(0,e)}function jj(t){Qu(t);let e=t.length,n=-1,r=0,i=-1,s=0,o;for(;e--;){const a=t.charCodeAt(e);if(a===47){if(o){r=e+1;break}continue}n<0&&(o=!0,n=e+1),a===46?i<0?i=e:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":t.slice(i,n)}function qj(...t){let e=-1,n;for(;++e<t.length;)Qu(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":Hj(n)}function Hj(t){Qu(t);const e=t.charCodeAt(0)===47;let n=Wj(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.charCodeAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function Wj(t,e){let n="",r=0,i=-1,s=0,o=-1,a,l;for(;++o<=t.length;){if(o<t.length)a=t.charCodeAt(o);else{if(a===47)break;a=47}if(a===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=o,s=0;continue}}else if(n.length>0){n="",r=0,i=o,s=0;continue}}e&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+t.slice(i+1,o):n=t.slice(i+1,o),r=o-i-1;i=o,s=0}else a===46&&s>-1?s++:s=-1}return n}function Qu(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const Kj={cwd:Gj};function Gj(){return"/"}function vg(t){return t!==null&&typeof t=="object"&&t.href&&t.origin}function Qj(t){if(typeof t=="string")t=new URL(t);else if(!vg(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return Yj(t)}function Yj(t){if(t.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.charCodeAt(n)===37&&e.charCodeAt(n+1)===50){const r=e.charCodeAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const xp=["history","path","basename","stem","extname","dirname"];class qC{constructor(e){let n;e?typeof e=="string"||jC(e)?n={value:e}:vg(e)?n={path:e}:n=e:n={},this.data={},this.messages=[],this.history=[],this.cwd=Kj.cwd(),this.value,this.stored,this.result,this.map;let r=-1;for(;++r<xp.length;){const s=xp[r];s in n&&n[s]!==void 0&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)xp.includes(i)||(this[i]=n[i])}get path(){return this.history[this.history.length-1]}set path(e){vg(e)&&(e=Qj(e)),Cp(e,"path"),this.path!==e&&this.history.push(e)}get dirname(){return typeof this.path=="string"?nr.dirname(this.path):void 0}set dirname(e){nI(this.basename,"dirname"),this.path=nr.join(e||"",this.basename)}get basename(){return typeof this.path=="string"?nr.basename(this.path):void 0}set basename(e){Cp(e,"basename"),bp(e,"basename"),this.path=nr.join(this.dirname||"",e)}get extname(){return typeof this.path=="string"?nr.extname(this.path):void 0}set extname(e){if(bp(e,"extname"),nI(this.dirname,"extname"),e){if(e.charCodeAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=nr.join(this.dirname,this.stem+(e||""))}get stem(){return typeof this.path=="string"?nr.basename(this.path,this.extname):void 0}set stem(e){Cp(e,"stem"),bp(e,"stem"),this.path=nr.join(this.dirname||"",e+(this.extname||""))}toString(e){return(this.value||"").toString(e)}message(e,n,r){const i=new Un(e,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}info(e,n,r){const i=this.message(e,n,r);return i.fatal=null,i}fail(e,n,r){const i=this.message(e,n,r);throw i.fatal=!0,i}}function bp(t,e){if(t&&t.includes(nr.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+nr.sep+"`")}function Cp(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function nI(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function rI(t){if(t)throw t}var Jc=Object.prototype.hasOwnProperty,HC=Object.prototype.toString,iI=Object.defineProperty,sI=Object.getOwnPropertyDescriptor,oI=function(e){return typeof Array.isArray=="function"?Array.isArray(e):HC.call(e)==="[object Array]"},aI=function(e){if(!e||HC.call(e)!=="[object Object]")return!1;var n=Jc.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&Jc.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!r)return!1;var i;for(i in e);return typeof i=="undefined"||Jc.call(e,i)},lI=function(e,n){iI&&n.name==="__proto__"?iI(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},uI=function(e,n){if(n==="__proto__")if(Jc.call(e,n)){if(sI)return sI(e,n).value}else return;return e[n]},cI=function t(){var e,n,r,i,s,o,a=arguments[0],l=1,u=arguments.length,c=!1;for(typeof a=="boolean"&&(c=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(e=arguments[l],e!=null)for(n in e)r=uI(a,n),i=uI(e,n),a!==i&&(c&&i&&(aI(i)||(s=oI(i)))?(s?(s=!1,o=r&&oI(r)?r:[]):o=r&&aI(r)?r:{},lI(a,{name:n,newValue:t(c,o,i)})):typeof i!="undefined"&&lI(a,{name:n,newValue:i}));return a};function wg(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Xj(){const t=[],e={run:n,use:r};return e;function n(...i){let s=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);a(null,...i);function a(l,...u){const c=t[++s];let h=-1;if(l){o(l);return}for(;++h<i.length;)(u[h]===null||u[h]===void 0)&&(u[h]=i[h]);i=u,c?Jj(c,a)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return t.push(i),e}}function Jj(t,e){let n;return r;function r(...o){const a=t.length>o.length;let l;a&&o.push(i);try{l=t.apply(this,o)}catch(u){const c=u;if(a&&n)throw c;return i(c)}a||(l instanceof Promise?l.then(s,i):l instanceof Error?i(l):s(l))}function i(o,...a){n||(n=!0,e(o,...a))}function s(o){i(null,o)}}const Zj=KC().freeze(),WC={}.hasOwnProperty;function KC(){const t=Xj(),e=[];let n={},r,i=-1;return s.data=o,s.Parser=void 0,s.Compiler=void 0,s.freeze=a,s.attachers=e,s.use=l,s.parse=u,s.stringify=c,s.run=h,s.runSync=d,s.process=f,s.processSync=p,s;function s(){const v=KC();let k=-1;for(;++k<e.length;)v.use(...e[k]);return v.data(cI(!0,{},n)),v}function o(v,k){return typeof v=="string"?arguments.length===2?(Np("data",r),n[v]=k,s):WC.call(n,v)&&n[v]||null:v?(Np("data",r),n=v,s):n}function a(){if(r)return s;for(;++i<e.length;){const[v,...k]=e[i];if(k[0]===!1)continue;k[0]===!0&&(k[0]=void 0);const m=v.call(s,...k);typeof m=="function"&&t.use(m)}return r=!0,i=Number.POSITIVE_INFINITY,s}function l(v,...k){let m;if(Np("use",r),v!=null)if(typeof v=="function")x(v,...k);else if(typeof v=="object")Array.isArray(v)?S(v):g(v);else throw new TypeError("Expected usable value, not `"+v+"`");return m&&(n.settings=Object.assign(n.settings||{},m)),s;function y(E){if(typeof E=="function")x(E);else if(typeof E=="object")if(Array.isArray(E)){const[C,...R]=E;x(C,...R)}else g(E);else throw new TypeError("Expected usable value, not `"+E+"`")}function g(E){S(E.plugins),E.settings&&(m=Object.assign(m||{},E.settings))}function S(E){let C=-1;if(E!=null)if(Array.isArray(E))for(;++C<E.length;){const R=E[C];y(R)}else throw new TypeError("Expected a list of plugins, not `"+E+"`")}function x(E,C){let R=-1,H;for(;++R<e.length;)if(e[R][0]===E){H=e[R];break}H?(wg(H[1])&&wg(C)&&(C=cI(!0,H[1],C)),H[1]=C):e.push([...arguments])}}function u(v){s.freeze();const k=Ga(v),m=s.Parser;return Ap("parse",m),hI(m,"parse")?new m(String(k),k).parse():m(String(k),k)}function c(v,k){s.freeze();const m=Ga(k),y=s.Compiler;return Rp("stringify",y),dI(v),hI(y,"compile")?new y(v,m).compile():y(v,m)}function h(v,k,m){if(dI(v),s.freeze(),!m&&typeof k=="function"&&(m=k,k=void 0),!m)return new Promise(y);y(null,m);function y(g,S){t.run(v,Ga(k),x);function x(E,C,R){C=C||v,E?S(E):g?g(C):m(null,C,R)}}}function d(v,k){let m,y;return s.run(v,k,g),fI("runSync","run",y),m;function g(S,x){rI(S),m=x,y=!0}}function f(v,k){if(s.freeze(),Ap("process",s.Parser),Rp("process",s.Compiler),!k)return new Promise(m);m(null,k);function m(y,g){const S=Ga(v);s.run(s.parse(S),S,(E,C,R)=>{if(E||!C||!R)x(E);else{const H=s.stringify(C,R);H==null||(n3(H)?R.value=H:R.result=H),x(E,R)}});function x(E,C){E||!C?g(E):y?y(C):k(null,C)}}}function p(v){let k;s.freeze(),Ap("processSync",s.Parser),Rp("processSync",s.Compiler);const m=Ga(v);return s.process(m,y),fI("processSync","process",k),m;function y(g){k=!0,rI(g)}}}function hI(t,e){return typeof t=="function"&&t.prototype&&(e3(t.prototype)||e in t.prototype)}function e3(t){let e;for(e in t)if(WC.call(t,e))return!0;return!1}function Ap(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `Parser`")}function Rp(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `Compiler`")}function Np(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function dI(t){if(!wg(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function fI(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function Ga(t){return t3(t)?t:new qC(t)}function t3(t){return Boolean(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function n3(t){return typeof t=="string"||jC(t)}function r3(t,e){var{includeImageAlt:n=!0}=e||{};return GC(t,n)}function GC(t,e){return t&&typeof t=="object"&&(t.value||(e?t.alt:"")||"children"in t&&pI(t.children,e)||Array.isArray(t)&&pI(t,e))||""}function pI(t,e){for(var n=[],r=-1;++r<t.length;)n[r]=GC(t[r],e);return n.join("")}function Ir(t,e,n,r){const i=t.length;let s=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(e,n),[].splice.apply(t,o);else for(n&&[].splice.apply(t,[e,n]);s<r.length;)o=r.slice(s,s+1e4),o.unshift(e,0),[].splice.apply(t,o),s+=1e4,e+=1e4}function Tn(t,e){return t.length>0?(Ir(t,t.length,0,e),t):e}const mI={}.hasOwnProperty;function i3(t){const e={};let n=-1;for(;++n<t.length;)s3(e,t[n]);return e}function s3(t,e){let n;for(n in e){const i=(mI.call(t,n)?t[n]:void 0)||(t[n]={}),s=e[n];let o;for(o in s){mI.call(i,o)||(i[o]=[]);const a=s[o];o3(i[o],Array.isArray(a)?a:a?[a]:[])}}}function o3(t,e){let n=-1;const r=[];for(;++n<e.length;)(e[n].add==="after"?t:r).push(e[n]);Ir(t,0,0,r)}const a3=/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,ur=Wi(/[A-Za-z]/),_g=Wi(/\d/),l3=Wi(/[\dA-Fa-f]/),pn=Wi(/[\dA-Za-z]/),u3=Wi(/[!-/:-@[-`{-~]/),gI=Wi(/[#-'*+\--9=?A-Z^-~]/);function Ig(t){return t!==null&&(t<32||t===127)}function Dn(t){return t!==null&&(t<0||t===32)}function Z(t){return t!==null&&t<-2}function He(t){return t===-2||t===-1||t===32}const c3=Wi(/\s/),h3=Wi(a3);function Wi(t){return e;function e(n){return n!==null&&t.test(String.fromCharCode(n))}}function ve(t,e,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return o;function o(l){return He(l)?(t.enter(n),a(l)):e(l)}function a(l){return He(l)&&s++<i?(t.consume(l),a):(t.exit(n),e(l))}}const d3={tokenize:f3};function f3(t){const e=t.attempt(this.parser.constructs.contentInitial,r,i);let n;return e;function r(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),ve(t,e,"linePrefix")}function i(a){return t.enter("paragraph"),s(a)}function s(a){const l=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,o(a)}function o(a){if(a===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(a);return}return Z(a)?(t.consume(a),t.exit("chunkText"),s):(t.consume(a),o)}}const p3={tokenize:m3},yI={tokenize:g3};function m3(t){const e=this,n=[];let r=0,i,s,o;return a;function a(g){if(r<n.length){const S=n[r];return e.containerState=S[1],t.attempt(S[0].continuation,l,u)(g)}return u(g)}function l(g){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&y();const S=e.events.length;let x=S,E;for(;x--;)if(e.events[x][0]==="exit"&&e.events[x][1].type==="chunkFlow"){E=e.events[x][1].end;break}m(r);let C=S;for(;C<e.events.length;)e.events[C][1].end=Object.assign({},E),C++;return Ir(e.events,x+1,0,e.events.slice(S)),e.events.length=C,u(g)}return a(g)}function u(g){if(r===n.length){if(!i)return d(g);if(i.currentConstruct&&i.currentConstruct.concrete)return p(g);e.interrupt=Boolean(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(yI,c,h)(g)}function c(g){return i&&y(),m(r),d(g)}function h(g){return e.parser.lazy[e.now().line]=r!==n.length,o=e.now().offset,p(g)}function d(g){return e.containerState={},t.attempt(yI,f,p)(g)}function f(g){return r++,n.push([e.currentConstruct,e.containerState]),d(g)}function p(g){if(g===null){i&&y(),m(0),t.consume(g);return}return i=i||e.parser.flow(e.now()),t.enter("chunkFlow",{contentType:"flow",previous:s,_tokenizer:i}),v(g)}function v(g){if(g===null){k(t.exit("chunkFlow"),!0),m(0),t.consume(g);return}return Z(g)?(t.consume(g),k(t.exit("chunkFlow")),r=0,e.interrupt=void 0,a):(t.consume(g),v)}function k(g,S){const x=e.sliceStream(g);if(S&&x.push(null),g.previous=s,s&&(s.next=g),s=g,i.defineSkip(g.start),i.write(x),e.parser.lazy[g.start.line]){let E=i.events.length;for(;E--;)if(i.events[E][1].start.offset<o&&(!i.events[E][1].end||i.events[E][1].end.offset>o))return;const C=e.events.length;let R=C,H,G;for(;R--;)if(e.events[R][0]==="exit"&&e.events[R][1].type==="chunkFlow"){if(H){G=e.events[R][1].end;break}H=!0}for(m(r),E=C;E<e.events.length;)e.events[E][1].end=Object.assign({},G),E++;Ir(e.events,R+1,0,e.events.slice(C)),e.events.length=E}}function m(g){let S=n.length;for(;S-- >g;){const x=n[S];e.containerState=x[1],x[0].exit.call(e,t)}n.length=g}function y(){i.write([null]),s=void 0,i=void 0,e.containerState._closeFlow=void 0}}function g3(t,e,n){return ve(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function vI(t){if(t===null||Dn(t)||c3(t))return 1;if(h3(t))return 2}function ww(t,e,n){const r=[];let i=-1;for(;++i<t.length;){const s=t[i].resolveAll;s&&!r.includes(s)&&(e=s(e,n),r.push(s))}return e}const Eg={name:"attention",tokenize:v3,resolveAll:y3};function y3(t,e){let n=-1,r,i,s,o,a,l,u,c;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(r=n;r--;)if(t[r][0]==="exit"&&t[r][1].type==="attentionSequence"&&t[r][1]._open&&e.sliceSerialize(t[r][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[r][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[r][1].end.offset-t[r][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;l=t[r][1].end.offset-t[r][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const h=Object.assign({},t[r][1].end),d=Object.assign({},t[n][1].start);wI(h,-l),wI(d,l),o={type:l>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},t[r][1].end)},a={type:l>1?"strongSequence":"emphasisSequence",start:Object.assign({},t[n][1].start),end:d},s={type:l>1?"strongText":"emphasisText",start:Object.assign({},t[r][1].end),end:Object.assign({},t[n][1].start)},i={type:l>1?"strong":"emphasis",start:Object.assign({},o.start),end:Object.assign({},a.end)},t[r][1].end=Object.assign({},o.start),t[n][1].start=Object.assign({},a.end),u=[],t[r][1].end.offset-t[r][1].start.offset&&(u=Tn(u,[["enter",t[r][1],e],["exit",t[r][1],e]])),u=Tn(u,[["enter",i,e],["enter",o,e],["exit",o,e],["enter",s,e]]),u=Tn(u,ww(e.parser.constructs.insideSpan.null,t.slice(r+1,n),e)),u=Tn(u,[["exit",s,e],["enter",a,e],["exit",a,e],["exit",i,e]]),t[n][1].end.offset-t[n][1].start.offset?(c=2,u=Tn(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):c=0,Ir(t,r-1,n-r+3,u),n=r+u.length-c-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function v3(t,e){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=vI(r);let s;return o;function o(l){return t.enter("attentionSequence"),s=l,a(l)}function a(l){if(l===s)return t.consume(l),a;const u=t.exit("attentionSequence"),c=vI(l),h=!c||c===2&&i||n.includes(l),d=!i||i===2&&c||n.includes(r);return u._open=Boolean(s===42?h:h&&(i||!d)),u._close=Boolean(s===42?d:d&&(c||!h)),e(l)}}function wI(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const w3={name:"autolink",tokenize:_3};function _3(t,e,n){let r=1;return i;function i(p){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),s}function s(p){return ur(p)?(t.consume(p),o):gI(p)?u(p):n(p)}function o(p){return p===43||p===45||p===46||pn(p)?a(p):u(p)}function a(p){return p===58?(t.consume(p),l):(p===43||p===45||p===46||pn(p))&&r++<32?(t.consume(p),a):u(p)}function l(p){return p===62?(t.exit("autolinkProtocol"),f(p)):p===null||p===32||p===60||Ig(p)?n(p):(t.consume(p),l)}function u(p){return p===64?(t.consume(p),r=0,c):gI(p)?(t.consume(p),u):n(p)}function c(p){return pn(p)?h(p):n(p)}function h(p){return p===46?(t.consume(p),r=0,c):p===62?(t.exit("autolinkProtocol").type="autolinkEmail",f(p)):d(p)}function d(p){return(p===45||pn(p))&&r++<63?(t.consume(p),p===45?d:h):n(p)}function f(p){return t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e}}const cf={tokenize:I3,partial:!0};function I3(t,e,n){return ve(t,r,"linePrefix");function r(i){return i===null||Z(i)?e(i):n(i)}}const QC={name:"blockQuote",tokenize:E3,continuation:{tokenize:k3},exit:S3};function E3(t,e,n){const r=this;return i;function i(o){if(o===62){const a=r.containerState;return a.open||(t.enter("blockQuote",{_container:!0}),a.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(o),t.exit("blockQuoteMarker"),s}return n(o)}function s(o){return He(o)?(t.enter("blockQuotePrefixWhitespace"),t.consume(o),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(o))}}function k3(t,e,n){return ve(t,t.attempt(QC,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function S3(t){t.exit("blockQuote")}const YC={name:"characterEscape",tokenize:T3};function T3(t,e,n){return r;function r(s){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(s),t.exit("escapeMarker"),i}function i(s){return u3(s)?(t.enter("characterEscapeValue"),t.consume(s),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(s)}}const _I=document.createElement("i");function _w(t){const e="&"+t+";";_I.innerHTML=e;const n=_I.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}const XC={name:"characterReference",tokenize:x3};function x3(t,e,n){const r=this;let i=0,s,o;return a;function a(h){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(h),t.exit("characterReferenceMarker"),l}function l(h){return h===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(h),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),s=31,o=pn,c(h))}function u(h){return h===88||h===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(h),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),s=6,o=l3,c):(t.enter("characterReferenceValue"),s=7,o=_g,c(h))}function c(h){let d;return h===59&&i?(d=t.exit("characterReferenceValue"),o===pn&&!_w(r.sliceSerialize(d))?n(h):(t.enter("characterReferenceMarker"),t.consume(h),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)):o(h)&&i++<s?(t.consume(h),c):n(h)}}const II={name:"codeFenced",tokenize:b3,concrete:!0};function b3(t,e,n){const r=this,i={tokenize:x,partial:!0},s={tokenize:S,partial:!0},o=this.events[this.events.length-1],a=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0;let l=0,u;return c;function c(E){return t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),u=E,h(E)}function h(E){return E===u?(t.consume(E),l++,h):(t.exit("codeFencedFenceSequence"),l<3?n(E):ve(t,d,"whitespace")(E))}function d(E){return E===null||Z(E)?k(E):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),f(E))}function f(E){return E===null||Dn(E)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),ve(t,p,"whitespace")(E)):E===96&&E===u?n(E):(t.consume(E),f)}function p(E){return E===null||Z(E)?k(E):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),v(E))}function v(E){return E===null||Z(E)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),k(E)):E===96&&E===u?n(E):(t.consume(E),v)}function k(E){return t.exit("codeFencedFence"),r.interrupt?e(E):m(E)}function m(E){return E===null?g(E):Z(E)?t.attempt(s,t.attempt(i,g,a?ve(t,m,"linePrefix",a+1):m),g)(E):(t.enter("codeFlowValue"),y(E))}function y(E){return E===null||Z(E)?(t.exit("codeFlowValue"),m(E)):(t.consume(E),y)}function g(E){return t.exit("codeFenced"),e(E)}function S(E,C,R){const H=this;return G;function G(Y){return E.enter("lineEnding"),E.consume(Y),E.exit("lineEnding"),U}function U(Y){return H.parser.lazy[H.now().line]?R(Y):C(Y)}}function x(E,C,R){let H=0;return ve(E,G,"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function G(te){return E.enter("codeFencedFence"),E.enter("codeFencedFenceSequence"),U(te)}function U(te){return te===u?(E.consume(te),H++,U):H<l?R(te):(E.exit("codeFencedFenceSequence"),ve(E,Y,"whitespace")(te))}function Y(te){return te===null||Z(te)?(E.exit("codeFencedFence"),C(te)):R(te)}}}const Dp={name:"codeIndented",tokenize:A3},C3={tokenize:R3,partial:!0};function A3(t,e,n){const r=this;return i;function i(u){return t.enter("codeIndented"),ve(t,s,"linePrefix",4+1)(u)}function s(u){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?o(u):n(u)}function o(u){return u===null?l(u):Z(u)?t.attempt(C3,o,l)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||Z(u)?(t.exit("codeFlowValue"),o(u)):(t.consume(u),a)}function l(u){return t.exit("codeIndented"),e(u)}}function R3(t,e,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):Z(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),i):ve(t,s,"linePrefix",4+1)(o)}function s(o){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(o):Z(o)?i(o):n(o)}}const N3={name:"codeText",tokenize:O3,resolve:D3,previous:P3};function D3(t){let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(r=n;++r<e;)if(t[r][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="codeTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t}function P3(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function O3(t,e,n){let r=0,i,s;return o;function o(h){return t.enter("codeText"),t.enter("codeTextSequence"),a(h)}function a(h){return h===96?(t.consume(h),r++,a):(t.exit("codeTextSequence"),l(h))}function l(h){return h===null?n(h):h===96?(s=t.enter("codeTextSequence"),i=0,c(h)):h===32?(t.enter("space"),t.consume(h),t.exit("space"),l):Z(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),l):(t.enter("codeTextData"),u(h))}function u(h){return h===null||h===32||h===96||Z(h)?(t.exit("codeTextData"),l(h)):(t.consume(h),u)}function c(h){return h===96?(t.consume(h),i++,c):i===r?(t.exit("codeTextSequence"),t.exit("codeText"),e(h)):(s.type="codeTextData",u(h))}}function JC(t){const e={};let n=-1,r,i,s,o,a,l,u;for(;++n<t.length;){for(;n in e;)n=e[n];if(r=t[n],n&&r[1].type==="chunkFlow"&&t[n-1][1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,L3(t,n)),n=e[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--&&(o=t[s],o[1].type==="lineEnding"||o[1].type==="lineEndingBlank");)o[0]==="enter"&&(i&&(t[i][1].type="lineEndingBlank"),o[1].type="lineEnding",i=s);i&&(r[1].end=Object.assign({},t[i][1].start),a=t.slice(i,n),a.unshift(r),Ir(t,i,n-i+1,a))}}return!u}function L3(t,e){const n=t[e][1],r=t[e][2];let i=e-1;const s=[],o=n._tokenizer||r.parser[n.contentType](n.start),a=o.events,l=[],u={};let c,h,d=-1,f=n,p=0,v=0;const k=[v];for(;f;){for(;t[++i][1]!==f;);s.push(i),f._tokenizer||(c=r.sliceStream(f),f.next||c.push(null),h&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(c),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),h=f,f=f.next}for(f=n;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(v=d+1,k.push(v),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):k.pop(),d=k.length;d--;){const m=a.slice(k[d],k[d+1]),y=s.pop();l.unshift([y,y+m.length-1]),Ir(t,y,2,m)}for(d=-1;++d<l.length;)u[p+l[d][0]]=p+l[d][1],p+=l[d][1]-l[d][0]-1;return u}const M3={tokenize:U3,resolve:$3},F3={tokenize:B3,partial:!0};function $3(t){return JC(t),t}function U3(t,e){let n;return r;function r(a){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?s(a):Z(a)?t.check(F3,o,s)(a):(t.consume(a),i)}function s(a){return t.exit("chunkContent"),t.exit("content"),e(a)}function o(a){return t.consume(a),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function B3(t,e,n){const r=this;return i;function i(o){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),ve(t,s,"linePrefix")}function s(o){if(o===null||Z(o))return n(o);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(o):t.interrupt(r.parser.constructs.flow,n,e)(o)}}function ZC(t,e,n,r,i,s,o,a,l){const u=l||Number.POSITIVE_INFINITY;let c=0;return h;function h(m){return m===60?(t.enter(r),t.enter(i),t.enter(s),t.consume(m),t.exit(s),d):m===null||m===41||Ig(m)?n(m):(t.enter(r),t.enter(o),t.enter(a),t.enter("chunkString",{contentType:"string"}),v(m))}function d(m){return m===62?(t.enter(s),t.consume(m),t.exit(s),t.exit(i),t.exit(r),e):(t.enter(a),t.enter("chunkString",{contentType:"string"}),f(m))}function f(m){return m===62?(t.exit("chunkString"),t.exit(a),d(m)):m===null||m===60||Z(m)?n(m):(t.consume(m),m===92?p:f)}function p(m){return m===60||m===62||m===92?(t.consume(m),f):f(m)}function v(m){return m===40?++c>u?n(m):(t.consume(m),v):m===41?c--?(t.consume(m),v):(t.exit("chunkString"),t.exit(a),t.exit(o),t.exit(r),e(m)):m===null||Dn(m)?c?n(m):(t.exit("chunkString"),t.exit(a),t.exit(o),t.exit(r),e(m)):Ig(m)?n(m):(t.consume(m),m===92?k:v)}function k(m){return m===40||m===41||m===92?(t.consume(m),v):v(m)}}function eA(t,e,n,r,i,s){const o=this;let a=0,l;return u;function u(f){return t.enter(r),t.enter(i),t.consume(f),t.exit(i),t.enter(s),c}function c(f){return f===null||f===91||f===93&&!l||f===94&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs||a>999?n(f):f===93?(t.exit(s),t.enter(i),t.consume(f),t.exit(i),t.exit(r),e):Z(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c):(t.enter("chunkString",{contentType:"string"}),h(f))}function h(f){return f===null||f===91||f===93||Z(f)||a++>999?(t.exit("chunkString"),c(f)):(t.consume(f),l=l||!He(f),f===92?d:h)}function d(f){return f===91||f===92||f===93?(t.consume(f),a++,h):h(f)}}function tA(t,e,n,r,i,s){let o;return a;function a(d){return t.enter(r),t.enter(i),t.consume(d),t.exit(i),o=d===40?41:d,l}function l(d){return d===o?(t.enter(i),t.consume(d),t.exit(i),t.exit(r),e):(t.enter(s),u(d))}function u(d){return d===o?(t.exit(s),l(o)):d===null?n(d):Z(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),ve(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),c(d))}function c(d){return d===o||d===null||Z(d)?(t.exit("chunkString"),u(d)):(t.consume(d),d===92?h:c)}function h(d){return d===o||d===92?(t.consume(d),c):c(d)}}function bl(t,e){let n;return r;function r(i){return Z(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),n=!0,r):He(i)?ve(t,r,n?"linePrefix":"lineSuffix")(i):e(i)}}function $o(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const V3={name:"definition",tokenize:j3},z3={tokenize:q3,partial:!0};function j3(t,e,n){const r=this;let i;return s;function s(l){return t.enter("definition"),eA.call(r,t,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(l)}function o(l){return i=$o(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),l===58?(t.enter("definitionMarker"),t.consume(l),t.exit("definitionMarker"),bl(t,ZC(t,t.attempt(z3,ve(t,a,"whitespace"),ve(t,a,"whitespace")),n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString"))):n(l)}function a(l){return l===null||Z(l)?(t.exit("definition"),r.parser.defined.includes(i)||r.parser.defined.push(i),e(l)):n(l)}}function q3(t,e,n){return r;function r(o){return Dn(o)?bl(t,i)(o):n(o)}function i(o){return o===34||o===39||o===40?tA(t,ve(t,s,"whitespace"),n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o):n(o)}function s(o){return o===null||Z(o)?e(o):n(o)}}const H3={name:"hardBreakEscape",tokenize:W3};function W3(t,e,n){return r;function r(s){return t.enter("hardBreakEscape"),t.enter("escapeMarker"),t.consume(s),i}function i(s){return Z(s)?(t.exit("escapeMarker"),t.exit("hardBreakEscape"),e(s)):n(s)}}const K3={name:"headingAtx",tokenize:Q3,resolve:G3};function G3(t,e){let n=t.length-2,r=3,i,s;return t[r][1].type==="whitespace"&&(r+=2),n-2>r&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&t[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:t[r][1].start,end:t[n][1].end},s={type:"chunkText",start:t[r][1].start,end:t[n][1].end,contentType:"text"},Ir(t,r,n-r+1,[["enter",i,e],["enter",s,e],["exit",s,e],["exit",i,e]])),t}function Q3(t,e,n){const r=this;let i=0;return s;function s(c){return t.enter("atxHeading"),t.enter("atxHeadingSequence"),o(c)}function o(c){return c===35&&i++<6?(t.consume(c),o):c===null||Dn(c)?(t.exit("atxHeadingSequence"),r.interrupt?e(c):a(c)):n(c)}function a(c){return c===35?(t.enter("atxHeadingSequence"),l(c)):c===null||Z(c)?(t.exit("atxHeading"),e(c)):He(c)?ve(t,a,"whitespace")(c):(t.enter("atxHeadingText"),u(c))}function l(c){return c===35?(t.consume(c),l):(t.exit("atxHeadingSequence"),a(c))}function u(c){return c===null||c===35||Dn(c)?(t.exit("atxHeadingText"),a(c)):(t.consume(c),u)}}const Y3=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],EI=["pre","script","style","textarea"],X3={name:"htmlFlow",tokenize:e4,resolveTo:Z3,concrete:!0},J3={tokenize:t4,partial:!0};function Z3(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function e4(t,e,n){const r=this;let i,s,o,a,l;return u;function u(I){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(I),c}function c(I){return I===33?(t.consume(I),h):I===47?(t.consume(I),p):I===63?(t.consume(I),i=3,r.interrupt?e:Q):ur(I)?(t.consume(I),o=String.fromCharCode(I),s=!0,v):n(I)}function h(I){return I===45?(t.consume(I),i=2,d):I===91?(t.consume(I),i=5,o="CDATA[",a=0,f):ur(I)?(t.consume(I),i=4,r.interrupt?e:Q):n(I)}function d(I){return I===45?(t.consume(I),r.interrupt?e:Q):n(I)}function f(I){return I===o.charCodeAt(a++)?(t.consume(I),a===o.length?r.interrupt?e:U:f):n(I)}function p(I){return ur(I)?(t.consume(I),o=String.fromCharCode(I),v):n(I)}function v(I){return I===null||I===47||I===62||Dn(I)?I!==47&&s&&EI.includes(o.toLowerCase())?(i=1,r.interrupt?e(I):U(I)):Y3.includes(o.toLowerCase())?(i=6,I===47?(t.consume(I),k):r.interrupt?e(I):U(I)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(I):s?y(I):m(I)):I===45||pn(I)?(t.consume(I),o+=String.fromCharCode(I),v):n(I)}function k(I){return I===62?(t.consume(I),r.interrupt?e:U):n(I)}function m(I){return He(I)?(t.consume(I),m):H(I)}function y(I){return I===47?(t.consume(I),H):I===58||I===95||ur(I)?(t.consume(I),g):He(I)?(t.consume(I),y):H(I)}function g(I){return I===45||I===46||I===58||I===95||pn(I)?(t.consume(I),g):S(I)}function S(I){return I===61?(t.consume(I),x):He(I)?(t.consume(I),S):y(I)}function x(I){return I===null||I===60||I===61||I===62||I===96?n(I):I===34||I===39?(t.consume(I),l=I,E):He(I)?(t.consume(I),x):(l=null,C(I))}function E(I){return I===null||Z(I)?n(I):I===l?(t.consume(I),R):(t.consume(I),E)}function C(I){return I===null||I===34||I===39||I===60||I===61||I===62||I===96||Dn(I)?S(I):(t.consume(I),C)}function R(I){return I===47||I===62||He(I)?y(I):n(I)}function H(I){return I===62?(t.consume(I),G):n(I)}function G(I){return He(I)?(t.consume(I),G):I===null||Z(I)?U(I):n(I)}function U(I){return I===45&&i===2?(t.consume(I),Gt):I===60&&i===1?(t.consume(I),Qt):I===62&&i===4?(t.consume(I),K):I===63&&i===3?(t.consume(I),Q):I===93&&i===5?(t.consume(I),M):Z(I)&&(i===6||i===7)?t.check(J3,K,Y)(I):I===null||Z(I)?Y(I):(t.consume(I),U)}function Y(I){return t.exit("htmlFlowData"),te(I)}function te(I){return I===null?w(I):Z(I)?t.attempt({tokenize:Qe,partial:!0},te,w)(I):(t.enter("htmlFlowData"),U(I))}function Qe(I,zn,un){return Zn;function Zn(Ot){return I.enter("lineEnding"),I.consume(Ot),I.exit("lineEnding"),ye}function ye(Ot){return r.parser.lazy[r.now().line]?un(Ot):zn(Ot)}}function Gt(I){return I===45?(t.consume(I),Q):U(I)}function Qt(I){return I===47?(t.consume(I),o="",Pt):U(I)}function Pt(I){return I===62&&EI.includes(o.toLowerCase())?(t.consume(I),K):ur(I)&&o.length<8?(t.consume(I),o+=String.fromCharCode(I),Pt):U(I)}function M(I){return I===93?(t.consume(I),Q):U(I)}function Q(I){return I===62?(t.consume(I),K):I===45&&i===2?(t.consume(I),Q):U(I)}function K(I){return I===null||Z(I)?(t.exit("htmlFlowData"),w(I)):(t.consume(I),K)}function w(I){return t.exit("htmlFlow"),e(I)}}function t4(t,e,n){return r;function r(i){return t.exit("htmlFlowData"),t.enter("lineEndingBlank"),t.consume(i),t.exit("lineEndingBlank"),t.attempt(cf,e,n)}}const n4={name:"htmlText",tokenize:r4};function r4(t,e,n){const r=this;let i,s,o,a;return l;function l(w){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(w),u}function u(w){return w===33?(t.consume(w),c):w===47?(t.consume(w),C):w===63?(t.consume(w),x):ur(w)?(t.consume(w),G):n(w)}function c(w){return w===45?(t.consume(w),h):w===91?(t.consume(w),s="CDATA[",o=0,k):ur(w)?(t.consume(w),S):n(w)}function h(w){return w===45?(t.consume(w),d):n(w)}function d(w){return w===null||w===62?n(w):w===45?(t.consume(w),f):p(w)}function f(w){return w===null||w===62?n(w):p(w)}function p(w){return w===null?n(w):w===45?(t.consume(w),v):Z(w)?(a=p,M(w)):(t.consume(w),p)}function v(w){return w===45?(t.consume(w),K):p(w)}function k(w){return w===s.charCodeAt(o++)?(t.consume(w),o===s.length?m:k):n(w)}function m(w){return w===null?n(w):w===93?(t.consume(w),y):Z(w)?(a=m,M(w)):(t.consume(w),m)}function y(w){return w===93?(t.consume(w),g):m(w)}function g(w){return w===62?K(w):w===93?(t.consume(w),g):m(w)}function S(w){return w===null||w===62?K(w):Z(w)?(a=S,M(w)):(t.consume(w),S)}function x(w){return w===null?n(w):w===63?(t.consume(w),E):Z(w)?(a=x,M(w)):(t.consume(w),x)}function E(w){return w===62?K(w):x(w)}function C(w){return ur(w)?(t.consume(w),R):n(w)}function R(w){return w===45||pn(w)?(t.consume(w),R):H(w)}function H(w){return Z(w)?(a=H,M(w)):He(w)?(t.consume(w),H):K(w)}function G(w){return w===45||pn(w)?(t.consume(w),G):w===47||w===62||Dn(w)?U(w):n(w)}function U(w){return w===47?(t.consume(w),K):w===58||w===95||ur(w)?(t.consume(w),Y):Z(w)?(a=U,M(w)):He(w)?(t.consume(w),U):K(w)}function Y(w){return w===45||w===46||w===58||w===95||pn(w)?(t.consume(w),Y):te(w)}function te(w){return w===61?(t.consume(w),Qe):Z(w)?(a=te,M(w)):He(w)?(t.consume(w),te):U(w)}function Qe(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(t.consume(w),i=w,Gt):Z(w)?(a=Qe,M(w)):He(w)?(t.consume(w),Qe):(t.consume(w),i=void 0,Pt)}function Gt(w){return w===i?(t.consume(w),Qt):w===null?n(w):Z(w)?(a=Gt,M(w)):(t.consume(w),Gt)}function Qt(w){return w===62||w===47||Dn(w)?U(w):n(w)}function Pt(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===62||Dn(w)?U(w):(t.consume(w),Pt)}function M(w){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(w),t.exit("lineEnding"),ve(t,Q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Q(w){return t.enter("htmlTextData"),a(w)}function K(w){return w===62?(t.consume(w),t.exit("htmlTextData"),t.exit("htmlText"),e):n(w)}}const Iw={name:"labelEnd",tokenize:u4,resolveTo:l4,resolveAll:a4},i4={tokenize:c4},s4={tokenize:h4},o4={tokenize:d4};function a4(t){let e=-1,n;for(;++e<t.length;)n=t[e][1],(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(t.splice(e+1,n.type==="labelImage"?4:2),n.type="data",e++);return t}function l4(t,e){let n=t.length,r=0,i,s,o,a;for(;n--;)if(i=t[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;t[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(t[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const l={type:t[s][1].type==="labelLink"?"link":"image",start:Object.assign({},t[s][1].start),end:Object.assign({},t[t.length-1][1].end)},u={type:"label",start:Object.assign({},t[s][1].start),end:Object.assign({},t[o][1].end)},c={type:"labelText",start:Object.assign({},t[s+r+2][1].end),end:Object.assign({},t[o-2][1].start)};return a=[["enter",l,e],["enter",u,e]],a=Tn(a,t.slice(s+1,s+r+3)),a=Tn(a,[["enter",c,e]]),a=Tn(a,ww(e.parser.constructs.insideSpan.null,t.slice(s+r+4,o-3),e)),a=Tn(a,[["exit",c,e],t[o-2],t[o-1],["exit",u,e]]),a=Tn(a,t.slice(o+1)),a=Tn(a,[["exit",l,e]]),Ir(t,s,t.length,a),t}function u4(t,e,n){const r=this;let i=r.events.length,s,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return a;function a(c){return s?s._inactive?u(c):(o=r.parser.defined.includes($o(r.sliceSerialize({start:s.end,end:r.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(c),t.exit("labelMarker"),t.exit("labelEnd"),l):n(c)}function l(c){return c===40?t.attempt(i4,e,o?e:u)(c):c===91?t.attempt(s4,e,o?t.attempt(o4,e,u):u)(c):o?e(c):u(c)}function u(c){return s._balanced=!0,n(c)}}function c4(t,e,n){return r;function r(l){return t.enter("resource"),t.enter("resourceMarker"),t.consume(l),t.exit("resourceMarker"),bl(t,i)}function i(l){return l===41?a(l):ZC(t,s,n,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(l)}function s(l){return Dn(l)?bl(t,o)(l):a(l)}function o(l){return l===34||l===39||l===40?tA(t,bl(t,a),n,"resourceTitle","resourceTitleMarker","resourceTitleString")(l):a(l)}function a(l){return l===41?(t.enter("resourceMarker"),t.consume(l),t.exit("resourceMarker"),t.exit("resource"),e):n(l)}}function h4(t,e,n){const r=this;return i;function i(o){return eA.call(r,t,s,n,"reference","referenceMarker","referenceString")(o)}function s(o){return r.parser.defined.includes($o(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(o):n(o)}}function d4(t,e,n){return r;function r(s){return t.enter("reference"),t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),i}function i(s){return s===93?(t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),t.exit("reference"),e):n(s)}}const f4={name:"labelStartImage",tokenize:p4,resolveAll:Iw.resolveAll};function p4(t,e,n){const r=this;return i;function i(a){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(a),t.exit("labelImageMarker"),s}function s(a){return a===91?(t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelImage"),o):n(a)}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):e(a)}}const m4={name:"labelStartLink",tokenize:g4,resolveAll:Iw.resolveAll};function g4(t,e,n){const r=this;return i;function i(o){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(o),t.exit("labelMarker"),t.exit("labelLink"),s}function s(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):e(o)}}const Pp={name:"lineEnding",tokenize:y4};function y4(t,e){return n;function n(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),ve(t,e,"linePrefix")}}const Zc={name:"thematicBreak",tokenize:v4};function v4(t,e,n){let r=0,i;return s;function s(l){return t.enter("thematicBreak"),i=l,o(l)}function o(l){return l===i?(t.enter("thematicBreakSequence"),a(l)):He(l)?ve(t,o,"whitespace")(l):r<3||l!==null&&!Z(l)?n(l):(t.exit("thematicBreak"),e(l))}function a(l){return l===i?(t.consume(l),r++,a):(t.exit("thematicBreakSequence"),o(l))}}const Yt={name:"list",tokenize:I4,continuation:{tokenize:E4},exit:S4},w4={tokenize:T4,partial:!0},_4={tokenize:k4,partial:!0};function I4(t,e,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return a;function a(f){const p=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(p==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:_g(f)){if(r.containerState.type||(r.containerState.type=p,t.enter(p,{_container:!0})),p==="listUnordered")return t.enter("listItemPrefix"),f===42||f===45?t.check(Zc,n,u)(f):u(f);if(!r.interrupt||f===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),l(f)}return n(f)}function l(f){return _g(f)&&++o<10?(t.consume(f),l):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(t.exit("listItemValue"),u(f)):n(f)}function u(f){return t.enter("listItemMarker"),t.consume(f),t.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,t.check(cf,r.interrupt?n:c,t.attempt(w4,d,h))}function c(f){return r.containerState.initialBlankLine=!0,s++,d(f)}function h(f){return He(f)?(t.enter("listItemPrefixWhitespace"),t.consume(f),t.exit("listItemPrefixWhitespace"),d):n(f)}function d(f){return r.containerState.size=s+r.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(f)}}function E4(t,e,n){const r=this;return r.containerState._closeFlow=void 0,t.check(cf,i,s);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ve(t,e,"listItemIndent",r.containerState.size+1)(a)}function s(a){return r.containerState.furtherBlankLines||!He(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,t.attempt(_4,e,o)(a))}function o(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,ve(t,t.attempt(Yt,e,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function k4(t,e,n){const r=this;return ve(t,i,"listItemIndent",r.containerState.size+1);function i(s){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(s):n(s)}}function S4(t){t.exit(this.containerState.type)}function T4(t,e,n){const r=this;return ve(t,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(s){const o=r.events[r.events.length-1];return!He(s)&&o&&o[1].type==="listItemPrefixWhitespace"?e(s):n(s)}}const kI={name:"setextUnderline",tokenize:b4,resolveTo:x4};function x4(t,e){let n=t.length,r,i,s;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){r=n;break}t[n][1].type==="paragraph"&&(i=n)}else t[n][1].type==="content"&&t.splice(n,1),!s&&t[n][1].type==="definition"&&(s=n);const o={type:"setextHeading",start:Object.assign({},t[i][1].start),end:Object.assign({},t[t.length-1][1].end)};return t[i][1].type="setextHeadingText",s?(t.splice(i,0,["enter",o,e]),t.splice(s+1,0,["exit",t[r][1],e]),t[r][1].end=Object.assign({},t[s][1].end)):t[r][1]=o,t.push(["exit",o,e]),t}function b4(t,e,n){const r=this;let i=r.events.length,s,o;for(;i--;)if(r.events[i][1].type!=="lineEnding"&&r.events[i][1].type!=="linePrefix"&&r.events[i][1].type!=="content"){o=r.events[i][1].type==="paragraph";break}return a;function a(c){return!r.parser.lazy[r.now().line]&&(r.interrupt||o)?(t.enter("setextHeadingLine"),t.enter("setextHeadingLineSequence"),s=c,l(c)):n(c)}function l(c){return c===s?(t.consume(c),l):(t.exit("setextHeadingLineSequence"),ve(t,u,"lineSuffix")(c))}function u(c){return c===null||Z(c)?(t.exit("setextHeadingLine"),e(c)):n(c)}}const C4={tokenize:A4};function A4(t){const e=this,n=t.attempt(cf,r,t.attempt(this.parser.constructs.flowInitial,i,ve(t,t.attempt(this.parser.constructs.flow,i,t.attempt(M3,i)),"linePrefix")));return n;function r(s){if(s===null){t.consume(s);return}return t.enter("lineEndingBlank"),t.consume(s),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function i(s){if(s===null){t.consume(s);return}return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const R4={resolveAll:rA()},N4=nA("string"),D4=nA("text");function nA(t){return{tokenize:e,resolveAll:rA(t==="text"?P4:void 0)};function e(n){const r=this,i=this.parser.constructs[t],s=n.attempt(i,o,a);return o;function o(c){return u(c)?s(c):a(c)}function a(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),l}function l(c){return u(c)?(n.exit("data"),s(c)):(n.consume(c),l)}function u(c){if(c===null)return!0;const h=i[c];let d=-1;if(h)for(;++d<h.length;){const f=h[d];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function rA(t){return e;function e(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return t?t(n,r):n}}function P4(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const r=t[n-1][1],i=e.sliceStream(r);let s=i.length,o=-1,a=0,l;for(;s--;){const u=i[s];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)a++,o--;if(o)break;o=-1}else if(u===-2)l=!0,a++;else if(u!==-1){s++;break}}if(a){const u={type:n===t.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+s,_bufferIndex:s?o:r.start._bufferIndex+o},end:Object.assign({},r.end)};r.end=Object.assign({},u.start),r.start.offset===r.end.offset?Object.assign(r,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}function O4(t,e,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},s=[];let o=[],a=[];const l={consume:y,enter:g,exit:S,attempt:C(x),check:C(E),interrupt:C(E,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:t,sliceStream:f,sliceSerialize:d,now:p,defineSkip:v,write:h};let c=e.tokenize.call(u,l);return e.resolveAll&&s.push(e),u;function h(U){return o=Tn(o,U),k(),o[o.length-1]!==null?[]:(R(e,0),u.events=ww(s,u.events,u),u.events)}function d(U,Y){return M4(f(U),Y)}function f(U){return L4(o,U)}function p(){return Object.assign({},r)}function v(U){i[U.line]=U.column,G()}function k(){let U;for(;r._index<o.length;){const Y=o[r._index];if(typeof Y=="string")for(U=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===U&&r._bufferIndex<Y.length;)m(Y.charCodeAt(r._bufferIndex));else m(Y)}}function m(U){c=c(U)}function y(U){Z(U)?(r.line++,r.column=1,r.offset+=U===-3?2:1,G()):U!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=U}function g(U,Y){const te=Y||{};return te.type=U,te.start=p(),u.events.push(["enter",te,u]),a.push(te),te}function S(U){const Y=a.pop();return Y.end=p(),u.events.push(["exit",Y,u]),Y}function x(U,Y){R(U,Y.from)}function E(U,Y){Y.restore()}function C(U,Y){return te;function te(Qe,Gt,Qt){let Pt,M,Q,K;return Array.isArray(Qe)?I(Qe):"tokenize"in Qe?I([Qe]):w(Qe);function w(ye){return Ot;function Ot(Er){const Xs=Er!==null&&ye[Er],Js=Er!==null&&ye.null,bf=[...Array.isArray(Xs)?Xs:Xs?[Xs]:[],...Array.isArray(Js)?Js:Js?[Js]:[]];return I(bf)(Er)}}function I(ye){return Pt=ye,M=0,ye.length===0?Qt:zn(ye[M])}function zn(ye){return Ot;function Ot(Er){return K=H(),Q=ye,ye.partial||(u.currentConstruct=ye),ye.name&&u.parser.constructs.disable.null.includes(ye.name)?Zn():ye.tokenize.call(Y?Object.assign(Object.create(u),Y):u,l,un,Zn)(Er)}}function un(ye){return U(Q,K),Gt}function Zn(ye){return K.restore(),++M<Pt.length?zn(Pt[M]):Qt}}}function R(U,Y){U.resolveAll&&!s.includes(U)&&s.push(U),U.resolve&&Ir(u.events,Y,u.events.length-Y,U.resolve(u.events.slice(Y),u)),U.resolveTo&&(u.events=U.resolveTo(u.events,u))}function H(){const U=p(),Y=u.previous,te=u.currentConstruct,Qe=u.events.length,Gt=Array.from(a);return{restore:Qt,from:Qe};function Qt(){r=U,u.previous=Y,u.currentConstruct=te,u.events.length=Qe,a=Gt,G()}}function G(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function L4(t,e){const n=e.start._index,r=e.start._bufferIndex,i=e.end._index,s=e.end._bufferIndex;let o;return n===i?o=[t[n].slice(r,s)]:(o=t.slice(n,i),r>-1&&(o[0]=o[0].slice(r)),s>0&&o.push(t[i].slice(0,s))),o}function M4(t,e){let n=-1;const r=[];let i;for(;++n<t.length;){const s=t[n];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(s)}i=s===-2,r.push(o)}return r.join("")}const F4={[42]:Yt,[43]:Yt,[45]:Yt,[48]:Yt,[49]:Yt,[50]:Yt,[51]:Yt,[52]:Yt,[53]:Yt,[54]:Yt,[55]:Yt,[56]:Yt,[57]:Yt,[62]:QC},$4={[91]:V3},U4={[-2]:Dp,[-1]:Dp,[32]:Dp},B4={[35]:K3,[42]:Zc,[45]:[kI,Zc],[60]:X3,[61]:kI,[95]:Zc,[96]:II,[126]:II},V4={[38]:XC,[92]:YC},z4={[-5]:Pp,[-4]:Pp,[-3]:Pp,[33]:f4,[38]:XC,[42]:Eg,[60]:[w3,n4],[91]:m4,[92]:[H3,YC],[93]:Iw,[95]:Eg,[96]:N3},j4={null:[Eg,R4]},q4={null:[42,95]},H4={null:[]};var W4=Object.freeze(Object.defineProperty({__proto__:null,document:F4,contentInitial:$4,flowInitial:U4,flow:B4,string:V4,text:z4,insideSpan:j4,attentionMarkers:q4,disable:H4},Symbol.toStringTag,{value:"Module"}));function K4(t={}){const e=i3([W4].concat(t.extensions||[])),n={defined:[],lazy:{},constructs:e,content:r(d3),document:r(p3),flow:r(C4),string:r(N4),text:r(D4)};return n;function r(i){return s;function s(o){return O4(n,i,o)}}}const SI=/[\0\t\n\r]/g;function G4(){let t=1,e="",n=!0,r;return i;function i(s,o,a){const l=[];let u,c,h,d,f;for(s=e+s.toString(o),h=0,e="",n&&(s.charCodeAt(0)===65279&&h++,n=void 0);h<s.length;){if(SI.lastIndex=h,u=SI.exec(s),d=u&&u.index!==void 0?u.index:s.length,f=s.charCodeAt(d),!u){e=s.slice(h);break}if(f===10&&h===d&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),h<d&&(l.push(s.slice(h,d)),t+=d-h),f){case 0:{l.push(65533),t++;break}case 9:{for(c=Math.ceil(t/4)*4,l.push(-2);t++<c;)l.push(-1);break}case 10:{l.push(-4),t=1;break}default:r=!0,t=1}h=d+1}return a&&(r&&l.push(-5),e&&l.push(e),l.push(null)),l}}function Q4(t){for(;!JC(t););return t}function iA(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCharCode(n)}const Y4=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function X4(t){return t.replace(Y4,J4)}function J4(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return iA(n.slice(s?2:1),s?16:10)}return _w(n)||t}const kg={}.hasOwnProperty,Z4=function(t,e,n){return typeof e!="string"&&(n=e,e=void 0),eq(n)(Q4(K4(n).document().write(G4()(t,e,!0))))};function eq(t={}){const e=sA({transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(Dw),autolinkProtocol:Y,autolinkEmail:Y,atxHeading:l(Aw),blockQuote:l(OA),characterEscape:Y,characterReference:Y,codeFenced:l(Cw),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:l(Cw,u),codeText:l(LA,u),codeTextData:Y,data:Y,codeFlowValue:Y,definition:l(MA),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:l(FA),hardBreakEscape:l(Rw),hardBreakTrailing:l(Rw),htmlFlow:l(Nw,u),htmlFlowData:Y,htmlText:l(Nw,u),htmlTextData:Y,image:l($A),label:u,link:l(Dw),listItem:l(UA),listItemValue:v,listOrdered:l(Pw,p),listUnordered:l(Pw),paragraph:l(BA),reference:ye,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:l(Aw),strong:l(VA),thematicBreak:l(jA)},exit:{atxHeading:h(),atxHeadingSequence:R,autolink:h(),autolinkEmail:bf,autolinkProtocol:Js,blockQuote:h(),characterEscapeValue:te,characterReferenceMarkerHexadecimal:Er,characterReferenceMarkerNumeric:Er,characterReferenceValue:Xs,codeFenced:h(g),codeFencedFence:y,codeFencedFenceInfo:k,codeFencedFenceMeta:m,codeFlowValue:te,codeIndented:h(S),codeText:h(M),codeTextData:te,data:te,definition:h(),definitionDestinationString:C,definitionLabelString:x,definitionTitleString:E,emphasis:h(),hardBreakEscape:h(Gt),hardBreakTrailing:h(Gt),htmlFlow:h(Qt),htmlFlowData:te,htmlText:h(Pt),htmlTextData:te,image:h(K),label:I,labelText:w,lineEnding:Qe,link:h(Q),listItem:h(),listOrdered:h(),listUnordered:h(),paragraph:h(),referenceString:Ot,resourceDestinationString:zn,resourceTitleString:un,resource:Zn,setextHeading:h(U),setextHeadingLineSequence:G,setextHeadingText:H,strong:h(),thematicBreak:h()}},t.mdastExtensions||[]),n={};return r;function r(A){let $={type:"root",children:[]};const re=[$],me=[],En=[],xa={stack:re,tokenStack:me,config:e,enter:c,exit:d,buffer:u,resume:f,setData:s,getData:o};let Ie=-1;for(;++Ie<A.length;)if(A[Ie][1].type==="listOrdered"||A[Ie][1].type==="listUnordered")if(A[Ie][0]==="enter")En.push(Ie);else{const ft=En.pop();Ie=i(A,ft,Ie)}for(Ie=-1;++Ie<A.length;){const ft=e[A[Ie][0]];kg.call(ft,A[Ie][1].type)&&ft[A[Ie][1].type].call(Object.assign({sliceSerialize:A[Ie][2].sliceSerialize},xa),A[Ie][1])}if(me.length>0){const ft=me[me.length-1];(ft[1]||TI).call(xa,void 0,ft[0])}for($.position={start:a(A.length>0?A[0][1].start:{line:1,column:1,offset:0}),end:a(A.length>0?A[A.length-2][1].end:{line:1,column:1,offset:0})},Ie=-1;++Ie<e.transforms.length;)$=e.transforms[Ie]($)||$;return $}function i(A,$,re){let me=$-1,En=-1,xa=!1,Ie,ft,Zs,ba;for(;++me<=re;){const Be=A[me];if(Be[1].type==="listUnordered"||Be[1].type==="listOrdered"||Be[1].type==="blockQuote"?(Be[0]==="enter"?En++:En--,ba=void 0):Be[1].type==="lineEndingBlank"?Be[0]==="enter"&&(Ie&&!ba&&!En&&!Zs&&(Zs=me),ba=void 0):Be[1].type==="linePrefix"||Be[1].type==="listItemValue"||Be[1].type==="listItemMarker"||Be[1].type==="listItemPrefix"||Be[1].type==="listItemPrefixWhitespace"||(ba=void 0),!En&&Be[0]==="enter"&&Be[1].type==="listItemPrefix"||En===-1&&Be[0]==="exit"&&(Be[1].type==="listUnordered"||Be[1].type==="listOrdered")){if(Ie){let Cf=me;for(ft=void 0;Cf--;){const kr=A[Cf];if(kr[1].type==="lineEnding"||kr[1].type==="lineEndingBlank"){if(kr[0]==="exit")continue;ft&&(A[ft][1].type="lineEndingBlank",xa=!0),kr[1].type="lineEnding",ft=Cf}else if(!(kr[1].type==="linePrefix"||kr[1].type==="blockQuotePrefix"||kr[1].type==="blockQuotePrefixWhitespace"||kr[1].type==="blockQuoteMarker"||kr[1].type==="listItemIndent"))break}Zs&&(!ft||Zs<ft)&&(Ie._spread=!0),Ie.end=Object.assign({},ft?A[ft][1].start:Be[1].end),A.splice(ft||me,0,["exit",Ie,Be[2]]),me++,re++}Be[1].type==="listItemPrefix"&&(Ie={type:"listItem",_spread:!1,start:Object.assign({},Be[1].start)},A.splice(me,0,["enter",Ie,Be[2]]),me++,re++,Zs=void 0,ba=!0)}}return A[$][1]._spread=xa,re}function s(A,$){n[A]=$}function o(A){return n[A]}function a(A){return{line:A.line,column:A.column,offset:A.offset}}function l(A,$){return re;function re(me){c.call(this,A(me),me),$&&$.call(this,me)}}function u(){this.stack.push({type:"fragment",children:[]})}function c(A,$,re){return this.stack[this.stack.length-1].children.push(A),this.stack.push(A),this.tokenStack.push([$,re]),A.position={start:a($.start)},A}function h(A){return $;function $(re){A&&A.call(this,re),d.call(this,re)}}function d(A,$){const re=this.stack.pop(),me=this.tokenStack.pop();if(me)me[0].type!==A.type&&($?$.call(this,A,me[0]):(me[1]||TI).call(this,A,me[0]));else throw new Error("Cannot close `"+A.type+"` ("+xl({start:A.start,end:A.end})+"): it\u2019s not open");return re.position.end=a(A.end),re}function f(){return r3(this.stack.pop())}function p(){s("expectingFirstListItemValue",!0)}function v(A){if(o("expectingFirstListItemValue")){const $=this.stack[this.stack.length-2];$.start=Number.parseInt(this.sliceSerialize(A),10),s("expectingFirstListItemValue")}}function k(){const A=this.resume(),$=this.stack[this.stack.length-1];$.lang=A}function m(){const A=this.resume(),$=this.stack[this.stack.length-1];$.meta=A}function y(){o("flowCodeInside")||(this.buffer(),s("flowCodeInside",!0))}function g(){const A=this.resume(),$=this.stack[this.stack.length-1];$.value=A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),s("flowCodeInside")}function S(){const A=this.resume(),$=this.stack[this.stack.length-1];$.value=A.replace(/(\r?\n|\r)$/g,"")}function x(A){const $=this.resume(),re=this.stack[this.stack.length-1];re.label=$,re.identifier=$o(this.sliceSerialize(A)).toLowerCase()}function E(){const A=this.resume(),$=this.stack[this.stack.length-1];$.title=A}function C(){const A=this.resume(),$=this.stack[this.stack.length-1];$.url=A}function R(A){const $=this.stack[this.stack.length-1];if(!$.depth){const re=this.sliceSerialize(A).length;$.depth=re}}function H(){s("setextHeadingSlurpLineEnding",!0)}function G(A){const $=this.stack[this.stack.length-1];$.depth=this.sliceSerialize(A).charCodeAt(0)===61?1:2}function U(){s("setextHeadingSlurpLineEnding")}function Y(A){const $=this.stack[this.stack.length-1];let re=$.children[$.children.length-1];(!re||re.type!=="text")&&(re=zA(),re.position={start:a(A.start)},$.children.push(re)),this.stack.push(re)}function te(A){const $=this.stack.pop();$.value+=this.sliceSerialize(A),$.position.end=a(A.end)}function Qe(A){const $=this.stack[this.stack.length-1];if(o("atHardBreak")){const re=$.children[$.children.length-1];re.position.end=a(A.end),s("atHardBreak");return}!o("setextHeadingSlurpLineEnding")&&e.canContainEols.includes($.type)&&(Y.call(this,A),te.call(this,A))}function Gt(){s("atHardBreak",!0)}function Qt(){const A=this.resume(),$=this.stack[this.stack.length-1];$.value=A}function Pt(){const A=this.resume(),$=this.stack[this.stack.length-1];$.value=A}function M(){const A=this.resume(),$=this.stack[this.stack.length-1];$.value=A}function Q(){const A=this.stack[this.stack.length-1];o("inReference")?(A.type+="Reference",A.referenceType=o("referenceType")||"shortcut",delete A.url,delete A.title):(delete A.identifier,delete A.label),s("referenceType")}function K(){const A=this.stack[this.stack.length-1];o("inReference")?(A.type+="Reference",A.referenceType=o("referenceType")||"shortcut",delete A.url,delete A.title):(delete A.identifier,delete A.label),s("referenceType")}function w(A){const $=this.stack[this.stack.length-2],re=this.sliceSerialize(A);$.label=X4(re),$.identifier=$o(re).toLowerCase()}function I(){const A=this.stack[this.stack.length-1],$=this.resume(),re=this.stack[this.stack.length-1];s("inReference",!0),re.type==="link"?re.children=A.children:re.alt=$}function zn(){const A=this.resume(),$=this.stack[this.stack.length-1];$.url=A}function un(){const A=this.resume(),$=this.stack[this.stack.length-1];$.title=A}function Zn(){s("inReference")}function ye(){s("referenceType","collapsed")}function Ot(A){const $=this.resume(),re=this.stack[this.stack.length-1];re.label=$,re.identifier=$o(this.sliceSerialize(A)).toLowerCase(),s("referenceType","full")}function Er(A){s("characterReferenceType",A.type)}function Xs(A){const $=this.sliceSerialize(A),re=o("characterReferenceType");let me;re?(me=iA($,re==="characterReferenceMarkerNumeric"?10:16),s("characterReferenceType")):me=_w($);const En=this.stack.pop();En.value+=me,En.position.end=a(A.end)}function Js(A){te.call(this,A);const $=this.stack[this.stack.length-1];$.url=this.sliceSerialize(A)}function bf(A){te.call(this,A);const $=this.stack[this.stack.length-1];$.url="mailto:"+this.sliceSerialize(A)}function OA(){return{type:"blockquote",children:[]}}function Cw(){return{type:"code",lang:null,meta:null,value:""}}function LA(){return{type:"inlineCode",value:""}}function MA(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function FA(){return{type:"emphasis",children:[]}}function Aw(){return{type:"heading",depth:void 0,children:[]}}function Rw(){return{type:"break"}}function Nw(){return{type:"html",value:""}}function $A(){return{type:"image",title:null,url:"",alt:null}}function Dw(){return{type:"link",title:null,url:"",children:[]}}function Pw(A){return{type:"list",ordered:A.type==="listOrdered",start:null,spread:A._spread,children:[]}}function UA(A){return{type:"listItem",spread:A._spread,checked:null,children:[]}}function BA(){return{type:"paragraph",children:[]}}function VA(){return{type:"strong",children:[]}}function zA(){return{type:"text",value:""}}function jA(){return{type:"thematicBreak"}}}function sA(t,e){let n=-1;for(;++n<e.length;){const r=e[n];Array.isArray(r)?sA(t,r):tq(t,r)}return t}function tq(t,e){let n;for(n in e)if(kg.call(e,n)){const r=n==="canContainEols"||n==="transforms",s=(kg.call(t,n)?t[n]:void 0)||(t[n]=r?[]:{}),o=e[n];o&&(r?t[n]=[...s,...o]:Object.assign(s,o))}}function TI(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+xl({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+xl({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+xl({start:e.start,end:e.end})+") is still open")}function nq(t){Object.assign(this,{Parser:n=>{const r=this.data("settings");return Z4(n,Object.assign({},r,t,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))}})}var et=function(t,e,n){var r={type:String(t)};return n==null&&(typeof e=="string"||Array.isArray(e))?n=e:Object.assign(r,e),Array.isArray(n)?r.children=n:n!=null&&(r.value=String(n)),r};const eh={}.hasOwnProperty;function rq(t,e){const n=e.data||{};return"value"in e&&!(eh.call(n,"hName")||eh.call(n,"hProperties")||eh.call(n,"hChildren"))?t.augment(e,et("text",e.value)):t(e,"div",Dt(t,e))}function oA(t,e,n){const r=e&&e.type;let i;if(!r)throw new Error("Expected node, got `"+e+"`");return eh.call(t.handlers,r)?i=t.handlers[r]:t.passThrough&&t.passThrough.includes(r)?i=iq:i=t.unknownHandler,(typeof i=="function"?i:rq)(t,e,n)}function iq(t,e){return"children"in e?Xu(Zr({},e),{children:Dt(t,e)}):e}function Dt(t,e){const n=[];if("children"in e){const r=e.children;let i=-1;for(;++i<r.length;){const s=oA(t,r[i],e);if(s){if(i&&r[i-1].type==="break"&&(!Array.isArray(s)&&s.type==="text"&&(s.value=s.value.replace(/^\s+/,"")),!Array.isArray(s)&&s.type==="element")){const o=s.children[0];o&&o.type==="text"&&(o.value=o.value.replace(/^\s+/,""))}Array.isArray(s)?n.push(...s):n.push(s)}}}return n}const Ew=function(t){if(t==null)return lq;if(typeof t=="string")return aq(t);if(typeof t=="object")return Array.isArray(t)?sq(t):oq(t);if(typeof t=="function")return hf(t);throw new Error("Expected function, string, or object as test")};function sq(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=Ew(t[n]);return hf(r);function r(...i){let s=-1;for(;++s<e.length;)if(e[s].call(this,...i))return!0;return!1}}function oq(t){return hf(e);function e(n){let r;for(r in t)if(n[r]!==t[r])return!1;return!0}}function aq(t){return hf(e);function e(n){return n&&n.type===t}}function hf(t){return e;function e(...n){return Boolean(t.call(this,...n))}}function lq(){return!0}const uq=!0,cq="skip",xI=!1,hq=function(t,e,n,r){typeof e=="function"&&typeof n!="function"&&(r=n,n=e,e=null);const i=Ew(e),s=r?-1:1;o(t,null,[])();function o(a,l,u){const c=typeof a=="object"&&a!==null?a:{};let h;return typeof c.type=="string"&&(h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0,Object.defineProperty(d,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})),d;function d(){let f=[],p,v,k;if((!e||i(a,l,u[u.length-1]||null))&&(f=dq(n(a,u)),f[0]===xI))return f;if(a.children&&f[0]!==cq)for(v=(r?a.children.length:-1)+s,k=u.concat(a);v>-1&&v<a.children.length;){if(p=o(a.children[v],v,k)(),p[0]===xI)return p;v=typeof p[1]=="number"?p[1]:v+s}return f}}};function dq(t){return Array.isArray(t)?t:typeof t=="number"?[uq,t]:[t]}const aA=function(t,e,n,r){typeof e=="function"&&typeof n!="function"&&(r=n,n=e,e=null),hq(t,e,i,r);function i(s,o){const a=o[o.length-1];return n(s,a?a.children.indexOf(s):null,a)}},lA=cA("start"),uA=cA("end");function cA(t){return e;function e(n){const r=n&&n.position&&n.position[t]||{};return{line:r.line||null,column:r.column||null,offset:r.offset>-1?r.offset:null}}}function fq(t){return!t||!t.position||!t.position.start||!t.position.start.line||!t.position.start.column||!t.position.end||!t.position.end.line||!t.position.end.column}const pq=!0,mq="skip",bI=!1,gq=function(t,e,n,r){typeof e=="function"&&typeof n!="function"&&(r=n,n=e,e=null);var i=Ew(e),s=r?-1:1;o(t,null,[])();function o(a,l,u){var c=typeof a=="object"&&a!==null?a:{},h;return typeof c.type=="string"&&(h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0,Object.defineProperty(d,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})),d;function d(){var f=[],p,v,k;if((!e||i(a,l,u[u.length-1]||null))&&(f=yq(n(a,u)),f[0]===bI))return f;if(a.children&&f[0]!==mq)for(v=(r?a.children.length:-1)+s,k=u.concat(a);v>-1&&v<a.children.length;){if(p=o(a.children[v],v,k)(),p[0]===bI)return p;v=typeof p[1]=="number"?p[1]:v+s}return f}}};function yq(t){return Array.isArray(t)?t:typeof t=="number"?[pq,t]:[t]}const vq=function(t,e,n,r){typeof e=="function"&&typeof n!="function"&&(r=n,n=e,e=null),gq(t,e,i,r);function i(s,o){var a=o[o.length-1];return n(s,a?a.children.indexOf(s):null,a)}},CI={}.hasOwnProperty;function wq(t){const e=Object.create(null);if(!t||!t.type)throw new Error("mdast-util-definitions expected node");return vq(t,"definition",n),r;function n(i){const s=AI(i.identifier);s&&!CI.call(e,s)&&(e[s]=i)}function r(i){const s=AI(i);return s&&CI.call(e,s)?e[s]:null}}function AI(t){return String(t||"").toUpperCase()}const _q={'"':"quot","&":"amp","<":"lt",">":"gt"};function Iq(t){return t.replace(/["&<>]/g,e);function e(n){return"&"+_q[n]+";"}}function hA(t,e){const n=Iq(Eq(t||""));if(!e)return n;const r=n.indexOf(":"),i=n.indexOf("?"),s=n.indexOf("#"),o=n.indexOf("/");return r<0||o>-1&&r>o||i>-1&&r>i||s>-1&&r>s||e.test(n.slice(0,r))?n:""}function Eq(t){const e=[];let n=-1,r=0,i=0;for(;++n<t.length;){const s=t.charCodeAt(n);let o="";if(s===37&&pn(t.charCodeAt(n+1))&&pn(t.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const a=t.charCodeAt(n+1);s<56320&&a>56319&&a<57344?(o=String.fromCharCode(s,a),i=1):o="\uFFFD"}else o=String.fromCharCode(s);o&&(e.push(t.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return e.join("")+t.slice(r)}function Pr(t,e){const n=[];let r=-1;for(e&&n.push(et("text",`
`));++r<t.length;)r&&n.push(et("text",`
`)),n.push(t[r]);return e&&t.length>0&&n.push(et("text",`
`)),n}function kq(t){let e=-1;const n=[];for(;++e<t.footnoteOrder.length;){const r=t.footnoteById[t.footnoteOrder[e].toUpperCase()];if(!r)continue;const i=Dt(t,r),s=String(r.identifier),o=hA(s.toLowerCase());let a=0;const l=[];for(;++a<=t.footnoteCounts[s];){const h={type:"element",tagName:"a",properties:{href:"#"+t.clobberPrefix+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:t.footnoteBackLabel},children:[{type:"text",value:"\u21A9"}]};a>1&&h.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(a)}]}),l.length>0&&l.push({type:"text",value:" "}),l.push(h)}const u=i[i.length-1];if(u&&u.type==="element"&&u.tagName==="p"){const h=u.children[u.children.length-1];h&&h.type==="text"?h.value+=" ":u.children.push({type:"text",value:" "}),u.children.push(...l)}else i.push(...l);const c={type:"element",tagName:"li",properties:{id:t.clobberPrefix+"fn-"+o},children:Pr(i,!0)};r.position&&(c.position=r.position),n.push(c)}return n.length===0?null:{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:"h2",properties:{id:"footnote-label",className:["sr-only"]},children:[et("text",t.footnoteLabel)]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:Pr(n,!0)},{type:"text",value:`
`}]}}function Sq(t,e){return t(e,"blockquote",Pr(Dt(t,e),!0))}function Tq(t,e){return[t(e,"br"),et("text",`
`)]}function xq(t,e){const n=e.value?e.value+`
`:"",r=e.lang&&e.lang.match(/^[^ \t]+(?=[ \t]|$)/),i={};r&&(i.className=["language-"+r]);const s=t(e,"code",i,[et("text",n)]);return e.meta&&(s.data={meta:e.meta}),t(e.position,"pre",[s])}function bq(t,e){return t(e,"del",Dt(t,e))}function Cq(t,e){return t(e,"em",Dt(t,e))}function dA(t,e){const n=String(e.identifier),r=hA(n.toLowerCase()),i=t.footnoteOrder.indexOf(n);let s;i===-1?(t.footnoteOrder.push(n),t.footnoteCounts[n]=1,s=t.footnoteOrder.length):(t.footnoteCounts[n]++,s=i+1);const o=t.footnoteCounts[n];return t(e,"sup",[t(e.position,"a",{href:"#"+t.clobberPrefix+"fn-"+r,id:t.clobberPrefix+"fnref-"+r+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:"footnote-label"},[et("text",String(s))])])}function Aq(t,e){const n=t.footnoteById;let r=1;for(;r in n;)r++;const i=String(r);return n[i]={type:"footnoteDefinition",identifier:i,children:[{type:"paragraph",children:e.children}],position:e.position},dA(t,{type:"footnoteReference",identifier:i,position:e.position})}function Rq(t,e){return t(e,"h"+e.depth,Dt(t,e))}function Nq(t,e){return t.dangerous?t.augment(e,et("raw",e.value)):null}var RI={};function Dq(t){var e,n,r=RI[t];if(r)return r;for(r=RI[t]=[],e=0;e<128;e++)n=String.fromCharCode(e),/^[0-9a-z]$/i.test(n)?r.push(n):r.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<t.length;e++)r[t.charCodeAt(e)]=t[e];return r}function df(t,e,n){var r,i,s,o,a,l="";for(typeof e!="string"&&(n=e,e=df.defaultChars),typeof n=="undefined"&&(n=!0),a=Dq(e),r=0,i=t.length;r<i;r++){if(s=t.charCodeAt(r),n&&s===37&&r+2<i&&/^[0-9a-f]{2}$/i.test(t.slice(r+1,r+3))){l+=t.slice(r,r+3),r+=2;continue}if(s<128){l+=a[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&r+1<i&&(o=t.charCodeAt(r+1),o>=56320&&o<=57343)){l+=encodeURIComponent(t[r]+t[r+1]),r++;continue}l+="%EF%BF%BD";continue}l+=encodeURIComponent(t[r])}return l}df.defaultChars=";/?:@&=+$,-_.!~*'()#";df.componentChars="-_.!~*'()";var ff=df;function fA(t,e){const n=e.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return et("text","!["+e.alt+r);const i=Dt(t,e),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift(et("text","["));const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push(et("text",r)),i}function Pq(t,e){const n=t.definition(e.identifier);if(!n)return fA(t,e);const r={src:ff(n.url||""),alt:e.alt};return n.title!==null&&n.title!==void 0&&(r.title=n.title),t(e,"img",r)}function Oq(t,e){const n={src:ff(e.url),alt:e.alt};return e.title!==null&&e.title!==void 0&&(n.title=e.title),t(e,"img",n)}function Lq(t,e){return t(e,"code",[et("text",e.value.replace(/\r?\n|\r/g," "))])}function Mq(t,e){const n=t.definition(e.identifier);if(!n)return fA(t,e);const r={href:ff(n.url||"")};return n.title!==null&&n.title!==void 0&&(r.title=n.title),t(e,"a",r,Dt(t,e))}function Fq(t,e){const n={href:ff(e.url)};return e.title!==null&&e.title!==void 0&&(n.title=e.title),t(e,"a",n,Dt(t,e))}function $q(t,e,n){const r=Dt(t,e),i=n?Uq(n):pA(e),s={},o=[];if(typeof e.checked=="boolean"){let u;r[0]&&r[0].type==="element"&&r[0].tagName==="p"?u=r[0]:(u=t(null,"p",[]),r.unshift(u)),u.children.length>0&&u.children.unshift(et("text"," ")),u.children.unshift(t(null,"input",{type:"checkbox",checked:e.checked,disabled:!0})),s.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const u=r[a];(i||a!==0||u.type!=="element"||u.tagName!=="p")&&o.push(et("text",`
`)),u.type==="element"&&u.tagName==="p"&&!i?o.push(...u.children):o.push(u)}const l=r[r.length-1];return l&&(i||!("tagName"in l)||l.tagName!=="p")&&o.push(et("text",`
`)),t(e,"li",s,o)}function Uq(t){let e=t.spread;const n=t.children;let r=-1;for(;!e&&++r<n.length;)e=pA(n[r]);return Boolean(e)}function pA(t){const e=t.spread;return e==null?t.children.length>1:e}function Bq(t,e){const n={},r=e.ordered?"ol":"ul",i=Dt(t,e);let s=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++s<i.length;){const o=i[s];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}return t(e,r,n,Pr(i,!0))}function Vq(t,e){return t(e,"p",Dt(t,e))}function zq(t,e){return t.augment(e,et("root",Pr(Dt(t,e))))}function jq(t,e){return t(e,"strong",Dt(t,e))}function qq(t,e){const n=e.children;let r=-1;const i=e.align||[],s=[];for(;++r<n.length;){const o=n[r].children,a=r===0?"th":"td",l=[];let u=-1;const c=e.align?i.length:o.length;for(;++u<c;){const h=o[u];l.push(t(h,a,{align:i[u]},h?Dt(t,h):[]))}s[r]=t(n[r],"tr",Pr(l,!0))}return t(e,"table",Pr([t(s[0].position,"thead",Pr([s[0]],!0))].concat(s[1]?t({start:lA(s[1]),end:uA(s[s.length-1])},"tbody",Pr(s.slice(1),!0)):[]),!0))}function Hq(t,e){return t.augment(e,et("text",String(e.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g,"$1")))}function Wq(t,e){return t(e,"hr")}const Kq={blockquote:Sq,break:Tq,code:xq,delete:bq,emphasis:Cq,footnoteReference:dA,footnote:Aq,heading:Rq,html:Nq,imageReference:Pq,image:Oq,inlineCode:Lq,linkReference:Mq,link:Fq,listItem:$q,list:Bq,paragraph:Vq,root:zq,strong:jq,table:qq,text:Hq,thematicBreak:Wq,toml:Ac,yaml:Ac,definition:Ac,footnoteDefinition:Ac};function Ac(){return null}const Gq={}.hasOwnProperty;function Qq(t,e){const n=e||{},r=n.allowDangerousHtml||!1,i={};return o.dangerous=r,o.clobberPrefix=n.clobberPrefix===void 0||n.clobberPrefix===null?"user-content-":n.clobberPrefix,o.footnoteLabel=n.footnoteLabel||"Footnotes",o.footnoteBackLabel=n.footnoteBackLabel||"Back to content",o.definition=wq(t),o.footnoteById=i,o.footnoteOrder=[],o.footnoteCounts={},o.augment=s,o.handlers=Zr(Zr({},Kq),n.handlers),o.unknownHandler=n.unknownHandler,o.passThrough=n.passThrough,aA(t,"footnoteDefinition",a=>{const l=String(a.identifier).toUpperCase();Gq.call(i,l)||(i[l]=a)}),o;function s(a,l){if(a&&"data"in a&&a.data){const u=a.data;u.hName&&(l.type!=="element"&&(l={type:"element",tagName:"",properties:{},children:[]}),l.tagName=u.hName),l.type==="element"&&u.hProperties&&(l.properties=Zr(Zr({},l.properties),u.hProperties)),"children"in l&&l.children&&u.hChildren&&(l.children=u.hChildren)}if(a){const u="type"in a?a:{position:a};fq(u)||(l.position={start:lA(u),end:uA(u)})}return l}function o(a,l,u,c){return Array.isArray(u)&&(c=u,u={}),s(a,{type:"element",tagName:l,properties:u||{},children:c||[]})}}function mA(t,e){const n=Qq(t,e),r=oA(n,t,null),i=kq(n);return i&&r.children.push(et("text",`
`),i),Array.isArray(r)?{type:"root",children:r}:r}const Yq=function(t,e){return t&&"run"in t?Jq(t,e):Zq(t||e)};var Xq=Yq;function Jq(t,e){return(n,r,i)=>{t.run(mA(n,e),r,s=>{i(s)})}}function Zq(t){return e=>mA(e,t)}var gA={exports:{}},e6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",t6=e6,n6=t6;function yA(){}function vA(){}vA.resetWarningCache=yA;var r6=function(){function t(r,i,s,o,a,l){if(l!==n6){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:vA,resetWarningCache:yA};return n.PropTypes=n,n};gA.exports=r6();var ne=gA.exports;class Yu{constructor(e,n,r){this.property=e,this.normal=n,r&&(this.space=r)}}Yu.prototype.property={};Yu.prototype.normal={};Yu.prototype.space=null;function wA(t,e){const n={},r={};let i=-1;for(;++i<t.length;)Object.assign(n,t[i].property),Object.assign(r,t[i].normal);return new Yu(n,r,e)}function Sg(t){return t.toLowerCase()}class Bn{constructor(e,n){this.property=e,this.attribute=n}}Bn.prototype.space=null;Bn.prototype.boolean=!1;Bn.prototype.booleanish=!1;Bn.prototype.overloadedBoolean=!1;Bn.prototype.number=!1;Bn.prototype.commaSeparated=!1;Bn.prototype.spaceSeparated=!1;Bn.prototype.commaOrSpaceSeparated=!1;Bn.prototype.mustUseProperty=!1;Bn.prototype.defined=!1;let i6=0;const oe=Ys(),qe=Ys(),_A=Ys(),O=Ys(),ke=Ys(),Uo=Ys(),cn=Ys();function Ys(){return 2**++i6}var Tg=Object.freeze(Object.defineProperty({__proto__:null,boolean:oe,booleanish:qe,overloadedBoolean:_A,number:O,spaceSeparated:ke,commaSeparated:Uo,commaOrSpaceSeparated:cn},Symbol.toStringTag,{value:"Module"}));const Op=Object.keys(Tg);class kw extends Bn{constructor(e,n,r,i){let s=-1;if(super(e,n),NI(this,"space",i),typeof r=="number")for(;++s<Op.length;){const o=Op[s];NI(this,Op[s],(r&Tg[o])===Tg[o])}}}kw.prototype.defined=!0;function NI(t,e,n){n&&(t[e]=n)}const s6={}.hasOwnProperty;function Ta(t){const e={},n={};let r;for(r in t.properties)if(s6.call(t.properties,r)){const i=t.properties[r],s=new kw(r,t.transform(t.attributes||{},r),i,t.space);t.mustUseProperty&&t.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),e[r]=s,n[Sg(r)]=r,n[Sg(s.attribute)]=r}return new Yu(e,n,t.space)}const IA=Ta({space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),EA=Ta({space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function kA(t,e){return e in t?t[e]:e}function SA(t,e){return kA(t,e.toLowerCase())}const TA=Ta({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:SA,properties:{xmlns:null,xmlnsXLink:null}}),xA=Ta({transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:qe,ariaAutoComplete:null,ariaBusy:qe,ariaChecked:qe,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:ke,ariaCurrent:null,ariaDescribedBy:ke,ariaDetails:null,ariaDisabled:qe,ariaDropEffect:ke,ariaErrorMessage:null,ariaExpanded:qe,ariaFlowTo:ke,ariaGrabbed:qe,ariaHasPopup:null,ariaHidden:qe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ke,ariaLevel:O,ariaLive:null,ariaModal:qe,ariaMultiLine:qe,ariaMultiSelectable:qe,ariaOrientation:null,ariaOwns:ke,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:qe,ariaReadOnly:qe,ariaRelevant:null,ariaRequired:qe,ariaRoleDescription:ke,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:qe,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null}}),o6=Ta({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:SA,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Uo,acceptCharset:ke,accessKey:ke,action:null,allow:null,allowFullScreen:oe,allowPaymentRequest:oe,allowUserMedia:oe,alt:null,as:null,async:oe,autoCapitalize:null,autoComplete:ke,autoFocus:oe,autoPlay:oe,capture:oe,charSet:null,checked:oe,cite:null,className:ke,cols:O,colSpan:null,content:null,contentEditable:qe,controls:oe,controlsList:ke,coords:O|Uo,crossOrigin:null,data:null,dateTime:null,decoding:null,default:oe,defer:oe,dir:null,dirName:null,disabled:oe,download:_A,draggable:qe,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:oe,formTarget:null,headers:ke,height:O,hidden:oe,high:O,href:null,hrefLang:null,htmlFor:ke,httpEquiv:ke,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:oe,itemId:null,itemProp:ke,itemRef:ke,itemScope:oe,itemType:ke,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:oe,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:oe,muted:oe,name:null,nonce:null,noModule:oe,noValidate:oe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:oe,optimum:O,pattern:null,ping:ke,placeholder:null,playsInline:oe,poster:null,preload:null,readOnly:oe,referrerPolicy:null,rel:ke,required:oe,reversed:oe,rows:O,rowSpan:O,sandbox:ke,scope:null,scoped:oe,seamless:oe,selected:oe,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:qe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:oe,useMap:null,value:qe,width:O,wrap:null,align:null,aLink:null,archive:ke,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:oe,declare:oe,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:oe,noHref:oe,noShade:oe,noWrap:oe,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:qe,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:oe,disableRemotePlayback:oe,prefix:null,property:null,results:O,security:null,unselectable:null}}),a6=Ta({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:kA,properties:{about:cn,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:ke,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:oe,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Uo,g2:Uo,glyphName:Uo,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:cn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ke,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:cn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:cn,rev:cn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:cn,requiredFeatures:cn,requiredFonts:cn,requiredFormats:cn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:cn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:cn,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:cn,to:null,transform:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),l6=/^data[-\w.:]+$/i,DI=/-[a-z]/g,u6=/[A-Z]/g;function c6(t,e){const n=Sg(e);let r=e,i=Bn;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&l6.test(e)){if(e.charAt(4)==="-"){const s=e.slice(5).replace(DI,d6);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=e.slice(4);if(!DI.test(s)){let o=s.replace(u6,h6);o.charAt(0)!=="-"&&(o="-"+o),e="data"+o}}i=kw}return new i(r,e)}function h6(t){return"-"+t.toLowerCase()}function d6(t){return t.charAt(1).toUpperCase()}const PI={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},f6=wA([EA,IA,TA,xA,o6],"html"),p6=wA([EA,IA,TA,xA,a6],"svg");function m6(t){if(t.allowedElements&&t.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(t.allowedElements||t.disallowedElements||t.allowElement)return e=>{aA(e,"element",(n,r,i)=>{const s=i;let o;if(t.allowedElements?o=!t.allowedElements.includes(n.tagName):t.disallowedElements&&(o=t.disallowedElements.includes(n.tagName)),!o&&t.allowElement&&typeof r=="number"&&(o=!t.allowElement(n,r,s)),o&&typeof r=="number")return t.unwrapDisallowed&&n.children?s.children.splice(r,1,...n.children):s.children.splice(r,1),r})}}var bA={exports:{}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sw=Symbol.for("react.element"),Tw=Symbol.for("react.portal"),pf=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),gf=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),vf=Symbol.for("react.context"),g6=Symbol.for("react.server_context"),wf=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),If=Symbol.for("react.suspense_list"),Ef=Symbol.for("react.memo"),kf=Symbol.for("react.lazy"),y6=Symbol.for("react.offscreen"),CA;CA=Symbol.for("react.module.reference");function Vn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Sw:switch(t=t.type,t){case pf:case gf:case mf:case _f:case If:return t;default:switch(t=t&&t.$$typeof,t){case g6:case vf:case wf:case kf:case Ef:case yf:return t;default:return e}}case Tw:return e}}}pe.ContextConsumer=vf;pe.ContextProvider=yf;pe.Element=Sw;pe.ForwardRef=wf;pe.Fragment=pf;pe.Lazy=kf;pe.Memo=Ef;pe.Portal=Tw;pe.Profiler=gf;pe.StrictMode=mf;pe.Suspense=_f;pe.SuspenseList=If;pe.isAsyncMode=function(){return!1};pe.isConcurrentMode=function(){return!1};pe.isContextConsumer=function(t){return Vn(t)===vf};pe.isContextProvider=function(t){return Vn(t)===yf};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sw};pe.isForwardRef=function(t){return Vn(t)===wf};pe.isFragment=function(t){return Vn(t)===pf};pe.isLazy=function(t){return Vn(t)===kf};pe.isMemo=function(t){return Vn(t)===Ef};pe.isPortal=function(t){return Vn(t)===Tw};pe.isProfiler=function(t){return Vn(t)===gf};pe.isStrictMode=function(t){return Vn(t)===mf};pe.isSuspense=function(t){return Vn(t)===_f};pe.isSuspenseList=function(t){return Vn(t)===If};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===pf||t===gf||t===mf||t===_f||t===If||t===y6||typeof t=="object"&&t!==null&&(t.$$typeof===kf||t.$$typeof===Ef||t.$$typeof===yf||t.$$typeof===vf||t.$$typeof===wf||t.$$typeof===CA||t.getModuleId!==void 0)};pe.typeOf=Vn;bA.exports=pe;var v6=bA.exports;function w6(t){var e=t&&typeof t=="object"&&t.type==="text"?t.value||"":t;return typeof e=="string"&&e.replace(/[ \t\n\f\r]/g,"")===""}function _6(t){return t.join(" ").trim()}function I6(t,e){var n=e||{};return t[t.length-1]===""&&(t=t.concat("")),t.join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}var OI=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,E6=/\n/g,k6=/^\s*/,S6=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,T6=/^:\s*/,x6=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,b6=/^[;\s]*/,C6=/^\s+|\s+$/g,A6=`
`,LI="/",MI="*",is="",R6="comment",N6="declaration",D6=function(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,r=1;function i(p){var v=p.match(E6);v&&(n+=v.length);var k=p.lastIndexOf(A6);r=~k?p.length-k:r+p.length}function s(){var p={line:n,column:r};return function(v){return v.position=new o(p),u(),v}}function o(p){this.start=p,this.end={line:n,column:r},this.source=e.source}o.prototype.content=t;function a(p){var v=new Error(e.source+":"+n+":"+r+": "+p);if(v.reason=p,v.filename=e.source,v.line=n,v.column=r,v.source=t,!e.silent)throw v}function l(p){var v=p.exec(t);if(!!v){var k=v[0];return i(k),t=t.slice(k.length),v}}function u(){l(k6)}function c(p){var v;for(p=p||[];v=h();)v!==!1&&p.push(v);return p}function h(){var p=s();if(!(LI!=t.charAt(0)||MI!=t.charAt(1))){for(var v=2;is!=t.charAt(v)&&(MI!=t.charAt(v)||LI!=t.charAt(v+1));)++v;if(v+=2,is===t.charAt(v-1))return a("End of comment missing");var k=t.slice(2,v-2);return r+=2,i(k),t=t.slice(v),r+=2,p({type:R6,comment:k})}}function d(){var p=s(),v=l(S6);if(!!v){if(h(),!l(T6))return a("property missing ':'");var k=l(x6),m=p({type:N6,property:FI(v[0].replace(OI,is)),value:k?FI(k[0].replace(OI,is)):is});return l(b6),m}}function f(){var p=[];c(p);for(var v;v=d();)v!==!1&&(p.push(v),c(p));return p}return u(),f()};function FI(t){return t?t.replace(C6,is):is}var P6=D6;function O6(t,e){var n=null;if(!t||typeof t!="string")return n;for(var r,i=P6(t),s=typeof e=="function",o,a,l=0,u=i.length;l<u;l++)r=i[l],o=r.property,a=r.value,s?e(o,a,r):a&&(n||(n={}),n[o]=a);return n}var L6=O6;const xg={}.hasOwnProperty,M6=new Set(["table","thead","tbody","tfoot","tr"]);function AA(t,e){const n=[];let r=-1,i;for(;++r<e.children.length;)i=e.children[r],i.type==="element"?n.push(F6(t,i,r,e)):i.type==="text"?(e.type!=="element"||!M6.has(e.tagName)||!w6(i))&&n.push(i.value):i.type==="raw"&&!t.options.skipHtml&&n.push(i.value);return n}function F6(t,e,n,r){const i=t.options,s=t.schema,o=e.tagName,a={};let l=s,u;if(s.space==="html"&&o==="svg"&&(l=p6,t.schema=l),e.properties)for(u in e.properties)xg.call(e.properties,u)&&U6(a,u,e.properties[u],t);(o==="ol"||o==="ul")&&t.listDepth++;const c=AA(t,e);(o==="ol"||o==="ul")&&t.listDepth--,t.schema=s;const h=e.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},d=i.components&&xg.call(i.components,o)?i.components[o]:o,f=typeof d=="string"||d===ds.Fragment;if(!v6.isValidElementType(d))throw new TypeError(`Component for name \`${o}\` not defined or is not renderable`);if(a.key=[o,h.start.line,h.start.column,n].join("-"),o==="a"&&i.linkTarget&&(a.target=typeof i.linkTarget=="function"?i.linkTarget(String(a.href||""),e.children,typeof a.title=="string"?a.title:null):i.linkTarget),o==="a"&&i.transformLinkUri&&(a.href=i.transformLinkUri(String(a.href||""),e.children,typeof a.title=="string"?a.title:null)),!f&&o==="code"&&r.type==="element"&&r.tagName!=="pre"&&(a.inline=!0),!f&&(o==="h1"||o==="h2"||o==="h3"||o==="h4"||o==="h5"||o==="h6")&&(a.level=Number.parseInt(o.charAt(1),10)),o==="img"&&i.transformImageUri&&(a.src=i.transformImageUri(String(a.src||""),String(a.alt||""),typeof a.title=="string"?a.title:null)),!f&&o==="li"&&r.type==="element"){const p=$6(e);a.checked=p&&p.properties?Boolean(p.properties.checked):null,a.index=Lp(r,e),a.ordered=r.tagName==="ol"}return!f&&(o==="ol"||o==="ul")&&(a.ordered=o==="ol",a.depth=t.listDepth),(o==="td"||o==="th")&&(a.align&&(a.style||(a.style={}),a.style.textAlign=a.align,delete a.align),f||(a.isHeader=o==="th")),!f&&o==="tr"&&r.type==="element"&&(a.isHeader=Boolean(r.tagName==="thead")),i.sourcePos&&(a["data-sourcepos"]=z6(h)),!f&&i.rawSourcePos&&(a.sourcePosition=e.position),!f&&i.includeElementIndex&&(a.index=Lp(r,e),a.siblingCount=Lp(r)),f||(a.node=e),c.length>0?ds.createElement(d,a,c):ds.createElement(d,a)}function $6(t){let e=-1;for(;++e<t.children.length;){const n=t.children[e];if(n.type==="element"&&n.tagName==="input")return n}return null}function Lp(t,e){let n=-1,r=0;for(;++n<t.children.length&&t.children[n]!==e;)t.children[n].type==="element"&&r++;return r}function U6(t,e,n,r){const i=c6(r.schema,e);let s=n;s==null||s!==s||(Array.isArray(s)&&(s=i.commaSeparated?I6(s):_6(s)),i.property==="style"&&typeof s=="string"&&(s=B6(s)),i.space&&i.property?t[xg.call(PI,i.property)?PI[i.property]:i.property]=s:i.attribute&&(t[i.attribute]=s))}function B6(t){const e={};try{L6(t,n)}catch{}return e;function n(r,i){const s=r.slice(0,4)==="-ms-"?`ms-${r.slice(4)}`:r;e[s.replace(/-([a-z])/g,V6)]=i}}function V6(t,e){return e.toUpperCase()}function z6(t){return[t.start.line,":",t.start.column,"-",t.end.line,":",t.end.column].map(e=>String(e)).join("")}const $I={}.hasOwnProperty,j6="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Rc={plugins:{to:"plugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function xw(t){for(const s in Rc)if($I.call(Rc,s)&&$I.call(t,s)){const o=Rc[s];console.warn(`[react-markdown] Warning: please ${o.to?`use \`${o.to}\` instead of`:"remove"} \`${s}\` (see <${j6}#${o.id}> for more info)`),delete Rc[s]}const e=Zj().use(nq).use(t.remarkPlugins||[]).use(Xq,Xu(Zr({},t.remarkRehypeOptions),{allowDangerousHtml:!0})).use(t.rehypePlugins||[]).use(m6,t),n=new qC;typeof t.children=="string"?n.value=t.children:t.children!==void 0&&t.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${t.children}\`)`);const r=e.runSync(e.parse(n),n);if(r.type!=="root")throw new TypeError("Expected a `root` node");let i=ds.createElement(ds.Fragment,{},AA({options:t,schema:f6,listDepth:0},r));return t.className&&(i=ds.createElement("div",{className:t.className},i)),i}xw.defaultProps={transformLinkUri:Bj};xw.propTypes={children:ne.string,className:ne.string,allowElement:ne.func,allowedElements:ne.arrayOf(ne.string),disallowedElements:ne.arrayOf(ne.string),unwrapDisallowed:ne.bool,remarkPlugins:ne.arrayOf(ne.oneOfType([ne.object,ne.func,ne.arrayOf(ne.oneOfType([ne.bool,ne.string,ne.object,ne.func,ne.arrayOf(ne.any)]))])),rehypePlugins:ne.arrayOf(ne.oneOfType([ne.object,ne.func,ne.arrayOf(ne.oneOfType([ne.bool,ne.string,ne.object,ne.func,ne.arrayOf(ne.any)]))])),sourcePos:ne.bool,rawSourcePos:ne.bool,skipHtml:ne.bool,includeElementIndex:ne.bool,transformLinkUri:ne.oneOfType([ne.func,ne.bool]),linkTarget:ne.oneOfType([ne.func,ne.string]),transformImageUri:ne.func,components:ne.object};try{self["workbox:window:6.5.2"]&&_()}catch{}function bg(t,e){return new Promise(function(n){var r=new MessageChannel;r.port1.onmessage=function(i){n(i.data)},t.postMessage(e,[r.port2])})}function q6(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function UI(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function H6(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(i,s){if(i){if(typeof i=="string")return UI(i,s);var o=Object.prototype.toString.call(i).slice(8,-1);return o==="Object"&&i.constructor&&(o=i.constructor.name),o==="Map"||o==="Set"?Array.from(i):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?UI(i,s):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Mp=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function Fp(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Qa=function(t,e){this.type=t,Object.assign(this,e)};function Nc(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function W6(){}var K6={type:"SKIP_WAITING"};function BI(t,e){if(!e)return t&&t.then?t.then(W6):Promise.resolve()}var G6=function(t){var e,n;function r(a,l){var u,c;return l===void 0&&(l={}),(u=t.call(this)||this).nn={},u.tn=0,u.rn=new Mp,u.en=new Mp,u.on=new Mp,u.un=0,u.an=new Set,u.cn=function(){var h=u.fn,d=h.installing;u.tn>0||!Fp(d.scriptURL,u.sn.toString())||performance.now()>u.un+6e4?(u.vn=d,h.removeEventListener("updatefound",u.cn)):(u.hn=d,u.an.add(d),u.rn.resolve(d)),++u.tn,d.addEventListener("statechange",u.ln)},u.ln=function(h){var d=u.fn,f=h.target,p=f.state,v=f===u.vn,k={sw:f,isExternal:v,originalEvent:h};!v&&u.mn&&(k.isUpdate=!0),u.dispatchEvent(new Qa(p,k)),p==="installed"?u.wn=self.setTimeout(function(){p==="installed"&&d.waiting===f&&u.dispatchEvent(new Qa("waiting",k))},200):p==="activating"&&(clearTimeout(u.wn),v||u.en.resolve(f))},u.dn=function(h){var d=u.hn,f=d!==navigator.serviceWorker.controller;u.dispatchEvent(new Qa("controlling",{isExternal:f,originalEvent:h,sw:d,isUpdate:u.mn})),f||u.on.resolve(d)},u.gn=(c=function(h){var d=h.data,f=h.ports,p=h.source;return Nc(u.getSW(),function(){u.an.has(p)&&u.dispatchEvent(new Qa("message",{data:d,originalEvent:h,ports:f,sw:p}))})},function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];try{return Promise.resolve(c.apply(this,h))}catch(f){return Promise.reject(f)}}),u.sn=a,u.nn=l,navigator.serviceWorker.addEventListener("message",u.gn),u}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i,s,o=r.prototype;return o.register=function(a){var l=(a===void 0?{}:a).immediate,u=l!==void 0&&l;try{var c=this;return function(h,d){var f=h();return f&&f.then?f.then(d):d(f)}(function(){if(!u&&document.readyState!=="complete")return BI(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return c.mn=Boolean(navigator.serviceWorker.controller),c.yn=c.pn(),Nc(c.bn(),function(h){c.fn=h,c.yn&&(c.hn=c.yn,c.en.resolve(c.yn),c.on.resolve(c.yn),c.yn.addEventListener("statechange",c.ln,{once:!0}));var d=c.fn.waiting;return d&&Fp(d.scriptURL,c.sn.toString())&&(c.hn=d,Promise.resolve().then(function(){c.dispatchEvent(new Qa("waiting",{sw:d,wasWaitingBeforeRegister:!0}))}).then(function(){})),c.hn&&(c.rn.resolve(c.hn),c.an.add(c.hn)),c.fn.addEventListener("updatefound",c.cn),navigator.serviceWorker.addEventListener("controllerchange",c.dn),c.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?BI(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return Nc(this.getSW(),function(l){return bg(l,a)})}catch(l){return Promise.reject(l)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&bg(this.fn.waiting,K6)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&Fp(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(l,u){try{var c=l()}catch(h){return u(h)}return c&&c.then?c.then(void 0,u):c}(function(){return Nc(navigator.serviceWorker.register(a.sn,a.nn),function(l){return a.un=performance.now(),l})},function(l){throw l})}catch(l){return Promise.reject(l)}},i=r,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&q6(i.prototype,s),r}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,r){this.Sn(n).add(r)},e.removeEventListener=function(n,r){this.Sn(n).delete(r)},e.dispatchEvent=function(n){n.target=this;for(var r,i=H6(this.Sn(n.type));!(r=i()).done;)(0,r.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());function Q6(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisterError:s}=t;let o,a;const l=async(u=!0)=>{u&&(o==null||o.addEventListener("controlling",c=>{c.isUpdate&&window.location.reload()})),a&&a.waiting&&await bg(a.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){o=new G6("/sw.js",{scope:"/",type:"classic"}),o.addEventListener("activated",u=>{u.isUpdate||r==null||r()});{const u=()=>{n==null||n()};o.addEventListener("waiting",u),o.addEventListener("externalwaiting",u)}o.register({immediate:e}).then(u=>{a=u,i==null||i(u)}).catch(u=>{s==null||s(u)})}return l}var Sf={exports:{}},Tf={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y6=Re.exports,X6=Symbol.for("react.element"),J6=Symbol.for("react.fragment"),Z6=Object.prototype.hasOwnProperty,eH=Y6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tH={key:!0,ref:!0,__self:!0,__source:!0};function RA(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Z6.call(e,r)&&!tH.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:X6,type:t,key:s,ref:o,props:i,_owner:eH.current}}Tf.Fragment=J6;Tf.jsx=RA;Tf.jsxs=RA;Sf.exports=Tf;const W=Sf.exports.jsx,$n=Sf.exports.jsxs,xf=Sf.exports.Fragment;Q6({});const NA=new Audio("/noti.wav");NA.loop=!1;qt.apps.length?qt.app():qt.initializeApp({apiKey:"AIzaSyBpWmtGTqluiA1gC0CEFHrQcZncNRYtjbg",authDomain:"private-school-chat.firebaseapp.com",databaseURL:"https://private-school-chat.firebaseio.com",projectId:"private-school-chat",storageBucket:"private-school-chat.appspot.com",messagingSenderId:"113930891891",appId:"1:113930891891:web:88a3cb1a24e25b06017006"});const Hr=qt.auth(),bw=qt.firestore();var Cg=qt.storage().ref(),Ag="";const $p=()=>{const t=document.getElementById("favicon");t.href="/favicon.svg",document.title="HB Chat2"},VI=()=>{Ag=="kimi"&&(document.getElementsByClassName("softBlockOverlay")[0].style.display="flex")},nH=()=>(Re.exports.useEffect(()=>(window.addEventListener("focus",$p),window.addEventListener("blur",VI),$p(),()=>{window.removeEventListener("focus",$p),window.removeEventListener("blur",VI)}),[]),W(xf,{}));function rH(t){const e=t.updateMethod,n=t.changeRoom;return $n(xf,{children:[W("button",{onClick:()=>{Hr.signOut(),n(!1)},children:"log out"}),W("button",{onClick:e,children:"Rooms"})]})}function iH(){const[t,e]=gg(Hr),[n,r]=Re.exports.useState(!1);var s=new URLSearchParams(window.location.search).get("room");(s===""||s===null)&&(s="_start"),Ag=s;function o(){r(!n)}function a(){const[u]=gg(Hr);return W(xf,{children:u?W(lH,{}):W(PA,{})})}function l(){location.reload()}return $n("div",{className:"App",children:[$n("div",{className:"navbar",children:[W("img",{src:"favicon.svg",alt:"app logo"}),W("button",{onClick:l,children:"\u27F3"}),t?W(rH,{changeRoom:r,updateMethod:o}):W("p",{children:"You are not logged in"})]}),s==="_start"?W(oH,{}):W(a,{user:t}),n?W(aH,{}):W("span",{}),Ag=="kimi"?W(sH,{}):W("span",{}),e?W(DA,{text:"Logging in..."}):W("span",{}),W(nH,{})]})}function DA(t){return W("div",{className:"loadingOverlay",children:$n("div",{className:"loadingOverlayContent",children:[t.text,W("img",{src:"loading.gif",alt:"loading"})]})})}function sH(){function t(e){e.preventDefault();var n=document.getElementById("softBlockInput").value;n=="020322"&&(document.getElementsByClassName("softBlockOverlay")[0].style.display="none",document.getElementById("softBlockInput").value="")}return W("div",{className:"softBlockOverlay",children:$n("div",{className:"softBlockContent",children:[W("h1",{children:"CRITICAL ERROR"}),W("p",{children:"An error occured while trying to log you in. (Do you have permission to be in this room?)"}),W("p",{children:"Switch to another room or refresh to retry."}),W("p",{children:"Or, if you're an programmer, input your code to bypass this error."}),W("form",{onSubmit:t,children:W("input",{id:"softBlockInput",type:"number",onSubmit:t})})]})})}function oH(){const[t]=gg(Hr);var e="";return t!==null&&(e=t.displayName),$n("div",{className:"startScreen",children:[W("img",{src:"./favicon.svg",alt:"app logo"}),$n("h1",{children:["Welcome to HyberBhat",W("br",{}),e]}),W("p",{children:"By using this application you consent to the use of cookies."}),t?W("p",{children:"Use the room button above to go to a chatroom."}):W(PA,{})]})}function PA(){return $n("div",{className:"startScreen",children:[W("h2",{children:"You are not signed in!"}),W("button",{onClick:()=>{const e=new qt.auth.GoogleAuthProvider;Hr.signInWithPopup(e).catch(function(n){alert(n),console.log(n)})},children:"Sign in with Google"})]})}function aH(){const e=bw.collection("rooms").limitToLast(50).orderBy("createdAt"),[n]=zC(e,{idField:"id"});function r(i){const{roomName:s,roomSysName:o}=i.room;return W("a",{href:"/?room="+o,children:s})}return W(xf,{children:W("div",{id:"roomListOverlay",children:W("div",{id:"roomListContent",children:n&&n.map(i=>W(r,{room:i},i.id))})})})}function lH(){const t=Re.exports.useRef(),e=new URLSearchParams(window.location.search);var n=e.get("room");(n===""||n===null)&&(n="_start");var r=e.get("limit");r===""||r===null?r=25:r=parseInt(r),Re.exports.useEffect(()=>{t.current.scrollIntoView()}),console.log(r);const s=bw.collection(n).limitToLast(r).orderBy("createdAt"),[o,a]=zC(s,{idField:"id"});return $n("div",{className:"chatroom",children:[o&&o.map(l=>W(uH,{message:l},l.id)),W("span",{ref:t}),W(cH,{}),a?W(DA,{text:"Loading messages..."}):W("span",{})]})}function uH(t){const{text:e,uid:n,photoURL:r,createdAt:i,name:s,attatchment:o,attatchmentType:a}=t.message;var l=n===Hr.currentUser.uid?"message Sent":"message Received",u;s!==void 0?s!==Hr.currentUser.displayName?u=s+" \u2022 ":(u="You \u2022 ",s==="Ciara Lee"&&(u="You, aka the cutest person ever \u2022 ")):u="Name missing \u2022 ";var c="Sending...";if(i!=null){c=new Date(i.toDate());var h=c.toTimeString(),d=h.split(":"),f=" ";if(d[0]>=13){var p=parseInt(d[0]);p=p-12,d[0]=p.toString(),f="PM"}else f="AM";c=`${c.toDateString()}  ${d[0]}:${d[1]} ${f}`}function v(k){const[m,y]=Re.exports.useState("");if(a==="image")if(m=="")Cg.child(k.attatchment).getDownloadURL().then(function(g){console.log("pog: "+g),y(g)}).catch(function(g){console.log("error: "+g)});else return W("a",{href:m,target:"_blank",className:"messageAttatchment",children:W("img",{src:m,alt:"msg attatchment"})});if(a==="video")if(m=="")Cg.child(k.attatchment).getDownloadURL().then(function(g){console.log("pog: "+g),y(g)}).catch(function(g){console.log("error: "+g)});else return W("a",{className:"messageAttatchment",children:W("video",{controls:!0,children:W("source",{src:m})})})}return Re.exports.useEffect(()=>{l=="message Received"&&NA.play()}),$n("div",{className:l,children:[W("img",{className:"pfp",src:r,alt:"profile picture"}),W(xw,{children:e}),o!=""?W(v,{attatchment:o,attatchmentType:a}):W("span",{}),W("div",{className:"timestamp",children:$n("i",{children:[u,c]})})]})}function cH(){var e=new URLSearchParams(window.location.search).get("room");(e===""||e===null)&&(e="_start");const[n,r]=Re.exports.useState("Attatch"),i=bw.collection(e),s=async l=>{l.preventDefault();const{uid:u,photoURL:c}=Hr.currentUser;var h=Hr.currentUser.displayName,d="",f=document.getElementById("MSGINPUT").value;if(document.getElementById("MSGINPUT").value="",f!=="")if(document.getElementById("attatchImg").value=="")i.add({text:f,createdAt:qt.firestore.FieldValue.serverTimestamp(),uid:u,photoURL:c,name:h,attatchment:d,attatchmentType:"none"}).catch(g=>{console.log("Error sending message: "+g),alert("Error sending message: "+g)});else{var p=Math.floor(Math.random()*69696969+1),v=document.getElementById("attatchImg").files[0],k=document.getElementById("attatchImg").files[0].name,m=v.type.split("/")[0];document.getElementById("attatchImg").value="",r("Attatch");var y="images/";e=="kimi"&&(y="lockedRoom/"),Cg.child(y+p+k).put(v).then(function(g){var S;e=="kimi"&&(S={customMetadata:{user1:"kGdiwRJy0EWjhAUMV1izyJfXTTY2",user2:"FNvEwEkXbsVNV4VE6nn71w2smaa2"}},console.log(S)),i.add({text:f,createdAt:qt.firestore.FieldValue.serverTimestamp(),uid:u,photoURL:c,name:h,attatchment:y+p+k,attatchmentType:m}).then(()=>{console.log("Successfully uploaded image"),g.ref.updateMetadata(S).then(function(x){console.log(x),r("Attatch")}).catch(function(x){console.log(x),console.log("Error updating metadata for image: "+x),alert("Error updating metadata for image: "+x),r("Attatch")})}).catch(function(x){console.log("Error sending message: "+x),alert("Error sending message: "+x),r("Attatch")})}).catch(g=>{console.log("Error uploading image: "+g),alert("Error uploading image: "+g),r("Attatch")})}};function o(l){l.preventDefault(),document.getElementById("attatchImg").value==""?document.getElementById("attatchImg").click():(document.getElementById("attatchImg").value="",r("Attatch"))}function a(l){l.preventDefault();var u=document.getElementById("attatchImg").files[0];u!=null&&(u.type.split("/")[0]=="image"?r("Remove Image"):u.type.split("/")[0]=="video"?r("Remove Video"):(r("Remove Binary File"),alert("This file type is not supported, it will be sent as binary data.")))}return Re.exports.useEffect(()=>{const l=u=>{u.code==="Enter"&&u.shiftKey&&(u.preventDefault(),s(u))};document.addEventListener("keydown",l)}),$n("form",{onSubmit:s,children:[W("textarea",{id:"MSGINPUT",placeholder:"input message pls"}),W("button",{onClick:s,children:"Send"}),W("button",{onClick:o,children:n}),W("input",{type:"file",id:"attatchImg",onChange:a,hidden:!0})]})}Up.createRoot(document.getElementById("root")).render(W(ds.StrictMode,{children:W(iH,{})}));
