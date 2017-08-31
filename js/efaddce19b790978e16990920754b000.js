'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('fs'),b=require('glob'),c=require('path'),d=require('url'),e=require('react'),f=require('redux'),{connect:g}=require('react-redux'),h=require('lodash'),i=require('trash'),j=require('rmdir'),k=require('image-size'),l=require('./ff946754202ecf377034d29daac7c8d9.js'),m=require('./83822ab95828f61bf6a61c04d53246a8.js'),n=require('./72653d4b93cdd7443296229431a7aa9a.js'),o=require('./d62fc37d7aa6416d5dcc240ba94175cd.js'),p=require('./46f5e82e7b3fd4ec2c8023c3dcf88cc3.js'),q=require('./8c8af9e360a75571110bae2bcbfbba78.js'),r=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),s=require('./a8c87029da0fa06e986298d447ab0fe2.js'),t=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),u=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),v=require('./c1e9d0afe2f9700ca354dbeced1f34d5.js'),w=require('mkdir-p'),x=require('./da7c31daaf542cf1796023d8e344b98a.js'),y={".js":q.pageJS,".json":q.pageJSON,".wxml":q.pageWXML,".wxss":q.pageWXSS};let z;const A={".jpg":!0,".png":!0,".jpeg":!0,".icon":!0,".gif":!0,".svg":!0,".cer":!0};class B extends e.Component{constructor(a){super(a)}componentDidMount(){console.log('editor container mount',new Date),this.init()}componentWillUnmount(){this.cleanup()}componentWillReceiveProps(a){a.editorOpenFileInfo!=this.props.editorOpenFileInfo&&setTimeout(()=>{this.openFile()})}componentDidUpdate(a){a.project!==this.props.project&&a.project&&this.props.project&&a.project.projectid!==this.props.project.projectid&&(this.cleanup(),this.init()),a.focus!==this.props.focus&&(a.focus!==u.WINDOW_FOCUS.EDITOR&&this.props.focus===u.WINDOW_FOCUS.EDITOR?m.remoteEmit('REMOTE_FOCUS'):a.focus===u.WINDOW_FOCUS.EDITOR&&this.props.focus!==u.WINDOW_FOCUS.EDITOR&&m.remoteEmit('REMOTE_BLUR'))}openFile(){m.remoteEmit('OPEN_FILE',this.props.editorOpenFileInfo),m.remoteEmit('REMOTE_FOCUS')}init(){this.setupMessageCenter(),this.setupFileUtils(),this.initEditorExtension(),this.mtimes=new Map,this.files=new Map}cleanup(){try{this.cleanupMessageCenter(),this.cleanupFileUtils()}catch(a){}}get container(){return this._container}set container(a){this._container=a}get editorWebview(){return this._editorWebview}set editorWebview(a){this._editorWebview=a}async setupFileUtils(){await this.getFileUtils(),this._onFileChange=this.onFileChange.bind(this),this.fileUtils.on('all',this._onFileChange)}async getFileUtils(){return this.fileUtils||(this.fileUtils=await o(this.props.project.projectpath)),this.fileUtils}cleanupFileUtils(){this.fileUtils.removeListener('all',this._onFileChange)}setupMessageCenter(){window.ms=l,this._onEditorMessage=this.onEditorMessage.bind(this),l.on('EDITOR',this._onEditorMessage)}cleanupMessageCenter(){l.off('EDITOR',this._onEditorMessage)}initEditorExtension(){this.loadEditorWebview()}loadEditorWebview(){return this.editorWebview?void this.editorWebview.reload():void this.setupWebview()}setupWebview(){this.editorWebview&&this.container.removeChild(this.editorWebview);const a=document.createElement('webview');a.setAttribute('partition','persist:editor'),a.setAttribute('tabIndex','-1'),a.style.width='100%',a.style.height='100%',a.setUserAgentOverride(`${a.getUserAgent()} devtoolsedit port/${global.messageCenterPort}`),this.container.appendChild(a),a.addEventListener('dialog',(a)=>{let b=a.messageType||'',c=a.messageText,d=a.dialog;if('alert'===b);else if('confirm'===b){a.preventDefault();try{const a=JSON.parse(c);this.props.confirm(a,(a)=>{a?d.ok():d.cancel()})}catch(a){}}else if('prompt'===b){let a=prompt(c);null===a?d.cancel():d.ok(a)}}),a.addEventListener('newwindow',(a)=>{nw.Shell.openExternal(a.targetUrl)}),a.addEventListener('exit',(a)=>{('abnormal'===a.reason||'crash'===a.reason||'killed'===a.reason)&&this.setupWebview()}),a.src='html/editor.html',this.editorWebview=a}async onEditorMessage(a){let b={};try{b=JSON.parse(a)}catch(b){return void n.error(`onEditorMessage parse ${a} error ${b}`)}switch(b.type){case'CLICK':{this.onWebviewClick();break}case'TREE_SHOW':{this.setFileTreeShow();break}case'TREE_HIDE':{this.setFileTreeHide();break}case'GET_FILE':{this.onReqGetFile(b);break}case'SAVE_FILE':{this.onReqSaveFile(b);break}case'FORMAT_CODE':{this.onReqFormatCode(b);break}case'FIND_IN_FILES':{this.onReqFindInFiles(b);break}case'SYNC_FILES':{this.onReqSyncFiles(b);break}case'INIT_PROJECT':{this.onReqInitProject(b);break}case'OPEN_IN_DISK':{this.onReqOpenInDisk(b);break}case'RENAME':{this.rename(b);break}case'ADD_FILE':this.addFile(b);case'ADD_DIR':{this.addDir(b);break}case'ADD_PAGE':{this.addPage(b);break}case'DELETE_FILE':{this.deleteFile(b);break}case'DELETE_DIR':{this.deleteDir(b);break}case'BUILD':{this.onReqBuild(b);break}}}onFileChange(a,b,d){const e=this.props.project;let f=d?+d.mtime:0,g=d?this.getSerializableStat(d):{},h={};b=this.getEditorPathFormat(c.relative(e.projectpath,b)),('addDir'===a||'unlinkDir'===a)&&(b+='/');this.files.get(b);if('add'===a||'addDir'===a)this.files.set(b,!0),h={payload:{eventType:a,path:b,stat:g}};else if('unlink'===a||'unlinkDir'===a)this.files.delete(b),h={payload:{eventType:a,path:b,stat:g}};else if('change'===a){if(+this.files.get(b)==f)return;this.files.set(b,f),h={payload:{eventType:a,path:b,stat:g}}}else return void n.info(`edit.js watch ${a}`);h.eventType='REMOTE_EXTERNAL_FILE_CHANGE',h.type='EMIT',l.sendMessage('EDITOR',JSON.stringify(h)),this.triggerBuild()}triggerBuild(){const{autoSave:a,autoRefresh:b}=this.props.settings.edit;clearTimeout(this._rebuildCooldownTimeout),b&&(a?this._rebuildCooldownTimeout=setTimeout(()=>{this.props.rebuildImmediate(u.COMPILE_ORIGIN.SAVE_FILE)},u.REBUILD_INTERVAL.AUTO_REFRESH_AUTO_SAVE):this._rebuildCooldownTimeout=setTimeout(()=>{this.props.rebuildImmediate(u.COMPILE_ORIGIN.SAVE_FILE)},u.REBUILD_INTERVAL.AUTO_REFRESH))}async getFiles(){function b(b){return new Promise((c,d)=>{a.lstat(b,(a,b)=>{a?d(a):c(b)})})}return new Promise(async(a)=>{const d=await this.getFileUtils(),e=d.getAllFileWithDir().map((a)=>'/'+a),f={},g=this.props.project.projectpath;for(const d of e)try{const a=await b(c.join(g,d));f[d]=_extends({},a,{isDir:a.isDirectory(),isFile:!a.isDirectory()})}catch(a){f[d]={}}a({files:e,info:f})})}getFiles2(c,{ignore:d=['.git','**/.git/**','node_modules','**/node_moduels/**']}={}){function e(b){return new Promise((c,d)=>{a.lstat(b,(a,b)=>{a?d(a):c(b)})})}return console.log('begin get file',new Date),new Promise((a,f)=>{b('**',{absolute:!0,ignore:d,cwd:c,nosort:!0,silent:!0,mark:!0,nodir:!1,dot:!0},async(b,d)=>{if(b)return void f(b);let g={};for(let a of d){const b=await e(a);g[a]=_extends({},b,{isDir:b.isDirectory(),isFile:!b.isDirectory()})}d=d.map((a)=>a.slice(c.length)),g=h.mapKeys(g,(a,b)=>b.slice(c.length)),console.log('end get file',new Date),a({files:d,info:g})})})}lstatRecursive(b,{absolute:d=!1,ignore:e=['.git']}={}){function f(b){return new Promise((c,d)=>{a.readdir(b,(a,b)=>{a?d(a):c(b)})})}function g(b){return new Promise((c,d)=>{a.lstat(b,(a,b)=>{a?d(a):c(b)})})}return new Promise(async(a,i)=>{try{const e=await g(b);if(!e.isDirectory())return void i('project path is a file');const j=await f(b),k=j.map((a)=>c.join(b,a));let l=[],m={};for(;0<k.length;){let a=k.pop();const b=await g(a);if(b.isDirectory()){const b=await f(a);Array.prototype.push.apply(k,b.map((b)=>c.join(a,b))),a+='/'}l.push(a),m[a]=_extends({},b,{isDir:b.isDirectory(),isFile:!b.isDirectory()})}if(l=l.map((a)=>a.replace('\\','/')),m=h.mapKeys(m,(a,b)=>b.replace('\\','/')),!d){const a=b.length;l=l.map((b)=>b.slice(a)),m=h.mapKeys(m,(b,c)=>c.slice(a))}a({files:l,info:m})}catch(a){i(a)}})}onWebviewClick(){if(this.editorWebview){const a=new UIEvent('click',{bubbles:!0});this.editorWebview.dispatchEvent(a)}}setFileTreeShow(){this.props.setFileTreeShow(!0)}setFileTreeHide(){this.props.setFileTreeShow(!1)}onReqSaveFile(b){let d;try{const e=this.normalizePath(b.path),f=c.join(this.props.project.projectpath,e);if('app.json'===e){let a=0;this.props.settings.edit.autoSave&&!this.props.settings.edit.autoRefresh&&(a=5e3),clearTimeout(z);let c,d,f,g;try{c=JSON.parse(this.fileUtils.getFile(e)),d=c.pages||[],f=JSON.parse(b.data),g=f.pages||[]}catch(a){}let i=h.difference(g,d);z=setTimeout(()=>{try{i.forEach((a)=>{this.autoAddPage(a)})}catch(a){}},a)}a.writeFileSync(f,b.data,'utf8');const g=a.lstatSync(f);d={errMsg:'',type:'CALLBACK',callback:b.callback,payload:{stat:this.getSerializableStat(g)}},this.mtimes.set(f,+g.mtime),this.files.set(b.path,g.mtime)}catch(a){n.error(`editor.container.js: onReqSaveFile error: ${a}`),d={errMsg:a.toString(),type:'CALLBACK',callback:b.callback}}l.sendMessage('EDITOR',JSON.stringify(d)),this.triggerBuild(),x('weapp_editor_savefile',this.props.project.appid)}async onReqFormatCode(a){let b=v(a.data),c={type:'CALLBACK',callback:a.callback,payload:b};l.sendMessage('EDITOR',JSON.stringify(c))}async onReqInitProject(a){const{files:b,info:c}=await this.getFiles(),d={},e=this.props.settings;for(const b in e.appearance)d[b]=e.appearance[b];for(const b in e.edit)d[b]=e.edit[b];let f={errMsg:'',type:'CALLBACK',callback:a.callback,payload:{project:{name:this.props.project.projectname,path:this.props.project.projectpath,createTime:this.props.project.createTime},files:b,info:c,config:d}};b.forEach((a)=>{this.files.set(a,!0)}),l.sendMessage('EDITOR',JSON.stringify(f))}async onReqSyncFiles(a){const{files:b,info:c}=await this.getFiles();let d={errMsg:'',type:'CALLBACK',callback:a.callback,payload:{files:b,info:c}};b.forEach((a)=>{this.files.set(a,!0)}),l.sendMessage('EDITOR',JSON.stringify(d))}async onReqGetFile(b){if(A[c.extname(b.path)]){let e=d.resolve(`http://${this.props.project.hash}.editorservice.open.weixin.qq.com/files/`,this.normalizePath(b.path));try{e=decodeURI(e)}catch(a){}let f,g=c.join(this.props.project.projectpath,this.normalizePath(b.path));try{f=k(g)}catch(a){f={width:-1,height:-1}}const h=a.statSync(g),i={errMsg:'',type:'CALLBACK',callback:b.callback,payload:{url:e,dimension:f,stat:this.getSerializableStat(h)}};l.sendMessage('EDITOR',JSON.stringify(i))}else{const d=this.fileUtils.getFile(this.normalizePath(b.path)),e=a.statSync(c.join(this.props.project.projectpath,this.normalizePath(b.path))),f={errMsg:'',type:'CALLBACK',callback:b.callback,payload:{data:d,stat:this.getSerializableStat(e)}};l.sendMessage('EDITOR',JSON.stringify(f))}}async onReqFindInFiles(a){let{options:b,string:d}=a,{cwd:e,i:f,wholeword:g}=b;e=c.join(this.props.project.projectpath,e?e:''),p({str:d,cwd:e,i:f,wholeword:g,project:{projectpath:this.props.project.projectpath}},(b,c)=>{let d={type:'CALLBACK',callback:a.callback};b?d.errMsg=JSON.stringify(b):(d.errMsg='',d.payload=c),l.sendMessage('EDITOR',JSON.stringify(d))})}onReqOpenInDisk(a){const{path:b}=a;nw.Shell.showItemInFolder(c.join(this.props.project.projectpath,b)),l.sendMessage('EDITOR',JSON.stringify({errMsg:'',payload:{},type:'CALLBACK',callback:a.callback}))}rename(b){const{oldPath:d,newPath:e}=b;try{const f=c.join(this.props.project.projectpath,d),g=c.join(this.props.project.projectpath,e);a.renameSync(f,g);const h=a.lstatSync(g);this.files.delete(this.getEditorPathFormat(d)),this.files.set(e,!0),l.sendMessage('EDITOR',JSON.stringify({type:'CALLBACK',errMsg:'',payload:{stat:this.getSerializableStat(h)},callback:b.callback}))}catch(a){l.sendMessage('EDITOR',JSON.stringify({errMsg:a.toString(),type:'CALLBACK',callback:b.callback}))}}addFile(b){try{const d=c.join(this.props.project.projectpath,this.normalizePath(b.path));a.writeFileSync(d,'','utf8');const e=a.lstatSync(d);this.mtimes.set(d,+e.mtime);const f={errMsg:'',type:'CALLBACK',callback:b.callback,payload:{stat:this.getSerializableStat(e)}};this.files.set(b.path,!0),l.sendMessage('EDITOR',JSON.stringify(f))}catch(a){l.sendMessage('EDITOR',JSON.stringify({errMsg:a,type:'CALLBACK',callback:b.callback}))}}addDir(b){try{const d=c.join(this.props.project.projectpath,this.removeTrailingSlash(this.normalizePath(b.path)));w.sync(d);const e=a.lstatSync(d);this.mtimes.set(d,+e.mtime);const f={errMsg:'',type:'CALLBACK',callback:b.callback,payload:{stat:this.getSerializableStat(e)}};this.files.set(b.path,!0),l.sendMessage('EDITOR',JSON.stringify(f))}catch(a){l.sendMessage('EDITOR',JSON.stringify({errMsg:a.toString(),type:'CALLBACK',callback:b.callback}))}}autoAddPage(b){try{const d=this.normalizePath(b);let e=c.join(this.props.project.projectpath,d),f=c.dirname(e);for(const b in w.sync(f),y)try{a.existsSync(`${e}${b}`)||a.writeFileSync(`${e}${b}`,y[b].replace('{{page}}',d))}catch(a){}}catch(a){}}addPage(b){try{const d=c.join(this.props.project.projectpath,'app.json');let e=JSON.parse(a.readFileSync(d,'utf8'));const f=e.pages||[],g=this.removeTrailingSlash(this.normalizePath(b.path));-1===f.indexOf(g)&&f.push(g),e.pages=f;let h;try{h=this.props.settings.edit.tabSize}catch(a){h=2}a.writeFileSync(d,JSON.stringify(e,null,h),'utf8');const i=c.join(this.props.project.projectpath,b.path);for(const b in y)try{a.existsSync(`${i}${b}`)||a.writeFileSync(`${i}${b}`,y[b].replace('{{page}}',g))}catch(a){}const j=a.lstatSync(d),k={errMsg:'',type:'CALLBACK',callback:b.callback,payload:{stat:this.getSerializableStat(j)}};l.sendMessage('EDITOR',JSON.stringify(k))}catch(a){l.sendMessage('EDITOR',JSON.stringify({errMsg:a.toString(),type:'CALLBACK',callback:b.callback}))}}async deleteFile(a){try{await i(c.join(this.props.project.projectpath,a.path)),this.files.delete(a.path),l.sendMessage('EDITOR',JSON.stringify({errMsg:'',type:'CALLBACK',callback:a.callback,payload:{}}))}catch(b){l.sendMessage('EDITOR',JSON.stringify({errMsg:b,type:'CALLBACK',callback:a.callback}))}}async deleteDir(a){try{await i(c.join(this.props.project.projectpath,a.path)),this.files.forEach((b,c)=>{c.startsWith(this.getEditorPathFormat(a.path,!0))&&this.files.delete(c)}),l.sendMessage('EDITOR',JSON.stringify({errMsg:'',type:'CALLBACK',callback:a.callback,payload:{}}))}catch(b){l.sendMessage('EDITOR',JSON.stringify({errMsg:b.toString(),type:'CALLBACK',callback:a.callback,payload:{}}))}}async onReqBuild(a){clearTimeout(this._rebuildCooldownTimeout),this._rebuildCooldownTimeout=setTimeout(()=>{this.props.rebuildImmediate(a&&a.data)},u.REBUILD_INTERVAL.AUTO_REFRESH)}getSerializableStat(a){return _extends({},a,{isDir:a.isDirectory(),isFile:!a.isDirectory()})}normalizePath(a){return a=a.replace(/\\/g,'/'),'/'===a[0]?a.substr(1):a}getEditorPathFormat(a,b=!1){return a=a.replace(/\\/g,'/'),b&&!a.endsWith('/')&&(a+='/'),'/'===a[0]?a:'/'+a}removeTrailingSlash(a){return a.endsWith('/')?a.slice(0,-1):a}render(){let a=this.props;if(!a.project)return null;let b='monaco';return a.show||(b+=' ui-invisible'),e.createElement('div',{className:b,style:{minHeight:'97px'},tabIndex:-1,ref:(a)=>this.container=a})}}module.exports=g((a)=>({editorOpenFileInfo:a.info.editorOpenFileInfo,show:a.window.editor&&a.window.editor.show,project:a.project.current,settings:a.settings,focus:a.window.focus}),(a)=>({confirm(b,c){a(r.setConfirmInfo(_extends({},b,{show:!0,callback:c})))},setFileTreeShow(b){a(s.setEditor({fileTreeShow:b}))},rebuildImmediate(b){a(t.compileImmediate(b))}}))(B)}(require('lazyload'),require);