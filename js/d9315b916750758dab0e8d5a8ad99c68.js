'use strict';!function(require,directRequire){const a=require('react'),b=require('./6620a0cf7dad1b400d60f0fdae40f524.js'),c=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),d=require('./bc04f89cf8edab62335086e0a2a5a103.js'),e=require('./da7c31daaf542cf1796023d8e344b98a.js'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js');module.exports=class extends a.Component{constructor(a){super(a),this.handleMaskClick=()=>{this.setState({showMask:!1})},this._compareProject=this.compareProject.bind(this),this.state={showMask:!1,focus:''},this.setupController()}componentDidMount(){this.resize()}componentWillUnmount(){this.props.close()}setupController(){}resize(){try{let a=this.props.win?this.props.win:global.Win;this.props.detach||(a.show(),a.setResizable(!0),a.resizeTo(c.SIZE.SELECT_PROJECT.WIDTH,c.SIZE.SELECT_PROJECT.HEIGHT),a.setResizable(!1))}catch(a){}}cancel(){this.props.cancel()}manageProjects(){this.props.setProjectManagement({show:!0}),e('weapp_manager')}handleQuitClick(){f.quit()}focusProject(a){const b=a.currentTarget.dataset.projectid;this.setState({focus:b})}openProject(a){if(this.props.currentProject){this.props.closeProject();const b=a.currentTarget.dataset.projectid;setTimeout(()=>this.props.openProject(b),50)}else this.props.openProject(a.currentTarget.dataset.projectid)}createProject(){switch(this.props.mainWindow){case c.MAIN_WINDOW_TYPE.DEV:case c.MAIN_WINDOW_TYPE.WEB_DEBUGGER:{this.props.createProjectOpen();break}default:this.props.createProjectRequest();}}compareProject(c,a){try{return(this.props.projects[a].accessTime||1)-(this.props.projects[c].accessTime||1)}catch(a){return!1}}render(){let b=Object.keys(this.props.projects).sort(this._compareProject).map((b)=>{const c=this.props.projects[b],d=c.appShowImageUrl||'';return a.createElement('div',{className:this.state.focus===c.projectid?'project-item project-item-active':'project-item',key:b,"data-projectid":c.projectid,onClick:this.openProject.bind(this)},a.createElement('div',{className:'project-item-cover',style:{backgroundImage:`url('${this.props.covers[c.projectid]}')`,backgroundSize:'cover'}}),a.createElement('div',{className:'project-logo'},a.createElement('img',{src:d,alt:''})),a.createElement('div',{className:'project-info'},a.createElement('h4',null,decodeURIComponent(c.projectname)),a.createElement('p',null,c.projectpath)))});const c=this.props.detach?{display:'none'}:{},d={WebkitAppRegion:'no-drag'};return a.createElement('div',null,this.state.showMask?a.createElement('div',{className:'ui-mask ui-mask-transparent',onClick:this.handleMaskClick}):null,a.createElement('div',{className:'dashboard'},a.createElement('div',{className:'dashboard-commands',style:{WebkitAppRegion:'drag'}},a.createElement('div',{className:'dashboard-navigator',style:c},a.createElement('a',{style:d,onClick:this.props.cancel},a.createElement('i',{className:'ui-icon-back'}))),a.createElement('div',{className:'dashboard-brand'},a.createElement('div',{className:'dashboard-logo'},a.createElement('i',{className:'ui-icon-mini-app'})),a.createElement('h3',{className:'dashboard-caption'},'\u5C0F\u7A0B\u5E8F\u9879\u76EE'),a.createElement('p',{className:'dashboard-subtitle'},'\u7F16\u8F91\u3001\u8C03\u8BD5\u5C0F\u7A0B\u5E8F')),a.createElement('div',{className:'dashboard-content'},a.createElement('section',{className:'dashboard-content-section'},a.createElement('h4',null,'\u5E2E\u52A9'),a.createElement('ul',null,a.createElement('li',{style:d},a.createElement('a',{onClick:this.props.openDoc},'\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u6587\u6863')),a.createElement('li',{style:d},a.createElement('a',{onClick:this.props.openBBS},'\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u793E\u533A'))))),a.createElement('div',{className:'dashboard-command-ft'},a.createElement('div',{className:'luncher-account',style:d},a.createElement('div',{className:'luncher-account-avatar'},a.createElement('img',{src:this.props.user?this.props.user.headUrl:'',alt:''})),a.createElement('div',{className:'luncher-account-name',onClick:this.props.logout},a.createElement('p',null,'\u5207\u6362\u5E10\u53F7'),a.createElement('i',{className:'ui-icon-arrow-right-o'}))))),a.createElement('div',{className:'dashboard-splash'},a.createElement('div',{className:'dashboard-splash-bd'},b),a.createElement('div',{className:'dashboard-splash-ft'},a.createElement('div',{className:'ui-flex'},a.createElement('div',{className:'ui-flex-item'},a.createElement('a',{style:d,onClick:this.manageProjects.bind(this)},'\u7BA1\u7406\u9879\u76EE')),a.createElement('div',null,a.createElement('a',{style:d},a.createElement('i',{className:'ui-icon-plus',onClick:this.createProject.bind(this)}))))))))}}}(require('lazyload'),require);