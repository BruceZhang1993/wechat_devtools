'use strict';!function(require,directRequire){const a=require('./0db6515f85d6f6210c2d50722041eb1f.js'),b=require('./b22d389f507598d040002f99ddfae35d.js');class c{constructor(b,c={}){this._onRequestErrorOccurred=(a)=>{if('function'==typeof this.onRequestErrorOccurred)return this.onRequestErrorOccurred(a)},this._onRequestBeforeSendHeaders=(a)=>{if('function'==typeof this.onRequestBeforeSendHeaders)return this.onRequestBeforeSendHeaders(a)},this._onRequestCompleted=(a)=>{if('function'==typeof this.onRequestCompleted)return this.onRequestCompleted(a)},this._onBeforeRequest=(a)=>{if('function'==typeof this.onBeforeRequest)return this.onBeforeRequest(a)},this.onLoadCommit=(b)=>{!b.isTopLevel||this.debuggee||this.initDevtools||-1==this.needDebugger||(a.start(this._webview,{device:{width:this.deviceInfo.width,height:this.deviceInfo.height,dpr:this.deviceInfo.dpr},onEventCall:(a,b,c={})=>{'function'==typeof this.onDebuggeeEvent&&this.onDebuggeeEvent(a,b,c)},onDetachCall:(a,b)=>{'function'==typeof this.onDebuggeeDetach&&this.onDebuggeeDetach(a,b),this.debuggee=void 0,this.initDevtools=!1,this.attached=!1}}).then((a)=>{this.attached&&(this.debuggee=a,'function'==typeof this.onDebuggeeAttach&&this.onDebuggeeAttach(a))}),this.initDevtools=!0)},this.onContextMenusShow=(a)=>{a.preventDefault()},this.onNewWindow=(a)=>{'new_window'===a.windowOpenDisposition&&(this._webview.src=a.targetUrl)},this.type=b,this.deviceInfo=c,this.events={},this.ts=Date.now(),this._webview=document.createElement('webview'),this._webview.setAttribute('partition',`persist:${b}`),global.appConfig.isDev||global.appConfig.isGamma||this._webview.contextMenus.onShow.addListener(this.onContextMenusShow),this._webview.addEventListener('newwindow',this.onNewWindow),this._webview.addEventListener('loadcommit',this.onLoadCommit);let d=this._webview.request;d.onErrorOccurred.addListener(this._onRequestErrorOccurred,{urls:['<all_urls>']}),d.onBeforeRequest.addListener(this._onBeforeRequest,{urls:['<all_urls>']},['blocking']),d.onBeforeSendHeaders.addListener(this._onRequestBeforeSendHeaders,{urls:['<all_urls>']},['blocking','requestHeaders']),d.onCompleted.addListener(this._onRequestCompleted,{urls:['<all_urls>']},['responseHeaders']),this._webview.addEventListener('permissionrequest',function(a){'media'===a.permission&&a.request.allow()})}attach(a){a&&(a.appendChild(this._webview),this.attached=!0,this.ts=Date.now())}detach(){this.onDebuggeeEvent=void 0,this.onDebuggeeDetach=void 0,this.onDebuggeeAttach=void 0,this.onRequestCompleted=void 0,this.onRequestErrorOccurred=void 0,this.onRequestBeforeSendHeaders=void 0,this.onBeforeRequest=void 0,-1==this.needDebugger&&(this.needDebugger=void 0,this.initDevtools=!1,this.attached=!1),this._webview&&(this.offAll(),this._webview.parentElement&&this._webview.parentElement.removeChild(this._webview))}on(a,b){this.events[a]||(this.events[a]=[]),this.events[a].push(b),this._webview.addEventListener(a,b)}off(a,b){this.events[a]&&(this.events[a]=this.events[a].filter((a)=>{return a!==b})),this._webview.removeEventListener(a,b)}offAll(){for(let a in this.events)this.events[a].forEach((b)=>{this._webview.removeEventListener(a,b)});this.events={}}reload(){this._webview&&this._webview.reload()}canGoBack(){if(this._webview)return this._webview.canGoBack()}forward(){this._webview&&this._webview.forward()}back(){this._webview&&this._webview.back()}get src(){return this._webview.src}set src(a){this._webview.src=a}get className(){return this._webview.className}set className(a){this._webview.className=a}setEmulationTouch(b){this.debuggee&&a.setEmulationTouch(this.debuggee,b)}executeScript(a,b=()=>{}){this._webview.executeScript(a,b)}captureVisibleRegion(a={},b=()=>{}){this._webview.captureVisibleRegion(a,b)}setUserAgentOverride(a){this._webview.setUserAgentOverride(a)}setAttribute(a,b){this._webview.setAttribute(a,b)}setOffset(b={}){this.debuggee&&a.setEmulationDeviceMetricsOverride(this.debuggee,{width:b.width,height:b.height,dpr:b.dpr})}distroy(){this.offAll(),this.debuggee=void 0,this.initDevtools=!1,this.onDebuggeeEvent=void 0,this.onDebuggeeDetach=void 0,this.onDebuggeeAttach=void 0,this.onRequestCompleted=void 0,this.onRequestErrorOccurred=void 0,this.onRequestBeforeSendHeaders=void 0,this._webview.removeEventListener('newwindow',this.onNewWindow),this._webview.removeEventListener('loadcommit',this.onLoadCommit),this._webview=void 0}clearData(a,b,c){this._webview&&this._webview.clearData(a,b,c)}}module.exports=c}(require('lazyload'),require);