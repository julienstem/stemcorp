(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const A of f)if(A.type==="childList")for(const j of A.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&r(j)}).observe(document,{childList:!0,subtree:!0});function c(f){const A={};return f.integrity&&(A.integrity=f.integrity),f.referrerPolicy&&(A.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?A.credentials="include":f.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function r(f){if(f.ep)return;f.ep=!0;const A=c(f);fetch(f.href,A)}})();function Hv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Rr={exports:{}},Ol={};var If;function Gv(){if(If)return Ol;If=1;var s=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function c(r,f,A){var j=null;if(A!==void 0&&(j=""+A),f.key!==void 0&&(j=""+f.key),"key"in f){A={};for(var J in f)J!=="key"&&(A[J]=f[J])}else A=f;return f=A.ref,{$$typeof:s,type:r,key:j,ref:f!==void 0?f:null,props:A}}return Ol.Fragment=m,Ol.jsx=c,Ol.jsxs=c,Ol}var ed;function Yv(){return ed||(ed=1,Rr.exports=Gv()),Rr.exports}var z=Yv(),Dr={exports:{}},W={};var ad;function Qv(){if(ad)return W;ad=1;var s=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),j=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),N=Symbol.iterator;function Q(h){return h===null||typeof h!="object"?null:(h=N&&h[N]||h["@@iterator"],typeof h=="function"?h:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,V={};function H(h,O,B){this.props=h,this.context=O,this.refs=V,this.updater=B||k}H.prototype.isReactComponent={},H.prototype.setState=function(h,O){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,O,"setState")},H.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function G(){}G.prototype=H.prototype;function K(h,O,B){this.props=h,this.context=O,this.refs=V,this.updater=B||k}var _e=K.prototype=new G;_e.constructor=K,Z(_e,H.prototype),_e.isPureReactComponent=!0;var Ee=Array.isArray;function Be(){}var ee={H:null,A:null,T:null,S:null},Ue=Object.prototype.hasOwnProperty;function Te(h,O,B){var Y=B.ref;return{$$typeof:s,type:h,key:O,ref:Y!==void 0?Y:null,props:B}}function la(h,O){return Te(h.type,O,h.props)}function ua(h){return typeof h=="object"&&h!==null&&h.$$typeof===s}function Pe(h){var O={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(B){return O[B]})}var Rt=/\/+/g;function Ha(h,O){return typeof h=="object"&&h!==null&&h.key!=null?Pe(""+h.key):O.toString(36)}function Ta(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Be,Be):(h.status="pending",h.then(function(O){h.status==="pending"&&(h.status="fulfilled",h.value=O)},function(O){h.status==="pending"&&(h.status="rejected",h.reason=O)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function x(h,O,B,Y,$){var te=typeof h;(te==="undefined"||te==="boolean")&&(h=null);var me=!1;if(h===null)me=!0;else switch(te){case"bigint":case"string":case"number":me=!0;break;case"object":switch(h.$$typeof){case s:case m:me=!0;break;case T:return me=h._init,x(me(h._payload),O,B,Y,$)}}if(me)return $=$(h),me=Y===""?"."+Ha(h,0):Y,Ee($)?(B="",me!=null&&(B=me.replace(Rt,"$&/")+"/"),x($,O,B,"",function(Gn){return Gn})):$!=null&&(ua($)&&($=la($,B+($.key==null||h&&h.key===$.key?"":(""+$.key).replace(Rt,"$&/")+"/")+me)),O.push($)),1;me=0;var Ke=Y===""?".":Y+":";if(Ee(h))for(var Ce=0;Ce<h.length;Ce++)Y=h[Ce],te=Ke+Ha(Y,Ce),me+=x(Y,O,B,te,$);else if(Ce=Q(h),typeof Ce=="function")for(h=Ce.call(h),Ce=0;!(Y=h.next()).done;)Y=Y.value,te=Ke+Ha(Y,Ce++),me+=x(Y,O,B,te,$);else if(te==="object"){if(typeof h.then=="function")return x(Ta(h),O,B,Y,$);throw O=String(h),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return me}function L(h,O,B){if(h==null)return h;var Y=[],$=0;return x(h,Y,"","",function(te){return O.call(B,te,$++)}),Y}function P(h){if(h._status===-1){var O=h._result;O=O(),O.then(function(B){(h._status===0||h._status===-1)&&(h._status=1,h._result=B)},function(B){(h._status===0||h._status===-1)&&(h._status=2,h._result=B)}),h._status===-1&&(h._status=0,h._result=O)}if(h._status===1)return h._result.default;throw h._result}var pe=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},ge={map:L,forEach:function(h,O,B){L(h,function(){O.apply(this,arguments)},B)},count:function(h){var O=0;return L(h,function(){O++}),O},toArray:function(h){return L(h,function(O){return O})||[]},only:function(h){if(!ua(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return W.Activity=E,W.Children=ge,W.Component=H,W.Fragment=c,W.Profiler=f,W.PureComponent=K,W.StrictMode=r,W.Suspense=g,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,W.__COMPILER_RUNTIME={__proto__:null,c:function(h){return ee.H.useMemoCache(h)}},W.cache=function(h){return function(){return h.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(h,O,B){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var Y=Z({},h.props),$=h.key;if(O!=null)for(te in O.key!==void 0&&($=""+O.key),O)!Ue.call(O,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&O.ref===void 0||(Y[te]=O[te]);var te=arguments.length-2;if(te===1)Y.children=B;else if(1<te){for(var me=Array(te),Ke=0;Ke<te;Ke++)me[Ke]=arguments[Ke+2];Y.children=me}return Te(h.type,$,Y)},W.createContext=function(h){return h={$$typeof:j,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:A,_context:h},h},W.createElement=function(h,O,B){var Y,$={},te=null;if(O!=null)for(Y in O.key!==void 0&&(te=""+O.key),O)Ue.call(O,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&($[Y]=O[Y]);var me=arguments.length-2;if(me===1)$.children=B;else if(1<me){for(var Ke=Array(me),Ce=0;Ce<me;Ce++)Ke[Ce]=arguments[Ce+2];$.children=Ke}if(h&&h.defaultProps)for(Y in me=h.defaultProps,me)$[Y]===void 0&&($[Y]=me[Y]);return Te(h,te,$)},W.createRef=function(){return{current:null}},W.forwardRef=function(h){return{$$typeof:J,render:h}},W.isValidElement=ua,W.lazy=function(h){return{$$typeof:T,_payload:{_status:-1,_result:h},_init:P}},W.memo=function(h,O){return{$$typeof:p,type:h,compare:O===void 0?null:O}},W.startTransition=function(h){var O=ee.T,B={};ee.T=B;try{var Y=h(),$=ee.S;$!==null&&$(B,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(Be,pe)}catch(te){pe(te)}finally{O!==null&&B.types!==null&&(O.types=B.types),ee.T=O}},W.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},W.use=function(h){return ee.H.use(h)},W.useActionState=function(h,O,B){return ee.H.useActionState(h,O,B)},W.useCallback=function(h,O){return ee.H.useCallback(h,O)},W.useContext=function(h){return ee.H.useContext(h)},W.useDebugValue=function(){},W.useDeferredValue=function(h,O){return ee.H.useDeferredValue(h,O)},W.useEffect=function(h,O){return ee.H.useEffect(h,O)},W.useEffectEvent=function(h){return ee.H.useEffectEvent(h)},W.useId=function(){return ee.H.useId()},W.useImperativeHandle=function(h,O,B){return ee.H.useImperativeHandle(h,O,B)},W.useInsertionEffect=function(h,O){return ee.H.useInsertionEffect(h,O)},W.useLayoutEffect=function(h,O){return ee.H.useLayoutEffect(h,O)},W.useMemo=function(h,O){return ee.H.useMemo(h,O)},W.useOptimistic=function(h,O){return ee.H.useOptimistic(h,O)},W.useReducer=function(h,O,B){return ee.H.useReducer(h,O,B)},W.useRef=function(h){return ee.H.useRef(h)},W.useState=function(h){return ee.H.useState(h)},W.useSyncExternalStore=function(h,O,B){return ee.H.useSyncExternalStore(h,O,B)},W.useTransition=function(){return ee.H.useTransition()},W.version="19.2.0",W}var td;function Qr(){return td||(td=1,Dr.exports=Qv()),Dr.exports}var C=Qr();const Wt=Hv(C);var Or={exports:{}},zl={},zr={exports:{}},Nr={};var nd;function Vv(){return nd||(nd=1,(function(s){function m(x,L){var P=x.length;x.push(L);e:for(;0<P;){var pe=P-1>>>1,ge=x[pe];if(0<f(ge,L))x[pe]=L,x[P]=ge,P=pe;else break e}}function c(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var L=x[0],P=x.pop();if(P!==L){x[0]=P;e:for(var pe=0,ge=x.length,h=ge>>>1;pe<h;){var O=2*(pe+1)-1,B=x[O],Y=O+1,$=x[Y];if(0>f(B,P))Y<ge&&0>f($,B)?(x[pe]=$,x[Y]=P,pe=Y):(x[pe]=B,x[O]=P,pe=O);else if(Y<ge&&0>f($,P))x[pe]=$,x[Y]=P,pe=Y;else break e}}return L}function f(x,L){var P=x.sortIndex-L.sortIndex;return P!==0?P:x.id-L.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;s.unstable_now=function(){return A.now()}}else{var j=Date,J=j.now();s.unstable_now=function(){return j.now()-J}}var g=[],p=[],T=1,E=null,N=3,Q=!1,k=!1,Z=!1,V=!1,H=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function _e(x){for(var L=c(p);L!==null;){if(L.callback===null)r(p);else if(L.startTime<=x)r(p),L.sortIndex=L.expirationTime,m(g,L);else break;L=c(p)}}function Ee(x){if(Z=!1,_e(x),!k)if(c(g)!==null)k=!0,Be||(Be=!0,Pe());else{var L=c(p);L!==null&&Ta(Ee,L.startTime-x)}}var Be=!1,ee=-1,Ue=5,Te=-1;function la(){return V?!0:!(s.unstable_now()-Te<Ue)}function ua(){if(V=!1,Be){var x=s.unstable_now();Te=x;var L=!0;try{e:{k=!1,Z&&(Z=!1,G(ee),ee=-1),Q=!0;var P=N;try{a:{for(_e(x),E=c(g);E!==null&&!(E.expirationTime>x&&la());){var pe=E.callback;if(typeof pe=="function"){E.callback=null,N=E.priorityLevel;var ge=pe(E.expirationTime<=x);if(x=s.unstable_now(),typeof ge=="function"){E.callback=ge,_e(x),L=!0;break a}E===c(g)&&r(g),_e(x)}else r(g);E=c(g)}if(E!==null)L=!0;else{var h=c(p);h!==null&&Ta(Ee,h.startTime-x),L=!1}}break e}finally{E=null,N=P,Q=!1}L=void 0}}finally{L?Pe():Be=!1}}}var Pe;if(typeof K=="function")Pe=function(){K(ua)};else if(typeof MessageChannel<"u"){var Rt=new MessageChannel,Ha=Rt.port2;Rt.port1.onmessage=ua,Pe=function(){Ha.postMessage(null)}}else Pe=function(){H(ua,0)};function Ta(x,L){ee=H(function(){x(s.unstable_now())},L)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(x){x.callback=null},s.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<x?Math.floor(1e3/x):5},s.unstable_getCurrentPriorityLevel=function(){return N},s.unstable_next=function(x){switch(N){case 1:case 2:case 3:var L=3;break;default:L=N}var P=N;N=L;try{return x()}finally{N=P}},s.unstable_requestPaint=function(){V=!0},s.unstable_runWithPriority=function(x,L){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var P=N;N=x;try{return L()}finally{N=P}},s.unstable_scheduleCallback=function(x,L,P){var pe=s.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?pe+P:pe):P=pe,x){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=P+ge,x={id:T++,callback:L,priorityLevel:x,startTime:P,expirationTime:ge,sortIndex:-1},P>pe?(x.sortIndex=P,m(p,x),c(g)===null&&x===c(p)&&(Z?(G(ee),ee=-1):Z=!0,Ta(Ee,P-pe))):(x.sortIndex=ge,m(g,x),k||Q||(k=!0,Be||(Be=!0,Pe()))),x},s.unstable_shouldYield=la,s.unstable_wrapCallback=function(x){var L=N;return function(){var P=N;N=L;try{return x.apply(this,arguments)}finally{N=P}}}})(Nr)),Nr}var ld;function wv(){return ld||(ld=1,zr.exports=Vv()),zr.exports}var Lr={exports:{}},Ze={};var ud;function kv(){if(ud)return Ze;ud=1;var s=Qr();function m(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(m(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function A(g,p,T){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:E==null?null:""+E,children:g,containerInfo:p,implementation:T}}var j=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function J(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ze.createPortal=function(g,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(m(299));return A(g,p,null,T)},Ze.flushSync=function(g){var p=j.T,T=r.p;try{if(j.T=null,r.p=2,g)return g()}finally{j.T=p,r.p=T,r.d.f()}},Ze.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},Ze.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},Ze.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var T=p.as,E=J(T,p.crossOrigin),N=typeof p.integrity=="string"?p.integrity:void 0,Q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:N,fetchPriority:Q}):T==="script"&&r.d.X(g,{crossOrigin:E,integrity:N,fetchPriority:Q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ze.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=J(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},Ze.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,E=J(T,p.crossOrigin);r.d.L(g,T,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ze.preloadModule=function(g,p){if(typeof g=="string")if(p){var T=J(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},Ze.requestFormReset=function(g){r.d.r(g)},Ze.unstable_batchedUpdates=function(g,p){return g(p)},Ze.useFormState=function(g,p,T){return j.H.useFormState(g,p,T)},Ze.useFormStatus=function(){return j.H.useHostTransitionStatus()},Ze.version="19.2.0",Ze}var sd;function Xv(){if(sd)return Lr.exports;sd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(m){console.error(m)}}return s(),Lr.exports=kv(),Lr.exports}var id;function Zv(){if(id)return zl;id=1;var s=wv(),m=Qr(),c=Xv();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function j(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function J(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function g(e){if(A(e)!==e)throw Error(r(188))}function p(e){var a=e.alternate;if(!a){if(a=A(e),a===null)throw Error(r(188));return a!==e?null:e}for(var t=e,n=a;;){var l=t.return;if(l===null)break;var u=l.alternate;if(u===null){if(n=l.return,n!==null){t=n;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===t)return g(l),e;if(u===n)return g(l),a;u=u.sibling}throw Error(r(188))}if(t.return!==n.return)t=l,n=u;else{for(var i=!1,o=l.child;o;){if(o===t){i=!0,t=l,n=u;break}if(o===n){i=!0,n=l,t=u;break}o=o.sibling}if(!i){for(o=u.child;o;){if(o===t){i=!0,t=u,n=l;break}if(o===n){i=!0,n=u,t=l;break}o=o.sibling}if(!i)throw Error(r(189))}}if(t.alternate!==n)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:a}function T(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=T(e),a!==null)return a;e=e.sibling}return null}var E=Object.assign,N=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),K=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),la=Symbol.for("react.memo_cache_sentinel"),ua=Symbol.iterator;function Pe(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var Rt=Symbol.for("react.client.reference");function Ha(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case H:return"Profiler";case V:return"StrictMode";case Ee:return"Suspense";case Be:return"SuspenseList";case Te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case K:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case _e:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return a=e.displayName||null,a!==null?a:Ha(e.type)||"Memo";case Ue:a=e._payload,e=e._init;try{return Ha(e(a))}catch{}}return null}var Ta=Array.isArray,x=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},pe=[],ge=-1;function h(e){return{current:e}}function O(e){0>ge||(e.current=pe[ge],pe[ge]=null,ge--)}function B(e,a){ge++,pe[ge]=e.current,e.current=a}var Y=h(null),$=h(null),te=h(null),me=h(null);function Ke(e,a){switch(B(te,a),B($,e),B(Y,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?_f(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=_f(a),e=Sf(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(Y),B(Y,e)}function Ce(){O(Y),O($),O(te)}function Gn(e){e.memoizedState!==null&&B(me,e);var a=Y.current,t=Sf(a,e.type);a!==t&&(B($,e),B(Y,t))}function Yl(e){$.current===e&&(O(Y),O($)),me.current===e&&(O(me),xl._currentValue=P)}var ds,Pr;function Dt(e){if(ds===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);ds=a&&a[1]||"",Pr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ds+e+Pr}var ps=!1;function As(e,a){if(!e||ps)return"";ps=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(q){var S=q}Reflect.construct(e,[],D)}else{try{D.call()}catch(q){S=q}e.call(D.prototype)}}else{try{throw Error()}catch(q){S=q}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(q){if(q&&S&&typeof q.stack=="string")return[q.stack,S.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],o=u[1];if(i&&o){var d=i.split(`
`),_=o.split(`
`);for(l=n=0;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;for(;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;if(n===d.length||l===_.length)for(n=d.length-1,l=_.length-1;1<=n&&0<=l&&d[n]!==_[l];)l--;for(;1<=n&&0<=l;n--,l--)if(d[n]!==_[l]){if(n!==1||l!==1)do if(n--,l--,0>l||d[n]!==_[l]){var M=`
`+d[n].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=n&&0<=l);break}}}finally{ps=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Dt(t):""}function vp(e,a){switch(e.tag){case 26:case 27:case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return e.child!==a&&a!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return As(e.type,!1);case 11:return As(e.type.render,!1);case 1:return As(e.type,!0);case 31:return Dt("Activity");default:return""}}function Wr(e){try{var a="",t=null;do a+=vp(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var vs=Object.prototype.hasOwnProperty,hs=s.unstable_scheduleCallback,gs=s.unstable_cancelCallback,hp=s.unstable_shouldYield,gp=s.unstable_requestPaint,sa=s.unstable_now,bp=s.unstable_getCurrentPriorityLevel,$r=s.unstable_ImmediatePriority,Ir=s.unstable_UserBlockingPriority,Ql=s.unstable_NormalPriority,yp=s.unstable_LowPriority,eo=s.unstable_IdlePriority,jp=s.log,_p=s.unstable_setDisableYieldValue,Yn=null,ia=null;function st(e){if(typeof jp=="function"&&_p(e),ia&&typeof ia.setStrictMode=="function")try{ia.setStrictMode(Yn,e)}catch{}}var ra=Math.clz32?Math.clz32:Ep,Sp=Math.log,qp=Math.LN2;function Ep(e){return e>>>=0,e===0?32:31-(Sp(e)/qp|0)|0}var Vl=256,wl=262144,kl=4194304;function Ot(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xl(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=n&134217727;return o!==0?(n=o&~u,n!==0?l=Ot(n):(i&=o,i!==0?l=Ot(i):t||(t=o&~e,t!==0&&(l=Ot(t))))):(o=n&~u,o!==0?l=Ot(o):i!==0?l=Ot(i):t||(t=n&~e,t!==0&&(l=Ot(t)))),l===0?0:a!==0&&a!==l&&(a&u)===0&&(u=l&-l,t=a&-a,u>=t||u===32&&(t&4194048)!==0)?a:l}function Qn(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Tp(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ao(){var e=kl;return kl<<=1,(kl&62914560)===0&&(kl=4194304),e}function bs(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Vn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jp(e,a,t,n,l,u){var i=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var o=e.entanglements,d=e.expirationTimes,_=e.hiddenUpdates;for(t=i&~t;0<t;){var M=31-ra(t),D=1<<M;o[M]=0,d[M]=-1;var S=_[M];if(S!==null)for(_[M]=null,M=0;M<S.length;M++){var q=S[M];q!==null&&(q.lane&=-536870913)}t&=~D}n!==0&&to(e,n,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~a))}function to(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-ra(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function no(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-ra(t),l=1<<n;l&a|e[n]&a&&(e[n]|=a),t&=~l}}function lo(e,a){var t=a&-a;return t=(t&42)!==0?1:ys(t),(t&(e.suspendedLanes|a))!==0?0:t}function ys(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uo(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Xf(e.type))}function so(e,a){var t=L.p;try{return L.p=e,a()}finally{L.p=t}}var it=Math.random().toString(36).slice(2),Qe="__reactFiber$"+it,We="__reactProps$"+it,It="__reactContainer$"+it,_s="__reactEvents$"+it,Mp="__reactListeners$"+it,xp="__reactHandles$"+it,io="__reactResources$"+it,wn="__reactMarker$"+it;function Ss(e){delete e[Qe],delete e[We],delete e[_s],delete e[Mp],delete e[xp]}function en(e){var a=e[Qe];if(a)return a;for(var t=e.parentNode;t;){if(a=t[It]||t[Qe]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Cf(e);e!==null;){if(t=e[Qe])return t;e=Cf(e)}return a}e=t,t=e.parentNode}return null}function an(e){if(e=e[Qe]||e[It]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function kn(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function tn(e){var a=e[io];return a||(a=e[io]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ge(e){e[wn]=!0}var ro=new Set,oo={};function zt(e,a){nn(e,a),nn(e+"Capture",a)}function nn(e,a){for(oo[e]=a,e=0;e<a.length;e++)ro.add(a[e])}var Cp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),co={},mo={};function Rp(e){return vs.call(mo,e)?!0:vs.call(co,e)?!1:Cp.test(e)?mo[e]=!0:(co[e]=!0,!1)}function Zl(e,a,t){if(Rp(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Kl(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Ga(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function va(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fo(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Dp(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return l.call(this)},set:function(i){t=""+i,u.call(this,i)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function qs(e){if(!e._valueTracker){var a=fo(e)?"checked":"value";e._valueTracker=Dp(e,a,""+e[a])}}function po(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=fo(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function Fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Op=/[\n"\\]/g;function ha(e){return e.replace(Op,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Es(e,a,t,n,l,u,i,o){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),a!=null?i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+va(a)):e.value!==""+va(a)&&(e.value=""+va(a)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),a!=null?Ts(e,i,va(a)):t!=null?Ts(e,i,va(t)):n!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+va(o):e.removeAttribute("name")}function Ao(e,a,t,n,l,u,i,o){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),a!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||a!=null)){qs(e);return}t=t!=null?""+va(t):"",a=a!=null?""+va(a):t,o||a===e.value||(e.value=a),e.defaultValue=a}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),qs(e)}function Ts(e,a,t){a==="number"&&Fl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ln(e,a,t,n){if(e=e.options,a){a={};for(var l=0;l<t.length;l++)a["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=a.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&n&&(e[t].defaultSelected=!0)}else{for(t=""+va(t),a=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}a!==null||e[l].disabled||(a=e[l])}a!==null&&(a.selected=!0)}}function vo(e,a,t){if(a!=null&&(a=""+va(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+va(t):""}function ho(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(r(92));if(Ta(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=va(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),qs(e)}function un(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var zp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function go(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||zp.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function bo(e,a,t){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in a)n=a[l],a.hasOwnProperty(l)&&t[l]!==n&&go(e,l,n)}else for(var u in a)a.hasOwnProperty(u)&&go(e,u,a[u])}function Js(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(e){return Lp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ya(){}var Ms=null;function xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sn=null,rn=null;function yo(e){var a=an(e);if(a&&(e=a.stateNode)){var t=e[We]||null;e:switch(e=a.stateNode,a.type){case"input":if(Es(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ha(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var l=n[We]||null;if(!l)throw Error(r(90));Es(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&po(n)}break e;case"textarea":vo(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&ln(e,!!t.multiple,a,!1)}}}var Cs=!1;function jo(e,a,t){if(Cs)return e(a,t);Cs=!0;try{var n=e(a);return n}finally{if(Cs=!1,(sn!==null||rn!==null)&&(Bu(),sn&&(a=sn,e=rn,rn=sn=null,yo(a),e)))for(a=0;a<e.length;a++)yo(e[a])}}function Xn(e,a){var t=e.stateNode;if(t===null)return null;var n=t[We]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,a,typeof t));return t}var Qa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rs=!1;if(Qa)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{Rs=!1}var rt=null,Ds=null,Wl=null;function _o(){if(Wl)return Wl;var e,a=Ds,t=a.length,n,l="value"in rt?rt.value:rt.textContent,u=l.length;for(e=0;e<t&&a[e]===l[e];e++);var i=t-e;for(n=1;n<=i&&a[t-n]===l[u-n];n++);return Wl=l.slice(e,1<n?1-n:void 0)}function $l(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Il(){return!0}function So(){return!1}function $e(e){function a(t,n,l,u,i){this._reactName=t,this._targetInst=l,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(u):u[o]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Il:So,this.isPropagationStopped=So,this}return E(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),a}var Nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=$e(Nt),Kn=E({},Nt,{view:0,detail:0}),Bp=$e(Kn),Os,zs,Fn,au=E({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(Os=e.screenX-Fn.screenX,zs=e.screenY-Fn.screenY):zs=Os=0,Fn=e),Os)},movementY:function(e){return"movementY"in e?e.movementY:zs}}),qo=$e(au),Up=E({},au,{dataTransfer:0}),Hp=$e(Up),Gp=E({},Kn,{relatedTarget:0}),Ns=$e(Gp),Yp=E({},Nt,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=$e(Yp),Vp=E({},Nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wp=$e(Vp),kp=E({},Nt,{data:0}),Eo=$e(kp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Kp[e])?!!a[e]:!1}function Ls(){return Fp}var Pp=E({},Kn,{key:function(e){if(e.key){var a=Xp[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wp=$e(Pp),$p=E({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),To=$e($p),Ip=E({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),eA=$e(Ip),aA=E({},Nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),tA=$e(aA),nA=E({},au,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lA=$e(nA),uA=E({},Nt,{newState:0,oldState:0}),sA=$e(uA),iA=[9,13,27,32],Bs=Qa&&"CompositionEvent"in window,Pn=null;Qa&&"documentMode"in document&&(Pn=document.documentMode);var rA=Qa&&"TextEvent"in window&&!Pn,Jo=Qa&&(!Bs||Pn&&8<Pn&&11>=Pn),Mo=" ",xo=!1;function Co(e,a){switch(e){case"keyup":return iA.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ro(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var on=!1;function oA(e,a){switch(e){case"compositionend":return Ro(a);case"keypress":return a.which!==32?null:(xo=!0,Mo);case"textInput":return e=a.data,e===Mo&&xo?null:e;default:return null}}function cA(e,a){if(on)return e==="compositionend"||!Bs&&Co(e,a)?(e=_o(),Wl=Ds=rt=null,on=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Jo&&a.locale!=="ko"?null:a.data;default:return null}}var mA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Do(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!mA[e.type]:a==="textarea"}function Oo(e,a,t,n){sn?rn?rn.push(n):rn=[n]:sn=n,a=wu(a,"onChange"),0<a.length&&(t=new eu("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var Wn=null,$n=null;function fA(e){vf(e,0)}function tu(e){var a=kn(e);if(po(a))return e}function zo(e,a){if(e==="change")return a}var No=!1;if(Qa){var Us;if(Qa){var Hs="oninput"in document;if(!Hs){var Lo=document.createElement("div");Lo.setAttribute("oninput","return;"),Hs=typeof Lo.oninput=="function"}Us=Hs}else Us=!1;No=Us&&(!document.documentMode||9<document.documentMode)}function Bo(){Wn&&(Wn.detachEvent("onpropertychange",Uo),$n=Wn=null)}function Uo(e){if(e.propertyName==="value"&&tu($n)){var a=[];Oo(a,$n,e,xs(e)),jo(fA,a)}}function dA(e,a,t){e==="focusin"?(Bo(),Wn=a,$n=t,Wn.attachEvent("onpropertychange",Uo)):e==="focusout"&&Bo()}function pA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tu($n)}function AA(e,a){if(e==="click")return tu(a)}function vA(e,a){if(e==="input"||e==="change")return tu(a)}function hA(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var oa=typeof Object.is=="function"?Object.is:hA;function In(e,a){if(oa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var l=t[n];if(!vs.call(a,l)||!oa(e[l],a[l]))return!1}return!0}function Ho(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Go(e,a){var t=Ho(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ho(t)}}function Yo(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Yo(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Qo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Fl(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Fl(e.document)}return a}function Gs(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var gA=Qa&&"documentMode"in document&&11>=document.documentMode,cn=null,Ys=null,el=null,Qs=!1;function Vo(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Qs||cn==null||cn!==Fl(n)||(n=cn,"selectionStart"in n&&Gs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),el&&In(el,n)||(el=n,n=wu(Ys,"onSelect"),0<n.length&&(a=new eu("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=cn)))}function Lt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var mn={animationend:Lt("Animation","AnimationEnd"),animationiteration:Lt("Animation","AnimationIteration"),animationstart:Lt("Animation","AnimationStart"),transitionrun:Lt("Transition","TransitionRun"),transitionstart:Lt("Transition","TransitionStart"),transitioncancel:Lt("Transition","TransitionCancel"),transitionend:Lt("Transition","TransitionEnd")},Vs={},wo={};Qa&&(wo=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Bt(e){if(Vs[e])return Vs[e];if(!mn[e])return e;var a=mn[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in wo)return Vs[e]=a[t];return e}var ko=Bt("animationend"),Xo=Bt("animationiteration"),Zo=Bt("animationstart"),bA=Bt("transitionrun"),yA=Bt("transitionstart"),jA=Bt("transitioncancel"),Ko=Bt("transitionend"),Fo=new Map,ws="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ws.push("scrollEnd");function Ja(e,a){Fo.set(e,a),zt(a,[e])}var nu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ga=[],fn=0,ks=0;function lu(){for(var e=fn,a=ks=fn=0;a<e;){var t=ga[a];ga[a++]=null;var n=ga[a];ga[a++]=null;var l=ga[a];ga[a++]=null;var u=ga[a];if(ga[a++]=null,n!==null&&l!==null){var i=n.pending;i===null?l.next=l:(l.next=i.next,i.next=l),n.pending=l}u!==0&&Po(t,l,u)}}function uu(e,a,t,n){ga[fn++]=e,ga[fn++]=a,ga[fn++]=t,ga[fn++]=n,ks|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Xs(e,a,t,n){return uu(e,a,t,n),su(e)}function Ut(e,a){return uu(e,null,null,a),su(e)}function Po(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var l=!1,u=e.return;u!==null;)u.childLanes|=t,n=u.alternate,n!==null&&(n.childLanes|=t),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&a!==null&&(l=31-ra(t),e=u.hiddenUpdates,n=e[l],n===null?e[l]=[a]:n.push(a),a.lane=t|536870912),u):null}function su(e){if(50<_l)throw _l=0,ar=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var dn={};function _A(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ca(e,a,t,n){return new _A(e,a,t,n)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Va(e,a){var t=e.alternate;return t===null?(t=ca(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Wo(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function iu(e,a,t,n,l,u){var i=0;if(n=e,typeof e=="function")Zs(e)&&(i=1);else if(typeof e=="string")i=Jv(e,t,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Te:return e=ca(31,t,a,l),e.elementType=Te,e.lanes=u,e;case Z:return Ht(t.children,l,u,a);case V:i=8,l|=24;break;case H:return e=ca(12,t,a,l|2),e.elementType=H,e.lanes=u,e;case Ee:return e=ca(13,t,a,l),e.elementType=Ee,e.lanes=u,e;case Be:return e=ca(19,t,a,l),e.elementType=Be,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:i=10;break e;case G:i=9;break e;case _e:i=11;break e;case ee:i=14;break e;case Ue:i=16,n=null;break e}i=29,t=Error(r(130,e===null?"null":typeof e,"")),n=null}return a=ca(i,t,a,l),a.elementType=e,a.type=n,a.lanes=u,a}function Ht(e,a,t,n){return e=ca(7,e,n,a),e.lanes=t,e}function Ks(e,a,t){return e=ca(6,e,null,a),e.lanes=t,e}function $o(e){var a=ca(18,null,null,0);return a.stateNode=e,a}function Fs(e,a,t){return a=ca(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Io=new WeakMap;function ba(e,a){if(typeof e=="object"&&e!==null){var t=Io.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Wr(a)},Io.set(e,a),a)}return{value:e,source:a,stack:Wr(a)}}var pn=[],An=0,ru=null,al=0,ya=[],ja=0,ot=null,Ra=1,Da="";function wa(e,a){pn[An++]=al,pn[An++]=ru,ru=e,al=a}function ec(e,a,t){ya[ja++]=Ra,ya[ja++]=Da,ya[ja++]=ot,ot=e;var n=Ra;e=Da;var l=32-ra(n)-1;n&=~(1<<l),t+=1;var u=32-ra(a)+l;if(30<u){var i=l-l%5;u=(n&(1<<i)-1).toString(32),n>>=i,l-=i,Ra=1<<32-ra(a)+l|t<<l|n,Da=u+e}else Ra=1<<u|t<<l|n,Da=e}function Ps(e){e.return!==null&&(wa(e,1),ec(e,1,0))}function Ws(e){for(;e===ru;)ru=pn[--An],pn[An]=null,al=pn[--An],pn[An]=null;for(;e===ot;)ot=ya[--ja],ya[ja]=null,Da=ya[--ja],ya[ja]=null,Ra=ya[--ja],ya[ja]=null}function ac(e,a){ya[ja++]=Ra,ya[ja++]=Da,ya[ja++]=ot,Ra=a.id,Da=a.overflow,ot=e}var Ve=null,ye=null,ie=!1,ct=null,_a=!1,$s=Error(r(519));function mt(e){var a=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tl(ba(a,e)),$s}function tc(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[Qe]=e,a[We]=n,t){case"dialog":le("cancel",a),le("close",a);break;case"iframe":case"object":case"embed":le("load",a);break;case"video":case"audio":for(t=0;t<ql.length;t++)le(ql[t],a);break;case"source":le("error",a);break;case"img":case"image":case"link":le("error",a),le("load",a);break;case"details":le("toggle",a);break;case"input":le("invalid",a),Ao(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":le("invalid",a);break;case"textarea":le("invalid",a),ho(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||yf(a.textContent,t)?(n.popover!=null&&(le("beforetoggle",a),le("toggle",a)),n.onScroll!=null&&le("scroll",a),n.onScrollEnd!=null&&le("scrollend",a),n.onClick!=null&&(a.onclick=Ya),a=!0):a=!1,a||mt(e,!0)}function nc(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:_a=!1;return;case 27:case 3:_a=!0;return;default:Ve=Ve.return}}function vn(e){if(e!==Ve)return!1;if(!ie)return nc(e),ie=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||vr(e.type,e.memoizedProps)),t=!t),t&&ye&&mt(e),nc(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ye=xf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ye=xf(e)}else a===27?(a=ye,Et(e.type)?(e=jr,jr=null,ye=e):ye=a):ye=Ve?qa(e.stateNode.nextSibling):null;return!0}function Gt(){ye=Ve=null,ie=!1}function Is(){var e=ct;return e!==null&&(ta===null?ta=e:ta.push.apply(ta,e),ct=null),e}function tl(e){ct===null?ct=[e]:ct.push(e)}var ei=h(null),Yt=null,ka=null;function ft(e,a,t){B(ei,a._currentValue),a._currentValue=t}function Xa(e){e._currentValue=ei.current,O(ei)}function ai(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function ti(e,a,t,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var i=l.child;u=u.firstContext;e:for(;u!==null;){var o=u;u=l;for(var d=0;d<a.length;d++)if(o.context===a[d]){u.lanes|=t,o=u.alternate,o!==null&&(o.lanes|=t),ai(u.return,t,e),n||(i=null);break e}u=o.next}}else if(l.tag===18){if(i=l.return,i===null)throw Error(r(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),ai(i,t,e),i=null}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===e){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}}function hn(e,a,t,n){e=null;for(var l=a,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var i=l.alternate;if(i===null)throw Error(r(387));if(i=i.memoizedProps,i!==null){var o=l.type;oa(l.pendingProps.value,i.value)||(e!==null?e.push(o):e=[o])}}else if(l===me.current){if(i=l.alternate,i===null)throw Error(r(387));i.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(xl):e=[xl])}l=l.return}e!==null&&ti(a,e,t,n),a.flags|=262144}function ou(e){for(e=e.firstContext;e!==null;){if(!oa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qt(e){Yt=e,ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function we(e){return lc(Yt,e)}function cu(e,a){return Yt===null&&Qt(e),lc(e,a)}function lc(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},ka===null){if(e===null)throw Error(r(308));ka=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ka=ka.next=a;return t}var SA=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},qA=s.unstable_scheduleCallback,EA=s.unstable_NormalPriority,Oe={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ni(){return{controller:new SA,data:new Map,refCount:0}}function nl(e){e.refCount--,e.refCount===0&&qA(EA,function(){e.controller.abort()})}var ll=null,li=0,gn=0,bn=null;function TA(e,a){if(ll===null){var t=ll=[];li=0,gn=ir(),bn={status:"pending",value:void 0,then:function(n){t.push(n)}}}return li++,a.then(uc,uc),a}function uc(){if(--li===0&&ll!==null){bn!==null&&(bn.status="fulfilled");var e=ll;ll=null,gn=0,bn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function JA(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var l=0;l<t.length;l++)(0,t[l])(a)},function(l){for(n.status="rejected",n.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),n}var sc=x.S;x.S=function(e,a){Vm=sa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&TA(e,a),sc!==null&&sc(e,a)};var Vt=h(null);function ui(){var e=Vt.current;return e!==null?e:be.pooledCache}function mu(e,a){a===null?B(Vt,Vt.current):B(Vt,a.pool)}function ic(){var e=ui();return e===null?null:{parent:Oe._currentValue,pool:e}}var yn=Error(r(460)),si=Error(r(474)),fu=Error(r(542)),du={then:function(){}};function rc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function oc(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ya,Ya),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,mc(e),e;default:if(typeof a.status=="string")a.then(Ya,Ya);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=n}},function(n){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,mc(e),e}throw kt=a,yn}}function wt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(kt=t,yn):t}}var kt=null;function cc(){if(kt===null)throw Error(r(459));var e=kt;return kt=null,e}function mc(e){if(e===yn||e===fu)throw Error(r(483))}var jn=null,ul=0;function pu(e){var a=ul;return ul+=1,jn===null&&(jn=[]),oc(jn,e,a)}function sl(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Au(e,a){throw a.$$typeof===N?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function fc(e){function a(b,v){if(e){var y=b.deletions;y===null?(b.deletions=[v],b.flags|=16):y.push(v)}}function t(b,v){if(!e)return null;for(;v!==null;)a(b,v),v=v.sibling;return null}function n(b){for(var v=new Map;b!==null;)b.key!==null?v.set(b.key,b):v.set(b.index,b),b=b.sibling;return v}function l(b,v){return b=Va(b,v),b.index=0,b.sibling=null,b}function u(b,v,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<v?(b.flags|=67108866,v):y):(b.flags|=67108866,v)):(b.flags|=1048576,v)}function i(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function o(b,v,y,R){return v===null||v.tag!==6?(v=Ks(y,b.mode,R),v.return=b,v):(v=l(v,y),v.return=b,v)}function d(b,v,y,R){var X=y.type;return X===Z?M(b,v,y.props.children,R,y.key):v!==null&&(v.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ue&&wt(X)===v.type)?(v=l(v,y.props),sl(v,y),v.return=b,v):(v=iu(y.type,y.key,y.props,null,b.mode,R),sl(v,y),v.return=b,v)}function _(b,v,y,R){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Fs(y,b.mode,R),v.return=b,v):(v=l(v,y.children||[]),v.return=b,v)}function M(b,v,y,R,X){return v===null||v.tag!==7?(v=Ht(y,b.mode,R,X),v.return=b,v):(v=l(v,y),v.return=b,v)}function D(b,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Ks(""+v,b.mode,y),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Q:return y=iu(v.type,v.key,v.props,null,b.mode,y),sl(y,v),y.return=b,y;case k:return v=Fs(v,b.mode,y),v.return=b,v;case Ue:return v=wt(v),D(b,v,y)}if(Ta(v)||Pe(v))return v=Ht(v,b.mode,y,null),v.return=b,v;if(typeof v.then=="function")return D(b,pu(v),y);if(v.$$typeof===K)return D(b,cu(b,v),y);Au(b,v)}return null}function S(b,v,y,R){var X=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return X!==null?null:o(b,v,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:return y.key===X?d(b,v,y,R):null;case k:return y.key===X?_(b,v,y,R):null;case Ue:return y=wt(y),S(b,v,y,R)}if(Ta(y)||Pe(y))return X!==null?null:M(b,v,y,R,null);if(typeof y.then=="function")return S(b,v,pu(y),R);if(y.$$typeof===K)return S(b,v,cu(b,y),R);Au(b,y)}return null}function q(b,v,y,R,X){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return b=b.get(y)||null,o(v,b,""+R,X);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Q:return b=b.get(R.key===null?y:R.key)||null,d(v,b,R,X);case k:return b=b.get(R.key===null?y:R.key)||null,_(v,b,R,X);case Ue:return R=wt(R),q(b,v,y,R,X)}if(Ta(R)||Pe(R))return b=b.get(y)||null,M(v,b,R,X,null);if(typeof R.then=="function")return q(b,v,y,pu(R),X);if(R.$$typeof===K)return q(b,v,y,cu(v,R),X);Au(v,R)}return null}function U(b,v,y,R){for(var X=null,re=null,w=v,ae=v=0,se=null;w!==null&&ae<y.length;ae++){w.index>ae?(se=w,w=null):se=w.sibling;var oe=S(b,w,y[ae],R);if(oe===null){w===null&&(w=se);break}e&&w&&oe.alternate===null&&a(b,w),v=u(oe,v,ae),re===null?X=oe:re.sibling=oe,re=oe,w=se}if(ae===y.length)return t(b,w),ie&&wa(b,ae),X;if(w===null){for(;ae<y.length;ae++)w=D(b,y[ae],R),w!==null&&(v=u(w,v,ae),re===null?X=w:re.sibling=w,re=w);return ie&&wa(b,ae),X}for(w=n(w);ae<y.length;ae++)se=q(w,b,ae,y[ae],R),se!==null&&(e&&se.alternate!==null&&w.delete(se.key===null?ae:se.key),v=u(se,v,ae),re===null?X=se:re.sibling=se,re=se);return e&&w.forEach(function(Ct){return a(b,Ct)}),ie&&wa(b,ae),X}function F(b,v,y,R){if(y==null)throw Error(r(151));for(var X=null,re=null,w=v,ae=v=0,se=null,oe=y.next();w!==null&&!oe.done;ae++,oe=y.next()){w.index>ae?(se=w,w=null):se=w.sibling;var Ct=S(b,w,oe.value,R);if(Ct===null){w===null&&(w=se);break}e&&w&&Ct.alternate===null&&a(b,w),v=u(Ct,v,ae),re===null?X=Ct:re.sibling=Ct,re=Ct,w=se}if(oe.done)return t(b,w),ie&&wa(b,ae),X;if(w===null){for(;!oe.done;ae++,oe=y.next())oe=D(b,oe.value,R),oe!==null&&(v=u(oe,v,ae),re===null?X=oe:re.sibling=oe,re=oe);return ie&&wa(b,ae),X}for(w=n(w);!oe.done;ae++,oe=y.next())oe=q(w,b,ae,oe.value,R),oe!==null&&(e&&oe.alternate!==null&&w.delete(oe.key===null?ae:oe.key),v=u(oe,v,ae),re===null?X=oe:re.sibling=oe,re=oe);return e&&w.forEach(function(Uv){return a(b,Uv)}),ie&&wa(b,ae),X}function he(b,v,y,R){if(typeof y=="object"&&y!==null&&y.type===Z&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:e:{for(var X=y.key;v!==null;){if(v.key===X){if(X=y.type,X===Z){if(v.tag===7){t(b,v.sibling),R=l(v,y.props.children),R.return=b,b=R;break e}}else if(v.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ue&&wt(X)===v.type){t(b,v.sibling),R=l(v,y.props),sl(R,y),R.return=b,b=R;break e}t(b,v);break}else a(b,v);v=v.sibling}y.type===Z?(R=Ht(y.props.children,b.mode,R,y.key),R.return=b,b=R):(R=iu(y.type,y.key,y.props,null,b.mode,R),sl(R,y),R.return=b,b=R)}return i(b);case k:e:{for(X=y.key;v!==null;){if(v.key===X)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(b,v.sibling),R=l(v,y.children||[]),R.return=b,b=R;break e}else{t(b,v);break}else a(b,v);v=v.sibling}R=Fs(y,b.mode,R),R.return=b,b=R}return i(b);case Ue:return y=wt(y),he(b,v,y,R)}if(Ta(y))return U(b,v,y,R);if(Pe(y)){if(X=Pe(y),typeof X!="function")throw Error(r(150));return y=X.call(y),F(b,v,y,R)}if(typeof y.then=="function")return he(b,v,pu(y),R);if(y.$$typeof===K)return he(b,v,cu(b,y),R);Au(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(t(b,v.sibling),R=l(v,y),R.return=b,b=R):(t(b,v),R=Ks(y,b.mode,R),R.return=b,b=R),i(b)):t(b,v)}return function(b,v,y,R){try{ul=0;var X=he(b,v,y,R);return jn=null,X}catch(w){if(w===yn||w===fu)throw w;var re=ca(29,w,null,b.mode);return re.lanes=R,re.return=b,re}finally{}}}var Xt=fc(!0),dc=fc(!1),dt=!1;function ii(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ri(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function At(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ce&2)!==0){var l=n.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a,a=su(e),Po(e,null,t),a}return uu(e,n,a,t),su(e)}function il(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,no(e,t)}}function oi(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var l=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?l=u=i:u=u.next=i,t=t.next}while(t!==null);u===null?l=u=a:u=u.next=a}else l=u=a;t={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var ci=!1;function rl(){if(ci){var e=bn;if(e!==null)throw e}}function ol(e,a,t,n){ci=!1;var l=e.updateQueue;dt=!1;var u=l.firstBaseUpdate,i=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var d=o,_=d.next;d.next=null,i===null?u=_:i.next=_,i=d;var M=e.alternate;M!==null&&(M=M.updateQueue,o=M.lastBaseUpdate,o!==i&&(o===null?M.firstBaseUpdate=_:o.next=_,M.lastBaseUpdate=d))}if(u!==null){var D=l.baseState;i=0,M=_=d=null,o=u;do{var S=o.lane&-536870913,q=S!==o.lane;if(q?(ue&S)===S:(n&S)===S){S!==0&&S===gn&&(ci=!0),M!==null&&(M=M.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var U=e,F=o;S=a;var he=t;switch(F.tag){case 1:if(U=F.payload,typeof U=="function"){D=U.call(he,D,S);break e}D=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=F.payload,S=typeof U=="function"?U.call(he,D,S):U,S==null)break e;D=E({},D,S);break e;case 2:dt=!0}}S=o.callback,S!==null&&(e.flags|=64,q&&(e.flags|=8192),q=l.callbacks,q===null?l.callbacks=[S]:q.push(S))}else q={lane:S,tag:o.tag,payload:o.payload,callback:o.callback,next:null},M===null?(_=M=q,d=D):M=M.next=q,i|=S;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;q=o,o=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);M===null&&(d=D),l.baseState=d,l.firstBaseUpdate=_,l.lastBaseUpdate=M,u===null&&(l.shared.lanes=0),yt|=i,e.lanes=i,e.memoizedState=D}}function pc(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function Ac(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)pc(t[e],a)}var _n=h(null),vu=h(0);function vc(e,a){e=at,B(vu,e),B(_n,a),at=e|a.baseLanes}function mi(){B(vu,at),B(_n,_n.current)}function fi(){at=vu.current,O(_n),O(vu)}var ma=h(null),Sa=null;function vt(e){var a=e.alternate;B(Re,Re.current&1),B(ma,e),Sa===null&&(a===null||_n.current!==null||a.memoizedState!==null)&&(Sa=e)}function di(e){B(Re,Re.current),B(ma,e),Sa===null&&(Sa=e)}function hc(e){e.tag===22?(B(Re,Re.current),B(ma,e),Sa===null&&(Sa=e)):ht()}function ht(){B(Re,Re.current),B(ma,ma.current)}function fa(e){O(ma),Sa===e&&(Sa=null),O(Re)}var Re=h(0);function hu(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||br(t)||yr(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Za=0,I=null,Ae=null,ze=null,gu=!1,Sn=!1,Zt=!1,bu=0,cl=0,qn=null,MA=0;function Je(){throw Error(r(321))}function pi(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!oa(e[t],a[t]))return!1;return!0}function Ai(e,a,t,n,l,u){return Za=u,I=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,x.H=e===null||e.memoizedState===null?em:Ci,Zt=!1,u=t(n,l),Zt=!1,Sn&&(u=bc(a,t,n,l)),gc(e),u}function gc(e){x.H=dl;var a=Ae!==null&&Ae.next!==null;if(Za=0,ze=Ae=I=null,gu=!1,cl=0,qn=null,a)throw Error(r(300));e===null||Ne||(e=e.dependencies,e!==null&&ou(e)&&(Ne=!0))}function bc(e,a,t,n){I=e;var l=0;do{if(Sn&&(qn=null),cl=0,Sn=!1,25<=l)throw Error(r(301));if(l+=1,ze=Ae=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}x.H=am,u=a(t,n)}while(Sn);return u}function xA(){var e=x.H,a=e.useState()[0];return a=typeof a.then=="function"?ml(a):a,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(I.flags|=1024),a}function vi(){var e=bu!==0;return bu=0,e}function hi(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function gi(e){if(gu){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}gu=!1}Za=0,ze=Ae=I=null,Sn=!1,cl=bu=0,qn=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?I.memoizedState=ze=e:ze=ze.next=e,ze}function De(){if(Ae===null){var e=I.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var a=ze===null?I.memoizedState:ze.next;if(a!==null)ze=a,Ae=e;else{if(e===null)throw I.alternate===null?Error(r(467)):Error(r(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},ze===null?I.memoizedState=ze=e:ze=ze.next=e}return ze}function yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(e){var a=cl;return cl+=1,qn===null&&(qn=[]),e=oc(qn,e,a),a=I,(ze===null?a.memoizedState:ze.next)===null&&(a=a.alternate,x.H=a===null||a.memoizedState===null?em:Ci),e}function ju(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ml(e);if(e.$$typeof===K)return we(e)}throw Error(r(438,String(e)))}function bi(e){var a=null,t=I.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=I.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=yu(),I.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=la;return a.index++,t}function Ka(e,a){return typeof a=="function"?a(e):a}function _u(e){var a=De();return yi(a,Ae,e)}function yi(e,a,t){var n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var l=e.baseQueue,u=n.pending;if(u!==null){if(l!==null){var i=l.next;l.next=u.next,u.next=i}a.baseQueue=l=u,n.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{a=l.next;var o=i=null,d=null,_=a,M=!1;do{var D=_.lane&-536870913;if(D!==_.lane?(ue&D)===D:(Za&D)===D){var S=_.revertLane;if(S===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),D===gn&&(M=!0);else if((Za&S)===S){_=_.next,S===gn&&(M=!0);continue}else D={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(o=d=D,i=u):d=d.next=D,I.lanes|=S,yt|=S;D=_.action,Zt&&t(u,D),u=_.hasEagerState?_.eagerState:t(u,D)}else S={lane:D,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(o=d=S,i=u):d=d.next=S,I.lanes|=D,yt|=D;_=_.next}while(_!==null&&_!==a);if(d===null?i=u:d.next=o,!oa(u,e.memoizedState)&&(Ne=!0,M&&(t=bn,t!==null)))throw t;e.memoizedState=u,e.baseState=i,e.baseQueue=d,n.lastRenderedState=u}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ji(e){var a=De(),t=a.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var n=t.dispatch,l=t.pending,u=a.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do u=e(u,i.action),i=i.next;while(i!==l);oa(u,a.memoizedState)||(Ne=!0),a.memoizedState=u,a.baseQueue===null&&(a.baseState=u),t.lastRenderedState=u}return[u,n]}function yc(e,a,t){var n=I,l=De(),u=ie;if(u){if(t===void 0)throw Error(r(407));t=t()}else t=a();var i=!oa((Ae||l).memoizedState,t);if(i&&(l.memoizedState=t,Ne=!0),l=l.queue,qi(Sc.bind(null,n,l,e),[e]),l.getSnapshot!==a||i||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,En(9,{destroy:void 0},_c.bind(null,n,l,t,a),null),be===null)throw Error(r(349));u||(Za&127)!==0||jc(n,a,t)}return t}function jc(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=I.updateQueue,a===null?(a=yu(),I.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function _c(e,a,t,n){a.value=t,a.getSnapshot=n,qc(a)&&Ec(e)}function Sc(e,a,t){return t(function(){qc(a)&&Ec(e)})}function qc(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!oa(e,t)}catch{return!0}}function Ec(e){var a=Ut(e,2);a!==null&&na(a,e,2)}function _i(e){var a=Fe();if(typeof e=="function"){var t=e;if(e=t(),Zt){st(!0);try{t()}finally{st(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:e},a}function Tc(e,a,t,n){return e.baseState=t,yi(e,Ae,typeof n=="function"?n:Ka)}function CA(e,a,t,n,l){if(Eu(e))throw Error(r(485));if(e=a.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};x.T!==null?t(!0):u.isTransition=!1,n(u),t=a.pending,t===null?(u.next=a.pending=u,Jc(a,u)):(u.next=t.next,a.pending=t.next=u)}}function Jc(e,a){var t=a.action,n=a.payload,l=e.state;if(a.isTransition){var u=x.T,i={};x.T=i;try{var o=t(l,n),d=x.S;d!==null&&d(i,o),Mc(e,a,o)}catch(_){Si(e,a,_)}finally{u!==null&&i.types!==null&&(u.types=i.types),x.T=u}}else try{u=t(l,n),Mc(e,a,u)}catch(_){Si(e,a,_)}}function Mc(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){xc(e,a,n)},function(n){return Si(e,a,n)}):xc(e,a,t)}function xc(e,a,t){a.status="fulfilled",a.value=t,Cc(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Jc(e,t)))}function Si(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,Cc(a),a=a.next;while(a!==n)}e.action=null}function Cc(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Rc(e,a){return a}function Dc(e,a){if(ie){var t=be.formState;if(t!==null){e:{var n=I;if(ie){if(ye){a:{for(var l=ye,u=_a;l.nodeType!==8;){if(!u){l=null;break a}if(l=qa(l.nextSibling),l===null){l=null;break a}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){ye=qa(l.nextSibling),n=l.data==="F!";break e}}mt(n)}n=!1}n&&(a=t[0])}}return t=Fe(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rc,lastRenderedState:a},t.queue=n,t=Wc.bind(null,I,n),n.dispatch=t,n=_i(!1),u=xi.bind(null,I,!1,n.queue),n=Fe(),l={state:a,dispatch:null,action:e,pending:null},n.queue=l,t=CA.bind(null,I,l,u,t),l.dispatch=t,n.memoizedState=e,[a,t,!1]}function Oc(e){var a=De();return zc(a,Ae,e)}function zc(e,a,t){if(a=yi(e,a,Rc)[0],e=_u(Ka)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=ml(a)}catch(i){throw i===yn?fu:i}else n=a;a=De();var l=a.queue,u=l.dispatch;return t!==a.memoizedState&&(I.flags|=2048,En(9,{destroy:void 0},RA.bind(null,l,t),null)),[n,u,e]}function RA(e,a){e.action=a}function Nc(e){var a=De(),t=Ae;if(t!==null)return zc(a,t,e);De(),a=a.memoizedState,t=De();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function En(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=I.updateQueue,a===null&&(a=yu(),I.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function Lc(){return De().memoizedState}function Su(e,a,t,n){var l=Fe();I.flags|=e,l.memoizedState=En(1|a,{destroy:void 0},t,n===void 0?null:n)}function qu(e,a,t,n){var l=De();n=n===void 0?null:n;var u=l.memoizedState.inst;Ae!==null&&n!==null&&pi(n,Ae.memoizedState.deps)?l.memoizedState=En(a,u,t,n):(I.flags|=e,l.memoizedState=En(1|a,u,t,n))}function Bc(e,a){Su(8390656,8,e,a)}function qi(e,a){qu(2048,8,e,a)}function DA(e){I.flags|=4;var a=I.updateQueue;if(a===null)a=yu(),I.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Uc(e){var a=De().memoizedState;return DA({ref:a,nextImpl:e}),function(){if((ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}function Hc(e,a){return qu(4,2,e,a)}function Gc(e,a){return qu(4,4,e,a)}function Yc(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Qc(e,a,t){t=t!=null?t.concat([e]):null,qu(4,4,Yc.bind(null,a,e),t)}function Ei(){}function Vc(e,a){var t=De();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&pi(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function wc(e,a){var t=De();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&pi(a,n[1]))return n[0];if(n=e(),Zt){st(!0);try{e()}finally{st(!1)}}return t.memoizedState=[n,a],n}function Ti(e,a,t){return t===void 0||(Za&1073741824)!==0&&(ue&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=km(),I.lanes|=e,yt|=e,t)}function kc(e,a,t,n){return oa(t,a)?t:_n.current!==null?(e=Ti(e,t,n),oa(e,a)||(Ne=!0),e):(Za&42)===0||(Za&1073741824)!==0&&(ue&261930)===0?(Ne=!0,e.memoizedState=t):(e=km(),I.lanes|=e,yt|=e,a)}function Xc(e,a,t,n,l){var u=L.p;L.p=u!==0&&8>u?u:8;var i=x.T,o={};x.T=o,xi(e,!1,a,t);try{var d=l(),_=x.S;if(_!==null&&_(o,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var M=JA(d,n);fl(e,a,M,Aa(e))}else fl(e,a,n,Aa(e))}catch(D){fl(e,a,{then:function(){},status:"rejected",reason:D},Aa())}finally{L.p=u,i!==null&&o.types!==null&&(i.types=o.types),x.T=i}}function OA(){}function Ji(e,a,t,n){if(e.tag!==5)throw Error(r(476));var l=Zc(e).queue;Xc(e,l,a,P,t===null?OA:function(){return Kc(e),t(n)})}function Zc(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:P},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Kc(e){var a=Zc(e);a.next===null&&(a=e.alternate.memoizedState),fl(e,a.next.queue,{},Aa())}function Mi(){return we(xl)}function Fc(){return De().memoizedState}function Pc(){return De().memoizedState}function zA(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Aa();e=pt(t);var n=At(a,e,t);n!==null&&(na(n,a,t),il(n,a,t)),a={cache:ni()},e.payload=a;return}a=a.return}}function NA(e,a,t){var n=Aa();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Eu(e)?$c(a,t):(t=Xs(e,a,t,n),t!==null&&(na(t,e,n),Ic(t,a,n)))}function Wc(e,a,t){var n=Aa();fl(e,a,t,n)}function fl(e,a,t,n){var l={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))$c(a,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=a.lastRenderedReducer,u!==null))try{var i=a.lastRenderedState,o=u(i,t);if(l.hasEagerState=!0,l.eagerState=o,oa(o,i))return uu(e,a,l,0),be===null&&lu(),!1}catch{}finally{}if(t=Xs(e,a,l,n),t!==null)return na(t,e,n),Ic(t,a,n),!0}return!1}function xi(e,a,t,n){if(n={lane:2,revertLane:ir(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(e)){if(a)throw Error(r(479))}else a=Xs(e,t,n,2),a!==null&&na(a,e,2)}function Eu(e){var a=e.alternate;return e===I||a!==null&&a===I}function $c(e,a){Sn=gu=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Ic(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,no(e,t)}}var dl={readContext:we,use:ju,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};dl.useEffectEvent=Je;var em={readContext:we,use:ju,useCallback:function(e,a){return Fe().memoizedState=[e,a===void 0?null:a],e},useContext:we,useEffect:Bc,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Su(4194308,4,Yc.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Su(4194308,4,e,a)},useInsertionEffect:function(e,a){Su(4,2,e,a)},useMemo:function(e,a){var t=Fe();a=a===void 0?null:a;var n=e();if(Zt){st(!0);try{e()}finally{st(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=Fe();if(t!==void 0){var l=t(a);if(Zt){st(!0);try{t(a)}finally{st(!1)}}}else l=a;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=NA.bind(null,I,e),[n.memoizedState,e]},useRef:function(e){var a=Fe();return e={current:e},a.memoizedState=e},useState:function(e){e=_i(e);var a=e.queue,t=Wc.bind(null,I,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Ei,useDeferredValue:function(e,a){var t=Fe();return Ti(t,e,a)},useTransition:function(){var e=_i(!1);return e=Xc.bind(null,I,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=I,l=Fe();if(ie){if(t===void 0)throw Error(r(407));t=t()}else{if(t=a(),be===null)throw Error(r(349));(ue&127)!==0||jc(n,a,t)}l.memoizedState=t;var u={value:t,getSnapshot:a};return l.queue=u,Bc(Sc.bind(null,n,u,e),[e]),n.flags|=2048,En(9,{destroy:void 0},_c.bind(null,n,u,t,a),null),t},useId:function(){var e=Fe(),a=be.identifierPrefix;if(ie){var t=Da,n=Ra;t=(n&~(1<<32-ra(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=bu++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=MA++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Mi,useFormState:Dc,useActionState:Dc,useOptimistic:function(e){var a=Fe();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=xi.bind(null,I,!0,t),t.dispatch=a,[e,a]},useMemoCache:bi,useCacheRefresh:function(){return Fe().memoizedState=zA.bind(null,I)},useEffectEvent:function(e){var a=Fe(),t={impl:e};return a.memoizedState=t,function(){if((ce&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}},Ci={readContext:we,use:ju,useCallback:Vc,useContext:we,useEffect:qi,useImperativeHandle:Qc,useInsertionEffect:Hc,useLayoutEffect:Gc,useMemo:wc,useReducer:_u,useRef:Lc,useState:function(){return _u(Ka)},useDebugValue:Ei,useDeferredValue:function(e,a){var t=De();return kc(t,Ae.memoizedState,e,a)},useTransition:function(){var e=_u(Ka)[0],a=De().memoizedState;return[typeof e=="boolean"?e:ml(e),a]},useSyncExternalStore:yc,useId:Fc,useHostTransitionStatus:Mi,useFormState:Oc,useActionState:Oc,useOptimistic:function(e,a){var t=De();return Tc(t,Ae,e,a)},useMemoCache:bi,useCacheRefresh:Pc};Ci.useEffectEvent=Uc;var am={readContext:we,use:ju,useCallback:Vc,useContext:we,useEffect:qi,useImperativeHandle:Qc,useInsertionEffect:Hc,useLayoutEffect:Gc,useMemo:wc,useReducer:ji,useRef:Lc,useState:function(){return ji(Ka)},useDebugValue:Ei,useDeferredValue:function(e,a){var t=De();return Ae===null?Ti(t,e,a):kc(t,Ae.memoizedState,e,a)},useTransition:function(){var e=ji(Ka)[0],a=De().memoizedState;return[typeof e=="boolean"?e:ml(e),a]},useSyncExternalStore:yc,useId:Fc,useHostTransitionStatus:Mi,useFormState:Nc,useActionState:Nc,useOptimistic:function(e,a){var t=De();return Ae!==null?Tc(t,Ae,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:bi,useCacheRefresh:Pc};am.useEffectEvent=Uc;function Ri(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:E({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Di={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=Aa(),l=pt(n);l.payload=a,t!=null&&(l.callback=t),a=At(e,l,n),a!==null&&(na(a,e,n),il(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=Aa(),l=pt(n);l.tag=1,l.payload=a,t!=null&&(l.callback=t),a=At(e,l,n),a!==null&&(na(a,e,n),il(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Aa(),n=pt(t);n.tag=2,a!=null&&(n.callback=a),a=At(e,n,t),a!==null&&(na(a,e,t),il(a,e,t))}};function tm(e,a,t,n,l,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,i):a.prototype&&a.prototype.isPureReactComponent?!In(t,n)||!In(l,u):!0}function nm(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Di.enqueueReplaceState(a,a.state,null)}function Kt(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=E({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function lm(e){nu(e)}function um(e){console.error(e)}function sm(e){nu(e)}function Tu(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function im(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Oi(e,a,t){return t=pt(t),t.tag=3,t.payload={element:null},t.callback=function(){Tu(e,a)},t}function rm(e){return e=pt(e),e.tag=3,e}function om(e,a,t,n){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;e.payload=function(){return l(u)},e.callback=function(){im(a,t,n)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){im(a,t,n),typeof l!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function LA(e,a,t,n,l){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&hn(a,t,l,!0),t=ma.current,t!==null){switch(t.tag){case 31:case 13:return Sa===null?Uu():t.alternate===null&&Me===0&&(Me=3),t.flags&=-257,t.flags|=65536,t.lanes=l,n===du?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),lr(e,n,l)),!1;case 22:return t.flags|=65536,n===du?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),lr(e,n,l)),!1}throw Error(r(435,t.tag))}return lr(e,n,l),Uu(),!1}if(ie)return a=ma.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=l,n!==$s&&(e=Error(r(422),{cause:n}),tl(ba(e,t)))):(n!==$s&&(a=Error(r(423),{cause:n}),tl(ba(a,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=ba(n,t),l=Oi(e.stateNode,n,l),oi(e,l),Me!==4&&(Me=2)),!1;var u=Error(r(520),{cause:n});if(u=ba(u,t),jl===null?jl=[u]:jl.push(u),Me!==4&&(Me=2),a===null)return!0;n=ba(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=Oi(t.stateNode,n,e),oi(t,e),!1;case 1:if(a=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(jt===null||!jt.has(u))))return t.flags|=65536,l&=-l,t.lanes|=l,l=rm(l),om(l,e,t,n),oi(t,l),!1}t=t.return}while(t!==null);return!1}var zi=Error(r(461)),Ne=!1;function ke(e,a,t,n){a.child=e===null?dc(a,null,t,n):Xt(a,e.child,t,n)}function cm(e,a,t,n,l){t=t.render;var u=a.ref;if("ref"in n){var i={};for(var o in n)o!=="ref"&&(i[o]=n[o])}else i=n;return Qt(a),n=Ai(e,a,t,i,u,l),o=vi(),e!==null&&!Ne?(hi(e,a,l),Fa(e,a,l)):(ie&&o&&Ps(a),a.flags|=1,ke(e,a,n,l),a.child)}function mm(e,a,t,n,l){if(e===null){var u=t.type;return typeof u=="function"&&!Zs(u)&&u.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=u,fm(e,a,u,n,l)):(e=iu(t.type,null,n,a,a.mode,l),e.ref=a.ref,e.return=a,a.child=e)}if(u=e.child,!Qi(e,l)){var i=u.memoizedProps;if(t=t.compare,t=t!==null?t:In,t(i,n)&&e.ref===a.ref)return Fa(e,a,l)}return a.flags|=1,e=Va(u,n),e.ref=a.ref,e.return=a,a.child=e}function fm(e,a,t,n,l){if(e!==null){var u=e.memoizedProps;if(In(u,n)&&e.ref===a.ref)if(Ne=!1,a.pendingProps=n=u,Qi(e,l))(e.flags&131072)!==0&&(Ne=!0);else return a.lanes=e.lanes,Fa(e,a,l)}return Ni(e,a,t,n,l)}function dm(e,a,t,n){var l=n.children,u=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(u=u!==null?u.baseLanes|t:t,e!==null){for(n=a.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~u}else n=0,a.child=null;return pm(e,a,u,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&mu(a,u!==null?u.cachePool:null),u!==null?vc(a,u):mi(),hc(a);else return n=a.lanes=536870912,pm(e,a,u!==null?u.baseLanes|t:t,t,n)}else u!==null?(mu(a,u.cachePool),vc(a,u),ht(),a.memoizedState=null):(e!==null&&mu(a,null),mi(),ht());return ke(e,a,l,t),a.child}function pl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function pm(e,a,t,n,l){var u=ui();return u=u===null?null:{parent:Oe._currentValue,pool:u},a.memoizedState={baseLanes:t,cachePool:u},e!==null&&mu(a,null),mi(),hc(a),e!==null&&hn(e,a,n,!0),a.childLanes=l,null}function Ju(e,a){return a=xu({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Am(e,a,t){return Xt(a,e.child,null,t),e=Ju(a,a.pendingProps),e.flags|=2,fa(a),a.memoizedState=null,e}function BA(e,a,t){var n=a.pendingProps,l=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ie){if(n.mode==="hidden")return e=Ju(a,n),a.lanes=536870912,pl(null,e);if(di(a),(e=ye)?(e=Mf(e,_a),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ot!==null?{id:Ra,overflow:Da}:null,retryLane:536870912,hydrationErrors:null},t=$o(e),t.return=a,a.child=t,Ve=a,ye=null)):e=null,e===null)throw mt(a);return a.lanes=536870912,null}return Ju(a,n)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(di(a),l)if(a.flags&256)a.flags&=-257,a=Am(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(r(558));else if(Ne||hn(e,a,t,!1),l=(t&e.childLanes)!==0,Ne||l){if(n=be,n!==null&&(i=lo(n,t),i!==0&&i!==u.retryLane))throw u.retryLane=i,Ut(e,i),na(n,e,i),zi;Uu(),a=Am(e,a,t)}else e=u.treeContext,ye=qa(i.nextSibling),Ve=a,ie=!0,ct=null,_a=!1,e!==null&&ac(a,e),a=Ju(a,n),a.flags|=4096;return a}return e=Va(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Mu(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Ni(e,a,t,n,l){return Qt(a),t=Ai(e,a,t,n,void 0,l),n=vi(),e!==null&&!Ne?(hi(e,a,l),Fa(e,a,l)):(ie&&n&&Ps(a),a.flags|=1,ke(e,a,t,l),a.child)}function vm(e,a,t,n,l,u){return Qt(a),a.updateQueue=null,t=bc(a,n,t,l),gc(e),n=vi(),e!==null&&!Ne?(hi(e,a,u),Fa(e,a,u)):(ie&&n&&Ps(a),a.flags|=1,ke(e,a,t,u),a.child)}function hm(e,a,t,n,l){if(Qt(a),a.stateNode===null){var u=dn,i=t.contextType;typeof i=="object"&&i!==null&&(u=we(i)),u=new t(n,u),a.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Di,a.stateNode=u,u._reactInternals=a,u=a.stateNode,u.props=n,u.state=a.memoizedState,u.refs={},ii(a),i=t.contextType,u.context=typeof i=="object"&&i!==null?we(i):dn,u.state=a.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ri(a,t,i,n),u.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Di.enqueueReplaceState(u,u.state,null),ol(a,n,u,l),rl(),u.state=a.memoizedState),typeof u.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){u=a.stateNode;var o=a.memoizedProps,d=Kt(t,o);u.props=d;var _=u.context,M=t.contextType;i=dn,typeof M=="object"&&M!==null&&(i=we(M));var D=t.getDerivedStateFromProps;M=typeof D=="function"||typeof u.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,M||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o||_!==i)&&nm(a,u,n,i),dt=!1;var S=a.memoizedState;u.state=S,ol(a,n,u,l),rl(),_=a.memoizedState,o||S!==_||dt?(typeof D=="function"&&(Ri(a,t,D,n),_=a.memoizedState),(d=dt||tm(a,t,d,n,S,_,i))?(M||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=_),u.props=n,u.state=_,u.context=i,n=d):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{u=a.stateNode,ri(e,a),i=a.memoizedProps,M=Kt(t,i),u.props=M,D=a.pendingProps,S=u.context,_=t.contextType,d=dn,typeof _=="object"&&_!==null&&(d=we(_)),o=t.getDerivedStateFromProps,(_=typeof o=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==D||S!==d)&&nm(a,u,n,d),dt=!1,S=a.memoizedState,u.state=S,ol(a,n,u,l),rl();var q=a.memoizedState;i!==D||S!==q||dt||e!==null&&e.dependencies!==null&&ou(e.dependencies)?(typeof o=="function"&&(Ri(a,t,o,n),q=a.memoizedState),(M=dt||tm(a,t,M,n,S,q,d)||e!==null&&e.dependencies!==null&&ou(e.dependencies))?(_||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,q,d),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,q,d)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&S===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&S===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=q),u.props=n,u.state=q,u.context=d,n=M):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&S===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&S===e.memoizedState||(a.flags|=1024),n=!1)}return u=n,Mu(e,a),n=(a.flags&128)!==0,u||n?(u=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:u.render(),a.flags|=1,e!==null&&n?(a.child=Xt(a,e.child,null,l),a.child=Xt(a,null,t,l)):ke(e,a,t,l),a.memoizedState=u.state,e=a.child):e=Fa(e,a,l),e}function gm(e,a,t,n){return Gt(),a.flags|=256,ke(e,a,t,n),a.child}var Li={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bi(e){return{baseLanes:e,cachePool:ic()}}function Ui(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=pa),e}function bm(e,a,t){var n=a.pendingProps,l=!1,u=(a.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),i&&(l=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,e===null){if(ie){if(l?vt(a):ht(),(e=ye)?(e=Mf(e,_a),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ot!==null?{id:Ra,overflow:Da}:null,retryLane:536870912,hydrationErrors:null},t=$o(e),t.return=a,a.child=t,Ve=a,ye=null)):e=null,e===null)throw mt(a);return yr(e)?a.lanes=32:a.lanes=536870912,null}var o=n.children;return n=n.fallback,l?(ht(),l=a.mode,o=xu({mode:"hidden",children:o},l),n=Ht(n,l,t,null),o.return=a,n.return=a,o.sibling=n,a.child=o,n=a.child,n.memoizedState=Bi(t),n.childLanes=Ui(e,i,t),a.memoizedState=Li,pl(null,n)):(vt(a),Hi(a,o))}var d=e.memoizedState;if(d!==null&&(o=d.dehydrated,o!==null)){if(u)a.flags&256?(vt(a),a.flags&=-257,a=Gi(e,a,t)):a.memoizedState!==null?(ht(),a.child=e.child,a.flags|=128,a=null):(ht(),o=n.fallback,l=a.mode,n=xu({mode:"visible",children:n.children},l),o=Ht(o,l,t,null),o.flags|=2,n.return=a,o.return=a,n.sibling=o,a.child=n,Xt(a,e.child,null,t),n=a.child,n.memoizedState=Bi(t),n.childLanes=Ui(e,i,t),a.memoizedState=Li,a=pl(null,n));else if(vt(a),yr(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var _=i.dgst;i=_,n=Error(r(419)),n.stack="",n.digest=i,tl({value:n,source:null,stack:null}),a=Gi(e,a,t)}else if(Ne||hn(e,a,t,!1),i=(t&e.childLanes)!==0,Ne||i){if(i=be,i!==null&&(n=lo(i,t),n!==0&&n!==d.retryLane))throw d.retryLane=n,Ut(e,n),na(i,e,n),zi;br(o)||Uu(),a=Gi(e,a,t)}else br(o)?(a.flags|=192,a.child=e.child,a=null):(e=d.treeContext,ye=qa(o.nextSibling),Ve=a,ie=!0,ct=null,_a=!1,e!==null&&ac(a,e),a=Hi(a,n.children),a.flags|=4096);return a}return l?(ht(),o=n.fallback,l=a.mode,d=e.child,_=d.sibling,n=Va(d,{mode:"hidden",children:n.children}),n.subtreeFlags=d.subtreeFlags&65011712,_!==null?o=Va(_,o):(o=Ht(o,l,t,null),o.flags|=2),o.return=a,n.return=a,n.sibling=o,a.child=n,pl(null,n),n=a.child,o=e.child.memoizedState,o===null?o=Bi(t):(l=o.cachePool,l!==null?(d=Oe._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=ic(),o={baseLanes:o.baseLanes|t,cachePool:l}),n.memoizedState=o,n.childLanes=Ui(e,i,t),a.memoizedState=Li,pl(e.child,n)):(vt(a),t=e.child,e=t.sibling,t=Va(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(i=a.deletions,i===null?(a.deletions=[e],a.flags|=16):i.push(e)),a.child=t,a.memoizedState=null,t)}function Hi(e,a){return a=xu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function xu(e,a){return e=ca(22,e,null,a),e.lanes=0,e}function Gi(e,a,t){return Xt(a,e.child,null,t),e=Hi(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function ym(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),ai(e.return,a,t)}function Yi(e,a,t,n,l,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:l,treeForkCount:u}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=t,i.tailMode=l,i.treeForkCount=u)}function jm(e,a,t){var n=a.pendingProps,l=n.revealOrder,u=n.tail;n=n.children;var i=Re.current,o=(i&2)!==0;if(o?(i=i&1|2,a.flags|=128):i&=1,B(Re,i),ke(e,a,n,t),n=ie?al:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ym(e,t,a);else if(e.tag===19)ym(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=a.child,l=null;t!==null;)e=t.alternate,e!==null&&hu(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=a.child,a.child=null):(l=t.sibling,t.sibling=null),Yi(a,!1,l,t,u,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=a.child,a.child=null;l!==null;){if(e=l.alternate,e!==null&&hu(e)===null){a.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Yi(a,!0,t,null,u,n);break;case"together":Yi(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function Fa(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),yt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(hn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,t=Va(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Va(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Qi(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&ou(e)))}function UA(e,a,t){switch(a.tag){case 3:Ke(a,a.stateNode.containerInfo),ft(a,Oe,e.memoizedState.cache),Gt();break;case 27:case 5:Gn(a);break;case 4:Ke(a,a.stateNode.containerInfo);break;case 10:ft(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,di(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(vt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?bm(e,a,t):(vt(a),e=Fa(e,a,t),e!==null?e.sibling:null);vt(a);break;case 19:var l=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(hn(e,a,t,!1),n=(t&a.childLanes)!==0),l){if(n)return jm(e,a,t);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(Re,Re.current),n)break;return null;case 22:return a.lanes=0,dm(e,a,t,a.pendingProps);case 24:ft(a,Oe,e.memoizedState.cache)}return Fa(e,a,t)}function _m(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ne=!0;else{if(!Qi(e,t)&&(a.flags&128)===0)return Ne=!1,UA(e,a,t);Ne=(e.flags&131072)!==0}else Ne=!1,ie&&(a.flags&1048576)!==0&&ec(a,al,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=wt(a.elementType),a.type=e,typeof e=="function")Zs(e)?(n=Kt(e,n),a.tag=1,a=hm(null,a,e,n,t)):(a.tag=0,a=Ni(null,a,e,n,t));else{if(e!=null){var l=e.$$typeof;if(l===_e){a.tag=11,a=cm(null,a,e,n,t);break e}else if(l===ee){a.tag=14,a=mm(null,a,e,n,t);break e}}throw a=Ha(e)||e,Error(r(306,a,""))}}return a;case 0:return Ni(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,l=Kt(n,a.pendingProps),hm(e,a,n,l,t);case 3:e:{if(Ke(a,a.stateNode.containerInfo),e===null)throw Error(r(387));n=a.pendingProps;var u=a.memoizedState;l=u.element,ri(e,a),ol(a,n,null,t);var i=a.memoizedState;if(n=i.cache,ft(a,Oe,n),n!==u.cache&&ti(a,[Oe],t,!0),rl(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=u,a.memoizedState=u,a.flags&256){a=gm(e,a,n,t);break e}else if(n!==l){l=ba(Error(r(424)),a),tl(l),a=gm(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=qa(e.firstChild),Ve=a,ie=!0,ct=null,_a=!0,t=dc(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Gt(),n===l){a=Fa(e,a,t);break e}ke(e,a,n,t)}a=a.child}return a;case 26:return Mu(e,a),e===null?(t=zf(a.type,null,a.pendingProps,null))?a.memoizedState=t:ie||(t=a.type,e=a.pendingProps,n=ku(te.current).createElement(t),n[Qe]=a,n[We]=e,Xe(n,t,e),Ge(n),a.stateNode=n):a.memoizedState=zf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Gn(a),e===null&&ie&&(n=a.stateNode=Rf(a.type,a.pendingProps,te.current),Ve=a,_a=!0,l=ye,Et(a.type)?(jr=l,ye=qa(n.firstChild)):ye=l),ke(e,a,a.pendingProps.children,t),Mu(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ie&&((l=n=ye)&&(n=pv(n,a.type,a.pendingProps,_a),n!==null?(a.stateNode=n,Ve=a,ye=qa(n.firstChild),_a=!1,l=!0):l=!1),l||mt(a)),Gn(a),l=a.type,u=a.pendingProps,i=e!==null?e.memoizedProps:null,n=u.children,vr(l,u)?n=null:i!==null&&vr(l,i)&&(a.flags|=32),a.memoizedState!==null&&(l=Ai(e,a,xA,null,null,t),xl._currentValue=l),Mu(e,a),ke(e,a,n,t),a.child;case 6:return e===null&&ie&&((e=t=ye)&&(t=Av(t,a.pendingProps,_a),t!==null?(a.stateNode=t,Ve=a,ye=null,e=!0):e=!1),e||mt(a)),null;case 13:return bm(e,a,t);case 4:return Ke(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Xt(a,null,n,t):ke(e,a,n,t),a.child;case 11:return cm(e,a,a.type,a.pendingProps,t);case 7:return ke(e,a,a.pendingProps,t),a.child;case 8:return ke(e,a,a.pendingProps.children,t),a.child;case 12:return ke(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,ft(a,a.type,n.value),ke(e,a,n.children,t),a.child;case 9:return l=a.type._context,n=a.pendingProps.children,Qt(a),l=we(l),n=n(l),a.flags|=1,ke(e,a,n,t),a.child;case 14:return mm(e,a,a.type,a.pendingProps,t);case 15:return fm(e,a,a.type,a.pendingProps,t);case 19:return jm(e,a,t);case 31:return BA(e,a,t);case 22:return dm(e,a,t,a.pendingProps);case 24:return Qt(a),n=we(Oe),e===null?(l=ui(),l===null&&(l=be,u=ni(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=t),l=u),a.memoizedState={parent:n,cache:l},ii(a),ft(a,Oe,l)):((e.lanes&t)!==0&&(ri(e,a),ol(a,null,null,t),rl()),l=e.memoizedState,u=a.memoizedState,l.parent!==n?(l={parent:n,cache:n},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),ft(a,Oe,n)):(n=u.cache,ft(a,Oe,n),n!==l.cache&&ti(a,[Oe],t,!0))),ke(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function Pa(e){e.flags|=4}function Vi(e,a,t,n,l){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Fm())e.flags|=8192;else throw kt=du,si}else e.flags&=-16777217}function Sm(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hf(a))if(Fm())e.flags|=8192;else throw kt=du,si}function Cu(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?ao():536870912,e.lanes|=a,xn|=a)}function Al(e,a){if(!ie)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function je(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function HA(e,a,t){var n=a.pendingProps;switch(Ws(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(a),null;case 1:return je(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Xa(Oe),Ce(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(vn(a)?Pa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Is())),je(a),null;case 26:var l=a.type,u=a.memoizedState;return e===null?(Pa(a),u!==null?(je(a),Sm(a,u)):(je(a),Vi(a,l,null,n,t))):u?u!==e.memoizedState?(Pa(a),je(a),Sm(a,u)):(je(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&Pa(a),je(a),Vi(a,l,e,n,t)),null;case 27:if(Yl(a),t=te.current,l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Pa(a);else{if(!n){if(a.stateNode===null)throw Error(r(166));return je(a),null}e=Y.current,vn(a)?tc(a):(e=Rf(l,n,t),a.stateNode=e,Pa(a))}return je(a),null;case 5:if(Yl(a),l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Pa(a);else{if(!n){if(a.stateNode===null)throw Error(r(166));return je(a),null}if(u=Y.current,vn(a))tc(a);else{var i=ku(te.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(l,{is:n.is}):i.createElement(l)}}u[Qe]=a,u[We]=n;e:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=u;e:switch(Xe(u,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Pa(a)}}return je(a),Vi(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&Pa(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(r(166));if(e=te.current,vn(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,l=Ve,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Qe]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||yf(e.nodeValue,t)),e||mt(a,!0)}else e=ku(e).createTextNode(n),e[Qe]=a,a.stateNode=e}return je(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=vn(a),t!==null){if(e===null){if(!n)throw Error(r(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Qe]=a}else Gt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;je(a),e=!1}else t=Is(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(fa(a),a):(fa(a),null);if((a.flags&128)!==0)throw Error(r(558))}return je(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=vn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Qe]=a}else Gt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;je(a),l=!1}else l=Is(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return a.flags&256?(fa(a),a):(fa(a),null)}return fa(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==l&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Cu(a,a.updateQueue),je(a),null);case 4:return Ce(),e===null&&mr(a.stateNode.containerInfo),je(a),null;case 10:return Xa(a.type),je(a),null;case 19:if(O(Re),n=a.memoizedState,n===null)return je(a),null;if(l=(a.flags&128)!==0,u=n.rendering,u===null)if(l)Al(n,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(u=hu(e),u!==null){for(a.flags|=128,Al(n,!1),e=u.updateQueue,a.updateQueue=e,Cu(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Wo(t,e),t=t.sibling;return B(Re,Re.current&1|2),ie&&wa(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&sa()>Nu&&(a.flags|=128,l=!0,Al(n,!1),a.lanes=4194304)}else{if(!l)if(e=hu(u),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Cu(a,e),Al(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!ie)return je(a),null}else 2*sa()-n.renderingStartTime>Nu&&t!==536870912&&(a.flags|=128,l=!0,Al(n,!1),a.lanes=4194304);n.isBackwards?(u.sibling=a.child,a.child=u):(e=n.last,e!==null?e.sibling=u:a.child=u,n.last=u)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=sa(),e.sibling=null,t=Re.current,B(Re,l?t&1|2:t&1),ie&&wa(a,n.treeForkCount),e):(je(a),null);case 22:case 23:return fa(a),fi(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(je(a),a.subtreeFlags&6&&(a.flags|=8192)):je(a),t=a.updateQueue,t!==null&&Cu(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&O(Vt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Xa(Oe),je(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function GA(e,a){switch(Ws(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Xa(Oe),Ce(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Yl(a),null;case 31:if(a.memoizedState!==null){if(fa(a),a.alternate===null)throw Error(r(340));Gt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(fa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Gt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return O(Re),null;case 4:return Ce(),null;case 10:return Xa(a.type),null;case 22:case 23:return fa(a),fi(),e!==null&&O(Vt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Xa(Oe),null;case 25:return null;default:return null}}function qm(e,a){switch(Ws(a),a.tag){case 3:Xa(Oe),Ce();break;case 26:case 27:case 5:Yl(a);break;case 4:Ce();break;case 31:a.memoizedState!==null&&fa(a);break;case 13:fa(a);break;case 19:O(Re);break;case 10:Xa(a.type);break;case 22:case 23:fa(a),fi(),e!==null&&O(Vt);break;case 24:Xa(Oe)}}function vl(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var l=n.next;t=l;do{if((t.tag&e)===e){n=void 0;var u=t.create,i=t.inst;n=u(),i.destroy=n}t=t.next}while(t!==l)}}catch(o){de(a,a.return,o)}}function gt(e,a,t){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var u=l.next;n=u;do{if((n.tag&e)===e){var i=n.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,l=a;var d=t,_=o;try{_()}catch(M){de(l,d,M)}}}n=n.next}while(n!==u)}}catch(M){de(a,a.return,M)}}function Em(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Ac(a,t)}catch(n){de(e,e.return,n)}}}function Tm(e,a,t){t.props=Kt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){de(e,a,n)}}function hl(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(l){de(e,a,l)}}function Oa(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(l){de(e,a,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){de(e,a,l)}else t.current=null}function Jm(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(l){de(e,e.return,l)}}function wi(e,a,t){try{var n=e.stateNode;rv(n,e.type,t,a),n[We]=a}catch(l){de(e,e.return,l)}}function Mm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Et(e.type)||e.tag===4}function ki(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Et(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xi(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ya));else if(n!==4&&(n===27&&Et(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(Xi(e,a,t),e=e.sibling;e!==null;)Xi(e,a,t),e=e.sibling}function Ru(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&Et(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Ru(e,a,t),e=e.sibling;e!==null;)Ru(e,a,t),e=e.sibling}function xm(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,l=a.attributes;l.length;)a.removeAttributeNode(l[0]);Xe(a,n,t),a[Qe]=e,a[We]=t}catch(u){de(e,e.return,u)}}var Wa=!1,Le=!1,Zi=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function YA(e,a){if(e=e.containerInfo,pr=$u,e=Qo(e),Gs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var l=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var i=0,o=-1,d=-1,_=0,M=0,D=e,S=null;a:for(;;){for(var q;D!==t||l!==0&&D.nodeType!==3||(o=i+l),D!==u||n!==0&&D.nodeType!==3||(d=i+n),D.nodeType===3&&(i+=D.nodeValue.length),(q=D.firstChild)!==null;)S=D,D=q;for(;;){if(D===e)break a;if(S===t&&++_===l&&(o=i),S===u&&++M===n&&(d=i),(q=D.nextSibling)!==null)break;D=S,S=D.parentNode}D=q}t=o===-1||d===-1?null:{start:o,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ar={focusedElem:e,selectionRange:t},$u=!1,Ye=a;Ye!==null;)if(a=Ye,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ye=e;else for(;Ye!==null;){switch(a=Ye,u=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,t=a,l=u.memoizedProps,u=u.memoizedState,n=t.stateNode;try{var U=Kt(t.type,l);e=n.getSnapshotBeforeUpdate(U,u),n.__reactInternalSnapshotBeforeUpdate=e}catch(F){de(t,t.return,F)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)gr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,Ye=e;break}Ye=a.return}}function Rm(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ia(e,t),n&4&&vl(5,t);break;case 1:if(Ia(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(i){de(t,t.return,i)}else{var l=Kt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(l,a,e.__reactInternalSnapshotBeforeUpdate)}catch(i){de(t,t.return,i)}}n&64&&Em(t),n&512&&hl(t,t.return);break;case 3:if(Ia(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Ac(e,a)}catch(i){de(t,t.return,i)}}break;case 27:a===null&&n&4&&xm(t);case 26:case 5:Ia(e,t),a===null&&n&4&&Jm(t),n&512&&hl(t,t.return);break;case 12:Ia(e,t);break;case 31:Ia(e,t),n&4&&zm(e,t);break;case 13:Ia(e,t),n&4&&Nm(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=PA.bind(null,t),vv(e,t))));break;case 22:if(n=t.memoizedState!==null||Wa,!n){a=a!==null&&a.memoizedState!==null||Le,l=Wa;var u=Le;Wa=n,(Le=a)&&!u?et(e,t,(t.subtreeFlags&8772)!==0):Ia(e,t),Wa=l,Le=u}break;case 30:break;default:Ia(e,t)}}function Dm(e){var a=e.alternate;a!==null&&(e.alternate=null,Dm(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ss(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,Ie=!1;function $a(e,a,t){for(t=t.child;t!==null;)Om(e,a,t),t=t.sibling}function Om(e,a,t){if(ia&&typeof ia.onCommitFiberUnmount=="function")try{ia.onCommitFiberUnmount(Yn,t)}catch{}switch(t.tag){case 26:Le||Oa(t,a),$a(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Le||Oa(t,a);var n=Se,l=Ie;Et(t.type)&&(Se=t.stateNode,Ie=!1),$a(e,a,t),Tl(t.stateNode),Se=n,Ie=l;break;case 5:Le||Oa(t,a);case 6:if(n=Se,l=Ie,Se=null,$a(e,a,t),Se=n,Ie=l,Se!==null)if(Ie)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(t.stateNode)}catch(u){de(t,a,u)}else try{Se.removeChild(t.stateNode)}catch(u){de(t,a,u)}break;case 18:Se!==null&&(Ie?(e=Se,Tf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Bn(e)):Tf(Se,t.stateNode));break;case 4:n=Se,l=Ie,Se=t.stateNode.containerInfo,Ie=!0,$a(e,a,t),Se=n,Ie=l;break;case 0:case 11:case 14:case 15:gt(2,t,a),Le||gt(4,t,a),$a(e,a,t);break;case 1:Le||(Oa(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Tm(t,a,n)),$a(e,a,t);break;case 21:$a(e,a,t);break;case 22:Le=(n=Le)||t.memoizedState!==null,$a(e,a,t),Le=n;break;default:$a(e,a,t)}}function zm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bn(e)}catch(t){de(a,a.return,t)}}}function Nm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bn(e)}catch(t){de(a,a.return,t)}}function QA(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Cm),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Cm),a;default:throw Error(r(435,e.tag))}}function Du(e,a){var t=QA(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var l=WA.bind(null,e,n);n.then(l,l)}})}function ea(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var l=t[n],u=e,i=a,o=i;e:for(;o!==null;){switch(o.tag){case 27:if(Et(o.type)){Se=o.stateNode,Ie=!1;break e}break;case 5:Se=o.stateNode,Ie=!1;break e;case 3:case 4:Se=o.stateNode.containerInfo,Ie=!0;break e}o=o.return}if(Se===null)throw Error(r(160));Om(u,i,l),Se=null,Ie=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Lm(a,e),a=a.sibling}var Ma=null;function Lm(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ea(a,e),aa(e),n&4&&(gt(3,e,e.return),vl(3,e),gt(5,e,e.return));break;case 1:ea(a,e),aa(e),n&512&&(Le||t===null||Oa(t,t.return)),n&64&&Wa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var l=Ma;if(ea(a,e),aa(e),n&512&&(Le||t===null||Oa(t,t.return)),n&4){var u=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,l=l.ownerDocument||l;a:switch(n){case"title":u=l.getElementsByTagName("title")[0],(!u||u[wn]||u[Qe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(n),l.head.insertBefore(u,l.querySelector("head > title"))),Xe(u,n,t),u[Qe]=e,Ge(u),n=u;break e;case"link":var i=Bf("link","href",l).get(n+(t.href||""));if(i){for(var o=0;o<i.length;o++)if(u=i[o],u.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(o,1);break a}}u=l.createElement(n),Xe(u,n,t),l.head.appendChild(u);break;case"meta":if(i=Bf("meta","content",l).get(n+(t.content||""))){for(o=0;o<i.length;o++)if(u=i[o],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(o,1);break a}}u=l.createElement(n),Xe(u,n,t),l.head.appendChild(u);break;default:throw Error(r(468,n))}u[Qe]=e,Ge(u),n=u}e.stateNode=n}else Uf(l,e.type,e.stateNode);else e.stateNode=Lf(l,n,e.memoizedProps);else u!==n?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,n===null?Uf(l,e.type,e.stateNode):Lf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&wi(e,e.memoizedProps,t.memoizedProps)}break;case 27:ea(a,e),aa(e),n&512&&(Le||t===null||Oa(t,t.return)),t!==null&&n&4&&wi(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ea(a,e),aa(e),n&512&&(Le||t===null||Oa(t,t.return)),e.flags&32){l=e.stateNode;try{un(l,"")}catch(U){de(e,e.return,U)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,wi(e,l,t!==null?t.memoizedProps:l)),n&1024&&(Zi=!0);break;case 6:if(ea(a,e),aa(e),n&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(U){de(e,e.return,U)}}break;case 3:if(Ku=null,l=Ma,Ma=Xu(a.containerInfo),ea(a,e),Ma=l,aa(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Bn(a.containerInfo)}catch(U){de(e,e.return,U)}Zi&&(Zi=!1,Bm(e));break;case 4:n=Ma,Ma=Xu(e.stateNode.containerInfo),ea(a,e),aa(e),Ma=n;break;case 12:ea(a,e),aa(e);break;case 31:ea(a,e),aa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Du(e,n)));break;case 13:ea(a,e),aa(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(zu=sa()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Du(e,n)));break;case 22:l=e.memoizedState!==null;var d=t!==null&&t.memoizedState!==null,_=Wa,M=Le;if(Wa=_||l,Le=M||d,ea(a,e),Le=M,Wa=_,aa(e),n&8192)e:for(a=e.stateNode,a._visibility=l?a._visibility&-2:a._visibility|1,l&&(t===null||d||Wa||Le||Ft(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){d=t=a;try{if(u=d.stateNode,l)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=d.stateNode;var D=d.memoizedProps.style,S=D!=null&&D.hasOwnProperty("display")?D.display:null;o.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(U){de(d,d.return,U)}}}else if(a.tag===6){if(t===null){d=a;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(U){de(d,d.return,U)}}}else if(a.tag===18){if(t===null){d=a;try{var q=d.stateNode;l?Jf(q,!0):Jf(d.stateNode,!1)}catch(U){de(d,d.return,U)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,Du(e,t))));break;case 19:ea(a,e),aa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Du(e,n)));break;case 30:break;case 21:break;default:ea(a,e),aa(e)}}function aa(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(Mm(n)){t=n;break}n=n.return}if(t==null)throw Error(r(160));switch(t.tag){case 27:var l=t.stateNode,u=ki(e);Ru(e,u,l);break;case 5:var i=t.stateNode;t.flags&32&&(un(i,""),t.flags&=-33);var o=ki(e);Ru(e,o,i);break;case 3:case 4:var d=t.stateNode.containerInfo,_=ki(e);Xi(e,_,d);break;default:throw Error(r(161))}}catch(M){de(e,e.return,M)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Bm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ia(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Rm(e,a.alternate,a),a=a.sibling}function Ft(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:gt(4,a,a.return),Ft(a);break;case 1:Oa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Tm(a,a.return,t),Ft(a);break;case 27:Tl(a.stateNode);case 26:case 5:Oa(a,a.return),Ft(a);break;case 22:a.memoizedState===null&&Ft(a);break;case 30:Ft(a);break;default:Ft(a)}e=e.sibling}}function et(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,l=e,u=a,i=u.flags;switch(u.tag){case 0:case 11:case 15:et(l,u,t),vl(4,u);break;case 1:if(et(l,u,t),n=u,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(_){de(n,n.return,_)}if(n=u,l=n.updateQueue,l!==null){var o=n.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)pc(d[l],o)}catch(_){de(n,n.return,_)}}t&&i&64&&Em(u),hl(u,u.return);break;case 27:xm(u);case 26:case 5:et(l,u,t),t&&n===null&&i&4&&Jm(u),hl(u,u.return);break;case 12:et(l,u,t);break;case 31:et(l,u,t),t&&i&4&&zm(l,u);break;case 13:et(l,u,t),t&&i&4&&Nm(l,u);break;case 22:u.memoizedState===null&&et(l,u,t),hl(u,u.return);break;case 30:break;default:et(l,u,t)}a=a.sibling}}function Ki(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&nl(t))}function Fi(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&nl(e))}function xa(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Um(e,a,t,n),a=a.sibling}function Um(e,a,t,n){var l=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a,t,n),l&2048&&vl(9,a);break;case 1:xa(e,a,t,n);break;case 3:xa(e,a,t,n),l&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&nl(e)));break;case 12:if(l&2048){xa(e,a,t,n),e=a.stateNode;try{var u=a.memoizedProps,i=u.id,o=u.onPostCommit;typeof o=="function"&&o(i,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){de(a,a.return,d)}}else xa(e,a,t,n);break;case 31:xa(e,a,t,n);break;case 13:xa(e,a,t,n);break;case 23:break;case 22:u=a.stateNode,i=a.alternate,a.memoizedState!==null?u._visibility&2?xa(e,a,t,n):gl(e,a):u._visibility&2?xa(e,a,t,n):(u._visibility|=2,Tn(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),l&2048&&Ki(i,a);break;case 24:xa(e,a,t,n),l&2048&&Fi(a.alternate,a);break;default:xa(e,a,t,n)}}function Tn(e,a,t,n,l){for(l=l&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var u=e,i=a,o=t,d=n,_=i.flags;switch(i.tag){case 0:case 11:case 15:Tn(u,i,o,d,l),vl(8,i);break;case 23:break;case 22:var M=i.stateNode;i.memoizedState!==null?M._visibility&2?Tn(u,i,o,d,l):gl(u,i):(M._visibility|=2,Tn(u,i,o,d,l)),l&&_&2048&&Ki(i.alternate,i);break;case 24:Tn(u,i,o,d,l),l&&_&2048&&Fi(i.alternate,i);break;default:Tn(u,i,o,d,l)}a=a.sibling}}function gl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,l=n.flags;switch(n.tag){case 22:gl(t,n),l&2048&&Ki(n.alternate,n);break;case 24:gl(t,n),l&2048&&Fi(n.alternate,n);break;default:gl(t,n)}a=a.sibling}}var bl=8192;function Jn(e,a,t){if(e.subtreeFlags&bl)for(e=e.child;e!==null;)Hm(e,a,t),e=e.sibling}function Hm(e,a,t){switch(e.tag){case 26:Jn(e,a,t),e.flags&bl&&e.memoizedState!==null&&Mv(t,Ma,e.memoizedState,e.memoizedProps);break;case 5:Jn(e,a,t);break;case 3:case 4:var n=Ma;Ma=Xu(e.stateNode.containerInfo),Jn(e,a,t),Ma=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=bl,bl=16777216,Jn(e,a,t),bl=n):Jn(e,a,t));break;default:Jn(e,a,t)}}function Gm(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function yl(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ye=n,Qm(n,e)}Gm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ym(e),e=e.sibling}function Ym(e){switch(e.tag){case 0:case 11:case 15:yl(e),e.flags&2048&&gt(9,e,e.return);break;case 3:yl(e);break;case 12:yl(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ou(e)):yl(e);break;default:yl(e)}}function Ou(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ye=n,Qm(n,e)}Gm(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:gt(8,a,a.return),Ou(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Ou(a));break;default:Ou(a)}e=e.sibling}}function Qm(e,a){for(;Ye!==null;){var t=Ye;switch(t.tag){case 0:case 11:case 15:gt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:nl(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,Ye=n;else e:for(t=e;Ye!==null;){n=Ye;var l=n.sibling,u=n.return;if(Dm(n),n===t){Ye=null;break e}if(l!==null){l.return=u,Ye=l;break e}Ye=u}}}var VA={getCacheForType:function(e){var a=we(Oe),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return we(Oe).controller.signal}},wA=typeof WeakMap=="function"?WeakMap:Map,ce=0,be=null,ne=null,ue=0,fe=0,da=null,bt=!1,Mn=!1,Pi=!1,at=0,Me=0,yt=0,Pt=0,Wi=0,pa=0,xn=0,jl=null,ta=null,$i=!1,zu=0,Vm=0,Nu=1/0,Lu=null,jt=null,He=0,_t=null,Cn=null,tt=0,Ii=0,er=null,wm=null,_l=0,ar=null;function Aa(){return(ce&2)!==0&&ue!==0?ue&-ue:x.T!==null?ir():uo()}function km(){if(pa===0)if((ue&536870912)===0||ie){var e=wl;wl<<=1,(wl&3932160)===0&&(wl=262144),pa=e}else pa=536870912;return e=ma.current,e!==null&&(e.flags|=32),pa}function na(e,a,t){(e===be&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Rn(e,0),St(e,ue,pa,!1)),Vn(e,t),((ce&2)===0||e!==be)&&(e===be&&((ce&2)===0&&(Pt|=t),Me===4&&St(e,ue,pa,!1)),za(e))}function Xm(e,a,t){if((ce&6)!==0)throw Error(r(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Qn(e,a),l=n?ZA(e,a):nr(e,a,!0),u=n;do{if(l===0){Mn&&!n&&St(e,a,0,!1);break}else{if(t=e.current.alternate,u&&!kA(t)){l=nr(e,a,!1),u=!1;continue}if(l===2){if(u=a,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;e:{var o=e;l=jl;var d=o.current.memoizedState.isDehydrated;if(d&&(Rn(o,i).flags|=256),i=nr(o,i,!1),i!==2){if(Pi&&!d){o.errorRecoveryDisabledLanes|=u,Pt|=u,l=4;break e}u=ta,ta=l,u!==null&&(ta===null?ta=u:ta.push.apply(ta,u))}l=i}if(u=!1,l!==2)continue}}if(l===1){Rn(e,0),St(e,a,0,!0);break}e:{switch(n=e,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:St(n,a,pa,!bt);break e;case 2:ta=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(l=zu+300-sa(),10<l)){if(St(n,a,pa,!bt),Xl(n,0,!0)!==0)break e;tt=a,n.timeoutHandle=qf(Zm.bind(null,n,t,ta,Lu,$i,a,pa,Pt,xn,bt,u,"Throttled",-0,0),l);break e}Zm(n,t,ta,Lu,$i,a,pa,Pt,xn,bt,u,null,-0,0)}}break}while(!0);za(e)}function Zm(e,a,t,n,l,u,i,o,d,_,M,D,S,q){if(e.timeoutHandle=-1,D=a.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ya},Hm(a,u,D);var U=(u&62914560)===u?zu-sa():(u&4194048)===u?Vm-sa():0;if(U=xv(D,U),U!==null){tt=u,e.cancelPendingCommit=U(af.bind(null,e,a,u,t,n,l,i,o,d,M,D,null,S,q)),St(e,u,i,!_);return}}af(e,a,u,t,n,l,i,o,d)}function kA(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var l=t[n],u=l.getSnapshot;l=l.value;try{if(!oa(u(),l))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function St(e,a,t,n){a&=~Wi,a&=~Pt,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var l=a;0<l;){var u=31-ra(l),i=1<<u;n[u]=-1,l&=~i}t!==0&&to(e,t,a)}function Bu(){return(ce&6)===0?(Sl(0),!1):!0}function tr(){if(ne!==null){if(fe===0)var e=ne.return;else e=ne,ka=Yt=null,gi(e),jn=null,ul=0,e=ne;for(;e!==null;)qm(e.alternate,e),e=e.return;ne=null}}function Rn(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,mv(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),tt=0,tr(),be=e,ne=t=Va(e.current,null),ue=a,fe=0,da=null,bt=!1,Mn=Qn(e,a),Pi=!1,xn=pa=Wi=Pt=yt=Me=0,ta=jl=null,$i=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var l=31-ra(n),u=1<<l;a|=e[l],n&=~u}return at=a,lu(),t}function Km(e,a){I=null,x.H=dl,a===yn||a===fu?(a=cc(),fe=3):a===si?(a=cc(),fe=4):fe=a===zi?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,da=a,ne===null&&(Me=1,Tu(e,ba(a,e.current)))}function Fm(){var e=ma.current;return e===null?!0:(ue&4194048)===ue?Sa===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Sa:!1}function Pm(){var e=x.H;return x.H=dl,e===null?dl:e}function Wm(){var e=x.A;return x.A=VA,e}function Uu(){Me=4,bt||(ue&4194048)!==ue&&ma.current!==null||(Mn=!0),(yt&134217727)===0&&(Pt&134217727)===0||be===null||St(be,ue,pa,!1)}function nr(e,a,t){var n=ce;ce|=2;var l=Pm(),u=Wm();(be!==e||ue!==a)&&(Lu=null,Rn(e,a)),a=!1;var i=Me;e:do try{if(fe!==0&&ne!==null){var o=ne,d=da;switch(fe){case 8:tr(),i=6;break e;case 3:case 2:case 9:case 6:ma.current===null&&(a=!0);var _=fe;if(fe=0,da=null,Dn(e,o,d,_),t&&Mn){i=0;break e}break;default:_=fe,fe=0,da=null,Dn(e,o,d,_)}}XA(),i=Me;break}catch(M){Km(e,M)}while(!0);return a&&e.shellSuspendCounter++,ka=Yt=null,ce=n,x.H=l,x.A=u,ne===null&&(be=null,ue=0,lu()),i}function XA(){for(;ne!==null;)$m(ne)}function ZA(e,a){var t=ce;ce|=2;var n=Pm(),l=Wm();be!==e||ue!==a?(Lu=null,Nu=sa()+500,Rn(e,a)):Mn=Qn(e,a);e:do try{if(fe!==0&&ne!==null){a=ne;var u=da;a:switch(fe){case 1:fe=0,da=null,Dn(e,a,u,1);break;case 2:case 9:if(rc(u)){fe=0,da=null,Im(a);break}a=function(){fe!==2&&fe!==9||be!==e||(fe=7),za(e)},u.then(a,a);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:rc(u)?(fe=0,da=null,Im(a)):(fe=0,da=null,Dn(e,a,u,7));break;case 5:var i=null;switch(ne.tag){case 26:i=ne.memoizedState;case 5:case 27:var o=ne;if(i?Hf(i):o.stateNode.complete){fe=0,da=null;var d=o.sibling;if(d!==null)ne=d;else{var _=o.return;_!==null?(ne=_,Hu(_)):ne=null}break a}}fe=0,da=null,Dn(e,a,u,5);break;case 6:fe=0,da=null,Dn(e,a,u,6);break;case 8:tr(),Me=6;break e;default:throw Error(r(462))}}KA();break}catch(M){Km(e,M)}while(!0);return ka=Yt=null,x.H=n,x.A=l,ce=t,ne!==null?0:(be=null,ue=0,lu(),Me)}function KA(){for(;ne!==null&&!hp();)$m(ne)}function $m(e){var a=_m(e.alternate,e,at);e.memoizedProps=e.pendingProps,a===null?Hu(e):ne=a}function Im(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=vm(t,a,a.pendingProps,a.type,void 0,ue);break;case 11:a=vm(t,a,a.pendingProps,a.type.render,a.ref,ue);break;case 5:gi(a);default:qm(t,a),a=ne=Wo(a,at),a=_m(t,a,at)}e.memoizedProps=e.pendingProps,a===null?Hu(e):ne=a}function Dn(e,a,t,n){ka=Yt=null,gi(a),jn=null,ul=0;var l=a.return;try{if(LA(e,l,a,t,ue)){Me=1,Tu(e,ba(t,e.current)),ne=null;return}}catch(u){if(l!==null)throw ne=l,u;Me=1,Tu(e,ba(t,e.current)),ne=null;return}a.flags&32768?(ie||n===1?e=!0:Mn||(ue&536870912)!==0?e=!1:(bt=e=!0,(n===2||n===9||n===3||n===6)&&(n=ma.current,n!==null&&n.tag===13&&(n.flags|=16384))),ef(a,e)):Hu(a)}function Hu(e){var a=e;do{if((a.flags&32768)!==0){ef(a,bt);return}e=a.return;var t=HA(a.alternate,a,at);if(t!==null){ne=t;return}if(a=a.sibling,a!==null){ne=a;return}ne=a=e}while(a!==null);Me===0&&(Me=5)}function ef(e,a){do{var t=GA(e.alternate,e);if(t!==null){t.flags&=32767,ne=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ne=e;return}ne=e=t}while(e!==null);Me=6,ne=null}function af(e,a,t,n,l,u,i,o,d){e.cancelPendingCommit=null;do Gu();while(He!==0);if((ce&6)!==0)throw Error(r(327));if(a!==null){if(a===e.current)throw Error(r(177));if(u=a.lanes|a.childLanes,u|=ks,Jp(e,t,u,i,o,d),e===be&&(ne=be=null,ue=0),Cn=a,_t=e,tt=t,Ii=u,er=l,wm=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$A(Ql,function(){return sf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=x.T,x.T=null,l=L.p,L.p=2,i=ce,ce|=4;try{YA(e,a,t)}finally{ce=i,L.p=l,x.T=n}}He=1,tf(),nf(),lf()}}function tf(){if(He===1){He=0;var e=_t,a=Cn,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=x.T,x.T=null;var n=L.p;L.p=2;var l=ce;ce|=4;try{Lm(a,e);var u=Ar,i=Qo(e.containerInfo),o=u.focusedElem,d=u.selectionRange;if(i!==o&&o&&o.ownerDocument&&Yo(o.ownerDocument.documentElement,o)){if(d!==null&&Gs(o)){var _=d.start,M=d.end;if(M===void 0&&(M=_),"selectionStart"in o)o.selectionStart=_,o.selectionEnd=Math.min(M,o.value.length);else{var D=o.ownerDocument||document,S=D&&D.defaultView||window;if(S.getSelection){var q=S.getSelection(),U=o.textContent.length,F=Math.min(d.start,U),he=d.end===void 0?F:Math.min(d.end,U);!q.extend&&F>he&&(i=he,he=F,F=i);var b=Go(o,F),v=Go(o,he);if(b&&v&&(q.rangeCount!==1||q.anchorNode!==b.node||q.anchorOffset!==b.offset||q.focusNode!==v.node||q.focusOffset!==v.offset)){var y=D.createRange();y.setStart(b.node,b.offset),q.removeAllRanges(),F>he?(q.addRange(y),q.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),q.addRange(y))}}}}for(D=[],q=o;q=q.parentNode;)q.nodeType===1&&D.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<D.length;o++){var R=D[o];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}$u=!!pr,Ar=pr=null}finally{ce=l,L.p=n,x.T=t}}e.current=a,He=2}}function nf(){if(He===2){He=0;var e=_t,a=Cn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=x.T,x.T=null;var n=L.p;L.p=2;var l=ce;ce|=4;try{Rm(e,a.alternate,a)}finally{ce=l,L.p=n,x.T=t}}He=3}}function lf(){if(He===4||He===3){He=0,gp();var e=_t,a=Cn,t=tt,n=wm;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?He=5:(He=0,Cn=_t=null,uf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(jt=null),js(t),a=a.stateNode,ia&&typeof ia.onCommitFiberRoot=="function")try{ia.onCommitFiberRoot(Yn,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=x.T,l=L.p,L.p=2,x.T=null;try{for(var u=e.onRecoverableError,i=0;i<n.length;i++){var o=n[i];u(o.value,{componentStack:o.stack})}}finally{x.T=a,L.p=l}}(tt&3)!==0&&Gu(),za(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===ar?_l++:(_l=0,ar=e):_l=0,Sl(0)}}function uf(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,nl(a)))}function Gu(){return tf(),nf(),lf(),sf()}function sf(){if(He!==5)return!1;var e=_t,a=Ii;Ii=0;var t=js(tt),n=x.T,l=L.p;try{L.p=32>t?32:t,x.T=null,t=er,er=null;var u=_t,i=tt;if(He=0,Cn=_t=null,tt=0,(ce&6)!==0)throw Error(r(331));var o=ce;if(ce|=4,Ym(u.current),Um(u,u.current,i,t),ce=o,Sl(0,!1),ia&&typeof ia.onPostCommitFiberRoot=="function")try{ia.onPostCommitFiberRoot(Yn,u)}catch{}return!0}finally{L.p=l,x.T=n,uf(e,a)}}function rf(e,a,t){a=ba(t,a),a=Oi(e.stateNode,a,2),e=At(e,a,2),e!==null&&(Vn(e,2),za(e))}function de(e,a,t){if(e.tag===3)rf(e,e,t);else for(;a!==null;){if(a.tag===3){rf(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(jt===null||!jt.has(n))){e=ba(t,e),t=rm(2),n=At(a,t,2),n!==null&&(om(t,n,a,e),Vn(n,2),za(n));break}}a=a.return}}function lr(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new wA;var l=new Set;n.set(a,l)}else l=n.get(a),l===void 0&&(l=new Set,n.set(a,l));l.has(t)||(Pi=!0,l.add(t),e=FA.bind(null,e,a,t),a.then(e,e))}function FA(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,be===e&&(ue&t)===t&&(Me===4||Me===3&&(ue&62914560)===ue&&300>sa()-zu?(ce&2)===0&&Rn(e,0):Wi|=t,xn===ue&&(xn=0)),za(e)}function of(e,a){a===0&&(a=ao()),e=Ut(e,a),e!==null&&(Vn(e,a),za(e))}function PA(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),of(e,t)}function WA(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(a),of(e,t)}function $A(e,a){return hs(e,a)}var Yu=null,On=null,ur=!1,Qu=!1,sr=!1,qt=0;function za(e){e!==On&&e.next===null&&(On===null?Yu=On=e:On=On.next=e),Qu=!0,ur||(ur=!0,ev())}function Sl(e,a){if(!sr&&Qu){sr=!0;do for(var t=!1,n=Yu;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var u=0;else{var i=n.suspendedLanes,o=n.pingedLanes;u=(1<<31-ra(42|e)+1)-1,u&=l&~(i&~o),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,df(n,u))}else u=ue,u=Xl(n,n===be?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||Qn(n,u)||(t=!0,df(n,u));n=n.next}while(t);sr=!1}}function IA(){cf()}function cf(){Qu=ur=!1;var e=0;qt!==0&&cv()&&(e=qt);for(var a=sa(),t=null,n=Yu;n!==null;){var l=n.next,u=mf(n,a);u===0?(n.next=null,t===null?Yu=l:t.next=l,l===null&&(On=t)):(t=n,(e!==0||(u&3)!==0)&&(Qu=!0)),n=l}He!==0&&He!==5||Sl(e),qt!==0&&(qt=0)}function mf(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-ra(u),o=1<<i,d=l[i];d===-1?((o&t)===0||(o&n)!==0)&&(l[i]=Tp(o,a)):d<=a&&(e.expiredLanes|=o),u&=~o}if(a=be,t=ue,t=Xl(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&gs(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Qn(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&gs(n),js(t)){case 2:case 8:t=Ir;break;case 32:t=Ql;break;case 268435456:t=eo;break;default:t=Ql}return n=ff.bind(null,e),t=hs(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&gs(n),e.callbackPriority=2,e.callbackNode=null,2}function ff(e,a){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Gu()&&e.callbackNode!==t)return null;var n=ue;return n=Xl(e,e===be?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Xm(e,n,a),mf(e,sa()),e.callbackNode!=null&&e.callbackNode===t?ff.bind(null,e):null)}function df(e,a){if(Gu())return null;Xm(e,a,!0)}function ev(){fv(function(){(ce&6)!==0?hs($r,IA):cf()})}function ir(){if(qt===0){var e=gn;e===0&&(e=Vl,Vl<<=1,(Vl&261888)===0&&(Vl=256)),qt=e}return qt}function pf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pl(""+e)}function Af(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function av(e,a,t,n,l){if(a==="submit"&&t&&t.stateNode===l){var u=pf((l[We]||null).action),i=n.submitter;i&&(a=(a=i[We]||null)?pf(a.formAction):i.getAttribute("formAction"),a!==null&&(u=a,i=null));var o=new eu("action","action",null,n,l);e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(qt!==0){var d=i?Af(l,i):new FormData(l);Ji(t,{pending:!0,data:d,method:l.method,action:u},null,d)}}else typeof u=="function"&&(o.preventDefault(),d=i?Af(l,i):new FormData(l),Ji(t,{pending:!0,data:d,method:l.method,action:u},u,d))},currentTarget:l}]})}}for(var rr=0;rr<ws.length;rr++){var or=ws[rr],tv=or.toLowerCase(),nv=or[0].toUpperCase()+or.slice(1);Ja(tv,"on"+nv)}Ja(ko,"onAnimationEnd"),Ja(Xo,"onAnimationIteration"),Ja(Zo,"onAnimationStart"),Ja("dblclick","onDoubleClick"),Ja("focusin","onFocus"),Ja("focusout","onBlur"),Ja(bA,"onTransitionRun"),Ja(yA,"onTransitionStart"),Ja(jA,"onTransitionCancel"),Ja(Ko,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function vf(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],l=n.event;n=n.listeners;e:{var u=void 0;if(a)for(var i=n.length-1;0<=i;i--){var o=n[i],d=o.instance,_=o.currentTarget;if(o=o.listener,d!==u&&l.isPropagationStopped())break e;u=o,l.currentTarget=_;try{u(l)}catch(M){nu(M)}l.currentTarget=null,u=d}else for(i=0;i<n.length;i++){if(o=n[i],d=o.instance,_=o.currentTarget,o=o.listener,d!==u&&l.isPropagationStopped())break e;u=o,l.currentTarget=_;try{u(l)}catch(M){nu(M)}l.currentTarget=null,u=d}}}}function le(e,a){var t=a[_s];t===void 0&&(t=a[_s]=new Set);var n=e+"__bubble";t.has(n)||(hf(a,e,2,!1),t.add(n))}function cr(e,a,t){var n=0;a&&(n|=4),hf(t,e,n,a)}var Vu="_reactListening"+Math.random().toString(36).slice(2);function mr(e){if(!e[Vu]){e[Vu]=!0,ro.forEach(function(t){t!=="selectionchange"&&(lv.has(t)||cr(t,!1,e),cr(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Vu]||(a[Vu]=!0,cr("selectionchange",!1,a))}}function hf(e,a,t,n){switch(Xf(a)){case 2:var l=Dv;break;case 8:l=Ov;break;default:l=Tr}t=l.bind(null,a,t,e),l=void 0,!Rs||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(a,t,{capture:!0,passive:l}):e.addEventListener(a,t,!0):l!==void 0?e.addEventListener(a,t,{passive:l}):e.addEventListener(a,t,!1)}function fr(e,a,t,n,l){var u=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var o=n.stateNode.containerInfo;if(o===l)break;if(i===4)for(i=n.return;i!==null;){var d=i.tag;if((d===3||d===4)&&i.stateNode.containerInfo===l)return;i=i.return}for(;o!==null;){if(i=en(o),i===null)return;if(d=i.tag,d===5||d===6||d===26||d===27){n=u=i;continue e}o=o.parentNode}}n=n.return}jo(function(){var _=u,M=xs(t),D=[];e:{var S=Fo.get(e);if(S!==void 0){var q=eu,U=e;switch(e){case"keypress":if($l(t)===0)break e;case"keydown":case"keyup":q=Wp;break;case"focusin":U="focus",q=Ns;break;case"focusout":U="blur",q=Ns;break;case"beforeblur":case"afterblur":q=Ns;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=eA;break;case ko:case Xo:case Zo:q=Qp;break;case Ko:q=tA;break;case"scroll":case"scrollend":q=Bp;break;case"wheel":q=lA;break;case"copy":case"cut":case"paste":q=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=To;break;case"toggle":case"beforetoggle":q=sA}var F=(a&4)!==0,he=!F&&(e==="scroll"||e==="scrollend"),b=F?S!==null?S+"Capture":null:S;F=[];for(var v=_,y;v!==null;){var R=v;if(y=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||y===null||b===null||(R=Xn(v,b),R!=null&&F.push(El(v,R,y))),he)break;v=v.return}0<F.length&&(S=new q(S,U,null,t,M),D.push({event:S,listeners:F}))}}if((a&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",S&&t!==Ms&&(U=t.relatedTarget||t.fromElement)&&(en(U)||U[It]))break e;if((q||S)&&(S=M.window===M?M:(S=M.ownerDocument)?S.defaultView||S.parentWindow:window,q?(U=t.relatedTarget||t.toElement,q=_,U=U?en(U):null,U!==null&&(he=A(U),F=U.tag,U!==he||F!==5&&F!==27&&F!==6)&&(U=null)):(q=null,U=_),q!==U)){if(F=qo,R="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(F=To,R="onPointerLeave",b="onPointerEnter",v="pointer"),he=q==null?S:kn(q),y=U==null?S:kn(U),S=new F(R,v+"leave",q,t,M),S.target=he,S.relatedTarget=y,R=null,en(M)===_&&(F=new F(b,v+"enter",U,t,M),F.target=y,F.relatedTarget=he,R=F),he=R,q&&U)a:{for(F=uv,b=q,v=U,y=0,R=b;R;R=F(R))y++;R=0;for(var X=v;X;X=F(X))R++;for(;0<y-R;)b=F(b),y--;for(;0<R-y;)v=F(v),R--;for(;y--;){if(b===v||v!==null&&b===v.alternate){F=b;break a}b=F(b),v=F(v)}F=null}else F=null;q!==null&&gf(D,S,q,F,!1),U!==null&&he!==null&&gf(D,he,U,F,!0)}}e:{if(S=_?kn(_):window,q=S.nodeName&&S.nodeName.toLowerCase(),q==="select"||q==="input"&&S.type==="file")var re=zo;else if(Do(S))if(No)re=vA;else{re=pA;var w=dA}else q=S.nodeName,!q||q.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?_&&Js(_.elementType)&&(re=zo):re=AA;if(re&&(re=re(e,_))){Oo(D,re,t,M);break e}w&&w(e,S,_),e==="focusout"&&_&&S.type==="number"&&_.memoizedProps.value!=null&&Ts(S,"number",S.value)}switch(w=_?kn(_):window,e){case"focusin":(Do(w)||w.contentEditable==="true")&&(cn=w,Ys=_,el=null);break;case"focusout":el=Ys=cn=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,Vo(D,t,M);break;case"selectionchange":if(gA)break;case"keydown":case"keyup":Vo(D,t,M)}var ae;if(Bs)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else on?Co(e,t)&&(se="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(se="onCompositionStart");se&&(Jo&&t.locale!=="ko"&&(on||se!=="onCompositionStart"?se==="onCompositionEnd"&&on&&(ae=_o()):(rt=M,Ds="value"in rt?rt.value:rt.textContent,on=!0)),w=wu(_,se),0<w.length&&(se=new Eo(se,e,null,t,M),D.push({event:se,listeners:w}),ae?se.data=ae:(ae=Ro(t),ae!==null&&(se.data=ae)))),(ae=rA?oA(e,t):cA(e,t))&&(se=wu(_,"onBeforeInput"),0<se.length&&(w=new Eo("onBeforeInput","beforeinput",null,t,M),D.push({event:w,listeners:se}),w.data=ae)),av(D,e,_,t,M)}vf(D,a)})}function El(e,a,t){return{instance:e,listener:a,currentTarget:t}}function wu(e,a){for(var t=a+"Capture",n=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Xn(e,t),l!=null&&n.unshift(El(e,l,u)),l=Xn(e,a),l!=null&&n.push(El(e,l,u))),e.tag===3)return n;e=e.return}return[]}function uv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gf(e,a,t,n,l){for(var u=a._reactName,i=[];t!==null&&t!==n;){var o=t,d=o.alternate,_=o.stateNode;if(o=o.tag,d!==null&&d===n)break;o!==5&&o!==26&&o!==27||_===null||(d=_,l?(_=Xn(t,u),_!=null&&i.unshift(El(t,_,d))):l||(_=Xn(t,u),_!=null&&i.push(El(t,_,d)))),t=t.return}i.length!==0&&e.push({event:a,listeners:i})}var sv=/\r\n?/g,iv=/\u0000|\uFFFD/g;function bf(e){return(typeof e=="string"?e:""+e).replace(sv,`
`).replace(iv,"")}function yf(e,a){return a=bf(a),bf(e)===a}function ve(e,a,t,n,l,u){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||un(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&un(e,""+n);break;case"className":Kl(e,"class",n);break;case"tabIndex":Kl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Kl(e,t,n);break;case"style":bo(e,n,u);break;case"data":if(a!=="object"){Kl(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Pl(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(a!=="input"&&ve(e,a,"name",l.name,l,null),ve(e,a,"formEncType",l.formEncType,l,null),ve(e,a,"formMethod",l.formMethod,l,null),ve(e,a,"formTarget",l.formTarget,l,null)):(ve(e,a,"encType",l.encType,l,null),ve(e,a,"method",l.method,l,null),ve(e,a,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Pl(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=Ya);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=Pl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":le("beforetoggle",e),le("toggle",e),Zl(e,"popover",n);break;case"xlinkActuate":Ga(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ga(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ga(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ga(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ga(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ga(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Zl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Np.get(t)||t,Zl(e,t,n))}}function dr(e,a,t,n,l,u){switch(t){case"style":bo(e,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"children":typeof n=="string"?un(e,n):(typeof n=="number"||typeof n=="bigint")&&un(e,""+n);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oo.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),a=t.slice(2,l?t.length-7:void 0),u=e[We]||null,u=u!=null?u[t]:null,typeof u=="function"&&e.removeEventListener(a,u,l),typeof n=="function")){typeof u!="function"&&u!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,l);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):Zl(e,t,n)}}}function Xe(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var n=!1,l=!1,u;for(u in t)if(t.hasOwnProperty(u)){var i=t[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ve(e,a,u,i,t,null)}}l&&ve(e,a,"srcSet",t.srcSet,t,null),n&&ve(e,a,"src",t.src,t,null);return;case"input":le("invalid",e);var o=u=i=l=null,d=null,_=null;for(n in t)if(t.hasOwnProperty(n)){var M=t[n];if(M!=null)switch(n){case"name":l=M;break;case"type":i=M;break;case"checked":d=M;break;case"defaultChecked":_=M;break;case"value":u=M;break;case"defaultValue":o=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,a));break;default:ve(e,a,n,M,t,null)}}Ao(e,u,o,d,_,i,l,!1);return;case"select":le("invalid",e),n=i=u=null;for(l in t)if(t.hasOwnProperty(l)&&(o=t[l],o!=null))switch(l){case"value":u=o;break;case"defaultValue":i=o;break;case"multiple":n=o;default:ve(e,a,l,o,t,null)}a=u,t=i,e.multiple=!!n,a!=null?ln(e,!!n,a,!1):t!=null&&ln(e,!!n,t,!0);return;case"textarea":le("invalid",e),u=l=n=null;for(i in t)if(t.hasOwnProperty(i)&&(o=t[i],o!=null))switch(i){case"value":n=o;break;case"defaultValue":l=o;break;case"children":u=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:ve(e,a,i,o,t,null)}ho(e,n,l,u);return;case"option":for(d in t)if(t.hasOwnProperty(d)&&(n=t[d],n!=null))switch(d){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ve(e,a,d,n,t,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(n=0;n<ql.length;n++)le(ql[n],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in t)if(t.hasOwnProperty(_)&&(n=t[_],n!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ve(e,a,_,n,t,null)}return;default:if(Js(a)){for(M in t)t.hasOwnProperty(M)&&(n=t[M],n!==void 0&&dr(e,a,M,n,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(n=t[o],n!=null&&ve(e,a,o,n,t,null))}function rv(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,i=null,o=null,d=null,_=null,M=null;for(q in t){var D=t[q];if(t.hasOwnProperty(q)&&D!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":d=D;default:n.hasOwnProperty(q)||ve(e,a,q,null,n,D)}}for(var S in n){var q=n[S];if(D=t[S],n.hasOwnProperty(S)&&(q!=null||D!=null))switch(S){case"type":u=q;break;case"name":l=q;break;case"checked":_=q;break;case"defaultChecked":M=q;break;case"value":i=q;break;case"defaultValue":o=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,a));break;default:q!==D&&ve(e,a,S,q,n,D)}}Es(e,i,o,d,_,M,u,l);return;case"select":q=i=o=S=null;for(u in t)if(d=t[u],t.hasOwnProperty(u)&&d!=null)switch(u){case"value":break;case"multiple":q=d;default:n.hasOwnProperty(u)||ve(e,a,u,null,n,d)}for(l in n)if(u=n[l],d=t[l],n.hasOwnProperty(l)&&(u!=null||d!=null))switch(l){case"value":S=u;break;case"defaultValue":o=u;break;case"multiple":i=u;default:u!==d&&ve(e,a,l,u,n,d)}a=o,t=i,n=q,S!=null?ln(e,!!t,S,!1):!!n!=!!t&&(a!=null?ln(e,!!t,a,!0):ln(e,!!t,t?[]:"",!1));return;case"textarea":q=S=null;for(o in t)if(l=t[o],t.hasOwnProperty(o)&&l!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ve(e,a,o,null,n,l)}for(i in n)if(l=n[i],u=t[i],n.hasOwnProperty(i)&&(l!=null||u!=null))switch(i){case"value":S=l;break;case"defaultValue":q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&ve(e,a,i,l,n,u)}vo(e,S,q);return;case"option":for(var U in t)if(S=t[U],t.hasOwnProperty(U)&&S!=null&&!n.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:ve(e,a,U,null,n,S)}for(d in n)if(S=n[d],q=t[d],n.hasOwnProperty(d)&&S!==q&&(S!=null||q!=null))switch(d){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:ve(e,a,d,S,n,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in t)S=t[F],t.hasOwnProperty(F)&&S!=null&&!n.hasOwnProperty(F)&&ve(e,a,F,null,n,S);for(_ in n)if(S=n[_],q=t[_],n.hasOwnProperty(_)&&S!==q&&(S!=null||q!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(137,a));break;default:ve(e,a,_,S,n,q)}return;default:if(Js(a)){for(var he in t)S=t[he],t.hasOwnProperty(he)&&S!==void 0&&!n.hasOwnProperty(he)&&dr(e,a,he,void 0,n,S);for(M in n)S=n[M],q=t[M],!n.hasOwnProperty(M)||S===q||S===void 0&&q===void 0||dr(e,a,M,S,n,q);return}}for(var b in t)S=t[b],t.hasOwnProperty(b)&&S!=null&&!n.hasOwnProperty(b)&&ve(e,a,b,null,n,S);for(D in n)S=n[D],q=t[D],!n.hasOwnProperty(D)||S===q||S==null&&q==null||ve(e,a,D,S,n,q)}function jf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ov(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var l=t[n],u=l.transferSize,i=l.initiatorType,o=l.duration;if(u&&o&&jf(i)){for(i=0,o=l.responseEnd,n+=1;n<t.length;n++){var d=t[n],_=d.startTime;if(_>o)break;var M=d.transferSize,D=d.initiatorType;M&&jf(D)&&(d=d.responseEnd,i+=M*(d<o?1:(o-_)/(d-_)))}if(--n,a+=8*(u+i)/(l.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pr=null,Ar=null;function ku(e){return e.nodeType===9?e:e.ownerDocument}function _f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sf(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function vr(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var hr=null;function cv(){var e=window.event;return e&&e.type==="popstate"?e===hr?!1:(hr=e,!0):(hr=null,!1)}var qf=typeof setTimeout=="function"?setTimeout:void 0,mv=typeof clearTimeout=="function"?clearTimeout:void 0,Ef=typeof Promise=="function"?Promise:void 0,fv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ef<"u"?function(e){return Ef.resolve(null).then(e).catch(dv)}:qf;function dv(e){setTimeout(function(){throw e})}function Et(e){return e==="head"}function Tf(e,a){var t=a,n=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(l),Bn(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")Tl(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Tl(t);for(var u=t.firstChild;u;){var i=u.nextSibling,o=u.nodeName;u[wn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=i}}else t==="body"&&Tl(e.ownerDocument.body);t=l}while(t);Bn(a)}function Jf(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function gr(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":gr(t),Ss(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function pv(e,a,t,n){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[wn])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=qa(e.nextSibling),e===null)break}return null}function Av(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=qa(e.nextSibling),e===null))return null;return e}function Mf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=qa(e.nextSibling),e===null))return null;return e}function br(e){return e.data==="$?"||e.data==="$~"}function yr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vv(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function qa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var jr=null;function xf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return qa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Cf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function Rf(e,a,t){switch(a=ku(t),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Tl(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ss(e)}var Ea=new Map,Df=new Set;function Xu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nt=L.d;L.d={f:hv,r:gv,D:bv,C:yv,L:jv,m:_v,X:qv,S:Sv,M:Ev};function hv(){var e=nt.f(),a=Bu();return e||a}function gv(e){var a=an(e);a!==null&&a.tag===5&&a.type==="form"?Kc(a):nt.r(e)}var zn=typeof document>"u"?null:document;function Of(e,a,t){var n=zn;if(n&&typeof a=="string"&&a){var l=ha(a);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Df.has(l)||(Df.add(l),e={rel:e,crossOrigin:t,href:a},n.querySelector(l)===null&&(a=n.createElement("link"),Xe(a,"link",e),Ge(a),n.head.appendChild(a)))}}function bv(e){nt.D(e),Of("dns-prefetch",e,null)}function yv(e,a){nt.C(e,a),Of("preconnect",e,a)}function jv(e,a,t){nt.L(e,a,t);var n=zn;if(n&&e&&a){var l='link[rel="preload"][as="'+ha(a)+'"]';a==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+ha(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+ha(t.imageSizes)+'"]')):l+='[href="'+ha(e)+'"]';var u=l;switch(a){case"style":u=Nn(e);break;case"script":u=Ln(e)}Ea.has(u)||(e=E({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Ea.set(u,e),n.querySelector(l)!==null||a==="style"&&n.querySelector(Jl(u))||a==="script"&&n.querySelector(Ml(u))||(a=n.createElement("link"),Xe(a,"link",e),Ge(a),n.head.appendChild(a)))}}function _v(e,a){nt.m(e,a);var t=zn;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+ha(n)+'"][href="'+ha(e)+'"]',u=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ln(e)}if(!Ea.has(u)&&(e=E({rel:"modulepreload",href:e},a),Ea.set(u,e),t.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ml(u)))return}n=t.createElement("link"),Xe(n,"link",e),Ge(n),t.head.appendChild(n)}}}function Sv(e,a,t){nt.S(e,a,t);var n=zn;if(n&&e){var l=tn(n).hoistableStyles,u=Nn(e);a=a||"default";var i=l.get(u);if(!i){var o={loading:0,preload:null};if(i=n.querySelector(Jl(u)))o.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Ea.get(u))&&_r(e,t);var d=i=n.createElement("link");Ge(d),Xe(d,"link",e),d._p=new Promise(function(_,M){d.onload=_,d.onerror=M}),d.addEventListener("load",function(){o.loading|=1}),d.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Zu(i,a,n)}i={type:"stylesheet",instance:i,count:1,state:o},l.set(u,i)}}}function qv(e,a){nt.X(e,a);var t=zn;if(t&&e){var n=tn(t).hoistableScripts,l=Ln(e),u=n.get(l);u||(u=t.querySelector(Ml(l)),u||(e=E({src:e,async:!0},a),(a=Ea.get(l))&&Sr(e,a),u=t.createElement("script"),Ge(u),Xe(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(l,u))}}function Ev(e,a){nt.M(e,a);var t=zn;if(t&&e){var n=tn(t).hoistableScripts,l=Ln(e),u=n.get(l);u||(u=t.querySelector(Ml(l)),u||(e=E({src:e,async:!0,type:"module"},a),(a=Ea.get(l))&&Sr(e,a),u=t.createElement("script"),Ge(u),Xe(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(l,u))}}function zf(e,a,t,n){var l=(l=te.current)?Xu(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Nn(t.href),t=tn(l).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Nn(t.href);var u=tn(l).hoistableStyles,i=u.get(e);if(i||(l=l.ownerDocument||l,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=l.querySelector(Jl(e)))&&!u._p&&(i.instance=u,i.state.loading=5),Ea.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ea.set(e,t),u||Tv(l,e,t,i.state))),a&&n===null)throw Error(r(528,""));return i}if(a&&n!==null)throw Error(r(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ln(t),t=tn(l).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Nn(e){return'href="'+ha(e)+'"'}function Jl(e){return'link[rel="stylesheet"]['+e+"]"}function Nf(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Tv(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),Xe(a,"link",t),Ge(a),e.head.appendChild(a))}function Ln(e){return'[src="'+ha(e)+'"]'}function Ml(e){return"script[async]"+e}function Lf(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+ha(t.href)+'"]');if(n)return a.instance=n,Ge(n),n;var l=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ge(n),Xe(n,"style",l),Zu(n,t.precedence,e),a.instance=n;case"stylesheet":l=Nn(t.href);var u=e.querySelector(Jl(l));if(u)return a.state.loading|=4,a.instance=u,Ge(u),u;n=Nf(t),(l=Ea.get(l))&&_r(n,l),u=(e.ownerDocument||e).createElement("link"),Ge(u);var i=u;return i._p=new Promise(function(o,d){i.onload=o,i.onerror=d}),Xe(u,"link",n),a.state.loading|=4,Zu(u,t.precedence,e),a.instance=u;case"script":return u=Ln(t.src),(l=e.querySelector(Ml(u)))?(a.instance=l,Ge(l),l):(n=t,(l=Ea.get(u))&&(n=E({},t),Sr(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ge(l),Xe(l,"link",n),e.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,Zu(n,t.precedence,e));return a.instance}function Zu(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,u=l,i=0;i<n.length;i++){var o=n[i];if(o.dataset.precedence===a)u=o;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function _r(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Sr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Ku=null;function Bf(e,a,t){if(Ku===null){var n=new Map,l=Ku=new Map;l.set(t,n)}else l=Ku,n=l.get(t),n||(n=new Map,l.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var u=t[l];if(!(u[wn]||u[Qe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(a)||"";i=e+i;var o=n.get(i);o?o.push(u):n.set(i,[u])}}return n}function Uf(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Jv(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Hf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Mv(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Nn(n.href),u=a.querySelector(Jl(l));if(u){a=u._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Fu.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=u,Ge(u);return}u=a.ownerDocument||a,n=Nf(n),(l=Ea.get(l))&&_r(n,l),u=u.createElement("link"),Ge(u);var i=u;i._p=new Promise(function(o,d){i.onload=o,i.onerror=d}),Xe(u,"link",n),t.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Fu.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var qr=0;function xv(e,a){return e.stylesheets&&e.count===0&&Wu(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&Wu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+a);0<e.imgBytes&&qr===0&&(qr=62500*ov());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>qr?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pu=null;function Wu(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pu=new Map,a.forEach(Cv,e),Pu=null,Fu.call(e))}function Cv(e,a){if(!(a.state.loading&4)){var t=Pu.get(e);if(t)var n=t.get(null);else{t=new Map,Pu.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var i=l[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),n=i)}n&&t.set(null,n)}l=a.instance,i=l.getAttribute("data-precedence"),u=t.get(i)||n,u===n&&t.set(null,l),t.set(i,l),this.count++,n=Fu.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),a.state.loading|=4}}var xl={$$typeof:K,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Rv(e,a,t,n,l,u,i,o,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.hiddenUpdates=bs(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Gf(e,a,t,n,l,u,i,o,d,_,M,D){return e=new Rv(e,a,t,i,d,_,M,D,o),a=1,u===!0&&(a|=24),u=ca(3,null,null,a),e.current=u,u.stateNode=e,a=ni(),a.refCount++,e.pooledCache=a,a.refCount++,u.memoizedState={element:n,isDehydrated:t,cache:a},ii(u),e}function Yf(e){return e?(e=dn,e):dn}function Qf(e,a,t,n,l,u){l=Yf(l),n.context===null?n.context=l:n.pendingContext=l,n=pt(a),n.payload={element:t},u=u===void 0?null:u,u!==null&&(n.callback=u),t=At(e,n,a),t!==null&&(na(t,e,a),il(t,e,a))}function Vf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Er(e,a){Vf(e,a),(e=e.alternate)&&Vf(e,a)}function wf(e){if(e.tag===13||e.tag===31){var a=Ut(e,67108864);a!==null&&na(a,e,67108864),Er(e,67108864)}}function kf(e){if(e.tag===13||e.tag===31){var a=Aa();a=ys(a);var t=Ut(e,a);t!==null&&na(t,e,a),Er(e,a)}}var $u=!0;function Dv(e,a,t,n){var l=x.T;x.T=null;var u=L.p;try{L.p=2,Tr(e,a,t,n)}finally{L.p=u,x.T=l}}function Ov(e,a,t,n){var l=x.T;x.T=null;var u=L.p;try{L.p=8,Tr(e,a,t,n)}finally{L.p=u,x.T=l}}function Tr(e,a,t,n){if($u){var l=Jr(n);if(l===null)fr(e,a,n,Iu,t),Zf(e,n);else if(Nv(l,e,a,t,n))n.stopPropagation();else if(Zf(e,n),a&4&&-1<zv.indexOf(e)){for(;l!==null;){var u=an(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Ot(u.pendingLanes);if(i!==0){var o=u;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var d=1<<31-ra(i);o.entanglements[1]|=d,i&=~d}za(u),(ce&6)===0&&(Nu=sa()+500,Sl(0))}}break;case 31:case 13:o=Ut(u,2),o!==null&&na(o,u,2),Bu(),Er(u,2)}if(u=Jr(n),u===null&&fr(e,a,n,Iu,t),u===l)break;l=u}l!==null&&n.stopPropagation()}else fr(e,a,n,null,t)}}function Jr(e){return e=xs(e),Mr(e)}var Iu=null;function Mr(e){if(Iu=null,e=en(e),e!==null){var a=A(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=j(a),e!==null)return e;e=null}else if(t===31){if(e=J(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Iu=e,null}function Xf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bp()){case $r:return 2;case Ir:return 8;case Ql:case yp:return 32;case eo:return 268435456;default:return 32}default:return 32}}var xr=!1,Tt=null,Jt=null,Mt=null,Cl=new Map,Rl=new Map,xt=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zf(e,a){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Cl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(a.pointerId)}}function Dl(e,a,t,n,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:u,targetContainers:[l]},a!==null&&(a=an(a),a!==null&&wf(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),e)}function Nv(e,a,t,n,l){switch(a){case"focusin":return Tt=Dl(Tt,e,a,t,n,l),!0;case"dragenter":return Jt=Dl(Jt,e,a,t,n,l),!0;case"mouseover":return Mt=Dl(Mt,e,a,t,n,l),!0;case"pointerover":var u=l.pointerId;return Cl.set(u,Dl(Cl.get(u)||null,e,a,t,n,l)),!0;case"gotpointercapture":return u=l.pointerId,Rl.set(u,Dl(Rl.get(u)||null,e,a,t,n,l)),!0}return!1}function Kf(e){var a=en(e.target);if(a!==null){var t=A(a);if(t!==null){if(a=t.tag,a===13){if(a=j(t),a!==null){e.blockedOn=a,so(e.priority,function(){kf(t)});return}}else if(a===31){if(a=J(t),a!==null){e.blockedOn=a,so(e.priority,function(){kf(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function es(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Jr(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Ms=n,t.target.dispatchEvent(n),Ms=null}else return a=an(t),a!==null&&wf(a),e.blockedOn=t,!1;a.shift()}return!0}function Ff(e,a,t){es(e)&&t.delete(a)}function Lv(){xr=!1,Tt!==null&&es(Tt)&&(Tt=null),Jt!==null&&es(Jt)&&(Jt=null),Mt!==null&&es(Mt)&&(Mt=null),Cl.forEach(Ff),Rl.forEach(Ff)}function as(e,a){e.blockedOn===a&&(e.blockedOn=null,xr||(xr=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Lv)))}var ts=null;function Pf(e){ts!==e&&(ts=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ts===e&&(ts=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],l=e[a+2];if(typeof n!="function"){if(Mr(n||t)===null)continue;break}var u=an(t);u!==null&&(e.splice(a,3),a-=3,Ji(u,{pending:!0,data:l,method:t.method,action:n},n,l))}}))}function Bn(e){function a(d){return as(d,e)}Tt!==null&&as(Tt,e),Jt!==null&&as(Jt,e),Mt!==null&&as(Mt,e),Cl.forEach(a),Rl.forEach(a);for(var t=0;t<xt.length;t++){var n=xt[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<xt.length&&(t=xt[0],t.blockedOn===null);)Kf(t),t.blockedOn===null&&xt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var l=t[n],u=t[n+1],i=l[We]||null;if(typeof u=="function")i||Pf(t);else if(i){var o=null;if(u&&u.hasAttribute("formAction")){if(l=u,i=u[We]||null)o=i.formAction;else if(Mr(l)!==null)continue}else o=i.action;typeof o=="function"?t[n+1]=o:(t.splice(n,3),n-=3),Pf(t)}}}function Wf(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return l=i})},focusReset:"manual",scroll:"manual"})}function a(){l!==null&&(l(),l=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),l!==null&&(l(),l=null)}}}function Cr(e){this._internalRoot=e}ns.prototype.render=Cr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var t=a.current,n=Aa();Qf(t,n,e,a,null,null)},ns.prototype.unmount=Cr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Qf(e.current,2,null,e,null,null),Bu(),a[It]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var a=uo();e={blockedOn:null,target:e,priority:a};for(var t=0;t<xt.length&&a!==0&&a<xt[t].priority;t++);xt.splice(t,0,e),t===0&&Kf(e)}};var $f=m.version;if($f!=="19.2.0")throw Error(r(527,$f,"19.2.0"));L.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(a),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var Bv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{Yn=ls.inject(Bv),ia=ls}catch{}}return zl.createRoot=function(e,a){if(!f(e))throw Error(r(299));var t=!1,n="",l=lm,u=um,i=sm;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=Gf(e,1,!1,null,null,t,n,null,l,u,i,Wf),e[It]=a.current,mr(e),new Cr(a)},zl.hydrateRoot=function(e,a,t){if(!f(e))throw Error(r(299));var n=!1,l="",u=lm,i=um,o=sm,d=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.formState!==void 0&&(d=t.formState)),a=Gf(e,1,!0,a,t??null,n,l,d,u,i,o,Wf),a.context=Yf(null),t=a.current,n=Aa(),n=ys(n),l=pt(n),l.callback=null,At(t,l,n),t=n,a.current.lanes=t,Vn(a,t),za(a),e[It]=a.current,mr(e),new ns(a)},zl.version="19.2.0",zl}var rd;function Kv(){if(rd)return Or.exports;rd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(m){console.error(m)}}return s(),Or.exports=Zv(),Or.exports}var Fv=Kv();var od="popstate";function Pv(s={}){function m(r,f){let{pathname:A,search:j,hash:J}=r.location;return Hr("",{pathname:A,search:j,hash:J},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(r,f){return typeof f=="string"?f:Bl(f)}return $v(m,c,null,s)}function qe(s,m){if(s===!1||s===null||typeof s>"u")throw new Error(m)}function Ca(s,m){if(!s){typeof console<"u"&&console.warn(m);try{throw new Error(m)}catch{}}}function Wv(){return Math.random().toString(36).substring(2,10)}function cd(s,m){return{usr:s.state,key:s.key,idx:m}}function Hr(s,m,c=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof m=="string"?Un(m):m,state:c,key:m&&m.key||r||Wv()}}function Bl({pathname:s="/",search:m="",hash:c=""}){return m&&m!=="?"&&(s+=m.charAt(0)==="?"?m:"?"+m),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function Un(s){let m={};if(s){let c=s.indexOf("#");c>=0&&(m.hash=s.substring(c),s=s.substring(0,c));let r=s.indexOf("?");r>=0&&(m.search=s.substring(r),s=s.substring(0,r)),s&&(m.pathname=s)}return m}function $v(s,m,c,r={}){let{window:f=document.defaultView,v5Compat:A=!1}=r,j=f.history,J="POP",g=null,p=T();p==null&&(p=0,j.replaceState({...j.state,idx:p},""));function T(){return(j.state||{idx:null}).idx}function E(){J="POP";let V=T(),H=V==null?null:V-p;p=V,g&&g({action:J,location:Z.location,delta:H})}function N(V,H){J="PUSH";let G=Hr(Z.location,V,H);p=T()+1;let K=cd(G,p),_e=Z.createHref(G);try{j.pushState(K,"",_e)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;f.location.assign(_e)}A&&g&&g({action:J,location:Z.location,delta:1})}function Q(V,H){J="REPLACE";let G=Hr(Z.location,V,H);p=T();let K=cd(G,p),_e=Z.createHref(G);j.replaceState(K,"",_e),A&&g&&g({action:J,location:Z.location,delta:0})}function k(V){return Iv(V)}let Z={get action(){return J},get location(){return s(f,j)},listen(V){if(g)throw new Error("A history only accepts one active listener");return f.addEventListener(od,E),g=V,()=>{f.removeEventListener(od,E),g=null}},createHref(V){return m(f,V)},createURL:k,encodeLocation(V){let H=k(V);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:N,replace:Q,go(V){return j.go(V)}};return Z}function Iv(s,m=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),qe(c,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Bl(s);return r=r.replace(/ $/,"%20"),!m&&r.startsWith("//")&&(r=c+r),new URL(r,c)}function hd(s,m,c="/"){return eh(s,m,c,!1)}function eh(s,m,c,r){let f=typeof m=="string"?Un(m):m,A=ut(f.pathname||"/",c);if(A==null)return null;let j=gd(s);ah(j);let J=null;for(let g=0;J==null&&g<j.length;++g){let p=fh(A);J=ch(j[g],p,r)}return J}function gd(s,m=[],c=[],r="",f=!1){let A=(j,J,g=f,p)=>{let T={relativePath:p===void 0?j.path||"":p,caseSensitive:j.caseSensitive===!0,childrenIndex:J,route:j};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(r)&&g)return;qe(T.relativePath.startsWith(r),`Absolute route path "${T.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(r.length)}let E=lt([r,T.relativePath]),N=c.concat(T);j.children&&j.children.length>0&&(qe(j.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),gd(j.children,m,N,E,g)),!(j.path==null&&!j.index)&&m.push({path:E,score:rh(E,j.index),routesMeta:N})};return s.forEach((j,J)=>{if(j.path===""||!j.path?.includes("?"))A(j,J);else for(let g of bd(j.path))A(j,J,!0,g)}),m}function bd(s){let m=s.split("/");if(m.length===0)return[];let[c,...r]=m,f=c.endsWith("?"),A=c.replace(/\?$/,"");if(r.length===0)return f?[A,""]:[A];let j=bd(r.join("/")),J=[];return J.push(...j.map(g=>g===""?A:[A,g].join("/"))),f&&J.push(...j),J.map(g=>s.startsWith("/")&&g===""?"/":g)}function ah(s){s.sort((m,c)=>m.score!==c.score?c.score-m.score:oh(m.routesMeta.map(r=>r.childrenIndex),c.routesMeta.map(r=>r.childrenIndex)))}var th=/^:[\w-]+$/,nh=3,lh=2,uh=1,sh=10,ih=-2,md=s=>s==="*";function rh(s,m){let c=s.split("/"),r=c.length;return c.some(md)&&(r+=ih),m&&(r+=lh),c.filter(f=>!md(f)).reduce((f,A)=>f+(th.test(A)?nh:A===""?uh:sh),r)}function oh(s,m){return s.length===m.length&&s.slice(0,-1).every((r,f)=>r===m[f])?s[s.length-1]-m[m.length-1]:0}function ch(s,m,c=!1){let{routesMeta:r}=s,f={},A="/",j=[];for(let J=0;J<r.length;++J){let g=r[J],p=J===r.length-1,T=A==="/"?m:m.slice(A.length)||"/",E=rs({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},T),N=g.route;if(!E&&p&&c&&!r[r.length-1].route.index&&(E=rs({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},T)),!E)return null;Object.assign(f,E.params),j.push({params:f,pathname:lt([A,E.pathname]),pathnameBase:hh(lt([A,E.pathnameBase])),route:N}),E.pathnameBase!=="/"&&(A=lt([A,E.pathnameBase]))}return j}function rs(s,m){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[c,r]=mh(s.path,s.caseSensitive,s.end),f=m.match(c);if(!f)return null;let A=f[0],j=A.replace(/(.)\/+$/,"$1"),J=f.slice(1);return{params:r.reduce((p,{paramName:T,isOptional:E},N)=>{if(T==="*"){let k=J[N]||"";j=A.slice(0,A.length-k.length).replace(/(.)\/+$/,"$1")}const Q=J[N];return E&&!Q?p[T]=void 0:p[T]=(Q||"").replace(/%2F/g,"/"),p},{}),pathname:A,pathnameBase:j,pattern:s}}function mh(s,m=!1,c=!0){Ca(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],f="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(j,J,g)=>(r.push({paramName:J,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),f+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":s!==""&&s!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,m?void 0:"i"),r]}function fh(s){try{return s.split("/").map(m=>decodeURIComponent(m).replace(/\//g,"%2F")).join("/")}catch(m){return Ca(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`),s}}function ut(s,m){if(m==="/")return s;if(!s.toLowerCase().startsWith(m.toLowerCase()))return null;let c=m.endsWith("/")?m.length-1:m.length,r=s.charAt(c);return r&&r!=="/"?null:s.slice(c)||"/"}var dh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ph=s=>dh.test(s);function Ah(s,m="/"){let{pathname:c,search:r="",hash:f=""}=typeof s=="string"?Un(s):s,A;if(c)if(ph(c))A=c;else{if(c.includes("//")){let j=c;c=c.replace(/\/\/+/g,"/"),Ca(!1,`Pathnames cannot have embedded double slashes - normalizing ${j} -> ${c}`)}c.startsWith("/")?A=fd(c.substring(1),"/"):A=fd(c,m)}else A=m;return{pathname:A,search:gh(r),hash:bh(f)}}function fd(s,m){let c=m.replace(/\/+$/,"").split("/");return s.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function Br(s,m,c,r){return`Cannot include a '${s}' character in a manually specified \`to.${m}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vh(s){return s.filter((m,c)=>c===0||m.route.path&&m.route.path.length>0)}function yd(s){let m=vh(s);return m.map((c,r)=>r===m.length-1?c.pathname:c.pathnameBase)}function jd(s,m,c,r=!1){let f;typeof s=="string"?f=Un(s):(f={...s},qe(!f.pathname||!f.pathname.includes("?"),Br("?","pathname","search",f)),qe(!f.pathname||!f.pathname.includes("#"),Br("#","pathname","hash",f)),qe(!f.search||!f.search.includes("#"),Br("#","search","hash",f)));let A=s===""||f.pathname==="",j=A?"/":f.pathname,J;if(j==null)J=c;else{let E=m.length-1;if(!r&&j.startsWith("..")){let N=j.split("/");for(;N[0]==="..";)N.shift(),E-=1;f.pathname=N.join("/")}J=E>=0?m[E]:"/"}let g=Ah(f,J),p=j&&j!=="/"&&j.endsWith("/"),T=(A||j===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(p||T)&&(g.pathname+="/"),g}var lt=s=>s.join("/").replace(/\/\/+/g,"/"),hh=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),gh=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,bh=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function yh(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _d=["POST","PUT","PATCH","DELETE"];new Set(_d);var jh=["GET",..._d];new Set(jh);var Hn=C.createContext(null);Hn.displayName="DataRouter";var ms=C.createContext(null);ms.displayName="DataRouterState";C.createContext(!1);var Sd=C.createContext({isTransitioning:!1});Sd.displayName="ViewTransition";var _h=C.createContext(new Map);_h.displayName="Fetchers";var Sh=C.createContext(null);Sh.displayName="Await";var La=C.createContext(null);La.displayName="Navigation";var Ul=C.createContext(null);Ul.displayName="Location";var Ba=C.createContext({outlet:null,matches:[],isDataRoute:!1});Ba.displayName="Route";var Vr=C.createContext(null);Vr.displayName="RouteError";function qh(s,{relative:m}={}){qe(Hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:r}=C.useContext(La),{hash:f,pathname:A,search:j}=Gl(s,{relative:m}),J=A;return c!=="/"&&(J=A==="/"?c:lt([c,A])),r.createHref({pathname:J,search:j,hash:f})}function Hl(){return C.useContext(Ul)!=null}function $t(){return qe(Hl(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Ul).location}var qd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ed(s){C.useContext(La).static||C.useLayoutEffect(s)}function Eh(){let{isDataRoute:s}=C.useContext(Ba);return s?Hh():Th()}function Th(){qe(Hl(),"useNavigate() may be used only in the context of a <Router> component.");let s=C.useContext(Hn),{basename:m,navigator:c}=C.useContext(La),{matches:r}=C.useContext(Ba),{pathname:f}=$t(),A=JSON.stringify(yd(r)),j=C.useRef(!1);return Ed(()=>{j.current=!0}),C.useCallback((g,p={})=>{if(Ca(j.current,qd),!j.current)return;if(typeof g=="number"){c.go(g);return}let T=jd(g,JSON.parse(A),f,p.relative==="path");s==null&&m!=="/"&&(T.pathname=T.pathname==="/"?m:lt([m,T.pathname])),(p.replace?c.replace:c.push)(T,p.state,p)},[m,c,A,f,s])}C.createContext(null);function Jh(){let{matches:s}=C.useContext(Ba),m=s[s.length-1];return m?m.params:{}}function Gl(s,{relative:m}={}){let{matches:c}=C.useContext(Ba),{pathname:r}=$t(),f=JSON.stringify(yd(c));return C.useMemo(()=>jd(s,JSON.parse(f),r,m==="path"),[s,f,r,m])}function Mh(s,m){return Td(s,m)}function Td(s,m,c,r,f){qe(Hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:A}=C.useContext(La),{matches:j}=C.useContext(Ba),J=j[j.length-1],g=J?J.params:{},p=J?J.pathname:"/",T=J?J.pathnameBase:"/",E=J&&J.route;{let G=E&&E.path||"";Jd(p,!E||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let N=$t(),Q;if(m){let G=typeof m=="string"?Un(m):m;qe(T==="/"||G.pathname?.startsWith(T),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${G.pathname}" was given in the \`location\` prop.`),Q=G}else Q=N;let k=Q.pathname||"/",Z=k;if(T!=="/"){let G=T.replace(/^\//,"").split("/");Z="/"+k.replace(/^\//,"").split("/").slice(G.length).join("/")}let V=hd(s,{pathname:Z});Ca(E||V!=null,`No routes matched location "${Q.pathname}${Q.search}${Q.hash}" `),Ca(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${Q.pathname}${Q.search}${Q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Oh(V&&V.map(G=>Object.assign({},G,{params:Object.assign({},g,G.params),pathname:lt([T,A.encodeLocation?A.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?T:lt([T,A.encodeLocation?A.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),j,c,r,f);return m&&H?C.createElement(Ul.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Q},navigationType:"POP"}},H):H}function xh(){let s=Uh(),m=yh(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),c=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:r},A={padding:"2px 4px",backgroundColor:r},j=null;return console.error("Error handled by React Router default ErrorBoundary:",s),j=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:A},"ErrorBoundary")," or"," ",C.createElement("code",{style:A},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},m),c?C.createElement("pre",{style:f},c):null,j)}var Ch=C.createElement(xh,null),Rh=class extends C.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,m){return m.location!==s.location||m.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:m.error,location:m.location,revalidation:s.revalidation||m.revalidation}}componentDidCatch(s,m){this.props.onError?this.props.onError(s,m):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?C.createElement(Ba.Provider,{value:this.props.routeContext},C.createElement(Vr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Dh({routeContext:s,match:m,children:c}){let r=C.useContext(Hn);return r&&r.static&&r.staticContext&&(m.route.errorElement||m.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=m.route.id),C.createElement(Ba.Provider,{value:s},c)}function Oh(s,m=[],c=null,r=null,f=null){if(s==null){if(!c)return null;if(c.errors)s=c.matches;else if(m.length===0&&!c.initialized&&c.matches.length>0)s=c.matches;else return null}let A=s,j=c?.errors;if(j!=null){let T=A.findIndex(E=>E.route.id&&j?.[E.route.id]!==void 0);qe(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(j).join(",")}`),A=A.slice(0,Math.min(A.length,T+1))}let J=!1,g=-1;if(c)for(let T=0;T<A.length;T++){let E=A[T];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(g=T),E.route.id){let{loaderData:N,errors:Q}=c,k=E.route.loader&&!N.hasOwnProperty(E.route.id)&&(!Q||Q[E.route.id]===void 0);if(E.route.lazy||k){J=!0,g>=0?A=A.slice(0,g+1):A=[A[0]];break}}}let p=c&&r?(T,E)=>{r(T,{location:c.location,params:c.matches?.[0]?.params??{},errorInfo:E})}:void 0;return A.reduceRight((T,E,N)=>{let Q,k=!1,Z=null,V=null;c&&(Q=j&&E.route.id?j[E.route.id]:void 0,Z=E.route.errorElement||Ch,J&&(g<0&&N===0?(Jd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,V=null):g===N&&(k=!0,V=E.route.hydrateFallbackElement||null)));let H=m.concat(A.slice(0,N+1)),G=()=>{let K;return Q?K=Z:k?K=V:E.route.Component?K=C.createElement(E.route.Component,null):E.route.element?K=E.route.element:K=T,C.createElement(Dh,{match:E,routeContext:{outlet:T,matches:H,isDataRoute:c!=null},children:K})};return c&&(E.route.ErrorBoundary||E.route.errorElement||N===0)?C.createElement(Rh,{location:c.location,revalidation:c.revalidation,component:Z,error:Q,children:G(),routeContext:{outlet:null,matches:H,isDataRoute:!0},onError:p}):G()},null)}function wr(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zh(s){let m=C.useContext(Hn);return qe(m,wr(s)),m}function Nh(s){let m=C.useContext(ms);return qe(m,wr(s)),m}function Lh(s){let m=C.useContext(Ba);return qe(m,wr(s)),m}function kr(s){let m=Lh(s),c=m.matches[m.matches.length-1];return qe(c.route.id,`${s} can only be used on routes that contain a unique "id"`),c.route.id}function Bh(){return kr("useRouteId")}function Uh(){let s=C.useContext(Vr),m=Nh("useRouteError"),c=kr("useRouteError");return s!==void 0?s:m.errors?.[c]}function Hh(){let{router:s}=zh("useNavigate"),m=kr("useNavigate"),c=C.useRef(!1);return Ed(()=>{c.current=!0}),C.useCallback(async(f,A={})=>{Ca(c.current,qd),c.current&&(typeof f=="number"?s.navigate(f):await s.navigate(f,{fromRouteId:m,...A}))},[s,m])}var dd={};function Jd(s,m,c){!m&&!dd[s]&&(dd[s]=!0,Ca(!1,c))}C.memo(Gh);function Gh({routes:s,future:m,state:c,unstable_onError:r}){return Td(s,void 0,c,r,m)}function Ll(s){qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yh({basename:s="/",children:m=null,location:c,navigationType:r="POP",navigator:f,static:A=!1}){qe(!Hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=s.replace(/^\/*/,"/"),J=C.useMemo(()=>({basename:j,navigator:f,static:A,future:{}}),[j,f,A]);typeof c=="string"&&(c=Un(c));let{pathname:g="/",search:p="",hash:T="",state:E=null,key:N="default"}=c,Q=C.useMemo(()=>{let k=ut(g,j);return k==null?null:{location:{pathname:k,search:p,hash:T,state:E,key:N},navigationType:r}},[j,g,p,T,E,N,r]);return Ca(Q!=null,`<Router basename="${j}"> is not able to match the URL "${g}${p}${T}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:C.createElement(La.Provider,{value:J},C.createElement(Ul.Provider,{children:m,value:Q}))}function Qh({children:s,location:m}){return Mh(Gr(s),m)}function Gr(s,m=[]){let c=[];return C.Children.forEach(s,(r,f)=>{if(!C.isValidElement(r))return;let A=[...m,f];if(r.type===C.Fragment){c.push.apply(c,Gr(r.props.children,A));return}qe(r.type===Ll,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let j={id:r.props.id||A.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(j.children=Gr(r.props.children,A)),c.push(j)}),c}var ss="get",is="application/x-www-form-urlencoded";function fs(s){return s!=null&&typeof s.tagName=="string"}function Vh(s){return fs(s)&&s.tagName.toLowerCase()==="button"}function wh(s){return fs(s)&&s.tagName.toLowerCase()==="form"}function kh(s){return fs(s)&&s.tagName.toLowerCase()==="input"}function Xh(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Zh(s,m){return s.button===0&&(!m||m==="_self")&&!Xh(s)}var us=null;function Kh(){if(us===null)try{new FormData(document.createElement("form"),0),us=!1}catch{us=!0}return us}var Fh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ur(s){return s!=null&&!Fh.has(s)?(Ca(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${is}"`),null):s}function Ph(s,m){let c,r,f,A,j;if(wh(s)){let J=s.getAttribute("action");r=J?ut(J,m):null,c=s.getAttribute("method")||ss,f=Ur(s.getAttribute("enctype"))||is,A=new FormData(s)}else if(Vh(s)||kh(s)&&(s.type==="submit"||s.type==="image")){let J=s.form;if(J==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=s.getAttribute("formaction")||J.getAttribute("action");if(r=g?ut(g,m):null,c=s.getAttribute("formmethod")||J.getAttribute("method")||ss,f=Ur(s.getAttribute("formenctype"))||Ur(J.getAttribute("enctype"))||is,A=new FormData(J,s),!Kh()){let{name:p,type:T,value:E}=s;if(T==="image"){let N=p?`${p}.`:"";A.append(`${N}x`,"0"),A.append(`${N}y`,"0")}else p&&A.append(p,E)}}else{if(fs(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=ss,r=null,f=is,j=s}return A&&f==="text/plain"&&(j=A,A=void 0),{action:r,method:c.toLowerCase(),encType:f,formData:A,body:j}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xr(s,m){if(s===!1||s===null||typeof s>"u")throw new Error(m)}function Wh(s,m,c){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${c}`:m&&ut(r.pathname,m)==="/"?r.pathname=`${m.replace(/\/$/,"")}/_root.${c}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${c}`,r}async function $h(s,m){if(s.id in m)return m[s.id];try{let c=await import(s.module);return m[s.id]=c,c}catch(c){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ih(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function eg(s,m,c){let r=await Promise.all(s.map(async f=>{let A=m.routes[f.route.id];if(A){let j=await $h(A,c);return j.links?j.links():[]}return[]}));return lg(r.flat(1).filter(Ih).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function pd(s,m,c,r,f,A){let j=(g,p)=>c[p]?g.route.id!==c[p].route.id:!0,J=(g,p)=>c[p].pathname!==g.pathname||c[p].route.path?.endsWith("*")&&c[p].params["*"]!==g.params["*"];return A==="assets"?m.filter((g,p)=>j(g,p)||J(g,p)):A==="data"?m.filter((g,p)=>{let T=r.routes[g.route.id];if(!T||!T.hasLoader)return!1;if(j(g,p)||J(g,p))return!0;if(g.route.shouldRevalidate){let E=g.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function ag(s,m,{includeHydrateFallback:c}={}){return tg(s.map(r=>{let f=m.routes[r.route.id];if(!f)return[];let A=[f.module];return f.clientActionModule&&(A=A.concat(f.clientActionModule)),f.clientLoaderModule&&(A=A.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(A=A.concat(f.hydrateFallbackModule)),f.imports&&(A=A.concat(f.imports)),A}).flat(1))}function tg(s){return[...new Set(s)]}function ng(s){let m={},c=Object.keys(s).sort();for(let r of c)m[r]=s[r];return m}function lg(s,m){let c=new Set;return new Set(m),s.reduce((r,f)=>{let A=JSON.stringify(ng(f));return c.has(A)||(c.add(A),r.push({key:A,link:f})),r},[])}function Md(){let s=C.useContext(Hn);return Xr(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function ug(){let s=C.useContext(ms);return Xr(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Zr=C.createContext(void 0);Zr.displayName="FrameworkContext";function xd(){let s=C.useContext(Zr);return Xr(s,"You must render this element inside a <HydratedRouter> element"),s}function sg(s,m){let c=C.useContext(Zr),[r,f]=C.useState(!1),[A,j]=C.useState(!1),{onFocus:J,onBlur:g,onMouseEnter:p,onMouseLeave:T,onTouchStart:E}=m,N=C.useRef(null);C.useEffect(()=>{if(s==="render"&&j(!0),s==="viewport"){let Z=H=>{H.forEach(G=>{j(G.isIntersecting)})},V=new IntersectionObserver(Z,{threshold:.5});return N.current&&V.observe(N.current),()=>{V.disconnect()}}},[s]),C.useEffect(()=>{if(r){let Z=setTimeout(()=>{j(!0)},100);return()=>{clearTimeout(Z)}}},[r]);let Q=()=>{f(!0)},k=()=>{f(!1),j(!1)};return c?s!=="intent"?[A,N,{}]:[A,N,{onFocus:Nl(J,Q),onBlur:Nl(g,k),onMouseEnter:Nl(p,Q),onMouseLeave:Nl(T,k),onTouchStart:Nl(E,Q)}]:[!1,N,{}]}function Nl(s,m){return c=>{s&&s(c),c.defaultPrevented||m(c)}}function ig({page:s,...m}){let{router:c}=Md(),r=C.useMemo(()=>hd(c.routes,s,c.basename),[c.routes,s,c.basename]);return r?C.createElement(og,{page:s,matches:r,...m}):null}function rg(s){let{manifest:m,routeModules:c}=xd(),[r,f]=C.useState([]);return C.useEffect(()=>{let A=!1;return eg(s,m,c).then(j=>{A||f(j)}),()=>{A=!0}},[s,m,c]),r}function og({page:s,matches:m,...c}){let r=$t(),{manifest:f,routeModules:A}=xd(),{basename:j}=Md(),{loaderData:J,matches:g}=ug(),p=C.useMemo(()=>pd(s,m,g,f,r,"data"),[s,m,g,f,r]),T=C.useMemo(()=>pd(s,m,g,f,r,"assets"),[s,m,g,f,r]),E=C.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let k=new Set,Z=!1;if(m.forEach(H=>{let G=f.routes[H.route.id];!G||!G.hasLoader||(!p.some(K=>K.route.id===H.route.id)&&H.route.id in J&&A[H.route.id]?.shouldRevalidate||G.hasClientLoader?Z=!0:k.add(H.route.id))}),k.size===0)return[];let V=Wh(s,j,"data");return Z&&k.size>0&&V.searchParams.set("_routes",m.filter(H=>k.has(H.route.id)).map(H=>H.route.id).join(",")),[V.pathname+V.search]},[j,J,r,f,p,m,s,A]),N=C.useMemo(()=>ag(T,f),[T,f]),Q=rg(T);return C.createElement(C.Fragment,null,E.map(k=>C.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...c})),N.map(k=>C.createElement("link",{key:k,rel:"modulepreload",href:k,...c})),Q.map(({key:k,link:Z})=>C.createElement("link",{key:k,nonce:c.nonce,...Z})))}function cg(...s){return m=>{s.forEach(c=>{typeof c=="function"?c(m):c!=null&&(c.current=m)})}}var Cd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cd&&(window.__reactRouterVersion="7.9.6")}catch{}function mg({basename:s,children:m,window:c}){let r=C.useRef();r.current==null&&(r.current=Pv({window:c,v5Compat:!0}));let f=r.current,[A,j]=C.useState({action:f.action,location:f.location}),J=C.useCallback(g=>{C.startTransition(()=>j(g))},[j]);return C.useLayoutEffect(()=>f.listen(J),[f,J]),C.createElement(Yh,{basename:s,children:m,location:A.location,navigationType:A.action,navigator:f})}var Rd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dd=C.forwardRef(function({onClick:m,discover:c="render",prefetch:r="none",relative:f,reloadDocument:A,replace:j,state:J,target:g,to:p,preventScrollReset:T,viewTransition:E,...N},Q){let{basename:k}=C.useContext(La),Z=typeof p=="string"&&Rd.test(p),V,H=!1;if(typeof p=="string"&&Z&&(V=p,Cd))try{let Te=new URL(window.location.href),la=p.startsWith("//")?new URL(Te.protocol+p):new URL(p),ua=ut(la.pathname,k);la.origin===Te.origin&&ua!=null?p=ua+la.search+la.hash:H=!0}catch{Ca(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=qh(p,{relative:f}),[K,_e,Ee]=sg(r,N),Be=Ag(p,{replace:j,state:J,target:g,preventScrollReset:T,relative:f,viewTransition:E});function ee(Te){m&&m(Te),Te.defaultPrevented||Be(Te)}let Ue=C.createElement("a",{...N,...Ee,href:V||G,onClick:H||A?m:ee,ref:cg(Q,_e),target:g,"data-discover":!Z&&c==="render"?"true":void 0});return K&&!Z?C.createElement(C.Fragment,null,Ue,C.createElement(ig,{page:G})):Ue});Dd.displayName="Link";var fg=C.forwardRef(function({"aria-current":m="page",caseSensitive:c=!1,className:r="",end:f=!1,style:A,to:j,viewTransition:J,children:g,...p},T){let E=Gl(j,{relative:p.relative}),N=$t(),Q=C.useContext(ms),{navigator:k,basename:Z}=C.useContext(La),V=Q!=null&&yg(E)&&J===!0,H=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,G=N.pathname,K=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;c||(G=G.toLowerCase(),K=K?K.toLowerCase():null,H=H.toLowerCase()),K&&Z&&(K=ut(K,Z)||K);const _e=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Ee=G===H||!f&&G.startsWith(H)&&G.charAt(_e)==="/",Be=K!=null&&(K===H||!f&&K.startsWith(H)&&K.charAt(H.length)==="/"),ee={isActive:Ee,isPending:Be,isTransitioning:V},Ue=Ee?m:void 0,Te;typeof r=="function"?Te=r(ee):Te=[r,Ee?"active":null,Be?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let la=typeof A=="function"?A(ee):A;return C.createElement(Dd,{...p,"aria-current":Ue,className:Te,ref:T,style:la,to:j,viewTransition:J},typeof g=="function"?g(ee):g)});fg.displayName="NavLink";var dg=C.forwardRef(({discover:s="render",fetcherKey:m,navigate:c,reloadDocument:r,replace:f,state:A,method:j=ss,action:J,onSubmit:g,relative:p,preventScrollReset:T,viewTransition:E,...N},Q)=>{let k=gg(),Z=bg(J,{relative:p}),V=j.toLowerCase()==="get"?"get":"post",H=typeof J=="string"&&Rd.test(J),G=K=>{if(g&&g(K),K.defaultPrevented)return;K.preventDefault();let _e=K.nativeEvent.submitter,Ee=_e?.getAttribute("formmethod")||j;k(_e||K.currentTarget,{fetcherKey:m,method:Ee,navigate:c,replace:f,state:A,relative:p,preventScrollReset:T,viewTransition:E})};return C.createElement("form",{ref:Q,method:V,action:Z,onSubmit:r?g:G,...N,"data-discover":!H&&s==="render"?"true":void 0})});dg.displayName="Form";function pg(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Od(s){let m=C.useContext(Hn);return qe(m,pg(s)),m}function Ag(s,{target:m,replace:c,state:r,preventScrollReset:f,relative:A,viewTransition:j}={}){let J=Eh(),g=$t(),p=Gl(s,{relative:A});return C.useCallback(T=>{if(Zh(T,m)){T.preventDefault();let E=c!==void 0?c:Bl(g)===Bl(p);J(s,{replace:E,state:r,preventScrollReset:f,relative:A,viewTransition:j})}},[g,J,p,c,r,m,s,f,A,j])}var vg=0,hg=()=>`__${String(++vg)}__`;function gg(){let{router:s}=Od("useSubmit"),{basename:m}=C.useContext(La),c=Bh();return C.useCallback(async(r,f={})=>{let{action:A,method:j,encType:J,formData:g,body:p}=Ph(r,m);if(f.navigate===!1){let T=f.fetcherKey||hg();await s.fetch(T,c,f.action||A,{preventScrollReset:f.preventScrollReset,formData:g,body:p,formMethod:f.method||j,formEncType:f.encType||J,flushSync:f.flushSync})}else await s.navigate(f.action||A,{preventScrollReset:f.preventScrollReset,formData:g,body:p,formMethod:f.method||j,formEncType:f.encType||J,replace:f.replace,state:f.state,fromRouteId:c,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,m,c])}function bg(s,{relative:m}={}){let{basename:c}=C.useContext(La),r=C.useContext(Ba);qe(r,"useFormAction must be used inside a RouteContext");let[f]=r.matches.slice(-1),A={...Gl(s||".",{relative:m})},j=$t();if(s==null){A.search=j.search;let J=new URLSearchParams(A.search),g=J.getAll("index");if(g.some(T=>T==="")){J.delete("index"),g.filter(E=>E).forEach(E=>J.append("index",E));let T=J.toString();A.search=T?`?${T}`:""}}return(!s||s===".")&&f.route.index&&(A.search=A.search?A.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(A.pathname=A.pathname==="/"?c:lt([c,A.pathname])),Bl(A)}function yg(s,{relative:m}={}){let c=C.useContext(Sd);qe(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Od("useViewTransitionState"),f=Gl(s,{relative:m});if(!c.isTransitioning)return!1;let A=ut(c.currentLocation.pathname,r)||c.currentLocation.pathname,j=ut(c.nextLocation.pathname,r)||c.nextLocation.pathname;return rs(f.pathname,j)!=null||rs(f.pathname,A)!=null}function Kr(s,m,c,r){return c&&r?`/stemcorp/songs/${r.toLowerCase()}/${c.toLowerCase()}/${m.toLowerCase()}/${s.toLowerCase()}`:`/stemcorp/songs/${m.toLowerCase()}/${s.toLowerCase()}`}function jg({title:s,coverUrl:m,type:c}){const r=Kr(s,c);return z.jsx("div",{children:z.jsx("a",{href:r,className:"song-link",title:s,children:z.jsx("img",{src:m,alt:s,className:"song-cover"})})})}const _g="/stemcorp/assets/01_PREPA%20(feat.%20Tim%C3%A9on3X)-a8wDCzOp.flac",Sg="/stemcorp/assets/02_SDA-C_GlQinm.flac",qg="/stemcorp/assets/03_DB%20COOPER-BTAMweSt.flac",Eg="/stemcorp/assets/04_R_D%20(feat.%20Teh%20Haar)-mi4c2MwL.flac",Tg="/stemcorp/assets/05_CORNUCOPIA-B7Mk1ee3.flac",Jg="/stemcorp/assets/06_MOUTON%20NOIR-CnQnWQMn.flac",Mg="/stemcorp/assets/07_ENERVE-CeNxYi2v.flac",xg="/stemcorp/assets/08_OVER-BrwA_e00.flac",Cg="/stemcorp/assets/09_BEHEMOTH-BhxGD4gk.flac",Rg="/stemcorp/assets/10_JEUNE%20STAR-B-UfbiCw.flac",Dg="/stemcorp/assets/11_VRAI%20FRERE-J0Nhe2O_.flac",Og="/stemcorp/assets/12_180-BZlrkEKO.flac",zg="/stemcorp/assets/01_SERAPHIN-ByDL-_YT.flac",Ng="/stemcorp/assets/02_MONSTER-izLRH9Mu.flac",Lg="/stemcorp/assets/03_ZOMBIE-_2mfA8Og.flac",Bg="/stemcorp/assets/04_MAYBACH-CoUxC_hs.flac",Ug="/stemcorp/assets/05_21-BJS9s1FY.flac",Hg="/stemcorp/assets/06_TENET-D64gWDr8.flac",Gg="/stemcorp/assets/07_CROQUEUSE%20DE%20DIAMANTS-gzi8-Ot4.flac",Yg="/stemcorp/assets/08_APRES%20LA%20GUERRE-BDPVZp9e.flac",Qg="/stemcorp/assets/09_MONTE%20DANS%20LE%20TRAIN-BcpQlfd5.flac",Vg="/stemcorp/assets/10_BABEL-C9laFGYK.flac",wg="/stemcorp/assets/11_MEMENTO%20MORI-TkD0AED3.flac",kg="/stemcorp/assets/12_OUTRO-C3-3RtC1.flac",Xg="/stemcorp/assets/10_PENITENCE-CIFfhg4g.flac",Zg="/stemcorp/assets/11_LAISSE%20POUR%20MORT-CqD5e_SQ.flac",Kg="/stemcorp/assets/12_MOURIR%20SOBRE-COEqDEaH.flac",Fg="/stemcorp/assets/1_DYSTOPIE-PwKqz2P0.flac",Pg="/stemcorp/assets/2_STEMCORP-CqzPxQjP.flac",Wg="/stemcorp/assets/3_IL%20FAUT-CJUv864O.flac",$g="/stemcorp/assets/4_ANGE%20ET%20DEMON-CbfkJpta.flac",Ig="/stemcorp/assets/5_PINNOCHIO-GMif8nmj.flac",e0="/stemcorp/assets/6_ARCTERYX-rqkWILf-.flac",a0="/stemcorp/assets/7_TOUT%20LES%20HEROS%20NE%20PORTENT%20PAS%20DE%20CAP%20(feat.%20Teh%20Haar)-DSmLnCZc.flac",t0="/stemcorp/assets/8_LE%20MONDE%20DANS%20LA%20MAIN-kUx6p_u9.flac",n0="/stemcorp/assets/9_LES%20ZINCS%20DES%20AUTRES-9JWKH5xQ.flac",l0="/stemcorp/assets/01_Victory%20lap-B2xfrhfM.flac",u0="/stemcorp/assets/02_Bodybag-SaOagGUJ.flac",s0="/stemcorp/assets/03_Rock%20band-CzbhNw-S.flac",i0="/stemcorp/assets/04_Twin%20Tower-DLznMU0_.flac",r0="/stemcorp/assets/05_Eczema-COY9rx3h.flac",o0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",c0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",m0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",f0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",d0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",p0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",A0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",v0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",h0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",g0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",b0="/stemcorp/assets/Phosphore%20(feat.%20Tim%C3%A9on3x)-DcG49lhp.flac",y0="data:audio/flac;base64,ZkxhQwAAACIQABAAAAAOAAAQCsRC8AABKBUZpoqKt9lOwI/kayOkhEYGhAAAdSAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMSAyMDE0MTEyNQYAAAARAAAARU5DT0RFUj1GTCBTdHVkaW8GAAAAVElUTEU9BgAAAEdFTlJFPQcAAABBUlRJU1Q9CQAAAENPTU1FTlRTPQgAAABDT05UQUNUPf/4yRgAwgAAAAAAALju//jJGAHFAAAAAAAAL5v/+MkYAswAAAAAAAAWAf/4yRgDywAAAAAAAIF0//jJGATeAAAAAAAAZTX/+MkYBdkAAAAAAADyQP/4yRgG0AAAAAAAAMva//jJGAfXAAAAAAAAXK//+MkYCPoAAAAAAACDXf/4yRgJ/QAAAAAAABQo//jJGAr0AAAAAAAALbL/+MkYC/MAAAAAAAC6x//4yRgM5gAAAAAAAF6G//jJGA3hAAAAAAAAyfP/+MkYDugAAAAAAADwaf/4yRgP7wAAAAAAAGcc//jJGBCyAAAAAAAAz4j/+MkYEbUAAAAAAABY/f/4eRgSCBS2AAAAAAAADgg=",j0="/stemcorp/assets/cover%20archange-BD9Rqarf.jpg",_0="/stemcorp/assets/seraphin_cover_2_3K-CjeaPCA-.jpg",S0="/stemcorp/assets/COver-BaloPrJc.jpg",q0="/stemcorp/assets/COver-D0bMOEKa.png",E0="/stemcorp/assets/Twin%20Activity%20Cover%2001-DRdslErG.jpg",T0="/stemcorp/assets/BA_3K-CRDJ1r0c.jpg",J0="/stemcorp/assets/cover%20cap-DiMlcy3G.jpg",M0="/stemcorp/assets/DMGCOVERFINALE-bJqtRJRs.jpg",x0="/stemcorp/assets/tim%C3%A9on%20x%20stem2-Txtx21ir.jpg",C0="/stemcorp/assets/COVER_ELEPHANT_3k-DLoulpnc.jpg",R0="/stemcorp/assets/chateau-Ccl_nhk3.jpg",D0="/stemcorp/assets/MTL%20FLAG%203K-CNUcbikn.jpg",O0="/stemcorp/assets/MW3%203K-CfvZhGU9.jpg",z0="/stemcorp/assets/akira%20julien%20final-CCKtL8ny.jpg",N0="/stemcorp/assets/coverPain-BL4CacNx.jpg",L0="/stemcorp/assets/phosphore%20cover-BTKvH61i.jpg",B0="/stemcorp/assets/rougir%20la%20banque%20cover-BzoIqyGj.jpg",zd={spotify:"https://open.spotify.com/album/2y1XmHsXfi1NPrC0ca8OMU",appleMusic:"https://music.apple.com/fr/album/archange/1667409927",deezer:"https://www.deezer.com/fr/album/399794257",soundcloud:"https://soundcloud.com/user-146029035/sets/archange",youtube:"https://youtu.be/Fvn0u1ZH6U8?si=moZhxZAut3pGAueS"},Nd="2023-02-22",U0={platforms:zd,releaseDate:Nd},H0=Object.freeze(Object.defineProperty({__proto__:null,default:U0,platforms:zd,releaseDate:Nd},Symbol.toStringTag,{value:"Module"})),Ld={spotify:"https://open.spotify.com/album/0BYf06Od0AwVaTklcRODKn",appleMusic:"https://music.apple.com/fr/album/seraphin/1880092058",deezer:"https://www.deezer.com/fr/album/925020141",soundcloud:"https://soundcloud.com/user-146029035/sets/seraphin",youtube:"https://youtu.be/8Axd88bb9v8?si=H-UsBJDqVT7eIYsJ"},Bd="2026-03-27",G0={platforms:Ld,releaseDate:Bd},Y0=Object.freeze(Object.defineProperty({__proto__:null,default:G0,platforms:Ld,releaseDate:Bd},Symbol.toStringTag,{value:"Module"})),Ud={spotify:"https://open.spotify.com/album/1QZLzHZ6lOy8qINnsrARnD",appleMusic:"https://music.apple.com/fr/album/1755878764",deezer:"https://www.deezer.com/fr/album/611660222",soundcloud:"https://soundcloud.com/user-146029035",youtube:"https://youtu.be/ly0ttXypX2c?si=cA7woaWH3ewrlKdH"},Hd="2024-08-23",Q0={platforms:Ud,releaseDate:Hd},V0=Object.freeze(Object.defineProperty({__proto__:null,default:Q0,platforms:Ud,releaseDate:Hd},Symbol.toStringTag,{value:"Module"})),Gd={spotify:"https://open.spotify.com/album/2y3WDqJg3qWKtiotftYAtS?si=zmn4Pt3xQ4arVBVB6WZIIQ",appleMusic:"https://music.apple.com/us/album/twin-activity-ep/1827355924",deezer:"https://www.deezer.com/fr/album/789323701",soundcloud:"https://soundcloud.com/user-146029035/sets/twin-activity",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_k3sWmWKOzaWzsXyQKB-ijnK1vWc5LYeDc&si=rgYAhAzgmcg0YAsH"},Yd="2025-08-15",w0={platforms:Gd,releaseDate:Yd},k0=Object.freeze(Object.defineProperty({__proto__:null,default:w0,platforms:Gd,releaseDate:Yd},Symbol.toStringTag,{value:"Module"})),Qd={spotify:"https://open.spotify.com/album/3DERMVUIEw0dSkV6gMSVuR?si=aQ-oO2qsTZGZup1Sv-pdUg",appleMusic:"https://music.apple.com/us/album/bag-single/1852734127",deezer:"https://link.deezer.com/s/32YkqrTHcPIfqFZxahz3D",soundcloud:"https://soundcloud.com/user-146029035/bag",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_me41BQvYBlGrqViip23VusE6EcrTfCjmc&si=YfX2Nihu7cQRlPW1"},Vd="2025-11-21",X0={platforms:Qd,releaseDate:Vd},Z0=Object.freeze(Object.defineProperty({__proto__:null,default:X0,platforms:Qd,releaseDate:Vd},Symbol.toStringTag,{value:"Module"})),wd={spotify:"https://open.spotify.com/album/2WMY2DtOhAt0G3yeScyyp3?si=le0wFEMNTR2n_Mqno8yfpA",appleMusic:"https://music.apple.com/us/album/cap-single/1796246637",deezer:"https://www.deezer.com/fr/album/710802841?host=0&deferredFl=1",soundcloud:"https://soundcloud.com/user-146029035/cap",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_kLGU00o1Pwp6676JozPIY4kYfFNwdzdq4&si=adIiIw58GY7K4OEN"},kd="2025-02-10",K0={platforms:wd,releaseDate:kd},F0=Object.freeze(Object.defineProperty({__proto__:null,default:K0,platforms:wd,releaseDate:kd},Symbol.toStringTag,{value:"Module"})),Xd={spotify:"https://open.spotify.com/album/5X3V3X7TRbRZosjyJ32LvT?si=dj0kmTtnQ4mUbihk508fow",appleMusic:"https://music.apple.com/us/album/dieu-me-garde-single/1803018326",deezer:"https://www.deezer.com/fr/album/729564471?host=0&deferredFl=1",soundcloud:"https://soundcloud.com/user-146029035/dieu-me-garde",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_njEexI9PKu8KW5mcs0clATOKQei7WU3Ng"},Zd="2025-04-11",P0={platforms:Xd,releaseDate:Zd},W0=Object.freeze(Object.defineProperty({__proto__:null,default:P0,platforms:Xd,releaseDate:Zd},Symbol.toStringTag,{value:"Module"})),Kd={spotify:"https://open.spotify.com/album/1LvEIoaevQYyYhcn03bh1l?si=upBFQhUxTSGu5UsV8Q0N4g",appleMusic:"https://music.apple.com/us/album/dor%C3%A9mi-feat-timeon3x-teh-haar-single/1795263601",deezer:"https://link.deezer.com/s/32YlsyiDJL7GcKWd03Boe",soundcloud:"https://soundcloud.com/user-146029035/doremi",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_kx9675R39RiMmVDt7KO8GNMPTJjhgGa0A&si=faA8qmGj2nnE1pnT"},Fd="2021-06-25",$0={platforms:Kd,releaseDate:Fd},I0=Object.freeze(Object.defineProperty({__proto__:null,default:$0,platforms:Kd,releaseDate:Fd},Symbol.toStringTag,{value:"Module"})),Pd={spotify:"https://open.spotify.com/album/76n5MQ7eZ4NxyMqPCQnJhn?si=kYcGz0qsSDe3AFKQmt84XA",appleMusic:"https://music.apple.com/us/album/elephant-single/1866011164",deezer:"https://link.deezer.com/s/32Yk1FRP9Tth2aXQmoMLk",soundcloud:"https://soundcloud.com/user-146029035/elephant",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_k9BnAHM_Wl5PcTIeLYf2jj4kSclqh78uQ&si=sqmHjT1qicDO9w1T"},Wd="2026-01-16",eb={platforms:Pd,releaseDate:Wd},ab=Object.freeze(Object.defineProperty({__proto__:null,default:eb,platforms:Pd,releaseDate:Wd},Symbol.toStringTag,{value:"Module"})),$d={spotify:"https://open.spotify.com/intl-fr/album/5T7DIm7sJqqlKyK4Ci6rs7?si=p09vcdfnRo-2CI_7TnGMhA",appleMusic:"https://music.apple.com/us/album/la-vie-de-chateau-single/1870098976",deezer:"https://link.deezer.com/s/32YjDp9sH4RfAfn2nXJvc",soundcloud:"https://soundcloud.com/user-146029035/la-vie-de-chateau",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_mUmA3XUbTr9haAF-ZHy2CBuTlbxBPHwlw"},Id="2026-01-03",tb={platforms:$d,releaseDate:Id},nb=Object.freeze(Object.defineProperty({__proto__:null,default:tb,platforms:$d,releaseDate:Id},Symbol.toStringTag,{value:"Module"})),ep={spotify:"https://open.spotify.com/album/1Dk1q0Ndp1WaT77qudyale?si=_Me3ECxxTlyI0IcyHqDw_Q",appleMusic:"https://music.apple.com/us/song/mtl/1859474554",deezer:"https://www.deezer.com/fr/artist/112983672?host=0&deferredFl=1",soundcloud:"https://soundcloud.com/user-146029035/mtl",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_mmNALZ1hyVIemifquoskfdsMXPJ-GXA0M&si=J0TrUXkzHum0tzrH"},ap="2025-12-05",lb={platforms:ep,releaseDate:ap},ub=Object.freeze(Object.defineProperty({__proto__:null,default:lb,platforms:ep,releaseDate:ap},Symbol.toStringTag,{value:"Module"})),tp={spotify:"https://open.spotify.com/album/2Odabakw7ezdmUM2vGoKqU?si=e5elwI_BQEWvBgeDUQawag",appleMusic:"https://music.apple.com/us/album/mw3-single/1859474552",deezer:"https://link.deezer.com/s/32YkaxqDaPffuG3qj7HNt",soundcloud:"https://soundcloud.com/user-146029035/mw3",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_k6mwGvJQRg6ykux5_8ZJ5CV3OBsmh2CvI&si=ofWq4es1cgdR7eju"},np="2025-12-19",sb={platforms:tp,releaseDate:np},ib=Object.freeze(Object.defineProperty({__proto__:null,default:sb,platforms:tp,releaseDate:np},Symbol.toStringTag,{value:"Module"})),lp={spotify:"https://open.spotify.com/album/1xfLjWnzUKUKmvaG7PihNm?si=sc-sQmv2QiiBniQ8lC94ow",appleMusic:"https://music.apple.com/us/album/neon-single/1697732368",deezer:"https://link.deezer.com/s/32YkVXyeKzcZy3mhuHsD9",soundcloud:"https://soundcloud.com/user-146029035/neon",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_lDvvz_KoWENs1-vr3c9XkXFXqf3TuPiCw&si=Nw28-n-UESq_pp-X"},up="2023-08-05",rb={platforms:lp,releaseDate:up},ob=Object.freeze(Object.defineProperty({__proto__:null,default:rb,platforms:lp,releaseDate:up},Symbol.toStringTag,{value:"Module"})),sp={spotify:"https://open.spotify.com/album/5kl1ZGdkQFozEX4A2szMZm?si=PrFqNtrFR7K1h2iy779ccQ",appleMusic:"https://music.apple.com/us/album/pain-single/1727360366",deezer:"https://link.deezer.com/s/32YkCNDkXVf1bAv7VvpNt",soundcloud:"https://soundcloud.com/user-146029035/je-veux-du-pain-master-v1",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_l2TMlJHQFehCxZFL8YP31_plOQ1Lp6D7M&si=uVBXiCBXIJgpGO4G"},ip="2024-02-09",cb={platforms:sp,releaseDate:ip},mb=Object.freeze(Object.defineProperty({__proto__:null,default:cb,platforms:sp,releaseDate:ip},Symbol.toStringTag,{value:"Module"})),rp={spotify:"https://open.spotify.com/album/06lXkUTwQZNeuau3GtVqCP?si=hBGGgX2aT--eTBuBFlgLwA",appleMusic:"https://music.apple.com/us/album/phosphore-feat-timeon3x-single/1560593815",deezer:"https://link.deezer.com/s/32YlCW6vslUthH3tohzAJ",soundcloud:"https://soundcloud.com/user-146029035/phosphore-ft-timeon-pegoretti",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_mtAEo35-tc4nHTJMwNU8M1tu-K6afMQjA&si=NH1stItmAiEog2ly"},op="2021-04-9",fb={platforms:rp,releaseDate:op},db=Object.freeze(Object.defineProperty({__proto__:null,default:fb,platforms:rp,releaseDate:op},Symbol.toStringTag,{value:"Module"})),cp={spotify:"https://open.spotify.com/album/0dOe3qClYmU58YSaL8jnxF?si=Uoy4Y2X5TIiVTWSEK3vt3Q",appleMusic:"https://music.apple.com/us/album/rougir-la-banque-feat-celll-single/1588996449",deezer:"https://link.deezer.com/s/32YlhtPL1NEH2pHDhiRYR",soundcloud:"https://soundcloud.com/user-146029035/rougir-la-banque-feat-celll",youtube:"https://music.youtube.com/playlist?list=OLAK5uy_lDvvz_KoWENs1-vr3c9XkXFXqf3TuPiCw&si=Nw28-n-UESq_pp-X"},mp="2021-10-15",pb={platforms:cp,releaseDate:mp},Ab=Object.freeze(Object.defineProperty({__proto__:null,default:pb,platforms:cp,releaseDate:mp},Symbol.toStringTag,{value:"Module"})),vb=`Wow toujours si bon
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
On sait ce qu'on a`,hb=`Sex drogue alcool toujours quelque chose dont l'on abuse
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
Je préfère deux personnes qui m'aiment que douze qui me sucent`,gb=`Six AM je rentre petit matin la nuit est claire
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
Qui croire maintenant les chiffres rentrent frèro`,bb=`Je sais pas ce que ma mère a élevé mais en tout cas pas une bitch
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
Pour graille j'attends que la famille soit servie parce que je suis bien élevé`,yb=`Qu'est ce que nous arrête surement pas la fermeture
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
On fait des envieux on fait des envieuses`,jb=`Toujours avec la meute pas de loup solitaire
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
Blason de maison je porte la famille sur l'étendard`,_b=`Elle est énervée ce n'est pas bon signe
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
Et les vrais vont me remercier en le faisant aussi`,Sb="",qb=`Je veux le pain toutes ces pétasses veulent du bifteck
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
Moula béhémoth c'est la vie de rêve`,Eb=`Faut le biff je chante à me faire des angines
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
Et t'as devant toi devant toi devant toi`,Tb=`C'est sur les doigts d'une main qu'on compte nos vrais frères
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
Vrai frère vrai frère vrai frère vrai frère yeah`,Jb=`Stem plus le même 180
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
Prêts à changer du jour au lendemain`,Mb=`J'ai pris 2L, j'en ai fait un W
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
Archange est devenu séraphin`,xb=`Faut les VVS qui cerclent la montre
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
Je me sens comme Metro sur Monster`,Cb=`Bitch il me faut le pain bitch il me faut le bread
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
J'ai des démons pour m'accabler`,Rb=`Ça c'est de la musique qui s'écoute dans une Maybach
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
Je l'emmènerais voire les étoiles dans la voiture`,Db=`Première prod j'avais 16 piges premier clip j'en avais 21
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
Je fais avec les aléas je fais mon comeback comme Kanye en 2021`,Ob=`Je peux pas changer le passer je peux pas retourner en arrière
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
Je cherche l'amour propre et le respect de mes aînés`,zb=`Elle veut croquer mes diamants
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
Je veux les diamants VVS bien évidemment`,Nb=`Il ne reste que les cendres gros après la guerre
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
A la vie à la mort si tu es mon frère`,Lb=`Je vérifie le plav avant que je monte dans le train
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
Elle fait la manucure comme si c'était la saint Valentin`,Bb=`J'ai des rêves de grandeur Stemcorp c'est la tour de Babel
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
Il faut des VVS il faut la SACEM d'Abel`,Ub=`La vie de rêve c'est la vie que l'on veut
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
Memento mori`,Hb=`Je me vois déjà lui tenir le bras à l'avant de la procession
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
Des sons faut que j'en sorte faut que je renta Distrokid`,Gb=`Y'a que l'argent pour me repentir de ma pénitence
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
Qu'est ce tu fais qu'est ce tu fais si ton reuf il ment`,Yb="",Qb=`Je veux pas mourir sobre
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
Je veux pas mourir jeune`,Vb=`Stem objectif PDG
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
Je m'implique si ça parle argent sinon R.A.F`,wb=`STEMCORP la plus haute
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
Stemusic le plus chaud de tous les fours`,kb="",Xb="",Zb=`Je fais attention aux détails le diable se cache dedans
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
Je vesqui ce traitre bien-sur que je vesqui ce faux`,Kb=`Putain d'époque faut des putains de biceps
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
Là j'ai buté le diez le son est mort donc c'est un ghost track`,Fb=`Je rêve d'avoir le monde dans la main
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
Ce petit serpent à voulu me faire croquer dans le fruit`,Pb="",Wb=`TH Stem c'est le diamant au fond de la mine
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
Maintenant je te ris au nez`,$b=`Y'a rien à mettre dans le doggybag
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
Yeah yeah yeah yeah`,Ib=`Et moi je peux pas tendre la main
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
Je vais faire des tals donc j'en ai rien à foutre de la promo`,ey=`Cours, bitch il faut que tu cours
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
Je t'ai jamais vu mordre pourtant tu fais que montrer les crocs`,ay=`Ya mes démons dans l'appart
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
Mais faut vivre donc je pop pop pop le bouchon`,ty=`Ces goofy sont des blagues ces goofy sont des quoi
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
Ils n'ont pas capté le del ces goofy sont des blagues`,ny=`Faut cette maille
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
C'était notre reuf avant qu'il cap`,ly=`Baby je ne te ferais pas de mal sauf si tu le veux
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
Demain je verrais si on se rapproche ou si on reste loin`,uy=`Stem mes albums seront mes manifestos
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
Je rentre dans ce bourbier avec la cagoule, les bottes et les gants`,sy=`La vie de
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
Tu mérites le collier la laisse, toi t'es un cabot`,iy=`MTL MTL MTL MTL
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
Je veux un happy ending et que ces batards ils dead`,ry=`Dernier homme debout comme le capitaine Price
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
Je prends cette dope ça me rend che-per`,oy=`Faut qu'on graille
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
J'esquive les balles comme Néo`,cy=`Faut du pain fils de pute il me faut du pain
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
Elle dis qu'elle t'aime mais fait gaffe la pute elle ment`,my=`Crois moi on va pop fort, et ce même si tu voulais pas
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
Nos sons en enceinte on va brûler ta caisse comme TATP ou comme obus à phosphore`,fy="",xe={SINGLE:"Single",ALBUM:"Album",EP:"EP"};async function fp(){const s=[],m=Object.assign({"../assets/music/album/ARCHANGE/songs/01_PREPA (feat. Timéon3X).flac":_g,"../assets/music/album/ARCHANGE/songs/02_SDA.flac":Sg,"../assets/music/album/ARCHANGE/songs/03_DB COOPER.flac":qg,"../assets/music/album/ARCHANGE/songs/04_R&D (feat. Teh Haar).flac":Eg,"../assets/music/album/ARCHANGE/songs/05_CORNUCOPIA.flac":Tg,"../assets/music/album/ARCHANGE/songs/06_MOUTON NOIR.flac":Jg,"../assets/music/album/ARCHANGE/songs/07_ENERVE.flac":Mg,"../assets/music/album/ARCHANGE/songs/08_OVER.flac":xg,"../assets/music/album/ARCHANGE/songs/09_BEHEMOTH.flac":Cg,"../assets/music/album/ARCHANGE/songs/10_JEUNE STAR.flac":Rg,"../assets/music/album/ARCHANGE/songs/11_VRAI FRERE.flac":Dg,"../assets/music/album/ARCHANGE/songs/12_180.flac":Og,"../assets/music/album/SERAPHIN/songs/01_SERAPHIN.flac":zg,"../assets/music/album/SERAPHIN/songs/02_MONSTER.flac":Ng,"../assets/music/album/SERAPHIN/songs/03_ZOMBIE.flac":Lg,"../assets/music/album/SERAPHIN/songs/04_MAYBACH.flac":Bg,"../assets/music/album/SERAPHIN/songs/05_21.flac":Ug,"../assets/music/album/SERAPHIN/songs/06_TENET.flac":Hg,"../assets/music/album/SERAPHIN/songs/07_CROQUEUSE DE DIAMANTS.flac":Gg,"../assets/music/album/SERAPHIN/songs/08_APRES LA GUERRE.flac":Yg,"../assets/music/album/SERAPHIN/songs/09_MONTE DANS LE TRAIN.flac":Qg,"../assets/music/album/SERAPHIN/songs/10_BABEL.flac":Vg,"../assets/music/album/SERAPHIN/songs/11_MEMENTO MORI.flac":wg,"../assets/music/album/SERAPHIN/songs/12_OUTRO.flac":kg,"../assets/music/album/STEMPCORP/songs/10_PENITENCE.flac":Xg,"../assets/music/album/STEMPCORP/songs/11_LAISSE POUR MORT.flac":Zg,"../assets/music/album/STEMPCORP/songs/12_MOURIR SOBRE.flac":Kg,"../assets/music/album/STEMPCORP/songs/1_DYSTOPIE.flac":Fg,"../assets/music/album/STEMPCORP/songs/2_STEMCORP.flac":Pg,"../assets/music/album/STEMPCORP/songs/3_IL FAUT.flac":Wg,"../assets/music/album/STEMPCORP/songs/4_ANGE ET DEMON.flac":$g,"../assets/music/album/STEMPCORP/songs/5_PINNOCHIO.flac":Ig,"../assets/music/album/STEMPCORP/songs/6_ARCTERYX.flac":e0,"../assets/music/album/STEMPCORP/songs/7_TOUT LES HEROS NE PORTENT PAS DE CAP (feat. Teh Haar).flac":a0,"../assets/music/album/STEMPCORP/songs/8_LE MONDE DANS LA MAIN.flac":t0,"../assets/music/album/STEMPCORP/songs/9_LES ZINCS DES AUTRES.flac":n0,"../assets/music/ep/Twin Activity/songs/01_Victory lap.flac":l0,"../assets/music/ep/Twin Activity/songs/02_Bodybag.flac":u0,"../assets/music/ep/Twin Activity/songs/03_Rock band.flac":s0,"../assets/music/ep/Twin Activity/songs/04_Twin Tower.flac":i0,"../assets/music/ep/Twin Activity/songs/05_Eczema.flac":r0,"../assets/music/single/BAG/songs/BAG.flac":o0,"../assets/music/single/CAP/songs/CAP.flac":c0,"../assets/music/single/Dieu me garde/songs/Dieu me garde.flac":m0,"../assets/music/single/Dorémi/songs/Dorémi (feat. Timéon3x, Teh haar).flac":f0,"../assets/music/single/ELEPHANT/songs/ELEPHANT.flac":d0,"../assets/music/single/LA VIE DE CHATEAU/songs/LA VIE DE CHATEAU.flac":p0,"../assets/music/single/MTL/songs/MTL.flac":A0,"../assets/music/single/MW3/songs/ELEPHANT.flac":v0,"../assets/music/single/NEON/songs/NEON.flac":h0,"../assets/music/single/PAIN/songs/PAIN.flac":g0,"../assets/music/single/Phosphore/songs/Phosphore (feat. Timéon3x).flac":b0,"../assets/music/single/Rougir la banque/songs/Rougir la banque (feat. CELLL).flac":y0}),c=Object.assign({"../assets/music/album/ARCHANGE/cover/cover archange.jpg":j0,"../assets/music/album/SERAPHIN/cover/seraphin_cover_2_3K.jpg":_0,"../assets/music/album/STEMPCORP/cover/COver.jpg":S0,"../assets/music/album/STEMPCORP/cover/COver.png":q0,"../assets/music/ep/Twin Activity/cover/Twin Activity Cover 01.jpg":E0,"../assets/music/single/BAG/cover/BA_3K.jpg":T0,"../assets/music/single/CAP/cover/cover cap.jpg":J0,"../assets/music/single/Dieu me garde/cover/DMGCOVERFINALE.jpg":M0,"../assets/music/single/Dorémi/cover/timéon x stem2.jpg":x0,"../assets/music/single/ELEPHANT/cover/COVER_ELEPHANT_3k.jpg":C0,"../assets/music/single/LA VIE DE CHATEAU/cover/chateau.jpg":R0,"../assets/music/single/MTL/cover/MTL FLAG 3K.jpg":D0,"../assets/music/single/MW3/cover/MW3 3K.jpg":O0,"../assets/music/single/NEON/cover/akira julien final.jpg":z0,"../assets/music/single/PAIN/cover/coverPain.jpg":N0,"../assets/music/single/Phosphore/cover/phosphore cover.jpg":L0,"../assets/music/single/Rougir la banque/cover/rougir la banque cover.jpg":B0}),r=Object.assign({"../assets/music/album/ARCHANGE/metadata.json":H0,"../assets/music/album/SERAPHIN/metadata.json":Y0,"../assets/music/album/STEMPCORP/metadata.json":V0,"../assets/music/ep/Twin Activity/metadata.json":k0,"../assets/music/single/BAG/metadata.json":Z0,"../assets/music/single/CAP/metadata.json":F0,"../assets/music/single/Dieu me garde/metadata.json":W0,"../assets/music/single/Dorémi/metadata.json":I0,"../assets/music/single/ELEPHANT/metadata.json":ab,"../assets/music/single/LA VIE DE CHATEAU/metadata.json":nb,"../assets/music/single/MTL/metadata.json":ub,"../assets/music/single/MW3/metadata.json":ib,"../assets/music/single/NEON/metadata.json":ob,"../assets/music/single/PAIN/metadata.json":mb,"../assets/music/single/Phosphore/metadata.json":db,"../assets/music/single/Rougir la banque/metadata.json":Ab}),f=Object.assign({"../assets/music/album/ARCHANGE/lyrics/01_PREPA (feat. Timéon3X).txt":vb,"../assets/music/album/ARCHANGE/lyrics/02_SDA.txt":hb,"../assets/music/album/ARCHANGE/lyrics/03_DB COOPER.txt":gb,"../assets/music/album/ARCHANGE/lyrics/04_R&D (feat. Teh Haar).txt":bb,"../assets/music/album/ARCHANGE/lyrics/05_CORNUCOPIA.txt":yb,"../assets/music/album/ARCHANGE/lyrics/06_MOUTON NOIR.txt":jb,"../assets/music/album/ARCHANGE/lyrics/07_ENERVE.txt":_b,"../assets/music/album/ARCHANGE/lyrics/08_OVER.txt":Sb,"../assets/music/album/ARCHANGE/lyrics/09_BEHEMOTH.txt":qb,"../assets/music/album/ARCHANGE/lyrics/10_JEUNE STAR.txt":Eb,"../assets/music/album/ARCHANGE/lyrics/11_VRAI FRERE.txt":Tb,"../assets/music/album/ARCHANGE/lyrics/12_180.txt":Jb,"../assets/music/album/SERAPHIN/lyrics/01_SERAPHIN.txt":Mb,"../assets/music/album/SERAPHIN/lyrics/02_MONSTER.txt":xb,"../assets/music/album/SERAPHIN/lyrics/03_ZOMBIE.txt":Cb,"../assets/music/album/SERAPHIN/lyrics/04_MAYBACH.txt":Rb,"../assets/music/album/SERAPHIN/lyrics/05_21.txt":Db,"../assets/music/album/SERAPHIN/lyrics/06_TENET.txt":Ob,"../assets/music/album/SERAPHIN/lyrics/07_CROQUEUSE DE DIAMANTS.txt":zb,"../assets/music/album/SERAPHIN/lyrics/08_APRES LA GUERRE.txt":Nb,"../assets/music/album/SERAPHIN/lyrics/09_MONTE DANS LE TRAIN.txt":Lb,"../assets/music/album/SERAPHIN/lyrics/10_BABEL.txt":Bb,"../assets/music/album/SERAPHIN/lyrics/11_MEMENTO MORI.txt":Ub,"../assets/music/album/SERAPHIN/lyrics/12_OUTRO.txt":Hb,"../assets/music/album/STEMPCORP/lyrics/10_PENITENCE.txt":Gb,"../assets/music/album/STEMPCORP/lyrics/11_LAISSE POUR MORT.txt":Yb,"../assets/music/album/STEMPCORP/lyrics/12_MOURIR SOBRE.txt":Qb,"../assets/music/album/STEMPCORP/lyrics/1_DYSTOPIE.txt":Vb,"../assets/music/album/STEMPCORP/lyrics/2_STEMCORP.txt":wb,"../assets/music/album/STEMPCORP/lyrics/3_IL FAUT.txt":kb,"../assets/music/album/STEMPCORP/lyrics/4_ANGE ET DEMON.txt":Xb,"../assets/music/album/STEMPCORP/lyrics/5_PINOCCHIO.txt":Zb,"../assets/music/album/STEMPCORP/lyrics/7_TOUT LES HEROS NE PORTENT PAS DE CAP (feat. TEH HAAR).txt":Kb,"../assets/music/album/STEMPCORP/lyrics/8_LE MONDE DANS LA MAIN.txt":Fb,"../assets/music/album/STEMPCORP/lyrics/9_LES ZINCS DES AUTRES.txt":Pb,"../assets/music/ep/Twin Activity/lyrics/01_Victory lap.txt":Wb,"../assets/music/ep/Twin Activity/lyrics/02_Bodybag.txt":$b,"../assets/music/ep/Twin Activity/lyrics/03_Rock band.txt":Ib,"../assets/music/ep/Twin Activity/lyrics/04_Twin Tower.txt":ey,"../assets/music/ep/Twin Activity/lyrics/05_Eczéma.txt":ay,"../assets/music/single/BAG/lyrics/BAG.txt":ty,"../assets/music/single/CAP/lyrics/CAP.txt":ny,"../assets/music/single/Dorémi/lyrics/Dorémi.txt":ly,"../assets/music/single/ELEPHANT/lyrics/ELEPHANT.txt":uy,"../assets/music/single/LA VIE DE CHATEAU/lyrics/LA VIE DE CHATEAU.txt":sy,"../assets/music/single/MTL/lyrics/MTL.txt":iy,"../assets/music/single/MW3/lyrics/MW3.txt":ry,"../assets/music/single/NEON/lyrics/NEON.txt":oy,"../assets/music/single/PAIN/lyrics/PAIN.txt":cy,"../assets/music/single/Phosphore/lyrics/Phosphore (feat. Timéon3X).txt":my,"../assets/music/single/Rougir la banque/lyrics/Rougir la banque (feat. CELLL).txt":fy}),A=new Map,j=new Map,J=new Map,g=new Map;for(const p in m){const T=p.split("/"),E=T[4],N=T.pop()?.replace(".flac","").trim()||"Unknown";if(!A.has(E)){A.set(E,[]);const Q=p.includes("/album/")?xe.ALBUM:p.includes("/ep/")?xe.EP:xe.SINGLE;J.set(E,Q)}A.get(E)?.push(N)}for(const p in c){const T=p.split("/")[4];j.has(T)||j.set(T,c[p].default||c[p])}for(const p in f){const T=p.split("/").pop()?.replace(".txt","")||p.split("/")[4];g.set(T,f[p])}for(const p of A.keys()){const T=A.get(p)||[],E=j.get(p)||"",N=J.get(p)||xe.SINGLE,k=T.sort((G,K)=>G.localeCompare(K,void 0,{numeric:!0,sensitivity:"base"})).map(G=>({name:G,lyrics:g.get(G)})),Z=Object.keys(r).find(G=>G.includes(`/${p}/`)),V=Z?r[Z]:{},H=V.default||V;s.push({title:p,coverUrl:E,tracks:k,type:N,platforms:H.platforms||{},available:!0,releaseDate:H.releaseDate||"2000-01-01"})}return s.sort((p,T)=>new Date(T.releaseDate).getTime()-new Date(p.releaseDate).getTime()),s}function dy(){const[s,m]=C.useState([]);return C.useEffect(()=>{fp().then(c=>m(c))},[]),z.jsx("div",{className:"songs-list",children:s.map(c=>z.jsx(jg,{title:c.title,coverUrl:c.coverUrl,type:c.type},c.title))})}var dp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ad=Wt.createContext&&Wt.createContext(dp),py=["attr","size","title"];function Ay(s,m){if(s==null)return{};var c,r,f=vy(s,m);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(s);for(r=0;r<A.length;r++)c=A[r],m.indexOf(c)===-1&&{}.propertyIsEnumerable.call(s,c)&&(f[c]=s[c])}return f}function vy(s,m){if(s==null)return{};var c={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(m.indexOf(r)!==-1)continue;c[r]=s[r]}return c}function os(){return os=Object.assign?Object.assign.bind():function(s){for(var m=1;m<arguments.length;m++){var c=arguments[m];for(var r in c)({}).hasOwnProperty.call(c,r)&&(s[r]=c[r])}return s},os.apply(null,arguments)}function vd(s,m){var c=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);m&&(r=r.filter(function(f){return Object.getOwnPropertyDescriptor(s,f).enumerable})),c.push.apply(c,r)}return c}function cs(s){for(var m=1;m<arguments.length;m++){var c=arguments[m]!=null?arguments[m]:{};m%2?vd(Object(c),!0).forEach(function(r){hy(s,r,c[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(c)):vd(Object(c)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(c,r))})}return s}function hy(s,m,c){return(m=gy(m))in s?Object.defineProperty(s,m,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[m]=c,s}function gy(s){var m=by(s,"string");return typeof m=="symbol"?m:m+""}function by(s,m){if(typeof s!="object"||!s)return s;var c=s[Symbol.toPrimitive];if(c!==void 0){var r=c.call(s,m);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(s)}function pp(s){return s&&s.map((m,c)=>Wt.createElement(m.tag,cs({key:c},m.attr),pp(m.child)))}function Ua(s){return m=>Wt.createElement(yy,os({attr:cs({},s.attr)},m),pp(s.child))}function yy(s){var m=c=>{var{attr:r,size:f,title:A}=s,j=Ay(s,py),J=f||c.size||"1em",g;return c.className&&(g=c.className),s.className&&(g=(g?g+" ":"")+s.className),Wt.createElement("svg",os({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,r,j,{className:g,style:cs(cs({color:s.color||c.color},c.style),s.style),height:J,width:J,xmlns:"http://www.w3.org/2000/svg"}),A&&Wt.createElement("title",null,A),s.children)};return Ad!==void 0?Wt.createElement(Ad.Consumer,null,c=>m(c)):m(dp)}function jy(s){return Ua({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(s)}function _y(s){return Ua({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z"},child:[]}]})(s)}function Sy(s){return Ua({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"},child:[]}]})(s)}function qy(s){return Ua({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M451.46,244.71H576V172H451.46Zm0-173.89v72.67H576V70.82Zm0,275.06H576V273.2H451.46ZM0,447.09H124.54V374.42H0Zm150.47,0H275V374.42H150.47Zm150.52,0H425.53V374.42H301Zm150.47,0H576V374.42H451.46ZM301,345.88H425.53V273.2H301Zm-150.52,0H275V273.2H150.47Zm0-101.17H275V172H150.47Z"},child:[]}]})(s)}function Ey(s){return Ua({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"m10.995 0 .573.001q.241 0 .483.007c.35.01.705.03 1.051.093.352.063.68.166.999.329a3.36 3.36 0 0 1 1.47 1.468c.162.32.265.648.328 1 .063.347.084.7.093 1.051q.007.241.007.483l.001.573v5.99l-.001.573q0 .241-.008.483c-.01.35-.03.704-.092 1.05a3.5 3.5 0 0 1-.33 1 3.36 3.36 0 0 1-1.468 1.468 3.5 3.5 0 0 1-1 .33 7 7 0 0 1-1.05.092q-.241.007-.483.008l-.573.001h-5.99l-.573-.001q-.241 0-.483-.008a7 7 0 0 1-1.052-.092 3.6 3.6 0 0 1-.998-.33 3.36 3.36 0 0 1-1.47-1.468 3.6 3.6 0 0 1-.328-1 7 7 0 0 1-.093-1.05Q.002 11.81 0 11.568V5.005l.001-.573q0-.241.007-.483c.01-.35.03-.704.093-1.05a3.6 3.6 0 0 1 .329-1A3.36 3.36 0 0 1 1.9.431 3.5 3.5 0 0 1 2.896.1 7 7 0 0 1 3.95.008Q4.19.002 4.432 0h.573zm-.107 2.518-4.756.959H6.13a.66.66 0 0 0-.296.133.5.5 0 0 0-.16.31c-.004.027-.01.08-.01.16v5.952c0 .14-.012.275-.106.39-.095.115-.21.15-.347.177l-.31.063c-.393.08-.65.133-.881.223a1.4 1.4 0 0 0-.519.333 1.25 1.25 0 0 0-.332.995c.031.297.166.582.395.792.156.142.35.25.578.296.236.047.49.031.858-.043.196-.04.38-.102.555-.205a1.4 1.4 0 0 0 .438-.405 1.5 1.5 0 0 0 .233-.55c.042-.202.052-.386.052-.588V6.347c0-.276.08-.35.302-.404.024-.005 3.954-.797 4.138-.833.257-.049.378.025.378.294v3.524c0 .14-.001.28-.096.396-.094.115-.211.15-.348.178l-.31.062c-.393.08-.649.133-.88.223a1.4 1.4 0 0 0-.52.334 1.26 1.26 0 0 0-.34.994c.03.297.174.582.404.792a1.2 1.2 0 0 0 .577.294c.237.048.49.03.858-.044.197-.04.381-.098.556-.202a1.4 1.4 0 0 0 .438-.405q.173-.252.233-.549a2.7 2.7 0 0 0 .044-.589V2.865c0-.273-.143-.443-.4-.42-.04.003-.383.064-.424.073"},child:[]}]})(s)}function Ty(s){return Ua({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"},child:[]}]})(s)}function Yr(s){return s.split("_").splice(1).join(" ")}const Jy=({song:s})=>{const m={spotify:z.jsx(jy,{className:"platform-icon"}),applemusic:z.jsx(Ey,{className:"platform-icon"}),deezer:z.jsx(qy,{className:"platform-icon"}),youtube:z.jsx(Ty,{className:"platform-icon"}),soundcloud:z.jsx(_y,{className:"platform-icon"})};return z.jsxs("div",{className:"song-pages-layout",children:[z.jsxs("div",{className:"main-data",children:[z.jsxs("div",{className:"song-info",children:[z.jsx("img",{src:s.coverUrl,alt:`${s.title} cover`,className:"cover-image"}),z.jsx("div",{className:"song-details",children:z.jsxs("div",{className:"song-text-info",children:[z.jsx("h1",{className:"song-title",children:s.title}),z.jsx("p",{className:"song-type",children:s.type})]})})]}),z.jsx("div",{className:"platforms",children:Object.entries(s.platforms).map(([c,r])=>z.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"platform-link",children:m[c.toLowerCase()]||c},c))})]}),z.jsx("div",{className:"bottom-section",children:Cy(s)})]})},My=({lyrics:s})=>z.jsxs("div",{children:[z.jsx("h2",{children:"Lyrics"}),z.jsx("pre",{className:"lyrics",children:s})]}),xy=({parent:s})=>{const m=s.tracks.map(c=>c.name);return z.jsxs("div",{className:"track-list-container",children:[z.jsx("h2",{children:"Track List"}),z.jsx("div",{className:"track-list",children:m.map((c,r)=>(c=Yr(c),z.jsx("a",{href:Kr(c,xe.SINGLE,s.title,s.type),className:"track",children:c},r)))})]})},Cy=s=>s.type!=="Single"?z.jsx(xy,{parent:s}):s.tracks[0].lyrics?z.jsx(My,{lyrics:s.tracks[0].lyrics}):z.jsx("p",{className:"no-lyrics",children:"Pas de paroles disponibles."}),Ap=C.createContext(null);function Ry({children:s}){const[m,c]=C.useState(new Map([[xe.ALBUM,[]],[xe.EP,[]],[xe.SINGLE,[]]])),[r,f]=C.useState(!0);return C.useEffect(()=>{f(!0),fp().then(A=>{console.log(A);const j=new Map(m);A.forEach(J=>{const g=j.get(J.type)||[];j.set(J.type,[...g,J])}),c(j),f(!1)})},[]),z.jsx(Ap.Provider,{value:{musics:m,loading:r},children:s})}function Fr(){const s=C.useContext(Ap);if(!s)throw new Error("useMusic must be used inside MusicProvider");return s}function Dy(){const{parentType:s,parentTitle:m,type:c,title:r}=Jh(),f=()=>z.jsx("div",{className:"song-not-found",children:z.jsx("h1",{children:"Song not found"})}),A=g=>{switch(g){case xe.ALBUM.toLowerCase():return xe.ALBUM;case xe.EP.toLowerCase():return xe.EP;case xe.SINGLE.toLowerCase():return xe.SINGLE;default:throw"Type incorecte : "+g}};if(!c)return console.error("Type not found"),f();const j=Fr();let J;if(!m||!s)J=j.musics.get(A(c))?.find(g=>g.title.toLowerCase()===r?.toLowerCase());else{const g=j.musics.get(A(s))?.find(T=>T.title.toLowerCase()===m?.toLowerCase());if(!g)return f();const p=g?.tracks.find(T=>Yr(T.name).toLowerCase()===r?.toLowerCase());p&&(J={title:Yr(p.name),coverUrl:g.coverUrl,platforms:g.platforms,type:xe.SINGLE,releaseDate:g.releaseDate,tracks:[p],available:g.available})}return J?z.jsx("div",{className:"song-pages-detail",children:z.jsx(Jy,{song:J})}):(console.error("Song not found"),f())}function Oy({song:s}){return z.jsxs("a",{href:`/stemcorp/songs/${encodeURIComponent(s.title.toLowerCase())}`,className:"song-card",children:[z.jsx("div",{className:"song-cover-wrapper",children:z.jsx("img",{src:s.coverUrl,alt:s.title,className:"song-cover"})}),z.jsx("div",{className:"song-info",children:z.jsx("h3",{className:"song-title",children:s.title})})]})}const Na={All:"All",Album:xe.ALBUM,Single:xe.SINGLE,EP:xe.EP};function zy({currentType:s}){const{loading:m,musics:c}=Fr();if(m)return z.jsx("div",{className:"loading",children:"Loading..."});const r=s===Na.All?Array.from(c.values()).flat().sort((f,A)=>{const j=A?.releaseDate?new Date(A.releaseDate).getTime():0,J=f?.releaseDate?new Date(f.releaseDate).getTime():0;return j-J}):c.get(s)||[];return r.length===0?z.jsx("div",{className:"no-songs",children:"Aucun titre trouvé."}):z.jsx("div",{className:"songs-grid",children:r.map(f=>z.jsx(Oy,{song:f},f.title))})}function Ny({value:s,onChange:m}){return z.jsxs("div",{className:"type-selector",children:[z.jsx("button",{className:s===Na.All?"active":"",onClick:()=>m(Na.All),children:"Tout"}),z.jsx("button",{className:s===Na.Album?"active":"",onClick:()=>m(Na.Album),children:"Album"}),z.jsx("button",{className:s===Na.Single?"active":"",onClick:()=>m(Na.Single),children:"Single"}),z.jsx("button",{className:s===Na.EP?"active":"",onClick:()=>m(Na.EP),children:"EP"})]})}function Ly(){const[s,m]=C.useState(Na.All);return z.jsxs("div",{className:"songs-list-with-selector",children:[z.jsx(Ny,{value:s,onChange:m}),z.jsx(zy,{currentType:s})]})}const By="/stemcorp/assets/seraphin%20stemcorp-DIvSIPMN.png";function Uy(s){return Ua({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(s)}function Hy(s){return Ua({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(s)}function Gy(){const[s,m]=C.useState(!1),c=Fr().musics,f=(()=>{if(!c)return null;const j=c.get(xe.ALBUM)?.[0],J=c.get(xe.EP)?.[0],g=c.get(xe.SINGLE)?.[0],p=[j,J,g].filter(Boolean);return p.length===0?null:p.sort((T,E)=>{const N=E?.releaseDate?new Date(E.releaseDate).getTime():0,Q=T?.releaseDate?new Date(T.releaseDate).getTime():0;return N-Q})[0]})(),A=()=>{m(!s)};return z.jsxs("header",{className:"header",children:[z.jsxs("div",{id:"left-spacer",className:"spacer",children:[z.jsx("button",{className:"close-btn",onClick:A,children:z.jsx(Uy,{className:"icon"})}),z.jsxs("div",{className:`side-menu ${s?"open":""}`,children:[z.jsx("button",{className:"close-btn",onClick:A,children:z.jsx(Hy,{})}),z.jsxs("nav",{className:"side-nav",children:[z.jsx("a",{href:Kr(f?.title||"",f?.type||xe.ALBUM),children:z.jsx("span",{className:"lastest-release-link",children:"Dernière sortie"})}),z.jsx("a",{href:"/stemcorp/",children:"Accueil"}),z.jsx("a",{href:"/stemcorp/all-songs",children:"Tous les titres"}),z.jsx("a",{href:"/stemcorp/contact",children:"Contact"})]})]})]}),z.jsx("div",{id:"center-spacer",className:"spacer",children:z.jsx("a",{href:"/stemcorp/",className:"main-logo-link",children:z.jsx("img",{src:By,alt:"Big stemcorp logo",id:"mainLogo"})})}),z.jsx("div",{id:"right-spacer",className:"spacer"})]})}function Yy(){const s=new Date().getFullYear();return z.jsx("footer",{className:"footer",children:z.jsxs("p",{children:["© ",s," StemCorp. All rights reserved."]})})}function Qy(s){return Ua({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"},child:[]}]})(s)}function Vy(s){return Ua({attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M800 112.962C800 50.575 749.425 0 687.038 0H112.962C50.575 0 0 50.575 0 112.962v574.076C0 749.426 50.575 800 112.962 800h574.076C749.425 800 800 749.426 800 687.038zM662.759 348.916c-51.615.577-99.71-15.027-141.938-43.927v202.874c0 90.166-61.72 167.62-148.996 187.848-119.068 27.165-219.864-58.954-232.577-161.835-13.294-102.884 52.322-193.051 152.892-213.281 19.651-4.045 49.209-4.045 64.458-.577v108.661c-4.692-1.153-9.086-2.31-13.709-2.888-39.304-6.937-77.371 12.715-92.977 48.55-15.605 35.838-5.16 77.451 26.629 101.73 26.586 20.806 56.085 23.694 86.14 9.822 30.057-13.291 46.21-37.567 49.676-70.512.578-4.622.546-9.826.546-15.028V110.206c0-10.981.086-10.502 11.068-10.502h86.12c6.36 0 8.673.915 9.25 8.433 4.621 67.047 55.526 124.147 120.838 132.818 6.937 1.155 14.369 1.613 22.58 2.19z",transform:"translate(112 112)"},child:[]}]})(s)}function wy(){return z.jsxs("div",{className:"contact-page",children:[z.jsxs("div",{className:"contact-business contact-container",children:[z.jsx("h1",{children:"Business / Prod:"}),z.jsx("div",{className:"contact-info",children:z.jsxs("p",{children:["Email: ",z.jsx("a",{href:"mailto:lilstempro@gmail.com",children:"lilstempro@gmail.com"})]})})]}),z.jsxs("div",{className:"reseaux-sociaux contact-container",children:[z.jsx("h1",{children:"Réseaux sociaux:"}),z.jsxs("div",{className:"contact-info",children:[z.jsx("p",{children:z.jsx("a",{href:"https://www.instagram.com/stem_dotcom/",target:"_blank",rel:"noopener noreferrer",children:z.jsxs("span",{className:"social-icon-and-text",children:[z.jsx(Sy,{}),"Instagram"]})})}),z.jsx("p",{children:z.jsx("a",{href:"https://x.com/lil_stem",target:"_blank",rel:"noopener noreferrer",children:z.jsxs("span",{className:"social-icon-and-text",children:[z.jsx(Qy,{}),"X"]})})}),z.jsx("p",{children:z.jsx("a",{href:"https://www.tiktok.com/@stem_dotcom?_r=1&_t=ZN-951PepPPeMw",target:"_blank",rel:"noopener noreferrer",children:z.jsxs("span",{className:"social-icon-and-text",children:[z.jsx(Vy,{}),"TikTok"]})})})]})]})]})}function ky(){return z.jsx(z.Fragment,{children:z.jsxs("main",{children:[z.jsx(Gy,{}),z.jsxs(Qh,{children:[z.jsx(Ll,{path:"/stemcorp/",element:z.jsx(dy,{})}),z.jsx(Ll,{path:"/stemcorp/songs/:parentType?/:parentTitle?/:type/:title",element:z.jsx(Dy,{})}),z.jsx(Ll,{path:"/stemcorp/all-songs",element:z.jsx(Ly,{})}),z.jsx(Ll,{path:"/stemcorp/contact",element:z.jsx(wy,{})})]}),z.jsx(Yy,{})]})})}Fv.createRoot(document.getElementById("root")).render(z.jsx(C.StrictMode,{children:z.jsx(mg,{children:z.jsx(Ry,{children:z.jsx(ky,{})})})}));
