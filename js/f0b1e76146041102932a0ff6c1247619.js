'use strict';!function(require,directRequire){function a(a){const b=/^http(s)?:\/\//;return b.test(a)?a:'http://'+a}function b(a){let b={},c=a.length;for(let e=0;e<c;e++)d[e]&&1===parseInt(a[e])&&(b[d[e]]=!0);return b}const c=require('./0b01a3ff1572567a994a0ceae64dfef3.js'),d=require('./f987f95268d39fe557441f2f9aea29e6.js'),e=require('./84b183688a46c9e2626d3e6f83365e13.js'),f=require('./15ba1827c7f6564a45df6bd44da3a977.js');module.exports=async function(d){let g=a(d.url),h={url:g,scene:d.isWeapp?49:1,devtoolsVersion:e.getVersionNum(),reason:d.isSync?0:1};d.isWeapp&&(h.appid=d.appid);let{body:i}=await f({url:c.GET8KEY_URL,body:JSON.stringify(h),method:'post',needToken:1,needCheckErrCode:-1});return i.purviewFormGetA8key=i.jsapi_control_bytes?b(i.jsapi_control_bytes):null,i}}(require('lazyload'),require);