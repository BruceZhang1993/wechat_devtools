(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=300)})({2:function(a){function b(a){j=a?a:j,h=new window.__WebSocket(i,j),h.onopen=function(){let a=[].concat(l);l=[],a.forEach((a)=>{c(a)})},h.onclose=function(){h=null,b()},h.onmessage=function(a){try{let b=JSON.parse(a.data);d(b)}catch(a){}}}function c(a){h&&h.readyState===window.__WebSocket.OPEN?h.send(JSON.stringify(a)):l.push(a)}function d(){k.forEach((a)=>{try{a.apply(this,arguments)}catch(a){console.error(a)}})}var e=navigator.userAgent,f=e.match(/port\/(\d*)/),g=f?parseInt(f[1]):9974,h=null,i=`ws://localhost:${g}`,j=null,k=[],l=[];a.exports={connect:b,send:c,registerCallback:(a)=>{k.push(a)}}},250:function(a,b,c){function d(){let a=`WIDGET`;e.connect(a);let b=document.getElementById('myCanvas');b.addEventListener('click',function(a){console.error(a),e.send({command:'ON_CANVAS_TAP',data:{x:a.pageX,y:a.pageY}})})}const e=c(2);navigator.userAgent;'complete'==document.readyState?d():window.addEventListener('load',()=>{d()}),a.exports={send:e.send,registerCallback:e.registerCallback}},251:function(a){const b=(a)=>{var b=a.slice(0);return b[3]/=255,`rgba(${b.join(',')})`};let c={};const d=function(a,d=!1){if(!a)return;const e=document.getElementById('myCanvas'),f=e.getContext('2d');!1===d&&(f.fillStyle='#000000',f.strokeStyle='#000000',f.shadowColor='#000000',f.shadowBlur=0,f.shadowOffsetX=0,f.shadowOffsetY=0,f.setTransform(1,0,0,1,0,0),f.clearRect(0,0,e.width,e.height)),a.forEach(function(a){var d=a.method,e=a.data;if(/^set/.test(d)){var g,h=d[3].toLowerCase()+d.slice(4);if('fillStyle'===h||'strokeStyle'===h){if('normal'===e[0])g=b(e[1]);else if('linear'===e[0]){var g=f.createLinearGradient.apply(f,e[1]);e[2].forEach(function(a){var c=a[0],d=b(a[1]);g.addColorStop(c,d)})}else if('radial'===e[0]){var i=e[1][0],j=e[1][1],k=e[1][2],g=f.createRadialGradient.apply(f,[i,j,0,i,j,k]);e[2].forEach(function(a){var c=a[0],d=b(a[1]);g.addColorStop(c,d)})}f[h]=g}else if('globalAlpha'===h)f[h]=e[0]/255;else if('shadow'===h){var l=['shadowOffsetX','shadowOffsetY','shadowBlur','shadowColor'];e.forEach(function(a,c){f[l[c]]='shadowColor'===l[c]?b(a):a})}else'fontSize'===h?f.font=f.font.replace(/\d+\.?\d*px/,e[0]+'px'):'textBaseline'===h?('normal'===e[0]&&(e[0]='alphabetic'),f[h]=e[0]):f[h]=e[0]}else if('fillPath'===d||'strokePath'===d)d=d.replace(/Path/,''),f.beginPath(),e.forEach(function(a){f[a.method].apply(f,a.data)}),f[d]();else if('fillText'===d)f.fillText.apply(f,e);else if('drawImage'===d){let[a,...b]=e;c=c||{},a=a.replace('wxfile://','http://wxfile.open.weixin.qq.com/'),a=0==a.indexOf('/')||0==a.indexOf('\\')?`.${a}`:a,c[a]?c[a].ready?f.drawImage.apply(f,[c[a],...b]):c[a].queue.push(b):(c[a]=new Image,c[a].src=a,c[a].queue=[],c[a].onload=()=>{c[a].ready=!0,f.drawImage.apply(f,[c[a],...b]),c[a].queue.forEach((b)=>{f.drawImage.apply(f,[c[a],...b])}),c[a].queue=[]})}else f[d].apply(f,e)})};a.exports={drawCanvas:function(a){let b=a.args,{actions:c,reserve:e}=b;d(c,e)},setCanvas:function(a){let b=document.getElementById('myCanvas');a.width&&b.setAttribute('width',a.width),a.height&&b.setAttribute('height',a.height),a.style&&b.setAttribute('style',a.style)}}},300:function(a,b,c){const d=c(250),e=c(251);d.registerCallback((a)=>{let{command:b,data:c}=a;'SET_CANVAS'===b?e.setCanvas(c):'DRAW_CANVAS'==b&&e.drawCanvas(c)})}});