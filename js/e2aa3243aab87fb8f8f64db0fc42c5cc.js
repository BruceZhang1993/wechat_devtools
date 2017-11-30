'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){'use strict';const a=require('lodash'),{REHYDRATE:b}=require('redux-persist/lib/constants'),c=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),d=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),e=require('./5dc59f418d85e854c1a12d402d29e2d7.js');let f=0;const g=()=>{return{subPackageLoaded:{},compileCommand:{ts:Date.now()},scene:1001,restartTimes:0,beginTime:Date.now(),currentWebviewID:-1,webviewInfos:{},tabbar:{},widget:{errmsg:'',ready:!1,tapCallback:{}},backgroundShow:!1,toastInfo:{show:!1,icon:'success',title:'',image:'',mask:!1,showOnWebviewID:-1},modalInfo:{show:!1,title:'',content:'',showCancel:!0,cancelText:'\u53D6\u6D88',confirmText:'\u786E\u5B9A',cancelColor:'#000000',confirmColor:'#3CC51F',callbackID:null,showOnWebviewID:-1},actionsheetInfo:{show:!1,itemList:[],cancelColor:'#000000',cancelText:'\u53D6\u6D88',itemColor:'#000000',callbackID:null,showOnWebviewID:-1},pickerInfo:{show:!1,mode:'none'},groupInfo:{show:!1,list:[]},assdkCallbackInfo:{callbackID:null,res:{}},assdkOnEventInfo:{event:'',data:{}},jssdkCallbackInfo:{callbackID:null,res:{}},previewImage:{show:!1,urls:[],current:''},cardInfo:{show:'none',args:{},callbackID:null,cardInfo:[],errData:[]},shareInfo:{show:!1,imageUrl:'',title:'',desc:'',api:'',group:null,callbackID:null},rightBtnActionSheet:{show:!1},appConfig:{},debuggeeMap:{},appLaunched:!1,confirm:{show:!1,content:'',showCancel:!0,confirmColor:'#3CC51F',cancelColor:'#000000',contentColor:'#888',confirmText:'\u786E\u5B9A',cancelText:'\u53D6\u6D88',subList:[]},setting:{show:!1,api:'',scopeList:[],callbackID:-1},appRoute:{openType:'',status:'none'},authorize:{show:!1,callback:null,options:{}},payment:{show:!1,uuid:'',qrcode:'',qrcodeState:''},location:{show:!1},accelerometer:!1,compass:!1,music:{type:'',src:'',title:'',singer:'',epname:'',webUrl:'',startTime:0,coverImgUrl:'',status:e.MUSIC_STATE_INIT},wxmlInspected:!1,addPhoneContact:{show:!1,callbackID:-1,api:'',contactData:{}},chooseAddress:{show:!1,callbackID:-1,api:''},chooseInvoiceTitle:{show:!1,callbackID:-1,api:''},decryptedInfo:{},captureScreen:{callbackID:-1,webviewID:-1}}},h=(a,b='')=>{let c={};b&&(c=l(b,a));let e='black'===c.navigationBarTextStyle?'black':'white';return{home:!1,title:c.navigationBarTitleText||'',titleStyle:e,showLoading:!1,showLeftBtn:!1,showRightBtn:!0,showRecordWording:!1,rightBtnIconPath:'',rightBtnText:'',backgroundColor:c.navigationBarBackgroundColor||d.DEFAULT_NAVIGATIONBAR_BGCOLOR,frontColor:'white'==e?d.DEFAULT_NAVIGATIONBAR_WHITE_TEXTCOLOR:d.DEFAULT_NAVIGATIONBAR_BLACK_TEXTCOLOR,alpha:c.hasOwnProperty('navigationBarBackgroundAlpha')?c.navigationBarBackgroundAlpha:1,transition:'none',disableScroll:c.disableScroll}},i=(a,b='')=>{let c=-1;try{if(b){c=a.tabBar.list.findIndex((a)=>{return a.pagePath&&a.pagePath==b+'.html'})}}catch(a){c=-1}return{id:f++,parent:-1,child:-1,pathName:b,query:{},backgroundColor:'#ffffff',shareDataURI:'',tabbarIndex:c,navigationBar:h(a,b),shareBtnState:{show:!1,isDynamic:!1,withShareTicket:!1},ready:!1}},j=(a,b='')=>{if(a.standbyWebview){let c=-1;try{c=a.appConfig.tabBar.list.findIndex((a)=>{return a.pagePath&&a.pagePath==b+'.html'})}catch(a){c=-1}let d=_extends({},a.standbyWebview,{navigationBar:h(a.appConfig,b),tabbarIndex:c,pathName:b});return d}return i(a.appConfig,b)},k=(a)=>{let b={};for(let c in a){let d=a[c];if(-1==d.parent){b[c]=d;for(let c=a[d.child];c&&!b[c.id];)b[c.id]=c,c=a[c.child]}}return b},l=(a,b)=>{let c=a+'.html',d=b.global&&b.global.window||{},e=b.page&&b.page[c]&&b.page[c].window||{};return e=_extends({},d,e),e};module.exports=function(d=g(),e={}){switch(e.type){case c.SIMULATOR_SET_ADDPHONECONTACT:return _extends({},d,{addPhoneContact:_extends({},e.data,{contactData:_extends({},e.data.contactData)})});case c.SIMULATOR_SET_CHOOSEADDRESS:return _extends({},d,{chooseAddress:_extends({},e.data)});case c.SIMULATOR_SET_CHOOSEINVOICETITLE:return _extends({},d,{chooseInvoiceTitle:_extends({},e.data)});case c.TOOLBAR_SELECT_DEVICE:return _extends({},d,{standbyWebview:void 0});case c.SIMULATOR_LOAD_SUBPACKAGE:return d.subPackageLoaded[e.data.root]?d:_extends({},d,{subPackageLoaded:_extends({},d.subPackageLoaded,{[e.data.root]:e.data.loaded})});case c.SIMULATOR_LAUNCH:{let a=e.appConfig,b=i(a,e.data.pathName),c=b.id;b.navigationBar.home=-1==b.tabbarIndex&&!!e.data.home,delete e.data.home,Object.assign(b,e.data);let f=g();return _extends({},f,{tabbar:a.tabBar,appConfig:a,restartTimes:d.restartTimes+1,scene:e.data.scene,currentWebviewID:c,webviewInfos:{[c]:b},appRoute:{openType:'appLaunch',status:'prepare'},subPackageLoaded:{},standbyWebview:void 0})}case c.SIMULATOR_SET_WEBVIEW_READY:{let a=e.webviewID,b=d.webviewInfos[a];return _extends({},d,{webviewInfos:_extends({},d.webviewInfos,{[a]:_extends({},b,{ready:e.ready})}),appRoute:_extends({},d.appRoute,{status:'ready'})})}case c.SIMULATOR_SET_APP_LAUNCHED:return _extends({},d,{appLaunched:e.flag});case c.SIMULATOR_COMPILE:return _extends({},d,{appLaunched:!1,compileCommand:_extends({},e.data,{ts:Date.now()})});case c.SIMULATOR_NAVIGATE:{let a=j(d,e.data.pathName),b=a.id;Object.assign(a,e.data);let c=d.currentWebviewID,f=d.webviewInfos[c];f.child=b,a.parent=c,a.navigationBar.showLeftBtn=-1!=a.parent;let g=k(d.webviewInfos);return _extends({},d,{currentWebviewID:b,webviewInfos:_extends({},g,{[b]:a}),appRoute:{openType:'navigateTo',status:'prepare'},standbyWebview:i(d.appConfig,'')})}case c.SIMULATOR_REDIRECT:{let a=j(d,e.data.pathName),b=a.id;Object.assign(a,e.data);let c=d.currentWebviewID,f=d.webviewInfos[c];a.parent=f.parent,d.webviewInfos[a.parent]&&(d.webviewInfos[a.parent].child=b),a.navigationBar.showLeftBtn=-1!=a.parent;let g=k(d.webviewInfos);return _extends({},d,{currentWebviewID:b,webviewInfos:_extends({},g,{[b]:a}),appRoute:{openType:'redirectTo',status:'prepare'},standbyWebview:i(d.appConfig,'')})}case c.SIMULATOR_OPEN_TABBAR:{let a,b,c=d.webviewInfos,f={};for(let d in c){let g=c[d];-1!==g.tabbarIndex&&(f[d]=g,g.pathName===e.data.pathName&&g.tabbarIndex==e.data.tabbarIndex&&(a=d,b=g))}let g=d.standbyWebview;return a||(b=j(d,e.data.pathName),a=b.id,Object.assign(b,e.data),f[a]=b,g=i(d.appConfig,'')),_extends({},d,{currentWebviewID:a,webviewInfos:f,appRoute:{openType:'switchTab',status:b.ready?'ready':'prepare'},standbyWebview:g})}case c.SIMULATOR_NAVIGATE_BACK:{let a=e.delta,b=d.currentWebviewID,c=d.webviewInfos[b];for(;0<a&&c&&-1!=c.parent;)delete d.webviewInfos[b],b=c.parent,c=d.webviewInfos[b],c.child=-1,a--;return _extends({},d,{currentWebviewID:b,webviewInfos:d.webviewInfos,appRoute:{openType:'navigateBack',status:'ready'}})}case c.SIMULATOR_SHOW_SPECIFIC_WEBVIEW:return _extends({},d,{currentWebviewID:e.webviewID});case c.SIMULATOR_CLEAN_ALL_WEBVIEW:return _extends({},d,{webviewInfos:{}});case c.SIMULATOR_RELAUNCH:{let a=j(d,e.data.pathName),b=a.id;return Object.assign(a,e.data),_extends({},d,{currentWebviewID:b,webviewInfos:{[b]:a},appRoute:{openType:'reLaunch',status:'prepare'},standbyWebview:i(d.appConfig,'')})}case c.SIMULATOR_RELAUNCH_TO_INDEX:{let a=d.appConfig.pages&&d.appConfig.pages[0]||'',b=j(d,a),c=b.id;return _extends({},d,{currentWebviewID:c,webviewInfos:{[c]:b},appRoute:{openType:'reLaunch',status:'prepare'},standbyWebview:i(d.appConfig,'')})}case c.SIMULATOR_SET_NAVIGATION_BAR:{let a=d.webviewInfos[d.currentWebviewID];if(!a||!a.navigationBar)return d;return a.navigationBar=_extends({},a.navigationBar,e.data),_extends({},d,{webviewInfos:_extends({},d.webviewInfos,{[d.currentWebviewID]:a})})}case c.SIMULATOR_SET_TOAST:return _extends({},d,{toastInfo:_extends({},e.data,{showOnWebviewID:e.data.show?d.currentWebviewID:-1})});case c.SIMULATOR_SET_MODAL:return _extends({},d,{modalInfo:_extends({},e.data,{showOnWebviewID:e.data.show?d.currentWebviewID:-1})});case c.SIMULATOR_SET_ACTIONSHEET:return _extends({},d,{actionsheetInfo:_extends({},e.data,{showOnWebviewID:e.data.show?d.currentWebviewID:-1})});case c.SIMULATOR_SET_PICKER:return _extends({},d,{pickerInfo:_extends({},e.data)});case c.SIMULATOR_UPDATE_MULTI_PICKER:{let a=e.data.column||0,b=d.pickerInfo.array||[],c=d.pickerInfo.current||[];return b[a]=e.data.array,c[a]=e.data.current,_extends({},d,{pickerInfo:_extends({},d.pickerInfo,{array:[].concat(b),current:c})})}case c.SIMULATOR_SET_SHARE_BTN:{let a=d.webviewInfos[d.currentWebviewID]||{};return a.shareBtnState=_extends({},a.shareBtnState,e.data),_extends({},d,{webviewInfos:_extends({},d.webviewInfos,{[d.currentWebviewID]:a})})}case c.SIMULATOR_UPDATE_SHARE_GROUP_INFO:return _extends({},d,{groupInfo:_extends({},d.groupInfo,e.data)});case c.ASSDK_CALLBACK:return _extends({},d,{assdkCallbackInfo:{callbackID:e.callbackID,res:e.res}});case c.JSSDK_CALLBACK:return _extends({},d,{jssdkCallbackInfo:{callbackID:e.callbackID,webviewID:e.webviewID,res:e.res}});case c.SIMULATOR_SET_PREVIEW_IMAGE:return _extends({},d,{previewImage:_extends({},d.previewImage,e.data)});case c.SIMULATOR_SET_CARD_VIEW:return _extends({},d,{cardInfo:_extends({},e.data)});case c.SIMULATOR_SHARE_APP_MSG:{let a=d.currentWebviewID,b=d.webviewInfos[a],c=b.shareBtnState;return c.withShareTicket&&e.shareInfo.length?_extends({},d,{shareInfo:_extends({show:!1,group:null},e.data),groupInfo:{list:e.shareInfo,show:!0}}):_extends({},d,{shareInfo:_extends({show:!0,group:null},e.data)})}case c.SIMULATOR_SET_SHARE:return _extends({},d,{shareInfo:_extends({},d.shareInfo,e.data)});case c.SIMULATOR_SET_GROUP_INFO:return _extends({},d,{groupInfo:_extends({},d.groupInfo,e.data)});case c.SIMULATOR_SET_APP_CONFIG:return _extends({},d,{appConfig:e.data});case c.SIMULATOR_SET_DEBUGGEE:{let a=_extends({},d.debuggeeMap);return e.flag?a[e.webviewID]=e.debuggee:delete a[e.webviewID],_extends({},d,{debuggeeMap:a})}case c.SIMULATOR_SET_CONFIRM:{let a=e.data;return _extends({},d,{confirm:_extends({},d.confirm,{show:a.show,title:a.title,showCancel:!1!=a.showCancel,content:a.content||'',confirmText:a.confirmText||'\u786E\u5B9A',callback:a.callback,subList:a.subList||[]})})}case c.SIMULATOR_SET_SETTING:return _extends({},d,{setting:_extends({},d.setting,e.data)});case c.SIMULATOR_SET_APP_ROUTE:return _extends({},d,{appRoute:_extends({},d.appRoute,e.data)});case c.USER_LOGIN_SUCCESS:return g();case c.SIMULATOR_SET_AUTHORIZE_CONFIRM:return _extends({},d,{authorize:_extends({},d.authorize,e.data)});case c.SIMULATOR_SET_SHARE_DATAURI:{let a=e.data.webviewID,b=d.webviewInfos[a];if(!b)return d;return b.shareDataURI=e.data.dataURI,_extends({},d,{webviewInfos:_extends({},d.webviewInfos,{[a]:b})})}case c.SIMULATOR_SET_RIGHTBTN_ACTIONSHEET:return _extends({},d,{rightBtnActionSheet:_extends({},d.rightBtnActionSheet,e.data)});case c.SIMULATOR_SET_PAYMENT_QRWND:return _extends({},d,{payment:_extends({},d.payment,e.data)});case c.SIMULATOR_SET_LOCATION:return _extends({},d,{location:_extends({},d.location,e.data)});case c.SIMULATOR_SET_ACCELEROMETER:return _extends({},d,{accelerometer:e.data.accelerometer});case c.SIMULATOR_SET_COMPASS:return _extends({},d,{compass:e.data.compass});case c.SIMULATOR_SET_BACKGROUND_AUDIO:return _extends({},d,{music:_extends({},d.music,e.data)});case c.SIMULATOR_SET_BACKGROUND:return _extends({},d,{scene:e.data.scene||d.scene,backgroundShow:e.data.show});case c.SIMULATOR_TOGGLE_BACKGROUND:return _extends({},d,{backgroundShow:!d.backgroundShow});case c.SIMULATOR_SET_WIDGET:return _extends({},d,{widget:_extends({},d.widget,e.data)});case c.SIMULATOR_SET_WXMLINSPECT:return _extends({},d,{wxmlInspected:e.data});case c.SIMULATOR_SET_VIBRATE:return _extends({},d,{vibrate:e.data.type});case c.PROJECT_OPEN_PROJECT:return g();case c.SIMULATOR_INSERT_HTMLWEBVIEW:{const a=e.data.webviewID,b=d.webviewInfos[a];return _extends({},d,{webviewInfos:_extends({},d.webviewInfos,{[a]:_extends({},d.webviewInfos[a],{htmlwebviewInfo:_extends({},e.data)})})})}case c.SIMULATOR_UPDATE_HTMLWEBVIEW:{const a=e.data.webviewID,b=d.webviewInfos[a];return b?_extends({},d,{webviewInfos:_extends({},d.webviewInfos,{[a]:_extends({},d.webviewInfos[a],{htmlwebviewInfo:_extends({},b.htmlwebviewInfo,e.data)})})}):d}case c.SIMULATOR_REMOVE_HTMLWEBVIEW:{const a=e.data.webviewID,b=d.webviewInfos[a];return delete b.htmlwebviewInfo,_extends({},d,{webviewInfos:_extends({},d.webviewInfos,{[a]:_extends({},b)})})}case c.SIMULATOR_UPDATE_DECRYPTED_INFO:return _extends({},d,{decryptedInfo:_extends({},d.decryptedInfo,{[e.api]:e.data})});case c.SIMULATOR_CAPTURE_SCREEN:return _extends({},d,{captureScreen:{callbackID:e.data.callbackID,webviewID:d.currentWebviewID}});case c.SIMULATOR_SET_TABBAR:{let a=_extends({},d.tabbar,{list:[...d.tabbar.list]});return'setTabBarBadge'==e.data.api&&(a.list[e.data.args.index]=_extends({},a.list[e.data.args.index],{badge:{type:e.data.args.type,text:e.data.args.badgeValue,backgroundColor:e.data.args.badgeColor}})),_extends({},d,{tabbar:a})}case b:return a.merge(a.cloneDeep(d),e.payload.simulator||{});default:return d;}}}(require('lazyload'),require);