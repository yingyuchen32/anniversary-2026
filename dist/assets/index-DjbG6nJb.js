(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var ff={exports:{}},jo={},df={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function w_(){if(Im)return St;Im=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function m(V){return V===null||typeof V!="object"?null:(V=x&&V[x]||V["@@iterator"],typeof V=="function"?V:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function _(V,ne,ke){this.props=V,this.context=ne,this.refs=w,this.updater=ke||S}_.prototype.isReactComponent={},_.prototype.setState=function(V,ne){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,ne,"setState")},_.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function y(){}y.prototype=_.prototype;function D(V,ne,ke){this.props=V,this.context=ne,this.refs=w,this.updater=ke||S}var b=D.prototype=new y;b.constructor=D,M(b,_.prototype),b.isPureReactComponent=!0;var P=Array.isArray,O=Object.prototype.hasOwnProperty,F={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function T(V,ne,ke){var $,G={},C=null,L=null;if(ne!=null)for($ in ne.ref!==void 0&&(L=ne.ref),ne.key!==void 0&&(C=""+ne.key),ne)O.call(ne,$)&&!B.hasOwnProperty($)&&(G[$]=ne[$]);var q=arguments.length-2;if(q===1)G.children=ke;else if(1<q){for(var xe=Array(q),ee=0;ee<q;ee++)xe[ee]=arguments[ee+2];G.children=xe}if(V&&V.defaultProps)for($ in q=V.defaultProps,q)G[$]===void 0&&(G[$]=q[$]);return{$$typeof:s,type:V,key:C,ref:L,props:G,_owner:F.current}}function I(V,ne){return{$$typeof:s,type:V.type,key:ne,ref:V.ref,props:V.props,_owner:V._owner}}function ce(V){return typeof V=="object"&&V!==null&&V.$$typeof===s}function W(V){var ne={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ke){return ne[ke]})}var j=/\/+/g;function te(V,ne){return typeof V=="object"&&V!==null&&V.key!=null?W(""+V.key):ne.toString(36)}function ae(V,ne,ke,$,G){var C=typeof V;(C==="undefined"||C==="boolean")&&(V=null);var L=!1;if(V===null)L=!0;else switch(C){case"string":case"number":L=!0;break;case"object":switch(V.$$typeof){case s:case e:L=!0}}if(L)return L=V,G=G(L),V=$===""?"."+te(L,0):$,P(G)?(ke="",V!=null&&(ke=V.replace(j,"$&/")+"/"),ae(G,ne,ke,"",function(ee){return ee})):G!=null&&(ce(G)&&(G=I(G,ke+(!G.key||L&&L.key===G.key?"":(""+G.key).replace(j,"$&/")+"/")+V)),ne.push(G)),1;if(L=0,$=$===""?".":$+":",P(V))for(var q=0;q<V.length;q++){C=V[q];var xe=$+te(C,q);L+=ae(C,ne,ke,xe,G)}else if(xe=m(V),typeof xe=="function")for(V=xe.call(V),q=0;!(C=V.next()).done;)C=C.value,xe=$+te(C,q++),L+=ae(C,ne,ke,xe,G);else if(C==="object")throw ne=String(V),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return L}function se(V,ne,ke){if(V==null)return V;var $=[],G=0;return ae(V,$,"","",function(C){return ne.call(ke,C,G++)}),$}function re(V){if(V._status===-1){var ne=V._result;ne=ne(),ne.then(function(ke){(V._status===0||V._status===-1)&&(V._status=1,V._result=ke)},function(ke){(V._status===0||V._status===-1)&&(V._status=2,V._result=ke)}),V._status===-1&&(V._status=0,V._result=ne)}if(V._status===1)return V._result.default;throw V._result}var X={current:null},H={transition:null},le={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function fe(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:se,forEach:function(V,ne,ke){se(V,function(){ne.apply(this,arguments)},ke)},count:function(V){var ne=0;return se(V,function(){ne++}),ne},toArray:function(V){return se(V,function(ne){return ne})||[]},only:function(V){if(!ce(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},St.Component=_,St.Fragment=t,St.Profiler=o,St.PureComponent=D,St.StrictMode=r,St.Suspense=p,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,St.act=fe,St.cloneElement=function(V,ne,ke){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var $=M({},V.props),G=V.key,C=V.ref,L=V._owner;if(ne!=null){if(ne.ref!==void 0&&(C=ne.ref,L=F.current),ne.key!==void 0&&(G=""+ne.key),V.type&&V.type.defaultProps)var q=V.type.defaultProps;for(xe in ne)O.call(ne,xe)&&!B.hasOwnProperty(xe)&&($[xe]=ne[xe]===void 0&&q!==void 0?q[xe]:ne[xe])}var xe=arguments.length-2;if(xe===1)$.children=ke;else if(1<xe){q=Array(xe);for(var ee=0;ee<xe;ee++)q[ee]=arguments[ee+2];$.children=q}return{$$typeof:s,type:V.type,key:G,ref:C,props:$,_owner:L}},St.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},St.createElement=T,St.createFactory=function(V){var ne=T.bind(null,V);return ne.type=V,ne},St.createRef=function(){return{current:null}},St.forwardRef=function(V){return{$$typeof:f,render:V}},St.isValidElement=ce,St.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:re}},St.memo=function(V,ne){return{$$typeof:h,type:V,compare:ne===void 0?null:ne}},St.startTransition=function(V){var ne=H.transition;H.transition={};try{V()}finally{H.transition=ne}},St.unstable_act=fe,St.useCallback=function(V,ne){return X.current.useCallback(V,ne)},St.useContext=function(V){return X.current.useContext(V)},St.useDebugValue=function(){},St.useDeferredValue=function(V){return X.current.useDeferredValue(V)},St.useEffect=function(V,ne){return X.current.useEffect(V,ne)},St.useId=function(){return X.current.useId()},St.useImperativeHandle=function(V,ne,ke){return X.current.useImperativeHandle(V,ne,ke)},St.useInsertionEffect=function(V,ne){return X.current.useInsertionEffect(V,ne)},St.useLayoutEffect=function(V,ne){return X.current.useLayoutEffect(V,ne)},St.useMemo=function(V,ne){return X.current.useMemo(V,ne)},St.useReducer=function(V,ne,ke){return X.current.useReducer(V,ne,ke)},St.useRef=function(V){return X.current.useRef(V)},St.useState=function(V){return X.current.useState(V)},St.useSyncExternalStore=function(V,ne,ke){return X.current.useSyncExternalStore(V,ne,ke)},St.useTransition=function(){return X.current.useTransition()},St.version="18.3.1",St}var Um;function Qd(){return Um||(Um=1,df.exports=w_()),df.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function A_(){if(Fm)return jo;Fm=1;var s=Qd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,h){var v,x={},m=null,S=null;h!==void 0&&(m=""+h),p.key!==void 0&&(m=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(x[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:f,key:m,ref:S,props:x,_owner:o.current}}return jo.Fragment=t,jo.jsx=c,jo.jsxs=c,jo}var Om;function C_(){return Om||(Om=1,ff.exports=A_()),ff.exports}var Lt=C_(),Rl={},hf={exports:{}},Fn={},pf={exports:{}},mf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function b_(){return Bm||(Bm=1,(function(s){function e(H,le){var fe=H.length;H.push(le);e:for(;0<fe;){var V=fe-1>>>1,ne=H[V];if(0<o(ne,le))H[V]=le,H[fe]=ne,fe=V;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var le=H[0],fe=H.pop();if(fe!==le){H[0]=fe;e:for(var V=0,ne=H.length,ke=ne>>>1;V<ke;){var $=2*(V+1)-1,G=H[$],C=$+1,L=H[C];if(0>o(G,fe))C<ne&&0>o(L,G)?(H[V]=L,H[C]=fe,V=C):(H[V]=G,H[$]=fe,V=$);else if(C<ne&&0>o(L,fe))H[V]=L,H[C]=fe,V=C;else break e}}return le}function o(H,le){var fe=H.sortIndex-le.sortIndex;return fe!==0?fe:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var p=[],h=[],v=1,x=null,m=3,S=!1,M=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(H){for(var le=t(h);le!==null;){if(le.callback===null)r(h);else if(le.startTime<=H)r(h),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(h)}}function P(H){if(w=!1,b(H),!M)if(t(p)!==null)M=!0,re(O);else{var le=t(h);le!==null&&X(P,le.startTime-H)}}function O(H,le){M=!1,w&&(w=!1,y(T),T=-1),S=!0;var fe=m;try{for(b(le),x=t(p);x!==null&&(!(x.expirationTime>le)||H&&!W());){var V=x.callback;if(typeof V=="function"){x.callback=null,m=x.priorityLevel;var ne=V(x.expirationTime<=le);le=s.unstable_now(),typeof ne=="function"?x.callback=ne:x===t(p)&&r(p),b(le)}else r(p);x=t(p)}if(x!==null)var ke=!0;else{var $=t(h);$!==null&&X(P,$.startTime-le),ke=!1}return ke}finally{x=null,m=fe,S=!1}}var F=!1,B=null,T=-1,I=5,ce=-1;function W(){return!(s.unstable_now()-ce<I)}function j(){if(B!==null){var H=s.unstable_now();ce=H;var le=!0;try{le=B(!0,H)}finally{le?te():(F=!1,B=null)}}else F=!1}var te;if(typeof D=="function")te=function(){D(j)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,se=ae.port2;ae.port1.onmessage=j,te=function(){se.postMessage(null)}}else te=function(){_(j,0)};function re(H){B=H,F||(F=!0,te())}function X(H,le){T=_(function(){H(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,re(O))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(H){switch(m){case 1:case 2:case 3:var le=3;break;default:le=m}var fe=m;m=le;try{return H()}finally{m=fe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var fe=m;m=H;try{return le()}finally{m=fe}},s.unstable_scheduleCallback=function(H,le,fe){var V=s.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?V+fe:V):fe=V,H){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=fe+ne,H={id:v++,callback:le,priorityLevel:H,startTime:fe,expirationTime:ne,sortIndex:-1},fe>V?(H.sortIndex=fe,e(h,H),t(p)===null&&H===t(h)&&(w?(y(T),T=-1):w=!0,X(P,fe-V))):(H.sortIndex=ne,e(p,H),M||S||(M=!0,re(O))),H},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(H){var le=m;return function(){var fe=m;m=le;try{return H.apply(this,arguments)}finally{m=fe}}}})(mf)),mf}var km;function R_(){return km||(km=1,pf.exports=b_()),pf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function P_(){if(zm)return Fn;zm=1;var s=Qd(),e=R_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function m(n){return p.call(x,n)?!0:p.call(v,n)?!1:h.test(n)?x[n]=!0:(v[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,u,d,g,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=A}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,D);_[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,D);_[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,D);_[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,a,u){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,u)&&(a=null),u||d===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),F=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),W=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var fe=Object.assign,V;function ne(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var ke=!1;function $(n,i){if(!n||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ve){var u=ve}Reflect.construct(n,[],i)}else{try{i.call()}catch(ve){u=ve}n.call(i.prototype)}else{try{throw Error()}catch(ve){u=ve}n()}}catch(ve){if(ve&&u&&typeof ve.stack=="string"){for(var d=ve.stack.split(`
`),g=u.stack.split(`
`),A=d.length-1,z=g.length-1;1<=A&&0<=z&&d[A]!==g[z];)z--;for(;1<=A&&0<=z;A--,z--)if(d[A]!==g[z]){if(A!==1||z!==1)do if(A--,z--,0>z||d[A]!==g[z]){var Y=`
`+d[A].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=A&&0<=z);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function G(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=$(n.type,!1),n;case 11:return n=$(n.type.render,!1),n;case 1:return n=$(n.type,!0),n;default:return""}}function C(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case F:return"Portal";case I:return"Profiler";case T:return"StrictMode";case te:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case W:return(n.displayName||"Context")+".Consumer";case ce:return(n._context.displayName||"Context")+".Provider";case j:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case se:return i=n.displayName||null,i!==null?i:C(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return C(n(i))}catch{}}return null}function L(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return C(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function q(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function xe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ee(n){var i=xe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){u=""+A,g.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function oe(n){n._valueTracker||(n._valueTracker=ee(n))}function Ae(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=xe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Te(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pe(n,i){var a=i.checked;return fe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ge(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=q(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ye(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function Ce(n,i){ye(n,i);var a=q(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?k(n,i.type,a):i.hasOwnProperty("defaultValue")&&k(n,i.type,q(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function R(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function k(n,i,a){(i!=="number"||Te(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var be=Array.isArray;function Ge(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+q(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ve(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return fe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function U(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(be(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:q(a)}}function E(n,i){var a=q(i.value),u=q(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Z(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function we(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Me(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Se,Ze=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Se=Se||document.createElement("div"),Se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ue(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){at.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),He[i]=He[n]})});function Pe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||He.hasOwnProperty(n)&&He[n]?(""+i).trim():i+"px"}function De(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=Pe(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Ke=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(n,i){if(i){if(Ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ye(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function J(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ze=null,Oe=null,je=null;function Fe(n){if(n=No(n)){if(typeof ze!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Wa(i),ze(n.stateNode,n.type,i))}}function Ee(n){Oe?je?je.push(n):je=[n]:Oe=n}function nt(){if(Oe){var n=Oe,i=je;if(je=Oe=null,Fe(n),i)for(n=0;n<i.length;n++)Fe(i[n])}}function mt(n,i){return n(i)}function It(){}var wt=!1;function Kn(n,i,a){if(wt)return n(i,a);wt=!0;try{return mt(n,i,a)}finally{wt=!1,(Oe!==null||je!==null)&&(It(),nt())}}function En(n,i){var a=n.stateNode;if(a===null)return null;var u=Wa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ms=!1;if(f)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){ms=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{ms=!1}function Du(n,i,a,u,d,g,A,z,Y){var ve=Array.prototype.slice.call(arguments,3);try{i.apply(a,ve)}catch(Le){this.onError(Le)}}var or=!1,Or=null,Jn=!1,Br=null,Ma={onError:function(n){or=!0,Or=n}};function Ea(n,i,a,u,d,g,A,z,Y){or=!1,Or=null,Du.apply(Ma,arguments)}function gs(n,i,a,u,d,g,A,z,Y){if(Ea.apply(this,arguments),or){if(or){var ve=Or;or=!1,Or=null}else throw Error(t(198));Jn||(Jn=!0,Br=ve)}}function Si(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function kr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function mo(n){if(Si(n)!==n)throw Error(t(188))}function Ta(n){var i=n.alternate;if(!i){if(i=Si(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return mo(d),n;if(g===u)return mo(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=g;else{for(var A=!1,z=d.child;z;){if(z===a){A=!0,a=d,u=g;break}if(z===u){A=!0,u=d,a=g;break}z=z.sibling}if(!A){for(z=g.child;z;){if(z===a){A=!0,a=g,u=d;break}if(z===u){A=!0,u=g,a=d;break}z=z.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function wa(n){return n=Ta(n),n!==null?Aa(n):null}function Aa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Aa(n);if(i!==null)return i;n=n.sibling}return null}var Ca=e.unstable_scheduleCallback,ba=e.unstable_cancelCallback,Nu=e.unstable_shouldYield,Iu=e.unstable_requestPaint,N=e.unstable_now,ie=e.unstable_getCurrentPriorityLevel,_e=e.unstable_ImmediatePriority,me=e.unstable_UserBlockingPriority,de=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,Qe=e.unstable_IdlePriority,We=null,$e=null;function lt(n){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(We,n,void 0,(n.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Nt,xt=Math.log,ut=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(xt(n)/ut|0)|0}var Bt=64,Ot=4194304;function Tt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $t(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,g=n.pingedLanes,A=a&268435455;if(A!==0){var z=A&~d;z!==0?u=Tt(z):(g&=A,g!==0&&(u=Tt(g)))}else A=a&~d,A!==0?u=Tt(A):g!==0&&(u=Tt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-ct(i),d=1<<a,u|=n[a],i&=~d;return u}function st(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-ct(g),z=1<<A,Y=d[A];Y===-1?((z&a)===0||(z&u)!==0)&&(d[A]=st(z,i)):Y<=i&&(n.expiredLanes|=z),g&=~z}}function Et(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Rn(){var n=Bt;return Bt<<=1,(Bt&4194240)===0&&(Bt=64),n}function Pn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function kn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ct(i),n[i]=a}function ar(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-ct(a),g=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~g}}function Dt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-ct(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var gt=0;function ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zt,Qn,Bi,go,gh,Uu=!1,Ra=[],lr=null,ur=null,cr=null,vo=new Map,_o=new Map,fr=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(n,i){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(i.pointerId)}}function xo(n,i,a,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},i!==null&&(i=No(i),i!==null&&Qn(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function jg(n,i,a,u,d){switch(i){case"focusin":return lr=xo(lr,n,i,a,u,d),!0;case"dragenter":return ur=xo(ur,n,i,a,u,d),!0;case"mouseover":return cr=xo(cr,n,i,a,u,d),!0;case"pointerover":var g=d.pointerId;return vo.set(g,xo(vo.get(g)||null,n,i,a,u,d)),!0;case"gotpointercapture":return g=d.pointerId,_o.set(g,xo(_o.get(g)||null,n,i,a,u,d)),!0}return!1}function _h(n){var i=zr(n.target);if(i!==null){var a=Si(i);if(a!==null){if(i=a.tag,i===13){if(i=kr(a),i!==null){n.blockedOn=i,gh(n.priority,function(){Bi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ou(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);ht=u,a.target.dispatchEvent(u),ht=null}else return i=No(a),i!==null&&Qn(i),n.blockedOn=a,!1;i.shift()}return!0}function xh(n,i,a){Pa(n)&&a.delete(i)}function $g(){Uu=!1,lr!==null&&Pa(lr)&&(lr=null),ur!==null&&Pa(ur)&&(ur=null),cr!==null&&Pa(cr)&&(cr=null),vo.forEach(xh),_o.forEach(xh)}function yo(n,i){n.blockedOn===i&&(n.blockedOn=null,Uu||(Uu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$g)))}function So(n){function i(d){return yo(d,n)}if(0<Ra.length){yo(Ra[0],n);for(var a=1;a<Ra.length;a++){var u=Ra[a];u.blockedOn===n&&(u.blockedOn=null)}}for(lr!==null&&yo(lr,n),ur!==null&&yo(ur,n),cr!==null&&yo(cr,n),vo.forEach(i),_o.forEach(i),a=0;a<fr.length;a++)u=fr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)_h(a),a.blockedOn===null&&fr.shift()}var vs=P.ReactCurrentBatchConfig,La=!0;function Zg(n,i,a,u){var d=gt,g=vs.transition;vs.transition=null;try{gt=1,Fu(n,i,a,u)}finally{gt=d,vs.transition=g}}function Kg(n,i,a,u){var d=gt,g=vs.transition;vs.transition=null;try{gt=4,Fu(n,i,a,u)}finally{gt=d,vs.transition=g}}function Fu(n,i,a,u){if(La){var d=Ou(n,i,a,u);if(d===null)ec(n,i,u,Da,a),vh(n,u);else if(jg(d,n,i,a,u))u.stopPropagation();else if(vh(n,u),i&4&&-1<Yg.indexOf(n)){for(;d!==null;){var g=No(d);if(g!==null&&Zt(g),g=Ou(n,i,a,u),g===null&&ec(n,i,u,Da,a),g===d)break;d=g}d!==null&&u.stopPropagation()}else ec(n,i,u,null,a)}}var Da=null;function Ou(n,i,a,u){if(Da=null,n=J(u),n=zr(n),n!==null)if(i=Si(n),i===null)n=null;else if(a=i.tag,a===13){if(n=kr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Da=n,null}function yh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ie()){case _e:return 1;case me:return 4;case de:case Xe:return 16;case Qe:return 536870912;default:return 16}default:return 16}}var dr=null,Bu=null,Na=null;function Sh(){if(Na)return Na;var n,i=Bu,a=i.length,u,d="value"in dr?dr.value:dr.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var A=a-n;for(u=1;u<=A&&i[a-u]===d[g-u];u++);return Na=d.slice(n,1<u?1-u:void 0)}function Ia(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ua(){return!0}function Mh(){return!1}function zn(n){function i(a,u,d,g,A){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(g):g[z]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ua:Mh,this.isPropagationStopped=Mh,this}return fe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),i}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ku=zn(_s),Mo=fe({},_s,{view:0,detail:0}),Jg=zn(Mo),zu,Vu,Eo,Fa=fe({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Eo&&(Eo&&n.type==="mousemove"?(zu=n.screenX-Eo.screenX,Vu=n.screenY-Eo.screenY):Vu=zu=0,Eo=n),zu)},movementY:function(n){return"movementY"in n?n.movementY:Vu}}),Eh=zn(Fa),Qg=fe({},Fa,{dataTransfer:0}),ev=zn(Qg),tv=fe({},Mo,{relatedTarget:0}),Hu=zn(tv),nv=fe({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),iv=zn(nv),rv=fe({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sv=zn(rv),ov=fe({},_s,{data:0}),Th=zn(ov),av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=uv[n])?!!i[n]:!1}function Gu(){return cv}var fv=fe({},Mo,{key:function(n){if(n.key){var i=av[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ia(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(n){return n.type==="keypress"?Ia(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ia(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),dv=zn(fv),hv=fe({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=zn(hv),pv=fe({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),mv=zn(pv),gv=fe({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=zn(gv),_v=fe({},Fa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=zn(_v),yv=[9,13,27,32],Wu=f&&"CompositionEvent"in window,To=null;f&&"documentMode"in document&&(To=document.documentMode);var Sv=f&&"TextEvent"in window&&!To,Ah=f&&(!Wu||To&&8<To&&11>=To),Ch=" ",bh=!1;function Rh(n,i){switch(n){case"keyup":return yv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ph(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function Mv(n,i){switch(n){case"compositionend":return Ph(i);case"keypress":return i.which!==32?null:(bh=!0,Ch);case"textInput":return n=i.data,n===Ch&&bh?null:n;default:return null}}function Ev(n,i){if(xs)return n==="compositionend"||!Wu&&Rh(n,i)?(n=Sh(),Na=Bu=dr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ah&&i.locale!=="ko"?null:i.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Tv[n.type]:i==="textarea"}function Dh(n,i,a,u){Ee(u),i=Va(i,"onChange"),0<i.length&&(a=new ku("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var wo=null,Ao=null;function wv(n){Zh(n,0)}function Oa(n){var i=Ts(n);if(Ae(i))return n}function Av(n,i){if(n==="change")return i}var Nh=!1;if(f){var Xu;if(f){var qu="oninput"in document;if(!qu){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),qu=typeof Ih.oninput=="function"}Xu=qu}else Xu=!1;Nh=Xu&&(!document.documentMode||9<document.documentMode)}function Uh(){wo&&(wo.detachEvent("onpropertychange",Fh),Ao=wo=null)}function Fh(n){if(n.propertyName==="value"&&Oa(Ao)){var i=[];Dh(i,Ao,n,J(n)),Kn(wv,i)}}function Cv(n,i,a){n==="focusin"?(Uh(),wo=i,Ao=a,wo.attachEvent("onpropertychange",Fh)):n==="focusout"&&Uh()}function bv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oa(Ao)}function Rv(n,i){if(n==="click")return Oa(i)}function Pv(n,i){if(n==="input"||n==="change")return Oa(i)}function Lv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var li=typeof Object.is=="function"?Object.is:Lv;function Co(n,i){if(li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!p.call(i,d)||!li(n[d],i[d]))return!1}return!0}function Oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bh(n,i){var a=Oh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Oh(a)}}function kh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?kh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function zh(){for(var n=window,i=Te();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Te(n.document)}return i}function Yu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Dv(n){var i=zh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&kh(a.ownerDocument.documentElement,a)){if(u!==null&&Yu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(u.start,d);u=u.end===void 0?g:Math.min(u.end,d),!n.extend&&g>u&&(d=u,u=g,g=d),d=Bh(a,g);var A=Bh(a,u);d&&A&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Nv=f&&"documentMode"in document&&11>=document.documentMode,ys=null,ju=null,bo=null,$u=!1;function Vh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$u||ys==null||ys!==Te(u)||(u=ys,"selectionStart"in u&&Yu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),bo&&Co(bo,u)||(bo=u,u=Va(ju,"onSelect"),0<u.length&&(i=new ku("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=ys)))}function Ba(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ss={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},Zu={},Hh={};f&&(Hh=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function ka(n){if(Zu[n])return Zu[n];if(!Ss[n])return n;var i=Ss[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Hh)return Zu[n]=i[a];return n}var Gh=ka("animationend"),Wh=ka("animationiteration"),Xh=ka("animationstart"),qh=ka("transitionend"),Yh=new Map,jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,i){Yh.set(n,i),l(i,[n])}for(var Ku=0;Ku<jh.length;Ku++){var Ju=jh[Ku],Iv=Ju.toLowerCase(),Uv=Ju[0].toUpperCase()+Ju.slice(1);hr(Iv,"on"+Uv)}hr(Gh,"onAnimationEnd"),hr(Wh,"onAnimationIteration"),hr(Xh,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(qh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function $h(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,gs(u,i,void 0,n),n.currentTarget=null}function Zh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var A=u.length-1;0<=A;A--){var z=u[A],Y=z.instance,ve=z.currentTarget;if(z=z.listener,Y!==g&&d.isPropagationStopped())break e;$h(d,z,ve),g=Y}else for(A=0;A<u.length;A++){if(z=u[A],Y=z.instance,ve=z.currentTarget,z=z.listener,Y!==g&&d.isPropagationStopped())break e;$h(d,z,ve),g=Y}}}if(Jn)throw n=Br,Jn=!1,Br=null,n}function Vt(n,i){var a=i[oc];a===void 0&&(a=i[oc]=new Set);var u=n+"__bubble";a.has(u)||(Kh(i,n,2,!1),a.add(u))}function Qu(n,i,a){var u=0;i&&(u|=4),Kh(a,n,u,i)}var za="_reactListening"+Math.random().toString(36).slice(2);function Po(n){if(!n[za]){n[za]=!0,r.forEach(function(a){a!=="selectionchange"&&(Fv.has(a)||Qu(a,!1,n),Qu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[za]||(i[za]=!0,Qu("selectionchange",!1,i))}}function Kh(n,i,a,u){switch(yh(i)){case 1:var d=Zg;break;case 4:d=Kg;break;default:d=Fu}a=d.bind(null,i,a,n),d=void 0,!ms||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function ec(n,i,a,u,d){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var z=u.stateNode.containerInfo;if(z===d||z.nodeType===8&&z.parentNode===d)break;if(A===4)for(A=u.return;A!==null;){var Y=A.tag;if((Y===3||Y===4)&&(Y=A.stateNode.containerInfo,Y===d||Y.nodeType===8&&Y.parentNode===d))return;A=A.return}for(;z!==null;){if(A=zr(z),A===null)return;if(Y=A.tag,Y===5||Y===6){u=g=A;continue e}z=z.parentNode}}u=u.return}Kn(function(){var ve=g,Le=J(a),Ie=[];e:{var Re=Yh.get(n);if(Re!==void 0){var Je=ku,it=n;switch(n){case"keypress":if(Ia(a)===0)break e;case"keydown":case"keyup":Je=dv;break;case"focusin":it="focus",Je=Hu;break;case"focusout":it="blur",Je=Hu;break;case"beforeblur":case"afterblur":Je=Hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=mv;break;case Gh:case Wh:case Xh:Je=iv;break;case qh:Je=vv;break;case"scroll":Je=Jg;break;case"wheel":Je=xv;break;case"copy":case"cut":case"paste":Je=sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=wh}var rt=(i&4)!==0,Kt=!rt&&n==="scroll",ue=rt?Re!==null?Re+"Capture":null:Re;rt=[];for(var Q=ve,he;Q!==null;){he=Q;var Be=he.stateNode;if(he.tag===5&&Be!==null&&(he=Be,ue!==null&&(Be=En(Q,ue),Be!=null&&rt.push(Lo(Q,Be,he)))),Kt)break;Q=Q.return}0<rt.length&&(Re=new Je(Re,it,null,a,Le),Ie.push({event:Re,listeners:rt}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",Re&&a!==ht&&(it=a.relatedTarget||a.fromElement)&&(zr(it)||it[ki]))break e;if((Je||Re)&&(Re=Le.window===Le?Le:(Re=Le.ownerDocument)?Re.defaultView||Re.parentWindow:window,Je?(it=a.relatedTarget||a.toElement,Je=ve,it=it?zr(it):null,it!==null&&(Kt=Si(it),it!==Kt||it.tag!==5&&it.tag!==6)&&(it=null)):(Je=null,it=ve),Je!==it)){if(rt=Eh,Be="onMouseLeave",ue="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(rt=wh,Be="onPointerLeave",ue="onPointerEnter",Q="pointer"),Kt=Je==null?Re:Ts(Je),he=it==null?Re:Ts(it),Re=new rt(Be,Q+"leave",Je,a,Le),Re.target=Kt,Re.relatedTarget=he,Be=null,zr(Le)===ve&&(rt=new rt(ue,Q+"enter",it,a,Le),rt.target=he,rt.relatedTarget=Kt,Be=rt),Kt=Be,Je&&it)t:{for(rt=Je,ue=it,Q=0,he=rt;he;he=Ms(he))Q++;for(he=0,Be=ue;Be;Be=Ms(Be))he++;for(;0<Q-he;)rt=Ms(rt),Q--;for(;0<he-Q;)ue=Ms(ue),he--;for(;Q--;){if(rt===ue||ue!==null&&rt===ue.alternate)break t;rt=Ms(rt),ue=Ms(ue)}rt=null}else rt=null;Je!==null&&Jh(Ie,Re,Je,rt,!1),it!==null&&Kt!==null&&Jh(Ie,Kt,it,rt,!0)}}e:{if(Re=ve?Ts(ve):window,Je=Re.nodeName&&Re.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Re.type==="file")var ot=Av;else if(Lh(Re))if(Nh)ot=Pv;else{ot=bv;var ft=Cv}else(Je=Re.nodeName)&&Je.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(ot=Rv);if(ot&&(ot=ot(n,ve))){Dh(Ie,ot,a,Le);break e}ft&&ft(n,Re,ve),n==="focusout"&&(ft=Re._wrapperState)&&ft.controlled&&Re.type==="number"&&k(Re,"number",Re.value)}switch(ft=ve?Ts(ve):window,n){case"focusin":(Lh(ft)||ft.contentEditable==="true")&&(ys=ft,ju=ve,bo=null);break;case"focusout":bo=ju=ys=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,Vh(Ie,a,Le);break;case"selectionchange":if(Nv)break;case"keydown":case"keyup":Vh(Ie,a,Le)}var dt;if(Wu)e:{switch(n){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else xs?Rh(n,a)&&(vt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Ah&&a.locale!=="ko"&&(xs||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&xs&&(dt=Sh()):(dr=Le,Bu="value"in dr?dr.value:dr.textContent,xs=!0)),ft=Va(ve,vt),0<ft.length&&(vt=new Th(vt,n,null,a,Le),Ie.push({event:vt,listeners:ft}),dt?vt.data=dt:(dt=Ph(a),dt!==null&&(vt.data=dt)))),(dt=Sv?Mv(n,a):Ev(n,a))&&(ve=Va(ve,"onBeforeInput"),0<ve.length&&(Le=new Th("onBeforeInput","beforeinput",null,a,Le),Ie.push({event:Le,listeners:ve}),Le.data=dt))}Zh(Ie,i)})}function Lo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Va(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=En(n,a),g!=null&&u.unshift(Lo(n,g,d)),g=En(n,i),g!=null&&u.push(Lo(n,g,d))),n=n.return}return u}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jh(n,i,a,u,d){for(var g=i._reactName,A=[];a!==null&&a!==u;){var z=a,Y=z.alternate,ve=z.stateNode;if(Y!==null&&Y===u)break;z.tag===5&&ve!==null&&(z=ve,d?(Y=En(a,g),Y!=null&&A.unshift(Lo(a,Y,z))):d||(Y=En(a,g),Y!=null&&A.push(Lo(a,Y,z)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var Ov=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function Qh(n){return(typeof n=="string"?n:""+n).replace(Ov,`
`).replace(Bv,"")}function Ha(n,i,a){if(i=Qh(i),Qh(n)!==i&&a)throw Error(t(425))}function Ga(){}var tc=null,nc=null;function ic(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,zv=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(n){return ep.resolve(null).then(n).catch(Vv)}:rc;function Vv(n){setTimeout(function(){throw n})}function sc(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),So(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);So(i)}function pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function tp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Es,Do="__reactProps$"+Es,ki="__reactContainer$"+Es,oc="__reactEvents$"+Es,Hv="__reactListeners$"+Es,Gv="__reactHandles$"+Es;function zr(n){var i=n[Mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ki]||a[Mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=tp(n);n!==null;){if(a=n[Mi])return a;n=tp(n)}return i}n=a,a=n.parentNode}return null}function No(n){return n=n[Mi]||n[ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wa(n){return n[Do]||null}var ac=[],ws=-1;function mr(n){return{current:n}}function Ht(n){0>ws||(n.current=ac[ws],ac[ws]=null,ws--)}function kt(n,i){ws++,ac[ws]=n.current,n.current=i}var gr={},mn=mr(gr),Ln=mr(!1),Vr=gr;function As(n,i){var a=n.type.contextTypes;if(!a)return gr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Dn(n){return n=n.childContextTypes,n!=null}function Xa(){Ht(Ln),Ht(mn)}function np(n,i,a){if(mn.current!==gr)throw Error(t(168));kt(mn,i),kt(Ln,a)}function ip(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,L(n)||"Unknown",d));return fe({},a,u)}function qa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Vr=mn.current,kt(mn,n),kt(Ln,Ln.current),!0}function rp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=ip(n,i,Vr),u.__reactInternalMemoizedMergedChildContext=n,Ht(Ln),Ht(mn),kt(mn,n)):Ht(Ln),kt(Ln,a)}var zi=null,Ya=!1,lc=!1;function sp(n){zi===null?zi=[n]:zi.push(n)}function Wv(n){Ya=!0,sp(n)}function vr(){if(!lc&&zi!==null){lc=!0;var n=0,i=gt;try{var a=zi;for(gt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}zi=null,Ya=!1}catch(d){throw zi!==null&&(zi=zi.slice(n+1)),Ca(_e,vr),d}finally{gt=i,lc=!1}}return null}var Cs=[],bs=0,ja=null,$a=0,ei=[],ti=0,Hr=null,Vi=1,Hi="";function Gr(n,i){Cs[bs++]=$a,Cs[bs++]=ja,ja=n,$a=i}function op(n,i,a){ei[ti++]=Vi,ei[ti++]=Hi,ei[ti++]=Hr,Hr=n;var u=Vi;n=Hi;var d=32-ct(u)-1;u&=~(1<<d),a+=1;var g=32-ct(i)+d;if(30<g){var A=d-d%5;g=(u&(1<<A)-1).toString(32),u>>=A,d-=A,Vi=1<<32-ct(i)+d|a<<d|u,Hi=g+n}else Vi=1<<g|a<<d|u,Hi=n}function uc(n){n.return!==null&&(Gr(n,1),op(n,1,0))}function cc(n){for(;n===ja;)ja=Cs[--bs],Cs[bs]=null,$a=Cs[--bs],Cs[bs]=null;for(;n===Hr;)Hr=ei[--ti],ei[ti]=null,Hi=ei[--ti],ei[ti]=null,Vi=ei[--ti],ei[ti]=null}var Vn=null,Hn=null,Gt=!1,ui=null;function ap(n,i){var a=si(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function lp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Hn=pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hr!==null?{id:Vi,overflow:Hi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=si(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Vn=n,Hn=null,!0):!1;default:return!1}}function fc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function dc(n){if(Gt){var i=Hn;if(i){var a=i;if(!lp(n,i)){if(fc(n))throw Error(t(418));i=pr(a.nextSibling);var u=Vn;i&&lp(n,i)?ap(u,a):(n.flags=n.flags&-4097|2,Gt=!1,Vn=n)}}else{if(fc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,Vn=n}}}function up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Za(n){if(n!==Vn)return!1;if(!Gt)return up(n),Gt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!ic(n.type,n.memoizedProps)),i&&(i=Hn)){if(fc(n))throw cp(),Error(t(418));for(;i;)ap(n,i),i=pr(i.nextSibling)}if(up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Hn=pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Hn=null}}else Hn=Vn?pr(n.stateNode.nextSibling):null;return!0}function cp(){for(var n=Hn;n;)n=pr(n.nextSibling)}function Rs(){Hn=Vn=null,Gt=!1}function hc(n){ui===null?ui=[n]:ui.push(n)}var Xv=P.ReactCurrentBatchConfig;function Io(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(A){var z=d.refs;A===null?delete z[g]:z[g]=A},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ka(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function fp(n){var i=n._init;return i(n._payload)}function dp(n){function i(ue,Q){if(n){var he=ue.deletions;he===null?(ue.deletions=[Q],ue.flags|=16):he.push(Q)}}function a(ue,Q){if(!n)return null;for(;Q!==null;)i(ue,Q),Q=Q.sibling;return null}function u(ue,Q){for(ue=new Map;Q!==null;)Q.key!==null?ue.set(Q.key,Q):ue.set(Q.index,Q),Q=Q.sibling;return ue}function d(ue,Q){return ue=wr(ue,Q),ue.index=0,ue.sibling=null,ue}function g(ue,Q,he){return ue.index=he,n?(he=ue.alternate,he!==null?(he=he.index,he<Q?(ue.flags|=2,Q):he):(ue.flags|=2,Q)):(ue.flags|=1048576,Q)}function A(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function z(ue,Q,he,Be){return Q===null||Q.tag!==6?(Q=sf(he,ue.mode,Be),Q.return=ue,Q):(Q=d(Q,he),Q.return=ue,Q)}function Y(ue,Q,he,Be){var ot=he.type;return ot===B?Le(ue,Q,he.props.children,Be,he.key):Q!==null&&(Q.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===re&&fp(ot)===Q.type)?(Be=d(Q,he.props),Be.ref=Io(ue,Q,he),Be.return=ue,Be):(Be=Sl(he.type,he.key,he.props,null,ue.mode,Be),Be.ref=Io(ue,Q,he),Be.return=ue,Be)}function ve(ue,Q,he,Be){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==he.containerInfo||Q.stateNode.implementation!==he.implementation?(Q=of(he,ue.mode,Be),Q.return=ue,Q):(Q=d(Q,he.children||[]),Q.return=ue,Q)}function Le(ue,Q,he,Be,ot){return Q===null||Q.tag!==7?(Q=Kr(he,ue.mode,Be,ot),Q.return=ue,Q):(Q=d(Q,he),Q.return=ue,Q)}function Ie(ue,Q,he){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=sf(""+Q,ue.mode,he),Q.return=ue,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case O:return he=Sl(Q.type,Q.key,Q.props,null,ue.mode,he),he.ref=Io(ue,null,Q),he.return=ue,he;case F:return Q=of(Q,ue.mode,he),Q.return=ue,Q;case re:var Be=Q._init;return Ie(ue,Be(Q._payload),he)}if(be(Q)||le(Q))return Q=Kr(Q,ue.mode,he,null),Q.return=ue,Q;Ka(ue,Q)}return null}function Re(ue,Q,he,Be){var ot=Q!==null?Q.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return ot!==null?null:z(ue,Q,""+he,Be);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case O:return he.key===ot?Y(ue,Q,he,Be):null;case F:return he.key===ot?ve(ue,Q,he,Be):null;case re:return ot=he._init,Re(ue,Q,ot(he._payload),Be)}if(be(he)||le(he))return ot!==null?null:Le(ue,Q,he,Be,null);Ka(ue,he)}return null}function Je(ue,Q,he,Be,ot){if(typeof Be=="string"&&Be!==""||typeof Be=="number")return ue=ue.get(he)||null,z(Q,ue,""+Be,ot);if(typeof Be=="object"&&Be!==null){switch(Be.$$typeof){case O:return ue=ue.get(Be.key===null?he:Be.key)||null,Y(Q,ue,Be,ot);case F:return ue=ue.get(Be.key===null?he:Be.key)||null,ve(Q,ue,Be,ot);case re:var ft=Be._init;return Je(ue,Q,he,ft(Be._payload),ot)}if(be(Be)||le(Be))return ue=ue.get(he)||null,Le(Q,ue,Be,ot,null);Ka(Q,Be)}return null}function it(ue,Q,he,Be){for(var ot=null,ft=null,dt=Q,vt=Q=0,un=null;dt!==null&&vt<he.length;vt++){dt.index>vt?(un=dt,dt=null):un=dt.sibling;var Pt=Re(ue,dt,he[vt],Be);if(Pt===null){dt===null&&(dt=un);break}n&&dt&&Pt.alternate===null&&i(ue,dt),Q=g(Pt,Q,vt),ft===null?ot=Pt:ft.sibling=Pt,ft=Pt,dt=un}if(vt===he.length)return a(ue,dt),Gt&&Gr(ue,vt),ot;if(dt===null){for(;vt<he.length;vt++)dt=Ie(ue,he[vt],Be),dt!==null&&(Q=g(dt,Q,vt),ft===null?ot=dt:ft.sibling=dt,ft=dt);return Gt&&Gr(ue,vt),ot}for(dt=u(ue,dt);vt<he.length;vt++)un=Je(dt,ue,vt,he[vt],Be),un!==null&&(n&&un.alternate!==null&&dt.delete(un.key===null?vt:un.key),Q=g(un,Q,vt),ft===null?ot=un:ft.sibling=un,ft=un);return n&&dt.forEach(function(Ar){return i(ue,Ar)}),Gt&&Gr(ue,vt),ot}function rt(ue,Q,he,Be){var ot=le(he);if(typeof ot!="function")throw Error(t(150));if(he=ot.call(he),he==null)throw Error(t(151));for(var ft=ot=null,dt=Q,vt=Q=0,un=null,Pt=he.next();dt!==null&&!Pt.done;vt++,Pt=he.next()){dt.index>vt?(un=dt,dt=null):un=dt.sibling;var Ar=Re(ue,dt,Pt.value,Be);if(Ar===null){dt===null&&(dt=un);break}n&&dt&&Ar.alternate===null&&i(ue,dt),Q=g(Ar,Q,vt),ft===null?ot=Ar:ft.sibling=Ar,ft=Ar,dt=un}if(Pt.done)return a(ue,dt),Gt&&Gr(ue,vt),ot;if(dt===null){for(;!Pt.done;vt++,Pt=he.next())Pt=Ie(ue,Pt.value,Be),Pt!==null&&(Q=g(Pt,Q,vt),ft===null?ot=Pt:ft.sibling=Pt,ft=Pt);return Gt&&Gr(ue,vt),ot}for(dt=u(ue,dt);!Pt.done;vt++,Pt=he.next())Pt=Je(dt,ue,vt,Pt.value,Be),Pt!==null&&(n&&Pt.alternate!==null&&dt.delete(Pt.key===null?vt:Pt.key),Q=g(Pt,Q,vt),ft===null?ot=Pt:ft.sibling=Pt,ft=Pt);return n&&dt.forEach(function(T_){return i(ue,T_)}),Gt&&Gr(ue,vt),ot}function Kt(ue,Q,he,Be){if(typeof he=="object"&&he!==null&&he.type===B&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case O:e:{for(var ot=he.key,ft=Q;ft!==null;){if(ft.key===ot){if(ot=he.type,ot===B){if(ft.tag===7){a(ue,ft.sibling),Q=d(ft,he.props.children),Q.return=ue,ue=Q;break e}}else if(ft.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===re&&fp(ot)===ft.type){a(ue,ft.sibling),Q=d(ft,he.props),Q.ref=Io(ue,ft,he),Q.return=ue,ue=Q;break e}a(ue,ft);break}else i(ue,ft);ft=ft.sibling}he.type===B?(Q=Kr(he.props.children,ue.mode,Be,he.key),Q.return=ue,ue=Q):(Be=Sl(he.type,he.key,he.props,null,ue.mode,Be),Be.ref=Io(ue,Q,he),Be.return=ue,ue=Be)}return A(ue);case F:e:{for(ft=he.key;Q!==null;){if(Q.key===ft)if(Q.tag===4&&Q.stateNode.containerInfo===he.containerInfo&&Q.stateNode.implementation===he.implementation){a(ue,Q.sibling),Q=d(Q,he.children||[]),Q.return=ue,ue=Q;break e}else{a(ue,Q);break}else i(ue,Q);Q=Q.sibling}Q=of(he,ue.mode,Be),Q.return=ue,ue=Q}return A(ue);case re:return ft=he._init,Kt(ue,Q,ft(he._payload),Be)}if(be(he))return it(ue,Q,he,Be);if(le(he))return rt(ue,Q,he,Be);Ka(ue,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,Q!==null&&Q.tag===6?(a(ue,Q.sibling),Q=d(Q,he),Q.return=ue,ue=Q):(a(ue,Q),Q=sf(he,ue.mode,Be),Q.return=ue,ue=Q),A(ue)):a(ue,Q)}return Kt}var Ps=dp(!0),hp=dp(!1),Ja=mr(null),Qa=null,Ls=null,pc=null;function mc(){pc=Ls=Qa=null}function gc(n){var i=Ja.current;Ht(Ja),n._currentValue=i}function vc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Ds(n,i){Qa=n,pc=Ls=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Nn=!0),n.firstContext=null)}function ni(n){var i=n._currentValue;if(pc!==n)if(n={context:n,memoizedValue:i,next:null},Ls===null){if(Qa===null)throw Error(t(308));Ls=n,Qa.dependencies={lanes:0,firstContext:n}}else Ls=Ls.next=n;return i}var Wr=null;function _c(n){Wr===null?Wr=[n]:Wr.push(n)}function pp(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,_c(i)):(a.next=d.next,d.next=a),i.interleaved=a,Gi(n,u)}function Gi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _r=!1;function xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function xr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(At&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Gi(n,a)}return d=u.interleaved,d===null?(i.next=i,_c(u)):(i.next=d.next,d.next=i),u.interleaved=i,Gi(n,a)}function el(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Dt(n,a)}}function gp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=A:g=g.next=A,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function tl(n,i,a,u){var d=n.updateQueue;_r=!1;var g=d.firstBaseUpdate,A=d.lastBaseUpdate,z=d.shared.pending;if(z!==null){d.shared.pending=null;var Y=z,ve=Y.next;Y.next=null,A===null?g=ve:A.next=ve,A=Y;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,z=Le.lastBaseUpdate,z!==A&&(z===null?Le.firstBaseUpdate=ve:z.next=ve,Le.lastBaseUpdate=Y))}if(g!==null){var Ie=d.baseState;A=0,Le=ve=Y=null,z=g;do{var Re=z.lane,Je=z.eventTime;if((u&Re)===Re){Le!==null&&(Le=Le.next={eventTime:Je,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var it=n,rt=z;switch(Re=i,Je=a,rt.tag){case 1:if(it=rt.payload,typeof it=="function"){Ie=it.call(Je,Ie,Re);break e}Ie=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=rt.payload,Re=typeof it=="function"?it.call(Je,Ie,Re):it,Re==null)break e;Ie=fe({},Ie,Re);break e;case 2:_r=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,Re=d.effects,Re===null?d.effects=[z]:Re.push(z))}else Je={eventTime:Je,lane:Re,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Le===null?(ve=Le=Je,Y=Ie):Le=Le.next=Je,A|=Re;if(z=z.next,z===null){if(z=d.shared.pending,z===null)break;Re=z,z=Re.next,Re.next=null,d.lastBaseUpdate=Re,d.shared.pending=null}}while(!0);if(Le===null&&(Y=Ie),d.baseState=Y,d.firstBaseUpdate=ve,d.lastBaseUpdate=Le,i=d.shared.interleaved,i!==null){d=i;do A|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Yr|=A,n.lanes=A,n.memoizedState=Ie}}function vp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Uo={},Ei=mr(Uo),Fo=mr(Uo),Oo=mr(Uo);function Xr(n){if(n===Uo)throw Error(t(174));return n}function yc(n,i){switch(kt(Oo,i),kt(Fo,n),kt(Ei,Uo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:we(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=we(i,n)}Ht(Ei),kt(Ei,i)}function Ns(){Ht(Ei),Ht(Fo),Ht(Oo)}function _p(n){Xr(Oo.current);var i=Xr(Ei.current),a=we(i,n.type);i!==a&&(kt(Fo,n),kt(Ei,a))}function Sc(n){Fo.current===n&&(Ht(Ei),Ht(Fo))}var Wt=mr(0);function nl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Mc=[];function Ec(){for(var n=0;n<Mc.length;n++)Mc[n]._workInProgressVersionPrimary=null;Mc.length=0}var il=P.ReactCurrentDispatcher,Tc=P.ReactCurrentBatchConfig,qr=0,Xt=null,nn=null,an=null,rl=!1,Bo=!1,ko=0,qv=0;function gn(){throw Error(t(321))}function wc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!li(n[a],i[a]))return!1;return!0}function Ac(n,i,a,u,d,g){if(qr=g,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,il.current=n===null||n.memoizedState===null?Zv:Kv,n=a(u,d),Bo){g=0;do{if(Bo=!1,ko=0,25<=g)throw Error(t(301));g+=1,an=nn=null,i.updateQueue=null,il.current=Jv,n=a(u,d)}while(Bo)}if(il.current=al,i=nn!==null&&nn.next!==null,qr=0,an=nn=Xt=null,rl=!1,i)throw Error(t(300));return n}function Cc(){var n=ko!==0;return ko=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Xt.memoizedState=an=n:an=an.next=n,an}function ii(){if(nn===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var i=an===null?Xt.memoizedState:an.next;if(i!==null)an=i,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},an===null?Xt.memoizedState=an=n:an=an.next=n}return an}function zo(n,i){return typeof i=="function"?i(n):i}function bc(n){var i=ii(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=nn,d=u.baseQueue,g=a.pending;if(g!==null){if(d!==null){var A=d.next;d.next=g.next,g.next=A}u.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,u=u.baseState;var z=A=null,Y=null,ve=g;do{var Le=ve.lane;if((qr&Le)===Le)Y!==null&&(Y=Y.next={lane:0,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),u=ve.hasEagerState?ve.eagerState:n(u,ve.action);else{var Ie={lane:Le,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null};Y===null?(z=Y=Ie,A=u):Y=Y.next=Ie,Xt.lanes|=Le,Yr|=Le}ve=ve.next}while(ve!==null&&ve!==g);Y===null?A=u:Y.next=z,li(u,i.memoizedState)||(Nn=!0),i.memoizedState=u,i.baseState=A,i.baseQueue=Y,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Xt.lanes|=g,Yr|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Rc(n){var i=ii(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var A=d=d.next;do g=n(g,A.action),A=A.next;while(A!==d);li(g,i.memoizedState)||(Nn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function xp(){}function yp(n,i){var a=Xt,u=ii(),d=i(),g=!li(u.memoizedState,d);if(g&&(u.memoizedState=d,Nn=!0),u=u.queue,Pc(Ep.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||an!==null&&an.memoizedState.tag&1){if(a.flags|=2048,Vo(9,Mp.bind(null,a,u,d,i),void 0,null),ln===null)throw Error(t(349));(qr&30)!==0||Sp(a,i,d)}return d}function Sp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Mp(n,i,a,u){i.value=a,i.getSnapshot=u,Tp(i)&&wp(n)}function Ep(n,i,a){return a(function(){Tp(i)&&wp(n)})}function Tp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!li(n,a)}catch{return!0}}function wp(n){var i=Gi(n,1);i!==null&&hi(i,n,1,-1)}function Ap(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},i.queue=n,n=n.dispatch=$v.bind(null,Xt,n),[i.memoizedState,n]}function Vo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Cp(){return ii().memoizedState}function sl(n,i,a,u){var d=Ti();Xt.flags|=n,d.memoizedState=Vo(1|i,a,void 0,u===void 0?null:u)}function ol(n,i,a,u){var d=ii();u=u===void 0?null:u;var g=void 0;if(nn!==null){var A=nn.memoizedState;if(g=A.destroy,u!==null&&wc(u,A.deps)){d.memoizedState=Vo(i,a,g,u);return}}Xt.flags|=n,d.memoizedState=Vo(1|i,a,g,u)}function bp(n,i){return sl(8390656,8,n,i)}function Pc(n,i){return ol(2048,8,n,i)}function Rp(n,i){return ol(4,2,n,i)}function Pp(n,i){return ol(4,4,n,i)}function Lp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Dp(n,i,a){return a=a!=null?a.concat([n]):null,ol(4,4,Lp.bind(null,i,n),a)}function Lc(){}function Np(n,i){var a=ii();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&wc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Ip(n,i){var a=ii();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&wc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Up(n,i,a){return(qr&21)===0?(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=a):(li(a,i)||(a=Rn(),Xt.lanes|=a,Yr|=a,n.baseState=!0),i)}function Yv(n,i){var a=gt;gt=a!==0&&4>a?a:4,n(!0);var u=Tc.transition;Tc.transition={};try{n(!1),i()}finally{gt=a,Tc.transition=u}}function Fp(){return ii().memoizedState}function jv(n,i,a){var u=Er(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Op(n))Bp(i,a);else if(a=pp(n,i,a,u),a!==null){var d=An();hi(a,n,u,d),kp(a,i,u)}}function $v(n,i,a){var u=Er(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Op(n))Bp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var A=i.lastRenderedState,z=g(A,a);if(d.hasEagerState=!0,d.eagerState=z,li(z,A)){var Y=i.interleaved;Y===null?(d.next=d,_c(i)):(d.next=Y.next,Y.next=d),i.interleaved=d;return}}catch{}finally{}a=pp(n,i,d,u),a!==null&&(d=An(),hi(a,n,u,d),kp(a,i,u))}}function Op(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function Bp(n,i){Bo=rl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function kp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Dt(n,a)}}var al={readContext:ni,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},Zv={readContext:ni,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:ni,useEffect:bp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,sl(4194308,4,Lp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return sl(4194308,4,n,i)},useInsertionEffect:function(n,i){return sl(4,2,n,i)},useMemo:function(n,i){var a=Ti();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ti();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=jv.bind(null,Xt,n),[u.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:Ap,useDebugValue:Lc,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=Ap(!1),i=n[0];return n=Yv.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Xt,d=Ti();if(Gt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),ln===null)throw Error(t(349));(qr&30)!==0||Sp(u,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,bp(Ep.bind(null,u,g,n),[n]),u.flags|=2048,Vo(9,Mp.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=Ti(),i=ln.identifierPrefix;if(Gt){var a=Hi,u=Vi;a=(u&~(1<<32-ct(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=ko++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=qv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Kv={readContext:ni,useCallback:Np,useContext:ni,useEffect:Pc,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Ip,useReducer:bc,useRef:Cp,useState:function(){return bc(zo)},useDebugValue:Lc,useDeferredValue:function(n){var i=ii();return Up(i,nn.memoizedState,n)},useTransition:function(){var n=bc(zo)[0],i=ii().memoizedState;return[n,i]},useMutableSource:xp,useSyncExternalStore:yp,useId:Fp,unstable_isNewReconciler:!1},Jv={readContext:ni,useCallback:Np,useContext:ni,useEffect:Pc,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Ip,useReducer:Rc,useRef:Cp,useState:function(){return Rc(zo)},useDebugValue:Lc,useDeferredValue:function(n){var i=ii();return nn===null?i.memoizedState=n:Up(i,nn.memoizedState,n)},useTransition:function(){var n=Rc(zo)[0],i=ii().memoizedState;return[n,i]},useMutableSource:xp,useSyncExternalStore:yp,useId:Fp,unstable_isNewReconciler:!1};function ci(n,i){if(n&&n.defaultProps){i=fe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Dc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:fe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ll={isMounted:function(n){return(n=n._reactInternals)?Si(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=An(),d=Er(n),g=Wi(u,d);g.payload=i,a!=null&&(g.callback=a),i=xr(n,g,d),i!==null&&(hi(i,n,d,u),el(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=An(),d=Er(n),g=Wi(u,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=xr(n,g,d),i!==null&&(hi(i,n,d,u),el(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=An(),u=Er(n),d=Wi(a,u);d.tag=2,i!=null&&(d.callback=i),i=xr(n,d,u),i!==null&&(hi(i,n,u,a),el(i,n,u))}};function zp(n,i,a,u,d,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,A):i.prototype&&i.prototype.isPureReactComponent?!Co(a,u)||!Co(d,g):!0}function Vp(n,i,a){var u=!1,d=gr,g=i.contextType;return typeof g=="object"&&g!==null?g=ni(g):(d=Dn(i)?Vr:mn.current,u=i.contextTypes,g=(u=u!=null)?As(n,d):gr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ll,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Hp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&ll.enqueueReplaceState(i,i.state,null)}function Nc(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},xc(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=ni(g):(g=Dn(i)?Vr:mn.current,d.context=As(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Dc(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ll.enqueueReplaceState(d,d.state,null),tl(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Is(n,i){try{var a="",u=i;do a+=G(u),u=u.return;while(u);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Ic(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Uc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Qv=typeof WeakMap=="function"?WeakMap:Map;function Gp(n,i,a){a=Wi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ml||(ml=!0,Zc=u),Uc(n,i)},a}function Wp(n,i,a){a=Wi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){Uc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Uc(n,i),typeof u!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function Xp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Qv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=h_.bind(null,n,i,a),i.then(n,n))}function qp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Yp(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Wi(-1,1),i.tag=2,xr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var e_=P.ReactCurrentOwner,Nn=!1;function wn(n,i,a,u){i.child=n===null?hp(i,null,a,u):Ps(i,n.child,a,u)}function jp(n,i,a,u,d){a=a.render;var g=i.ref;return Ds(i,d),u=Ac(n,i,a,u,g,d),a=Cc(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Xi(n,i,d)):(Gt&&a&&uc(i),i.flags|=1,wn(n,i,u,d),i.child)}function $p(n,i,a,u,d){if(n===null){var g=a.type;return typeof g=="function"&&!rf(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Zp(n,i,g,u,d)):(n=Sl(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var A=g.memoizedProps;if(a=a.compare,a=a!==null?a:Co,a(A,u)&&n.ref===i.ref)return Xi(n,i,d)}return i.flags|=1,n=wr(g,u),n.ref=i.ref,n.return=i,i.child=n}function Zp(n,i,a,u,d){if(n!==null){var g=n.memoizedProps;if(Co(g,u)&&n.ref===i.ref)if(Nn=!1,i.pendingProps=u=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Nn=!0);else return i.lanes=n.lanes,Xi(n,i,d)}return Fc(n,i,a,u,d)}function Kp(n,i,a){var u=i.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Fs,Gn),Gn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Fs,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,kt(Fs,Gn),Gn|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,kt(Fs,Gn),Gn|=u;return wn(n,i,d,a),i.child}function Jp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Fc(n,i,a,u,d){var g=Dn(a)?Vr:mn.current;return g=As(i,g),Ds(i,d),a=Ac(n,i,a,u,g,d),u=Cc(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Xi(n,i,d)):(Gt&&u&&uc(i),i.flags|=1,wn(n,i,a,d),i.child)}function Qp(n,i,a,u,d){if(Dn(a)){var g=!0;qa(i)}else g=!1;if(Ds(i,d),i.stateNode===null)cl(n,i),Vp(i,a,u),Nc(i,a,u,d),u=!0;else if(n===null){var A=i.stateNode,z=i.memoizedProps;A.props=z;var Y=A.context,ve=a.contextType;typeof ve=="object"&&ve!==null?ve=ni(ve):(ve=Dn(a)?Vr:mn.current,ve=As(i,ve));var Le=a.getDerivedStateFromProps,Ie=typeof Le=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ie||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==u||Y!==ve)&&Hp(i,A,u,ve),_r=!1;var Re=i.memoizedState;A.state=Re,tl(i,u,A,d),Y=i.memoizedState,z!==u||Re!==Y||Ln.current||_r?(typeof Le=="function"&&(Dc(i,a,Le,u),Y=i.memoizedState),(z=_r||zp(i,a,z,u,Re,Y,ve))?(Ie||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Y),A.props=u,A.state=Y,A.context=ve,u=z):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{A=i.stateNode,mp(n,i),z=i.memoizedProps,ve=i.type===i.elementType?z:ci(i.type,z),A.props=ve,Ie=i.pendingProps,Re=A.context,Y=a.contextType,typeof Y=="object"&&Y!==null?Y=ni(Y):(Y=Dn(a)?Vr:mn.current,Y=As(i,Y));var Je=a.getDerivedStateFromProps;(Le=typeof Je=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Ie||Re!==Y)&&Hp(i,A,u,Y),_r=!1,Re=i.memoizedState,A.state=Re,tl(i,u,A,d);var it=i.memoizedState;z!==Ie||Re!==it||Ln.current||_r?(typeof Je=="function"&&(Dc(i,a,Je,u),it=i.memoizedState),(ve=_r||zp(i,a,ve,u,Re,it,Y)||!1)?(Le||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,it,Y),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,it,Y)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=it),A.props=u,A.state=it,A.context=Y,u=ve):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),u=!1)}return Oc(n,i,a,u,g,d)}function Oc(n,i,a,u,d,g){Jp(n,i);var A=(i.flags&128)!==0;if(!u&&!A)return d&&rp(i,a,!1),Xi(n,i,g);u=i.stateNode,e_.current=i;var z=A&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&A?(i.child=Ps(i,n.child,null,g),i.child=Ps(i,null,z,g)):wn(n,i,z,g),i.memoizedState=u.state,d&&rp(i,a,!0),i.child}function em(n){var i=n.stateNode;i.pendingContext?np(n,i.pendingContext,i.pendingContext!==i.context):i.context&&np(n,i.context,!1),yc(n,i.containerInfo)}function tm(n,i,a,u,d){return Rs(),hc(d),i.flags|=256,wn(n,i,a,u),i.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function kc(n){return{baseLanes:n,cachePool:null,transitions:null}}function nm(n,i,a){var u=i.pendingProps,d=Wt.current,g=!1,A=(i.flags&128)!==0,z;if((z=A)||(z=n!==null&&n.memoizedState===null?!1:(d&2)!==0),z?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Wt,d&1),n===null)return dc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=u.children,n=u.fallback,g?(u=i.mode,g=i.child,A={mode:"hidden",children:A},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=Ml(A,u,0,null),n=Kr(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=kc(a),i.memoizedState=Bc,n):zc(i,A));if(d=n.memoizedState,d!==null&&(z=d.dehydrated,z!==null))return t_(n,i,A,u,z,d,a);if(g){g=u.fallback,A=i.mode,d=n.child,z=d.sibling;var Y={mode:"hidden",children:u.children};return(A&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=Y,i.deletions=null):(u=wr(d,Y),u.subtreeFlags=d.subtreeFlags&14680064),z!==null?g=wr(z,g):(g=Kr(g,A,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,A=n.child.memoizedState,A=A===null?kc(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~a,i.memoizedState=Bc,u}return g=n.child,n=g.sibling,u=wr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function zc(n,i){return i=Ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ul(n,i,a,u){return u!==null&&hc(u),Ps(i,n.child,null,a),n=zc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function t_(n,i,a,u,d,g,A){if(a)return i.flags&256?(i.flags&=-257,u=Ic(Error(t(422))),ul(n,i,A,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,d=i.mode,u=Ml({mode:"visible",children:u.children},d,0,null),g=Kr(g,d,A,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Ps(i,n.child,null,A),i.child.memoizedState=kc(A),i.memoizedState=Bc,g);if((i.mode&1)===0)return ul(n,i,A,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var z=u.dgst;return u=z,g=Error(t(419)),u=Ic(g,u,void 0),ul(n,i,A,u)}if(z=(A&n.childLanes)!==0,Nn||z){if(u=ln,u!==null){switch(A&-A){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|A))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Gi(n,d),hi(u,n,d,-1))}return nf(),u=Ic(Error(t(421))),ul(n,i,A,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=p_.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Hn=pr(d.nextSibling),Vn=i,Gt=!0,ui=null,n!==null&&(ei[ti++]=Vi,ei[ti++]=Hi,ei[ti++]=Hr,Vi=n.id,Hi=n.overflow,Hr=i),i=zc(i,u.children),i.flags|=4096,i)}function im(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),vc(n.return,i,a)}function Vc(n,i,a,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=d)}function rm(n,i,a){var u=i.pendingProps,d=u.revealOrder,g=u.tail;if(wn(n,i,u.children,a),u=Wt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&im(n,a,i);else if(n.tag===19)im(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(Wt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&nl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Vc(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&nl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Vc(i,!0,a,null,g);break;case"together":Vc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function cl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Xi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Yr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=wr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=wr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function n_(n,i,a){switch(i.tag){case 3:em(i),Rs();break;case 5:_p(i);break;case 1:Dn(i.type)&&qa(i);break;case 4:yc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;kt(Ja,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?nm(n,i,a):(kt(Wt,Wt.current&1),n=Xi(n,i,a),n!==null?n.sibling:null);kt(Wt,Wt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return rm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Wt,Wt.current),u)break;return null;case 22:case 23:return i.lanes=0,Kp(n,i,a)}return Xi(n,i,a)}var sm,Hc,om,am;sm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Hc=function(){},om=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Xr(Ei.current);var g=null;switch(a){case"input":d=pe(n,d),u=pe(n,u),g=[];break;case"select":d=fe({},d,{value:void 0}),u=fe({},u,{value:void 0}),g=[];break;case"textarea":d=Ve(n,d),u=Ve(n,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ga)}et(a,u);var A;a=null;for(ve in d)if(!u.hasOwnProperty(ve)&&d.hasOwnProperty(ve)&&d[ve]!=null)if(ve==="style"){var z=d[ve];for(A in z)z.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else ve!=="dangerouslySetInnerHTML"&&ve!=="children"&&ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&ve!=="autoFocus"&&(o.hasOwnProperty(ve)?g||(g=[]):(g=g||[]).push(ve,null));for(ve in u){var Y=u[ve];if(z=d!=null?d[ve]:void 0,u.hasOwnProperty(ve)&&Y!==z&&(Y!=null||z!=null))if(ve==="style")if(z){for(A in z)!z.hasOwnProperty(A)||Y&&Y.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in Y)Y.hasOwnProperty(A)&&z[A]!==Y[A]&&(a||(a={}),a[A]=Y[A])}else a||(g||(g=[]),g.push(ve,a)),a=Y;else ve==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,z=z?z.__html:void 0,Y!=null&&z!==Y&&(g=g||[]).push(ve,Y)):ve==="children"?typeof Y!="string"&&typeof Y!="number"||(g=g||[]).push(ve,""+Y):ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&(o.hasOwnProperty(ve)?(Y!=null&&ve==="onScroll"&&Vt("scroll",n),g||z===Y||(g=[])):(g=g||[]).push(ve,Y))}a&&(g=g||[]).push("style",a);var ve=g;(i.updateQueue=ve)&&(i.flags|=4)}},am=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ho(n,i){if(!Gt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function i_(n,i,a){var u=i.pendingProps;switch(cc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Dn(i.type)&&Xa(),vn(i),null;case 3:return u=i.stateNode,Ns(),Ht(Ln),Ht(mn),Ec(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Za(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(Qc(ui),ui=null))),Hc(n,i),vn(i),null;case 5:Sc(i);var d=Xr(Oo.current);if(a=i.type,n!==null&&i.stateNode!=null)om(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Xr(Ei.current),Za(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[Mi]=i,u[Do]=g,n=(i.mode&1)!==0,a){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(d=0;d<Ro.length;d++)Vt(Ro[d],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":ge(u,g),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Vt("invalid",u);break;case"textarea":U(u,g),Vt("invalid",u)}et(a,g),d=null;for(var A in g)if(g.hasOwnProperty(A)){var z=g[A];A==="children"?typeof z=="string"?u.textContent!==z&&(g.suppressHydrationWarning!==!0&&Ha(u.textContent,z,n),d=["children",z]):typeof z=="number"&&u.textContent!==""+z&&(g.suppressHydrationWarning!==!0&&Ha(u.textContent,z,n),d=["children",""+z]):o.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&Vt("scroll",u)}switch(a){case"input":oe(u),R(u,g,!0);break;case"textarea":oe(u),Z(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Ga)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{A=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Me(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(a,{is:u.is}):(n=A.createElement(a),a==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,a),n[Mi]=i,n[Do]=u,sm(n,i,!1,!1),i.stateNode=n;e:{switch(A=Ye(a,u),a){case"dialog":Vt("cancel",n),Vt("close",n),d=u;break;case"iframe":case"object":case"embed":Vt("load",n),d=u;break;case"video":case"audio":for(d=0;d<Ro.length;d++)Vt(Ro[d],n);d=u;break;case"source":Vt("error",n),d=u;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),d=u;break;case"details":Vt("toggle",n),d=u;break;case"input":ge(n,u),d=pe(n,u),Vt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=fe({},u,{value:void 0}),Vt("invalid",n);break;case"textarea":U(n,u),d=Ve(n,u),Vt("invalid",n);break;default:d=u}et(a,d),z=d;for(g in z)if(z.hasOwnProperty(g)){var Y=z[g];g==="style"?De(n,Y):g==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&Ze(n,Y)):g==="children"?typeof Y=="string"?(a!=="textarea"||Y!=="")&&Ue(n,Y):typeof Y=="number"&&Ue(n,""+Y):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?Y!=null&&g==="onScroll"&&Vt("scroll",n):Y!=null&&b(n,g,Y,A))}switch(a){case"input":oe(n),R(n,u,!1);break;case"textarea":oe(n),Z(n);break;case"option":u.value!=null&&n.setAttribute("value",""+q(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?Ge(n,!!u.multiple,g,!1):u.defaultValue!=null&&Ge(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ga)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)am(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Xr(Oo.current),Xr(Ei.current),Za(i)){if(u=i.stateNode,a=i.memoizedProps,u[Mi]=i,(g=u.nodeValue!==a)&&(n=Vn,n!==null))switch(n.tag){case 3:Ha(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ha(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Mi]=i,i.stateNode=u}return vn(i),null;case 13:if(Ht(Wt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)cp(),Rs(),i.flags|=98560,g=!1;else if(g=Za(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Mi]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),g=!1}else ui!==null&&(Qc(ui),ui=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?rn===0&&(rn=3):nf())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Ns(),Hc(n,i),n===null&&Po(i.stateNode.containerInfo),vn(i),null;case 10:return gc(i.type._context),vn(i),null;case 17:return Dn(i.type)&&Xa(),vn(i),null;case 19:if(Ht(Wt),g=i.memoizedState,g===null)return vn(i),null;if(u=(i.flags&128)!==0,A=g.rendering,A===null)if(u)Ho(g,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=nl(n),A!==null){for(i.flags|=128,Ho(g,!1),u=A.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Wt,Wt.current&1|2),i.child}n=n.sibling}g.tail!==null&&N()>Os&&(i.flags|=128,u=!0,Ho(g,!1),i.lanes=4194304)}else{if(!u)if(n=nl(A),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ho(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!Gt)return vn(i),null}else 2*N()-g.renderingStartTime>Os&&a!==1073741824&&(i.flags|=128,u=!0,Ho(g,!1),i.lanes=4194304);g.isBackwards?(A.sibling=i.child,i.child=A):(a=g.last,a!==null?a.sibling=A:i.child=A,g.last=A)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=N(),i.sibling=null,a=Wt.current,kt(Wt,u?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return tf(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function r_(n,i){switch(cc(i),i.tag){case 1:return Dn(i.type)&&Xa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ns(),Ht(Ln),Ht(mn),Ec(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Sc(i),null;case 13:if(Ht(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Rs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ht(Wt),null;case 4:return Ns(),null;case 10:return gc(i.type._context),null;case 22:case 23:return tf(),null;case 24:return null;default:return null}}var fl=!1,_n=!1,s_=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Us(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Yt(n,i,u)}else a.current=null}function Gc(n,i,a){try{a()}catch(u){Yt(n,i,u)}}var lm=!1;function o_(n,i){if(tc=La,n=zh(),Yu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var A=0,z=-1,Y=-1,ve=0,Le=0,Ie=n,Re=null;t:for(;;){for(var Je;Ie!==a||d!==0&&Ie.nodeType!==3||(z=A+d),Ie!==g||u!==0&&Ie.nodeType!==3||(Y=A+u),Ie.nodeType===3&&(A+=Ie.nodeValue.length),(Je=Ie.firstChild)!==null;)Re=Ie,Ie=Je;for(;;){if(Ie===n)break t;if(Re===a&&++ve===d&&(z=A),Re===g&&++Le===u&&(Y=A),(Je=Ie.nextSibling)!==null)break;Ie=Re,Re=Ie.parentNode}Ie=Je}a=z===-1||Y===-1?null:{start:z,end:Y}}else a=null}a=a||{start:0,end:0}}else a=null;for(nc={focusedElem:n,selectionRange:a},La=!1,tt=i;tt!==null;)if(i=tt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,tt=n;else for(;tt!==null;){i=tt;try{var it=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var rt=it.memoizedProps,Kt=it.memoizedState,ue=i.stateNode,Q=ue.getSnapshotBeforeUpdate(i.elementType===i.type?rt:ci(i.type,rt),Kt);ue.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Be){Yt(i,i.return,Be)}if(n=i.sibling,n!==null){n.return=i.return,tt=n;break}tt=i.return}return it=lm,lm=!1,it}function Go(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Gc(i,a,g)}d=d.next}while(d!==u)}}function dl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Wc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function um(n){var i=n.alternate;i!==null&&(n.alternate=null,um(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[Do],delete i[oc],delete i[Hv],delete i[Gv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cm(n){return n.tag===5||n.tag===3||n.tag===4}function fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Xc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ga));else if(u!==4&&(n=n.child,n!==null))for(Xc(n,i,a),n=n.sibling;n!==null;)Xc(n,i,a),n=n.sibling}function qc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(qc(n,i,a),n=n.sibling;n!==null;)qc(n,i,a),n=n.sibling}var fn=null,fi=!1;function yr(n,i,a){for(a=a.child;a!==null;)dm(n,i,a),a=a.sibling}function dm(n,i,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(We,a)}catch{}switch(a.tag){case 5:_n||Us(a,i);case 6:var u=fn,d=fi;fn=null,yr(n,i,a),fn=u,fi=d,fn!==null&&(fi?(n=fn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(fi?(n=fn,a=a.stateNode,n.nodeType===8?sc(n.parentNode,a):n.nodeType===1&&sc(n,a),So(n)):sc(fn,a.stateNode));break;case 4:u=fn,d=fi,fn=a.stateNode.containerInfo,fi=!0,yr(n,i,a),fn=u,fi=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var g=d,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&Gc(a,i,A),d=d.next}while(d!==u)}yr(n,i,a);break;case 1:if(!_n&&(Us(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(z){Yt(a,i,z)}yr(n,i,a);break;case 21:yr(n,i,a);break;case 22:a.mode&1?(_n=(u=_n)||a.memoizedState!==null,yr(n,i,a),_n=u):yr(n,i,a);break;default:yr(n,i,a)}}function hm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new s_),i.forEach(function(u){var d=m_.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function di(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var g=n,A=i,z=A;e:for(;z!==null;){switch(z.tag){case 5:fn=z.stateNode,fi=!1;break e;case 3:fn=z.stateNode.containerInfo,fi=!0;break e;case 4:fn=z.stateNode.containerInfo,fi=!0;break e}z=z.return}if(fn===null)throw Error(t(160));dm(g,A,d),fn=null,fi=!1;var Y=d.alternate;Y!==null&&(Y.return=null),d.return=null}catch(ve){Yt(d,i,ve)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pm(i,n),i=i.sibling}function pm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(i,n),wi(n),u&4){try{Go(3,n,n.return),dl(3,n)}catch(rt){Yt(n,n.return,rt)}try{Go(5,n,n.return)}catch(rt){Yt(n,n.return,rt)}}break;case 1:di(i,n),wi(n),u&512&&a!==null&&Us(a,a.return);break;case 5:if(di(i,n),wi(n),u&512&&a!==null&&Us(a,a.return),n.flags&32){var d=n.stateNode;try{Ue(d,"")}catch(rt){Yt(n,n.return,rt)}}if(u&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,A=a!==null?a.memoizedProps:g,z=n.type,Y=n.updateQueue;if(n.updateQueue=null,Y!==null)try{z==="input"&&g.type==="radio"&&g.name!=null&&ye(d,g),Ye(z,A);var ve=Ye(z,g);for(A=0;A<Y.length;A+=2){var Le=Y[A],Ie=Y[A+1];Le==="style"?De(d,Ie):Le==="dangerouslySetInnerHTML"?Ze(d,Ie):Le==="children"?Ue(d,Ie):b(d,Le,Ie,ve)}switch(z){case"input":Ce(d,g);break;case"textarea":E(d,g);break;case"select":var Re=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Je=g.value;Je!=null?Ge(d,!!g.multiple,Je,!1):Re!==!!g.multiple&&(g.defaultValue!=null?Ge(d,!!g.multiple,g.defaultValue,!0):Ge(d,!!g.multiple,g.multiple?[]:"",!1))}d[Do]=g}catch(rt){Yt(n,n.return,rt)}}break;case 6:if(di(i,n),wi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(rt){Yt(n,n.return,rt)}}break;case 3:if(di(i,n),wi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{So(i.containerInfo)}catch(rt){Yt(n,n.return,rt)}break;case 4:di(i,n),wi(n);break;case 13:di(i,n),wi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||($c=N())),u&4&&hm(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(_n=(ve=_n)||Le,di(i,n),_n=ve):di(i,n),wi(n),u&8192){if(ve=n.memoizedState!==null,(n.stateNode.isHidden=ve)&&!Le&&(n.mode&1)!==0)for(tt=n,Le=n.child;Le!==null;){for(Ie=tt=Le;tt!==null;){switch(Re=tt,Je=Re.child,Re.tag){case 0:case 11:case 14:case 15:Go(4,Re,Re.return);break;case 1:Us(Re,Re.return);var it=Re.stateNode;if(typeof it.componentWillUnmount=="function"){u=Re,a=Re.return;try{i=u,it.props=i.memoizedProps,it.state=i.memoizedState,it.componentWillUnmount()}catch(rt){Yt(u,a,rt)}}break;case 5:Us(Re,Re.return);break;case 22:if(Re.memoizedState!==null){vm(Ie);continue}}Je!==null?(Je.return=Re,tt=Je):vm(Ie)}Le=Le.sibling}e:for(Le=null,Ie=n;;){if(Ie.tag===5){if(Le===null){Le=Ie;try{d=Ie.stateNode,ve?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(z=Ie.stateNode,Y=Ie.memoizedProps.style,A=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,z.style.display=Pe("display",A))}catch(rt){Yt(n,n.return,rt)}}}else if(Ie.tag===6){if(Le===null)try{Ie.stateNode.nodeValue=ve?"":Ie.memoizedProps}catch(rt){Yt(n,n.return,rt)}}else if((Ie.tag!==22&&Ie.tag!==23||Ie.memoizedState===null||Ie===n)&&Ie.child!==null){Ie.child.return=Ie,Ie=Ie.child;continue}if(Ie===n)break e;for(;Ie.sibling===null;){if(Ie.return===null||Ie.return===n)break e;Le===Ie&&(Le=null),Ie=Ie.return}Le===Ie&&(Le=null),Ie.sibling.return=Ie.return,Ie=Ie.sibling}}break;case 19:di(i,n),wi(n),u&4&&hm(n);break;case 21:break;default:di(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(cm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ue(d,""),u.flags&=-33);var g=fm(n);qc(n,g,d);break;case 3:case 4:var A=u.stateNode.containerInfo,z=fm(n);Xc(n,z,A);break;default:throw Error(t(161))}}catch(Y){Yt(n,n.return,Y)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function a_(n,i,a){tt=n,mm(n)}function mm(n,i,a){for(var u=(n.mode&1)!==0;tt!==null;){var d=tt,g=d.child;if(d.tag===22&&u){var A=d.memoizedState!==null||fl;if(!A){var z=d.alternate,Y=z!==null&&z.memoizedState!==null||_n;z=fl;var ve=_n;if(fl=A,(_n=Y)&&!ve)for(tt=d;tt!==null;)A=tt,Y=A.child,A.tag===22&&A.memoizedState!==null?_m(d):Y!==null?(Y.return=A,tt=Y):_m(d);for(;g!==null;)tt=g,mm(g),g=g.sibling;tt=d,fl=z,_n=ve}gm(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,tt=g):gm(n)}}function gm(n){for(;tt!==null;){var i=tt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||dl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&vp(i,g,u);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}vp(i,A,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var Y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&a.focus();break;case"img":Y.src&&(a.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ve=i.alternate;if(ve!==null){var Le=ve.memoizedState;if(Le!==null){var Ie=Le.dehydrated;Ie!==null&&So(Ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&Wc(i)}catch(Re){Yt(i,i.return,Re)}}if(i===n){tt=null;break}if(a=i.sibling,a!==null){a.return=i.return,tt=a;break}tt=i.return}}function vm(n){for(;tt!==null;){var i=tt;if(i===n){tt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,tt=a;break}tt=i.return}}function _m(n){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{dl(4,i)}catch(Y){Yt(i,a,Y)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(Y){Yt(i,d,Y)}}var g=i.return;try{Wc(i)}catch(Y){Yt(i,g,Y)}break;case 5:var A=i.return;try{Wc(i)}catch(Y){Yt(i,A,Y)}}}catch(Y){Yt(i,i.return,Y)}if(i===n){tt=null;break}var z=i.sibling;if(z!==null){z.return=i.return,tt=z;break}tt=i.return}}var l_=Math.ceil,hl=P.ReactCurrentDispatcher,Yc=P.ReactCurrentOwner,ri=P.ReactCurrentBatchConfig,At=0,ln=null,Qt=null,dn=0,Gn=0,Fs=mr(0),rn=0,Wo=null,Yr=0,pl=0,jc=0,Xo=null,In=null,$c=0,Os=1/0,qi=null,ml=!1,Zc=null,Sr=null,gl=!1,Mr=null,vl=0,qo=0,Kc=null,_l=-1,xl=0;function An(){return(At&6)!==0?N():_l!==-1?_l:_l=N()}function Er(n){return(n.mode&1)===0?1:(At&2)!==0&&dn!==0?dn&-dn:Xv.transition!==null?(xl===0&&(xl=Rn()),xl):(n=gt,n!==0||(n=window.event,n=n===void 0?16:yh(n.type)),n)}function hi(n,i,a,u){if(50<qo)throw qo=0,Kc=null,Error(t(185));kn(n,a,u),((At&2)===0||n!==ln)&&(n===ln&&((At&2)===0&&(pl|=a),rn===4&&Tr(n,dn)),Un(n,u),a===1&&At===0&&(i.mode&1)===0&&(Os=N()+500,Ya&&vr()))}function Un(n,i){var a=n.callbackNode;Tn(n,i);var u=$t(n,n===ln?dn:0);if(u===0)a!==null&&ba(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&ba(a),i===1)n.tag===0?Wv(ym.bind(null,n)):sp(ym.bind(null,n)),zv(function(){(At&6)===0&&vr()}),a=null;else{switch(ai(u)){case 1:a=_e;break;case 4:a=me;break;case 16:a=de;break;case 536870912:a=Qe;break;default:a=de}a=bm(a,xm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function xm(n,i){if(_l=-1,xl=0,(At&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Bs()&&n.callbackNode!==a)return null;var u=$t(n,n===ln?dn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=yl(n,u);else{i=u;var d=At;At|=2;var g=Mm();(ln!==n||dn!==i)&&(qi=null,Os=N()+500,$r(n,i));do try{f_();break}catch(z){Sm(n,z)}while(!0);mc(),hl.current=g,At=d,Qt!==null?i=0:(ln=null,dn=0,i=rn)}if(i!==0){if(i===2&&(d=Et(n),d!==0&&(u=d,i=Jc(n,d))),i===1)throw a=Wo,$r(n,0),Tr(n,u),Un(n,N()),a;if(i===6)Tr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!u_(d)&&(i=yl(n,u),i===2&&(g=Et(n),g!==0&&(u=g,i=Jc(n,g))),i===1))throw a=Wo,$r(n,0),Tr(n,u),Un(n,N()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Zr(n,In,qi);break;case 3:if(Tr(n,u),(u&130023424)===u&&(i=$c+500-N(),10<i)){if($t(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){An(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=rc(Zr.bind(null,n,In,qi),i);break}Zr(n,In,qi);break;case 4:if(Tr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var A=31-ct(u);g=1<<A,A=i[A],A>d&&(d=A),u&=~g}if(u=d,u=N()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*l_(u/1960))-u,10<u){n.timeoutHandle=rc(Zr.bind(null,n,In,qi),u);break}Zr(n,In,qi);break;case 5:Zr(n,In,qi);break;default:throw Error(t(329))}}}return Un(n,N()),n.callbackNode===a?xm.bind(null,n):null}function Jc(n,i){var a=Xo;return n.current.memoizedState.isDehydrated&&($r(n,i).flags|=256),n=yl(n,i),n!==2&&(i=In,In=a,i!==null&&Qc(i)),n}function Qc(n){In===null?In=n:In.push.apply(In,n)}function u_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],g=d.getSnapshot;d=d.value;try{if(!li(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(n,i){for(i&=~jc,i&=~pl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ct(i),u=1<<a;n[a]=-1,i&=~u}}function ym(n){if((At&6)!==0)throw Error(t(327));Bs();var i=$t(n,0);if((i&1)===0)return Un(n,N()),null;var a=yl(n,i);if(n.tag!==0&&a===2){var u=Et(n);u!==0&&(i=u,a=Jc(n,u))}if(a===1)throw a=Wo,$r(n,0),Tr(n,i),Un(n,N()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zr(n,In,qi),Un(n,N()),null}function ef(n,i){var a=At;At|=1;try{return n(i)}finally{At=a,At===0&&(Os=N()+500,Ya&&vr())}}function jr(n){Mr!==null&&Mr.tag===0&&(At&6)===0&&Bs();var i=At;At|=1;var a=ri.transition,u=gt;try{if(ri.transition=null,gt=1,n)return n()}finally{gt=u,ri.transition=a,At=i,(At&6)===0&&vr()}}function tf(){Gn=Fs.current,Ht(Fs)}function $r(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,kv(a)),Qt!==null)for(a=Qt.return;a!==null;){var u=a;switch(cc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Xa();break;case 3:Ns(),Ht(Ln),Ht(mn),Ec();break;case 5:Sc(u);break;case 4:Ns();break;case 13:Ht(Wt);break;case 19:Ht(Wt);break;case 10:gc(u.type._context);break;case 22:case 23:tf()}a=a.return}if(ln=n,Qt=n=wr(n.current,null),dn=Gn=i,rn=0,Wo=null,jc=pl=Yr=0,In=Xo=null,Wr!==null){for(i=0;i<Wr.length;i++)if(a=Wr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,g=a.pending;if(g!==null){var A=g.next;g.next=d,u.next=A}a.pending=u}Wr=null}return n}function Sm(n,i){do{var a=Qt;try{if(mc(),il.current=al,rl){for(var u=Xt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}rl=!1}if(qr=0,an=nn=Xt=null,Bo=!1,ko=0,Yc.current=null,a===null||a.return===null){rn=1,Wo=i,Qt=null;break}e:{var g=n,A=a.return,z=a,Y=i;if(i=dn,z.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var ve=Y,Le=z,Ie=Le.tag;if((Le.mode&1)===0&&(Ie===0||Ie===11||Ie===15)){var Re=Le.alternate;Re?(Le.updateQueue=Re.updateQueue,Le.memoizedState=Re.memoizedState,Le.lanes=Re.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var Je=qp(A);if(Je!==null){Je.flags&=-257,Yp(Je,A,z,g,i),Je.mode&1&&Xp(g,ve,i),i=Je,Y=ve;var it=i.updateQueue;if(it===null){var rt=new Set;rt.add(Y),i.updateQueue=rt}else it.add(Y);break e}else{if((i&1)===0){Xp(g,ve,i),nf();break e}Y=Error(t(426))}}else if(Gt&&z.mode&1){var Kt=qp(A);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Yp(Kt,A,z,g,i),hc(Is(Y,z));break e}}g=Y=Is(Y,z),rn!==4&&(rn=2),Xo===null?Xo=[g]:Xo.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=Gp(g,Y,i);gp(g,ue);break e;case 1:z=Y;var Q=g.type,he=g.stateNode;if((g.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Sr===null||!Sr.has(he)))){g.flags|=65536,i&=-i,g.lanes|=i;var Be=Wp(g,z,i);gp(g,Be);break e}}g=g.return}while(g!==null)}Tm(a)}catch(ot){i=ot,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function Mm(){var n=hl.current;return hl.current=al,n===null?al:n}function nf(){(rn===0||rn===3||rn===2)&&(rn=4),ln===null||(Yr&268435455)===0&&(pl&268435455)===0||Tr(ln,dn)}function yl(n,i){var a=At;At|=2;var u=Mm();(ln!==n||dn!==i)&&(qi=null,$r(n,i));do try{c_();break}catch(d){Sm(n,d)}while(!0);if(mc(),At=a,hl.current=u,Qt!==null)throw Error(t(261));return ln=null,dn=0,rn}function c_(){for(;Qt!==null;)Em(Qt)}function f_(){for(;Qt!==null&&!Nu();)Em(Qt)}function Em(n){var i=Cm(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?Tm(n):Qt=i,Yc.current=null}function Tm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=i_(a,i,Gn),a!==null){Qt=a;return}}else{if(a=r_(a,i),a!==null){a.flags&=32767,Qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=n}while(i!==null);rn===0&&(rn=5)}function Zr(n,i,a){var u=gt,d=ri.transition;try{ri.transition=null,gt=1,d_(n,i,a,u)}finally{ri.transition=d,gt=u}return null}function d_(n,i,a,u){do Bs();while(Mr!==null);if((At&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(ar(n,g),n===ln&&(Qt=ln=null,dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||gl||(gl=!0,bm(de,function(){return Bs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ri.transition,ri.transition=null;var A=gt;gt=1;var z=At;At|=4,Yc.current=null,o_(n,a),pm(a,n),Dv(nc),La=!!tc,nc=tc=null,n.current=a,a_(a),Iu(),At=z,gt=A,ri.transition=g}else n.current=a;if(gl&&(gl=!1,Mr=n,vl=d),g=n.pendingLanes,g===0&&(Sr=null),lt(a.stateNode),Un(n,N()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(ml)throw ml=!1,n=Zc,Zc=null,n;return(vl&1)!==0&&n.tag!==0&&Bs(),g=n.pendingLanes,(g&1)!==0?n===Kc?qo++:(qo=0,Kc=n):qo=0,vr(),null}function Bs(){if(Mr!==null){var n=ai(vl),i=ri.transition,a=gt;try{if(ri.transition=null,gt=16>n?16:n,Mr===null)var u=!1;else{if(n=Mr,Mr=null,vl=0,(At&6)!==0)throw Error(t(331));var d=At;for(At|=4,tt=n.current;tt!==null;){var g=tt,A=g.child;if((tt.flags&16)!==0){var z=g.deletions;if(z!==null){for(var Y=0;Y<z.length;Y++){var ve=z[Y];for(tt=ve;tt!==null;){var Le=tt;switch(Le.tag){case 0:case 11:case 15:Go(8,Le,g)}var Ie=Le.child;if(Ie!==null)Ie.return=Le,tt=Ie;else for(;tt!==null;){Le=tt;var Re=Le.sibling,Je=Le.return;if(um(Le),Le===ve){tt=null;break}if(Re!==null){Re.return=Je,tt=Re;break}tt=Je}}}var it=g.alternate;if(it!==null){var rt=it.child;if(rt!==null){it.child=null;do{var Kt=rt.sibling;rt.sibling=null,rt=Kt}while(rt!==null)}}tt=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,tt=A;else e:for(;tt!==null;){if(g=tt,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Go(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,tt=ue;break e}tt=g.return}}var Q=n.current;for(tt=Q;tt!==null;){A=tt;var he=A.child;if((A.subtreeFlags&2064)!==0&&he!==null)he.return=A,tt=he;else e:for(A=Q;tt!==null;){if(z=tt,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:dl(9,z)}}catch(ot){Yt(z,z.return,ot)}if(z===A){tt=null;break e}var Be=z.sibling;if(Be!==null){Be.return=z.return,tt=Be;break e}tt=z.return}}if(At=d,vr(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(We,n)}catch{}u=!0}return u}finally{gt=a,ri.transition=i}}return!1}function wm(n,i,a){i=Is(a,i),i=Gp(n,i,1),n=xr(n,i,1),i=An(),n!==null&&(kn(n,1,i),Un(n,i))}function Yt(n,i,a){if(n.tag===3)wm(n,n,a);else for(;i!==null;){if(i.tag===3){wm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Sr===null||!Sr.has(u))){n=Is(a,n),n=Wp(i,n,1),i=xr(i,n,1),n=An(),i!==null&&(kn(i,1,n),Un(i,n));break}}i=i.return}}function h_(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&a,ln===n&&(dn&a)===a&&(rn===4||rn===3&&(dn&130023424)===dn&&500>N()-$c?$r(n,0):jc|=a),Un(n,i)}function Am(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ot,Ot<<=1,(Ot&130023424)===0&&(Ot=4194304)));var a=An();n=Gi(n,i),n!==null&&(kn(n,i,a),Un(n,a))}function p_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Am(n,a)}function m_(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Am(n,a)}var Cm;Cm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)Nn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,n_(n,i,a);Nn=(n.flags&131072)!==0}else Nn=!1,Gt&&(i.flags&1048576)!==0&&op(i,$a,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;cl(n,i),n=i.pendingProps;var d=As(i,mn.current);Ds(i,a),d=Ac(null,i,u,n,d,a);var g=Cc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(u)?(g=!0,qa(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,xc(i),d.updater=ll,i.stateNode=d,d._reactInternals=i,Nc(i,u,n,a),i=Oc(null,i,u,!0,g,a)):(i.tag=0,Gt&&g&&uc(i),wn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(cl(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=v_(u),n=ci(u,n),d){case 0:i=Fc(null,i,u,n,a);break e;case 1:i=Qp(null,i,u,n,a);break e;case 11:i=jp(null,i,u,n,a);break e;case 14:i=$p(null,i,u,ci(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ci(u,d),Fc(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ci(u,d),Qp(n,i,u,d,a);case 3:e:{if(em(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,d=g.element,mp(n,i),tl(i,u,null,a);var A=i.memoizedState;if(u=A.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Is(Error(t(423)),i),i=tm(n,i,u,a,d);break e}else if(u!==d){d=Is(Error(t(424)),i),i=tm(n,i,u,a,d);break e}else for(Hn=pr(i.stateNode.containerInfo.firstChild),Vn=i,Gt=!0,ui=null,a=hp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),u===d){i=Xi(n,i,a);break e}wn(n,i,u,a)}i=i.child}return i;case 5:return _p(i),n===null&&dc(i),u=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,A=d.children,ic(u,d)?A=null:g!==null&&ic(u,g)&&(i.flags|=32),Jp(n,i),wn(n,i,A,a),i.child;case 6:return n===null&&dc(i),null;case 13:return nm(n,i,a);case 4:return yc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ps(i,null,u,a):wn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ci(u,d),jp(n,i,u,d,a);case 7:return wn(n,i,i.pendingProps,a),i.child;case 8:return wn(n,i,i.pendingProps.children,a),i.child;case 12:return wn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,g=i.memoizedProps,A=d.value,kt(Ja,u._currentValue),u._currentValue=A,g!==null)if(li(g.value,A)){if(g.children===d.children&&!Ln.current){i=Xi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var z=g.dependencies;if(z!==null){A=g.child;for(var Y=z.firstContext;Y!==null;){if(Y.context===u){if(g.tag===1){Y=Wi(-1,a&-a),Y.tag=2;var ve=g.updateQueue;if(ve!==null){ve=ve.shared;var Le=ve.pending;Le===null?Y.next=Y:(Y.next=Le.next,Le.next=Y),ve.pending=Y}}g.lanes|=a,Y=g.alternate,Y!==null&&(Y.lanes|=a),vc(g.return,a,i),z.lanes|=a;break}Y=Y.next}}else if(g.tag===10)A=g.type===i.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=a,z=A.alternate,z!==null&&(z.lanes|=a),vc(A,a,i),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===i){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}wn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ds(i,a),d=ni(d),u=u(d),i.flags|=1,wn(n,i,u,a),i.child;case 14:return u=i.type,d=ci(u,i.pendingProps),d=ci(u.type,d),$p(n,i,u,d,a);case 15:return Zp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ci(u,d),cl(n,i),i.tag=1,Dn(u)?(n=!0,qa(i)):n=!1,Ds(i,a),Vp(i,u,d),Nc(i,u,d,a),Oc(null,i,u,!0,n,a);case 19:return rm(n,i,a);case 22:return Kp(n,i,a)}throw Error(t(156,i.tag))};function bm(n,i){return Ca(n,i)}function g_(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(n,i,a,u){return new g_(n,i,a,u)}function rf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function v_(n){if(typeof n=="function")return rf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===se)return 14}return 2}function wr(n,i){var a=n.alternate;return a===null?(a=si(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Sl(n,i,a,u,d,g){var A=2;if(u=n,typeof n=="function")rf(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case B:return Kr(a.children,d,g,i);case T:A=8,d|=8;break;case I:return n=si(12,a,i,d|2),n.elementType=I,n.lanes=g,n;case te:return n=si(13,a,i,d),n.elementType=te,n.lanes=g,n;case ae:return n=si(19,a,i,d),n.elementType=ae,n.lanes=g,n;case X:return Ml(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ce:A=10;break e;case W:A=9;break e;case j:A=11;break e;case se:A=14;break e;case re:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=si(A,a,i,d),i.elementType=n,i.type=u,i.lanes=g,i}function Kr(n,i,a,u){return n=si(7,n,u,i),n.lanes=a,n}function Ml(n,i,a,u){return n=si(22,n,u,i),n.elementType=X,n.lanes=a,n.stateNode={isHidden:!1},n}function sf(n,i,a){return n=si(6,n,null,i),n.lanes=a,n}function of(n,i,a){return i=si(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function __(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pn(0),this.expirationTimes=Pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function af(n,i,a,u,d,g,A,z,Y){return n=new __(n,i,a,z,Y),i===1?(i=1,g===!0&&(i|=8)):i=0,g=si(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(g),n}function x_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Rm(n){if(!n)return gr;n=n._reactInternals;e:{if(Si(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Dn(a))return ip(n,a,i)}return i}function Pm(n,i,a,u,d,g,A,z,Y){return n=af(a,u,!0,n,d,g,A,z,Y),n.context=Rm(null),a=n.current,u=An(),d=Er(a),g=Wi(u,d),g.callback=i??null,xr(a,g,d),n.current.lanes=d,kn(n,d,u),Un(n,u),n}function El(n,i,a,u){var d=i.current,g=An(),A=Er(d);return a=Rm(a),i.context===null?i.context=a:i.pendingContext=a,i=Wi(g,A),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=xr(d,i,A),n!==null&&(hi(n,d,A,g),el(n,d,A)),A}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Lm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function lf(n,i){Lm(n,i),(n=n.alternate)&&Lm(n,i)}function y_(){return null}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function uf(n){this._internalRoot=n}wl.prototype.render=uf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));El(n,i,null,null)},wl.prototype.unmount=uf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;jr(function(){El(null,n,null,null)}),i[ki]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var i=go();n={blockedOn:null,target:n,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,n),a===0&&_h(n)}};function cf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function S_(n,i,a,u,d){if(d){if(typeof u=="function"){var g=u;u=function(){var ve=Tl(A);g.call(ve)}}var A=Pm(i,u,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=A,n[ki]=A.current,Po(n.nodeType===8?n.parentNode:n),jr(),A}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var z=u;u=function(){var ve=Tl(Y);z.call(ve)}}var Y=af(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=Y,n[ki]=Y.current,Po(n.nodeType===8?n.parentNode:n),jr(function(){El(i,Y,a,u)}),Y}function Cl(n,i,a,u,d){var g=a._reactRootContainer;if(g){var A=g;if(typeof d=="function"){var z=d;d=function(){var Y=Tl(A);z.call(Y)}}El(i,A,n,d)}else A=S_(a,i,n,d,u);return Tl(A)}Zt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Tt(i.pendingLanes);a!==0&&(Dt(i,a|1),Un(i,N()),(At&6)===0&&(Os=N()+500,vr()))}break;case 13:jr(function(){var u=Gi(n,1);if(u!==null){var d=An();hi(u,n,1,d)}}),lf(n,1)}},Qn=function(n){if(n.tag===13){var i=Gi(n,134217728);if(i!==null){var a=An();hi(i,n,134217728,a)}lf(n,134217728)}},Bi=function(n){if(n.tag===13){var i=Er(n),a=Gi(n,i);if(a!==null){var u=An();hi(a,n,i,u)}lf(n,i)}},go=function(){return gt},gh=function(n,i){var a=gt;try{return gt=n,i()}finally{gt=a}},ze=function(n,i,a){switch(i){case"input":if(Ce(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Wa(u);if(!d)throw Error(t(90));Ae(u),Ce(u,d)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&Ge(n,!!a.multiple,i,!1)}},mt=ef,It=jr;var M_={usingClientEntryPoint:!1,Events:[No,Ts,Wa,Ee,nt,ef]},Yo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},E_={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=wa(n),n===null?null:n.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||y_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{We=bl.inject(E_),$e=bl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M_,Fn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(i))throw Error(t(200));return x_(n,i,null,a)},Fn.createRoot=function(n,i){if(!cf(n))throw Error(t(299));var a=!1,u="",d=Dm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=af(n,1,!1,null,null,a,!1,u,d),n[ki]=i.current,Po(n.nodeType===8?n.parentNode:n),new uf(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=wa(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return jr(n)},Fn.hydrate=function(n,i,a){if(!Al(i))throw Error(t(200));return Cl(null,n,i,!0,a)},Fn.hydrateRoot=function(n,i,a){if(!cf(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,g="",A=Dm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=Pm(i,null,n,1,a??null,d,!1,g,A),n[ki]=i.current,Po(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new wl(i)},Fn.render=function(n,i,a){if(!Al(i))throw Error(t(200));return Cl(null,n,i,!1,a)},Fn.unmountComponentAtNode=function(n){if(!Al(n))throw Error(t(40));return n._reactRootContainer?(jr(function(){Cl(null,null,n,!1,function(){n._reactRootContainer=null,n[ki]=null})}),!0):!1},Fn.unstable_batchedUpdates=ef,Fn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cl(n,i,a,!1,u)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Vm;function L_(){if(Vm)return hf.exports;Vm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hf.exports=P_(),hf.exports}var Hm;function D_(){if(Hm)return Rl;Hm=1;var s=L_();return Rl.createRoot=s.createRoot,Rl.hydrateRoot=s.hydrateRoot,Rl}var N_=D_(),On=Qd();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eh="183",I_=0,Gm=1,U_=2,fu=1,F_=2,sa=3,Fr=0,Bn=1,vi=2,er=0,cs=1,ua=2,Wm=3,Xm=4,O_=5,os=100,B_=101,k_=102,z_=103,V_=104,H_=200,G_=201,W_=202,X_=203,nd=204,id=205,q_=206,Y_=207,j_=208,$_=209,Z_=210,K_=211,J_=212,Q_=213,ex=214,rd=0,sd=1,od=2,oo=3,ad=4,ld=5,ud=6,cd=7,ng=0,tx=1,nx=2,Di=0,ig=1,rg=2,sg=3,og=4,ag=5,lg=6,ug=7,cg=300,ds=301,ao=302,gf=303,vf=304,bu=306,fd=1e3,Qi=1001,dd=1002,hn=1003,ix=1004,Pl=1005,Sn=1006,_f=1007,ls=1008,jn=1009,fg=1010,dg=1011,da=1012,th=1013,Ii=1014,Pi=1015,rr=1016,nh=1017,ih=1018,ha=1020,hg=35902,pg=35899,mg=1021,gg=1022,_i=1023,sr=1026,us=1027,vg=1028,rh=1029,lo=1030,sh=1031,oh=1033,du=33776,hu=33777,pu=33778,mu=33779,hd=35840,pd=35841,md=35842,gd=35843,vd=36196,_d=37492,xd=37496,yd=37488,Sd=37489,Md=37490,Ed=37491,Td=37808,wd=37809,Ad=37810,Cd=37811,bd=37812,Rd=37813,Pd=37814,Ld=37815,Dd=37816,Nd=37817,Id=37818,Ud=37819,Fd=37820,Od=37821,Bd=36492,kd=36494,zd=36495,Vd=36283,Hd=36284,Gd=36285,Wd=36286,rx=3200,sx=0,ox=1,Nr="",qn="srgb",uo="srgb-linear",_u="linear",Ut="srgb",ks=7680,qm=519,ax=512,lx=513,ux=514,ah=515,cx=516,fx=517,lh=518,dx=519,Xd=35044,Ym="300 es",Li=2e3,pa=2001;function hx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function px(){const s=xu("canvas");return s.style.display="block",s}const jm={};function yu(...s){const e="THREE."+s.shift();console.log(e,...s)}function _g(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function pt(...s){s=_g(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=_g(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Su(...s){const e=s.join(" ");e in jm||(jm[e]=!0,pt(...s))}function mx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const gx={[rd]:sd,[od]:ud,[ad]:cd,[oo]:ld,[sd]:rd,[ud]:od,[cd]:ad,[ld]:oo};class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=Math.PI/180,qd=180/Math.PI;function tr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function vx(s,e){return(s%e+e)%e}function xf(s,e,t){return(1-t)*s+t*e}function Ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let p=r[o+0],h=r[o+1],v=r[o+2],x=r[o+3],m=l[c+0],S=l[c+1],M=l[c+2],w=l[c+3];if(x!==w||p!==m||h!==S||v!==M){let _=p*m+h*S+v*M+x*w;_<0&&(m=-m,S=-S,M=-M,w=-w,_=-_);let y=1-f;if(_<.9995){const D=Math.acos(_),b=Math.sin(D);y=Math.sin(y*D)/b,f=Math.sin(f*D)/b,p=p*y+m*f,h=h*y+S*f,v=v*y+M*f,x=x*y+w*f}else{p=p*y+m*f,h=h*y+S*f,v=v*y+M*f,x=x*y+w*f;const D=1/Math.sqrt(p*p+h*h+v*v+x*x);p*=D,h*=D,v*=D,x*=D}}e[t]=p,e[t+1]=h,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],p=r[o+1],h=r[o+2],v=r[o+3],x=l[c],m=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+v*x+p*S-h*m,e[t+1]=p*M+v*m+h*x-f*S,e[t+2]=h*M+v*S+f*m-p*x,e[t+3]=v*M-f*x-p*m-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,h=f(r/2),v=f(o/2),x=f(l/2),m=p(r/2),S=p(o/2),M=p(l/2);switch(c){case"XYZ":this._x=m*v*x+h*S*M,this._y=h*S*x-m*v*M,this._z=h*v*M+m*S*x,this._w=h*v*x-m*S*M;break;case"YXZ":this._x=m*v*x+h*S*M,this._y=h*S*x-m*v*M,this._z=h*v*M-m*S*x,this._w=h*v*x+m*S*M;break;case"ZXY":this._x=m*v*x-h*S*M,this._y=h*S*x+m*v*M,this._z=h*v*M+m*S*x,this._w=h*v*x-m*S*M;break;case"ZYX":this._x=m*v*x-h*S*M,this._y=h*S*x+m*v*M,this._z=h*v*M-m*S*x,this._w=h*v*x+m*S*M;break;case"YZX":this._x=m*v*x+h*S*M,this._y=h*S*x+m*v*M,this._z=h*v*M-m*S*x,this._w=h*v*x-m*S*M;break;case"XZY":this._x=m*v*x-h*S*M,this._y=h*S*x-m*v*M,this._z=h*v*M+m*S*x,this._w=h*v*x+m*S*M;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],p=t[9],h=t[2],v=t[6],x=t[10],m=r+f+x;if(m>0){const S=.5/Math.sqrt(m+1);this._w=.25/S,this._x=(v-p)*S,this._y=(l-h)*S,this._z=(c-o)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(v-p)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+h)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(l-h)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(c-o)/S,this._x=(l+h)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,p=t._y,h=t._z,v=t._w;return this._x=r*v+c*f+o*h-l*p,this._y=o*v+c*p+l*f-r*h,this._z=l*v+c*h+r*p-o*f,this._w=c*v-r*f-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let p=1-t;if(f<.9995){const h=Math.acos(f),v=Math.sin(h);p=Math.sin(p*h)/v,t=Math.sin(t*h)/v,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($m.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($m.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,p=e.w,h=2*(c*o-f*r),v=2*(f*t-l*o),x=2*(l*r-c*t);return this.x=t+p*h+c*x-f*v,this.y=r+p*v+f*h-l*x,this.z=o+p*x+l*v-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*c-r*p,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yf.copy(this).projectOnVector(e),this.sub(yf)}reflect(e){return this.sub(yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yf=new K,$m=new nr;class _t{constructor(e,t,r,o,l,c,f,p,h){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,p,h)}set(e,t,r,o,l,c,f,p,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=p,v[6]=r,v[7]=c,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],p=r[6],h=r[1],v=r[4],x=r[7],m=r[2],S=r[5],M=r[8],w=o[0],_=o[3],y=o[6],D=o[1],b=o[4],P=o[7],O=o[2],F=o[5],B=o[8];return l[0]=c*w+f*D+p*O,l[3]=c*_+f*b+p*F,l[6]=c*y+f*P+p*B,l[1]=h*w+v*D+x*O,l[4]=h*_+v*b+x*F,l[7]=h*y+v*P+x*B,l[2]=m*w+S*D+M*O,l[5]=m*_+S*b+M*F,l[8]=m*y+S*P+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],v=e[8];return t*c*v-t*f*h-r*l*v+r*f*p+o*l*h-o*c*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],v=e[8],x=v*c-f*h,m=f*p-v*l,S=h*l-c*p,M=t*x+r*m+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=x*w,e[1]=(o*h-v*r)*w,e[2]=(f*r-o*c)*w,e[3]=m*w,e[4]=(v*t-o*p)*w,e[5]=(o*l-f*t)*w,e[6]=S*w,e[7]=(r*p-h*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const p=Math.cos(l),h=Math.sin(l);return this.set(r*p,r*h,-r*(p*c+h*f)+c+e,-o*h,o*p,-o*(-h*c+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Sf.makeScale(e,t)),this}rotate(e){return this.premultiply(Sf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sf=new _t,Zm=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Km=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _x(){const s={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ut&&(o.r=ir(o.r),o.g=ir(o.g),o.b=ir(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(o.r=io(o.r),o.g=io(o.g),o.b=io(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?_u:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Su("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Su("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[uo]:{primaries:e,whitePoint:r,transfer:_u,toXYZ:Zm,fromXYZ:Km,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:Zm,fromXYZ:Km,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),s}const bt=_x();function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function io(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class xx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zs===void 0&&(zs=xu("canvas")),zs.width=e.width,zs.height=e.height;const o=zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=ir(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ir(t[r]/255)*255):t[r]=ir(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yx=0;class uh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Mf(o[c].image)):l.push(Mf(o[c]))}else l=Mf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Mf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let Sx=0;const Ef=new K;class Mn extends ho{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,r=Qi,o=Qi,l=Sn,c=ls,f=_i,p=jn,h=Mn.DEFAULT_ANISOTROPY,v=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=tr(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ef).x}get height(){return this.source.getSize(Ef).y}get depth(){return this.source.getSize(Ef).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fd:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fd:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=cg;Mn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,r=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,h=p[0],v=p[4],x=p[8],m=p[1],S=p[5],M=p[9],w=p[2],_=p[6],y=p[10];if(Math.abs(v-m)<.01&&Math.abs(x-w)<.01&&Math.abs(M-_)<.01){if(Math.abs(v+m)<.1&&Math.abs(x+w)<.1&&Math.abs(M+_)<.1&&Math.abs(h+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,P=(S+1)/2,O=(y+1)/2,F=(v+m)/4,B=(x+w)/4,T=(M+_)/4;return b>P&&b>O?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=F/r,l=B/r):P>O?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=F/o,l=T/o):O<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),r=B/l,o=T/l),this.set(r,o,l,t),this}let D=Math.sqrt((_-M)*(_-M)+(x-w)*(x-w)+(m-v)*(m-v));return Math.abs(D)<.001&&(D=1),this.x=(_-M)/D,this.y=(x-w)/D,this.z=(m-v)/D,this.w=Math.acos((h+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mx extends ho{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Mn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new uh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends Mx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class xg extends Mn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ex extends Mn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zt{constructor(e,t,r,o,l,c,f,p,h,v,x,m,S,M,w,_){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,p,h,v,x,m,S,M,w,_)}set(e,t,r,o,l,c,f,p,h,v,x,m,S,M,w,_){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=c,y[9]=f,y[13]=p,y[2]=h,y[6]=v,y[10]=x,y[14]=m,y[3]=S,y[7]=M,y[11]=w,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Vs.setFromMatrixColumn(e,0).length(),l=1/Vs.setFromMatrixColumn(e,1).length(),c=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),p=Math.cos(o),h=Math.sin(o),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const m=c*v,S=c*x,M=f*v,w=f*x;t[0]=p*v,t[4]=-p*x,t[8]=h,t[1]=S+M*h,t[5]=m-w*h,t[9]=-f*p,t[2]=w-m*h,t[6]=M+S*h,t[10]=c*p}else if(e.order==="YXZ"){const m=p*v,S=p*x,M=h*v,w=h*x;t[0]=m+w*f,t[4]=M*f-S,t[8]=c*h,t[1]=c*x,t[5]=c*v,t[9]=-f,t[2]=S*f-M,t[6]=w+m*f,t[10]=c*p}else if(e.order==="ZXY"){const m=p*v,S=p*x,M=h*v,w=h*x;t[0]=m-w*f,t[4]=-c*x,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*v,t[9]=w-m*f,t[2]=-c*h,t[6]=f,t[10]=c*p}else if(e.order==="ZYX"){const m=c*v,S=c*x,M=f*v,w=f*x;t[0]=p*v,t[4]=M*h-S,t[8]=m*h+w,t[1]=p*x,t[5]=w*h+m,t[9]=S*h-M,t[2]=-h,t[6]=f*p,t[10]=c*p}else if(e.order==="YZX"){const m=c*p,S=c*h,M=f*p,w=f*h;t[0]=p*v,t[4]=w-m*x,t[8]=M*x+S,t[1]=x,t[5]=c*v,t[9]=-f*v,t[2]=-h*v,t[6]=S*x+M,t[10]=m-w*x}else if(e.order==="XZY"){const m=c*p,S=c*h,M=f*p,w=f*h;t[0]=p*v,t[4]=-x,t[8]=h*v,t[1]=m*x+w,t[5]=c*v,t[9]=S*x-M,t[2]=M*x-S,t[6]=f*v,t[10]=w*x+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tx,e,wx)}lookAt(e,t,r){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Cr.crossVectors(r,Wn),Cr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Cr.crossVectors(r,Wn)),Cr.normalize(),Ll.crossVectors(Wn,Cr),o[0]=Cr.x,o[4]=Ll.x,o[8]=Wn.x,o[1]=Cr.y,o[5]=Ll.y,o[9]=Wn.y,o[2]=Cr.z,o[6]=Ll.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],p=r[8],h=r[12],v=r[1],x=r[5],m=r[9],S=r[13],M=r[2],w=r[6],_=r[10],y=r[14],D=r[3],b=r[7],P=r[11],O=r[15],F=o[0],B=o[4],T=o[8],I=o[12],ce=o[1],W=o[5],j=o[9],te=o[13],ae=o[2],se=o[6],re=o[10],X=o[14],H=o[3],le=o[7],fe=o[11],V=o[15];return l[0]=c*F+f*ce+p*ae+h*H,l[4]=c*B+f*W+p*se+h*le,l[8]=c*T+f*j+p*re+h*fe,l[12]=c*I+f*te+p*X+h*V,l[1]=v*F+x*ce+m*ae+S*H,l[5]=v*B+x*W+m*se+S*le,l[9]=v*T+x*j+m*re+S*fe,l[13]=v*I+x*te+m*X+S*V,l[2]=M*F+w*ce+_*ae+y*H,l[6]=M*B+w*W+_*se+y*le,l[10]=M*T+w*j+_*re+y*fe,l[14]=M*I+w*te+_*X+y*V,l[3]=D*F+b*ce+P*ae+O*H,l[7]=D*B+b*W+P*se+O*le,l[11]=D*T+b*j+P*re+O*fe,l[15]=D*I+b*te+P*X+O*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],p=e[9],h=e[13],v=e[2],x=e[6],m=e[10],S=e[14],M=e[3],w=e[7],_=e[11],y=e[15],D=p*S-h*m,b=f*S-h*x,P=f*m-p*x,O=c*S-h*v,F=c*m-p*v,B=c*x-f*v;return t*(w*D-_*b+y*P)-r*(M*D-_*O+y*F)+o*(M*b-w*O+y*B)-l*(M*P-w*F+_*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],v=e[8],x=e[9],m=e[10],S=e[11],M=e[12],w=e[13],_=e[14],y=e[15],D=t*f-r*c,b=t*p-o*c,P=t*h-l*c,O=r*p-o*f,F=r*h-l*f,B=o*h-l*p,T=v*w-x*M,I=v*_-m*M,ce=v*y-S*M,W=x*_-m*w,j=x*y-S*w,te=m*y-S*_,ae=D*te-b*j+P*W+O*ce-F*I+B*T;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const se=1/ae;return e[0]=(f*te-p*j+h*W)*se,e[1]=(o*j-r*te-l*W)*se,e[2]=(w*B-_*F+y*O)*se,e[3]=(m*F-x*B-S*O)*se,e[4]=(p*ce-c*te-h*I)*se,e[5]=(t*te-o*ce+l*I)*se,e[6]=(_*P-M*B-y*b)*se,e[7]=(v*B-m*P+S*b)*se,e[8]=(c*j-f*ce+h*T)*se,e[9]=(r*ce-t*j-l*T)*se,e[10]=(M*F-w*P+y*D)*se,e[11]=(x*P-v*F-S*D)*se,e[12]=(f*I-c*W-p*T)*se,e[13]=(t*W-r*I+o*T)*se,e[14]=(w*b-M*O-_*D)*se,e[15]=(v*O-x*b+m*D)*se,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,p=e.z,h=l*c,v=l*f;return this.set(h*c+r,h*f-o*p,h*p+o*f,0,h*f+o*p,v*f+r,v*p-o*c,0,h*p-o*f,v*p+o*c,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,p=t._w,h=l+l,v=c+c,x=f+f,m=l*h,S=l*v,M=l*x,w=c*v,_=c*x,y=f*x,D=p*h,b=p*v,P=p*x,O=r.x,F=r.y,B=r.z;return o[0]=(1-(w+y))*O,o[1]=(S+P)*O,o[2]=(M-b)*O,o[3]=0,o[4]=(S-P)*F,o[5]=(1-(m+y))*F,o[6]=(_+D)*F,o[7]=0,o[8]=(M+b)*B,o[9]=(_-D)*B,o[10]=(1-(m+w))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Vs.set(o[0],o[1],o[2]).length();const f=Vs.set(o[4],o[5],o[6]).length(),p=Vs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),pi.copy(this);const h=1/c,v=1/f,x=1/p;return pi.elements[0]*=h,pi.elements[1]*=h,pi.elements[2]*=h,pi.elements[4]*=v,pi.elements[5]*=v,pi.elements[6]*=v,pi.elements[8]*=x,pi.elements[9]*=x,pi.elements[10]*=x,t.setFromRotationMatrix(pi),r.x=c,r.y=f,r.z=p,this}makePerspective(e,t,r,o,l,c,f=Li,p=!1){const h=this.elements,v=2*l/(t-e),x=2*l/(r-o),m=(t+e)/(t-e),S=(r+o)/(r-o);let M,w;if(p)M=l/(c-l),w=c*l/(c-l);else if(f===Li)M=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(f===pa)M=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=x,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Li,p=!1){const h=this.elements,v=2/(t-e),x=2/(r-o),m=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,w;if(p)M=1/(c-l),w=c/(c-l);else if(f===Li)M=-2/(c-l),w=-(c+l)/(c-l);else if(f===pa)M=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=x,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Vs=new K,pi=new zt,Tx=new K(0,0,0),wx=new K(1,1,1),Cr=new K,Ll=new K,Wn=new K,Jm=new zt,Qm=new nr;class xi{constructor(e=0,t=0,r=0,o=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],p=o[1],h=o[5],v=o[9],x=o[2],m=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ax=0;const e0=new K,Hs=new nr,Yi=new zt,Dl=new K,$o=new K,Cx=new K,bx=new nr,t0=new K(1,0,0),n0=new K(0,1,0),i0=new K(0,0,1),r0={type:"added"},Rx={type:"removed"},Gs={type:"childadded",child:null},Tf={type:"childremoved",child:null};class pn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new K,t=new xi,r=new nr,o=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new zt},normalMatrix:{value:new _t}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(t0,e)}rotateY(e){return this.rotateOnAxis(n0,e)}rotateZ(e){return this.rotateOnAxis(i0,e)}translateOnAxis(e,t){return e0.copy(e).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(t0,e)}translateY(e){return this.translateOnAxis(n0,e)}translateZ(e){return this.translateOnAxis(i0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Dl.copy(e):Dl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt($o,Dl,this.up):Yi.lookAt(Dl,$o,this.up),this.quaternion.setFromRotationMatrix(Yi),o&&(Yi.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix(Yi),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(r0),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rx),Tf.child=e,this.dispatchEvent(Tf),Tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(r0),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,bx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const x=p[h];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=c(e.geometries),p=c(e.materials),h=c(e.textures),v=c(e.images),x=c(e.shapes),m=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),m.length>0&&(r.skeletons=m),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const p=[];for(const h in f){const v=f[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}pn.DEFAULT_UP=new K(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ir extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Px={type:"move"};class wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,r),y=this._getHandJoint(h,w);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const v=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],m=v.position.distanceTo(x.position),S=.02,M=.005;h.inputState.pinching&&m>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Px)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ir;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function Af(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=bt.workingColorSpace){if(e=vx(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Af(c,l,e+1/3),this.g=Af(c,l,e),this.b=Af(c,l,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=qn){function r(l){l!==void 0&&parseFloat(l)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const r=Sg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return bt.workingToColorSpace(yn.copy(this),e),Math.round(Mt(yn.r*255,0,255))*65536+Math.round(Mt(yn.g*255,0,255))*256+Math.round(Mt(yn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(yn.copy(this),t);const r=yn.r,o=yn.g,l=yn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let p,h;const v=(f+c)/2;if(f===c)p=0,h=0;else{const x=c-f;switch(h=v<=.5?x/(c+f):x/(2-c-f),c){case r:p=(o-l)/x+(o<l?6:0);break;case o:p=(l-r)/x+2;break;case l:p=(r-o)/x+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=qn){bt.workingToColorSpace(yn.copy(this),e);const t=yn.r,r=yn.g,o=yn.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Nl);const r=xf(br.h,Nl.h,t),o=xf(br.s,Nl.s,t),l=xf(br.l,Nl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Rt;Rt.NAMES=Sg;class Lx extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mi=new K,ji=new K,Cf=new K,$i=new K,Ws=new K,Xs=new K,s0=new K,bf=new K,Rf=new K,Pf=new K,Lf=new jt,Df=new jt,Nf=new jt;class $n{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),mi.subVectors(e,t),o.cross(mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){mi.subVectors(o,t),ji.subVectors(r,t),Cf.subVectors(e,t);const c=mi.dot(mi),f=mi.dot(ji),p=mi.dot(Cf),h=ji.dot(ji),v=ji.dot(Cf),x=c*h-f*f;if(x===0)return l.set(0,0,0),null;const m=1/x,S=(h*p-f*v)*m,M=(c*v-f*p)*m;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,r,o,l,c,f,p){return this.getBarycoord(e,t,r,o,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,$i.x),p.addScaledVector(c,$i.y),p.addScaledVector(f,$i.z),p)}static getInterpolatedAttribute(e,t,r,o,l,c){return Lf.setScalar(0),Df.setScalar(0),Nf.setScalar(0),Lf.fromBufferAttribute(e,t),Df.fromBufferAttribute(e,r),Nf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Lf,l.x),c.addScaledVector(Df,l.y),c.addScaledVector(Nf,l.z),c}static isFrontFacing(e,t,r,o){return mi.subVectors(r,t),ji.subVectors(e,t),mi.cross(ji).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),mi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return $n.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Ws.subVectors(o,r),Xs.subVectors(l,r),bf.subVectors(e,r);const p=Ws.dot(bf),h=Xs.dot(bf);if(p<=0&&h<=0)return t.copy(r);Rf.subVectors(e,o);const v=Ws.dot(Rf),x=Xs.dot(Rf);if(v>=0&&x<=v)return t.copy(o);const m=p*x-v*h;if(m<=0&&p>=0&&v<=0)return c=p/(p-v),t.copy(r).addScaledVector(Ws,c);Pf.subVectors(e,l);const S=Ws.dot(Pf),M=Xs.dot(Pf);if(M>=0&&S<=M)return t.copy(l);const w=S*h-p*M;if(w<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(Xs,f);const _=v*M-S*x;if(_<=0&&x-v>=0&&S-M>=0)return s0.subVectors(l,o),f=(x-v)/(x-v+(S-M)),t.copy(o).addScaledVector(s0,f);const y=1/(_+w+m);return c=w*y,f=m*y,t.copy(r).addScaledVector(Ws,c).addScaledVector(Xs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xa{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,gi):gi.fromBufferAttribute(l,c),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Il.copy(r.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Ul.subVectors(this.max,Zo),qs.subVectors(e.a,Zo),Ys.subVectors(e.b,Zo),js.subVectors(e.c,Zo),Rr.subVectors(Ys,qs),Pr.subVectors(js,Ys),Jr.subVectors(qs,js);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-Jr.z,Jr.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,Jr.z,0,-Jr.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-Jr.y,Jr.x,0];return!If(t,qs,Ys,js,Ul)||(t=[1,0,0,0,1,0,0,0,1],!If(t,qs,Ys,js,Ul))?!1:(Fl.crossVectors(Rr,Pr),t=[Fl.x,Fl.y,Fl.z],If(t,qs,Ys,js,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new K,new K,new K,new K,new K,new K,new K,new K],gi=new K,Il=new xa,qs=new K,Ys=new K,js=new K,Rr=new K,Pr=new K,Jr=new K,Zo=new K,Ul=new K,Fl=new K,Qr=new K;function If(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){Qr.fromArray(s,l);const f=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),p=e.dot(Qr),h=t.dot(Qr),v=r.dot(Qr);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>f)return!1}return!0}const en=new K,Ol=new Ne;let Dx=0;class Zn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Xd,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ri(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array),l=Ft(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xd&&(e.usage=this.usage),e}}class Mg extends Zn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Eg extends Zn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Jt extends Zn{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Nx=new xa,Ko=new K,Uf=new K;class ya{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Nx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ko,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Uf)),this.expandByPoint(Ko.copy(e.center).sub(Uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ix=0;const oi=new zt,Ff=new pn,$s=new K,Xn=new xa,Jo=new xa,cn=new K;class tn extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hx(e)?Eg:Mg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,r){return oi.makeTranslation(e,t,r),this.applyMatrix4(oi),this}scale(e,t,r){return oi.makeScale(e,t,r),this.applyMatrix4(oi),this}lookAt(e){return Ff.lookAt(e),Ff.updateMatrix(),this.applyMatrix4(Ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Jt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Jo.setFromBufferAttribute(f),this.morphTargetsRelative?(cn.addVectors(Xn.min,Jo.min),Xn.expandByPoint(cn),cn.addVectors(Xn.max,Jo.max),Xn.expandByPoint(cn)):(Xn.expandByPoint(Jo.min),Xn.expandByPoint(Jo.max))}Xn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)cn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(cn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,v=f.count;h<v;h++)cn.fromBufferAttribute(f,h),p&&($s.fromBufferAttribute(e,h),cn.add($s)),o=Math.max(o,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let T=0;T<r.count;T++)f[T]=new K,p[T]=new K;const h=new K,v=new K,x=new K,m=new Ne,S=new Ne,M=new Ne,w=new K,_=new K;function y(T,I,ce){h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,I),x.fromBufferAttribute(r,ce),m.fromBufferAttribute(l,T),S.fromBufferAttribute(l,I),M.fromBufferAttribute(l,ce),v.sub(h),x.sub(h),S.sub(m),M.sub(m);const W=1/(S.x*M.y-M.x*S.y);isFinite(W)&&(w.copy(v).multiplyScalar(M.y).addScaledVector(x,-S.y).multiplyScalar(W),_.copy(x).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(W),f[T].add(w),f[I].add(w),f[ce].add(w),p[T].add(_),p[I].add(_),p[ce].add(_))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,I=D.length;T<I;++T){const ce=D[T],W=ce.start,j=ce.count;for(let te=W,ae=W+j;te<ae;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const b=new K,P=new K,O=new K,F=new K;function B(T){O.fromBufferAttribute(o,T),F.copy(O);const I=f[T];b.copy(I),b.sub(O.multiplyScalar(O.dot(I))).normalize(),P.crossVectors(F,I);const W=P.dot(p[T])<0?-1:1;c.setXYZW(T,b.x,b.y,b.z,W)}for(let T=0,I=D.length;T<I;++T){const ce=D[T],W=ce.start,j=ce.count;for(let te=W,ae=W+j;te<ae;te+=3)B(e.getX(te+0)),B(e.getX(te+1)),B(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,S=r.count;m<S;m++)r.setXYZ(m,0,0,0);const o=new K,l=new K,c=new K,f=new K,p=new K,h=new K,v=new K,x=new K;if(e)for(let m=0,S=e.count;m<S;m+=3){const M=e.getX(m+0),w=e.getX(m+1),_=e.getX(m+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,_),v.subVectors(c,l),x.subVectors(o,l),v.cross(x),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,w),h.fromBufferAttribute(r,_),f.add(v),p.add(v),h.add(v),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(_,h.x,h.y,h.z)}else for(let m=0,S=t.count;m<S;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),v.subVectors(c,l),x.subVectors(o,l),v.cross(x),r.setXYZ(m+0,v.x,v.y,v.z),r.setXYZ(m+1,v.x,v.y,v.z),r.setXYZ(m+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(f,p){const h=f.array,v=f.itemSize,x=f.normalized,m=new h.constructor(p.length*v);let S=0,M=0;for(let w=0,_=p.length;w<_;w++){f.isInterleavedBufferAttribute?S=p[w]*f.data.stride+f.offset:S=p[w]*v;for(let y=0;y<v;y++)m[M++]=h[S++]}return new Zn(m,v,x)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=e(p,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let v=0,x=h.length;v<x;v++){const m=h[v],S=e(m,r);p.push(S)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let x=0,m=h.length;x<m;x++){const S=h[x];v.push(S.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(t))}const l=e.morphAttributes;for(const h in l){const v=[],x=l[h];for(let m=0,S=x.length;m<S;m++)v.push(x[m].clone(t));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,v=c.length;h<v;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ux{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xd,this.updateRanges=[],this.version=0,this.uuid=tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new K;class Mu{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Ri(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array),l=Ft(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){yu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new Zn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Fx=0;class ps extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=cs,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(r.blending=this.blending),this.side!==Fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nd&&(r.blendSrc=this.blendSrc),this.blendDst!==id&&(r.blendDst=this.blendDst),this.blendEquation!==os&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yd extends ps{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Zs;const Qo=new K,Ks=new K,Js=new K,Qs=new Ne,ea=new Ne,Tg=new zt,Bl=new K,ta=new K,kl=new K,o0=new Ne,Of=new Ne,a0=new Ne;class l0 extends pn{constructor(e=new Yd){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Ux(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Mu(r,3,0,!1)),Zs.setAttribute("uv",new Mu(r,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new Ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Tg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Js.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const c=this.center;zl(Bl.set(-.5,-.5,0),Js,c,Ks,o,l),zl(ta.set(.5,-.5,0),Js,c,Ks,o,l),zl(kl.set(.5,.5,0),Js,c,Ks,o,l),o0.set(0,0),Of.set(1,0),a0.set(1,1);let f=e.ray.intersectTriangle(Bl,ta,kl,!1,Qo);if(f===null&&(zl(ta.set(-.5,.5,0),Js,c,Ks,o,l),Of.set(0,1),f=e.ray.intersectTriangle(Bl,kl,ta,!1,Qo),f===null))return;const p=e.ray.origin.distanceTo(Qo);p<e.near||p>e.far||t.push({distance:p,point:Qo.clone(),uv:$n.getInterpolation(Qo,Bl,ta,kl,o0,Of,a0,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zl(s,e,t,r,o,l){Qs.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(ea.x=l*Qs.x-o*Qs.y,ea.y=o*Qs.x+l*Qs.y):ea.copy(Qs),s.copy(e),s.x+=ea.x,s.y+=ea.y,s.applyMatrix4(Tg)}const Ki=new K,Bf=new K,Vl=new K,Lr=new K,kf=new K,Hl=new K,zf=new K;class ch{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Bf.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Bf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Vl),f=Lr.dot(this.direction),p=-Lr.dot(Vl),h=Lr.lengthSq(),v=Math.abs(1-c*c);let x,m,S,M;if(v>0)if(x=c*p-f,m=c*f-p,M=l*v,x>=0)if(m>=-M)if(m<=M){const w=1/v;x*=w,m*=w,S=x*(x+c*m+2*f)+m*(c*x+m+2*p)+h}else m=l,x=Math.max(0,-(c*m+f)),S=-x*x+m*(m+2*p)+h;else m=-l,x=Math.max(0,-(c*m+f)),S=-x*x+m*(m+2*p)+h;else m<=-M?(x=Math.max(0,-(-c*l+f)),m=x>0?-l:Math.min(Math.max(-l,-p),l),S=-x*x+m*(m+2*p)+h):m<=M?(x=0,m=Math.min(Math.max(-l,-p),l),S=m*(m+2*p)+h):(x=Math.max(0,-(c*l+f)),m=x>0?l:Math.min(Math.max(-l,-p),l),S=-x*x+m*(m+2*p)+h);else m=c>0?-l:l,x=Math.max(0,-(c*m+f)),S=-x*x+m*(m+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Bf).addScaledVector(Vl,m),S}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),o=Ki.dot(Ki)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,p=r+c;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,p;const h=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),v>=0?(l=(e.min.y-m.y)*v,c=(e.max.y-m.y)*v):(l=(e.max.y-m.y)*v,c=(e.min.y-m.y)*v),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-m.z)*x,p=(e.max.z-m.z)*x):(f=(e.max.z-m.z)*x,p=(e.min.z-m.z)*x),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,r,o,l){kf.subVectors(t,e),Hl.subVectors(r,e),zf.crossVectors(kf,Hl);let c=this.direction.dot(zf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Lr.subVectors(this.origin,e);const p=f*this.direction.dot(Hl.crossVectors(Lr,Hl));if(p<0)return null;const h=f*this.direction.dot(kf.cross(Lr));if(h<0||p+h>c)return null;const v=-f*Lr.dot(zf);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Eu extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const u0=new zt,es=new ch,Gl=new ya,c0=new K,Wl=new K,Xl=new K,ql=new K,Vf=new K,Yl=new K,f0=new K,jl=new K;class yi extends pn{constructor(e=new tn,t=new Eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Yl.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const v=f[p],x=l[p];v!==0&&(Vf.fromBufferAttribute(x,e),c?Yl.addScaledVector(Vf,v):Yl.addScaledVector(Vf.sub(t),v))}t.add(Yl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Gl.copy(r.boundingSphere),Gl.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Gl.containsPoint(es.origin)===!1&&(es.intersectSphere(Gl,c0)===null||es.origin.distanceToSquared(c0)>(e.far-e.near)**2))&&(u0.copy(l).invert(),es.copy(e.ray).applyMatrix4(u0),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,m=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,w=m.length;M<w;M++){const _=m[M],y=c[_.materialIndex],D=Math.max(_.start,S.start),b=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let P=D,O=b;P<O;P+=3){const F=f.getX(P),B=f.getX(P+1),T=f.getX(P+2);o=$l(this,y,e,r,h,v,x,F,B,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let _=M,y=w;_<y;_+=3){const D=f.getX(_),b=f.getX(_+1),P=f.getX(_+2);o=$l(this,c,e,r,h,v,x,D,b,P),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let M=0,w=m.length;M<w;M++){const _=m[M],y=c[_.materialIndex],D=Math.max(_.start,S.start),b=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let P=D,O=b;P<O;P+=3){const F=P,B=P+1,T=P+2;o=$l(this,y,e,r,h,v,x,F,B,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let _=M,y=w;_<y;_+=3){const D=_,b=_+1,P=_+2;o=$l(this,c,e,r,h,v,x,D,b,P),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Ox(s,e,t,r,o,l,c,f){let p;if(e.side===Bn?p=r.intersectTriangle(c,l,o,!0,f):p=r.intersectTriangle(o,l,c,e.side===Fr,f),p===null)return null;jl.copy(f),jl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(jl);return h<t.near||h>t.far?null:{distance:h,point:jl.clone(),object:s}}function $l(s,e,t,r,o,l,c,f,p,h){s.getVertexPosition(f,Wl),s.getVertexPosition(p,Xl),s.getVertexPosition(h,ql);const v=Ox(s,e,t,r,Wl,Xl,ql,f0);if(v){const x=new K;$n.getBarycoord(f0,Wl,Xl,ql,x),o&&(v.uv=$n.getInterpolatedAttribute(o,f,p,h,x,new Ne)),l&&(v.uv1=$n.getInterpolatedAttribute(l,f,p,h,x,new Ne)),c&&(v.normal=$n.getInterpolatedAttribute(c,f,p,h,x,new K),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const m={a:f,b:p,c:h,normal:new K,materialIndex:0};$n.getNormal(Wl,Xl,ql,m.normal),v.face=m,v.barycoord=x}return v}class Bx extends Mn{constructor(e=null,t=1,r=1,o,l,c,f,p,h=hn,v=hn,x,m){super(null,c,f,p,h,v,o,l,x,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hf=new K,kx=new K,zx=new _t;class ss{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Hf.subVectors(r,t).cross(kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Hf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||zx.getNormalMatrix(e),o=this.coplanarPoint(Hf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ya,Vx=new Ne(.5,.5),Zl=new K;class fh{constructor(e=new ss,t=new ss,r=new ss,o=new ss,l=new ss,c=new ss){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Li,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],p=l[2],h=l[3],v=l[4],x=l[5],m=l[6],S=l[7],M=l[8],w=l[9],_=l[10],y=l[11],D=l[12],b=l[13],P=l[14],O=l[15];if(o[0].setComponents(h-c,S-v,y-M,O-D).normalize(),o[1].setComponents(h+c,S+v,y+M,O+D).normalize(),o[2].setComponents(h+f,S+x,y+w,O+b).normalize(),o[3].setComponents(h-f,S-x,y-w,O-b).normalize(),r)o[4].setComponents(p,m,_,P).normalize(),o[5].setComponents(h-p,S-m,y-_,O-P).normalize();else if(o[4].setComponents(h-p,S-m,y-_,O-P).normalize(),t===Li)o[5].setComponents(h+p,S+m,y+_,O+P).normalize();else if(t===pa)o[5].setComponents(p,m,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=Vx.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Zl.x=o.normal.x>0?e.max.x:e.min.x,Zl.y=o.normal.y>0?e.max.y:e.min.y,Zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oa extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tu=new K,wu=new K,d0=new zt,na=new ch,Kl=new ya,Gf=new K,h0=new K;class wg extends pn{constructor(e=new tn,t=new oa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Tu.fromBufferAttribute(t,o-1),wu.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Tu.distanceTo(wu);e.setAttribute("lineDistance",new Jt(r,1))}else pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(o),Kl.radius+=l,e.ray.intersectsSphere(Kl)===!1)return;d0.copy(o).invert(),na.copy(e.ray).applyMatrix4(d0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,v=r.index,m=r.attributes.position;if(v!==null){const S=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let w=S,_=M-1;w<_;w+=h){const y=v.getX(w),D=v.getX(w+1),b=Jl(this,e,na,p,y,D,w);b&&t.push(b)}if(this.isLineLoop){const w=v.getX(M-1),_=v.getX(S),y=Jl(this,e,na,p,w,_,M-1);y&&t.push(y)}}else{const S=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let w=S,_=M-1;w<_;w+=h){const y=Jl(this,e,na,p,w,w+1,w);y&&t.push(y)}if(this.isLineLoop){const w=Jl(this,e,na,p,M-1,S,M-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Jl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(Tu.fromBufferAttribute(f,o),wu.fromBufferAttribute(f,l),t.distanceSqToSegment(Tu,wu,Gf,h0)>r)return;Gf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Gf);if(!(h<e.near||h>e.far))return{distance:h,point:h0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const p0=new K,m0=new K;class Wf extends wg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)p0.fromBufferAttribute(t,o),m0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+p0.distanceTo(m0);e.setAttribute("lineDistance",new Jt(r,1))}else pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class g0 extends wg{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ag extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const v0=new zt,jd=new ch,Ql=new ya,eu=new K;class Hx extends pn{constructor(e=new tn,t=new Ag){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(o),Ql.radius+=l,e.ray.intersectsSphere(Ql)===!1)return;v0.copy(o).invert(),jd.copy(e.ray).applyMatrix4(v0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=r.index,x=r.attributes.position;if(h!==null){const m=Math.max(0,c.start),S=Math.min(h.count,c.start+c.count);for(let M=m,w=S;M<w;M++){const _=h.getX(M);eu.fromBufferAttribute(x,_),_0(eu,_,p,o,e,t,this)}}else{const m=Math.max(0,c.start),S=Math.min(x.count,c.start+c.count);for(let M=m,w=S;M<w;M++)eu.fromBufferAttribute(x,M),_0(eu,M,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function _0(s,e,t,r,o,l,c){const f=jd.distanceSqToPoint(s);if(f<t){const p=new K;jd.closestPointToPoint(s,p),p.applyMatrix4(r);const h=o.ray.origin.distanceTo(p);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Cg extends Mn{constructor(e=[],t=ds,r,o,l,c,f,p,h,v){super(e,t,r,o,l,c,f,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x0 extends Mn{constructor(e,t,r,o,l,c,f,p,h){super(e,t,r,o,l,c,f,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ma extends Mn{constructor(e,t,r=Ii,o,l,c,f=hn,p=hn,h,v=sr,x=1){if(v!==sr&&v!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:x};super(m,o,l,c,f,p,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gx extends ma{constructor(e,t=Ii,r=ds,o,l,c=hn,f=hn,p,h=sr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,r,o,l,c,f,p,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bg extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sa extends tn{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const p=[],h=[],v=[],x=[];let m=0,S=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(x,2));function M(w,_,y,D,b,P,O,F,B,T,I){const ce=P/B,W=O/T,j=P/2,te=O/2,ae=F/2,se=B+1,re=T+1;let X=0,H=0;const le=new K;for(let fe=0;fe<re;fe++){const V=fe*W-te;for(let ne=0;ne<se;ne++){const ke=ne*ce-j;le[w]=ke*D,le[_]=V*b,le[y]=ae,h.push(le.x,le.y,le.z),le[w]=0,le[_]=0,le[y]=F>0?1:-1,v.push(le.x,le.y,le.z),x.push(ne/B),x.push(1-fe/T),X+=1}}for(let fe=0;fe<T;fe++)for(let V=0;V<B;V++){const ne=m+V+se*fe,ke=m+V+se*(fe+1),$=m+(V+1)+se*(fe+1),G=m+(V+1)+se*fe;p.push(ne,ke,G),p.push(ke,$,G),H+=6}f.addGroup(S,H,I),S+=H,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dh extends tn{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],c=[],f=[],p=[],h=new K,v=new Ne;c.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let x=0,m=3;x<=t;x++,m+=3){const S=r+x/t*o;h.x=e*Math.cos(S),h.y=e*Math.sin(S),c.push(h.x,h.y,h.z),f.push(0,0,1),v.x=(c[m]/e+1)/2,v.y=(c[m+1]/e+1)/2,p.push(v.x,v.y)}for(let x=1;x<=t;x++)l.push(x,x+1,0);this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const tu=new K,nu=new K,Xf=new K,iu=new $n;class Wx extends tn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(gu*t),c=e.getIndex(),f=e.getAttribute("position"),p=c?c.count:f.count,h=[0,0,0],v=["a","b","c"],x=new Array(3),m={},S=[];for(let M=0;M<p;M+=3){c?(h[0]=c.getX(M),h[1]=c.getX(M+1),h[2]=c.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:w,b:_,c:y}=iu;if(w.fromBufferAttribute(f,h[0]),_.fromBufferAttribute(f,h[1]),y.fromBufferAttribute(f,h[2]),iu.getNormal(Xf),x[0]=`${Math.round(w.x*o)},${Math.round(w.y*o)},${Math.round(w.z*o)}`,x[1]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,x[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let D=0;D<3;D++){const b=(D+1)%3,P=x[D],O=x[b],F=iu[v[D]],B=iu[v[b]],T=`${P}_${O}`,I=`${O}_${P}`;I in m&&m[I]?(Xf.dot(m[I].normal)<=l&&(S.push(F.x,F.y,F.z),S.push(B.x,B.y,B.z)),m[I]=null):T in m||(m[T]={index0:h[D],index1:h[b],normal:Xf.clone()})}}for(const M in m)if(m[M]){const{index0:w,index1:_}=m[M];tu.fromBufferAttribute(f,w),nu.fromBufferAttribute(f,_),S.push(tu.x,tu.y,tu.z),S.push(nu.x,nu.y,nu.z)}this.setAttribute("position",new Jt(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,p=l-1,h;for(;f<=p;)if(o=Math.floor(f+(p-f)/2),h=r[o]-c,h<0)f=o+1;else if(h>0)p=o-1;else{p=o;break}if(o=p,r[o]===c)return o/(l-1);const v=r[o],m=r[o+1]-v,S=(c-v)/m;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),p=t||(c.isVector2?new Ne:new K);return p.copy(f).sub(c).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new K,o=[],l=[],c=[],f=new K,p=new zt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new K)}l[0]=new K,c[0]=new K;let h=Number.MAX_VALUE;const v=Math.abs(o[0].x),x=Math.abs(o[0].y),m=Math.abs(o[0].z);v<=h&&(h=v,r.set(1,0,0)),x<=h&&(h=x,r.set(0,1,0)),m<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Mt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(p.makeRotationAxis(f,M))}c[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Mt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(p.makeRotationAxis(o[M],S*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hh extends Fi{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=p}getPoint(e,t=new Ne){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(f),h=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),x=Math.sin(this.aRotation),m=p-this.aX,S=h-this.aY;p=m*v-S*x+this.aX,h=m*x+S*v+this.aY}return r.set(p,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xx extends hh{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function ph(){let s=0,e=0,t=0,r=0;function o(l,c,f,p){s=l,e=f,t=-3*l+3*c-2*f-p,r=2*l-2*c+f+p}return{initCatmullRom:function(l,c,f,p,h){o(c,f,h*(f-l),h*(p-c))},initNonuniformCatmullRom:function(l,c,f,p,h,v,x){let m=(c-l)/h-(f-l)/(h+v)+(f-c)/v,S=(f-c)/v-(p-c)/(v+x)+(p-f)/x;m*=v,S*=v,o(c,f,m,S)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const ru=new K,qf=new ph,Yf=new ph,jf=new ph;class qx extends Fi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new K){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),p=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:p===0&&f===l-1&&(f=l-2,p=1);let h,v;this.closed||f>0?h=o[(f-1)%l]:(ru.subVectors(o[0],o[1]).add(o[0]),h=ru);const x=o[f%l],m=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(ru.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=ru),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(x),S),w=Math.pow(x.distanceToSquared(m),S),_=Math.pow(m.distanceToSquared(v),S);w<1e-4&&(w=1),M<1e-4&&(M=w),_<1e-4&&(_=w),qf.initNonuniformCatmullRom(h.x,x.x,m.x,v.x,M,w,_),Yf.initNonuniformCatmullRom(h.y,x.y,m.y,v.y,M,w,_),jf.initNonuniformCatmullRom(h.z,x.z,m.z,v.z,M,w,_)}else this.curveType==="catmullrom"&&(qf.initCatmullRom(h.x,x.x,m.x,v.x,this.tension),Yf.initCatmullRom(h.y,x.y,m.y,v.y,this.tension),jf.initCatmullRom(h.z,x.z,m.z,v.z,this.tension));return r.set(qf.calc(p),Yf.calc(p),jf.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new K().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function y0(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,p=s*f;return(2*t-2*r+l+c)*p+(-3*t+3*r-2*l-c)*f+l*s+t}function Yx(s,e){const t=1-s;return t*t*e}function jx(s,e){return 2*(1-s)*s*e}function $x(s,e){return s*s*e}function ca(s,e,t,r){return Yx(s,e)+jx(s,t)+$x(s,r)}function Zx(s,e){const t=1-s;return t*t*t*e}function Kx(s,e){const t=1-s;return 3*t*t*s*e}function Jx(s,e){return 3*(1-s)*s*s*e}function Qx(s,e){return s*s*s*e}function fa(s,e,t,r,o){return Zx(s,e)+Kx(s,t)+Jx(s,r)+Qx(s,o)}class Rg extends Fi{constructor(e=new Ne,t=new Ne,r=new Ne,o=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ne){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(fa(e,o.x,l.x,c.x,f.x),fa(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ey extends Fi{constructor(e=new K,t=new K,r=new K,o=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new K){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(fa(e,o.x,l.x,c.x,f.x),fa(e,o.y,l.y,c.y,f.y),fa(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pg extends Fi{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ty extends Fi{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lg extends Fi{constructor(e=new Ne,t=new Ne,r=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ne){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(ca(e,o.x,l.x,c.x),ca(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ny extends Fi{constructor(e=new K,t=new K,r=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new K){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(ca(e,o.x,l.x,c.x),ca(e,o.y,l.y,c.y),ca(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dg extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,p=o[c===0?c:c-1],h=o[c],v=o[c>o.length-2?o.length-1:c+1],x=o[c>o.length-3?o.length-1:c+2];return r.set(y0(f,p.x,h.x,v.x,x.x),y0(f,p.y,h.y,v.y,x.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ne().fromArray(o))}return this}}var S0=Object.freeze({__proto__:null,ArcCurve:Xx,CatmullRomCurve3:qx,CubicBezierCurve:Rg,CubicBezierCurve3:ey,EllipseCurve:hh,LineCurve:Pg,LineCurve3:ty,QuadraticBezierCurve:Lg,QuadraticBezierCurve3:ny,SplineCurve:Dg});class iy extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new S0[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const c=o[l]-r,f=this.curves[l],p=f.getLength(),h=p===0?0:1-c/p;return f.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,p=c.getPoints(f);for(let h=0;h<p.length;h++){const v=p[h];r&&r.equals(v)||(t.push(v),r=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new S0[o.type]().fromJSON(o))}return this}}class ro extends iy{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Pg(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new Lg(this.currentPoint.clone(),new Ne(e,t),new Ne(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,c){const f=new Rg(this.currentPoint.clone(),new Ne(e,t),new Ne(r,o),new Ne(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Dg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,c){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+f,t+p,r,o,l,c),this}absarc(e,t,r,o,l,c){return this.absellipse(e,t,r,r,o,l,c),this}ellipse(e,t,r,o,l,c,f,p){const h=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+h,t+v,r,o,l,c,f,p),this}absellipse(e,t,r,o,l,c,f,p){const h=new hh(e,t,r,o,l,c,f,p);if(this.curves.length>0){const x=h.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(h);const v=h.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class so extends ro{constructor(e){super(e),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new ro().fromJSON(o))}return this}}function ry(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=Ng(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,p,h;if(r&&(l=uy(s,e,l,t)),s.length>80*t){f=s[0],p=s[1];let v=f,x=p;for(let m=t;m<o;m+=t){const S=s[m],M=s[m+1];S<f&&(f=S),M<p&&(p=M),S>v&&(v=S),M>x&&(x=M)}h=Math.max(v-f,x-p),h=h!==0?32767/h:0}return ga(l,c,t,f,p,h,0),c}function Ng(s,e,t,r,o){let l;if(o===yy(s,e,t,r)>0)for(let c=e;c<t;c+=r)l=M0(c/r|0,s[c],s[c+1],l);else for(let c=t-r;c>=e;c-=r)l=M0(c/r|0,s[c],s[c+1],l);return l&&co(l,l.next)&&(_a(l),l=l.next),l}function hs(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(co(t,t.next)||qt(t.prev,t,t.next)===0)){if(_a(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ga(s,e,t,r,o,l,c){if(!s)return;!c&&l&&py(s,r,o,l);let f=s;for(;s.prev!==s.next;){const p=s.prev,h=s.next;if(l?oy(s,r,o,l):sy(s)){e.push(p.i,s.i,h.i),_a(s),s=h.next,f=h.next;continue}if(s=h,s===f){c?c===1?(s=ay(hs(s),e),ga(s,e,t,r,o,l,2)):c===2&&ly(s,e,t,r,o,l):ga(hs(s),e,t,r,o,l,1);break}}}function sy(s){const e=s.prev,t=s,r=s.next;if(qt(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,f=e.y,p=t.y,h=r.y,v=Math.min(o,l,c),x=Math.min(f,p,h),m=Math.max(o,l,c),S=Math.max(f,p,h);let M=r.next;for(;M!==e;){if(M.x>=v&&M.x<=m&&M.y>=x&&M.y<=S&&aa(o,f,l,p,c,h,M.x,M.y)&&qt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function oy(s,e,t,r){const o=s.prev,l=s,c=s.next;if(qt(o,l,c)>=0)return!1;const f=o.x,p=l.x,h=c.x,v=o.y,x=l.y,m=c.y,S=Math.min(f,p,h),M=Math.min(v,x,m),w=Math.max(f,p,h),_=Math.max(v,x,m),y=$d(S,M,e,t,r),D=$d(w,_,e,t,r);let b=s.prevZ,P=s.nextZ;for(;b&&b.z>=y&&P&&P.z<=D;){if(b.x>=S&&b.x<=w&&b.y>=M&&b.y<=_&&b!==o&&b!==c&&aa(f,v,p,x,h,m,b.x,b.y)&&qt(b.prev,b,b.next)>=0||(b=b.prevZ,P.x>=S&&P.x<=w&&P.y>=M&&P.y<=_&&P!==o&&P!==c&&aa(f,v,p,x,h,m,P.x,P.y)&&qt(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;b&&b.z>=y;){if(b.x>=S&&b.x<=w&&b.y>=M&&b.y<=_&&b!==o&&b!==c&&aa(f,v,p,x,h,m,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;P&&P.z<=D;){if(P.x>=S&&P.x<=w&&P.y>=M&&P.y<=_&&P!==o&&P!==c&&aa(f,v,p,x,h,m,P.x,P.y)&&qt(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function ay(s,e){let t=s;do{const r=t.prev,o=t.next.next;!co(r,o)&&Ug(r,t,t.next,o)&&va(r,o)&&va(o,r)&&(e.push(r.i,t.i,o.i),_a(t),_a(t.next),t=s=o),t=t.next}while(t!==s);return hs(t)}function ly(s,e,t,r,o,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&vy(c,f)){let p=Fg(c,f);c=hs(c,c.next),p=hs(p,p.next),ga(c,e,t,r,o,l,0),ga(p,e,t,r,o,l,0);return}f=f.next}c=c.next}while(c!==s)}function uy(s,e,t,r){const o=[];for(let l=0,c=e.length;l<c;l++){const f=e[l]*r,p=l<c-1?e[l+1]*r:s.length,h=Ng(s,f,p,r,!1);h===h.next&&(h.steiner=!0),o.push(gy(h))}o.sort(cy);for(let l=0;l<o.length;l++)t=fy(o[l],t);return t}function cy(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function fy(s,e){const t=dy(s,e);if(!t)return e;const r=Fg(t,s);return hs(r,r.next),hs(t,t.next)}function dy(s,e){let t=e;const r=s.x,o=s.y;let l=-1/0,c;if(co(s,t))return t;do{if(co(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const x=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=r&&x>l&&(l=x,c=t.x<t.next.x?t:t.next,x===r))return c}t=t.next}while(t!==e);if(!c)return null;const f=c,p=c.x,h=c.y;let v=1/0;t=c;do{if(r>=t.x&&t.x>=p&&r!==t.x&&Ig(o<h?r:l,o,p,h,o<h?l:r,o,t.x,t.y)){const x=Math.abs(o-t.y)/(r-t.x);va(t,s)&&(x<v||x===v&&(t.x>c.x||t.x===c.x&&hy(c,t)))&&(c=t,v=x)}t=t.next}while(t!==f);return c}function hy(s,e){return qt(s.prev,s,e.prev)<0&&qt(e.next,s,s.next)<0}function py(s,e,t,r){let o=s;do o.z===0&&(o.z=$d(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,my(o)}function my(s){let e,t=1;do{let r=s,o;s=null;let l=null;for(e=0;r;){e++;let c=r,f=0;for(let h=0;h<t&&(f++,c=c.nextZ,!!c);h++);let p=t;for(;f>0||p>0&&c;)f!==0&&(p===0||!c||r.z<=c.z)?(o=r,r=r.nextZ,f--):(o=c,c=c.nextZ,p--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;r=c}l.nextZ=null,t*=2}while(e>1);return s}function $d(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function gy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ig(s,e,t,r,o,l,c,f){return(o-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(o-c)*(r-f)}function aa(s,e,t,r,o,l,c,f){return!(s===c&&e===f)&&Ig(s,e,t,r,o,l,c,f)}function vy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!_y(s,e)&&(va(s,e)&&va(e,s)&&xy(s,e)&&(qt(s.prev,s,e.prev)||qt(s,e.prev,e))||co(s,e)&&qt(s.prev,s,s.next)>0&&qt(e.prev,e,e.next)>0)}function qt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function co(s,e){return s.x===e.x&&s.y===e.y}function Ug(s,e,t,r){const o=ou(qt(s,e,t)),l=ou(qt(s,e,r)),c=ou(qt(t,r,s)),f=ou(qt(t,r,e));return!!(o!==l&&c!==f||o===0&&su(s,t,e)||l===0&&su(s,r,e)||c===0&&su(t,s,r)||f===0&&su(t,e,r))}function su(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ou(s){return s>0?1:s<0?-1:0}function _y(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ug(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function va(s,e){return qt(s.prev,s,s.next)<0?qt(s,e,s.next)>=0&&qt(s,s.prev,e)>=0:qt(s,e,s.prev)<0||qt(s,s.next,e)<0}function xy(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function Fg(s,e){const t=Zd(s.i,s.x,s.y),r=Zd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function M0(s,e,t,r){const o=Zd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function _a(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yy(s,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class Sy{static triangulate(e,t,r=2){return ry(e,t,r)}}class fs{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return fs.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];E0(e),T0(r,e);let c=e.length;t.forEach(E0);for(let p=0;p<t.length;p++)o.push(c),c+=t[p].length,T0(r,t[p]);const f=Sy.triangulate(r,o);for(let p=0;p<f.length;p+=3)l.push(f.slice(p,p+3));return l}}function E0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function T0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Ru extends tn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),p=Math.floor(o),h=f+1,v=p+1,x=e/f,m=t/p,S=[],M=[],w=[],_=[];for(let y=0;y<v;y++){const D=y*m-c;for(let b=0;b<h;b++){const P=b*x-l;M.push(P,-D,0),w.push(0,0,1),_.push(b/f),_.push(1-y/p)}}for(let y=0;y<p;y++)for(let D=0;D<f;D++){const b=D+h*y,P=D+h*(y+1),O=D+1+h*(y+1),F=D+1+h*y;S.push(b,P,F),S.push(P,O,F)}this.setIndex(S),this.setAttribute("position",new Jt(M,3)),this.setAttribute("normal",new Jt(w,3)),this.setAttribute("uv",new Jt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.width,e.height,e.widthSegments,e.heightSegments)}}class Au extends tn{constructor(e=new so([new Ne(0,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],l=[],c=[];let f=0,p=0;if(Array.isArray(e)===!1)h(e);else for(let v=0;v<e.length;v++)h(e[v]),this.addGroup(f,p,v),f+=p,p=0;this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2));function h(v){const x=o.length/3,m=v.extractPoints(t);let S=m.shape;const M=m.holes;fs.isClockWise(S)===!1&&(S=S.reverse());for(let _=0,y=M.length;_<y;_++){const D=M[_];fs.isClockWise(D)===!0&&(M[_]=D.reverse())}const w=fs.triangulateShape(S,M);for(let _=0,y=M.length;_<y;_++){const D=M[_];S=S.concat(D)}for(let _=0,y=S.length;_<y;_++){const D=S[_];o.push(D.x,D.y,0),l.push(0,0,1),c.push(D.x,D.y)}for(let _=0,y=w.length;_<y;_++){const D=w[_],b=D[0]+x,P=D[1]+x,O=D[2]+x;r.push(b,P,O),p+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return My(t,e)}static fromJSON(e,t){const r=[];for(let o=0,l=e.shapes.length;o<l;o++){const c=t[e.shapes[o]];r.push(c)}return new Au(r,e.curveSegments)}}function My(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}function fo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function bn(s){const e={};for(let t=0;t<s.length;t++){const r=fo(s[t]);for(const o in r)e[o]=r[o]}return e}function Ey(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Og(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Ty={clone:fo,merge:bn};var wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wy,this.fragmentShader=Ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=Ey(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Cy extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class by extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ry extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const w0={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(A0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!A0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function A0(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Py{constructor(e,t,r){const o=this;let l=!1,c=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(v){f++,l===!1&&o.onStart!==void 0&&o.onStart(v,c,f),l=!0},this.itemEnd=function(v){c++,o.onProgress!==void 0&&o.onProgress(v,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,x){return h.push(v,x),this},this.removeHandler=function(v){const x=h.indexOf(v);return x!==-1&&h.splice(x,2),this},this.getHandler=function(v){for(let x=0,m=h.length;x<m;x+=2){const S=h[x],M=h[x+1];if(S.global&&(S.lastIndex=0),S.test(v))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ly=new Py;class mh{constructor(e){this.manager=e!==void 0?e:Ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji={};class Dy extends Error{constructor(e,t){super(e),this.response=t}}class Ny extends mh{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=w0.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:r,onError:o});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:r,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&pt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const v=Ji[e],x=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),S=m?parseInt(m):0,M=S!==0;let w=0;const _=new ReadableStream({start(y){D();function D(){x.read().then(({done:b,value:P})=>{if(b)y.close();else{w+=P.byteLength;const O=new ProgressEvent("progress",{lengthComputable:M,loaded:w,total:S});for(let F=0,B=v.length;F<B;F++){const T=v[F];T.onProgress&&T.onProgress(O)}y.enqueue(P),D()}},b=>{y.error(b)})}}});return new Response(_)}else throw new Dy(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(v=>new DOMParser().parseFromString(v,f));case"json":return h.json();default:if(f==="")return h.text();{const x=/charset="?([^;"\s]*)"?/i.exec(f),m=x&&x[1]?x[1].toLowerCase():void 0,S=new TextDecoder(m);return h.arrayBuffer().then(M=>S.decode(M))}}}).then(h=>{w0.add(`file:${e}`,h);const v=Ji[e];delete Ji[e];for(let x=0,m=v.length;x<m;x++){const S=v[x];S.onLoad&&S.onLoad(h)}}).catch(h=>{const v=Ji[e];if(v===void 0)throw this.manager.itemError(e),h;delete Ji[e];for(let x=0,m=v.length;x<m;x++){const S=v[x];S.onError&&S.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Bg extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const $f=new zt,C0=new K,b0=new K;class Iy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;C0.setFromMatrixPosition(e.matrixWorld),t.position.copy(C0),b0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(b0),t.updateMatrixWorld(),$f.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($f,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===pa||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply($f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const au=new K,lu=new nr,Ai=new K;class kg extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(au,lu,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(au,lu,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(au,lu,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(au,lu,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new K,R0=new Ne,P0=new Ne;class Yn extends kg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qd*2*Math.atan(Math.tan(gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,R0,P0),t.subVectors(P0,R0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/p,t-=c.offsetY*r/h,o*=c.width/p,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Uy extends Iy{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Fy extends Bg{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Uy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class zg extends kg{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Oy extends Bg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const eo=-90,to=1;class By extends pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(eo,to,e,t);o.layers=this.layers,this.add(o);const l=new Yn(eo,to,e,t);l.layers=this.layers,this.add(l);const c=new Yn(eo,to,e,t);c.layers=this.layers,this.add(c);const f=new Yn(eo,to,e,t);f.layers=this.layers,this.add(f);const p=new Yn(eo,to,e,t);p.layers=this.layers,this.add(p);const h=new Yn(eo,to,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,p]=t;for(const h of t)this.remove(h);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===pa)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,h,v]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,m,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class ky extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const L0=new Ne;class zy{constructor(e=new Ne(1/0,1/0),t=new Ne(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=L0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,L0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class ns{constructor(){this.type="ShapePath",this.color=new Rt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ro,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,r,o){return this.currentPath.quadraticCurveTo(e,t,r,o),this}bezierCurveTo(e,t,r,o,l,c){return this.currentPath.bezierCurveTo(e,t,r,o,l,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(y){const D=[];for(let b=0,P=y.length;b<P;b++){const O=y[b],F=new so;F.curves=O.curves,D.push(F)}return D}function r(y,D){const b=D.length;let P=!1;for(let O=b-1,F=0;F<b;O=F++){let B=D[O],T=D[F],I=T.x-B.x,ce=T.y-B.y;if(Math.abs(ce)>Number.EPSILON){if(ce<0&&(B=D[F],I=-I,T=D[O],ce=-ce),y.y<B.y||y.y>T.y)continue;if(y.y===B.y){if(y.x===B.x)return!0}else{const W=ce*(y.x-B.x)-I*(y.y-B.y);if(W===0)return!0;if(W<0)continue;P=!P}}else{if(y.y!==B.y)continue;if(T.x<=y.x&&y.x<=B.x||B.x<=y.x&&y.x<=T.x)return!0}}return P}const o=fs.isClockWise,l=this.subPaths;if(l.length===0)return[];let c,f,p;const h=[];if(l.length===1)return f=l[0],p=new so,p.curves=f.curves,h.push(p),h;let v=!o(l[0].getPoints());v=e?!v:v;const x=[],m=[];let S=[],M=0,w;m[M]=void 0,S[M]=[];for(let y=0,D=l.length;y<D;y++)f=l[y],w=f.getPoints(),c=o(w),c=e?!c:c,c?(!v&&m[M]&&M++,m[M]={s:new so,p:w},m[M].s.curves=f.curves,v&&M++,S[M]=[]):S[M].push({h:f,p:w[0]});if(!m[0])return t(l);if(m.length>1){let y=!1,D=0;for(let b=0,P=m.length;b<P;b++)x[b]=[];for(let b=0,P=m.length;b<P;b++){const O=S[b];for(let F=0;F<O.length;F++){const B=O[F];let T=!0;for(let I=0;I<m.length;I++)r(B.p,m[I].p)&&(b!==I&&D++,T?(T=!1,x[I].push(B)):y=!0);T&&x[b].push(B)}}D>0&&y===!1&&(S=x)}let _;for(let y=0,D=m.length;y<D;y++){p=m[y].s,h.push(p),_=S[y];for(let b=0,P=_.length;b<P;b++)p.holes.push(_[b].h)}return h}}function D0(s,e,t,r){const o=Vy(r);switch(t){case mg:return s*e;case vg:return s*e/o.components*o.byteLength;case rh:return s*e/o.components*o.byteLength;case lo:return s*e*2/o.components*o.byteLength;case sh:return s*e*2/o.components*o.byteLength;case gg:return s*e*3/o.components*o.byteLength;case _i:return s*e*4/o.components*o.byteLength;case oh:return s*e*4/o.components*o.byteLength;case du:case hu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:case gd:return Math.max(s,16)*Math.max(e,8)/4;case hd:case md:return Math.max(s,8)*Math.max(e,8)/2;case vd:case _d:case yd:case Sd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xd:case Md:case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bd:case kd:case zd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vd:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gd:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vy(s){switch(s){case jn:case fg:return{byteLength:1,components:1};case da:case dg:case rr:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case Ii:case th:case Pi:return{byteLength:4,components:1};case hg:case pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eh}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vg(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Hy(s){const e=new WeakMap;function t(f,p){const h=f.array,v=f.usage,x=h.byteLength,m=s.createBuffer();s.bindBuffer(p,m),s.bufferData(p,h,v),f.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,p,h){const v=p.array,x=p.updateRanges;if(s.bindBuffer(h,f),x.length===0)s.bufferSubData(h,0,v);else{x.sort((S,M)=>S.start-M.start);let m=0;for(let S=1;S<x.length;S++){const M=x[m],w=x[S];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++m,x[m]=w)}x.length=m+1;for(let S=0,M=x.length;S<M;S++){const w=x[S];s.bufferSubData(h,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,p),h.version=f.version}}return{get:o,remove:l,update:c}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$y=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ky=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xS="gl_FragColor = linearToOutputTexel( gl_FragColor );",yS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,US=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$S=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$M=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:Gy,alphahash_pars_fragment:Wy,alphamap_fragment:Xy,alphamap_pars_fragment:qy,alphatest_fragment:Yy,alphatest_pars_fragment:jy,aomap_fragment:$y,aomap_pars_fragment:Zy,batching_pars_vertex:Ky,batching_vertex:Jy,begin_vertex:Qy,beginnormal_vertex:eS,bsdfs:tS,iridescence_fragment:nS,bumpmap_pars_fragment:iS,clipping_planes_fragment:rS,clipping_planes_pars_fragment:sS,clipping_planes_pars_vertex:oS,clipping_planes_vertex:aS,color_fragment:lS,color_pars_fragment:uS,color_pars_vertex:cS,color_vertex:fS,common:dS,cube_uv_reflection_fragment:hS,defaultnormal_vertex:pS,displacementmap_pars_vertex:mS,displacementmap_vertex:gS,emissivemap_fragment:vS,emissivemap_pars_fragment:_S,colorspace_fragment:xS,colorspace_pars_fragment:yS,envmap_fragment:SS,envmap_common_pars_fragment:MS,envmap_pars_fragment:ES,envmap_pars_vertex:TS,envmap_physical_pars_fragment:US,envmap_vertex:wS,fog_vertex:AS,fog_pars_vertex:CS,fog_fragment:bS,fog_pars_fragment:RS,gradientmap_pars_fragment:PS,lightmap_pars_fragment:LS,lights_lambert_fragment:DS,lights_lambert_pars_fragment:NS,lights_pars_begin:IS,lights_toon_fragment:FS,lights_toon_pars_fragment:OS,lights_phong_fragment:BS,lights_phong_pars_fragment:kS,lights_physical_fragment:zS,lights_physical_pars_fragment:VS,lights_fragment_begin:HS,lights_fragment_maps:GS,lights_fragment_end:WS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:qS,logdepthbuf_pars_vertex:YS,logdepthbuf_vertex:jS,map_fragment:$S,map_pars_fragment:ZS,map_particle_fragment:KS,map_particle_pars_fragment:JS,metalnessmap_fragment:QS,metalnessmap_pars_fragment:eM,morphinstance_vertex:tM,morphcolor_vertex:nM,morphnormal_vertex:iM,morphtarget_pars_vertex:rM,morphtarget_vertex:sM,normal_fragment_begin:oM,normal_fragment_maps:aM,normal_pars_fragment:lM,normal_pars_vertex:uM,normal_vertex:cM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:dM,clearcoat_normal_fragment_maps:hM,clearcoat_pars_fragment:pM,iridescence_pars_fragment:mM,opaque_fragment:gM,packing:vM,premultiplied_alpha_fragment:_M,project_vertex:xM,dithering_fragment:yM,dithering_pars_fragment:SM,roughnessmap_fragment:MM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:TM,shadowmap_pars_vertex:wM,shadowmap_vertex:AM,shadowmask_pars_fragment:CM,skinbase_vertex:bM,skinning_pars_vertex:RM,skinning_vertex:PM,skinnormal_vertex:LM,specularmap_fragment:DM,specularmap_pars_fragment:NM,tonemapping_fragment:IM,tonemapping_pars_fragment:UM,transmission_fragment:FM,transmission_pars_fragment:OM,uv_pars_fragment:BM,uv_pars_vertex:kM,uv_vertex:zM,worldpos_vertex:VM,background_vert:HM,background_frag:GM,backgroundCube_vert:WM,backgroundCube_frag:XM,cube_vert:qM,cube_frag:YM,depth_vert:jM,depth_frag:$M,distance_vert:ZM,distance_frag:KM,equirect_vert:JM,equirect_frag:QM,linedashed_vert:e1,linedashed_frag:t1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:r1,meshlambert_frag:s1,meshmatcap_vert:o1,meshmatcap_frag:a1,meshnormal_vert:l1,meshnormal_frag:u1,meshphong_vert:c1,meshphong_frag:f1,meshphysical_vert:d1,meshphysical_frag:h1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:v1,shadow_vert:_1,shadow_frag:x1,sprite_vert:y1,sprite_frag:S1},qe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},bi={basic:{uniforms:bn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:bn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:bn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:bn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:bn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:bn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:bn([qe.points,qe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:bn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:bn([qe.common,qe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:bn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:bn([qe.sprite,qe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:bn([qe.common,qe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:bn([qe.lights,qe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};bi.physical={uniforms:bn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const uu={r:0,b:0,g:0},is=new xi,M1=new zt;function E1(s,e,t,r,o,l){const c=new Rt(0);let f=o===!0?0:1,p,h,v=null,x=0,m=null;function S(D){let b=D.isScene===!0?D.background:null;if(b&&b.isTexture){const P=D.backgroundBlurriness>0;b=e.get(b,P)}return b}function M(D){let b=!1;const P=S(D);P===null?_(c,f):P&&P.isColor&&(_(P,1),b=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(D,b){const P=S(b);P&&(P.isCubeTexture||P.mapping===bu)?(h===void 0&&(h=new yi(new Sa(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:fo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,F,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),is.copy(b.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(is)),h.material.toneMapped=bt.getTransfer(P.colorSpace)!==Ut,(v!==P||x!==P.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,v=P,x=P.version,m=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new yi(new Ru(2,2),new Ui({name:"BackgroundMaterial",uniforms:fo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=bt.getTransfer(P.colorSpace)!==Ut,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||x!==P.version||m!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,x=P.version,m=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function _(D,b){D.getRGB(uu,Og(s)),t.buffers.color.setClear(uu.r,uu.g,uu.b,b,l)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,b=1){c.set(D),f=b,_(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,_(c,f)},render:M,addToRenderList:w,dispose:y}}function T1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,c=!1;function f(W,j,te,ae,se){let re=!1;const X=x(W,ae,te,j);l!==X&&(l=X,h(l.object)),re=S(W,ae,te,se),re&&M(W,ae,te,se),se!==null&&e.update(se,s.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,P(W,j,te,ae),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function p(){return s.createVertexArray()}function h(W){return s.bindVertexArray(W)}function v(W){return s.deleteVertexArray(W)}function x(W,j,te,ae){const se=ae.wireframe===!0;let re=r[j.id];re===void 0&&(re={},r[j.id]=re);const X=W.isInstancedMesh===!0?W.id:0;let H=re[X];H===void 0&&(H={},re[X]=H);let le=H[te.id];le===void 0&&(le={},H[te.id]=le);let fe=le[se];return fe===void 0&&(fe=m(p()),le[se]=fe),fe}function m(W){const j=[],te=[],ae=[];for(let se=0;se<t;se++)j[se]=0,te[se]=0,ae[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:te,attributeDivisors:ae,object:W,attributes:{},index:null}}function S(W,j,te,ae){const se=l.attributes,re=j.attributes;let X=0;const H=te.getAttributes();for(const le in H)if(H[le].location>=0){const V=se[le];let ne=re[le];if(ne===void 0&&(le==="instanceMatrix"&&W.instanceMatrix&&(ne=W.instanceMatrix),le==="instanceColor"&&W.instanceColor&&(ne=W.instanceColor)),V===void 0||V.attribute!==ne||ne&&V.data!==ne.data)return!0;X++}return l.attributesNum!==X||l.index!==ae}function M(W,j,te,ae){const se={},re=j.attributes;let X=0;const H=te.getAttributes();for(const le in H)if(H[le].location>=0){let V=re[le];V===void 0&&(le==="instanceMatrix"&&W.instanceMatrix&&(V=W.instanceMatrix),le==="instanceColor"&&W.instanceColor&&(V=W.instanceColor));const ne={};ne.attribute=V,V&&V.data&&(ne.data=V.data),se[le]=ne,X++}l.attributes=se,l.attributesNum=X,l.index=ae}function w(){const W=l.newAttributes;for(let j=0,te=W.length;j<te;j++)W[j]=0}function _(W){y(W,0)}function y(W,j){const te=l.newAttributes,ae=l.enabledAttributes,se=l.attributeDivisors;te[W]=1,ae[W]===0&&(s.enableVertexAttribArray(W),ae[W]=1),se[W]!==j&&(s.vertexAttribDivisor(W,j),se[W]=j)}function D(){const W=l.newAttributes,j=l.enabledAttributes;for(let te=0,ae=j.length;te<ae;te++)j[te]!==W[te]&&(s.disableVertexAttribArray(te),j[te]=0)}function b(W,j,te,ae,se,re,X){X===!0?s.vertexAttribIPointer(W,j,te,se,re):s.vertexAttribPointer(W,j,te,ae,se,re)}function P(W,j,te,ae){w();const se=ae.attributes,re=te.getAttributes(),X=j.defaultAttributeValues;for(const H in re){const le=re[H];if(le.location>=0){let fe=se[H];if(fe===void 0&&(H==="instanceMatrix"&&W.instanceMatrix&&(fe=W.instanceMatrix),H==="instanceColor"&&W.instanceColor&&(fe=W.instanceColor)),fe!==void 0){const V=fe.normalized,ne=fe.itemSize,ke=e.get(fe);if(ke===void 0)continue;const $=ke.buffer,G=ke.type,C=ke.bytesPerElement,L=G===s.INT||G===s.UNSIGNED_INT||fe.gpuType===th;if(fe.isInterleavedBufferAttribute){const q=fe.data,xe=q.stride,ee=fe.offset;if(q.isInstancedInterleavedBuffer){for(let oe=0;oe<le.locationSize;oe++)y(le.location+oe,q.meshPerAttribute);W.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let oe=0;oe<le.locationSize;oe++)_(le.location+oe);s.bindBuffer(s.ARRAY_BUFFER,$);for(let oe=0;oe<le.locationSize;oe++)b(le.location+oe,ne/le.locationSize,G,V,xe*C,(ee+ne/le.locationSize*oe)*C,L)}else{if(fe.isInstancedBufferAttribute){for(let q=0;q<le.locationSize;q++)y(le.location+q,fe.meshPerAttribute);W.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let q=0;q<le.locationSize;q++)_(le.location+q);s.bindBuffer(s.ARRAY_BUFFER,$);for(let q=0;q<le.locationSize;q++)b(le.location+q,ne/le.locationSize,G,V,ne*C,ne/le.locationSize*q*C,L)}}else if(X!==void 0){const V=X[H];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv(le.location,V);break;case 3:s.vertexAttrib3fv(le.location,V);break;case 4:s.vertexAttrib4fv(le.location,V);break;default:s.vertexAttrib1fv(le.location,V)}}}}D()}function O(){I();for(const W in r){const j=r[W];for(const te in j){const ae=j[te];for(const se in ae){const re=ae[se];for(const X in re)v(re[X].object),delete re[X];delete ae[se]}}delete r[W]}}function F(W){if(r[W.id]===void 0)return;const j=r[W.id];for(const te in j){const ae=j[te];for(const se in ae){const re=ae[se];for(const X in re)v(re[X].object),delete re[X];delete ae[se]}}delete r[W.id]}function B(W){for(const j in r){const te=r[j];for(const ae in te){const se=te[ae];if(se[W.id]===void 0)continue;const re=se[W.id];for(const X in re)v(re[X].object),delete re[X];delete se[W.id]}}}function T(W){for(const j in r){const te=r[j],ae=W.isInstancedMesh===!0?W.id:0,se=te[ae];if(se!==void 0){for(const re in se){const X=se[re];for(const H in X)v(X[H].object),delete X[H];delete se[re]}delete te[ae],Object.keys(te).length===0&&delete r[j]}}}function I(){ce(),c=!0,l!==o&&(l=o,h(l.object))}function ce(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:ce,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:_,disableUnusedAttributes:D}}function w1(s,e,t){let r;function o(h){r=h}function l(h,v){s.drawArrays(r,h,v),t.update(v,r,1)}function c(h,v,x){x!==0&&(s.drawArraysInstanced(r,h,v,x),t.update(v,r,x))}function f(h,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,v,0,x);let S=0;for(let M=0;M<x;M++)S+=v[M];t.update(S,r,1)}function p(h,v,x,m){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)c(h[M],v[M],m[M]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,v,0,m,0,x);let M=0;for(let w=0;w<x;w++)M+=v[w]*m[w];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function A1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(B){return!(B!==_i&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const T=B===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==jn&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Pi&&!T)}function p(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const v=p(h);v!==h&&(pt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const x=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:m,maxTextures:S,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:P,maxSamples:O,samples:F}}function C1(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new ss,f=new _t,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const S=x.length!==0||m||r!==0||o;return o=m,r=x.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,m){t=v(x,m,0)},this.setState=function(x,m,S){const M=x.clippingPlanes,w=x.clipIntersection,_=x.clipShadows,y=s.get(x);if(!o||M===null||M.length===0||l&&!_)l?v(null):h();else{const D=l?0:r,b=D*4;let P=y.clippingState||null;p.value=P,P=v(M,m,b,S);for(let O=0;O!==b;++O)P[O]=t[O];y.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,m,S,M){const w=x!==null?x.length:0;let _=null;if(w!==0){if(_=p.value,M!==!0||_===null){const y=S+w*4,D=m.matrixWorldInverse;f.getNormalMatrix(D),(_===null||_.length<y)&&(_=new Float32Array(y));for(let b=0,P=S;b!==w;++b,P+=4)c.copy(x[b]).applyMatrix4(D,f),c.normal.toArray(_,P),_[P+3]=c.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const Ur=4,N0=[.125,.215,.35,.446,.526,.582],as=20,b1=256,ia=new zg,I0=new Rt;let Zf=null,Kf=0,Jf=0,Qf=!1;const R1=new K;class U0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=R1}=l;Zf=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zf,Kf,Jf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zf=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:rr,format:_i,colorSpace:uo,depthBuffer:!1},o=F0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P1(l)),this._blurMaterial=D1(l,e,t),this._ggxMaterial=L1(l,e,t)}return o}_compileMaterial(e){const t=new yi(new tn,e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,r,o,l){const p=new Yn(90,1,t,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,S=x.toneMapping;x.getClearColor(I0),x.toneMapping=Di,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yi(new Sa,new Eu({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let y=!1;const D=e.background;D?D.isColor&&(_.color.copy(D),e.background=null,y=!0):(_.color.copy(I0),y=!0);for(let b=0;b<6;b++){const P=b%3;P===0?(p.up.set(0,h[b],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[b],l.y,l.z)):P===1?(p.up.set(0,0,h[b]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[b],l.z)):(p.up.set(0,h[b],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[b]));const O=this._cubeSize;no(o,P*O,b>2?O:0,O,O),x.setRenderTarget(o),y&&x.render(w,p),x.render(e,p)}x.toneMapping=S,x.autoClear=m,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ds||e.mapping===ao;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=B0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;no(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(c,ia)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const p=c.uniforms,h=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-v*v),m=0+h*1.25,S=x*m,{_lodMax:M}=this,w=this._sizeLods[r],_=3*w*(r>M-Ur?r-M+Ur:0),y=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=M-t,no(l,_,y,3*w,2*w),o.setRenderTarget(l),o.render(f,ia),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-r,no(e,_,y,3*w,2*w),o.setRenderTarget(e),o.render(f,ia)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[o];x.material=h;const m=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*as-1),w=l/M,_=isFinite(l)?1+Math.floor(v*w):as;_>as&&pt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${as}`);const y=[];let D=0;for(let B=0;B<as;++B){const T=B/w,I=Math.exp(-T*T/2);y.push(I),B===0?D+=I:B<_&&(D+=2*I)}for(let B=0;B<y.length;B++)y[B]=y[B]/D;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=y,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:b}=this;m.dTheta.value=M,m.mipInt.value=b-r;const P=this._sizeLods[o],O=3*P*(o>b-Ur?o-b+Ur:0),F=4*(this._cubeSize-P);no(t,O,F,3*P,2*P),p.setRenderTarget(t),p.render(x,ia)}}function P1(s){const e=[],t=[],r=[];let o=s;const l=s-Ur+1+N0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let p=1/f;c>s-Ur?p=N0[c-s+Ur-1]:c===0&&(p=0),t.push(p);const h=1/(f-2),v=-h,x=1+h,m=[v,v,x,v,x,x,v,v,x,x,v,x],S=6,M=6,w=3,_=2,y=1,D=new Float32Array(w*M*S),b=new Float32Array(_*M*S),P=new Float32Array(y*M*S);for(let F=0;F<S;F++){const B=F%3*2/3-1,T=F>2?0:-1,I=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];D.set(I,w*M*F),b.set(m,_*M*F);const ce=[F,F,F,F,F,F];P.set(ce,y*M*F)}const O=new tn;O.setAttribute("position",new Zn(D,w)),O.setAttribute("uv",new Zn(b,_)),O.setAttribute("faceIndex",new Zn(P,y)),r.push(new yi(O,null)),o>Ur&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function F0(s,e,t){const r=new Ni(s,e,t);return r.texture.mapping=bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function no(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function L1(s,e,t){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function D1(s,e,t){const r=new Float32Array(as),o=new K(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function O0(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function B0(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hg extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Cg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Sa(5,5,5),l=new Ui({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:er});l.uniforms.tEquirect.value=t;const c=new yi(o,l),f=t.minFilter;return t.minFilter===ls&&(t.minFilter=Sn),new By(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function N1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(m,S=!1){return m==null?null:S?c(m):l(m)}function l(m){if(m&&m.isTexture){const S=m.mapping;if(S===gf||S===vf)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const w=new Hg(M.height);return w.fromEquirectangularTexture(s,m),e.set(m,w),m.addEventListener("dispose",h),f(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const S=m.mapping,M=S===gf||S===vf,w=S===ds||S===ao;if(M||w){let _=t.get(m);const y=_!==void 0?_.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return r===null&&(r=new U0(s)),_=M?r.fromEquirectangular(m,_):r.fromCubemap(m,_),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),_.texture;if(_!==void 0)return _.texture;{const D=m.image;return M&&D&&D.height>0||w&&D&&p(D)?(r===null&&(r=new U0(s)),_=M?r.fromEquirectangular(m):r.fromCubemap(m),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),m.addEventListener("dispose",v),_.texture):null}}}return m}function f(m,S){return S===gf?m.mapping=ds:S===vf&&(m.mapping=ao),m}function p(m){let S=0;const M=6;for(let w=0;w<M;w++)m[w]!==void 0&&S++;return S===M}function h(m){const S=m.target;S.removeEventListener("dispose",h);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function v(m){const S=m.target;S.removeEventListener("dispose",v);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function I1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Su("WebGLRenderer: "+r+" extension not supported."),o}}}function U1(s,e,t,r){const o={},l=new WeakMap;function c(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete o[m.id];const S=l.get(m);S&&(e.remove(S),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(x,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function p(x){const m=x.attributes;for(const S in m)e.update(m[S],s.ARRAY_BUFFER)}function h(x){const m=[],S=x.index,M=x.attributes.position;let w=0;if(M===void 0)return;if(S!==null){const D=S.array;w=S.version;for(let b=0,P=D.length;b<P;b+=3){const O=D[b+0],F=D[b+1],B=D[b+2];m.push(O,F,F,B,B,O)}}else{const D=M.array;w=M.version;for(let b=0,P=D.length/3-1;b<P;b+=3){const O=b+0,F=b+1,B=b+2;m.push(O,F,F,B,B,O)}}const _=new(M.count>=65535?Eg:Mg)(m,1);_.version=w;const y=l.get(x);y&&e.remove(y),l.set(x,_)}function v(x){const m=l.get(x);if(m){const S=x.index;S!==null&&m.version<S.version&&h(x)}else h(x);return l.get(x)}return{get:f,update:p,getWireframeAttribute:v}}function F1(s,e,t){let r;function o(m){r=m}let l,c;function f(m){l=m.type,c=m.bytesPerElement}function p(m,S){s.drawElements(r,S,l,m*c),t.update(S,r,1)}function h(m,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,m*c,M),t.update(S,r,M))}function v(m,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,m,0,M);let _=0;for(let y=0;y<M;y++)_+=S[y];t.update(_,r,1)}function x(m,S,M,w){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<m.length;y++)h(m[y]/c,S[y],w[y]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,l,m,0,w,0,M);let y=0;for(let D=0;D<M;D++)y+=S[D]*w[D];t.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function O1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function B1(s,e,t){const r=new WeakMap,o=new jt;function l(c,f,p){const h=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let m=r.get(f);if(m===void 0||m.count!==x){let ce=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",ce)};var S=ce;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let P=0;M===!0&&(P=1),w===!0&&(P=2),_===!0&&(P=3);let O=f.attributes.position.count*P,F=1;O>e.maxTextureSize&&(F=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const B=new Float32Array(O*F*4*x),T=new xg(B,O,F,x);T.type=Pi,T.needsUpdate=!0;const I=P*4;for(let W=0;W<x;W++){const j=y[W],te=D[W],ae=b[W],se=O*F*4*W;for(let re=0;re<j.count;re++){const X=re*I;M===!0&&(o.fromBufferAttribute(j,re),B[se+X+0]=o.x,B[se+X+1]=o.y,B[se+X+2]=o.z,B[se+X+3]=0),w===!0&&(o.fromBufferAttribute(te,re),B[se+X+4]=o.x,B[se+X+5]=o.y,B[se+X+6]=o.z,B[se+X+7]=0),_===!0&&(o.fromBufferAttribute(ae,re),B[se+X+8]=o.x,B[se+X+9]=o.y,B[se+X+10]=o.z,B[se+X+11]=ae.itemSize===4?o.w:1)}}m={count:x,texture:T,size:new Ne(O,F)},r.set(f,m),f.addEventListener("dispose",ce)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let _=0;_<h.length;_++)M+=h[_];const w=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function k1(s,e,t,r,o){let l=new WeakMap;function c(h){const v=o.render.frame,x=h.geometry,m=e.get(h,x);if(l.get(m)!==v&&(e.update(m),l.set(m,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),l.get(h)!==v&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,v))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return m}function f(){l=new WeakMap}function p(h){const v=h.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:f}}const z1={[ig]:"LINEAR_TONE_MAPPING",[rg]:"REINHARD_TONE_MAPPING",[sg]:"CINEON_TONE_MAPPING",[og]:"ACES_FILMIC_TONE_MAPPING",[lg]:"AGX_TONE_MAPPING",[ug]:"NEUTRAL_TONE_MAPPING",[ag]:"CUSTOM_TONE_MAPPING"};function V1(s,e,t,r,o){const l=new Ni(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),c=new Ni(e,t,{type:rr,depthBuffer:!1,stencilBuffer:!1}),f=new tn;f.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const p=new Cy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new yi(f,p),v=new zg(-1,1,1,-1,0,1);let x=null,m=null,S=!1,M,w=null,_=[],y=!1;this.setSize=function(D,b){l.setSize(D,b),c.setSize(D,b);for(let P=0;P<_.length;P++){const O=_[P];O.setSize&&O.setSize(D,b)}},this.setEffects=function(D){_=D,y=_.length>0&&_[0].isRenderPass===!0;const b=l.width,P=l.height;for(let O=0;O<_.length;O++){const F=_[O];F.setSize&&F.setSize(b,P)}},this.begin=function(D,b){if(S||D.toneMapping===Di&&_.length===0)return!1;if(w=b,b!==null){const P=b.width,O=b.height;(l.width!==P||l.height!==O)&&this.setSize(P,O)}return y===!1&&D.setRenderTarget(l),M=D.toneMapping,D.toneMapping=Di,!0},this.hasRenderPass=function(){return y},this.end=function(D,b){D.toneMapping=M,S=!0;let P=l,O=c;for(let F=0;F<_.length;F++){const B=_[F];if(B.enabled!==!1&&(B.render(D,O,P,b),B.needsSwap!==!1)){const T=P;P=O,O=T}}if(x!==D.outputColorSpace||m!==D.toneMapping){x=D.outputColorSpace,m=D.toneMapping,p.defines={},bt.getTransfer(x)===Ut&&(p.defines.SRGB_TRANSFER="");const F=z1[m];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,D.setRenderTarget(w),D.render(h,v),w=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),p.dispose()}}const Gg=new Mn,Kd=new ma(1,1),Wg=new xg,Xg=new Ex,qg=new Cg,k0=[],z0=[],V0=new Float32Array(16),H0=new Float32Array(9),G0=new Float32Array(4);function po(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=k0[o];if(l===void 0&&(l=new Float32Array(o),k0[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function sn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function on(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Lu(s,e){let t=z0[e];t===void 0&&(t=new Int32Array(e),z0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function H1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function G1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2fv(this.addr,e),on(t,e)}}function W1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;s.uniform3fv(this.addr,e),on(t,e)}}function X1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4fv(this.addr,e),on(t,e)}}function q1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,r))return;G0.set(r),s.uniformMatrix2fv(this.addr,!1,G0),on(t,r)}}function Y1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,r))return;H0.set(r),s.uniformMatrix3fv(this.addr,!1,H0),on(t,r)}}function j1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,r))return;V0.set(r),s.uniformMatrix4fv(this.addr,!1,V0),on(t,r)}}function $1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2iv(this.addr,e),on(t,e)}}function K1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3iv(this.addr,e),on(t,e)}}function J1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4iv(this.addr,e),on(t,e)}}function Q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function eE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2uiv(this.addr,e),on(t,e)}}function tE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3uiv(this.addr,e),on(t,e)}}function nE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4uiv(this.addr,e),on(t,e)}}function iE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Kd.compareFunction=t.isReversedDepthBuffer()?lh:ah,l=Kd):l=Gg,t.setTexture2D(e||l,o)}function rE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Xg,o)}function sE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||qg,o)}function oE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Wg,o)}function aE(s){switch(s){case 5126:return H1;case 35664:return G1;case 35665:return W1;case 35666:return X1;case 35674:return q1;case 35675:return Y1;case 35676:return j1;case 5124:case 35670:return $1;case 35667:case 35671:return Z1;case 35668:case 35672:return K1;case 35669:case 35673:return J1;case 5125:return Q1;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return oE}}function lE(s,e){s.uniform1fv(this.addr,e)}function uE(s,e){const t=po(e,this.size,2);s.uniform2fv(this.addr,t)}function cE(s,e){const t=po(e,this.size,3);s.uniform3fv(this.addr,t)}function fE(s,e){const t=po(e,this.size,4);s.uniform4fv(this.addr,t)}function dE(s,e){const t=po(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hE(s,e){const t=po(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function pE(s,e){const t=po(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mE(s,e){s.uniform1iv(this.addr,e)}function gE(s,e){s.uniform2iv(this.addr,e)}function vE(s,e){s.uniform3iv(this.addr,e)}function _E(s,e){s.uniform4iv(this.addr,e)}function xE(s,e){s.uniform1uiv(this.addr,e)}function yE(s,e){s.uniform2uiv(this.addr,e)}function SE(s,e){s.uniform3uiv(this.addr,e)}function ME(s,e){s.uniform4uiv(this.addr,e)}function EE(s,e,t){const r=this.cache,o=e.length,l=Lu(t,o);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Kd:c=Gg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function TE(s,e,t){const r=this.cache,o=e.length,l=Lu(t,o);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Xg,l[c])}function wE(s,e,t){const r=this.cache,o=e.length,l=Lu(t,o);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||qg,l[c])}function AE(s,e,t){const r=this.cache,o=e.length,l=Lu(t,o);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Wg,l[c])}function CE(s){switch(s){case 5126:return lE;case 35664:return uE;case 35665:return cE;case 35666:return fE;case 35674:return dE;case 35675:return hE;case 35676:return pE;case 5124:case 35670:return mE;case 35667:case 35671:return gE;case 35668:case 35672:return vE;case 35669:case 35673:return _E;case 5125:return xE;case 36294:return yE;case 36295:return SE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return EE;case 35679:case 36299:case 36307:return TE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return AE}}class bE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=aE(t.type)}}class RE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CE(t.type)}}class PE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function W0(s,e){s.seq.push(e),s.map[e.id]=e}function LE(s,e,t){const r=s.name,o=r.length;for(ed.lastIndex=0;;){const l=ed.exec(r),c=ed.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===o){W0(t,h===void 0?new bE(f,s,e):new RE(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new PE(f),W0(t,x)),t=x}}}class vu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),p=e.getUniformLocation(t,f.name);LE(f,p,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function X0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const DE=37297;let NE=0;function IE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const q0=new _t;function UE(s){bt._getMatrix(q0,bt.workingColorSpace,s);const e=`mat3( ${q0.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(s)){case _u:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Y0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+IE(s.getShaderSource(e),f)}else return l}function FE(s,e){const t=UE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OE={[ig]:"Linear",[rg]:"Reinhard",[sg]:"Cineon",[og]:"ACESFilmic",[lg]:"AgX",[ug]:"Neutral",[ag]:"Custom"};function BE(s,e){const t=OE[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cu=new K;function kE(){bt.getLuminanceCoefficients(cu);const s=cu.x.toFixed(4),e=cu.y.toFixed(4),t=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function VE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function HE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function la(s){return s!==""}function j0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(s){return s.replace(GE,XE)}const WE=new Map;function XE(s,e){let t=yt[e];if(t===void 0){const r=WE.get(e);if(r!==void 0)t=yt[r],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Jd(t)}const qE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z0(s){return s.replace(qE,YE)}function YE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function K0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jE={[fu]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};function $E(s){return jE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZE={[ds]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};function KE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ZE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const JE={[ao]:"ENVMAP_MODE_REFRACTION"};function QE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":JE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eT={[ng]:"ENVMAP_BLENDING_MULTIPLY",[tx]:"ENVMAP_BLENDING_MIX",[nx]:"ENVMAP_BLENDING_ADD"};function tT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":eT[s.combine]||"ENVMAP_BLENDING_NONE"}function nT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function iT(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const p=$E(t),h=KE(t),v=QE(t),x=tT(t),m=nT(t),S=zE(t),M=VE(l),w=o.createProgram();let _,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(la).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(la).join(`
`),y.length>0&&(y+=`
`)):(_=[K0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),y=[K0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?yt.tonemapping_pars_fragment:"",t.toneMapping!==Di?BE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,FE("linearToOutputTexel",t.outputColorSpace),kE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),c=Jd(c),c=j0(c,t),c=$0(c,t),f=Jd(f),f=j0(f,t),f=$0(f,t),c=Z0(c),f=Z0(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",t.glslVersion===Ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=D+_+c,P=D+y+f,O=X0(o,o.VERTEX_SHADER,b),F=X0(o,o.FRAGMENT_SHADER,P);o.attachShader(w,O),o.attachShader(w,F),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function B(W){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(w)||"",te=o.getShaderInfoLog(O)||"",ae=o.getShaderInfoLog(F)||"",se=j.trim(),re=te.trim(),X=ae.trim();let H=!0,le=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,O,F);else{const fe=Y0(o,O,"vertex"),V=Y0(o,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+se+`
`+fe+`
`+V)}else se!==""?pt("WebGLProgram: Program Info Log:",se):(re===""||X==="")&&(le=!1);le&&(W.diagnostics={runnable:H,programLog:se,vertexShader:{log:re,prefix:_},fragmentShader:{log:X,prefix:y}})}o.deleteShader(O),o.deleteShader(F),T=new vu(o,w),I=HE(o,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let I;this.getAttributes=function(){return I===void 0&&B(this),I};let ce=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ce===!1&&(ce=o.getProgramParameter(w,DE)),ce},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=F,this}let rT=0;class sT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new oT(e),t.set(e,r)),r}}class oT{constructor(e){this.id=rT++,this.code=e,this.usedTimes=0}}function aT(s,e,t,r,o,l){const c=new yg,f=new sT,p=new Set,h=[],v=new Map,x=r.logarithmicDepthBuffer;let m=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return p.add(T),T===0?"uv":`uv${T}`}function w(T,I,ce,W,j){const te=W.fog,ae=j.geometry,se=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?W.environment:null,re=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,X=e.get(T.envMap||se,re),H=X&&X.mapping===bu?X.image.height:null,le=S[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&pt("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const fe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,V=fe!==void 0?fe.length:0;let ne=0;ae.morphAttributes.position!==void 0&&(ne=1),ae.morphAttributes.normal!==void 0&&(ne=2),ae.morphAttributes.color!==void 0&&(ne=3);let ke,$,G,C;if(le){const wt=bi[le];ke=wt.vertexShader,$=wt.fragmentShader}else ke=T.vertexShader,$=T.fragmentShader,f.update(T),G=f.getVertexShaderID(T),C=f.getFragmentShaderID(T);const L=s.getRenderTarget(),q=s.state.buffers.depth.getReversed(),xe=j.isInstancedMesh===!0,ee=j.isBatchedMesh===!0,oe=!!T.map,Ae=!!T.matcap,Te=!!X,pe=!!T.aoMap,ge=!!T.lightMap,ye=!!T.bumpMap,Ce=!!T.normalMap,R=!!T.displacementMap,k=!!T.emissiveMap,be=!!T.metalnessMap,Ge=!!T.roughnessMap,Ve=T.anisotropy>0,U=T.clearcoat>0,E=T.dispersion>0,Z=T.iridescence>0,Me=T.sheen>0,we=T.transmission>0,Se=Ve&&!!T.anisotropyMap,Ze=U&&!!T.clearcoatMap,Ue=U&&!!T.clearcoatNormalMap,He=U&&!!T.clearcoatRoughnessMap,at=Z&&!!T.iridescenceMap,Pe=Z&&!!T.iridescenceThicknessMap,De=Me&&!!T.sheenColorMap,Ke=Me&&!!T.sheenRoughnessMap,et=!!T.specularMap,Ye=!!T.specularColorMap,ht=!!T.specularIntensityMap,J=we&&!!T.transmissionMap,ze=we&&!!T.thicknessMap,Oe=!!T.gradientMap,je=!!T.alphaMap,Fe=T.alphaTest>0,Ee=!!T.alphaHash,nt=!!T.extensions;let mt=Di;T.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(mt=s.toneMapping);const It={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:ke,fragmentShader:$,defines:T.defines,customVertexShaderID:G,customFragmentShaderID:C,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ee,batchingColor:ee&&j._colorsTexture!==null,instancing:xe,instancingColor:xe&&j.instanceColor!==null,instancingMorph:xe&&j.morphTexture!==null,outputColorSpace:L===null?s.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:uo,alphaToCoverage:!!T.alphaToCoverage,map:oe,matcap:Ae,envMap:Te,envMapMode:Te&&X.mapping,envMapCubeUVHeight:H,aoMap:pe,lightMap:ge,bumpMap:ye,normalMap:Ce,displacementMap:R,emissiveMap:k,normalMapObjectSpace:Ce&&T.normalMapType===ox,normalMapTangentSpace:Ce&&T.normalMapType===sx,metalnessMap:be,roughnessMap:Ge,anisotropy:Ve,anisotropyMap:Se,clearcoat:U,clearcoatMap:Ze,clearcoatNormalMap:Ue,clearcoatRoughnessMap:He,dispersion:E,iridescence:Z,iridescenceMap:at,iridescenceThicknessMap:Pe,sheen:Me,sheenColorMap:De,sheenRoughnessMap:Ke,specularMap:et,specularColorMap:Ye,specularIntensityMap:ht,transmission:we,transmissionMap:J,thicknessMap:ze,gradientMap:Oe,opaque:T.transparent===!1&&T.blending===cs&&T.alphaToCoverage===!1,alphaMap:je,alphaTest:Fe,alphaHash:Ee,combine:T.combine,mapUv:oe&&M(T.map.channel),aoMapUv:pe&&M(T.aoMap.channel),lightMapUv:ge&&M(T.lightMap.channel),bumpMapUv:ye&&M(T.bumpMap.channel),normalMapUv:Ce&&M(T.normalMap.channel),displacementMapUv:R&&M(T.displacementMap.channel),emissiveMapUv:k&&M(T.emissiveMap.channel),metalnessMapUv:be&&M(T.metalnessMap.channel),roughnessMapUv:Ge&&M(T.roughnessMap.channel),anisotropyMapUv:Se&&M(T.anisotropyMap.channel),clearcoatMapUv:Ze&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&M(T.sheenRoughnessMap.channel),specularMapUv:et&&M(T.specularMap.channel),specularColorMapUv:Ye&&M(T.specularColorMap.channel),specularIntensityMapUv:ht&&M(T.specularIntensityMap.channel),transmissionMapUv:J&&M(T.transmissionMap.channel),thicknessMapUv:ze&&M(T.thicknessMap.channel),alphaMapUv:je&&M(T.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Ce||Ve),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ae.attributes.uv&&(oe||je),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ae.attributes.normal===void 0&&Ce===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:q,skinning:j.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ne,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&ce.length>0,shadowMapType:s.shadowMap.type,toneMapping:mt,decodeVideoTexture:oe&&T.map.isVideoTexture===!0&&bt.getTransfer(T.map.colorSpace)===Ut,decodeVideoTextureEmissive:k&&T.emissiveMap.isVideoTexture===!0&&bt.getTransfer(T.emissiveMap.colorSpace)===Ut,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===vi,flipSided:T.side===Bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:nt&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&T.extensions.multiDraw===!0||ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function _(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ce in T.defines)I.push(ce),I.push(T.defines[ce]);return T.isRawShaderMaterial===!1&&(y(I,T),D(I,T),I.push(s.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function y(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function D(T,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),T.push(c.mask)}function b(T){const I=S[T.type];let ce;if(I){const W=bi[I];ce=Ty.clone(W.uniforms)}else ce=T.uniforms;return ce}function P(T,I){let ce=v.get(I);return ce!==void 0?++ce.usedTimes:(ce=new iT(s,I,T,o),h.push(ce),v.set(I,ce)),ce}function O(T){if(--T.usedTimes===0){const I=h.indexOf(T);h[I]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function F(T){f.remove(T)}function B(){f.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:b,acquireProgram:P,releaseProgram:O,releaseShaderCache:F,programs:h,dispose:B}}function lT(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,p){s.get(c)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function uT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function J0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Q0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let S=0;return m.isInstancedMesh&&(S+=2),m.isSkinnedMesh&&(S+=1),S}function f(m,S,M,w,_,y){let D=s[e];return D===void 0?(D={id:m.id,object:m,geometry:S,material:M,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:_,group:y},s[e]=D):(D.id=m.id,D.object=m,D.geometry=S,D.material=M,D.materialVariant=c(m),D.groupOrder=w,D.renderOrder=m.renderOrder,D.z=_,D.group=y),e++,D}function p(m,S,M,w,_,y){const D=f(m,S,M,w,_,y);M.transmission>0?r.push(D):M.transparent===!0?o.push(D):t.push(D)}function h(m,S,M,w,_,y){const D=f(m,S,M,w,_,y);M.transmission>0?r.unshift(D):M.transparent===!0?o.unshift(D):t.unshift(D)}function v(m,S){t.length>1&&t.sort(m||uT),r.length>1&&r.sort(S||J0),o.length>1&&o.sort(S||J0)}function x(){for(let m=e,S=s.length;m<S;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:h,finish:x,sort:v}}function cT(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new Q0,s.set(r,[c])):o>=l.length?(c=new Q0,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function fT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Rt};break;case"SpotLight":t={position:new K,direction:new K,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function dT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hT=0;function pT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mT(s){const e=new fT,t=dT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new K);const o=new K,l=new zt,c=new zt;function f(h){let v=0,x=0,m=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let S=0,M=0,w=0,_=0,y=0,D=0,b=0,P=0,O=0,F=0,B=0;h.sort(pT);for(let I=0,ce=h.length;I<ce;I++){const W=h[I],j=W.color,te=W.intensity,ae=W.distance;let se=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===lo?se=W.shadow.map.texture:se=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)v+=j.r*te,x+=j.g*te,m+=j.b*te;else if(W.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(W.sh.coefficients[re],te);B++}else if(W.isDirectionalLight){const re=e.get(W);if(re.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const X=W.shadow,H=t.get(W);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=se,r.directionalShadowMatrix[S]=W.shadow.matrix,D++}r.directional[S]=re,S++}else if(W.isSpotLight){const re=e.get(W);re.position.setFromMatrixPosition(W.matrixWorld),re.color.copy(j).multiplyScalar(te),re.distance=ae,re.coneCos=Math.cos(W.angle),re.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),re.decay=W.decay,r.spot[w]=re;const X=W.shadow;if(W.map&&(r.spotLightMap[O]=W.map,O++,X.updateMatrices(W),W.castShadow&&F++),r.spotLightMatrix[w]=X.matrix,W.castShadow){const H=t.get(W);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,r.spotShadow[w]=H,r.spotShadowMap[w]=se,P++}w++}else if(W.isRectAreaLight){const re=e.get(W);re.color.copy(j).multiplyScalar(te),re.halfWidth.set(W.width*.5,0,0),re.halfHeight.set(0,W.height*.5,0),r.rectArea[_]=re,_++}else if(W.isPointLight){const re=e.get(W);if(re.color.copy(W.color).multiplyScalar(W.intensity),re.distance=W.distance,re.decay=W.decay,W.castShadow){const X=W.shadow,H=t.get(W);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,r.pointShadow[M]=H,r.pointShadowMap[M]=se,r.pointShadowMatrix[M]=W.shadow.matrix,b++}r.point[M]=re,M++}else if(W.isHemisphereLight){const re=e.get(W);re.skyColor.copy(W.color).multiplyScalar(te),re.groundColor.copy(W.groundColor).multiplyScalar(te),r.hemi[y]=re,y++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=m;const T=r.hash;(T.directionalLength!==S||T.pointLength!==M||T.spotLength!==w||T.rectAreaLength!==_||T.hemiLength!==y||T.numDirectionalShadows!==D||T.numPointShadows!==b||T.numSpotShadows!==P||T.numSpotMaps!==O||T.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=_,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=P+O-F,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=B,T.directionalLength=S,T.pointLength=M,T.spotLength=w,T.rectAreaLength=_,T.hemiLength=y,T.numDirectionalShadows=D,T.numPointShadows=b,T.numSpotShadows=P,T.numSpotMaps=O,T.numLightProbes=B,r.version=hT++)}function p(h,v){let x=0,m=0,S=0,M=0,w=0;const _=v.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const b=h[y];if(b.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),x++}else if(b.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),S++}else if(b.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(_),c.identity(),l.copy(b.matrixWorld),l.premultiply(_),c.extractRotation(l),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(b.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(_),w++}}}return{setup:f,setupView:p,state:r}}function eg(s){const e=new mT(s),t=[],r=[];function o(v){h.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function c(v){r.push(v)}function f(){e.setup(t)}function p(v){e.setupView(t,v)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function gT(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new eg(s),e.set(o,[f])):l>=c.length?(f=new eg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const vT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_T=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xT=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],yT=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],tg=new zt,ra=new K,td=new K;function ST(s,e,t){let r=new fh;const o=new Ne,l=new Ne,c=new jt,f=new by,p=new Ry,h={},v=t.maxTextureSize,x={[Fr]:Bn,[Bn]:Fr,[vi]:vi},m=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:vT,fragmentShader:_T}),S=m.clone();S.defines.HORIZONTAL_PASS=1;const M=new tn;M.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new yi(M,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let y=this.type;this.render=function(F,B,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||F.length===0)return;this.type===F_&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fu);const I=s.getRenderTarget(),ce=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),j=s.state;j.setBlending(er),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const te=y!==this.type;te&&B.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(se=>se.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,se=F.length;ae<se;ae++){const re=F[ae],X=re.shadow;if(X===void 0){pt("WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const H=X.getFrameExtents();o.multiply(H),l.copy(X.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/H.x),o.x=l.x*H.x,X.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/H.y),o.y=l.y*H.y,X.mapSize.y=l.y));const le=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=le,X.map===null||te===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===sa){if(re.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ni(o.x,o.y,{format:lo,type:rr,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),X.map.texture.name=re.name+".shadowMap",X.map.depthTexture=new ma(o.x,o.y,Pi),X.map.depthTexture.name=re.name+".shadowMapDepth",X.map.depthTexture.format=sr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=hn,X.map.depthTexture.magFilter=hn}else re.isPointLight?(X.map=new Hg(o.x),X.map.depthTexture=new Gx(o.x,Ii)):(X.map=new Ni(o.x,o.y),X.map.depthTexture=new ma(o.x,o.y,Ii)),X.map.depthTexture.name=re.name+".shadowMap",X.map.depthTexture.format=sr,this.type===fu?(X.map.depthTexture.compareFunction=le?lh:ah,X.map.depthTexture.minFilter=Sn,X.map.depthTexture.magFilter=Sn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=hn,X.map.depthTexture.magFilter=hn);X.camera.updateProjectionMatrix()}const fe=X.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<fe;V++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,V),s.clear();else{V===0&&(s.setRenderTarget(X.map),s.clear());const ne=X.getViewport(V);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),j.viewport(c)}if(re.isPointLight){const ne=X.camera,ke=X.matrix,$=re.distance||ne.far;$!==ne.far&&(ne.far=$,ne.updateProjectionMatrix()),ra.setFromMatrixPosition(re.matrixWorld),ne.position.copy(ra),td.copy(ne.position),td.add(xT[V]),ne.up.copy(yT[V]),ne.lookAt(td),ne.updateMatrixWorld(),ke.makeTranslation(-ra.x,-ra.y,-ra.z),tg.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),X._frustum.setFromProjectionMatrix(tg,ne.coordinateSystem,ne.reversedDepth)}else X.updateMatrices(re);r=X.getFrustum(),P(B,T,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===sa&&D(X,T),X.needsUpdate=!1}y=this.type,_.needsUpdate=!1,s.setRenderTarget(I,ce,W)};function D(F,B){const T=e.update(w);m.defines.VSM_SAMPLES!==F.blurSamples&&(m.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,m.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ni(o.x,o.y,{format:lo,type:rr})),m.uniforms.shadow_pass.value=F.map.depthTexture,m.uniforms.resolution.value=F.mapSize,m.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(B,null,T,m,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(B,null,T,S,w,null)}function b(F,B,T,I){let ce=null;const W=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(W!==void 0)ce=W;else if(ce=T.isPointLight===!0?p:f,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=ce.uuid,te=B.uuid;let ae=h[j];ae===void 0&&(ae={},h[j]=ae);let se=ae[te];se===void 0&&(se=ce.clone(),ae[te]=se,B.addEventListener("dispose",O)),ce=se}if(ce.visible=B.visible,ce.wireframe=B.wireframe,I===sa?ce.side=B.shadowSide!==null?B.shadowSide:B.side:ce.side=B.shadowSide!==null?B.shadowSide:x[B.side],ce.alphaMap=B.alphaMap,ce.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ce.map=B.map,ce.clipShadows=B.clipShadows,ce.clippingPlanes=B.clippingPlanes,ce.clipIntersection=B.clipIntersection,ce.displacementMap=B.displacementMap,ce.displacementScale=B.displacementScale,ce.displacementBias=B.displacementBias,ce.wireframeLinewidth=B.wireframeLinewidth,ce.linewidth=B.linewidth,T.isPointLight===!0&&ce.isMeshDistanceMaterial===!0){const j=s.properties.get(ce);j.light=T}return ce}function P(F,B,T,I,ce){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&ce===sa)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const te=e.update(F),ae=F.material;if(Array.isArray(ae)){const se=te.groups;for(let re=0,X=se.length;re<X;re++){const H=se[re],le=ae[H.materialIndex];if(le&&le.visible){const fe=b(F,le,I,ce);F.onBeforeShadow(s,F,B,T,te,fe,H),s.renderBufferDirect(T,null,te,fe,F,H),F.onAfterShadow(s,F,B,T,te,fe,H)}}}else if(ae.visible){const se=b(F,ae,I,ce);F.onBeforeShadow(s,F,B,T,te,se,null),s.renderBufferDirect(T,null,te,se,F,null),F.onAfterShadow(s,F,B,T,te,se,null)}}const j=F.children;for(let te=0,ae=j.length;te<ae;te++)P(j[te],B,T,I,ce)}function O(F){F.target.removeEventListener("dispose",O);for(const T in h){const I=h[T],ce=F.target.uuid;ce in I&&(I[ce].dispose(),delete I[ce])}}}function MT(s,e){function t(){let J=!1;const ze=new jt;let Oe=null;const je=new jt(0,0,0,0);return{setMask:function(Fe){Oe!==Fe&&!J&&(s.colorMask(Fe,Fe,Fe,Fe),Oe=Fe)},setLocked:function(Fe){J=Fe},setClear:function(Fe,Ee,nt,mt,It){It===!0&&(Fe*=mt,Ee*=mt,nt*=mt),ze.set(Fe,Ee,nt,mt),je.equals(ze)===!1&&(s.clearColor(Fe,Ee,nt,mt),je.copy(ze))},reset:function(){J=!1,Oe=null,je.set(-1,0,0,0)}}}function r(){let J=!1,ze=!1,Oe=null,je=null,Fe=null;return{setReversed:function(Ee){if(ze!==Ee){const nt=e.get("EXT_clip_control");Ee?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),ze=Ee;const mt=Fe;Fe=null,this.setClear(mt)}},getReversed:function(){return ze},setTest:function(Ee){Ee?L(s.DEPTH_TEST):q(s.DEPTH_TEST)},setMask:function(Ee){Oe!==Ee&&!J&&(s.depthMask(Ee),Oe=Ee)},setFunc:function(Ee){if(ze&&(Ee=gx[Ee]),je!==Ee){switch(Ee){case rd:s.depthFunc(s.NEVER);break;case sd:s.depthFunc(s.ALWAYS);break;case od:s.depthFunc(s.LESS);break;case oo:s.depthFunc(s.LEQUAL);break;case ad:s.depthFunc(s.EQUAL);break;case ld:s.depthFunc(s.GEQUAL);break;case ud:s.depthFunc(s.GREATER);break;case cd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}je=Ee}},setLocked:function(Ee){J=Ee},setClear:function(Ee){Fe!==Ee&&(Fe=Ee,ze&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){J=!1,Oe=null,je=null,Fe=null,ze=!1}}}function o(){let J=!1,ze=null,Oe=null,je=null,Fe=null,Ee=null,nt=null,mt=null,It=null;return{setTest:function(wt){J||(wt?L(s.STENCIL_TEST):q(s.STENCIL_TEST))},setMask:function(wt){ze!==wt&&!J&&(s.stencilMask(wt),ze=wt)},setFunc:function(wt,Kn,En){(Oe!==wt||je!==Kn||Fe!==En)&&(s.stencilFunc(wt,Kn,En),Oe=wt,je=Kn,Fe=En)},setOp:function(wt,Kn,En){(Ee!==wt||nt!==Kn||mt!==En)&&(s.stencilOp(wt,Kn,En),Ee=wt,nt=Kn,mt=En)},setLocked:function(wt){J=wt},setClear:function(wt){It!==wt&&(s.clearStencil(wt),It=wt)},reset:function(){J=!1,ze=null,Oe=null,je=null,Fe=null,Ee=null,nt=null,mt=null,It=null}}}const l=new t,c=new r,f=new o,p=new WeakMap,h=new WeakMap;let v={},x={},m=new WeakMap,S=[],M=null,w=!1,_=null,y=null,D=null,b=null,P=null,O=null,F=null,B=new Rt(0,0,0),T=0,I=!1,ce=null,W=null,j=null,te=null,ae=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,X=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),re=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),re=X>=2);let le=null,fe={};const V=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),ke=new jt().fromArray(V),$=new jt().fromArray(ne);function G(J,ze,Oe,je){const Fe=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(J,Ee),s.texParameteri(J,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(J,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<Oe;nt++)J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?s.texImage3D(ze,0,s.RGBA,1,1,je,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(ze+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return Ee}const C={};C[s.TEXTURE_2D]=G(s.TEXTURE_2D,s.TEXTURE_2D,1),C[s.TEXTURE_CUBE_MAP]=G(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[s.TEXTURE_2D_ARRAY]=G(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),C[s.TEXTURE_3D]=G(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),L(s.DEPTH_TEST),c.setFunc(oo),ye(!1),Ce(Gm),L(s.CULL_FACE),pe(er);function L(J){v[J]!==!0&&(s.enable(J),v[J]=!0)}function q(J){v[J]!==!1&&(s.disable(J),v[J]=!1)}function xe(J,ze){return x[J]!==ze?(s.bindFramebuffer(J,ze),x[J]=ze,J===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=ze),J===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=ze),!0):!1}function ee(J,ze){let Oe=S,je=!1;if(J){Oe=m.get(ze),Oe===void 0&&(Oe=[],m.set(ze,Oe));const Fe=J.textures;if(Oe.length!==Fe.length||Oe[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,nt=Fe.length;Ee<nt;Ee++)Oe[Ee]=s.COLOR_ATTACHMENT0+Ee;Oe.length=Fe.length,je=!0}}else Oe[0]!==s.BACK&&(Oe[0]=s.BACK,je=!0);je&&s.drawBuffers(Oe)}function oe(J){return M!==J?(s.useProgram(J),M=J,!0):!1}const Ae={[os]:s.FUNC_ADD,[B_]:s.FUNC_SUBTRACT,[k_]:s.FUNC_REVERSE_SUBTRACT};Ae[z_]=s.MIN,Ae[V_]=s.MAX;const Te={[H_]:s.ZERO,[G_]:s.ONE,[W_]:s.SRC_COLOR,[nd]:s.SRC_ALPHA,[Z_]:s.SRC_ALPHA_SATURATE,[j_]:s.DST_COLOR,[q_]:s.DST_ALPHA,[X_]:s.ONE_MINUS_SRC_COLOR,[id]:s.ONE_MINUS_SRC_ALPHA,[$_]:s.ONE_MINUS_DST_COLOR,[Y_]:s.ONE_MINUS_DST_ALPHA,[K_]:s.CONSTANT_COLOR,[J_]:s.ONE_MINUS_CONSTANT_COLOR,[Q_]:s.CONSTANT_ALPHA,[ex]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(J,ze,Oe,je,Fe,Ee,nt,mt,It,wt){if(J===er){w===!0&&(q(s.BLEND),w=!1);return}if(w===!1&&(L(s.BLEND),w=!0),J!==O_){if(J!==_||wt!==I){if((y!==os||P!==os)&&(s.blendEquation(s.FUNC_ADD),y=os,P=os),wt)switch(J){case cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ua:s.blendFunc(s.ONE,s.ONE);break;case Wm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",J);break}else switch(J){case cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ua:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wm:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xm:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",J);break}D=null,b=null,O=null,F=null,B.set(0,0,0),T=0,_=J,I=wt}return}Fe=Fe||ze,Ee=Ee||Oe,nt=nt||je,(ze!==y||Fe!==P)&&(s.blendEquationSeparate(Ae[ze],Ae[Fe]),y=ze,P=Fe),(Oe!==D||je!==b||Ee!==O||nt!==F)&&(s.blendFuncSeparate(Te[Oe],Te[je],Te[Ee],Te[nt]),D=Oe,b=je,O=Ee,F=nt),(mt.equals(B)===!1||It!==T)&&(s.blendColor(mt.r,mt.g,mt.b,It),B.copy(mt),T=It),_=J,I=!1}function ge(J,ze){J.side===vi?q(s.CULL_FACE):L(s.CULL_FACE);let Oe=J.side===Bn;ze&&(Oe=!Oe),ye(Oe),J.blending===cs&&J.transparent===!1?pe(er):pe(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),c.setFunc(J.depthFunc),c.setTest(J.depthTest),c.setMask(J.depthWrite),l.setMask(J.colorWrite);const je=J.stencilWrite;f.setTest(je),je&&(f.setMask(J.stencilWriteMask),f.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),f.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),k(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?L(s.SAMPLE_ALPHA_TO_COVERAGE):q(s.SAMPLE_ALPHA_TO_COVERAGE)}function ye(J){ce!==J&&(J?s.frontFace(s.CW):s.frontFace(s.CCW),ce=J)}function Ce(J){J!==I_?(L(s.CULL_FACE),J!==W&&(J===Gm?s.cullFace(s.BACK):J===U_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):q(s.CULL_FACE),W=J}function R(J){J!==j&&(re&&s.lineWidth(J),j=J)}function k(J,ze,Oe){J?(L(s.POLYGON_OFFSET_FILL),(te!==ze||ae!==Oe)&&(te=ze,ae=Oe,c.getReversed()&&(ze=-ze),s.polygonOffset(ze,Oe))):q(s.POLYGON_OFFSET_FILL)}function be(J){J?L(s.SCISSOR_TEST):q(s.SCISSOR_TEST)}function Ge(J){J===void 0&&(J=s.TEXTURE0+se-1),le!==J&&(s.activeTexture(J),le=J)}function Ve(J,ze,Oe){Oe===void 0&&(le===null?Oe=s.TEXTURE0+se-1:Oe=le);let je=fe[Oe];je===void 0&&(je={type:void 0,texture:void 0},fe[Oe]=je),(je.type!==J||je.texture!==ze)&&(le!==Oe&&(s.activeTexture(Oe),le=Oe),s.bindTexture(J,ze||C[J]),je.type=J,je.texture=ze)}function U(){const J=fe[le];J!==void 0&&J.type!==void 0&&(s.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(J){Ct("WebGLState:",J)}}function Z(){try{s.compressedTexImage3D(...arguments)}catch(J){Ct("WebGLState:",J)}}function Me(){try{s.texSubImage2D(...arguments)}catch(J){Ct("WebGLState:",J)}}function we(){try{s.texSubImage3D(...arguments)}catch(J){Ct("WebGLState:",J)}}function Se(){try{s.compressedTexSubImage2D(...arguments)}catch(J){Ct("WebGLState:",J)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(J){Ct("WebGLState:",J)}}function Ue(){try{s.texStorage2D(...arguments)}catch(J){Ct("WebGLState:",J)}}function He(){try{s.texStorage3D(...arguments)}catch(J){Ct("WebGLState:",J)}}function at(){try{s.texImage2D(...arguments)}catch(J){Ct("WebGLState:",J)}}function Pe(){try{s.texImage3D(...arguments)}catch(J){Ct("WebGLState:",J)}}function De(J){ke.equals(J)===!1&&(s.scissor(J.x,J.y,J.z,J.w),ke.copy(J))}function Ke(J){$.equals(J)===!1&&(s.viewport(J.x,J.y,J.z,J.w),$.copy(J))}function et(J,ze){let Oe=h.get(ze);Oe===void 0&&(Oe=new WeakMap,h.set(ze,Oe));let je=Oe.get(J);je===void 0&&(je=s.getUniformBlockIndex(ze,J.name),Oe.set(J,je))}function Ye(J,ze){const je=h.get(ze).get(J);p.get(ze)!==je&&(s.uniformBlockBinding(ze,je,J.__bindingPointIndex),p.set(ze,je))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,fe={},x={},m=new WeakMap,S=[],M=null,w=!1,_=null,y=null,D=null,b=null,P=null,O=null,F=null,B=new Rt(0,0,0),T=0,I=!1,ce=null,W=null,j=null,te=null,ae=null,ke.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:L,disable:q,bindFramebuffer:xe,drawBuffers:ee,useProgram:oe,setBlending:pe,setMaterial:ge,setFlipSided:ye,setCullFace:Ce,setLineWidth:R,setPolygonOffset:k,setScissorTest:be,activeTexture:Ge,bindTexture:Ve,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:at,texImage3D:Pe,updateUBOMapping:et,uniformBlockBinding:Ye,texStorage2D:Ue,texStorage3D:He,texSubImage2D:Me,texSubImage3D:we,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ze,scissor:De,viewport:Ke,reset:ht}}function ET(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ne,v=new WeakMap;let x;const m=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,E){return S?new OffscreenCanvas(U,E):xu("canvas")}function w(U,E,Z){let Me=1;const we=Ve(U);if((we.width>Z||we.height>Z)&&(Me=Z/Math.max(we.width,we.height)),Me<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Se=Math.floor(Me*we.width),Ze=Math.floor(Me*we.height);x===void 0&&(x=M(Se,Ze));const Ue=E?M(Se,Ze):x;return Ue.width=Se,Ue.height=Ze,Ue.getContext("2d").drawImage(U,0,0,Se,Ze),pt("WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+Se+"x"+Ze+")."),Ue}else return"data"in U&&pt("WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),U;return U}function _(U){return U.generateMipmaps}function y(U){s.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(U,E,Z,Me,we=!1){if(U!==null){if(s[U]!==void 0)return s[U];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Se=E;if(E===s.RED&&(Z===s.FLOAT&&(Se=s.R32F),Z===s.HALF_FLOAT&&(Se=s.R16F),Z===s.UNSIGNED_BYTE&&(Se=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(Se=s.R8UI),Z===s.UNSIGNED_SHORT&&(Se=s.R16UI),Z===s.UNSIGNED_INT&&(Se=s.R32UI),Z===s.BYTE&&(Se=s.R8I),Z===s.SHORT&&(Se=s.R16I),Z===s.INT&&(Se=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(Se=s.RG32F),Z===s.HALF_FLOAT&&(Se=s.RG16F),Z===s.UNSIGNED_BYTE&&(Se=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(Se=s.RG8UI),Z===s.UNSIGNED_SHORT&&(Se=s.RG16UI),Z===s.UNSIGNED_INT&&(Se=s.RG32UI),Z===s.BYTE&&(Se=s.RG8I),Z===s.SHORT&&(Se=s.RG16I),Z===s.INT&&(Se=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(Se=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(Se=s.RGB16UI),Z===s.UNSIGNED_INT&&(Se=s.RGB32UI),Z===s.BYTE&&(Se=s.RGB8I),Z===s.SHORT&&(Se=s.RGB16I),Z===s.INT&&(Se=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(Se=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(Se=s.RGBA16UI),Z===s.UNSIGNED_INT&&(Se=s.RGBA32UI),Z===s.BYTE&&(Se=s.RGBA8I),Z===s.SHORT&&(Se=s.RGBA16I),Z===s.INT&&(Se=s.RGBA32I)),E===s.RGB&&(Z===s.UNSIGNED_INT_5_9_9_9_REV&&(Se=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Se=s.R11F_G11F_B10F)),E===s.RGBA){const Ze=we?_u:bt.getTransfer(Me);Z===s.FLOAT&&(Se=s.RGBA32F),Z===s.HALF_FLOAT&&(Se=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(Se=Ze===Ut?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(Se=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(Se=s.RGB5_A1)}return(Se===s.R16F||Se===s.R32F||Se===s.RG16F||Se===s.RG32F||Se===s.RGBA16F||Se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function P(U,E){let Z;return U?E===null||E===Ii||E===ha?Z=s.DEPTH24_STENCIL8:E===Pi?Z=s.DEPTH32F_STENCIL8:E===da&&(Z=s.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ii||E===ha?Z=s.DEPTH_COMPONENT24:E===Pi?Z=s.DEPTH_COMPONENT32F:E===da&&(Z=s.DEPTH_COMPONENT16),Z}function O(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==hn&&U.minFilter!==Sn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),T(E),E.isVideoTexture&&v.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),ce(E)}function T(U){const E=r.get(U);if(E.__webglInit===void 0)return;const Z=U.source,Me=m.get(Z);if(Me){const we=Me[E.__cacheKey];we.usedTimes--,we.usedTimes===0&&I(U),Object.keys(Me).length===0&&m.delete(Z)}r.remove(U)}function I(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const Z=U.source,Me=m.get(Z);delete Me[E.__cacheKey],c.memory.textures--}function ce(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(E.__webglFramebuffer[Me]))for(let we=0;we<E.__webglFramebuffer[Me].length;we++)s.deleteFramebuffer(E.__webglFramebuffer[Me][we]);else s.deleteFramebuffer(E.__webglFramebuffer[Me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Me])}else{if(Array.isArray(E.__webglFramebuffer))for(let Me=0;Me<E.__webglFramebuffer.length;Me++)s.deleteFramebuffer(E.__webglFramebuffer[Me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Me=0;Me<E.__webglColorRenderbuffer.length;Me++)E.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=U.textures;for(let Me=0,we=Z.length;Me<we;Me++){const Se=r.get(Z[Me]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),c.memory.textures--),r.remove(Z[Me])}r.remove(U)}let W=0;function j(){W=0}function te(){const U=W;return U>=o.maxTextures&&pt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),W+=1,U}function ae(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function se(U,E){const Z=r.get(U);if(U.isVideoTexture&&be(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Z.__version!==U.version){const Me=U.image;if(Me===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{C(Z,U,E);return}}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function re(U,E){const Z=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){C(Z,U,E);return}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function X(U,E){const Z=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){C(Z,U,E);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function H(U,E){const Z=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Z.__version!==U.version){L(Z,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const le={[fd]:s.REPEAT,[Qi]:s.CLAMP_TO_EDGE,[dd]:s.MIRRORED_REPEAT},fe={[hn]:s.NEAREST,[ix]:s.NEAREST_MIPMAP_NEAREST,[Pl]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[_f]:s.LINEAR_MIPMAP_NEAREST,[ls]:s.LINEAR_MIPMAP_LINEAR},V={[ax]:s.NEVER,[dx]:s.ALWAYS,[lx]:s.LESS,[ah]:s.LEQUAL,[ux]:s.EQUAL,[lh]:s.GEQUAL,[cx]:s.GREATER,[fx]:s.NOTEQUAL};function ne(U,E){if(E.type===Pi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Sn||E.magFilter===_f||E.magFilter===Pl||E.magFilter===ls||E.minFilter===Sn||E.minFilter===_f||E.minFilter===Pl||E.minFilter===ls)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,le[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,fe[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,fe[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,V[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hn||E.minFilter!==Pl&&E.minFilter!==ls||E.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ke(U,E){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const Me=E.source;let we=m.get(Me);we===void 0&&(we={},m.set(Me,we));const Se=ae(E);if(Se!==U.__cacheKey){we[Se]===void 0&&(we[Se]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),we[Se].usedTimes++;const Ze=we[U.__cacheKey];Ze!==void 0&&(we[U.__cacheKey].usedTimes--,Ze.usedTimes===0&&I(E)),U.__cacheKey=Se,U.__webglTexture=we[Se].texture}return Z}function $(U,E,Z){return Math.floor(Math.floor(U/Z)/E)}function G(U,E,Z,Me){const Se=U.updateRanges;if(Se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Z,Me,E.data);else{Se.sort((Pe,De)=>Pe.start-De.start);let Ze=0;for(let Pe=1;Pe<Se.length;Pe++){const De=Se[Ze],Ke=Se[Pe],et=De.start+De.count,Ye=$(Ke.start,E.width,4),ht=$(De.start,E.width,4);Ke.start<=et+1&&Ye===ht&&$(Ke.start+Ke.count-1,E.width,4)===Ye?De.count=Math.max(De.count,Ke.start+Ke.count-De.start):(++Ze,Se[Ze]=Ke)}Se.length=Ze+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),at=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,De=Se.length;Pe<De;Pe++){const Ke=Se[Pe],et=Math.floor(Ke.start/4),Ye=Math.ceil(Ke.count/4),ht=et%E.width,J=Math.floor(et/E.width),ze=Ye,Oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,J),t.texSubImage2D(s.TEXTURE_2D,0,ht,J,ze,Oe,Z,Me,E.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,at)}}function C(U,E,Z){let Me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Me=s.TEXTURE_3D);const we=ke(U,E),Se=E.source;t.bindTexture(Me,U.__webglTexture,s.TEXTURE0+Z);const Ze=r.get(Se);if(Se.version!==Ze.__version||we===!0){t.activeTexture(s.TEXTURE0+Z);const Ue=bt.getPrimaries(bt.workingColorSpace),He=E.colorSpace===Nr?null:bt.getPrimaries(E.colorSpace),at=E.colorSpace===Nr||Ue===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Pe=w(E.image,!1,o.maxTextureSize);Pe=Ge(E,Pe);const De=l.convert(E.format,E.colorSpace),Ke=l.convert(E.type);let et=b(E.internalFormat,De,Ke,E.colorSpace,E.isVideoTexture);ne(Me,E);let Ye;const ht=E.mipmaps,J=E.isVideoTexture!==!0,ze=Ze.__version===void 0||we===!0,Oe=Se.dataReady,je=O(E,Pe);if(E.isDepthTexture)et=P(E.format===us,E.type),ze&&(J?t.texStorage2D(s.TEXTURE_2D,1,et,Pe.width,Pe.height):t.texImage2D(s.TEXTURE_2D,0,et,Pe.width,Pe.height,0,De,Ke,null));else if(E.isDataTexture)if(ht.length>0){J&&ze&&t.texStorage2D(s.TEXTURE_2D,je,et,ht[0].width,ht[0].height);for(let Fe=0,Ee=ht.length;Fe<Ee;Fe++)Ye=ht[Fe],J?Oe&&t.texSubImage2D(s.TEXTURE_2D,Fe,0,0,Ye.width,Ye.height,De,Ke,Ye.data):t.texImage2D(s.TEXTURE_2D,Fe,et,Ye.width,Ye.height,0,De,Ke,Ye.data);E.generateMipmaps=!1}else J?(ze&&t.texStorage2D(s.TEXTURE_2D,je,et,Pe.width,Pe.height),Oe&&G(E,Pe,De,Ke)):t.texImage2D(s.TEXTURE_2D,0,et,Pe.width,Pe.height,0,De,Ke,Pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){J&&ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,je,et,ht[0].width,ht[0].height,Pe.depth);for(let Fe=0,Ee=ht.length;Fe<Ee;Fe++)if(Ye=ht[Fe],E.format!==_i)if(De!==null)if(J){if(Oe)if(E.layerUpdates.size>0){const nt=D0(Ye.width,Ye.height,E.format,E.type);for(const mt of E.layerUpdates){const It=Ye.data.subarray(mt*nt/Ye.data.BYTES_PER_ELEMENT,(mt+1)*nt/Ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Fe,0,0,mt,Ye.width,Ye.height,1,De,It)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Fe,0,0,0,Ye.width,Ye.height,Pe.depth,De,Ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Fe,et,Ye.width,Ye.height,Pe.depth,0,Ye.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Fe,0,0,0,Ye.width,Ye.height,Pe.depth,De,Ke,Ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Fe,et,Ye.width,Ye.height,Pe.depth,0,De,Ke,Ye.data)}else{J&&ze&&t.texStorage2D(s.TEXTURE_2D,je,et,ht[0].width,ht[0].height);for(let Fe=0,Ee=ht.length;Fe<Ee;Fe++)Ye=ht[Fe],E.format!==_i?De!==null?J?Oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,Fe,0,0,Ye.width,Ye.height,De,Ye.data):t.compressedTexImage2D(s.TEXTURE_2D,Fe,et,Ye.width,Ye.height,0,Ye.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Oe&&t.texSubImage2D(s.TEXTURE_2D,Fe,0,0,Ye.width,Ye.height,De,Ke,Ye.data):t.texImage2D(s.TEXTURE_2D,Fe,et,Ye.width,Ye.height,0,De,Ke,Ye.data)}else if(E.isDataArrayTexture)if(J){if(ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,je,et,Pe.width,Pe.height,Pe.depth),Oe)if(E.layerUpdates.size>0){const Fe=D0(Pe.width,Pe.height,E.format,E.type);for(const Ee of E.layerUpdates){const nt=Pe.data.subarray(Ee*Fe/Pe.data.BYTES_PER_ELEMENT,(Ee+1)*Fe/Pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ee,Pe.width,Pe.height,1,De,Ke,nt)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,De,Ke,Pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Pe.width,Pe.height,Pe.depth,0,De,Ke,Pe.data);else if(E.isData3DTexture)J?(ze&&t.texStorage3D(s.TEXTURE_3D,je,et,Pe.width,Pe.height,Pe.depth),Oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,De,Ke,Pe.data)):t.texImage3D(s.TEXTURE_3D,0,et,Pe.width,Pe.height,Pe.depth,0,De,Ke,Pe.data);else if(E.isFramebufferTexture){if(ze)if(J)t.texStorage2D(s.TEXTURE_2D,je,et,Pe.width,Pe.height);else{let Fe=Pe.width,Ee=Pe.height;for(let nt=0;nt<je;nt++)t.texImage2D(s.TEXTURE_2D,nt,et,Fe,Ee,0,De,Ke,null),Fe>>=1,Ee>>=1}}else if(ht.length>0){if(J&&ze){const Fe=Ve(ht[0]);t.texStorage2D(s.TEXTURE_2D,je,et,Fe.width,Fe.height)}for(let Fe=0,Ee=ht.length;Fe<Ee;Fe++)Ye=ht[Fe],J?Oe&&t.texSubImage2D(s.TEXTURE_2D,Fe,0,0,De,Ke,Ye):t.texImage2D(s.TEXTURE_2D,Fe,et,De,Ke,Ye);E.generateMipmaps=!1}else if(J){if(ze){const Fe=Ve(Pe);t.texStorage2D(s.TEXTURE_2D,je,et,Fe.width,Fe.height)}Oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ke,Pe)}else t.texImage2D(s.TEXTURE_2D,0,et,De,Ke,Pe);_(E)&&y(Me),Ze.__version=Se.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function L(U,E,Z){if(E.image.length!==6)return;const Me=ke(U,E),we=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+Z);const Se=r.get(we);if(we.version!==Se.__version||Me===!0){t.activeTexture(s.TEXTURE0+Z);const Ze=bt.getPrimaries(bt.workingColorSpace),Ue=E.colorSpace===Nr?null:bt.getPrimaries(E.colorSpace),He=E.colorSpace===Nr||Ze===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const at=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,De=[];for(let Ee=0;Ee<6;Ee++)!at&&!Pe?De[Ee]=w(E.image[Ee],!0,o.maxCubemapSize):De[Ee]=Pe?E.image[Ee].image:E.image[Ee],De[Ee]=Ge(E,De[Ee]);const Ke=De[0],et=l.convert(E.format,E.colorSpace),Ye=l.convert(E.type),ht=b(E.internalFormat,et,Ye,E.colorSpace),J=E.isVideoTexture!==!0,ze=Se.__version===void 0||Me===!0,Oe=we.dataReady;let je=O(E,Ke);ne(s.TEXTURE_CUBE_MAP,E);let Fe;if(at){J&&ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,je,ht,Ke.width,Ke.height);for(let Ee=0;Ee<6;Ee++){Fe=De[Ee].mipmaps;for(let nt=0;nt<Fe.length;nt++){const mt=Fe[nt];E.format!==_i?et!==null?J?Oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt,0,0,mt.width,mt.height,et,mt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt,ht,mt.width,mt.height,0,mt.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt,0,0,mt.width,mt.height,et,Ye,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt,ht,mt.width,mt.height,0,et,Ye,mt.data)}}}else{if(Fe=E.mipmaps,J&&ze){Fe.length>0&&je++;const Ee=Ve(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,je,ht,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Pe){J?Oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,De[Ee].width,De[Ee].height,et,Ye,De[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ht,De[Ee].width,De[Ee].height,0,et,Ye,De[Ee].data);for(let nt=0;nt<Fe.length;nt++){const It=Fe[nt].image[Ee].image;J?Oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt+1,0,0,It.width,It.height,et,Ye,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt+1,ht,It.width,It.height,0,et,Ye,It.data)}}else{J?Oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,et,Ye,De[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ht,et,Ye,De[Ee]);for(let nt=0;nt<Fe.length;nt++){const mt=Fe[nt];J?Oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt+1,0,0,et,Ye,mt.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt+1,ht,et,Ye,mt.image[Ee])}}}_(E)&&y(s.TEXTURE_CUBE_MAP),Se.__version=we.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function q(U,E,Z,Me,we,Se){const Ze=l.convert(Z.format,Z.colorSpace),Ue=l.convert(Z.type),He=b(Z.internalFormat,Ze,Ue,Z.colorSpace),at=r.get(E),Pe=r.get(Z);if(Pe.__renderTarget=E,!at.__hasExternalTextures){const De=Math.max(1,E.width>>Se),Ke=Math.max(1,E.height>>Se);we===s.TEXTURE_3D||we===s.TEXTURE_2D_ARRAY?t.texImage3D(we,Se,He,De,Ke,E.depth,0,Ze,Ue,null):t.texImage2D(we,Se,He,De,Ke,0,Ze,Ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),k(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,we,Pe.__webglTexture,0,R(E)):(we===s.TEXTURE_2D||we>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,we,Pe.__webglTexture,Se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(U,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const Me=E.depthTexture,we=Me&&Me.isDepthTexture?Me.type:null,Se=P(E.stencilBuffer,we),Ze=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;k(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(E),Se,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(E),Se,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Se,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,U)}else{const Me=E.textures;for(let we=0;we<Me.length;we++){const Se=Me[we],Ze=l.convert(Se.format,Se.colorSpace),Ue=l.convert(Se.type),He=b(Se.internalFormat,Ze,Ue,Se.colorSpace);k(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(E),He,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(E),He,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,He,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(U,E,Z){const Me=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const we=r.get(E.depthTexture);if(we.__renderTarget=E,(!we.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Me){if(we.__webglInit===void 0&&(we.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),we.__webglTexture===void 0){we.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,we.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E.depthTexture);const at=l.convert(E.depthTexture.format),Pe=l.convert(E.depthTexture.type);let De;E.depthTexture.format===sr?De=s.DEPTH_COMPONENT24:E.depthTexture.format===us&&(De=s.DEPTH24_STENCIL8);for(let Ke=0;Ke<6;Ke++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,De,E.width,E.height,0,at,Pe,null)}}else se(E.depthTexture,0);const Se=we.__webglTexture,Ze=R(E),Ue=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,He=E.depthTexture.format===us?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===sr)k(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,He,Ue,Se,0,Ze):s.framebufferTexture2D(s.FRAMEBUFFER,He,Ue,Se,0);else if(E.depthTexture.format===us)k(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,He,Ue,Se,0,Ze):s.framebufferTexture2D(s.FRAMEBUFFER,He,Ue,Se,0);else throw new Error("Unknown depthTexture format")}function oe(U){const E=r.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const Me=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Me){const we=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Me.removeEventListener("dispose",we)};Me.addEventListener("dispose",we),E.__depthDisposeCallback=we}E.__boundDepthTexture=Me}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let Me=0;Me<6;Me++)ee(E.__webglFramebuffer[Me],U,Me);else{const Me=U.texture.mipmaps;Me&&Me.length>0?ee(E.__webglFramebuffer[0],U,0):ee(E.__webglFramebuffer,U,0)}else if(Z){E.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Me]),E.__webglDepthbuffer[Me]===void 0)E.__webglDepthbuffer[Me]=s.createRenderbuffer(),xe(E.__webglDepthbuffer[Me],U,!1);else{const we=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,Se)}}else{const Me=U.texture.mipmaps;if(Me&&Me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),xe(E.__webglDepthbuffer,U,!1);else{const we=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,Se)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(U,E,Z){const Me=r.get(U);E!==void 0&&q(Me.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&oe(U)}function Te(U){const E=U.texture,Z=r.get(U),Me=r.get(E);U.addEventListener("dispose",B);const we=U.textures,Se=U.isWebGLCubeRenderTarget===!0,Ze=we.length>1;if(Ze||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=E.version,c.memory.textures++),Se){Z.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Ue]=[];for(let He=0;He<E.mipmaps.length;He++)Z.__webglFramebuffer[Ue][He]=s.createFramebuffer()}else Z.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)Z.__webglFramebuffer[Ue]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Ue=0,He=we.length;Ue<He;Ue++){const at=r.get(we[Ue]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),c.memory.textures++)}if(U.samples>0&&k(U)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ue=0;Ue<we.length;Ue++){const He=we[Ue];Z.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ue]);const at=l.convert(He.format,He.colorSpace),Pe=l.convert(He.type),De=b(He.internalFormat,at,Pe,He.colorSpace,U.isXRRenderTarget===!0),Ke=R(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,De,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Se){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)q(Z.__webglFramebuffer[Ue][He],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,He);else q(Z.__webglFramebuffer[Ue],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);_(E)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let Ue=0,He=we.length;Ue<He;Ue++){const at=we[Ue],Pe=r.get(at);let De=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(De=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,Pe.__webglTexture),ne(De,at),q(Z.__webglFramebuffer,U,at,s.COLOR_ATTACHMENT0+Ue,De,0),_(at)&&y(De)}t.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Me.__webglTexture),ne(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)q(Z.__webglFramebuffer[He],U,E,s.COLOR_ATTACHMENT0,Ue,He);else q(Z.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,Ue,0);_(E)&&y(Ue),t.unbindTexture()}U.depthBuffer&&oe(U)}function pe(U){const E=U.textures;for(let Z=0,Me=E.length;Z<Me;Z++){const we=E[Z];if(_(we)){const Se=D(U),Ze=r.get(we).__webglTexture;t.bindTexture(Se,Ze),y(Se),t.unbindTexture()}}}const ge=[],ye=[];function Ce(U){if(U.samples>0){if(k(U)===!1){const E=U.textures,Z=U.width,Me=U.height;let we=s.COLOR_BUFFER_BIT;const Se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(U),Ue=E.length>1;if(Ue)for(let at=0;at<E.length;at++)t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const He=U.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let at=0;at<E.length;at++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(we|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(we|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[at]);const Pe=r.get(E[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pe,0)}s.blitFramebuffer(0,0,Z,Me,0,0,Z,Me,we,s.NEAREST),p===!0&&(ge.length=0,ye.length=0,ge.push(s.COLOR_ATTACHMENT0+at),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ge.push(Se),ye.push(Se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let at=0;at<E.length;at++){t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[at]);const Pe=r.get(E[at]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,Pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function R(U){return Math.min(o.maxSamples,U.samples)}function k(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(U){const E=c.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function Ge(U,E){const Z=U.colorSpace,Me=U.format,we=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==uo&&Z!==Nr&&(bt.getTransfer(Z)===Ut?(Me!==_i||we!==jn)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",Z)),E}function Ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=j,this.setTexture2D=se,this.setTexture2DArray=re,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Ae,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=q,this.useMultisampledRTT=k,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function TT(s,e){function t(r,o=Nr){let l;const c=bt.getTransfer(o);if(r===jn)return s.UNSIGNED_BYTE;if(r===nh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ih)return s.UNSIGNED_SHORT_5_5_5_1;if(r===hg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===pg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===fg)return s.BYTE;if(r===dg)return s.SHORT;if(r===da)return s.UNSIGNED_SHORT;if(r===th)return s.INT;if(r===Ii)return s.UNSIGNED_INT;if(r===Pi)return s.FLOAT;if(r===rr)return s.HALF_FLOAT;if(r===mg)return s.ALPHA;if(r===gg)return s.RGB;if(r===_i)return s.RGBA;if(r===sr)return s.DEPTH_COMPONENT;if(r===us)return s.DEPTH_STENCIL;if(r===vg)return s.RED;if(r===rh)return s.RED_INTEGER;if(r===lo)return s.RG;if(r===sh)return s.RG_INTEGER;if(r===oh)return s.RGBA_INTEGER;if(r===du||r===hu||r===pu||r===mu)if(c===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===du)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===du)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hd||r===pd||r===md||r===gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===hd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===md)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Ed)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===vd||r===_d)return c===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===xd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===yd)return l.COMPRESSED_R11_EAC;if(r===Sd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Md)return l.COMPRESSED_RG11_EAC;if(r===Ed)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Td||r===wd||r===Ad||r===Cd||r===bd||r===Rd||r===Pd||r===Ld||r===Dd||r===Nd||r===Id||r===Ud||r===Fd||r===Od)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Td)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ad)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ld)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Id)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ud)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Od)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bd||r===kd||r===zd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Bd)return c===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vd||r===Hd||r===Gd||r===Wd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Vd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ha?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const wT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new bg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ui({vertexShader:wT,fragmentShader:AT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yi(new Ru(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends ho{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",p=1,h=null,v=null,x=null,m=null,S=null,M=null;const w=typeof XRWebGLBinding<"u",_=new CT,y={},D=t.getContextAttributes();let b=null,P=null;const O=[],F=[],B=new Ne;let T=null;const I=new Yn;I.viewport=new jt;const ce=new Yn;ce.viewport=new jt;const W=[I,ce],j=new ky;let te=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let L=O[C];return L===void 0&&(L=new wf,O[C]=L),L.getTargetRaySpace()},this.getControllerGrip=function(C){let L=O[C];return L===void 0&&(L=new wf,O[C]=L),L.getGripSpace()},this.getHand=function(C){let L=O[C];return L===void 0&&(L=new wf,O[C]=L),L.getHandSpace()};function se(C){const L=F.indexOf(C.inputSource);if(L===-1)return;const q=O[L];q!==void 0&&(q.update(C.inputSource,C.frame,h||c),q.dispatchEvent({type:C.type,data:C.inputSource}))}function re(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",X);for(let C=0;C<O.length;C++){const L=F[C];L!==null&&(F[C]=null,O[C].disconnect(L))}te=null,ae=null,_.reset();for(const C in y)delete y[C];e.setRenderTarget(b),S=null,m=null,x=null,o=null,P=null,G.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){l=C,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){f=C,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(C){h=C},this.getBaseLayer=function(){return m!==null?m:S},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(C){if(o=C,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",re),o.addEventListener("inputsourceschange",X),D.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,xe=null,ee=null;D.depth&&(ee=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=D.stencil?us:sr,xe=D.stencil?ha:Ii);const oe={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:l};x=this.getBinding(),m=x.createProjectionLayer(oe),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new Ni(m.textureWidth,m.textureHeight,{format:_i,type:jn,depthTexture:new ma(m.textureWidth,m.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const q={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,q),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Ni(S.framebufferWidth,S.framebufferHeight,{format:_i,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await o.requestReferenceSpace(f),G.setContext(o),G.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(C){for(let L=0;L<C.removed.length;L++){const q=C.removed[L],xe=F.indexOf(q);xe>=0&&(F[xe]=null,O[xe].disconnect(q))}for(let L=0;L<C.added.length;L++){const q=C.added[L];let xe=F.indexOf(q);if(xe===-1){for(let oe=0;oe<O.length;oe++)if(oe>=F.length){F.push(q),xe=oe;break}else if(F[oe]===null){F[oe]=q,xe=oe;break}if(xe===-1)break}const ee=O[xe];ee&&ee.connect(q)}}const H=new K,le=new K;function fe(C,L,q){H.setFromMatrixPosition(L.matrixWorld),le.setFromMatrixPosition(q.matrixWorld);const xe=H.distanceTo(le),ee=L.projectionMatrix.elements,oe=q.projectionMatrix.elements,Ae=ee[14]/(ee[10]-1),Te=ee[14]/(ee[10]+1),pe=(ee[9]+1)/ee[5],ge=(ee[9]-1)/ee[5],ye=(ee[8]-1)/ee[0],Ce=(oe[8]+1)/oe[0],R=Ae*ye,k=Ae*Ce,be=xe/(-ye+Ce),Ge=be*-ye;if(L.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Ge),C.translateZ(be),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),ee[10]===-1)C.projectionMatrix.copy(L.projectionMatrix),C.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const Ve=Ae+be,U=Te+be,E=R-Ge,Z=k+(xe-Ge),Me=pe*Te/U*Ve,we=ge*Te/U*Ve;C.projectionMatrix.makePerspective(E,Z,Me,we,Ve,U),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function V(C,L){L===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(L.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(o===null)return;let L=C.near,q=C.far;_.texture!==null&&(_.depthNear>0&&(L=_.depthNear),_.depthFar>0&&(q=_.depthFar)),j.near=ce.near=I.near=L,j.far=ce.far=I.far=q,(te!==j.near||ae!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),te=j.near,ae=j.far),j.layers.mask=C.layers.mask|6,I.layers.mask=j.layers.mask&-5,ce.layers.mask=j.layers.mask&-3;const xe=C.parent,ee=j.cameras;V(j,xe);for(let oe=0;oe<ee.length;oe++)V(ee[oe],xe);ee.length===2?fe(j,I,ce):j.projectionMatrix.copy(I.projectionMatrix),ne(C,j,xe)};function ne(C,L,q){q===null?C.matrix.copy(L.matrixWorld):(C.matrix.copy(q.matrixWorld),C.matrix.invert(),C.matrix.multiply(L.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(L.projectionMatrix),C.projectionMatrixInverse.copy(L.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=qd*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(m===null&&S===null))return p},this.setFoveation=function(C){p=C,m!==null&&(m.fixedFoveation=C),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=C)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(C){return y[C]};let ke=null;function $(C,L){if(v=L.getViewerPose(h||c),M=L,v!==null){const q=v.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let xe=!1;q.length!==j.cameras.length&&(j.cameras.length=0,xe=!0);for(let Te=0;Te<q.length;Te++){const pe=q[Te];let ge=null;if(S!==null)ge=S.getViewport(pe);else{const Ce=x.getViewSubImage(m,pe);ge=Ce.viewport,Te===0&&(e.setRenderTargetTextures(P,Ce.colorTexture,Ce.depthStencilTexture),e.setRenderTarget(P))}let ye=W[Te];ye===void 0&&(ye=new Yn,ye.layers.enable(Te),ye.viewport=new jt,W[Te]=ye),ye.matrix.fromArray(pe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(pe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(ge.x,ge.y,ge.width,ge.height),Te===0&&(j.matrix.copy(ye.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),xe===!0&&j.cameras.push(ye)}const ee=o.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){x=r.getBinding();const Te=x.getDepthInformation(q[0]);Te&&Te.isValid&&Te.texture&&_.init(Te,o.renderState)}if(ee&&ee.includes("camera-access")&&w){e.state.unbindTexture(),x=r.getBinding();for(let Te=0;Te<q.length;Te++){const pe=q[Te].camera;if(pe){let ge=y[pe];ge||(ge=new bg,y[pe]=ge);const ye=x.getCameraImage(pe);ge.sourceTexture=ye}}}}for(let q=0;q<O.length;q++){const xe=F[q],ee=O[q];xe!==null&&ee!==void 0&&ee.update(xe,L,h||c)}ke&&ke(C,L),L.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:L}),M=null}const G=new Vg;G.setAnimationLoop($),this.setAnimationLoop=function(C){ke=C},this.dispose=function(){}}}const rs=new xi,RT=new zt;function PT(s,e){function t(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function r(_,y){y.color.getRGB(_.fogColor.value,Og(s)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function o(_,y,D,b,P){y.isMeshBasicMaterial?l(_,y):y.isMeshLambertMaterial?(l(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(_,y),x(_,y)):y.isMeshPhongMaterial?(l(_,y),v(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(_,y),m(_,y),y.isMeshPhysicalMaterial&&S(_,y,P)):y.isMeshMatcapMaterial?(l(_,y),M(_,y)):y.isMeshDepthMaterial?l(_,y):y.isMeshDistanceMaterial?(l(_,y),w(_,y)):y.isMeshNormalMaterial?l(_,y):y.isLineBasicMaterial?(c(_,y),y.isLineDashedMaterial&&f(_,y)):y.isPointsMaterial?p(_,y,D,b):y.isSpriteMaterial?h(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,t(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Bn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,t(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Bn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,t(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,t(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const D=e.get(y),b=D.envMap,P=D.envMapRotation;b&&(_.envMap.value=b,rs.copy(P),rs.x*=-1,rs.y*=-1,rs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),_.envMapRotation.value.setFromMatrix4(RT.makeRotationFromEuler(rs)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,_.aoMapTransform))}function c(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform))}function f(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function p(_,y,D,b){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*D,_.scale.value=b*.5,y.map&&(_.map.value=y.map,t(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function h(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function v(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function x(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function m(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function S(_,y,D){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Bn&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=D.texture,_.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,y){y.matcap&&(_.matcap.value=y.matcap)}function w(_,y){const D=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(D.matrixWorld),_.nearDistance.value=D.shadow.camera.near,_.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LT(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,b){const P=b.program;r.uniformBlockBinding(D,P)}function h(D,b){let P=o[D.id];P===void 0&&(M(D),P=v(D),o[D.id]=P,D.addEventListener("dispose",_));const O=b.program;r.updateUBOMapping(D,O);const F=e.render.frame;l[D.id]!==F&&(m(D),l[D.id]=F)}function v(D){const b=x();D.__bindingPointIndex=b;const P=s.createBuffer(),O=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,O,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,P),P}function x(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(D){const b=o[D.id],P=D.uniforms,O=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let F=0,B=P.length;F<B;F++){const T=Array.isArray(P[F])?P[F]:[P[F]];for(let I=0,ce=T.length;I<ce;I++){const W=T[I];if(S(W,F,I,O)===!0){const j=W.__offset,te=Array.isArray(W.value)?W.value:[W.value];let ae=0;for(let se=0;se<te.length;se++){const re=te[se],X=w(re);typeof re=="number"||typeof re=="boolean"?(W.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,j+ae,W.__data)):re.isMatrix3?(W.__data[0]=re.elements[0],W.__data[1]=re.elements[1],W.__data[2]=re.elements[2],W.__data[3]=0,W.__data[4]=re.elements[3],W.__data[5]=re.elements[4],W.__data[6]=re.elements[5],W.__data[7]=0,W.__data[8]=re.elements[6],W.__data[9]=re.elements[7],W.__data[10]=re.elements[8],W.__data[11]=0):(re.toArray(W.__data,ae),ae+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,W.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,b,P,O){const F=D.value,B=b+"_"+P;if(O[B]===void 0)return typeof F=="number"||typeof F=="boolean"?O[B]=F:O[B]=F.clone(),!0;{const T=O[B];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return O[B]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function M(D){const b=D.uniforms;let P=0;const O=16;for(let B=0,T=b.length;B<T;B++){const I=Array.isArray(b[B])?b[B]:[b[B]];for(let ce=0,W=I.length;ce<W;ce++){const j=I[ce],te=Array.isArray(j.value)?j.value:[j.value];for(let ae=0,se=te.length;ae<se;ae++){const re=te[ae],X=w(re),H=P%O,le=H%X.boundary,fe=H+le;P+=le,fe!==0&&O-fe<X.storage&&(P+=O-fe),j.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=P,P+=X.storage}}}const F=P%O;return F>0&&(P+=O-F),D.__size=P,D.__cache={},this}function w(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pt("WebGLRenderer: Unsupported uniform value type.",D),b}function _(D){const b=D.target;b.removeEventListener("dispose",_);const P=c.indexOf(b.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const D in o)s.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:p,update:h,dispose:y}}const DT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function NT(){return Ci===null&&(Ci=new Bx(DT,16,16,lo,rr),Ci.name="DFG_LUT",Ci.minFilter=Sn,Ci.magFilter=Sn,Ci.wrapS=Qi,Ci.wrapT=Qi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class IT{constructor(e={}){const{canvas:t=px(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:m=!1,outputBufferType:S=jn}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const w=S,_=new Set([oh,sh,rh]),y=new Set([jn,Ii,da,ha,nh,ih]),D=new Uint32Array(4),b=new Int32Array(4);let P=null,O=null;const F=[],B=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let ce=!1;this._outputColorSpace=qn;let W=0,j=0,te=null,ae=-1,se=null;const re=new jt,X=new jt;let H=null;const le=new Rt(0);let fe=0,V=t.width,ne=t.height,ke=1,$=null,G=null;const C=new jt(0,0,V,ne),L=new jt(0,0,V,ne);let q=!1;const xe=new fh;let ee=!1,oe=!1;const Ae=new zt,Te=new K,pe=new jt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Ce(){return te===null?ke:1}let R=r;function k(N,ie){return t.getContext(N,ie)}try{const N={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eh}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",It,!1),R===null){const ie="webgl2";if(R=k(ie,N),R===null)throw k(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Ct("WebGLRenderer: "+N.message),N}let be,Ge,Ve,U,E,Z,Me,we,Se,Ze,Ue,He,at,Pe,De,Ke,et,Ye,ht,J,ze,Oe,je;function Fe(){be=new I1(R),be.init(),ze=new TT(R,be),Ge=new A1(R,be,e,ze),Ve=new MT(R,be),Ge.reversedDepthBuffer&&m&&Ve.buffers.depth.setReversed(!0),U=new O1(R),E=new lT,Z=new ET(R,be,Ve,E,Ge,ze,U),Me=new N1(I),we=new Hy(R),Oe=new T1(R,we),Se=new U1(R,we,U,Oe),Ze=new k1(R,Se,we,Oe,U),Ye=new B1(R,Ge,Z),De=new C1(E),Ue=new aT(I,Me,be,Ge,Oe,De),He=new PT(I,E),at=new cT,Pe=new gT(be),et=new E1(I,Me,Ve,Ze,M,p),Ke=new ST(I,Ze,Ge),je=new LT(R,U,Ge,Ve),ht=new w1(R,be,U),J=new F1(R,be,U),U.programs=Ue.programs,I.capabilities=Ge,I.extensions=be,I.properties=E,I.renderLists=at,I.shadowMap=Ke,I.state=Ve,I.info=U}Fe(),w!==jn&&(T=new V1(w,t.width,t.height,o,l));const Ee=new bT(I,R);this.xr=Ee,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const N=be.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=be.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(N){N!==void 0&&(ke=N,this.setSize(V,ne,!1))},this.getSize=function(N){return N.set(V,ne)},this.setSize=function(N,ie,_e=!0){if(Ee.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}V=N,ne=ie,t.width=Math.floor(N*ke),t.height=Math.floor(ie*ke),_e===!0&&(t.style.width=N+"px",t.style.height=ie+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,N,ie)},this.getDrawingBufferSize=function(N){return N.set(V*ke,ne*ke).floor()},this.setDrawingBufferSize=function(N,ie,_e){V=N,ne=ie,ke=_e,t.width=Math.floor(N*_e),t.height=Math.floor(ie*_e),this.setViewport(0,0,N,ie)},this.setEffects=function(N){if(w===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let ie=0;ie<N.length;ie++)if(N[ie].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(re)},this.getViewport=function(N){return N.copy(C)},this.setViewport=function(N,ie,_e,me){N.isVector4?C.set(N.x,N.y,N.z,N.w):C.set(N,ie,_e,me),Ve.viewport(re.copy(C).multiplyScalar(ke).round())},this.getScissor=function(N){return N.copy(L)},this.setScissor=function(N,ie,_e,me){N.isVector4?L.set(N.x,N.y,N.z,N.w):L.set(N,ie,_e,me),Ve.scissor(X.copy(L).multiplyScalar(ke).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(N){Ve.setScissorTest(q=N)},this.setOpaqueSort=function(N){$=N},this.setTransparentSort=function(N){G=N},this.getClearColor=function(N){return N.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(N=!0,ie=!0,_e=!0){let me=0;if(N){let de=!1;if(te!==null){const Xe=te.texture.format;de=_.has(Xe)}if(de){const Xe=te.texture.type,Qe=y.has(Xe),We=et.getClearColor(),$e=et.getClearAlpha(),lt=We.r,ct=We.g,xt=We.b;Qe?(D[0]=lt,D[1]=ct,D[2]=xt,D[3]=$e,R.clearBufferuiv(R.COLOR,0,D)):(b[0]=lt,b[1]=ct,b[2]=xt,b[3]=$e,R.clearBufferiv(R.COLOR,0,b))}else me|=R.COLOR_BUFFER_BIT}ie&&(me|=R.DEPTH_BUFFER_BIT),_e&&(me|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),me!==0&&R.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",It,!1),et.dispose(),at.dispose(),Pe.dispose(),E.dispose(),Me.dispose(),Ze.dispose(),Oe.dispose(),je.dispose(),Ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",or),Ee.removeEventListener("sessionend",Or),Jn.stop()};function nt(N){N.preventDefault(),yu("WebGLRenderer: Context Lost."),ce=!0}function mt(){yu("WebGLRenderer: Context Restored."),ce=!1;const N=U.autoReset,ie=Ke.enabled,_e=Ke.autoUpdate,me=Ke.needsUpdate,de=Ke.type;Fe(),U.autoReset=N,Ke.enabled=ie,Ke.autoUpdate=_e,Ke.needsUpdate=me,Ke.type=de}function It(N){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function wt(N){const ie=N.target;ie.removeEventListener("dispose",wt),Kn(ie)}function Kn(N){En(N),E.remove(N)}function En(N){const ie=E.get(N).programs;ie!==void 0&&(ie.forEach(function(_e){Ue.releaseProgram(_e)}),N.isShaderMaterial&&Ue.releaseShaderCache(N))}this.renderBufferDirect=function(N,ie,_e,me,de,Xe){ie===null&&(ie=ge);const Qe=de.isMesh&&de.matrixWorld.determinant()<0,We=wa(N,ie,_e,me,de);Ve.setMaterial(me,Qe);let $e=_e.index,lt=1;if(me.wireframe===!0){if($e=Se.getWireframeAttribute(_e),$e===void 0)return;lt=2}const ct=_e.drawRange,xt=_e.attributes.position;let ut=ct.start*lt,Nt=(ct.start+ct.count)*lt;Xe!==null&&(ut=Math.max(ut,Xe.start*lt),Nt=Math.min(Nt,(Xe.start+Xe.count)*lt)),$e!==null?(ut=Math.max(ut,0),Nt=Math.min(Nt,$e.count)):xt!=null&&(ut=Math.max(ut,0),Nt=Math.min(Nt,xt.count));const Bt=Nt-ut;if(Bt<0||Bt===1/0)return;Oe.setup(de,me,We,_e,$e);let Ot,Tt=ht;if($e!==null&&(Ot=we.get($e),Tt=J,Tt.setIndex(Ot)),de.isMesh)me.wireframe===!0?(Ve.setLineWidth(me.wireframeLinewidth*Ce()),Tt.setMode(R.LINES)):Tt.setMode(R.TRIANGLES);else if(de.isLine){let $t=me.linewidth;$t===void 0&&($t=1),Ve.setLineWidth($t*Ce()),de.isLineSegments?Tt.setMode(R.LINES):de.isLineLoop?Tt.setMode(R.LINE_LOOP):Tt.setMode(R.LINE_STRIP)}else de.isPoints?Tt.setMode(R.POINTS):de.isSprite&&Tt.setMode(R.TRIANGLES);if(de.isBatchedMesh)if(de._multiDrawInstances!==null)Su("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount,de._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Tt.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else{const $t=de._multiDrawStarts,st=de._multiDrawCounts,Tn=de._multiDrawCount,Et=$e?we.get($e).bytesPerElement:1,Rn=E.get(me).currentProgram.getUniforms();for(let Pn=0;Pn<Tn;Pn++)Rn.setValue(R,"_gl_DrawID",Pn),Tt.render($t[Pn]/Et,st[Pn])}else if(de.isInstancedMesh)Tt.renderInstances(ut,Bt,de.count);else if(_e.isInstancedBufferGeometry){const $t=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,st=Math.min(_e.instanceCount,$t);Tt.renderInstances(ut,Bt,st)}else Tt.render(ut,Bt)};function ms(N,ie,_e){N.transparent===!0&&N.side===vi&&N.forceSinglePass===!1?(N.side=Bn,N.needsUpdate=!0,kr(N,ie,_e),N.side=Fr,N.needsUpdate=!0,kr(N,ie,_e),N.side=vi):kr(N,ie,_e)}this.compile=function(N,ie,_e=null){_e===null&&(_e=N),O=Pe.get(_e),O.init(ie),B.push(O),_e.traverseVisible(function(de){de.isLight&&de.layers.test(ie.layers)&&(O.pushLight(de),de.castShadow&&O.pushShadow(de))}),N!==_e&&N.traverseVisible(function(de){de.isLight&&de.layers.test(ie.layers)&&(O.pushLight(de),de.castShadow&&O.pushShadow(de))}),O.setupLights();const me=new Set;return N.traverse(function(de){if(!(de.isMesh||de.isPoints||de.isLine||de.isSprite))return;const Xe=de.material;if(Xe)if(Array.isArray(Xe))for(let Qe=0;Qe<Xe.length;Qe++){const We=Xe[Qe];ms(We,_e,de),me.add(We)}else ms(Xe,_e,de),me.add(Xe)}),O=B.pop(),me},this.compileAsync=function(N,ie,_e=null){const me=this.compile(N,ie,_e);return new Promise(de=>{function Xe(){if(me.forEach(function(Qe){E.get(Qe).currentProgram.isReady()&&me.delete(Qe)}),me.size===0){de(N);return}setTimeout(Xe,10)}be.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let Oi=null;function Du(N){Oi&&Oi(N)}function or(){Jn.stop()}function Or(){Jn.start()}const Jn=new Vg;Jn.setAnimationLoop(Du),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(N){Oi=N,Ee.setAnimationLoop(N),N===null?Jn.stop():Jn.start()},Ee.addEventListener("sessionstart",or),Ee.addEventListener("sessionend",Or),this.render=function(N,ie){if(ie!==void 0&&ie.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ce===!0)return;const _e=Ee.enabled===!0&&Ee.isPresenting===!0,me=T!==null&&(te===null||_e)&&T.begin(I,te);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(ie),ie=Ee.getCamera()),N.isScene===!0&&N.onBeforeRender(I,N,ie,te),O=Pe.get(N,B.length),O.init(ie),B.push(O),Ae.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),xe.setFromProjectionMatrix(Ae,Li,ie.reversedDepth),oe=this.localClippingEnabled,ee=De.init(this.clippingPlanes,oe),P=at.get(N,F.length),P.init(),F.push(P),Ee.enabled===!0&&Ee.isPresenting===!0){const Qe=I.xr.getDepthSensingMesh();Qe!==null&&Br(Qe,ie,-1/0,I.sortObjects)}Br(N,ie,0,I.sortObjects),P.finish(),I.sortObjects===!0&&P.sort($,G),ye=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,ye&&et.addToRenderList(P,N),this.info.render.frame++,ee===!0&&De.beginShadows();const de=O.state.shadowsArray;if(Ke.render(de,N,ie),ee===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),(me&&T.hasRenderPass())===!1){const Qe=P.opaque,We=P.transmissive;if(O.setupLights(),ie.isArrayCamera){const $e=ie.cameras;if(We.length>0)for(let lt=0,ct=$e.length;lt<ct;lt++){const xt=$e[lt];Ea(Qe,We,N,xt)}ye&&et.render(N);for(let lt=0,ct=$e.length;lt<ct;lt++){const xt=$e[lt];Ma(P,N,xt,xt.viewport)}}else We.length>0&&Ea(Qe,We,N,ie),ye&&et.render(N),Ma(P,N,ie)}te!==null&&j===0&&(Z.updateMultisampleRenderTarget(te),Z.updateRenderTargetMipmap(te)),me&&T.end(I),N.isScene===!0&&N.onAfterRender(I,N,ie),Oe.resetDefaultState(),ae=-1,se=null,B.pop(),B.length>0?(O=B[B.length-1],ee===!0&&De.setGlobalState(I.clippingPlanes,O.state.camera)):O=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function Br(N,ie,_e,me){if(N.visible===!1)return;if(N.layers.test(ie.layers)){if(N.isGroup)_e=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ie);else if(N.isLight)O.pushLight(N),N.castShadow&&O.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||xe.intersectsSprite(N)){me&&pe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ae);const Qe=Ze.update(N),We=N.material;We.visible&&P.push(N,Qe,We,_e,pe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||xe.intersectsObject(N))){const Qe=Ze.update(N),We=N.material;if(me&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),pe.copy(N.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),pe.copy(Qe.boundingSphere.center)),pe.applyMatrix4(N.matrixWorld).applyMatrix4(Ae)),Array.isArray(We)){const $e=Qe.groups;for(let lt=0,ct=$e.length;lt<ct;lt++){const xt=$e[lt],ut=We[xt.materialIndex];ut&&ut.visible&&P.push(N,Qe,ut,_e,pe.z,xt)}}else We.visible&&P.push(N,Qe,We,_e,pe.z,null)}}const Xe=N.children;for(let Qe=0,We=Xe.length;Qe<We;Qe++)Br(Xe[Qe],ie,_e,me)}function Ma(N,ie,_e,me){const{opaque:de,transmissive:Xe,transparent:Qe}=N;O.setupLightsView(_e),ee===!0&&De.setGlobalState(I.clippingPlanes,_e),me&&Ve.viewport(re.copy(me)),de.length>0&&gs(de,ie,_e),Xe.length>0&&gs(Xe,ie,_e),Qe.length>0&&gs(Qe,ie,_e),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Ea(N,ie,_e,me){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[me.id]===void 0){const ut=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[me.id]=new Ni(1,1,{generateMipmaps:!0,type:ut?rr:jn,minFilter:ls,samples:Math.max(4,Ge.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Xe=O.state.transmissionRenderTarget[me.id],Qe=me.viewport||re;Xe.setSize(Qe.z*I.transmissionResolutionScale,Qe.w*I.transmissionResolutionScale);const We=I.getRenderTarget(),$e=I.getActiveCubeFace(),lt=I.getActiveMipmapLevel();I.setRenderTarget(Xe),I.getClearColor(le),fe=I.getClearAlpha(),fe<1&&I.setClearColor(16777215,.5),I.clear(),ye&&et.render(_e);const ct=I.toneMapping;I.toneMapping=Di;const xt=me.viewport;if(me.viewport!==void 0&&(me.viewport=void 0),O.setupLightsView(me),ee===!0&&De.setGlobalState(I.clippingPlanes,me),gs(N,_e,me),Z.updateMultisampleRenderTarget(Xe),Z.updateRenderTargetMipmap(Xe),be.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Nt=0,Bt=ie.length;Nt<Bt;Nt++){const Ot=ie[Nt],{object:Tt,geometry:$t,material:st,group:Tn}=Ot;if(st.side===vi&&Tt.layers.test(me.layers)){const Et=st.side;st.side=Bn,st.needsUpdate=!0,Si(Tt,_e,me,$t,st,Tn),st.side=Et,st.needsUpdate=!0,ut=!0}}ut===!0&&(Z.updateMultisampleRenderTarget(Xe),Z.updateRenderTargetMipmap(Xe))}I.setRenderTarget(We,$e,lt),I.setClearColor(le,fe),xt!==void 0&&(me.viewport=xt),I.toneMapping=ct}function gs(N,ie,_e){const me=ie.isScene===!0?ie.overrideMaterial:null;for(let de=0,Xe=N.length;de<Xe;de++){const Qe=N[de],{object:We,geometry:$e,group:lt}=Qe;let ct=Qe.material;ct.allowOverride===!0&&me!==null&&(ct=me),We.layers.test(_e.layers)&&Si(We,ie,_e,$e,ct,lt)}}function Si(N,ie,_e,me,de,Xe){N.onBeforeRender(I,ie,_e,me,de,Xe),N.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),de.onBeforeRender(I,ie,_e,me,N,Xe),de.transparent===!0&&de.side===vi&&de.forceSinglePass===!1?(de.side=Bn,de.needsUpdate=!0,I.renderBufferDirect(_e,ie,me,de,N,Xe),de.side=Fr,de.needsUpdate=!0,I.renderBufferDirect(_e,ie,me,de,N,Xe),de.side=vi):I.renderBufferDirect(_e,ie,me,de,N,Xe),N.onAfterRender(I,ie,_e,me,de,Xe)}function kr(N,ie,_e){ie.isScene!==!0&&(ie=ge);const me=E.get(N),de=O.state.lights,Xe=O.state.shadowsArray,Qe=de.state.version,We=Ue.getParameters(N,de.state,Xe,ie,_e),$e=Ue.getProgramCacheKey(We);let lt=me.programs;me.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?ie.environment:null,me.fog=ie.fog;const ct=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;me.envMap=Me.get(N.envMap||me.environment,ct),me.envMapRotation=me.environment!==null&&N.envMap===null?ie.environmentRotation:N.envMapRotation,lt===void 0&&(N.addEventListener("dispose",wt),lt=new Map,me.programs=lt);let xt=lt.get($e);if(xt!==void 0){if(me.currentProgram===xt&&me.lightsStateVersion===Qe)return Ta(N,We),xt}else We.uniforms=Ue.getUniforms(N),N.onBeforeCompile(We,I),xt=Ue.acquireProgram(We,$e),lt.set($e,xt),me.uniforms=We.uniforms;const ut=me.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ut.clippingPlanes=De.uniform),Ta(N,We),me.needsLights=Ca(N),me.lightsStateVersion=Qe,me.needsLights&&(ut.ambientLightColor.value=de.state.ambient,ut.lightProbe.value=de.state.probe,ut.directionalLights.value=de.state.directional,ut.directionalLightShadows.value=de.state.directionalShadow,ut.spotLights.value=de.state.spot,ut.spotLightShadows.value=de.state.spotShadow,ut.rectAreaLights.value=de.state.rectArea,ut.ltc_1.value=de.state.rectAreaLTC1,ut.ltc_2.value=de.state.rectAreaLTC2,ut.pointLights.value=de.state.point,ut.pointLightShadows.value=de.state.pointShadow,ut.hemisphereLights.value=de.state.hemi,ut.directionalShadowMatrix.value=de.state.directionalShadowMatrix,ut.spotLightMatrix.value=de.state.spotLightMatrix,ut.spotLightMap.value=de.state.spotLightMap,ut.pointShadowMatrix.value=de.state.pointShadowMatrix),me.currentProgram=xt,me.uniformsList=null,xt}function mo(N){if(N.uniformsList===null){const ie=N.currentProgram.getUniforms();N.uniformsList=vu.seqWithValue(ie.seq,N.uniforms)}return N.uniformsList}function Ta(N,ie){const _e=E.get(N);_e.outputColorSpace=ie.outputColorSpace,_e.batching=ie.batching,_e.batchingColor=ie.batchingColor,_e.instancing=ie.instancing,_e.instancingColor=ie.instancingColor,_e.instancingMorph=ie.instancingMorph,_e.skinning=ie.skinning,_e.morphTargets=ie.morphTargets,_e.morphNormals=ie.morphNormals,_e.morphColors=ie.morphColors,_e.morphTargetsCount=ie.morphTargetsCount,_e.numClippingPlanes=ie.numClippingPlanes,_e.numIntersection=ie.numClipIntersection,_e.vertexAlphas=ie.vertexAlphas,_e.vertexTangents=ie.vertexTangents,_e.toneMapping=ie.toneMapping}function wa(N,ie,_e,me,de){ie.isScene!==!0&&(ie=ge),Z.resetTextureUnits();const Xe=ie.fog,Qe=me.isMeshStandardMaterial||me.isMeshLambertMaterial||me.isMeshPhongMaterial?ie.environment:null,We=te===null?I.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:uo,$e=me.isMeshStandardMaterial||me.isMeshLambertMaterial&&!me.envMap||me.isMeshPhongMaterial&&!me.envMap,lt=Me.get(me.envMap||Qe,$e),ct=me.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,xt=!!_e.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),ut=!!_e.morphAttributes.position,Nt=!!_e.morphAttributes.normal,Bt=!!_e.morphAttributes.color;let Ot=Di;me.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ot=I.toneMapping);const Tt=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,$t=Tt!==void 0?Tt.length:0,st=E.get(me),Tn=O.state.lights;if(ee===!0&&(oe===!0||N!==se)){const Zt=N===se&&me.id===ae;De.setState(me,N,Zt)}let Et=!1;me.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Tn.state.version||st.outputColorSpace!==We||de.isBatchedMesh&&st.batching===!1||!de.isBatchedMesh&&st.batching===!0||de.isBatchedMesh&&st.batchingColor===!0&&de.colorTexture===null||de.isBatchedMesh&&st.batchingColor===!1&&de.colorTexture!==null||de.isInstancedMesh&&st.instancing===!1||!de.isInstancedMesh&&st.instancing===!0||de.isSkinnedMesh&&st.skinning===!1||!de.isSkinnedMesh&&st.skinning===!0||de.isInstancedMesh&&st.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&st.instancingColor===!1&&de.instanceColor!==null||de.isInstancedMesh&&st.instancingMorph===!0&&de.morphTexture===null||de.isInstancedMesh&&st.instancingMorph===!1&&de.morphTexture!==null||st.envMap!==lt||me.fog===!0&&st.fog!==Xe||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==De.numPlanes||st.numIntersection!==De.numIntersection)||st.vertexAlphas!==ct||st.vertexTangents!==xt||st.morphTargets!==ut||st.morphNormals!==Nt||st.morphColors!==Bt||st.toneMapping!==Ot||st.morphTargetsCount!==$t)&&(Et=!0):(Et=!0,st.__version=me.version);let Rn=st.currentProgram;Et===!0&&(Rn=kr(me,ie,de));let Pn=!1,kn=!1,ar=!1;const Dt=Rn.getUniforms(),gt=st.uniforms;if(Ve.useProgram(Rn.program)&&(Pn=!0,kn=!0,ar=!0),me.id!==ae&&(ae=me.id,kn=!0),Pn||se!==N){Ve.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Dt.setValue(R,"projectionMatrix",N.projectionMatrix),Dt.setValue(R,"viewMatrix",N.matrixWorldInverse);const Qn=Dt.map.cameraPosition;Qn!==void 0&&Qn.setValue(R,Te.setFromMatrixPosition(N.matrixWorld)),Ge.logarithmicDepthBuffer&&Dt.setValue(R,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&Dt.setValue(R,"isOrthographic",N.isOrthographicCamera===!0),se!==N&&(se=N,kn=!0,ar=!0)}if(st.needsLights&&(Tn.state.directionalShadowMap.length>0&&Dt.setValue(R,"directionalShadowMap",Tn.state.directionalShadowMap,Z),Tn.state.spotShadowMap.length>0&&Dt.setValue(R,"spotShadowMap",Tn.state.spotShadowMap,Z),Tn.state.pointShadowMap.length>0&&Dt.setValue(R,"pointShadowMap",Tn.state.pointShadowMap,Z)),de.isSkinnedMesh){Dt.setOptional(R,de,"bindMatrix"),Dt.setOptional(R,de,"bindMatrixInverse");const Zt=de.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Dt.setValue(R,"boneTexture",Zt.boneTexture,Z))}de.isBatchedMesh&&(Dt.setOptional(R,de,"batchingTexture"),Dt.setValue(R,"batchingTexture",de._matricesTexture,Z),Dt.setOptional(R,de,"batchingIdTexture"),Dt.setValue(R,"batchingIdTexture",de._indirectTexture,Z),Dt.setOptional(R,de,"batchingColorTexture"),de._colorsTexture!==null&&Dt.setValue(R,"batchingColorTexture",de._colorsTexture,Z));const ai=_e.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Ye.update(de,_e,Rn),(kn||st.receiveShadow!==de.receiveShadow)&&(st.receiveShadow=de.receiveShadow,Dt.setValue(R,"receiveShadow",de.receiveShadow)),(me.isMeshStandardMaterial||me.isMeshLambertMaterial||me.isMeshPhongMaterial)&&me.envMap===null&&ie.environment!==null&&(gt.envMapIntensity.value=ie.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=NT()),kn&&(Dt.setValue(R,"toneMappingExposure",I.toneMappingExposure),st.needsLights&&Aa(gt,ar),Xe&&me.fog===!0&&He.refreshFogUniforms(gt,Xe),He.refreshMaterialUniforms(gt,me,ke,ne,O.state.transmissionRenderTarget[N.id]),vu.upload(R,mo(st),gt,Z)),me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(vu.upload(R,mo(st),gt,Z),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&Dt.setValue(R,"center",de.center),Dt.setValue(R,"modelViewMatrix",de.modelViewMatrix),Dt.setValue(R,"normalMatrix",de.normalMatrix),Dt.setValue(R,"modelMatrix",de.matrixWorld),me.isShaderMaterial||me.isRawShaderMaterial){const Zt=me.uniformsGroups;for(let Qn=0,Bi=Zt.length;Qn<Bi;Qn++){const go=Zt[Qn];je.update(go,Rn),je.bind(go,Rn)}}return Rn}function Aa(N,ie){N.ambientLightColor.needsUpdate=ie,N.lightProbe.needsUpdate=ie,N.directionalLights.needsUpdate=ie,N.directionalLightShadows.needsUpdate=ie,N.pointLights.needsUpdate=ie,N.pointLightShadows.needsUpdate=ie,N.spotLights.needsUpdate=ie,N.spotLightShadows.needsUpdate=ie,N.rectAreaLights.needsUpdate=ie,N.hemisphereLights.needsUpdate=ie}function Ca(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(N,ie,_e){const me=E.get(N);me.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,me.__autoAllocateDepthBuffer===!1&&(me.__useRenderToTexture=!1),E.get(N.texture).__webglTexture=ie,E.get(N.depthTexture).__webglTexture=me.__autoAllocateDepthBuffer?void 0:_e,me.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,ie){const _e=E.get(N);_e.__webglFramebuffer=ie,_e.__useDefaultFramebuffer=ie===void 0};const ba=R.createFramebuffer();this.setRenderTarget=function(N,ie=0,_e=0){te=N,W=ie,j=_e;let me=null,de=!1,Xe=!1;if(N){const We=E.get(N);if(We.__useDefaultFramebuffer!==void 0){Ve.bindFramebuffer(R.FRAMEBUFFER,We.__webglFramebuffer),re.copy(N.viewport),X.copy(N.scissor),H=N.scissorTest,Ve.viewport(re),Ve.scissor(X),Ve.setScissorTest(H),ae=-1;return}else if(We.__webglFramebuffer===void 0)Z.setupRenderTarget(N);else if(We.__hasExternalTextures)Z.rebindTextures(N,E.get(N.texture).__webglTexture,E.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ct=N.depthTexture;if(We.__boundDepthTexture!==ct){if(ct!==null&&E.has(ct)&&(N.width!==ct.image.width||N.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(N)}}const $e=N.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Xe=!0);const lt=E.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[ie])?me=lt[ie][_e]:me=lt[ie],de=!0):N.samples>0&&Z.useMultisampledRTT(N)===!1?me=E.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?me=lt[_e]:me=lt,re.copy(N.viewport),X.copy(N.scissor),H=N.scissorTest}else re.copy(C).multiplyScalar(ke).floor(),X.copy(L).multiplyScalar(ke).floor(),H=q;if(_e!==0&&(me=ba),Ve.bindFramebuffer(R.FRAMEBUFFER,me)&&Ve.drawBuffers(N,me),Ve.viewport(re),Ve.scissor(X),Ve.setScissorTest(H),de){const We=E.get(N.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+ie,We.__webglTexture,_e)}else if(Xe){const We=ie;for(let $e=0;$e<N.textures.length;$e++){const lt=E.get(N.textures[$e]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+$e,lt.__webglTexture,_e,We)}}else if(N!==null&&_e!==0){const We=E.get(N.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,We.__webglTexture,_e)}ae=-1},this.readRenderTargetPixels=function(N,ie,_e,me,de,Xe,Qe,We=0){if(!(N&&N.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=E.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Qe!==void 0&&($e=$e[Qe]),$e){Ve.bindFramebuffer(R.FRAMEBUFFER,$e);try{const lt=N.textures[We],ct=lt.format,xt=lt.type;if(N.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+We),!Ge.textureFormatReadable(ct)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(xt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=N.width-me&&_e>=0&&_e<=N.height-de&&R.readPixels(ie,_e,me,de,ze.convert(ct),ze.convert(xt),Xe)}finally{const lt=te!==null?E.get(te).__webglFramebuffer:null;Ve.bindFramebuffer(R.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(N,ie,_e,me,de,Xe,Qe,We=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=E.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Qe!==void 0&&($e=$e[Qe]),$e)if(ie>=0&&ie<=N.width-me&&_e>=0&&_e<=N.height-de){Ve.bindFramebuffer(R.FRAMEBUFFER,$e);const lt=N.textures[We],ct=lt.format,xt=lt.type;if(N.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+We),!Ge.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ut),R.bufferData(R.PIXEL_PACK_BUFFER,Xe.byteLength,R.STREAM_READ),R.readPixels(ie,_e,me,de,ze.convert(ct),ze.convert(xt),0);const Nt=te!==null?E.get(te).__webglFramebuffer:null;Ve.bindFramebuffer(R.FRAMEBUFFER,Nt);const Bt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await mx(R,Bt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ut),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Xe),R.deleteBuffer(ut),R.deleteSync(Bt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,ie=null,_e=0){const me=Math.pow(2,-_e),de=Math.floor(N.image.width*me),Xe=Math.floor(N.image.height*me),Qe=ie!==null?ie.x:0,We=ie!==null?ie.y:0;Z.setTexture2D(N,0),R.copyTexSubImage2D(R.TEXTURE_2D,_e,0,0,Qe,We,de,Xe),Ve.unbindTexture()};const Nu=R.createFramebuffer(),Iu=R.createFramebuffer();this.copyTextureToTexture=function(N,ie,_e=null,me=null,de=0,Xe=0){let Qe,We,$e,lt,ct,xt,ut,Nt,Bt;const Ot=N.isCompressedTexture?N.mipmaps[Xe]:N.image;if(_e!==null)Qe=_e.max.x-_e.min.x,We=_e.max.y-_e.min.y,$e=_e.isBox3?_e.max.z-_e.min.z:1,lt=_e.min.x,ct=_e.min.y,xt=_e.isBox3?_e.min.z:0;else{const gt=Math.pow(2,-de);Qe=Math.floor(Ot.width*gt),We=Math.floor(Ot.height*gt),N.isDataArrayTexture?$e=Ot.depth:N.isData3DTexture?$e=Math.floor(Ot.depth*gt):$e=1,lt=0,ct=0,xt=0}me!==null?(ut=me.x,Nt=me.y,Bt=me.z):(ut=0,Nt=0,Bt=0);const Tt=ze.convert(ie.format),$t=ze.convert(ie.type);let st;ie.isData3DTexture?(Z.setTexture3D(ie,0),st=R.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(Z.setTexture2DArray(ie,0),st=R.TEXTURE_2D_ARRAY):(Z.setTexture2D(ie,0),st=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,ie.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,ie.unpackAlignment);const Tn=R.getParameter(R.UNPACK_ROW_LENGTH),Et=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Rn=R.getParameter(R.UNPACK_SKIP_PIXELS),Pn=R.getParameter(R.UNPACK_SKIP_ROWS),kn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ot.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ot.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,lt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ct),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xt);const ar=N.isDataArrayTexture||N.isData3DTexture,Dt=ie.isDataArrayTexture||ie.isData3DTexture;if(N.isDepthTexture){const gt=E.get(N),ai=E.get(ie),Zt=E.get(gt.__renderTarget),Qn=E.get(ai.__renderTarget);Ve.bindFramebuffer(R.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Bi=0;Bi<$e;Bi++)ar&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,E.get(N).__webglTexture,de,xt+Bi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,E.get(ie).__webglTexture,Xe,Bt+Bi)),R.blitFramebuffer(lt,ct,Qe,We,ut,Nt,Qe,We,R.DEPTH_BUFFER_BIT,R.NEAREST);Ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(de!==0||N.isRenderTargetTexture||E.has(N)){const gt=E.get(N),ai=E.get(ie);Ve.bindFramebuffer(R.READ_FRAMEBUFFER,Nu),Ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,Iu);for(let Zt=0;Zt<$e;Zt++)ar?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,gt.__webglTexture,de,xt+Zt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,gt.__webglTexture,de),Dt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ai.__webglTexture,Xe,Bt+Zt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ai.__webglTexture,Xe),de!==0?R.blitFramebuffer(lt,ct,Qe,We,ut,Nt,Qe,We,R.COLOR_BUFFER_BIT,R.NEAREST):Dt?R.copyTexSubImage3D(st,Xe,ut,Nt,Bt+Zt,lt,ct,Qe,We):R.copyTexSubImage2D(st,Xe,ut,Nt,lt,ct,Qe,We);Ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Dt?N.isDataTexture||N.isData3DTexture?R.texSubImage3D(st,Xe,ut,Nt,Bt,Qe,We,$e,Tt,$t,Ot.data):ie.isCompressedArrayTexture?R.compressedTexSubImage3D(st,Xe,ut,Nt,Bt,Qe,We,$e,Tt,Ot.data):R.texSubImage3D(st,Xe,ut,Nt,Bt,Qe,We,$e,Tt,$t,Ot):N.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Xe,ut,Nt,Qe,We,Tt,$t,Ot.data):N.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Xe,ut,Nt,Ot.width,Ot.height,Tt,Ot.data):R.texSubImage2D(R.TEXTURE_2D,Xe,ut,Nt,Qe,We,Tt,$t,Ot);R.pixelStorei(R.UNPACK_ROW_LENGTH,Tn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Et),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Rn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,kn),Xe===0&&ie.generateMipmaps&&R.generateMipmap(st),Ve.unbindTexture()},this.initRenderTarget=function(N){E.get(N).__webglFramebuffer===void 0&&Z.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Z.setTextureCube(N,0):N.isData3DTexture?Z.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Z.setTexture2DArray(N,0):Z.setTexture2D(N,0),Ve.unbindTexture()},this.resetState=function(){W=0,j=0,te=null,Ve.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const UT=qn;class Cu extends mh{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,r,o){const l=this,c=new Ny(l.manager);c.setPath(l.path),c.setRequestHeader(l.requestHeader),c.setWithCredentials(l.withCredentials),c.load(e,function(f){try{t(l.parse(f))}catch(p){o?o(p):console.error(p),l.manager.itemError(e)}},r,o)}parse(e){const t=this;function r($,G){if($.nodeType!==1)return;const C=P($);let L=!1,q=null;switch($.nodeName){case"svg":G=M($,G);break;case"style":l($);break;case"g":G=M($,G);break;case"path":G=M($,G),$.hasAttribute("d")&&(q=o($));break;case"rect":G=M($,G),q=p($);break;case"polygon":G=M($,G),q=h($);break;case"polyline":G=M($,G),q=v($);break;case"circle":G=M($,G),q=x($);break;case"ellipse":G=M($,G),q=m($);break;case"line":G=M($,G),q=S($);break;case"defs":L=!0;break;case"use":G=M($,G);const oe=($.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),Ae=$.viewportElement.getElementById(oe);Ae?r(Ae,G):console.warn("SVGLoader: 'use node' references non-existent node id: "+oe);break}q&&(G.fill!==void 0&&G.fill!=="none"&&q.color.setStyle(G.fill,UT),F(q,V),j.push(q),q.userData={node:$,style:G});const xe=$.childNodes;for(let ee=0;ee<xe.length;ee++){const oe=xe[ee];L&&oe.nodeName!=="style"&&oe.nodeName!=="defs"||r(oe,G)}C&&(ae.pop(),ae.length>0?V.copy(ae[ae.length-1]):V.identity())}function o($){const G=new ns,C=new Ne,L=new Ne,q=new Ne;let xe=!0,ee=!1;const oe=$.getAttribute("d");if(oe===""||oe==="none")return null;const Ae=oe.match(/[a-df-z][^a-df-z]*/ig);for(let Te=0,pe=Ae.length;Te<pe;Te++){const ge=Ae[Te],ye=ge.charAt(0),Ce=ge.slice(1).trim();xe===!0&&(ee=!0,xe=!1);let R;switch(ye){case"M":R=_(Ce);for(let k=0,be=R.length;k<be;k+=2)C.x=R[k+0],C.y=R[k+1],L.x=C.x,L.y=C.y,k===0?G.moveTo(C.x,C.y):G.lineTo(C.x,C.y),k===0&&q.copy(C);break;case"H":R=_(Ce);for(let k=0,be=R.length;k<be;k++)C.x=R[k],L.x=C.x,L.y=C.y,G.lineTo(C.x,C.y),k===0&&ee===!0&&q.copy(C);break;case"V":R=_(Ce);for(let k=0,be=R.length;k<be;k++)C.y=R[k],L.x=C.x,L.y=C.y,G.lineTo(C.x,C.y),k===0&&ee===!0&&q.copy(C);break;case"L":R=_(Ce);for(let k=0,be=R.length;k<be;k+=2)C.x=R[k+0],C.y=R[k+1],L.x=C.x,L.y=C.y,G.lineTo(C.x,C.y),k===0&&ee===!0&&q.copy(C);break;case"C":R=_(Ce);for(let k=0,be=R.length;k<be;k+=6)G.bezierCurveTo(R[k+0],R[k+1],R[k+2],R[k+3],R[k+4],R[k+5]),L.x=R[k+2],L.y=R[k+3],C.x=R[k+4],C.y=R[k+5],k===0&&ee===!0&&q.copy(C);break;case"S":R=_(Ce);for(let k=0,be=R.length;k<be;k+=4)G.bezierCurveTo(w(C.x,L.x),w(C.y,L.y),R[k+0],R[k+1],R[k+2],R[k+3]),L.x=R[k+0],L.y=R[k+1],C.x=R[k+2],C.y=R[k+3],k===0&&ee===!0&&q.copy(C);break;case"Q":R=_(Ce);for(let k=0,be=R.length;k<be;k+=4)G.quadraticCurveTo(R[k+0],R[k+1],R[k+2],R[k+3]),L.x=R[k+0],L.y=R[k+1],C.x=R[k+2],C.y=R[k+3],k===0&&ee===!0&&q.copy(C);break;case"T":R=_(Ce);for(let k=0,be=R.length;k<be;k+=2){const Ge=w(C.x,L.x),Ve=w(C.y,L.y);G.quadraticCurveTo(Ge,Ve,R[k+0],R[k+1]),L.x=Ge,L.y=Ve,C.x=R[k+0],C.y=R[k+1],k===0&&ee===!0&&q.copy(C)}break;case"A":R=_(Ce,[3,4],7);for(let k=0,be=R.length;k<be;k+=7){if(R[k+5]==C.x&&R[k+6]==C.y)continue;const Ge=C.clone();C.x=R[k+5],C.y=R[k+6],L.x=C.x,L.y=C.y,c(G,R[k],R[k+1],R[k+2],R[k+3],R[k+4],Ge,C),k===0&&ee===!0&&q.copy(C)}break;case"m":R=_(Ce);for(let k=0,be=R.length;k<be;k+=2)C.x+=R[k+0],C.y+=R[k+1],L.x=C.x,L.y=C.y,k===0?G.moveTo(C.x,C.y):G.lineTo(C.x,C.y),k===0&&q.copy(C);break;case"h":R=_(Ce);for(let k=0,be=R.length;k<be;k++)C.x+=R[k],L.x=C.x,L.y=C.y,G.lineTo(C.x,C.y),k===0&&ee===!0&&q.copy(C);break;case"v":R=_(Ce);for(let k=0,be=R.length;k<be;k++)C.y+=R[k],L.x=C.x,L.y=C.y,G.lineTo(C.x,C.y),k===0&&ee===!0&&q.copy(C);break;case"l":R=_(Ce);for(let k=0,be=R.length;k<be;k+=2)C.x+=R[k+0],C.y+=R[k+1],L.x=C.x,L.y=C.y,G.lineTo(C.x,C.y),k===0&&ee===!0&&q.copy(C);break;case"c":R=_(Ce);for(let k=0,be=R.length;k<be;k+=6)G.bezierCurveTo(C.x+R[k+0],C.y+R[k+1],C.x+R[k+2],C.y+R[k+3],C.x+R[k+4],C.y+R[k+5]),L.x=C.x+R[k+2],L.y=C.y+R[k+3],C.x+=R[k+4],C.y+=R[k+5],k===0&&ee===!0&&q.copy(C);break;case"s":R=_(Ce);for(let k=0,be=R.length;k<be;k+=4)G.bezierCurveTo(w(C.x,L.x),w(C.y,L.y),C.x+R[k+0],C.y+R[k+1],C.x+R[k+2],C.y+R[k+3]),L.x=C.x+R[k+0],L.y=C.y+R[k+1],C.x+=R[k+2],C.y+=R[k+3],k===0&&ee===!0&&q.copy(C);break;case"q":R=_(Ce);for(let k=0,be=R.length;k<be;k+=4)G.quadraticCurveTo(C.x+R[k+0],C.y+R[k+1],C.x+R[k+2],C.y+R[k+3]),L.x=C.x+R[k+0],L.y=C.y+R[k+1],C.x+=R[k+2],C.y+=R[k+3],k===0&&ee===!0&&q.copy(C);break;case"t":R=_(Ce);for(let k=0,be=R.length;k<be;k+=2){const Ge=w(C.x,L.x),Ve=w(C.y,L.y);G.quadraticCurveTo(Ge,Ve,C.x+R[k+0],C.y+R[k+1]),L.x=Ge,L.y=Ve,C.x=C.x+R[k+0],C.y=C.y+R[k+1],k===0&&ee===!0&&q.copy(C)}break;case"a":R=_(Ce,[3,4],7);for(let k=0,be=R.length;k<be;k+=7){if(R[k+5]==0&&R[k+6]==0)continue;const Ge=C.clone();C.x+=R[k+5],C.y+=R[k+6],L.x=C.x,L.y=C.y,c(G,R[k],R[k+1],R[k+2],R[k+3],R[k+4],Ge,C),k===0&&ee===!0&&q.copy(C)}break;case"Z":case"z":G.currentPath.autoClose=!0,G.currentPath.curves.length>0&&(C.copy(q),G.currentPath.currentPoint.copy(C),xe=!0);break;default:console.warn(ge)}ee=!1}return G}function l($){if(!(!$.sheet||!$.sheet.cssRules||!$.sheet.cssRules.length))for(let G=0;G<$.sheet.cssRules.length;G++){const C=$.sheet.cssRules[G];if(C.type!==1)continue;const L=C.selectorText.split(/,/gm).filter(Boolean).map(q=>q.trim());for(let q=0;q<L.length;q++){const xe=Object.fromEntries(Object.entries(C.style).filter(([,ee])=>ee!==""));te[L[q]]=Object.assign(te[L[q]]||{},xe)}}}function c($,G,C,L,q,xe,ee,oe){if(G==0||C==0){$.lineTo(oe.x,oe.y);return}L=L*Math.PI/180,G=Math.abs(G),C=Math.abs(C);const Ae=(ee.x-oe.x)/2,Te=(ee.y-oe.y)/2,pe=Math.cos(L)*Ae+Math.sin(L)*Te,ge=-Math.sin(L)*Ae+Math.cos(L)*Te;let ye=G*G,Ce=C*C;const R=pe*pe,k=ge*ge,be=R/ye+k/Ce;if(be>1){const Ue=Math.sqrt(be);G=Ue*G,C=Ue*C,ye=G*G,Ce=C*C}const Ge=ye*k+Ce*R,Ve=(ye*Ce-Ge)/Ge;let U=Math.sqrt(Math.max(0,Ve));q===xe&&(U=-U);const E=U*G*ge/C,Z=-U*C*pe/G,Me=Math.cos(L)*E-Math.sin(L)*Z+(ee.x+oe.x)/2,we=Math.sin(L)*E+Math.cos(L)*Z+(ee.y+oe.y)/2,Se=f(1,0,(pe-E)/G,(ge-Z)/C),Ze=f((pe-E)/G,(ge-Z)/C,(-pe-E)/G,(-ge-Z)/C)%(Math.PI*2);$.currentPath.absellipse(Me,we,G,C,Se,Se+Ze,xe===0,L)}function f($,G,C,L){const q=$*C+G*L,xe=Math.sqrt($*$+G*G)*Math.sqrt(C*C+L*L);let ee=Math.acos(Math.max(-1,Math.min(1,q/xe)));return $*L-G*C<0&&(ee=-ee),ee}function p($){const G=b($.getAttribute("x")||0),C=b($.getAttribute("y")||0),L=b($.getAttribute("rx")||$.getAttribute("ry")||0),q=b($.getAttribute("ry")||$.getAttribute("rx")||0),xe=b($.getAttribute("width")),ee=b($.getAttribute("height")),oe=1-.551915024494,Ae=new ns;return Ae.moveTo(G+L,C),Ae.lineTo(G+xe-L,C),(L!==0||q!==0)&&Ae.bezierCurveTo(G+xe-L*oe,C,G+xe,C+q*oe,G+xe,C+q),Ae.lineTo(G+xe,C+ee-q),(L!==0||q!==0)&&Ae.bezierCurveTo(G+xe,C+ee-q*oe,G+xe-L*oe,C+ee,G+xe-L,C+ee),Ae.lineTo(G+L,C+ee),(L!==0||q!==0)&&Ae.bezierCurveTo(G+L*oe,C+ee,G,C+ee-q*oe,G,C+ee-q),Ae.lineTo(G,C+q),(L!==0||q!==0)&&Ae.bezierCurveTo(G,C+q*oe,G+L*oe,C,G+L,C),Ae}function h($){function G(xe,ee,oe){const Ae=b(ee),Te=b(oe);q===0?L.moveTo(Ae,Te):L.lineTo(Ae,Te),q++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,L=new ns;let q=0;return $.getAttribute("points").replace(C,G),L.currentPath.autoClose=!0,L}function v($){function G(xe,ee,oe){const Ae=b(ee),Te=b(oe);q===0?L.moveTo(Ae,Te):L.lineTo(Ae,Te),q++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,L=new ns;let q=0;return $.getAttribute("points").replace(C,G),L.currentPath.autoClose=!1,L}function x($){const G=b($.getAttribute("cx")||0),C=b($.getAttribute("cy")||0),L=b($.getAttribute("r")||0),q=new ro;q.absarc(G,C,L,0,Math.PI*2);const xe=new ns;return xe.subPaths.push(q),xe}function m($){const G=b($.getAttribute("cx")||0),C=b($.getAttribute("cy")||0),L=b($.getAttribute("rx")||0),q=b($.getAttribute("ry")||0),xe=new ro;xe.absellipse(G,C,L,q,0,Math.PI*2);const ee=new ns;return ee.subPaths.push(xe),ee}function S($){const G=b($.getAttribute("x1")||0),C=b($.getAttribute("y1")||0),L=b($.getAttribute("x2")||0),q=b($.getAttribute("y2")||0),xe=new ns;return xe.moveTo(G,C),xe.lineTo(L,q),xe.currentPath.autoClose=!1,xe}function M($,G){G=Object.assign({},G);let C={};if($.hasAttribute("class")){const ee=$.getAttribute("class").split(/\s/).filter(Boolean).map(oe=>oe.trim());for(let oe=0;oe<ee.length;oe++)C=Object.assign(C,te["."+ee[oe]])}$.hasAttribute("id")&&(C=Object.assign(C,te["#"+$.getAttribute("id")]));function L(ee,oe,Ae){Ae===void 0&&(Ae=function(pe){return pe.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),pe}),$.hasAttribute(ee)&&(G[oe]=Ae($.getAttribute(ee))),C[oe]&&(G[oe]=Ae(C[oe])),$.style&&$.style[ee]!==""&&(G[oe]=Ae($.style[ee]))}function q(ee){return Math.max(0,Math.min(1,b(ee)))}function xe(ee){return Math.max(0,b(ee))}return L("fill","fill"),L("fill-opacity","fillOpacity",q),L("fill-rule","fillRule"),L("opacity","opacity",q),L("stroke","stroke"),L("stroke-opacity","strokeOpacity",q),L("stroke-width","strokeWidth",xe),L("stroke-linejoin","strokeLineJoin"),L("stroke-linecap","strokeLineCap"),L("stroke-miterlimit","strokeMiterLimit",xe),L("visibility","visibility"),G}function w($,G){return $-(G-$)}function _($,G,C){if(typeof $!="string")throw new TypeError("Invalid input: "+typeof $);const L={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},q=0,xe=1,ee=2,oe=3;let Ae=q,Te=!0,pe="",ge="";const ye=[];function Ce(Ge,Ve,U){const E=new SyntaxError('Unexpected character "'+Ge+'" at index '+Ve+".");throw E.partial=U,E}function R(){pe!==""&&(ge===""?ye.push(Number(pe)):ye.push(Number(pe)*Math.pow(10,Number(ge)))),pe="",ge=""}let k;const be=$.length;for(let Ge=0;Ge<be;Ge++){if(k=$[Ge],Array.isArray(G)&&G.includes(ye.length%C)&&L.FLAGS.test(k)){Ae=xe,pe=k,R();continue}if(Ae===q){if(L.WHITESPACE.test(k))continue;if(L.DIGIT.test(k)||L.SIGN.test(k)){Ae=xe,pe=k;continue}if(L.POINT.test(k)){Ae=ee,pe=k;continue}L.COMMA.test(k)&&(Te&&Ce(k,Ge,ye),Te=!0)}if(Ae===xe){if(L.DIGIT.test(k)){pe+=k;continue}if(L.POINT.test(k)){pe+=k,Ae=ee;continue}if(L.EXP.test(k)){Ae=oe;continue}L.SIGN.test(k)&&pe.length===1&&L.SIGN.test(pe[0])&&Ce(k,Ge,ye)}if(Ae===ee){if(L.DIGIT.test(k)){pe+=k;continue}if(L.EXP.test(k)){Ae=oe;continue}L.POINT.test(k)&&pe[pe.length-1]==="."&&Ce(k,Ge,ye)}if(Ae===oe){if(L.DIGIT.test(k)){ge+=k;continue}if(L.SIGN.test(k)){if(ge===""){ge+=k;continue}ge.length===1&&L.SIGN.test(ge)&&Ce(k,Ge,ye)}}L.WHITESPACE.test(k)?(R(),Ae=q,Te=!1):L.COMMA.test(k)?(R(),Ae=q,Te=!0):L.SIGN.test(k)?(R(),Ae=xe,pe=k):L.POINT.test(k)?(R(),Ae=ee,pe=k):Ce(k,Ge,ye)}return R(),ye}const y=["mm","cm","in","pt","pc","px"],D={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function b($){let G="px";if(typeof $=="string"||$ instanceof String)for(let L=0,q=y.length;L<q;L++){const xe=y[L];if($.endsWith(xe)){G=xe,$=$.substring(0,$.length-xe.length);break}}let C;return G==="px"&&t.defaultUnit!=="px"?C=D.in[t.defaultUnit]/t.defaultDPI:(C=D[G][t.defaultUnit],C<0&&(C=D[G].in*t.defaultDPI)),C*parseFloat($)}function P($){if(!($.hasAttribute("transform")||$.nodeName==="use"&&($.hasAttribute("x")||$.hasAttribute("y"))))return null;const G=O($);return ae.length>0&&G.premultiply(ae[ae.length-1]),V.copy(G),ae.push(G),G}function O($){const G=new _t,C=se;if($.nodeName==="use"&&($.hasAttribute("x")||$.hasAttribute("y"))){const L=b($.getAttribute("x")||0),q=b($.getAttribute("y")||0);G.translate(L,q)}if($.hasAttribute("transform")){const L=$.getAttribute("transform").split(")");for(let q=L.length-1;q>=0;q--){const xe=L[q].trim();if(xe==="")continue;const ee=xe.indexOf("("),oe=xe.length;if(ee>0&&ee<oe){const Ae=xe.slice(0,ee),Te=_(xe.slice(ee+1));switch(C.identity(),Ae){case"translate":if(Te.length>=1){const pe=Te[0];let ge=0;Te.length>=2&&(ge=Te[1]),C.translate(pe,ge)}break;case"rotate":if(Te.length>=1){let pe=0,ge=0,ye=0;pe=Te[0]*Math.PI/180,Te.length>=3&&(ge=Te[1],ye=Te[2]),re.makeTranslation(-ge,-ye),X.makeRotation(pe),H.multiplyMatrices(X,re),re.makeTranslation(ge,ye),C.multiplyMatrices(re,H)}break;case"scale":if(Te.length>=1){const pe=Te[0];let ge=pe;Te.length>=2&&(ge=Te[1]),C.scale(pe,ge)}break;case"skewX":Te.length===1&&C.set(1,Math.tan(Te[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Te.length===1&&C.set(1,0,0,Math.tan(Te[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Te.length===6&&C.set(Te[0],Te[2],Te[4],Te[1],Te[3],Te[5],0,0,1);break}}G.premultiply(C)}}return G}function F($,G){function C(ee){fe.set(ee.x,ee.y,1).applyMatrix3(G),ee.set(fe.x,fe.y)}function L(ee){const oe=ee.xRadius,Ae=ee.yRadius,Te=Math.cos(ee.aRotation),pe=Math.sin(ee.aRotation),ge=new K(oe*Te,oe*pe,0),ye=new K(-Ae*pe,Ae*Te,0),Ce=ge.applyMatrix3(G),R=ye.applyMatrix3(G),k=se.set(Ce.x,R.x,0,Ce.y,R.y,0,0,0,1),be=re.copy(k).invert(),U=X.copy(be).transpose().multiply(be).elements,E=W(U[0],U[1],U[4]),Z=Math.sqrt(E.rt1),Me=Math.sqrt(E.rt2);if(ee.xRadius=1/Z,ee.yRadius=1/Me,ee.aRotation=Math.atan2(E.sn,E.cs),!((ee.aEndAngle-ee.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Se=re.set(Z,0,0,0,Me,0,0,0,1),Ze=X.set(E.cs,E.sn,0,-E.sn,E.cs,0,0,0,1),Ue=Se.multiply(Ze).multiply(k),He=at=>{const{x:Pe,y:De}=new K(Math.cos(at),Math.sin(at),0).applyMatrix3(Ue);return Math.atan2(De,Pe)};ee.aStartAngle=He(ee.aStartAngle),ee.aEndAngle=He(ee.aEndAngle),B(G)&&(ee.aClockwise=!ee.aClockwise)}}function q(ee){const oe=I(G),Ae=ce(G);ee.xRadius*=oe,ee.yRadius*=Ae;const Te=oe>Number.EPSILON?Math.atan2(G.elements[1],G.elements[0]):Math.atan2(-G.elements[3],G.elements[4]);ee.aRotation+=Te,B(G)&&(ee.aStartAngle*=-1,ee.aEndAngle*=-1,ee.aClockwise=!ee.aClockwise)}const xe=$.subPaths;for(let ee=0,oe=xe.length;ee<oe;ee++){const Te=xe[ee].curves;for(let pe=0;pe<Te.length;pe++){const ge=Te[pe];ge.isLineCurve?(C(ge.v1),C(ge.v2)):ge.isCubicBezierCurve?(C(ge.v0),C(ge.v1),C(ge.v2),C(ge.v3)):ge.isQuadraticBezierCurve?(C(ge.v0),C(ge.v1),C(ge.v2)):ge.isEllipseCurve&&(le.set(ge.aX,ge.aY),C(le),ge.aX=le.x,ge.aY=le.y,T(G)?L(ge):q(ge))}}}function B($){const G=$.elements;return G[0]*G[4]-G[1]*G[3]<0}function T($){const G=$.elements,C=G[0]*G[3]+G[1]*G[4];if(C===0)return!1;const L=I($),q=ce($);return Math.abs(C/(L*q))>Number.EPSILON}function I($){const G=$.elements;return Math.sqrt(G[0]*G[0]+G[1]*G[1])}function ce($){const G=$.elements;return Math.sqrt(G[3]*G[3]+G[4]*G[4])}function W($,G,C){let L,q,xe,ee,oe;const Ae=$+C,Te=$-C,pe=Math.sqrt(Te*Te+4*G*G);return Ae>0?(L=.5*(Ae+pe),oe=1/L,q=$*oe*C-G*oe*G):Ae<0?q=.5*(Ae-pe):(L=.5*pe,q=-.5*pe),Te>0?xe=Te+pe:xe=Te-pe,Math.abs(xe)>2*Math.abs(G)?(oe=-2*G/xe,ee=1/Math.sqrt(1+oe*oe),xe=oe*ee):Math.abs(G)===0?(xe=1,ee=0):(oe=-.5*xe/G,xe=1/Math.sqrt(1+oe*oe),ee=oe*xe),Te>0&&(oe=xe,xe=-ee,ee=oe),{rt1:L,rt2:q,cs:xe,sn:ee}}const j=[],te={},ae=[],se=new _t,re=new _t,X=new _t,H=new _t,le=new Ne,fe=new K,V=new _t,ne=new DOMParser().parseFromString(e,"image/svg+xml");return r(ne.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:j,xml:ne.documentElement}}static createShapes(e){const r={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},o={loc:r.ORIGIN,t:0};function l(w,_,y,D){const b=w.x,P=_.x,O=y.x,F=D.x,B=w.y,T=_.y,I=y.y,ce=D.y,W=(F-O)*(B-I)-(ce-I)*(b-O),j=(P-b)*(B-I)-(T-B)*(b-O),te=(ce-I)*(P-b)-(F-O)*(T-B),ae=W/te,se=j/te;if(te===0&&W!==0||ae<=0||ae>=1||se<0||se>1)return null;if(W===0&&te===0){for(let re=0;re<2;re++)if(c(re===0?y:D,w,_),o.loc==r.ORIGIN){const X=re===0?y:D;return{x:X.x,y:X.y,t:o.t}}else if(o.loc==r.BETWEEN){const X=+(b+o.t*(P-b)).toPrecision(10),H=+(B+o.t*(T-B)).toPrecision(10);return{x:X,y:H,t:o.t}}return null}else{for(let H=0;H<2;H++)if(c(H===0?y:D,w,_),o.loc==r.ORIGIN){const le=H===0?y:D;return{x:le.x,y:le.y,t:o.t}}const re=+(b+ae*(P-b)).toPrecision(10),X=+(B+ae*(T-B)).toPrecision(10);return{x:re,y:X,t:ae}}}function c(w,_,y){const D=y.x-_.x,b=y.y-_.y,P=w.x-_.x,O=w.y-_.y,F=D*O-P*b;if(w.x===_.x&&w.y===_.y){o.loc=r.ORIGIN,o.t=0;return}if(w.x===y.x&&w.y===y.y){o.loc=r.DESTINATION,o.t=1;return}if(F<-Number.EPSILON){o.loc=r.LEFT;return}if(F>Number.EPSILON){o.loc=r.RIGHT;return}if(D*P<0||b*O<0){o.loc=r.BEHIND;return}if(Math.sqrt(D*D+b*b)<Math.sqrt(P*P+O*O)){o.loc=r.BEYOND;return}let B;D!==0?B=P/D:B=O/b,o.loc=r.BETWEEN,o.t=B}function f(w,_){const y=[],D=[];for(let b=1;b<w.length;b++){const P=w[b-1],O=w[b];for(let F=1;F<_.length;F++){const B=_[F-1],T=_[F],I=l(P,O,B,T);I!==null&&y.find(ce=>ce.t<=I.t+Number.EPSILON&&ce.t>=I.t-Number.EPSILON)===void 0&&(y.push(I),D.push(new Ne(I.x,I.y)))}}return D}function p(w,_,y){const D=new Ne;_.getCenter(D);const b=[];return y.forEach(P=>{P.boundingBox.containsPoint(D)&&f(w,P.points).forEach(F=>{b.push({identifier:P.identifier,isCW:P.isCW,point:F})})}),b.sort((P,O)=>P.point.x-O.point.x),b}function h(w,_,y,D,b){(b==null||b==="")&&(b="nonzero");const P=new Ne;w.boundingBox.getCenter(P);const O=[new Ne(y,P.y),new Ne(D,P.y)],F=p(O,w.boundingBox,_);F.sort((j,te)=>j.point.x-te.point.x);const B=[],T=[];F.forEach(j=>{j.identifier===w.identifier?B.push(j):T.push(j)});const I=B[0].point.x,ce=[];let W=0;for(;W<T.length&&T[W].point.x<I;)ce.length>0&&ce[ce.length-1]===T[W].identifier?ce.pop():ce.push(T[W].identifier),W++;if(ce.push(w.identifier),b==="evenodd"){const j=ce.length%2===0,te=ce[ce.length-2];return{identifier:w.identifier,isHole:j,for:te}}else if(b==="nonzero"){let j=!0,te=null,ae=null;for(let se=0;se<ce.length;se++){const re=ce[se];j?(ae=_[re].isCW,j=!1,te=re):ae!==_[re].isCW&&(ae=_[re].isCW,j=!0)}return{identifier:w.identifier,isHole:j,for:te}}else console.warn('fill-rule: "'+b+'" is currently not implemented.')}let v=999999999,x=-999999999,m=e.subPaths.map(w=>{const _=w.getPoints();let y=-999999999,D=999999999,b=-999999999,P=999999999;for(let O=0;O<_.length;O++){const F=_[O];F.y>y&&(y=F.y),F.y<D&&(D=F.y),F.x>b&&(b=F.x),F.x<P&&(P=F.x)}return x<=b&&(x=b+1),v>=P&&(v=P-1),{curves:w.curves,points:_,isCW:fs.isClockWise(_),identifier:-1,boundingBox:new zy(new Ne(P,D),new Ne(b,y))}});m=m.filter(w=>w.points.length>1);for(let w=0;w<m.length;w++)m[w].identifier=w;const S=m.map(w=>h(w,m,v,x,e.userData?e.userData.style.fillRule:void 0)),M=[];return m.forEach(w=>{if(!S[w.identifier].isHole){const y=new so;y.curves=w.curves,S.filter(b=>b.isHole&&b.for===w.identifier).forEach(b=>{const P=m[b.identifier],O=new ro;O.curves=P.curves,y.holes.push(O)}),M.push(y)}}),M}static getStrokeStyle(e,t,r,o,l){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",r=r!==void 0?r:"miter",o=o!==void 0?o:"butt",l=l!==void 0?l:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:r,strokeLineCap:o,strokeMiterLimit:l}}static pointsToStroke(e,t,r,o){const l=[],c=[],f=[];if(Cu.pointsToStrokeWithBuffers(e,t,r,o,l,c,f)===0)return null;const p=new tn;return p.setAttribute("position",new Jt(l,3)),p.setAttribute("normal",new Jt(c,3)),p.setAttribute("uv",new Jt(f,2)),p}static pointsToStrokeWithBuffers(e,t,r,o,l,c,f,p){const h=new Ne,v=new Ne,x=new Ne,m=new Ne,S=new Ne,M=new Ne,w=new Ne,_=new Ne,y=new Ne,D=new Ne,b=new Ne,P=new Ne,O=new Ne,F=new Ne,B=new Ne,T=new Ne,I=new Ne;r=r!==void 0?r:12,o=o!==void 0?o:.001,p=p!==void 0?p:0,e=Te(e);const ce=e.length;if(ce<2)return 0;const W=e[0].equals(e[ce-1]);let j,te=e[0],ae;const se=t.strokeWidth/2,re=1/(ce-1);let X=0,H,le,fe,V,ne=!1,ke=0,$=p*3,G=p*2;C(e[0],e[1],h).multiplyScalar(se),_.copy(e[0]).sub(h),y.copy(e[0]).add(h),D.copy(_),b.copy(y);for(let pe=1;pe<ce;pe++){j=e[pe],pe===ce-1?W?ae=e[1]:ae=void 0:ae=e[pe+1];const ge=h;if(C(te,j,ge),x.copy(ge).multiplyScalar(se),P.copy(j).sub(x),O.copy(j).add(x),H=X+re,le=!1,ae!==void 0){C(j,ae,v),x.copy(v).multiplyScalar(se),F.copy(j).sub(x),B.copy(j).add(x),fe=!0,x.subVectors(ae,te),ge.dot(x)<0&&(fe=!1),pe===1&&(ne=fe),x.subVectors(ae,j),x.normalize();const ye=Math.abs(ge.dot(x));if(ye>Number.EPSILON){const Ce=se/ye;x.multiplyScalar(-Ce),m.subVectors(j,te),S.copy(m).setLength(Ce).add(x),T.copy(S).negate();const R=S.length(),k=m.length();m.divideScalar(k),M.subVectors(ae,j);const be=M.length();switch(M.divideScalar(be),m.dot(T)<k&&M.dot(T)<be&&(le=!0),I.copy(S).add(j),T.add(j),V=!1,le?fe?(B.copy(T),O.copy(T)):(F.copy(T),P.copy(T)):xe(),t.strokeLineJoin){case"bevel":ee(fe,le,H);break;case"round":oe(fe,le),fe?q(j,P,F,H,0):q(j,B,O,H,1);break;case"miter":case"miter-clip":default:const Ge=se*t.strokeMiterLimit/R;if(Ge<1)if(t.strokeLineJoin!=="miter-clip"){ee(fe,le,H);break}else oe(fe,le),fe?(M.subVectors(I,P).multiplyScalar(Ge).add(P),w.subVectors(I,F).multiplyScalar(Ge).add(F),L(P,H,0),L(M,H,0),L(j,H,.5),L(j,H,.5),L(M,H,0),L(w,H,0),L(j,H,.5),L(w,H,0),L(F,H,0)):(M.subVectors(I,O).multiplyScalar(Ge).add(O),w.subVectors(I,B).multiplyScalar(Ge).add(B),L(O,H,1),L(M,H,1),L(j,H,.5),L(j,H,.5),L(M,H,1),L(w,H,1),L(j,H,.5),L(w,H,1),L(B,H,1));else le?(fe?(L(y,X,1),L(_,X,0),L(I,H,0),L(y,X,1),L(I,H,0),L(T,H,1)):(L(y,X,1),L(_,X,0),L(I,H,1),L(_,X,0),L(T,H,0),L(I,H,1)),fe?F.copy(I):B.copy(I)):fe?(L(P,H,0),L(I,H,0),L(j,H,.5),L(j,H,.5),L(I,H,0),L(F,H,0)):(L(O,H,1),L(I,H,1),L(j,H,.5),L(j,H,.5),L(I,H,1),L(B,H,1)),V=!0;break}}else xe()}else xe();!W&&pe===ce-1&&Ae(e[0],D,b,fe,!0,X),X=H,te=j,_.copy(F),y.copy(B)}if(!W)Ae(j,P,O,fe,!1,H);else if(le&&l){let pe=I,ge=T;ne!==fe&&(pe=T,ge=I),fe?(V||ne)&&(ge.toArray(l,0),ge.toArray(l,9),V&&pe.toArray(l,3)):(V||!ne)&&(ge.toArray(l,3),ge.toArray(l,9),V&&pe.toArray(l,0))}return ke;function C(pe,ge,ye){return ye.subVectors(ge,pe),ye.set(-ye.y,ye.x).normalize()}function L(pe,ge,ye){l&&(l[$]=pe.x,l[$+1]=pe.y,l[$+2]=0,c&&(c[$]=0,c[$+1]=0,c[$+2]=1),$+=3,f&&(f[G]=ge,f[G+1]=ye,G+=2)),ke+=3}function q(pe,ge,ye,Ce,R){h.copy(ge).sub(pe).normalize(),v.copy(ye).sub(pe).normalize();let k=Math.PI;const be=h.dot(v);Math.abs(be)<1&&(k=Math.abs(Math.acos(be))),k/=r,x.copy(ge);for(let Ge=0,Ve=r-1;Ge<Ve;Ge++)m.copy(x).rotateAround(pe,k),L(x,Ce,R),L(m,Ce,R),L(pe,Ce,.5),x.copy(m);L(m,Ce,R),L(ye,Ce,R),L(pe,Ce,.5)}function xe(){L(y,X,1),L(_,X,0),L(P,H,0),L(y,X,1),L(P,H,0),L(O,H,1)}function ee(pe,ge,ye){ge?pe?(L(y,X,1),L(_,X,0),L(P,H,0),L(y,X,1),L(P,H,0),L(T,H,1),L(P,ye,0),L(F,ye,0),L(T,ye,.5)):(L(y,X,1),L(_,X,0),L(O,H,1),L(_,X,0),L(T,H,0),L(O,H,1),L(O,ye,1),L(T,ye,0),L(B,ye,1)):pe?(L(P,ye,0),L(F,ye,0),L(j,ye,.5)):(L(O,ye,1),L(B,ye,0),L(j,ye,.5))}function oe(pe,ge){ge&&(pe?(L(y,X,1),L(_,X,0),L(P,H,0),L(y,X,1),L(P,H,0),L(T,H,1),L(P,X,0),L(j,H,.5),L(T,H,1),L(j,H,.5),L(F,X,0),L(T,H,1)):(L(y,X,1),L(_,X,0),L(O,H,1),L(_,X,0),L(T,H,0),L(O,H,1),L(O,X,1),L(T,H,0),L(j,H,.5),L(j,H,.5),L(T,H,0),L(B,X,1)))}function Ae(pe,ge,ye,Ce,R,k){switch(t.strokeLineCap){case"round":R?q(pe,ye,ge,k,.5):q(pe,ge,ye,k,.5);break;case"square":if(R)h.subVectors(ge,pe),v.set(h.y,-h.x),x.addVectors(h,v).add(pe),m.subVectors(v,h).add(pe),Ce?(x.toArray(l,3),m.toArray(l,0),m.toArray(l,9)):(x.toArray(l,3),f[7]===1?m.toArray(l,9):x.toArray(l,9),m.toArray(l,0));else{h.subVectors(ye,pe),v.set(h.y,-h.x),x.addVectors(h,v).add(pe),m.subVectors(v,h).add(pe);const be=l.length;Ce?(x.toArray(l,be-3),m.toArray(l,be-6),m.toArray(l,be-12)):(m.toArray(l,be-6),x.toArray(l,be-3),m.toArray(l,be-12))}break}}function Te(pe){let ge=!1;for(let Ce=1,R=pe.length-1;Ce<R;Ce++)if(pe[Ce].distanceTo(pe[Ce+1])<o){ge=!0;break}if(!ge)return pe;const ye=[];ye.push(pe[0]);for(let Ce=1,R=pe.length-1;Ce<R;Ce++)pe[Ce].distanceTo(pe[Ce+1])>=o&&ye.push(pe[Ce]);return ye.push(pe[pe.length-1]),ye}}}const FT={p2e958400:"M58.5518 0.5C59.9844 0.500014 60.7746 0.580341 61.4824 0.902344C62.201 1.22931 62.8847 1.82739 64.0371 3.00781C65.8589 4.87409 67.5848 5.91872 69.498 6.22461C71.6416 6.56745 73.4225 8.06052 75.4961 11.5703C75.4894 11.6237 75.4707 11.7105 75.4277 11.835C75.339 12.0917 75.1773 12.4407 74.9453 12.8604C74.4837 13.6955 73.7779 14.7563 72.9404 15.835C72.08 16.9431 71.3294 18.0483 70.8125 18.9404C70.555 19.3849 70.3481 19.7881 70.2158 20.1191C70.15 20.2838 70.0967 20.4451 70.0674 20.5928C70.0417 20.7219 70.017 20.9218 70.0908 21.1143C70.1608 21.2968 70.3232 21.9285 70.5322 22.8486C70.7368 23.7492 70.9766 24.8827 71.2021 26.0293C71.5864 27.9819 71.7462 29.0692 71.6035 30.4131C71.4581 31.7821 70.9974 33.4322 70.0771 36.4961C69.2654 39.1983 68.6759 40.8929 68.0342 42.1533C67.4024 43.394 66.7145 44.2244 65.6807 45.1816C64.4986 46.2756 63.769 47.0117 63.375 47.9609C62.9846 48.9018 62.9443 50.0055 62.9443 51.7568C62.9443 52.9647 62.5501 55.4254 61.7383 59.1699C60.9306 62.8954 59.7206 67.8457 58.1104 74.0029C52.5434 95.293 50.0008 101.026 43.1885 108.061C41.5369 109.766 40.409 111.096 39.4424 112.668C38.4782 114.236 37.6855 116.025 36.6816 118.633C35.56 121.548 34.9365 123.304 34.6016 125.208C34.2674 127.108 34.2236 129.139 34.2236 132.599C34.2236 134.475 34.2236 135.864 34.1709 136.939C34.1181 138.018 34.0135 138.74 33.8232 139.293C33.4571 140.357 32.7555 140.883 31.0117 142.136C30.0798 142.805 29.1614 143.412 28.4346 143.85C28.0703 144.069 27.7601 144.241 27.5244 144.357C27.4064 144.416 27.3145 144.456 27.248 144.48C27.227 144.488 27.2108 144.493 27.2002 144.496C27.1252 144.485 26.9432 144.406 26.6816 144.056C26.4171 143.702 26.1488 143.174 25.9102 142.52C25.4338 141.214 25.1111 139.503 25.1348 137.927C25.1742 135.315 24.2427 132.2 22.8516 129.495C21.4656 126.801 19.5699 124.412 17.5986 123.337H17.5996C16.11 122.524 13.2671 120.305 11.3086 118.41C8.53173 115.722 7.86845 114.583 7.86133 113.217C7.85829 112.584 7.65343 111.406 7.34863 110.056C7.03972 108.687 6.61588 107.09 6.15039 105.591C4.87593 101.488 3.89765 99.6022 2.125 98.1221C0.996663 97.1799 0.626282 96.8429 0.526367 96.1182C0.471252 95.7183 0.500848 95.18 0.625977 94.3506C0.750414 93.5258 0.961255 92.4581 1.24805 91.0127C1.88311 87.8131 2.40135 82.697 2.40137 79.6182C2.40103 75.9259 2.74541 73.1801 4.03809 69.7129C5.33988 66.2214 7.60633 61.9894 11.4814 55.334C14.9958 49.2993 19.4817 41.2794 21.4521 37.5078C23.503 33.5828 26.3861 29.2862 28.2393 27.3633C30.22 25.3078 32.8824 21.3036 34.7051 17.665C36.1465 14.7875 36.9553 13.2743 37.8105 12.2539C38.6421 11.2618 39.5298 10.7224 41.2188 9.85352C43.1973 8.83671 46.2752 7.65893 48.0303 7.24316V7.24219C49.4043 6.9162 50.3874 6.57563 51.248 5.96777C52.1048 5.36261 52.8013 4.52051 53.6592 3.27344L53.6602 3.27246C54.6504 1.83251 55.1449 1.19822 55.7236 0.87207C56.2889 0.55354 56.9888 0.5 58.5518 0.5Z"};function OT({globeVisible:s=!0}){const e=On.useRef(null),t=On.useRef(s);return On.useEffect(()=>{t.current=s},[s]),On.useEffect(()=>{if(!e.current)return;const r=new Lx,o=new Yn(75,window.innerWidth/window.innerHeight,.1,1e3);o.position.z=3;const l=new IT({antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(window.devicePixelRatio),e.current.appendChild(l.domElement);const c=new Ir,f=18,p=1.2;for(let oe=0;oe<=f;oe++){const Ae=oe/f*Math.PI,Te=p*Math.cos(Ae),pe=p*Math.sin(Ae);if(pe>.01){const ge=new dh(pe,64),ye=new Wx(ge),Ce=new Wf(ye,new oa({color:54527,transparent:!0,opacity:.8}));Ce.position.y=Te,Ce.rotation.x=Math.PI/2,c.add(Ce)}}r.add(c);const h=1.52,v=128,x=16777215,m=(oe,Ae,Te,pe)=>{const ge=[];for(let k=0;k<=v;k++){const be=k/v*Math.PI*2;ge.push(new K(Math.cos(be)*h,Math.sin(be)*h,0))}const ye=new tn().setFromPoints(ge),Ce=new oa({color:x,transparent:!0,opacity:pe}),R=new g0(ye,Ce);return R.rotation.set(oe,Ae,Te),R},S=new Ir;S.add(m(Math.PI/2,0,0,.4)),S.add(m(0,0,0,.4)),S.add(m(0,Math.PI/2,0,.4));const M=(oe,Ae,Te,pe)=>{const ge=new Ir,ye=h-.04,Ce=h+.04;for(let R=0;R<pe;R++){const k=R/pe*Math.PI*2,be=R%(pe/4)===0,Ge=be?ye-.025:ye,Ve=be?Ce+.025:Ce,U=[new K(Math.cos(k)*Ge,Math.sin(k)*Ge,0),new K(Math.cos(k)*Ve,Math.sin(k)*Ve,0)],E=new tn().setFromPoints(U),Z=new oa({color:x,transparent:!0,opacity:be?.4:.18});ge.add(new Wf(E,Z))}return ge.rotation.set(oe,Ae,Te),ge};S.add(M(Math.PI/2,0,0,48)),S.add(M(0,0,0,48)),S.add(M(0,Math.PI/2,0,48)),r.add(S);const w=1200,_=new Float32Array(w*3),y=new Float32Array(w);for(let oe=0;oe<w;oe++){const Ae=Math.random()*Math.PI*2,Te=Math.acos(2*Math.random()-1),pe=18+Math.random()*12;_[oe*3]=pe*Math.sin(Te)*Math.cos(Ae),_[oe*3+1]=pe*Math.sin(Te)*Math.sin(Ae),_[oe*3+2]=pe*Math.cos(Te),y[oe]=Math.random()*1.8+.4}const D=new tn;D.setAttribute("position",new Zn(_,3)),D.setAttribute("size",new Zn(y,1));const b=new Ag({color:16777215,sizeAttenuation:!0,transparent:!0,opacity:.85,size:.06}),P=new Hx(D,b);r.add(P);const O=(oe,Ae,Te)=>{const ge=document.createElement("canvas");ge.width=256,ge.height=256;const ye=ge.getContext("2d"),Ce=256/2,R=256/2,k=[{x:Ce,y:R,r:256*.5},{x:Ce-256*.15,y:R+256*.1,r:256*.35},{x:Ce+256*.16,y:R-256*.12,r:256*.3},{x:Ce+256*.05,y:R+256*.16,r:256*.24},{x:Ce-256*.08,y:R-256*.18,r:256*.2}];for(const be of k){const Ge=ye.createRadialGradient(be.x,be.y,0,be.x,be.y,be.r);Ge.addColorStop(0,`rgba(${oe},${Ae},${Te},0.22)`),Ge.addColorStop(.35,`rgba(${oe},${Ae},${Te},0.08)`),Ge.addColorStop(.7,`rgba(${oe},${Ae},${Te},0.02)`),Ge.addColorStop(1,`rgba(${oe},${Ae},${Te},0)`),ye.fillStyle=Ge,ye.fillRect(0,0,256,256)}return new x0(ge)},F=[{x:-4.5,y:2.2,z:-6,scale:11,rot:.3,variant:0,driftX:8e-5,driftY:5e-5},{x:4.2,y:-1.8,z:-7,scale:12,rot:-.6,variant:1,driftX:-6e-5,driftY:7e-5},{x:-1,y:-3.5,z:-5,scale:10,rot:1.1,variant:2,driftX:7e-5,driftY:-6e-5},{x:2.5,y:3.8,z:-8,scale:13,rot:-.2,variant:0,driftX:-5e-5,driftY:-4e-5},{x:-5.5,y:-.5,z:-9,scale:14,rot:.8,variant:1,driftX:4e-5,driftY:9e-5},{x:5,y:1.2,z:-10,scale:15,rot:-1,variant:2,driftX:-9e-5,driftY:3e-5}],B=[O(88,28,135),O(30,58,138),O(6,78,112)],T=[];for(const oe of F){const Ae=new Yd({map:B[oe.variant],transparent:!0,opacity:.55,blending:cs,depthWrite:!1}),Te=new l0(Ae);Te.position.set(oe.x,oe.y,oe.z),Te.scale.set(oe.scale,oe.scale,1),Te.material.rotation=oe.rot,Te.userData={driftX:oe.driftX,driftY:oe.driftY,baseX:oe.x,baseY:oe.y},r.add(Te),T.push(Te)}let I=0;const ce=[],j=(()=>{const oe=new Cu,Ae=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 145"><path d="${FT.p2e958400}"/></svg>`,Te=oe.parse(Ae),pe=38,ge=72.5,ye=.003,Ce=new Ir,R=new oa({color:54527,transparent:!0,opacity:1}),k=[{scale:1.04,opacity:.6},{scale:1.1,opacity:.4},{scale:1.2,opacity:.22},{scale:1.35,opacity:.12},{scale:1.55,opacity:.06},{scale:1.85,opacity:.025},{scale:2.3,opacity:.01},{scale:3,opacity:.004}];for(const be of Te.paths){const Ge=Cu.createShapes(be);for(const Ve of Ge){const U=Ve.getPoints(80),E=U.map(He=>new K((He.x-pe)*ye,-(He.y-ge)*ye,0)),Z=new tn().setFromPoints(E),Me=new g0(Z,R);Ce.add(Me);const we=U.map(He=>new Ne((He.x-pe)*ye,-(He.y-ge)*ye)),Se=new so(we),Ze=new Au(Se),Ue=new yi(Ze,new Eu({color:54527,transparent:!0,opacity:.35,side:vi,depthWrite:!1,blending:ua}));Ce.add(Ue),ce.push({mesh:Ue,baseOpacity:.35});for(const He of k){const at=new Au(Se),Pe=new Eu({color:54527,transparent:!0,opacity:He.opacity,side:vi,depthWrite:!1,blending:ua}),De=new yi(at,Pe);De.scale.set(He.scale,He.scale,He.scale),De.position.z=-.001*k.indexOf(He),Ce.add(De),ce.push({mesh:De,baseOpacity:He.opacity})}(()=>{const He=document.createElement("canvas");He.width=128,He.height=128;const at=He.getContext("2d"),Pe=64,De=64,Ke=at.createRadialGradient(Pe,De,0,Pe,De,64);Ke.addColorStop(0,"rgba(0, 212, 255, 0.55)"),Ke.addColorStop(.15,"rgba(0, 212, 255, 0.30)"),Ke.addColorStop(.4,"rgba(0, 180, 255, 0.12)"),Ke.addColorStop(.7,"rgba(0, 100, 200, 0.04)"),Ke.addColorStop(1,"rgba(0,   0, 100, 0)"),at.fillStyle=Ke,at.fillRect(0,0,128,128);const et=new x0(He),Ye=new Yd({map:et,transparent:!0,opacity:.9,blending:ua,depthWrite:!1}),ht=new l0(Ye);ht.position.set(0,-7.5*.003,.001),ht.scale.set(.55,.55,1),Ce.add(ht),ce.push({mesh:ht,baseOpacity:.9})})()}}return Ce})();c.add(j);let te=!1,ae={x:0,y:0};const se=oe=>{te=!0,ae={x:oe.clientX,y:oe.clientY}},re=oe=>{if(!te)return;const Ae=oe.clientX-ae.x,Te=oe.clientY-ae.y,pe=.01,ge=new xi(Te*pe,Ae*pe,0,"XYZ"),ye=new nr().setFromEuler(ge);c.quaternion.multiplyQuaternions(ye,c.quaternion),ae={x:oe.clientX,y:oe.clientY}},X=()=>{te=!1};l.domElement.addEventListener("mousedown",se),window.addEventListener("mousemove",re),window.addEventListener("mouseup",X);let H=0,le=0;const fe=.92,V=.0012,ne=oe=>{oe.preventDefault(),H+=oe.deltaY*V,le+=oe.deltaX*V*.5};l.domElement.addEventListener("wheel",ne,{passive:!1});const ke=new Fy(16777215,1,100);ke.position.set(5,5,5),r.add(ke);const $=new Oy(4210752);r.add($);let G=0,C,L=!0,q=t.current?1:0;const xe=()=>{if(!L)return;C=requestAnimationFrame(xe);const oe=t.current?1:0;q+=(oe-q)*.04,I+=.008,b.opacity=.7+Math.sin(I)*.15;const Ae=performance.now()*.001;for(const ge of T){const{baseX:ye,baseY:Ce,driftX:R,driftY:k}=ge.userData;ge.position.x=ye+Math.sin(Ae*R*1e3+ye)*.6,ge.position.y=Ce+Math.cos(Ae*k*1e3+Ce)*.4}G+=.018;const Te=Math.sin(G),pe=.08+.92*Math.pow((Te+1)/2,1.6);for(const{mesh:ge,baseOpacity:ye}of ce)ge.material.opacity=ye*pe;if(Math.abs(H)>1e-5||Math.abs(le)>1e-5){const ge=new xi(le,H,0,"XYZ"),ye=new nr().setFromEuler(ge);c.quaternion.multiplyQuaternions(ye,c.quaternion),H*=fe,le*=fe}if(!te){const ge=-8*(Math.PI/180),ye=new K(Math.sin(ge),Math.cos(ge),0).normalize(),Ce=new nr().setFromAxisAngle(ye,.003);c.quaternion.multiplyQuaternions(Ce,c.quaternion)}c.quaternion.normalize(),c.traverse(ge=>{if(ge.material){const ye=ge.material;ye.transparent&&ye.opacity!==void 0&&(ge.__baseOpacity===void 0&&(ge.__baseOpacity=ye.opacity),ye.opacity=ge.__baseOpacity*q)}}),S.traverse(ge=>{if(ge.material){const ye=ge.material;ye.transparent&&ye.opacity!==void 0&&(ge.__baseOpacity===void 0&&(ge.__baseOpacity=ye.opacity),ye.opacity=ge.__baseOpacity*q)}}),l.render(r,o)};xe();const ee=()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ee),()=>{var oe;L=!1,cancelAnimationFrame(C),window.removeEventListener("resize",ee),l.domElement.removeEventListener("mousedown",se),window.removeEventListener("mousemove",re),window.removeEventListener("mouseup",X),l.domElement.removeEventListener("wheel",ne),(oe=e.current)==null||oe.removeChild(l.domElement),c.children.forEach(Ae=>{Ae instanceof Wf&&(Ae.geometry.dispose(),Ae.material.dispose())}),l.dispose()}},[]),Lt.jsx("div",{ref:e,className:"absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"})}function BT({isExiting:s}){const e="cubic-bezier(0.22, 1, 0.36, 1)";return Lt.jsxs("div",{className:"absolute inset-0 z-30 flex items-center justify-center overflow-hidden",style:{opacity:s?0:1,transition:`opacity 0.9s ${e}`,backdropFilter:s?"blur(0px)":"blur(18px)",background:s?"radial-gradient(circle at center, rgba(2,6,23,0) 0%, rgba(2,6,23,0.08) 45%, rgba(2,6,23,0.2) 100%)":"radial-gradient(circle at center, rgba(2,6,23,0.18) 0%, rgba(2,6,23,0.42) 34%, rgba(2,6,23,0.84) 100%)"},children:[Lt.jsx("div",{className:"absolute inset-0",style:{background:s?"radial-gradient(circle at center, rgba(34,211,238,0.06) 0%, transparent 34%, rgba(1,4,13,0.12) 76%, rgba(1,4,13,0.26) 100%)":"radial-gradient(circle at center, rgba(34,211,238,0.14) 0%, transparent 26%, rgba(1,4,13,0.44) 64%, rgba(1,4,13,0.78) 100%)"}}),Lt.jsx("div",{className:"absolute",style:{width:"min(80vw, 880px)",height:"min(80vw, 880px)",borderRadius:"50%",background:"radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(34,211,238,0.03) 28%, transparent 62%)",filter:"blur(8px)",animation:"loaderPulse 3.2s ease-in-out infinite"}}),Lt.jsx("div",{className:"absolute",style:{width:"min(42vw, 420px)",height:"min(42vw, 420px)",borderRadius:"50%",border:"1px solid rgba(125, 211, 252, 0.14)",opacity:s?.35:.8,transform:s?"scale(1.08)":"scale(0.9)",transition:`opacity 0.9s ${e}, transform 1.2s ${e}`,animation:"loaderSpin 16s linear infinite"}}),Lt.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center px-6",style:{width:"min(68vw, 520px)",animation:"loaderRise 1.2s ease-out both"},children:[Lt.jsxs("div",{className:"relative",style:{width:"min(44vw, 420px)",height:"min(44vw, 420px)",maxWidth:420,maxHeight:420},children:[Lt.jsx("div",{className:"absolute left-1/2 top-1/2 rounded-full",style:{width:14,height:14,marginLeft:-7,marginTop:-7,background:"radial-gradient(circle, rgba(224,242,254,1) 0%, rgba(34,211,238,0.9) 45%, rgba(34,211,238,0) 100%)",boxShadow:"0 0 24px rgba(34, 211, 238, 0.95)",animation:"loaderCore 2.8s ease-out forwards"}}),Lt.jsx("div",{className:"absolute inset-[12%] rounded-full",style:{border:"1px solid rgba(125, 211, 252, 0.18)",opacity:0,transform:"scale(0.8)",animation:"orbitFade 2.6s ease-out 0.4s forwards"}}),[-42,-18,18,42].map(t=>Lt.jsx("div",{className:"absolute left-1/2 rounded-full",style:{top:"50%",width:"78%",height:`${Math.max(20,78-Math.abs(t))}%`,marginLeft:"-39%",marginTop:`${t}%`,border:"1px solid rgba(186, 230, 253, 0.14)",opacity:0,transform:"scale(0.88)",animation:"gridFade 1.6s ease-out 0.9s forwards"}},t)),[0,60,120].map(t=>Lt.jsx("div",{className:"absolute inset-[6%] rounded-full",style:{borderLeft:"1px solid rgba(103, 232, 249, 0.14)",borderRight:"1px solid rgba(103, 232, 249, 0.14)",transform:`rotate(${t}deg)`,opacity:0,animation:"gridFade 1.7s ease-out 1.05s forwards"}},t)),Lt.jsx("div",{className:"absolute inset-[-10%] rounded-full",style:{borderTop:"2px solid rgba(103, 232, 249, 0.78)",borderRight:"2px solid rgba(255, 255, 255, 0.06)",borderBottom:"2px solid rgba(56, 189, 248, 0.15)",borderLeft:"2px solid rgba(14, 165, 233, 0.28)",boxShadow:"0 0 28px rgba(34, 211, 238, 0.18)",opacity:0,animation:"orbitFade 2.1s ease-out 1.1s forwards, loaderSpin 7s linear 1.1s infinite"}})]}),Lt.jsxs("div",{className:"mt-8 text-center",style:{animation:"loaderRise 1s ease-out 0.75s both"},children:[Lt.jsx("p",{className:"uppercase",style:{color:"rgba(125, 211, 252, 0.84)",letterSpacing:"0.45em",fontSize:"0.68rem",marginBottom:"0.85rem"},children:"Taiwan to World"}),Lt.jsx("p",{style:{color:"rgba(226, 232, 240, 0.88)",fontSize:"clamp(1rem, 2.5vw, 1.2rem)",letterSpacing:"0.08em"},children:"地球正在從星海中浮現"})]})]})]})}function kT(){const[s,e]=On.useState(!0),[t,r]=On.useState(!1),[o,l]=On.useState(0),[c,f]=On.useState("globe"),[p,h]=On.useState("forward"),v=On.useRef(null),x=On.useRef(!1),m=3;On.useEffect(()=>{const _=setTimeout(()=>{r(!0)},2200),y=setTimeout(()=>{e(!1)},3e3);return()=>{clearTimeout(_),clearTimeout(y)}},[]),On.useEffect(()=>{o>=m&&c!=="text"?(h("forward"),f("text")):o<m&&c!=="globe"&&(h("backward"),f("globe"))},[o,c]),On.useEffect(()=>{const _=y=>{x.current||(x.current=!0,y.deltaY>0?l(D=>Math.min(D+1,m)):l(D=>Math.max(D-1,0)),v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{x.current=!1},400))};return window.addEventListener("wheel",_,{passive:!0}),()=>{window.removeEventListener("wheel",_),v.current&&clearTimeout(v.current)}},[]);const S="cubic-bezier(0.4, 0, 0.2, 1)",M=c==="text",w=M?"translateY(0)":p==="forward"?"translateY(28px)":"translateY(-20px)";return Lt.jsxs("div",{className:"relative w-full h-screen overflow-hidden",style:{background:`
          radial-gradient(ellipse 80% 60% at 20% 10%, rgba(88, 28, 135, 0.55) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 15%, rgba(30, 58, 138, 0.6) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 75% 80%, rgba(6, 78, 112, 0.5) 0%, transparent 55%),
          radial-gradient(ellipse 70% 50% at 10% 75%, rgba(67, 20, 100, 0.45) 0%, transparent 60%),
          radial-gradient(ellipse 40% 35% at 50% 50%, rgba(14, 40, 80, 0.4) 0%, transparent 70%),
          linear-gradient(135deg, #020010 0%, #04001a 30%, #000d1a 60%, #020010 100%)
        `},children:[s&&Lt.jsx(BT,{isExiting:t}),Lt.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20",children:Array.from({length:m}).map((_,y)=>Lt.jsx("div",{className:"rounded-full",style:{width:y<o?20:6,height:6,background:y<o?"rgba(0, 212, 255, 0.85)":"rgba(255,255,255,0.2)",boxShadow:y<o?"0 0 6px rgba(0,212,255,0.6)":"none",transition:`all 0.5s ${S}`}},y))}),Lt.jsx("div",{className:"absolute inset-0",style:{pointerEvents:s?"none":c==="globe"?"auto":"none",opacity:s?t?1:.72:1,transform:s?t?"scale(1)":"scale(0.82)":"scale(1)",filter:s?t?"blur(0px) brightness(1)":"blur(10px) brightness(0.72)":"none",transition:"opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.6s cubic-bezier(0.22, 1, 0.36, 1), filter 1.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:Lt.jsx(OT,{globeVisible:c==="globe"})}),Lt.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center z-10",style:{opacity:M?1:0,transform:w,transition:`opacity 1.0s ${S}, transform 1.1s ${S}`,pointerEvents:M?"auto":"none"},children:[Lt.jsx("div",{className:"absolute rounded-full pointer-events-none",style:{width:600,height:400,background:"radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)",filter:"blur(40px)"}}),Lt.jsx("p",{className:"mb-4 uppercase",style:{color:"rgba(0,212,255,0.7)",fontSize:"0.75rem",letterSpacing:"0.3em"},children:"來自台灣，連結世界"}),Lt.jsx("h1",{className:"text-center relative",style:{fontSize:"clamp(3rem, 10vw, 7rem)",lineHeight:1.05,fontWeight:800,background:"linear-gradient(135deg, #ffffff 0%, #a5f3fc 40%, #00d4ff 70%, #7c3aed 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",filter:"drop-shadow(0 0 40px rgba(0,212,255,0.35))"},children:"世界的台灣"}),Lt.jsxs("div",{className:"flex items-center gap-4 mt-6 mb-6",children:[Lt.jsx("div",{style:{width:60,height:1,background:"linear-gradient(to right, transparent, rgba(0,212,255,0.5))"}}),Lt.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"rgba(0,212,255,0.8)",boxShadow:"0 0 10px rgba(0,212,255,0.8)"}}),Lt.jsx("div",{style:{width:60,height:1,background:"linear-gradient(to left, transparent, rgba(0,212,255,0.5))"}})]}),Lt.jsx("p",{className:"text-center max-w-md px-6",style:{color:"rgba(186, 230, 253, 0.75)",fontSize:"clamp(0.95rem, 2.5vw, 1.15rem)",lineHeight:1.8,letterSpacing:"0.04em"},children:"台灣精神，台灣 team！"}),Lt.jsx("button",{onClick:()=>l(0),className:"mt-12 px-6 py-2 rounded-full hover:scale-105",style:{border:"1px solid rgba(0,212,255,0.3)",background:"rgba(0,212,255,0.05)",color:"rgba(0,212,255,0.6)",fontSize:"0.78rem",letterSpacing:"0.15em",cursor:"pointer",transition:`all 0.3s ${S}`},children:"回首頁"})]})]})}N_.createRoot(document.getElementById("root")).render(Lt.jsx(kT,{}));
