(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=400)})({105:function(a){const b={getSystemInfo:!0,getBackgroundAudioState:!0,setBackgroundAudioState:!0,operateBackgroundAudio:!0,createRequestTask:!0,createUploadTask:!0,createDownloadTask:!0};let c=__devtoolsConfig,d=__devtoolsConfig.network||{},e=__devtoolsConfig.permission,f=__devtoolsConfig.setting&&__devtoolsConfig.setting.MaxDataSize||1048576,g=__devtoolsConfig.setting&&__devtoolsConfig.setting.MaxRequestConcurrent||10;a.exports={syncSDKList:b,isSyncSDK:function(a){return!!b[a]||/Sync$/.test(a)},DevtoolsConfig:c,NetworkConfig:d,Permission:e,AppserviceMaxDataSize:f,MaxRequestConcurrent:g,urlCheckErrReason:'url not in domain list'}},110:function(a){const b=()=>{return'touristappid'==__devtoolsConfig.appid},c=b()?Object.assign(__devtoolsConfig.userInfo):{};delete __devtoolsConfig.userInfo;const d={login:(a,b,c)=>{c({errMsg:'login:ok',code:'the code is a mock one'})},authorize:(a,b,c)=>{c({errMsg:'authorize:fail'})},operateWXData:(a,b,d)=>{d({errMsg:'operateWXData:ok',data:{data:JSON.stringify({nickName:c.nickName,avatarUrl:c.headUrl,gender:'male'===c.sex?1:2,province:c.province,city:c.city,country:c.country})}})},openSetting:(a,b,c)=>{c({errMsg:'openSetting:ok',authSetting:[{scope:'scope.userInfo',state:1}]})}};a.exports={isTourist:b,fake:d,check:function(a){return b()&&d.hasOwnProperty(a)&&(console.group(`${new Date} 无 AppID 关联`),console.warn(`请注意无 AppID 关联下，调用 wx.${a} 是受限的, API 的返回是工具的模拟返回`),console.groupEnd(),setTimeout(()=>{d[a].apply(this,arguments)}),!0)}}},12:function(a){function b(a){j=a?a:j,h=new WebSocket(i,j),h.onopen=function(){let a=[].concat(l);l=[],a.forEach((a)=>{c(a)})},h.onclose=function(){h=null,b()},h.onmessage=function(a){try{let b=JSON.parse(a.data);d(b)}catch(a){}}}function c(a){h&&h.readyState===WebSocket.OPEN?h.send(JSON.stringify(a)):l.push(a)}function d(){k.forEach((a)=>{try{a.apply(this,arguments)}catch(a){console.error(a)}})}var e=navigator.userAgent,f=e.match(/port\/(\d*)/),g=f?parseInt(f[1]):9974,h=null,i=`ws://localhost:${g}`,j=null,k=[],l=[];a.exports={connect:b,send:c,registerCallback:(a)=>{k.push(a)}}},235:function(a,b,c){function d(a,b='request'){if(a=a.toLowerCase(),e.isTourist())return console.group(`${new Date} 无 AppID 关联`),console.warn(`工具未检查合法域名，更多请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html`),console.groupEnd(),!0;if(!__devtoolsConfig.urlCheck)return console.group(`${new Date} 配置中关闭 请求域名、TLS 版本以及 HTTPS 证书检查`),console.warn(`工具未校验请求域名、TLS 版本以及 HTTPS 证书。`),console.groupEnd(),!0;try{let c=[];c='downloadFile'===b?g.download:'uploadFile'===b?g.upload:'scoket'===b?g.socket:g.request;for(let b=0;b<c.length;b++)if(a&&0===a.indexOf(c[b]))return!0;let d=[];c.forEach((a)=>{d.push([a])}),console.group(`${new Date} ${b} 合法域名校验出错`),console.info(`如若已在管理后台更新域名配置，请刷新项目配置后重新编译项目，操作路径：“项目-域名信息”`),console.error(` ${a} 不在以下 ${b} 合法域名列表中，请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html`),console.table(d),console.groupEnd()}catch(a){return console.error(a),!1}}const e=c(110),{MaxRequestConcurrent:f,NetworkConfig:g,appconfig:h,urlCheckErrReason:i}=c(105);a.exports={downloadFile:function(a,b,c){return!!d(b.url,'downloadFile')||(c({errMsg:`${a}:fail ${i}`}),!1)},uploadFile:function(a,b,c){return!!d(b.url,'uploadFile')||(c({errMsg:`${a}:fail ${i}`}),!1)},checkUrl:d,createUploadTask:function(a,b,c){return!!d(b.url,'uploadFile')||(c({errMsg:`${a}:fail ${i}`}),!1)},createDownloadTask:function(a,b,c){return!!d(b.url,'downloadFile')||(c({errMsg:`${a}:fail ${i}`}),!1)}}},369:function(a,b,c){const d=c(63),e=c(110),f=c(62),g=c(57),h=c(235),i=c(398),{base64ToArrayBuffer:j}=c(63),{isSyncSDK:k}=c(105);let l={},m=1;g.registerCallback((a)=>{let{command:b,data:c}=a;if('APPSERVICE_INVOKE_CALLBACK'===b){let a=c.callbackID,b=l[a];if(c.res.__cover){for(let a in c.res.__cover)'base64'==a&&'buffer'===c.res.__cover[a]&&(c.res.buffer=j(c.res.base64),delete c.res.base64);delete c.res.__cover}'function'==typeof b&&b(c.res),delete l[a]}}),a.exports=function(a,b,c){if(d.debugLog(`${new Date} WeixinJSBridge invoke ${a}`,arguments),d.debugInfo({type:'invoke',eventName:a,data:arguments,timesmap:new Date}),e.check.apply(this,arguments))return;let f=k(a),j=function(){'function'==typeof c&&(f?c.apply(c,arguments):setTimeout(()=>{c.apply(c,arguments)},0))};if(i[a])i[a](a,b,j);else{if(h[a]&&!h[a].apply(this,arguments))return;let c=m++;if(l[c]=j,!f)g.send({command:'APPSERVICE_INVOKE',data:{api:a,args:b,callbackID:c}});else{let d=`____sdk____${JSON.stringify({command:'APPSERVICE_INVOKE',data:{api:a,args:b,callbackID:c}})}`,e=prompt(d);e=JSON.parse(e),delete e.to,j(e)}}}},370:function(a,b,c){function d(a,b,c){let d=h[a];'function'==typeof d&&d(b,c)}const e=c(63),f=c(57),g=c(62),h={};g.on('triggerOnEvent',function(a,b,c){d(a,b,c)}),window.DeviceOrientation=function(a,b,c){d('onAccelerometerChange',{x:a,y:b,z:c})},f.registerCallback((a)=>{let{command:b,data:c,webviewID:e}=a;'APPSERVICE_ON_EVENT'===b&&d(c.eventName,c.data,e)}),a.exports=function(a,b){e.debugLog(`${new Date} WeixinJSBridge on ${a}`,arguments),e.debugInfo({type:'on',eventName:a,data:arguments,timesmap:new Date}),b&&(h[a]=b)}},371:function(a,b,c){function d(a,b,c,d){if(e.debugLog(`${new Date} WeixinJSBridge publish ${a}`,arguments),b&&0!==a.indexOf('canvas')){let c=JSON.stringify(b),d=c.length;if(d>g)return console.group(`${new Date} 数据传输错误`),console.error(`${a} 数据传输长度为 ${d} 已经超过最大长度 ${g}`),void console.groupEnd()}e.debugInfo({type:'publish',eventName:a,data:arguments,timesmap:new Date}),'appDataChange'!==a&&'pageInitData'!==a&&'__updateAppData'!==a||d||f.send({command:'SEND_APP_DATA',data:__wxAppData}),'invokeWebviewMethod'===a&&b&&b.data&&'appDataChange'==b.data.name&&(h&&f.send({command:'SEND_APP_DATA',data:__wxAppData}),h=!0),f.send({command:'APPSERVICE_PUBLISH',data:{eventName:a,data:b,webviewIds:c}})}const e=c(63),f=c(57),{AppserviceMaxDataSize:g}=c(105);var h=!0;f.registerCallback((a)=>{let{command:b,data:c,fromWebviewID:e}=a;if('WRITE_APP_DATA'===b)for(let a in c){let b=c[a],e=b.__webviewId__;for(var g in wx&&wx.invokeWebviewMethod?(h=!1,wx.invokeWebviewMethod({name:'appDataChange',args:{data:b}})):d('appDataChange',{data:{data:b}},[e],!0),Object.assign(__wxAppData[a],b),__wxAppData[a])void 0==b[g]&&delete __wxAppData[a][g]}else'GET_APP_DATA'===b&&f.send({command:'SEND_APP_DATA',data:__wxAppData})}),a.exports=d},372:function(a,b,c){function d(a,b,c){let d=h[a];'function'==typeof d&&d(b,c)}const e=c(63),f=c(62),g=c(57);var h={};f.on('triggerSubscribeEvent',(a,b)=>{d(a,b)}),g.registerCallback((a)=>{let{command:b,data:c,fromWebviewID:e}=a;'WEBVIEW_PUBLISH'===b&&d(c.eventName,c.data,e)}),a.exports=function(a,b){e.debugLog(`${new Date} WeixinJSBridge subscribe`,arguments),e.debugInfo({type:'subscribe',eventName:a,data:arguments,timesmap:new Date}),h[a]=b}},373:function(a){a.exports=function(){['Caches','screen','performance ','getComputedStyle','openDatabase','btoa','Image'].forEach((a)=>{delete window[a]}),window.chrome=void 0,'complete'==document.readyState?history.replaceState({},{},`${location.href}?load`):window.addEventListener('load',()=>{history.replaceState({},{},`${location.href}?load`)})}},397:function(a){const b={0:'log',1:'info',2:'warn',3:'error'};a.exports={reportKeyValue:(a,b,c)=>{c({errMsg:`${a}:ok`})},reportIDKey:(a,b,c)=>{c({errMsg:`${a}:ok`})},log:(a,c)=>{let d=c.dataArray||[];d.forEach((a)=>{let c=b[a.level];c&&a.msg&&console[c](a.msg)})}}},398:function(a,b,c){const d=c(399),e=c(397);a.exports=Object.assign({},d,e)},399:function(a,b,c){function d(a,b){let{origin:c,fullPath:d,tls:e}=a;console.group(`${new Date} wx.request 错误`),console.error(`${c} 对应的服务器 TLS 为 ${e} ，小程序要求的 TLS 版本必须大于等于 1.2 。控制台输入 showRequestInfo() 可以获取更详细信息。`),console.groupEnd(),b&&b({errMsg:'request:fail \u5C0F\u7A0B\u5E8F\u8981\u6C42\u7684 TLS \u7248\u672C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 1.2'})}function e(a,b){let{origin:c,fullPath:d,tls:e}=a;console.group(`${new Date} wx.request 错误`),console.error(`${c} 对应的服务器证书无效。控制台输入 showRequestInfo() 可以获取更详细信息。`),console.groupEnd(),b&&b({errMsg:'request:fail \u5BF9\u5E94\u7684\u670D\u52A1\u5668\u8BC1\u4E66\u65E0\u6548\u3002'})}const f=c(62),{getSecuryDetailsByURL:g,parseURL:h}=c(402),{MaxRequestConcurrent:i,urlCheckErrReason:j,DevtoolsConfig:k}=c(105),{checkUrl:l}=c(235),m={1000:'normal closure',1001:'going away',1002:'protocol error',1003:'unsupported data',1004:'reserved',1005:'no status rcvd',1006:'abnormal closure',1007:'invalid frame payload data',1008:'policy violation',1009:'message too big',1010:'mandatory ext.',1011:'internal server error',1015:'tls handshake'};let n={},o=1,p=null,q=0;const r=(a,b,c)=>{q++;const h=(a)=>{setTimeout(()=>{q--,'function'==typeof c&&c(a)})};if(q>i)return console.group(`${new Date} request 错误`),console.error(`同时最多发起 ${i} 个 request 请求，更多请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html`),console.groupEnd(),void h({errMsg:`${a}:fail exceed max task count`});let{url:m}=b;if(!l(m))return void h({errMsg:`${a}:fail ${j}`});let n=g(m);if(n.isReady){if(!n.isSecuryTLS)return void d(n,h);if(!n.isSecuryCertificate)return void e(n,h)}var o=b.header||{},p=new XMLHttpRequest,r=b.method||'POST';p.timeout=__wxConfig.networkTimeout&&__wxConfig.networkTimeout.request||6e4,p.open(r,b.url,!0),p.onreadystatechange=()=>{if(3==p.readyState,4==p.readyState){p.onreadystatechange=null;var b=p.status;if(0==b);else{function c(c){c.isSecuryTLS?c.isSecuryCertificate?h({errMsg:`${a}:ok`,data:p.responseText,header:j||{},statusCode:b}):e(c,h):d(c,h)}let i=g(m),j={};try{j=JSON.parse(p.getResponseHeader('for-weapp-devtools'))}catch(a){}i.isReady?c(i):f.once(`TLS_CHECK_READY_${i.id}`,c)}}},p.onerror=()=>{h({errMsg:`${a}:fail`})},p.ontimeout=()=>{h({errMsg:`${a}:fail timeout`})},p.onabort=()=>{h({errMsg:`${a}:fail abort`})};let s=0;for(let d in o)'content-type'===d.toLowerCase()&&s++;2<=s&&delete o['content-type'];let t=!1;for(var u in o)if(o.hasOwnProperty(u)){let a=u.toLowerCase();t='content-type'==a||t,'cookie'===a?p.setRequestHeader('_Cookie',o[u]):p.setRequestHeader(u,o[u])}'POST'!=r||t||p.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');var k='string'==typeof b.data?b.data:null;try{p.send(k)}catch(b){h({errMsg:`${a}:fail`})}return p};a.exports={request:r,connectSocket:(a,b,c=()=>{})=>{let d=b.url,e=b.header;return'none'==k.networkStatus?void c({errMsg:`${a}:fail network is down`}):l(d,'scoket')?void(p=new WebSocket(d,b.protocols||[]),p.onopen=function(){f.emit('triggerOnEvent','onSocketOpen',{})},p.onmessage=function(a){f.emit('triggerOnEvent','onSocketMessage',{data:a.data})},p.onclose=function(a){f.emit('triggerOnEvent','onSocketClose',{code:a.code,reason:a.reason||m[a.code]||''})},p.onerror=function(){f.emit('triggerOnEvent','onSocketError',{})},c({errMsg:'connectSocket:ok'})):void c({errMsg:'connectSocket:fail'})},sendSocketMessage:(a,b,c)=>{let d=b.data;if(p)try{p.send(d),c&&c({errMsg:'sendSocketMessage:ok'})}catch(a){c&&c({errMsg:'sendSocketMessage:fail '+a.message})}else c&&c({errMsg:'sendSocketMessage:fail'})},closeSocket:(a,b,c)=>{if(p)try{p.close(b.code,b.reason),p=null,c&&c({errMsg:'closeSocket:ok'})}catch(a){c&&c({errMsg:`closeSocket:fail ${a}`})}else c&&c({errMsg:'closeSocket:fail'})},createRequestTask:(a,b,c=()=>{})=>{let d={id:o++,url:b.url,data:b.data,header:b.header,method:b.method,callback:(a,b)=>{let c={};c=0===b.errMsg.indexOf('request:ok')?{requestTaskId:a,state:'success',data:b.data,header:b.header,statusCode:b.statusCode}:{requestTaskId:a,state:'fail',errMsg:b.errMsg.replace(/^request:fail ?/,'')},delete n[a],f.emit('triggerOnEvent','onRequestTaskStateChange',c)}};c({errMsg:`${a}:ok`,requestTaskId:d.id}),n[d.id]=d,d.xhr=r('request',b,d.callback.bind(void 0,d.id))},operateRequestTask:(a,b,c)=>{let d=b.requestTaskId,e=b.operationType,f=n[d];if(!f)return c({errMsg:`${a}:fail task not found`});if('abort'===e)try{f.xhr.abort(),c({errMsg:`${a}:ok`})}catch(b){c({errMsg:`${a}:fail ${b}`})}else return c({errMsg:`${a}:fail illegal operationType`})}}},400:function(a,b,c){const d=c(370),e=c(369),f=c(371),g=c(372),h=c(373);var i=window.navigator.userAgent,j=-1!==i.indexOf('game');j||h(),window.WeixinJSBridge={invoke:e,publish:f,subscribe:g,on:d}},401:function(a,b,c){const d=c(57),e=()=>{d.send({command:'SYSTEM',data:{api:'build'}})},f=()=>e();Object.defineProperty(window,'build',{get(){return f(),f}});const g=()=>{d.send({command:'SYSTEM',data:{api:'preview'}})},h=()=>g();Object.defineProperty(window,'preview',{get(){return console.log('loading...'),h(),h}});const i=()=>{d.send({command:'SYSTEM',data:{api:'upload'}})},j=()=>i();Object.defineProperty(window,'upload',{get(){return j(),j}}),window.where={am:{}},Object.defineProperty(window.where.am,'i',{get(){console.log('wait a second, I\'ll check'),setTimeout(()=>{try{wx.getLocation({success:(a)=>{console.log(`${a.longitude}° ${a.latitude}°`)}})}catch(a){}},1e3)}})},402:function(a,b,c){function d(b){let c=document.createElement('a');return c.href=b,{protocol:c.protocol,origin:c.origin,fullPath:`${c.origin}/${c.pathname}`}}const e=c(110),f=c(62);var g=window.securityDetails={},h=1e4;window.setSecurityDetails=function(a,b){let{origin:c}=d(a);b=JSON.parse(b),g[c]||(g[c]={});let{protocol:e,securityState:h}=b,i=!1;e&&(i=1.2<=parseFloat(e.replace('TLS ',''))),g[c].isSecuryTLS=i,g[c].tls=e,g[c].securityState=h,g[c].isSecuryCertificate='insecure'!==h,g[c].isReady=!0,g[c].remoteAddress=b.remoteAddress,g[c].statusCode=b.statusCode;let j=g[c].id;f.emit(`TLS_CHECK_READY_${j}`,g[c])},a.exports={securityDetails:g,getSecuryDetailsByURL:function(a){let{protocol:b,origin:c,fullPath:f}=d(a),i=g[c];return e.isTourist()||!__devtoolsConfig.urlCheck||'https:'!==b?(i={isReady:!0,isSecuryTLS:!0,isSecuryCertificate:!0},g[c]=i,i):i?i:(i={isReady:!1,id:h++,tls:'',isSecuryTLS:!1,securityState:'',isSecuryCertificate:!1,protocol:b,origin:c,fullPath:f,url:a},g[c]=i,i)},parseURL:d}},445:function(a){function b(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function c(a){return'function'==typeof a}function d(a){return'number'==typeof a}function e(a){return'object'==typeof a&&null!==a}function f(a){return void 0===a}a.exports=b,b.EventEmitter=b,b.prototype._events=void 0,b.prototype._maxListeners=void 0,b.defaultMaxListeners=10,b.prototype.setMaxListeners=function(a){if(!d(a)||0>a||isNaN(a))throw TypeError('n must be a positive number');return this._maxListeners=a,this},b.prototype.emit=function(a){var b,d,g,h,j,i;if(this._events||(this._events={}),'error'===a&&(!this._events.error||e(this._events.error)&&!this._events.error.length))if(b=arguments[1],b instanceof Error)throw b;else{var k=new Error('Uncaught, unspecified "error" event. ('+b+')');throw k.context=b,k}if(d=this._events[a],f(d))return!1;if(c(d))switch(arguments.length){case 1:d.call(this);break;case 2:d.call(this,arguments[1]);break;case 3:d.call(this,arguments[1],arguments[2]);break;default:h=Array.prototype.slice.call(arguments,1),d.apply(this,h);}else if(e(d))for(h=Array.prototype.slice.call(arguments,1),i=d.slice(),g=i.length,j=0;j<g;j++)i[j].apply(this,h);return!0},b.prototype.addListener=function(a,d){var g;if(!c(d))throw TypeError('listener must be a function');return this._events||(this._events={}),this._events.newListener&&this.emit('newListener',a,c(d.listener)?d.listener:d),this._events[a]?e(this._events[a])?this._events[a].push(d):this._events[a]=[this._events[a],d]:this._events[a]=d,e(this._events[a])&&!this._events[a].warned&&(g=f(this._maxListeners)?b.defaultMaxListeners:this._maxListeners,g&&0<g&&this._events[a].length>g&&(this._events[a].warned=!0,console.error('(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',this._events[a].length),'function'==typeof console.trace&&console.trace())),this},b.prototype.on=b.prototype.addListener,b.prototype.once=function(a,b){function d(){this.removeListener(a,d),e||(e=!0,b.apply(this,arguments))}if(!c(b))throw TypeError('listener must be a function');var e=!1;return d.listener=b,this.on(a,d),this},b.prototype.removeListener=function(a,b){var d,f,g,h;if(!c(b))throw TypeError('listener must be a function');if(!this._events||!this._events[a])return this;if(d=this._events[a],g=d.length,f=-1,d===b||c(d.listener)&&d.listener===b)delete this._events[a],this._events.removeListener&&this.emit('removeListener',a,b);else if(e(d)){for(h=g;0<h--;)if(d[h]===b||d[h].listener&&d[h].listener===b){f=h;break}if(0>f)return this;1===d.length?(d.length=0,delete this._events[a]):d.splice(f,1),this._events.removeListener&&this.emit('removeListener',a,b)}return this},b.prototype.removeAllListeners=function(a){var b,d;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[a]&&delete this._events[a],this;if(0===arguments.length){for(b in this._events)'removeListener'!==b&&this.removeAllListeners(b);return this.removeAllListeners('removeListener'),this._events={},this}if(d=this._events[a],c(d))this.removeListener(a,d);else if(d)for(;d.length;)this.removeListener(a,d[d.length-1]);return delete this._events[a],this},b.prototype.listeners=function(a){var b;return b=this._events&&this._events[a]?c(this._events[a])?[this._events[a]]:this._events[a].slice():[],b},b.prototype.listenerCount=function(a){if(this._events){var b=this._events[a];if(c(b))return 1;if(b)return b.length}return 0},b.listenerCount=function(a,b){return a.listenerCount(b)}},57:function(a,b,c){function d(){let a='APPSERVICE';/widgetservice/.test(e)?a='WIDGETSERVICE':/game/.test(e)&&(a='GAMESERVICE',f.registerCallback((a)=>{let{command:b,data:c}=a;if('SET_CANVAS'===b){let a=document.getElementById('myCanvas');a.setAttribute('width',c.width),a.setAttribute('height',c.height),a.setAttribute('style',c.style)}})),f.connect(a)}const e=navigator.userAgent,f=c(12);'complete'==document.readyState?d():window.addEventListener('load',()=>{d()}),a.exports={send:f.send,registerCallback:f.registerCallback}},62:function(a,b,c){const d=c(445).EventEmitter;a.exports=new d},63:function(a,b,c){function d(a,b){switch(a){case'showSystemInfo':{let a=b.memory,c=b.restartInfo,d=c.restartTimes;console.group(`${new Date} 工具系统信息`),console.info(`${c.beginTime} 启动工具，执行编译 ${d} 次， 当前内存占用 ${a.toFixed(2)}m`),console.table(b.info),console.groupEnd();break}case'checkProxy':{console.group(`${new Date} 代理信息`),console.table(b),console.groupEnd();break}default:}}var e=this;const f=c(57);c(401);let g=!1,h=[];f.registerCallback((a)=>{let{command:b,data:c}=a;'SYSTEM_CALLBACK'===b&&d(c.api,c.data)}),window.showDebugInfo=(a,b)=>{let c=h.filter((c)=>{let d=!a||(Array.isArray(a)?a.includes(c.type):c.type===a),e=!b||(Array.isArray(b)?b.includes(c.eventName):c.eventName===b);if(d&&e)return c});console.group('showDebugInfo'),c.forEach((a)=>{console.group(`${a.timesmap} WeixinJSBridge ${a.type} ${a.eventName}`),console.debug.apply(window,a.data),console.groupEnd()}),console.groupEnd(),g=!0};const i=()=>{console.clear(),g=!1},j=()=>i();Object.defineProperty(window,'closeDebug',{get(){return j(),j}});const k=()=>{console.table(h)},l=()=>k();Object.defineProperty(window,'showDebugInfoTable',{get(){return l(),l}});const m=()=>{console.table([{fun:'build',"arg[0]":'',"arg[1]":'',example:'build',description:'build / reload'},{fun:'preview',"arg[0]":'',"arg[1]":'',example:'preview',description:'preview with QR code'},{fun:'upload',"arg[0]":'',"arg[1]":'',example:'upload',description:'upload the app'},{fun:'showDebugInfo',"arg[0]":'type -- String || Array; publish on subscribe invoke GetMsg',"arg[1]":'eventName -- String || Array;',example:'showDebugInfo() showDebugInfo("publish") showDebugInfo(["publish", "invoke"], "onAppRoute")',description:'open tools logs'},{fun:'closeDebug'},{fun:'showDebugInfoTable'},{fun:'openToolsLog',"arg[0]":'',"arg[1]":'',example:'openVendor',description:'open log folder'},{fun:'openVendor',"arg[0]":'',"arg[1]":'',example:'openVendor',description:'open vendor folder'},{fun:'showRequestInfo',"arg[0]":'',"arg[1]":'',example:'showRequestInfo',description:'show request info'},{fun:'showSystemInfo',"arg[0]":'',"arg[1]":'',example:'showSystemInfo',description:'show tools info'},{fun:'checkProxy',"arg[0]":'type -- String; url',example:'checkProxy("http://www.qq.com")',description:'checkProxy of the input url'}])},n=()=>m();Object.defineProperty(window,'help',{get(){return n(),n}});const o=()=>{let a={};for(let b in window.securityDetails)if(0!==b.indexOf(`http://${__wxConfig.apphash}`)){let c=window.securityDetails[b];delete c.id,delete c.command,delete c.isReady,delete c.url,a[b]=c}console.table(a)},p=()=>o();Object.defineProperty(window,'showRequestInfo',{get(){return p(),p}});const q=(a,b)=>{f.send({command:'SYSTEM',data:{api:a,data:b}})},r=()=>q('openToolsLog');Object.defineProperty(window,'openToolsLog',{get(){return r(),r}});const s=()=>q('openVendor');Object.defineProperty(window,'openVendor',{get(){return s(),s}});const t=()=>q('showSystemInfo');Object.defineProperty(window,'showSystemInfo',{get(){return console.log('loading...'),t(),()=>{}}}),window.checkProxy=function(a){return'string'==typeof a?void(console.log('checking...'),q('checkProxy',a)):console.log('param should be string')};const u=()=>q('syncMessage');Object.defineProperty(window,'syncMessage',{get(){return u(),u}});a.exports={debugLog:(a,b)=>{g&&(console.group(a),console.debug.apply(e,b),console.groupEnd(a))},debugInfo:(a)=>{g||(h.length>100&&(h=[]),h.push(a))},isDev:()=>{return g},base64ToArrayBuffer:function(a){let b=window.atob(a),c=b.length,d=new Uint8Array(c);for(let e=0;e<c;e++)d[e]=b.charCodeAt(e);return d.buffer}}}});
//# sourceMappingURL=index.js.map