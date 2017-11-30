'use strict';!function(require,directRequire){const a=require('react'),{connect:b}=require('react-redux'),c=require('./233d77ecf0781f44985f684f70e316d0.js'),d=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),e=require('./72653d4b93cdd7443296229431a7aa9a.js'),f=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),g=require('./f171257bbcaef547a3cf27266ccb0db2.js'),h=require('./9c906d27ca74e18d0deaaa231e71fdfa.js'),i=require('./a8c87029da0fa06e986298d447ab0fe2.js'),j=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),k=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),l='darwin'===process.platform?'darwin':'win',m=d.LOGIN_QR_STATUS,n={REQ_ERR_RETRY_INTERVAL:500,SCANNED_TIMEOUT:500,CANCELLED_TIMEOUT:2e3,KEEP_ALIVE_TIMEOUT:2e3,RELOAD_TO_LONGPOLL_TIMEOUT:100,LONGPOLL_TIMEOUT:6e4},o=3,p=20,q=/"(https:\/\/long.open.weixin.qq.com\/connect\/l\/qrconnect\?uuid=.+?)"/,r=/src="\/(connect\/qrcode\/.+)"/,s=require('./da7c31daaf542cf1796023d8e344b98a.js');class t extends a.Component{constructor(a){super(a),this.autoRefreshCountdown=o,this.reloadErrCountdown=p,this.state={status:m.NOT_SCAN}}componentDidMount(){this._isMounted=!0,this.reloadQRCode(),'noticecenter'==this.props.from?s('app_sub_login'):'mainlogin'==this.props.from&&s('app_main_login')}componentWillReceiveProps(a){a.user.loginStatus===d.LOGIN_STATUS.FAIL&&this.reloadQRCode()}componentDidUpdate(a,b){b.status!==this.state.status&&'function'==typeof this.props.setStatus&&this.props.setStatus(this.state.status)}componentWillUnmount(){this._isMounted=!1}reset(){if(this.pollingReq)try{this.pollingReq.abort()}catch(a){}this.reloadErrCountdown=p,this.autoRefreshCountdown=o,this.reloadQRCode()}reloadQRCode(){0>this.reloadErrCountdown||(clearTimeout(this._longPollID),this._isMounted&&this.setState({status:m.NOT_SCAN}),c({url:g.LOGIN_URL},(a,b,c)=>{if(a){if('ECONNRESET'===a.code)return void this.setState({status:m.NETWORK_ERROR});setTimeout(this.reloadQRCode.bind(this),n.REQ_ERR_RETRY_INTERVAL),this.reloadErrCountdown--,0>=this.reloadErrCountdown&&this.setState({status:m.NETWORK_ERROR})}else try{const a=c.match(r)[1],b=`${g.OPEN_DOMAIN}${a}`;this.QRCodeImgElement.src=b,this._longPollURL=c.match(q)[1],this._longPollID=setTimeout(()=>this.longPoll(),n.RELOAD_TO_LONGPOLL_TIMEOUT),this.reloadErrCountdown=p}catch(a){setTimeout(this.reloadQRCode.bind(this),n.REQ_ERR_RETRY_INTERVAL),this.reloadErrCountdown--,0>=this.reloadErrCountdown&&this.setState({status:m.UNKNOWN})}}))}longPoll(a){this.pollingReq=c({url:`${this._longPollURL}${a?'&last='+a:''}&_=${+new Date}`,headers:{"Content-Type":'application/javascript'},timeout:n.LONGPOLL_TIMEOUT},async(a,b,c)=>{eval(c);const e=window.wx_errcode;switch(e){case d.LOGIN_WX_ERRR_CODE.SUCCESS:{let a=g.LOGIN_REDIRECT_URL;a=a.replace(/&amp;/g,'&'),a+=(-1<a.indexOf('?')?'&':'?')+`code=${wx_code}&state=${l}`,this._isMounted&&this.setState({status:m.CONFIRM});try{await this.props.userActions.login(a),this.props.currentProject?this.props.setMainWindow(d.MAIN_WINDOW_TYPE.DEV):j.lastSelect===d.MAIN_WINDOW_TYPE.WEB_DEBUGGER?this.props.setMainWindow(d.MAIN_WINDOW_TYPE.WEB_DEBUGGER):this.props.setMainWindow(d.MAIN_WINDOW_TYPE.ENTRANCE)}catch(a){this.reloadQRCode()}break}case d.LOGIN_WX_ERRR_CODE.SCANNED:{this._isMounted&&this.setState({status:m.SCAN}),setTimeout(this.longPoll.bind(this),n.SCANNED_TIMEOUT,e);break}case d.LOGIN_WX_ERRR_CODE.CANCELLED:{this._isMounted&&this.setState({status:m.CANCEL}),setTimeout(this.longPoll.bind(this),n.CANCELLED_TIMEOUT,e);break}case d.LOGIN_WX_ERRR_CODE.TIMEOUT:{0<this.autoRefreshCountdown&&(this.reloadQRCode(),this.autoRefreshCountdown--,0>=this.autoRefreshCountdown&&this.setState({status:m.OUTDATED}));break}case d.LOGIN_WX_ERRR_CODE.ERROR:{this.reloadQRCode();break}case d.LOGIN_WX_ERRR_CODE.KEEP_ALIVE:setTimeout(this.longPoll.bind(this),n.KEEP_ALIVE_TIMEOUT);default:}e!==d.LOGIN_WX_ERRR_CODE.TIMEOUT&&(this.autoRefreshCountdown=o)})}render(){let b={},c={display:'none'},d=this.state.status===m.SCAN||this.state.status===m.CONFIRM,e=this.state.status===m.OUTDATED,g=this.state.status===m.NETWORK_ERROR,h=this.state.status===m.UNKNOWN;return a.createElement('div',{className:'authenticate-qrcode',style:f.nodrag},a.createElement('img',{ref:(a)=>this.QRCodeImgElement=a,alt:'',src:''}),a.createElement('i',{className:'ui-icon-mini-app-circle'}),a.createElement('div',{className:'authenticate-result',style:d?b:c},a.createElement('i',{className:'ui-icon-tick-circle'}),a.createElement('h4',{className:'authenticate-result-title'},'\u626B\u63CF\u6210\u529F')),a.createElement('div',{className:'authenticate-result',style:e?b:c},a.createElement('a',null,a.createElement('i',{className:'ui-icon-reload',onClick:this.reset.bind(this)})),a.createElement('h4',{className:'authenticate-result-title authenticate-result-title-warn'},'\u4E8C\u7EF4\u7801\u8FC7\u671F'),a.createElement('p',{className:'authenticate-result-subtitle'},'\u8BF7\u624B\u52A8\u5237\u65B0')),a.createElement('div',{className:'authenticate-result',style:g?b:c},a.createElement('a',null,a.createElement('i',{className:'ui-icon-reload',onClick:this.reset.bind(this)})),a.createElement('h4',{className:'authenticate-result-title authenticate-result-title-warn'},'\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25'),a.createElement('p',{className:'authenticate-result-subtitle'},'\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8BBE\u7F6E\uFF0C\u7136\u540E\u624B\u52A8\u5237\u65B0')),a.createElement('div',{className:'authenticate-result',style:h?b:c},a.createElement('a',null,a.createElement('i',{className:'ui-icon-reload',onClick:this.reset.bind(this)})),a.createElement('h4',{className:'authenticate-result-title authenticate-result-title-warn'},'\u672A\u77E5\u9519\u8BEF'),a.createElement('p',{className:'authenticate-result-subtitle'},'\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8BBE\u7F6E\uFF0C\u7136\u540E\u624B\u52A8\u5237\u65B0')))}}const u=(a)=>{return{user:a.user,currentProject:a.project.current}},v=(a)=>{return{userActions:k.bindActionCreators(h,a),setMainWindow:k.bindActionCreators(i.setMainWindow,a)}};module.exports=b(u,v,null,{withRef:!0})(t)}(require('lazyload'),require);