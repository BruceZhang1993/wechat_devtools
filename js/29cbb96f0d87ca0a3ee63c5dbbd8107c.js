'use strict';!function(require,directRequire){const a=require('react'),b=require('react-dom'),{Provider:c}=require('react-redux'),d=require('./8e433dffaa20c3a7331f9aeecb1221b0.js'),e=directRequire('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),f=require('./ff946754202ecf377034d29daac7c8d9.js'),g=require('./437e6043fc662374e4f1c2330516ac40.js'),h=require('./c41853777103289d939a4b1503784d4f.js'),i=require('./5451dfc4d939398d913dc724d952b02b.js'),j=require('./84b183688a46c9e2626d3e6f83365e13.js'),k=require('./da7c31daaf542cf1796023d8e344b98a.js'),l=require('./72653d4b93cdd7443296229431a7aa9a.js'),m='darwin'===process.platform;let n=async()=>{let n=await j.getAvailablePort();g.startProxyServer({port:n,rule:h});let o=await j.getAvailablePort();if(global.messageCenterPort=o,f.start(o),m&&i.init(),!global.appConfig.isDev){function a(a,b){try{let c=b.filename,d=b.error.stack;l.error(`filename: ${c}, msg: ${d}`),k(a,'',`filename: ${c}, msg: ${d}`)}catch(a){}}window.addEventListener('error',(b)=>{a('tool_error_nw',b)}),global.contentWindow.addEventListener('error',(b)=>{a('tool_error_web',b)})}b.render(a.createElement(c,{store:e},a.createElement(d,null)),global.contentDocument.getElementById('container'))};'complete'===global.contentDocument.readyState?n():global.contentWindow.addEventListener('load',n)}(require('lazyload'),require);