'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('./53ec6a2d71bd5a4846662679c61fe819.js'),b=require('react'),c=require('redux'),d=require('./c4190a2430506f3602ca550e1e75d620.js'),{connect:e}=require('react-redux');class f extends b.Component{onConfirmCallback(a){'function'==typeof this.props.callback&&this.props.callback(a),this.props.setConfirm({show:!1})}render(){let c=this.props;return c.show?b.createElement(a,_extends({},this.props,{callback:this.onConfirmCallback.bind(this)})):null}}module.exports=e((a)=>{let b=a.webdebugger.confirmInfo;return _extends({},b)},(a)=>{return{setConfirm:(b)=>{a(d.setConfirm(b))}}})(f)}(require('lazyload'),require);