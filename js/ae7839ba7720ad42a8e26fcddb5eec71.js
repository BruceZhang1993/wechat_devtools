'use strict';!function(require,directRequire){const a=require('react'),b=require('moment'),c=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),d=require('./fc137838572a83604db39acff8e909e0.js'),e=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),f=require('./eadce02c750c875a10680bcfedadec88.js'),g=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),h=require('redux'),{connect:i}=require('react-redux'),j=[['request','request_domain'],['socket','ws_request_domain'],['upload','upload_domain'],['download','download_domain']];class k extends a.Component{constructor(a){super(a),this.state={lazyLoaded:!!a.show},b.locale(navigator.language)}componentWillReceiveProps(a){a.show&&this.setState({lazyLoaded:!0})}createNetworkingDom(b,c){if(!b)return'';let d='prod'===c?'\u751F\u4EA7\u73AF\u5883':'\u5F00\u53D1\u73AF\u5883';return j.map((c,e)=>{let f=b[c[1]].map((b,d)=>{b=b.toLowerCase();let e;return e='socket'===c[0]?/wss?\:\/\//.test(b)?b:`wss://${b}`:/https?\:\/\//.test(b)?b:`https://${b}`,a.createElement('p',{className:'ui-flex-item',key:d},e)});return a.createElement('section',{key:e},a.createElement('div',{className:'meta-item'},a.createElement('label',{htmlFor:'',className:'meta-label'},d,' ',c[0],' \u57DF\u540D'),a.createElement('div',{className:'meta-value ui-flex-item',style:{userSelect:'initial'}},a.createElement('div',{className:'ui-flex ui-desc'},a.createElement('p',{className:'ui-flex-item'},f)))))})}createCvmDom(d,e){if(!d)return'';let f='prod'===e?'\u751F\u4EA7\u73AF\u5883\u4FE1\u606F':'\u5F00\u53D1\u73AF\u5883\u4FE1\u606F';return a.createElement('section',null,a.createElement('div',{className:'meta-item'},a.createElement('label',{htmlFor:'',className:'meta-label'},f),a.createElement('div',{className:'meta-value ui-flex-item',style:{userSelect:'initial'}},a.createElement('div',{className:'ui-flex ui-desc'},a.createElement('p',{className:'ui-flex-item'},'\u4E91\u670D\u52A1\u72B6\u6001\uFF1A   ',1===d.service_running?'\u8FD0\u884C\u4E2D':'\u505C\u6B62\u4E2D')),a.createElement('div',{className:'ui-flex ui-desc',style:1===d.service_running?{}:c.displayNone},a.createElement('p',{className:'ui-flex-item'},'\u4E0A\u6B21\u90E8\u7F72\u65F6\u95F4\uFF1A ',b(new Date(1e3*d.deploy_time)).calendar())),a.createElement('div',{className:'ui-flex ui-desc',style:1===d.service_running?{}:c.displayNone},a.createElement('p',{className:'ui-flex-item'},'\u670D\u52A1\u542F\u52A8\u65F6\u95F4\uFF1A ',b(new Date(1e3*d.service_start_time)).calendar())),a.createElement('div',{className:'ui-flex ui-desc',style:1===d.service_running?c.displayNone:{}},a.createElement('p',{className:'ui-flex-item'},'\u670D\u52A1\u505C\u6B62\u65F6\u95F4\uFF1A ',b(new Date(1e3*d.service_stop_time)).calendar())))))}render(){if(!this.state.lazyLoaded)return null;let b=this.props,c=b.project,d=`tab-content ${b.show?'tab-content-active':''}`,e=c.attr.qcloud||{},{qcloud_status:f={},qcloud_dev_info:g={},qcloud_product_info:h={}}=e;console.log(e);let i=g.cvm_info,j=g.networking,k=this.createCvmDom(i,'dev'),l=this.createNetworkingDom(j,'dev'),m=h.cvm_info,n=h.networking,o=this.createCvmDom(m,'prod'),p=this.createNetworkingDom(n,'prod');return a.createElement('div',{className:d},a.createElement('section',null,a.createElement('div',{className:'meta-item'},a.createElement('label',{htmlFor:'',className:'meta-label'},'\u5C0F\u7A0B\u5E8F\u817E\u8BAF\u4E91\u72B6\u6001'),a.createElement('div',{className:'meta-value ui-flex-item',style:{userSelect:'initial'}},a.createElement('div',{className:'ui-flex ui-desc'},a.createElement('p',{className:'ui-flex-item'},1===f.open_qc_account?'\u5DF2':'\u672A','\u6388\u6743\u817E\u8BAF\u4E91')),a.createElement('div',{className:'ui-flex ui-desc'},a.createElement('p',{className:'ui-flex-item'},1===f.open_develop_env?'\u5DF2':'\u672A','\u5F00\u901A\u5F00\u53D1\u73AF\u5883')),a.createElement('div',{className:'ui-flex ui-desc'},a.createElement('p',{className:'ui-flex-item'},1===f.qcloud_product_info?'\u5DF2':'\u672A','\u5F00\u901A\u751F\u4EA7\u73AF\u5883'))))),o,p,k,l)}}module.exports=i((a)=>{let b=a.info.projectInfo||{},c=a.project.current||{};return{show:'qcloud'===b.selected,project:c,qcloud:c.qcloud}},()=>{return{}})(k)}(require('lazyload'),require);