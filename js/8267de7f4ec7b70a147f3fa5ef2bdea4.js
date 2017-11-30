'use strict';!function(require,directRequire){async function a(a){let j=await h(a),n=j.srcPath,o=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),p='app.json',q='';try{q=j.getFile(p)}catch(a){let b=new Error(e.config.FILE_NOT_FOUND.format(p));throw b.code=m.APP_JSON_READ_ERR,b.ext=a.toString(),b}let r={};try{r=JSON.parse(q)}catch(a){let b=k.parseJsonParseErr({data:q,error:a}),c=new Error(b);throw c.code=m.APP_JSON_PARSE_ERR,c}let s=a.compileType,t=r.pages||[];if('array'!=d.getType(t)||0===t.length){let a=new Error(e.config.ENTRANCE_NOT_FOUND.format(JSON.stringify(t)));throw a.code=m.APP_JSON_ENTRANCE_NOT_FOUND_ERR,a}let u=!r.entryPagePath,v={};for(let d,f=0;f<t.length;f++){if(d=t[f],v[d]){let a=new Error(e.config.JSON_PAGES_REPEAT.format([p,d]));throw a.code=m.APP_JSON_PAGES_ERR,a}if(v[d]=!0,u||d!=r.entryPagePath||(u=!0),!c.existsSync(b.join(n,`${t[f]}\.wxml`))){let a=new Error(e.config.JSON_PAGE_WXML_NOT_EXISTS.format([p,'pages',d]));throw a.code=m.APP_JSON_WXML_NOT_FOUND,a}if(!c.existsSync(b.join(n,`${t[f]}\.js`))){let a=new Error(e.config.JSON_PAGE_JS_NOT_EXISTS.format([p,'pages',d]));throw a.code=m.APP_JSON_JS_NOT_FOUND,a}}let w=r.tabBar;if(w){let a;if('array'!=d.getType(w.list))a=new Error(e.config.JSON_TABBAR_SHOULD_BE_LIST);else if(!w.list||w.list.length<o.setting.MinTabbarCount)a=new Error(e.config.JSON_TABBAR_AT_LEAST.format(o.setting.MinTabbarCount));else if(w.list.length>o.setting.MaxTabbarCount)a=new Error(e.config.JSON_TABBAR_AT_MOST.format(o.setting.MaxTabbarCount));else{let f=[];for(var x=0;x<w.list.length;x++){let a=w.list[x];if('object'!=d.getType(a)){f.push(e.config.JSON_TABBAR_ITEM_OBJECT.format(x));continue}let g=a.pagePath;if(!g){f.push(e.config.JSON_TABBAR_PATH_EMPTY.format(x));continue}if('string'!=d.getType(g)){f.push(e.config.JSON_TABBAR_PATH_STRING.format(x));continue}2<=g.split('?').length&&f.push(e.config.JSON_TABBAR_PATH_NOT_CONTAIN.format([x,'?'])),2<=g.split('.').length&&f.push(e.config.JSON_TABBAR_PATH_NOT_CONTAIN.format([x,'.']));let h=[];if(a.iconPath){let c=b.join(n,a.iconPath);a.iconPath=b.relative(n,c),h.push({name:'iconPath',path:c})}if(a.selectedIconPath){let c=b.join(n,a.selectedIconPath);a.selectedIconPath=b.relative(n,c),h.push({name:'selectedIconPath',path:c})}h.forEach((a)=>{if(!c.existsSync(a.path))return f.push(e.config.JSON_TABBAR_ICON_NOT_FOUND.format([x,a.name]));let d=c.statSync(a.path);if(d.isDirectory())return f.push(e.config.JSON_TABBAR_ICON_NOT_DIR.format([x,a.name]));d.size>1024*o.setting.MaxTabbarIconSize&&f.push(e.config.JSON_TABBAR_ICON_MAX_SIZE.format([x,a.name,o.setting.MaxTabbarIconSize]));let g=b.extname(a.path);0>l.indexOf(g)&&f.push(e.config.JSON_TABBAR_ICON_EXT.format([x,a.name,l.join('\u3001')]))})}0<f.length&&(a=new Error(f.join('\n')))}if(a)throw a.code=m.APP_JSON_CONTENT_ERR,a}if(s==g.conversation||s==g.search){let f,g=r.widgets,h='';if(!g)f=new Error(e.config.JSON_WIDGETS_EMPTY);else if('array'!=d.getType(g))f=new Error(e.config.JSON_WIDGETS_NOT_ARRAY);else{let i=[];g.forEach((f,g)=>{if('object'!=d.getType(f))i.push(e.config.JSON_WIDGETS_ITEM_NOT_OBJECT.format(g));else if('conversation'!=f.type&&'search'!=f.type)i.push(e.config.JSON_WIDGETS_TYPE_INVALID.format([g,'conversation\u3001search']));else if(!f.path||'string'!=d.getType(f.path))i.push(e.config.JSON_WIDGETS_PATH_NOT_FOUND.format(g));else if(!c.existsSync(b.join(n,f.path)))i.push(e.config.JSON_WIDGETS_PATH_NOT_FOUND.format(g));else{let a=c.statSync(b.join(n,f.path));a.isDirectory()?!c.existsSync(b.join(n,f.path,'widget.js'))&&i.push(e.config.JSON_WIDGETS_JS_NOT_FOUND.format([g,'widget.js'])):i.push(e.config.JSON_WIDGETS_PATH_SHOULD_BE_DIR.format(g))}h||f.type!=a.compileType||(h=f.path)}),h||i.push(e.config.JSON_WIDGETS_TYPE_NOT_FOUND.format(a.compileType)),0<i.length&&(f=new Error(i.join('\n')))}if(f)throw f.code=m.APP_JSON_CONTENT_ERR,f}let i=await f(a);if(i)for(let a in i)'extPages'!=a&&(r[a]='object'==d.getType(i[a])?Object.assign({},r[a]||{},i[a]):i[a]);if(r.subPackages){if('array'!=d.getType(r.subPackages)){let a=new Error(e.config.JSON_CONTENT_SHOULD_BE.format(['subPackages','array']));throw a.code=m.APP_JSON_CONTENT_ERR,a}let a={},f={},g=[];if(r.subPackages.forEach((h,i)=>{if('string'!=d.getType(h.root))return void g.push(e.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].root`,'string']));if(t.forEach((a)=>{0==a.indexOf(h.root)&&g.push(e.config.JSON_PAGE_SHOULD_NOT_IN_SUBPACKAGE.format([`pages ${a}`,`subPackages[${i}]`]))}),!c.existsSync(b.join(n,h.root)))return void g.push(e.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].root`,'\u76EE\u5F55']));let j=c.statSync(b.join(n,h.root));return j.isDirectory()?a[h.root]?void g.push(e.config.JSON_SUBPACKAGE_EXIST.format([`subPackages[${i}].root`])):(a[h.root]=!0,'array'==d.getType(h.pages)?void h.pages.forEach((a)=>{let d=b.posix.join(h.root,a);return f[d]?void g.push(e.config.JSON_PAGES_REPEAT.format([`subPackages[${i}]`,a])):void(f[d]=!0,!u&&d==r.entryPagePath&&(u=!0),!c.existsSync(b.join(n,`${d}\.wxml`))&&g.push(e.config.JSON_PAGE_WXML_NOT_EXISTS.format([`subPackages[${i}]`,'pages',d])),!c.existsSync(b.join(n,`${d}\.js`))&&g.push(e.config.JSON_PAGE_JS_NOT_EXISTS.format([`subPackages[${i}]`,'pages',d])))}):void g.push(e.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].pages`,'array']))):void g.push(e.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].root`,'\u76EE\u5F55']))}),0<g.length){let a=new Error(g.join('\n'));throw a.code=m.APP_JSON_CONTENT_ERR,a}}if(!u){let a=new Error(e.config.JSON_ENTRY_PAGE_PATH_NOT_FOUND.format(['pages\u3001subPackages','entryPagePath']));throw a.code=m.APP_JSON_PAGES_ERR,a}return r}const b=require('path'),c=require('fs'),d=require('./84b183688a46c9e2626d3e6f83365e13.js'),e=require('./common/locales/index.js'),f=require('./551bb965e1f344281d555a429cd2140c.js'),g=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),h=require('./162bf2ee28b76d3b3d95b685cede4146.js'),i=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),j=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),k=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js'),l=['.png','.jpg','.jpeg'],m=require('./949d8235c744ced2a80121e4dba34c28.js');module.exports=async function(b){try{return await a(b)}catch(a){throw a.code||(a.code=m.APP_JSON_CONTENT_ERR),a}}}(require('lazyload'),require);