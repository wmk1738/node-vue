(function(e){function t(t){for(var n,o,l=t[0],i=t[1],u=t[2],p=0,m=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/admin/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"3ed4":function(e,t,r){"use strict";var n=r("7f22"),a=r.n(n);a.a},"509b":function(e,t,r){"use strict";var n=r("b605"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},s=[],o=(r("034f"),r("2877")),l={},i=Object(o["a"])(l,a,s,!1,null,null,null),u=i.exports,c=r("5c96"),p=r.n(c);r("0fae");n["default"].use(p.a);var m=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"100vh"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("Menu",{attrs:{menu_config:e.menu_config}})],1),r("el-container",[r("el-main",[r("router-view",{key:e.$route.path})],1)],1)],1)},f=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-menu",{attrs:{router:"","default-openeds":["0"],"default-active":e.$route.path}},e._l(this.menu_config,(function(t,n){return r("el-submenu",{key:n,attrs:{index:""+n}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v(e._s(t.title))]),e._l(t.group,(function(t,n){return r("el-menu-item-group",{key:n},[r("template",{slot:"title"},[e._v(e._s(t.title))]),e._l(t.items,(function(t,n){return r("el-menu-item",{key:n,attrs:{index:t.router}},[e._v(e._s(t.title))])}))],2)}))],2)})),1)},g=[],b={name:"Menu",props:["menu_config"]},v=b,_=Object(o["a"])(v,h,g,!1,null,"916c2c6c",null),w=_.exports,F={components:{Menu:w},data:function(){return{menu_config:[{title:"内容管理",group:[{title:"分类",items:[{title:"分类列表",router:"/categories/list"},{title:"新增分类",router:"/categories/create"}]},{title:"物品",items:[{title:"物品列表",router:"/goods/list"},{title:"新增物品",router:"/goods/create"}]},{title:"英雄",items:[{title:"英雄列表",router:"/heroes/list"},{title:"新增英雄",router:"/heroes/create"}]},{title:"文章",items:[{title:"文章列表",router:"/articles/list"},{title:"新增文章",router:"/articles/create"}]},{title:"广告",items:[{title:"广告列表",router:"/ads/list"},{title:"新增广告",router:"/ads/create"}]},{title:"用户",items:[{title:"用户列表",router:"/users/list"},{title:"新增用户",router:"/users/create"}]}]}]}}},x=F,k=(r("cccb"),Object(o["a"])(x,d,f,!1,null,null,null)),$=k.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("List",e._b({},"List",e.props,!1))},O=[],R=(r("7f7f"),{data:function(){return{props:{table_config:{title:"分类",columns:[{prop:"_id",label:"ID"},{prop:"parent",label:"类名",handleCon:function(e){return e.parent?e.parent.name:""}},{prop:"name",label:"子类"}]},api_model:"categories",populate_name:"parent"}}}}),j=R,C=Object(o["a"])(j,y,O,!1,null,null,null),E=C.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"create-wrapper"},[r("h1",[e._v(e._s(this.id?"编辑":"新增")+"分类")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"分类名",prop:"parent"}},[r("el-select",{attrs:{placeholder:"请选择分类名"},model:{value:e.ruleForm.parent,callback:function(t){e.$set(e.ruleForm,"parent",t)},expression:"ruleForm.parent"}},e._l(e.options,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"子类名",prop:"name"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入子类名"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(this.id?"编辑":"创建"))])],1)],1)],1)},S=[],U=(r("96cf"),r("3b8d")),D={props:["id"],data:function(){return{ruleForm:{name:null,parent:null},rules:{name:[{required:!0,message:"请输入创建名称",trigger:"blur"}]},options:[]}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var r=t.$refs.ruleForm.model;t.id?t.edit(r):t.add(r)}}))},add:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/reset/categories/create",t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),edit:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.put("/reset/categories/update/".concat(this.id),t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),golist:function(){this.$router.push("/categories/list"),this.$message({type:"success",message:"保存成功"})},setCate:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/reset/categories/info/".concat(this.id));case 2:t=e.sent,this.ruleForm=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetchDropPar:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/reset/categories/options");case 2:t=e.sent,this.options=t.data,console.log("options",this.options);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchDropPar()},mounted:function(){this.id&&this.setCate()}},P=D,I=Object(o["a"])(P,L,S,!1,null,null,null),M=I.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("List",e._b({},"List",e.props,!1))},A=[],q={data:function(){return{props:{table_config:{title:"物品列表",columns:[{prop:"name",label:"物品名称"},{prop:"img_url",label:"物品图片",showSlot:!0}]},api_model:"goods"}}}},N=q,V=Object(o["a"])(N,T,A,!1,null,null,null),z=V.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"create-wrapper"},[r("h1",[e._v(e._s(this.id?"编辑":"新增")+"物品")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"物品名",prop:"name"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入物品名"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),r("el-form-item",{attrs:{label:"物品图片",prop:"img_url"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:this.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":e.upload}},[e.ruleForm.img_url?r("img",{staticClass:"avatar",attrs:{src:e.ruleForm.img_url}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(this.id?"编辑":"创建"))])],1)],1)],1)},H=[],J={props:["id"],data:function(){return{ruleForm:{name:"",img_url:""},rules:{name:[{required:!0,message:"请输入物品",trigger:"blur"}]},options:[],imageUrl:""}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var r=t.$refs.ruleForm.model;t.id?t.edit(r):t.add(r)}}))},add:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/reset/goods/create",t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),edit:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.put("/reset/goods/update/".concat(this.id),t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),golist:function(){this.$router.push("/goods/list"),this.$message({type:"success",message:"保存成功"})},setCate:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/reset/goods/info/".concat(this.id));case 2:t=e.sent,this.ruleForm=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),upload:function(e){this.$set(this.ruleForm,"img_url",e.url)}},mounted:function(){this.id&&this.setCate()}},G=J,K=Object(o["a"])(G,B,H,!1,null,null,null),Q=K.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("List",e._b({},"List",e.props,!1))},X=[],Y={data:function(){return{props:{table_config:{title:"英雄列表",columns:[{prop:"name",label:"英雄名称"},{prop:"avatar",label:"英雄图片",showSlot:!0}]},api_model:"heroes"}}}},Z=Y,ee=Object(o["a"])(Z,W,X,!1,null,null,null),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"create-wrapper"},[r("h1",[e._v(e._s(this.id?"编辑":"新增")+"英雄")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[r("el-tabs",{attrs:{type:"border-card",value:"base"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"base"}},[r("el-form-item",{attrs:{label:"英雄名"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入英雄名"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入称号"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1)],1),r("el-form-item",{attrs:{label:"英雄头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:this.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":e.upload}},[e.ruleForm.avatar?r("img",{staticClass:"avatar",attrs:{src:e.ruleForm.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"职业"}},[r("el-col",{attrs:{span:6}},[r("el-select",{attrs:{multiple:"",placeholder:"请选择英雄职业"},model:{value:e.ruleForm.professions,callback:function(t){e.$set(e.ruleForm,"professions",t)},expression:"ruleForm.professions"}},e._l(e.professions,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1)],1),r("el-form-item",{attrs:{label:"难度"}},[r("el-col",{attrs:{span:6}},[r("el-rate",{attrs:{"show-score":"","allow-half":"",max:10,"text-color":"#ff9900"},model:{value:e.ruleForm.dif_i,callback:function(t){e.$set(e.ruleForm,"dif_i",t)},expression:"ruleForm.dif_i"}})],1)],1),r("el-form-item",{attrs:{label:"技能"}},[r("el-col",{attrs:{span:6}},[r("el-rate",{attrs:{"show-score":"","allow-half":"",max:10,"text-color":"#ff9900"},model:{value:e.ruleForm.skill_i,callback:function(t){e.$set(e.ruleForm,"skill_i",t)},expression:"ruleForm.skill_i"}})],1)],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-col",{attrs:{span:6}},[r("el-rate",{attrs:{"show-score":"",max:10,"allow-half":"","text-color":"#ff9900"},model:{value:e.ruleForm.attack_i,callback:function(t){e.$set(e.ruleForm,"attack_i",t)},expression:"ruleForm.attack_i"}})],1)],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-col",{attrs:{span:6}},[r("el-rate",{attrs:{"show-score":"",max:10,"text-color":"#ff9900"},model:{value:e.ruleForm.survive_i,callback:function(t){e.$set(e.ruleForm,"survive_i",t)},expression:"ruleForm.survive_i"}})],1)],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-col",{attrs:{span:6}},[r("el-select",{attrs:{multiple:"",placeholder:"请选择顺风出装"},model:{value:e.ruleForm.follow_goods.goods,callback:function(t){e.$set(e.ruleForm.follow_goods,"goods",t)},expression:"ruleForm.follow_goods.goods"}},e._l(e.goods,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1)],1),r("el-form-item",{attrs:{label:"顺风小提示"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入顺风小提示"},model:{value:e.ruleForm.follow_goods.tip,callback:function(t){e.$set(e.ruleForm.follow_goods,"tip",t)},expression:"ruleForm.follow_goods.tip"}})],1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-col",{attrs:{span:6}},[r("el-select",{attrs:{multiple:"",placeholder:"请选择逆风出装"},model:{value:e.ruleForm.against_goods.goods,callback:function(t){e.$set(e.ruleForm.against_goods,"goods",t)},expression:"ruleForm.against_goods.goods"}},e._l(e.goods,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1)],1),r("el-form-item",{attrs:{label:"逆风小提示"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入逆风小提示"},model:{value:e.ruleForm.against_goods.tip,callback:function(t){e.$set(e.ruleForm.against_goods,"tip",t)},expression:"ruleForm.against_goods.tip"}})],1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入使用技巧"},model:{value:e.ruleForm.use_skill,callback:function(t){e.$set(e.ruleForm,"use_skill",t)},expression:"ruleForm.use_skill"}})],1)],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入对抗技巧"},model:{value:e.ruleForm.against_skill,callback:function(t){e.$set(e.ruleForm,"against_skill",t)},expression:"ruleForm.against_skill"}})],1)],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入团战思路"},model:{value:e.ruleForm.group_skill,callback:function(t){e.$set(e.ruleForm,"group_skill",t)},expression:"ruleForm.group_skill"}})],1)],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skill"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.ruleForm.skills.push({})}}},[e._v("添加技能")]),r("el-row",{staticStyle:{"margin-top":"10px"},attrs:{gutter:20}},e._l(e.ruleForm.skills,(function(t,n){return r("el-col",{key:n,staticStyle:{"margin-top":"10px"},attrs:{span:8}},[r("el-card",{attrs:{shadow:"never"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("技能"+e._s(n+1))]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.ruleForm.skills.splice(n,1)}}})],1),r("el-form-item",{attrs:{label:"技能名"}},[r("el-input",{attrs:{placeholder:"请输入技能名"},model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"skill.name"}})],1),r("el-form-item",{attrs:{label:"技能图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.skillUpload(r,t)}}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"冷却值"}},[r("el-input",{attrs:{placeholder:"请输入冷却值"},model:{value:t.cool,callback:function(r){e.$set(t,"cool",r)},expression:"skill.cool"}})],1),r("el-form-item",{attrs:{label:"消耗"}},[r("el-input",{attrs:{placeholder:"请输入消耗"},model:{value:t.consume,callback:function(r){e.$set(t,"consume",r)},expression:"skill.consume"}})],1),r("el-form-item",{attrs:{label:"技能描述"}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入技能描述"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"skill.description"}})],1),r("el-form-item",{attrs:{label:"提示"}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入提示"},model:{value:t.tip,callback:function(r){e.$set(t,"tip",r)},expression:"skill.tip"}})],1)],1)],1)})),1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{staticStyle:{margin:"0 auto",display:"block"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(this.id?"编辑":"创建"))])],1)],1)],1)},ne=[],ae={props:["id"],data:function(){return{ruleForm:{name:"",avatar:"",title:null,professions:[],dif_i:null,skill_i:null,attack_i:null,survive_i:null,skills:[],follow_goods:{},against_goods:{},use_skill:null,against_skill:null,group_skill:null},options:[],professions:[],goods:[],imageUrl:""}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var r=t.$refs.ruleForm.model;t.id?t.edit(r):t.add(r)}}))},add:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/reset/heroes/create",t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),edit:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.put("/reset/heroes/update/".concat(this.id),t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),golist:function(){this.$router.push("/heroes/list"),this.$message({type:"success",message:"保存成功"})},setCate:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/reset/heroes/info/".concat(this.id));case 2:t=e.sent,this.ruleForm=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),upload:function(e){this.$set(this.ruleForm,"avatar",e.url)},skillUpload:function(e,t){this.$set(t,"icon",e.url)},fetchOptions:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/reset/categories");case 2:return t=e.sent,this.professions=t.data,e.next=6,this.$http.get("/reset/goods");case 6:r=e.sent,this.goods=r.data,console.log("res",t);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchOptions()},mounted:function(){this.id&&this.setCate()}},se=ae,oe=(r("509b"),Object(o["a"])(se,re,ne,!1,null,null,null)),le=oe.exports,ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("List",e._b({},"List",e.props,!1))},ue=[],ce={data:function(){return{props:{table_config:{title:"文章列表",columns:[{prop:"_id",label:"ID"},{prop:"title",label:"文章名称"}]},api_model:"articles",populate_name:"categories"}}}},pe=ce,me=Object(o["a"])(pe,ie,ue,!1,null,null,null),de=me.exports,fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"create-wrapper"},[r("h1",[e._v(e._s(this.id?"编辑":"新增")+"文章")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"文章名",prop:"title"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入文章名"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1)],1),r("el-form-item",{attrs:{label:"分类",prop:"categories"}},[r("el-select",{attrs:{placeholder:"请选择分类"},model:{value:e.ruleForm.categories,callback:function(t){e.$set(e.ruleForm,"categories",t)},expression:"ruleForm.categories"}},e._l(e.options,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"内容",prop:"categories"}},[r("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(this.id?"编辑":"创建"))])],1)],1)],1)},he=[],ge=r("7457"),be={components:{VueEditor:ge["a"]},props:["id"],data:function(){return{ruleForm:{title:null,categories:null,content:null},options:[],imageUrl:""}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var r=t.$refs.ruleForm.model;t.id?t.edit(r):t.add(r)}}))},add:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/reset/articles/create",t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),edit:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.put("/reset/articles/update/".concat(this.id),t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),golist:function(){this.$router.push("/articles/list"),this.$message({type:"success",message:"保存成功"})},setCate:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/reset/articles/info/".concat(this.id));case 2:t=e.sent,this.ruleForm=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetchOptions:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/reset/categories");case 2:t=e.sent,this.options=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleImageAdded:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t,r,n,a){var s,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=new FormData,s.append("file",t),e.next=4,this.$http.post(this.$http.defaults.baseURL+"/upload",s);case 4:o=e.sent,console.log("upload",o),l=o.data.url,r.insertEmbed(n,"image",l),a();case 9:case"end":return e.stop()}}),e,this)})));function t(t,r,n,a){return e.apply(this,arguments)}return t}()},created:function(){this.fetchOptions()},mounted:function(){this.id&&this.setCate()}},ve=be,_e=Object(o["a"])(ve,fe,he,!1,null,null,null),we=_e.exports,Fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("List",e._b({},"List",e.props,!1))},xe=[],ke={data:function(){return{props:{table_config:{title:"广告列表",columns:[{prop:"_id",label:"ID"},{prop:"title",label:"广告名称"}]},api_model:"ads"}}}},$e=ke,ye=Object(o["a"])($e,Fe,xe,!1,null,null,null),Oe=ye.exports,Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"create-wrapper"},[r("h1",[e._v(e._s(this.id?"编辑":"新增")+"广告")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"广告名",prop:"title"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入广告名"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1)],1),r("el-form-item",{attrs:{label:"广告图组"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.ruleForm.items.push({})}}},[e._v("添加广告")]),r("el-row",{staticStyle:{"margin-top":"10px"},attrs:{gutter:20}},e._l(e.ruleForm.items,(function(t,n){return r("el-col",{key:n,staticStyle:{"margin-top":"10px"},attrs:{span:8}},[r("el-card",{attrs:{shadow:"never"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("图"+e._s(n+1))]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.ruleForm.items.splice(n,1)}}})],1),r("el-form-item",{attrs:{label:"跳转链接"}},[r("el-input",{attrs:{placeholder:"请输入跳转链接"},model:{value:t.link_url,callback:function(r){e.$set(t,"link_url",r)},expression:"item.link_url"}})],1),r("el-form-item",{staticStyle:{"margin-top":"10px"},attrs:{label:"广告图"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.uploaded(r,t)}}},[t.img_url?r("img",{staticClass:"avatar",attrs:{src:t.img_url}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1)})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(this.id?"编辑":"创建"))])],1)],1)],1)},je=[],Ce={props:["id"],data:function(){return{ruleForm:{title:null,items:[]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var r=t.$refs.ruleForm.model;t.id?t.edit(r):t.add(r)}}))},add:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/reset/ads/create",t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),edit:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.put("/reset/ads/update/".concat(this.id),t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),golist:function(){this.$router.push("/ads/list"),this.$message({type:"success",message:"保存成功"})},setCate:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/reset/ads/info/".concat(this.id));case 2:t=e.sent,this.ruleForm=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),uploaded:function(e,t){this.$set(t,"img_url",e.url)}},mounted:function(){this.id&&this.setCate()}},Ee=Ce,Le=(r("d2e9"),Object(o["a"])(Ee,Re,je,!1,null,null,null)),Se=Le.exports,Ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("List",e._b({},"List",e.props,!1))},De=[],Pe={data:function(){return{props:{table_config:{title:"用户列表",columns:[{prop:"_id",label:"ID"},{prop:"user",label:"用户名称"}]},api_model:"users"}}}},Ie=Pe,Me=Object(o["a"])(Ie,Ue,De,!1,null,null,null),Te=Me.exports,Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"create-wrapper"},[r("h1",[e._v(e._s(this.id?"编辑":"新增")+"用户")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"user"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.ruleForm.user,callback:function(t){e.$set(e.ruleForm,"user",t)},expression:"ruleForm.user"}})],1)],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(this.id?"编辑":"创建"))])],1)],1)],1)},qe=[],Ne={props:["id"],data:function(){return{ruleForm:{user:null,items:[]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var r=t.$refs.ruleForm.model;t.id?t.edit(r):t.add(r)}}))},add:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/reset/users/create",t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),edit:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.put("/reset/users/update/".concat(this.id),t);case 2:this.golist();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),golist:function(){this.$router.push("/users/list"),this.$message({type:"success",message:"保存成功"})},setCate:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/reset/users/info/".concat(this.id));case 2:t=e.sent,this.ruleForm=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.id&&this.setCate()}},Ve=Ne,ze=(r("3ed4"),Object(o["a"])(Ve,Ae,qe,!1,null,null,null)),Be=ze.exports,He=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("用户登录")])]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.ruleForm.user,callback:function(t){e.$set(e.ruleForm,"user",t)},expression:"ruleForm.user"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("登录")])],1)],1)],1)},Je=[],Ge={data:function(){return{ruleForm:{user:null,password:null}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.login()}))},login:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("login",this.ruleForm);case 2:t=e.sent,localStorage.setItem("token",t.data.token),this.$message({type:"success",message:"登陆成功！"}),this.$router.push("/");case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},Ke=Ge,Qe=(r("59b6"),Object(o["a"])(Ke,He,Je,!1,null,"c977b7ce",null)),We=Qe.exports;n["default"].use(m["a"]);var Xe=new m["a"]({routes:[{path:"/",name:"home",component:$,children:[{path:"/",redirect:"categories/list"},{path:"categories/list",component:E},{path:"categories/create",component:M},{path:"categories/edit/:id",component:M,props:!0},{path:"goods/list",component:z},{path:"goods/create",component:Q},{path:"goods/edit/:id",component:Q,props:!0},{path:"heroes/list",component:te},{path:"heroes/create",component:le},{path:"heroes/edit/:id",component:le,props:!0},{path:"articles/list",component:de},{path:"articles/create",component:we},{path:"articles/edit/:id",component:we,props:!0},{path:"ads/list",component:Oe},{path:"ads/create",component:Se},{path:"ads/edit/:id",component:Se,props:!0},{path:"users/list",component:Te},{path:"users/create",component:Be},{path:"users/edit/:id",component:Be,props:!0}]},{path:"/login",name:"login",component:We,meta:{noauth:!0}}]});Xe.beforeEach((function(e,t,r){var n=localStorage.getItem("token");if(!n&&!e.meta.noauth)return"/login"!==t.path&&Xe.push("/login"),void r(!1);r()}));var Ye=Xe,Ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.table_config.title))]),r("el-table",{attrs:{data:e.tableData}},[e._l(e.table_config.columns,(function(t){return r("el-table-column",{key:t.prop,attrs:{label:t.label},scopedSlots:e._u([{key:"default",fn:function(n){return[t.showSlot?r("img",{attrs:{src:n.row[t.prop],alt:""}}):r("span",[e._v(e._s(t.handleCon?t.handleCon(n.row):n.row[t.prop]))])]}}],null,!0)})})),r("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.edit(t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],2)],1)},et=[],tt={name:"List",props:["table_config","api_model","populate_name"],data:function(){return{tableData:[]}},methods:{fetchList:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="/reset/".concat(this.api_model).concat(this.populate_name?"/"+this.populate_name:""),e.next=3,this.$http.get(t);case 3:r=e.sent,this.tableData=r.data;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),edit:function(e){this.$router.push("/".concat(this.api_model,"/edit/").concat(e._id))},remove:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.delete("/reset/".concat(this.api_model,"/delete/").concat(t._id));case 2:this.fetchList(),this.$message({type:"success",message:"删除成功！"});case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){this.fetchList()}},rt=tt,nt=Object(o["a"])(rt,Ze,et,!1,null,"46c824e7",null),at=nt.exports,st=(r("944d"),r("2427")),ot=r.n(st),lt=ot.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).NODE_VUE_PATH||"/admin/api"});lt.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.authToken="Bearer ".concat(t)),e}),(function(e){return n["default"].prototype.$message({type:"error",message:e.response.data.message}),Promise.reject(e)})),lt.interceptors.response.use((function(e){return e}),(function(e){return 412===e.response.status&&(Ye.push("/login"),localStorage.clear()),n["default"].prototype.$message({type:"error",message:e.response.data.message}),Promise.reject(e)}));var it=lt;n["default"].config.productionTip=!1,n["default"].prototype.$http=it,n["default"].component("List",at),new n["default"]({router:Ye,render:function(e){return e(u)}}).$mount("#app")},"59b6":function(e,t,r){"use strict";var n=r("c33a"),a=r.n(n);a.a},"64a9":function(e,t,r){},"7f22":function(e,t,r){},"85bb":function(e,t,r){},"944d":function(e,t,r){},b605:function(e,t,r){},c33a:function(e,t,r){},cccb:function(e,t,r){"use strict";var n=r("d563"),a=r.n(n);a.a},d2e9:function(e,t,r){"use strict";var n=r("85bb"),a=r.n(n);a.a},d563:function(e,t,r){}});
//# sourceMappingURL=app.a1303638.js.map