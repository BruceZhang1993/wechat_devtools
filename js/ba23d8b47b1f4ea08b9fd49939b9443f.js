'use strict';!function(require,directRequire){function a(){j.removeAudio(),k.removeAudio(),t.resetNetworkStatus()}const b=require('path'),c=require('url'),d=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),e=require('./15ba1827c7f6564a45df6bd44da3a977.js'),f=require('./3bfffbe88b3d923921f851c0697974fe.js'),g=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),h=require('./f171257bbcaef547a3cf27266ccb0db2.js'),i=require('./72653d4b93cdd7443296229431a7aa9a.js'),j=require('./35a5c665bbd039baf968211c3ff216fc.js'),k=require('./f7806acc0e6f141f3b11c7faf34d32ad.js'),l=require('./83822ab95828f61bf6a61c04d53246a8.js'),m=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),n=require('./da7c31daaf542cf1796023d8e344b98a.js'),o=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),p=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),q=require('./common/locales/index.js'),r=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),s=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),t=require('./a81bc67025235ccc252f27ad624704e9.js'),u=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),v=(a,b)=>{return{type:d.SIMULATOR_LOAD_SUBPACKAGE,data:{root:a,loaded:b}}},w=(a={})=>{const b=f.getCurrent(),c=b.appid,e=a.origin;return e==p.COMPILE_ORIGIN.SAVE_FILE?n('weapp_filechange_compile',c):e==p.COMPILE_ORIGIN.BUTTON?n('weapp_toolbar_compile',c):e==p.COMPILE_ORIGIN.SHORT_CUT&&n('weapp_key_compile',c),{type:d.SIMULATOR_COMPILE,data:a}};module.exports={launch:function(){return a(),async(a,b)=>{const c=f.getCurrent()||{},e=b(),h=e.simulator.compileCommand,i=await g(c);let j=i.entryPagePath.replace(/\.html$/,''),k=j,l={},n=m.SCENE_DEFAULT,t=!1;if(e.simulator.appConfig.extAppid!=i.extAppid&&(a(r.setProjectExtInfo({appid:i.extAppid})),a(r.requestProjectAttr())),h&&h.condiction)k=h.condiction.pathName,l=h.condiction.query,n=h.condiction.scene;else{const a=f.getCompileCondiction();if(a){let b=a.query&&a.query.split('&')||[];b.forEach((a)=>{if(a){let b=a.split('=');l[b[0]]=b[1]}}),a.pathName&&(k=a.pathName),a.scene&&(n=a.scene)}}if(j!=k&&(t=!0),a({type:d.SIMULATOR_LAUNCH,data:{home:t,pathName:k,query:l,scene:n},appConfig:i}),-1===i.pages.indexOf(k)){let b=s.checkIsInSubPackage(i,k);b?a(v(b.root,!1)):o.display({command:p.DISPLAY_ERROR,type:m.errorPrefix.JSON_ERROR,force:!0,data:{title:q.config.JSON_CUSTOM_COMPILE_PATH_NOT_EXISTS_TITLE,msg:q.config.JSON_CUSTOM_COMPILE_PATH_NOT_EXISTS.format(k)}})}}},setAppLaunched:(a)=>(b)=>{if(a)return void b({type:d.SIMULATOR_SET_APP_LAUNCHED,flag:a})},setWebviewReady:function(a,b){return{type:d.SIMULATOR_SET_WEBVIEW_READY,webviewID:a,ready:b}},hidePreviewImage:function(){return{type:d.SIMULATOR_SET_PREVIEW_IMAGE,data:{show:!1}}},hideActionSheet:function({callbackID:a,res:b}){return(c)=>{c({type:d.SIMULATOR_SET_ACTIONSHEET,data:{show:!1,callbackID:null,showOnWebviewID:-1}}),a&&c({type:d.ASSDK_CALLBACK,callbackID:a,res:b})}},hideModal:function({callbackID:a,res:b}){return(c)=>{c({type:d.SIMULATOR_SET_MODAL,data:{show:!1,callbackID:null,showOnWebviewID:-1}}),a&&c({type:d.ASSDK_CALLBACK,callbackID:a,res:b})}},hidePicker:function({callbackID:a,webviewID:b,res:c}){return(e)=>{e({type:d.SIMULATOR_SET_PICKER,data:{show:!1}}),a&&e({type:d.JSSDK_CALLBACK,callbackID:a,webviewID:b,res:c})}},hideShare:function({callbackID:a,res:b}){return(c)=>{c({type:d.SIMULATOR_SET_SHARE,data:{show:!1}}),a&&c({type:d.ASSDK_CALLBACK,callbackID:a,res:b})}},hideGroupList:function(a){return(b)=>{b({type:d.SIMULATOR_SET_GROUP_INFO,data:{show:!1}}),a&&b({type:d.SIMULATOR_SET_SHARE,data:{show:!0,group:a}})}},setAppConfig:function(a){return{type:d.SIMULATOR_SET_APP_CONFIG,data:a}},setDebuggee:function(a,b,c){return{type:d.SIMULATOR_SET_DEBUGGEE,debuggee:a,webviewID:b,flag:c}},hideConfirm:function(){return{type:d.SIMULATOR_SET_CONFIRM,data:{show:!1,content:'',callback:()=>{}}}},hideSetting:function({scopeList:a,callbackID:b,api:c}){return async(g)=>{let j='';if(a&&0<a.length)try{let{body:b}=await e({url:`${h.setAuth}`,method:'post',body:JSON.stringify({appid:f.getProjectAppID(),auth_item:a}),needToken:1,needAppID:1})}catch(a){i.error(`hideSetting setAuth error ${a}`),j=a}let k={};if(j)k.errMsg=`${c}:fail ${j}`;else{let b=a.map((a)=>{return{state:a.state,scope:a.scope,desc:a.scope_desc}});k.errMsg=`${c}:ok`,k.authSetting=b}g({type:d.SIMULATOR_SET_SETTING,data:{show:!1}}),g({type:d.ASSDK_CALLBACK,callbackID:b,res:k})}},hideAddPhoneContact:function({confirm:a=!1,callbackID:b=-1,api:c=''}={}){return(e)=>{e({type:d.SIMULATOR_SET_ADDPHONECONTACT,data:{show:!1,contactData:{}}});let f;f=a?{errMsg:`${c}:ok`}:{errMsg:`${c}:fail cancel`},e({type:d.ASSDK_CALLBACK,callbackID:b,res:f})}},hideChooseAddress:function({confirm:a=!1,callbackID:b=-1,api:c=''}={}){return(e)=>{e({type:d.SIMULATOR_SET_CHOOSEADDRESS,data:{show:!1}});let f;f=a?{errMsg:`${c}:ok`,addressPostalCode:'510000',proviceFirstStageName:'\u5E7F\u4E1C\u7701',addressCitySecondStageName:'\u5E7F\u5DDE\u5E02',addressCountiesThirdStageName:'\u6D77\u73E0\u533A',addressDetailInfo:'\u65B0\u6E2F\u4E2D\u8DEF397\u53F7',userName:'\u5F20\u4E09',nationalCode:'510000',telNumber:'020-81167888'}:{errMsg:`${c}:fail cancel`},e({type:d.ASSDK_CALLBACK,callbackID:b,res:f})}},hideChooseInvoiceTitle:function({confirm:a=!1,callbackID:b=-1,api:c=''}={}){return(e)=>{e({type:d.SIMULATOR_SET_CHOOSEINVOICETITLE,data:{show:!1}});let f;f=a?{errMsg:`${c}:ok`,invoiceTitleInfo:JSON.stringify({type:0,title:'\u5E7F\u5DDE\u817E\u8BAF\u79D1\u6280\u6709\u9650\u516C\u53F8',taxNumber:'91440101327598294H',companyAddress:'\u5E7F\u5DDE\u5E02\u6D77\u73E0\u533A\u65B0\u6E2F\u4E2D\u8DEF397\u53F7\u81EA\u7F1672\u53F7(\u5546\u4E1A\u8857F5-1)',telephone:'020-81167888',bankName:'\u62DB\u5546\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u5E7F\u5DDE\u5E02\u4F53\u80B2\u4E1C\u8DEF\u652F\u884C',bankAccount:'1209 0928 2210 301'})}:{errMsg:`${c}:fail cancel`},e({type:d.ASSDK_CALLBACK,callbackID:b,res:f})}},setAppRoute:function(a){return{type:d.SIMULATOR_SET_APP_ROUTE,data:a}},switchTab:function(a,b){return{type:d.SIMULATOR_OPEN_TABBAR,data:{pathName:a,tabbarIndex:b}}},setAuthorize:function(a){return{type:d.SIMULATOR_SET_AUTHORIZE_CONFIRM,data:{show:a}}},setShareDataURI:function(a,b){return{type:d.SIMULATOR_SET_SHARE_DATAURI,data:{webviewID:a,dataURI:b}}},setRightBtnActionSheet:function(a){return{type:d.SIMULATOR_SET_RIGHTBTN_ACTIONSHEET,data:a}},setPayment:function(a){return{type:d.SIMULATOR_SET_PAYMENT_QRWND,data:a}},hideMap:function({callbackID:a,res:b}){return(c)=>{c({type:d.SIMULATOR_SET_LOCATION,data:{show:!1,callbackID:null,src:''}}),a&&c({type:d.ASSDK_CALLBACK,callbackID:a,res:b})}},hideCardView:function({callbackID:a,res:b}){return(c)=>{c({type:d.SIMULATOR_SET_CARD_VIEW,data:{show:'none',cardInfo:[]}}),a&&c({type:d.ASSDK_CALLBACK,callbackID:a,res:b})}},batchAddCard:function({callbackID:a,list:b}){return(c)=>{let g={appid:f.getProjectAppID(),acceptitem_list:b},i={url:`${h.batchAddCardURL}?isapp=1`,body:JSON.stringify(g),method:'post',needToken:1,needAppID:1};e(i).then((e)=>{let f=e.body,g=f.resp_list;g=g.map((a,c)=>{let d=b[c],e=JSON.parse(a.json_ret);return{cardId:d.card_id,cartExt:d.card_ext,code:e.encrypt_code,isSuccess:!0}}),c({type:d.ASSDK_CALLBACK,callbackID:a,res:{errMsg:`addCard:ok`,cardList:g}})}).catch((b)=>{c({type:d.ASSDK_CALLBACK,callbackID:a,res:{errMsg:`addCard:fail ${b}`}})}),c({type:d.SIMULATOR_SET_CARD_VIEW,data:{show:'none',cardInfo:[]}})}},setBackground:function(a){return{type:d.SIMULATOR_SET_BACKGROUND,data:a}},toggleBackground:function(){return{type:d.SIMULATOR_TOGGLE_BACKGROUND}},setWidget:function(a){return{type:d.SIMULATOR_SET_WIDGET,data:a}},reLaunchToIndexPage:function(){return{type:d.SIMULATOR_RELAUNCH_TO_INDEX}},setWxmlInspect:function(a){return{type:d.SIMULATOR_SET_WXMLINSPECT,data:a}},setVibrate:function(a){return{type:d.SIMULATOR_SET_VIBRATE,data:{type:a}}},insertHTMLWebView:function({callbackID:a,webviewID:b,res:c}){return(e)=>{a&&e({type:d.JSSDK_CALLBACK,callbackID:a,webviewID:b,res:c})}},updateHTMLWebView:function({callbackID:a,webviewID:b,res:c}){return(e)=>{a&&e({type:d.JSSDK_CALLBACK,callbackID:a,webviewID:b,res:c})}},compile:(a={})=>{return(b,c)=>{const d=c();d.settings.edit.saveBeforeCompile?(l.ready=!0,l.send({type:'COMMAND',command:'saveAllAndCompile',data:a.origin})):b(w(a))}},compileImmediate:w,setConfirm:function(a){return{type:d.SIMULATOR_SET_CONFIRM,data:a}},setSubPackage:v,assdkCallback:function({callbackID:a,res:b}){return(c)=>{c({type:d.ASSDK_CALLBACK,callbackID:a,res:b})}},widgetJumpToWeapp:function(a){return(b)=>{b({type:d.PROJECT_SET_COMPILE_TYPE,data:u.weapp}),b({type:d.SIMULATOR_COMPILE,data:a})}}}}(require('lazyload'),require);