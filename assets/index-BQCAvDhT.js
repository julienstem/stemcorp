(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const v of f)if(v.type==="childList")for(const y of v.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function c(f){const v={};return f.integrity&&(v.integrity=f.integrity),f.referrerPolicy&&(v.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?v.credentials="include":f.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function r(f){if(f.ep)return;f.ep=!0;const v=c(f);fetch(f.href,v)}})();function bd(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Or={exports:{}},Nl={};var ed;function Yv(){if(ed)return Nl;ed=1;var u=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function c(r,f,v){var y=null;if(v!==void 0&&(y=""+v),f.key!==void 0&&(y=""+f.key),"key"in f){v={};for(var T in f)T!=="key"&&(v[T]=f[T])}else v=f;return f=v.ref,{$$typeof:u,type:r,key:y,ref:f!==void 0?f:null,props:v}}return Nl.Fragment=m,Nl.jsx=c,Nl.jsxs=c,Nl}var ad;function Qv(){return ad||(ad=1,Or.exports=Yv()),Or.exports}var O=Qv(),zr={exports:{}},I={};var nd;function Vv(){if(nd)return I;nd=1;var u=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),N=Symbol.iterator;function Q(h){return h===null||typeof h!="object"?null:(h=N&&h[N]||h["@@iterator"],typeof h=="function"?h:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,V={};function H(h,z,B){this.props=h,this.context=z,this.refs=V,this.updater=B||k}H.prototype.isReactComponent={},H.prototype.setState=function(h,z){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,z,"setState")},H.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function G(){}G.prototype=H.prototype;function F(h,z,B){this.props=h,this.context=z,this.refs=V,this.updater=B||k}var _e=F.prototype=new G;_e.constructor=F,Z(_e,H.prototype),_e.isPureReactComponent=!0;var Ee=Array.isArray;function Be(){}var ee={H:null,A:null,T:null,S:null},Ue=Object.prototype.hasOwnProperty;function Te(h,z,B){var Y=B.ref;return{$$typeof:u,type:h,key:z,ref:Y!==void 0?Y:null,props:B}}function la(h,z){return Te(h.type,z,h.props)}function sa(h){return typeof h=="object"&&h!==null&&h.$$typeof===u}function Pe(h){var z={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(B){return z[B]})}var zn=/\/+/g;function Ga(h,z){return typeof h=="object"&&h!==null&&h.key!=null?Pe(""+h.key):z.toString(36)}function Ta(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Be,Be):(h.status="pending",h.then(function(z){h.status==="pending"&&(h.status="fulfilled",h.value=z)},function(z){h.status==="pending"&&(h.status="rejected",h.reason=z)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function x(h,z,B,Y,W){var ne=typeof h;(ne==="undefined"||ne==="boolean")&&(h=null);var me=!1;if(h===null)me=!0;else switch(ne){case"bigint":case"string":case"number":me=!0;break;case"object":switch(h.$$typeof){case u:case m:me=!0;break;case J:return me=h._init,x(me(h._payload),z,B,Y,W)}}if(me)return W=W(h),me=Y===""?"."+Ga(h,0):Y,Ee(W)?(B="",me!=null&&(B=me.replace(zn,"$&/")+"/"),x(W,z,B,"",function(Qt){return Qt})):W!=null&&(sa(W)&&(W=la(W,B+(W.key==null||h&&h.key===W.key?"":(""+W.key).replace(zn,"$&/")+"/")+me)),z.push(W)),1;me=0;var Fe=Y===""?".":Y+":";if(Ee(h))for(var Ce=0;Ce<h.length;Ce++)Y=h[Ce],ne=Fe+Ga(Y,Ce),me+=x(Y,z,B,ne,W);else if(Ce=Q(h),typeof Ce=="function")for(h=Ce.call(h),Ce=0;!(Y=h.next()).done;)Y=Y.value,ne=Fe+Ga(Y,Ce++),me+=x(Y,z,B,ne,W);else if(ne==="object"){if(typeof h.then=="function")return x(Ta(h),z,B,Y,W);throw z=String(h),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return me}function L(h,z,B){if(h==null)return h;var Y=[],W=0;return x(h,Y,"","",function(ne){return z.call(B,ne,W++)}),Y}function P(h){if(h._status===-1){var z=h._result;z=z(),z.then(function(B){(h._status===0||h._status===-1)&&(h._status=1,h._result=B)},function(B){(h._status===0||h._status===-1)&&(h._status=2,h._result=B)}),h._status===-1&&(h._status=0,h._result=z)}if(h._status===1)return h._result.default;throw h._result}var pe=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},ge={map:L,forEach:function(h,z,B){L(h,function(){z.apply(this,arguments)},B)},count:function(h){var z=0;return L(h,function(){z++}),z},toArray:function(h){return L(h,function(z){return z})||[]},only:function(h){if(!sa(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return I.Activity=E,I.Children=ge,I.Component=H,I.Fragment=c,I.Profiler=f,I.PureComponent=F,I.StrictMode=r,I.Suspense=g,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,I.__COMPILER_RUNTIME={__proto__:null,c:function(h){return ee.H.useMemoCache(h)}},I.cache=function(h){return function(){return h.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(h,z,B){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var Y=Z({},h.props),W=h.key;if(z!=null)for(ne in z.key!==void 0&&(W=""+z.key),z)!Ue.call(z,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&z.ref===void 0||(Y[ne]=z[ne]);var ne=arguments.length-2;if(ne===1)Y.children=B;else if(1<ne){for(var me=Array(ne),Fe=0;Fe<ne;Fe++)me[Fe]=arguments[Fe+2];Y.children=me}return Te(h.type,W,Y)},I.createContext=function(h){return h={$$typeof:y,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:v,_context:h},h},I.createElement=function(h,z,B){var Y,W={},ne=null;if(z!=null)for(Y in z.key!==void 0&&(ne=""+z.key),z)Ue.call(z,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(W[Y]=z[Y]);var me=arguments.length-2;if(me===1)W.children=B;else if(1<me){for(var Fe=Array(me),Ce=0;Ce<me;Ce++)Fe[Ce]=arguments[Ce+2];W.children=Fe}if(h&&h.defaultProps)for(Y in me=h.defaultProps,me)W[Y]===void 0&&(W[Y]=me[Y]);return Te(h,ne,W)},I.createRef=function(){return{current:null}},I.forwardRef=function(h){return{$$typeof:T,render:h}},I.isValidElement=sa,I.lazy=function(h){return{$$typeof:J,_payload:{_status:-1,_result:h},_init:P}},I.memo=function(h,z){return{$$typeof:p,type:h,compare:z===void 0?null:z}},I.startTransition=function(h){var z=ee.T,B={};ee.T=B;try{var Y=h(),W=ee.S;W!==null&&W(B,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(Be,pe)}catch(ne){pe(ne)}finally{z!==null&&B.types!==null&&(z.types=B.types),ee.T=z}},I.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},I.use=function(h){return ee.H.use(h)},I.useActionState=function(h,z,B){return ee.H.useActionState(h,z,B)},I.useCallback=function(h,z){return ee.H.useCallback(h,z)},I.useContext=function(h){return ee.H.useContext(h)},I.useDebugValue=function(){},I.useDeferredValue=function(h,z){return ee.H.useDeferredValue(h,z)},I.useEffect=function(h,z){return ee.H.useEffect(h,z)},I.useEffectEvent=function(h){return ee.H.useEffectEvent(h)},I.useId=function(){return ee.H.useId()},I.useImperativeHandle=function(h,z,B){return ee.H.useImperativeHandle(h,z,B)},I.useInsertionEffect=function(h,z){return ee.H.useInsertionEffect(h,z)},I.useLayoutEffect=function(h,z){return ee.H.useLayoutEffect(h,z)},I.useMemo=function(h,z){return ee.H.useMemo(h,z)},I.useOptimistic=function(h,z){return ee.H.useOptimistic(h,z)},I.useReducer=function(h,z,B){return ee.H.useReducer(h,z,B)},I.useRef=function(h){return ee.H.useRef(h)},I.useState=function(h){return ee.H.useState(h)},I.useSyncExternalStore=function(h,z,B){return ee.H.useSyncExternalStore(h,z,B)},I.useTransition=function(){return ee.H.useTransition()},I.version="19.2.0",I}var td;function wr(){return td||(td=1,zr.exports=Vv()),zr.exports}var C=wr();const On=bd(C);var Nr={exports:{}},Ll={},Lr={exports:{}},Br={};var ld;function wv(){return ld||(ld=1,(function(u){function m(x,L){var P=x.length;x.push(L);e:for(;0<P;){var pe=P-1>>>1,ge=x[pe];if(0<f(ge,L))x[pe]=L,x[P]=ge,P=pe;else break e}}function c(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var L=x[0],P=x.pop();if(P!==L){x[0]=P;e:for(var pe=0,ge=x.length,h=ge>>>1;pe<h;){var z=2*(pe+1)-1,B=x[z],Y=z+1,W=x[Y];if(0>f(B,P))Y<ge&&0>f(W,B)?(x[pe]=W,x[Y]=P,pe=Y):(x[pe]=B,x[z]=P,pe=z);else if(Y<ge&&0>f(W,P))x[pe]=W,x[Y]=P,pe=Y;else break e}}return L}function f(x,L){var P=x.sortIndex-L.sortIndex;return P!==0?P:x.id-L.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;u.unstable_now=function(){return v.now()}}else{var y=Date,T=y.now();u.unstable_now=function(){return y.now()-T}}var g=[],p=[],J=1,E=null,N=3,Q=!1,k=!1,Z=!1,V=!1,H=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function _e(x){for(var L=c(p);L!==null;){if(L.callback===null)r(p);else if(L.startTime<=x)r(p),L.sortIndex=L.expirationTime,m(g,L);else break;L=c(p)}}function Ee(x){if(Z=!1,_e(x),!k)if(c(g)!==null)k=!0,Be||(Be=!0,Pe());else{var L=c(p);L!==null&&Ta(Ee,L.startTime-x)}}var Be=!1,ee=-1,Ue=5,Te=-1;function la(){return V?!0:!(u.unstable_now()-Te<Ue)}function sa(){if(V=!1,Be){var x=u.unstable_now();Te=x;var L=!0;try{e:{k=!1,Z&&(Z=!1,G(ee),ee=-1),Q=!0;var P=N;try{a:{for(_e(x),E=c(g);E!==null&&!(E.expirationTime>x&&la());){var pe=E.callback;if(typeof pe=="function"){E.callback=null,N=E.priorityLevel;var ge=pe(E.expirationTime<=x);if(x=u.unstable_now(),typeof ge=="function"){E.callback=ge,_e(x),L=!0;break a}E===c(g)&&r(g),_e(x)}else r(g);E=c(g)}if(E!==null)L=!0;else{var h=c(p);h!==null&&Ta(Ee,h.startTime-x),L=!1}}break e}finally{E=null,N=P,Q=!1}L=void 0}}finally{L?Pe():Be=!1}}}var Pe;if(typeof F=="function")Pe=function(){F(sa)};else if(typeof MessageChannel<"u"){var zn=new MessageChannel,Ga=zn.port2;zn.port1.onmessage=sa,Pe=function(){Ga.postMessage(null)}}else Pe=function(){H(sa,0)};function Ta(x,L){ee=H(function(){x(u.unstable_now())},L)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(x){x.callback=null},u.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<x?Math.floor(1e3/x):5},u.unstable_getCurrentPriorityLevel=function(){return N},u.unstable_next=function(x){switch(N){case 1:case 2:case 3:var L=3;break;default:L=N}var P=N;N=L;try{return x()}finally{N=P}},u.unstable_requestPaint=function(){V=!0},u.unstable_runWithPriority=function(x,L){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var P=N;N=x;try{return L()}finally{N=P}},u.unstable_scheduleCallback=function(x,L,P){var pe=u.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?pe+P:pe):P=pe,x){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=P+ge,x={id:J++,callback:L,priorityLevel:x,startTime:P,expirationTime:ge,sortIndex:-1},P>pe?(x.sortIndex=P,m(p,x),c(g)===null&&x===c(p)&&(Z?(G(ee),ee=-1):Z=!0,Ta(Ee,P-pe))):(x.sortIndex=ge,m(g,x),k||Q||(k=!0,Be||(Be=!0,Pe()))),x},u.unstable_shouldYield=la,u.unstable_wrapCallback=function(x){var L=N;return function(){var P=N;N=L;try{return x.apply(this,arguments)}finally{N=P}}}})(Br)),Br}var sd;function kv(){return sd||(sd=1,Lr.exports=wv()),Lr.exports}var Ur={exports:{}},Ze={};var ud;function Xv(){if(ud)return Ze;ud=1;var u=wr();function m(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var J=2;J<arguments.length;J++)p+="&args[]="+encodeURIComponent(arguments[J])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(m(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function v(g,p,J){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:E==null?null:""+E,children:g,containerInfo:p,implementation:J}}var y=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ze.createPortal=function(g,p){var J=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(m(299));return v(g,p,null,J)},Ze.flushSync=function(g){var p=y.T,J=r.p;try{if(y.T=null,r.p=2,g)return g()}finally{y.T=p,r.p=J,r.d.f()}},Ze.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},Ze.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},Ze.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var J=p.as,E=T(J,p.crossOrigin),N=typeof p.integrity=="string"?p.integrity:void 0,Q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;J==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:N,fetchPriority:Q}):J==="script"&&r.d.X(g,{crossOrigin:E,integrity:N,fetchPriority:Q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ze.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var J=T(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:J,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},Ze.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var J=p.as,E=T(J,p.crossOrigin);r.d.L(g,J,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ze.preloadModule=function(g,p){if(typeof g=="string")if(p){var J=T(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:J,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},Ze.requestFormReset=function(g){r.d.r(g)},Ze.unstable_batchedUpdates=function(g,p){return g(p)},Ze.useFormState=function(g,p,J){return y.H.useFormState(g,p,J)},Ze.useFormStatus=function(){return y.H.useHostTransitionStatus()},Ze.version="19.2.0",Ze}var id;function Zv(){if(id)return Ur.exports;id=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(m){console.error(m)}}return u(),Ur.exports=Xv(),Ur.exports}var rd;function Fv(){if(rd)return Ll;rd=1;var u=kv(),m=wr(),c=Zv();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function v(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function y(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function T(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function g(e){if(v(e)!==e)throw Error(r(188))}function p(e){var a=e.alternate;if(!a){if(a=v(e),a===null)throw Error(r(188));return a!==e?null:e}for(var n=e,t=a;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(t=l.return,t!==null){n=t;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return g(l),e;if(s===t)return g(l),a;s=s.sibling}throw Error(r(188))}if(n.return!==t.return)n=l,t=s;else{for(var i=!1,o=l.child;o;){if(o===n){i=!0,n=l,t=s;break}if(o===t){i=!0,t=l,n=s;break}o=o.sibling}if(!i){for(o=s.child;o;){if(o===n){i=!0,n=s,t=l;break}if(o===t){i=!0,t=s,n=l;break}o=o.sibling}if(!i)throw Error(r(189))}}if(n.alternate!==t)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:a}function J(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=J(e),a!==null)return a;e=e.sibling}return null}var E=Object.assign,N=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),F=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),la=Symbol.for("react.memo_cache_sentinel"),sa=Symbol.iterator;function Pe(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var zn=Symbol.for("react.client.reference");function Ga(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case H:return"Profiler";case V:return"StrictMode";case Ee:return"Suspense";case Be:return"SuspenseList";case Te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case F:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case _e:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return a=e.displayName||null,a!==null?a:Ga(e.type)||"Memo";case Ue:a=e._payload,e=e._init;try{return Ga(e(a))}catch{}}return null}var Ta=Array.isArray,x=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},pe=[],ge=-1;function h(e){return{current:e}}function z(e){0>ge||(e.current=pe[ge],pe[ge]=null,ge--)}function B(e,a){ge++,pe[ge]=e.current,e.current=a}var Y=h(null),W=h(null),ne=h(null),me=h(null);function Fe(e,a){switch(B(ne,a),B(W,e),B(Y,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?qf(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=qf(a),e=Sf(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(Y),B(Y,e)}function Ce(){z(Y),z(W),z(ne)}function Qt(e){e.memoizedState!==null&&B(me,e);var a=Y.current,n=Sf(a,e.type);a!==n&&(B(W,e),B(Y,n))}function Ql(e){W.current===e&&(z(Y),z(W)),me.current===e&&(z(me),Dl._currentValue=P)}var Au,Ir;function Nn(e){if(Au===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Au=a&&a[1]||"",Ir=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Au+e+Ir}var vu=!1;function hu(e,a){if(!e||vu)return"";vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(a){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(S){var q=S}Reflect.construct(e,[],R)}else{try{R.call()}catch(S){q=S}e.call(R.prototype)}}else{try{throw Error()}catch(S){q=S}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(S){if(S&&q&&typeof S.stack=="string")return[S.stack,q.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=t.DetermineComponentFrameRoot(),i=s[0],o=s[1];if(i&&o){var d=i.split(`
`),_=o.split(`
`);for(l=t=0;t<d.length&&!d[t].includes("DetermineComponentFrameRoot");)t++;for(;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;if(t===d.length||l===_.length)for(t=d.length-1,l=_.length-1;1<=t&&0<=l&&d[t]!==_[l];)l--;for(;1<=t&&0<=l;t--,l--)if(d[t]!==_[l]){if(t!==1||l!==1)do if(t--,l--,0>l||d[t]!==_[l]){var M=`
`+d[t].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=t&&0<=l);break}}}finally{vu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Nn(n):""}function gp(e,a){switch(e.tag){case 26:case 27:case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return e.child!==a&&a!==null?Nn("Suspense Fallback"):Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 15:return hu(e.type,!1);case 11:return hu(e.type.render,!1);case 1:return hu(e.type,!0);case 31:return Nn("Activity");default:return""}}function Wr(e){try{var a="",n=null;do a+=gp(e,n),n=e,e=e.return;while(e);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var gu=Object.prototype.hasOwnProperty,bu=u.unstable_scheduleCallback,yu=u.unstable_cancelCallback,bp=u.unstable_shouldYield,yp=u.unstable_requestPaint,ua=u.unstable_now,jp=u.unstable_getCurrentPriorityLevel,$r=u.unstable_ImmediatePriority,eo=u.unstable_UserBlockingPriority,Vl=u.unstable_NormalPriority,_p=u.unstable_LowPriority,ao=u.unstable_IdlePriority,qp=u.log,Sp=u.unstable_setDisableYieldValue,Vt=null,ia=null;function rn(e){if(typeof qp=="function"&&Sp(e),ia&&typeof ia.setStrictMode=="function")try{ia.setStrictMode(Vt,e)}catch{}}var ra=Math.clz32?Math.clz32:Jp,Ep=Math.log,Tp=Math.LN2;function Jp(e){return e>>>=0,e===0?32:31-(Ep(e)/Tp|0)|0}var wl=256,kl=262144,Xl=4194304;function Ln(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zl(e,a,n){var t=e.pendingLanes;if(t===0)return 0;var l=0,s=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=t&134217727;return o!==0?(t=o&~s,t!==0?l=Ln(t):(i&=o,i!==0?l=Ln(i):n||(n=o&~e,n!==0&&(l=Ln(n))))):(o=t&~s,o!==0?l=Ln(o):i!==0?l=Ln(i):n||(n=t&~e,n!==0&&(l=Ln(n)))),l===0?0:a!==0&&a!==l&&(a&s)===0&&(s=l&-l,n=a&-a,s>=n||s===32&&(n&4194048)!==0)?a:l}function wt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Mp(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function no(){var e=Xl;return Xl<<=1,(Xl&62914560)===0&&(Xl=4194304),e}function ju(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function kt(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xp(e,a,n,t,l,s){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,d=e.expirationTimes,_=e.hiddenUpdates;for(n=i&~n;0<n;){var M=31-ra(n),R=1<<M;o[M]=0,d[M]=-1;var q=_[M];if(q!==null)for(_[M]=null,M=0;M<q.length;M++){var S=q[M];S!==null&&(S.lane&=-536870913)}n&=~R}t!==0&&to(e,t,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(i&~a))}function to(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var t=31-ra(a);e.entangledLanes|=a,e.entanglements[t]=e.entanglements[t]|1073741824|n&261930}function lo(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var t=31-ra(n),l=1<<t;l&a|e[t]&a&&(e[t]|=a),n&=~l}}function so(e,a){var n=a&-a;return n=(n&42)!==0?1:_u(n),(n&(e.suspendedLanes|a))!==0?0:n}function _u(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uo(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Zf(e.type))}function io(e,a){var n=L.p;try{return L.p=e,a()}finally{L.p=n}}var on=Math.random().toString(36).slice(2),Qe="__reactFiber$"+on,Ie="__reactProps$"+on,at="__reactContainer$"+on,Su="__reactEvents$"+on,Cp="__reactListeners$"+on,Dp="__reactHandles$"+on,ro="__reactResources$"+on,Xt="__reactMarker$"+on;function Eu(e){delete e[Qe],delete e[Ie],delete e[Su],delete e[Cp],delete e[Dp]}function nt(e){var a=e[Qe];if(a)return a;for(var n=e.parentNode;n;){if(a=n[at]||n[Qe]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=Df(e);e!==null;){if(n=e[Qe])return n;e=Df(e)}return a}e=n,n=e.parentNode}return null}function tt(e){if(e=e[Qe]||e[at]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Zt(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function lt(e){var a=e[ro];return a||(a=e[ro]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ge(e){e[Xt]=!0}var oo=new Set,co={};function Bn(e,a){st(e,a),st(e+"Capture",a)}function st(e,a){for(co[e]=a,e=0;e<a.length;e++)oo.add(a[e])}var Rp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mo={},fo={};function Op(e){return gu.call(fo,e)?!0:gu.call(mo,e)?!1:Rp.test(e)?fo[e]=!0:(mo[e]=!0,!1)}function Fl(e,a,n){if(Op(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var t=a.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function Kl(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function Ya(e,a,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+t)}}function va(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function po(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function zp(e,a,n){var t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,s=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return l.call(this)},set:function(i){n=""+i,s.call(this,i)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Tu(e){if(!e._valueTracker){var a=po(e)?"checked":"value";e._valueTracker=zp(e,a,""+e[a])}}function Ao(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),t="";return e&&(t=po(e)?e.checked?"true":"false":e.value),e=t,e!==n?(a.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Np=/[\n"\\]/g;function ha(e){return e.replace(Np,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ju(e,a,n,t,l,s,i,o){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),a!=null?i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+va(a)):e.value!==""+va(a)&&(e.value=""+va(a)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),a!=null?Mu(e,i,va(a)):n!=null?Mu(e,i,va(n)):t!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+va(o):e.removeAttribute("name")}function vo(e,a,n,t,l,s,i,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),a!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||a!=null)){Tu(e);return}n=n!=null?""+va(n):"",a=a!=null?""+va(a):n,o||a===e.value||(e.value=a),e.defaultValue=a}t=t??l,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=o?e.checked:!!t,e.defaultChecked=!!t,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Tu(e)}function Mu(e,a,n){a==="number"&&Pl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ut(e,a,n,t){if(e=e.options,a){a={};for(var l=0;l<n.length;l++)a["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=a.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&t&&(e[n].defaultSelected=!0)}else{for(n=""+va(n),a=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,t&&(e[l].defaultSelected=!0);return}a!==null||e[l].disabled||(a=e[l])}a!==null&&(a.selected=!0)}}function ho(e,a,n){if(a!=null&&(a=""+va(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+va(n):""}function go(e,a,n,t){if(a==null){if(t!=null){if(n!=null)throw Error(r(92));if(Ta(t)){if(1<t.length)throw Error(r(93));t=t[0]}n=t}n==null&&(n=""),a=n}n=va(a),e.defaultValue=n,t=e.textContent,t===n&&t!==""&&t!==null&&(e.value=t),Tu(e)}function it(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var Lp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bo(e,a,n){var t=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?t?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":t?e.setProperty(a,n):typeof n!="number"||n===0||Lp.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function yo(e,a,n){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,n!=null){for(var t in n)!n.hasOwnProperty(t)||a!=null&&a.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var l in a)t=a[l],a.hasOwnProperty(l)&&n[l]!==t&&bo(e,l,t)}else for(var s in a)a.hasOwnProperty(s)&&bo(e,s,a[s])}function xu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(e){return Up.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qa(){}var Cu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rt=null,ot=null;function jo(e){var a=tt(e);if(a&&(e=a.stateNode)){var n=e[Ie]||null;e:switch(e=a.stateNode,a.type){case"input":if(Ju(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ha(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var t=n[a];if(t!==e&&t.form===e.form){var l=t[Ie]||null;if(!l)throw Error(r(90));Ju(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<n.length;a++)t=n[a],t.form===e.form&&Ao(t)}break e;case"textarea":ho(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&ut(e,!!n.multiple,a,!1)}}}var Ru=!1;function _o(e,a,n){if(Ru)return e(a,n);Ru=!0;try{var t=e(a);return t}finally{if(Ru=!1,(rt!==null||ot!==null)&&(Us(),rt&&(a=rt,e=ot,ot=rt=null,jo(a),e)))for(a=0;a<e.length;a++)jo(e[a])}}function Ft(e,a){var n=e.stateNode;if(n===null)return null;var t=n[Ie]||null;if(t===null)return null;n=t[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,a,typeof n));return n}var Va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if(Va)try{var Kt={};Object.defineProperty(Kt,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",Kt,Kt),window.removeEventListener("test",Kt,Kt)}catch{Ou=!1}var cn=null,zu=null,Wl=null;function qo(){if(Wl)return Wl;var e,a=zu,n=a.length,t,l="value"in cn?cn.value:cn.textContent,s=l.length;for(e=0;e<n&&a[e]===l[e];e++);var i=n-e;for(t=1;t<=i&&a[n-t]===l[s-t];t++);return Wl=l.slice(e,1<t?1-t:void 0)}function $l(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function es(){return!0}function So(){return!1}function We(e){function a(n,t,l,s,i){this._reactName=n,this._targetInst=l,this.type=t,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?es:So,this.isPropagationStopped=So,this}return E(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=es)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=es)},persist:function(){},isPersistent:es}),a}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=We(Un),Pt=E({},Un,{view:0,detail:0}),Hp=We(Pt),Nu,Lu,It,ns=E({},Pt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==It&&(It&&e.type==="mousemove"?(Nu=e.screenX-It.screenX,Lu=e.screenY-It.screenY):Lu=Nu=0,It=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Lu}}),Eo=We(ns),Gp=E({},ns,{dataTransfer:0}),Yp=We(Gp),Qp=E({},Pt,{relatedTarget:0}),Bu=We(Qp),Vp=E({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),wp=We(Vp),kp=E({},Un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xp=We(kp),Zp=E({},Un,{data:0}),To=We(Zp),Fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Pp[e])?!!a[e]:!1}function Uu(){return Ip}var Wp=E({},Pt,{key:function(e){if(e.key){var a=Fp[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=We(Wp),eA=E({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=We(eA),aA=E({},Pt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),nA=We(aA),tA=E({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),lA=We(tA),sA=E({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uA=We(sA),iA=E({},Un,{newState:0,oldState:0}),rA=We(iA),oA=[9,13,27,32],Hu=Va&&"CompositionEvent"in window,Wt=null;Va&&"documentMode"in document&&(Wt=document.documentMode);var cA=Va&&"TextEvent"in window&&!Wt,Mo=Va&&(!Hu||Wt&&8<Wt&&11>=Wt),xo=" ",Co=!1;function Do(e,a){switch(e){case"keyup":return oA.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ro(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ct=!1;function mA(e,a){switch(e){case"compositionend":return Ro(a);case"keypress":return a.which!==32?null:(Co=!0,xo);case"textInput":return e=a.data,e===xo&&Co?null:e;default:return null}}function fA(e,a){if(ct)return e==="compositionend"||!Hu&&Do(e,a)?(e=qo(),Wl=zu=cn=null,ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Mo&&a.locale!=="ko"?null:a.data;default:return null}}var dA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oo(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!dA[e.type]:a==="textarea"}function zo(e,a,n,t){rt?ot?ot.push(t):ot=[t]:rt=t,a=ks(a,"onChange"),0<a.length&&(n=new as("onChange","change",null,n,t),e.push({event:n,listeners:a}))}var $t=null,el=null;function pA(e){hf(e,0)}function ts(e){var a=Zt(e);if(Ao(a))return e}function No(e,a){if(e==="change")return a}var Lo=!1;if(Va){var Gu;if(Va){var Yu="oninput"in document;if(!Yu){var Bo=document.createElement("div");Bo.setAttribute("oninput","return;"),Yu=typeof Bo.oninput=="function"}Gu=Yu}else Gu=!1;Lo=Gu&&(!document.documentMode||9<document.documentMode)}function Uo(){$t&&($t.detachEvent("onpropertychange",Ho),el=$t=null)}function Ho(e){if(e.propertyName==="value"&&ts(el)){var a=[];zo(a,el,e,Du(e)),_o(pA,a)}}function AA(e,a,n){e==="focusin"?(Uo(),$t=a,el=n,$t.attachEvent("onpropertychange",Ho)):e==="focusout"&&Uo()}function vA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ts(el)}function hA(e,a){if(e==="click")return ts(a)}function gA(e,a){if(e==="input"||e==="change")return ts(a)}function bA(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var oa=typeof Object.is=="function"?Object.is:bA;function al(e,a){if(oa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),t=Object.keys(a);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var l=n[t];if(!gu.call(a,l)||!oa(e[l],a[l]))return!1}return!0}function Go(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yo(e,a){var n=Go(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=a&&t>=a)return{node:n,offset:a-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Go(n)}}function Qo(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Qo(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Vo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Pl(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=Pl(e.document)}return a}function Qu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var yA=Va&&"documentMode"in document&&11>=document.documentMode,mt=null,Vu=null,nl=null,wu=!1;function wo(e,a,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wu||mt==null||mt!==Pl(t)||(t=mt,"selectionStart"in t&&Qu(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),nl&&al(nl,t)||(nl=t,t=ks(Vu,"onSelect"),0<t.length&&(a=new as("onSelect","select",null,a,n),e.push({event:a,listeners:t}),a.target=mt)))}function Hn(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var ft={animationend:Hn("Animation","AnimationEnd"),animationiteration:Hn("Animation","AnimationIteration"),animationstart:Hn("Animation","AnimationStart"),transitionrun:Hn("Transition","TransitionRun"),transitionstart:Hn("Transition","TransitionStart"),transitioncancel:Hn("Transition","TransitionCancel"),transitionend:Hn("Transition","TransitionEnd")},ku={},ko={};Va&&(ko=document.createElement("div").style,"AnimationEvent"in window||(delete ft.animationend.animation,delete ft.animationiteration.animation,delete ft.animationstart.animation),"TransitionEvent"in window||delete ft.transitionend.transition);function Gn(e){if(ku[e])return ku[e];if(!ft[e])return e;var a=ft[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in ko)return ku[e]=a[n];return e}var Xo=Gn("animationend"),Zo=Gn("animationiteration"),Fo=Gn("animationstart"),jA=Gn("transitionrun"),_A=Gn("transitionstart"),qA=Gn("transitioncancel"),Ko=Gn("transitionend"),Po=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function Ja(e,a){Po.set(e,a),Bn(a,[e])}var ls=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ga=[],dt=0,Zu=0;function ss(){for(var e=dt,a=Zu=dt=0;a<e;){var n=ga[a];ga[a++]=null;var t=ga[a];ga[a++]=null;var l=ga[a];ga[a++]=null;var s=ga[a];if(ga[a++]=null,t!==null&&l!==null){var i=t.pending;i===null?l.next=l:(l.next=i.next,i.next=l),t.pending=l}s!==0&&Io(n,l,s)}}function us(e,a,n,t){ga[dt++]=e,ga[dt++]=a,ga[dt++]=n,ga[dt++]=t,Zu|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function Fu(e,a,n,t){return us(e,a,n,t),is(e)}function Yn(e,a){return us(e,null,null,a),is(e)}function Io(e,a,n){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n);for(var l=!1,s=e.return;s!==null;)s.childLanes|=n,t=s.alternate,t!==null&&(t.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&a!==null&&(l=31-ra(n),e=s.hiddenUpdates,t=e[l],t===null?e[l]=[a]:t.push(a),a.lane=n|536870912),s):null}function is(e){if(50<Sl)throw Sl=0,tr=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var pt={};function SA(e,a,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ca(e,a,n,t){return new SA(e,a,n,t)}function Ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wa(e,a){var n=e.alternate;return n===null?(n=ca(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wo(e,a){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function rs(e,a,n,t,l,s){var i=0;if(t=e,typeof e=="function")Ku(e)&&(i=1);else if(typeof e=="string")i=xv(e,n,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Te:return e=ca(31,n,a,l),e.elementType=Te,e.lanes=s,e;case Z:return Qn(n.children,l,s,a);case V:i=8,l|=24;break;case H:return e=ca(12,n,a,l|2),e.elementType=H,e.lanes=s,e;case Ee:return e=ca(13,n,a,l),e.elementType=Ee,e.lanes=s,e;case Be:return e=ca(19,n,a,l),e.elementType=Be,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:i=10;break e;case G:i=9;break e;case _e:i=11;break e;case ee:i=14;break e;case Ue:i=16,t=null;break e}i=29,n=Error(r(130,e===null?"null":typeof e,"")),t=null}return a=ca(i,n,a,l),a.elementType=e,a.type=t,a.lanes=s,a}function Qn(e,a,n,t){return e=ca(7,e,t,a),e.lanes=n,e}function Pu(e,a,n){return e=ca(6,e,null,a),e.lanes=n,e}function $o(e){var a=ca(18,null,null,0);return a.stateNode=e,a}function Iu(e,a,n){return a=ca(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var ec=new WeakMap;function ba(e,a){if(typeof e=="object"&&e!==null){var n=ec.get(e);return n!==void 0?n:(a={value:e,source:a,stack:Wr(a)},ec.set(e,a),a)}return{value:e,source:a,stack:Wr(a)}}var At=[],vt=0,os=null,tl=0,ya=[],ja=0,mn=null,Ra=1,Oa="";function ka(e,a){At[vt++]=tl,At[vt++]=os,os=e,tl=a}function ac(e,a,n){ya[ja++]=Ra,ya[ja++]=Oa,ya[ja++]=mn,mn=e;var t=Ra;e=Oa;var l=32-ra(t)-1;t&=~(1<<l),n+=1;var s=32-ra(a)+l;if(30<s){var i=l-l%5;s=(t&(1<<i)-1).toString(32),t>>=i,l-=i,Ra=1<<32-ra(a)+l|n<<l|t,Oa=s+e}else Ra=1<<s|n<<l|t,Oa=e}function Wu(e){e.return!==null&&(ka(e,1),ac(e,1,0))}function $u(e){for(;e===os;)os=At[--vt],At[vt]=null,tl=At[--vt],At[vt]=null;for(;e===mn;)mn=ya[--ja],ya[ja]=null,Oa=ya[--ja],ya[ja]=null,Ra=ya[--ja],ya[ja]=null}function nc(e,a){ya[ja++]=Ra,ya[ja++]=Oa,ya[ja++]=mn,Ra=a.id,Oa=a.overflow,mn=e}var Ve=null,ye=null,ie=!1,fn=null,_a=!1,ei=Error(r(519));function dn(e){var a=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(ba(a,e)),ei}function tc(e){var a=e.stateNode,n=e.type,t=e.memoizedProps;switch(a[Qe]=e,a[Ie]=t,n){case"dialog":le("cancel",a),le("close",a);break;case"iframe":case"object":case"embed":le("load",a);break;case"video":case"audio":for(n=0;n<Tl.length;n++)le(Tl[n],a);break;case"source":le("error",a);break;case"img":case"image":case"link":le("error",a),le("load",a);break;case"details":le("toggle",a);break;case"input":le("invalid",a),vo(a,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":le("invalid",a);break;case"textarea":le("invalid",a),go(a,t.value,t.defaultValue,t.children)}n=t.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||t.suppressHydrationWarning===!0||jf(a.textContent,n)?(t.popover!=null&&(le("beforetoggle",a),le("toggle",a)),t.onScroll!=null&&le("scroll",a),t.onScrollEnd!=null&&le("scrollend",a),t.onClick!=null&&(a.onclick=Qa),a=!0):a=!1,a||dn(e,!0)}function lc(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:_a=!1;return;case 27:case 3:_a=!0;return;default:Ve=Ve.return}}function ht(e){if(e!==Ve)return!1;if(!ie)return lc(e),ie=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||gr(e.type,e.memoizedProps)),n=!n),n&&ye&&dn(e),lc(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ye=Cf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ye=Cf(e)}else a===27?(a=ye,Jn(e.type)?(e=qr,qr=null,ye=e):ye=a):ye=Ve?Sa(e.stateNode.nextSibling):null;return!0}function Vn(){ye=Ve=null,ie=!1}function ai(){var e=fn;return e!==null&&(na===null?na=e:na.push.apply(na,e),fn=null),e}function ll(e){fn===null?fn=[e]:fn.push(e)}var ni=h(null),wn=null,Xa=null;function pn(e,a,n){B(ni,a._currentValue),a._currentValue=n}function Za(e){e._currentValue=ni.current,z(ni)}function ti(e,a,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),e===n)break;e=e.return}}function li(e,a,n,t){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var i=l.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=l;for(var d=0;d<a.length;d++)if(o.context===a[d]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ti(s.return,n,e),t||(i=null);break e}s=o.next}}else if(l.tag===18){if(i=l.return,i===null)throw Error(r(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ti(i,n,e),i=null}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===e){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}}function gt(e,a,n,t){e=null;for(var l=a,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var i=l.alternate;if(i===null)throw Error(r(387));if(i=i.memoizedProps,i!==null){var o=l.type;oa(l.pendingProps.value,i.value)||(e!==null?e.push(o):e=[o])}}else if(l===me.current){if(i=l.alternate,i===null)throw Error(r(387));i.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Dl):e=[Dl])}l=l.return}e!==null&&li(a,e,n,t),a.flags|=262144}function cs(e){for(e=e.firstContext;e!==null;){if(!oa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function kn(e){wn=e,Xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function we(e){return sc(wn,e)}function ms(e,a){return wn===null&&kn(e),sc(e,a)}function sc(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},Xa===null){if(e===null)throw Error(r(308));Xa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Xa=Xa.next=a;return n}var EA=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,t){e.push(t)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},TA=u.unstable_scheduleCallback,JA=u.unstable_NormalPriority,Oe={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function si(){return{controller:new EA,data:new Map,refCount:0}}function sl(e){e.refCount--,e.refCount===0&&TA(JA,function(){e.controller.abort()})}var ul=null,ui=0,bt=0,yt=null;function MA(e,a){if(ul===null){var n=ul=[];ui=0,bt=or(),yt={status:"pending",value:void 0,then:function(t){n.push(t)}}}return ui++,a.then(uc,uc),a}function uc(){if(--ui===0&&ul!==null){yt!==null&&(yt.status="fulfilled");var e=ul;ul=null,bt=0,yt=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function xA(e,a){var n=[],t={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){t.status="fulfilled",t.value=a;for(var l=0;l<n.length;l++)(0,n[l])(a)},function(l){for(t.status="rejected",t.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),t}var ic=x.S;x.S=function(e,a){wm=ua(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&MA(e,a),ic!==null&&ic(e,a)};var Xn=h(null);function ii(){var e=Xn.current;return e!==null?e:be.pooledCache}function fs(e,a){a===null?B(Xn,Xn.current):B(Xn,a.pool)}function rc(){var e=ii();return e===null?null:{parent:Oe._currentValue,pool:e}}var jt=Error(r(460)),ri=Error(r(474)),ds=Error(r(542)),ps={then:function(){}};function oc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cc(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(Qa,Qa),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,fc(e),e;default:if(typeof a.status=="string")a.then(Qa,Qa);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(t){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=t}},function(t){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=t}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,fc(e),e}throw Fn=a,jt}}function Zn(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Fn=n,jt):n}}var Fn=null;function mc(){if(Fn===null)throw Error(r(459));var e=Fn;return Fn=null,e}function fc(e){if(e===jt||e===ds)throw Error(r(483))}var _t=null,il=0;function As(e){var a=il;return il+=1,_t===null&&(_t=[]),cc(_t,e,a)}function rl(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function vs(e,a){throw a.$$typeof===N?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function dc(e){function a(b,A){if(e){var j=b.deletions;j===null?(b.deletions=[A],b.flags|=16):j.push(A)}}function n(b,A){if(!e)return null;for(;A!==null;)a(b,A),A=A.sibling;return null}function t(b){for(var A=new Map;b!==null;)b.key!==null?A.set(b.key,b):A.set(b.index,b),b=b.sibling;return A}function l(b,A){return b=wa(b,A),b.index=0,b.sibling=null,b}function s(b,A,j){return b.index=j,e?(j=b.alternate,j!==null?(j=j.index,j<A?(b.flags|=67108866,A):j):(b.flags|=67108866,A)):(b.flags|=1048576,A)}function i(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function o(b,A,j,D){return A===null||A.tag!==6?(A=Pu(j,b.mode,D),A.return=b,A):(A=l(A,j),A.return=b,A)}function d(b,A,j,D){var X=j.type;return X===Z?M(b,A,j.props.children,D,j.key):A!==null&&(A.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ue&&Zn(X)===A.type)?(A=l(A,j.props),rl(A,j),A.return=b,A):(A=rs(j.type,j.key,j.props,null,b.mode,D),rl(A,j),A.return=b,A)}function _(b,A,j,D){return A===null||A.tag!==4||A.stateNode.containerInfo!==j.containerInfo||A.stateNode.implementation!==j.implementation?(A=Iu(j,b.mode,D),A.return=b,A):(A=l(A,j.children||[]),A.return=b,A)}function M(b,A,j,D,X){return A===null||A.tag!==7?(A=Qn(j,b.mode,D,X),A.return=b,A):(A=l(A,j),A.return=b,A)}function R(b,A,j){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Pu(""+A,b.mode,j),A.return=b,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Q:return j=rs(A.type,A.key,A.props,null,b.mode,j),rl(j,A),j.return=b,j;case k:return A=Iu(A,b.mode,j),A.return=b,A;case Ue:return A=Zn(A),R(b,A,j)}if(Ta(A)||Pe(A))return A=Qn(A,b.mode,j,null),A.return=b,A;if(typeof A.then=="function")return R(b,As(A),j);if(A.$$typeof===F)return R(b,ms(b,A),j);vs(b,A)}return null}function q(b,A,j,D){var X=A!==null?A.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return X!==null?null:o(b,A,""+j,D);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:return j.key===X?d(b,A,j,D):null;case k:return j.key===X?_(b,A,j,D):null;case Ue:return j=Zn(j),q(b,A,j,D)}if(Ta(j)||Pe(j))return X!==null?null:M(b,A,j,D,null);if(typeof j.then=="function")return q(b,A,As(j),D);if(j.$$typeof===F)return q(b,A,ms(b,j),D);vs(b,j)}return null}function S(b,A,j,D,X){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return b=b.get(j)||null,o(A,b,""+D,X);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Q:return b=b.get(D.key===null?j:D.key)||null,d(A,b,D,X);case k:return b=b.get(D.key===null?j:D.key)||null,_(A,b,D,X);case Ue:return D=Zn(D),S(b,A,j,D,X)}if(Ta(D)||Pe(D))return b=b.get(j)||null,M(A,b,D,X,null);if(typeof D.then=="function")return S(b,A,j,As(D),X);if(D.$$typeof===F)return S(b,A,j,ms(A,D),X);vs(A,D)}return null}function U(b,A,j,D){for(var X=null,re=null,w=A,ae=A=0,ue=null;w!==null&&ae<j.length;ae++){w.index>ae?(ue=w,w=null):ue=w.sibling;var oe=q(b,w,j[ae],D);if(oe===null){w===null&&(w=ue);break}e&&w&&oe.alternate===null&&a(b,w),A=s(oe,A,ae),re===null?X=oe:re.sibling=oe,re=oe,w=ue}if(ae===j.length)return n(b,w),ie&&ka(b,ae),X;if(w===null){for(;ae<j.length;ae++)w=R(b,j[ae],D),w!==null&&(A=s(w,A,ae),re===null?X=w:re.sibling=w,re=w);return ie&&ka(b,ae),X}for(w=t(w);ae<j.length;ae++)ue=S(w,b,ae,j[ae],D),ue!==null&&(e&&ue.alternate!==null&&w.delete(ue.key===null?ae:ue.key),A=s(ue,A,ae),re===null?X=ue:re.sibling=ue,re=ue);return e&&w.forEach(function(Rn){return a(b,Rn)}),ie&&ka(b,ae),X}function K(b,A,j,D){if(j==null)throw Error(r(151));for(var X=null,re=null,w=A,ae=A=0,ue=null,oe=j.next();w!==null&&!oe.done;ae++,oe=j.next()){w.index>ae?(ue=w,w=null):ue=w.sibling;var Rn=q(b,w,oe.value,D);if(Rn===null){w===null&&(w=ue);break}e&&w&&Rn.alternate===null&&a(b,w),A=s(Rn,A,ae),re===null?X=Rn:re.sibling=Rn,re=Rn,w=ue}if(oe.done)return n(b,w),ie&&ka(b,ae),X;if(w===null){for(;!oe.done;ae++,oe=j.next())oe=R(b,oe.value,D),oe!==null&&(A=s(oe,A,ae),re===null?X=oe:re.sibling=oe,re=oe);return ie&&ka(b,ae),X}for(w=t(w);!oe.done;ae++,oe=j.next())oe=S(w,b,ae,oe.value,D),oe!==null&&(e&&oe.alternate!==null&&w.delete(oe.key===null?ae:oe.key),A=s(oe,A,ae),re===null?X=oe:re.sibling=oe,re=oe);return e&&w.forEach(function(Gv){return a(b,Gv)}),ie&&ka(b,ae),X}function he(b,A,j,D){if(typeof j=="object"&&j!==null&&j.type===Z&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:e:{for(var X=j.key;A!==null;){if(A.key===X){if(X=j.type,X===Z){if(A.tag===7){n(b,A.sibling),D=l(A,j.props.children),D.return=b,b=D;break e}}else if(A.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ue&&Zn(X)===A.type){n(b,A.sibling),D=l(A,j.props),rl(D,j),D.return=b,b=D;break e}n(b,A);break}else a(b,A);A=A.sibling}j.type===Z?(D=Qn(j.props.children,b.mode,D,j.key),D.return=b,b=D):(D=rs(j.type,j.key,j.props,null,b.mode,D),rl(D,j),D.return=b,b=D)}return i(b);case k:e:{for(X=j.key;A!==null;){if(A.key===X)if(A.tag===4&&A.stateNode.containerInfo===j.containerInfo&&A.stateNode.implementation===j.implementation){n(b,A.sibling),D=l(A,j.children||[]),D.return=b,b=D;break e}else{n(b,A);break}else a(b,A);A=A.sibling}D=Iu(j,b.mode,D),D.return=b,b=D}return i(b);case Ue:return j=Zn(j),he(b,A,j,D)}if(Ta(j))return U(b,A,j,D);if(Pe(j)){if(X=Pe(j),typeof X!="function")throw Error(r(150));return j=X.call(j),K(b,A,j,D)}if(typeof j.then=="function")return he(b,A,As(j),D);if(j.$$typeof===F)return he(b,A,ms(b,j),D);vs(b,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,A!==null&&A.tag===6?(n(b,A.sibling),D=l(A,j),D.return=b,b=D):(n(b,A),D=Pu(j,b.mode,D),D.return=b,b=D),i(b)):n(b,A)}return function(b,A,j,D){try{il=0;var X=he(b,A,j,D);return _t=null,X}catch(w){if(w===jt||w===ds)throw w;var re=ca(29,w,null,b.mode);return re.lanes=D,re.return=b,re}finally{}}}var Kn=dc(!0),pc=dc(!1),An=!1;function oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ci(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hn(e,a,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(ce&2)!==0){var l=t.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),t.pending=a,a=is(e),Io(e,null,n),a}return us(e,t,a,n),is(e)}function ol(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var t=a.lanes;t&=e.pendingLanes,n|=t,a.lanes=n,lo(e,n)}}function mi(e,a){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?l=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?l=s=a:s=s.next=a}else l=s=a;n={baseState:t.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:t.shared,callbacks:t.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var fi=!1;function cl(){if(fi){var e=yt;if(e!==null)throw e}}function ml(e,a,n,t){fi=!1;var l=e.updateQueue;An=!1;var s=l.firstBaseUpdate,i=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var d=o,_=d.next;d.next=null,i===null?s=_:i.next=_,i=d;var M=e.alternate;M!==null&&(M=M.updateQueue,o=M.lastBaseUpdate,o!==i&&(o===null?M.firstBaseUpdate=_:o.next=_,M.lastBaseUpdate=d))}if(s!==null){var R=l.baseState;i=0,M=_=d=null,o=s;do{var q=o.lane&-536870913,S=q!==o.lane;if(S?(se&q)===q:(t&q)===q){q!==0&&q===bt&&(fi=!0),M!==null&&(M=M.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var U=e,K=o;q=a;var he=n;switch(K.tag){case 1:if(U=K.payload,typeof U=="function"){R=U.call(he,R,q);break e}R=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=K.payload,q=typeof U=="function"?U.call(he,R,q):U,q==null)break e;R=E({},R,q);break e;case 2:An=!0}}q=o.callback,q!==null&&(e.flags|=64,S&&(e.flags|=8192),S=l.callbacks,S===null?l.callbacks=[q]:S.push(q))}else S={lane:q,tag:o.tag,payload:o.payload,callback:o.callback,next:null},M===null?(_=M=S,d=R):M=M.next=S,i|=q;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;S=o,o=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(!0);M===null&&(d=R),l.baseState=d,l.firstBaseUpdate=_,l.lastBaseUpdate=M,s===null&&(l.shared.lanes=0),_n|=i,e.lanes=i,e.memoizedState=R}}function Ac(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function vc(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ac(n[e],a)}var qt=h(null),hs=h(0);function hc(e,a){e=nn,B(hs,e),B(qt,a),nn=e|a.baseLanes}function di(){B(hs,nn),B(qt,qt.current)}function pi(){nn=hs.current,z(qt),z(hs)}var ma=h(null),qa=null;function gn(e){var a=e.alternate;B(De,De.current&1),B(ma,e),qa===null&&(a===null||qt.current!==null||a.memoizedState!==null)&&(qa=e)}function Ai(e){B(De,De.current),B(ma,e),qa===null&&(qa=e)}function gc(e){e.tag===22?(B(De,De.current),B(ma,e),qa===null&&(qa=e)):bn()}function bn(){B(De,De.current),B(ma,ma.current)}function fa(e){z(ma),qa===e&&(qa=null),z(De)}var De=h(0);function gs(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||jr(n)||_r(n)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Fa=0,$=null,Ae=null,ze=null,bs=!1,St=!1,Pn=!1,ys=0,fl=0,Et=null,CA=0;function Je(){throw Error(r(321))}function vi(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!oa(e[n],a[n]))return!1;return!0}function hi(e,a,n,t,l,s){return Fa=s,$=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,x.H=e===null||e.memoizedState===null?am:Ri,Pn=!1,s=n(t,l),Pn=!1,St&&(s=yc(a,n,t,l)),bc(e),s}function bc(e){x.H=Al;var a=Ae!==null&&Ae.next!==null;if(Fa=0,ze=Ae=$=null,bs=!1,fl=0,Et=null,a)throw Error(r(300));e===null||Ne||(e=e.dependencies,e!==null&&cs(e)&&(Ne=!0))}function yc(e,a,n,t){$=e;var l=0;do{if(St&&(Et=null),fl=0,St=!1,25<=l)throw Error(r(301));if(l+=1,ze=Ae=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}x.H=nm,s=a(n,t)}while(St);return s}function DA(){var e=x.H,a=e.useState()[0];return a=typeof a.then=="function"?dl(a):a,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&($.flags|=1024),a}function gi(){var e=ys!==0;return ys=0,e}function bi(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function yi(e){if(bs){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}bs=!1}Fa=0,ze=Ae=$=null,St=!1,fl=ys=0,Et=null}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?$.memoizedState=ze=e:ze=ze.next=e,ze}function Re(){if(Ae===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var a=ze===null?$.memoizedState:ze.next;if(a!==null)ze=a,Ae=e;else{if(e===null)throw $.alternate===null?Error(r(467)):Error(r(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},ze===null?$.memoizedState=ze=e:ze=ze.next=e}return ze}function js(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dl(e){var a=fl;return fl+=1,Et===null&&(Et=[]),e=cc(Et,e,a),a=$,(ze===null?a.memoizedState:ze.next)===null&&(a=a.alternate,x.H=a===null||a.memoizedState===null?am:Ri),e}function _s(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dl(e);if(e.$$typeof===F)return we(e)}throw Error(r(438,String(e)))}function ji(e){var a=null,n=$.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var t=$.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(a={data:t.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=js(),$.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),t=0;t<e;t++)n[t]=la;return a.index++,n}function Ka(e,a){return typeof a=="function"?a(e):a}function qs(e){var a=Re();return _i(a,Ae,e)}function _i(e,a,n){var t=e.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=n;var l=e.baseQueue,s=t.pending;if(s!==null){if(l!==null){var i=l.next;l.next=s.next,s.next=i}a.baseQueue=l=s,t.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{a=l.next;var o=i=null,d=null,_=a,M=!1;do{var R=_.lane&-536870913;if(R!==_.lane?(se&R)===R:(Fa&R)===R){var q=_.revertLane;if(q===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),R===bt&&(M=!0);else if((Fa&q)===q){_=_.next,q===bt&&(M=!0);continue}else R={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(o=d=R,i=s):d=d.next=R,$.lanes|=q,_n|=q;R=_.action,Pn&&n(s,R),s=_.hasEagerState?_.eagerState:n(s,R)}else q={lane:R,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(o=d=q,i=s):d=d.next=q,$.lanes|=R,_n|=R;_=_.next}while(_!==null&&_!==a);if(d===null?i=s:d.next=o,!oa(s,e.memoizedState)&&(Ne=!0,M&&(n=yt,n!==null)))throw n;e.memoizedState=s,e.baseState=i,e.baseQueue=d,t.lastRenderedState=s}return l===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function qi(e){var a=Re(),n=a.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var t=n.dispatch,l=n.pending,s=a.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do s=e(s,i.action),i=i.next;while(i!==l);oa(s,a.memoizedState)||(Ne=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),n.lastRenderedState=s}return[s,t]}function jc(e,a,n){var t=$,l=Re(),s=ie;if(s){if(n===void 0)throw Error(r(407));n=n()}else n=a();var i=!oa((Ae||l).memoizedState,n);if(i&&(l.memoizedState=n,Ne=!0),l=l.queue,Ti(Sc.bind(null,t,l,e),[e]),l.getSnapshot!==a||i||ze!==null&&ze.memoizedState.tag&1){if(t.flags|=2048,Tt(9,{destroy:void 0},qc.bind(null,t,l,n,a),null),be===null)throw Error(r(349));s||(Fa&127)!==0||_c(t,a,n)}return n}function _c(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=$.updateQueue,a===null?(a=js(),$.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function qc(e,a,n,t){a.value=n,a.getSnapshot=t,Ec(a)&&Tc(e)}function Sc(e,a,n){return n(function(){Ec(a)&&Tc(e)})}function Ec(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!oa(e,n)}catch{return!0}}function Tc(e){var a=Yn(e,2);a!==null&&ta(a,e,2)}function Si(e){var a=Ke();if(typeof e=="function"){var n=e;if(e=n(),Pn){rn(!0);try{n()}finally{rn(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:e},a}function Jc(e,a,n,t){return e.baseState=n,_i(e,Ae,typeof t=="function"?t:Ka)}function RA(e,a,n,t,l){if(Ts(e))throw Error(r(485));if(e=a.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){s.listeners.push(i)}};x.T!==null?n(!0):s.isTransition=!1,t(s),n=a.pending,n===null?(s.next=a.pending=s,Mc(a,s)):(s.next=n.next,a.pending=n.next=s)}}function Mc(e,a){var n=a.action,t=a.payload,l=e.state;if(a.isTransition){var s=x.T,i={};x.T=i;try{var o=n(l,t),d=x.S;d!==null&&d(i,o),xc(e,a,o)}catch(_){Ei(e,a,_)}finally{s!==null&&i.types!==null&&(s.types=i.types),x.T=s}}else try{s=n(l,t),xc(e,a,s)}catch(_){Ei(e,a,_)}}function xc(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(t){Cc(e,a,t)},function(t){return Ei(e,a,t)}):Cc(e,a,n)}function Cc(e,a,n){a.status="fulfilled",a.value=n,Dc(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,Mc(e,n)))}function Ei(e,a,n){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do a.status="rejected",a.reason=n,Dc(a),a=a.next;while(a!==t)}e.action=null}function Dc(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Rc(e,a){return a}function Oc(e,a){if(ie){var n=be.formState;if(n!==null){e:{var t=$;if(ie){if(ye){a:{for(var l=ye,s=_a;l.nodeType!==8;){if(!s){l=null;break a}if(l=Sa(l.nextSibling),l===null){l=null;break a}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){ye=Sa(l.nextSibling),t=l.data==="F!";break e}}dn(t)}t=!1}t&&(a=n[0])}}return n=Ke(),n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rc,lastRenderedState:a},n.queue=t,n=Wc.bind(null,$,t),t.dispatch=n,t=Si(!1),s=Di.bind(null,$,!1,t.queue),t=Ke(),l={state:a,dispatch:null,action:e,pending:null},t.queue=l,n=RA.bind(null,$,l,s,n),l.dispatch=n,t.memoizedState=e,[a,n,!1]}function zc(e){var a=Re();return Nc(a,Ae,e)}function Nc(e,a,n){if(a=_i(e,a,Rc)[0],e=qs(Ka)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var t=dl(a)}catch(i){throw i===jt?ds:i}else t=a;a=Re();var l=a.queue,s=l.dispatch;return n!==a.memoizedState&&($.flags|=2048,Tt(9,{destroy:void 0},OA.bind(null,l,n),null)),[t,s,e]}function OA(e,a){e.action=a}function Lc(e){var a=Re(),n=Ae;if(n!==null)return Nc(a,n,e);Re(),a=a.memoizedState,n=Re();var t=n.queue.dispatch;return n.memoizedState=e,[a,t,!1]}function Tt(e,a,n,t){return e={tag:e,create:n,deps:t,inst:a,next:null},a=$.updateQueue,a===null&&(a=js(),$.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,a.lastEffect=e),e}function Bc(){return Re().memoizedState}function Ss(e,a,n,t){var l=Ke();$.flags|=e,l.memoizedState=Tt(1|a,{destroy:void 0},n,t===void 0?null:t)}function Es(e,a,n,t){var l=Re();t=t===void 0?null:t;var s=l.memoizedState.inst;Ae!==null&&t!==null&&vi(t,Ae.memoizedState.deps)?l.memoizedState=Tt(a,s,n,t):($.flags|=e,l.memoizedState=Tt(1|a,s,n,t))}function Uc(e,a){Ss(8390656,8,e,a)}function Ti(e,a){Es(2048,8,e,a)}function zA(e){$.flags|=4;var a=$.updateQueue;if(a===null)a=js(),$.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function Hc(e){var a=Re().memoizedState;return zA({ref:a,nextImpl:e}),function(){if((ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}function Gc(e,a){return Es(4,2,e,a)}function Yc(e,a){return Es(4,4,e,a)}function Qc(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Vc(e,a,n){n=n!=null?n.concat([e]):null,Es(4,4,Qc.bind(null,a,e),n)}function Ji(){}function wc(e,a){var n=Re();a=a===void 0?null:a;var t=n.memoizedState;return a!==null&&vi(a,t[1])?t[0]:(n.memoizedState=[e,a],e)}function kc(e,a){var n=Re();a=a===void 0?null:a;var t=n.memoizedState;if(a!==null&&vi(a,t[1]))return t[0];if(t=e(),Pn){rn(!0);try{e()}finally{rn(!1)}}return n.memoizedState=[t,a],t}function Mi(e,a,n){return n===void 0||(Fa&1073741824)!==0&&(se&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=Xm(),$.lanes|=e,_n|=e,n)}function Xc(e,a,n,t){return oa(n,a)?n:qt.current!==null?(e=Mi(e,n,t),oa(e,a)||(Ne=!0),e):(Fa&42)===0||(Fa&1073741824)!==0&&(se&261930)===0?(Ne=!0,e.memoizedState=n):(e=Xm(),$.lanes|=e,_n|=e,a)}function Zc(e,a,n,t,l){var s=L.p;L.p=s!==0&&8>s?s:8;var i=x.T,o={};x.T=o,Di(e,!1,a,n);try{var d=l(),_=x.S;if(_!==null&&_(o,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var M=xA(d,t);pl(e,a,M,Aa(e))}else pl(e,a,t,Aa(e))}catch(R){pl(e,a,{then:function(){},status:"rejected",reason:R},Aa())}finally{L.p=s,i!==null&&o.types!==null&&(i.types=o.types),x.T=i}}function NA(){}function xi(e,a,n,t){if(e.tag!==5)throw Error(r(476));var l=Fc(e).queue;Zc(e,l,a,P,n===null?NA:function(){return Kc(e),n(t)})}function Fc(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:P},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Kc(e){var a=Fc(e);a.next===null&&(a=e.alternate.memoizedState),pl(e,a.next.queue,{},Aa())}function Ci(){return we(Dl)}function Pc(){return Re().memoizedState}function Ic(){return Re().memoizedState}function LA(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=Aa();e=vn(n);var t=hn(a,e,n);t!==null&&(ta(t,a,n),ol(t,a,n)),a={cache:si()},e.payload=a;return}a=a.return}}function BA(e,a,n){var t=Aa();n={lane:t,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ts(e)?$c(a,n):(n=Fu(e,a,n,t),n!==null&&(ta(n,e,t),em(n,a,t)))}function Wc(e,a,n){var t=Aa();pl(e,a,n,t)}function pl(e,a,n,t){var l={lane:t,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ts(e))$c(a,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var i=a.lastRenderedState,o=s(i,n);if(l.hasEagerState=!0,l.eagerState=o,oa(o,i))return us(e,a,l,0),be===null&&ss(),!1}catch{}finally{}if(n=Fu(e,a,l,t),n!==null)return ta(n,e,t),em(n,a,t),!0}return!1}function Di(e,a,n,t){if(t={lane:2,revertLane:or(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ts(e)){if(a)throw Error(r(479))}else a=Fu(e,n,t,2),a!==null&&ta(a,e,2)}function Ts(e){var a=e.alternate;return e===$||a!==null&&a===$}function $c(e,a){St=bs=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function em(e,a,n){if((n&4194048)!==0){var t=a.lanes;t&=e.pendingLanes,n|=t,a.lanes=n,lo(e,n)}}var Al={readContext:we,use:_s,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};Al.useEffectEvent=Je;var am={readContext:we,use:_s,useCallback:function(e,a){return Ke().memoizedState=[e,a===void 0?null:a],e},useContext:we,useEffect:Uc,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,Ss(4194308,4,Qc.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Ss(4194308,4,e,a)},useInsertionEffect:function(e,a){Ss(4,2,e,a)},useMemo:function(e,a){var n=Ke();a=a===void 0?null:a;var t=e();if(Pn){rn(!0);try{e()}finally{rn(!1)}}return n.memoizedState=[t,a],t},useReducer:function(e,a,n){var t=Ke();if(n!==void 0){var l=n(a);if(Pn){rn(!0);try{n(a)}finally{rn(!1)}}}else l=a;return t.memoizedState=t.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},t.queue=e,e=e.dispatch=BA.bind(null,$,e),[t.memoizedState,e]},useRef:function(e){var a=Ke();return e={current:e},a.memoizedState=e},useState:function(e){e=Si(e);var a=e.queue,n=Wc.bind(null,$,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:Ji,useDeferredValue:function(e,a){var n=Ke();return Mi(n,e,a)},useTransition:function(){var e=Si(!1);return e=Zc.bind(null,$,e.queue,!0,!1),Ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var t=$,l=Ke();if(ie){if(n===void 0)throw Error(r(407));n=n()}else{if(n=a(),be===null)throw Error(r(349));(se&127)!==0||_c(t,a,n)}l.memoizedState=n;var s={value:n,getSnapshot:a};return l.queue=s,Uc(Sc.bind(null,t,s,e),[e]),t.flags|=2048,Tt(9,{destroy:void 0},qc.bind(null,t,s,n,a),null),n},useId:function(){var e=Ke(),a=be.identifierPrefix;if(ie){var n=Oa,t=Ra;n=(t&~(1<<32-ra(t)-1)).toString(32)+n,a="_"+a+"R_"+n,n=ys++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=CA++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Ci,useFormState:Oc,useActionState:Oc,useOptimistic:function(e){var a=Ke();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=Di.bind(null,$,!0,n),n.dispatch=a,[e,a]},useMemoCache:ji,useCacheRefresh:function(){return Ke().memoizedState=LA.bind(null,$)},useEffectEvent:function(e){var a=Ke(),n={impl:e};return a.memoizedState=n,function(){if((ce&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},Ri={readContext:we,use:_s,useCallback:wc,useContext:we,useEffect:Ti,useImperativeHandle:Vc,useInsertionEffect:Gc,useLayoutEffect:Yc,useMemo:kc,useReducer:qs,useRef:Bc,useState:function(){return qs(Ka)},useDebugValue:Ji,useDeferredValue:function(e,a){var n=Re();return Xc(n,Ae.memoizedState,e,a)},useTransition:function(){var e=qs(Ka)[0],a=Re().memoizedState;return[typeof e=="boolean"?e:dl(e),a]},useSyncExternalStore:jc,useId:Pc,useHostTransitionStatus:Ci,useFormState:zc,useActionState:zc,useOptimistic:function(e,a){var n=Re();return Jc(n,Ae,e,a)},useMemoCache:ji,useCacheRefresh:Ic};Ri.useEffectEvent=Hc;var nm={readContext:we,use:_s,useCallback:wc,useContext:we,useEffect:Ti,useImperativeHandle:Vc,useInsertionEffect:Gc,useLayoutEffect:Yc,useMemo:kc,useReducer:qi,useRef:Bc,useState:function(){return qi(Ka)},useDebugValue:Ji,useDeferredValue:function(e,a){var n=Re();return Ae===null?Mi(n,e,a):Xc(n,Ae.memoizedState,e,a)},useTransition:function(){var e=qi(Ka)[0],a=Re().memoizedState;return[typeof e=="boolean"?e:dl(e),a]},useSyncExternalStore:jc,useId:Pc,useHostTransitionStatus:Ci,useFormState:Lc,useActionState:Lc,useOptimistic:function(e,a){var n=Re();return Ae!==null?Jc(n,Ae,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ji,useCacheRefresh:Ic};nm.useEffectEvent=Hc;function Oi(e,a,n,t){a=e.memoizedState,n=n(t,a),n=n==null?a:E({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zi={enqueueSetState:function(e,a,n){e=e._reactInternals;var t=Aa(),l=vn(t);l.payload=a,n!=null&&(l.callback=n),a=hn(e,l,t),a!==null&&(ta(a,e,t),ol(a,e,t))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var t=Aa(),l=vn(t);l.tag=1,l.payload=a,n!=null&&(l.callback=n),a=hn(e,l,t),a!==null&&(ta(a,e,t),ol(a,e,t))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=Aa(),t=vn(n);t.tag=2,a!=null&&(t.callback=a),a=hn(e,t,n),a!==null&&(ta(a,e,n),ol(a,e,n))}};function tm(e,a,n,t,l,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,s,i):a.prototype&&a.prototype.isPureReactComponent?!al(n,t)||!al(l,s):!0}function lm(e,a,n,t){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,t),a.state!==e&&zi.enqueueReplaceState(a,a.state,null)}function In(e,a){var n=a;if("ref"in a){n={};for(var t in a)t!=="ref"&&(n[t]=a[t])}if(e=e.defaultProps){n===a&&(n=E({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function sm(e){ls(e)}function um(e){console.error(e)}function im(e){ls(e)}function Js(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(t){setTimeout(function(){throw t})}}function rm(e,a,n){try{var t=e.onCaughtError;t(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ni(e,a,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,a)},n}function om(e){return e=vn(e),e.tag=3,e}function cm(e,a,n,t){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var s=t.value;e.payload=function(){return l(s)},e.callback=function(){rm(a,n,t)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){rm(a,n,t),typeof l!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})})}function UA(e,a,n,t,l){if(n.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(a=n.alternate,a!==null&&gt(a,n,l,!0),n=ma.current,n!==null){switch(n.tag){case 31:case 13:return qa===null?Hs():n.alternate===null&&Me===0&&(Me=3),n.flags&=-257,n.flags|=65536,n.lanes=l,t===ps?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([t]):a.add(t),ur(e,t,l)),!1;case 22:return n.flags|=65536,t===ps?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([t])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([t]):n.add(t)),ur(e,t,l)),!1}throw Error(r(435,n.tag))}return ur(e,t,l),Hs(),!1}if(ie)return a=ma.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=l,t!==ei&&(e=Error(r(422),{cause:t}),ll(ba(e,n)))):(t!==ei&&(a=Error(r(423),{cause:t}),ll(ba(a,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,t=ba(t,n),l=Ni(e.stateNode,t,l),mi(e,l),Me!==4&&(Me=2)),!1;var s=Error(r(520),{cause:t});if(s=ba(s,n),ql===null?ql=[s]:ql.push(s),Me!==4&&(Me=2),a===null)return!0;t=ba(t,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ni(n.stateNode,t,e),mi(n,e),!1;case 1:if(a=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(qn===null||!qn.has(s))))return n.flags|=65536,l&=-l,n.lanes|=l,l=om(l),cm(l,e,n,t),mi(n,l),!1}n=n.return}while(n!==null);return!1}var Li=Error(r(461)),Ne=!1;function ke(e,a,n,t){a.child=e===null?pc(a,null,n,t):Kn(a,e.child,n,t)}function mm(e,a,n,t,l){n=n.render;var s=a.ref;if("ref"in t){var i={};for(var o in t)o!=="ref"&&(i[o]=t[o])}else i=t;return kn(a),t=hi(e,a,n,i,s,l),o=gi(),e!==null&&!Ne?(bi(e,a,l),Pa(e,a,l)):(ie&&o&&Wu(a),a.flags|=1,ke(e,a,t,l),a.child)}function fm(e,a,n,t,l){if(e===null){var s=n.type;return typeof s=="function"&&!Ku(s)&&s.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=s,dm(e,a,s,t,l)):(e=rs(n.type,null,t,a,a.mode,l),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,!wi(e,l)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(i,t)&&e.ref===a.ref)return Pa(e,a,l)}return a.flags|=1,e=wa(s,t),e.ref=a.ref,e.return=a,a.child=e}function dm(e,a,n,t,l){if(e!==null){var s=e.memoizedProps;if(al(s,t)&&e.ref===a.ref)if(Ne=!1,a.pendingProps=t=s,wi(e,l))(e.flags&131072)!==0&&(Ne=!0);else return a.lanes=e.lanes,Pa(e,a,l)}return Bi(e,a,n,t,l)}function pm(e,a,n,t){var l=t.children,s=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((a.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(t=a.child=e.child,l=0;t!==null;)l=l|t.lanes|t.childLanes,t=t.sibling;t=l&~s}else t=0,a.child=null;return Am(e,a,s,n,t)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&fs(a,s!==null?s.cachePool:null),s!==null?hc(a,s):di(),gc(a);else return t=a.lanes=536870912,Am(e,a,s!==null?s.baseLanes|n:n,n,t)}else s!==null?(fs(a,s.cachePool),hc(a,s),bn(),a.memoizedState=null):(e!==null&&fs(a,null),di(),bn());return ke(e,a,l,n),a.child}function vl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Am(e,a,n,t,l){var s=ii();return s=s===null?null:{parent:Oe._currentValue,pool:s},a.memoizedState={baseLanes:n,cachePool:s},e!==null&&fs(a,null),di(),gc(a),e!==null&&gt(e,a,t,!0),a.childLanes=l,null}function Ms(e,a){return a=Cs({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function vm(e,a,n){return Kn(a,e.child,null,n),e=Ms(a,a.pendingProps),e.flags|=2,fa(a),a.memoizedState=null,e}function HA(e,a,n){var t=a.pendingProps,l=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ie){if(t.mode==="hidden")return e=Ms(a,t),a.lanes=536870912,vl(null,e);if(Ai(a),(e=ye)?(e=xf(e,_a),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:mn!==null?{id:Ra,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},n=$o(e),n.return=a,a.child=n,Ve=a,ye=null)):e=null,e===null)throw dn(a);return a.lanes=536870912,null}return Ms(a,t)}var s=e.memoizedState;if(s!==null){var i=s.dehydrated;if(Ai(a),l)if(a.flags&256)a.flags&=-257,a=vm(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(r(558));else if(Ne||gt(e,a,n,!1),l=(n&e.childLanes)!==0,Ne||l){if(t=be,t!==null&&(i=so(t,n),i!==0&&i!==s.retryLane))throw s.retryLane=i,Yn(e,i),ta(t,e,i),Li;Hs(),a=vm(e,a,n)}else e=s.treeContext,ye=Sa(i.nextSibling),Ve=a,ie=!0,fn=null,_a=!1,e!==null&&nc(a,e),a=Ms(a,t),a.flags|=4096;return a}return e=wa(e.child,{mode:t.mode,children:t.children}),e.ref=a.ref,a.child=e,e.return=a,e}function xs(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function Bi(e,a,n,t,l){return kn(a),n=hi(e,a,n,t,void 0,l),t=gi(),e!==null&&!Ne?(bi(e,a,l),Pa(e,a,l)):(ie&&t&&Wu(a),a.flags|=1,ke(e,a,n,l),a.child)}function hm(e,a,n,t,l,s){return kn(a),a.updateQueue=null,n=yc(a,t,n,l),bc(e),t=gi(),e!==null&&!Ne?(bi(e,a,s),Pa(e,a,s)):(ie&&t&&Wu(a),a.flags|=1,ke(e,a,n,s),a.child)}function gm(e,a,n,t,l){if(kn(a),a.stateNode===null){var s=pt,i=n.contextType;typeof i=="object"&&i!==null&&(s=we(i)),s=new n(t,s),a.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zi,a.stateNode=s,s._reactInternals=a,s=a.stateNode,s.props=t,s.state=a.memoizedState,s.refs={},oi(a),i=n.contextType,s.context=typeof i=="object"&&i!==null?we(i):pt,s.state=a.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Oi(a,n,i,t),s.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(i=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),i!==s.state&&zi.enqueueReplaceState(s,s.state,null),ml(a,t,s,l),cl(),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308),t=!0}else if(e===null){s=a.stateNode;var o=a.memoizedProps,d=In(n,o);s.props=d;var _=s.context,M=n.contextType;i=pt,typeof M=="object"&&M!==null&&(i=we(M));var R=n.getDerivedStateFromProps;M=typeof R=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,M||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||_!==i)&&lm(a,s,t,i),An=!1;var q=a.memoizedState;s.state=q,ml(a,t,s,l),cl(),_=a.memoizedState,o||q!==_||An?(typeof R=="function"&&(Oi(a,n,R,t),_=a.memoizedState),(d=An||tm(a,n,d,t,q,_,i))?(M||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(a.flags|=4194308)):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=_),s.props=t,s.state=_,s.context=i,t=d):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{s=a.stateNode,ci(e,a),i=a.memoizedProps,M=In(n,i),s.props=M,R=a.pendingProps,q=s.context,_=n.contextType,d=pt,typeof _=="object"&&_!==null&&(d=we(_)),o=n.getDerivedStateFromProps,(_=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==R||q!==d)&&lm(a,s,t,d),An=!1,q=a.memoizedState,s.state=q,ml(a,t,s,l),cl();var S=a.memoizedState;i!==R||q!==S||An||e!==null&&e.dependencies!==null&&cs(e.dependencies)?(typeof o=="function"&&(Oi(a,n,o,t),S=a.memoizedState),(M=An||tm(a,n,M,t,q,S,d)||e!==null&&e.dependencies!==null&&cs(e.dependencies))?(_||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(t,S,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(t,S,d)),typeof s.componentDidUpdate=="function"&&(a.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&q===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&q===e.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=S),s.props=t,s.state=S,s.context=d,t=M):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&q===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&q===e.memoizedState||(a.flags|=1024),t=!1)}return s=t,xs(e,a),t=(a.flags&128)!==0,s||t?(s=a.stateNode,n=t&&typeof n.getDerivedStateFromError!="function"?null:s.render(),a.flags|=1,e!==null&&t?(a.child=Kn(a,e.child,null,l),a.child=Kn(a,null,n,l)):ke(e,a,n,l),a.memoizedState=s.state,e=a.child):e=Pa(e,a,l),e}function bm(e,a,n,t){return Vn(),a.flags|=256,ke(e,a,n,t),a.child}var Ui={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hi(e){return{baseLanes:e,cachePool:rc()}}function Gi(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=pa),e}function ym(e,a,n){var t=a.pendingProps,l=!1,s=(a.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),i&&(l=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,e===null){if(ie){if(l?gn(a):bn(),(e=ye)?(e=xf(e,_a),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:mn!==null?{id:Ra,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},n=$o(e),n.return=a,a.child=n,Ve=a,ye=null)):e=null,e===null)throw dn(a);return _r(e)?a.lanes=32:a.lanes=536870912,null}var o=t.children;return t=t.fallback,l?(bn(),l=a.mode,o=Cs({mode:"hidden",children:o},l),t=Qn(t,l,n,null),o.return=a,t.return=a,o.sibling=t,a.child=o,t=a.child,t.memoizedState=Hi(n),t.childLanes=Gi(e,i,n),a.memoizedState=Ui,vl(null,t)):(gn(a),Yi(a,o))}var d=e.memoizedState;if(d!==null&&(o=d.dehydrated,o!==null)){if(s)a.flags&256?(gn(a),a.flags&=-257,a=Qi(e,a,n)):a.memoizedState!==null?(bn(),a.child=e.child,a.flags|=128,a=null):(bn(),o=t.fallback,l=a.mode,t=Cs({mode:"visible",children:t.children},l),o=Qn(o,l,n,null),o.flags|=2,t.return=a,o.return=a,t.sibling=o,a.child=t,Kn(a,e.child,null,n),t=a.child,t.memoizedState=Hi(n),t.childLanes=Gi(e,i,n),a.memoizedState=Ui,a=vl(null,t));else if(gn(a),_r(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var _=i.dgst;i=_,t=Error(r(419)),t.stack="",t.digest=i,ll({value:t,source:null,stack:null}),a=Qi(e,a,n)}else if(Ne||gt(e,a,n,!1),i=(n&e.childLanes)!==0,Ne||i){if(i=be,i!==null&&(t=so(i,n),t!==0&&t!==d.retryLane))throw d.retryLane=t,Yn(e,t),ta(i,e,t),Li;jr(o)||Hs(),a=Qi(e,a,n)}else jr(o)?(a.flags|=192,a.child=e.child,a=null):(e=d.treeContext,ye=Sa(o.nextSibling),Ve=a,ie=!0,fn=null,_a=!1,e!==null&&nc(a,e),a=Yi(a,t.children),a.flags|=4096);return a}return l?(bn(),o=t.fallback,l=a.mode,d=e.child,_=d.sibling,t=wa(d,{mode:"hidden",children:t.children}),t.subtreeFlags=d.subtreeFlags&65011712,_!==null?o=wa(_,o):(o=Qn(o,l,n,null),o.flags|=2),o.return=a,t.return=a,t.sibling=o,a.child=t,vl(null,t),t=a.child,o=e.child.memoizedState,o===null?o=Hi(n):(l=o.cachePool,l!==null?(d=Oe._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=rc(),o={baseLanes:o.baseLanes|n,cachePool:l}),t.memoizedState=o,t.childLanes=Gi(e,i,n),a.memoizedState=Ui,vl(e.child,t)):(gn(a),n=e.child,e=n.sibling,n=wa(n,{mode:"visible",children:t.children}),n.return=a,n.sibling=null,e!==null&&(i=a.deletions,i===null?(a.deletions=[e],a.flags|=16):i.push(e)),a.child=n,a.memoizedState=null,n)}function Yi(e,a){return a=Cs({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Cs(e,a){return e=ca(22,e,null,a),e.lanes=0,e}function Qi(e,a,n){return Kn(a,e.child,null,n),e=Yi(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function jm(e,a,n){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a),ti(e.return,a,n)}function Vi(e,a,n,t,l,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:l,treeForkCount:s}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=n,i.tailMode=l,i.treeForkCount=s)}function _m(e,a,n){var t=a.pendingProps,l=t.revealOrder,s=t.tail;t=t.children;var i=De.current,o=(i&2)!==0;if(o?(i=i&1|2,a.flags|=128):i&=1,B(De,i),ke(e,a,t,n),t=ie?tl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,n,a);else if(e.tag===19)jm(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=a.child,l=null;n!==null;)e=n.alternate,e!==null&&gs(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=a.child,a.child=null):(l=n.sibling,n.sibling=null),Vi(a,!1,l,n,s,t);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=a.child,a.child=null;l!==null;){if(e=l.alternate,e!==null&&gs(e)===null){a.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vi(a,!0,n,null,s,t);break;case"together":Vi(a,!1,null,null,void 0,t);break;default:a.memoizedState=null}return a.child}function Pa(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),_n|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(gt(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,n=wa(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=wa(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function wi(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&cs(e)))}function GA(e,a,n){switch(a.tag){case 3:Fe(a,a.stateNode.containerInfo),pn(a,Oe,e.memoizedState.cache),Vn();break;case 27:case 5:Qt(a);break;case 4:Fe(a,a.stateNode.containerInfo);break;case 10:pn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ai(a),null;break;case 13:var t=a.memoizedState;if(t!==null)return t.dehydrated!==null?(gn(a),a.flags|=128,null):(n&a.child.childLanes)!==0?ym(e,a,n):(gn(a),e=Pa(e,a,n),e!==null?e.sibling:null);gn(a);break;case 19:var l=(e.flags&128)!==0;if(t=(n&a.childLanes)!==0,t||(gt(e,a,n,!1),t=(n&a.childLanes)!==0),l){if(t)return _m(e,a,n);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(De,De.current),t)break;return null;case 22:return a.lanes=0,pm(e,a,n,a.pendingProps);case 24:pn(a,Oe,e.memoizedState.cache)}return Pa(e,a,n)}function qm(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ne=!0;else{if(!wi(e,n)&&(a.flags&128)===0)return Ne=!1,GA(e,a,n);Ne=(e.flags&131072)!==0}else Ne=!1,ie&&(a.flags&1048576)!==0&&ac(a,tl,a.index);switch(a.lanes=0,a.tag){case 16:e:{var t=a.pendingProps;if(e=Zn(a.elementType),a.type=e,typeof e=="function")Ku(e)?(t=In(e,t),a.tag=1,a=gm(null,a,e,t,n)):(a.tag=0,a=Bi(null,a,e,t,n));else{if(e!=null){var l=e.$$typeof;if(l===_e){a.tag=11,a=mm(null,a,e,t,n);break e}else if(l===ee){a.tag=14,a=fm(null,a,e,t,n);break e}}throw a=Ga(e)||e,Error(r(306,a,""))}}return a;case 0:return Bi(e,a,a.type,a.pendingProps,n);case 1:return t=a.type,l=In(t,a.pendingProps),gm(e,a,t,l,n);case 3:e:{if(Fe(a,a.stateNode.containerInfo),e===null)throw Error(r(387));t=a.pendingProps;var s=a.memoizedState;l=s.element,ci(e,a),ml(a,t,null,n);var i=a.memoizedState;if(t=i.cache,pn(a,Oe,t),t!==s.cache&&li(a,[Oe],n,!0),cl(),t=i.element,s.isDehydrated)if(s={element:t,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){a=bm(e,a,t,n);break e}else if(t!==l){l=ba(Error(r(424)),a),ll(l),a=bm(e,a,t,n);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=Sa(e.firstChild),Ve=a,ie=!0,fn=null,_a=!0,n=pc(a,null,t,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vn(),t===l){a=Pa(e,a,n);break e}ke(e,a,t,n)}a=a.child}return a;case 26:return xs(e,a),e===null?(n=Nf(a.type,null,a.pendingProps,null))?a.memoizedState=n:ie||(n=a.type,e=a.pendingProps,t=Xs(ne.current).createElement(n),t[Qe]=a,t[Ie]=e,Xe(t,n,e),Ge(t),a.stateNode=t):a.memoizedState=Nf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Qt(a),e===null&&ie&&(t=a.stateNode=Rf(a.type,a.pendingProps,ne.current),Ve=a,_a=!0,l=ye,Jn(a.type)?(qr=l,ye=Sa(t.firstChild)):ye=l),ke(e,a,a.pendingProps.children,n),xs(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ie&&((l=t=ye)&&(t=vv(t,a.type,a.pendingProps,_a),t!==null?(a.stateNode=t,Ve=a,ye=Sa(t.firstChild),_a=!1,l=!0):l=!1),l||dn(a)),Qt(a),l=a.type,s=a.pendingProps,i=e!==null?e.memoizedProps:null,t=s.children,gr(l,s)?t=null:i!==null&&gr(l,i)&&(a.flags|=32),a.memoizedState!==null&&(l=hi(e,a,DA,null,null,n),Dl._currentValue=l),xs(e,a),ke(e,a,t,n),a.child;case 6:return e===null&&ie&&((e=n=ye)&&(n=hv(n,a.pendingProps,_a),n!==null?(a.stateNode=n,Ve=a,ye=null,e=!0):e=!1),e||dn(a)),null;case 13:return ym(e,a,n);case 4:return Fe(a,a.stateNode.containerInfo),t=a.pendingProps,e===null?a.child=Kn(a,null,t,n):ke(e,a,t,n),a.child;case 11:return mm(e,a,a.type,a.pendingProps,n);case 7:return ke(e,a,a.pendingProps,n),a.child;case 8:return ke(e,a,a.pendingProps.children,n),a.child;case 12:return ke(e,a,a.pendingProps.children,n),a.child;case 10:return t=a.pendingProps,pn(a,a.type,t.value),ke(e,a,t.children,n),a.child;case 9:return l=a.type._context,t=a.pendingProps.children,kn(a),l=we(l),t=t(l),a.flags|=1,ke(e,a,t,n),a.child;case 14:return fm(e,a,a.type,a.pendingProps,n);case 15:return dm(e,a,a.type,a.pendingProps,n);case 19:return _m(e,a,n);case 31:return HA(e,a,n);case 22:return pm(e,a,n,a.pendingProps);case 24:return kn(a),t=we(Oe),e===null?(l=ii(),l===null&&(l=be,s=si(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=n),l=s),a.memoizedState={parent:t,cache:l},oi(a),pn(a,Oe,l)):((e.lanes&n)!==0&&(ci(e,a),ml(a,null,null,n),cl()),l=e.memoizedState,s=a.memoizedState,l.parent!==t?(l={parent:t,cache:t},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),pn(a,Oe,t)):(t=s.cache,pn(a,Oe,t),t!==l.cache&&li(a,[Oe],n,!0))),ke(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function Ia(e){e.flags|=4}function ki(e,a,n,t,l){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Pm())e.flags|=8192;else throw Fn=ps,ri}else e.flags&=-16777217}function Sm(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(a))if(Pm())e.flags|=8192;else throw Fn=ps,ri}function Ds(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?no():536870912,e.lanes|=a,Ct|=a)}function hl(e,a){if(!ie)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function je(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(a)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,t|=l.subtreeFlags&65011712,t|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,t|=l.subtreeFlags,t|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=t,e.childLanes=n,a}function YA(e,a,n){var t=a.pendingProps;switch($u(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(a),null;case 1:return je(a),null;case 3:return n=a.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Za(Oe),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ht(a)?Ia(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ai())),je(a),null;case 26:var l=a.type,s=a.memoizedState;return e===null?(Ia(a),s!==null?(je(a),Sm(a,s)):(je(a),ki(a,l,null,t,n))):s?s!==e.memoizedState?(Ia(a),je(a),Sm(a,s)):(je(a),a.flags&=-16777217):(e=e.memoizedProps,e!==t&&Ia(a),je(a),ki(a,l,e,t,n)),null;case 27:if(Ql(a),n=ne.current,l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==t&&Ia(a);else{if(!t){if(a.stateNode===null)throw Error(r(166));return je(a),null}e=Y.current,ht(a)?tc(a):(e=Rf(l,t,n),a.stateNode=e,Ia(a))}return je(a),null;case 5:if(Ql(a),l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==t&&Ia(a);else{if(!t){if(a.stateNode===null)throw Error(r(166));return je(a),null}if(s=Y.current,ht(a))tc(a);else{var i=Xs(ne.current);switch(s){case 1:s=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=i.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof t.is=="string"?i.createElement("select",{is:t.is}):i.createElement("select"),t.multiple?s.multiple=!0:t.size&&(s.size=t.size);break;default:s=typeof t.is=="string"?i.createElement(l,{is:t.is}):i.createElement(l)}}s[Qe]=a,s[Ie]=t;e:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)s.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=s;e:switch(Xe(s,l,t),l){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ia(a)}}return je(a),ki(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==t&&Ia(a);else{if(typeof t!="string"&&a.stateNode===null)throw Error(r(166));if(e=ne.current,ht(a)){if(e=a.stateNode,n=a.memoizedProps,t=null,l=Ve,l!==null)switch(l.tag){case 27:case 5:t=l.memoizedProps}e[Qe]=a,e=!!(e.nodeValue===n||t!==null&&t.suppressHydrationWarning===!0||jf(e.nodeValue,n)),e||dn(a,!0)}else e=Xs(e).createTextNode(t),e[Qe]=a,a.stateNode=e}return je(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(t=ht(a),n!==null){if(e===null){if(!t)throw Error(r(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Qe]=a}else Vn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;je(a),e=!1}else n=ai(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(fa(a),a):(fa(a),null);if((a.flags&128)!==0)throw Error(r(558))}return je(a),null;case 13:if(t=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ht(a),t!==null&&t.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Qe]=a}else Vn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;je(a),l=!1}else l=ai(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return a.flags&256?(fa(a),a):(fa(a),null)}return fa(a),(a.flags&128)!==0?(a.lanes=n,a):(n=t!==null,e=e!==null&&e.memoizedState!==null,n&&(t=a.child,l=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(l=t.alternate.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==l&&(t.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),Ds(a,a.updateQueue),je(a),null);case 4:return Ce(),e===null&&dr(a.stateNode.containerInfo),je(a),null;case 10:return Za(a.type),je(a),null;case 19:if(z(De),t=a.memoizedState,t===null)return je(a),null;if(l=(a.flags&128)!==0,s=t.rendering,s===null)if(l)hl(t,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(s=gs(e),s!==null){for(a.flags|=128,hl(t,!1),e=s.updateQueue,a.updateQueue=e,Ds(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)Wo(n,e),n=n.sibling;return B(De,De.current&1|2),ie&&ka(a,t.treeForkCount),a.child}e=e.sibling}t.tail!==null&&ua()>Ls&&(a.flags|=128,l=!0,hl(t,!1),a.lanes=4194304)}else{if(!l)if(e=gs(s),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Ds(a,e),hl(t,!0),t.tail===null&&t.tailMode==="hidden"&&!s.alternate&&!ie)return je(a),null}else 2*ua()-t.renderingStartTime>Ls&&n!==536870912&&(a.flags|=128,l=!0,hl(t,!1),a.lanes=4194304);t.isBackwards?(s.sibling=a.child,a.child=s):(e=t.last,e!==null?e.sibling=s:a.child=s,t.last=s)}return t.tail!==null?(e=t.tail,t.rendering=e,t.tail=e.sibling,t.renderingStartTime=ua(),e.sibling=null,n=De.current,B(De,l?n&1|2:n&1),ie&&ka(a,t.treeForkCount),e):(je(a),null);case 22:case 23:return fa(a),pi(),t=a.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(a.flags|=8192):t&&(a.flags|=8192),t?(n&536870912)!==0&&(a.flags&128)===0&&(je(a),a.subtreeFlags&6&&(a.flags|=8192)):je(a),n=a.updateQueue,n!==null&&Ds(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==n&&(a.flags|=2048),e!==null&&z(Xn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Za(Oe),je(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function QA(e,a){switch($u(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Za(Oe),Ce(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ql(a),null;case 31:if(a.memoizedState!==null){if(fa(a),a.alternate===null)throw Error(r(340));Vn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(fa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Vn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return z(De),null;case 4:return Ce(),null;case 10:return Za(a.type),null;case 22:case 23:return fa(a),pi(),e!==null&&z(Xn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Za(Oe),null;case 25:return null;default:return null}}function Em(e,a){switch($u(a),a.tag){case 3:Za(Oe),Ce();break;case 26:case 27:case 5:Ql(a);break;case 4:Ce();break;case 31:a.memoizedState!==null&&fa(a);break;case 13:fa(a);break;case 19:z(De);break;case 10:Za(a.type);break;case 22:case 23:fa(a),pi(),e!==null&&z(Xn);break;case 24:Za(Oe)}}function gl(e,a){try{var n=a.updateQueue,t=n!==null?n.lastEffect:null;if(t!==null){var l=t.next;n=l;do{if((n.tag&e)===e){t=void 0;var s=n.create,i=n.inst;t=s(),i.destroy=t}n=n.next}while(n!==l)}}catch(o){de(a,a.return,o)}}function yn(e,a,n){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var s=l.next;t=s;do{if((t.tag&e)===e){var i=t.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,l=a;var d=n,_=o;try{_()}catch(M){de(l,d,M)}}}t=t.next}while(t!==s)}}catch(M){de(a,a.return,M)}}function Tm(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{vc(a,n)}catch(t){de(e,e.return,t)}}}function Jm(e,a,n){n.props=In(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(t){de(e,a,t)}}function bl(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof n=="function"?e.refCleanup=n(t):n.current=t}}catch(l){de(e,a,l)}}function za(e,a){var n=e.ref,t=e.refCleanup;if(n!==null)if(typeof t=="function")try{t()}catch(l){de(e,a,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){de(e,a,l)}else n.current=null}function Mm(e){var a=e.type,n=e.memoizedProps,t=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&t.focus();break e;case"img":n.src?t.src=n.src:n.srcSet&&(t.srcset=n.srcSet)}}catch(l){de(e,e.return,l)}}function Xi(e,a,n){try{var t=e.stateNode;cv(t,e.type,n,a),t[Ie]=a}catch(l){de(e,e.return,l)}}function xm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jn(e.type)||e.tag===4}function Zi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,a,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(e),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Qa));else if(t!==4&&(t===27&&Jn(e.type)&&(n=e.stateNode,a=null),e=e.child,e!==null))for(Fi(e,a,n),e=e.sibling;e!==null;)Fi(e,a,n),e=e.sibling}function Rs(e,a,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(t!==4&&(t===27&&Jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Rs(e,a,n),e=e.sibling;e!==null;)Rs(e,a,n),e=e.sibling}function Cm(e){var a=e.stateNode,n=e.memoizedProps;try{for(var t=e.type,l=a.attributes;l.length;)a.removeAttributeNode(l[0]);Xe(a,t,n),a[Qe]=e,a[Ie]=n}catch(s){de(e,e.return,s)}}var Wa=!1,Le=!1,Ki=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function VA(e,a){if(e=e.containerInfo,vr=$s,e=Vo(e),Qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var l=t.anchorOffset,s=t.focusNode;t=t.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,o=-1,d=-1,_=0,M=0,R=e,q=null;a:for(;;){for(var S;R!==n||l!==0&&R.nodeType!==3||(o=i+l),R!==s||t!==0&&R.nodeType!==3||(d=i+t),R.nodeType===3&&(i+=R.nodeValue.length),(S=R.firstChild)!==null;)q=R,R=S;for(;;){if(R===e)break a;if(q===n&&++_===l&&(o=i),q===s&&++M===t&&(d=i),(S=R.nextSibling)!==null)break;R=q,q=R.parentNode}R=S}n=o===-1||d===-1?null:{start:o,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(hr={focusedElem:e,selectionRange:n},$s=!1,Ye=a;Ye!==null;)if(a=Ye,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ye=e;else for(;Ye!==null;){switch(a=Ye,s=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=a,l=s.memoizedProps,s=s.memoizedState,t=n.stateNode;try{var U=In(n.type,l);e=t.getSnapshotBeforeUpdate(U,s),t.__reactInternalSnapshotBeforeUpdate=e}catch(K){de(n,n.return,K)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)yr(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,Ye=e;break}Ye=a.return}}function Rm(e,a,n){var t=n.flags;switch(n.tag){case 0:case 11:case 15:en(e,n),t&4&&gl(5,n);break;case 1:if(en(e,n),t&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(i){de(n,n.return,i)}else{var l=In(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(l,a,e.__reactInternalSnapshotBeforeUpdate)}catch(i){de(n,n.return,i)}}t&64&&Tm(n),t&512&&bl(n,n.return);break;case 3:if(en(e,n),t&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{vc(e,a)}catch(i){de(n,n.return,i)}}break;case 27:a===null&&t&4&&Cm(n);case 26:case 5:en(e,n),a===null&&t&4&&Mm(n),t&512&&bl(n,n.return);break;case 12:en(e,n);break;case 31:en(e,n),t&4&&Nm(e,n);break;case 13:en(e,n),t&4&&Lm(e,n),t&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=WA.bind(null,n),gv(e,n))));break;case 22:if(t=n.memoizedState!==null||Wa,!t){a=a!==null&&a.memoizedState!==null||Le,l=Wa;var s=Le;Wa=t,(Le=a)&&!s?an(e,n,(n.subtreeFlags&8772)!==0):en(e,n),Wa=l,Le=s}break;case 30:break;default:en(e,n)}}function Om(e){var a=e.alternate;a!==null&&(e.alternate=null,Om(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Eu(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,$e=!1;function $a(e,a,n){for(n=n.child;n!==null;)zm(e,a,n),n=n.sibling}function zm(e,a,n){if(ia&&typeof ia.onCommitFiberUnmount=="function")try{ia.onCommitFiberUnmount(Vt,n)}catch{}switch(n.tag){case 26:Le||za(n,a),$a(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Le||za(n,a);var t=qe,l=$e;Jn(n.type)&&(qe=n.stateNode,$e=!1),$a(e,a,n),Ml(n.stateNode),qe=t,$e=l;break;case 5:Le||za(n,a);case 6:if(t=qe,l=$e,qe=null,$a(e,a,n),qe=t,$e=l,qe!==null)if($e)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(n.stateNode)}catch(s){de(n,a,s)}else try{qe.removeChild(n.stateNode)}catch(s){de(n,a,s)}break;case 18:qe!==null&&($e?(e=qe,Jf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ut(e)):Jf(qe,n.stateNode));break;case 4:t=qe,l=$e,qe=n.stateNode.containerInfo,$e=!0,$a(e,a,n),qe=t,$e=l;break;case 0:case 11:case 14:case 15:yn(2,n,a),Le||yn(4,n,a),$a(e,a,n);break;case 1:Le||(za(n,a),t=n.stateNode,typeof t.componentWillUnmount=="function"&&Jm(n,a,t)),$a(e,a,n);break;case 21:$a(e,a,n);break;case 22:Le=(t=Le)||n.memoizedState!==null,$a(e,a,n),Le=t;break;default:$a(e,a,n)}}function Nm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ut(e)}catch(n){de(a,a.return,n)}}}function Lm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ut(e)}catch(n){de(a,a.return,n)}}function wA(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Dm),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Dm),a;default:throw Error(r(435,e.tag))}}function Os(e,a){var n=wA(e);a.forEach(function(t){if(!n.has(t)){n.add(t);var l=$A.bind(null,e,t);t.then(l,l)}})}function ea(e,a){var n=a.deletions;if(n!==null)for(var t=0;t<n.length;t++){var l=n[t],s=e,i=a,o=i;e:for(;o!==null;){switch(o.tag){case 27:if(Jn(o.type)){qe=o.stateNode,$e=!1;break e}break;case 5:qe=o.stateNode,$e=!1;break e;case 3:case 4:qe=o.stateNode.containerInfo,$e=!0;break e}o=o.return}if(qe===null)throw Error(r(160));zm(s,i,l),qe=null,$e=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Bm(a,e),a=a.sibling}var Ma=null;function Bm(e,a){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ea(a,e),aa(e),t&4&&(yn(3,e,e.return),gl(3,e),yn(5,e,e.return));break;case 1:ea(a,e),aa(e),t&512&&(Le||n===null||za(n,n.return)),t&64&&Wa&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:var l=Ma;if(ea(a,e),aa(e),t&512&&(Le||n===null||za(n,n.return)),t&4){var s=n!==null?n.memoizedState:null;if(t=e.memoizedState,n===null)if(t===null)if(e.stateNode===null){e:{t=e.type,n=e.memoizedProps,l=l.ownerDocument||l;a:switch(t){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Xt]||s[Qe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(t),l.head.insertBefore(s,l.querySelector("head > title"))),Xe(s,t,n),s[Qe]=e,Ge(s),t=s;break e;case"link":var i=Uf("link","href",l).get(t+(n.href||""));if(i){for(var o=0;o<i.length;o++)if(s=i[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(o,1);break a}}s=l.createElement(t),Xe(s,t,n),l.head.appendChild(s);break;case"meta":if(i=Uf("meta","content",l).get(t+(n.content||""))){for(o=0;o<i.length;o++)if(s=i[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(o,1);break a}}s=l.createElement(t),Xe(s,t,n),l.head.appendChild(s);break;default:throw Error(r(468,t))}s[Qe]=e,Ge(s),t=s}e.stateNode=t}else Hf(l,e.type,e.stateNode);else e.stateNode=Bf(l,t,e.memoizedProps);else s!==t?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,t===null?Hf(l,e.type,e.stateNode):Bf(l,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Xi(e,e.memoizedProps,n.memoizedProps)}break;case 27:ea(a,e),aa(e),t&512&&(Le||n===null||za(n,n.return)),n!==null&&t&4&&Xi(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ea(a,e),aa(e),t&512&&(Le||n===null||za(n,n.return)),e.flags&32){l=e.stateNode;try{it(l,"")}catch(U){de(e,e.return,U)}}t&4&&e.stateNode!=null&&(l=e.memoizedProps,Xi(e,l,n!==null?n.memoizedProps:l)),t&1024&&(Ki=!0);break;case 6:if(ea(a,e),aa(e),t&4){if(e.stateNode===null)throw Error(r(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t}catch(U){de(e,e.return,U)}}break;case 3:if(Ks=null,l=Ma,Ma=Zs(a.containerInfo),ea(a,e),Ma=l,aa(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{Ut(a.containerInfo)}catch(U){de(e,e.return,U)}Ki&&(Ki=!1,Um(e));break;case 4:t=Ma,Ma=Zs(e.stateNode.containerInfo),ea(a,e),aa(e),Ma=t;break;case 12:ea(a,e),aa(e);break;case 31:ea(a,e),aa(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Os(e,t)));break;case 13:ea(a,e),aa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ns=ua()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Os(e,t)));break;case 22:l=e.memoizedState!==null;var d=n!==null&&n.memoizedState!==null,_=Wa,M=Le;if(Wa=_||l,Le=M||d,ea(a,e),Le=M,Wa=_,aa(e),t&8192)e:for(a=e.stateNode,a._visibility=l?a._visibility&-2:a._visibility|1,l&&(n===null||d||Wa||Le||Wn(e)),n=null,a=e;;){if(a.tag===5||a.tag===26){if(n===null){d=n=a;try{if(s=d.stateNode,l)i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=d.stateNode;var R=d.memoizedProps.style,q=R!=null&&R.hasOwnProperty("display")?R.display:null;o.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(U){de(d,d.return,U)}}}else if(a.tag===6){if(n===null){d=a;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(U){de(d,d.return,U)}}}else if(a.tag===18){if(n===null){d=a;try{var S=d.stateNode;l?Mf(S,!0):Mf(d.stateNode,!1)}catch(U){de(d,d.return,U)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}t&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Os(e,n))));break;case 19:ea(a,e),aa(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Os(e,t)));break;case 30:break;case 21:break;default:ea(a,e),aa(e)}}function aa(e){var a=e.flags;if(a&2){try{for(var n,t=e.return;t!==null;){if(xm(t)){n=t;break}t=t.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var l=n.stateNode,s=Zi(e);Rs(e,s,l);break;case 5:var i=n.stateNode;n.flags&32&&(it(i,""),n.flags&=-33);var o=Zi(e);Rs(e,o,i);break;case 3:case 4:var d=n.stateNode.containerInfo,_=Zi(e);Fi(e,_,d);break;default:throw Error(r(161))}}catch(M){de(e,e.return,M)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Um(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Um(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function en(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Rm(e,a.alternate,a),a=a.sibling}function Wn(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:yn(4,a,a.return),Wn(a);break;case 1:za(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&Jm(a,a.return,n),Wn(a);break;case 27:Ml(a.stateNode);case 26:case 5:za(a,a.return),Wn(a);break;case 22:a.memoizedState===null&&Wn(a);break;case 30:Wn(a);break;default:Wn(a)}e=e.sibling}}function an(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var t=a.alternate,l=e,s=a,i=s.flags;switch(s.tag){case 0:case 11:case 15:an(l,s,n),gl(4,s);break;case 1:if(an(l,s,n),t=s,l=t.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(_){de(t,t.return,_)}if(t=s,l=t.updateQueue,l!==null){var o=t.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)Ac(d[l],o)}catch(_){de(t,t.return,_)}}n&&i&64&&Tm(s),bl(s,s.return);break;case 27:Cm(s);case 26:case 5:an(l,s,n),n&&t===null&&i&4&&Mm(s),bl(s,s.return);break;case 12:an(l,s,n);break;case 31:an(l,s,n),n&&i&4&&Nm(l,s);break;case 13:an(l,s,n),n&&i&4&&Lm(l,s);break;case 22:s.memoizedState===null&&an(l,s,n),bl(s,s.return);break;case 30:break;default:an(l,s,n)}a=a.sibling}}function Pi(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sl(n))}function Ii(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&sl(e))}function xa(e,a,n,t){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Hm(e,a,n,t),a=a.sibling}function Hm(e,a,n,t){var l=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a,n,t),l&2048&&gl(9,a);break;case 1:xa(e,a,n,t);break;case 3:xa(e,a,n,t),l&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&sl(e)));break;case 12:if(l&2048){xa(e,a,n,t),e=a.stateNode;try{var s=a.memoizedProps,i=s.id,o=s.onPostCommit;typeof o=="function"&&o(i,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){de(a,a.return,d)}}else xa(e,a,n,t);break;case 31:xa(e,a,n,t);break;case 13:xa(e,a,n,t);break;case 23:break;case 22:s=a.stateNode,i=a.alternate,a.memoizedState!==null?s._visibility&2?xa(e,a,n,t):yl(e,a):s._visibility&2?xa(e,a,n,t):(s._visibility|=2,Jt(e,a,n,t,(a.subtreeFlags&10256)!==0||!1)),l&2048&&Pi(i,a);break;case 24:xa(e,a,n,t),l&2048&&Ii(a.alternate,a);break;default:xa(e,a,n,t)}}function Jt(e,a,n,t,l){for(l=l&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var s=e,i=a,o=n,d=t,_=i.flags;switch(i.tag){case 0:case 11:case 15:Jt(s,i,o,d,l),gl(8,i);break;case 23:break;case 22:var M=i.stateNode;i.memoizedState!==null?M._visibility&2?Jt(s,i,o,d,l):yl(s,i):(M._visibility|=2,Jt(s,i,o,d,l)),l&&_&2048&&Pi(i.alternate,i);break;case 24:Jt(s,i,o,d,l),l&&_&2048&&Ii(i.alternate,i);break;default:Jt(s,i,o,d,l)}a=a.sibling}}function yl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,t=a,l=t.flags;switch(t.tag){case 22:yl(n,t),l&2048&&Pi(t.alternate,t);break;case 24:yl(n,t),l&2048&&Ii(t.alternate,t);break;default:yl(n,t)}a=a.sibling}}var jl=8192;function Mt(e,a,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Gm(e,a,n),e=e.sibling}function Gm(e,a,n){switch(e.tag){case 26:Mt(e,a,n),e.flags&jl&&e.memoizedState!==null&&Cv(n,Ma,e.memoizedState,e.memoizedProps);break;case 5:Mt(e,a,n);break;case 3:case 4:var t=Ma;Ma=Zs(e.stateNode.containerInfo),Mt(e,a,n),Ma=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=jl,jl=16777216,Mt(e,a,n),jl=t):Mt(e,a,n));break;default:Mt(e,a,n)}}function Ym(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function _l(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var t=a[n];Ye=t,Vm(t,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qm(e),e=e.sibling}function Qm(e){switch(e.tag){case 0:case 11:case 15:_l(e),e.flags&2048&&yn(9,e,e.return);break;case 3:_l(e);break;case 12:_l(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,zs(e)):_l(e);break;default:_l(e)}}function zs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var t=a[n];Ye=t,Vm(t,e)}Ym(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:yn(8,a,a.return),zs(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,zs(a));break;default:zs(a)}e=e.sibling}}function Vm(e,a){for(;Ye!==null;){var n=Ye;switch(n.tag){case 0:case 11:case 15:yn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var t=n.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:sl(n.memoizedState.cache)}if(t=n.child,t!==null)t.return=n,Ye=t;else e:for(n=e;Ye!==null;){t=Ye;var l=t.sibling,s=t.return;if(Om(t),t===n){Ye=null;break e}if(l!==null){l.return=s,Ye=l;break e}Ye=s}}}var kA={getCacheForType:function(e){var a=we(Oe),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return we(Oe).controller.signal}},XA=typeof WeakMap=="function"?WeakMap:Map,ce=0,be=null,te=null,se=0,fe=0,da=null,jn=!1,xt=!1,Wi=!1,nn=0,Me=0,_n=0,$n=0,$i=0,pa=0,Ct=0,ql=null,na=null,er=!1,Ns=0,wm=0,Ls=1/0,Bs=null,qn=null,He=0,Sn=null,Dt=null,tn=0,ar=0,nr=null,km=null,Sl=0,tr=null;function Aa(){return(ce&2)!==0&&se!==0?se&-se:x.T!==null?or():uo()}function Xm(){if(pa===0)if((se&536870912)===0||ie){var e=kl;kl<<=1,(kl&3932160)===0&&(kl=262144),pa=e}else pa=536870912;return e=ma.current,e!==null&&(e.flags|=32),pa}function ta(e,a,n){(e===be&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Rt(e,0),En(e,se,pa,!1)),kt(e,n),((ce&2)===0||e!==be)&&(e===be&&((ce&2)===0&&($n|=n),Me===4&&En(e,se,pa,!1)),Na(e))}function Zm(e,a,n){if((ce&6)!==0)throw Error(r(327));var t=!n&&(a&127)===0&&(a&e.expiredLanes)===0||wt(e,a),l=t?KA(e,a):sr(e,a,!0),s=t;do{if(l===0){xt&&!t&&En(e,a,0,!1);break}else{if(n=e.current.alternate,s&&!ZA(n)){l=sr(e,a,!1),s=!1;continue}if(l===2){if(s=a,e.errorRecoveryDisabledLanes&s)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;e:{var o=e;l=ql;var d=o.current.memoizedState.isDehydrated;if(d&&(Rt(o,i).flags|=256),i=sr(o,i,!1),i!==2){if(Wi&&!d){o.errorRecoveryDisabledLanes|=s,$n|=s,l=4;break e}s=na,na=l,s!==null&&(na===null?na=s:na.push.apply(na,s))}l=i}if(s=!1,l!==2)continue}}if(l===1){Rt(e,0),En(e,a,0,!0);break}e:{switch(t=e,s=l,s){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:En(t,a,pa,!jn);break e;case 2:na=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(l=Ns+300-ua(),10<l)){if(En(t,a,pa,!jn),Zl(t,0,!0)!==0)break e;tn=a,t.timeoutHandle=Ef(Fm.bind(null,t,n,na,Bs,er,a,pa,$n,Ct,jn,s,"Throttled",-0,0),l);break e}Fm(t,n,na,Bs,er,a,pa,$n,Ct,jn,s,null,-0,0)}}break}while(!0);Na(e)}function Fm(e,a,n,t,l,s,i,o,d,_,M,R,q,S){if(e.timeoutHandle=-1,R=a.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qa},Gm(a,s,R);var U=(s&62914560)===s?Ns-ua():(s&4194048)===s?wm-ua():0;if(U=Dv(R,U),U!==null){tn=s,e.cancelPendingCommit=U(nf.bind(null,e,a,s,n,t,l,i,o,d,M,R,null,q,S)),En(e,s,i,!_);return}}nf(e,a,s,n,t,l,i,o,d)}function ZA(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var t=0;t<n.length;t++){var l=n[t],s=l.getSnapshot;l=l.value;try{if(!oa(s(),l))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function En(e,a,n,t){a&=~$i,a&=~$n,e.suspendedLanes|=a,e.pingedLanes&=~a,t&&(e.warmLanes|=a),t=e.expirationTimes;for(var l=a;0<l;){var s=31-ra(l),i=1<<s;t[s]=-1,l&=~i}n!==0&&to(e,n,a)}function Us(){return(ce&6)===0?(El(0),!1):!0}function lr(){if(te!==null){if(fe===0)var e=te.return;else e=te,Xa=wn=null,yi(e),_t=null,il=0,e=te;for(;e!==null;)Em(e.alternate,e),e=e.return;te=null}}function Rt(e,a){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,dv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),tn=0,lr(),be=e,te=n=wa(e.current,null),se=a,fe=0,da=null,jn=!1,xt=wt(e,a),Wi=!1,Ct=pa=$i=$n=_n=Me=0,na=ql=null,er=!1,(a&8)!==0&&(a|=a&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=a;0<t;){var l=31-ra(t),s=1<<l;a|=e[l],t&=~s}return nn=a,ss(),n}function Km(e,a){$=null,x.H=Al,a===jt||a===ds?(a=mc(),fe=3):a===ri?(a=mc(),fe=4):fe=a===Li?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,da=a,te===null&&(Me=1,Js(e,ba(a,e.current)))}function Pm(){var e=ma.current;return e===null?!0:(se&4194048)===se?qa===null:(se&62914560)===se||(se&536870912)!==0?e===qa:!1}function Im(){var e=x.H;return x.H=Al,e===null?Al:e}function Wm(){var e=x.A;return x.A=kA,e}function Hs(){Me=4,jn||(se&4194048)!==se&&ma.current!==null||(xt=!0),(_n&134217727)===0&&($n&134217727)===0||be===null||En(be,se,pa,!1)}function sr(e,a,n){var t=ce;ce|=2;var l=Im(),s=Wm();(be!==e||se!==a)&&(Bs=null,Rt(e,a)),a=!1;var i=Me;e:do try{if(fe!==0&&te!==null){var o=te,d=da;switch(fe){case 8:lr(),i=6;break e;case 3:case 2:case 9:case 6:ma.current===null&&(a=!0);var _=fe;if(fe=0,da=null,Ot(e,o,d,_),n&&xt){i=0;break e}break;default:_=fe,fe=0,da=null,Ot(e,o,d,_)}}FA(),i=Me;break}catch(M){Km(e,M)}while(!0);return a&&e.shellSuspendCounter++,Xa=wn=null,ce=t,x.H=l,x.A=s,te===null&&(be=null,se=0,ss()),i}function FA(){for(;te!==null;)$m(te)}function KA(e,a){var n=ce;ce|=2;var t=Im(),l=Wm();be!==e||se!==a?(Bs=null,Ls=ua()+500,Rt(e,a)):xt=wt(e,a);e:do try{if(fe!==0&&te!==null){a=te;var s=da;a:switch(fe){case 1:fe=0,da=null,Ot(e,a,s,1);break;case 2:case 9:if(oc(s)){fe=0,da=null,ef(a);break}a=function(){fe!==2&&fe!==9||be!==e||(fe=7),Na(e)},s.then(a,a);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:oc(s)?(fe=0,da=null,ef(a)):(fe=0,da=null,Ot(e,a,s,7));break;case 5:var i=null;switch(te.tag){case 26:i=te.memoizedState;case 5:case 27:var o=te;if(i?Gf(i):o.stateNode.complete){fe=0,da=null;var d=o.sibling;if(d!==null)te=d;else{var _=o.return;_!==null?(te=_,Gs(_)):te=null}break a}}fe=0,da=null,Ot(e,a,s,5);break;case 6:fe=0,da=null,Ot(e,a,s,6);break;case 8:lr(),Me=6;break e;default:throw Error(r(462))}}PA();break}catch(M){Km(e,M)}while(!0);return Xa=wn=null,x.H=t,x.A=l,ce=n,te!==null?0:(be=null,se=0,ss(),Me)}function PA(){for(;te!==null&&!bp();)$m(te)}function $m(e){var a=qm(e.alternate,e,nn);e.memoizedProps=e.pendingProps,a===null?Gs(e):te=a}function ef(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=hm(n,a,a.pendingProps,a.type,void 0,se);break;case 11:a=hm(n,a,a.pendingProps,a.type.render,a.ref,se);break;case 5:yi(a);default:Em(n,a),a=te=Wo(a,nn),a=qm(n,a,nn)}e.memoizedProps=e.pendingProps,a===null?Gs(e):te=a}function Ot(e,a,n,t){Xa=wn=null,yi(a),_t=null,il=0;var l=a.return;try{if(UA(e,l,a,n,se)){Me=1,Js(e,ba(n,e.current)),te=null;return}}catch(s){if(l!==null)throw te=l,s;Me=1,Js(e,ba(n,e.current)),te=null;return}a.flags&32768?(ie||t===1?e=!0:xt||(se&536870912)!==0?e=!1:(jn=e=!0,(t===2||t===9||t===3||t===6)&&(t=ma.current,t!==null&&t.tag===13&&(t.flags|=16384))),af(a,e)):Gs(a)}function Gs(e){var a=e;do{if((a.flags&32768)!==0){af(a,jn);return}e=a.return;var n=YA(a.alternate,a,nn);if(n!==null){te=n;return}if(a=a.sibling,a!==null){te=a;return}te=a=e}while(a!==null);Me===0&&(Me=5)}function af(e,a){do{var n=QA(e.alternate,e);if(n!==null){n.flags&=32767,te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){te=e;return}te=e=n}while(e!==null);Me=6,te=null}function nf(e,a,n,t,l,s,i,o,d){e.cancelPendingCommit=null;do Ys();while(He!==0);if((ce&6)!==0)throw Error(r(327));if(a!==null){if(a===e.current)throw Error(r(177));if(s=a.lanes|a.childLanes,s|=Zu,xp(e,n,s,i,o,d),e===be&&(te=be=null,se=0),Dt=a,Sn=e,tn=n,ar=s,nr=l,km=t,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ev(Vl,function(){return rf(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||t){t=x.T,x.T=null,l=L.p,L.p=2,i=ce,ce|=4;try{VA(e,a,n)}finally{ce=i,L.p=l,x.T=t}}He=1,tf(),lf(),sf()}}function tf(){if(He===1){He=0;var e=Sn,a=Dt,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=x.T,x.T=null;var t=L.p;L.p=2;var l=ce;ce|=4;try{Bm(a,e);var s=hr,i=Vo(e.containerInfo),o=s.focusedElem,d=s.selectionRange;if(i!==o&&o&&o.ownerDocument&&Qo(o.ownerDocument.documentElement,o)){if(d!==null&&Qu(o)){var _=d.start,M=d.end;if(M===void 0&&(M=_),"selectionStart"in o)o.selectionStart=_,o.selectionEnd=Math.min(M,o.value.length);else{var R=o.ownerDocument||document,q=R&&R.defaultView||window;if(q.getSelection){var S=q.getSelection(),U=o.textContent.length,K=Math.min(d.start,U),he=d.end===void 0?K:Math.min(d.end,U);!S.extend&&K>he&&(i=he,he=K,K=i);var b=Yo(o,K),A=Yo(o,he);if(b&&A&&(S.rangeCount!==1||S.anchorNode!==b.node||S.anchorOffset!==b.offset||S.focusNode!==A.node||S.focusOffset!==A.offset)){var j=R.createRange();j.setStart(b.node,b.offset),S.removeAllRanges(),K>he?(S.addRange(j),S.extend(A.node,A.offset)):(j.setEnd(A.node,A.offset),S.addRange(j))}}}}for(R=[],S=o;S=S.parentNode;)S.nodeType===1&&R.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<R.length;o++){var D=R[o];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}$s=!!vr,hr=vr=null}finally{ce=l,L.p=t,x.T=n}}e.current=a,He=2}}function lf(){if(He===2){He=0;var e=Sn,a=Dt,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=x.T,x.T=null;var t=L.p;L.p=2;var l=ce;ce|=4;try{Rm(e,a.alternate,a)}finally{ce=l,L.p=t,x.T=n}}He=3}}function sf(){if(He===4||He===3){He=0,yp();var e=Sn,a=Dt,n=tn,t=km;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?He=5:(He=0,Dt=Sn=null,uf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(qn=null),qu(n),a=a.stateNode,ia&&typeof ia.onCommitFiberRoot=="function")try{ia.onCommitFiberRoot(Vt,a,void 0,(a.current.flags&128)===128)}catch{}if(t!==null){a=x.T,l=L.p,L.p=2,x.T=null;try{for(var s=e.onRecoverableError,i=0;i<t.length;i++){var o=t[i];s(o.value,{componentStack:o.stack})}}finally{x.T=a,L.p=l}}(tn&3)!==0&&Ys(),Na(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===tr?Sl++:(Sl=0,tr=e):Sl=0,El(0)}}function uf(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,sl(a)))}function Ys(){return tf(),lf(),sf(),rf()}function rf(){if(He!==5)return!1;var e=Sn,a=ar;ar=0;var n=qu(tn),t=x.T,l=L.p;try{L.p=32>n?32:n,x.T=null,n=nr,nr=null;var s=Sn,i=tn;if(He=0,Dt=Sn=null,tn=0,(ce&6)!==0)throw Error(r(331));var o=ce;if(ce|=4,Qm(s.current),Hm(s,s.current,i,n),ce=o,El(0,!1),ia&&typeof ia.onPostCommitFiberRoot=="function")try{ia.onPostCommitFiberRoot(Vt,s)}catch{}return!0}finally{L.p=l,x.T=t,uf(e,a)}}function of(e,a,n){a=ba(n,a),a=Ni(e.stateNode,a,2),e=hn(e,a,2),e!==null&&(kt(e,2),Na(e))}function de(e,a,n){if(e.tag===3)of(e,e,n);else for(;a!==null;){if(a.tag===3){of(a,e,n);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(qn===null||!qn.has(t))){e=ba(n,e),n=om(2),t=hn(a,n,2),t!==null&&(cm(n,t,a,e),kt(t,2),Na(t));break}}a=a.return}}function ur(e,a,n){var t=e.pingCache;if(t===null){t=e.pingCache=new XA;var l=new Set;t.set(a,l)}else l=t.get(a),l===void 0&&(l=new Set,t.set(a,l));l.has(n)||(Wi=!0,l.add(n),e=IA.bind(null,e,a,n),a.then(e,e))}function IA(e,a,n){var t=e.pingCache;t!==null&&t.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,be===e&&(se&n)===n&&(Me===4||Me===3&&(se&62914560)===se&&300>ua()-Ns?(ce&2)===0&&Rt(e,0):$i|=n,Ct===se&&(Ct=0)),Na(e)}function cf(e,a){a===0&&(a=no()),e=Yn(e,a),e!==null&&(kt(e,a),Na(e))}function WA(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),cf(e,n)}function $A(e,a){var n=0;switch(e.tag){case 31:case 13:var t=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(r(314))}t!==null&&t.delete(a),cf(e,n)}function ev(e,a){return bu(e,a)}var Qs=null,zt=null,ir=!1,Vs=!1,rr=!1,Tn=0;function Na(e){e!==zt&&e.next===null&&(zt===null?Qs=zt=e:zt=zt.next=e),Vs=!0,ir||(ir=!0,nv())}function El(e,a){if(!rr&&Vs){rr=!0;do for(var n=!1,t=Qs;t!==null;){if(e!==0){var l=t.pendingLanes;if(l===0)var s=0;else{var i=t.suspendedLanes,o=t.pingedLanes;s=(1<<31-ra(42|e)+1)-1,s&=l&~(i&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,pf(t,s))}else s=se,s=Zl(t,t===be?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(s&3)===0||wt(t,s)||(n=!0,pf(t,s));t=t.next}while(n);rr=!1}}function av(){mf()}function mf(){Vs=ir=!1;var e=0;Tn!==0&&fv()&&(e=Tn);for(var a=ua(),n=null,t=Qs;t!==null;){var l=t.next,s=ff(t,a);s===0?(t.next=null,n===null?Qs=l:n.next=l,l===null&&(zt=n)):(n=t,(e!==0||(s&3)!==0)&&(Vs=!0)),t=l}He!==0&&He!==5||El(e),Tn!==0&&(Tn=0)}function ff(e,a){for(var n=e.suspendedLanes,t=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var i=31-ra(s),o=1<<i,d=l[i];d===-1?((o&n)===0||(o&t)!==0)&&(l[i]=Mp(o,a)):d<=a&&(e.expiredLanes|=o),s&=~o}if(a=be,n=se,n=Zl(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,n===0||e===a&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&yu(t),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||wt(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(t!==null&&yu(t),qu(n)){case 2:case 8:n=eo;break;case 32:n=Vl;break;case 268435456:n=ao;break;default:n=Vl}return t=df.bind(null,e),n=bu(n,t),e.callbackPriority=a,e.callbackNode=n,a}return t!==null&&t!==null&&yu(t),e.callbackPriority=2,e.callbackNode=null,2}function df(e,a){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ys()&&e.callbackNode!==n)return null;var t=se;return t=Zl(e,e===be?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(Zm(e,t,a),ff(e,ua()),e.callbackNode!=null&&e.callbackNode===n?df.bind(null,e):null)}function pf(e,a){if(Ys())return null;Zm(e,a,!0)}function nv(){pv(function(){(ce&6)!==0?bu($r,av):mf()})}function or(){if(Tn===0){var e=bt;e===0&&(e=wl,wl<<=1,(wl&261888)===0&&(wl=256)),Tn=e}return Tn}function Af(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Il(""+e)}function vf(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function tv(e,a,n,t,l){if(a==="submit"&&n&&n.stateNode===l){var s=Af((l[Ie]||null).action),i=t.submitter;i&&(a=(a=i[Ie]||null)?Af(a.formAction):i.getAttribute("formAction"),a!==null&&(s=a,i=null));var o=new as("action","action",null,t,l);e.push({event:o,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Tn!==0){var d=i?vf(l,i):new FormData(l);xi(n,{pending:!0,data:d,method:l.method,action:s},null,d)}}else typeof s=="function"&&(o.preventDefault(),d=i?vf(l,i):new FormData(l),xi(n,{pending:!0,data:d,method:l.method,action:s},s,d))},currentTarget:l}]})}}for(var cr=0;cr<Xu.length;cr++){var mr=Xu[cr],lv=mr.toLowerCase(),sv=mr[0].toUpperCase()+mr.slice(1);Ja(lv,"on"+sv)}Ja(Xo,"onAnimationEnd"),Ja(Zo,"onAnimationIteration"),Ja(Fo,"onAnimationStart"),Ja("dblclick","onDoubleClick"),Ja("focusin","onFocus"),Ja("focusout","onBlur"),Ja(jA,"onTransitionRun"),Ja(_A,"onTransitionStart"),Ja(qA,"onTransitionCancel"),Ja(Ko,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function hf(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],l=t.event;t=t.listeners;e:{var s=void 0;if(a)for(var i=t.length-1;0<=i;i--){var o=t[i],d=o.instance,_=o.currentTarget;if(o=o.listener,d!==s&&l.isPropagationStopped())break e;s=o,l.currentTarget=_;try{s(l)}catch(M){ls(M)}l.currentTarget=null,s=d}else for(i=0;i<t.length;i++){if(o=t[i],d=o.instance,_=o.currentTarget,o=o.listener,d!==s&&l.isPropagationStopped())break e;s=o,l.currentTarget=_;try{s(l)}catch(M){ls(M)}l.currentTarget=null,s=d}}}}function le(e,a){var n=a[Su];n===void 0&&(n=a[Su]=new Set);var t=e+"__bubble";n.has(t)||(gf(a,e,2,!1),n.add(t))}function fr(e,a,n){var t=0;a&&(t|=4),gf(n,e,t,a)}var ws="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[ws]){e[ws]=!0,oo.forEach(function(n){n!=="selectionchange"&&(uv.has(n)||fr(n,!1,e),fr(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[ws]||(a[ws]=!0,fr("selectionchange",!1,a))}}function gf(e,a,n,t){switch(Zf(a)){case 2:var l=zv;break;case 8:l=Nv;break;default:l=Mr}n=l.bind(null,a,n,e),l=void 0,!Ou||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),t?l!==void 0?e.addEventListener(a,n,{capture:!0,passive:l}):e.addEventListener(a,n,!0):l!==void 0?e.addEventListener(a,n,{passive:l}):e.addEventListener(a,n,!1)}function pr(e,a,n,t,l){var s=t;if((a&1)===0&&(a&2)===0&&t!==null)e:for(;;){if(t===null)return;var i=t.tag;if(i===3||i===4){var o=t.stateNode.containerInfo;if(o===l)break;if(i===4)for(i=t.return;i!==null;){var d=i.tag;if((d===3||d===4)&&i.stateNode.containerInfo===l)return;i=i.return}for(;o!==null;){if(i=nt(o),i===null)return;if(d=i.tag,d===5||d===6||d===26||d===27){t=s=i;continue e}o=o.parentNode}}t=t.return}_o(function(){var _=s,M=Du(n),R=[];e:{var q=Po.get(e);if(q!==void 0){var S=as,U=e;switch(e){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":S=$p;break;case"focusin":U="focus",S=Bu;break;case"focusout":U="blur",S=Bu;break;case"beforeblur":case"afterblur":S=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Yp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=nA;break;case Xo:case Zo:case Fo:S=wp;break;case Ko:S=lA;break;case"scroll":case"scrollend":S=Hp;break;case"wheel":S=uA;break;case"copy":case"cut":case"paste":S=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Jo;break;case"toggle":case"beforetoggle":S=rA}var K=(a&4)!==0,he=!K&&(e==="scroll"||e==="scrollend"),b=K?q!==null?q+"Capture":null:q;K=[];for(var A=_,j;A!==null;){var D=A;if(j=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||j===null||b===null||(D=Ft(A,b),D!=null&&K.push(Jl(A,D,j))),he)break;A=A.return}0<K.length&&(q=new S(q,U,null,n,M),R.push({event:q,listeners:K}))}}if((a&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",q&&n!==Cu&&(U=n.relatedTarget||n.fromElement)&&(nt(U)||U[at]))break e;if((S||q)&&(q=M.window===M?M:(q=M.ownerDocument)?q.defaultView||q.parentWindow:window,S?(U=n.relatedTarget||n.toElement,S=_,U=U?nt(U):null,U!==null&&(he=v(U),K=U.tag,U!==he||K!==5&&K!==27&&K!==6)&&(U=null)):(S=null,U=_),S!==U)){if(K=Eo,D="onMouseLeave",b="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(K=Jo,D="onPointerLeave",b="onPointerEnter",A="pointer"),he=S==null?q:Zt(S),j=U==null?q:Zt(U),q=new K(D,A+"leave",S,n,M),q.target=he,q.relatedTarget=j,D=null,nt(M)===_&&(K=new K(b,A+"enter",U,n,M),K.target=j,K.relatedTarget=he,D=K),he=D,S&&U)a:{for(K=iv,b=S,A=U,j=0,D=b;D;D=K(D))j++;D=0;for(var X=A;X;X=K(X))D++;for(;0<j-D;)b=K(b),j--;for(;0<D-j;)A=K(A),D--;for(;j--;){if(b===A||A!==null&&b===A.alternate){K=b;break a}b=K(b),A=K(A)}K=null}else K=null;S!==null&&bf(R,q,S,K,!1),U!==null&&he!==null&&bf(R,he,U,K,!0)}}e:{if(q=_?Zt(_):window,S=q.nodeName&&q.nodeName.toLowerCase(),S==="select"||S==="input"&&q.type==="file")var re=No;else if(Oo(q))if(Lo)re=gA;else{re=vA;var w=AA}else S=q.nodeName,!S||S.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?_&&xu(_.elementType)&&(re=No):re=hA;if(re&&(re=re(e,_))){zo(R,re,n,M);break e}w&&w(e,q,_),e==="focusout"&&_&&q.type==="number"&&_.memoizedProps.value!=null&&Mu(q,"number",q.value)}switch(w=_?Zt(_):window,e){case"focusin":(Oo(w)||w.contentEditable==="true")&&(mt=w,Vu=_,nl=null);break;case"focusout":nl=Vu=mt=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,wo(R,n,M);break;case"selectionchange":if(yA)break;case"keydown":case"keyup":wo(R,n,M)}var ae;if(Hu)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else ct?Do(e,n)&&(ue="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ue="onCompositionStart");ue&&(Mo&&n.locale!=="ko"&&(ct||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ct&&(ae=qo()):(cn=M,zu="value"in cn?cn.value:cn.textContent,ct=!0)),w=ks(_,ue),0<w.length&&(ue=new To(ue,e,null,n,M),R.push({event:ue,listeners:w}),ae?ue.data=ae:(ae=Ro(n),ae!==null&&(ue.data=ae)))),(ae=cA?mA(e,n):fA(e,n))&&(ue=ks(_,"onBeforeInput"),0<ue.length&&(w=new To("onBeforeInput","beforeinput",null,n,M),R.push({event:w,listeners:ue}),w.data=ae)),tv(R,e,_,n,M)}hf(R,a)})}function Jl(e,a,n){return{instance:e,listener:a,currentTarget:n}}function ks(e,a){for(var n=a+"Capture",t=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=Ft(e,n),l!=null&&t.unshift(Jl(e,l,s)),l=Ft(e,a),l!=null&&t.push(Jl(e,l,s))),e.tag===3)return t;e=e.return}return[]}function iv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bf(e,a,n,t,l){for(var s=a._reactName,i=[];n!==null&&n!==t;){var o=n,d=o.alternate,_=o.stateNode;if(o=o.tag,d!==null&&d===t)break;o!==5&&o!==26&&o!==27||_===null||(d=_,l?(_=Ft(n,s),_!=null&&i.unshift(Jl(n,_,d))):l||(_=Ft(n,s),_!=null&&i.push(Jl(n,_,d)))),n=n.return}i.length!==0&&e.push({event:a,listeners:i})}var rv=/\r\n?/g,ov=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(rv,`
`).replace(ov,"")}function jf(e,a){return a=yf(a),yf(e)===a}function ve(e,a,n,t,l,s){switch(n){case"children":typeof t=="string"?a==="body"||a==="textarea"&&t===""||it(e,t):(typeof t=="number"||typeof t=="bigint")&&a!=="body"&&it(e,""+t);break;case"className":Kl(e,"class",t);break;case"tabIndex":Kl(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Kl(e,n,t);break;case"style":yo(e,t,s);break;case"data":if(a!=="object"){Kl(e,"data",t);break}case"src":case"href":if(t===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(n);break}t=Il(""+t),e.setAttribute(n,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(a!=="input"&&ve(e,a,"name",l.name,l,null),ve(e,a,"formEncType",l.formEncType,l,null),ve(e,a,"formMethod",l.formMethod,l,null),ve(e,a,"formTarget",l.formTarget,l,null)):(ve(e,a,"encType",l.encType,l,null),ve(e,a,"method",l.method,l,null),ve(e,a,"target",l.target,l,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(n);break}t=Il(""+t),e.setAttribute(n,t);break;case"onClick":t!=null&&(e.onclick=Qa);break;case"onScroll":t!=null&&le("scroll",e);break;case"onScrollEnd":t!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(r(61));if(n=t.__html,n!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}n=Il(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(n,""+t):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":t===!0?e.setAttribute(n,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(n,t):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(n,t):e.removeAttribute(n);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(n):e.setAttribute(n,t);break;case"popover":le("beforetoggle",e),le("toggle",e),Fl(e,"popover",t);break;case"xlinkActuate":Ya(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Ya(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Ya(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Ya(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Ya(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Ya(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Fl(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Bp.get(n)||n,Fl(e,n,t))}}function Ar(e,a,n,t,l,s){switch(n){case"style":yo(e,t,s);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(r(61));if(n=t.__html,n!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof t=="string"?it(e,t):(typeof t=="number"||typeof t=="bigint")&&it(e,""+t);break;case"onScroll":t!=null&&le("scroll",e);break;case"onScrollEnd":t!=null&&le("scrollend",e);break;case"onClick":t!=null&&(e.onclick=Qa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!co.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),a=n.slice(2,l?n.length-7:void 0),s=e[Ie]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(a,s,l),typeof t=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,t,l);break e}n in e?e[n]=t:t===!0?e.setAttribute(n,""):Fl(e,n,t)}}}function Xe(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var t=!1,l=!1,s;for(s in n)if(n.hasOwnProperty(s)){var i=n[s];if(i!=null)switch(s){case"src":t=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ve(e,a,s,i,n,null)}}l&&ve(e,a,"srcSet",n.srcSet,n,null),t&&ve(e,a,"src",n.src,n,null);return;case"input":le("invalid",e);var o=s=i=l=null,d=null,_=null;for(t in n)if(n.hasOwnProperty(t)){var M=n[t];if(M!=null)switch(t){case"name":l=M;break;case"type":i=M;break;case"checked":d=M;break;case"defaultChecked":_=M;break;case"value":s=M;break;case"defaultValue":o=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,a));break;default:ve(e,a,t,M,n,null)}}vo(e,s,o,d,_,i,l,!1);return;case"select":le("invalid",e),t=i=s=null;for(l in n)if(n.hasOwnProperty(l)&&(o=n[l],o!=null))switch(l){case"value":s=o;break;case"defaultValue":i=o;break;case"multiple":t=o;default:ve(e,a,l,o,n,null)}a=s,n=i,e.multiple=!!t,a!=null?ut(e,!!t,a,!1):n!=null&&ut(e,!!t,n,!0);return;case"textarea":le("invalid",e),s=l=t=null;for(i in n)if(n.hasOwnProperty(i)&&(o=n[i],o!=null))switch(i){case"value":t=o;break;case"defaultValue":l=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:ve(e,a,i,o,n,null)}go(e,t,l,s);return;case"option":for(d in n)if(n.hasOwnProperty(d)&&(t=n[d],t!=null))switch(d){case"selected":e.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:ve(e,a,d,t,n,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(t=0;t<Tl.length;t++)le(Tl[t],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(t=n[_],t!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ve(e,a,_,t,n,null)}return;default:if(xu(a)){for(M in n)n.hasOwnProperty(M)&&(t=n[M],t!==void 0&&Ar(e,a,M,t,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(t=n[o],t!=null&&ve(e,a,o,t,n,null))}function cv(e,a,n,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,i=null,o=null,d=null,_=null,M=null;for(S in n){var R=n[S];if(n.hasOwnProperty(S)&&R!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":d=R;default:t.hasOwnProperty(S)||ve(e,a,S,null,t,R)}}for(var q in t){var S=t[q];if(R=n[q],t.hasOwnProperty(q)&&(S!=null||R!=null))switch(q){case"type":s=S;break;case"name":l=S;break;case"checked":_=S;break;case"defaultChecked":M=S;break;case"value":i=S;break;case"defaultValue":o=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(137,a));break;default:S!==R&&ve(e,a,q,S,t,R)}}Ju(e,i,o,d,_,M,s,l);return;case"select":S=i=o=q=null;for(s in n)if(d=n[s],n.hasOwnProperty(s)&&d!=null)switch(s){case"value":break;case"multiple":S=d;default:t.hasOwnProperty(s)||ve(e,a,s,null,t,d)}for(l in t)if(s=t[l],d=n[l],t.hasOwnProperty(l)&&(s!=null||d!=null))switch(l){case"value":q=s;break;case"defaultValue":o=s;break;case"multiple":i=s;default:s!==d&&ve(e,a,l,s,t,d)}a=o,n=i,t=S,q!=null?ut(e,!!n,q,!1):!!t!=!!n&&(a!=null?ut(e,!!n,a,!0):ut(e,!!n,n?[]:"",!1));return;case"textarea":S=q=null;for(o in n)if(l=n[o],n.hasOwnProperty(o)&&l!=null&&!t.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ve(e,a,o,null,t,l)}for(i in t)if(l=t[i],s=n[i],t.hasOwnProperty(i)&&(l!=null||s!=null))switch(i){case"value":q=l;break;case"defaultValue":S=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==s&&ve(e,a,i,l,t,s)}ho(e,q,S);return;case"option":for(var U in n)if(q=n[U],n.hasOwnProperty(U)&&q!=null&&!t.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:ve(e,a,U,null,t,q)}for(d in t)if(q=t[d],S=n[d],t.hasOwnProperty(d)&&q!==S&&(q!=null||S!=null))switch(d){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:ve(e,a,d,q,t,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in n)q=n[K],n.hasOwnProperty(K)&&q!=null&&!t.hasOwnProperty(K)&&ve(e,a,K,null,t,q);for(_ in t)if(q=t[_],S=n[_],t.hasOwnProperty(_)&&q!==S&&(q!=null||S!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,a));break;default:ve(e,a,_,q,t,S)}return;default:if(xu(a)){for(var he in n)q=n[he],n.hasOwnProperty(he)&&q!==void 0&&!t.hasOwnProperty(he)&&Ar(e,a,he,void 0,t,q);for(M in t)q=t[M],S=n[M],!t.hasOwnProperty(M)||q===S||q===void 0&&S===void 0||Ar(e,a,M,q,t,S);return}}for(var b in n)q=n[b],n.hasOwnProperty(b)&&q!=null&&!t.hasOwnProperty(b)&&ve(e,a,b,null,t,q);for(R in t)q=t[R],S=n[R],!t.hasOwnProperty(R)||q===S||q==null&&S==null||ve(e,a,R,q,t,S)}function _f(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),t=0;t<n.length;t++){var l=n[t],s=l.transferSize,i=l.initiatorType,o=l.duration;if(s&&o&&_f(i)){for(i=0,o=l.responseEnd,t+=1;t<n.length;t++){var d=n[t],_=d.startTime;if(_>o)break;var M=d.transferSize,R=d.initiatorType;M&&_f(R)&&(d=d.responseEnd,i+=M*(d<o?1:(o-_)/(d-_)))}if(--t,a+=8*(s+i)/(l.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vr=null,hr=null;function Xs(e){return e.nodeType===9?e:e.ownerDocument}function qf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sf(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function gr(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var br=null;function fv(){var e=window.event;return e&&e.type==="popstate"?e===br?!1:(br=e,!0):(br=null,!1)}var Ef=typeof setTimeout=="function"?setTimeout:void 0,dv=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(e){return Tf.resolve(null).then(e).catch(Av)}:Ef;function Av(e){setTimeout(function(){throw e})}function Jn(e){return e==="head"}function Jf(e,a){var n=a,t=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(t===0){e.removeChild(l),Ut(a);return}t--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")t++;else if(n==="html")Ml(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ml(n);for(var s=n.firstChild;s;){var i=s.nextSibling,o=s.nodeName;s[Xt]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=i}}else n==="body"&&Ml(e.ownerDocument.body);n=l}while(n);Ut(a)}function Mf(e,a){var n=e;e=0;do{var t=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),t&&t.nodeType===8)if(n=t.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=t}while(n)}function yr(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yr(n),Eu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function vv(e,a,n,t){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[Xt])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Sa(e.nextSibling),e===null)break}return null}function hv(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Sa(e.nextSibling),e===null))return null;return e}function xf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Sa(e.nextSibling),e===null))return null;return e}function jr(e){return e.data==="$?"||e.data==="$~"}function _r(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function gv(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var t=function(){a(),n.removeEventListener("DOMContentLoaded",t)};n.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function Sa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var qr=null;function Cf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return Sa(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function Df(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function Rf(e,a,n){switch(a=Xs(n),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ml(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Eu(e)}var Ea=new Map,Of=new Set;function Zs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ln=L.d;L.d={f:bv,r:yv,D:jv,C:_v,L:qv,m:Sv,X:Tv,S:Ev,M:Jv};function bv(){var e=ln.f(),a=Us();return e||a}function yv(e){var a=tt(e);a!==null&&a.tag===5&&a.type==="form"?Kc(a):ln.r(e)}var Nt=typeof document>"u"?null:document;function zf(e,a,n){var t=Nt;if(t&&typeof a=="string"&&a){var l=ha(a);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Of.has(l)||(Of.add(l),e={rel:e,crossOrigin:n,href:a},t.querySelector(l)===null&&(a=t.createElement("link"),Xe(a,"link",e),Ge(a),t.head.appendChild(a)))}}function jv(e){ln.D(e),zf("dns-prefetch",e,null)}function _v(e,a){ln.C(e,a),zf("preconnect",e,a)}function qv(e,a,n){ln.L(e,a,n);var t=Nt;if(t&&e&&a){var l='link[rel="preload"][as="'+ha(a)+'"]';a==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+ha(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+ha(n.imageSizes)+'"]')):l+='[href="'+ha(e)+'"]';var s=l;switch(a){case"style":s=Lt(e);break;case"script":s=Bt(e)}Ea.has(s)||(e=E({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),Ea.set(s,e),t.querySelector(l)!==null||a==="style"&&t.querySelector(xl(s))||a==="script"&&t.querySelector(Cl(s))||(a=t.createElement("link"),Xe(a,"link",e),Ge(a),t.head.appendChild(a)))}}function Sv(e,a){ln.m(e,a);var n=Nt;if(n&&e){var t=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+ha(t)+'"][href="'+ha(e)+'"]',s=l;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Bt(e)}if(!Ea.has(s)&&(e=E({rel:"modulepreload",href:e},a),Ea.set(s,e),n.querySelector(l)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cl(s)))return}t=n.createElement("link"),Xe(t,"link",e),Ge(t),n.head.appendChild(t)}}}function Ev(e,a,n){ln.S(e,a,n);var t=Nt;if(t&&e){var l=lt(t).hoistableStyles,s=Lt(e);a=a||"default";var i=l.get(s);if(!i){var o={loading:0,preload:null};if(i=t.querySelector(xl(s)))o.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":a},n),(n=Ea.get(s))&&Sr(e,n);var d=i=t.createElement("link");Ge(d),Xe(d,"link",e),d._p=new Promise(function(_,M){d.onload=_,d.onerror=M}),d.addEventListener("load",function(){o.loading|=1}),d.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Fs(i,a,t)}i={type:"stylesheet",instance:i,count:1,state:o},l.set(s,i)}}}function Tv(e,a){ln.X(e,a);var n=Nt;if(n&&e){var t=lt(n).hoistableScripts,l=Bt(e),s=t.get(l);s||(s=n.querySelector(Cl(l)),s||(e=E({src:e,async:!0},a),(a=Ea.get(l))&&Er(e,a),s=n.createElement("script"),Ge(s),Xe(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},t.set(l,s))}}function Jv(e,a){ln.M(e,a);var n=Nt;if(n&&e){var t=lt(n).hoistableScripts,l=Bt(e),s=t.get(l);s||(s=n.querySelector(Cl(l)),s||(e=E({src:e,async:!0,type:"module"},a),(a=Ea.get(l))&&Er(e,a),s=n.createElement("script"),Ge(s),Xe(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},t.set(l,s))}}function Nf(e,a,n,t){var l=(l=ne.current)?Zs(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=Lt(n.href),n=lt(l).hoistableStyles,t=n.get(a),t||(t={type:"style",instance:null,count:0,state:null},n.set(a,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Lt(n.href);var s=lt(l).hoistableStyles,i=s.get(e);if(i||(l=l.ownerDocument||l,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,i),(s=l.querySelector(xl(e)))&&!s._p&&(i.instance=s,i.state.loading=5),Ea.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ea.set(e,n),s||Mv(l,e,n,i.state))),a&&t===null)throw Error(r(528,""));return i}if(a&&t!==null)throw Error(r(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Bt(n),n=lt(l).hoistableScripts,t=n.get(a),t||(t={type:"script",instance:null,count:0,state:null},n.set(a,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Lt(e){return'href="'+ha(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function Lf(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Mv(e,a,n,t){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?t.loading=1:(a=e.createElement("link"),t.preload=a,a.addEventListener("load",function(){return t.loading|=1}),a.addEventListener("error",function(){return t.loading|=2}),Xe(a,"link",n),Ge(a),e.head.appendChild(a))}function Bt(e){return'[src="'+ha(e)+'"]'}function Cl(e){return"script[async]"+e}function Bf(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var t=e.querySelector('style[data-href~="'+ha(n.href)+'"]');if(t)return a.instance=t,Ge(t),t;var l=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),Ge(t),Xe(t,"style",l),Fs(t,n.precedence,e),a.instance=t;case"stylesheet":l=Lt(n.href);var s=e.querySelector(xl(l));if(s)return a.state.loading|=4,a.instance=s,Ge(s),s;t=Lf(n),(l=Ea.get(l))&&Sr(t,l),s=(e.ownerDocument||e).createElement("link"),Ge(s);var i=s;return i._p=new Promise(function(o,d){i.onload=o,i.onerror=d}),Xe(s,"link",t),a.state.loading|=4,Fs(s,n.precedence,e),a.instance=s;case"script":return s=Bt(n.src),(l=e.querySelector(Cl(s)))?(a.instance=l,Ge(l),l):(t=n,(l=Ea.get(s))&&(t=E({},n),Er(t,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ge(l),Xe(l,"link",t),e.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(t=a.instance,a.state.loading|=4,Fs(t,n.precedence,e));return a.instance}function Fs(e,a,n){for(var t=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=t.length?t[t.length-1]:null,s=l,i=0;i<t.length;i++){var o=t[i];if(o.dataset.precedence===a)s=o;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function Sr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Er(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Ks=null;function Uf(e,a,n){if(Ks===null){var t=new Map,l=Ks=new Map;l.set(n,t)}else l=Ks,t=l.get(n),t||(t=new Map,l.set(n,t));if(t.has(e))return t;for(t.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var s=n[l];if(!(s[Xt]||s[Qe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var i=s.getAttribute(a)||"";i=e+i;var o=t.get(i);o?o.push(s):t.set(i,[s])}}return t}function Hf(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function xv(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Gf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Cv(e,a,n,t){if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Lt(t.href),s=a.querySelector(xl(l));if(s){a=s._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Ps.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=s,Ge(s);return}s=a.ownerDocument||a,t=Lf(t),(l=Ea.get(l))&&Sr(t,l),s=s.createElement("link"),Ge(s);var i=s;i._p=new Promise(function(o,d){i.onload=o,i.onerror=d}),Xe(s,"link",t),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ps.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var Tr=0;function Dv(e,a){return e.stylesheets&&e.count===0&&Ws(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var t=setTimeout(function(){if(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+a);0<e.imgBytes&&Tr===0&&(Tr=62500*mv());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Tr?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t),clearTimeout(l)}}:null}function Ps(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ws(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Is=null;function Ws(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Is=new Map,a.forEach(Rv,e),Is=null,Ps.call(e))}function Rv(e,a){if(!(a.state.loading&4)){var n=Is.get(e);if(n)var t=n.get(null);else{n=new Map,Is.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var i=l[s];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),t=i)}t&&n.set(null,t)}l=a.instance,i=l.getAttribute("data-precedence"),s=n.get(i)||t,s===t&&n.set(null,l),n.set(i,l),this.count++,t=Ps.bind(this),l.addEventListener("load",t),l.addEventListener("error",t),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),a.state.loading|=4}}var Dl={$$typeof:F,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Ov(e,a,n,t,l,s,i,o,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ju(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.hiddenUpdates=ju(null),this.identifierPrefix=t,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Yf(e,a,n,t,l,s,i,o,d,_,M,R){return e=new Ov(e,a,n,i,d,_,M,R,o),a=1,s===!0&&(a|=24),s=ca(3,null,null,a),e.current=s,s.stateNode=e,a=si(),a.refCount++,e.pooledCache=a,a.refCount++,s.memoizedState={element:t,isDehydrated:n,cache:a},oi(s),e}function Qf(e){return e?(e=pt,e):pt}function Vf(e,a,n,t,l,s){l=Qf(l),t.context===null?t.context=l:t.pendingContext=l,t=vn(a),t.payload={element:n},s=s===void 0?null:s,s!==null&&(t.callback=s),n=hn(e,t,a),n!==null&&(ta(n,e,a),ol(n,e,a))}function wf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function Jr(e,a){wf(e,a),(e=e.alternate)&&wf(e,a)}function kf(e){if(e.tag===13||e.tag===31){var a=Yn(e,67108864);a!==null&&ta(a,e,67108864),Jr(e,67108864)}}function Xf(e){if(e.tag===13||e.tag===31){var a=Aa();a=_u(a);var n=Yn(e,a);n!==null&&ta(n,e,a),Jr(e,a)}}var $s=!0;function zv(e,a,n,t){var l=x.T;x.T=null;var s=L.p;try{L.p=2,Mr(e,a,n,t)}finally{L.p=s,x.T=l}}function Nv(e,a,n,t){var l=x.T;x.T=null;var s=L.p;try{L.p=8,Mr(e,a,n,t)}finally{L.p=s,x.T=l}}function Mr(e,a,n,t){if($s){var l=xr(t);if(l===null)pr(e,a,t,eu,n),Ff(e,t);else if(Bv(l,e,a,n,t))t.stopPropagation();else if(Ff(e,t),a&4&&-1<Lv.indexOf(e)){for(;l!==null;){var s=tt(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var i=Ln(s.pendingLanes);if(i!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var d=1<<31-ra(i);o.entanglements[1]|=d,i&=~d}Na(s),(ce&6)===0&&(Ls=ua()+500,El(0))}}break;case 31:case 13:o=Yn(s,2),o!==null&&ta(o,s,2),Us(),Jr(s,2)}if(s=xr(t),s===null&&pr(e,a,t,eu,n),s===l)break;l=s}l!==null&&t.stopPropagation()}else pr(e,a,t,null,n)}}function xr(e){return e=Du(e),Cr(e)}var eu=null;function Cr(e){if(eu=null,e=nt(e),e!==null){var a=v(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=y(a),e!==null)return e;e=null}else if(n===31){if(e=T(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return eu=e,null}function Zf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jp()){case $r:return 2;case eo:return 8;case Vl:case _p:return 32;case ao:return 268435456;default:return 32}default:return 32}}var Dr=!1,Mn=null,xn=null,Cn=null,Rl=new Map,Ol=new Map,Dn=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ff(e,a){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Rl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(a.pointerId)}}function zl(e,a,n,t,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:n,eventSystemFlags:t,nativeEvent:s,targetContainers:[l]},a!==null&&(a=tt(a),a!==null&&kf(a)),e):(e.eventSystemFlags|=t,a=e.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),e)}function Bv(e,a,n,t,l){switch(a){case"focusin":return Mn=zl(Mn,e,a,n,t,l),!0;case"dragenter":return xn=zl(xn,e,a,n,t,l),!0;case"mouseover":return Cn=zl(Cn,e,a,n,t,l),!0;case"pointerover":var s=l.pointerId;return Rl.set(s,zl(Rl.get(s)||null,e,a,n,t,l)),!0;case"gotpointercapture":return s=l.pointerId,Ol.set(s,zl(Ol.get(s)||null,e,a,n,t,l)),!0}return!1}function Kf(e){var a=nt(e.target);if(a!==null){var n=v(a);if(n!==null){if(a=n.tag,a===13){if(a=y(n),a!==null){e.blockedOn=a,io(e.priority,function(){Xf(n)});return}}else if(a===31){if(a=T(n),a!==null){e.blockedOn=a,io(e.priority,function(){Xf(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function au(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=xr(e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);Cu=t,n.target.dispatchEvent(t),Cu=null}else return a=tt(n),a!==null&&kf(a),e.blockedOn=n,!1;a.shift()}return!0}function Pf(e,a,n){au(e)&&n.delete(a)}function Uv(){Dr=!1,Mn!==null&&au(Mn)&&(Mn=null),xn!==null&&au(xn)&&(xn=null),Cn!==null&&au(Cn)&&(Cn=null),Rl.forEach(Pf),Ol.forEach(Pf)}function nu(e,a){e.blockedOn===a&&(e.blockedOn=null,Dr||(Dr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Uv)))}var tu=null;function If(e){tu!==e&&(tu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){tu===e&&(tu=null);for(var a=0;a<e.length;a+=3){var n=e[a],t=e[a+1],l=e[a+2];if(typeof t!="function"){if(Cr(t||n)===null)continue;break}var s=tt(n);s!==null&&(e.splice(a,3),a-=3,xi(s,{pending:!0,data:l,method:n.method,action:t},t,l))}}))}function Ut(e){function a(d){return nu(d,e)}Mn!==null&&nu(Mn,e),xn!==null&&nu(xn,e),Cn!==null&&nu(Cn,e),Rl.forEach(a),Ol.forEach(a);for(var n=0;n<Dn.length;n++){var t=Dn[n];t.blockedOn===e&&(t.blockedOn=null)}for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)Kf(n),n.blockedOn===null&&Dn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(t=0;t<n.length;t+=3){var l=n[t],s=n[t+1],i=l[Ie]||null;if(typeof s=="function")i||If(n);else if(i){var o=null;if(s&&s.hasAttribute("formAction")){if(l=s,i=s[Ie]||null)o=i.formAction;else if(Cr(l)!==null)continue}else o=i.action;typeof o=="function"?n[t+1]=o:(n.splice(t,3),t-=3),If(n)}}}function Wf(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(i){return l=i})},focusReset:"manual",scroll:"manual"})}function a(){l!==null&&(l(),l=null),t||setTimeout(n,20)}function n(){if(!t&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){t=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),l!==null&&(l(),l=null)}}}function Rr(e){this._internalRoot=e}lu.prototype.render=Rr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var n=a.current,t=Aa();Vf(n,t,e,a,null,null)},lu.prototype.unmount=Rr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Vf(e.current,2,null,e,null,null),Us(),a[at]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var a=uo();e={blockedOn:null,target:e,priority:a};for(var n=0;n<Dn.length&&a!==0&&a<Dn[n].priority;n++);Dn.splice(n,0,e),n===0&&Kf(e)}};var $f=m.version;if($f!=="19.2.0")throw Error(r(527,$f,"19.2.0"));L.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(a),e=e!==null?J(e):null,e=e===null?null:e.stateNode,e};var Hv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{Vt=su.inject(Hv),ia=su}catch{}}return Ll.createRoot=function(e,a){if(!f(e))throw Error(r(299));var n=!1,t="",l=sm,s=um,i=im;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=Yf(e,1,!1,null,null,n,t,null,l,s,i,Wf),e[at]=a.current,dr(e),new Rr(a)},Ll.hydrateRoot=function(e,a,n){if(!f(e))throw Error(r(299));var t=!1,l="",s=sm,i=um,o=im,d=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(d=n.formState)),a=Yf(e,1,!0,a,n??null,t,l,d,s,i,o,Wf),a.context=Qf(null),n=a.current,t=Aa(),t=_u(t),l=vn(t),l.callback=null,hn(n,l,t),n=t,a.current.lanes=n,kt(a,n),Na(a),e[at]=a.current,dr(e),new lu(a)},Ll.version="19.2.0",Ll}var od;function Kv(){if(od)return Nr.exports;od=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(m){console.error(m)}}return u(),Nr.exports=Fv(),Nr.exports}var Pv=Kv();const Iv=bd(Pv);var cd="popstate";function Wv(u={}){function m(r,f){let{pathname:v,search:y,hash:T}=r.location;return Yr("",{pathname:v,search:y,hash:T},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(r,f){return typeof f=="string"?f:Ul(f)}return eh(m,c,null,u)}function Se(u,m){if(u===!1||u===null||typeof u>"u")throw new Error(m)}function Da(u,m){if(!u){typeof console<"u"&&console.warn(m);try{throw new Error(m)}catch{}}}function $v(){return Math.random().toString(36).substring(2,10)}function md(u,m){return{usr:u.state,key:u.key,idx:m}}function Yr(u,m,c=null,r){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof m=="string"?Gt(m):m,state:c,key:m&&m.key||r||$v()}}function Ul({pathname:u="/",search:m="",hash:c=""}){return m&&m!=="?"&&(u+=m.charAt(0)==="?"?m:"?"+m),c&&c!=="#"&&(u+=c.charAt(0)==="#"?c:"#"+c),u}function Gt(u){let m={};if(u){let c=u.indexOf("#");c>=0&&(m.hash=u.substring(c),u=u.substring(0,c));let r=u.indexOf("?");r>=0&&(m.search=u.substring(r),u=u.substring(0,r)),u&&(m.pathname=u)}return m}function eh(u,m,c,r={}){let{window:f=document.defaultView,v5Compat:v=!1}=r,y=f.history,T="POP",g=null,p=J();p==null&&(p=0,y.replaceState({...y.state,idx:p},""));function J(){return(y.state||{idx:null}).idx}function E(){T="POP";let V=J(),H=V==null?null:V-p;p=V,g&&g({action:T,location:Z.location,delta:H})}function N(V,H){T="PUSH";let G=Yr(Z.location,V,H);p=J()+1;let F=md(G,p),_e=Z.createHref(G);try{y.pushState(F,"",_e)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;f.location.assign(_e)}v&&g&&g({action:T,location:Z.location,delta:1})}function Q(V,H){T="REPLACE";let G=Yr(Z.location,V,H);p=J();let F=md(G,p),_e=Z.createHref(G);y.replaceState(F,"",_e),v&&g&&g({action:T,location:Z.location,delta:0})}function k(V){return ah(V)}let Z={get action(){return T},get location(){return u(f,y)},listen(V){if(g)throw new Error("A history only accepts one active listener");return f.addEventListener(cd,E),g=V,()=>{f.removeEventListener(cd,E),g=null}},createHref(V){return m(f,V)},createURL:k,encodeLocation(V){let H=k(V);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:N,replace:Q,go(V){return y.go(V)}};return Z}function ah(u,m=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Se(c,"No window.location.(origin|href) available to create URL");let r=typeof u=="string"?u:Ul(u);return r=r.replace(/ $/,"%20"),!m&&r.startsWith("//")&&(r=c+r),new URL(r,c)}function yd(u,m,c="/"){return nh(u,m,c,!1)}function nh(u,m,c,r){let f=typeof m=="string"?Gt(m):m,v=un(f.pathname||"/",c);if(v==null)return null;let y=jd(u);th(y);let T=null;for(let g=0;T==null&&g<y.length;++g){let p=ph(v);T=fh(y[g],p,r)}return T}function jd(u,m=[],c=[],r="",f=!1){let v=(y,T,g=f,p)=>{let J={relativePath:p===void 0?y.path||"":p,caseSensitive:y.caseSensitive===!0,childrenIndex:T,route:y};if(J.relativePath.startsWith("/")){if(!J.relativePath.startsWith(r)&&g)return;Se(J.relativePath.startsWith(r),`Absolute route path "${J.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),J.relativePath=J.relativePath.slice(r.length)}let E=sn([r,J.relativePath]),N=c.concat(J);y.children&&y.children.length>0&&(Se(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),jd(y.children,m,N,E,g)),!(y.path==null&&!y.index)&&m.push({path:E,score:ch(E,y.index),routesMeta:N})};return u.forEach((y,T)=>{if(y.path===""||!y.path?.includes("?"))v(y,T);else for(let g of _d(y.path))v(y,T,!0,g)}),m}function _d(u){let m=u.split("/");if(m.length===0)return[];let[c,...r]=m,f=c.endsWith("?"),v=c.replace(/\?$/,"");if(r.length===0)return f?[v,""]:[v];let y=_d(r.join("/")),T=[];return T.push(...y.map(g=>g===""?v:[v,g].join("/"))),f&&T.push(...y),T.map(g=>u.startsWith("/")&&g===""?"/":g)}function th(u){u.sort((m,c)=>m.score!==c.score?c.score-m.score:mh(m.routesMeta.map(r=>r.childrenIndex),c.routesMeta.map(r=>r.childrenIndex)))}var lh=/^:[\w-]+$/,sh=3,uh=2,ih=1,rh=10,oh=-2,fd=u=>u==="*";function ch(u,m){let c=u.split("/"),r=c.length;return c.some(fd)&&(r+=oh),m&&(r+=uh),c.filter(f=>!fd(f)).reduce((f,v)=>f+(lh.test(v)?sh:v===""?ih:rh),r)}function mh(u,m){return u.length===m.length&&u.slice(0,-1).every((r,f)=>r===m[f])?u[u.length-1]-m[m.length-1]:0}function fh(u,m,c=!1){let{routesMeta:r}=u,f={},v="/",y=[];for(let T=0;T<r.length;++T){let g=r[T],p=T===r.length-1,J=v==="/"?m:m.slice(v.length)||"/",E=ou({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},J),N=g.route;if(!E&&p&&c&&!r[r.length-1].route.index&&(E=ou({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},J)),!E)return null;Object.assign(f,E.params),y.push({params:f,pathname:sn([v,E.pathname]),pathnameBase:bh(sn([v,E.pathnameBase])),route:N}),E.pathnameBase!=="/"&&(v=sn([v,E.pathnameBase]))}return y}function ou(u,m){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[c,r]=dh(u.path,u.caseSensitive,u.end),f=m.match(c);if(!f)return null;let v=f[0],y=v.replace(/(.)\/+$/,"$1"),T=f.slice(1);return{params:r.reduce((p,{paramName:J,isOptional:E},N)=>{if(J==="*"){let k=T[N]||"";y=v.slice(0,v.length-k.length).replace(/(.)\/+$/,"$1")}const Q=T[N];return E&&!Q?p[J]=void 0:p[J]=(Q||"").replace(/%2F/g,"/"),p},{}),pathname:v,pathnameBase:y,pattern:u}}function dh(u,m=!1,c=!0){Da(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],f="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,T,g)=>(r.push({paramName:T,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),f+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":u!==""&&u!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,m?void 0:"i"),r]}function ph(u){try{return u.split("/").map(m=>decodeURIComponent(m).replace(/\//g,"%2F")).join("/")}catch(m){return Da(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`),u}}function un(u,m){if(m==="/")return u;if(!u.toLowerCase().startsWith(m.toLowerCase()))return null;let c=m.endsWith("/")?m.length-1:m.length,r=u.charAt(c);return r&&r!=="/"?null:u.slice(c)||"/"}var Ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vh=u=>Ah.test(u);function hh(u,m="/"){let{pathname:c,search:r="",hash:f=""}=typeof u=="string"?Gt(u):u,v;if(c)if(vh(c))v=c;else{if(c.includes("//")){let y=c;c=c.replace(/\/\/+/g,"/"),Da(!1,`Pathnames cannot have embedded double slashes - normalizing ${y} -> ${c}`)}c.startsWith("/")?v=dd(c.substring(1),"/"):v=dd(c,m)}else v=m;return{pathname:v,search:yh(r),hash:jh(f)}}function dd(u,m){let c=m.replace(/\/+$/,"").split("/");return u.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function Hr(u,m,c,r){return`Cannot include a '${u}' character in a manually specified \`to.${m}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gh(u){return u.filter((m,c)=>c===0||m.route.path&&m.route.path.length>0)}function qd(u){let m=gh(u);return m.map((c,r)=>r===m.length-1?c.pathname:c.pathnameBase)}function Sd(u,m,c,r=!1){let f;typeof u=="string"?f=Gt(u):(f={...u},Se(!f.pathname||!f.pathname.includes("?"),Hr("?","pathname","search",f)),Se(!f.pathname||!f.pathname.includes("#"),Hr("#","pathname","hash",f)),Se(!f.search||!f.search.includes("#"),Hr("#","search","hash",f)));let v=u===""||f.pathname==="",y=v?"/":f.pathname,T;if(y==null)T=c;else{let E=m.length-1;if(!r&&y.startsWith("..")){let N=y.split("/");for(;N[0]==="..";)N.shift(),E-=1;f.pathname=N.join("/")}T=E>=0?m[E]:"/"}let g=hh(f,T),p=y&&y!=="/"&&y.endsWith("/"),J=(v||y===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(p||J)&&(g.pathname+="/"),g}var sn=u=>u.join("/").replace(/\/\/+/g,"/"),bh=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),yh=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,jh=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function _h(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ed=["POST","PUT","PATCH","DELETE"];new Set(Ed);var qh=["GET",...Ed];new Set(qh);var Yt=C.createContext(null);Yt.displayName="DataRouter";var fu=C.createContext(null);fu.displayName="DataRouterState";C.createContext(!1);var Td=C.createContext({isTransitioning:!1});Td.displayName="ViewTransition";var Sh=C.createContext(new Map);Sh.displayName="Fetchers";var Eh=C.createContext(null);Eh.displayName="Await";var Ba=C.createContext(null);Ba.displayName="Navigation";var Hl=C.createContext(null);Hl.displayName="Location";var Ua=C.createContext({outlet:null,matches:[],isDataRoute:!1});Ua.displayName="Route";var kr=C.createContext(null);kr.displayName="RouteError";function Th(u,{relative:m}={}){Se(Gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:r}=C.useContext(Ba),{hash:f,pathname:v,search:y}=Yl(u,{relative:m}),T=v;return c!=="/"&&(T=v==="/"?c:sn([c,v])),r.createHref({pathname:T,search:y,hash:f})}function Gl(){return C.useContext(Hl)!=null}function et(){return Se(Gl(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Hl).location}var Jd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Md(u){C.useContext(Ba).static||C.useLayoutEffect(u)}function Jh(){let{isDataRoute:u}=C.useContext(Ua);return u?Yh():Mh()}function Mh(){Se(Gl(),"useNavigate() may be used only in the context of a <Router> component.");let u=C.useContext(Yt),{basename:m,navigator:c}=C.useContext(Ba),{matches:r}=C.useContext(Ua),{pathname:f}=et(),v=JSON.stringify(qd(r)),y=C.useRef(!1);return Md(()=>{y.current=!0}),C.useCallback((g,p={})=>{if(Da(y.current,Jd),!y.current)return;if(typeof g=="number"){c.go(g);return}let J=Sd(g,JSON.parse(v),f,p.relative==="path");u==null&&m!=="/"&&(J.pathname=J.pathname==="/"?m:sn([m,J.pathname])),(p.replace?c.replace:c.push)(J,p.state,p)},[m,c,v,f,u])}C.createContext(null);function xh(){let{matches:u}=C.useContext(Ua),m=u[u.length-1];return m?m.params:{}}function Yl(u,{relative:m}={}){let{matches:c}=C.useContext(Ua),{pathname:r}=et(),f=JSON.stringify(qd(c));return C.useMemo(()=>Sd(u,JSON.parse(f),r,m==="path"),[u,f,r,m])}function Ch(u,m){return xd(u,m)}function xd(u,m,c,r,f){Se(Gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:v}=C.useContext(Ba),{matches:y}=C.useContext(Ua),T=y[y.length-1],g=T?T.params:{},p=T?T.pathname:"/",J=T?T.pathnameBase:"/",E=T&&T.route;{let G=E&&E.path||"";Cd(p,!E||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let N=et(),Q;if(m){let G=typeof m=="string"?Gt(m):m;Se(J==="/"||G.pathname?.startsWith(J),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${J}" but pathname "${G.pathname}" was given in the \`location\` prop.`),Q=G}else Q=N;let k=Q.pathname||"/",Z=k;if(J!=="/"){let G=J.replace(/^\//,"").split("/");Z="/"+k.replace(/^\//,"").split("/").slice(G.length).join("/")}let V=yd(u,{pathname:Z});Da(E||V!=null,`No routes matched location "${Q.pathname}${Q.search}${Q.hash}" `),Da(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${Q.pathname}${Q.search}${Q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Nh(V&&V.map(G=>Object.assign({},G,{params:Object.assign({},g,G.params),pathname:sn([J,v.encodeLocation?v.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?J:sn([J,v.encodeLocation?v.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),y,c,r,f);return m&&H?C.createElement(Hl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Q},navigationType:"POP"}},H):H}function Dh(){let u=Gh(),m=_h(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),c=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:r},v={padding:"2px 4px",backgroundColor:r},y=null;return console.error("Error handled by React Router default ErrorBoundary:",u),y=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:v},"ErrorBoundary")," or"," ",C.createElement("code",{style:v},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},m),c?C.createElement("pre",{style:f},c):null,y)}var Rh=C.createElement(Dh,null),Oh=class extends C.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,m){return m.location!==u.location||m.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:m.error,location:m.location,revalidation:u.revalidation||m.revalidation}}componentDidCatch(u,m){this.props.onError?this.props.onError(u,m):console.error("React Router caught the following error during render",u)}render(){return this.state.error!==void 0?C.createElement(Ua.Provider,{value:this.props.routeContext},C.createElement(kr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zh({routeContext:u,match:m,children:c}){let r=C.useContext(Yt);return r&&r.static&&r.staticContext&&(m.route.errorElement||m.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=m.route.id),C.createElement(Ua.Provider,{value:u},c)}function Nh(u,m=[],c=null,r=null,f=null){if(u==null){if(!c)return null;if(c.errors)u=c.matches;else if(m.length===0&&!c.initialized&&c.matches.length>0)u=c.matches;else return null}let v=u,y=c?.errors;if(y!=null){let J=v.findIndex(E=>E.route.id&&y?.[E.route.id]!==void 0);Se(J>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),v=v.slice(0,Math.min(v.length,J+1))}let T=!1,g=-1;if(c)for(let J=0;J<v.length;J++){let E=v[J];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(g=J),E.route.id){let{loaderData:N,errors:Q}=c,k=E.route.loader&&!N.hasOwnProperty(E.route.id)&&(!Q||Q[E.route.id]===void 0);if(E.route.lazy||k){T=!0,g>=0?v=v.slice(0,g+1):v=[v[0]];break}}}let p=c&&r?(J,E)=>{r(J,{location:c.location,params:c.matches?.[0]?.params??{},errorInfo:E})}:void 0;return v.reduceRight((J,E,N)=>{let Q,k=!1,Z=null,V=null;c&&(Q=y&&E.route.id?y[E.route.id]:void 0,Z=E.route.errorElement||Rh,T&&(g<0&&N===0?(Cd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,V=null):g===N&&(k=!0,V=E.route.hydrateFallbackElement||null)));let H=m.concat(v.slice(0,N+1)),G=()=>{let F;return Q?F=Z:k?F=V:E.route.Component?F=C.createElement(E.route.Component,null):E.route.element?F=E.route.element:F=J,C.createElement(zh,{match:E,routeContext:{outlet:J,matches:H,isDataRoute:c!=null},children:F})};return c&&(E.route.ErrorBoundary||E.route.errorElement||N===0)?C.createElement(Oh,{location:c.location,revalidation:c.revalidation,component:Z,error:Q,children:G(),routeContext:{outlet:null,matches:H,isDataRoute:!0},onError:p}):G()},null)}function Xr(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lh(u){let m=C.useContext(Yt);return Se(m,Xr(u)),m}function Bh(u){let m=C.useContext(fu);return Se(m,Xr(u)),m}function Uh(u){let m=C.useContext(Ua);return Se(m,Xr(u)),m}function Zr(u){let m=Uh(u),c=m.matches[m.matches.length-1];return Se(c.route.id,`${u} can only be used on routes that contain a unique "id"`),c.route.id}function Hh(){return Zr("useRouteId")}function Gh(){let u=C.useContext(kr),m=Bh("useRouteError"),c=Zr("useRouteError");return u!==void 0?u:m.errors?.[c]}function Yh(){let{router:u}=Lh("useNavigate"),m=Zr("useNavigate"),c=C.useRef(!1);return Md(()=>{c.current=!0}),C.useCallback(async(f,v={})=>{Da(c.current,Jd),c.current&&(typeof f=="number"?u.navigate(f):await u.navigate(f,{fromRouteId:m,...v}))},[u,m])}var pd={};function Cd(u,m,c){!m&&!pd[u]&&(pd[u]=!0,Da(!1,c))}C.memo(Qh);function Qh({routes:u,future:m,state:c,unstable_onError:r}){return xd(u,void 0,c,r,m)}function Ht(u){Se(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vh({basename:u="/",children:m=null,location:c,navigationType:r="POP",navigator:f,static:v=!1}){Se(!Gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=u.replace(/^\/*/,"/"),T=C.useMemo(()=>({basename:y,navigator:f,static:v,future:{}}),[y,f,v]);typeof c=="string"&&(c=Gt(c));let{pathname:g="/",search:p="",hash:J="",state:E=null,key:N="default"}=c,Q=C.useMemo(()=>{let k=un(g,y);return k==null?null:{location:{pathname:k,search:p,hash:J,state:E,key:N},navigationType:r}},[y,g,p,J,E,N,r]);return Da(Q!=null,`<Router basename="${y}"> is not able to match the URL "${g}${p}${J}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:C.createElement(Ba.Provider,{value:T},C.createElement(Hl.Provider,{children:m,value:Q}))}function wh({children:u,location:m}){return Ch(Qr(u),m)}function Qr(u,m=[]){let c=[];return C.Children.forEach(u,(r,f)=>{if(!C.isValidElement(r))return;let v=[...m,f];if(r.type===C.Fragment){c.push.apply(c,Qr(r.props.children,v));return}Se(r.type===Ht,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Se(!r.props.index||!r.props.children,"An index route cannot have child routes.");let y={id:r.props.id||v.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(y.children=Qr(r.props.children,v)),c.push(y)}),c}var iu="get",ru="application/x-www-form-urlencoded";function du(u){return u!=null&&typeof u.tagName=="string"}function kh(u){return du(u)&&u.tagName.toLowerCase()==="button"}function Xh(u){return du(u)&&u.tagName.toLowerCase()==="form"}function Zh(u){return du(u)&&u.tagName.toLowerCase()==="input"}function Fh(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Kh(u,m){return u.button===0&&(!m||m==="_self")&&!Fh(u)}var uu=null;function Ph(){if(uu===null)try{new FormData(document.createElement("form"),0),uu=!1}catch{uu=!0}return uu}var Ih=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gr(u){return u!=null&&!Ih.has(u)?(Da(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ru}"`),null):u}function Wh(u,m){let c,r,f,v,y;if(Xh(u)){let T=u.getAttribute("action");r=T?un(T,m):null,c=u.getAttribute("method")||iu,f=Gr(u.getAttribute("enctype"))||ru,v=new FormData(u)}else if(kh(u)||Zh(u)&&(u.type==="submit"||u.type==="image")){let T=u.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=u.getAttribute("formaction")||T.getAttribute("action");if(r=g?un(g,m):null,c=u.getAttribute("formmethod")||T.getAttribute("method")||iu,f=Gr(u.getAttribute("formenctype"))||Gr(T.getAttribute("enctype"))||ru,v=new FormData(T,u),!Ph()){let{name:p,type:J,value:E}=u;if(J==="image"){let N=p?`${p}.`:"";v.append(`${N}x`,"0"),v.append(`${N}y`,"0")}else p&&v.append(p,E)}}else{if(du(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=iu,r=null,f=ru,y=u}return v&&f==="text/plain"&&(y=v,v=void 0),{action:r,method:c.toLowerCase(),encType:f,formData:v,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fr(u,m){if(u===!1||u===null||typeof u>"u")throw new Error(m)}function $h(u,m,c){let r=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return r.pathname==="/"?r.pathname=`_root.${c}`:m&&un(r.pathname,m)==="/"?r.pathname=`${m.replace(/\/$/,"")}/_root.${c}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${c}`,r}async function eg(u,m){if(u.id in m)return m[u.id];try{let c=await import(u.module);return m[u.id]=c,c}catch(c){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ag(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function ng(u,m,c){let r=await Promise.all(u.map(async f=>{let v=m.routes[f.route.id];if(v){let y=await eg(v,c);return y.links?y.links():[]}return[]}));return ug(r.flat(1).filter(ag).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Ad(u,m,c,r,f,v){let y=(g,p)=>c[p]?g.route.id!==c[p].route.id:!0,T=(g,p)=>c[p].pathname!==g.pathname||c[p].route.path?.endsWith("*")&&c[p].params["*"]!==g.params["*"];return v==="assets"?m.filter((g,p)=>y(g,p)||T(g,p)):v==="data"?m.filter((g,p)=>{let J=r.routes[g.route.id];if(!J||!J.hasLoader)return!1;if(y(g,p)||T(g,p))return!0;if(g.route.shouldRevalidate){let E=g.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function tg(u,m,{includeHydrateFallback:c}={}){return lg(u.map(r=>{let f=m.routes[r.route.id];if(!f)return[];let v=[f.module];return f.clientActionModule&&(v=v.concat(f.clientActionModule)),f.clientLoaderModule&&(v=v.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(v=v.concat(f.hydrateFallbackModule)),f.imports&&(v=v.concat(f.imports)),v}).flat(1))}function lg(u){return[...new Set(u)]}function sg(u){let m={},c=Object.keys(u).sort();for(let r of c)m[r]=u[r];return m}function ug(u,m){let c=new Set;return new Set(m),u.reduce((r,f)=>{let v=JSON.stringify(sg(f));return c.has(v)||(c.add(v),r.push({key:v,link:f})),r},[])}function Dd(){let u=C.useContext(Yt);return Fr(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function ig(){let u=C.useContext(fu);return Fr(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Kr=C.createContext(void 0);Kr.displayName="FrameworkContext";function Rd(){let u=C.useContext(Kr);return Fr(u,"You must render this element inside a <HydratedRouter> element"),u}function rg(u,m){let c=C.useContext(Kr),[r,f]=C.useState(!1),[v,y]=C.useState(!1),{onFocus:T,onBlur:g,onMouseEnter:p,onMouseLeave:J,onTouchStart:E}=m,N=C.useRef(null);C.useEffect(()=>{if(u==="render"&&y(!0),u==="viewport"){let Z=H=>{H.forEach(G=>{y(G.isIntersecting)})},V=new IntersectionObserver(Z,{threshold:.5});return N.current&&V.observe(N.current),()=>{V.disconnect()}}},[u]),C.useEffect(()=>{if(r){let Z=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(Z)}}},[r]);let Q=()=>{f(!0)},k=()=>{f(!1),y(!1)};return c?u!=="intent"?[v,N,{}]:[v,N,{onFocus:Bl(T,Q),onBlur:Bl(g,k),onMouseEnter:Bl(p,Q),onMouseLeave:Bl(J,k),onTouchStart:Bl(E,Q)}]:[!1,N,{}]}function Bl(u,m){return c=>{u&&u(c),c.defaultPrevented||m(c)}}function og({page:u,...m}){let{router:c}=Dd(),r=C.useMemo(()=>yd(c.routes,u,c.basename),[c.routes,u,c.basename]);return r?C.createElement(mg,{page:u,matches:r,...m}):null}function cg(u){let{manifest:m,routeModules:c}=Rd(),[r,f]=C.useState([]);return C.useEffect(()=>{let v=!1;return ng(u,m,c).then(y=>{v||f(y)}),()=>{v=!0}},[u,m,c]),r}function mg({page:u,matches:m,...c}){let r=et(),{manifest:f,routeModules:v}=Rd(),{basename:y}=Dd(),{loaderData:T,matches:g}=ig(),p=C.useMemo(()=>Ad(u,m,g,f,r,"data"),[u,m,g,f,r]),J=C.useMemo(()=>Ad(u,m,g,f,r,"assets"),[u,m,g,f,r]),E=C.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let k=new Set,Z=!1;if(m.forEach(H=>{let G=f.routes[H.route.id];!G||!G.hasLoader||(!p.some(F=>F.route.id===H.route.id)&&H.route.id in T&&v[H.route.id]?.shouldRevalidate||G.hasClientLoader?Z=!0:k.add(H.route.id))}),k.size===0)return[];let V=$h(u,y,"data");return Z&&k.size>0&&V.searchParams.set("_routes",m.filter(H=>k.has(H.route.id)).map(H=>H.route.id).join(",")),[V.pathname+V.search]},[y,T,r,f,p,m,u,v]),N=C.useMemo(()=>tg(J,f),[J,f]),Q=cg(J);return C.createElement(C.Fragment,null,E.map(k=>C.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...c})),N.map(k=>C.createElement("link",{key:k,rel:"modulepreload",href:k,...c})),Q.map(({key:k,link:Z})=>C.createElement("link",{key:k,nonce:c.nonce,...Z})))}function fg(...u){return m=>{u.forEach(c=>{typeof c=="function"?c(m):c!=null&&(c.current=m)})}}var Od=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Od&&(window.__reactRouterVersion="7.9.6")}catch{}function dg({basename:u,children:m,window:c}){let r=C.useRef();r.current==null&&(r.current=Wv({window:c,v5Compat:!0}));let f=r.current,[v,y]=C.useState({action:f.action,location:f.location}),T=C.useCallback(g=>{C.startTransition(()=>y(g))},[y]);return C.useLayoutEffect(()=>f.listen(T),[f,T]),C.createElement(Vh,{basename:u,children:m,location:v.location,navigationType:v.action,navigator:f})}var zd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ca=C.forwardRef(function({onClick:m,discover:c="render",prefetch:r="none",relative:f,reloadDocument:v,replace:y,state:T,target:g,to:p,preventScrollReset:J,viewTransition:E,...N},Q){let{basename:k}=C.useContext(Ba),Z=typeof p=="string"&&zd.test(p),V,H=!1;if(typeof p=="string"&&Z&&(V=p,Od))try{let Te=new URL(window.location.href),la=p.startsWith("//")?new URL(Te.protocol+p):new URL(p),sa=un(la.pathname,k);la.origin===Te.origin&&sa!=null?p=sa+la.search+la.hash:H=!0}catch{Da(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=Th(p,{relative:f}),[F,_e,Ee]=rg(r,N),Be=hg(p,{replace:y,state:T,target:g,preventScrollReset:J,relative:f,viewTransition:E});function ee(Te){m&&m(Te),Te.defaultPrevented||Be(Te)}let Ue=C.createElement("a",{...N,...Ee,href:V||G,onClick:H||v?m:ee,ref:fg(Q,_e),target:g,"data-discover":!Z&&c==="render"?"true":void 0});return F&&!Z?C.createElement(C.Fragment,null,Ue,C.createElement(og,{page:G})):Ue});Ca.displayName="Link";var pg=C.forwardRef(function({"aria-current":m="page",caseSensitive:c=!1,className:r="",end:f=!1,style:v,to:y,viewTransition:T,children:g,...p},J){let E=Yl(y,{relative:p.relative}),N=et(),Q=C.useContext(fu),{navigator:k,basename:Z}=C.useContext(Ba),V=Q!=null&&_g(E)&&T===!0,H=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,G=N.pathname,F=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;c||(G=G.toLowerCase(),F=F?F.toLowerCase():null,H=H.toLowerCase()),F&&Z&&(F=un(F,Z)||F);const _e=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Ee=G===H||!f&&G.startsWith(H)&&G.charAt(_e)==="/",Be=F!=null&&(F===H||!f&&F.startsWith(H)&&F.charAt(H.length)==="/"),ee={isActive:Ee,isPending:Be,isTransitioning:V},Ue=Ee?m:void 0,Te;typeof r=="function"?Te=r(ee):Te=[r,Ee?"active":null,Be?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let la=typeof v=="function"?v(ee):v;return C.createElement(Ca,{...p,"aria-current":Ue,className:Te,ref:J,style:la,to:y,viewTransition:T},typeof g=="function"?g(ee):g)});pg.displayName="NavLink";var Ag=C.forwardRef(({discover:u="render",fetcherKey:m,navigate:c,reloadDocument:r,replace:f,state:v,method:y=iu,action:T,onSubmit:g,relative:p,preventScrollReset:J,viewTransition:E,...N},Q)=>{let k=yg(),Z=jg(T,{relative:p}),V=y.toLowerCase()==="get"?"get":"post",H=typeof T=="string"&&zd.test(T),G=F=>{if(g&&g(F),F.defaultPrevented)return;F.preventDefault();let _e=F.nativeEvent.submitter,Ee=_e?.getAttribute("formmethod")||y;k(_e||F.currentTarget,{fetcherKey:m,method:Ee,navigate:c,replace:f,state:v,relative:p,preventScrollReset:J,viewTransition:E})};return C.createElement("form",{ref:Q,method:V,action:Z,onSubmit:r?g:G,...N,"data-discover":!H&&u==="render"?"true":void 0})});Ag.displayName="Form";function vg(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nd(u){let m=C.useContext(Yt);return Se(m,vg(u)),m}function hg(u,{target:m,replace:c,state:r,preventScrollReset:f,relative:v,viewTransition:y}={}){let T=Jh(),g=et(),p=Yl(u,{relative:v});return C.useCallback(J=>{if(Kh(J,m)){J.preventDefault();let E=c!==void 0?c:Ul(g)===Ul(p);T(u,{replace:E,state:r,preventScrollReset:f,relative:v,viewTransition:y})}},[g,T,p,c,r,m,u,f,v,y])}var gg=0,bg=()=>`__${String(++gg)}__`;function yg(){let{router:u}=Nd("useSubmit"),{basename:m}=C.useContext(Ba),c=Hh();return C.useCallback(async(r,f={})=>{let{action:v,method:y,encType:T,formData:g,body:p}=Wh(r,m);if(f.navigate===!1){let J=f.fetcherKey||bg();await u.fetch(J,c,f.action||v,{preventScrollReset:f.preventScrollReset,formData:g,body:p,formMethod:f.method||y,formEncType:f.encType||T,flushSync:f.flushSync})}else await u.navigate(f.action||v,{preventScrollReset:f.preventScrollReset,formData:g,body:p,formMethod:f.method||y,formEncType:f.encType||T,replace:f.replace,state:f.state,fromRouteId:c,flushSync:f.flushSync,viewTransition:f.viewTransition})},[u,m,c])}function jg(u,{relative:m}={}){let{basename:c}=C.useContext(Ba),r=C.useContext(Ua);Se(r,"useFormAction must be used inside a RouteContext");let[f]=r.matches.slice(-1),v={...Yl(u||".",{relative:m})},y=et();if(u==null){v.search=y.search;let T=new URLSearchParams(v.search),g=T.getAll("index");if(g.some(J=>J==="")){T.delete("index"),g.filter(E=>E).forEach(E=>T.append("index",E));let J=T.toString();v.search=J?`?${J}`:""}}return(!u||u===".")&&f.route.index&&(v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(v.pathname=v.pathname==="/"?c:sn([c,v.pathname])),Ul(v)}function _g(u,{relative:m}={}){let c=C.useContext(Td);Se(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nd("useViewTransitionState"),f=Yl(u,{relative:m});if(!c.isTransitioning)return!1;let v=un(c.currentLocation.pathname,r)||c.currentLocation.pathname,y=un(c.nextLocation.pathname,r)||c.nextLocation.pathname;return ou(f.pathname,y)!=null||ou(f.pathname,v)!=null}const qg="/assets/seraphin%20stemcorp-DIvSIPMN.png";var Ld={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vd=On.createContext&&On.createContext(Ld),Sg=["attr","size","title"];function Eg(u,m){if(u==null)return{};var c,r,f=Tg(u,m);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(u);for(r=0;r<v.length;r++)c=v[r],m.indexOf(c)===-1&&{}.propertyIsEnumerable.call(u,c)&&(f[c]=u[c])}return f}function Tg(u,m){if(u==null)return{};var c={};for(var r in u)if({}.hasOwnProperty.call(u,r)){if(m.indexOf(r)!==-1)continue;c[r]=u[r]}return c}function cu(){return cu=Object.assign?Object.assign.bind():function(u){for(var m=1;m<arguments.length;m++){var c=arguments[m];for(var r in c)({}).hasOwnProperty.call(c,r)&&(u[r]=c[r])}return u},cu.apply(null,arguments)}function hd(u,m){var c=Object.keys(u);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(u);m&&(r=r.filter(function(f){return Object.getOwnPropertyDescriptor(u,f).enumerable})),c.push.apply(c,r)}return c}function mu(u){for(var m=1;m<arguments.length;m++){var c=arguments[m]!=null?arguments[m]:{};m%2?hd(Object(c),!0).forEach(function(r){Jg(u,r,c[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(c)):hd(Object(c)).forEach(function(r){Object.defineProperty(u,r,Object.getOwnPropertyDescriptor(c,r))})}return u}function Jg(u,m,c){return(m=Mg(m))in u?Object.defineProperty(u,m,{value:c,enumerable:!0,configurable:!0,writable:!0}):u[m]=c,u}function Mg(u){var m=xg(u,"string");return typeof m=="symbol"?m:m+""}function xg(u,m){if(typeof u!="object"||!u)return u;var c=u[Symbol.toPrimitive];if(c!==void 0){var r=c.call(u,m);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(u)}function Bd(u){return u&&u.map((m,c)=>On.createElement(m.tag,mu({key:c},m.attr),Bd(m.child)))}function Ha(u){return m=>On.createElement(Cg,cu({attr:mu({},u.attr)},m),Bd(u.child))}function Cg(u){var m=c=>{var{attr:r,size:f,title:v}=u,y=Eg(u,Sg),T=f||c.size||"1em",g;return c.className&&(g=c.className),u.className&&(g=(g?g+" ":"")+u.className),On.createElement("svg",cu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,r,y,{className:g,style:mu(mu({color:u.color||c.color},c.style),u.style),height:T,width:T,xmlns:"http://www.w3.org/2000/svg"}),v&&On.createElement("title",null,v),u.children)};return vd!==void 0?On.createElement(vd.Consumer,null,c=>m(c)):m(Ld)}function Dg(u){return Ha({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(u)}function Rg(u){return Ha({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(u)}const xe={SINGLE:"Single",ALBUM:"Album",EP:"EP"},Og="/assets/01_PREPA%20(feat.%20Tim%C3%A9on3X)-a8wDCzOp.flac",zg="/assets/02_SDA-C_GlQinm.flac",Ng="/assets/03_DB%20COOPER-BTAMweSt.flac",Lg="/assets/04_R_D%20(feat.%20Teh%20Haar)-mi4c2MwL.flac",Bg="/assets/05_CORNUCOPIA-B7Mk1ee3.flac",Ug="/assets/06_MOUTON%20NOIR-CnQnWQMn.flac",Hg="/assets/07_ENERVE-CeNxYi2v.flac",Gg="/assets/08_OVER-BrwA_e00.flac",Yg="/assets/09_BEHEMOTH-BhxGD4gk.flac",Qg="/assets/10_JEUNE%20STAR-B-UfbiCw.flac",Vg="/assets/11_VRAI%20FRERE-J0Nhe2O_.flac",wg="/assets/12_180-BZlrkEKO.flac",kg="/assets/01_SERAPHIN-ByDL-_YT.flac",Xg="/assets/02_MONSTER-izLRH9Mu.flac",Zg="/assets/03_ZOMBIE-_2mfA8Og.flac",Fg="/assets/04_MAYBACH-CoUxC_hs.flac",Kg="/assets/05_21-BJS9s1FY.flac",Pg="/assets/06_TENET-D64gWDr8.flac",Ig="/assets/07_CROQUEUSE%20DE%20DIAMANTS-gzi8-Ot4.flac",Wg="/assets/08_APRES%20LA%20GUERRE-BDPVZp9e.flac",$g="/assets/09_MONTE%20DANS%20LE%20TRAIN-BcpQlfd5.flac",eb="/assets/10_BABEL-C9laFGYK.flac",ab="/assets/11_MEMENTO%20MORI-TkD0AED3.flac",nb="/assets/12_OUTRO-C3-3RtC1.flac",tb="/assets/10_PENITENCE-CIFfhg4g.flac",lb="/assets/11_LAISSE%20POUR%20MORT-CqD5e_SQ.flac",sb="/assets/12_MOURIR%20SOBRE-COEqDEaH.flac",ub="/assets/1_DYSTOPIE-PwKqz2P0.flac",ib="/assets/2_STEMCORP-CqzPxQjP.flac",rb="/assets/3_IL%20FAUT-CJUv864O.flac",ob="/assets/4_ANGE%20ET%20DEMON-CbfkJpta.flac",cb="/assets/5_PINNOCHIO-GMif8nmj.flac",mb="/assets/6_ARCTERYX-rqkWILf-.flac",fb="/assets/7_TOUT%20LES%20HEROS%20NE%20PORTENT%20PAS%20DE%20CAP%20(feat.%20Teh%20Haar)-DSmLnCZc.flac",db="/assets/8_LE%20MONDE%20DANS%20LA%20MAIN-kUx6p_u9.flac",pb="/assets/9_LES%20ZINCS%20DES%20AUTRES-9JWKH5xQ.flac",Ab="/assets/01_Victory%20lap-B2xfrhfM.flac",vb="/assets/02_Bodybag-SaOagGUJ.flac",hb="/assets/03_Rock%20band-CzbhNw-S.flac",gb="/assets/04_Twin%20Tower-DLznMU0_.flac",bb="/assets/05_Eczema-COY9rx3h.flac",yb="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",jb="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",_b="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",qb="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",Sb="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",Eb="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",Tb="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",Jb="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",Mb="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",xb="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",Cb="/assets/Phosphore%20(feat.%20Tim%C3%A9on3x)-DcG49lhp.flac",Db="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",Rb="/assets/cover%20archange-BD9Rqarf.jpg",Ob="/assets/seraphin_cover_2_3K-CjeaPCA-.jpg",zb="/assets/COver-BaloPrJc.jpg",Nb="/assets/COver-D0bMOEKa.png",Lb="/assets/Twin%20Activity%20Cover%2001-DRdslErG.jpg",Bb="/assets/BA_3K-CRDJ1r0c.jpg",Ub="/assets/cover%20cap-DiMlcy3G.jpg",Hb="/assets/DMGCOVERFINALE-bJqtRJRs.jpg",Gb="/assets/tim%C3%A9on%20x%20stem2-Txtx21ir.jpg",Yb="/assets/COVER_ELEPHANT_3k-DLoulpnc.jpg",Qb="/assets/chateau-Ccl_nhk3.jpg",Vb="/assets/MTL%20FLAG%203K-CNUcbikn.jpg",wb="/assets/MW3%203K-CfvZhGU9.jpg",kb="/assets/akira%20julien%20final-CCKtL8ny.jpg",Xb="/assets/coverPain-BL4CacNx.jpg",Zb="/assets/phosphore%20cover-BTKvH61i.jpg",Fb="/assets/rougir%20la%20banque%20cover-BzoIqyGj.jpg",Ud={spotify:"https://open.spotify.com/album/2y1XmHsXfi1NPrC0ca8OMU",appleMusic:"https://music.apple.com/fr/album/archange/1667409927",deezer:"https://www.deezer.com/fr/album/399794257",soundcloud:"https://soundcloud.com/user-146029035/sets/archange",youtube:"https://youtu.be/Fvn0u1ZH6U8?si=moZhxZAut3pGAueS"},Hd="2023-02-22",Kb={platforms:Ud,releaseDate:Hd},Pb=Object.freeze(Object.defineProperty({__proto__:null,default:Kb,platforms:Ud,releaseDate:Hd},Symbol.toStringTag,{value:"Module"})),Gd={spotify:"https://open.spotify.com/album/0BYf06Od0AwVaTklcRODKn",appleMusic:"https://music.apple.com/fr/album/seraphin/1880092058",deezer:"https://www.deezer.com/fr/album/925020141",soundcloud:"https://soundcloud.com/user-146029035/sets/seraphin",youtube:"https://youtu.be/8Axd88bb9v8?si=H-UsBJDqVT7eIYsJ"},Yd="2026-03-27",Ib={platforms:Gd,releaseDate:Yd},Wb=Object.freeze(Object.defineProperty({__proto__:null,default:Ib,platforms:Gd,releaseDate:Yd},Symbol.toStringTag,{value:"Module"})),Qd={spotify:"https://open.spotify.com/album/1QZLzHZ6lOy8qINnsrARnD",appleMusic:"https://music.apple.com/fr/album/1755878764",deezer:"https://www.deezer.com/fr/album/611660222",soundcloud:"https://soundcloud.com/user-146029035",youtube:"https://youtu.be/ly0ttXypX2c?si=cA7woaWH3ewrlKdH"},Vd="2024-08-23",$b={platforms:Qd,releaseDate:Vd},ey=Object.freeze(Object.defineProperty({__proto__:null,default:$b,platforms:Qd,releaseDate:Vd},Symbol.toStringTag,{value:"Module"})),wd={spotify:"https://open.spotify.com/album/2y3WDqJg3qWKtiotftYAtS?si=zmn4Pt3xQ4arVBVB6WZIIQ",appleMusic:"https://music.apple.com/us/album/twin-activity-ep/1827355924",deezer:"https://www.deezer.com/fr/album/789323701",soundcloud:"https://soundcloud.com/user-146029035/sets/twin-activity",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_k3sWmWKOzaWzsXyQKB-ijnK1vWc5LYeDc&si=rgYAhAzgmcg0YAsH"},kd="2025-08-15",ay={platforms:wd,releaseDate:kd},ny=Object.freeze(Object.defineProperty({__proto__:null,default:ay,platforms:wd,releaseDate:kd},Symbol.toStringTag,{value:"Module"})),Xd={spotify:"https://open.spotify.com/album/3DERMVUIEw0dSkV6gMSVuR?si=aQ-oO2qsTZGZup1Sv-pdUg",appleMusic:"https://music.apple.com/us/album/bag-single/1852734127",deezer:"https://link.deezer.com/s/32YkqrTHcPIfqFZxahz3D",soundcloud:"https://soundcloud.com/user-146029035/bag",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_me41BQvYBlGrqViip23VusE6EcrTfCjmc&si=YfX2Nihu7cQRlPW1"},Zd="2025-11-21",ty={platforms:Xd,releaseDate:Zd},ly=Object.freeze(Object.defineProperty({__proto__:null,default:ty,platforms:Xd,releaseDate:Zd},Symbol.toStringTag,{value:"Module"})),Fd={spotify:"https://open.spotify.com/album/2WMY2DtOhAt0G3yeScyyp3?si=le0wFEMNTR2n_Mqno8yfpA",appleMusic:"https://music.apple.com/us/album/cap-single/1796246637",deezer:"https://www.deezer.com/fr/album/710802841?host=0&deferredFl=1",soundcloud:"https://soundcloud.com/user-146029035/cap",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_kLGU00o1Pwp6676JozPIY4kYfFNwdzdq4&si=adIiIw58GY7K4OEN"},Kd="2025-02-10",sy={platforms:Fd,releaseDate:Kd},uy=Object.freeze(Object.defineProperty({__proto__:null,default:sy,platforms:Fd,releaseDate:Kd},Symbol.toStringTag,{value:"Module"})),Pd={spotify:"https://open.spotify.com/album/5X3V3X7TRbRZosjyJ32LvT?si=dj0kmTtnQ4mUbihk508fow",appleMusic:"https://music.apple.com/us/album/dieu-me-garde-single/1803018326",deezer:"https://www.deezer.com/fr/album/729564471?host=0&deferredFl=1",soundcloud:"https://soundcloud.com/user-146029035/dieu-me-garde",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_njEexI9PKu8KW5mcs0clATOKQei7WU3Ng"},Id="2025-04-11",iy={platforms:Pd,releaseDate:Id},ry=Object.freeze(Object.defineProperty({__proto__:null,default:iy,platforms:Pd,releaseDate:Id},Symbol.toStringTag,{value:"Module"})),Wd={spotify:"https://open.spotify.com/album/1LvEIoaevQYyYhcn03bh1l?si=upBFQhUxTSGu5UsV8Q0N4g",appleMusic:"https://music.apple.com/us/album/dor%C3%A9mi-feat-timeon3x-teh-haar-single/1795263601",deezer:"https://link.deezer.com/s/32YlsyiDJL7GcKWd03Boe",soundcloud:"https://soundcloud.com/user-146029035/doremi",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_kx9675R39RiMmVDt7KO8GNMPTJjhgGa0A&si=faA8qmGj2nnE1pnT"},$d="2021-06-25",oy={platforms:Wd,releaseDate:$d},cy=Object.freeze(Object.defineProperty({__proto__:null,default:oy,platforms:Wd,releaseDate:$d},Symbol.toStringTag,{value:"Module"})),ep={spotify:"https://open.spotify.com/album/76n5MQ7eZ4NxyMqPCQnJhn?si=kYcGz0qsSDe3AFKQmt84XA",appleMusic:"https://music.apple.com/us/album/elephant-single/1866011164",deezer:"https://link.deezer.com/s/32Yk1FRP9Tth2aXQmoMLk",soundcloud:"https://soundcloud.com/user-146029035/elephant",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_k9BnAHM_Wl5PcTIeLYf2jj4kSclqh78uQ&si=sqmHjT1qicDO9w1T"},ap="2026-01-16",my={platforms:ep,releaseDate:ap},fy=Object.freeze(Object.defineProperty({__proto__:null,default:my,platforms:ep,releaseDate:ap},Symbol.toStringTag,{value:"Module"})),np={spotify:"https://open.spotify.com/intl-fr/album/5T7DIm7sJqqlKyK4Ci6rs7?si=p09vcdfnRo-2CI_7TnGMhA",appleMusic:"https://music.apple.com/us/album/la-vie-de-chateau-single/1870098976",deezer:"https://link.deezer.com/s/32YjDp9sH4RfAfn2nXJvc",soundcloud:"https://soundcloud.com/user-146029035/la-vie-de-chateau",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_mUmA3XUbTr9haAF-ZHy2CBuTlbxBPHwlw"},tp="2026-01-03",dy={platforms:np,releaseDate:tp},py=Object.freeze(Object.defineProperty({__proto__:null,default:dy,platforms:np,releaseDate:tp},Symbol.toStringTag,{value:"Module"})),lp={spotify:"https://open.spotify.com/album/1Dk1q0Ndp1WaT77qudyale?si=_Me3ECxxTlyI0IcyHqDw_Q",appleMusic:"https://music.apple.com/us/song/mtl/1859474554",deezer:"https://www.deezer.com/fr/artist/112983672?host=0&deferredFl=1",soundcloud:"https://soundcloud.com/user-146029035/mtl",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_mmNALZ1hyVIemifquoskfdsMXPJ-GXA0M&si=J0TrUXkzHum0tzrH"},sp="2025-12-05",Ay={platforms:lp,releaseDate:sp},vy=Object.freeze(Object.defineProperty({__proto__:null,default:Ay,platforms:lp,releaseDate:sp},Symbol.toStringTag,{value:"Module"})),up={spotify:"https://open.spotify.com/album/2Odabakw7ezdmUM2vGoKqU?si=e5elwI_BQEWvBgeDUQawag",appleMusic:"https://music.apple.com/us/album/mw3-single/1859474552",deezer:"https://link.deezer.com/s/32YkaxqDaPffuG3qj7HNt",soundcloud:"https://soundcloud.com/user-146029035/mw3",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_k6mwGvJQRg6ykux5_8ZJ5CV3OBsmh2CvI&si=ofWq4es1cgdR7eju"},ip="2025-12-19",hy={platforms:up,releaseDate:ip},gy=Object.freeze(Object.defineProperty({__proto__:null,default:hy,platforms:up,releaseDate:ip},Symbol.toStringTag,{value:"Module"})),rp={spotify:"https://open.spotify.com/album/1xfLjWnzUKUKmvaG7PihNm?si=sc-sQmv2QiiBniQ8lC94ow",appleMusic:"https://music.apple.com/us/album/neon-single/1697732368",deezer:"https://link.deezer.com/s/32YkVXyeKzcZy3mhuHsD9",soundcloud:"https://soundcloud.com/user-146029035/neon",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_lDvvz_KoWENs1-vr3c9XkXFXqf3TuPiCw&si=Nw28-n-UESq_pp-X"},op="2023-08-05",by={platforms:rp,releaseDate:op},yy=Object.freeze(Object.defineProperty({__proto__:null,default:by,platforms:rp,releaseDate:op},Symbol.toStringTag,{value:"Module"})),cp={spotify:"https://open.spotify.com/album/5kl1ZGdkQFozEX4A2szMZm?si=PrFqNtrFR7K1h2iy779ccQ",appleMusic:"https://music.apple.com/us/album/pain-single/1727360366",deezer:"https://link.deezer.com/s/32YkCNDkXVf1bAv7VvpNt",soundcloud:"https://soundcloud.com/user-146029035/je-veux-du-pain-master-v1",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_l2TMlJHQFehCxZFL8YP31_plOQ1Lp6D7M&si=uVBXiCBXIJgpGO4G"},mp="2024-02-09",jy={platforms:cp,releaseDate:mp},_y=Object.freeze(Object.defineProperty({__proto__:null,default:jy,platforms:cp,releaseDate:mp},Symbol.toStringTag,{value:"Module"})),fp={spotify:"https://open.spotify.com/album/06lXkUTwQZNeuau3GtVqCP?si=hBGGgX2aT--eTBuBFlgLwA",appleMusic:"https://music.apple.com/us/album/phosphore-feat-timeon3x-single/1560593815",deezer:"https://link.deezer.com/s/32YlCW6vslUthH3tohzAJ",soundcloud:"https://soundcloud.com/user-146029035/phosphore-ft-timeon-pegoretti",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_mtAEo35-tc4nHTJMwNU8M1tu-K6afMQjA&si=NH1stItmAiEog2ly"},dp="2021-04-9",qy={platforms:fp,releaseDate:dp},Sy=Object.freeze(Object.defineProperty({__proto__:null,default:qy,platforms:fp,releaseDate:dp},Symbol.toStringTag,{value:"Module"})),pp={spotify:"https://open.spotify.com/album/0dOe3qClYmU58YSaL8jnxF?si=Uoy4Y2X5TIiVTWSEK3vt3Q",appleMusic:"https://music.apple.com/us/album/rougir-la-banque-feat-celll-single/1588996449",deezer:"https://link.deezer.com/s/32YlhtPL1NEH2pHDhiRYR",soundcloud:"https://soundcloud.com/user-146029035/rougir-la-banque-feat-celll",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_lDvvz_KoWENs1-vr3c9XkXFXqf3TuPiCw&si=Nw28-n-UESq_pp-X"},Ap="2021-10-15",Ey={platforms:pp,releaseDate:Ap},Ty=Object.freeze(Object.defineProperty({__proto__:null,default:Ey,platforms:pp,releaseDate:Ap},Symbol.toStringTag,{value:"Module"})),Jy=`Wow toujours si bon
Toujours si bon la money
Toujours si bon la money
Je veux les billets verts un peu de couleur sinon tout serait ternis
Toujours gamin je crois en mes rêves même si tout s'éternise
Wow toujours si bon
Toujours si bon la money
Toujours si bon la money
Je veux les billets verts un peu de couleur sinon tout serait ternis
Toujours gamin je crois en mes rêves même si tout s'éternise

Putain je grandis vite pourtant j'ai pas le temps de devenir vieux
Cette année j'ai eu le bac 10 ans avant c'était Ratchet sur la ps2
Faut pas perdre espoir je veux remettre de la lueur dans ses yeux
Je pourrais faire tellement mais je reste coincé dans mon pieu
En vrai je veux pas la villa
4 chambres 3 cuisines c'est quoi cette vie-là
Je veux compter le cash je compte même pas mes syllabes
L'année prochaine c'est prépa
Bye bye musique nan j'espère pas
Bientôt y'a tout le groupe qui se sépare
Tout se passe vitesse guépard

Wow toujours si bon
Toujours si bon la money
Toujours si bon la money
Je veux les billets verts un peu de couleur sinon tout serait ternis
Toujours gamin je crois en mes rêves même si tout s'éternise
Wow toujours si bon
Toujours si bon la money
Toujours si bon la money
Je veux les billets verts un peu de couleur sinon tout serait ternis
Toujours gamin je crois en mes rêves même si tout s'éternise

Je pourrais régler tous mes problèmes
Mais j'ai trop peur d'appuyer sur la gâchette
Là je suis grave triste je remets tout à demain
Je mets la faute sur le dos des autres je peux même pas compter sur moi-même
J'ai ce qu'il me porte c'est mes deux mains
Moi je veux l'argent avant tout le bonheur ça s'achète
Je me sens mourir un peu plus chaque jour c'est tes mots qui m'achèvent
Je m'accroche à mes rêves en attendant que le temps passe
Pourquoi se battre quand tout est voué à l'échec au pire nique sa race

Wow toujours si bon
Toujours si bon la money
Toujours si bon la money
Je veux les billets verts un peu de couleur sinon tout serait ternis
Toujours gamin je crois en mes rêves même si tout s'éternise
Wow toujours si bon
Toujours si bon la money
Toujours si bon la money
Je veux les billets verts un peu de couleur sinon tout serait ternis
Toujours gamin je crois en mes rêves même si tout s'éternise

Je suis toujours là
Pour ceux qui m'aiment
Ou pour moi
On sait ce qu'on sème
On sait ce qu'on a
On sait ce qu'on sème
On sait ce qu'on a`,My=`Sex drogue alcool toujours quelque chose dont l'on abuse
Je me dis que demain ira mieux mais demain je me détruis encore plus
Je me consume à petit feu et ça m'amuse
Je préfère deux personnes qui m'aiment que douze qui me sucent
Sex drogue alcool toujours quelque chose dont l'on abuse
Je me dis que demain ira mieux mais demain je me détruis encore plus
Je me consume à petit feu et ça m'amuse
Je préfère deux personnes qui m'aiment que douze qui me sucent

Autour mon coup ça sera la corde ou le Cubain
Il faut du cash de l'influence et dans le game des chérubins
Ils me demandent pourquoi je veux tout ça je réponds juste que c'est humain
Fuck avec tout le monde bas les couilles de ce qu'elle a fait quand je sers une main
Nique ta daronne
Sur le poignet il me faut la Garonne
Je veux faire du cash pas faire la Sorbonne
Sur les claquettes y'a la gorgone
Gorgonzola dans la pocket j'ai le blue cheese
Emile Zola j'écris des poèmes pour pas que l'on m'oublie
Et dans l'assiette y'a du Gucci
Je suis en roue libre
Qui c'est qui contrôle qui c'est qui roupille
Roupies et dollars
Je m'exporte de Bombay jusqu'à dallas
Je viens de coper du palace
Y'a pas de beau parleur juste des paroles salaces
Sex drogue moula moula flouze
Je préfère être aimé par deux que sucé par douze

Sex drogue alcool toujours quelque chose dont l'on abuse
Je me dis que demain ira mieux mais demain je me détruis encore plus
Je me consume à petit feu et ça m'amuse
Je préfère deux personnes qui m'aiment que douze qui me sucent
Sex drogue alcool toujours quelque chose dont l'on abuse
Je me dis que demain ira mieux mais demain je me détruis encore plus
Je me consume à petit feu et ça m'amuse
Je préfère deux personnes qui m'aiment que douze qui me sucent

Si mon cœur se brise je le remplacerai par celui de chrome
J'ai pas des grosses mains mais mes L tiennent tous dans ma paume
Grosse somme comme si j'avais croqué la pomme Steve Jobs
Je remonte je me noie pas quand je perds je flotte si je flop
La Lorraine m'a bien appris tous les jours je fais ma quiche
Faut que la tête soit mise à prix que finisse sur des fiches
Je me rappelle plus de mes propres paroles je crois j'ai des problèmes de mémoire
Je veux vivre dans la lumière mais je suis convaincu que je mourais dans le noir
Et si je merde et ce que tu viendras toujours me voir
Au moins le daron dit qu'il est fier quoi qu'il en soit
Je dis que croie en mes rêves je n'entends que des soupirs
Et ça me fait mal d'être impuissant quand je la vois souffrir
Sex drogue moula moula flouze
Je préfère être aimé par deux que sucé par douze

Sex drogue alcool toujours quelque chose dont l'on abuse
Je me dis que demain ira mieux mais demain je me détruis encore plus
Je me consume à petit feu et ça m'amuse
Je préfère deux personnes qui m'aiment que douze qui me sucent
Sex drogue alcool toujours quelque chose dont l'on abuse
Je me dis que demain ira mieux mais demain je me détruis encore plus
Je me consume à petit feu et ça m'amuse
Je préfère deux personnes qui m'aiment que douze qui me sucent`,xy=`Six AM je rentre petit matin la nuit est claire
Pas dormi mais la question se pose si je faire
Six AM je rentre la nuit est claire
Je me soucie pas du futur je sais que je vais le faire

Tout va bien si la moula est haute en couleur
On se jette dans l'inconnu saut de l'ange comme DB Cooper
Monte l'alcool bitch et baisse la douleur
Va falloir un van toute l'équipe rentre pas dans la Mini Cooper
Tout va bien si la moula est haute en couleur
On se jette dans l'inconnu saut de l'ange comme DB Cooper
Monte l'alcool bitch et baisse la douleur
Va falloir un van toute l'équipe rentre pas dans la Mini Cooper

Je retourne pas en arrière quand je suis lancé
On les remontera petit à petit on les jog
On les zouk en beauté
Je là pour les sommes
Fuck un problème et une bitch qui fait des mélodrama
Boy tu peux parler mais on t'écoutera pas
Jamais été animalier j'aime ni les chiens ni les rapaces
Cash faut qu'on amasse pas de schlass dans le dos j'ai la carapace
T'inquiète on monte même si ça veut pas me voir gagner
C'est d'en haut qu'on va les regarder caner
Succès c'est ça l'état d'esprit
On fait la tache en despi
Beaucoup a finir avant qu'on respire
Si l'argent est comptant alors je le suis aussi
Recompte le montant si j'ai pas confiance en lui
Je tiens pas tes veuch si tu vomis
Chef cuistot je cook up sans commis

Six AM je rentre petit matin la nuit est claire
Pas dormi mais la question se pose si je faire
Six AM je rentre la nuit est claire
Je me soucie pas du futur je sais que je vais le faire

Tout va bien si la moula est haute en couleur
On se jette dans l'inconnu saut de l'ange comme DB Cooper
Monte l'alcool bitch et baisse la douleur
Va falloir un van toute l'équipe rentre pas dans la Mini Cooper
Tout va bien si la moula est haute en couleur
On se jette dans l'inconnu saut de l'ange comme DB Cooper
Monte l'alcool bitch et baisse la douleur
Va falloir un van toute l'équipe rentre pas dans la Mini Cooper
Tout va bien si la moula est haute en couleur
On se jette dans l'inconnu saut de l'ange comme DB Cooper
Monte l'alcool bitch et baisse la douleur
Va falloir un van toute l'équipe rentre pas dans la Mini Cooper

Elle me trouve paresseux avec elle je me trouve carnassier
Comme mes ancêtres faut que j'investisse dans l'acier
Bien sûr que je connais les fait mais je vais tout nier
Y'a plus d'hésitation c'est décidé je vais tout plier
Faut que j'investisse dans un glock fuck tes années de jujitsu
Nouveau cash nouveau guap il me faut le cash de Picsou
Le gang est éclaté c'est pas pour ça que le gang se dissous
Je sais déjà qui va rester quand je ferais plus de dix sous
Dégaine de skinhead pas les pensées
Numéro 1 la quête dans quoi je me suis lancé
Ils font de la merde ça marche c'est insensé
Viser la terre pas que les Français
Qui croire maintenant les chiffres mentent frèro
Qui croire maintenant les chiffres rentrent frèro
Qui croire maintenant les chiffres mentent frèro
Qui croire maintenant les chiffres rentrent frèro`,Cy=`Je sais pas ce que ma mère a élevé mais en tout cas pas une bitch
Je m'endors avec un peu de chance demain soir je suis riche
Elle est loin l'époque où on faisait des SWAT sur Reach
Belle époque yeah simple époque yeah
Maintenant je rêve de la piscine avec la kitchenette
De la lambo avec la teinte 5% sur les fenêtres
Fuck une tradition je lui passe pas l'anneau
Je veux pas habiter au rez-de-chaussée parce que je suis parano

Dans le stud comme au département R&D
Dans ma tête faut faire du cash dans la tienne faut se faire aider
Elle et moi je rêve le plus du sac LV
Pour graille j'attends que la famille soit servie parce que je suis bien élevé
Dans le stud comme au département R&D
Dans ma tête faut faire du cash dans la tienne faut se faire aider
Elle et moi je rêve le plus du sac LV
Pour graille j'attends que la famille soit servie parce que je suis bien élevé

On ira peut-être pas loin mais au moins on ira quelque part
Zéro morale si tu les veux pas je reprends tes parts
Recommandé par 9/10 comme ton dentifrice
Je mourais noyé comme Osiris.
Je suis plus prêt que Cofidis
Dans la casa je veux une panic room
Je suis le père de mes sous baby-boom.
Dans la même pièce que le diable dans ses habits rouges
Et c'est des noms sales pas de baby boo

Pas de baby boo
J'ai du titane dans le skeleton
Et puis quand j'écoute courbe
Je m'évade réel je me sens comme Tron
Nouveau placement qu'est ce que t'en dis
Je flex tandis que ces bandits
Baroude pour des centimes
S'enlise dans des emmerdes sans vie
Th et stem c'est le duo gagnant
R&D pas comme vos ingénieurs allemands
Je suis le ceme qui mets le max dans les quart-temps.
Détruire le beat et tout graille on est partant
Mais j'émets mes distances avec ces mecs qui veulent se rapprocher
Je les renie pas mais les gardons se feront tous graille par le brochet

Dans le stud comme au département R&D
Dans ma tête faut faire du cash dans la tienne faut se faire aider
Elle et moi je rêve le plus du sac LV
Pour graille j'attends que la famille soit servie parce que je suis bien élevé
Dans le stud comme au département R&D
Dans ma tête faut faire du cash dans la tienne faut se faire aider
Elle et moi je rêve le plus du sac LV
Pour graille j'attends que la famille soit servie parce que je suis bien élevé`,Dy=`Qu'est ce que nous arrête surement pas la fermeture
Je glisse sur ses vergetures
Toujours dans la lune dans ma bulle un jour faudrait que j'atterrisse
Elle est sauvage elle est Artémis
Taille de guêpe baby vaut plus que tout l'essaim
On le fait dans tous les sens je vais pas te faire un dessin
Sous-vêtements match le vernis
Je peux pas être dernier
On est vernis
Pour l'éternité

Toujours un peu plus jamais rassasier même avec la Cornucopia
La vie qu'on mène folie furieuse
Toute ses bitch sortent de la photocopieuse
Toujours un peu plus jamais rassasier yeah son corps nu me charme
Nouvelle religion et tu sais que ta bitch est pieuse
On fait des envieux on fait des envieuses
Toujours un peu plus jamais rassasier même avec la Cornucopia
La vie qu'on mène folie furieuse
Toute ses bitch sortent de la photocopieuse
Toujours un peu plus jamais rassasier yeah son corps nu me charme
Nouvelle religion et tu sais que ta bitch est pieuse
On fait des envieux on fait des envieuses

Je veux finir dans le Fendi pas dans le déni
Immortel comme Kenny Kenny
On se nique sous Jack ou sous henny henny
Gros c'est un rêve
Zéro problème depuis longtemps
Six pieds sous terre
Je n'aurais pas fait mon temps
On est sur le radeau
Dériver c'est mieux que d'être à l'eau
Vv sur l'anneau
Je suis plein de truc mais pas un salaud
Tête dans les nuages frère je suis ailleurs
Je pense déjà aux mesures pour le tailleur

Toujours un peu plus jamais rassasier même avec la Cornucopia
La vie qu'on mène folie furieuse
Toute ses bitch sortent de la photocopieuse
Toujours un peu plus jamais rassasier yeah son corps nu me charme
Nouvelle religion et tu sais que ta bitch est pieuse
On fait des envieux on fait des envieuses
Toujours un peu plus jamais rassasier même avec la Cornucopia
La vie qu'on mène folie furieuse
Toute ses bitch sortent de la photocopieuse
Toujours un peu plus jamais rassasier yeah son corps nu me charme
Nouvelle religion et tu sais que ta bitch est pieuse
On fait des envieux on fait des envieuses`,Ry=`Toujours avec la meute pas de loup solitaire
Ils sont pas prêts ça y est on sort du terrier
On brille de nous-même comme des solitaires
2021 ça pop comme du Perrier
Tout le monde porte des costumes maintenant tout le monde porte des masques
0 limite frèro c'est pour tout que l'on se dépasse
Pas peur de la chute yeah l'équipe porte des casques
On pop puis on verra qui reste qui se casse
Je suis crevé jamais à bout
Objectif viser l'abus
Chez moi rien n'est tabou
Faut que le nom fasse du grabuge
Toujours groupé
Faut les groupies
On a le toupet
J'ai la tête qui tourne comme une toupie
Je crois pas aux fantômes mais je les veux dans le garage.
Où est le fun si y'a pas de barrage
Je vise plus d'eau que Poséidon.
Jamais j'arrête j'ai la tête dans le guidon

Mouton noir traîne avec mouton noir
Je chante ma vie comme les blousons noirs
Blason de maison je porte la famille sur l'étendard
Blason de maison je porte la famille sur l'étendard
Mouton noir traîne avec mouton noir
Je chante ma vie comme les blousons noirs
Blason de maison je porte la famille sur l'étendard
Blason de maison je porte la famille sur l'étendard

Faut le Burberry pattern carré pas le caïman
T'inquiète on trouvera quoi faire si la maille manque
Je parle pas de meuf mais j'aime les Italiennes et les Allemandes.
Très très fort c'est pas moi qui le dis c'est la propagande
Si tu parles mal ferme la boca
Spécimen rare formole dans le bocal
Spé math pour le bénef fait le total
Faut les vitres 5% celles qui sont opaques
Faut les gemmes diamants pas de l'opale
Moula moula j'avoue des fois j'ai que ce mot à la bouche
Vv vv faut plus d'eau que dans la douche
Je veux pas de gamin peine de mort pour ceux qui les attouchent
Célébrité cheatcode faut juste que je trouve la touche
Frèro ça vise pas le Renault Scénic
J'abandonne pas avant de devenir sénile
Petit coup de stress mais jamais de panique
Faut profiter de la vie gros avant que je la nique

Mouton noir traîne avec mouton noir
Je chante ma vie comme les blousons noirs
Blason de maison je porte la famille sur l'étendard
Blason de maison je porte la famille sur l'étendard
Mouton noir traîne avec mouton noir
Je chante ma vie comme les blousons noirs
Blason de maison je porte la famille sur l'étendard
Blason de maison je porte la famille sur l'étendard`,Oy=`Elle est énervée ce n'est pas bon signe
Ils aiment me détester c'est leur consigne
Je me suis démené à faire l'impossible
Et les vrais vont me remercier en le faisant aussi
Elle est énervée ce n'est pas bon signe
Ils aiment me détester c'est leur consigne
Je me suis démené à faire l'impossible
Et les vrais vont me remercier en le faisant aussi

Faire du cash c'est le mantra
Ça rêve des contacts et des contrats
Je voudrais avancer mais les reufs mon ancrage
Je vais à la vitesse du plus lent
Si y'en a derrière et bien je ralentis
J'ai regardé le temps qui passe trop longtemps resté immobile
J'ai la vision tunnel
J'ai l'impression de voir déjà la mort au bout du chemin
J'ai l'impression de renaître chaque minute c'est demain
Y'a la team qui graille yeah ils reprennent des couleurs
Sommeil on connait pas on fait le bail à toute heure

Elle est énervée ce n'est pas bon signe
Ils aiment me détester c'est leur consigne
Je me suis démené à faire l'impossible
Et les vrais vont me remercier en le faisant aussi
Elle est énervée ce n'est pas bon signe
Ils aiment me détester c'est leur consigne
Je me suis démené à faire l'impossible
Et les vrais vont me remercier en le faisant aussi

Quand c'est pour aider c'est silencieux
Quand c'est pour profiter ça jacasse
Grosse moula je suis si envieux
Prêts a tout comme dans Jackass
En vrai je les comprends quand y'a pas de rêve y'a pas de désillusion
J'ai choisi mon camp et j'y reste jusqu'à ma destitution
Y'a pas de compte de fée pas de Cendrillon
Ils veulent pas me voir briller prêt a retourner tuer mon embryon
Si ils veulent ma mort les corbeaux chanteront
Requiem aux son des v12 l'Aventador sera ma tombe

Elle est énervée ce n'est pas bon signe
Ils aiment me détester c'est leur consigne
Je me suis démené à faire l'impossible
Et les vrais vont me remercier en le faisant aussi
Elle est énervée ce n'est pas bon signe
Ils aiment me détester c'est leur consigne
Je me suis démené à faire l'impossible
Et les vrais vont me remercier en le faisant aussi`,zy="",Ny=`Je veux le pain toutes ces pétasses veulent du bifteck
Ça cherche des gros lick des lick de taille Vteck
Nouvelle casa nouvelle ville je passe les vitesses
Moula béhémoth c'est la vie de rêve
Je veux le pain toutes ces pétasses veulent du bifteck
Ça cherche des gros lick des lick de taille Vteck
Nouvelle casa nouvelle ville je passe les vitesses
Moula béhémoth c'est la vie de rêve

Nouveau drip
Nouveau drip
Nouveau riche
Nouveau riche
Nouvelle ville
Nouvelle ville
Nouveau drip
Nouveau drip
Nouvelle clique
Money counter bip plus qu'un Geiger a Tchernobyl
Je veux la Bugatti quelques millions pour une Batmobile
Tue la prod prémédité mais y'a pas de motif
Je sais pas ce que j'attends tout le temps à regarder mes notifs
J'ai le drip d'un geyser
Quelques fans je me sens aimé comme Césaire
Je suis détruit j'ai l'impression d'être dans les airs
Coupe moi la queue je repousserais comme un lézard.
Et fuck le bifteck il serait temps de poser les armes

Je veux le pain toutes ces pétasses veulent du bifteck
Ça cherche des gros lick des lick de taille Vteck
Nouvelle casa nouvelle ville je passe les vitesses
Moula béhémoth c'est la vie de rêve
Je veux le pain toutes ces pétasses veulent du bifteck
Ça cherche des gros lick des lick de taille Vteck
Nouvelle casa nouvelle ville je passe les vitesses
Moula béhémoth c'est la vie de rêve

Et sous le masque
Gros je suis faceless
On vit mal
On vit reckless
Quand tu bouges y'a que des L
Cavalier
Et le guap reste dans la pocket
Il est casanier
Il faut que je relâche la pression
Il faut que je pop pop pop pop
J'enchaîne les sessions
Que je sois au top top top top
Ils veulent la guerre je leur donne la paix
J'ai donné trop de temps à des gens qui n'en valent pas la peine
Megalophobie je connais pas il faut tout en XL
Tout est carré je vois tout en pixel
Si la prod c'est Rihanna gros je suis Chris Brown
Si la prod c'est Rihanna gros je suis Chris Brown

Je veux le pain toutes ces pétasses veulent du bifteck
Ça cherche des gros lick des lick de taille Vteck
Nouvelle casa nouvelle ville je passe les vitesses
Moula béhémoth c'est la vie de rêve
Je veux le pain toutes ces pétasses veulent du bifteck
Ça cherche des gros lick des lick de taille Vteck
Nouvelle casa nouvelle ville je passe les vitesses
Moula béhémoth c'est la vie de rêve`,Ly=`Faut le biff je chante à me faire des angines
Toujours au Ritz que ça devienne la cantine
Tout seul il fait des petits le cash est androgyne
Mes rêves sont sélectifs passe la prod à la mandoline
À toute heure on va les fumer
Tard la nuit quand je parle sort de la fumée
Et fuck un poulet il faut le foie gras et le cash donc on va les plumer
J'ai des connexions qui se sont brûlées
Le cash est de couleur acidulée
Parle bien ou parle pas
J'avoue merci maman et papa
Traitre je les vois en 4 k
Je suis dans cette bitch comme Kafka
Je suis dans cette bitch comme Ovide
Faut la fame du covid
Argent sexe et bolide
Roi de la colline
Mental est solide
Mentale est solide mais je doute
Enchaîne les bouteilles
Mentale est solide mais je doute
Enchaîne les bouteilles

Jeune star de demain
Braquage haut les mains haut les mains
Faut les gains avec tous mes gars
On fait tout alpha oméga faut les sous
Tes potes je connais pas pourtant je connais tout
Pourtant je suis déçu je suis déçu
De tous ces faux qui te suce
Coup bas dans le dos et les rats
Peste et choléra toi t'es tolérable
Et t'as devant toi devant toi devant toi
Jeune star de demain
Braquage haut les mains haut les mains
Faut les gains avec tous mes gars
On fait tout alpha oméga faut les sous
Tes potes je connais pas pourtant je connais tout
Pourtant je suis déçu je suis déçu
De tous ces faux qui te suce
Coup bas dans le dos et les rats
Peste et choléra toi t'es tolérable
Et t'as devant toi devant toi devant toi

On fait le nécessaire
On s'est fait des cernes
Ils veulent me couper les ailes
Je veux monter plus haut que la tour Eiffel
Les faux je les vois clairement
Beaucoup de mots sur des feuilles
Des reuf devenu serpents
Des gens devenus cercueil
REP mamy REP mon oncle
Je gratte tous les jours j'ai de la terre sous les ongles
Fait gaffe à ton cash fait gaffe à ton bleu
Ça va vite de s'éteindre je fais gaffe à mon feu
Je la prends des deux côtés comme un trombone
Tu sais que dieu est trop vu que la bitch est trop bonne
Je peux faire confiance à personne donc je garde un condom
Tu sais qu'on y va à fond tu sais qu'on donne
Il me faut un kingdom
Déso mon foi ça m'étonnerait pas que je meurt d'une cirrhose
Pourquoi j'ai cru que la vie était si rose
Déso mon gars il faut que je ball vraiment vraiment vraiment fort comme D. Rose

Jeune star de demain
Braquage haut les mains haut les mains
Faut les gains avec tous mes gars
On fait tout alpha oméga faut les sous
Tes potes je connais pas pourtant je connais tout
Pourtant je suis déçu je suis déçu
De tous ces faux qui te suce
Coup bas dans le dos et les rats
Peste et choléra toi t'es tolérable
Et t'as devant toi devant toi devant toi
Jeune star de demain
Braquage haut les mains haut les mains
Faut les gains avec tous mes gars
On fait tout alpha oméga faut les sous
Tes potes je connais pas pourtant je connais tout
Pourtant je suis déçu je suis déçu
De tous ces faux qui te suce
Coup bas dans le dos et les rats
Peste et choléra toi t'es tolérable
Et t'as devant toi devant toi devant toi`,By=`C'est sur les doigts d'une main qu'on compte nos vrais frères
Leurs succès c'est tout ce que j'espère
Vrai frère vrai frère vrai frère vrai frère yeah
Vrai frère vrai frère vrai frère vrai frère yeah
C'est sur les doigts d'une main qu'on compte nos vrais frères
Leurs succès c'est tout ce que j'espère
Vrai frère vrai frère vrai frère vrai frère yeah
Vrai frère vrai frère vrai frère vrai frère yeah

Faux ami désert
Vrai frère vrai sœur
Pas de chien je suis pas dresseur
Tête dans le cul
Réveille 13h
Travaille paie nan je compte plus mes heures
Fuck le moi d'avant j'ai des squelettes dans le dressing
Renouveau ménage de Printemps mental sort du pressing
Jamais on hasta la vista rien que pour une kichta
On va pas se kiffer si t'es là que pour ce qu'il y a dans ma visa
Vv vs nan ici on a pas de défaut
Pas de VS on fait pas de bœuf
Faut les briques pas de Lego

Vrai frère toujours à mes côtés
Vie de rêve on va s'y frotter

C'est sur les doigts d'une main qu'on compte nos vrais frères
Leurs succès c'est tout ce que j'espère
Vrai frère vrai frère vrai frère vrai frère yeah
Vrai frère vrai frère vrai frère vrai frère yeah
C'est sur les doigts d'une main qu'on compte nos vrais frères
Leurs succès c'est tout ce que j'espère
Vrai frère vrai frère vrai frère vrai frère yeah
Vrai frère vrai frère vrai frère vrai frère yeah

Tequila sel citron trinque
C'est la boisson des reufs tu connais les bails
Souder gros on se soutient
Y'a les wagons qui suivent si y'a le train qui déraille
J'écoute ceux qui stream rien à foutre des tollés
Prêts a tout nan t'inquiète j'irais pas jusqu'à m'immoler
Moula fait pas la demi-mole on reste frais on reste vrai on respecte
Oula vrai frère parle cash parle en espèce
Parle mal zéro réduit le bruit Dolby
Call me j'arrive on se capte easy Shining Danny
Fuck un Grammy le biff change pas la liste d'amis

Vrai frère toujours à mes côtés
Vie de rêve on va s'y frotter

C'est sur les doigts d'une main qu'on compte nos vrais frères
Leurs succès c'est tout ce que j'espère
Vrai frère vrai frère vrai frère vrai frère yeah
Vrai frère vrai frère vrai frère vrai frère yeah
C'est sur les doigts d'une main qu'on compte nos vrais frères
Leurs succès c'est tout ce que j'espère
Vrai frère vrai frère vrai frère vrai frère yeah
Vrai frère vrai frère vrai frère vrai frère yeah`,Uy=`Stem plus le même 180
Faut vivre sans un besoin
La vie de rêve elle est loin
Prêts à changer du jour au lendemain
Stem plus le même 180
Faut vivre sans un besoin
La vie de rêve elle est loin
Prêts à changer du jour au lendemain

Y'a plus de secret l'homme est mauvais
Pas là pour aider y'a plus rien à sauver
Main du diable gaucher
Je veux vla les cheveux comme un cocher
Topline adlibs je maîtrise
Je regarde les autres je m'attriste
Je veux finesse le game comme Keanu Reeves et Matrix
Ferme les yeux prends le cash sous la table
Pas rien dans ce monde d'être un grain de sable
Y'en a plus beaucoup dans le sablier
Pas de bœuf fuck un billot
Prêt a tellement pour un billet
H24 précision guillaume

Stem plus le même 180
Faut vivre sans un besoin
La vie de rêve elle est loin
Prêts à changer du jour au lendemain
Stem plus le même 180
Faut vivre sans un besoin
La vie de rêve elle est loin
Prêts à changer du jour au lendemain

Merci Niels toujours là depuis la maternelle
Merci pour le mic et le mix merci le paternel
Le son c'est pas de l'obsession mais de l'amour fraternel
Faire du cash c'est bien mais marquer l'histoire c'est éternel
Plus jeune je voulais faire du plateau mais j'ai changé d'avis
Il se passe trop truc de fou pas besoin du plateau de Jumanji
S/o Platon trop longtemps dans ma caverne ça m'est dur d'en sortir
Je suis dans le son dans la tête j'ai les patterns et c'est dur de dormir

Stem plus le même 180
Faut vivre sans un besoin
La vie de rêve elle est loin
Prêts à changer du jour au lendemain
Stem plus le même 180
Faut vivre sans un besoin
La vie de rêve elle est loin
Prêts à changer du jour au lendemain

Baigne dans tous les domaines plus de bras qu'un candélabre
Au fond de l'abdomen c'est là qu'on range les larmes
À la Edward des fois je sens aux bouts de mes doigts des grandes lames
Zéro empreinte le silence c'est le gant de l'âme
Je mourais en martyr archange faut qu'on s'élève
Lèche-cul y'a jamais rien de bon qui sort de ses lèvres
Vivre inconnu nan je préfère mourir riche et célèbre
Vivre inconnu nan je préfère mourir riche et oh oh oh

Stem plus le même 180
Faut vivre sans un besoin
La vie de rêve elle est loin
Prêts à changer du jour au lendemain
Stem plus le même 180
Faut vivre sans un besoin
La vie de rêve elle est loin
Prêts à changer du jour au lendemain`,Hy=`J'ai pris 2L, j'en ai fait un W
J'ai la coupe à soulever
Je cuisine une prod, j'ai la recette sous le nez
Tout pour le gang, tout pour le GANG
Dans mes rêves j'ai la gatti, dans mes rêves j'ai l'AMG

Ils ont cru que c'était la fin
Depuis le début ils ont cru que c'était la fin
Ce qui me fait avancer c'est la faim
Archange est devenu séraphin
Archange est devenu séraphin
Archange est devenu séraphin
Ils ont cru que c'était la fin
Depuis le début ils ont cru que c'était la fin
Ce qui me fait avancer c'est la faim
Archange est devenu séraphin
Archange est devenu séraphin
Archange est devenu séraphin

Laisse moi cook il m'a fait confiance il a bien fait
Lui il fait que parler il a rien fait
Je mets un demie polia dans un coca bien frais
Fuck être bleu métal ce soir je suis vanta black
Je me reconnais même plus dans le reflet de la flaque
Fait gaffe tu peux tomber face à la claque
Fait gaffe tu peux tomber
Je regarderais mon reflet face à la plaque
Je suis dans la caisse avec Guigz et Benjamin
Il me faut la quiche remplie de bleus benjamins
Je sais que tu veux tout me prendre donc toi je te tends pas la main
J'ai ma recette du cash je fais ma pâte à pain
On est au début de l'histoire mais je connais déjà la fin
Pas besoin de VVS pour briller
Je recompte la somme tout y est
Je peux pardonner mais pas oublier

Il me faut une kiche grosse comme Danny Devito
Il faut que je remplisse le caddie de Vuitton
Il me faut une kiche grosse comme Danny Devito
Il faut que je remplisse le caddie de Vuitton

Ils ont cru que c'était la fin
Depuis le début ils ont cru que c'était la fin
Ce qui me fait avancer c'est la faim
Archange est devenu séraphin
Archange est devenu séraphin
Archange est devenu séraphin
Ils ont cru que c'était la fin
Depuis le début ils ont cru que c'était la fin
Ce qui me fait avancer c'est la faim
Archange est devenu séraphin
Archange est devenu séraphin
Archange est devenu séraphin

Archange est devenu séraphin
Et séraphin deviendra dieu
Le plaisir est simple
On regarde un docu on fume un dix e
Et les vrais sangs ça se compte sur les doigts de la main
J'ai ce goût de victoire quand je me lève chaque matin
Même quand il pleut on est là
Il faut la Gucci umbrella
Je n'ai pas peur du ice le cœur est froid
Ice ice ice brrrr je frissonne comme Gucci Mane
J'ai la vision Uchiwa
Bitch it's stem you know the name
Il faut des stem type beat une pute taille guêpe et la SACEM de Tyga
Faut le neck on froze plus de glace que dans la taïga
Gros c'est chaud dans les poumons j'ai du magma
Je rêve de faire des AMA y'a 10 ans je dézinguais des gens sur Arma

Il me faut une kiche grosse comme Danny Devito
Il faut que je remplisse le caddie de Vuitton
Il me faut une kiche grosse comme Danny Devito
Il faut que je remplisse le caddie de Vuitton

Ils ont cru que c'était la fin
Depuis le début ils ont cru que c'était la fin
Ce qui me fait avancer c'est la faim
Archange est devenu séraphin
Archange est devenu séraphin
Archange est devenu séraphin
Ils ont cru que c'était la fin
Depuis le début ils ont cru que c'était la fin
Ce qui me fait avancer c'est la faim
Archange est devenu séraphin
Archange est devenu séraphin
Archange est devenu séraphin`,Gy=`Faut les VVS qui cerclent la montre
Je suis peut être dure
Je suis peut être dure mais je suis pas un monstre
On regarde pas en bas quand on monte
Je me sens comme Future sur Monster
Je me sens comme Metro sur Monster
Faut les VVS qui cerclent la montre
Je suis peut être dure
Je suis peut être dure mais je suis pas un monstre
On regarde pas en bas quand on monte
Je me sens comme Future sur Monster
Je me sens comme Metro sur Monster

Elle a une pretty face mais une taille XXL
Je m'entraîne pour le Grunt ou le freestyle XXL
J'ai une tête atypique
J'ai une voix atypique
Archange Séraphin bientôt je te fais un triptyque
J'arrive khabat à ton before
Je viens pour baiser ta ressoi
Je suis l'éléphant comme clifford
Je rentre dans la pièce comme chez moi
Le six pack c'est comme le crack ça se fait dans la cuisine
Faut se baigner dans la piscine pas pleurer à l'usine
On s'enfume dans un neuf mètre carré ou peut être moins
J'ai qu'une seule envie c'est de me barrer de partir loin

Fuck la piscine de mail faut la piscine de sky
J'ai du combler les lacunes j'ai dû combler les failles
Fuck la piscine de mail faut la piscine de sky
J'ai du combler les lacunes j'ai dû combler les failles

Faut les VVS qui cerclent la montre
Je suis peut être dure
Je suis peut être dure mais je suis pas un monstre
On regarde pas en bas quand on monte
Je me sens comme Future sur Monster
Je me sens comme Metro sur Monster
Faut les VVS qui cerclent la montre
Je suis peut être dure
Je suis peut être dure mais je suis pas un monstre
On regarde pas en bas quand on monte
Je me sens comme Future sur Monster
Je me sens comme Metro sur Monster`,Yy=`Bitch il me faut le pain bitch il me faut le bread
Je marche comme un zombie The Walking Dead
Je cacherais les iébi en dessous du bed
Ils n'ont pas compris ils n'ont pas capté
Je marche comme un zombie comme un macchabée
J'ai des démons pour m'accabler
Bitch il me faut le pain bitch il me faut le bread
Je marche comme un zombie The Walking Dead
Je cacherais les iébi en dessous du bed
Ils n'ont pas compris ils n'ont pas capté
Je marche comme un zombie comme un macchabée
J'ai des démons pour m'accabler

J'ai des pensées c'est macabres
J'ai des démons qui m'accablent
Tout les jours c'est ACAB
Je gratte le texte en acap
Je fais mes propres prod je me sens comme Dems
Je ne t'attendrai pas je me sens comme Tems
A plusieurs vices je suis abonné
Je garde la tête froide sous le bonnet
Tous les traîtres tu les connais
J't'avais prévenu fait pas l'étonné
Le talent je l'ai acquis personne me l'a donné
Je cours après le bag après la money
Tu es qui qui pourquoi tu me connais
Rien a changé depuis King King depuis Rodney
L'ange de gauche a le même avis que le démon de droite
Faut ball comme un cheik en boite
Tu vaux rien comme un chèque en bois
Je recule pas j'avance à l'aveugle dans le brouillard
Je fais tout de A à Z jeune Stem est débrouillard
Je veux ce lifestyle mais j'ai peur de tomber dans les perky
Bébé veux ce lifestyle bébé veux ce Birkin
Je veux ce lifestyle dans le Viano sur le parking
Les chien ne mordent jamais pourtant les chiens font du barking

Bitch il me faut le pain bitch il me faut le bread
Je marche comme un zombie The Walking Dead
Je cacherais les iébi en dessous du bed
Ils n'ont pas compris ils n'ont pas capté
Je marche comme un zombie comme un macchabée
J'ai des démons pour m'accabler
Bitch il me faut le pain bitch il me faut le bread
Je marche comme un zombie The Walking Dead
Je cacherais les iébi en dessous du bed
Ils n'ont pas compris ils n'ont pas capté
Je marche comme un zombie comme un macchabée
J'ai des démons pour m'accabler

En vrai fuck une berline allemande
Je veux juste vivre de la passion je le sais pertinemment
Si je monte j'emporte tout le monde même les homies d'avant
Je vesqui un tas de vautours et un tas de hyenne
Je suis dans la soucoupe jeune Stem est alien
Pourquoi pourquoi pourquoi
Elle me dis si tu t'en fou au moins fait le pour moi
Je suis le chevalier inconnu qui viens baiser le tournois
Money money money bitch je me met l'eau à la bouche
Bouffé d'oxygène dans la purple haze mwaka moon
Je graille de la chèvre je suis cannibale
Ils ont voulu me mettre en cage comme Hannibal
Je me couche a 4 je suis pas matinale
No cap je jette la casquette comme Bobby
Faut la villa de Zack et Cody
Pas le taudi
REP au frère de Toddy

Bitch il me faut le pain bitch il me faut le bread
Je marche comme un zombie The Walking Dead
Je cacherais les iébi en dessous du bed
Ils n'ont pas compris ils n'ont pas capté
Je marche comme un zombie comme un macchabée
J'ai des démons pour m'accabler
Bitch il me faut le pain bitch il me faut le bread
Je marche comme un zombie The Walking Dead
Je cacherais les iébi en dessous du bed
Ils n'ont pas compris ils n'ont pas capté
Je marche comme un zombie comme un macchabée
J'ai des démons pour m'accabler`,Qy=`Ça c'est de la musique qui s'écoute dans une Maybach
La bitch connais mes sons elle a pas besoin de playback
Je l'emmènerais voire les étoiles sous la toiture
Je l'emmènerais voire les étoiles dans la voiture
Ça c'est de la musique qui s'écoute dans une Maybach
La bitch connais mes sons elle a pas besoin de playback
Je l'emmènerais voire les étoiles sous la toiture
Je l'emmènerais voire les étoiles dans la voiture

Maybach music comme si j'étais Rick Ross
Je l'emmènerai voir les étoiles dans la Rolls Royce
Faut une quiche grosse comme Rick Ross
Faut une quiche grosse comme Rick Ross
Un homme meurt une légende vit pour toujours
Tu peux être mon zinc et devenir un traître mais tu peux pas l'inverse
Il faut les sièges en cuire pour le pantalon en velours
Sèche tes larmes de croco nan me pleure pas l'averse
Pour faire cette merde il faut le temps
Ça vie pour le flash du Nikon
Pour toucher à ça il faut les gants
Ça vie pour le flash du Canon
Pour l'instant je suis pas géant
Mais je dois changer la donne
Faut viser plus grand
Faut l'interview de Jimmy Fallon

Ça c'est de la musique qui s'écoute dans une Maybach
La bitch connais mes sons elle a pas besoin de playback
Je l'emmènerais voire les étoiles sous la toiture
Je l'emmènerais voire les étoiles dans la voiture
Ça c'est de la musique qui s'écoute dans une Maybach
La bitch connais mes sons elle a pas besoin de playback
Je l'emmènerais voire les étoiles sous la toiture
Je l'emmènerais voire les étoiles dans la voiture

Il faut que je monte il faut que je pop il faut que je fasse des chiffres
Il faut que je monte il faut que je pop il faut que je fasse cette shit
Les échecs ça faisait parti de la route mais les fils de pute à ça non
Encore un soir à pillav dans le salon
Nouveau rappeur cannais
Je fume ce missile et je suis canné
Je m'enfonce dans le matelas
Ce qu'il m'importe c'est pas que je me barre de là
C'est que je l'embellisse
Pour faire cette shit il faut prendre des risques
Il faut faire qu'un avec ses zincs
Et c'est le cas avec les miens
On est des jumeaux mais pas de la même mère
En tout cas dans la même merde
On aura la vue sur la même mer
Ça me rassure je sais je serais pas solo sur le champ de bataille
A quoi bon me battre je sais qu'ils ne sont pas à ma taille

Ça c'est de la musique qui s'écoute dans une Maybach
La bitch connais mes sons elle a pas besoin de playback
Je l'emmènerais voire les étoiles sous la toiture
Je l'emmènerais voire les étoiles dans la voiture
Ça c'est de la musique qui s'écoute dans une Maybach
La bitch connais mes sons elle a pas besoin de playback
Je l'emmènerais voire les étoiles sous la toiture
Je l'emmènerais voire les étoiles dans la voiture`,Vy=`Première prod j'avais 16 piges premier clip j'en avais 21
Et pour ton enterrement je me mettrais sur mon 31
J'ai autant de problèmes que 21 des questions j'en ai 21
Je fais avec les aléas je fais mon comeback comme Kanye en 2021
Première prod j'avais 16 piges premier clip j'en avais 21
Et pour ton enterrement je me mettrais sur mon 31
J'ai autant de problèmes que 21 des questions j'en ai 21
Je fais avec les aléas je fais mon comeback comme Kanye en 2021

Découpe la prod comme Benihana
C'est ma Dirty Diana c'est ma baby mama
Je suis avec mes maudits je suis avec mes damnés
Celui qui pourra me faire canner il n'est pas né
Je fume la zaza qui fait planer
Stem jeune trappeur je suis un trappésiste
Toi tu fais que capper t'es un capésiste
Tout pour les tout pour les talbin
Défilé Balmain
On est plus des gamins
J'ai de l'amour pour mon pez gros je lui fait des câlins
La je kick comme un ouf
La je geek comme un ouf
Je m'endors avec un stick plein de kush
J'attire les regard comme un flic dans un four
Je serais a la bourre pour mon propre décès
Au final je suis devenu plus fort grâce a tout ce qui m'a blessé
Je vois la traitrise qui coule en toi j'ai mon propre Byakugan
Stem en haut de la tour comme Sarouman
Je suis dans le ter je pense a la Maybach dans le wagon
Ils ne comprennent les texte ils ne connaissent pas le jargon

Première prod j'avais 16 piges premier clip j'en avais 21
Et pour ton enterrement je me mettrais sur mon 31
J'ai autant de problèmes que 21 des questions j'en ai 21
Je fais avec les aléas je fais mon comeback comme Kanye en 2021
Première prod j'avais 16 piges premier clip j'en avais 21
Et pour ton enterrement je me mettrais sur mon 31
J'ai autant de problèmes que 21 des questions j'en ai 21
Je fais avec les aléas je fais mon comeback comme Kanye en 2021

Jeune sorcier en haut de la tourelle
Je fait ça pour moi et je fais ça pour elle
Je t'éteins avec mes sons poubelle
J'arrive comme Sauron cours rependre la nouvelle
Je venu tout cramé j'ai mis le flow dans le jerrican
Il croit être mon zinc donc je ricane
J'ai des vieux trauma enfoui j'ai des squelettes dans mon placard
Je les calcule plus mais au fond de moi je sais que je veux me venger de ses bâtard
C'est Stem vs the world comme le nain de Philadelphie
J'ai des mauvais penchants tu sais que le malin est perfide
J'm'endors sous taga taga taga je me réveille j'ai gratté
La je suis pas la pas la pas la je retravaille les ratés
Guette ton future ça te fais vraiment kiffer les 35h
Gros j'ai des blessures mais je me relève en vainqueur
Fuck une tana j'ai déjà ma dame
Tu peux sonner l'alarme
Tu peux verser ta larme
Je suis venu donner la gamelle
Donne la manette
Je suis venu saisir la planète
Memento mori sur la prod j'ai mis les cloches d'église
Je n'ai plus peur faut doubler les risques pour doubler les mises

Première prod j'avais 16 piges premier clip j'en avais 21
Et pour ton enterrement je me mettrais sur mon 31
J'ai autant de problèmes que 21 des questions j'en ai 21
Je fais avec les aléas je fais mon comeback comme Kanye en 2021
Première prod j'avais 16 piges premier clip j'en avais 21
Et pour ton enterrement je me mettrais sur mon 31
J'ai autant de problèmes que 21 des questions j'en ai 21
Je fais avec les aléas je fais mon comeback comme Kanye en 2021`,wy=`Je peux pas changer le passer je peux pas retourner en arrière
La vie c'est pas Tenet
Je me dois de t'aimer désolé la j'enchaine les verres
Je vois pas très net
Nan je dois t'aimer
Surtout je dois pas trainer
Je cherche l'amour propre et le respect de mes aînés
Je peux pas changer le passer je peux pas retourner en arrière
La vie c'est pas Tenet
Je me dois de t'aimer désolé la j'enchaine les verres
Je vois pas très net
Nan je dois t'aimer
Surtout je dois pas trainer
Je cherche l'amour propre et le respect de mes aînés

Ça toque à la porte je vérifie que c'est pas un traître à travers le Juda
Je sais qui va s'assoir à ma table et à ma droite je mets mon Juda
Je sais que sans elle j'aurais fini crackhead
Je fait la prod le couplet le mix
J'ai plus de bras que le kraken
J'ai cru que ce frérot était un VVS ce n'est qu'un moissanite
De nombreuses peurs en moi s'abritent
J'arrive dans le jeu comme corbeau oiseau de mauvaise augure
Il me faut l'empire comme le célèbre auguste
Le million au moins et l'infini au plus
Il me faut l'empire comme Khrouchtchev
Le temps c'est de l'argent et rien faire ça coute cher
J'ai voulu prendre le monde sur un coup de tête
Je vois toutes ces bouches s'ouvrir je vais encore devoir toutes les faire taire
C'est l'ambition de cinq hommes que porte chacune de mes vertèbres
Mes rêve de grandeurs ne se payeront pas en vendant des paninis
Tetrai je sais déjà qui ne recevra pas les friends and family
Tais toi rassiez toi j'ai pas fini

Je peux pas changer le passer je peux pas retourner en arrière
La vie c'est pas Tenet
Je me dois de t'aimer désolé la j'enchaine les verres
Je vois pas très net
Nan je dois t'aimer
Surtout je dois pas trainer
Je cherche l'amour propre et le respect de mes aînés
Je peux pas changer le passer je peux pas retourner en arrière
La vie c'est pas Tenet
Je me dois de t'aimer désolé la j'enchaine les verres
Je vois pas très net
Nan je dois t'aimer
Surtout je dois pas trainer
Je cherche l'amour propre et le respect de mes aînés

Il faut la legacy de Nolan
Faut pas se fier aux apparences comme peau d'âne
Je veux juste voir la monde brûler comme dans MWtrois
Fuck aller au stud gros j'ai tout fait chez moi
Pourquoi tu parles gros je t'ai pas demandé
Elle veut savoir des détails que j'ai pas demandés
Encore un texte que je vais psalmodier
Faut nager dans le cash avec des palmes aux pieds
Faut pas finir au shtar et
Faut pas finir chtarbé
J'ai d'autres chats à fouetter
J'ai d'autres chattes à marbrées
Il faut une quiche de plus
J'en peut plus de ce fils de pute
Avec ces deux zincs on est comme les Migos en deuxk17
Faut amasser ce blé en cas de disette
Je suis fatigué j'attends le moment fatidique
Je suis venu tout rafler comme Butch Cassidy

Je peux pas changer le passer je peux pas retourner en arrière
La vie c'est pas Tenet
Je me dois de t'aimer désolé la j'enchaine les verres
Je vois pas très net
Nan je dois t'aimer
Surtout je dois pas trainer
Je cherche l'amour propre et le respect de mes aînés
Je peux pas changer le passer je peux pas retourner en arrière
La vie c'est pas Tenet
Je me dois de t'aimer désolé la j'enchaine les verres
Je vois pas très net
Nan je dois t'aimer
Surtout je dois pas trainer
Je cherche l'amour propre et le respect de mes aînés`,ky=`Elle veut croquer mes diamants
Elle veut croquer mes diamants
L'amour est un poison mais cette meuf est mon médicament
Je veux les diamants VVS bien évidemment
Elle veut croquer mes diamants
Elle veut croquer mes diamants
L'amour est un poison mais cette meuf est mon médicament
Je veux les diamants VVS bien évidemment

Faut la carrière éternelle comme les diamants
Je m'allume sous le ciel étoilé je guette le firmament
Pour elle je pourrais pop le ruinar
Je pourrais chase le milliard
C'est ma ballerina
C'est ma cinderella
Je prend cette shit je m'envole au dessus des toits de la ville
Puis je vois des toxs je me dis éloigne toi de cette vie
Je rêve de Maybach je rêve de hunnids
Le réveil fait mal
Pour ce pez des fois faut le cœur vide
Prêt à tout pour tals
Putain d'époque je me rappelle de quand OF voulait dire Od Future
Le but c'est d'être une légende comme le 3ème Vulture
Jamais je me force à faire du son comme le 3ème Culture
La prod repart avec une dent en moins et des points de suture
J'ai dû couper les ponts c'est un mal pour un bien
Je me dois d'être vrai je ne changerais pour un rien
Ils sont là pour moi donc je suis là pour les miens
Faut savoir pardonner donc je mets du poison et je donne la gamelle à ces chiens

Elle veut croquer mes diamants
Elle veut croquer mes diamants
L'amour est un poison mais cette meuf est mon médicament
Je veux les diamants VVS bien évidemment
Elle veut croquer mes diamants
Elle veut croquer mes diamants
L'amour est un poison mais cette meuf est mon médicament
Je veux les diamants VVS bien évidemment

Mets de l'alcool dans mon verre et du respect sur mon nom
Je suis venu faire cette merde j'ai gratté j'ai gratté j'ai de la terre sous mon ongle
Je suis venu j'ai vu
Je suis venu j'ai vaincu
Je t'avais prévenu
Je suis venu
je suis venu serrer la ceinture
Brabus Maybach AMG que des goûts de luxe
Le drip déborde avec une goute de plus
Je viens pas de la capitale j'ai grandi près du luxe
J'ai grandi depuis qu'on s'est vu
Stem c'est le genre de mec qu'on fait plus
Je dois bien croire en moi si on qui le ferait
Disque d'or au dessus du lit ça je kifferais
J'ai dû dompter mes envies
J'ai dû bloquer les on dit
J'ai dû éteindre l'incendie
J'ai bu j'étais comme zombie
J'étais dans un zion j'errais comme une âme en peine
Allons dépenser toute la SACEM chez le diamantaire
Tu voulais mon temps mais tu n'en vaut pas la peine
J'étais comme un poisson dans l'eau t'étais comme un homme à la mer

Elle veut croquer mes diamants
Elle veut croquer mes diamants
L'amour est un poison mais cette meuf est mon médicament
Je veux les diamants VVS bien évidemment
Elle veut croquer mes diamants
Elle veut croquer mes diamants
L'amour est un poison mais cette meuf est mon médicament
Je veux les diamants VVS bien évidemment`,Xy=`Il ne reste que les cendres gros après la guerre
Si c'était facile tu m'aurais déjà vu le faire
Si c'est un traître avant c'était un frère
J'ai coupé les ponts et j'ai clos l'affaire
Il ne reste que les cendre gros après la guerre
On a croisé le fer on a croiser le fer
A la vie à la mort si tu es mon frère
Il ne reste que les cendres gros après la guerre
Si c'était facile tu m'aurais déjà vu le faire
Si c'est un traître avant c'était un frère
J'ai coupé les ponts et j'ai clos l'affaire
Il ne reste que les cendre gros après la guerre
On a croisé le fer on a croiser le fer
A la vie à la mort si tu es mon frère

Il ne reste que les cendres il ne reste que le sang il ne reste que la haine
J'ai pris la couronne comme si elle était mienne
Il avait un rêve maintenant il ne reste que les miettes
J'ai des rêves de gosses et je refuse de grandir
Tu fais mal à la tête arrête de mentir
Mes problèmes je les vesqui en me noyant dans le Brandy
J'ai fumé des fermes comme si j'étais Randy
Comme si j'étais qui qui qui
Le taga me blesse et le taga me tape
Je marche comme Soze comme un humain qui boîte
Comme le loup qui a l'épine dans la pâte
Je suis venu épater
Servir la pâtée
Baiser la prod et
T'es venu mater
Du mal à me flatter
Je repense aux ratés
Haine dans la cornée
Pour toutes ces années
Bitch la vie que je veux c'est la vie qui est trop chère
Fuck un nazi comme si j'étais Kosher
Je veux les ices qui me gèlent je n'ai pas de quoi payer la polaire
Je crache des flammes comme le Sherman crocodile
Je sais où je vais je suis la seule étoile immobile
C'est pas seulement que je veux le faire mais aussi qu'il le faut
Tu me pisseras pas dans le crâne car je sais ce que je vaux
Des fois je me demande si ce n'est pas moi le traître si ce n'est pas moi le faux
Faut que je m'échappe de l'abattoir comme un veau

Il ne reste que les cendres gros après la guerre
Si c'était facile tu m'aurais déjà vu le faire
Si c'est un traître avant c'était un frère
J'ai coupé les ponts et j'ai clos l'affaire
Il ne reste que les cendre gros après la guerre
On a croisé le fer on a croiser le fer
A la vie à la mort si tu es mon frère
Il ne reste que les cendres gros après la guerre
Si c'était facile tu m'aurais déjà vu le faire
Si c'est un traître avant c'était un frère
J'ai coupé les ponts et j'ai clos l'affaire
Il ne reste que les cendre gros après la guerre
On a croisé le fer on a croiser le fer
A la vie à la mort si tu es mon frère

Finesse en finesse il a rien vu comme Stevie ou Ray Charles
J'ai mon j ma cannette je suis laid back
Si la roue tourne ça sera la roue de la Maybach
Tout disparait avec une teille de Jameson
Découpe la prod avec la machette de Jason
Dans ce game faut être rusé
Mon meilleur ami c'est la malice comme si j'étais Pusha T
Je connais mon ABC mon karaté comme un Navy Seal
50% de mes projets ne verrons pas le jour comme Addidon
Même si y'a un mur devant je bombarde comme Hamilton
Je suis comme un enfant à Noël devant ses nudes
Malcom X s'est pas battu pour qu'on diffuse CNEWS
A propos des VVS à propos du ice
Tout les jours fuck les MAGA et fuck le ICE
T'aurais du investir hier ce n'était pas le même price
Gros t'es bête ou quoi
Tu veux que ça crame ou quoi
Tu veux que ça pète ou quoi
Tu veux la guerre ou quoi
Dans le joins y'a pas de tabac
Heny pastaga
T'es pas de la team vas la bas
Elle m'a charmé comme une sorcière Karaba

Il ne reste que les cendres gros après la guerre
Si c'était facile tu m'aurais déjà vu le faire
Si c'est un traître avant c'était un frère
J'ai coupé les ponts et j'ai clos l'affaire
Il ne reste que les cendre gros après la guerre
On a croisé le fer on a croiser le fer
A la vie à la mort si tu es mon frère
Il ne reste que les cendres gros après la guerre
Si c'était facile tu m'aurais déjà vu le faire
Si c'est un traître avant c'était un frère
J'ai coupé les ponts et j'ai clos l'affaire
Il ne reste que les cendre gros après la guerre
On a croisé le fer on a croiser le fer
A la vie à la mort si tu es mon frère`,Zy=`Je vérifie le plav avant que je monte dans le train
Je suis jeune et fougueux, plein d'entrain
Je la baise avec des gants sur son cul y'a pas d'empreinte
Ce genre de cash, ça se graille sans faim
T'as lâché ça enfin
Elle fait la manucure comme si c'était la saint Valentin
Je vérifie le plav avant que je monte dans le train
Je suis jeune et fougueux, plein d'entrain
Je la baise avec des gants sur son cul y'a pas d'empreinte
Ce genre de cash, ça se graille sans faim
T'as lâché ça enfin
Elle fait la manucure comme si c'était la saint Valentin

Je dézingue la prod
Stem jeune chasseur de têtes
Avec l'équipe on a gravi la crête
Jeune ivrogne j'suis venu ruiner la fête
Je veux les VVS
Elle veut du Vivienne
Je leur mets une vi-vitesse
Maintenant j'attends qu'il vi-viennent
J'ai rien ramené je fais cadeau de ma présence
Donne le mic je glisse sur la prod avec aisance
Je suis venu sapé tout de noir
Tu n'es pas fait pour ça il a fallu tout revoir
Tu m'a trahi adieux même pas de au revoir
C'est beau de rêver je guette les modèles d'Audemars
Ce dont je rêve pour d'autres ça serait le cauchemar
Je reste méfiant, akimbo, j'ai un fusil sur chaque épaule
Laisse passer igo, mets-toi sur le téco
Je suis venu dans le sous-marin j'entends le chant du loup
Ils sont bon qu'a copier comme Canteloup
J'ai appris des choses sur toi maintenant je te vois en chelou
Je suis le loup sous la peau de chèvre
Je prépare le cou à porter trop de chaînes
Stem nouveau Mister Worldwide
J'ai des comptes à régler je n'attends que la World War
Tu dis que t'es mon frère ça j'en doute
Tu veux mon bien ça j'en doute
Rajoute-moi dans l'équation, ça change tout

Je vérifie le plav avant que je monte dans le train
Je suis jeune et fougueux, plein d'entrain
Je la baise avec des gants sur son cul y'a pas d'empreinte
Ce genre de cash, ça se graille sans faim
T'as lâché ça enfin
Elle fait la manucure comme si c'était la saint Valentin
Je vérifie le plav avant que je monte dans le train
Je suis jeune et fougueux, plein d'entrain
Je la baise avec des gants sur son cul y'a pas d'empreinte
Ce genre de cash, ça se graille sans faim
T'as lâché ça enfin
Elle fait la manucure comme si c'était la saint Valentin`,Fy=`J'ai des rêves de grandeur Stemcorp c'est la tour de Babel
Bitch la money me call bitch la money m'appelle
Je veux t'offrir le monde qu'est ce qu'il te faudrait ma belle
Il faut des VVS il faut la SACEM d'Abel
J'ai des rêves de grandeur Stemcorp c'est la tour de Babel
Bitch la money me call bitch la money m'appelle
Je veux t'offrir le monde qu'est ce qu'il te faudrait ma belle
Il faut des VVS il faut la SACEM d'Abel

Shoot un ministre je le fais pour mon pays
Je rentre dans la pièce le temps se fige comme dans les rue de Pompéi
Je respecte tout les drapeau à part le drapeau blanc
PDM pour tout les racistes comme croc blanc
Faut, faut connaître son ennemi pour mieux le schlasser dans son sommeil
Tu sais, tu sais ici tout se monnaie
Avec les adlibs je fais de l'écholocalisation
Je te fume à petit feu comme le plomb dans les canalisations
La je suis trop haut
Donc on ne parle plus les même langues
Je suis parano
Je me méfie des mains qu'ils me tendent
Deviens pas accro
J'ai plusieurs péchés qui me tentent
Shoot dans le dos
J'ai peur qu'ils me vendent
Je suis dans le grand bain bain bain bain
De la maille j'en veux plein plein plein plein
Je me sens comme Midas
Je fait de l'or avec ma voix et mes mains mains mains mains
J'ai une soif de grandeur je ne sais quand je serais calé
Chacun ses gouts mais tu n'as pas de palet

J'ai des rêves de grandeur Stemcorp c'est la tour de Babel
Bitch la money me call bitch la money m'appelle
Je veux t'offrir le monde qu'est ce qu'il te faudrait ma belle
Il faut des VVS il faut la SACEM d'Abel
J'ai des rêves de grandeur Stemcorp c'est la tour de Babel
Bitch la money me call bitch la money m'appelle
Je veux t'offrir le monde qu'est ce qu'il te faudrait ma belle
Il faut des VVS il faut la SACEM d'Abel

J'ai des rêves de grandeur
Qu'il faut que je fasse avant que mon heure vienne
Faut que j'affronte mes peur
Je fume le taga les souvenirs me reviennent
Bitch mes péchés me pèses
Je suis venu chercher le pez
J'ai ravivé les braises
Jeune stem j'ai écris des thèses
Des fois je câble je sais pas à qui m'en prendre
La guerre c'est comme le j à la fin il ne reste que des cendres
Vu la taille de tes beuges je peux te les briser en 2 en 4 ou en 8
J'ai pas aimé ce type donc je l'ai laissé sans suite
Tu n'es plus à la mode comme le Famas
Ils tuent des enfants qu'est ce tu me parle du Hamas
Tout sapé de palace
Une main lave l'autre
Mais les vices ne disparaissent pas
Je vesqui mes fautes
Je suis satellisé je suis dans l'espace
Elle a mes boules au bout de ses main comme le méga chevalier
Je pense pas au lendemain jeune alcoolique médaillé
Il faut des jaunes des verts en tout cas des gros billet
Il faut des jaunes des verts des VVS sur le collier

J'ai des rêves de grandeur Stemcorp c'est la tour de Babel
Bitch la money me call bitch la money m'appelle
Je veux t'offrir le monde qu'est ce qu'il te faudrait ma belle
Il faut des VVS il faut la SACEM d'Abel
J'ai des rêves de grandeur Stemcorp c'est la tour de Babel
Bitch la money me call bitch la money m'appelle
Je veux t'offrir le monde qu'est ce qu'il te faudrait ma belle
Il faut des VVS il faut la SACEM d'Abel`,Ky=`La vie de rêve c'est la vie que l'on veut
Donc on fait tout ce qu'on peu
Pour exaucer nos veux
Je me console dans la tise je me console dans la beuh
Je veux pas finir comme lui je veux pas finir comme eux
Je veux pas finir vieux
Je vois mon future dans ses yeux
Hier j'étais pire demain je serais mieux
C'est normal de rater quand tu vise le milieu
STEM je dois me hisser en haut du lot
Des fois le moral est low
Mais si je baisse les bras jamais l'avenir ne sera beau
Je tâtonnerais dans le noir jusqu'à ce que je resplendisse
Même si le démarrage est lent je reste en piste
A tout mes morts je dis reste in peace
J'espère que personne me pleura quand je partirais
Jusqu'à ma mort y'aura que mes parents et mon frère et elle que j'admirerais
Des fois la vie est taciturne
Mais avec elle la vie n'est pas si dure
J'ai des phases qui tuent et
Je ne sais pas qui tu es
Je préfère rester vrai à moi même même si je me ferme des tepor
STEM à la recherche de la poule aux œufs d'or
Il faut que je sorte de la les deux pieds dans la tourbière
A quoi bon le mili mili je redeviendrais poussière

Memento mori
Comme si j'avais oublié une seule seconde de ma vie
Memento mori
Comme si j'avais oublié
Comme si j'avais oublié
Memento mori
Memento mori
Comme si j'avais oublié une seule seconde de ma vie
Memento mori
Comme si j'avais oublié
Comme si j'avais oublié
Memento mori

Tout mes idoles sont devenus des merdes
J'ai retenu la leçon
Y'a que moi qui peu le faire
Je dois me donner à fond
J'aurais pu mal finir on me proposait de la k j'étais mineur
Mais je suis ici et un jour on dira que stem c'est le meilleur
Le malheur des uns fait le bonheur des autres
Et le bonheur de mes zinc fait le bonheur des nôtres
STEM j'ai mes apôtres
Je me vois au sommet depuis le bas de la cote
N'envie pas le voisin tu ne sais pas ce qu'il a enterré sous sa pelouse
J'aime pas les type trop clean je préfère ceux un peu louche
Y'a des barz quand je les écrits c'est comme si je brulais la plaie
Y'a des barz quand je les écrits c'est comme si je crevait l'abcès
Tu rap bien mais c'est plat ta rime riche ne vaut rien
Sans ma mif sans mes gars je suis rien
On était frère tu te souviens
Je rie au nez de la mort quand je pars c'est moi qui décide
Si ça va pas tu me fais signe
Noir est le mouton noir est le cygne
J'avais des potes qui avait besoin de moi
Et j'ai rien fait parce que le morale allait pas
Sur les épaules je pouvais pas rajouter du poids

Memento mori
Comme si j'avais oublié une seule seconde de ma vie
Memento mori
Comme si j'avais oublié
Comme si j'avais oublié
Memento mori
Memento mori
Comme si j'avais oublié une seule seconde de ma vie
Memento mori
Comme si j'avais oublié
Comme si j'avais oublié
Memento mori`,Py=`Je me vois déjà lui tenir le bras à l'avant de la procession
Je veux le monde mais faut que j'apprenne a faire des concessions
Je peux tout rater j'aurais toujours l'amour de mes proches en ma possession
J'ai plus de voix je sors d'une grosse session
Home studio je passe de la chambre au salon du salon à la cuisine
Je me dis qu'il faut marquer l'histoire pas vivre comme un nuisible
De chez moi faut que je sorte faut que je renta Basic Fit
Des sons faut que j'en sorte faut que je renta Distrokid

J'ai encore volé la boucle sur Looperman je me suis pas foulé
Encore un texte à bafouer
Encore des émotions à camoufler
Je repense aux bougies que j'ai déjà soufflé
J'allume le gaz de la gazinière
Je me dis aujourd'hui sera mieux qu'hier
Je n'y crois pas mais des fois je fais une prière
J'allume le gaz au bout de mes lèvres
C'est l'histoire de stem c'est l'histoire d'une chèvre
Avant je m'aimais pas maintenant j'ai fait une trêve
On s'aime quand tout va bien je nous déchire quand tout va mal
Je regarde la montagne que je veux gravir la je suis encore en aval
Je vais pas me laisser abattre mon seum je le ravale
De celui que j'étais avant je me rend compte que je cavale
Encore un roi sans couronne un bouffon sans publique
Y'a que sur la track que je me dévoile un peu sinon je reste pudique
Je n'aime pas beaucoup de gens je me mélange pas
Ce que je ressent la c'est le genre de sentiment qui s'échange pas
Frérot t'inquiète pas tu me dérange pas
Il me faut la villa avec la véranda
Avec la mer en bas
Merci Antares pour l'autotune
Tu sais que je rêve d'avoir trop de tune
Jamais j'arrête même si j'y ai laissé trop de plume
Je suis venu pour toi et pas eux
Il me faut le Bilboard et pas que
En vrai la vie est belle et parce que
Je suis venu pour toi et pas eux
Il me faut le Bilboard et pas que
En vrai la vie est belle et parce que

Je me vois déjà lui tenir le bras à l'avant de la procession
Je veux le monde mais faut que j'apprenne a faire des concessions
Je peux tout rater j'aurais toujours l'amour de mes proches en ma possession
J'ai plus de voix je sors d'une grosse session
Home studio je passe de la chambre au salon du salon à la cuisine
Je me dis qu'il faut marquer l'histoire pas vivre comme un nuisible
De chez moi faut que je sorte faut que je renta Basic Fit
Des sons faut que j'en sorte faut que je renta Distrokid`,Iy=`Y'a que l'argent pour me repentir de ma pénitence
Je repense à mes échecs je ressens une peine immense
Qu'est ce que tu fais si ton reuf il ment
Qu'est ce tu fais qu'est ce tu fais si ton reuf il ment
Y'a que l'argent pour me repentir de ma pénitence
Je repense à mes échecs je ressens une peine immense
Qu'est ce que tu fais si ton reuf il ment
Qu'est ce tu fais qu'est ce tu fais si ton reuf il ment

Il est pas de taille
On fini elle a les cheveux en bataille
Je fais genre je n'ai pas de faille
Je pose avec le bras en écharpe
Faut les charts mais je fais gaffe
Y'en a qui sont tombé a cause d'une écharde
Stevie Wonder je pianote au hasard sur le piano
J'ai hâte de mettre le bazar dans un viano
La je suis en 1v1 contre cette pute de vie
Et je peux plus sortir gros je n'ai plus de devise
J'avance avec la peur de l'échec habituel
J'ai peur de vieillir comment sera ma vie a l'age de Patrick Bruel
Repas tel pantagruel
Parano je me méfie de mon ombre dans la ruelle
Après combien de cap ton frère n'est plus ton frère
Après combien de meurtre ton père n'est plus ton père
Après combien de cap ton frère n'est plus ton frère
Après combien de meurtre ton père n'est plus ton père

Y'a que l'argent pour me repentir de ma pénitence
Je repense à mes échecs je ressens une peine immense
Qu'est ce que tu fais si ton reuf il ment
Qu'est ce tu fais qu'est ce tu fais si ton reuf il ment
Y'a que l'argent pour me repentir de ma pénitence
Je repense à mes échecs je ressens une peine immense
Qu'est ce que tu fais si ton reuf il ment
Qu'est ce tu fais qu'est ce tu fais si ton reuf il ment`,Wy=`Encore un ami laissé pour mort
Je travail mon mental et mon corps
Après ces années je l'aime encore
Je rêves de grandeurs quand je m'endort

Encore un ami laissé pour mort
C'est loin des yeux loin du cœur
Je travail mon mental et mon corps
Le temps passe et j'ai moins de peur
Après ces années je l'aime encore
Et ça m'attriste quand elle pleure
Je rêves de grandeurs quand je m'endort
Il me faut l'argent et le beurre
Encore un ami laissé pour mort
C'est loin des yeux loin du cœur
Je travail mon mental et mon corps
Le temps passe et j'ai moins de peur
Après ces années je l'aime encore
Et ça m'attriste quand elle pleure
Je rêves de grandeurs quand je m'endort
Il me faut l'argent et le beurre

Encore un ami laissé pour dead dead dead
J'ai du mal à dire quand il me faut de l'aide aide aide
On est fusionnel comme Ed Edd et Eddy
Il faut que je plonge dans le henny
Il me faut la SACEM de NI
Je me sens béni
Je me sens béni
Je suis high je vole avec les rafale
Sur la prod je rafale
Et mon seum je le ravale
All eyes on all eyes on Rafas
Il faut que j'encaisse
Gros le temps presse
L'humain empeste
Laissez moi en paix
Wow Fuck la télé fuck les médias
Wow Faut taffer y'a rien d'immédiat
Wow La dalle digne d'un ténia
Wow Qu'est ce qu'il y a
Elle me manque la maison
Mon daron avait raison
Je vois même plus les jours passer ni changer les saisons
Pour moi 2016 c'était y'a 4 ans je crois que je perds la raison
Je crois que je perds la raison

Encore un ami laissé pour mort
C'est loin des yeux loin du cœur
Je travail mon mental et mon corps
Le temps passe et j'ai moins de peur
Après ces années je l'aime encore
Et ça m'attriste quand elle pleure
Je rêves de grandeurs quand je m'endort
Il me faut l'argent et le beurre
Encore un ami laissé pour mort
C'est loin des yeux loin du cœur
Je travail mon mental et mon corps
Le temps passe et j'ai moins de peur
Après ces années je l'aime encore
Et ça m'attriste quand elle pleure
Je rêves de grandeurs quand je m'endort
Il me faut l'argent et le beurre

Je parle plus pas parce que je t'aime plus mais j'ai juste rien a dire
Ça fait des mois que je l'ai pas vu comme si j'avais a fuir
A l'époque sur Left 4 Dead on shootait du zombie
J'ai du mal à garder le contact je m'en fou des on dit
C'est plus la New Wave c'est le ras de marée
Une carrière c'est dur à démarrer
Tsunami warning comme si j'étais Weezy
Tsunami warning comme si j'étais Weezy
Je cours après le succès c'est le jaguar et la gazelle
Il faut nos noms dans la gazette
Sans signer le pacte d'Azazel
Qu'est ce qu'il y a frérot parle à tes zincs
Bon marché je tise l'alcool de raisins
Numéro 1 je vais pas te faire un dessin
Je préfère être honnête avec toi que de me mentir à moi même
Je me suis levé déçus de moi ce matin j'ai compté mes erreurs toute l'aprem
Je préfère être honnête que de me mentir à moi même
J'ai compté toute l'aprem

Encore un ami laisser pour mort mort mort mort

Encore un ami laissé pour mort
C'est loin des yeux loin du cœur
Je travail mon mental et mon corps
Le temps passe et j'ai moins de peur
Après ces années je l'aime encore
Et ça m'attriste quand elle pleure
Je rêves de grandeurs quand je m'endort
Il me faut l'argent et le beurre
Encore un ami laissé pour mort
C'est loin des yeux loin du cœur
Je travail mon mental et mon corps
Le temps passe et j'ai moins de peur
Après ces années je l'aime encore
Et ça m'attriste quand elle pleure
Je rêves de grandeurs quand je m'endort
Il me faut l'argent et le beurre`,$y=`Je veux pas mourir sobre
Je veux pas mourir seul
Je veux pas mourir sobre
Je veux pas mourir jeune
Je veux pas mourir sobre
Je veux pas mourir seul
Je veux pas mourir sobre
Je veux pas mourir jeune

Je veux pas mourir jeune je veux pas mourir vieux
Et y'a que ma famille qui compte à mes yeux
On se retrouvera à jamais dans les cieux
Je m'améliore chaque jour je fais au mieux
Je veux pas mourir pauvre
Je veux pas mourir sobre
Je veux vivre des choses
Je veux pas de petite somme
Je renie mes fautes
Je ne suis qu'un homme
J'ai rempli mes textes de fautes
Pendant que je fais mes prod
Je veux pas mourir sobre donc je m'allume
Je veux pas toucher le fond je vise la lune
Je m'entraine j'aiguise ma lame et ma plume
Et je ne m'ouvre qu'avec de l'autotune
Je veux pas mourir sans elle
Pas réussir sans aide
Une prod un stylo une feuille et je m'enferme
J'esquiverais surement pas l'enfer
Donc mon paradis je dois le construire sur terre

Je veux pas mourir sobre
Je veux pas mourir seul
Je veux pas mourir sobre
Je veux pas mourir jeune
Je veux pas mourir sobre
Je veux pas mourir seul
Je veux pas mourir sobre
Je veux pas mourir jeune

Je veux mourir en paix
Sans souci ou tracas
Par la grande porte je veux rentrer
Avec grand bruit et fracas
Je reconnais ceux qui me soutiennent
Je reconnais les ingrats
J'attends pas que juste que les sous viennent
Il me faut tout l'or des incas
Je veux mourir comme les méchants dans les films
Tel Scarface jusqu'à la mort faut rester digne
J'écris entre les rimes
Je vois la lumière depuis le fond des abimes
Je veux mourir en dernier
Je n'accepterais pas de voir le chagrin sur le visage de mes proches
Ice ice lunettes Cartier
Je retournerais pas à la maison sans rien dans les proches
Je veux mourir sur scène il faut le succès
Sur mon cou faut l'aquafina pour ça faut déjà le mériter
Je fais des sons qui te font léviter
Je connais déjà la fin
Stemcorp on passera de vendre du rêve à de la réalité

De la réalité
On passera de vendre du rêve à de la réalité
De la réalité
Vendre de la réalité

Je veux pas mourir sobre
Je veux pas mourir seul
Je veux pas mourir sobre
Je veux pas mourir jeune
Je veux pas mourir sobre
Je veux pas mourir seul
Je veux pas mourir sobre
Je veux pas mourir jeune`,e0=`Stem objectif PDG
Élevé comme un homme et je porte du CDG
Direction la lune je m'envole de paris CDG
D&G Comme Des Garçon Simon Raf
Je m'implique si ça parle argent sinon R.A.F

J'attends de pouvoir dire ça y est
Avec la déception je suis marié
Depuis le temps je me suis fait de nouveaux alliés
Je fais mon cash je fume mon hash je recompte le papier
J'ai 5 balles pour vous je me garde la dernière du barillet
Je peux pactiser avec le diable dans tout les cas je vais en enfer
Des fois le morale est bas mais tu sais mon gars faut pas s'en faire
Stemcorp faut toute les richesses de quoi plonger la société en dystopie
Tout ce qu'il faut pour prendre la terre c'est un abonnement Distrokid
Un esprit sain dans un corps sain
Pain fromage j'ai encore faim
Dans une berline dans une murcielago
Lesgui lesgui let's go
J'entasse les briques je joue aux Legos
Stem bitch dans ma fiction
Dans 10 ans je paye l'addition
De l'argent j'ai l'addiction
Je travail mes rimes et ma diction
Je veux rester focus mais je m'étale
Comme la kichta du poignet au coude
Une lotus du papier du métal
Je pense pas demander Beaucoup
Je me suis mis en tête des gens qu'il faut que je régale
Je dois faire belek à tout ces vautours
Il m'a trahis ça m'a fait mal
Comme la chaine qui me pendra au cou
Et lui c'est mon sang c'est mon jumeau
Vie de merde c'est soit l'usine soit le bureau
Lui c'est mon zinc de sang
Parce qu'on a un lien de sang
Serais-je toujours la à 22 ans

Stem objectif PDG
Élevé comme un homme et je porte du CDG
Direction la lune je m'envole de paris CDG
D&G Comme Des Garçon Simon Raf
Je m'implique si ça parle argent sinon R.A.F`,a0=`STEMCORP la plus haute
STEMCORP la plus haute de toute les tours
Je m'arrêterais quand je deviendrais sourd
Faut les sous
Mon zincou je pense à en faire tout les jours
STEMCORP la plus haute
STEMCORP la plus haute de toute les tours
Je m'arrêterais quand je deviendrais sourd
Rien que ça cook
Stemusic le plus chaud de tous les fours

Tu fais que parler j'ai jamais vu quelqu'un d'aussi loquace
Mais tu fais rien tu laisses passer toutes les occases
Fume la loud fume la Butagaz
Tout allait bien jusqu'à ce que cette pute m'agace
J'ai mis trop fort les basses m'agressent
Je l'emmènerais voir l'Italie je l'emmènerais voir la Grèce
Je sors le son la claque retourne ta veste
J'ai des choses a dire donc je l'ouvre
J'attends mon festin comme l'alligator dans les douves
12 prod de foudroyer j'ai bientôt la nuke
Je raconte ma vie je me mets a nu
Avant plongeon je me mouille la nuque
Comme dirait Yeat il me faut un big body il me faut un tonka
A propos des chiffres comme Ivan Monka
Fume la frappe fume la Tsonga
Tu me respecte pas alors moi non plus
Tu respecte pas non zinc alors je te respecte pas non plus
Je crois que t'as pas compris
Des flows j'en ai la panoplie
Je sais qu'il ment il me raconte des calomnies
Une faim de loup je fais pas gaffe au calories

STEMCORP la plus haute
STEMCORP la plus haute de toute les tours
Je m'arrêterais quand je deviendrais sourd
Faut les sous
Mon zincou je pense à en faire tout les jours
STEMCORP la plus haute
STEMCORP la plus haute de toute les tours
Je m'arrêterais quand je deviendrais sourd
Rien que ça cook
Stemusic le plus chaud de tous les fours

Je compte mon cash je fais les sommes
Et sur la prod je fais la différence
Je me focus sur le jetpro j'ai le cœur en itinérance
J'ai fait des choix dans ma vie
J'ai fait des choix dans ma ive
J'ai cru en toi j'étais naïf
J'ai fait des choix j'étais ivre
Et je ne regrette rien
Il faut plus qu'un salaire de médecin
Je l'ai déjà dis mais il y a les autres et mes zincs
Dans la mine d'or je suis le filon
Je fume le pilon
Je déchire son nylon
Je bois le raki le lait du lion
Je fais les choses simplement je fais les choses au calme
Je dis les choses simplement j'ai le rasoir d'Ockam
Je monte difficilement comme Sisyphe
Comme si chaque son était décisif
Je me dis cette fois ci c'est la bonne this is it
Méritocratie j'y ai jamais cru
Le but c'est de faire du jamais vu
Je m'obstine je suis grave têtu
Boire et fumer tue
Mais je continue je préfère mourir jeune que de vivre tristement vieux
J'essaie de vivre sans être envieux


STEMCORP la plus haute
STEMCORP la plus haute de toute les tours
Je m'arrêterais quand je deviendrais sourd
Faut les sous
Mon zincou je pense à en faire tout les jours
STEMCORP la plus haute
STEMCORP la plus haute de toute les tours
Je m'arrêterais quand je deviendrais sourd
Rien que ça cook
Stemusic le plus chaud de tous les fours`,n0=`Il faut une gatti
Donc il me faut le permis
Donc il me faut un garage 12 places comme 21
Il faut être quelque un pas un nobody pas anyone
Il me faut le penthouse avec l'héliport comme dans Saints Row
Il faut que je puisse me dire nan là c'est trop
Comme Hamza faut le urus et faut la santé
Faut que je reste dans les mémoires que je puisse m'absenter
Il faut plus que ça
Que les finances soient plus que stables
Qu'il y est du pain sur la table
Qu'on vive comme dans une fable
Succès, réussir mes rêves que demander d'autre
Peut être une maison sur la côte
Avec terrasse pour trinquer a la notre
Que je vive avec ma gadji que tout aille bien
Que le frigo soit toujours plein
Que la chance se porte sur tout les miens
Il faut les charts les certifications
Ne plus devoir faire les choses avec précipitation
Il faut un sommeil pharaonique
Un écran plat Panasonic
Un contrat qui n'est pas diabolique

Il faut il faut il faut
Je pense donc je suis il faut donc j'aurais
Il faut il faut il faut
La carte de fidélité chez Laforêt
Il faut il faut il faut
Il faut un Glock car l'homme est mauvais
Il faut il faut il faut
Je pense donc je suis il faut donc j'aurais
Il faut Il faut Il faut Il faut Il faut Il faut Il faut
Il faut Il faut Il faut Il faut Il faut Il faut Il faut
Il faut il faut il faut
Je pense donc je suis il faut donc j'aurais
Il faut Il faut Il faut Il faut Il faut Il faut Il faut

La tristesse inhibe la colère
Faut la pluie avant que ne frappe la foudre
Faut une marque de luxe sur la polaire
Que jamais je ne mette mon nez dans la poudre
Il faut les drap en satin avec la couette
La kichta bien grasse avec la couenne
Il faut le pain comme Hjeunecrack et Mairo
Il faut plus de temps que n'affiche une Seiko
Faut surveiller le mental pas devenir psycho
Quitte a prendre du poids faut qu'on graille trop
Faut une empreinte avant que je ne quitte la terre
Il faut que je l'aime avant que je puisse la perdre
Faut des liens indénouables avant qu'on fasse la paire
Comme le prez de la KCORP faut être un jeune CEO
Je reste calme mais je peux m'énerver si il faut
Faut une money long comme Lil Uzi Vert
Pas de pacte avec Lucifer
Faut que je fasse les choses que j'arrête de me demander pourquoi
Il faut que je réalise que je n'aurais pas un dixième de tout ça

Il faut il faut il fautZ
Je pense donc je suis il faut donc j'aurais
La carte de fidélité chez Laforêt
Il faut il faut il faut
Il faut un Glock car l'homme est mauvais
Il faut il faut il faut
Je pense donc je suis il faut donc j'aurais
Il faut Il faut Il faut Il faut Il faut Il faut Il faut
Il faut Il faut Il faut Il faut Il faut Il faut Il faut
Il faut il faut il faut
Je pense donc je suis il faut donc j'aurais
Il faut Il faut Il faut Il faut Il faut Il faut Il faut`,t0=`Il faut des diamants
Il faut des diamants sous mes lèvres

Il me faut des diamants sous mes lèvres
Il me faut des diamants sous mes lèvres
Je prends mon temps c'est la tortue et le lièvre
Gros j'ai le démon
Gros j'ai le démon
Dans ma tête c'est la guerre ange et démon
Il en faut des années des années avant de témon
Il me faut des diamants sous mes lèvres
Il me faut des diamants sous mes lèvres
Je prends mon temps c'est la tortue et le lièvre
Gros j'ai le démon
Gros j'ai le démon
Dans ma tête c'est la guerre ange et démon
Il en faut des années des années avant de témon

En ce moment je suis pas dans mon assiette mais c'est la ive
En ce moment je suis pas au max mais ça arrive
Combien de fois j'ai hésité à regagner la rive
La vie c'est une grosse chienne
Fame en forme de gaussienne
To be or not to be
Tout ce que je sais c'est que je ne veux pas tomber dans l'oublie
Objectif sur les racks ils sont tout petits
Beaucoup chien de mon côté pourtant je n'ai pas fait 12 kills
Faut s'accrocher à ce que t'as avant que tout file
Quand est ce qu'on s'arrête
Quand nos chiffres passent de six à sept
Toute la team mange gucci pas de pique assiette
Y'en a qui rêvent d'être vétérinaire je rêve de faire du game ma petite salope
Ils pensent que j'avance dans le noir mais j'y vois clair comme si j'étais nyctalope
Riche ou pauvre on reste tous des hommes
Lévrier ou Bulldog on reste tous des ienchs
Je donne tout ce que j'ai y'a le travail qui m'assomme
Égoïste ça serait mentir de dire que je fais ça pour les miens

Il me faut des diamants sous mes lèvres
Il me faut des diamants sous mes lèvres
Je prends mon temps c'est la tortue et le lièvre
Gros j'ai le démon
Gros j'ai le démon
Dans ma tête c'est la guerre ange et démon
Il en faut des années des années avant de témon
Il me faut des diamants sous mes lèvres
Il me faut des diamants sous mes lèvres
Je prends mon temps c'est la tortue et le lièvre
Gros j'ai le démon
Gros j'ai le démon
Dans ma tête c'est la guerre ange et démon
Il en faut des années des années avant de témon

Faut des diamants
Faut des diamants
Faut des diamants sous mes lèvres
Faut des diamants sous mes lèvres`,l0=`Je fais attention aux détails le diable se cache dedans
A la prod j'arrache deux dents
Petit ingrat je mange ma soupe et jamais je crache dedans
Je me lève quand le soleil dort
Certifié par la SNEP il me faut les soleils d'or

Je voulais être un vrai petit garçon comme les autres
Je dois bien l'admettre j'ai du mal à reconnaitre mes fautes
Pour cette vie la bien-sur que je ferais ce qu'il faut
Je vesqui ce traitre bien-sur que je vesqui ce faux
Pinocchio je voulais être un vrai petit garçon
Pinocchio juste un vrai petit garçon
Un corps de bois mais j'ai le cœur en glaçon
Pinocchio un vrai petit garçon

Rien qui me parle je vois son nez qui s'allonge
Je voulais juste être un vrai petit garçon
3am sur fl comme Walter je cuisine en caleçon
Je lui ai fait confiance grave erreur mais j'ai retenu la leçon
Je la prend dans mes bras et je pleure
Bébé n'ai pas peur parce que moi j'ai peur
Sur la scène jette des billet je n'ai pas besoin que tu me jette des fleurs
Je repense pas au passé ça me donne des hauts les cœurs
Je serais jamais le plus gros poisson
Tant que je me noie dans la boisson
Je m'administre mon propre poison
Faim de loup faut les quiches a foison
Balenciaga sur la toison
Balenciaga sur la toison
la fierté dans le regard de ma mère
Des vrais frères une villa au bord de la mer
La plume à Baudelaire
Fuck un ennemi d'ennemi je ne traine qu'avec amis d'amis
Bientôt paris j'arrive
Une seule erreur et c'est le charivari

Je voulais être un vrai petit garçon comme les autres
Je dois bien l'admettre j'ai du mal à reconnaitre mes fautes
Pour cette vie la bien-sur que je ferais ce qu'il faut
Je vesqui ce traitre bien-sur que je vesqui ce faux
Pinocchio je voulais être un vrai petit garçon
Pinocchio juste un vrai petit garçon
Un corps de bois mais j'ai le cœur en glaçon
Pinocchio un vrai petit garçon

Comme les autres
Je dois bien l'admettre j'ai du mal à reconnaitre mes fautes
Pour cette vie la bien-sur que je ferais ce qu'il faut
Je vesqui ce traitre bien-sur que je vesqui ce faux`,s0=`Putain d'époque faut des putains de biceps
Des putains de triceps
Un putain de triplex
Mélanger le putain de pyrex
Douce mélodie quand je pianote sa chatte comme un Rhode
Je vois sa lingerie à travers sa robe
Il faut des statues de nous comme a Rhode
Encore un peu plus encore un peu
Sur la prod encore à deux
Complémentaire un corps à deux tête
Nique un peut être
Je sais ce que je peut être
Y'a ta bitch qui prie pour moi elle est à genoux à mes pieds
Parano j'écarte le store pour épier
Un schlass dans la poche j'ai la plume et l'épée
Je rap la BO de ma vie pas de face B
Au bout du chemin c'est fini autant tout donner
Je te laisse sur le bitume la gueule engoudronnée
A quoi bon bouffer Gucci avec des couverts en plastiques
Réduction de bruit j'ai pas à écouter vos cap
Elle m'entoure de ses bras j'entoure les liasses d'un élastique
Je la baise bien elle peu plus marcher je sais tout les héros ne portent pas de capes

Encore un peu plus encore un peu
Sur la prod encore à deux
Complémentaire un corps à deux tête
Nique un peut être

Là c'est le nouveau TH stem
Fuck se mettre sous THC
J'suis de l'époque des VHS
Et j'suis un Vrai V A C
Pas de VVS sur le bracelet
Pas de pacte avec le diable j'kick avec mon casque et
Je cap solo sur mon PC
J'en ai marre d'encaisser
Tout mes démons qui saturent les basses dans mes caissons
J'veux les colis V7 et la SACEM de mes sons
J'ai créé un nouvel élément j'me sens comme Luc Besson
Et j'en ai rien a foutre g
J'suis pas full jean
Faut que je brille jusqu'au Fidjis et je serai Gucci
Pour l'instant ça croule pas sous les coup de fil
Pour ter-mon la pyra ces bâtards ils prennent des coupes files
Lui c'est pas un vrai faut que tu guette ce qu'il ya sous les sourcils
J'assassine avec mes placements et j'ai déjà du sursis
H24 ça dig des prods donc on reste quer-blo sur le site
Back in the days sur MH et frelon c'était sûr que j'geek
Puis j'ai découvert l'art des rimes avec mon stylo Bic
13 piges mes yeux brillaient comme la flamme olympique
Au milieu de la classe et y'avait rien de romantique
Je passais vraiment pour un con quitte à être grave authentique
Au final je sais pas si j'ai pris le bon choix ou pas
Si j'arrête le son maleugeu yaura pas de come back
Toutes façon quand je t'appelle répondeur ya pas de call back
Là j'ai buté le diez le son est mort donc c'est un ghost track`,u0=`Je rêve d'avoir le monde dans la main
D'être le monde de demain
J'ai du mal à entendre mes frères crier à l'aide
Car mon ventre cri qu'il à faim
Je suis sonner par les cris
Sonné par le bruit
Ce petit serpent à voulu me faire croquer dans le fruit
Je rêve d'avoir le monde dans la main
D'être le monde de demain
J'ai du mal à entendre mes frères crier à l'aide
Car mon ventre cri qu'il à faim
Je suis sonner par les cris
Sonné par le bruit
Ce petit serpent à voulu me faire croquer dans le fruit

J'ai du mal à entendre mes frères crier à l'aide
J'imagine ma tête en grand sur un écran à LED
Ce petit serpent a voulu me faire croquer dans la pomme
Le monde à côté du taga dans la paume
Nouvelle saga nouveau tome
Je suis qu'un homme donc je renie mes fautes
Si t'es pas amicale
Le schlass finira dans tes amygdales
Sur ma propre vague amirale
Libérez Thug libérez la mygale
Libérez Thugger
Je fais la prod je rap et je gère le buffer
Succès je suis en route dans le Uber
C'est pas le travail qui paye mais la chance et le talent
Et le travail apporte le talent
Tu mise sur moi tu mise sur le bon étalon
J'avance l'estomac dans les talon
La ça régale y'a Koba qui est libre
et dans mon verre y'a cuba qui est libre
Pourquoi tu copies crois en toi suce ta propre bite
Suis ton propre rythme
Le monde est notre je l'ais vu dans le film avec Tony Montana
Il me faut la SACEM en indé et le buz à Hannah Montana

Je rêve d'avoir le monde dans la main
D'être le monde de demain
J'ai du mal à entendre mes frères crier à l'aide
Car mon ventre cri qu'il à faim
Je suis sonner par les cris
Sonné par le bruit
Ce petit serpent à voulu me faire croquer dans le fruit
Je rêve d'avoir le monde dans la main
D'être le monde de demain
J'ai du mal à entendre mes frères crier à l'aide
Car mon ventre cri qu'il à faim
Je suis sonner par les cris
Sonné par le bruit
Ce petit serpent à voulu me faire croquer dans le fruit

Du mal à comprendre les autres de la plaque je suis a côté
Sur le mur un tableau de oim avec une plaque a côté
Je peins sur la prod comme si je m'appelais Monet
Que dieux me bénisse que jamais je goute à la codé
Que dieux me bénisse
Des parasites
Et des paparazzis
De la maladie
Malheureusement je ne prévenir
Le mal à venir
Elle veut qu'on parle
Mais elle comprend pas
Je rajoute au compte un chiffre tracé au compas
Pour mon petit fils qui n'existera pas
Face à la grandeur de l'univers je me sens dépassé
Pour faire cette merde j'ai des montagnes à déplacer
Des records à casser
J'ai le yeux gonflés il faut un peut de glace sur mes lunettes
Ce qui m'arrive c'est lunaire objectif ne pas vire une vie désuète
Je parle a la lune et je dors au soleil
Je suis peut être pire que demain mais meilleur que la veille
Je changerais pas le monde mais le mood avec un blunt
Maman je l'aurais fait pas quand je serais ingénieur mais quand j'aurais mon Grünt

Je rêve d'avoir le monde dans la main
D'être le monde de demain
J'ai du mal à entendre mes frères crier à l'aide
Car mon ventre cri qu'il à faim
Je suis sonner par les cris
Sonné par le bruit
Ce petit serpent à voulu me faire croquer dans le fruit
Je rêve d'avoir le monde dans la main
D'être le monde de demain
J'ai du mal à entendre mes frères crier à l'aide
Car mon ventre cri qu'il à faim
Je suis sonner par les cris
Sonné par le bruit
Ce petit serpent à voulu me faire croquer dans le fruit`,i0=`Y'a mes zinc et les autres
D'ailleurs je fais pas confiance aux zincs des autres
Faut se différencier les un des autres
Encore un album jamais deux sans trois
Faut que tu comprennes qu'ils t'aiment y'aura jamais d'eux sans toi
Y'a mes zinc et les autres
D'ailleurs je fais pas confiance aux zincs des autres
Faut se différencier les un des autres
Y'a mes zinc et les autres (zinc zinc zinc)
Y'a mes zinc et les autres
Je fais pas confiance aux zincs des autres

Fils de je suis plus un tipeu
Du gâteau j'en veux plus qu'un petit peu
Je te regarde pas toi mais l'infini qu'il y a derrière
Je suis en 2024 depuis l'année dernière
Je suis parano je ferme les portes j'écoute le moindre bruit
C'est un faux je préfère rester loin de lui
Je m'apprête à servir dans le fourneau des sons j'en ai plein de cuits
La plage pour la vue et la piscine pour le bain de nuit
Tu me regarde baiser des prods c'est du voyeurisme
J'avise sur le plan quand je vois le risque
Y'a pas de cap y'a même pas un poil sur le caillou
Apex predator comme l'alligator dans les bayous
Je crève les yeux comme personne
Je suis l'élu comme Percy
Comme Mr. Anderson
Je veux remplir un Bercy
Si je veux être acclamé faut pas passer le temps a glaner
Rappeur de l'année mais les roses on fanées

Y'a mes zinc et les autres
D'ailleurs je fais pas confiance aux zincs des autres
Faut se différencier les un des autres
Encore un album jamais deux sans trois
Faut que tu comprennes qu'ils t'aiment y'aura jamais d'eux sans toi
Y'a mes zinc et les autres
D'ailleurs je fais pas confiance aux zincs des autres
Faut se différencier les un des autres
Y'a mes zinc et les autres (zinc zinc zinc)
Y'a mes zinc et les autres
Je fais pas confiance aux zincs des autres

Les gens deviennent vite envieux
Je ressors victorieux
Retourne faire le tapin dans le glory hole
Moi je me réserve un avenir glorieux
Je fume la frappe je fume la Federer
J'ai un publique à fédérer
Je vois des richesses quand je fais des rêves
Je fais cette merde c'est chaud comme au Guatemala
Je croyais qu'on était frère alors pourquoi t'es pas la
S/O jean j'espère qu'un jour il aura sa Passat
Décevoir ma mif tout mais pas ça
Je fais ce qu'il faut tu fais tout ce qu'ils font
Faut ice VVS ouais tout ce qui fond
J'ai des rêves de grandeur il me faut tout ce biffeton
J'ai tout lâché dans le siphon je suis bleu métal
Je t'aime un peu beaucoup passionnément j'ai compté les pétales
Je suis venu prendre le trophée la coupe et la médaille
Je m'ouvre pas je connais trop de salope
Je fais confiance qu'a ma meuf et celle dont mon œuf provient de ses trompes de Fallope

Y'a mes zinc et les autres
D'ailleurs je fais pas confiance aux zincs des autres
Faut se différencier les un des autres
Encore un album jamais deux sans trois
Faut que tu comprennes qu'ils t'aiment y'aura jamais d'eux sans toi
Y'a mes zinc et les autres
D'ailleurs je fais pas confiance aux zincs des autres
Faut se différencier les un des autres
Y'a mes zinc et les autres (zinc zinc zinc)
Y'a mes zinc et les autres
Je fais pas confiance aux zincs des autres`,r0=`TH Stem c'est le diamant au fond de la mine
Et Les ops je les lamine
Faut la benz faut l'alpine
Je venu graille comme un porc et pas garder la ligne
Faut les billets de la teinte de la lean
Faut les billets violets
Je grimpe la montagne avec le piolet
Fallait être un pionnier
Maintenant je te ris au nez

Tout est carré comme le burb
Faut l'argent et la beuh dans le beurre
Avant c'était mon blud
Maintenant c'est juste un poignard dans le cœur
Wow
Je vois la lumière depuis le bas de la faille
Je pars à London Victoria
Wow
J'ai pris les devants pas la taille
TH Stem c'est un victory lap
Petit serpent dans le sable a voulu me faire succomber
J'ai toujours voulu des quiches depuis le jour ou j'ai su compter
Il m'a montré j'ai fait mieux
Je suis fait pour cette shit
Quand tu le fais regarde moi dans les yeux
Je suis né pour cette shit

TH Stem c'est le diamant au fond de la mine
Et Les ops je les lamine
Faut la benz faut l'alpine
Je venu graille comme un porc et pas garder la ligne
Faut les billets de la teinte de la lean
Faut les billets violets
Je grimpe la montagne avec le piolet
Fallait être un pionnier
Maintenant je te ris au nez

Dans l'ordi ça stack des Hits sur Hits
J'ai gardé quelques neurones dans le kit
On god
J'ai vu mon corps cryogénisé dans le pod
Vous êtes 10 dans votre équipe personne casse les codes
TH STEM le ying yang c'est la bonne méthode
Mais c'est pas pour autant qu'on a percé
Et mageule si t'as pas la persévérance pourquoi tu mets toute ton âme dans des versets
Yen beaucoup de gens qui dorment sur notre talent
D'autres qui dorment sur des viol dans les établissements
Belek à toi mageule à tout tes agissements
Car pour ce genre de choses j'suis pas compatissant
Avant je taffais de 8 à 16
Mais les patrons mageule ça m'as grave saoulé
Donner son temps pour de la thune c'est de la d
Avec le temps les ambitions s'écroulait
Anti-capitaliste j'ai la vitalité
Il m'as dit d'arrêter
Ma personnalité n'as pas donner naissance
A tout ces fils de timp qui gardent la balle au centre
Donc j'ai fais mon propre sentier
TH Stem cet année on fait tous les chantiers
L'argent je le bouge juste pour faire suer mes banquiers
Mon dû si je le récup je le prendrais qu'entier

TH Stem c'est le diamant au fond de la mine
Et Les ops je les lamine
Faut la benz faut l'alpine
Je venu graille comme un porc et pas garder la ligne
Faut les billets de la teinte de la lean
Faut les billets violets
Je grimpe la montagne avec le piolet
Fallait être un pionnier
Maintenant je te ris au nez`,o0=`Y'a rien à mettre dans le doggybag
Yeah yeah yeah yeah
Le prod repart dans le bodybag
Yeah yeah yeah yeah
La bitch elle a le booty big
Yeah yeah yeah yeah
Elle envoie des booty pics
Yeah yeah yeah yeah
Y'a rien à mettre dans le doggybag
Yeah yeah yeah yeah
Le prod repart dans le bodybag
Yeah yeah yeah yeah
La bitch elle a le booty big
Yeah yeah yeah yeah
Elle envoie des booty pics
Yeah yeah yeah yeah

STEM TH faut qu'on envoie encore plus de tracks
Ils se grattent les veines c'est la danse des cracks
On fait beaucoup de bars on empile des packs
Ya des pointeurs qui méritent des claques
Des violeurs qu'il faut laisser dans des flaques
De sang
Ou bien sous les roues de la 206
Qui débarque en pointe à 210
Nouvel artiste dans la dystopie
J'suis sur Ditto pas sur Distro Kid
J'te laisse collab ça dépends de ton ki
J'fais belek aux piques assiettes
J'ai trop la dalle comme le g d'A7
Géné d'anciens je connais les K7
Un open mic et je crame la scène
Je traverse la plaine comme un chevalier valeureux
J'sais que c'est la liberté qui me rendra bad heureux
Je crois pas que dieu ai décidé qu'il y ai qu'un heureux
Donc j'crame les calories
J'vesqui les obstacles les balles à la Keanu Reeve
J'ai trop ramé je sais pas j'arrive à quelle rive
Je craches ces flammes mais je sais pas c'est quelle ville
TH et STEM zinc on augmente les kelvins


Y'a rien à mettre dans le doggybag
Yeah yeah yeah yeah
Le prod repart dans le bodybag
Yeah yeah yeah yeah
La bitch elle a le booty big
Yeah yeah yeah yeah
Elle envoie des booty pics
Yeah yeah yeah yeah
Y'a rien à mettre dans le doggybag
Yeah yeah yeah yeah
Le prod repart dans le bodybag
Yeah yeah yeah yeah
La bitch elle a le booty big
Yeah yeah yeah yeah
Elle envoie des booty pics
Yeah yeah yeah yeah

Je regarde mon reflet dans la vitre du tram
Fuck le buzz on vit pas pour les cams
Je vais pas m'embrouiller pour une teil ou pour des grammes
De ce taudis faut que je décale
Je vie ma shit pendant que tu décalques
TH Stem nouvelle cargaison pour que tu te régales
J'enfume la pièce je me réveille sur Kralizec je suis dans un zion
Rien a sert de chialer 99 problèmes une teil comme solution
Je suis en déplacement elle envoie des snaps rouges
On est pas fait pour s'aimer fréro dégage bouge
Tu parle beaucoup j'attends encore des actions
Je fais des pompes des tractions
Toujours au dessus comme le numérateur dans la fraction
Je réprime ma haine je laisse parler mes passions
Je crois en l'équipe en la faction
TH Stem une mine d'or en phase d'extraction

Y'a rien à mettre dans le doggybag
Yeah yeah yeah yeah
Le prod repart dans le bodybag
Yeah yeah yeah yeah
La bitch elle a le booty big
Yeah yeah yeah yeah
Elle envoie des booty pics
Yeah yeah yeah yeah
Y'a rien à mettre dans le doggybag
Yeah yeah yeah yeah
Le prod repart dans le bodybag
Yeah yeah yeah yeah
La bitch elle a le booty big
Yeah yeah yeah yeah
Elle envoie des booty pics
Yeah yeah yeah yeah`,c0=`Et moi je peux pas tendre la main
Des fakes gros yen a tellement
J'men branle de faire des tals
"Mais TH tu vis dans quel monde ?"
Tu m'envoie des signes mais je réponds pas
Tu veux que je parle quelle langue
TH STEM c'est plus rap nous c'est un Rock Band
Va chercher le pote de ton pote là je crois bien qu'il ya quelque chose à faire
Que je regarde autour de moi je vois des flammes tout comme en enfer
ça fait des années que je vois ma destinée que je veux la lumière que les portes renferment
Je penses qu'à canner je penses qu'à canner jamais je penserais au long terme

Je suis passé devant
Je suis passé devant
Ma vie
Car j'suis resté devant les écrans
Assis
ça me rends acide
Pour me venger faut que je fasse un classique
Faut monter avec les basiques
Full Etnies j'ai pas de Asics
Et pète ton crâne si tu le veux
Je prends ni alcool ni beuh non
Je te le répète en deux langues
Follo el alcoolo
J'suis dans un train de vie
Où tous les jours c'est comme un jour férié
Ya le diable qui veut me faire des propositions
Mais le guichet est fermé
J'ai la vision dans mon appareil
Tu nous compares mais c'est pas pareil
Dans tout tes clips t'assumes pas tes peurs
T'as peur que tes potes ça les fassent marrer
A l'ancienne moi j'étais ingénieur maintenant faut que je fasse un p'tit truc en plus
Je m'en rappelle j'allais manger au CROUS et le soir j'grattais mes textes dans le bus

Et moi je peux pas tendre la main
Des fakes gros yen a tellement
J'men branle de faire des tals
"Mais TH tu vis dans quel monde ?"
Tu m'envoie des signes mais je réponds pas
Tu veux que je parle quelle langue
TH STEM c'est plus rap nous c'est un Rock Band
Va chercher le pote de ton pote là je crois bien qu'il ya quelque chose à faire
Que je regarde autour de moi je vois des flammes tout comme en enfer
ça fait des années que je vois ma destinée que je veux la lumière que les portes renferment
Je penses qu'à canner je penses qu'à canner jamais je penserais au long terme


Je consomme alcool et beuh
Ouais je mélange les deux
Tout les jour fuck les 22
J'ai bientôt fini mes 22
Combien de temps à vivre
Yeah on est des twin
Comme le yang et le yin
Y'a que des fakes on se croirait chez le faussaire
Toi d'une salle pute t'as un faux air
Je pense au papier quand j'ouvre les paupières
Faut bien plus que des VVS sur les molaires
Je suis dans le bus je m'imagine dans le Viano
Eux c'est des fakes des acteurs comme Cyrano
TH Stem tu cons tu tombe acro
J'en ai rien à foutre de la promo
TH Stem tu cons tu tombe acro
Je vais faire des tals donc j'en ai rien à foutre de la promo`,m0=`Cours, bitch il faut que tu cours
Je suis comme STEM en haut de la courbe han
J'ai la dalle comme quand j'étais p'tit que je voulais tape les grand de la cours
Je voulais tape les grand de la cours
Maintenant j'ai banger dans le four
Leurs son j'ai fais le tour
J'sais que tous leurs récits c'est du faux
TH Stem on s'aime comme des twin brothers
On saccage la prod comme 2 avions dans les Twin Towers
Je sais que ce brother est un faux
Stem music c'est ce ça qui te faut
Je t'ai jamais vu mordre pourtant tu fais que montrer les crocs

Je fais le jeu du prédateur et de la proie
J'arrive en cheval de Troyes
Je les défonces juste par millier j'me sens comme Bush en 2003
Fuck les ricains moi je les aiment pas parce qu'ils manipulent bien trop de choses
Jordan faisait le grand écart et les politiques c'est bien trop de hoes
Je me sens comme Bush en 2k3 ou Gucci Mane en 2k6
Fuck les politiques pour eux on est que de la pisse
Je déteste les fils de pute et encore plus les vieux racistes
Je repasse le cromis à TH pour qu'il finisse ce classique

J'arrive en BRRRR j'arrive en Yeah yeah
Dans l'auditoire yavait que des sourds
Mais pourtant t'attends le payday
T'aurais jamais dû vesqui les cours
J'baise la pluparts de ces MC pourtant j'fais ça que de temps en temps
Arrête de parler dans le vent là faut que tu choisisses ton camp
Je fais pas confiance à la chance gros j'ai pris les devants
Dans toute les pièces je suis l'éléphant
Et sur la prod je suis dans mon élément
Th stem c'est Gon et Kirua
Y'a personne au dessus de moi
J'ai versé moins d'encre sur la feuille que d'alcool dans mon foie

TH STEM c'est la bonne connexion
2024 on a les bonnes projections
Faut qu'on graille plus en excédent
ça f*** la prod et ça mets pas de protection
On lui claque les seuf en doggy
On a un tour d'avance sorry not sorry
Sorry not sorry

Cours, bitch il faut que tu cours
Je suis comme STEM en haut de la courbe han
J'ai la dalle comme quand j'étais p'tit que je voulais tape les grand de la cours
Je voulais tape les grand de la cours
Maintenant j'ai banger dans le four
Leurs son j'ai fais le tour
J'sais que tous leurs récits c'est du faux
TH Stem on s'aime comme des twin brothers
On saccage la prod comme 2 avions dans les Twin Towers
Je sais que ce brother est un faux
Stem music c'est ce ça qui te faut
Je t'ai jamais vu mordre pourtant tu fais que montrer les crocs`,f0=`Ya mes démons dans l'appart
C'est eux qui font mes backs
J'ai les mêmes traumas depuis ti-peu mageule c'est comme un impact
J'suis pas solo sur la track TH STEM les twins frère
Faut que tu te souvienne de ces blazes pour les gravés dans la pierre

Faut que je sécurise le périmètre même si y'a personne autour de moi
J'drop des tracks j'drop des bars dans le creux des bras ils ont de l'eczéma
Profite encore tant que les flows sont là
Dans le labo je me sens comme un roi
Toi je te vois comme un rat
Sur qui j'expérimente mes raps
Je fais que try hard gros ya pas d'hollyday
Full énergie non ya pas de mode veille
Nouvelle artiste de l'atlantique bay
26 bientôt je rejoins Kobain
26 bientôt je rejoins Fredo Santana
Tu peux préparer les apparats
J'en ai fais du chemin depuis 100 carats
On va ensemble comme les deux twix
Comme si on était deux twin
Faut rouler dans des Hotwheels
Avec mes anges dans l'appart je noie mes démons dans le verre
Je suis fonscar dans le canap je mesure même plus quand je serre

Ya mes démons dans l'appart
C'est eux qui font mes backs
J'ai les mêmes traumas depuis ti-peu mageule c'est comme un impact
J'suis pas solo sur la track TH STEM les twins frère
Faut que tu te souvienne de ces blazes pour les gravés dans la pierre

Twin activity
On monte jusqu'à l'infinity
T'es un traître c'est définitif
J'écris sous le ciel étoilé
Faut pas que je me voile la face
Dans le marbre le flow est taillé
J'essaie de faire ma place
Je gratte comme si la feuille avec de l'eczéma
Y'a que sur la track que je suis personnel
Y'a que sur la track que je suis chez moi
J'ai soufflé mes 21 bougies je doute déjà de mes poumons
Mais faut vivre donc je pop pop pop le bouchon`,d0=`Ces goofy sont des blagues ces goofy sont des quoi
J'ai voulu prendre le soleil je me suis brûlé les doigts

Avant de partir je n'ai pas pris d'affaire je suis venu remplir le bag
J'avais des choses à dire donc j'ai pris le mic pour vider le mag
J'n'aime pas ce type mais il me colle aux baskets comme un airtag
Ils n'ont pas capté le del ces goofy sont des blagues
Avant de partir je n'ai pas pris d'affaire je suis venu remplir le bag
J'avais des choses à dire donc j'ai pris le mic pour vider le mag
J'n'aime pas ce type mais il me colle aux baskets comme un airtag
Ils n'ont pas capté le del ces goofy sont des blagues

Je suis venu remplir le baguage
Je n'aime pas ta legueu
Je préfère la beugeu
Je préfère le taga
Je suis venu pour le braquage
J'écoute thugger
Fuck les cistera et les maga
J'aspire à changer le mode de vie
Ce con pense qu'on fuck avec lui je suis mort de rire
Quand je rentre dans la pièce c'est all eyes on me
Je vesqui l'alcoolisme et la folie
Stemcorp c'est members only
Je suis arrivé dans le game avant la mort du deuxième couplet
Je n'en n'ai même pas un mais je rêve déjà du deuxième coupé
Je suis pas venu me loupé
Pour la mélo je prendrais tes pleures et je les ferais looper
Il a jamais rien fait
Mais il fait que parler
C'est pas du rap d'assassin c'est du rap d'ingé son
Pourquoi je ne suis pas au sommet je me pose la question
Je téma le bilan de fin d'année
Quand est ce que je pourrai me pavaner
Je me dois de cravacher
Pour être sur le divan affalé

Avant de partir je n'ai pas pris d'affaire je suis venu remplir le bag
J'avais des choses à dire donc j'ai pris le mic pour vider le mag
J'n'aime pas ce type mais il me colle aux baskets comme un airtag
Ils n'ont pas capté le del ces goofy sont des blagues
Avant de partir je n'ai pas pris d'affaire je suis venu remplir le bag
J'avais des choses à dire donc j'ai pris le mic pour vider le mag
J'n'aime pas ce type mais il me colle aux baskets comme un airtag
Ils n'ont pas capté le del ces goofy sont des blagues`,p0=`Faut cette maille
Faut juste le temps qu'ils captent
C'était notre reuf avant qu'il cap
Faut cette maille
Faut juste le temps qu'ils captent
C'était notre reuf avant qu'il cap

C'était notre reuf avant qu'il cap cap cap cap cap
Faut que je rentre cette maille avant que je câble câble câble câble câble
On a l'avance faut le temps qu'ils captent captent captent captent captent
V'la de billets dans le sac
C'était notre reuf avant qu'il cap cap cap cap cap
Faut que je rentre cette maille avant que je câble câble câble câble câble
On a l'avance faut le temps qu'ils captent captent captent captent captent
Birkin pour le sac

A ce rythme la tu passeras pas l'hiver
Je crois ni en la paix ni en tes balivernes
L'enfer est assuré je pacte avec Lucifer
Être aussi chaud il a fallu s'y faire
La nuit m'appelle comme Kavinsky
Fonscar je vie un Kandinsky
Je suis chez oim mais je suis pas d'ici
Je fais des bénefs et des sacrifices
Dans cette merde y'a des sacrés fils de pute
Et cette maille c'est rien qu'un artifice de plus
Regarde moi je prévois déjà la retraite
De cette maille je me vois déjà me repaitre
Et de ces cendres je me vois déjà me renaitre
Je le ferais surement ou je le ferais peu être
Résine sur les doigts
Résille sur les bas
Résine sur les doigts
Résille sur les bas

C'était notre reuf avant qu'il cap cap cap cap cap
Faut que je rentre cette maille avant que je câble câble câble câble câble
On a l'avance faut le temps qu'ils captent captent captent captent captent
V'la de billets dans le sac
C'était notre reuf avant qu'il cap cap cap cap cap
Faut que je rentre cette maille avant que je câble câble câble câble câble
On a l'avance faut le temps qu'ils captent captent captent captent captent
Birkin pour le sac

Faut cette maille
Faut juste le temps qu'ils captent
C'était notre reuf avant qu'il cap
Faut cette maille
Faut juste le temps qu'ils captent
C'était notre reuf avant qu'il cap`,A0=`Baby je ne te ferais pas de mal sauf si tu le veux
Je voulais une bad bitch ou une good girl en un j'ai eu les deux
Baby je ne te ferais pas de mal sauf si tu le veux
Je voulais une bad bitch ou une good girl en un j'ai eu les deux
Fixé sur ses formes
En bas du dos
Do ré mi fa
Je la prend sur le sol
Je sais ce qu'elle aime
Ce qu'il lui faut
Faux semblant sous la
Couette elle devient folle
Fixé sur ses formes
En bas du dos
Do ré mi fa
Je la prend sur le sol
Je sais ce qu'elle aime
Ce qu'il lui faut
Faux semblant sous la
Couette elle devient folle

J'suis content quand j'reçois mon biff
Tu peux pas savoir tout ce que j'ai donné pour cet or
J'ai donné mon temps à des gens qui m'donnaient même pas l'heure
Tu peux parler parler j'écoute pas on a pas les mêmes valeurs
J'reconnais quand j'ai tort
J'peux pas aimer aimer j'sens mon cœur qui s'tord
J'peux pas l'aimer l'aimer l'aimer pour des bijoux
Qui brillent elle crie elle donne son corps
De toute façon pourquoi plaire, pourquoi faire
J'emmènerais personne avec moi à ma mort
Pas de sang pas d'oxygène, moi j'carbure à la haine
De moins en moins d'amis, plus en plus de fers
De plus en plus de succès, moins d'vrais frères
Baby sans toi j'suis pas tendre
Baby pour toi j'peux attendre
Baby sans amour on se portera mieux

Baby je ne te ferais pas de mal sauf si tu le veux
Je voulais une bad bitch ou une good girl en un j'ai eu les deux
Baby je ne te ferais pas de mal sauf si tu le veux
Je voulais une bad bitch ou une good girl en un j'ai eu les deux
Fixé sur ses formes
En bas du dos
Do ré mi fa
Je la prend sur le sol
Je sais ce qu'elle aime
Ce qu'il lui faut
Faux semblant sous la
Couette elle devient folle
Fixé sur ses formes
En bas du dos
Do ré mi fa
Je la prend sur le sol
Je sais ce qu'elle aime
Ce qu'il lui faut
Faux semblant sous la
Couette elle devient folle

Je fais pas que ça pour la monney yeah
J'ai poussé solo parmi les orties
Tout les soirs je me la pète à l'armagnac
Ça boit fort comme si c'était un hostie
J'écoute même plus les infos ni les on dit
Les racks et les skills j'ai déjà tout pris
On a les techniques ainsi que les outils
Ces Mc valent rien c'est des broutilles
Je vois des flammes comme si j'étais en enfer
Mais non c'est moi qui crache le feu tout les jours j'écris enfermé
Ya des ceme que je vais interner je sais que je peut pas alterner
Entre les flows et les cendres
Entre les faux et les membres
De parano je déborde et mes relations je vais devoir fermer
Je crois en mon étoile comme le shérif han
Je sais pas ce que je ferai mais je serais méritant
Dans le sous sol poser avec mes titans
Fume des gnax mon âme est lévitante
H24 sur la west side je me sentirai comme un cainri
Jamais de gold sur les dents je préfère laisser apparaître mes caries

Baby je ne te ferais pas de mal sauf si tu le veux
Je voulais une bad bitch ou une good girl en un j'ai eu les deux
Baby je ne te ferais pas de mal sauf si tu le veux
Je voulais une bad bitch ou une good girl en un j'ai eu les deux
Fixé sur ses formes
En bas du dos
Do ré mi fa
Je la prend sur le sol
Je sais ce qu'elle aime
Ce qu'il lui faut
Faux semblant sous la
Couette elle devient folle
Fixé sur ses formes
En bas du dos
Do ré mi fa
Je la prend sur le sol
Je sais ce qu'elle aime
Ce qu'il lui faut
Faux semblant sous la
Couette elle devient folle

Deux mains je la prends comme mon destin
Demain je verrais si on se rapproche ou si on reste loin`,v0=`Stem mes albums seront mes manifestos
L'avenir appartient à ceux qui se lèvent tôt
Y'en aura toujours un qui se lèvera plus tôt donc je dors sur mes deux oreilles
À la tête de l'organisation comme Jean Morel
J'aimerais pas être toi ta vie elle est Khene
Si c'est un fils de pute je ne respecte pas mon aîné
On s'entretue à petit feu
Quand je me tue ça me fait kiffer
La mala le bif
Je veux pas me salir les mains donc je vais te bifler
Quand je dis que je veux une arme je rigole pas
La vie c'est pas du cinéma
À tout ceux qui m'aident merci les gars
J'ai l'impression que c'est une sale merde parce que sinon il serait rien
Si jamais, si jamais, si jamais, RAH on sait très bien que tu ferais rien
Le renard est dans le poulailler, le loup dans la bergerie
Faut dans le dressing plus de tissu qu'une mercerie
Oui j'ai des problèmes mais on n'en parlera pas
Je veux pas que le moment le plus excitant de ma vie soit quand je vais à Castorama

Il me faut un tec-9 comme dans Elephant
Je suis braconnier si dans la pièce t'es l'éléphant
T'as du Louis, Fendi, tu n'es pas élégant
Je rentre dans ce bourbier avec la cagoule, les bottes et les gants
Il me faut un tec-9 comme dans Elephant
Je suis braconnier si dans la pièce t'es l'éléphant
T'as du Louis, Fendi, tu n'es pas élégant
Je rentre dans ce bourbier avec la cagoule, les bottes et les gants

Si Dieu existe ça fait longtemps qu'il est parti
Que fl soit loué
Mes œufs je les répartis
J'ai pas tout mis dans le même panier
Encore un soir où j'ai les pupilles qui se dilatent
Face à stem t'as les yeux qui s'écarquillent
Je suis pas encore mort c'est ce qu'on appelle un miracle
Le problème c'est ni la beuh ni le shit
Le prix Nobel de la paix faisait des frappes de drones sur les chiites
Plus besoin des diamants de Sierra Leone le sang est dans les sapes de Shein
Les camps de concentration sont aux USA et en Chine
Courbe l'échine
Ça fait froid dans le dos histoire sordide
Je suis zombifié j'ai le regard morbide
Faudra t'y faire
La plupart des chemins sont mortifères
S/O au reuf je suis fière d'être son petit frère
Sur la prod je me parle tout seul comme dans Shining
T'as dit quoi ? Sur la prod je me parle tout seul comme dans Shining
Rêve, réalité, cauchemar des fois je me perds
Je m'en fous de plaire à la masse d'être estampillé marque repère

Il me faut un tec-9 comme dans Elephant
Je suis braconnier si dans la pièce t'es l'éléphant
T'as du Louis, Fendi, tu n'es pas élégant
Je rentre dans ce bourbier avec la cagoule, les bottes et les gants
Il me faut un tec-9 comme dans Elephant
Je suis braconnier si dans la pièce t'es l'éléphant
T'as du Louis, Fendi, tu n'es pas élégant
Je rentre dans ce bourbier avec la cagoule, les bottes et les gants`,h0=`La vie de
La vie de rêve la vie de château
Les pêchés de la veille partent dans la chasse d'eau
La vie de
La vie de stem cette vie est un cadeau
La vie de stem la vie de rêve
Tu mérites le collier la laisse, toi t'es un cabot

De là où je suis toi t'es un nabot
Midas je fais de l'or avec mes manos
Tu n'as pas passé de temps dans mes sabots
Si tout se passe bien je lui passerai l'anneau
La misère est si belle mais tu ne l'aimes que quand elle est romancée
J'ai tellement de choses à dire je ne sais par où commencer
La balance ne penche pas du bon côté entre le vice et la vertu
Je descends la teille la vie n'a plus d'amertume
STEM
De la gloire je suis le sentier
Té-ma la taille des chantiers
J'aime pas les keufs les contrôleurs et les banquiers
La vie de rêve la vie de star
Les tals n'effaceront pas les scars
Même en bas du gouffre je garde espoir
Je save la mise
Comme dirait les ricain c'est la vie
Prince charmant je save la miss
Y'a plus de taga plus de tise c'est la crise

La vie de
La vie de rêve la vie de château
Les pêchés de la veille partent dans la chasse d'eau
La vie de
La vie de stem cette vie est un cadeau
La vie de stem la vie de rêve
Tu mérites le collier la laisse, toi t'es un cabot`,g0=`MTL MTL MTL MTL
MTL MTL MTL MTL

MTL MTL MTL MTL
Trap shit comme à ATL
Faut le papier long comme à CVS
Faut le respect et les VVS
MTL MTL MTL MTL
Jamais je rentre empty handed
Je veux un happy ending et que ces batards ils dead
MTL MTL MTL MTL
Trap shit comme à ATL
Faut le papier long comme à CVS
Faut le respect et les VVS
MTL MTL MTL MTL
Jamais je rentre empty handed
Je veux un happy ending et que ces batards ils dead

J'aime mes sangs j'aime mes brodies
La miss je lui enlève ses sap je lui enlève son body
Bitch c'est stem pas nobody
Je plane au-dessus d'eux dans l'apache
Je le calcule plus je trouve la page
Je suis tendu il me faut un massage
Avec la vue sur la plage
J'ai pas sorti l'album j'ai déjà prevu la suite je suis dans le futur
J'ai pas les gucci flip flop mais je l'ai baisé sur du futur
J'ai un rêve peut-être je me ferais aussi tuer par la CIA
Elle est loin l'époque où en classe ça faisait des papers planes comme MIA
J'ai une dalle digne de Kirby
On avançait ensemble maintenant c'est un derby
Je fais des pompes des burpees
Faut la maison hantée
Phantom Rolls Royce squelette Cartier
Le temps se fait désirer
Je guette avec attention chaque grain du sablier
Je suis dans le 456 je descends à Carlton
Faut que ça cartonne
Dormir au Ritz au Carlton
Je préfère pleurer dans la benz que dans le tromé
Quand il n'y aura plus personne il restera mes trophées

MTL MTL MTL MTL
Trap shit comme à ATL
Faut le papier long comme à CVS
Faut le respect et les VVS
MTL MTL MTL MTL
Jamais je rentre empty handed
Je veux un happy ending et que ces batards ils dead
MTL MTL MTL MTL
Trap shit comme à ATL
Faut le papier long comme à CVS
Faut le respect et les VVS
MTL MTL MTL MTL
Jamais je rentre empty handed
Je veux un happy ending et que ces batards ils dead

Faut tellement de VVS que je peux plus lire l'heure sur la Daytona
Je sais qu'on détonera
Je sais qu'on t'étonnera
J'ai des trucs qui me hantent j'ai mes propres méthodes de thérapie
Je suis venu retourner le game comme si j'étais therapy
Je rentre dans la pièce
Je rentre dans la pièce et tu paniques
Madame veut des talons
Elle veut des Manolo Blahnik
Je peux pas être parfait mme les VVS ont des défauts
Faut la fortune des Bezos
Dollars yen et peso
Je suis venu enfoncer la porte je suis bélier
J'ai ma team j'ai mes ailiers
Stem c'est le bon vin dans le cellier
So mon frère c'est mon mentor
Je pense au papier quand je m'endors
Si j'ouvre le disque dur c'est la boîte de Pandore
Ils en veulent ils en veulent ils veulent un encore
Ils en veulent ils en veulent ils veulent un encore
Il me faut un yacht comme le Noémi
On est pas forcément frère si on partage nos ennemis

MTL MTL MTL MTL
Trap shit comme à ATL
Faut le papier long comme à CVS
Faut le respect et les VVS
MTL MTL MTL MTL
Jamais je rentre empty handed
Je veux un happy ending et que ces batards ils dead
MTL MTL MTL MTL
Trap shit comme à ATL
Faut le papier long comme à CVS
Faut le respect et les VVS
MTL MTL MTL MTL
Jamais je rentre empty handed
Je veux un happy ending et que ces batards ils dead`,b0=`Dernier homme debout comme le capitaine Price
Faut la faut la maille
Faut de quoi ne plus jamais guetter le price
Reflet de sang sur le ice
Avant avant que je die
Je remercie Distro avant que je graille
Je plane au-dessus d'eux comme Nikolaï
Je marche comme un zombie j'ai bu trop de sky
J'ai cru c'était mon allié mais il m'a fait comme Shepherd
Dans le vaisseau comme Shepard
Je prends cette dope ça me rend che-per

Je suis perché dans l'aigle noir
J'ai fait du pera mon exutoire
Histoire de chèvre il était une fois
J'attends le décollage je cuis au soleil sur le tarmac
Je crois en le talent la chance n'est qu'une arnaque
J'essaie de faire place à la vertu mais des vieux démons me hantent
Je me sens comme Sisyphe toujours à remonter la pente
Faut péter la BNP pas la piggybank
Je suis l'inverse de Fifty je veux me faire many men

Gros j'ai la haine j'ai la rage j'ai la dalle j'ai la hargne
Faut les mili mili pour mes petits petits-fils que j'épargne
Ils écoutent du rap mais ils ne l'entendent pas
3am et je plains le voisin d'en bas
Il trahit les siens comme Makarov dans l'attentat
Jeune rappeur de Normandie
Je fume et je plane tout en haut dans le Normandy
Faut un Brabus une Bugatti ou une Bentley
Bref faut une caisse qui commence par B
Ils veulent me garder en cage mais j'ai la pince coupante pour le barbelé
Je suis perdu dans ma traversée du désert les vautours salivent
J'ai fait mon propre chemin je n'ai pas attendu que les planètes s'alignent
Je fais des prod je bois une Mactavish
J'escalade la montagne de glace comme Mactavish
Stem vendetta
Fuck un agent d'état
Je te vois petit comme un têtard
Stemcorp faut peser comme Meta
S/O mon frère qu'est-ce que je serais devenu sans lui
La go a les courbes de la 808
Ça fait 3 ans que je fais du rap à perte
Gros j'ai plus rien à perdre
Je me sors et je me mets tout seul dans la merde
Fuck
Objectif être une cash cow être un money man
Être un monument
Faut au moins la SACEM de Bolémvn
Sur le pas de la porte les pieds dans le sable
Je rêve de l'impensable
J'ai la foi gravée dans l'épine dorsale
Faire cette merde gros  j'adore ça
Faut mettre la famille dans la Bentley pas dans l'Opel Corsa
Spec op balle perforante pour le FN
Fuck un cistera balle dans la tête pour le FN
Faut que je ralentisse avant d'être un fein
Faut que j'accélère pour que la vie soit un film
Quand je m'allume tout disparaît
Mais y'a que cette meuf qui peut faire taire mes songes
J'y vais pas tête baissée je guette la profondeur avant que je plonge

Dernier homme debout comme le capitaine Price
Faut la faut la maille
Faut de quoi ne plus jamais guetter le price
Reflet de sang sur le ice
Avant avant que je die
Je remercie Distro avant que je graille
Je plane au-dessus d'eux comme Nikolaï
Je marche comme un zombie j'ai bu trop de sky
J'ai cru c'était mon allié mais il m'a fait comme Shepherd
Dans le vaisseau comme Shepard
Je prends cette dope ça me rend che-per`,y0=`Faut qu'on graille
Beaucoup de pain pour l'instant je n'ai que le quignon
Je tiens la prod par le chignon
Faut la maille
Ils pensent au SMIC ils sont mignons
Mais bitch faut les millions

Je vois mon avenir comme Néon
Je vois mon avenir comme Néon
Assis sur le trône comme Néron
Avec le fer comme Léon
Et je vais le faire comme Léo
Et je vais le faire comme Léo
Je glace le sang comme Zéro
J'esquive les balles comme Néo
Je vois mon avenir comme Néon
Je vois mon avenir comme Néon
Assis sur le trône comme Néron
Avec le fer comme Léon
Et je vais le faire comme Léo
Et je vais le faire comme Léo
Je glace le sang comme Zéro
J'esquive les balles comme Néo

Fuck le beef appelle moi Gandhi
J'ai glow up et j'ai grandi
Au mic comme chez Villeneuve y'a l'Incendie
Y'a les reuf qui s'étonnent
Lave la concu à l'acétone
Ça coule en moi comme Venom
Jeune faiseur de cash je me prénomme
Je cours après la fame mais mieux vaut courir que ramper
Faut v'la les Phantomes que le garage sois hanter
Je cours après le cash mais mieux vaut courir que ramper
Si je suis les mains vides mieux vaux mourir que rentrer

Je vois mon avenir comme Néon
Je vois mon avenir comme Néon
Assis sur le trône comme Néron
Avec le fer comme Léon
Et je vais le faire comme Léo
Et je vais le faire comme Léo
Je glace le sang comme Zéro
J'esquive les balles comme Néo
Je vois mon avenir comme Néon
Je vois mon avenir comme Néon
Assis sur le trône comme Néron
Avec le fer comme Léon
Et je vais le faire comme Léo
Et je vais le faire comme Léo
Je glace le sang comme Zéro
J'esquive les balles comme Néo

Comprends bien y'a pas de loi
Faut qu'on le fasse y'a pas le choix
Je la baise bien y'a pas de quoi
Sur le poignet y'a de l'aqua
Faut que je m'endorme dans la soie
Plusieurs flèches dans le carquois
Des bijoux sur la coiffe
Parole divine ma voix
Faut le top 5
Passer sur BFM ou bien FOX 5
Je suis dans le vréel fuck des faux seins
Je reviens plus fort tant que je pars pas en croisière sur le Styx
Et gros c'est fort là qu'est ce t'a mis dans le stick

Je vois mon avenir comme Néon
Je vois mon avenir comme Néon
Assis sur le trône comme Néron
Avec le fer comme Léon
Et je vais le faire comme Léo
Et je vais le faire comme Léo
Je glace le sang comme Zéro
J'esquive les balles comme Néo
Je vois mon avenir comme Néon
Je vois mon avenir comme Néon
Assis sur le trône comme Néron
Avec le fer comme Léon
Et je vais le faire comme Léo
Et je vais le faire comme Léo
Je glace le sang comme Zéro
J'esquive les balles comme Néo`,j0=`Faut du pain fils de pute il me faut du pain
Serpent essaie de passer pour humain
La seul personne qui n'est pas fier de moi c'est celle qui parle actuellement
Elle dis qu'elle t'aime mais fait gaffe la pute elle ment
Faut du pain fils de pute il me faut du pain
Serpent essaie de passer pour humain
La seul personne qui n'est pas fier de moi c'est celle qui parle actuellement
Elle dis qu'elle t'aime mais fait gaffe la pute elle ment

Encore une fois j'ai dis une promesse mais je n'ai pas fait l'action
Y'en a ils pensent trop que se faire des potes ses faire des fellations
Je fini le son je me sens comme dieu devant sa création
Fils de pute c'est la fin de la récréation
Tellement de bars c'est indécent
Je suis patient je sais que ça ne se fera pas en un décembre
La confiance ça ce gagne pas en un présent
La première fois j'ai posé un texte je crois j'avais bien 16 ans
Faut que je travail faut que j'articule
Je prend de la hauteur ils sont petits comme particule
Faut que je travail faut que je change mes habitudes
J'écris trop de textes ils ont des matricules
Libérez Gaza nique un méga sioniste
Si tu crois pas en moi c'est que t'es négationniste
On va te faire comme à la Moscowa je révise les angles d'attaque et la topologie
Gros ther je crois que je comprends l'astrologie

Faut du pain fils de pute il me faut du pain
Serpent essaie de passer pour humain
La seul personne qui n'est pas fier de moi c'est celle qui parle actuellement
Elle dis qu'elle t'aime mais fait gaffe la pute elle ment
Faut du pain fils de pute il me faut du pain
Serpent essaie de passer pour humain
La seul personne qui n'est pas fier de moi c'est celle qui parle actuellement
Elle dis qu'elle t'aime mais fait gaffe la pute elle ment

Je vais pas faire l'ancien je suis pas de l'époque de Project Pat
Mon futur je le vois bien le tient je le projette pas
Sur la prod séisme je suis pas responsable de ce qu'il commettra
C'est un gilet par balle pas une prière qui me protégera
L'argent t'achète tout sauf la loyauté
Je rajoute dans le cocktail une olive dénoyautée
Je frappe fort comme un sort de rage avec 10 pekkas
Que des gamins autour de moi comme un concert de Lujipeka
Merci Looperman pour les boucles
Il se croit original cargo bonnet Arc'teryx sur ses boucles
Dure de voir le vrai du faux ça va jusqu'au grammage du pull
Pour me faire bouger de la faudrait un attelage de bus
Je n'écoute pas tes balbutiements
C'est hallucinant
J'imagine ton cadavre dans une dalle de ciment
On va te faire comme à Austerlitz je révise les angles d'attaque et la topologie
Y'a que de moi même dont je peux faire l'apologie

Faut du pain fils de pute il me faut du pain
Serpent essaie de passer pour humain
La seul personne qui n'est pas fier de moi c'est celle qui parle actuellement
Elle dis qu'elle t'aime mais fait gaffe la pute elle ment
Faut du pain fils de pute il me faut du pain
Serpent essaie de passer pour humain
La seul personne qui n'est pas fier de moi c'est celle qui parle actuellement
Elle dis qu'elle t'aime mais fait gaffe la pute elle ment`,_0=`Crois moi on va pop fort, et ce même si tu voulais pas
Nos sons en enceinte on va brûler ta caisse comme TATP ou comme obus à phosphore
Maman voudrait qu'avec le temps je m'assagisse
Méfie toi d' l'eau qui dort j'reste calme quand la masse s'agite
J'frappe ton équipe j'ai le marteau de Thor et puis basta, masta
J'trouve que tu parle beaucoup pour quelqu'un qu'à que massa et shit
J'ai jamais fait dans le paraître crois moi
J'ai jamais fait semblant
Ces chiens veulent voir ma tête sur le bitume rêvent de me voir sanglant
Donc pour mes reufs faut que j'montre les dents

Fuck Genève bitch on les brûle
Phosphore blanc bitch on pop comme des bulles
Joue avec le feu mais le stress reste nul
Fuck le crack donnez la recette du gaz moutarde
On décolle tôt ou tard
Je vois pas je crois pas c'est pas sorcier
On a les même ambitions et ça bouge pas
On les fouette déjà en solo alors t'imagine pas à deux
Bitch tu sais que dans tout les cas l'avenir sera radieux
C'est pas en y allant mollo mollo que je passerais sur la deux
J'adresse mes prières à la famille nan je parle pas à dieu
Comme le napalm le drip colle à la peau
Stem objectif international comme le Macdo
On veut VVS prêt à lâcher beaucoup pour un anneau
CD faut écouler des camions et des paquebots
Pas tes affaires retire ton museau renard est rusé
Avec le Z dans le gaz discographie mérite un musée
Si j'ai la piscine de cash je me remet à la natation
Si je le fait c'est pour la passion
On s'en fout des frontières chez nous y'a pas de nation
Je vois clair dans ton jeu même avec ma vision de taupe
Je te le jure ça sera pour fraude si je fini en taule
Retiens un truc pour moi y'en a jamais de trop
On t'en met plein les yeux wow wow comme le flashball

Crois moi
Crois moi
Crois moi
Crois moi
Crois moi

Crois moi on va pop fort, et ce même si tu voulais pas
Nos sons en enceinte on va brûler ta caisse comme TATP ou comme obus à phosphore
Maman voudrait qu'avec le temps je m'assagisse
Méfie toi d' l'eau qui dort j'reste calme quand la masse s'agite
J'frappe ton équipe j'ai le marteau de Thor et puis basta, masta
J'trouve que tu parle beaucoup pour quelqu'un qu'à que massa et shit
J'ai jamais fait dans le paraître crois moi
J'ai jamais fait semblant
Ces chiens veulent voir ma tête sur le bitume rêvent de me voir sanglant
Donc pour mes reufs faut que j'montre les dents

Crois moi on va pop fort, et ce même si tu voulais pas
Fuck Genève bitch on les brule
Nos sons en enceinte on va brûler ta caisse comme TATP ou comme obus à phosphore`,q0="";async function vp(){const u=[],m=Object.assign({"../assets/music/album/ARCHANGE/songs/01_PREPA (feat. Timéon3X).flac":Og,"../assets/music/album/ARCHANGE/songs/02_SDA.flac":zg,"../assets/music/album/ARCHANGE/songs/03_DB COOPER.flac":Ng,"../assets/music/album/ARCHANGE/songs/04_R&D (feat. Teh Haar).flac":Lg,"../assets/music/album/ARCHANGE/songs/05_CORNUCOPIA.flac":Bg,"../assets/music/album/ARCHANGE/songs/06_MOUTON NOIR.flac":Ug,"../assets/music/album/ARCHANGE/songs/07_ENERVE.flac":Hg,"../assets/music/album/ARCHANGE/songs/08_OVER.flac":Gg,"../assets/music/album/ARCHANGE/songs/09_BEHEMOTH.flac":Yg,"../assets/music/album/ARCHANGE/songs/10_JEUNE STAR.flac":Qg,"../assets/music/album/ARCHANGE/songs/11_VRAI FRERE.flac":Vg,"../assets/music/album/ARCHANGE/songs/12_180.flac":wg,"../assets/music/album/SERAPHIN/songs/01_SERAPHIN.flac":kg,"../assets/music/album/SERAPHIN/songs/02_MONSTER.flac":Xg,"../assets/music/album/SERAPHIN/songs/03_ZOMBIE.flac":Zg,"../assets/music/album/SERAPHIN/songs/04_MAYBACH.flac":Fg,"../assets/music/album/SERAPHIN/songs/05_21.flac":Kg,"../assets/music/album/SERAPHIN/songs/06_TENET.flac":Pg,"../assets/music/album/SERAPHIN/songs/07_CROQUEUSE DE DIAMANTS.flac":Ig,"../assets/music/album/SERAPHIN/songs/08_APRES LA GUERRE.flac":Wg,"../assets/music/album/SERAPHIN/songs/09_MONTE DANS LE TRAIN.flac":$g,"../assets/music/album/SERAPHIN/songs/10_BABEL.flac":eb,"../assets/music/album/SERAPHIN/songs/11_MEMENTO MORI.flac":ab,"../assets/music/album/SERAPHIN/songs/12_OUTRO.flac":nb,"../assets/music/album/STEMPCORP/songs/10_PENITENCE.flac":tb,"../assets/music/album/STEMPCORP/songs/11_LAISSE POUR MORT.flac":lb,"../assets/music/album/STEMPCORP/songs/12_MOURIR SOBRE.flac":sb,"../assets/music/album/STEMPCORP/songs/1_DYSTOPIE.flac":ub,"../assets/music/album/STEMPCORP/songs/2_STEMCORP.flac":ib,"../assets/music/album/STEMPCORP/songs/3_IL FAUT.flac":rb,"../assets/music/album/STEMPCORP/songs/4_ANGE ET DEMON.flac":ob,"../assets/music/album/STEMPCORP/songs/5_PINNOCHIO.flac":cb,"../assets/music/album/STEMPCORP/songs/6_ARCTERYX.flac":mb,"../assets/music/album/STEMPCORP/songs/7_TOUT LES HEROS NE PORTENT PAS DE CAP (feat. Teh Haar).flac":fb,"../assets/music/album/STEMPCORP/songs/8_LE MONDE DANS LA MAIN.flac":db,"../assets/music/album/STEMPCORP/songs/9_LES ZINCS DES AUTRES.flac":pb,"../assets/music/ep/Twin Activity/songs/01_Victory lap.flac":Ab,"../assets/music/ep/Twin Activity/songs/02_Bodybag.flac":vb,"../assets/music/ep/Twin Activity/songs/03_Rock band.flac":hb,"../assets/music/ep/Twin Activity/songs/04_Twin Tower.flac":gb,"../assets/music/ep/Twin Activity/songs/05_Eczema.flac":bb,"../assets/music/single/BAG/songs/BAG.flac":yb,"../assets/music/single/CAP/songs/CAP.flac":jb,"../assets/music/single/Dieu me garde/songs/Dieu me garde.flac":_b,"../assets/music/single/Dorémi/songs/Dorémi (feat. Timéon3x, Teh haar).flac":qb,"../assets/music/single/ELEPHANT/songs/ELEPHANT.flac":Sb,"../assets/music/single/LA VIE DE CHATEAU/songs/LA VIE DE CHATEAU.flac":Eb,"../assets/music/single/MTL/songs/MTL.flac":Tb,"../assets/music/single/MW3/songs/ELEPHANT.flac":Jb,"../assets/music/single/NEON/songs/NEON.flac":Mb,"../assets/music/single/PAIN/songs/PAIN.flac":xb,"../assets/music/single/Phosphore/songs/Phosphore (feat. Timéon3x).flac":Cb,"../assets/music/single/Rougir la banque/songs/Rougir la banque (feat. CELLL).flac":Db}),c=Object.assign({"../assets/music/album/ARCHANGE/cover/cover archange.jpg":Rb,"../assets/music/album/SERAPHIN/cover/seraphin_cover_2_3K.jpg":Ob,"../assets/music/album/STEMPCORP/cover/COver.jpg":zb,"../assets/music/album/STEMPCORP/cover/COver.png":Nb,"../assets/music/ep/Twin Activity/cover/Twin Activity Cover 01.jpg":Lb,"../assets/music/single/BAG/cover/BA_3K.jpg":Bb,"../assets/music/single/CAP/cover/cover cap.jpg":Ub,"../assets/music/single/Dieu me garde/cover/DMGCOVERFINALE.jpg":Hb,"../assets/music/single/Dorémi/cover/timéon x stem2.jpg":Gb,"../assets/music/single/ELEPHANT/cover/COVER_ELEPHANT_3k.jpg":Yb,"../assets/music/single/LA VIE DE CHATEAU/cover/chateau.jpg":Qb,"../assets/music/single/MTL/cover/MTL FLAG 3K.jpg":Vb,"../assets/music/single/MW3/cover/MW3 3K.jpg":wb,"../assets/music/single/NEON/cover/akira julien final.jpg":kb,"../assets/music/single/PAIN/cover/coverPain.jpg":Xb,"../assets/music/single/Phosphore/cover/phosphore cover.jpg":Zb,"../assets/music/single/Rougir la banque/cover/rougir la banque cover.jpg":Fb}),r=Object.assign({"../assets/music/album/ARCHANGE/metadata.json":Pb,"../assets/music/album/SERAPHIN/metadata.json":Wb,"../assets/music/album/STEMPCORP/metadata.json":ey,"../assets/music/ep/Twin Activity/metadata.json":ny,"../assets/music/single/BAG/metadata.json":ly,"../assets/music/single/CAP/metadata.json":uy,"../assets/music/single/Dieu me garde/metadata.json":ry,"../assets/music/single/Dorémi/metadata.json":cy,"../assets/music/single/ELEPHANT/metadata.json":fy,"../assets/music/single/LA VIE DE CHATEAU/metadata.json":py,"../assets/music/single/MTL/metadata.json":vy,"../assets/music/single/MW3/metadata.json":gy,"../assets/music/single/NEON/metadata.json":yy,"../assets/music/single/PAIN/metadata.json":_y,"../assets/music/single/Phosphore/metadata.json":Sy,"../assets/music/single/Rougir la banque/metadata.json":Ty}),f=Object.assign({"../assets/music/album/ARCHANGE/lyrics/01_PREPA (feat. Timéon3X).txt":Jy,"../assets/music/album/ARCHANGE/lyrics/02_SDA.txt":My,"../assets/music/album/ARCHANGE/lyrics/03_DB COOPER.txt":xy,"../assets/music/album/ARCHANGE/lyrics/04_R&D (feat. Teh Haar).txt":Cy,"../assets/music/album/ARCHANGE/lyrics/05_CORNUCOPIA.txt":Dy,"../assets/music/album/ARCHANGE/lyrics/06_MOUTON NOIR.txt":Ry,"../assets/music/album/ARCHANGE/lyrics/07_ENERVE.txt":Oy,"../assets/music/album/ARCHANGE/lyrics/08_OVER.txt":zy,"../assets/music/album/ARCHANGE/lyrics/09_BEHEMOTH.txt":Ny,"../assets/music/album/ARCHANGE/lyrics/10_JEUNE STAR.txt":Ly,"../assets/music/album/ARCHANGE/lyrics/11_VRAI FRERE.txt":By,"../assets/music/album/ARCHANGE/lyrics/12_180.txt":Uy,"../assets/music/album/SERAPHIN/lyrics/01_SERAPHIN.txt":Hy,"../assets/music/album/SERAPHIN/lyrics/02_MONSTER.txt":Gy,"../assets/music/album/SERAPHIN/lyrics/03_ZOMBIE.txt":Yy,"../assets/music/album/SERAPHIN/lyrics/04_MAYBACH.txt":Qy,"../assets/music/album/SERAPHIN/lyrics/05_21.txt":Vy,"../assets/music/album/SERAPHIN/lyrics/06_TENET.txt":wy,"../assets/music/album/SERAPHIN/lyrics/07_CROQUEUSE DE DIAMANTS.txt":ky,"../assets/music/album/SERAPHIN/lyrics/08_APRES LA GUERRE.txt":Xy,"../assets/music/album/SERAPHIN/lyrics/09_MONTE DANS LE TRAIN.txt":Zy,"../assets/music/album/SERAPHIN/lyrics/10_BABEL.txt":Fy,"../assets/music/album/SERAPHIN/lyrics/11_MEMENTO MORI.txt":Ky,"../assets/music/album/SERAPHIN/lyrics/12_OUTRO.txt":Py,"../assets/music/album/STEMPCORP/lyrics/10_PENITENCE.txt":Iy,"../assets/music/album/STEMPCORP/lyrics/11_LAISSE POUR MORT.txt":Wy,"../assets/music/album/STEMPCORP/lyrics/12_MOURIR SOBRE.txt":$y,"../assets/music/album/STEMPCORP/lyrics/1_DYSTOPIE.txt":e0,"../assets/music/album/STEMPCORP/lyrics/2_STEMCORP.txt":a0,"../assets/music/album/STEMPCORP/lyrics/3_IL FAUT.txt":n0,"../assets/music/album/STEMPCORP/lyrics/4_ANGE ET DEMON.txt":t0,"../assets/music/album/STEMPCORP/lyrics/5_PINOCCHIO.txt":l0,"../assets/music/album/STEMPCORP/lyrics/7_TOUT LES HEROS NE PORTENT PAS DE CAP (feat. TEH HAAR).txt":s0,"../assets/music/album/STEMPCORP/lyrics/8_LE MONDE DANS LA MAIN.txt":u0,"../assets/music/album/STEMPCORP/lyrics/9_LES ZINCS DES AUTRES.txt":i0,"../assets/music/ep/Twin Activity/lyrics/01_Victory lap.txt":r0,"../assets/music/ep/Twin Activity/lyrics/02_Bodybag.txt":o0,"../assets/music/ep/Twin Activity/lyrics/03_Rock band.txt":c0,"../assets/music/ep/Twin Activity/lyrics/04_Twin Tower.txt":m0,"../assets/music/ep/Twin Activity/lyrics/05_Eczéma.txt":f0,"../assets/music/single/BAG/lyrics/BAG.txt":d0,"../assets/music/single/CAP/lyrics/CAP.txt":p0,"../assets/music/single/Dorémi/lyrics/Dorémi.txt":A0,"../assets/music/single/ELEPHANT/lyrics/ELEPHANT.txt":v0,"../assets/music/single/LA VIE DE CHATEAU/lyrics/LA VIE DE CHATEAU.txt":h0,"../assets/music/single/MTL/lyrics/MTL.txt":g0,"../assets/music/single/MW3/lyrics/MW3.txt":b0,"../assets/music/single/NEON/lyrics/NEON.txt":y0,"../assets/music/single/PAIN/lyrics/PAIN.txt":j0,"../assets/music/single/Phosphore/lyrics/Phosphore (feat. Timéon3X).txt":_0,"../assets/music/single/Rougir la banque/lyrics/Rougir la banque (feat. CELLL).txt":q0}),v=new Map,y=new Map,T=new Map,g=new Map;for(const p in m){const J=p.split("/"),E=J[4],N=J.pop()?.replace(".flac","").trim()||"Unknown";if(!v.has(E)){v.set(E,[]);const Q=p.includes("/album/")?xe.ALBUM:p.includes("/ep/")?xe.EP:xe.SINGLE;T.set(E,Q)}v.get(E)?.push(N)}for(const p in c){const J=p.split("/")[4];y.has(J)||y.set(J,c[p].default||c[p])}for(const p in f){const J=p.split("/").pop()?.replace(".txt","")||p.split("/")[4];g.set(J,f[p])}for(const p of v.keys()){const J=v.get(p)||[],E=y.get(p)||"",N=T.get(p)||xe.SINGLE,k=J.sort((G,F)=>G.localeCompare(F,void 0,{numeric:!0,sensitivity:"base"})).map(G=>({name:G,lyrics:g.get(G)})),Z=Object.keys(r).find(G=>G.includes(`/${p}/`)),V=Z?r[Z]:{},H=V.default||V;u.push({title:p,coverUrl:E,tracks:k,type:N,platforms:H.platforms||{},available:!0,releaseDate:H.releaseDate||"2000-01-01"})}return u.sort((p,J)=>new Date(J.releaseDate).getTime()-new Date(p.releaseDate).getTime()),u}const hp=C.createContext(null);function S0({children:u}){const[m,c]=C.useState(new Map([[xe.ALBUM,[]],[xe.EP,[]],[xe.SINGLE,[]]])),[r,f]=C.useState(!0);return C.useEffect(()=>{f(!0),vp().then(v=>{console.log(v);const y=new Map(m);v.forEach(T=>{const g=y.get(T.type)||[];y.set(T.type,[...g,T])}),c(y),f(!1)})},[]),O.jsx(hp.Provider,{value:{musics:m,loading:r},children:u})}function Pr(){const u=C.useContext(hp);if(!u)throw new Error("useMusic must be used inside MusicProvider");return u}function pu(u,m,c,r){return c&&r?`/songs/${r.toLowerCase()}/${c.toLowerCase()}/${m.toLowerCase()}/${u.toLowerCase()}`:`/songs/${m.toLowerCase()}/${u.toLowerCase()}`}function E0(){const[u,m]=C.useState(!1),c=Pr().musics,r=()=>{m(T=>!T)},f=()=>{m(!1)},y=(()=>{if(!c)return null;const T=c.get(xe.ALBUM)?.[0],g=c.get(xe.EP)?.[0],p=c.get(xe.SINGLE)?.[0],J=[T,g,p].filter(Boolean);return J.length===0?null:J.sort((E,N)=>{const Q=N?.releaseDate?new Date(N.releaseDate).getTime():0,k=E?.releaseDate?new Date(E.releaseDate).getTime():0;return Q-k})[0]})();return O.jsxs("header",{className:"header",children:[u&&O.jsx("div",{className:"menu-backdrop",onClick:()=>m(!1)}),O.jsxs("div",{id:"left-spacer",className:"spacer",children:[O.jsx("button",{className:"close-btn",onClick:r,"aria-label":"Ouvrir le menu",children:O.jsx(Dg,{className:"icon"})}),O.jsxs("div",{className:`side-menu ${u?"open":""}`,children:[O.jsx("button",{className:"close-btn",onClick:r,"aria-label":"Fermer le menu",children:O.jsx(Rg,{})}),O.jsxs("nav",{className:"side-nav",children:[O.jsx(Ca,{to:pu(y?.title||"",y?.type||xe.ALBUM),onClick:f,children:O.jsx("span",{className:"lastest-release-link",children:"Dernière sortie"})}),O.jsx(Ca,{to:"/",onClick:f,children:"Accueil"}),O.jsx(Ca,{to:"/all-songs",onClick:f,children:"Tous les titres"}),O.jsx(Ca,{to:"/contact",onClick:f,children:"Contact"})]})]})]}),O.jsx("div",{id:"center-spacer",className:"spacer",children:O.jsx(Ca,{to:"/",className:"main-logo-link",children:O.jsx("img",{src:qg,alt:"Big stemcorp logo",id:"mainLogo"})})}),O.jsx("div",{id:"right-spacer",className:"spacer"})]})}function T0(){const u=new Date().getFullYear();return O.jsx("footer",{className:"footer",children:O.jsxs("p",{children:["© ",u," StemCorp. All rights reserved."]})})}function J0({title:u,coverUrl:m,type:c}){const r=pu(u,c);return O.jsx("div",{children:O.jsx(Ca,{to:r,className:"song-link",title:u,children:O.jsx("img",{src:m,alt:u,className:"song-cover"})})})}function gd(){const[u,m]=C.useState([]);return C.useEffect(()=>{vp().then(c=>m(c))},[]),O.jsx("div",{className:"songs-list",children:u.map(c=>O.jsx(J0,{title:c.title,coverUrl:c.coverUrl,type:c.type},c.title))})}function M0(u){return Ha({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(u)}function x0(u){return Ha({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z"},child:[]}]})(u)}function C0(u){return Ha({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"},child:[]}]})(u)}function D0(u){return Ha({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M451.46,244.71H576V172H451.46Zm0-173.89v72.67H576V70.82Zm0,275.06H576V273.2H451.46ZM0,447.09H124.54V374.42H0Zm150.47,0H275V374.42H150.47Zm150.52,0H425.53V374.42H301Zm150.47,0H576V374.42H451.46ZM301,345.88H425.53V273.2H301Zm-150.52,0H275V273.2H150.47Zm0-101.17H275V172H150.47Z"},child:[]}]})(u)}function R0(u){return Ha({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"m10.995 0 .573.001q.241 0 .483.007c.35.01.705.03 1.051.093.352.063.68.166.999.329a3.36 3.36 0 0 1 1.47 1.468c.162.32.265.648.328 1 .063.347.084.7.093 1.051q.007.241.007.483l.001.573v5.99l-.001.573q0 .241-.008.483c-.01.35-.03.704-.092 1.05a3.5 3.5 0 0 1-.33 1 3.36 3.36 0 0 1-1.468 1.468 3.5 3.5 0 0 1-1 .33 7 7 0 0 1-1.05.092q-.241.007-.483.008l-.573.001h-5.99l-.573-.001q-.241 0-.483-.008a7 7 0 0 1-1.052-.092 3.6 3.6 0 0 1-.998-.33 3.36 3.36 0 0 1-1.47-1.468 3.6 3.6 0 0 1-.328-1 7 7 0 0 1-.093-1.05Q.002 11.81 0 11.568V5.005l.001-.573q0-.241.007-.483c.01-.35.03-.704.093-1.05a3.6 3.6 0 0 1 .329-1A3.36 3.36 0 0 1 1.9.431 3.5 3.5 0 0 1 2.896.1 7 7 0 0 1 3.95.008Q4.19.002 4.432 0h.573zm-.107 2.518-4.756.959H6.13a.66.66 0 0 0-.296.133.5.5 0 0 0-.16.31c-.004.027-.01.08-.01.16v5.952c0 .14-.012.275-.106.39-.095.115-.21.15-.347.177l-.31.063c-.393.08-.65.133-.881.223a1.4 1.4 0 0 0-.519.333 1.25 1.25 0 0 0-.332.995c.031.297.166.582.395.792.156.142.35.25.578.296.236.047.49.031.858-.043.196-.04.38-.102.555-.205a1.4 1.4 0 0 0 .438-.405 1.5 1.5 0 0 0 .233-.55c.042-.202.052-.386.052-.588V6.347c0-.276.08-.35.302-.404.024-.005 3.954-.797 4.138-.833.257-.049.378.025.378.294v3.524c0 .14-.001.28-.096.396-.094.115-.211.15-.348.178l-.31.062c-.393.08-.649.133-.88.223a1.4 1.4 0 0 0-.52.334 1.26 1.26 0 0 0-.34.994c.03.297.174.582.404.792a1.2 1.2 0 0 0 .577.294c.237.048.49.03.858-.044.197-.04.381-.098.556-.202a1.4 1.4 0 0 0 .438-.405q.173-.252.233-.549a2.7 2.7 0 0 0 .044-.589V2.865c0-.273-.143-.443-.4-.42-.04.003-.383.064-.424.073"},child:[]}]})(u)}function O0(u){return Ha({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"},child:[]}]})(u)}function Vr(u){return u.split("_").splice(1).join(" ")}const z0=({song:u})=>{const m={spotify:O.jsx(M0,{className:"platform-icon"}),applemusic:O.jsx(R0,{className:"platform-icon"}),deezer:O.jsx(D0,{className:"platform-icon"}),youtube:O.jsx(O0,{className:"platform-icon"}),soundcloud:O.jsx(x0,{className:"platform-icon"})};return O.jsxs("div",{className:"song-pages-layout",children:[O.jsxs("div",{className:"main-data",children:[O.jsxs("div",{className:"song-info",children:[O.jsx("img",{src:u.coverUrl,alt:`${u.title} cover`,className:"cover-image"}),O.jsx("div",{className:"song-details",children:O.jsxs("div",{className:"song-text-info",children:[O.jsx("h1",{className:"song-title",children:u.title}),O.jsx("p",{className:"song-type",children:u.type})]})})]}),O.jsx("div",{className:"platforms",children:Object.entries(u.platforms).map(([c,r])=>O.jsx(Ca,{to:r,target:"_blank",rel:"noopener noreferrer",className:"platform-link",children:m[c.toLowerCase()]||c},c))})]}),O.jsx("div",{className:"bottom-section",children:B0(u)})]})},N0=({lyrics:u})=>O.jsxs("div",{className:"lyrics-container",children:[O.jsx("h2",{children:"Lyrics"}),O.jsx("pre",{className:"lyrics",children:u})]}),L0=({parent:u})=>{const m=u.tracks.map(c=>c.name);return O.jsxs("div",{className:"track-list-container",children:[O.jsx("h2",{children:"Track List"}),O.jsx("div",{className:"track-list",children:m.map((c,r)=>(c=Vr(c),O.jsx(Ca,{to:pu(c,xe.SINGLE,u.title,u.type),className:"track",children:c},r)))})]})},B0=u=>u.type!=="Single"?O.jsx(L0,{parent:u}):u.tracks[0].lyrics?O.jsx(N0,{lyrics:u.tracks[0].lyrics}):O.jsx("p",{className:"no-lyrics",children:"Pas de paroles disponibles."});function U0(){const{parentType:u,parentTitle:m,type:c,title:r}=xh(),f=()=>O.jsx("div",{className:"song-not-found",children:O.jsx("h1",{children:"Song not found"})}),v=g=>{switch(g){case xe.ALBUM.toLowerCase():return xe.ALBUM;case xe.EP.toLowerCase():return xe.EP;case xe.SINGLE.toLowerCase():return xe.SINGLE;default:throw"Type incorecte : "+g}};if(!c)return console.error("Type not found"),f();const y=Pr();let T;if(!m||!u)T=y.musics.get(v(c))?.find(g=>g.title.toLowerCase()===r?.toLowerCase());else{const g=y.musics.get(v(u))?.find(J=>J.title.toLowerCase()===m?.toLowerCase());if(!g)return f();const p=g?.tracks.find(J=>Vr(J.name).toLowerCase()===r?.toLowerCase());p&&(T={title:Vr(p.name),coverUrl:g.coverUrl,platforms:g.platforms,type:xe.SINGLE,releaseDate:g.releaseDate,tracks:[p],available:g.available})}return T?O.jsx("div",{className:"song-pages-detail",children:O.jsx(z0,{song:T})}):(console.error("Song not found"),f())}function H0({song:u}){return O.jsxs(Ca,{to:pu(u.title,u.type),className:"song-card",children:[O.jsx("div",{className:"song-cover-wrapper",children:O.jsx("img",{src:u.coverUrl,alt:u.title,className:"song-cover"})}),O.jsx("div",{className:"song-info",children:O.jsx("h3",{className:"song-title",children:u.title})})]})}const La={All:"All",Album:xe.ALBUM,Single:xe.SINGLE,EP:xe.EP};function G0({currentType:u}){const{loading:m,musics:c}=Pr();if(m)return O.jsx("div",{className:"loading",children:"Loading..."});const r=u===La.All?Array.from(c.values()).flat().sort((f,v)=>{const y=v?.releaseDate?new Date(v.releaseDate).getTime():0,T=f?.releaseDate?new Date(f.releaseDate).getTime():0;return y-T}):c.get(u)||[];return r.length===0?O.jsx("div",{className:"no-songs",children:"Aucun titre trouvé."}):O.jsx("div",{className:"songs-grid",children:r.map(f=>O.jsx(H0,{song:f},f.title))})}function Y0({value:u,onChange:m}){return O.jsxs("div",{className:"type-selector",children:[O.jsx("button",{className:u===La.All?"active":"",onClick:()=>m(La.All),children:"Tout"}),O.jsx("button",{className:u===La.Album?"active":"",onClick:()=>m(La.Album),children:"Album"}),O.jsx("button",{className:u===La.Single?"active":"",onClick:()=>m(La.Single),children:"Single"}),O.jsx("button",{className:u===La.EP?"active":"",onClick:()=>m(La.EP),children:"EP"})]})}function Q0(){const[u,m]=C.useState(La.All);return O.jsxs("div",{className:"songs-list-with-selector",children:[O.jsx(Y0,{value:u,onChange:m}),O.jsx(G0,{currentType:u})]})}function V0(u){return Ha({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"},child:[]}]})(u)}function w0(u){return Ha({attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M800 112.962C800 50.575 749.425 0 687.038 0H112.962C50.575 0 0 50.575 0 112.962v574.076C0 749.426 50.575 800 112.962 800h574.076C749.425 800 800 749.426 800 687.038zM662.759 348.916c-51.615.577-99.71-15.027-141.938-43.927v202.874c0 90.166-61.72 167.62-148.996 187.848-119.068 27.165-219.864-58.954-232.577-161.835-13.294-102.884 52.322-193.051 152.892-213.281 19.651-4.045 49.209-4.045 64.458-.577v108.661c-4.692-1.153-9.086-2.31-13.709-2.888-39.304-6.937-77.371 12.715-92.977 48.55-15.605 35.838-5.16 77.451 26.629 101.73 26.586 20.806 56.085 23.694 86.14 9.822 30.057-13.291 46.21-37.567 49.676-70.512.578-4.622.546-9.826.546-15.028V110.206c0-10.981.086-10.502 11.068-10.502h86.12c6.36 0 8.673.915 9.25 8.433 4.621 67.047 55.526 124.147 120.838 132.818 6.937 1.155 14.369 1.613 22.58 2.19z",transform:"translate(112 112)"},child:[]}]})(u)}function k0(){return O.jsxs("div",{className:"contact-page",children:[O.jsxs("div",{className:"contact-business contact-container",children:[O.jsx("h1",{children:"Business / Prod:"}),O.jsx("div",{className:"contact-info",children:O.jsxs("p",{children:["Email: ",O.jsx("a",{href:"mailto:lilstempro@gmail.com",children:"lilstempro@gmail.com"})]})})]}),O.jsxs("div",{className:"reseaux-sociaux contact-container",children:[O.jsx("h1",{children:"Réseaux sociaux:"}),O.jsxs("div",{className:"contact-info",children:[O.jsx("p",{children:O.jsx("a",{href:"https://www.instagram.com/stem_dotcom/",target:"_blank",rel:"noopener noreferrer",children:O.jsxs("span",{className:"social-icon-and-text",children:[O.jsx(C0,{}),"Instagram"]})})}),O.jsx("p",{children:O.jsx("a",{href:"https://x.com/lil_stem",target:"_blank",rel:"noopener noreferrer",children:O.jsxs("span",{className:"social-icon-and-text",children:[O.jsx(V0,{}),"X"]})})}),O.jsx("p",{children:O.jsx("a",{href:"https://www.tiktok.com/@stem_dotcom?_r=1&_t=ZN-951PepPPeMw",target:"_blank",rel:"noopener noreferrer",children:O.jsxs("span",{className:"social-icon-and-text",children:[O.jsx(w0,{}),"TikTok"]})})})]})]})]})}const X0=()=>O.jsxs(wh,{children:[O.jsx(Ht,{path:"/",element:O.jsx(gd,{})}),O.jsx(Ht,{path:"/all-songs",element:O.jsx(Q0,{})}),O.jsx(Ht,{path:"/contact",element:O.jsx(k0,{})}),O.jsx(Ht,{path:"/songs/:parentType?/:parentTitle?/:type/:title",element:O.jsx(U0,{})}),O.jsx(Ht,{path:"*",element:O.jsx(gd,{})})]});function Z0(){return O.jsxs("main",{children:[O.jsx(E0,{}),O.jsx(X0,{}),O.jsx(T0,{})]})}Iv.createRoot(document.getElementById("root")).render(O.jsx(On.StrictMode,{children:O.jsx(dg,{children:O.jsx(S0,{children:O.jsx(Z0,{})})})}));
