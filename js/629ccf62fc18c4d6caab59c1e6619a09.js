'use strict';!function(require,directRequire){const a=require('react'),b=require('redux'),c=require('./f0466135fc8b3a662084784e5f4ac792.js'),d=require('./eadce02c750c875a10680bcfedadec88.js'),e=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),f=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),g=require('./fc137838572a83604db39acff8e909e0.js'),h=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),i=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),j=require('moment'),{connect:k}=require('react-redux');class l extends a.Component{constructor(a){j.locale(navigator.language),super(a),this.state={loading:!0,show:a.show,src:''}}componentDidMount(){setTimeout(()=>{let a,b={test:!0};try{let c=this.props.project,d=c.compileType,f=c.condiction[d];a=f.list[f.current],d==e.search?a&&(b.searchQuery=a.customQuery||a.query,b.boxQI=a.customQuery?'':a.boxQI):d==e.weapp&&(b.page=a?a.pathName:this.props.appConfig.pages[0],b.query=a?a.query:'')}catch(a){}c(b).then((a)=>{let b=+new Date+1500000,c=j(b).calendar();this.setState({qrcode_time:c,src:`data:image/png;base64,${a.qrcode_img}`,loading:!1}),this.props.setPkgSize({preview:a.wxpkg_size,lastPreviewTime:+new Date})}).catch((a)=>{this.props.showError(a),this.setState({show:!1})})})}componentWillReceiveProps(a){a.show!=this.props.show&&this.setState({show:a.show})}onHandleClick(a){a.stopPropagation()}onCopyClick(){let{left:a,top:b,height:d,width:e}=this.imgdom.getBoundingClientRect(),c=global.windowMap.get('MAIN'),f=c.window.document.body.offsetWidth;c.capturePage((g)=>{let h=document.createElement('canvas'),c=h.getContext('2d');h.height=d,h.width=e;let i=new Image;i.onload=()=>{let g=i.width/f;c.drawImage(i,a*g,b*g,e*g,d*g,0,0,e,d);let j=nw.Clipboard.get();j.set(h.toDataURL(),'png'),this.props.showSuccessTip('\u590D\u5236\u6210\u529F')},i.src=g},{format:'png',datatype:'datauri'})}render(){return a.createElement('div',{className:'ui-popover',style:{top:this.props.top,left:this.props.left,display:this.state.show?'':'none'},onClick:this.onHandleClick.bind(this)},a.createElement('div',{ref:(a)=>this.imgdom=a,className:'previewer'},a.createElement('div',{className:'previewer-header'},a.createElement('p',null,'\u4E8C\u7EF4\u7801\u4EC5\u5BF9\u5F53\u524D\u7248\u672C\u6709\u6548'),a.createElement('p',{style:{display:this.state.qrcode_time?'':'none'}},a.createElement('span',null,this.state.qrcode_time),' \u65F6\u5931\u6548',a.createElement('a',{onClick:this.onCopyClick.bind(this),style:{color:'#0434fc'}},' \u590D\u5236'))),a.createElement('div',{className:'previewer-body'},a.createElement('div',{className:'previewer-qrcode'},a.createElement('img',{onClick:this.onCopyClick.bind(this),src:this.state.src?this.state.src:'../static/image/qrcode.png'}),a.createElement('div',{className:'previewer-loading',style:this.state.loading?{}:{display:'none'}},a.createElement('i',{className:'ui-icon-spinner'}))))))}}module.exports=k((a)=>{return{show:d.PREVIEWCODE===a.toolbar.clickKey,appConfig:a.simulator.appConfig||{},project:a.project.current}},(a)=>{return{showError:i.bindActionCreators(f.showError,a),toggleClickKey:i.bindActionCreators(g.toggleClickKey,a),setPkgSize:i.bindActionCreators(h.setPkgSize,a),showSuccessTip:i.bindActionCreators(f.showSuccessTip,a)}})(l)}(require('lazyload'),require);