'use strict';!function(require,directRequire){const a=require('./4523cef030d08b461cb36b9937333f4b.js'),b=require('./614847f6604762fd103fd8a8d3390967.js'),c=require('./9a24eb4fb7a49d4dd24531943fc3c899.js');module.exports=new class{constructor(){}initHelper({setDebuggerWindow:a}={}){this.setDebuggerWindow=a||function(){},this.queue=[]}cleanQueue(){this.queue=[]}displayQueue(){this.queue&&0!=this.queue.length&&(this.queue.forEach((a)=>{this.showConsoleAndDisplayError(a.type,a.data)}),this.queue=[])}initWebview(a){this.webview=a}display(a){let{command:c,type:d,data:e,force:f}=a;if(d=d||'CODE_ERROR','DISPLAY_ERROR'===c){if(f&&this.showConsoleAndDisplayError(d,e),this.webview&&/\?load$/.test(this.webview.src))return this.displayQueue(),void this.showConsoleAndDisplayError(d,e);this.queue.push({type:d,data:e}),this.tryTimes=0,clearInterval(this.timer),this.timer=setInterval(()=>{if(this.webview){let a=this.webview.src||'';if(/\?load$/.test(a))return this.displayQueue(),void clearInterval(this.timer)}this.tryTimes++,20<=this.tryTimes&&clearInterval(this.timer)},500)}else'DISPLAY_INFO'===c&&b(this.webview,d,e)}showConsoleAndDisplayError(b,c){a(this.webview,b,c)}}}(require('lazyload'),require);