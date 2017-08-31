'use strict';!function(require,directRequire){function a(a,b){let c=v.libs[w][a],d=n.createHash('md5');d.update(b);let e=d.digest('hex');if(c!==e){let b=new Error(`${w} ${a} ${e}!=${c}`);throw b.code=k.VENDOR_MD5_NOT_MATCH,b}}function b(){v=A;let a=JSON.stringify(A);g.writeFile(t,a,(a)=>{i.error(`copyVendorConfig catch error ${a}`)}),w=v.currentLibVersion,u.emit('VENDOR_VERSION_CHANGE',v)}function c(){try{for(let a in r){let b=h.join(s,a),c=g.readFileSync(h.join(z,a));r[a]?g.writeFileSync(b,c,{mode:511}):g.writeFileSync(b,c)}}catch(a){i.error(`copyUnVersionVendor catch error ${a}`)}}async function d(a){let b=x[a];if(b)return b;let c=h.join(s,a);try{return b=x[a]=g.readFileSync(c),b}catch(a){i.error(`getUnVersionVendorCache catch error ${a}`)}return b=x[a]=g.readFileSync(h.join(z,a)),g.writeFile(c,b,(a)=>{i.error(`getUnVersionVendorCache writeFile error ${a}`)}),b}async function e(b){let c=x[w];if(!c)x[w]={};else if(c[b])return c[b];let d,e=h.join(s,w),j=h.join(e,b);try{return d=x[w][b]=g.readFileSync(j),a(b,d),d}catch(a){i.error(`getVersionVendorCache catch error ${a}`)}l.sync(e);try{let a=h.join(z,w,b);return d=x[w][b]=g.readFileSync(a,'utf8'),g.writeFile(j,d,(a)=>{i.error(`getVersionVendorCache writeFile ${w}/${b} error ${a}`)}),d}catch(a){i.error(`getVersionVendorCache from install package catch error ${a}`)}let k=`https://dldir1.qq.com/WechatWebDev/vendor/${w}/${b}`;return d=x[w][b]=await f(k),g.writeFile(j,d,(a)=>{i.error(`getVersionVendorCache writeFile ${w}/${b} error ${a}`)}),d}async function f(a){let b=await m({url:a,needToken:-1,needParse:-1});return b.body}const g=require('fs'),h=require('path'),i=require('./72653d4b93cdd7443296229431a7aa9a.js'),j=require('./92320c1386e6db6a6f2556736a9bc280.js'),k=require('./949d8235c744ced2a80121e4dba34c28.js'),l=require('mkdir-p'),m=require('./15ba1827c7f6564a45df6bd44da3a977.js'),n=require('crypto'),o=require('events').EventEmitter,p=global.appConfig.isDev,q='darwin'===process.platform;let r=q?{wcc:!0,wcsc:!0}:{"wcc.exe":!0,"wcsc.exe":!0};r=Object.assign(r,{"hls.js":!1});const s=j.WeappVendor,t=h.join(s,'config.json'),u=new o;let v,w,x={};const y=h.join(__dirname,'../../vendor/dev'),z=p?h.join(__dirname,'../../vendor/'):h.join(__dirname,'./vendor/'),A=JSON.parse(g.readFileSync(h.join(z,'config.json'),'utf8'));(function(){try{if(v=JSON.parse(g.readFileSync(t,'utf8')),v.configVersion>=A.configVersion)return void(w=v.currentLibVersion)}catch(a){i.error(`init catch error ${a}`)}b(),c()})(),module.exports={on:function(a,b){u.on(a,b)},off:function(a,b){u.removeListener(a,b)},getFile:async function(a){return p?g.readFileSync(h.join(y,a),'utf8'):r.hasOwnProperty(a)?d(a):e(a)},setVersion:function(a){return v.libs[a]?w!=a&&(w=a,u.emit('VENDOR_VERSION_CHANGE',a)):w!=v.currentLibVersion&&(w=v.currentLibVersion,u.emit('VENDOR_VERSION_CHANGE',a)),w},getVersion:function(){return w},getVendorConfig:function(){return v},getWXMLParsePath:function(){if(x.wcc)return x.wcc;let a=q?'wcc':'wcc.exe';if(p)return x.wcc=h.join(z,a),x.wcc;let b=h.join(s,a);if(!g.existsSync(b)&&(b=h.join(z,a),!g.existsSync(b))){let a=new Error('wcc file not found in install package');throw a.code=k.VENDOR_WCC_FILE_NOT_FOUND,a}return x.wcc=b,b},getWXSSParsePath:function(){if(x.wcsc)return x.wcsc;let a=q?'wcsc':'wcsc.exe';if(p)return x.wcsc=h.join(z,a),x.wcsc;let b=h.join(s,a);if(!g.existsSync(b)&&(b=h.join(z,a),!g.existsSync(b))){let a=new Error('wcsc file not found in install package');throw a.code=k.VENDOR_WCSC_FILE_NOT_FOUND,a}return x.wcsc=b,b},updateVendorConfig:async function(a){if(!a)return v;let b=await m({url:a,needToken:0}),c=b.body;return v.configVersion<c.configVersion&&(v=c,g.writeFileSync(t,JSON.stringify(v)),u.emit('VENDOR_CONFIG_CHANGE',v),i.info(`updateVendorConfig end get new vendorConfig ${JSON.stringify(v)}`)),v}}}(require('lazyload'),require);