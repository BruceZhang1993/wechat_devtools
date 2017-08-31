'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('./f171257bbcaef547a3cf27266ccb0db2.js'),d=require('./9e26657bed9c052dbb6165661dc5b956.js'),e=require('./d559680a1a0c2551cbce1a9fb152cb99.js'),f=require('./4389a88e405d1d37f36c16fc0ec96540.js'),g=require('redux'),h=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),i=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:j}=require('react-redux');class k extends a.Component{constructor(a){super(a),this.res={}}componentWillReceiveProps(){}chooseLocation(a){this.res=a}onCancelClick(){this.props.hideMap({callbackID:this.props.callbackID,res:{errMsg:`${this.props.api}:cancel`}})}onConfirmClick(){let a=this.res.latlng&&this.res.latlng.lat||this.props.latitude,b=this.res.latlng&&this.res.latlng.lng||this.props.longitude;this.props.hideMap({callbackID:this.props.callbackID,res:{errMsg:`${this.props.api}:ok`,name:this.res.poiname,address:this.res.poiaddress,latitude:a,longitude:b}})}render(){let b=this.props;return a.createElement('div',{className:'simulator',style:{height:b.height,width:b.width,transform:`translate3d(-50%,0,0) scale(${b.deviceScale})`,transformOrigin:'50% 0',zIndex:10}},a.createElement(f,{height:b.statusbarHeight,backgroundColor:'#000000'}),a.createElement(e,{showLeftBtn:!0,frontColor:'#ffffff',backgroundColor:'#000000',onLeftBtnClick:this.onCancelClick.bind(this),showRightBtn:'chooseLocation'==b.api,onCustomRightClick:this.onConfirmClick.bind(this),leftBtnText:'chooseLocation'==b.api?'\u53D6\u6D88':'',rightBtnText:'\u786E\u5B9A',title:'\u9009\u62E9\u4F4D\u7F6E'}),this.props.show?a.createElement(d,{chooseLocation:this.chooseLocation.bind(this),src:b.src,width:b.width/b.deviceScale,height:b.webviewHeight/b.deviceScale}):null)}}module.exports=j((a)=>{let b=a.toolbar.deviceInfo||{},c=a.simulator.location||{};return _extends({deviceScale:a.toolbar.deviceScale,statusbarHeight:b.statusbarHeight,navigationbarHeight:b.navigationbarHeight,height:b.screenHeight,width:b.screenWidth,webviewHeight:b.screenHeight-b.statusbarHeight-b.navigationbarHeight},c)},(a)=>{return{hideMap:i.bindActionCreators(h.hideMap,a)}})(k)}(require('lazyload'),require);