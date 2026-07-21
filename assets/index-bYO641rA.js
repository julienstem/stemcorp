(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const A of f)if(A.type==="childList")for(const j of A.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&r(j)}).observe(document,{childList:!0,subtree:!0});function c(f){const A={};return f.integrity&&(A.integrity=f.integrity),f.referrerPolicy&&(A.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?A.credentials="include":f.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function r(f){if(f.ep)return;f.ep=!0;const A=c(f);fetch(f.href,A)}})();function bd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Dr={exports:{}},Nl={};var ed;function Yv(){if(ed)return Nl;ed=1;var s=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function c(r,f,A){var j=null;if(A!==void 0&&(j=""+A),f.key!==void 0&&(j=""+f.key),"key"in f){A={};for(var J in f)J!=="key"&&(A[J]=f[J])}else A=f;return f=A.ref,{$$typeof:s,type:r,key:j,ref:f!==void 0?f:null,props:A}}return Nl.Fragment=m,Nl.jsx=c,Nl.jsxs=c,Nl}var ad;function Qv(){return ad||(ad=1,Dr.exports=Yv()),Dr.exports}var O=Qv(),Or={exports:{}},W={};var td;function Vv(){if(td)return W;td=1;var s=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),j=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),N=Symbol.iterator;function Q(h){return h===null||typeof h!="object"?null:(h=N&&h[N]||h["@@iterator"],typeof h=="function"?h:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,V={};function H(h,z,B){this.props=h,this.context=z,this.refs=V,this.updater=B||k}H.prototype.isReactComponent={},H.prototype.setState=function(h,z){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,z,"setState")},H.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function G(){}G.prototype=H.prototype;function K(h,z,B){this.props=h,this.context=z,this.refs=V,this.updater=B||k}var _e=K.prototype=new G;_e.constructor=K,Z(_e,H.prototype),_e.isPureReactComponent=!0;var Ee=Array.isArray;function Be(){}var ee={H:null,A:null,T:null,S:null},Ue=Object.prototype.hasOwnProperty;function Te(h,z,B){var Y=B.ref;return{$$typeof:s,type:h,key:z,ref:Y!==void 0?Y:null,props:B}}function la(h,z){return Te(h.type,z,h.props)}function ua(h){return typeof h=="object"&&h!==null&&h.$$typeof===s}function Pe(h){var z={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(B){return z[B]})}var Ot=/\/+/g;function Ha(h,z){return typeof h=="object"&&h!==null&&h.key!=null?Pe(""+h.key):z.toString(36)}function Ta(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Be,Be):(h.status="pending",h.then(function(z){h.status==="pending"&&(h.status="fulfilled",h.value=z)},function(z){h.status==="pending"&&(h.status="rejected",h.reason=z)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function x(h,z,B,Y,$){var te=typeof h;(te==="undefined"||te==="boolean")&&(h=null);var me=!1;if(h===null)me=!0;else switch(te){case"bigint":case"string":case"number":me=!0;break;case"object":switch(h.$$typeof){case s:case m:me=!0;break;case T:return me=h._init,x(me(h._payload),z,B,Y,$)}}if(me)return $=$(h),me=Y===""?"."+Ha(h,0):Y,Ee($)?(B="",me!=null&&(B=me.replace(Ot,"$&/")+"/"),x($,z,B,"",function(Qn){return Qn})):$!=null&&(ua($)&&($=la($,B+($.key==null||h&&h.key===$.key?"":(""+$.key).replace(Ot,"$&/")+"/")+me)),z.push($)),1;me=0;var Ke=Y===""?".":Y+":";if(Ee(h))for(var Ce=0;Ce<h.length;Ce++)Y=h[Ce],te=Ke+Ha(Y,Ce),me+=x(Y,z,B,te,$);else if(Ce=Q(h),typeof Ce=="function")for(h=Ce.call(h),Ce=0;!(Y=h.next()).done;)Y=Y.value,te=Ke+Ha(Y,Ce++),me+=x(Y,z,B,te,$);else if(te==="object"){if(typeof h.then=="function")return x(Ta(h),z,B,Y,$);throw z=String(h),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return me}function L(h,z,B){if(h==null)return h;var Y=[],$=0;return x(h,Y,"","",function(te){return z.call(B,te,$++)}),Y}function P(h){if(h._status===-1){var z=h._result;z=z(),z.then(function(B){(h._status===0||h._status===-1)&&(h._status=1,h._result=B)},function(B){(h._status===0||h._status===-1)&&(h._status=2,h._result=B)}),h._status===-1&&(h._status=0,h._result=z)}if(h._status===1)return h._result.default;throw h._result}var pe=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},ge={map:L,forEach:function(h,z,B){L(h,function(){z.apply(this,arguments)},B)},count:function(h){var z=0;return L(h,function(){z++}),z},toArray:function(h){return L(h,function(z){return z})||[]},only:function(h){if(!ua(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return W.Activity=E,W.Children=ge,W.Component=H,W.Fragment=c,W.Profiler=f,W.PureComponent=K,W.StrictMode=r,W.Suspense=g,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,W.__COMPILER_RUNTIME={__proto__:null,c:function(h){return ee.H.useMemoCache(h)}},W.cache=function(h){return function(){return h.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(h,z,B){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var Y=Z({},h.props),$=h.key;if(z!=null)for(te in z.key!==void 0&&($=""+z.key),z)!Ue.call(z,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&z.ref===void 0||(Y[te]=z[te]);var te=arguments.length-2;if(te===1)Y.children=B;else if(1<te){for(var me=Array(te),Ke=0;Ke<te;Ke++)me[Ke]=arguments[Ke+2];Y.children=me}return Te(h.type,$,Y)},W.createContext=function(h){return h={$$typeof:j,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:A,_context:h},h},W.createElement=function(h,z,B){var Y,$={},te=null;if(z!=null)for(Y in z.key!==void 0&&(te=""+z.key),z)Ue.call(z,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&($[Y]=z[Y]);var me=arguments.length-2;if(me===1)$.children=B;else if(1<me){for(var Ke=Array(me),Ce=0;Ce<me;Ce++)Ke[Ce]=arguments[Ce+2];$.children=Ke}if(h&&h.defaultProps)for(Y in me=h.defaultProps,me)$[Y]===void 0&&($[Y]=me[Y]);return Te(h,te,$)},W.createRef=function(){return{current:null}},W.forwardRef=function(h){return{$$typeof:J,render:h}},W.isValidElement=ua,W.lazy=function(h){return{$$typeof:T,_payload:{_status:-1,_result:h},_init:P}},W.memo=function(h,z){return{$$typeof:p,type:h,compare:z===void 0?null:z}},W.startTransition=function(h){var z=ee.T,B={};ee.T=B;try{var Y=h(),$=ee.S;$!==null&&$(B,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(Be,pe)}catch(te){pe(te)}finally{z!==null&&B.types!==null&&(z.types=B.types),ee.T=z}},W.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},W.use=function(h){return ee.H.use(h)},W.useActionState=function(h,z,B){return ee.H.useActionState(h,z,B)},W.useCallback=function(h,z){return ee.H.useCallback(h,z)},W.useContext=function(h){return ee.H.useContext(h)},W.useDebugValue=function(){},W.useDeferredValue=function(h,z){return ee.H.useDeferredValue(h,z)},W.useEffect=function(h,z){return ee.H.useEffect(h,z)},W.useEffectEvent=function(h){return ee.H.useEffectEvent(h)},W.useId=function(){return ee.H.useId()},W.useImperativeHandle=function(h,z,B){return ee.H.useImperativeHandle(h,z,B)},W.useInsertionEffect=function(h,z){return ee.H.useInsertionEffect(h,z)},W.useLayoutEffect=function(h,z){return ee.H.useLayoutEffect(h,z)},W.useMemo=function(h,z){return ee.H.useMemo(h,z)},W.useOptimistic=function(h,z){return ee.H.useOptimistic(h,z)},W.useReducer=function(h,z,B){return ee.H.useReducer(h,z,B)},W.useRef=function(h){return ee.H.useRef(h)},W.useState=function(h){return ee.H.useState(h)},W.useSyncExternalStore=function(h,z,B){return ee.H.useSyncExternalStore(h,z,B)},W.useTransition=function(){return ee.H.useTransition()},W.version="19.2.0",W}var nd;function Vr(){return nd||(nd=1,Or.exports=Vv()),Or.exports}var C=Vr();const Dt=bd(C);var zr={exports:{}},Ll={},Nr={exports:{}},Lr={};var ld;function wv(){return ld||(ld=1,(function(s){function m(x,L){var P=x.length;x.push(L);e:for(;0<P;){var pe=P-1>>>1,ge=x[pe];if(0<f(ge,L))x[pe]=L,x[P]=ge,P=pe;else break e}}function c(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var L=x[0],P=x.pop();if(P!==L){x[0]=P;e:for(var pe=0,ge=x.length,h=ge>>>1;pe<h;){var z=2*(pe+1)-1,B=x[z],Y=z+1,$=x[Y];if(0>f(B,P))Y<ge&&0>f($,B)?(x[pe]=$,x[Y]=P,pe=Y):(x[pe]=B,x[z]=P,pe=z);else if(Y<ge&&0>f($,P))x[pe]=$,x[Y]=P,pe=Y;else break e}}return L}function f(x,L){var P=x.sortIndex-L.sortIndex;return P!==0?P:x.id-L.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;s.unstable_now=function(){return A.now()}}else{var j=Date,J=j.now();s.unstable_now=function(){return j.now()-J}}var g=[],p=[],T=1,E=null,N=3,Q=!1,k=!1,Z=!1,V=!1,H=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function _e(x){for(var L=c(p);L!==null;){if(L.callback===null)r(p);else if(L.startTime<=x)r(p),L.sortIndex=L.expirationTime,m(g,L);else break;L=c(p)}}function Ee(x){if(Z=!1,_e(x),!k)if(c(g)!==null)k=!0,Be||(Be=!0,Pe());else{var L=c(p);L!==null&&Ta(Ee,L.startTime-x)}}var Be=!1,ee=-1,Ue=5,Te=-1;function la(){return V?!0:!(s.unstable_now()-Te<Ue)}function ua(){if(V=!1,Be){var x=s.unstable_now();Te=x;var L=!0;try{e:{k=!1,Z&&(Z=!1,G(ee),ee=-1),Q=!0;var P=N;try{a:{for(_e(x),E=c(g);E!==null&&!(E.expirationTime>x&&la());){var pe=E.callback;if(typeof pe=="function"){E.callback=null,N=E.priorityLevel;var ge=pe(E.expirationTime<=x);if(x=s.unstable_now(),typeof ge=="function"){E.callback=ge,_e(x),L=!0;break a}E===c(g)&&r(g),_e(x)}else r(g);E=c(g)}if(E!==null)L=!0;else{var h=c(p);h!==null&&Ta(Ee,h.startTime-x),L=!1}}break e}finally{E=null,N=P,Q=!1}L=void 0}}finally{L?Pe():Be=!1}}}var Pe;if(typeof K=="function")Pe=function(){K(ua)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,Ha=Ot.port2;Ot.port1.onmessage=ua,Pe=function(){Ha.postMessage(null)}}else Pe=function(){H(ua,0)};function Ta(x,L){ee=H(function(){x(s.unstable_now())},L)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(x){x.callback=null},s.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<x?Math.floor(1e3/x):5},s.unstable_getCurrentPriorityLevel=function(){return N},s.unstable_next=function(x){switch(N){case 1:case 2:case 3:var L=3;break;default:L=N}var P=N;N=L;try{return x()}finally{N=P}},s.unstable_requestPaint=function(){V=!0},s.unstable_runWithPriority=function(x,L){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var P=N;N=x;try{return L()}finally{N=P}},s.unstable_scheduleCallback=function(x,L,P){var pe=s.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?pe+P:pe):P=pe,x){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=P+ge,x={id:T++,callback:L,priorityLevel:x,startTime:P,expirationTime:ge,sortIndex:-1},P>pe?(x.sortIndex=P,m(p,x),c(g)===null&&x===c(p)&&(Z?(G(ee),ee=-1):Z=!0,Ta(Ee,P-pe))):(x.sortIndex=ge,m(g,x),k||Q||(k=!0,Be||(Be=!0,Pe()))),x},s.unstable_shouldYield=la,s.unstable_wrapCallback=function(x){var L=N;return function(){var P=N;N=L;try{return x.apply(this,arguments)}finally{N=P}}}})(Lr)),Lr}var ud;function kv(){return ud||(ud=1,Nr.exports=wv()),Nr.exports}var Br={exports:{}},Ze={};var sd;function Xv(){if(sd)return Ze;sd=1;var s=Vr();function m(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(m(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function A(g,p,T){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:E==null?null:""+E,children:g,containerInfo:p,implementation:T}}var j=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function J(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ze.createPortal=function(g,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(m(299));return A(g,p,null,T)},Ze.flushSync=function(g){var p=j.T,T=r.p;try{if(j.T=null,r.p=2,g)return g()}finally{j.T=p,r.p=T,r.d.f()}},Ze.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},Ze.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},Ze.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var T=p.as,E=J(T,p.crossOrigin),N=typeof p.integrity=="string"?p.integrity:void 0,Q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:N,fetchPriority:Q}):T==="script"&&r.d.X(g,{crossOrigin:E,integrity:N,fetchPriority:Q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ze.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=J(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},Ze.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,E=J(T,p.crossOrigin);r.d.L(g,T,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ze.preloadModule=function(g,p){if(typeof g=="string")if(p){var T=J(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},Ze.requestFormReset=function(g){r.d.r(g)},Ze.unstable_batchedUpdates=function(g,p){return g(p)},Ze.useFormState=function(g,p,T){return j.H.useFormState(g,p,T)},Ze.useFormStatus=function(){return j.H.useHostTransitionStatus()},Ze.version="19.2.0",Ze}var id;function Zv(){if(id)return Br.exports;id=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(m){console.error(m)}}return s(),Br.exports=Xv(),Br.exports}var rd;function Kv(){if(rd)return Ll;rd=1;var s=kv(),m=Vr(),c=Zv();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function j(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function J(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function g(e){if(A(e)!==e)throw Error(r(188))}function p(e){var a=e.alternate;if(!a){if(a=A(e),a===null)throw Error(r(188));return a!==e?null:e}for(var t=e,n=a;;){var l=t.return;if(l===null)break;var u=l.alternate;if(u===null){if(n=l.return,n!==null){t=n;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===t)return g(l),e;if(u===n)return g(l),a;u=u.sibling}throw Error(r(188))}if(t.return!==n.return)t=l,n=u;else{for(var i=!1,o=l.child;o;){if(o===t){i=!0,t=l,n=u;break}if(o===n){i=!0,n=l,t=u;break}o=o.sibling}if(!i){for(o=u.child;o;){if(o===t){i=!0,t=u,n=l;break}if(o===n){i=!0,n=u,t=l;break}o=o.sibling}if(!i)throw Error(r(189))}}if(t.alternate!==n)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:a}function T(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=T(e),a!==null)return a;e=e.sibling}return null}var E=Object.assign,N=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),K=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),la=Symbol.for("react.memo_cache_sentinel"),ua=Symbol.iterator;function Pe(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var Ot=Symbol.for("react.client.reference");function Ha(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case H:return"Profiler";case V:return"StrictMode";case Ee:return"Suspense";case Be:return"SuspenseList";case Te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case K:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case _e:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return a=e.displayName||null,a!==null?a:Ha(e.type)||"Memo";case Ue:a=e._payload,e=e._init;try{return Ha(e(a))}catch{}}return null}var Ta=Array.isArray,x=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},pe=[],ge=-1;function h(e){return{current:e}}function z(e){0>ge||(e.current=pe[ge],pe[ge]=null,ge--)}function B(e,a){ge++,pe[ge]=e.current,e.current=a}var Y=h(null),$=h(null),te=h(null),me=h(null);function Ke(e,a){switch(B(te,a),B($,e),B(Y,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Sf(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Sf(a),e=qf(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(Y),B(Y,e)}function Ce(){z(Y),z($),z(te)}function Qn(e){e.memoizedState!==null&&B(me,e);var a=Y.current,t=qf(a,e.type);a!==t&&(B($,e),B(Y,t))}function Ql(e){$.current===e&&(z(Y),z($)),me.current===e&&(z(me),Rl._currentValue=P)}var ps,Wr;function zt(e){if(ps===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);ps=a&&a[1]||"",Wr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ps+e+Wr}var As=!1;function vs(e,a){if(!e||As)return"";As=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(q){var S=q}Reflect.construct(e,[],D)}else{try{D.call()}catch(q){S=q}e.call(D.prototype)}}else{try{throw Error()}catch(q){S=q}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(q){if(q&&S&&typeof q.stack=="string")return[q.stack,S.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],o=u[1];if(i&&o){var d=i.split(`
`),_=o.split(`
`);for(l=n=0;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;for(;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;if(n===d.length||l===_.length)for(n=d.length-1,l=_.length-1;1<=n&&0<=l&&d[n]!==_[l];)l--;for(;1<=n&&0<=l;n--,l--)if(d[n]!==_[l]){if(n!==1||l!==1)do if(n--,l--,0>l||d[n]!==_[l]){var M=`
`+d[n].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=n&&0<=l);break}}}finally{As=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?zt(t):""}function gp(e,a){switch(e.tag){case 26:case 27:case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return e.child!==a&&a!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return vs(e.type,!1);case 11:return vs(e.type.render,!1);case 1:return vs(e.type,!0);case 31:return zt("Activity");default:return""}}function $r(e){try{var a="",t=null;do a+=gp(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var hs=Object.prototype.hasOwnProperty,gs=s.unstable_scheduleCallback,bs=s.unstable_cancelCallback,bp=s.unstable_shouldYield,yp=s.unstable_requestPaint,sa=s.unstable_now,jp=s.unstable_getCurrentPriorityLevel,Ir=s.unstable_ImmediatePriority,eo=s.unstable_UserBlockingPriority,Vl=s.unstable_NormalPriority,_p=s.unstable_LowPriority,ao=s.unstable_IdlePriority,Sp=s.log,qp=s.unstable_setDisableYieldValue,Vn=null,ia=null;function it(e){if(typeof Sp=="function"&&qp(e),ia&&typeof ia.setStrictMode=="function")try{ia.setStrictMode(Vn,e)}catch{}}var ra=Math.clz32?Math.clz32:Jp,Ep=Math.log,Tp=Math.LN2;function Jp(e){return e>>>=0,e===0?32:31-(Ep(e)/Tp|0)|0}var wl=256,kl=262144,Xl=4194304;function Nt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zl(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=n&134217727;return o!==0?(n=o&~u,n!==0?l=Nt(n):(i&=o,i!==0?l=Nt(i):t||(t=o&~e,t!==0&&(l=Nt(t))))):(o=n&~u,o!==0?l=Nt(o):i!==0?l=Nt(i):t||(t=n&~e,t!==0&&(l=Nt(t)))),l===0?0:a!==0&&a!==l&&(a&u)===0&&(u=l&-l,t=a&-a,u>=t||u===32&&(t&4194048)!==0)?a:l}function wn(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Mp(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function to(){var e=Xl;return Xl<<=1,(Xl&62914560)===0&&(Xl=4194304),e}function ys(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function kn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xp(e,a,t,n,l,u){var i=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var o=e.entanglements,d=e.expirationTimes,_=e.hiddenUpdates;for(t=i&~t;0<t;){var M=31-ra(t),D=1<<M;o[M]=0,d[M]=-1;var S=_[M];if(S!==null)for(_[M]=null,M=0;M<S.length;M++){var q=S[M];q!==null&&(q.lane&=-536870913)}t&=~D}n!==0&&no(e,n,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~a))}function no(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-ra(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function lo(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-ra(t),l=1<<n;l&a|e[n]&a&&(e[n]|=a),t&=~l}}function uo(e,a){var t=a&-a;return t=(t&42)!==0?1:js(t),(t&(e.suspendedLanes|a))!==0?0:t}function js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _s(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function so(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Zf(e.type))}function io(e,a){var t=L.p;try{return L.p=e,a()}finally{L.p=t}}var rt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+rt,We="__reactProps$"+rt,en="__reactContainer$"+rt,Ss="__reactEvents$"+rt,Cp="__reactListeners$"+rt,Rp="__reactHandles$"+rt,ro="__reactResources$"+rt,Xn="__reactMarker$"+rt;function qs(e){delete e[Qe],delete e[We],delete e[Ss],delete e[Cp],delete e[Rp]}function an(e){var a=e[Qe];if(a)return a;for(var t=e.parentNode;t;){if(a=t[en]||t[Qe]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Rf(e);e!==null;){if(t=e[Qe])return t;e=Rf(e)}return a}e=t,t=e.parentNode}return null}function tn(e){if(e=e[Qe]||e[en]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Zn(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function nn(e){var a=e[ro];return a||(a=e[ro]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ge(e){e[Xn]=!0}var oo=new Set,co={};function Lt(e,a){ln(e,a),ln(e+"Capture",a)}function ln(e,a){for(co[e]=a,e=0;e<a.length;e++)oo.add(a[e])}var Dp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mo={},fo={};function Op(e){return hs.call(fo,e)?!0:hs.call(mo,e)?!1:Dp.test(e)?fo[e]=!0:(mo[e]=!0,!1)}function Kl(e,a,t){if(Op(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Fl(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Ga(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function va(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function po(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function zp(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return l.call(this)},set:function(i){t=""+i,u.call(this,i)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Es(e){if(!e._valueTracker){var a=po(e)?"checked":"value";e._valueTracker=zp(e,a,""+e[a])}}function Ao(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=po(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Np=/[\n"\\]/g;function ha(e){return e.replace(Np,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ts(e,a,t,n,l,u,i,o){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),a!=null?i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+va(a)):e.value!==""+va(a)&&(e.value=""+va(a)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),a!=null?Js(e,i,va(a)):t!=null?Js(e,i,va(t)):n!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+va(o):e.removeAttribute("name")}function vo(e,a,t,n,l,u,i,o){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),a!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||a!=null)){Es(e);return}t=t!=null?""+va(t):"",a=a!=null?""+va(a):t,o||a===e.value||(e.value=a),e.defaultValue=a}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Es(e)}function Js(e,a,t){a==="number"&&Pl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function un(e,a,t,n){if(e=e.options,a){a={};for(var l=0;l<t.length;l++)a["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=a.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&n&&(e[t].defaultSelected=!0)}else{for(t=""+va(t),a=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}a!==null||e[l].disabled||(a=e[l])}a!==null&&(a.selected=!0)}}function ho(e,a,t){if(a!=null&&(a=""+va(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+va(t):""}function go(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(r(92));if(Ta(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=va(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),Es(e)}function sn(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Lp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bo(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||Lp.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function yo(e,a,t){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in a)n=a[l],a.hasOwnProperty(l)&&t[l]!==n&&bo(e,l,n)}else for(var u in a)a.hasOwnProperty(u)&&bo(e,u,a[u])}function Ms(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wl(e){return Up.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ya(){}var xs=null;function Cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rn=null,on=null;function jo(e){var a=tn(e);if(a&&(e=a.stateNode)){var t=e[We]||null;e:switch(e=a.stateNode,a.type){case"input":if(Ts(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ha(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var l=n[We]||null;if(!l)throw Error(r(90));Ts(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&Ao(n)}break e;case"textarea":ho(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&un(e,!!t.multiple,a,!1)}}}var Rs=!1;function _o(e,a,t){if(Rs)return e(a,t);Rs=!0;try{var n=e(a);return n}finally{if(Rs=!1,(rn!==null||on!==null)&&(Uu(),rn&&(a=rn,e=on,on=rn=null,jo(a),e)))for(a=0;a<e.length;a++)jo(e[a])}}function Kn(e,a){var t=e.stateNode;if(t===null)return null;var n=t[We]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,a,typeof t));return t}var Qa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ds=!1;if(Qa)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{Ds=!1}var ot=null,Os=null,$l=null;function So(){if($l)return $l;var e,a=Os,t=a.length,n,l="value"in ot?ot.value:ot.textContent,u=l.length;for(e=0;e<t&&a[e]===l[e];e++);var i=t-e;for(n=1;n<=i&&a[t-n]===l[u-n];n++);return $l=l.slice(e,1<n?1-n:void 0)}function Il(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function eu(){return!0}function qo(){return!1}function $e(e){function a(t,n,l,u,i){this._reactName=t,this._targetInst=l,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(u):u[o]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?eu:qo,this.isPropagationStopped=qo,this}return E(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),a}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=$e(Bt),Pn=E({},Bt,{view:0,detail:0}),Hp=$e(Pn),zs,Ns,Wn,tu=E({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(zs=e.screenX-Wn.screenX,Ns=e.screenY-Wn.screenY):Ns=zs=0,Wn=e),zs)},movementY:function(e){return"movementY"in e?e.movementY:Ns}}),Eo=$e(tu),Gp=E({},tu,{dataTransfer:0}),Yp=$e(Gp),Qp=E({},Pn,{relatedTarget:0}),Ls=$e(Qp),Vp=E({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),wp=$e(Vp),kp=E({},Bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xp=$e(kp),Zp=E({},Bt,{data:0}),To=$e(Zp),Kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wp(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Pp[e])?!!a[e]:!1}function Bs(){return Wp}var $p=E({},Pn,{key:function(e){if(e.key){var a=Kp[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?Il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ip=$e($p),eA=E({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=$e(eA),aA=E({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),tA=$e(aA),nA=E({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),lA=$e(nA),uA=E({},tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sA=$e(uA),iA=E({},Bt,{newState:0,oldState:0}),rA=$e(iA),oA=[9,13,27,32],Us=Qa&&"CompositionEvent"in window,$n=null;Qa&&"documentMode"in document&&($n=document.documentMode);var cA=Qa&&"TextEvent"in window&&!$n,Mo=Qa&&(!Us||$n&&8<$n&&11>=$n),xo=" ",Co=!1;function Ro(e,a){switch(e){case"keyup":return oA.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Do(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function mA(e,a){switch(e){case"compositionend":return Do(a);case"keypress":return a.which!==32?null:(Co=!0,xo);case"textInput":return e=a.data,e===xo&&Co?null:e;default:return null}}function fA(e,a){if(cn)return e==="compositionend"||!Us&&Ro(e,a)?(e=So(),$l=Os=ot=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Mo&&a.locale!=="ko"?null:a.data;default:return null}}var dA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oo(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!dA[e.type]:a==="textarea"}function zo(e,a,t,n){rn?on?on.push(n):on=[n]:rn=n,a=ku(a,"onChange"),0<a.length&&(t=new au("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var In=null,el=null;function pA(e){hf(e,0)}function nu(e){var a=Zn(e);if(Ao(a))return e}function No(e,a){if(e==="change")return a}var Lo=!1;if(Qa){var Hs;if(Qa){var Gs="oninput"in document;if(!Gs){var Bo=document.createElement("div");Bo.setAttribute("oninput","return;"),Gs=typeof Bo.oninput=="function"}Hs=Gs}else Hs=!1;Lo=Hs&&(!document.documentMode||9<document.documentMode)}function Uo(){In&&(In.detachEvent("onpropertychange",Ho),el=In=null)}function Ho(e){if(e.propertyName==="value"&&nu(el)){var a=[];zo(a,el,e,Cs(e)),_o(pA,a)}}function AA(e,a,t){e==="focusin"?(Uo(),In=a,el=t,In.attachEvent("onpropertychange",Ho)):e==="focusout"&&Uo()}function vA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nu(el)}function hA(e,a){if(e==="click")return nu(a)}function gA(e,a){if(e==="input"||e==="change")return nu(a)}function bA(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var oa=typeof Object.is=="function"?Object.is:bA;function al(e,a){if(oa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var l=t[n];if(!hs.call(a,l)||!oa(e[l],a[l]))return!1}return!0}function Go(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yo(e,a){var t=Go(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Go(t)}}function Qo(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Qo(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Vo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Pl(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Pl(e.document)}return a}function Ys(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var yA=Qa&&"documentMode"in document&&11>=document.documentMode,mn=null,Qs=null,tl=null,Vs=!1;function wo(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vs||mn==null||mn!==Pl(n)||(n=mn,"selectionStart"in n&&Ys(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),tl&&al(tl,n)||(tl=n,n=ku(Qs,"onSelect"),0<n.length&&(a=new au("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=mn)))}function Ut(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var fn={animationend:Ut("Animation","AnimationEnd"),animationiteration:Ut("Animation","AnimationIteration"),animationstart:Ut("Animation","AnimationStart"),transitionrun:Ut("Transition","TransitionRun"),transitionstart:Ut("Transition","TransitionStart"),transitioncancel:Ut("Transition","TransitionCancel"),transitionend:Ut("Transition","TransitionEnd")},ws={},ko={};Qa&&(ko=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function Ht(e){if(ws[e])return ws[e];if(!fn[e])return e;var a=fn[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in ko)return ws[e]=a[t];return e}var Xo=Ht("animationend"),Zo=Ht("animationiteration"),Ko=Ht("animationstart"),jA=Ht("transitionrun"),_A=Ht("transitionstart"),SA=Ht("transitioncancel"),Fo=Ht("transitionend"),Po=new Map,ks="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ks.push("scrollEnd");function Ja(e,a){Po.set(e,a),Lt(a,[e])}var lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ga=[],dn=0,Xs=0;function uu(){for(var e=dn,a=Xs=dn=0;a<e;){var t=ga[a];ga[a++]=null;var n=ga[a];ga[a++]=null;var l=ga[a];ga[a++]=null;var u=ga[a];if(ga[a++]=null,n!==null&&l!==null){var i=n.pending;i===null?l.next=l:(l.next=i.next,i.next=l),n.pending=l}u!==0&&Wo(t,l,u)}}function su(e,a,t,n){ga[dn++]=e,ga[dn++]=a,ga[dn++]=t,ga[dn++]=n,Xs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Zs(e,a,t,n){return su(e,a,t,n),iu(e)}function Gt(e,a){return su(e,null,null,a),iu(e)}function Wo(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var l=!1,u=e.return;u!==null;)u.childLanes|=t,n=u.alternate,n!==null&&(n.childLanes|=t),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&a!==null&&(l=31-ra(t),e=u.hiddenUpdates,n=e[l],n===null?e[l]=[a]:n.push(a),a.lane=t|536870912),u):null}function iu(e){if(50<ql)throw ql=0,tr=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var pn={};function qA(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ca(e,a,t,n){return new qA(e,a,t,n)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Va(e,a){var t=e.alternate;return t===null?(t=ca(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function $o(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ru(e,a,t,n,l,u){var i=0;if(n=e,typeof e=="function")Ks(e)&&(i=1);else if(typeof e=="string")i=xv(e,t,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Te:return e=ca(31,t,a,l),e.elementType=Te,e.lanes=u,e;case Z:return Yt(t.children,l,u,a);case V:i=8,l|=24;break;case H:return e=ca(12,t,a,l|2),e.elementType=H,e.lanes=u,e;case Ee:return e=ca(13,t,a,l),e.elementType=Ee,e.lanes=u,e;case Be:return e=ca(19,t,a,l),e.elementType=Be,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:i=10;break e;case G:i=9;break e;case _e:i=11;break e;case ee:i=14;break e;case Ue:i=16,n=null;break e}i=29,t=Error(r(130,e===null?"null":typeof e,"")),n=null}return a=ca(i,t,a,l),a.elementType=e,a.type=n,a.lanes=u,a}function Yt(e,a,t,n){return e=ca(7,e,n,a),e.lanes=t,e}function Fs(e,a,t){return e=ca(6,e,null,a),e.lanes=t,e}function Io(e){var a=ca(18,null,null,0);return a.stateNode=e,a}function Ps(e,a,t){return a=ca(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var ec=new WeakMap;function ba(e,a){if(typeof e=="object"&&e!==null){var t=ec.get(e);return t!==void 0?t:(a={value:e,source:a,stack:$r(a)},ec.set(e,a),a)}return{value:e,source:a,stack:$r(a)}}var An=[],vn=0,ou=null,nl=0,ya=[],ja=0,ct=null,Ra=1,Da="";function wa(e,a){An[vn++]=nl,An[vn++]=ou,ou=e,nl=a}function ac(e,a,t){ya[ja++]=Ra,ya[ja++]=Da,ya[ja++]=ct,ct=e;var n=Ra;e=Da;var l=32-ra(n)-1;n&=~(1<<l),t+=1;var u=32-ra(a)+l;if(30<u){var i=l-l%5;u=(n&(1<<i)-1).toString(32),n>>=i,l-=i,Ra=1<<32-ra(a)+l|t<<l|n,Da=u+e}else Ra=1<<u|t<<l|n,Da=e}function Ws(e){e.return!==null&&(wa(e,1),ac(e,1,0))}function $s(e){for(;e===ou;)ou=An[--vn],An[vn]=null,nl=An[--vn],An[vn]=null;for(;e===ct;)ct=ya[--ja],ya[ja]=null,Da=ya[--ja],ya[ja]=null,Ra=ya[--ja],ya[ja]=null}function tc(e,a){ya[ja++]=Ra,ya[ja++]=Da,ya[ja++]=ct,Ra=a.id,Da=a.overflow,ct=e}var Ve=null,ye=null,ie=!1,mt=null,_a=!1,Is=Error(r(519));function ft(e){var a=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(ba(a,e)),Is}function nc(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[Qe]=e,a[We]=n,t){case"dialog":le("cancel",a),le("close",a);break;case"iframe":case"object":case"embed":le("load",a);break;case"video":case"audio":for(t=0;t<Tl.length;t++)le(Tl[t],a);break;case"source":le("error",a);break;case"img":case"image":case"link":le("error",a),le("load",a);break;case"details":le("toggle",a);break;case"input":le("invalid",a),vo(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":le("invalid",a);break;case"textarea":le("invalid",a),go(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||jf(a.textContent,t)?(n.popover!=null&&(le("beforetoggle",a),le("toggle",a)),n.onScroll!=null&&le("scroll",a),n.onScrollEnd!=null&&le("scrollend",a),n.onClick!=null&&(a.onclick=Ya),a=!0):a=!1,a||ft(e,!0)}function lc(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:_a=!1;return;case 27:case 3:_a=!0;return;default:Ve=Ve.return}}function hn(e){if(e!==Ve)return!1;if(!ie)return lc(e),ie=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||hr(e.type,e.memoizedProps)),t=!t),t&&ye&&ft(e),lc(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ye=Cf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ye=Cf(e)}else a===27?(a=ye,Tt(e.type)?(e=_r,_r=null,ye=e):ye=a):ye=Ve?qa(e.stateNode.nextSibling):null;return!0}function Qt(){ye=Ve=null,ie=!1}function ei(){var e=mt;return e!==null&&(ta===null?ta=e:ta.push.apply(ta,e),mt=null),e}function ll(e){mt===null?mt=[e]:mt.push(e)}var ai=h(null),Vt=null,ka=null;function dt(e,a,t){B(ai,a._currentValue),a._currentValue=t}function Xa(e){e._currentValue=ai.current,z(ai)}function ti(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function ni(e,a,t,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var i=l.child;u=u.firstContext;e:for(;u!==null;){var o=u;u=l;for(var d=0;d<a.length;d++)if(o.context===a[d]){u.lanes|=t,o=u.alternate,o!==null&&(o.lanes|=t),ti(u.return,t,e),n||(i=null);break e}u=o.next}}else if(l.tag===18){if(i=l.return,i===null)throw Error(r(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),ti(i,t,e),i=null}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===e){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}}function gn(e,a,t,n){e=null;for(var l=a,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var i=l.alternate;if(i===null)throw Error(r(387));if(i=i.memoizedProps,i!==null){var o=l.type;oa(l.pendingProps.value,i.value)||(e!==null?e.push(o):e=[o])}}else if(l===me.current){if(i=l.alternate,i===null)throw Error(r(387));i.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Rl):e=[Rl])}l=l.return}e!==null&&ni(a,e,t,n),a.flags|=262144}function cu(e){for(e=e.firstContext;e!==null;){if(!oa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wt(e){Vt=e,ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function we(e){return uc(Vt,e)}function mu(e,a){return Vt===null&&wt(e),uc(e,a)}function uc(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},ka===null){if(e===null)throw Error(r(308));ka=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ka=ka.next=a;return t}var EA=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},TA=s.unstable_scheduleCallback,JA=s.unstable_NormalPriority,Oe={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function li(){return{controller:new EA,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&TA(JA,function(){e.controller.abort()})}var sl=null,ui=0,bn=0,yn=null;function MA(e,a){if(sl===null){var t=sl=[];ui=0,bn=rr(),yn={status:"pending",value:void 0,then:function(n){t.push(n)}}}return ui++,a.then(sc,sc),a}function sc(){if(--ui===0&&sl!==null){yn!==null&&(yn.status="fulfilled");var e=sl;sl=null,bn=0,yn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function xA(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var l=0;l<t.length;l++)(0,t[l])(a)},function(l){for(n.status="rejected",n.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),n}var ic=x.S;x.S=function(e,a){wm=sa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&MA(e,a),ic!==null&&ic(e,a)};var kt=h(null);function si(){var e=kt.current;return e!==null?e:be.pooledCache}function fu(e,a){a===null?B(kt,kt.current):B(kt,a.pool)}function rc(){var e=si();return e===null?null:{parent:Oe._currentValue,pool:e}}var jn=Error(r(460)),ii=Error(r(474)),du=Error(r(542)),pu={then:function(){}};function oc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cc(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ya,Ya),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,fc(e),e;default:if(typeof a.status=="string")a.then(Ya,Ya);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=n}},function(n){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,fc(e),e}throw Zt=a,jn}}function Xt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Zt=t,jn):t}}var Zt=null;function mc(){if(Zt===null)throw Error(r(459));var e=Zt;return Zt=null,e}function fc(e){if(e===jn||e===du)throw Error(r(483))}var _n=null,il=0;function Au(e){var a=il;return il+=1,_n===null&&(_n=[]),cc(_n,e,a)}function rl(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function vu(e,a){throw a.$$typeof===N?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function dc(e){function a(b,v){if(e){var y=b.deletions;y===null?(b.deletions=[v],b.flags|=16):y.push(v)}}function t(b,v){if(!e)return null;for(;v!==null;)a(b,v),v=v.sibling;return null}function n(b){for(var v=new Map;b!==null;)b.key!==null?v.set(b.key,b):v.set(b.index,b),b=b.sibling;return v}function l(b,v){return b=Va(b,v),b.index=0,b.sibling=null,b}function u(b,v,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<v?(b.flags|=67108866,v):y):(b.flags|=67108866,v)):(b.flags|=1048576,v)}function i(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function o(b,v,y,R){return v===null||v.tag!==6?(v=Fs(y,b.mode,R),v.return=b,v):(v=l(v,y),v.return=b,v)}function d(b,v,y,R){var X=y.type;return X===Z?M(b,v,y.props.children,R,y.key):v!==null&&(v.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ue&&Xt(X)===v.type)?(v=l(v,y.props),rl(v,y),v.return=b,v):(v=ru(y.type,y.key,y.props,null,b.mode,R),rl(v,y),v.return=b,v)}function _(b,v,y,R){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Ps(y,b.mode,R),v.return=b,v):(v=l(v,y.children||[]),v.return=b,v)}function M(b,v,y,R,X){return v===null||v.tag!==7?(v=Yt(y,b.mode,R,X),v.return=b,v):(v=l(v,y),v.return=b,v)}function D(b,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Fs(""+v,b.mode,y),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Q:return y=ru(v.type,v.key,v.props,null,b.mode,y),rl(y,v),y.return=b,y;case k:return v=Ps(v,b.mode,y),v.return=b,v;case Ue:return v=Xt(v),D(b,v,y)}if(Ta(v)||Pe(v))return v=Yt(v,b.mode,y,null),v.return=b,v;if(typeof v.then=="function")return D(b,Au(v),y);if(v.$$typeof===K)return D(b,mu(b,v),y);vu(b,v)}return null}function S(b,v,y,R){var X=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return X!==null?null:o(b,v,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:return y.key===X?d(b,v,y,R):null;case k:return y.key===X?_(b,v,y,R):null;case Ue:return y=Xt(y),S(b,v,y,R)}if(Ta(y)||Pe(y))return X!==null?null:M(b,v,y,R,null);if(typeof y.then=="function")return S(b,v,Au(y),R);if(y.$$typeof===K)return S(b,v,mu(b,y),R);vu(b,y)}return null}function q(b,v,y,R,X){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return b=b.get(y)||null,o(v,b,""+R,X);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Q:return b=b.get(R.key===null?y:R.key)||null,d(v,b,R,X);case k:return b=b.get(R.key===null?y:R.key)||null,_(v,b,R,X);case Ue:return R=Xt(R),q(b,v,y,R,X)}if(Ta(R)||Pe(R))return b=b.get(y)||null,M(v,b,R,X,null);if(typeof R.then=="function")return q(b,v,y,Au(R),X);if(R.$$typeof===K)return q(b,v,y,mu(v,R),X);vu(v,R)}return null}function U(b,v,y,R){for(var X=null,re=null,w=v,ae=v=0,se=null;w!==null&&ae<y.length;ae++){w.index>ae?(se=w,w=null):se=w.sibling;var oe=S(b,w,y[ae],R);if(oe===null){w===null&&(w=se);break}e&&w&&oe.alternate===null&&a(b,w),v=u(oe,v,ae),re===null?X=oe:re.sibling=oe,re=oe,w=se}if(ae===y.length)return t(b,w),ie&&wa(b,ae),X;if(w===null){for(;ae<y.length;ae++)w=D(b,y[ae],R),w!==null&&(v=u(w,v,ae),re===null?X=w:re.sibling=w,re=w);return ie&&wa(b,ae),X}for(w=n(w);ae<y.length;ae++)se=q(w,b,ae,y[ae],R),se!==null&&(e&&se.alternate!==null&&w.delete(se.key===null?ae:se.key),v=u(se,v,ae),re===null?X=se:re.sibling=se,re=se);return e&&w.forEach(function(Rt){return a(b,Rt)}),ie&&wa(b,ae),X}function F(b,v,y,R){if(y==null)throw Error(r(151));for(var X=null,re=null,w=v,ae=v=0,se=null,oe=y.next();w!==null&&!oe.done;ae++,oe=y.next()){w.index>ae?(se=w,w=null):se=w.sibling;var Rt=S(b,w,oe.value,R);if(Rt===null){w===null&&(w=se);break}e&&w&&Rt.alternate===null&&a(b,w),v=u(Rt,v,ae),re===null?X=Rt:re.sibling=Rt,re=Rt,w=se}if(oe.done)return t(b,w),ie&&wa(b,ae),X;if(w===null){for(;!oe.done;ae++,oe=y.next())oe=D(b,oe.value,R),oe!==null&&(v=u(oe,v,ae),re===null?X=oe:re.sibling=oe,re=oe);return ie&&wa(b,ae),X}for(w=n(w);!oe.done;ae++,oe=y.next())oe=q(w,b,ae,oe.value,R),oe!==null&&(e&&oe.alternate!==null&&w.delete(oe.key===null?ae:oe.key),v=u(oe,v,ae),re===null?X=oe:re.sibling=oe,re=oe);return e&&w.forEach(function(Gv){return a(b,Gv)}),ie&&wa(b,ae),X}function he(b,v,y,R){if(typeof y=="object"&&y!==null&&y.type===Z&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:e:{for(var X=y.key;v!==null;){if(v.key===X){if(X=y.type,X===Z){if(v.tag===7){t(b,v.sibling),R=l(v,y.props.children),R.return=b,b=R;break e}}else if(v.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ue&&Xt(X)===v.type){t(b,v.sibling),R=l(v,y.props),rl(R,y),R.return=b,b=R;break e}t(b,v);break}else a(b,v);v=v.sibling}y.type===Z?(R=Yt(y.props.children,b.mode,R,y.key),R.return=b,b=R):(R=ru(y.type,y.key,y.props,null,b.mode,R),rl(R,y),R.return=b,b=R)}return i(b);case k:e:{for(X=y.key;v!==null;){if(v.key===X)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(b,v.sibling),R=l(v,y.children||[]),R.return=b,b=R;break e}else{t(b,v);break}else a(b,v);v=v.sibling}R=Ps(y,b.mode,R),R.return=b,b=R}return i(b);case Ue:return y=Xt(y),he(b,v,y,R)}if(Ta(y))return U(b,v,y,R);if(Pe(y)){if(X=Pe(y),typeof X!="function")throw Error(r(150));return y=X.call(y),F(b,v,y,R)}if(typeof y.then=="function")return he(b,v,Au(y),R);if(y.$$typeof===K)return he(b,v,mu(b,y),R);vu(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(t(b,v.sibling),R=l(v,y),R.return=b,b=R):(t(b,v),R=Fs(y,b.mode,R),R.return=b,b=R),i(b)):t(b,v)}return function(b,v,y,R){try{il=0;var X=he(b,v,y,R);return _n=null,X}catch(w){if(w===jn||w===du)throw w;var re=ca(29,w,null,b.mode);return re.lanes=R,re.return=b,re}finally{}}}var Kt=dc(!0),pc=dc(!1),pt=!1;function ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oi(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function At(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vt(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ce&2)!==0){var l=n.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a,a=iu(e),Wo(e,null,t),a}return su(e,n,a,t),iu(e)}function ol(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,lo(e,t)}}function ci(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var l=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?l=u=i:u=u.next=i,t=t.next}while(t!==null);u===null?l=u=a:u=u.next=a}else l=u=a;t={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var mi=!1;function cl(){if(mi){var e=yn;if(e!==null)throw e}}function ml(e,a,t,n){mi=!1;var l=e.updateQueue;pt=!1;var u=l.firstBaseUpdate,i=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var d=o,_=d.next;d.next=null,i===null?u=_:i.next=_,i=d;var M=e.alternate;M!==null&&(M=M.updateQueue,o=M.lastBaseUpdate,o!==i&&(o===null?M.firstBaseUpdate=_:o.next=_,M.lastBaseUpdate=d))}if(u!==null){var D=l.baseState;i=0,M=_=d=null,o=u;do{var S=o.lane&-536870913,q=S!==o.lane;if(q?(ue&S)===S:(n&S)===S){S!==0&&S===bn&&(mi=!0),M!==null&&(M=M.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var U=e,F=o;S=a;var he=t;switch(F.tag){case 1:if(U=F.payload,typeof U=="function"){D=U.call(he,D,S);break e}D=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=F.payload,S=typeof U=="function"?U.call(he,D,S):U,S==null)break e;D=E({},D,S);break e;case 2:pt=!0}}S=o.callback,S!==null&&(e.flags|=64,q&&(e.flags|=8192),q=l.callbacks,q===null?l.callbacks=[S]:q.push(S))}else q={lane:S,tag:o.tag,payload:o.payload,callback:o.callback,next:null},M===null?(_=M=q,d=D):M=M.next=q,i|=S;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;q=o,o=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);M===null&&(d=D),l.baseState=d,l.firstBaseUpdate=_,l.lastBaseUpdate=M,u===null&&(l.shared.lanes=0),jt|=i,e.lanes=i,e.memoizedState=D}}function Ac(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function vc(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Ac(t[e],a)}var Sn=h(null),hu=h(0);function hc(e,a){e=at,B(hu,e),B(Sn,a),at=e|a.baseLanes}function fi(){B(hu,at),B(Sn,Sn.current)}function di(){at=hu.current,z(Sn),z(hu)}var ma=h(null),Sa=null;function ht(e){var a=e.alternate;B(Re,Re.current&1),B(ma,e),Sa===null&&(a===null||Sn.current!==null||a.memoizedState!==null)&&(Sa=e)}function pi(e){B(Re,Re.current),B(ma,e),Sa===null&&(Sa=e)}function gc(e){e.tag===22?(B(Re,Re.current),B(ma,e),Sa===null&&(Sa=e)):gt()}function gt(){B(Re,Re.current),B(ma,ma.current)}function fa(e){z(ma),Sa===e&&(Sa=null),z(Re)}var Re=h(0);function gu(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||yr(t)||jr(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Za=0,I=null,Ae=null,ze=null,bu=!1,qn=!1,Ft=!1,yu=0,fl=0,En=null,CA=0;function Je(){throw Error(r(321))}function Ai(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!oa(e[t],a[t]))return!1;return!0}function vi(e,a,t,n,l,u){return Za=u,I=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,x.H=e===null||e.memoizedState===null?am:Ri,Ft=!1,u=t(n,l),Ft=!1,qn&&(u=yc(a,t,n,l)),bc(e),u}function bc(e){x.H=Al;var a=Ae!==null&&Ae.next!==null;if(Za=0,ze=Ae=I=null,bu=!1,fl=0,En=null,a)throw Error(r(300));e===null||Ne||(e=e.dependencies,e!==null&&cu(e)&&(Ne=!0))}function yc(e,a,t,n){I=e;var l=0;do{if(qn&&(En=null),fl=0,qn=!1,25<=l)throw Error(r(301));if(l+=1,ze=Ae=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}x.H=tm,u=a(t,n)}while(qn);return u}function RA(){var e=x.H,a=e.useState()[0];return a=typeof a.then=="function"?dl(a):a,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(I.flags|=1024),a}function hi(){var e=yu!==0;return yu=0,e}function gi(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function bi(e){if(bu){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}bu=!1}Za=0,ze=Ae=I=null,qn=!1,fl=yu=0,En=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?I.memoizedState=ze=e:ze=ze.next=e,ze}function De(){if(Ae===null){var e=I.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var a=ze===null?I.memoizedState:ze.next;if(a!==null)ze=a,Ae=e;else{if(e===null)throw I.alternate===null?Error(r(467)):Error(r(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},ze===null?I.memoizedState=ze=e:ze=ze.next=e}return ze}function ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dl(e){var a=fl;return fl+=1,En===null&&(En=[]),e=cc(En,e,a),a=I,(ze===null?a.memoizedState:ze.next)===null&&(a=a.alternate,x.H=a===null||a.memoizedState===null?am:Ri),e}function _u(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dl(e);if(e.$$typeof===K)return we(e)}throw Error(r(438,String(e)))}function yi(e){var a=null,t=I.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=I.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=ju(),I.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=la;return a.index++,t}function Ka(e,a){return typeof a=="function"?a(e):a}function Su(e){var a=De();return ji(a,Ae,e)}function ji(e,a,t){var n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var l=e.baseQueue,u=n.pending;if(u!==null){if(l!==null){var i=l.next;l.next=u.next,u.next=i}a.baseQueue=l=u,n.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{a=l.next;var o=i=null,d=null,_=a,M=!1;do{var D=_.lane&-536870913;if(D!==_.lane?(ue&D)===D:(Za&D)===D){var S=_.revertLane;if(S===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),D===bn&&(M=!0);else if((Za&S)===S){_=_.next,S===bn&&(M=!0);continue}else D={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(o=d=D,i=u):d=d.next=D,I.lanes|=S,jt|=S;D=_.action,Ft&&t(u,D),u=_.hasEagerState?_.eagerState:t(u,D)}else S={lane:D,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(o=d=S,i=u):d=d.next=S,I.lanes|=D,jt|=D;_=_.next}while(_!==null&&_!==a);if(d===null?i=u:d.next=o,!oa(u,e.memoizedState)&&(Ne=!0,M&&(t=yn,t!==null)))throw t;e.memoizedState=u,e.baseState=i,e.baseQueue=d,n.lastRenderedState=u}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function _i(e){var a=De(),t=a.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var n=t.dispatch,l=t.pending,u=a.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do u=e(u,i.action),i=i.next;while(i!==l);oa(u,a.memoizedState)||(Ne=!0),a.memoizedState=u,a.baseQueue===null&&(a.baseState=u),t.lastRenderedState=u}return[u,n]}function jc(e,a,t){var n=I,l=De(),u=ie;if(u){if(t===void 0)throw Error(r(407));t=t()}else t=a();var i=!oa((Ae||l).memoizedState,t);if(i&&(l.memoizedState=t,Ne=!0),l=l.queue,Ei(qc.bind(null,n,l,e),[e]),l.getSnapshot!==a||i||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Tn(9,{destroy:void 0},Sc.bind(null,n,l,t,a),null),be===null)throw Error(r(349));u||(Za&127)!==0||_c(n,a,t)}return t}function _c(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=I.updateQueue,a===null?(a=ju(),I.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Sc(e,a,t,n){a.value=t,a.getSnapshot=n,Ec(a)&&Tc(e)}function qc(e,a,t){return t(function(){Ec(a)&&Tc(e)})}function Ec(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!oa(e,t)}catch{return!0}}function Tc(e){var a=Gt(e,2);a!==null&&na(a,e,2)}function Si(e){var a=Fe();if(typeof e=="function"){var t=e;if(e=t(),Ft){it(!0);try{t()}finally{it(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:e},a}function Jc(e,a,t,n){return e.baseState=t,ji(e,Ae,typeof n=="function"?n:Ka)}function DA(e,a,t,n,l){if(Tu(e))throw Error(r(485));if(e=a.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};x.T!==null?t(!0):u.isTransition=!1,n(u),t=a.pending,t===null?(u.next=a.pending=u,Mc(a,u)):(u.next=t.next,a.pending=t.next=u)}}function Mc(e,a){var t=a.action,n=a.payload,l=e.state;if(a.isTransition){var u=x.T,i={};x.T=i;try{var o=t(l,n),d=x.S;d!==null&&d(i,o),xc(e,a,o)}catch(_){qi(e,a,_)}finally{u!==null&&i.types!==null&&(u.types=i.types),x.T=u}}else try{u=t(l,n),xc(e,a,u)}catch(_){qi(e,a,_)}}function xc(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){Cc(e,a,n)},function(n){return qi(e,a,n)}):Cc(e,a,t)}function Cc(e,a,t){a.status="fulfilled",a.value=t,Rc(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Mc(e,t)))}function qi(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,Rc(a),a=a.next;while(a!==n)}e.action=null}function Rc(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Dc(e,a){return a}function Oc(e,a){if(ie){var t=be.formState;if(t!==null){e:{var n=I;if(ie){if(ye){a:{for(var l=ye,u=_a;l.nodeType!==8;){if(!u){l=null;break a}if(l=qa(l.nextSibling),l===null){l=null;break a}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){ye=qa(l.nextSibling),n=l.data==="F!";break e}}ft(n)}n=!1}n&&(a=t[0])}}return t=Fe(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dc,lastRenderedState:a},t.queue=n,t=$c.bind(null,I,n),n.dispatch=t,n=Si(!1),u=Ci.bind(null,I,!1,n.queue),n=Fe(),l={state:a,dispatch:null,action:e,pending:null},n.queue=l,t=DA.bind(null,I,l,u,t),l.dispatch=t,n.memoizedState=e,[a,t,!1]}function zc(e){var a=De();return Nc(a,Ae,e)}function Nc(e,a,t){if(a=ji(e,a,Dc)[0],e=Su(Ka)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=dl(a)}catch(i){throw i===jn?du:i}else n=a;a=De();var l=a.queue,u=l.dispatch;return t!==a.memoizedState&&(I.flags|=2048,Tn(9,{destroy:void 0},OA.bind(null,l,t),null)),[n,u,e]}function OA(e,a){e.action=a}function Lc(e){var a=De(),t=Ae;if(t!==null)return Nc(a,t,e);De(),a=a.memoizedState,t=De();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function Tn(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=I.updateQueue,a===null&&(a=ju(),I.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function Bc(){return De().memoizedState}function qu(e,a,t,n){var l=Fe();I.flags|=e,l.memoizedState=Tn(1|a,{destroy:void 0},t,n===void 0?null:n)}function Eu(e,a,t,n){var l=De();n=n===void 0?null:n;var u=l.memoizedState.inst;Ae!==null&&n!==null&&Ai(n,Ae.memoizedState.deps)?l.memoizedState=Tn(a,u,t,n):(I.flags|=e,l.memoizedState=Tn(1|a,u,t,n))}function Uc(e,a){qu(8390656,8,e,a)}function Ei(e,a){Eu(2048,8,e,a)}function zA(e){I.flags|=4;var a=I.updateQueue;if(a===null)a=ju(),I.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Hc(e){var a=De().memoizedState;return zA({ref:a,nextImpl:e}),function(){if((ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}function Gc(e,a){return Eu(4,2,e,a)}function Yc(e,a){return Eu(4,4,e,a)}function Qc(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Vc(e,a,t){t=t!=null?t.concat([e]):null,Eu(4,4,Qc.bind(null,a,e),t)}function Ti(){}function wc(e,a){var t=De();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&Ai(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function kc(e,a){var t=De();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&Ai(a,n[1]))return n[0];if(n=e(),Ft){it(!0);try{e()}finally{it(!1)}}return t.memoizedState=[n,a],n}function Ji(e,a,t){return t===void 0||(Za&1073741824)!==0&&(ue&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Xm(),I.lanes|=e,jt|=e,t)}function Xc(e,a,t,n){return oa(t,a)?t:Sn.current!==null?(e=Ji(e,t,n),oa(e,a)||(Ne=!0),e):(Za&42)===0||(Za&1073741824)!==0&&(ue&261930)===0?(Ne=!0,e.memoizedState=t):(e=Xm(),I.lanes|=e,jt|=e,a)}function Zc(e,a,t,n,l){var u=L.p;L.p=u!==0&&8>u?u:8;var i=x.T,o={};x.T=o,Ci(e,!1,a,t);try{var d=l(),_=x.S;if(_!==null&&_(o,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var M=xA(d,n);pl(e,a,M,Aa(e))}else pl(e,a,n,Aa(e))}catch(D){pl(e,a,{then:function(){},status:"rejected",reason:D},Aa())}finally{L.p=u,i!==null&&o.types!==null&&(i.types=o.types),x.T=i}}function NA(){}function Mi(e,a,t,n){if(e.tag!==5)throw Error(r(476));var l=Kc(e).queue;Zc(e,l,a,P,t===null?NA:function(){return Fc(e),t(n)})}function Kc(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:P},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Fc(e){var a=Kc(e);a.next===null&&(a=e.alternate.memoizedState),pl(e,a.next.queue,{},Aa())}function xi(){return we(Rl)}function Pc(){return De().memoizedState}function Wc(){return De().memoizedState}function LA(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Aa();e=At(t);var n=vt(a,e,t);n!==null&&(na(n,a,t),ol(n,a,t)),a={cache:li()},e.payload=a;return}a=a.return}}function BA(e,a,t){var n=Aa();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Tu(e)?Ic(a,t):(t=Zs(e,a,t,n),t!==null&&(na(t,e,n),em(t,a,n)))}function $c(e,a,t){var n=Aa();pl(e,a,t,n)}function pl(e,a,t,n){var l={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Tu(e))Ic(a,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=a.lastRenderedReducer,u!==null))try{var i=a.lastRenderedState,o=u(i,t);if(l.hasEagerState=!0,l.eagerState=o,oa(o,i))return su(e,a,l,0),be===null&&uu(),!1}catch{}finally{}if(t=Zs(e,a,l,n),t!==null)return na(t,e,n),em(t,a,n),!0}return!1}function Ci(e,a,t,n){if(n={lane:2,revertLane:rr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Tu(e)){if(a)throw Error(r(479))}else a=Zs(e,t,n,2),a!==null&&na(a,e,2)}function Tu(e){var a=e.alternate;return e===I||a!==null&&a===I}function Ic(e,a){qn=bu=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function em(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,lo(e,t)}}var Al={readContext:we,use:_u,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};Al.useEffectEvent=Je;var am={readContext:we,use:_u,useCallback:function(e,a){return Fe().memoizedState=[e,a===void 0?null:a],e},useContext:we,useEffect:Uc,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,qu(4194308,4,Qc.bind(null,a,e),t)},useLayoutEffect:function(e,a){return qu(4194308,4,e,a)},useInsertionEffect:function(e,a){qu(4,2,e,a)},useMemo:function(e,a){var t=Fe();a=a===void 0?null:a;var n=e();if(Ft){it(!0);try{e()}finally{it(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=Fe();if(t!==void 0){var l=t(a);if(Ft){it(!0);try{t(a)}finally{it(!1)}}}else l=a;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=BA.bind(null,I,e),[n.memoizedState,e]},useRef:function(e){var a=Fe();return e={current:e},a.memoizedState=e},useState:function(e){e=Si(e);var a=e.queue,t=$c.bind(null,I,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Ti,useDeferredValue:function(e,a){var t=Fe();return Ji(t,e,a)},useTransition:function(){var e=Si(!1);return e=Zc.bind(null,I,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=I,l=Fe();if(ie){if(t===void 0)throw Error(r(407));t=t()}else{if(t=a(),be===null)throw Error(r(349));(ue&127)!==0||_c(n,a,t)}l.memoizedState=t;var u={value:t,getSnapshot:a};return l.queue=u,Uc(qc.bind(null,n,u,e),[e]),n.flags|=2048,Tn(9,{destroy:void 0},Sc.bind(null,n,u,t,a),null),t},useId:function(){var e=Fe(),a=be.identifierPrefix;if(ie){var t=Da,n=Ra;t=(n&~(1<<32-ra(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=yu++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=CA++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:xi,useFormState:Oc,useActionState:Oc,useOptimistic:function(e){var a=Fe();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Ci.bind(null,I,!0,t),t.dispatch=a,[e,a]},useMemoCache:yi,useCacheRefresh:function(){return Fe().memoizedState=LA.bind(null,I)},useEffectEvent:function(e){var a=Fe(),t={impl:e};return a.memoizedState=t,function(){if((ce&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}},Ri={readContext:we,use:_u,useCallback:wc,useContext:we,useEffect:Ei,useImperativeHandle:Vc,useInsertionEffect:Gc,useLayoutEffect:Yc,useMemo:kc,useReducer:Su,useRef:Bc,useState:function(){return Su(Ka)},useDebugValue:Ti,useDeferredValue:function(e,a){var t=De();return Xc(t,Ae.memoizedState,e,a)},useTransition:function(){var e=Su(Ka)[0],a=De().memoizedState;return[typeof e=="boolean"?e:dl(e),a]},useSyncExternalStore:jc,useId:Pc,useHostTransitionStatus:xi,useFormState:zc,useActionState:zc,useOptimistic:function(e,a){var t=De();return Jc(t,Ae,e,a)},useMemoCache:yi,useCacheRefresh:Wc};Ri.useEffectEvent=Hc;var tm={readContext:we,use:_u,useCallback:wc,useContext:we,useEffect:Ei,useImperativeHandle:Vc,useInsertionEffect:Gc,useLayoutEffect:Yc,useMemo:kc,useReducer:_i,useRef:Bc,useState:function(){return _i(Ka)},useDebugValue:Ti,useDeferredValue:function(e,a){var t=De();return Ae===null?Ji(t,e,a):Xc(t,Ae.memoizedState,e,a)},useTransition:function(){var e=_i(Ka)[0],a=De().memoizedState;return[typeof e=="boolean"?e:dl(e),a]},useSyncExternalStore:jc,useId:Pc,useHostTransitionStatus:xi,useFormState:Lc,useActionState:Lc,useOptimistic:function(e,a){var t=De();return Ae!==null?Jc(t,Ae,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:yi,useCacheRefresh:Wc};tm.useEffectEvent=Hc;function Di(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:E({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Oi={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=Aa(),l=At(n);l.payload=a,t!=null&&(l.callback=t),a=vt(e,l,n),a!==null&&(na(a,e,n),ol(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=Aa(),l=At(n);l.tag=1,l.payload=a,t!=null&&(l.callback=t),a=vt(e,l,n),a!==null&&(na(a,e,n),ol(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Aa(),n=At(t);n.tag=2,a!=null&&(n.callback=a),a=vt(e,n,t),a!==null&&(na(a,e,t),ol(a,e,t))}};function nm(e,a,t,n,l,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,i):a.prototype&&a.prototype.isPureReactComponent?!al(t,n)||!al(l,u):!0}function lm(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Oi.enqueueReplaceState(a,a.state,null)}function Pt(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=E({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function um(e){lu(e)}function sm(e){console.error(e)}function im(e){lu(e)}function Ju(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function rm(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zi(e,a,t){return t=At(t),t.tag=3,t.payload={element:null},t.callback=function(){Ju(e,a)},t}function om(e){return e=At(e),e.tag=3,e}function cm(e,a,t,n){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;e.payload=function(){return l(u)},e.callback=function(){rm(a,t,n)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){rm(a,t,n),typeof l!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function UA(e,a,t,n,l){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&gn(a,t,l,!0),t=ma.current,t!==null){switch(t.tag){case 31:case 13:return Sa===null?Hu():t.alternate===null&&Me===0&&(Me=3),t.flags&=-257,t.flags|=65536,t.lanes=l,n===pu?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),ur(e,n,l)),!1;case 22:return t.flags|=65536,n===pu?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),ur(e,n,l)),!1}throw Error(r(435,t.tag))}return ur(e,n,l),Hu(),!1}if(ie)return a=ma.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=l,n!==Is&&(e=Error(r(422),{cause:n}),ll(ba(e,t)))):(n!==Is&&(a=Error(r(423),{cause:n}),ll(ba(a,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=ba(n,t),l=zi(e.stateNode,n,l),ci(e,l),Me!==4&&(Me=2)),!1;var u=Error(r(520),{cause:n});if(u=ba(u,t),Sl===null?Sl=[u]:Sl.push(u),Me!==4&&(Me=2),a===null)return!0;n=ba(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=zi(t.stateNode,n,e),ci(t,e),!1;case 1:if(a=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(_t===null||!_t.has(u))))return t.flags|=65536,l&=-l,t.lanes|=l,l=om(l),cm(l,e,t,n),ci(t,l),!1}t=t.return}while(t!==null);return!1}var Ni=Error(r(461)),Ne=!1;function ke(e,a,t,n){a.child=e===null?pc(a,null,t,n):Kt(a,e.child,t,n)}function mm(e,a,t,n,l){t=t.render;var u=a.ref;if("ref"in n){var i={};for(var o in n)o!=="ref"&&(i[o]=n[o])}else i=n;return wt(a),n=vi(e,a,t,i,u,l),o=hi(),e!==null&&!Ne?(gi(e,a,l),Fa(e,a,l)):(ie&&o&&Ws(a),a.flags|=1,ke(e,a,n,l),a.child)}function fm(e,a,t,n,l){if(e===null){var u=t.type;return typeof u=="function"&&!Ks(u)&&u.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=u,dm(e,a,u,n,l)):(e=ru(t.type,null,n,a,a.mode,l),e.ref=a.ref,e.return=a,a.child=e)}if(u=e.child,!Vi(e,l)){var i=u.memoizedProps;if(t=t.compare,t=t!==null?t:al,t(i,n)&&e.ref===a.ref)return Fa(e,a,l)}return a.flags|=1,e=Va(u,n),e.ref=a.ref,e.return=a,a.child=e}function dm(e,a,t,n,l){if(e!==null){var u=e.memoizedProps;if(al(u,n)&&e.ref===a.ref)if(Ne=!1,a.pendingProps=n=u,Vi(e,l))(e.flags&131072)!==0&&(Ne=!0);else return a.lanes=e.lanes,Fa(e,a,l)}return Li(e,a,t,n,l)}function pm(e,a,t,n){var l=n.children,u=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(u=u!==null?u.baseLanes|t:t,e!==null){for(n=a.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~u}else n=0,a.child=null;return Am(e,a,u,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&fu(a,u!==null?u.cachePool:null),u!==null?hc(a,u):fi(),gc(a);else return n=a.lanes=536870912,Am(e,a,u!==null?u.baseLanes|t:t,t,n)}else u!==null?(fu(a,u.cachePool),hc(a,u),gt(),a.memoizedState=null):(e!==null&&fu(a,null),fi(),gt());return ke(e,a,l,t),a.child}function vl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Am(e,a,t,n,l){var u=si();return u=u===null?null:{parent:Oe._currentValue,pool:u},a.memoizedState={baseLanes:t,cachePool:u},e!==null&&fu(a,null),fi(),gc(a),e!==null&&gn(e,a,n,!0),a.childLanes=l,null}function Mu(e,a){return a=Cu({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function vm(e,a,t){return Kt(a,e.child,null,t),e=Mu(a,a.pendingProps),e.flags|=2,fa(a),a.memoizedState=null,e}function HA(e,a,t){var n=a.pendingProps,l=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ie){if(n.mode==="hidden")return e=Mu(a,n),a.lanes=536870912,vl(null,e);if(pi(a),(e=ye)?(e=xf(e,_a),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ct!==null?{id:Ra,overflow:Da}:null,retryLane:536870912,hydrationErrors:null},t=Io(e),t.return=a,a.child=t,Ve=a,ye=null)):e=null,e===null)throw ft(a);return a.lanes=536870912,null}return Mu(a,n)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(pi(a),l)if(a.flags&256)a.flags&=-257,a=vm(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(r(558));else if(Ne||gn(e,a,t,!1),l=(t&e.childLanes)!==0,Ne||l){if(n=be,n!==null&&(i=uo(n,t),i!==0&&i!==u.retryLane))throw u.retryLane=i,Gt(e,i),na(n,e,i),Ni;Hu(),a=vm(e,a,t)}else e=u.treeContext,ye=qa(i.nextSibling),Ve=a,ie=!0,mt=null,_a=!1,e!==null&&tc(a,e),a=Mu(a,n),a.flags|=4096;return a}return e=Va(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function xu(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Li(e,a,t,n,l){return wt(a),t=vi(e,a,t,n,void 0,l),n=hi(),e!==null&&!Ne?(gi(e,a,l),Fa(e,a,l)):(ie&&n&&Ws(a),a.flags|=1,ke(e,a,t,l),a.child)}function hm(e,a,t,n,l,u){return wt(a),a.updateQueue=null,t=yc(a,n,t,l),bc(e),n=hi(),e!==null&&!Ne?(gi(e,a,u),Fa(e,a,u)):(ie&&n&&Ws(a),a.flags|=1,ke(e,a,t,u),a.child)}function gm(e,a,t,n,l){if(wt(a),a.stateNode===null){var u=pn,i=t.contextType;typeof i=="object"&&i!==null&&(u=we(i)),u=new t(n,u),a.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Oi,a.stateNode=u,u._reactInternals=a,u=a.stateNode,u.props=n,u.state=a.memoizedState,u.refs={},ri(a),i=t.contextType,u.context=typeof i=="object"&&i!==null?we(i):pn,u.state=a.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Di(a,t,i,n),u.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Oi.enqueueReplaceState(u,u.state,null),ml(a,n,u,l),cl(),u.state=a.memoizedState),typeof u.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){u=a.stateNode;var o=a.memoizedProps,d=Pt(t,o);u.props=d;var _=u.context,M=t.contextType;i=pn,typeof M=="object"&&M!==null&&(i=we(M));var D=t.getDerivedStateFromProps;M=typeof D=="function"||typeof u.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,M||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o||_!==i)&&lm(a,u,n,i),pt=!1;var S=a.memoizedState;u.state=S,ml(a,n,u,l),cl(),_=a.memoizedState,o||S!==_||pt?(typeof D=="function"&&(Di(a,t,D,n),_=a.memoizedState),(d=pt||nm(a,t,d,n,S,_,i))?(M||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=_),u.props=n,u.state=_,u.context=i,n=d):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{u=a.stateNode,oi(e,a),i=a.memoizedProps,M=Pt(t,i),u.props=M,D=a.pendingProps,S=u.context,_=t.contextType,d=pn,typeof _=="object"&&_!==null&&(d=we(_)),o=t.getDerivedStateFromProps,(_=typeof o=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==D||S!==d)&&lm(a,u,n,d),pt=!1,S=a.memoizedState,u.state=S,ml(a,n,u,l),cl();var q=a.memoizedState;i!==D||S!==q||pt||e!==null&&e.dependencies!==null&&cu(e.dependencies)?(typeof o=="function"&&(Di(a,t,o,n),q=a.memoizedState),(M=pt||nm(a,t,M,n,S,q,d)||e!==null&&e.dependencies!==null&&cu(e.dependencies))?(_||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,q,d),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,q,d)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&S===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&S===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=q),u.props=n,u.state=q,u.context=d,n=M):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&S===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&S===e.memoizedState||(a.flags|=1024),n=!1)}return u=n,xu(e,a),n=(a.flags&128)!==0,u||n?(u=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:u.render(),a.flags|=1,e!==null&&n?(a.child=Kt(a,e.child,null,l),a.child=Kt(a,null,t,l)):ke(e,a,t,l),a.memoizedState=u.state,e=a.child):e=Fa(e,a,l),e}function bm(e,a,t,n){return Qt(),a.flags|=256,ke(e,a,t,n),a.child}var Bi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ui(e){return{baseLanes:e,cachePool:rc()}}function Hi(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=pa),e}function ym(e,a,t){var n=a.pendingProps,l=!1,u=(a.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),i&&(l=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,e===null){if(ie){if(l?ht(a):gt(),(e=ye)?(e=xf(e,_a),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ct!==null?{id:Ra,overflow:Da}:null,retryLane:536870912,hydrationErrors:null},t=Io(e),t.return=a,a.child=t,Ve=a,ye=null)):e=null,e===null)throw ft(a);return jr(e)?a.lanes=32:a.lanes=536870912,null}var o=n.children;return n=n.fallback,l?(gt(),l=a.mode,o=Cu({mode:"hidden",children:o},l),n=Yt(n,l,t,null),o.return=a,n.return=a,o.sibling=n,a.child=o,n=a.child,n.memoizedState=Ui(t),n.childLanes=Hi(e,i,t),a.memoizedState=Bi,vl(null,n)):(ht(a),Gi(a,o))}var d=e.memoizedState;if(d!==null&&(o=d.dehydrated,o!==null)){if(u)a.flags&256?(ht(a),a.flags&=-257,a=Yi(e,a,t)):a.memoizedState!==null?(gt(),a.child=e.child,a.flags|=128,a=null):(gt(),o=n.fallback,l=a.mode,n=Cu({mode:"visible",children:n.children},l),o=Yt(o,l,t,null),o.flags|=2,n.return=a,o.return=a,n.sibling=o,a.child=n,Kt(a,e.child,null,t),n=a.child,n.memoizedState=Ui(t),n.childLanes=Hi(e,i,t),a.memoizedState=Bi,a=vl(null,n));else if(ht(a),jr(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var _=i.dgst;i=_,n=Error(r(419)),n.stack="",n.digest=i,ll({value:n,source:null,stack:null}),a=Yi(e,a,t)}else if(Ne||gn(e,a,t,!1),i=(t&e.childLanes)!==0,Ne||i){if(i=be,i!==null&&(n=uo(i,t),n!==0&&n!==d.retryLane))throw d.retryLane=n,Gt(e,n),na(i,e,n),Ni;yr(o)||Hu(),a=Yi(e,a,t)}else yr(o)?(a.flags|=192,a.child=e.child,a=null):(e=d.treeContext,ye=qa(o.nextSibling),Ve=a,ie=!0,mt=null,_a=!1,e!==null&&tc(a,e),a=Gi(a,n.children),a.flags|=4096);return a}return l?(gt(),o=n.fallback,l=a.mode,d=e.child,_=d.sibling,n=Va(d,{mode:"hidden",children:n.children}),n.subtreeFlags=d.subtreeFlags&65011712,_!==null?o=Va(_,o):(o=Yt(o,l,t,null),o.flags|=2),o.return=a,n.return=a,n.sibling=o,a.child=n,vl(null,n),n=a.child,o=e.child.memoizedState,o===null?o=Ui(t):(l=o.cachePool,l!==null?(d=Oe._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=rc(),o={baseLanes:o.baseLanes|t,cachePool:l}),n.memoizedState=o,n.childLanes=Hi(e,i,t),a.memoizedState=Bi,vl(e.child,n)):(ht(a),t=e.child,e=t.sibling,t=Va(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(i=a.deletions,i===null?(a.deletions=[e],a.flags|=16):i.push(e)),a.child=t,a.memoizedState=null,t)}function Gi(e,a){return a=Cu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Cu(e,a){return e=ca(22,e,null,a),e.lanes=0,e}function Yi(e,a,t){return Kt(a,e.child,null,t),e=Gi(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function jm(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),ti(e.return,a,t)}function Qi(e,a,t,n,l,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:l,treeForkCount:u}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=t,i.tailMode=l,i.treeForkCount=u)}function _m(e,a,t){var n=a.pendingProps,l=n.revealOrder,u=n.tail;n=n.children;var i=Re.current,o=(i&2)!==0;if(o?(i=i&1|2,a.flags|=128):i&=1,B(Re,i),ke(e,a,n,t),n=ie?nl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,t,a);else if(e.tag===19)jm(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=a.child,l=null;t!==null;)e=t.alternate,e!==null&&gu(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=a.child,a.child=null):(l=t.sibling,t.sibling=null),Qi(a,!1,l,t,u,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=a.child,a.child=null;l!==null;){if(e=l.alternate,e!==null&&gu(e)===null){a.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Qi(a,!0,t,null,u,n);break;case"together":Qi(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function Fa(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),jt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(gn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,t=Va(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Va(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Vi(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&cu(e)))}function GA(e,a,t){switch(a.tag){case 3:Ke(a,a.stateNode.containerInfo),dt(a,Oe,e.memoizedState.cache),Qt();break;case 27:case 5:Qn(a);break;case 4:Ke(a,a.stateNode.containerInfo);break;case 10:dt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,pi(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(ht(a),a.flags|=128,null):(t&a.child.childLanes)!==0?ym(e,a,t):(ht(a),e=Fa(e,a,t),e!==null?e.sibling:null);ht(a);break;case 19:var l=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(gn(e,a,t,!1),n=(t&a.childLanes)!==0),l){if(n)return _m(e,a,t);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(Re,Re.current),n)break;return null;case 22:return a.lanes=0,pm(e,a,t,a.pendingProps);case 24:dt(a,Oe,e.memoizedState.cache)}return Fa(e,a,t)}function Sm(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ne=!0;else{if(!Vi(e,t)&&(a.flags&128)===0)return Ne=!1,GA(e,a,t);Ne=(e.flags&131072)!==0}else Ne=!1,ie&&(a.flags&1048576)!==0&&ac(a,nl,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=Xt(a.elementType),a.type=e,typeof e=="function")Ks(e)?(n=Pt(e,n),a.tag=1,a=gm(null,a,e,n,t)):(a.tag=0,a=Li(null,a,e,n,t));else{if(e!=null){var l=e.$$typeof;if(l===_e){a.tag=11,a=mm(null,a,e,n,t);break e}else if(l===ee){a.tag=14,a=fm(null,a,e,n,t);break e}}throw a=Ha(e)||e,Error(r(306,a,""))}}return a;case 0:return Li(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,l=Pt(n,a.pendingProps),gm(e,a,n,l,t);case 3:e:{if(Ke(a,a.stateNode.containerInfo),e===null)throw Error(r(387));n=a.pendingProps;var u=a.memoizedState;l=u.element,oi(e,a),ml(a,n,null,t);var i=a.memoizedState;if(n=i.cache,dt(a,Oe,n),n!==u.cache&&ni(a,[Oe],t,!0),cl(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=u,a.memoizedState=u,a.flags&256){a=bm(e,a,n,t);break e}else if(n!==l){l=ba(Error(r(424)),a),ll(l),a=bm(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=qa(e.firstChild),Ve=a,ie=!0,mt=null,_a=!0,t=pc(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Qt(),n===l){a=Fa(e,a,t);break e}ke(e,a,n,t)}a=a.child}return a;case 26:return xu(e,a),e===null?(t=Nf(a.type,null,a.pendingProps,null))?a.memoizedState=t:ie||(t=a.type,e=a.pendingProps,n=Xu(te.current).createElement(t),n[Qe]=a,n[We]=e,Xe(n,t,e),Ge(n),a.stateNode=n):a.memoizedState=Nf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Qn(a),e===null&&ie&&(n=a.stateNode=Df(a.type,a.pendingProps,te.current),Ve=a,_a=!0,l=ye,Tt(a.type)?(_r=l,ye=qa(n.firstChild)):ye=l),ke(e,a,a.pendingProps.children,t),xu(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ie&&((l=n=ye)&&(n=vv(n,a.type,a.pendingProps,_a),n!==null?(a.stateNode=n,Ve=a,ye=qa(n.firstChild),_a=!1,l=!0):l=!1),l||ft(a)),Qn(a),l=a.type,u=a.pendingProps,i=e!==null?e.memoizedProps:null,n=u.children,hr(l,u)?n=null:i!==null&&hr(l,i)&&(a.flags|=32),a.memoizedState!==null&&(l=vi(e,a,RA,null,null,t),Rl._currentValue=l),xu(e,a),ke(e,a,n,t),a.child;case 6:return e===null&&ie&&((e=t=ye)&&(t=hv(t,a.pendingProps,_a),t!==null?(a.stateNode=t,Ve=a,ye=null,e=!0):e=!1),e||ft(a)),null;case 13:return ym(e,a,t);case 4:return Ke(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Kt(a,null,n,t):ke(e,a,n,t),a.child;case 11:return mm(e,a,a.type,a.pendingProps,t);case 7:return ke(e,a,a.pendingProps,t),a.child;case 8:return ke(e,a,a.pendingProps.children,t),a.child;case 12:return ke(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,dt(a,a.type,n.value),ke(e,a,n.children,t),a.child;case 9:return l=a.type._context,n=a.pendingProps.children,wt(a),l=we(l),n=n(l),a.flags|=1,ke(e,a,n,t),a.child;case 14:return fm(e,a,a.type,a.pendingProps,t);case 15:return dm(e,a,a.type,a.pendingProps,t);case 19:return _m(e,a,t);case 31:return HA(e,a,t);case 22:return pm(e,a,t,a.pendingProps);case 24:return wt(a),n=we(Oe),e===null?(l=si(),l===null&&(l=be,u=li(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=t),l=u),a.memoizedState={parent:n,cache:l},ri(a),dt(a,Oe,l)):((e.lanes&t)!==0&&(oi(e,a),ml(a,null,null,t),cl()),l=e.memoizedState,u=a.memoizedState,l.parent!==n?(l={parent:n,cache:n},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),dt(a,Oe,n)):(n=u.cache,dt(a,Oe,n),n!==l.cache&&ni(a,[Oe],t,!0))),ke(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function Pa(e){e.flags|=4}function wi(e,a,t,n,l){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Pm())e.flags|=8192;else throw Zt=pu,ii}else e.flags&=-16777217}function qm(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(a))if(Pm())e.flags|=8192;else throw Zt=pu,ii}function Ru(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?to():536870912,e.lanes|=a,Cn|=a)}function hl(e,a){if(!ie)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function je(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function YA(e,a,t){var n=a.pendingProps;switch($s(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(a),null;case 1:return je(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Xa(Oe),Ce(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(hn(a)?Pa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ei())),je(a),null;case 26:var l=a.type,u=a.memoizedState;return e===null?(Pa(a),u!==null?(je(a),qm(a,u)):(je(a),wi(a,l,null,n,t))):u?u!==e.memoizedState?(Pa(a),je(a),qm(a,u)):(je(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&Pa(a),je(a),wi(a,l,e,n,t)),null;case 27:if(Ql(a),t=te.current,l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Pa(a);else{if(!n){if(a.stateNode===null)throw Error(r(166));return je(a),null}e=Y.current,hn(a)?nc(a):(e=Df(l,n,t),a.stateNode=e,Pa(a))}return je(a),null;case 5:if(Ql(a),l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Pa(a);else{if(!n){if(a.stateNode===null)throw Error(r(166));return je(a),null}if(u=Y.current,hn(a))nc(a);else{var i=Xu(te.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(l,{is:n.is}):i.createElement(l)}}u[Qe]=a,u[We]=n;e:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=u;e:switch(Xe(u,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Pa(a)}}return je(a),wi(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&Pa(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(r(166));if(e=te.current,hn(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,l=Ve,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Qe]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||jf(e.nodeValue,t)),e||ft(a,!0)}else e=Xu(e).createTextNode(n),e[Qe]=a,a.stateNode=e}return je(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=hn(a),t!==null){if(e===null){if(!n)throw Error(r(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Qe]=a}else Qt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;je(a),e=!1}else t=ei(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(fa(a),a):(fa(a),null);if((a.flags&128)!==0)throw Error(r(558))}return je(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=hn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Qe]=a}else Qt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;je(a),l=!1}else l=ei(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return a.flags&256?(fa(a),a):(fa(a),null)}return fa(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==l&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Ru(a,a.updateQueue),je(a),null);case 4:return Ce(),e===null&&fr(a.stateNode.containerInfo),je(a),null;case 10:return Xa(a.type),je(a),null;case 19:if(z(Re),n=a.memoizedState,n===null)return je(a),null;if(l=(a.flags&128)!==0,u=n.rendering,u===null)if(l)hl(n,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(u=gu(e),u!==null){for(a.flags|=128,hl(n,!1),e=u.updateQueue,a.updateQueue=e,Ru(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)$o(t,e),t=t.sibling;return B(Re,Re.current&1|2),ie&&wa(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&sa()>Lu&&(a.flags|=128,l=!0,hl(n,!1),a.lanes=4194304)}else{if(!l)if(e=gu(u),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Ru(a,e),hl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!ie)return je(a),null}else 2*sa()-n.renderingStartTime>Lu&&t!==536870912&&(a.flags|=128,l=!0,hl(n,!1),a.lanes=4194304);n.isBackwards?(u.sibling=a.child,a.child=u):(e=n.last,e!==null?e.sibling=u:a.child=u,n.last=u)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=sa(),e.sibling=null,t=Re.current,B(Re,l?t&1|2:t&1),ie&&wa(a,n.treeForkCount),e):(je(a),null);case 22:case 23:return fa(a),di(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(je(a),a.subtreeFlags&6&&(a.flags|=8192)):je(a),t=a.updateQueue,t!==null&&Ru(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&z(kt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Xa(Oe),je(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function QA(e,a){switch($s(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Xa(Oe),Ce(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ql(a),null;case 31:if(a.memoizedState!==null){if(fa(a),a.alternate===null)throw Error(r(340));Qt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(fa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Qt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return z(Re),null;case 4:return Ce(),null;case 10:return Xa(a.type),null;case 22:case 23:return fa(a),di(),e!==null&&z(kt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Xa(Oe),null;case 25:return null;default:return null}}function Em(e,a){switch($s(a),a.tag){case 3:Xa(Oe),Ce();break;case 26:case 27:case 5:Ql(a);break;case 4:Ce();break;case 31:a.memoizedState!==null&&fa(a);break;case 13:fa(a);break;case 19:z(Re);break;case 10:Xa(a.type);break;case 22:case 23:fa(a),di(),e!==null&&z(kt);break;case 24:Xa(Oe)}}function gl(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var l=n.next;t=l;do{if((t.tag&e)===e){n=void 0;var u=t.create,i=t.inst;n=u(),i.destroy=n}t=t.next}while(t!==l)}}catch(o){de(a,a.return,o)}}function bt(e,a,t){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var u=l.next;n=u;do{if((n.tag&e)===e){var i=n.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,l=a;var d=t,_=o;try{_()}catch(M){de(l,d,M)}}}n=n.next}while(n!==u)}}catch(M){de(a,a.return,M)}}function Tm(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{vc(a,t)}catch(n){de(e,e.return,n)}}}function Jm(e,a,t){t.props=Pt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){de(e,a,n)}}function bl(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(l){de(e,a,l)}}function Oa(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(l){de(e,a,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){de(e,a,l)}else t.current=null}function Mm(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(l){de(e,e.return,l)}}function ki(e,a,t){try{var n=e.stateNode;cv(n,e.type,t,a),n[We]=a}catch(l){de(e,e.return,l)}}function xm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tt(e.type)||e.tag===4}function Xi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zi(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ya));else if(n!==4&&(n===27&&Tt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(Zi(e,a,t),e=e.sibling;e!==null;)Zi(e,a,t),e=e.sibling}function Du(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&Tt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Du(e,a,t),e=e.sibling;e!==null;)Du(e,a,t),e=e.sibling}function Cm(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,l=a.attributes;l.length;)a.removeAttributeNode(l[0]);Xe(a,n,t),a[Qe]=e,a[We]=t}catch(u){de(e,e.return,u)}}var Wa=!1,Le=!1,Ki=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function VA(e,a){if(e=e.containerInfo,Ar=Iu,e=Vo(e),Ys(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var l=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var i=0,o=-1,d=-1,_=0,M=0,D=e,S=null;a:for(;;){for(var q;D!==t||l!==0&&D.nodeType!==3||(o=i+l),D!==u||n!==0&&D.nodeType!==3||(d=i+n),D.nodeType===3&&(i+=D.nodeValue.length),(q=D.firstChild)!==null;)S=D,D=q;for(;;){if(D===e)break a;if(S===t&&++_===l&&(o=i),S===u&&++M===n&&(d=i),(q=D.nextSibling)!==null)break;D=S,S=D.parentNode}D=q}t=o===-1||d===-1?null:{start:o,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(vr={focusedElem:e,selectionRange:t},Iu=!1,Ye=a;Ye!==null;)if(a=Ye,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ye=e;else for(;Ye!==null;){switch(a=Ye,u=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,t=a,l=u.memoizedProps,u=u.memoizedState,n=t.stateNode;try{var U=Pt(t.type,l);e=n.getSnapshotBeforeUpdate(U,u),n.__reactInternalSnapshotBeforeUpdate=e}catch(F){de(t,t.return,F)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)br(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":br(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,Ye=e;break}Ye=a.return}}function Dm(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ia(e,t),n&4&&gl(5,t);break;case 1:if(Ia(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(i){de(t,t.return,i)}else{var l=Pt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(l,a,e.__reactInternalSnapshotBeforeUpdate)}catch(i){de(t,t.return,i)}}n&64&&Tm(t),n&512&&bl(t,t.return);break;case 3:if(Ia(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{vc(e,a)}catch(i){de(t,t.return,i)}}break;case 27:a===null&&n&4&&Cm(t);case 26:case 5:Ia(e,t),a===null&&n&4&&Mm(t),n&512&&bl(t,t.return);break;case 12:Ia(e,t);break;case 31:Ia(e,t),n&4&&Nm(e,t);break;case 13:Ia(e,t),n&4&&Lm(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=$A.bind(null,t),gv(e,t))));break;case 22:if(n=t.memoizedState!==null||Wa,!n){a=a!==null&&a.memoizedState!==null||Le,l=Wa;var u=Le;Wa=n,(Le=a)&&!u?et(e,t,(t.subtreeFlags&8772)!==0):Ia(e,t),Wa=l,Le=u}break;case 30:break;default:Ia(e,t)}}function Om(e){var a=e.alternate;a!==null&&(e.alternate=null,Om(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&qs(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,Ie=!1;function $a(e,a,t){for(t=t.child;t!==null;)zm(e,a,t),t=t.sibling}function zm(e,a,t){if(ia&&typeof ia.onCommitFiberUnmount=="function")try{ia.onCommitFiberUnmount(Vn,t)}catch{}switch(t.tag){case 26:Le||Oa(t,a),$a(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Le||Oa(t,a);var n=Se,l=Ie;Tt(t.type)&&(Se=t.stateNode,Ie=!1),$a(e,a,t),Ml(t.stateNode),Se=n,Ie=l;break;case 5:Le||Oa(t,a);case 6:if(n=Se,l=Ie,Se=null,$a(e,a,t),Se=n,Ie=l,Se!==null)if(Ie)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(t.stateNode)}catch(u){de(t,a,u)}else try{Se.removeChild(t.stateNode)}catch(u){de(t,a,u)}break;case 18:Se!==null&&(Ie?(e=Se,Jf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Un(e)):Jf(Se,t.stateNode));break;case 4:n=Se,l=Ie,Se=t.stateNode.containerInfo,Ie=!0,$a(e,a,t),Se=n,Ie=l;break;case 0:case 11:case 14:case 15:bt(2,t,a),Le||bt(4,t,a),$a(e,a,t);break;case 1:Le||(Oa(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Jm(t,a,n)),$a(e,a,t);break;case 21:$a(e,a,t);break;case 22:Le=(n=Le)||t.memoizedState!==null,$a(e,a,t),Le=n;break;default:$a(e,a,t)}}function Nm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Un(e)}catch(t){de(a,a.return,t)}}}function Lm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Un(e)}catch(t){de(a,a.return,t)}}function wA(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Rm),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Rm),a;default:throw Error(r(435,e.tag))}}function Ou(e,a){var t=wA(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var l=IA.bind(null,e,n);n.then(l,l)}})}function ea(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var l=t[n],u=e,i=a,o=i;e:for(;o!==null;){switch(o.tag){case 27:if(Tt(o.type)){Se=o.stateNode,Ie=!1;break e}break;case 5:Se=o.stateNode,Ie=!1;break e;case 3:case 4:Se=o.stateNode.containerInfo,Ie=!0;break e}o=o.return}if(Se===null)throw Error(r(160));zm(u,i,l),Se=null,Ie=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Bm(a,e),a=a.sibling}var Ma=null;function Bm(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ea(a,e),aa(e),n&4&&(bt(3,e,e.return),gl(3,e),bt(5,e,e.return));break;case 1:ea(a,e),aa(e),n&512&&(Le||t===null||Oa(t,t.return)),n&64&&Wa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var l=Ma;if(ea(a,e),aa(e),n&512&&(Le||t===null||Oa(t,t.return)),n&4){var u=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,l=l.ownerDocument||l;a:switch(n){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Xn]||u[Qe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(n),l.head.insertBefore(u,l.querySelector("head > title"))),Xe(u,n,t),u[Qe]=e,Ge(u),n=u;break e;case"link":var i=Uf("link","href",l).get(n+(t.href||""));if(i){for(var o=0;o<i.length;o++)if(u=i[o],u.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(o,1);break a}}u=l.createElement(n),Xe(u,n,t),l.head.appendChild(u);break;case"meta":if(i=Uf("meta","content",l).get(n+(t.content||""))){for(o=0;o<i.length;o++)if(u=i[o],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(o,1);break a}}u=l.createElement(n),Xe(u,n,t),l.head.appendChild(u);break;default:throw Error(r(468,n))}u[Qe]=e,Ge(u),n=u}e.stateNode=n}else Hf(l,e.type,e.stateNode);else e.stateNode=Bf(l,n,e.memoizedProps);else u!==n?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,n===null?Hf(l,e.type,e.stateNode):Bf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&ki(e,e.memoizedProps,t.memoizedProps)}break;case 27:ea(a,e),aa(e),n&512&&(Le||t===null||Oa(t,t.return)),t!==null&&n&4&&ki(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ea(a,e),aa(e),n&512&&(Le||t===null||Oa(t,t.return)),e.flags&32){l=e.stateNode;try{sn(l,"")}catch(U){de(e,e.return,U)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,ki(e,l,t!==null?t.memoizedProps:l)),n&1024&&(Ki=!0);break;case 6:if(ea(a,e),aa(e),n&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(U){de(e,e.return,U)}}break;case 3:if(Fu=null,l=Ma,Ma=Zu(a.containerInfo),ea(a,e),Ma=l,aa(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Un(a.containerInfo)}catch(U){de(e,e.return,U)}Ki&&(Ki=!1,Um(e));break;case 4:n=Ma,Ma=Zu(e.stateNode.containerInfo),ea(a,e),aa(e),Ma=n;break;case 12:ea(a,e),aa(e);break;case 31:ea(a,e),aa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ou(e,n)));break;case 13:ea(a,e),aa(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Nu=sa()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ou(e,n)));break;case 22:l=e.memoizedState!==null;var d=t!==null&&t.memoizedState!==null,_=Wa,M=Le;if(Wa=_||l,Le=M||d,ea(a,e),Le=M,Wa=_,aa(e),n&8192)e:for(a=e.stateNode,a._visibility=l?a._visibility&-2:a._visibility|1,l&&(t===null||d||Wa||Le||Wt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){d=t=a;try{if(u=d.stateNode,l)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=d.stateNode;var D=d.memoizedProps.style,S=D!=null&&D.hasOwnProperty("display")?D.display:null;o.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(U){de(d,d.return,U)}}}else if(a.tag===6){if(t===null){d=a;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(U){de(d,d.return,U)}}}else if(a.tag===18){if(t===null){d=a;try{var q=d.stateNode;l?Mf(q,!0):Mf(d.stateNode,!1)}catch(U){de(d,d.return,U)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,Ou(e,t))));break;case 19:ea(a,e),aa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ou(e,n)));break;case 30:break;case 21:break;default:ea(a,e),aa(e)}}function aa(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(xm(n)){t=n;break}n=n.return}if(t==null)throw Error(r(160));switch(t.tag){case 27:var l=t.stateNode,u=Xi(e);Du(e,u,l);break;case 5:var i=t.stateNode;t.flags&32&&(sn(i,""),t.flags&=-33);var o=Xi(e);Du(e,o,i);break;case 3:case 4:var d=t.stateNode.containerInfo,_=Xi(e);Zi(e,_,d);break;default:throw Error(r(161))}}catch(M){de(e,e.return,M)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Um(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Um(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ia(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Dm(e,a.alternate,a),a=a.sibling}function Wt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:bt(4,a,a.return),Wt(a);break;case 1:Oa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Jm(a,a.return,t),Wt(a);break;case 27:Ml(a.stateNode);case 26:case 5:Oa(a,a.return),Wt(a);break;case 22:a.memoizedState===null&&Wt(a);break;case 30:Wt(a);break;default:Wt(a)}e=e.sibling}}function et(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,l=e,u=a,i=u.flags;switch(u.tag){case 0:case 11:case 15:et(l,u,t),gl(4,u);break;case 1:if(et(l,u,t),n=u,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(_){de(n,n.return,_)}if(n=u,l=n.updateQueue,l!==null){var o=n.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)Ac(d[l],o)}catch(_){de(n,n.return,_)}}t&&i&64&&Tm(u),bl(u,u.return);break;case 27:Cm(u);case 26:case 5:et(l,u,t),t&&n===null&&i&4&&Mm(u),bl(u,u.return);break;case 12:et(l,u,t);break;case 31:et(l,u,t),t&&i&4&&Nm(l,u);break;case 13:et(l,u,t),t&&i&4&&Lm(l,u);break;case 22:u.memoizedState===null&&et(l,u,t),bl(u,u.return);break;case 30:break;default:et(l,u,t)}a=a.sibling}}function Fi(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ul(t))}function Pi(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ul(e))}function xa(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Hm(e,a,t,n),a=a.sibling}function Hm(e,a,t,n){var l=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a,t,n),l&2048&&gl(9,a);break;case 1:xa(e,a,t,n);break;case 3:xa(e,a,t,n),l&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ul(e)));break;case 12:if(l&2048){xa(e,a,t,n),e=a.stateNode;try{var u=a.memoizedProps,i=u.id,o=u.onPostCommit;typeof o=="function"&&o(i,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){de(a,a.return,d)}}else xa(e,a,t,n);break;case 31:xa(e,a,t,n);break;case 13:xa(e,a,t,n);break;case 23:break;case 22:u=a.stateNode,i=a.alternate,a.memoizedState!==null?u._visibility&2?xa(e,a,t,n):yl(e,a):u._visibility&2?xa(e,a,t,n):(u._visibility|=2,Jn(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),l&2048&&Fi(i,a);break;case 24:xa(e,a,t,n),l&2048&&Pi(a.alternate,a);break;default:xa(e,a,t,n)}}function Jn(e,a,t,n,l){for(l=l&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var u=e,i=a,o=t,d=n,_=i.flags;switch(i.tag){case 0:case 11:case 15:Jn(u,i,o,d,l),gl(8,i);break;case 23:break;case 22:var M=i.stateNode;i.memoizedState!==null?M._visibility&2?Jn(u,i,o,d,l):yl(u,i):(M._visibility|=2,Jn(u,i,o,d,l)),l&&_&2048&&Fi(i.alternate,i);break;case 24:Jn(u,i,o,d,l),l&&_&2048&&Pi(i.alternate,i);break;default:Jn(u,i,o,d,l)}a=a.sibling}}function yl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,l=n.flags;switch(n.tag){case 22:yl(t,n),l&2048&&Fi(n.alternate,n);break;case 24:yl(t,n),l&2048&&Pi(n.alternate,n);break;default:yl(t,n)}a=a.sibling}}var jl=8192;function Mn(e,a,t){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Gm(e,a,t),e=e.sibling}function Gm(e,a,t){switch(e.tag){case 26:Mn(e,a,t),e.flags&jl&&e.memoizedState!==null&&Cv(t,Ma,e.memoizedState,e.memoizedProps);break;case 5:Mn(e,a,t);break;case 3:case 4:var n=Ma;Ma=Zu(e.stateNode.containerInfo),Mn(e,a,t),Ma=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=jl,jl=16777216,Mn(e,a,t),jl=n):Mn(e,a,t));break;default:Mn(e,a,t)}}function Ym(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function _l(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ye=n,Vm(n,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qm(e),e=e.sibling}function Qm(e){switch(e.tag){case 0:case 11:case 15:_l(e),e.flags&2048&&bt(9,e,e.return);break;case 3:_l(e);break;case 12:_l(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,zu(e)):_l(e);break;default:_l(e)}}function zu(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ye=n,Vm(n,e)}Ym(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:bt(8,a,a.return),zu(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,zu(a));break;default:zu(a)}e=e.sibling}}function Vm(e,a){for(;Ye!==null;){var t=Ye;switch(t.tag){case 0:case 11:case 15:bt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ul(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,Ye=n;else e:for(t=e;Ye!==null;){n=Ye;var l=n.sibling,u=n.return;if(Om(n),n===t){Ye=null;break e}if(l!==null){l.return=u,Ye=l;break e}Ye=u}}}var kA={getCacheForType:function(e){var a=we(Oe),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return we(Oe).controller.signal}},XA=typeof WeakMap=="function"?WeakMap:Map,ce=0,be=null,ne=null,ue=0,fe=0,da=null,yt=!1,xn=!1,Wi=!1,at=0,Me=0,jt=0,$t=0,$i=0,pa=0,Cn=0,Sl=null,ta=null,Ii=!1,Nu=0,wm=0,Lu=1/0,Bu=null,_t=null,He=0,St=null,Rn=null,tt=0,er=0,ar=null,km=null,ql=0,tr=null;function Aa(){return(ce&2)!==0&&ue!==0?ue&-ue:x.T!==null?rr():so()}function Xm(){if(pa===0)if((ue&536870912)===0||ie){var e=kl;kl<<=1,(kl&3932160)===0&&(kl=262144),pa=e}else pa=536870912;return e=ma.current,e!==null&&(e.flags|=32),pa}function na(e,a,t){(e===be&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Dn(e,0),qt(e,ue,pa,!1)),kn(e,t),((ce&2)===0||e!==be)&&(e===be&&((ce&2)===0&&($t|=t),Me===4&&qt(e,ue,pa,!1)),za(e))}function Zm(e,a,t){if((ce&6)!==0)throw Error(r(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||wn(e,a),l=n?FA(e,a):lr(e,a,!0),u=n;do{if(l===0){xn&&!n&&qt(e,a,0,!1);break}else{if(t=e.current.alternate,u&&!ZA(t)){l=lr(e,a,!1),u=!1;continue}if(l===2){if(u=a,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;e:{var o=e;l=Sl;var d=o.current.memoizedState.isDehydrated;if(d&&(Dn(o,i).flags|=256),i=lr(o,i,!1),i!==2){if(Wi&&!d){o.errorRecoveryDisabledLanes|=u,$t|=u,l=4;break e}u=ta,ta=l,u!==null&&(ta===null?ta=u:ta.push.apply(ta,u))}l=i}if(u=!1,l!==2)continue}}if(l===1){Dn(e,0),qt(e,a,0,!0);break}e:{switch(n=e,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:qt(n,a,pa,!yt);break e;case 2:ta=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(l=Nu+300-sa(),10<l)){if(qt(n,a,pa,!yt),Zl(n,0,!0)!==0)break e;tt=a,n.timeoutHandle=Ef(Km.bind(null,n,t,ta,Bu,Ii,a,pa,$t,Cn,yt,u,"Throttled",-0,0),l);break e}Km(n,t,ta,Bu,Ii,a,pa,$t,Cn,yt,u,null,-0,0)}}break}while(!0);za(e)}function Km(e,a,t,n,l,u,i,o,d,_,M,D,S,q){if(e.timeoutHandle=-1,D=a.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ya},Gm(a,u,D);var U=(u&62914560)===u?Nu-sa():(u&4194048)===u?wm-sa():0;if(U=Rv(D,U),U!==null){tt=u,e.cancelPendingCommit=U(tf.bind(null,e,a,u,t,n,l,i,o,d,M,D,null,S,q)),qt(e,u,i,!_);return}}tf(e,a,u,t,n,l,i,o,d)}function ZA(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var l=t[n],u=l.getSnapshot;l=l.value;try{if(!oa(u(),l))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function qt(e,a,t,n){a&=~$i,a&=~$t,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var l=a;0<l;){var u=31-ra(l),i=1<<u;n[u]=-1,l&=~i}t!==0&&no(e,t,a)}function Uu(){return(ce&6)===0?(El(0),!1):!0}function nr(){if(ne!==null){if(fe===0)var e=ne.return;else e=ne,ka=Vt=null,bi(e),_n=null,il=0,e=ne;for(;e!==null;)Em(e.alternate,e),e=e.return;ne=null}}function Dn(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,dv(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),tt=0,nr(),be=e,ne=t=Va(e.current,null),ue=a,fe=0,da=null,yt=!1,xn=wn(e,a),Wi=!1,Cn=pa=$i=$t=jt=Me=0,ta=Sl=null,Ii=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var l=31-ra(n),u=1<<l;a|=e[l],n&=~u}return at=a,uu(),t}function Fm(e,a){I=null,x.H=Al,a===jn||a===du?(a=mc(),fe=3):a===ii?(a=mc(),fe=4):fe=a===Ni?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,da=a,ne===null&&(Me=1,Ju(e,ba(a,e.current)))}function Pm(){var e=ma.current;return e===null?!0:(ue&4194048)===ue?Sa===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Sa:!1}function Wm(){var e=x.H;return x.H=Al,e===null?Al:e}function $m(){var e=x.A;return x.A=kA,e}function Hu(){Me=4,yt||(ue&4194048)!==ue&&ma.current!==null||(xn=!0),(jt&134217727)===0&&($t&134217727)===0||be===null||qt(be,ue,pa,!1)}function lr(e,a,t){var n=ce;ce|=2;var l=Wm(),u=$m();(be!==e||ue!==a)&&(Bu=null,Dn(e,a)),a=!1;var i=Me;e:do try{if(fe!==0&&ne!==null){var o=ne,d=da;switch(fe){case 8:nr(),i=6;break e;case 3:case 2:case 9:case 6:ma.current===null&&(a=!0);var _=fe;if(fe=0,da=null,On(e,o,d,_),t&&xn){i=0;break e}break;default:_=fe,fe=0,da=null,On(e,o,d,_)}}KA(),i=Me;break}catch(M){Fm(e,M)}while(!0);return a&&e.shellSuspendCounter++,ka=Vt=null,ce=n,x.H=l,x.A=u,ne===null&&(be=null,ue=0,uu()),i}function KA(){for(;ne!==null;)Im(ne)}function FA(e,a){var t=ce;ce|=2;var n=Wm(),l=$m();be!==e||ue!==a?(Bu=null,Lu=sa()+500,Dn(e,a)):xn=wn(e,a);e:do try{if(fe!==0&&ne!==null){a=ne;var u=da;a:switch(fe){case 1:fe=0,da=null,On(e,a,u,1);break;case 2:case 9:if(oc(u)){fe=0,da=null,ef(a);break}a=function(){fe!==2&&fe!==9||be!==e||(fe=7),za(e)},u.then(a,a);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:oc(u)?(fe=0,da=null,ef(a)):(fe=0,da=null,On(e,a,u,7));break;case 5:var i=null;switch(ne.tag){case 26:i=ne.memoizedState;case 5:case 27:var o=ne;if(i?Gf(i):o.stateNode.complete){fe=0,da=null;var d=o.sibling;if(d!==null)ne=d;else{var _=o.return;_!==null?(ne=_,Gu(_)):ne=null}break a}}fe=0,da=null,On(e,a,u,5);break;case 6:fe=0,da=null,On(e,a,u,6);break;case 8:nr(),Me=6;break e;default:throw Error(r(462))}}PA();break}catch(M){Fm(e,M)}while(!0);return ka=Vt=null,x.H=n,x.A=l,ce=t,ne!==null?0:(be=null,ue=0,uu(),Me)}function PA(){for(;ne!==null&&!bp();)Im(ne)}function Im(e){var a=Sm(e.alternate,e,at);e.memoizedProps=e.pendingProps,a===null?Gu(e):ne=a}function ef(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=hm(t,a,a.pendingProps,a.type,void 0,ue);break;case 11:a=hm(t,a,a.pendingProps,a.type.render,a.ref,ue);break;case 5:bi(a);default:Em(t,a),a=ne=$o(a,at),a=Sm(t,a,at)}e.memoizedProps=e.pendingProps,a===null?Gu(e):ne=a}function On(e,a,t,n){ka=Vt=null,bi(a),_n=null,il=0;var l=a.return;try{if(UA(e,l,a,t,ue)){Me=1,Ju(e,ba(t,e.current)),ne=null;return}}catch(u){if(l!==null)throw ne=l,u;Me=1,Ju(e,ba(t,e.current)),ne=null;return}a.flags&32768?(ie||n===1?e=!0:xn||(ue&536870912)!==0?e=!1:(yt=e=!0,(n===2||n===9||n===3||n===6)&&(n=ma.current,n!==null&&n.tag===13&&(n.flags|=16384))),af(a,e)):Gu(a)}function Gu(e){var a=e;do{if((a.flags&32768)!==0){af(a,yt);return}e=a.return;var t=YA(a.alternate,a,at);if(t!==null){ne=t;return}if(a=a.sibling,a!==null){ne=a;return}ne=a=e}while(a!==null);Me===0&&(Me=5)}function af(e,a){do{var t=QA(e.alternate,e);if(t!==null){t.flags&=32767,ne=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ne=e;return}ne=e=t}while(e!==null);Me=6,ne=null}function tf(e,a,t,n,l,u,i,o,d){e.cancelPendingCommit=null;do Yu();while(He!==0);if((ce&6)!==0)throw Error(r(327));if(a!==null){if(a===e.current)throw Error(r(177));if(u=a.lanes|a.childLanes,u|=Xs,xp(e,t,u,i,o,d),e===be&&(ne=be=null,ue=0),Rn=a,St=e,tt=t,er=u,ar=l,km=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ev(Vl,function(){return rf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=x.T,x.T=null,l=L.p,L.p=2,i=ce,ce|=4;try{VA(e,a,t)}finally{ce=i,L.p=l,x.T=n}}He=1,nf(),lf(),uf()}}function nf(){if(He===1){He=0;var e=St,a=Rn,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=x.T,x.T=null;var n=L.p;L.p=2;var l=ce;ce|=4;try{Bm(a,e);var u=vr,i=Vo(e.containerInfo),o=u.focusedElem,d=u.selectionRange;if(i!==o&&o&&o.ownerDocument&&Qo(o.ownerDocument.documentElement,o)){if(d!==null&&Ys(o)){var _=d.start,M=d.end;if(M===void 0&&(M=_),"selectionStart"in o)o.selectionStart=_,o.selectionEnd=Math.min(M,o.value.length);else{var D=o.ownerDocument||document,S=D&&D.defaultView||window;if(S.getSelection){var q=S.getSelection(),U=o.textContent.length,F=Math.min(d.start,U),he=d.end===void 0?F:Math.min(d.end,U);!q.extend&&F>he&&(i=he,he=F,F=i);var b=Yo(o,F),v=Yo(o,he);if(b&&v&&(q.rangeCount!==1||q.anchorNode!==b.node||q.anchorOffset!==b.offset||q.focusNode!==v.node||q.focusOffset!==v.offset)){var y=D.createRange();y.setStart(b.node,b.offset),q.removeAllRanges(),F>he?(q.addRange(y),q.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),q.addRange(y))}}}}for(D=[],q=o;q=q.parentNode;)q.nodeType===1&&D.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<D.length;o++){var R=D[o];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Iu=!!Ar,vr=Ar=null}finally{ce=l,L.p=n,x.T=t}}e.current=a,He=2}}function lf(){if(He===2){He=0;var e=St,a=Rn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=x.T,x.T=null;var n=L.p;L.p=2;var l=ce;ce|=4;try{Dm(e,a.alternate,a)}finally{ce=l,L.p=n,x.T=t}}He=3}}function uf(){if(He===4||He===3){He=0,yp();var e=St,a=Rn,t=tt,n=km;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?He=5:(He=0,Rn=St=null,sf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(_t=null),_s(t),a=a.stateNode,ia&&typeof ia.onCommitFiberRoot=="function")try{ia.onCommitFiberRoot(Vn,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=x.T,l=L.p,L.p=2,x.T=null;try{for(var u=e.onRecoverableError,i=0;i<n.length;i++){var o=n[i];u(o.value,{componentStack:o.stack})}}finally{x.T=a,L.p=l}}(tt&3)!==0&&Yu(),za(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===tr?ql++:(ql=0,tr=e):ql=0,El(0)}}function sf(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,ul(a)))}function Yu(){return nf(),lf(),uf(),rf()}function rf(){if(He!==5)return!1;var e=St,a=er;er=0;var t=_s(tt),n=x.T,l=L.p;try{L.p=32>t?32:t,x.T=null,t=ar,ar=null;var u=St,i=tt;if(He=0,Rn=St=null,tt=0,(ce&6)!==0)throw Error(r(331));var o=ce;if(ce|=4,Qm(u.current),Hm(u,u.current,i,t),ce=o,El(0,!1),ia&&typeof ia.onPostCommitFiberRoot=="function")try{ia.onPostCommitFiberRoot(Vn,u)}catch{}return!0}finally{L.p=l,x.T=n,sf(e,a)}}function of(e,a,t){a=ba(t,a),a=zi(e.stateNode,a,2),e=vt(e,a,2),e!==null&&(kn(e,2),za(e))}function de(e,a,t){if(e.tag===3)of(e,e,t);else for(;a!==null;){if(a.tag===3){of(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_t===null||!_t.has(n))){e=ba(t,e),t=om(2),n=vt(a,t,2),n!==null&&(cm(t,n,a,e),kn(n,2),za(n));break}}a=a.return}}function ur(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new XA;var l=new Set;n.set(a,l)}else l=n.get(a),l===void 0&&(l=new Set,n.set(a,l));l.has(t)||(Wi=!0,l.add(t),e=WA.bind(null,e,a,t),a.then(e,e))}function WA(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,be===e&&(ue&t)===t&&(Me===4||Me===3&&(ue&62914560)===ue&&300>sa()-Nu?(ce&2)===0&&Dn(e,0):$i|=t,Cn===ue&&(Cn=0)),za(e)}function cf(e,a){a===0&&(a=to()),e=Gt(e,a),e!==null&&(kn(e,a),za(e))}function $A(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),cf(e,t)}function IA(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(a),cf(e,t)}function ev(e,a){return gs(e,a)}var Qu=null,zn=null,sr=!1,Vu=!1,ir=!1,Et=0;function za(e){e!==zn&&e.next===null&&(zn===null?Qu=zn=e:zn=zn.next=e),Vu=!0,sr||(sr=!0,tv())}function El(e,a){if(!ir&&Vu){ir=!0;do for(var t=!1,n=Qu;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var u=0;else{var i=n.suspendedLanes,o=n.pingedLanes;u=(1<<31-ra(42|e)+1)-1,u&=l&~(i&~o),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,pf(n,u))}else u=ue,u=Zl(n,n===be?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||wn(n,u)||(t=!0,pf(n,u));n=n.next}while(t);ir=!1}}function av(){mf()}function mf(){Vu=sr=!1;var e=0;Et!==0&&fv()&&(e=Et);for(var a=sa(),t=null,n=Qu;n!==null;){var l=n.next,u=ff(n,a);u===0?(n.next=null,t===null?Qu=l:t.next=l,l===null&&(zn=t)):(t=n,(e!==0||(u&3)!==0)&&(Vu=!0)),n=l}He!==0&&He!==5||El(e),Et!==0&&(Et=0)}function ff(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-ra(u),o=1<<i,d=l[i];d===-1?((o&t)===0||(o&n)!==0)&&(l[i]=Mp(o,a)):d<=a&&(e.expiredLanes|=o),u&=~o}if(a=be,t=ue,t=Zl(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&bs(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||wn(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&bs(n),_s(t)){case 2:case 8:t=eo;break;case 32:t=Vl;break;case 268435456:t=ao;break;default:t=Vl}return n=df.bind(null,e),t=gs(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&bs(n),e.callbackPriority=2,e.callbackNode=null,2}function df(e,a){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Yu()&&e.callbackNode!==t)return null;var n=ue;return n=Zl(e,e===be?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Zm(e,n,a),ff(e,sa()),e.callbackNode!=null&&e.callbackNode===t?df.bind(null,e):null)}function pf(e,a){if(Yu())return null;Zm(e,a,!0)}function tv(){pv(function(){(ce&6)!==0?gs(Ir,av):mf()})}function rr(){if(Et===0){var e=bn;e===0&&(e=wl,wl<<=1,(wl&261888)===0&&(wl=256)),Et=e}return Et}function Af(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wl(""+e)}function vf(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function nv(e,a,t,n,l){if(a==="submit"&&t&&t.stateNode===l){var u=Af((l[We]||null).action),i=n.submitter;i&&(a=(a=i[We]||null)?Af(a.formAction):i.getAttribute("formAction"),a!==null&&(u=a,i=null));var o=new au("action","action",null,n,l);e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Et!==0){var d=i?vf(l,i):new FormData(l);Mi(t,{pending:!0,data:d,method:l.method,action:u},null,d)}}else typeof u=="function"&&(o.preventDefault(),d=i?vf(l,i):new FormData(l),Mi(t,{pending:!0,data:d,method:l.method,action:u},u,d))},currentTarget:l}]})}}for(var or=0;or<ks.length;or++){var cr=ks[or],lv=cr.toLowerCase(),uv=cr[0].toUpperCase()+cr.slice(1);Ja(lv,"on"+uv)}Ja(Xo,"onAnimationEnd"),Ja(Zo,"onAnimationIteration"),Ja(Ko,"onAnimationStart"),Ja("dblclick","onDoubleClick"),Ja("focusin","onFocus"),Ja("focusout","onBlur"),Ja(jA,"onTransitionRun"),Ja(_A,"onTransitionStart"),Ja(SA,"onTransitionCancel"),Ja(Fo,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function hf(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],l=n.event;n=n.listeners;e:{var u=void 0;if(a)for(var i=n.length-1;0<=i;i--){var o=n[i],d=o.instance,_=o.currentTarget;if(o=o.listener,d!==u&&l.isPropagationStopped())break e;u=o,l.currentTarget=_;try{u(l)}catch(M){lu(M)}l.currentTarget=null,u=d}else for(i=0;i<n.length;i++){if(o=n[i],d=o.instance,_=o.currentTarget,o=o.listener,d!==u&&l.isPropagationStopped())break e;u=o,l.currentTarget=_;try{u(l)}catch(M){lu(M)}l.currentTarget=null,u=d}}}}function le(e,a){var t=a[Ss];t===void 0&&(t=a[Ss]=new Set);var n=e+"__bubble";t.has(n)||(gf(a,e,2,!1),t.add(n))}function mr(e,a,t){var n=0;a&&(n|=4),gf(t,e,n,a)}var wu="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[wu]){e[wu]=!0,oo.forEach(function(t){t!=="selectionchange"&&(sv.has(t)||mr(t,!1,e),mr(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[wu]||(a[wu]=!0,mr("selectionchange",!1,a))}}function gf(e,a,t,n){switch(Zf(a)){case 2:var l=zv;break;case 8:l=Nv;break;default:l=Jr}t=l.bind(null,a,t,e),l=void 0,!Ds||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(a,t,{capture:!0,passive:l}):e.addEventListener(a,t,!0):l!==void 0?e.addEventListener(a,t,{passive:l}):e.addEventListener(a,t,!1)}function dr(e,a,t,n,l){var u=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var o=n.stateNode.containerInfo;if(o===l)break;if(i===4)for(i=n.return;i!==null;){var d=i.tag;if((d===3||d===4)&&i.stateNode.containerInfo===l)return;i=i.return}for(;o!==null;){if(i=an(o),i===null)return;if(d=i.tag,d===5||d===6||d===26||d===27){n=u=i;continue e}o=o.parentNode}}n=n.return}_o(function(){var _=u,M=Cs(t),D=[];e:{var S=Po.get(e);if(S!==void 0){var q=au,U=e;switch(e){case"keypress":if(Il(t)===0)break e;case"keydown":case"keyup":q=Ip;break;case"focusin":U="focus",q=Ls;break;case"focusout":U="blur",q=Ls;break;case"beforeblur":case"afterblur":q=Ls;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Yp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=tA;break;case Xo:case Zo:case Ko:q=wp;break;case Fo:q=lA;break;case"scroll":case"scrollend":q=Hp;break;case"wheel":q=sA;break;case"copy":case"cut":case"paste":q=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Jo;break;case"toggle":case"beforetoggle":q=rA}var F=(a&4)!==0,he=!F&&(e==="scroll"||e==="scrollend"),b=F?S!==null?S+"Capture":null:S;F=[];for(var v=_,y;v!==null;){var R=v;if(y=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||y===null||b===null||(R=Kn(v,b),R!=null&&F.push(Jl(v,R,y))),he)break;v=v.return}0<F.length&&(S=new q(S,U,null,t,M),D.push({event:S,listeners:F}))}}if((a&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",S&&t!==xs&&(U=t.relatedTarget||t.fromElement)&&(an(U)||U[en]))break e;if((q||S)&&(S=M.window===M?M:(S=M.ownerDocument)?S.defaultView||S.parentWindow:window,q?(U=t.relatedTarget||t.toElement,q=_,U=U?an(U):null,U!==null&&(he=A(U),F=U.tag,U!==he||F!==5&&F!==27&&F!==6)&&(U=null)):(q=null,U=_),q!==U)){if(F=Eo,R="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(F=Jo,R="onPointerLeave",b="onPointerEnter",v="pointer"),he=q==null?S:Zn(q),y=U==null?S:Zn(U),S=new F(R,v+"leave",q,t,M),S.target=he,S.relatedTarget=y,R=null,an(M)===_&&(F=new F(b,v+"enter",U,t,M),F.target=y,F.relatedTarget=he,R=F),he=R,q&&U)a:{for(F=iv,b=q,v=U,y=0,R=b;R;R=F(R))y++;R=0;for(var X=v;X;X=F(X))R++;for(;0<y-R;)b=F(b),y--;for(;0<R-y;)v=F(v),R--;for(;y--;){if(b===v||v!==null&&b===v.alternate){F=b;break a}b=F(b),v=F(v)}F=null}else F=null;q!==null&&bf(D,S,q,F,!1),U!==null&&he!==null&&bf(D,he,U,F,!0)}}e:{if(S=_?Zn(_):window,q=S.nodeName&&S.nodeName.toLowerCase(),q==="select"||q==="input"&&S.type==="file")var re=No;else if(Oo(S))if(Lo)re=gA;else{re=vA;var w=AA}else q=S.nodeName,!q||q.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?_&&Ms(_.elementType)&&(re=No):re=hA;if(re&&(re=re(e,_))){zo(D,re,t,M);break e}w&&w(e,S,_),e==="focusout"&&_&&S.type==="number"&&_.memoizedProps.value!=null&&Js(S,"number",S.value)}switch(w=_?Zn(_):window,e){case"focusin":(Oo(w)||w.contentEditable==="true")&&(mn=w,Qs=_,tl=null);break;case"focusout":tl=Qs=mn=null;break;case"mousedown":Vs=!0;break;case"contextmenu":case"mouseup":case"dragend":Vs=!1,wo(D,t,M);break;case"selectionchange":if(yA)break;case"keydown":case"keyup":wo(D,t,M)}var ae;if(Us)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else cn?Ro(e,t)&&(se="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(se="onCompositionStart");se&&(Mo&&t.locale!=="ko"&&(cn||se!=="onCompositionStart"?se==="onCompositionEnd"&&cn&&(ae=So()):(ot=M,Os="value"in ot?ot.value:ot.textContent,cn=!0)),w=ku(_,se),0<w.length&&(se=new To(se,e,null,t,M),D.push({event:se,listeners:w}),ae?se.data=ae:(ae=Do(t),ae!==null&&(se.data=ae)))),(ae=cA?mA(e,t):fA(e,t))&&(se=ku(_,"onBeforeInput"),0<se.length&&(w=new To("onBeforeInput","beforeinput",null,t,M),D.push({event:w,listeners:se}),w.data=ae)),nv(D,e,_,t,M)}hf(D,a)})}function Jl(e,a,t){return{instance:e,listener:a,currentTarget:t}}function ku(e,a){for(var t=a+"Capture",n=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Kn(e,t),l!=null&&n.unshift(Jl(e,l,u)),l=Kn(e,a),l!=null&&n.push(Jl(e,l,u))),e.tag===3)return n;e=e.return}return[]}function iv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bf(e,a,t,n,l){for(var u=a._reactName,i=[];t!==null&&t!==n;){var o=t,d=o.alternate,_=o.stateNode;if(o=o.tag,d!==null&&d===n)break;o!==5&&o!==26&&o!==27||_===null||(d=_,l?(_=Kn(t,u),_!=null&&i.unshift(Jl(t,_,d))):l||(_=Kn(t,u),_!=null&&i.push(Jl(t,_,d)))),t=t.return}i.length!==0&&e.push({event:a,listeners:i})}var rv=/\r\n?/g,ov=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(rv,`
`).replace(ov,"")}function jf(e,a){return a=yf(a),yf(e)===a}function ve(e,a,t,n,l,u){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||sn(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&sn(e,""+n);break;case"className":Fl(e,"class",n);break;case"tabIndex":Fl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Fl(e,t,n);break;case"style":yo(e,n,u);break;case"data":if(a!=="object"){Fl(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Wl(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(a!=="input"&&ve(e,a,"name",l.name,l,null),ve(e,a,"formEncType",l.formEncType,l,null),ve(e,a,"formMethod",l.formMethod,l,null),ve(e,a,"formTarget",l.formTarget,l,null)):(ve(e,a,"encType",l.encType,l,null),ve(e,a,"method",l.method,l,null),ve(e,a,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Wl(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=Ya);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=Wl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":le("beforetoggle",e),le("toggle",e),Kl(e,"popover",n);break;case"xlinkActuate":Ga(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ga(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ga(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ga(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ga(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ga(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Kl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Bp.get(t)||t,Kl(e,t,n))}}function pr(e,a,t,n,l,u){switch(t){case"style":yo(e,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"children":typeof n=="string"?sn(e,n):(typeof n=="number"||typeof n=="bigint")&&sn(e,""+n);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!co.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),a=t.slice(2,l?t.length-7:void 0),u=e[We]||null,u=u!=null?u[t]:null,typeof u=="function"&&e.removeEventListener(a,u,l),typeof n=="function")){typeof u!="function"&&u!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,l);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):Kl(e,t,n)}}}function Xe(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var n=!1,l=!1,u;for(u in t)if(t.hasOwnProperty(u)){var i=t[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ve(e,a,u,i,t,null)}}l&&ve(e,a,"srcSet",t.srcSet,t,null),n&&ve(e,a,"src",t.src,t,null);return;case"input":le("invalid",e);var o=u=i=l=null,d=null,_=null;for(n in t)if(t.hasOwnProperty(n)){var M=t[n];if(M!=null)switch(n){case"name":l=M;break;case"type":i=M;break;case"checked":d=M;break;case"defaultChecked":_=M;break;case"value":u=M;break;case"defaultValue":o=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,a));break;default:ve(e,a,n,M,t,null)}}vo(e,u,o,d,_,i,l,!1);return;case"select":le("invalid",e),n=i=u=null;for(l in t)if(t.hasOwnProperty(l)&&(o=t[l],o!=null))switch(l){case"value":u=o;break;case"defaultValue":i=o;break;case"multiple":n=o;default:ve(e,a,l,o,t,null)}a=u,t=i,e.multiple=!!n,a!=null?un(e,!!n,a,!1):t!=null&&un(e,!!n,t,!0);return;case"textarea":le("invalid",e),u=l=n=null;for(i in t)if(t.hasOwnProperty(i)&&(o=t[i],o!=null))switch(i){case"value":n=o;break;case"defaultValue":l=o;break;case"children":u=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:ve(e,a,i,o,t,null)}go(e,n,l,u);return;case"option":for(d in t)if(t.hasOwnProperty(d)&&(n=t[d],n!=null))switch(d){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ve(e,a,d,n,t,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(n=0;n<Tl.length;n++)le(Tl[n],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in t)if(t.hasOwnProperty(_)&&(n=t[_],n!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ve(e,a,_,n,t,null)}return;default:if(Ms(a)){for(M in t)t.hasOwnProperty(M)&&(n=t[M],n!==void 0&&pr(e,a,M,n,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(n=t[o],n!=null&&ve(e,a,o,n,t,null))}function cv(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,i=null,o=null,d=null,_=null,M=null;for(q in t){var D=t[q];if(t.hasOwnProperty(q)&&D!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":d=D;default:n.hasOwnProperty(q)||ve(e,a,q,null,n,D)}}for(var S in n){var q=n[S];if(D=t[S],n.hasOwnProperty(S)&&(q!=null||D!=null))switch(S){case"type":u=q;break;case"name":l=q;break;case"checked":_=q;break;case"defaultChecked":M=q;break;case"value":i=q;break;case"defaultValue":o=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,a));break;default:q!==D&&ve(e,a,S,q,n,D)}}Ts(e,i,o,d,_,M,u,l);return;case"select":q=i=o=S=null;for(u in t)if(d=t[u],t.hasOwnProperty(u)&&d!=null)switch(u){case"value":break;case"multiple":q=d;default:n.hasOwnProperty(u)||ve(e,a,u,null,n,d)}for(l in n)if(u=n[l],d=t[l],n.hasOwnProperty(l)&&(u!=null||d!=null))switch(l){case"value":S=u;break;case"defaultValue":o=u;break;case"multiple":i=u;default:u!==d&&ve(e,a,l,u,n,d)}a=o,t=i,n=q,S!=null?un(e,!!t,S,!1):!!n!=!!t&&(a!=null?un(e,!!t,a,!0):un(e,!!t,t?[]:"",!1));return;case"textarea":q=S=null;for(o in t)if(l=t[o],t.hasOwnProperty(o)&&l!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ve(e,a,o,null,n,l)}for(i in n)if(l=n[i],u=t[i],n.hasOwnProperty(i)&&(l!=null||u!=null))switch(i){case"value":S=l;break;case"defaultValue":q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&ve(e,a,i,l,n,u)}ho(e,S,q);return;case"option":for(var U in t)if(S=t[U],t.hasOwnProperty(U)&&S!=null&&!n.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:ve(e,a,U,null,n,S)}for(d in n)if(S=n[d],q=t[d],n.hasOwnProperty(d)&&S!==q&&(S!=null||q!=null))switch(d){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:ve(e,a,d,S,n,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in t)S=t[F],t.hasOwnProperty(F)&&S!=null&&!n.hasOwnProperty(F)&&ve(e,a,F,null,n,S);for(_ in n)if(S=n[_],q=t[_],n.hasOwnProperty(_)&&S!==q&&(S!=null||q!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(137,a));break;default:ve(e,a,_,S,n,q)}return;default:if(Ms(a)){for(var he in t)S=t[he],t.hasOwnProperty(he)&&S!==void 0&&!n.hasOwnProperty(he)&&pr(e,a,he,void 0,n,S);for(M in n)S=n[M],q=t[M],!n.hasOwnProperty(M)||S===q||S===void 0&&q===void 0||pr(e,a,M,S,n,q);return}}for(var b in t)S=t[b],t.hasOwnProperty(b)&&S!=null&&!n.hasOwnProperty(b)&&ve(e,a,b,null,n,S);for(D in n)S=n[D],q=t[D],!n.hasOwnProperty(D)||S===q||S==null&&q==null||ve(e,a,D,S,n,q)}function _f(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var l=t[n],u=l.transferSize,i=l.initiatorType,o=l.duration;if(u&&o&&_f(i)){for(i=0,o=l.responseEnd,n+=1;n<t.length;n++){var d=t[n],_=d.startTime;if(_>o)break;var M=d.transferSize,D=d.initiatorType;M&&_f(D)&&(d=d.responseEnd,i+=M*(d<o?1:(o-_)/(d-_)))}if(--n,a+=8*(u+i)/(l.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ar=null,vr=null;function Xu(e){return e.nodeType===9?e:e.ownerDocument}function Sf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qf(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function hr(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var gr=null;function fv(){var e=window.event;return e&&e.type==="popstate"?e===gr?!1:(gr=e,!0):(gr=null,!1)}var Ef=typeof setTimeout=="function"?setTimeout:void 0,dv=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(e){return Tf.resolve(null).then(e).catch(Av)}:Ef;function Av(e){setTimeout(function(){throw e})}function Tt(e){return e==="head"}function Jf(e,a){var t=a,n=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(l),Un(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")Ml(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Ml(t);for(var u=t.firstChild;u;){var i=u.nextSibling,o=u.nodeName;u[Xn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=i}}else t==="body"&&Ml(e.ownerDocument.body);t=l}while(t);Un(a)}function Mf(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function br(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":br(t),qs(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function vv(e,a,t,n){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Xn])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=qa(e.nextSibling),e===null)break}return null}function hv(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=qa(e.nextSibling),e===null))return null;return e}function xf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=qa(e.nextSibling),e===null))return null;return e}function yr(e){return e.data==="$?"||e.data==="$~"}function jr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function gv(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function qa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var _r=null;function Cf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return qa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Rf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function Df(e,a,t){switch(a=Xu(t),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ml(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);qs(e)}var Ea=new Map,Of=new Set;function Zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nt=L.d;L.d={f:bv,r:yv,D:jv,C:_v,L:Sv,m:qv,X:Tv,S:Ev,M:Jv};function bv(){var e=nt.f(),a=Uu();return e||a}function yv(e){var a=tn(e);a!==null&&a.tag===5&&a.type==="form"?Fc(a):nt.r(e)}var Nn=typeof document>"u"?null:document;function zf(e,a,t){var n=Nn;if(n&&typeof a=="string"&&a){var l=ha(a);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Of.has(l)||(Of.add(l),e={rel:e,crossOrigin:t,href:a},n.querySelector(l)===null&&(a=n.createElement("link"),Xe(a,"link",e),Ge(a),n.head.appendChild(a)))}}function jv(e){nt.D(e),zf("dns-prefetch",e,null)}function _v(e,a){nt.C(e,a),zf("preconnect",e,a)}function Sv(e,a,t){nt.L(e,a,t);var n=Nn;if(n&&e&&a){var l='link[rel="preload"][as="'+ha(a)+'"]';a==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+ha(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+ha(t.imageSizes)+'"]')):l+='[href="'+ha(e)+'"]';var u=l;switch(a){case"style":u=Ln(e);break;case"script":u=Bn(e)}Ea.has(u)||(e=E({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Ea.set(u,e),n.querySelector(l)!==null||a==="style"&&n.querySelector(xl(u))||a==="script"&&n.querySelector(Cl(u))||(a=n.createElement("link"),Xe(a,"link",e),Ge(a),n.head.appendChild(a)))}}function qv(e,a){nt.m(e,a);var t=Nn;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+ha(n)+'"][href="'+ha(e)+'"]',u=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Bn(e)}if(!Ea.has(u)&&(e=E({rel:"modulepreload",href:e},a),Ea.set(u,e),t.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Cl(u)))return}n=t.createElement("link"),Xe(n,"link",e),Ge(n),t.head.appendChild(n)}}}function Ev(e,a,t){nt.S(e,a,t);var n=Nn;if(n&&e){var l=nn(n).hoistableStyles,u=Ln(e);a=a||"default";var i=l.get(u);if(!i){var o={loading:0,preload:null};if(i=n.querySelector(xl(u)))o.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Ea.get(u))&&Sr(e,t);var d=i=n.createElement("link");Ge(d),Xe(d,"link",e),d._p=new Promise(function(_,M){d.onload=_,d.onerror=M}),d.addEventListener("load",function(){o.loading|=1}),d.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ku(i,a,n)}i={type:"stylesheet",instance:i,count:1,state:o},l.set(u,i)}}}function Tv(e,a){nt.X(e,a);var t=Nn;if(t&&e){var n=nn(t).hoistableScripts,l=Bn(e),u=n.get(l);u||(u=t.querySelector(Cl(l)),u||(e=E({src:e,async:!0},a),(a=Ea.get(l))&&qr(e,a),u=t.createElement("script"),Ge(u),Xe(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(l,u))}}function Jv(e,a){nt.M(e,a);var t=Nn;if(t&&e){var n=nn(t).hoistableScripts,l=Bn(e),u=n.get(l);u||(u=t.querySelector(Cl(l)),u||(e=E({src:e,async:!0,type:"module"},a),(a=Ea.get(l))&&qr(e,a),u=t.createElement("script"),Ge(u),Xe(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(l,u))}}function Nf(e,a,t,n){var l=(l=te.current)?Zu(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Ln(t.href),t=nn(l).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ln(t.href);var u=nn(l).hoistableStyles,i=u.get(e);if(i||(l=l.ownerDocument||l,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=l.querySelector(xl(e)))&&!u._p&&(i.instance=u,i.state.loading=5),Ea.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ea.set(e,t),u||Mv(l,e,t,i.state))),a&&n===null)throw Error(r(528,""));return i}if(a&&n!==null)throw Error(r(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Bn(t),t=nn(l).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ln(e){return'href="'+ha(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function Lf(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Mv(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),Xe(a,"link",t),Ge(a),e.head.appendChild(a))}function Bn(e){return'[src="'+ha(e)+'"]'}function Cl(e){return"script[async]"+e}function Bf(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+ha(t.href)+'"]');if(n)return a.instance=n,Ge(n),n;var l=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ge(n),Xe(n,"style",l),Ku(n,t.precedence,e),a.instance=n;case"stylesheet":l=Ln(t.href);var u=e.querySelector(xl(l));if(u)return a.state.loading|=4,a.instance=u,Ge(u),u;n=Lf(t),(l=Ea.get(l))&&Sr(n,l),u=(e.ownerDocument||e).createElement("link"),Ge(u);var i=u;return i._p=new Promise(function(o,d){i.onload=o,i.onerror=d}),Xe(u,"link",n),a.state.loading|=4,Ku(u,t.precedence,e),a.instance=u;case"script":return u=Bn(t.src),(l=e.querySelector(Cl(u)))?(a.instance=l,Ge(l),l):(n=t,(l=Ea.get(u))&&(n=E({},t),qr(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ge(l),Xe(l,"link",n),e.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,Ku(n,t.precedence,e));return a.instance}function Ku(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,u=l,i=0;i<n.length;i++){var o=n[i];if(o.dataset.precedence===a)u=o;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function Sr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function qr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Fu=null;function Uf(e,a,t){if(Fu===null){var n=new Map,l=Fu=new Map;l.set(t,n)}else l=Fu,n=l.get(t),n||(n=new Map,l.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var u=t[l];if(!(u[Xn]||u[Qe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(a)||"";i=e+i;var o=n.get(i);o?o.push(u):n.set(i,[u])}}return n}function Hf(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function xv(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Gf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Cv(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Ln(n.href),u=a.querySelector(xl(l));if(u){a=u._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Pu.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=u,Ge(u);return}u=a.ownerDocument||a,n=Lf(n),(l=Ea.get(l))&&Sr(n,l),u=u.createElement("link"),Ge(u);var i=u;i._p=new Promise(function(o,d){i.onload=o,i.onerror=d}),Xe(u,"link",n),t.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Pu.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Er=0;function Rv(e,a){return e.stylesheets&&e.count===0&&$u(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&$u(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+a);0<e.imgBytes&&Er===0&&(Er=62500*mv());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$u(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Er?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Pu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$u(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wu=null;function $u(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wu=new Map,a.forEach(Dv,e),Wu=null,Pu.call(e))}function Dv(e,a){if(!(a.state.loading&4)){var t=Wu.get(e);if(t)var n=t.get(null);else{t=new Map,Wu.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var i=l[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),n=i)}n&&t.set(null,n)}l=a.instance,i=l.getAttribute("data-precedence"),u=t.get(i)||n,u===n&&t.set(null,l),t.set(i,l),this.count++,n=Pu.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),a.state.loading|=4}}var Rl={$$typeof:K,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Ov(e,a,t,n,l,u,i,o,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.hiddenUpdates=ys(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Yf(e,a,t,n,l,u,i,o,d,_,M,D){return e=new Ov(e,a,t,i,d,_,M,D,o),a=1,u===!0&&(a|=24),u=ca(3,null,null,a),e.current=u,u.stateNode=e,a=li(),a.refCount++,e.pooledCache=a,a.refCount++,u.memoizedState={element:n,isDehydrated:t,cache:a},ri(u),e}function Qf(e){return e?(e=pn,e):pn}function Vf(e,a,t,n,l,u){l=Qf(l),n.context===null?n.context=l:n.pendingContext=l,n=At(a),n.payload={element:t},u=u===void 0?null:u,u!==null&&(n.callback=u),t=vt(e,n,a),t!==null&&(na(t,e,a),ol(t,e,a))}function wf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Tr(e,a){wf(e,a),(e=e.alternate)&&wf(e,a)}function kf(e){if(e.tag===13||e.tag===31){var a=Gt(e,67108864);a!==null&&na(a,e,67108864),Tr(e,67108864)}}function Xf(e){if(e.tag===13||e.tag===31){var a=Aa();a=js(a);var t=Gt(e,a);t!==null&&na(t,e,a),Tr(e,a)}}var Iu=!0;function zv(e,a,t,n){var l=x.T;x.T=null;var u=L.p;try{L.p=2,Jr(e,a,t,n)}finally{L.p=u,x.T=l}}function Nv(e,a,t,n){var l=x.T;x.T=null;var u=L.p;try{L.p=8,Jr(e,a,t,n)}finally{L.p=u,x.T=l}}function Jr(e,a,t,n){if(Iu){var l=Mr(n);if(l===null)dr(e,a,n,es,t),Kf(e,n);else if(Bv(l,e,a,t,n))n.stopPropagation();else if(Kf(e,n),a&4&&-1<Lv.indexOf(e)){for(;l!==null;){var u=tn(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Nt(u.pendingLanes);if(i!==0){var o=u;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var d=1<<31-ra(i);o.entanglements[1]|=d,i&=~d}za(u),(ce&6)===0&&(Lu=sa()+500,El(0))}}break;case 31:case 13:o=Gt(u,2),o!==null&&na(o,u,2),Uu(),Tr(u,2)}if(u=Mr(n),u===null&&dr(e,a,n,es,t),u===l)break;l=u}l!==null&&n.stopPropagation()}else dr(e,a,n,null,t)}}function Mr(e){return e=Cs(e),xr(e)}var es=null;function xr(e){if(es=null,e=an(e),e!==null){var a=A(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=j(a),e!==null)return e;e=null}else if(t===31){if(e=J(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return es=e,null}function Zf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jp()){case Ir:return 2;case eo:return 8;case Vl:case _p:return 32;case ao:return 268435456;default:return 32}default:return 32}}var Cr=!1,Jt=null,Mt=null,xt=null,Dl=new Map,Ol=new Map,Ct=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kf(e,a){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Dl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(a.pointerId)}}function zl(e,a,t,n,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:u,targetContainers:[l]},a!==null&&(a=tn(a),a!==null&&kf(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),e)}function Bv(e,a,t,n,l){switch(a){case"focusin":return Jt=zl(Jt,e,a,t,n,l),!0;case"dragenter":return Mt=zl(Mt,e,a,t,n,l),!0;case"mouseover":return xt=zl(xt,e,a,t,n,l),!0;case"pointerover":var u=l.pointerId;return Dl.set(u,zl(Dl.get(u)||null,e,a,t,n,l)),!0;case"gotpointercapture":return u=l.pointerId,Ol.set(u,zl(Ol.get(u)||null,e,a,t,n,l)),!0}return!1}function Ff(e){var a=an(e.target);if(a!==null){var t=A(a);if(t!==null){if(a=t.tag,a===13){if(a=j(t),a!==null){e.blockedOn=a,io(e.priority,function(){Xf(t)});return}}else if(a===31){if(a=J(t),a!==null){e.blockedOn=a,io(e.priority,function(){Xf(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Mr(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);xs=n,t.target.dispatchEvent(n),xs=null}else return a=tn(t),a!==null&&kf(a),e.blockedOn=t,!1;a.shift()}return!0}function Pf(e,a,t){as(e)&&t.delete(a)}function Uv(){Cr=!1,Jt!==null&&as(Jt)&&(Jt=null),Mt!==null&&as(Mt)&&(Mt=null),xt!==null&&as(xt)&&(xt=null),Dl.forEach(Pf),Ol.forEach(Pf)}function ts(e,a){e.blockedOn===a&&(e.blockedOn=null,Cr||(Cr=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Uv)))}var ns=null;function Wf(e){ns!==e&&(ns=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ns===e&&(ns=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],l=e[a+2];if(typeof n!="function"){if(xr(n||t)===null)continue;break}var u=tn(t);u!==null&&(e.splice(a,3),a-=3,Mi(u,{pending:!0,data:l,method:t.method,action:n},n,l))}}))}function Un(e){function a(d){return ts(d,e)}Jt!==null&&ts(Jt,e),Mt!==null&&ts(Mt,e),xt!==null&&ts(xt,e),Dl.forEach(a),Ol.forEach(a);for(var t=0;t<Ct.length;t++){var n=Ct[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ct.length&&(t=Ct[0],t.blockedOn===null);)Ff(t),t.blockedOn===null&&Ct.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var l=t[n],u=t[n+1],i=l[We]||null;if(typeof u=="function")i||Wf(t);else if(i){var o=null;if(u&&u.hasAttribute("formAction")){if(l=u,i=u[We]||null)o=i.formAction;else if(xr(l)!==null)continue}else o=i.action;typeof o=="function"?t[n+1]=o:(t.splice(n,3),n-=3),Wf(t)}}}function $f(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return l=i})},focusReset:"manual",scroll:"manual"})}function a(){l!==null&&(l(),l=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),l!==null&&(l(),l=null)}}}function Rr(e){this._internalRoot=e}ls.prototype.render=Rr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var t=a.current,n=Aa();Vf(t,n,e,a,null,null)},ls.prototype.unmount=Rr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Vf(e.current,2,null,e,null,null),Uu(),a[en]=null}};function ls(e){this._internalRoot=e}ls.prototype.unstable_scheduleHydration=function(e){if(e){var a=so();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Ct.length&&a!==0&&a<Ct[t].priority;t++);Ct.splice(t,0,e),t===0&&Ff(e)}};var If=m.version;if(If!=="19.2.0")throw Error(r(527,If,"19.2.0"));L.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(a),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var Hv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{Vn=us.inject(Hv),ia=us}catch{}}return Ll.createRoot=function(e,a){if(!f(e))throw Error(r(299));var t=!1,n="",l=um,u=sm,i=im;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=Yf(e,1,!1,null,null,t,n,null,l,u,i,$f),e[en]=a.current,fr(e),new Rr(a)},Ll.hydrateRoot=function(e,a,t){if(!f(e))throw Error(r(299));var n=!1,l="",u=um,i=sm,o=im,d=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.formState!==void 0&&(d=t.formState)),a=Yf(e,1,!0,a,t??null,n,l,d,u,i,o,$f),a.context=Qf(null),t=a.current,n=Aa(),n=js(n),l=At(n),l.callback=null,vt(t,l,n),t=n,a.current.lanes=t,kn(a,t),za(a),e[en]=a.current,fr(e),new ls(a)},Ll.version="19.2.0",Ll}var od;function Fv(){if(od)return zr.exports;od=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(m){console.error(m)}}return s(),zr.exports=Kv(),zr.exports}var Pv=Fv();const Wv=bd(Pv);var cd="popstate";function $v(s={}){function m(r,f){let{pathname:A,search:j,hash:J}=r.location;return Gr("",{pathname:A,search:j,hash:J},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(r,f){return typeof f=="string"?f:Ul(f)}return eh(m,c,null,s)}function qe(s,m){if(s===!1||s===null||typeof s>"u")throw new Error(m)}function Ca(s,m){if(!s){typeof console<"u"&&console.warn(m);try{throw new Error(m)}catch{}}}function Iv(){return Math.random().toString(36).substring(2,10)}function md(s,m){return{usr:s.state,key:s.key,idx:m}}function Gr(s,m,c=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof m=="string"?Gn(m):m,state:c,key:m&&m.key||r||Iv()}}function Ul({pathname:s="/",search:m="",hash:c=""}){return m&&m!=="?"&&(s+=m.charAt(0)==="?"?m:"?"+m),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function Gn(s){let m={};if(s){let c=s.indexOf("#");c>=0&&(m.hash=s.substring(c),s=s.substring(0,c));let r=s.indexOf("?");r>=0&&(m.search=s.substring(r),s=s.substring(0,r)),s&&(m.pathname=s)}return m}function eh(s,m,c,r={}){let{window:f=document.defaultView,v5Compat:A=!1}=r,j=f.history,J="POP",g=null,p=T();p==null&&(p=0,j.replaceState({...j.state,idx:p},""));function T(){return(j.state||{idx:null}).idx}function E(){J="POP";let V=T(),H=V==null?null:V-p;p=V,g&&g({action:J,location:Z.location,delta:H})}function N(V,H){J="PUSH";let G=Gr(Z.location,V,H);p=T()+1;let K=md(G,p),_e=Z.createHref(G);try{j.pushState(K,"",_e)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;f.location.assign(_e)}A&&g&&g({action:J,location:Z.location,delta:1})}function Q(V,H){J="REPLACE";let G=Gr(Z.location,V,H);p=T();let K=md(G,p),_e=Z.createHref(G);j.replaceState(K,"",_e),A&&g&&g({action:J,location:Z.location,delta:0})}function k(V){return ah(V)}let Z={get action(){return J},get location(){return s(f,j)},listen(V){if(g)throw new Error("A history only accepts one active listener");return f.addEventListener(cd,E),g=V,()=>{f.removeEventListener(cd,E),g=null}},createHref(V){return m(f,V)},createURL:k,encodeLocation(V){let H=k(V);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:N,replace:Q,go(V){return j.go(V)}};return Z}function ah(s,m=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),qe(c,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Ul(s);return r=r.replace(/ $/,"%20"),!m&&r.startsWith("//")&&(r=c+r),new URL(r,c)}function yd(s,m,c="/"){return th(s,m,c,!1)}function th(s,m,c,r){let f=typeof m=="string"?Gn(m):m,A=st(f.pathname||"/",c);if(A==null)return null;let j=jd(s);nh(j);let J=null;for(let g=0;J==null&&g<j.length;++g){let p=ph(A);J=fh(j[g],p,r)}return J}function jd(s,m=[],c=[],r="",f=!1){let A=(j,J,g=f,p)=>{let T={relativePath:p===void 0?j.path||"":p,caseSensitive:j.caseSensitive===!0,childrenIndex:J,route:j};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(r)&&g)return;qe(T.relativePath.startsWith(r),`Absolute route path "${T.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(r.length)}let E=ut([r,T.relativePath]),N=c.concat(T);j.children&&j.children.length>0&&(qe(j.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),jd(j.children,m,N,E,g)),!(j.path==null&&!j.index)&&m.push({path:E,score:ch(E,j.index),routesMeta:N})};return s.forEach((j,J)=>{if(j.path===""||!j.path?.includes("?"))A(j,J);else for(let g of _d(j.path))A(j,J,!0,g)}),m}function _d(s){let m=s.split("/");if(m.length===0)return[];let[c,...r]=m,f=c.endsWith("?"),A=c.replace(/\?$/,"");if(r.length===0)return f?[A,""]:[A];let j=_d(r.join("/")),J=[];return J.push(...j.map(g=>g===""?A:[A,g].join("/"))),f&&J.push(...j),J.map(g=>s.startsWith("/")&&g===""?"/":g)}function nh(s){s.sort((m,c)=>m.score!==c.score?c.score-m.score:mh(m.routesMeta.map(r=>r.childrenIndex),c.routesMeta.map(r=>r.childrenIndex)))}var lh=/^:[\w-]+$/,uh=3,sh=2,ih=1,rh=10,oh=-2,fd=s=>s==="*";function ch(s,m){let c=s.split("/"),r=c.length;return c.some(fd)&&(r+=oh),m&&(r+=sh),c.filter(f=>!fd(f)).reduce((f,A)=>f+(lh.test(A)?uh:A===""?ih:rh),r)}function mh(s,m){return s.length===m.length&&s.slice(0,-1).every((r,f)=>r===m[f])?s[s.length-1]-m[m.length-1]:0}function fh(s,m,c=!1){let{routesMeta:r}=s,f={},A="/",j=[];for(let J=0;J<r.length;++J){let g=r[J],p=J===r.length-1,T=A==="/"?m:m.slice(A.length)||"/",E=os({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},T),N=g.route;if(!E&&p&&c&&!r[r.length-1].route.index&&(E=os({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},T)),!E)return null;Object.assign(f,E.params),j.push({params:f,pathname:ut([A,E.pathname]),pathnameBase:bh(ut([A,E.pathnameBase])),route:N}),E.pathnameBase!=="/"&&(A=ut([A,E.pathnameBase]))}return j}function os(s,m){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[c,r]=dh(s.path,s.caseSensitive,s.end),f=m.match(c);if(!f)return null;let A=f[0],j=A.replace(/(.)\/+$/,"$1"),J=f.slice(1);return{params:r.reduce((p,{paramName:T,isOptional:E},N)=>{if(T==="*"){let k=J[N]||"";j=A.slice(0,A.length-k.length).replace(/(.)\/+$/,"$1")}const Q=J[N];return E&&!Q?p[T]=void 0:p[T]=(Q||"").replace(/%2F/g,"/"),p},{}),pathname:A,pathnameBase:j,pattern:s}}function dh(s,m=!1,c=!0){Ca(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],f="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(j,J,g)=>(r.push({paramName:J,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),f+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":s!==""&&s!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,m?void 0:"i"),r]}function ph(s){try{return s.split("/").map(m=>decodeURIComponent(m).replace(/\//g,"%2F")).join("/")}catch(m){return Ca(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`),s}}function st(s,m){if(m==="/")return s;if(!s.toLowerCase().startsWith(m.toLowerCase()))return null;let c=m.endsWith("/")?m.length-1:m.length,r=s.charAt(c);return r&&r!=="/"?null:s.slice(c)||"/"}var Ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vh=s=>Ah.test(s);function hh(s,m="/"){let{pathname:c,search:r="",hash:f=""}=typeof s=="string"?Gn(s):s,A;if(c)if(vh(c))A=c;else{if(c.includes("//")){let j=c;c=c.replace(/\/\/+/g,"/"),Ca(!1,`Pathnames cannot have embedded double slashes - normalizing ${j} -> ${c}`)}c.startsWith("/")?A=dd(c.substring(1),"/"):A=dd(c,m)}else A=m;return{pathname:A,search:yh(r),hash:jh(f)}}function dd(s,m){let c=m.replace(/\/+$/,"").split("/");return s.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function Ur(s,m,c,r){return`Cannot include a '${s}' character in a manually specified \`to.${m}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gh(s){return s.filter((m,c)=>c===0||m.route.path&&m.route.path.length>0)}function Sd(s){let m=gh(s);return m.map((c,r)=>r===m.length-1?c.pathname:c.pathnameBase)}function qd(s,m,c,r=!1){let f;typeof s=="string"?f=Gn(s):(f={...s},qe(!f.pathname||!f.pathname.includes("?"),Ur("?","pathname","search",f)),qe(!f.pathname||!f.pathname.includes("#"),Ur("#","pathname","hash",f)),qe(!f.search||!f.search.includes("#"),Ur("#","search","hash",f)));let A=s===""||f.pathname==="",j=A?"/":f.pathname,J;if(j==null)J=c;else{let E=m.length-1;if(!r&&j.startsWith("..")){let N=j.split("/");for(;N[0]==="..";)N.shift(),E-=1;f.pathname=N.join("/")}J=E>=0?m[E]:"/"}let g=hh(f,J),p=j&&j!=="/"&&j.endsWith("/"),T=(A||j===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(p||T)&&(g.pathname+="/"),g}var ut=s=>s.join("/").replace(/\/\/+/g,"/"),bh=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),yh=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,jh=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function _h(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ed=["POST","PUT","PATCH","DELETE"];new Set(Ed);var Sh=["GET",...Ed];new Set(Sh);var Yn=C.createContext(null);Yn.displayName="DataRouter";var fs=C.createContext(null);fs.displayName="DataRouterState";C.createContext(!1);var Td=C.createContext({isTransitioning:!1});Td.displayName="ViewTransition";var qh=C.createContext(new Map);qh.displayName="Fetchers";var Eh=C.createContext(null);Eh.displayName="Await";var La=C.createContext(null);La.displayName="Navigation";var Hl=C.createContext(null);Hl.displayName="Location";var Ba=C.createContext({outlet:null,matches:[],isDataRoute:!1});Ba.displayName="Route";var wr=C.createContext(null);wr.displayName="RouteError";function Th(s,{relative:m}={}){qe(Gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:r}=C.useContext(La),{hash:f,pathname:A,search:j}=Yl(s,{relative:m}),J=A;return c!=="/"&&(J=A==="/"?c:ut([c,A])),r.createHref({pathname:J,search:j,hash:f})}function Gl(){return C.useContext(Hl)!=null}function It(){return qe(Gl(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Hl).location}var Jd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Md(s){C.useContext(La).static||C.useLayoutEffect(s)}function Jh(){let{isDataRoute:s}=C.useContext(Ba);return s?Yh():Mh()}function Mh(){qe(Gl(),"useNavigate() may be used only in the context of a <Router> component.");let s=C.useContext(Yn),{basename:m,navigator:c}=C.useContext(La),{matches:r}=C.useContext(Ba),{pathname:f}=It(),A=JSON.stringify(Sd(r)),j=C.useRef(!1);return Md(()=>{j.current=!0}),C.useCallback((g,p={})=>{if(Ca(j.current,Jd),!j.current)return;if(typeof g=="number"){c.go(g);return}let T=qd(g,JSON.parse(A),f,p.relative==="path");s==null&&m!=="/"&&(T.pathname=T.pathname==="/"?m:ut([m,T.pathname])),(p.replace?c.replace:c.push)(T,p.state,p)},[m,c,A,f,s])}C.createContext(null);function xh(){let{matches:s}=C.useContext(Ba),m=s[s.length-1];return m?m.params:{}}function Yl(s,{relative:m}={}){let{matches:c}=C.useContext(Ba),{pathname:r}=It(),f=JSON.stringify(Sd(c));return C.useMemo(()=>qd(s,JSON.parse(f),r,m==="path"),[s,f,r,m])}function Ch(s,m){return xd(s,m)}function xd(s,m,c,r,f){qe(Gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:A}=C.useContext(La),{matches:j}=C.useContext(Ba),J=j[j.length-1],g=J?J.params:{},p=J?J.pathname:"/",T=J?J.pathnameBase:"/",E=J&&J.route;{let G=E&&E.path||"";Cd(p,!E||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let N=It(),Q;if(m){let G=typeof m=="string"?Gn(m):m;qe(T==="/"||G.pathname?.startsWith(T),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${G.pathname}" was given in the \`location\` prop.`),Q=G}else Q=N;let k=Q.pathname||"/",Z=k;if(T!=="/"){let G=T.replace(/^\//,"").split("/");Z="/"+k.replace(/^\//,"").split("/").slice(G.length).join("/")}let V=yd(s,{pathname:Z});Ca(E||V!=null,`No routes matched location "${Q.pathname}${Q.search}${Q.hash}" `),Ca(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${Q.pathname}${Q.search}${Q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Nh(V&&V.map(G=>Object.assign({},G,{params:Object.assign({},g,G.params),pathname:ut([T,A.encodeLocation?A.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?T:ut([T,A.encodeLocation?A.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),j,c,r,f);return m&&H?C.createElement(Hl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Q},navigationType:"POP"}},H):H}function Rh(){let s=Gh(),m=_h(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),c=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:r},A={padding:"2px 4px",backgroundColor:r},j=null;return console.error("Error handled by React Router default ErrorBoundary:",s),j=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:A},"ErrorBoundary")," or"," ",C.createElement("code",{style:A},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},m),c?C.createElement("pre",{style:f},c):null,j)}var Dh=C.createElement(Rh,null),Oh=class extends C.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,m){return m.location!==s.location||m.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:m.error,location:m.location,revalidation:s.revalidation||m.revalidation}}componentDidCatch(s,m){this.props.onError?this.props.onError(s,m):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?C.createElement(Ba.Provider,{value:this.props.routeContext},C.createElement(wr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zh({routeContext:s,match:m,children:c}){let r=C.useContext(Yn);return r&&r.static&&r.staticContext&&(m.route.errorElement||m.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=m.route.id),C.createElement(Ba.Provider,{value:s},c)}function Nh(s,m=[],c=null,r=null,f=null){if(s==null){if(!c)return null;if(c.errors)s=c.matches;else if(m.length===0&&!c.initialized&&c.matches.length>0)s=c.matches;else return null}let A=s,j=c?.errors;if(j!=null){let T=A.findIndex(E=>E.route.id&&j?.[E.route.id]!==void 0);qe(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(j).join(",")}`),A=A.slice(0,Math.min(A.length,T+1))}let J=!1,g=-1;if(c)for(let T=0;T<A.length;T++){let E=A[T];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(g=T),E.route.id){let{loaderData:N,errors:Q}=c,k=E.route.loader&&!N.hasOwnProperty(E.route.id)&&(!Q||Q[E.route.id]===void 0);if(E.route.lazy||k){J=!0,g>=0?A=A.slice(0,g+1):A=[A[0]];break}}}let p=c&&r?(T,E)=>{r(T,{location:c.location,params:c.matches?.[0]?.params??{},errorInfo:E})}:void 0;return A.reduceRight((T,E,N)=>{let Q,k=!1,Z=null,V=null;c&&(Q=j&&E.route.id?j[E.route.id]:void 0,Z=E.route.errorElement||Dh,J&&(g<0&&N===0?(Cd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,V=null):g===N&&(k=!0,V=E.route.hydrateFallbackElement||null)));let H=m.concat(A.slice(0,N+1)),G=()=>{let K;return Q?K=Z:k?K=V:E.route.Component?K=C.createElement(E.route.Component,null):E.route.element?K=E.route.element:K=T,C.createElement(zh,{match:E,routeContext:{outlet:T,matches:H,isDataRoute:c!=null},children:K})};return c&&(E.route.ErrorBoundary||E.route.errorElement||N===0)?C.createElement(Oh,{location:c.location,revalidation:c.revalidation,component:Z,error:Q,children:G(),routeContext:{outlet:null,matches:H,isDataRoute:!0},onError:p}):G()},null)}function kr(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lh(s){let m=C.useContext(Yn);return qe(m,kr(s)),m}function Bh(s){let m=C.useContext(fs);return qe(m,kr(s)),m}function Uh(s){let m=C.useContext(Ba);return qe(m,kr(s)),m}function Xr(s){let m=Uh(s),c=m.matches[m.matches.length-1];return qe(c.route.id,`${s} can only be used on routes that contain a unique "id"`),c.route.id}function Hh(){return Xr("useRouteId")}function Gh(){let s=C.useContext(wr),m=Bh("useRouteError"),c=Xr("useRouteError");return s!==void 0?s:m.errors?.[c]}function Yh(){let{router:s}=Lh("useNavigate"),m=Xr("useNavigate"),c=C.useRef(!1);return Md(()=>{c.current=!0}),C.useCallback(async(f,A={})=>{Ca(c.current,Jd),c.current&&(typeof f=="number"?s.navigate(f):await s.navigate(f,{fromRouteId:m,...A}))},[s,m])}var pd={};function Cd(s,m,c){!m&&!pd[s]&&(pd[s]=!0,Ca(!1,c))}C.memo(Qh);function Qh({routes:s,future:m,state:c,unstable_onError:r}){return xd(s,void 0,c,r,m)}function Hn(s){qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vh({basename:s="/",children:m=null,location:c,navigationType:r="POP",navigator:f,static:A=!1}){qe(!Gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=s.replace(/^\/*/,"/"),J=C.useMemo(()=>({basename:j,navigator:f,static:A,future:{}}),[j,f,A]);typeof c=="string"&&(c=Gn(c));let{pathname:g="/",search:p="",hash:T="",state:E=null,key:N="default"}=c,Q=C.useMemo(()=>{let k=st(g,j);return k==null?null:{location:{pathname:k,search:p,hash:T,state:E,key:N},navigationType:r}},[j,g,p,T,E,N,r]);return Ca(Q!=null,`<Router basename="${j}"> is not able to match the URL "${g}${p}${T}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:C.createElement(La.Provider,{value:J},C.createElement(Hl.Provider,{children:m,value:Q}))}function wh({children:s,location:m}){return Ch(Yr(s),m)}function Yr(s,m=[]){let c=[];return C.Children.forEach(s,(r,f)=>{if(!C.isValidElement(r))return;let A=[...m,f];if(r.type===C.Fragment){c.push.apply(c,Yr(r.props.children,A));return}qe(r.type===Hn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let j={id:r.props.id||A.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(j.children=Yr(r.props.children,A)),c.push(j)}),c}var is="get",rs="application/x-www-form-urlencoded";function ds(s){return s!=null&&typeof s.tagName=="string"}function kh(s){return ds(s)&&s.tagName.toLowerCase()==="button"}function Xh(s){return ds(s)&&s.tagName.toLowerCase()==="form"}function Zh(s){return ds(s)&&s.tagName.toLowerCase()==="input"}function Kh(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Fh(s,m){return s.button===0&&(!m||m==="_self")&&!Kh(s)}var ss=null;function Ph(){if(ss===null)try{new FormData(document.createElement("form"),0),ss=!1}catch{ss=!0}return ss}var Wh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hr(s){return s!=null&&!Wh.has(s)?(Ca(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rs}"`),null):s}function $h(s,m){let c,r,f,A,j;if(Xh(s)){let J=s.getAttribute("action");r=J?st(J,m):null,c=s.getAttribute("method")||is,f=Hr(s.getAttribute("enctype"))||rs,A=new FormData(s)}else if(kh(s)||Zh(s)&&(s.type==="submit"||s.type==="image")){let J=s.form;if(J==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=s.getAttribute("formaction")||J.getAttribute("action");if(r=g?st(g,m):null,c=s.getAttribute("formmethod")||J.getAttribute("method")||is,f=Hr(s.getAttribute("formenctype"))||Hr(J.getAttribute("enctype"))||rs,A=new FormData(J,s),!Ph()){let{name:p,type:T,value:E}=s;if(T==="image"){let N=p?`${p}.`:"";A.append(`${N}x`,"0"),A.append(`${N}y`,"0")}else p&&A.append(p,E)}}else{if(ds(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=is,r=null,f=rs,j=s}return A&&f==="text/plain"&&(j=A,A=void 0),{action:r,method:c.toLowerCase(),encType:f,formData:A,body:j}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zr(s,m){if(s===!1||s===null||typeof s>"u")throw new Error(m)}function Ih(s,m,c){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${c}`:m&&st(r.pathname,m)==="/"?r.pathname=`${m.replace(/\/$/,"")}/_root.${c}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${c}`,r}async function eg(s,m){if(s.id in m)return m[s.id];try{let c=await import(s.module);return m[s.id]=c,c}catch(c){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ag(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function tg(s,m,c){let r=await Promise.all(s.map(async f=>{let A=m.routes[f.route.id];if(A){let j=await eg(A,c);return j.links?j.links():[]}return[]}));return sg(r.flat(1).filter(ag).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Ad(s,m,c,r,f,A){let j=(g,p)=>c[p]?g.route.id!==c[p].route.id:!0,J=(g,p)=>c[p].pathname!==g.pathname||c[p].route.path?.endsWith("*")&&c[p].params["*"]!==g.params["*"];return A==="assets"?m.filter((g,p)=>j(g,p)||J(g,p)):A==="data"?m.filter((g,p)=>{let T=r.routes[g.route.id];if(!T||!T.hasLoader)return!1;if(j(g,p)||J(g,p))return!0;if(g.route.shouldRevalidate){let E=g.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function ng(s,m,{includeHydrateFallback:c}={}){return lg(s.map(r=>{let f=m.routes[r.route.id];if(!f)return[];let A=[f.module];return f.clientActionModule&&(A=A.concat(f.clientActionModule)),f.clientLoaderModule&&(A=A.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(A=A.concat(f.hydrateFallbackModule)),f.imports&&(A=A.concat(f.imports)),A}).flat(1))}function lg(s){return[...new Set(s)]}function ug(s){let m={},c=Object.keys(s).sort();for(let r of c)m[r]=s[r];return m}function sg(s,m){let c=new Set;return new Set(m),s.reduce((r,f)=>{let A=JSON.stringify(ug(f));return c.has(A)||(c.add(A),r.push({key:A,link:f})),r},[])}function Rd(){let s=C.useContext(Yn);return Zr(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function ig(){let s=C.useContext(fs);return Zr(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Kr=C.createContext(void 0);Kr.displayName="FrameworkContext";function Dd(){let s=C.useContext(Kr);return Zr(s,"You must render this element inside a <HydratedRouter> element"),s}function rg(s,m){let c=C.useContext(Kr),[r,f]=C.useState(!1),[A,j]=C.useState(!1),{onFocus:J,onBlur:g,onMouseEnter:p,onMouseLeave:T,onTouchStart:E}=m,N=C.useRef(null);C.useEffect(()=>{if(s==="render"&&j(!0),s==="viewport"){let Z=H=>{H.forEach(G=>{j(G.isIntersecting)})},V=new IntersectionObserver(Z,{threshold:.5});return N.current&&V.observe(N.current),()=>{V.disconnect()}}},[s]),C.useEffect(()=>{if(r){let Z=setTimeout(()=>{j(!0)},100);return()=>{clearTimeout(Z)}}},[r]);let Q=()=>{f(!0)},k=()=>{f(!1),j(!1)};return c?s!=="intent"?[A,N,{}]:[A,N,{onFocus:Bl(J,Q),onBlur:Bl(g,k),onMouseEnter:Bl(p,Q),onMouseLeave:Bl(T,k),onTouchStart:Bl(E,Q)}]:[!1,N,{}]}function Bl(s,m){return c=>{s&&s(c),c.defaultPrevented||m(c)}}function og({page:s,...m}){let{router:c}=Rd(),r=C.useMemo(()=>yd(c.routes,s,c.basename),[c.routes,s,c.basename]);return r?C.createElement(mg,{page:s,matches:r,...m}):null}function cg(s){let{manifest:m,routeModules:c}=Dd(),[r,f]=C.useState([]);return C.useEffect(()=>{let A=!1;return tg(s,m,c).then(j=>{A||f(j)}),()=>{A=!0}},[s,m,c]),r}function mg({page:s,matches:m,...c}){let r=It(),{manifest:f,routeModules:A}=Dd(),{basename:j}=Rd(),{loaderData:J,matches:g}=ig(),p=C.useMemo(()=>Ad(s,m,g,f,r,"data"),[s,m,g,f,r]),T=C.useMemo(()=>Ad(s,m,g,f,r,"assets"),[s,m,g,f,r]),E=C.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let k=new Set,Z=!1;if(m.forEach(H=>{let G=f.routes[H.route.id];!G||!G.hasLoader||(!p.some(K=>K.route.id===H.route.id)&&H.route.id in J&&A[H.route.id]?.shouldRevalidate||G.hasClientLoader?Z=!0:k.add(H.route.id))}),k.size===0)return[];let V=Ih(s,j,"data");return Z&&k.size>0&&V.searchParams.set("_routes",m.filter(H=>k.has(H.route.id)).map(H=>H.route.id).join(",")),[V.pathname+V.search]},[j,J,r,f,p,m,s,A]),N=C.useMemo(()=>ng(T,f),[T,f]),Q=cg(T);return C.createElement(C.Fragment,null,E.map(k=>C.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...c})),N.map(k=>C.createElement("link",{key:k,rel:"modulepreload",href:k,...c})),Q.map(({key:k,link:Z})=>C.createElement("link",{key:k,nonce:c.nonce,...Z})))}function fg(...s){return m=>{s.forEach(c=>{typeof c=="function"?c(m):c!=null&&(c.current=m)})}}var Od=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Od&&(window.__reactRouterVersion="7.9.6")}catch{}function dg({basename:s,children:m,window:c}){let r=C.useRef();r.current==null&&(r.current=$v({window:c,v5Compat:!0}));let f=r.current,[A,j]=C.useState({action:f.action,location:f.location}),J=C.useCallback(g=>{C.startTransition(()=>j(g))},[j]);return C.useLayoutEffect(()=>f.listen(J),[f,J]),C.createElement(Vh,{basename:s,children:m,location:A.location,navigationType:A.action,navigator:f})}var zd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lt=C.forwardRef(function({onClick:m,discover:c="render",prefetch:r="none",relative:f,reloadDocument:A,replace:j,state:J,target:g,to:p,preventScrollReset:T,viewTransition:E,...N},Q){let{basename:k}=C.useContext(La),Z=typeof p=="string"&&zd.test(p),V,H=!1;if(typeof p=="string"&&Z&&(V=p,Od))try{let Te=new URL(window.location.href),la=p.startsWith("//")?new URL(Te.protocol+p):new URL(p),ua=st(la.pathname,k);la.origin===Te.origin&&ua!=null?p=ua+la.search+la.hash:H=!0}catch{Ca(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=Th(p,{relative:f}),[K,_e,Ee]=rg(r,N),Be=hg(p,{replace:j,state:J,target:g,preventScrollReset:T,relative:f,viewTransition:E});function ee(Te){m&&m(Te),Te.defaultPrevented||Be(Te)}let Ue=C.createElement("a",{...N,...Ee,href:V||G,onClick:H||A?m:ee,ref:fg(Q,_e),target:g,"data-discover":!Z&&c==="render"?"true":void 0});return K&&!Z?C.createElement(C.Fragment,null,Ue,C.createElement(og,{page:G})):Ue});lt.displayName="Link";var pg=C.forwardRef(function({"aria-current":m="page",caseSensitive:c=!1,className:r="",end:f=!1,style:A,to:j,viewTransition:J,children:g,...p},T){let E=Yl(j,{relative:p.relative}),N=It(),Q=C.useContext(fs),{navigator:k,basename:Z}=C.useContext(La),V=Q!=null&&_g(E)&&J===!0,H=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,G=N.pathname,K=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;c||(G=G.toLowerCase(),K=K?K.toLowerCase():null,H=H.toLowerCase()),K&&Z&&(K=st(K,Z)||K);const _e=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Ee=G===H||!f&&G.startsWith(H)&&G.charAt(_e)==="/",Be=K!=null&&(K===H||!f&&K.startsWith(H)&&K.charAt(H.length)==="/"),ee={isActive:Ee,isPending:Be,isTransitioning:V},Ue=Ee?m:void 0,Te;typeof r=="function"?Te=r(ee):Te=[r,Ee?"active":null,Be?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let la=typeof A=="function"?A(ee):A;return C.createElement(lt,{...p,"aria-current":Ue,className:Te,ref:T,style:la,to:j,viewTransition:J},typeof g=="function"?g(ee):g)});pg.displayName="NavLink";var Ag=C.forwardRef(({discover:s="render",fetcherKey:m,navigate:c,reloadDocument:r,replace:f,state:A,method:j=is,action:J,onSubmit:g,relative:p,preventScrollReset:T,viewTransition:E,...N},Q)=>{let k=yg(),Z=jg(J,{relative:p}),V=j.toLowerCase()==="get"?"get":"post",H=typeof J=="string"&&zd.test(J),G=K=>{if(g&&g(K),K.defaultPrevented)return;K.preventDefault();let _e=K.nativeEvent.submitter,Ee=_e?.getAttribute("formmethod")||j;k(_e||K.currentTarget,{fetcherKey:m,method:Ee,navigate:c,replace:f,state:A,relative:p,preventScrollReset:T,viewTransition:E})};return C.createElement("form",{ref:Q,method:V,action:Z,onSubmit:r?g:G,...N,"data-discover":!H&&s==="render"?"true":void 0})});Ag.displayName="Form";function vg(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nd(s){let m=C.useContext(Yn);return qe(m,vg(s)),m}function hg(s,{target:m,replace:c,state:r,preventScrollReset:f,relative:A,viewTransition:j}={}){let J=Jh(),g=It(),p=Yl(s,{relative:A});return C.useCallback(T=>{if(Fh(T,m)){T.preventDefault();let E=c!==void 0?c:Ul(g)===Ul(p);J(s,{replace:E,state:r,preventScrollReset:f,relative:A,viewTransition:j})}},[g,J,p,c,r,m,s,f,A,j])}var gg=0,bg=()=>`__${String(++gg)}__`;function yg(){let{router:s}=Nd("useSubmit"),{basename:m}=C.useContext(La),c=Hh();return C.useCallback(async(r,f={})=>{let{action:A,method:j,encType:J,formData:g,body:p}=$h(r,m);if(f.navigate===!1){let T=f.fetcherKey||bg();await s.fetch(T,c,f.action||A,{preventScrollReset:f.preventScrollReset,formData:g,body:p,formMethod:f.method||j,formEncType:f.encType||J,flushSync:f.flushSync})}else await s.navigate(f.action||A,{preventScrollReset:f.preventScrollReset,formData:g,body:p,formMethod:f.method||j,formEncType:f.encType||J,replace:f.replace,state:f.state,fromRouteId:c,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,m,c])}function jg(s,{relative:m}={}){let{basename:c}=C.useContext(La),r=C.useContext(Ba);qe(r,"useFormAction must be used inside a RouteContext");let[f]=r.matches.slice(-1),A={...Yl(s||".",{relative:m})},j=It();if(s==null){A.search=j.search;let J=new URLSearchParams(A.search),g=J.getAll("index");if(g.some(T=>T==="")){J.delete("index"),g.filter(E=>E).forEach(E=>J.append("index",E));let T=J.toString();A.search=T?`?${T}`:""}}return(!s||s===".")&&f.route.index&&(A.search=A.search?A.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(A.pathname=A.pathname==="/"?c:ut([c,A.pathname])),Ul(A)}function _g(s,{relative:m}={}){let c=C.useContext(Td);qe(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nd("useViewTransitionState"),f=Yl(s,{relative:m});if(!c.isTransitioning)return!1;let A=st(c.currentLocation.pathname,r)||c.currentLocation.pathname,j=st(c.nextLocation.pathname,r)||c.nextLocation.pathname;return os(f.pathname,j)!=null||os(f.pathname,A)!=null}const Sg="/assets/seraphin%20stemcorp-DIvSIPMN.png";var Ld={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vd=Dt.createContext&&Dt.createContext(Ld),qg=["attr","size","title"];function Eg(s,m){if(s==null)return{};var c,r,f=Tg(s,m);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(s);for(r=0;r<A.length;r++)c=A[r],m.indexOf(c)===-1&&{}.propertyIsEnumerable.call(s,c)&&(f[c]=s[c])}return f}function Tg(s,m){if(s==null)return{};var c={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(m.indexOf(r)!==-1)continue;c[r]=s[r]}return c}function cs(){return cs=Object.assign?Object.assign.bind():function(s){for(var m=1;m<arguments.length;m++){var c=arguments[m];for(var r in c)({}).hasOwnProperty.call(c,r)&&(s[r]=c[r])}return s},cs.apply(null,arguments)}function hd(s,m){var c=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);m&&(r=r.filter(function(f){return Object.getOwnPropertyDescriptor(s,f).enumerable})),c.push.apply(c,r)}return c}function ms(s){for(var m=1;m<arguments.length;m++){var c=arguments[m]!=null?arguments[m]:{};m%2?hd(Object(c),!0).forEach(function(r){Jg(s,r,c[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(c)):hd(Object(c)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(c,r))})}return s}function Jg(s,m,c){return(m=Mg(m))in s?Object.defineProperty(s,m,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[m]=c,s}function Mg(s){var m=xg(s,"string");return typeof m=="symbol"?m:m+""}function xg(s,m){if(typeof s!="object"||!s)return s;var c=s[Symbol.toPrimitive];if(c!==void 0){var r=c.call(s,m);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(s)}function Bd(s){return s&&s.map((m,c)=>Dt.createElement(m.tag,ms({key:c},m.attr),Bd(m.child)))}function Ua(s){return m=>Dt.createElement(Cg,cs({attr:ms({},s.attr)},m),Bd(s.child))}function Cg(s){var m=c=>{var{attr:r,size:f,title:A}=s,j=Eg(s,qg),J=f||c.size||"1em",g;return c.className&&(g=c.className),s.className&&(g=(g?g+" ":"")+s.className),Dt.createElement("svg",cs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,r,j,{className:g,style:ms(ms({color:s.color||c.color},c.style),s.style),height:J,width:J,xmlns:"http://www.w3.org/2000/svg"}),A&&Dt.createElement("title",null,A),s.children)};return vd!==void 0?Dt.createElement(vd.Consumer,null,c=>m(c)):m(Ld)}function Rg(s){return Ua({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(s)}function Dg(s){return Ua({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(s)}const xe={SINGLE:"Single",ALBUM:"Album",EP:"EP"},Og="/assets/01_PREPA%20(feat.%20Tim%C3%A9on3X)-a8wDCzOp.flac",zg="/assets/02_SDA-C_GlQinm.flac",Ng="/assets/03_DB%20COOPER-BTAMweSt.flac",Lg="/assets/04_R_D%20(feat.%20Teh%20Haar)-mi4c2MwL.flac",Bg="/assets/05_CORNUCOPIA-B7Mk1ee3.flac",Ug="/assets/06_MOUTON%20NOIR-CnQnWQMn.flac",Hg="/assets/07_ENERVE-CeNxYi2v.flac",Gg="/assets/08_OVER-BrwA_e00.flac",Yg="/assets/09_BEHEMOTH-BhxGD4gk.flac",Qg="/assets/10_JEUNE%20STAR-B-UfbiCw.flac",Vg="/assets/11_VRAI%20FRERE-J0Nhe2O_.flac",wg="/assets/12_180-BZlrkEKO.flac",kg="/assets/01_SERAPHIN-ByDL-_YT.flac",Xg="/assets/02_MONSTER-izLRH9Mu.flac",Zg="/assets/03_ZOMBIE-_2mfA8Og.flac",Kg="/assets/04_MAYBACH-CoUxC_hs.flac",Fg="/assets/05_21-BJS9s1FY.flac",Pg="/assets/06_TENET-D64gWDr8.flac",Wg="/assets/07_CROQUEUSE%20DE%20DIAMANTS-gzi8-Ot4.flac",$g="/assets/08_APRES%20LA%20GUERRE-BDPVZp9e.flac",Ig="/assets/09_MONTE%20DANS%20LE%20TRAIN-BcpQlfd5.flac",e0="/assets/10_BABEL-C9laFGYK.flac",a0="/assets/11_MEMENTO%20MORI-TkD0AED3.flac",t0="/assets/12_OUTRO-C3-3RtC1.flac",n0="/assets/10_PENITENCE-CIFfhg4g.flac",l0="/assets/11_LAISSE%20POUR%20MORT-CqD5e_SQ.flac",u0="/assets/12_MOURIR%20SOBRE-COEqDEaH.flac",s0="/assets/1_DYSTOPIE-PwKqz2P0.flac",i0="/assets/2_STEMCORP-CqzPxQjP.flac",r0="/assets/3_IL%20FAUT-CJUv864O.flac",o0="/assets/4_ANGE%20ET%20DEMON-CbfkJpta.flac",c0="/assets/5_PINNOCHIO-GMif8nmj.flac",m0="/assets/6_ARCTERYX-rqkWILf-.flac",f0="/assets/7_TOUT%20LES%20HEROS%20NE%20PORTENT%20PAS%20DE%20CAP%20(feat.%20Teh%20Haar)-DSmLnCZc.flac",d0="/assets/8_LE%20MONDE%20DANS%20LA%20MAIN-kUx6p_u9.flac",p0="/assets/9_LES%20ZINCS%20DES%20AUTRES-9JWKH5xQ.flac",A0="/assets/01_Victory%20lap-B2xfrhfM.flac",v0="/assets/02_Bodybag-SaOagGUJ.flac",h0="/assets/03_Rock%20band-CzbhNw-S.flac",g0="/assets/04_Twin%20Tower-DLznMU0_.flac",b0="/assets/05_Eczema-COY9rx3h.flac",y0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",j0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",_0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",S0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",q0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",E0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",T0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",J0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",M0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",x0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",C0="/assets/Phosphore%20(feat.%20Tim%C3%A9on3x)-DcG49lhp.flac",R0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",D0="/assets/cover%20archange-BD9Rqarf.jpg",O0="/assets/seraphin_cover_2_3K-CjeaPCA-.jpg",z0="/assets/COver-BaloPrJc.jpg",N0="/assets/COver-D0bMOEKa.png",L0="/assets/Twin%20Activity%20Cover%2001-DRdslErG.jpg",B0="/assets/BA_3K-CRDJ1r0c.jpg",U0="/assets/cover%20cap-DiMlcy3G.jpg",H0="/assets/DMGCOVERFINALE-bJqtRJRs.jpg",G0="/assets/tim%C3%A9on%20x%20stem2-Txtx21ir.jpg",Y0="/assets/COVER_ELEPHANT_3k-DLoulpnc.jpg",Q0="/assets/chateau-Ccl_nhk3.jpg",V0="/assets/MTL%20FLAG%203K-CNUcbikn.jpg",w0="/assets/MW3%203K-CfvZhGU9.jpg",k0="/assets/akira%20julien%20final-CCKtL8ny.jpg",X0="/assets/coverPain-BL4CacNx.jpg",Z0="/assets/phosphore%20cover-BTKvH61i.jpg",K0="/assets/rougir%20la%20banque%20cover-BzoIqyGj.jpg",Ud={spotify:"https://open.spotify.com/album/2y1XmHsXfi1NPrC0ca8OMU",appleMusic:"https://music.apple.com/fr/album/archange/1667409927",deezer:"https://www.deezer.com/fr/album/399794257",soundcloud:"https://soundcloud.com/user-146029035/sets/archange",youtube:"https://youtu.be/Fvn0u1ZH6U8?si=moZhxZAut3pGAueS"},Hd="2023-02-22",F0={platforms:Ud,releaseDate:Hd},P0=Object.freeze(Object.defineProperty({__proto__:null,default:F0,platforms:Ud,releaseDate:Hd},Symbol.toStringTag,{value:"Module"})),Gd={spotify:"https://open.spotify.com/album/0BYf06Od0AwVaTklcRODKn",appleMusic:"https://music.apple.com/fr/album/seraphin/1880092058",deezer:"https://www.deezer.com/fr/album/925020141",soundcloud:"https://soundcloud.com/user-146029035/sets/seraphin",youtube:"https://youtu.be/8Axd88bb9v8?si=H-UsBJDqVT7eIYsJ"},Yd="2026-03-27",W0={platforms:Gd,releaseDate:Yd},$0=Object.freeze(Object.defineProperty({__proto__:null,default:W0,platforms:Gd,releaseDate:Yd},Symbol.toStringTag,{value:"Module"})),Qd={spotify:"https://open.spotify.com/album/1QZLzHZ6lOy8qINnsrARnD",appleMusic:"https://music.apple.com/fr/album/1755878764",deezer:"https://www.deezer.com/fr/album/611660222",soundcloud:"https://soundcloud.com/user-146029035",youtube:"https://youtu.be/ly0ttXypX2c?si=cA7woaWH3ewrlKdH"},Vd="2024-08-23",I0={platforms:Qd,releaseDate:Vd},eb=Object.freeze(Object.defineProperty({__proto__:null,default:I0,platforms:Qd,releaseDate:Vd},Symbol.toStringTag,{value:"Module"})),wd={spotify:"https://open.spotify.com/album/2y3WDqJg3qWKtiotftYAtS?si=zmn4Pt3xQ4arVBVB6WZIIQ",appleMusic:"https://music.apple.com/us/album/twin-activity-ep/1827355924",deezer:"https://www.deezer.com/fr/album/789323701",soundcloud:"https://soundcloud.com/user-146029035/sets/twin-activity",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_k3sWmWKOzaWzsXyQKB-ijnK1vWc5LYeDc&si=rgYAhAzgmcg0YAsH"},kd="2025-08-15",ab={platforms:wd,releaseDate:kd},tb=Object.freeze(Object.defineProperty({__proto__:null,default:ab,platforms:wd,releaseDate:kd},Symbol.toStringTag,{value:"Module"})),Xd={spotify:"https://open.spotify.com/album/3DERMVUIEw0dSkV6gMSVuR?si=aQ-oO2qsTZGZup1Sv-pdUg",appleMusic:"https://music.apple.com/us/album/bag-single/1852734127",deezer:"https://link.deezer.com/s/32YkqrTHcPIfqFZxahz3D",soundcloud:"https://soundcloud.com/user-146029035/bag",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_me41BQvYBlGrqViip23VusE6EcrTfCjmc&si=YfX2Nihu7cQRlPW1"},Zd="2025-11-21",nb={platforms:Xd,releaseDate:Zd},lb=Object.freeze(Object.defineProperty({__proto__:null,default:nb,platforms:Xd,releaseDate:Zd},Symbol.toStringTag,{value:"Module"})),Kd={spotify:"https://open.spotify.com/album/2WMY2DtOhAt0G3yeScyyp3?si=le0wFEMNTR2n_Mqno8yfpA",appleMusic:"https://music.apple.com/us/album/cap-single/1796246637",deezer:"https://www.deezer.com/fr/album/710802841?host=0&deferredFl=1",soundcloud:"https://soundcloud.com/user-146029035/cap",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_kLGU00o1Pwp6676JozPIY4kYfFNwdzdq4&si=adIiIw58GY7K4OEN"},Fd="2025-02-10",ub={platforms:Kd,releaseDate:Fd},sb=Object.freeze(Object.defineProperty({__proto__:null,default:ub,platforms:Kd,releaseDate:Fd},Symbol.toStringTag,{value:"Module"})),Pd={spotify:"https://open.spotify.com/album/5X3V3X7TRbRZosjyJ32LvT?si=dj0kmTtnQ4mUbihk508fow",appleMusic:"https://music.apple.com/us/album/dieu-me-garde-single/1803018326",deezer:"https://www.deezer.com/fr/album/729564471?host=0&deferredFl=1",soundcloud:"https://soundcloud.com/user-146029035/dieu-me-garde",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_njEexI9PKu8KW5mcs0clATOKQei7WU3Ng"},Wd="2025-04-11",ib={platforms:Pd,releaseDate:Wd},rb=Object.freeze(Object.defineProperty({__proto__:null,default:ib,platforms:Pd,releaseDate:Wd},Symbol.toStringTag,{value:"Module"})),$d={spotify:"https://open.spotify.com/album/1LvEIoaevQYyYhcn03bh1l?si=upBFQhUxTSGu5UsV8Q0N4g",appleMusic:"https://music.apple.com/us/album/dor%C3%A9mi-feat-timeon3x-teh-haar-single/1795263601",deezer:"https://link.deezer.com/s/32YlsyiDJL7GcKWd03Boe",soundcloud:"https://soundcloud.com/user-146029035/doremi",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_kx9675R39RiMmVDt7KO8GNMPTJjhgGa0A&si=faA8qmGj2nnE1pnT"},Id="2021-06-25",ob={platforms:$d,releaseDate:Id},cb=Object.freeze(Object.defineProperty({__proto__:null,default:ob,platforms:$d,releaseDate:Id},Symbol.toStringTag,{value:"Module"})),ep={spotify:"https://open.spotify.com/album/76n5MQ7eZ4NxyMqPCQnJhn?si=kYcGz0qsSDe3AFKQmt84XA",appleMusic:"https://music.apple.com/us/album/elephant-single/1866011164",deezer:"https://link.deezer.com/s/32Yk1FRP9Tth2aXQmoMLk",soundcloud:"https://soundcloud.com/user-146029035/elephant",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_k9BnAHM_Wl5PcTIeLYf2jj4kSclqh78uQ&si=sqmHjT1qicDO9w1T"},ap="2026-01-16",mb={platforms:ep,releaseDate:ap},fb=Object.freeze(Object.defineProperty({__proto__:null,default:mb,platforms:ep,releaseDate:ap},Symbol.toStringTag,{value:"Module"})),tp={spotify:"https://open.spotify.com/intl-fr/album/5T7DIm7sJqqlKyK4Ci6rs7?si=p09vcdfnRo-2CI_7TnGMhA",appleMusic:"https://music.apple.com/us/album/la-vie-de-chateau-single/1870098976",deezer:"https://link.deezer.com/s/32YjDp9sH4RfAfn2nXJvc",soundcloud:"https://soundcloud.com/user-146029035/la-vie-de-chateau",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_mUmA3XUbTr9haAF-ZHy2CBuTlbxBPHwlw"},np="2026-01-03",db={platforms:tp,releaseDate:np},pb=Object.freeze(Object.defineProperty({__proto__:null,default:db,platforms:tp,releaseDate:np},Symbol.toStringTag,{value:"Module"})),lp={spotify:"https://open.spotify.com/album/1Dk1q0Ndp1WaT77qudyale?si=_Me3ECxxTlyI0IcyHqDw_Q",appleMusic:"https://music.apple.com/us/song/mtl/1859474554",deezer:"https://www.deezer.com/fr/artist/112983672?host=0&deferredFl=1",soundcloud:"https://soundcloud.com/user-146029035/mtl",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_mmNALZ1hyVIemifquoskfdsMXPJ-GXA0M&si=J0TrUXkzHum0tzrH"},up="2025-12-05",Ab={platforms:lp,releaseDate:up},vb=Object.freeze(Object.defineProperty({__proto__:null,default:Ab,platforms:lp,releaseDate:up},Symbol.toStringTag,{value:"Module"})),sp={spotify:"https://open.spotify.com/album/2Odabakw7ezdmUM2vGoKqU?si=e5elwI_BQEWvBgeDUQawag",appleMusic:"https://music.apple.com/us/album/mw3-single/1859474552",deezer:"https://link.deezer.com/s/32YkaxqDaPffuG3qj7HNt",soundcloud:"https://soundcloud.com/user-146029035/mw3",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_k6mwGvJQRg6ykux5_8ZJ5CV3OBsmh2CvI&si=ofWq4es1cgdR7eju"},ip="2025-12-19",hb={platforms:sp,releaseDate:ip},gb=Object.freeze(Object.defineProperty({__proto__:null,default:hb,platforms:sp,releaseDate:ip},Symbol.toStringTag,{value:"Module"})),rp={spotify:"https://open.spotify.com/album/1xfLjWnzUKUKmvaG7PihNm?si=sc-sQmv2QiiBniQ8lC94ow",appleMusic:"https://music.apple.com/us/album/neon-single/1697732368",deezer:"https://link.deezer.com/s/32YkVXyeKzcZy3mhuHsD9",soundcloud:"https://soundcloud.com/user-146029035/neon",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_lDvvz_KoWENs1-vr3c9XkXFXqf3TuPiCw&si=Nw28-n-UESq_pp-X"},op="2023-08-05",bb={platforms:rp,releaseDate:op},yb=Object.freeze(Object.defineProperty({__proto__:null,default:bb,platforms:rp,releaseDate:op},Symbol.toStringTag,{value:"Module"})),cp={spotify:"https://open.spotify.com/album/5kl1ZGdkQFozEX4A2szMZm?si=PrFqNtrFR7K1h2iy779ccQ",appleMusic:"https://music.apple.com/us/album/pain-single/1727360366",deezer:"https://link.deezer.com/s/32YkCNDkXVf1bAv7VvpNt",soundcloud:"https://soundcloud.com/user-146029035/je-veux-du-pain-master-v1",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_l2TMlJHQFehCxZFL8YP31_plOQ1Lp6D7M&si=uVBXiCBXIJgpGO4G"},mp="2024-02-09",jb={platforms:cp,releaseDate:mp},_b=Object.freeze(Object.defineProperty({__proto__:null,default:jb,platforms:cp,releaseDate:mp},Symbol.toStringTag,{value:"Module"})),fp={spotify:"https://open.spotify.com/album/06lXkUTwQZNeuau3GtVqCP?si=hBGGgX2aT--eTBuBFlgLwA",appleMusic:"https://music.apple.com/us/album/phosphore-feat-timeon3x-single/1560593815",deezer:"https://link.deezer.com/s/32YlCW6vslUthH3tohzAJ",soundcloud:"https://soundcloud.com/user-146029035/phosphore-ft-timeon-pegoretti",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_mtAEo35-tc4nHTJMwNU8M1tu-K6afMQjA&si=NH1stItmAiEog2ly"},dp="2021-04-9",Sb={platforms:fp,releaseDate:dp},qb=Object.freeze(Object.defineProperty({__proto__:null,default:Sb,platforms:fp,releaseDate:dp},Symbol.toStringTag,{value:"Module"})),pp={spotify:"https://open.spotify.com/album/0dOe3qClYmU58YSaL8jnxF?si=Uoy4Y2X5TIiVTWSEK3vt3Q",appleMusic:"https://music.apple.com/us/album/rougir-la-banque-feat-celll-single/1588996449",deezer:"https://link.deezer.com/s/32YlhtPL1NEH2pHDhiRYR",soundcloud:"https://soundcloud.com/user-146029035/rougir-la-banque-feat-celll",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_lDvvz_KoWENs1-vr3c9XkXFXqf3TuPiCw&si=Nw28-n-UESq_pp-X"},Ap="2021-10-15",Eb={platforms:pp,releaseDate:Ap},Tb=Object.freeze(Object.defineProperty({__proto__:null,default:Eb,platforms:pp,releaseDate:Ap},Symbol.toStringTag,{value:"Module"})),Jb=`Wow toujours si bon
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
On sait ce qu'on a`,Mb=`Sex drogue alcool toujours quelque chose dont l'on abuse
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
Je préfère deux personnes qui m'aiment que douze qui me sucent`,xb=`Six AM je rentre petit matin la nuit est claire
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
Qui croire maintenant les chiffres rentrent frèro`,Cb=`Je sais pas ce que ma mère a élevé mais en tout cas pas une bitch
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
Pour graille j'attends que la famille soit servie parce que je suis bien élevé`,Rb=`Qu'est ce que nous arrête surement pas la fermeture
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
On fait des envieux on fait des envieuses`,Db=`Toujours avec la meute pas de loup solitaire
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
Blason de maison je porte la famille sur l'étendard`,Ob=`Elle est énervée ce n'est pas bon signe
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
Et les vrais vont me remercier en le faisant aussi`,zb="",Nb=`Je veux le pain toutes ces pétasses veulent du bifteck
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
Moula béhémoth c'est la vie de rêve`,Lb=`Faut le biff je chante à me faire des angines
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
Et t'as devant toi devant toi devant toi`,Bb=`C'est sur les doigts d'une main qu'on compte nos vrais frères
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
Vrai frère vrai frère vrai frère vrai frère yeah`,Ub=`Stem plus le même 180
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
Prêts à changer du jour au lendemain`,Hb=`J'ai pris 2L, j'en ai fait un W
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
Archange est devenu séraphin`,Gb=`Faut les VVS qui cerclent la montre
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
Je me sens comme Metro sur Monster`,Yb=`Bitch il me faut le pain bitch il me faut le bread
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
J'ai des démons pour m'accabler`,Qb=`Ça c'est de la musique qui s'écoute dans une Maybach
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
Je l'emmènerais voire les étoiles dans la voiture`,Vb=`Première prod j'avais 16 piges premier clip j'en avais 21
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
Je fais avec les aléas je fais mon comeback comme Kanye en 2021`,wb=`Je peux pas changer le passer je peux pas retourner en arrière
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
Je cherche l'amour propre et le respect de mes aînés`,kb=`Elle veut croquer mes diamants
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
Je veux les diamants VVS bien évidemment`,Xb=`Il ne reste que les cendres gros après la guerre
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
A la vie à la mort si tu es mon frère`,Zb=`Je vérifie le plav avant que je monte dans le train
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
Elle fait la manucure comme si c'était la saint Valentin`,Kb=`J'ai des rêves de grandeur Stemcorp c'est la tour de Babel
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
Il faut des VVS il faut la SACEM d'Abel`,Fb=`La vie de rêve c'est la vie que l'on veut
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
Memento mori`,Pb=`Je me vois déjà lui tenir le bras à l'avant de la procession
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
Des sons faut que j'en sorte faut que je renta Distrokid`,Wb=`Y'a que l'argent pour me repentir de ma pénitence
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
Qu'est ce tu fais qu'est ce tu fais si ton reuf il ment`,$b="",Ib=`Je veux pas mourir sobre
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
Je veux pas mourir jeune`,ey=`Stem objectif PDG
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
Je m'implique si ça parle argent sinon R.A.F`,ay=`STEMCORP la plus haute
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
Stemusic le plus chaud de tous les fours`,ty="",ny="",ly=`Je fais attention aux détails le diable se cache dedans
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
Je vesqui ce traitre bien-sur que je vesqui ce faux`,uy=`Putain d'époque faut des putains de biceps
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
Là j'ai buté le diez le son est mort donc c'est un ghost track`,sy=`Je rêve d'avoir le monde dans la main
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
Ce petit serpent à voulu me faire croquer dans le fruit`,iy="",ry=`TH Stem c'est le diamant au fond de la mine
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
Maintenant je te ris au nez`,oy=`Y'a rien à mettre dans le doggybag
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
Yeah yeah yeah yeah`,cy=`Et moi je peux pas tendre la main
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
Je vais faire des tals donc j'en ai rien à foutre de la promo`,my=`Cours, bitch il faut que tu cours
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
Je t'ai jamais vu mordre pourtant tu fais que montrer les crocs`,fy=`Ya mes démons dans l'appart
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
Mais faut vivre donc je pop pop pop le bouchon`,dy=`Ces goofy sont des blagues ces goofy sont des quoi
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
Ils n'ont pas capté le del ces goofy sont des blagues`,py=`Faut cette maille
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
C'était notre reuf avant qu'il cap`,Ay=`Baby je ne te ferais pas de mal sauf si tu le veux
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
Demain je verrais si on se rapproche ou si on reste loin`,vy=`Stem mes albums seront mes manifestos
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
Je rentre dans ce bourbier avec la cagoule, les bottes et les gants`,hy=`La vie de
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
Tu mérites le collier la laisse, toi t'es un cabot`,gy=`MTL MTL MTL MTL
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
Je veux un happy ending et que ces batards ils dead`,by=`Dernier homme debout comme le capitaine Price
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
Je prends cette dope ça me rend che-per`,yy=`Faut qu'on graille
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
J'esquive les balles comme Néo`,jy=`Faut du pain fils de pute il me faut du pain
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
Elle dis qu'elle t'aime mais fait gaffe la pute elle ment`,_y=`Crois moi on va pop fort, et ce même si tu voulais pas
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
Nos sons en enceinte on va brûler ta caisse comme TATP ou comme obus à phosphore`,Sy="";async function vp(){const s=[],m=Object.assign({"../assets/music/album/ARCHANGE/songs/01_PREPA (feat. Timéon3X).flac":Og,"../assets/music/album/ARCHANGE/songs/02_SDA.flac":zg,"../assets/music/album/ARCHANGE/songs/03_DB COOPER.flac":Ng,"../assets/music/album/ARCHANGE/songs/04_R&D (feat. Teh Haar).flac":Lg,"../assets/music/album/ARCHANGE/songs/05_CORNUCOPIA.flac":Bg,"../assets/music/album/ARCHANGE/songs/06_MOUTON NOIR.flac":Ug,"../assets/music/album/ARCHANGE/songs/07_ENERVE.flac":Hg,"../assets/music/album/ARCHANGE/songs/08_OVER.flac":Gg,"../assets/music/album/ARCHANGE/songs/09_BEHEMOTH.flac":Yg,"../assets/music/album/ARCHANGE/songs/10_JEUNE STAR.flac":Qg,"../assets/music/album/ARCHANGE/songs/11_VRAI FRERE.flac":Vg,"../assets/music/album/ARCHANGE/songs/12_180.flac":wg,"../assets/music/album/SERAPHIN/songs/01_SERAPHIN.flac":kg,"../assets/music/album/SERAPHIN/songs/02_MONSTER.flac":Xg,"../assets/music/album/SERAPHIN/songs/03_ZOMBIE.flac":Zg,"../assets/music/album/SERAPHIN/songs/04_MAYBACH.flac":Kg,"../assets/music/album/SERAPHIN/songs/05_21.flac":Fg,"../assets/music/album/SERAPHIN/songs/06_TENET.flac":Pg,"../assets/music/album/SERAPHIN/songs/07_CROQUEUSE DE DIAMANTS.flac":Wg,"../assets/music/album/SERAPHIN/songs/08_APRES LA GUERRE.flac":$g,"../assets/music/album/SERAPHIN/songs/09_MONTE DANS LE TRAIN.flac":Ig,"../assets/music/album/SERAPHIN/songs/10_BABEL.flac":e0,"../assets/music/album/SERAPHIN/songs/11_MEMENTO MORI.flac":a0,"../assets/music/album/SERAPHIN/songs/12_OUTRO.flac":t0,"../assets/music/album/STEMPCORP/songs/10_PENITENCE.flac":n0,"../assets/music/album/STEMPCORP/songs/11_LAISSE POUR MORT.flac":l0,"../assets/music/album/STEMPCORP/songs/12_MOURIR SOBRE.flac":u0,"../assets/music/album/STEMPCORP/songs/1_DYSTOPIE.flac":s0,"../assets/music/album/STEMPCORP/songs/2_STEMCORP.flac":i0,"../assets/music/album/STEMPCORP/songs/3_IL FAUT.flac":r0,"../assets/music/album/STEMPCORP/songs/4_ANGE ET DEMON.flac":o0,"../assets/music/album/STEMPCORP/songs/5_PINNOCHIO.flac":c0,"../assets/music/album/STEMPCORP/songs/6_ARCTERYX.flac":m0,"../assets/music/album/STEMPCORP/songs/7_TOUT LES HEROS NE PORTENT PAS DE CAP (feat. Teh Haar).flac":f0,"../assets/music/album/STEMPCORP/songs/8_LE MONDE DANS LA MAIN.flac":d0,"../assets/music/album/STEMPCORP/songs/9_LES ZINCS DES AUTRES.flac":p0,"../assets/music/ep/Twin Activity/songs/01_Victory lap.flac":A0,"../assets/music/ep/Twin Activity/songs/02_Bodybag.flac":v0,"../assets/music/ep/Twin Activity/songs/03_Rock band.flac":h0,"../assets/music/ep/Twin Activity/songs/04_Twin Tower.flac":g0,"../assets/music/ep/Twin Activity/songs/05_Eczema.flac":b0,"../assets/music/single/BAG/songs/BAG.flac":y0,"../assets/music/single/CAP/songs/CAP.flac":j0,"../assets/music/single/Dieu me garde/songs/Dieu me garde.flac":_0,"../assets/music/single/Dorémi/songs/Dorémi (feat. Timéon3x, Teh haar).flac":S0,"../assets/music/single/ELEPHANT/songs/ELEPHANT.flac":q0,"../assets/music/single/LA VIE DE CHATEAU/songs/LA VIE DE CHATEAU.flac":E0,"../assets/music/single/MTL/songs/MTL.flac":T0,"../assets/music/single/MW3/songs/ELEPHANT.flac":J0,"../assets/music/single/NEON/songs/NEON.flac":M0,"../assets/music/single/PAIN/songs/PAIN.flac":x0,"../assets/music/single/Phosphore/songs/Phosphore (feat. Timéon3x).flac":C0,"../assets/music/single/Rougir la banque/songs/Rougir la banque (feat. CELLL).flac":R0}),c=Object.assign({"../assets/music/album/ARCHANGE/cover/cover archange.jpg":D0,"../assets/music/album/SERAPHIN/cover/seraphin_cover_2_3K.jpg":O0,"../assets/music/album/STEMPCORP/cover/COver.jpg":z0,"../assets/music/album/STEMPCORP/cover/COver.png":N0,"../assets/music/ep/Twin Activity/cover/Twin Activity Cover 01.jpg":L0,"../assets/music/single/BAG/cover/BA_3K.jpg":B0,"../assets/music/single/CAP/cover/cover cap.jpg":U0,"../assets/music/single/Dieu me garde/cover/DMGCOVERFINALE.jpg":H0,"../assets/music/single/Dorémi/cover/timéon x stem2.jpg":G0,"../assets/music/single/ELEPHANT/cover/COVER_ELEPHANT_3k.jpg":Y0,"../assets/music/single/LA VIE DE CHATEAU/cover/chateau.jpg":Q0,"../assets/music/single/MTL/cover/MTL FLAG 3K.jpg":V0,"../assets/music/single/MW3/cover/MW3 3K.jpg":w0,"../assets/music/single/NEON/cover/akira julien final.jpg":k0,"../assets/music/single/PAIN/cover/coverPain.jpg":X0,"../assets/music/single/Phosphore/cover/phosphore cover.jpg":Z0,"../assets/music/single/Rougir la banque/cover/rougir la banque cover.jpg":K0}),r=Object.assign({"../assets/music/album/ARCHANGE/metadata.json":P0,"../assets/music/album/SERAPHIN/metadata.json":$0,"../assets/music/album/STEMPCORP/metadata.json":eb,"../assets/music/ep/Twin Activity/metadata.json":tb,"../assets/music/single/BAG/metadata.json":lb,"../assets/music/single/CAP/metadata.json":sb,"../assets/music/single/Dieu me garde/metadata.json":rb,"../assets/music/single/Dorémi/metadata.json":cb,"../assets/music/single/ELEPHANT/metadata.json":fb,"../assets/music/single/LA VIE DE CHATEAU/metadata.json":pb,"../assets/music/single/MTL/metadata.json":vb,"../assets/music/single/MW3/metadata.json":gb,"../assets/music/single/NEON/metadata.json":yb,"../assets/music/single/PAIN/metadata.json":_b,"../assets/music/single/Phosphore/metadata.json":qb,"../assets/music/single/Rougir la banque/metadata.json":Tb}),f=Object.assign({"../assets/music/album/ARCHANGE/lyrics/01_PREPA (feat. Timéon3X).txt":Jb,"../assets/music/album/ARCHANGE/lyrics/02_SDA.txt":Mb,"../assets/music/album/ARCHANGE/lyrics/03_DB COOPER.txt":xb,"../assets/music/album/ARCHANGE/lyrics/04_R&D (feat. Teh Haar).txt":Cb,"../assets/music/album/ARCHANGE/lyrics/05_CORNUCOPIA.txt":Rb,"../assets/music/album/ARCHANGE/lyrics/06_MOUTON NOIR.txt":Db,"../assets/music/album/ARCHANGE/lyrics/07_ENERVE.txt":Ob,"../assets/music/album/ARCHANGE/lyrics/08_OVER.txt":zb,"../assets/music/album/ARCHANGE/lyrics/09_BEHEMOTH.txt":Nb,"../assets/music/album/ARCHANGE/lyrics/10_JEUNE STAR.txt":Lb,"../assets/music/album/ARCHANGE/lyrics/11_VRAI FRERE.txt":Bb,"../assets/music/album/ARCHANGE/lyrics/12_180.txt":Ub,"../assets/music/album/SERAPHIN/lyrics/01_SERAPHIN.txt":Hb,"../assets/music/album/SERAPHIN/lyrics/02_MONSTER.txt":Gb,"../assets/music/album/SERAPHIN/lyrics/03_ZOMBIE.txt":Yb,"../assets/music/album/SERAPHIN/lyrics/04_MAYBACH.txt":Qb,"../assets/music/album/SERAPHIN/lyrics/05_21.txt":Vb,"../assets/music/album/SERAPHIN/lyrics/06_TENET.txt":wb,"../assets/music/album/SERAPHIN/lyrics/07_CROQUEUSE DE DIAMANTS.txt":kb,"../assets/music/album/SERAPHIN/lyrics/08_APRES LA GUERRE.txt":Xb,"../assets/music/album/SERAPHIN/lyrics/09_MONTE DANS LE TRAIN.txt":Zb,"../assets/music/album/SERAPHIN/lyrics/10_BABEL.txt":Kb,"../assets/music/album/SERAPHIN/lyrics/11_MEMENTO MORI.txt":Fb,"../assets/music/album/SERAPHIN/lyrics/12_OUTRO.txt":Pb,"../assets/music/album/STEMPCORP/lyrics/10_PENITENCE.txt":Wb,"../assets/music/album/STEMPCORP/lyrics/11_LAISSE POUR MORT.txt":$b,"../assets/music/album/STEMPCORP/lyrics/12_MOURIR SOBRE.txt":Ib,"../assets/music/album/STEMPCORP/lyrics/1_DYSTOPIE.txt":ey,"../assets/music/album/STEMPCORP/lyrics/2_STEMCORP.txt":ay,"../assets/music/album/STEMPCORP/lyrics/3_IL FAUT.txt":ty,"../assets/music/album/STEMPCORP/lyrics/4_ANGE ET DEMON.txt":ny,"../assets/music/album/STEMPCORP/lyrics/5_PINOCCHIO.txt":ly,"../assets/music/album/STEMPCORP/lyrics/7_TOUT LES HEROS NE PORTENT PAS DE CAP (feat. TEH HAAR).txt":uy,"../assets/music/album/STEMPCORP/lyrics/8_LE MONDE DANS LA MAIN.txt":sy,"../assets/music/album/STEMPCORP/lyrics/9_LES ZINCS DES AUTRES.txt":iy,"../assets/music/ep/Twin Activity/lyrics/01_Victory lap.txt":ry,"../assets/music/ep/Twin Activity/lyrics/02_Bodybag.txt":oy,"../assets/music/ep/Twin Activity/lyrics/03_Rock band.txt":cy,"../assets/music/ep/Twin Activity/lyrics/04_Twin Tower.txt":my,"../assets/music/ep/Twin Activity/lyrics/05_Eczéma.txt":fy,"../assets/music/single/BAG/lyrics/BAG.txt":dy,"../assets/music/single/CAP/lyrics/CAP.txt":py,"../assets/music/single/Dorémi/lyrics/Dorémi.txt":Ay,"../assets/music/single/ELEPHANT/lyrics/ELEPHANT.txt":vy,"../assets/music/single/LA VIE DE CHATEAU/lyrics/LA VIE DE CHATEAU.txt":hy,"../assets/music/single/MTL/lyrics/MTL.txt":gy,"../assets/music/single/MW3/lyrics/MW3.txt":by,"../assets/music/single/NEON/lyrics/NEON.txt":yy,"../assets/music/single/PAIN/lyrics/PAIN.txt":jy,"../assets/music/single/Phosphore/lyrics/Phosphore (feat. Timéon3X).txt":_y,"../assets/music/single/Rougir la banque/lyrics/Rougir la banque (feat. CELLL).txt":Sy}),A=new Map,j=new Map,J=new Map,g=new Map;for(const p in m){const T=p.split("/"),E=T[4],N=T.pop()?.replace(".flac","").trim()||"Unknown";if(!A.has(E)){A.set(E,[]);const Q=p.includes("/album/")?xe.ALBUM:p.includes("/ep/")?xe.EP:xe.SINGLE;J.set(E,Q)}A.get(E)?.push(N)}for(const p in c){const T=p.split("/")[4];j.has(T)||j.set(T,c[p].default||c[p])}for(const p in f){const T=p.split("/").pop()?.replace(".txt","")||p.split("/")[4];g.set(T,f[p])}for(const p of A.keys()){const T=A.get(p)||[],E=j.get(p)||"",N=J.get(p)||xe.SINGLE,k=T.sort((G,K)=>G.localeCompare(K,void 0,{numeric:!0,sensitivity:"base"})).map(G=>({name:G,lyrics:g.get(G)})),Z=Object.keys(r).find(G=>G.includes(`/${p}/`)),V=Z?r[Z]:{},H=V.default||V;s.push({title:p,coverUrl:E,tracks:k,type:N,platforms:H.platforms||{},available:!0,releaseDate:H.releaseDate||"2000-01-01"})}return s.sort((p,T)=>new Date(T.releaseDate).getTime()-new Date(p.releaseDate).getTime()),s}const hp=C.createContext(null);function qy({children:s}){const[m,c]=C.useState(new Map([[xe.ALBUM,[]],[xe.EP,[]],[xe.SINGLE,[]]])),[r,f]=C.useState(!0);return C.useEffect(()=>{f(!0),vp().then(A=>{console.log(A);const j=new Map(m);A.forEach(J=>{const g=j.get(J.type)||[];j.set(J.type,[...g,J])}),c(j),f(!1)})},[]),O.jsx(hp.Provider,{value:{musics:m,loading:r},children:s})}function Fr(){const s=C.useContext(hp);if(!s)throw new Error("useMusic must be used inside MusicProvider");return s}function Pr(s,m,c,r){return c&&r?`/songs/${r.toLowerCase()}/${c.toLowerCase()}/${m.toLowerCase()}/${s.toLowerCase()}`:`/songs/${m.toLowerCase()}/${s.toLowerCase()}`}function Ey(){const[s,m]=C.useState(!1),c=Fr().musics,f=(()=>{if(!c)return null;const j=c.get(xe.ALBUM)?.[0],J=c.get(xe.EP)?.[0],g=c.get(xe.SINGLE)?.[0],p=[j,J,g].filter(Boolean);return p.length===0?null:p.sort((T,E)=>{const N=E?.releaseDate?new Date(E.releaseDate).getTime():0,Q=T?.releaseDate?new Date(T.releaseDate).getTime():0;return N-Q})[0]})(),A=()=>{m(!s)};return O.jsxs("header",{className:"header",children:[O.jsxs("div",{id:"left-spacer",className:"spacer",children:[O.jsx("button",{className:"close-btn",onClick:A,children:O.jsx(Rg,{className:"icon"})}),O.jsxs("div",{className:`side-menu ${s?"open":""}`,children:[O.jsx("button",{className:"close-btn",onClick:A,children:O.jsx(Dg,{})}),O.jsxs("nav",{className:"side-nav",children:[O.jsx(lt,{to:Pr(f?.title||"",f?.type||xe.ALBUM),children:O.jsx("span",{className:"lastest-release-link",children:"Dernière sortie"})}),O.jsx(lt,{to:"/",children:"Accueil"}),O.jsx(lt,{to:"/all-songs",children:"Tous les titres"}),O.jsx(lt,{to:"/contact",children:"Contact"})]})]})]}),O.jsx("div",{id:"center-spacer",className:"spacer",children:O.jsx(lt,{to:"/",className:"main-logo-link",children:O.jsx("img",{src:Sg,alt:"Big stemcorp logo",id:"mainLogo"})})}),O.jsx("div",{id:"right-spacer",className:"spacer"})]})}function Ty(){const s=new Date().getFullYear();return O.jsx("footer",{className:"footer",children:O.jsxs("p",{children:["© ",s," StemCorp. All rights reserved."]})})}function Jy({title:s,coverUrl:m,type:c}){const r=Pr(s,c);return O.jsx("div",{children:O.jsx("a",{href:r,className:"song-link",title:s,children:O.jsx("img",{src:m,alt:s,className:"song-cover"})})})}function gd(){const[s,m]=C.useState([]);return C.useEffect(()=>{vp().then(c=>m(c))},[]),O.jsx("div",{className:"songs-list",children:s.map(c=>O.jsx(Jy,{title:c.title,coverUrl:c.coverUrl,type:c.type},c.title))})}function My(s){return Ua({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(s)}function xy(s){return Ua({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z"},child:[]}]})(s)}function Cy(s){return Ua({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"},child:[]}]})(s)}function Ry(s){return Ua({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M451.46,244.71H576V172H451.46Zm0-173.89v72.67H576V70.82Zm0,275.06H576V273.2H451.46ZM0,447.09H124.54V374.42H0Zm150.47,0H275V374.42H150.47Zm150.52,0H425.53V374.42H301Zm150.47,0H576V374.42H451.46ZM301,345.88H425.53V273.2H301Zm-150.52,0H275V273.2H150.47Zm0-101.17H275V172H150.47Z"},child:[]}]})(s)}function Dy(s){return Ua({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"m10.995 0 .573.001q.241 0 .483.007c.35.01.705.03 1.051.093.352.063.68.166.999.329a3.36 3.36 0 0 1 1.47 1.468c.162.32.265.648.328 1 .063.347.084.7.093 1.051q.007.241.007.483l.001.573v5.99l-.001.573q0 .241-.008.483c-.01.35-.03.704-.092 1.05a3.5 3.5 0 0 1-.33 1 3.36 3.36 0 0 1-1.468 1.468 3.5 3.5 0 0 1-1 .33 7 7 0 0 1-1.05.092q-.241.007-.483.008l-.573.001h-5.99l-.573-.001q-.241 0-.483-.008a7 7 0 0 1-1.052-.092 3.6 3.6 0 0 1-.998-.33 3.36 3.36 0 0 1-1.47-1.468 3.6 3.6 0 0 1-.328-1 7 7 0 0 1-.093-1.05Q.002 11.81 0 11.568V5.005l.001-.573q0-.241.007-.483c.01-.35.03-.704.093-1.05a3.6 3.6 0 0 1 .329-1A3.36 3.36 0 0 1 1.9.431 3.5 3.5 0 0 1 2.896.1 7 7 0 0 1 3.95.008Q4.19.002 4.432 0h.573zm-.107 2.518-4.756.959H6.13a.66.66 0 0 0-.296.133.5.5 0 0 0-.16.31c-.004.027-.01.08-.01.16v5.952c0 .14-.012.275-.106.39-.095.115-.21.15-.347.177l-.31.063c-.393.08-.65.133-.881.223a1.4 1.4 0 0 0-.519.333 1.25 1.25 0 0 0-.332.995c.031.297.166.582.395.792.156.142.35.25.578.296.236.047.49.031.858-.043.196-.04.38-.102.555-.205a1.4 1.4 0 0 0 .438-.405 1.5 1.5 0 0 0 .233-.55c.042-.202.052-.386.052-.588V6.347c0-.276.08-.35.302-.404.024-.005 3.954-.797 4.138-.833.257-.049.378.025.378.294v3.524c0 .14-.001.28-.096.396-.094.115-.211.15-.348.178l-.31.062c-.393.08-.649.133-.88.223a1.4 1.4 0 0 0-.52.334 1.26 1.26 0 0 0-.34.994c.03.297.174.582.404.792a1.2 1.2 0 0 0 .577.294c.237.048.49.03.858-.044.197-.04.381-.098.556-.202a1.4 1.4 0 0 0 .438-.405q.173-.252.233-.549a2.7 2.7 0 0 0 .044-.589V2.865c0-.273-.143-.443-.4-.42-.04.003-.383.064-.424.073"},child:[]}]})(s)}function Oy(s){return Ua({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"},child:[]}]})(s)}function Qr(s){return s.split("_").splice(1).join(" ")}const zy=({song:s})=>{const m={spotify:O.jsx(My,{className:"platform-icon"}),applemusic:O.jsx(Dy,{className:"platform-icon"}),deezer:O.jsx(Ry,{className:"platform-icon"}),youtube:O.jsx(Oy,{className:"platform-icon"}),soundcloud:O.jsx(xy,{className:"platform-icon"})};return O.jsxs("div",{className:"song-pages-layout",children:[O.jsxs("div",{className:"main-data",children:[O.jsxs("div",{className:"song-info",children:[O.jsx("img",{src:s.coverUrl,alt:`${s.title} cover`,className:"cover-image"}),O.jsx("div",{className:"song-details",children:O.jsxs("div",{className:"song-text-info",children:[O.jsx("h1",{className:"song-title",children:s.title}),O.jsx("p",{className:"song-type",children:s.type})]})})]}),O.jsx("div",{className:"platforms",children:Object.entries(s.platforms).map(([c,r])=>O.jsx(lt,{to:r,target:"_blank",rel:"noopener noreferrer",className:"platform-link",children:m[c.toLowerCase()]||c},c))})]}),O.jsx("div",{className:"bottom-section",children:By(s)})]})},Ny=({lyrics:s})=>O.jsxs("div",{className:"lyrics-container",children:[O.jsx("h2",{children:"Lyrics"}),O.jsx("pre",{className:"lyrics",children:s})]}),Ly=({parent:s})=>{const m=s.tracks.map(c=>c.name);return O.jsxs("div",{className:"track-list-container",children:[O.jsx("h2",{children:"Track List"}),O.jsx("div",{className:"track-list",children:m.map((c,r)=>(c=Qr(c),O.jsx(lt,{to:Pr(c,xe.SINGLE,s.title,s.type),className:"track",children:c},r)))})]})},By=s=>s.type!=="Single"?O.jsx(Ly,{parent:s}):s.tracks[0].lyrics?O.jsx(Ny,{lyrics:s.tracks[0].lyrics}):O.jsx("p",{className:"no-lyrics",children:"Pas de paroles disponibles."});function Uy(){const{parentType:s,parentTitle:m,type:c,title:r}=xh(),f=()=>O.jsx("div",{className:"song-not-found",children:O.jsx("h1",{children:"Song not found"})}),A=g=>{switch(g){case xe.ALBUM.toLowerCase():return xe.ALBUM;case xe.EP.toLowerCase():return xe.EP;case xe.SINGLE.toLowerCase():return xe.SINGLE;default:throw"Type incorecte : "+g}};if(!c)return console.error("Type not found"),f();const j=Fr();let J;if(!m||!s)J=j.musics.get(A(c))?.find(g=>g.title.toLowerCase()===r?.toLowerCase());else{const g=j.musics.get(A(s))?.find(T=>T.title.toLowerCase()===m?.toLowerCase());if(!g)return f();const p=g?.tracks.find(T=>Qr(T.name).toLowerCase()===r?.toLowerCase());p&&(J={title:Qr(p.name),coverUrl:g.coverUrl,platforms:g.platforms,type:xe.SINGLE,releaseDate:g.releaseDate,tracks:[p],available:g.available})}return J?O.jsx("div",{className:"song-pages-detail",children:O.jsx(zy,{song:J})}):(console.error("Song not found"),f())}function Hy({song:s}){return O.jsxs("a",{href:`/songs/${encodeURIComponent(s.title.toLowerCase())}`,className:"song-card",children:[O.jsx("div",{className:"song-cover-wrapper",children:O.jsx("img",{src:s.coverUrl,alt:s.title,className:"song-cover"})}),O.jsx("div",{className:"song-info",children:O.jsx("h3",{className:"song-title",children:s.title})})]})}const Na={All:"All",Album:xe.ALBUM,Single:xe.SINGLE,EP:xe.EP};function Gy({currentType:s}){const{loading:m,musics:c}=Fr();if(m)return O.jsx("div",{className:"loading",children:"Loading..."});const r=s===Na.All?Array.from(c.values()).flat().sort((f,A)=>{const j=A?.releaseDate?new Date(A.releaseDate).getTime():0,J=f?.releaseDate?new Date(f.releaseDate).getTime():0;return j-J}):c.get(s)||[];return r.length===0?O.jsx("div",{className:"no-songs",children:"Aucun titre trouvé."}):O.jsx("div",{className:"songs-grid",children:r.map(f=>O.jsx(Hy,{song:f},f.title))})}function Yy({value:s,onChange:m}){return O.jsxs("div",{className:"type-selector",children:[O.jsx("button",{className:s===Na.All?"active":"",onClick:()=>m(Na.All),children:"Tout"}),O.jsx("button",{className:s===Na.Album?"active":"",onClick:()=>m(Na.Album),children:"Album"}),O.jsx("button",{className:s===Na.Single?"active":"",onClick:()=>m(Na.Single),children:"Single"}),O.jsx("button",{className:s===Na.EP?"active":"",onClick:()=>m(Na.EP),children:"EP"})]})}function Qy(){const[s,m]=C.useState(Na.All);return O.jsxs("div",{className:"songs-list-with-selector",children:[O.jsx(Yy,{value:s,onChange:m}),O.jsx(Gy,{currentType:s})]})}function Vy(s){return Ua({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"},child:[]}]})(s)}function wy(s){return Ua({attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M800 112.962C800 50.575 749.425 0 687.038 0H112.962C50.575 0 0 50.575 0 112.962v574.076C0 749.426 50.575 800 112.962 800h574.076C749.425 800 800 749.426 800 687.038zM662.759 348.916c-51.615.577-99.71-15.027-141.938-43.927v202.874c0 90.166-61.72 167.62-148.996 187.848-119.068 27.165-219.864-58.954-232.577-161.835-13.294-102.884 52.322-193.051 152.892-213.281 19.651-4.045 49.209-4.045 64.458-.577v108.661c-4.692-1.153-9.086-2.31-13.709-2.888-39.304-6.937-77.371 12.715-92.977 48.55-15.605 35.838-5.16 77.451 26.629 101.73 26.586 20.806 56.085 23.694 86.14 9.822 30.057-13.291 46.21-37.567 49.676-70.512.578-4.622.546-9.826.546-15.028V110.206c0-10.981.086-10.502 11.068-10.502h86.12c6.36 0 8.673.915 9.25 8.433 4.621 67.047 55.526 124.147 120.838 132.818 6.937 1.155 14.369 1.613 22.58 2.19z",transform:"translate(112 112)"},child:[]}]})(s)}function ky(){return O.jsxs("div",{className:"contact-page",children:[O.jsxs("div",{className:"contact-business contact-container",children:[O.jsx("h1",{children:"Business / Prod:"}),O.jsx("div",{className:"contact-info",children:O.jsxs("p",{children:["Email: ",O.jsx("a",{href:"mailto:lilstempro@gmail.com",children:"lilstempro@gmail.com"})]})})]}),O.jsxs("div",{className:"reseaux-sociaux contact-container",children:[O.jsx("h1",{children:"Réseaux sociaux:"}),O.jsxs("div",{className:"contact-info",children:[O.jsx("p",{children:O.jsx("a",{href:"https://www.instagram.com/stem_dotcom/",target:"_blank",rel:"noopener noreferrer",children:O.jsxs("span",{className:"social-icon-and-text",children:[O.jsx(Cy,{}),"Instagram"]})})}),O.jsx("p",{children:O.jsx("a",{href:"https://x.com/lil_stem",target:"_blank",rel:"noopener noreferrer",children:O.jsxs("span",{className:"social-icon-and-text",children:[O.jsx(Vy,{}),"X"]})})}),O.jsx("p",{children:O.jsx("a",{href:"https://www.tiktok.com/@stem_dotcom?_r=1&_t=ZN-951PepPPeMw",target:"_blank",rel:"noopener noreferrer",children:O.jsxs("span",{className:"social-icon-and-text",children:[O.jsx(wy,{}),"TikTok"]})})})]})]})]})}const Xy=()=>O.jsxs(wh,{children:[O.jsx(Hn,{path:"/",element:O.jsx(gd,{})}),O.jsx(Hn,{path:"/all-songs",element:O.jsx(Qy,{})}),O.jsx(Hn,{path:"/contact",element:O.jsx(ky,{})}),O.jsx(Hn,{path:"/songs/:parentType?/:parentTitle?/:type/:title",element:O.jsx(Uy,{})}),O.jsx(Hn,{path:"*",element:O.jsx(gd,{})})]});function Zy(){return O.jsxs("main",{children:[O.jsx(Ey,{}),O.jsx(Xy,{}),O.jsx(Ty,{})]})}Wv.createRoot(document.getElementById("root")).render(O.jsx(Dt.StrictMode,{children:O.jsx(dg,{children:O.jsx(qy,{children:O.jsx(Zy,{})})})}));
