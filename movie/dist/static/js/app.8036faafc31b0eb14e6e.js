webpackJsonp([1],{"+Bdm":function(e,t){},"0V2I":function(e,t){},"1J0Y":function(e,t){},"6QGk":function(e,t,a){e.exports=a.p+"static/img/login.dbff3e6.png"},"9jJ4":function(e,t,a){e.exports=a.p+"static/img/BJTU.8464605.png"},Fa3F:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},n,!1,function(e){a("Fa3F")},null,null).exports,i=a("/ocq"),o=a("mvHQ"),l=a.n(o),c=a("mtWM"),u=a.n(c),m={data:function(){return{registerForm:{username:"",password:"",passwordAgain:""},RegisterFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],passwordAgain:[{required:!0,message:"请再次输入密码",trigger:"blur"}]}}},methods:{resetRegisterForm:function(){this.$refs.RegisterFormRef.resetFields()},register:function(){var e=this;""!=this.registerForm.username&&""!=this.registerForm.password&&""!=this.registerForm.passwordAgain?this.registerForm.password===this.registerForm.passwordAgain?u()({method:"post",headers:{"Content-Type":"application/json"},data:l()(this.registerForm),url:"/register"}).then(function(t){"0"==t.data&&e.$message.error("用户名重复，注册失败！"),"1"==t.data&&e.$message({message:"注册成功！",type:"success"})}):this.$message({message:"请输入两次相同的密码！",type:"warning"}):this.$message({message:"输入不能为空！",type:"warning"})}},name:"Register"},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"RegisterFormRef",staticClass:"register_form",attrs:{model:e.registerForm,"label-width":"0",rules:e.RegisterFormRules}},[a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{placeholder:"用户名","prefix-icon":"el-icon-user"},model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{placeholder:"密码","prefix-icon":"el-icon-lock",type:"password"},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"passwordAgain"}},[a("el-input",{attrs:{placeholder:"重复输入密码","prefix-icon":"el-icon-lock",type:"password"},model:{value:e.registerForm.passwordAgain,callback:function(t){e.$set(e.registerForm,"passwordAgain",t)},expression:"registerForm.passwordAgain"}})],1),e._v(" "),a("el-form-item",{staticClass:"btns"},[a("el-button",{attrs:{type:"success"},on:{click:e.register}},[e._v("注册")]),e._v(" "),a("el-button",{attrs:{type:"info"},on:{click:e.resetRegisterForm}},[e._v("重置")])],1)],1)},staticRenderFns:[]};var p=a("VU/8")(m,d,!1,function(e){a("azip")},"data-v-5789e594",null).exports,h={data:function(){return{activeName:"first",loginForm:{identity:"用户",username:"",password:""},LoginFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{resetLoginForm:function(){this.$refs.LoginFormRef.resetFields()},login:function(){var e=this;""!=this.loginForm.username&&""!=this.loginForm.password?u()({method:"post",headers:{"Content-Type":"application/json"},data:l()(this.loginForm),url:"/login"}).then(function(t){"0"==t.data?e.$message.error("密码错误，登陆失败！"):(e.$message({message:"登录成功！",type:"success"}),e.$router.push("/user"))}):this.$message({message:"输入不能为空！",type:"warning"})}},components:{register:p}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login_container"},[a("div",{staticClass:"login_box"},[e._m(0),e._v(" "),a("el-tabs",{staticClass:"tabs",model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"登录",name:"first"}},[a("el-form",{ref:"LoginFormRef",staticClass:"login_form",attrs:{model:e.loginForm,"label-width":"0",rules:e.LoginFormRules}},[a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{placeholder:"用户名","prefix-icon":"el-icon-user"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{placeholder:"密码","prefix-icon":"el-icon-lock",type:"password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),a("el-form-item",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),e._v(" "),a("el-button",{attrs:{type:"info"},on:{click:e.resetLoginForm}},[e._v("重置")])],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"注册",name:"second"}},[a("register")],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"avatar_box"},[t("img",{attrs:{src:a("6QGk"),alt:""}})])}]};var g=a("VU/8")(h,f,!1,function(e){a("+Bdm")},"data-v-90d34ca6",null).exports,v={name:"Space",created:function(){var e=this;u()({method:"get",headers:{"Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/get_cookie/"}).then(function(t){e.user.username=t.data})},data:function(){return{user:{userpic:"static/userpic/userpic.jpg",username:"用户"}}},methods:{out:function(){u()({method:"get",headers:{"Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/exited/"}).then(function(e){}),this.$router.push("/login")},back:function(){this.$router.push("/user")}}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"background-color":"white"}},[s("el-header",[s("el-button",{staticClass:"out",attrs:{type:"success",icon:"el-icon-caret-left"},on:{click:e.back}},[e._v("返回")]),e._v(" "),s("el-button",{staticClass:"out",attrs:{type:"danger",icon:"el-icon-back"},on:{click:e.out}},[e._v("退出")])],1),e._v(" "),s("el-container",{staticStyle:{height:"800px",border:"1px solid #eee"}},[s("el-aside",{staticStyle:{"margin-top":"1%"},attrs:{width:"300px"}},[s("div",{staticStyle:{width:"190px","background-color":"white",padding:"5px",margin:"auto"}},[s("img",{staticStyle:{"border-radius":"300px","margin-left":"8%"},attrs:{src:a("6QGk"),width:"150px",height:"150px"}}),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("p",{staticStyle:{margin:"0 auto","text-align":"center"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}},[e._v(e._s(e.user.username))])]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("el-menu",{attrs:{"default-openeds":["1","2"]}},[s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-office-building"}),e._v("历史记录")]),e._v(" "),s("el-menu-item-group",[s("router-link",{staticClass:"alink",attrs:{to:"/userCenter/collect"}},[s("el-menu-item",{attrs:{index:"1-1"}},[e._v("收藏景点")])],1),e._v(" "),s("router-link",{staticClass:"alink",attrs:{to:"/userCenter/evaluate"}},[s("el-menu-item",{attrs:{index:"1-2"}},[e._v("历史评价")])],1)],1)],2),e._v(" "),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-s-custom"}),e._v("个人中心")]),e._v(" "),s("el-menu-item-group",[s("router-link",{staticClass:"alink",attrs:{to:"/userCenter/modify"}},[s("el-menu-item",{attrs:{index:"2-1"}},[e._v("信息修改")])],1),e._v(" "),s("router-link",{staticClass:"alink",attrs:{to:"/userCenter/back"}},[s("el-menu-item",{attrs:{index:"2-2"}},[e._v("评价反馈")])],1)],1)],2)],1)],1),e._v(" "),s("el-container",{staticStyle:{"background-color":"white"}},[s("el-main",[s("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var x=a("VU/8")(v,b,!1,function(e){a("sUjH")},"data-v-b200dc66",null).exports,y={created:function(){var e=this;u()({method:"get",headers:{"Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/collect_view/"}).then(function(t){e.tableData_collect=t.data})},data:function(){return{tableData_collect:[]}}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData_collect}},[t("el-table-column",{attrs:{prop:"scenry",label:"收藏景点",width:"180"}})],1)},staticRenderFns:[]},w=a("VU/8")(y,_,!1,null,null,null).exports,k={created:function(){var e=this;u()({method:"get",headers:{"Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/comments_view/"}).then(function(t){e.tableData_eva=t.data})},data:function(){return{tableData_eva:[]}}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData_eva}},[t("el-table-column",{attrs:{prop:"scenry",label:"景点名",width:"180"}}),this._v(" "),t("el-table-column",{attrs:{prop:"comment",label:"评价",width:"180"}})],1)},staticRenderFns:[]},F=a("VU/8")(k,C,!1,null,null,null).exports,$={created:function(){var e=this;u()({method:"get",headers:{"Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/get_info/"}).then(function(t){e.user.username=t.data.username,e.user.password=t.data.password,e.newUser.username=t.data.username,e.newUser.password=t.data.password})},data:function(){return{labelPosition:"top",user:{username:"",password:""},newUser:{username:"",password:""}}},methods:{submit:function(){var e=this;u()({method:"post",headers:{"Content-Type":"application/json"},data:l()(this.user),url:"http://127.0.0.1:8000/api/modify_info/"}).then(function(t){"1"==t.data.loginMsg?(e.$message.error("用户名重复，修改失败！"),e.user.username=e.newUser.username):e.$message({message:"修改成功！",type:"success"})})}}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"LoginFormRef",staticClass:"login_form",staticStyle:{"margin-top":"180px"},attrs:{"label-width":"10px","label-position":e.labelPosition,model:e.user}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{disabled:!0,placeholder:"用户名","prefix-icon":"el-icon-user"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"密码","prefix-icon":"el-icon-lock"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),a("el-form-item",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("修改")])],1)],1)},staticRenderFns:[]},R=a("VU/8")($,S,!1,null,null,null).exports,A={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"item"},[this._t("default")],2)},staticRenderFns:[]};var T=a("VU/8")({},A,!1,function(e){a("xeDV")},null,null).exports,U=a("XLwt"),j={data:function(){return{datas:[],name:[],heat:[],date:{value1:this.msg},dated:[]}},props:["msg"],methods:{},created:function(){var e=this;this.date.value1=this.msg,this.$http.post("http://127.0.0.1:8000/api/lineChart_view/",this.date).then(function(t){e.datas=t.data;for(var a=0;a<e.datas.length;a++)e.name[a]=e.datas[a].name,e.heat[a]=e.datas[a].heat,e.dated=e.datas[a].dated}),console.log(this.name)},mounted:function(){var e=U.d(this.$refs.myChart);setInterval(function(){e.setOption({title:{text:"Temperature Change in the Coming Week"},tooltip:{trigger:"axis"},legend:{},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value",axisLabel:{formatter:"{value} °C"}},series:[{name:"Highest",type:"line",data:[10,11,13,11,12,12,9],markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Avg"}]}},{name:"Lowest",type:"line",data:[1,-2,2,5,3,2,0],markPoint:{data:[{name:"周最低",value:-2,xAxis:1,yAxis:-1.5}]},markLine:{data:[{type:"average",name:"Avg"},[{symbol:"none",x:"90%",yAxis:"max"},{symbol:"circle",label:{position:"start",formatter:"Max"},type:"max",name:"最高点"}]]}}]})},1e3)}},L={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"myChart",attrs:{id:"zhexian"}})},staticRenderFns:[]};var I=a("VU/8")(j,L,!1,function(e){a("lRrW")},"data-v-08207200",null).exports,M={data:function(){return{datas:[],name:[1,2],heat:[100,200],date:{value1:this.msg},child:"child"}},props:["msg"],methods:{},created:function(){},mounted:function(){var e=this,t=U.d(this.$refs.myChart);setInterval(function(){for(var a=[],s=0;s<2;s++)a.push([e.name[s],e.heat[s]]);var n={dataset:[{dimensions:["name","heat"],source:e.sourcee=a},{transform:{type:"sort",config:{dimension:"heat",order:"desc"}}}],xAxis:{type:"category",axisLabel:{interval:0,rotate:30}},yAxis:{},series:{type:"bar",encode:{x:"name",y:"score"},datasetIndex:1}};t.setOption(n)},1e3),console.log(this.date)}},E={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"myChart",attrs:{id:"zhu"}})},staticRenderFns:[]};var P=a("VU/8")(M,E,!1,function(e){a("0V2I")},"data-v-68e2dfd7",null).exports,B=new s.default,D={props:["msg"],methods:{position:function(e){B.$emit("toBrother",this.value[e.ranking-1])},handleClick:function(e){var t=this;console.log(e.name);u()({method:"post",headers:{"Content-Type":"application/json"},data:l()(e.name),url:"http://127.0.0.1:8000/api/user_collect/"}).then(function(e){"1"==e.data.Msg&&t.$message({showClose:!0,message:"收藏成功！",type:"success"}),"2"==e.data.Msg&&t.$message.error("已有此景点收藏记录！")})}},created:function(){var e=this;this.date.value1=this.msg;var t=this;u()({method:"post",headers:{"Content-Type":"application/json"},data:l()(this.date),url:"http://127.0.0.1:8000/api/recommendation/"}).then(function(a){t.tableData=a.data;for(var s=0;s<e.tableData.length;s++)e.value[s]=e.tableData[s].value})},data:function(){return{date:{value1:this.msg},tableData:[],value:[]}}},V={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"chart"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"320"}},[a("el-table-column",{attrs:{prop:"ranking",label:"排行",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"模型",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"comment",label:"准确率",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"handle",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("\n              保存\n            ")])]}}])})],1)],1)])},staticRenderFns:[]};var z=a("VU/8")(D,V,!1,function(e){a("gTPs")},null,null).exports,O={mounted:function(){var e=this;setInterval(function(){B.$on("toBrother2",function(t){e.msg.scenry=t})},1e3)},data:function(){return{msg:{scenry:"",value:null},colors:["#99A9BF","#F7BA2A","#FF9900"]}},methods:{onSubmit:function(){var e=this;u()({method:"post",headers:{"Content-Type":"application/json"},data:l()(this.msg),url:"http://127.0.0.1:8000/api/give_comment/"}).then(function(t){"1"==t.data.Msg&&e.$message({showClose:!0,message:"评价成功！",type:"success"})})}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"50px"}},[a("el-form-item",[e._v("\n      "+e._s(e.msg.scenry)+"\n    ")]),e._v(" "),a("el-form-item",[a("el-rate",{attrs:{colors:e.colors},model:{value:e.msg.value,callback:function(t){e.$set(e.msg,"value",t)},expression:"msg.value"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")])],1)],1)},staticRenderFns:[]};var G=a("VU/8")(O,q,!1,function(e){a("TlaB")},null,null).exports,N=a("//Fk"),Q=a.n(N);a("/66K");var H={data:function(){return{datas:[],name:[],value:[],heat:[],color:[],date:{value1:this.msg}}},props:["msg"],methods:{},created:function(){var e=this;this.date.value1=this.msg,this.$http.post("http://127.0.0.1:8000/api/home_view/",this.date).then(function(t){e.datas=t.data;for(var a=0;a<e.datas.length;a++)e.name[a]=e.datas[a].name,e.value[a]=e.datas[a].value,e.heat[a]=e.datas[a].heat,e.heat[a]<6e3&&(e.color[a]="yellow"),e.heat[a]>6e3&&e.heat[a]<12e3&&(e.color[a]="orange"),e.heat[a]>12e3&&e.heat[a]<18e3&&(e.color[a]="776005FF"),e.heat[a]>18e3&&e.heat[a]<24e3&&(e.color[a]="red"),e.heat[a]>24e3&&e.heat[a]<3e4&&(e.color[a]="770505FF"),e.heat[a]>3e4&&(e.color[a]="black")})},mounted:function(){var e,t=this,a=document.getElementById("myechart"),s=U.d(a);(e="DvBqXAEPGjMDYpgqAZjQX7X21XXis3HE",new Q.a(function(t,a){if("undefined"!=typeof BMap)return t(BMap),!0;window.onBMapCallback=function(){t(BMap)};var s=document.createElement("script");s.type="text/javascript",s.src="http://api.map.baidu.com/api?v=3.0&ak="+e+"&callback=onBMapCallback",s.onerror=a,document.head.appendChild(s)})).then(function(){s.setOption({bmap:{center:[116.403694,39.912279],zoom:15,roam:"true",auto_resize:"false"},visualMap:{type:"piecewise",top:"5%",splitNumber:5,min:0,max:3e4,seriesIndex:0,calculable:!0,inRange:{color:["yellow","red"]},textStyle:{color:"black",formatter:"aaaa{value}bbbb{value2}"}}}),setInterval(function(){for(var e=[],a=0;a<t.datas.length;a++)e.push({type:"effectScatter",coordinateSystem:"bmap",data:[{name:t.name[a],value:t.value[a],rippleEffect:{number:4,scale:8}}],itemStyle:{color:t.color[a]}});var n={series:t.serie=e};s.setOption(n);var r=[];B.$on("toBrother",function(e){if(e!=r){var t={bmap:{center:e,zoom:15,roam:"true",auto_resize:"false"}};s.setOption(t),r=e}})},1e3),s.on("click",function(e){var t={bmap:{center:[e.value[0],e.value[1]],zoom:15,roam:"true",auto_resize:"false"}};console.log(e.name),s.setOption(t),B.$emit("toBrother2",e.name)})})}},W={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{height:"570px",width:"100%",position:"relative"},attrs:{echarts:"",id:"myechart"}})},staticRenderFns:[]};var J=a("VU/8")(H,W,!1,function(e){a("1J0Y")},"data-v-01487fe9",null).exports,X={components:{ItemPage:T,itemOne:I,itemTwo:P,itemThree:z,itemFour:G,itemMap:J},data:function(){return{date:"2024-06-05",child:""}},methods:{user:function(){this.$router.push("/userCenter")},out:function(){this.$router.push("/login")}}},Z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"body"},[a("el-header",{attrs:{height:"80px"}},[a("span",{staticClass:"title",staticStyle:{color:"black","font-style":"italic","font-family":"方正姚体"}},[e._v("节假日客流量预测与景点推荐系统")]),e._v(" "),a("el-button",{staticClass:"user",attrs:{type:"success",icon:"el-icon-user",circle:""},on:{click:e.user}}),e._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-right",circle:""},on:{click:e.out}})],1),e._v(" "),a("section",{staticClass:"container"},[a("el-aside",{staticClass:"aside",attrs:{width:"200px"}}),e._v(" "),a("section",{staticClass:"itemLeft"},[a("ItemPage",[a("itemTwo",{key:e.date,attrs:{msg:e.date}})],1)],1),e._v(" "),a("section",{staticClass:"itemRight"},[a("ItemPage",[a("itemOne",{key:e.date,attrs:{msg:e.date}})],1),e._v(" "),a("ItemPage",[a("itemFour")],1)],1)],1)],1)},staticRenderFns:[]};var Y=a("VU/8")(X,Z,!1,function(e){a("TDpB")},null,null).exports,K={data:function(){return{labelPosition:"top",back:""}},methods:{submit:function(){u()({method:"post",headers:{"Content-Type":"application/json"},data:l()(this.back),url:"http://127.0.0.1:8000/api/back/"}).then(function(e){}),this.$message({message:"反馈成功！",type:"success"})}}},ee={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"LoginFormRef",staticClass:"login_form",staticStyle:{"margin-top":"180px"},attrs:{"label-width":"10px","label-position":e.labelPosition,model:e.user}},[a("el-form-item",{attrs:{label:"反馈",prop:"back"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"反馈","prefix-icon":"el-icon-user"},model:{value:e.back,callback:function(t){e.back=t},expression:"back"}})],1),e._v(" "),a("el-form-item",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)},staticRenderFns:[]},te=a("VU/8")(K,ee,!1,null,null,null).exports,ae={data:function(){return{datas:[],name:[],heat:[],date:{value1:this.msg},dated:[]}},props:["msg"],methods:{},created:function(){},mounted:function(){var e=U.d(this.$refs.myChart);setInterval(function(){var t=[{name:"date",index:0,text:"日期"},{name:"AQIindex",index:1,text:"AQI"},{name:"PM25",index:2,text:"PM2.5"},{name:"PM10",index:3,text:"PM10"},{name:"CO",index:4,text:" CO"},{name:"NO2",index:5,text:"NO2"},{name:"SO2",index:6,text:"SO2"},{name:"等级",index:7,text:"等级"}],a={width:1,opacity:.5},s={backgroundColor:"#333",legend:{bottom:30,data:["Beijing","Shanghai","Guangzhou"],itemGap:20,textStyle:{color:"#fff",fontSize:14}},tooltip:{padding:10,backgroundColor:"#222",borderColor:"#777",borderWidth:1},parallelAxis:[{dim:0,name:t[0].text,inverse:!0,max:31,nameLocation:"start"},{dim:1,name:t[1].text},{dim:2,name:t[2].text},{dim:3,name:t[3].text},{dim:4,name:t[4].text},{dim:5,name:t[5].text},{dim:6,name:t[6].text},{dim:7,name:t[7].text,type:"category",data:["优","良","轻度污染","中度污染","重度污染","严重污染"]}],visualMap:{show:!0,min:0,max:150,dimension:2,inRange:{color:["#d94e5d","#eac736","#50a3ba"].reverse()}},parallel:{left:"5%",right:"18%",bottom:100,parallelAxisDefault:{type:"value",name:"AQI指数",nameLocation:"end",nameGap:20,nameTextStyle:{color:"#fff",fontSize:12},axisLine:{lineStyle:{color:"#aaa"}},axisTick:{lineStyle:{color:"#777"}},splitLine:{show:!1},axisLabel:{color:"#fff"}}},series:[{name:"Beijing",type:"parallel",lineStyle:a,data:[[1,55,9,56,.46,18,6,"良"],[2,25,11,21,.65,34,9,"优"],[3,56,7,63,.3,14,5,"良"],[4,33,7,29,.33,16,6,"优"],[5,42,24,44,.76,40,16,"优"],[6,82,58,90,1.77,68,33,"良"],[7,74,49,77,1.46,48,27,"良"],[8,78,55,80,1.29,59,29,"良"],[9,267,216,280,4.8,108,64,"重度污染"],[10,185,127,216,2.52,61,27,"中度污染"],[11,39,19,38,.57,31,15,"优"],[12,41,11,40,.43,21,7,"优"],[13,64,38,74,1.04,46,22,"良"],[14,108,79,120,1.7,75,41,"轻度污染"],[15,108,63,116,1.48,44,26,"轻度污染"],[16,33,6,29,.34,13,5,"优"],[17,94,66,110,1.54,62,31,"良"],[18,186,142,192,3.88,93,79,"中度污染"],[19,57,31,54,.96,32,14,"良"],[20,22,8,17,.48,23,10,"优"],[21,39,15,36,.61,29,13,"优"],[22,94,69,114,2.08,73,39,"良"],[23,99,73,110,2.43,76,48,"良"],[24,31,12,30,.5,32,16,"优"],[25,42,27,43,1,53,22,"优"],[26,154,117,157,3.05,92,58,"中度污染"],[27,234,185,230,4.09,123,69,"重度污染"],[28,160,120,186,2.77,91,50,"中度污染"],[29,134,96,165,2.76,83,41,"轻度污染"],[30,52,24,60,1.03,50,21,"良"],[31,46,5,49,.28,10,6,"优"]]},{name:"Shanghai",type:"parallel",lineStyle:a,data:[[1,91,45,125,.82,34,23,"良"],[2,65,27,78,.86,45,29,"良"],[3,83,60,84,1.09,73,27,"良"],[4,109,81,121,1.28,68,51,"轻度污染"],[5,106,77,114,1.07,55,51,"轻度污染"],[6,109,81,121,1.28,68,51,"轻度污染"],[7,106,77,114,1.07,55,51,"轻度污染"],[8,89,65,78,.86,51,26,"良"],[9,53,33,47,.64,50,17,"良"],[10,80,55,80,1.01,75,24,"良"],[11,117,81,124,1.03,45,24,"轻度污染"],[12,99,71,142,1.1,62,42,"良"],[13,95,69,130,1.28,74,50,"良"],[14,116,87,131,1.47,84,40,"轻度污染"],[15,108,80,121,1.3,85,37,"轻度污染"],[16,134,83,167,1.16,57,43,"轻度污染"],[17,79,43,107,1.05,59,37,"良"],[18,71,46,89,.86,64,25,"良"],[19,97,71,113,1.17,88,31,"良"],[20,84,57,91,.85,55,31,"良"],[21,87,63,101,.9,56,41,"良"],[22,104,77,119,1.09,73,48,"轻度污染"],[23,87,62,100,1,72,28,"良"],[24,168,128,172,1.49,97,56,"中度污染"],[25,65,45,51,.74,39,17,"良"],[26,39,24,38,.61,47,17,"优"],[27,39,24,39,.59,50,19,"优"],[28,93,68,96,1.05,79,29,"良"],[29,188,143,197,1.66,99,51,"中度污染"],[30,174,131,174,1.55,108,50,"中度污染"],[31,187,143,201,1.39,89,53,"中度污染"]]},{name:"Guangzhou",type:"parallel",lineStyle:a,data:[[1,26,37,27,1.163,27,13,"优"],[2,85,62,71,1.195,60,8,"良"],[3,78,38,74,1.363,37,7,"良"],[4,21,21,36,.634,40,9,"优"],[5,41,42,46,.915,81,13,"优"],[6,56,52,69,1.067,92,16,"良"],[7,64,30,28,.924,51,2,"良"],[8,55,48,74,1.236,75,26,"良"],[9,76,85,113,1.237,114,27,"良"],[10,91,81,104,1.041,56,40,"良"],[11,84,39,60,.964,25,11,"良"],[12,64,51,101,.862,58,23,"良"],[13,70,69,120,1.198,65,36,"良"],[14,77,105,178,2.549,64,16,"良"],[15,109,68,87,.996,74,29,"轻度污染"],[16,73,68,97,.905,51,34,"良"],[17,54,27,47,.592,53,12,"良"],[18,51,61,97,.811,65,19,"良"],[19,91,71,121,1.374,43,18,"良"],[20,73,102,182,2.787,44,19,"良"],[21,73,50,76,.717,31,20,"良"],[22,84,94,140,2.238,68,18,"良"],[23,93,77,104,1.165,53,7,"良"],[24,99,130,227,3.97,55,15,"良"],[25,146,84,139,1.094,40,17,"轻度污染"],[26,113,108,137,1.481,48,15,"轻度污染"],[27,81,48,62,1.619,26,3,"良"],[28,56,48,68,1.336,37,9,"良"],[29,82,92,174,3.29,0,13,"良"],[30,106,116,188,3.628,101,16,"轻度污染"],[31,118,50,0,1.383,76,11,"轻度污染"]]}]};e.setOption(s)},1e3)}},se={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"myChart",attrs:{id:"zhexian"}})},staticRenderFns:[]};var ne={components:{ItemPage:T,itemOne:I,itemTwo:P,itemThree:z,itemFour:G,itemMap:J,itemFive:a("VU/8")(ae,se,!1,function(e){a("gAZD")},"data-v-3ec0e30c",null).exports},methods:{user:function(){this.$router.push("/userCenter")},out:function(){this.$router.push("/login")},train:function(){},predict:function(){},choose:function(){}}},re={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-container",[s("el-header",{attrs:{height:"60px"}},[s("div",[s("img",{attrs:{src:a("9jJ4"),alt:"",height:"50",width:"200","margin-top":"50px;"}})]),e._v(" "),s("el-button",{staticClass:"Gitee",attrs:{type:"success",icon:"el-icon-s-custom"},on:{click:e.Gitee}},[s("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://gitee.com/Nicoqwq/course-practice-3-11-groups",target:"_blank"}},[e._v("\n          关于我们\n        ")])])],1),e._v(" "),s("el-container",{staticClass:"background"},[s("el-aside",{attrs:{width:"200px"}},[s("div",{staticClass:"user"},[s("el-button",{attrs:{type:"success",icon:"el-icon-user",circle:""},on:{click:e.user}})],1),e._v(" "),s("div",{staticClass:"add"},[s("el-button",{attrs:{type:"success",icon:"el-icon-circle-plus-outline",circle:""},on:{click:e.train}},[e._v("训练")])],1),e._v(" "),s("div",{staticClass:"choose"},[s("el-button",{attrs:{type:"success",icon:"el-icon-upload2",circle:""},on:{click:e.choose}},[e._v("选择")])],1),e._v(" "),s("div",{staticClass:"pre"},[s("el-button",{attrs:{type:"success",icon:"el-icon-s-flag",circle:""},on:{click:e.predict}},[e._v("预测")])],1),e._v(" "),s("el-button",{staticClass:"quit",attrs:{type:"danger",icon:"el-icon-back",circle:""},on:{click:e.out}})],1),e._v(" "),s("el-row",{staticStyle:{"margin-top":"0px"},attrs:{gutter:"24"}},[s("el-col",{attrs:{span:120}},[s("el-card",{staticClass:"box-card_up_left",staticStyle:{"margin-left":"60px","margin-top":"15px",height:"380px"},attrs:{shadow:"hover","background-color":"FFFF00"}},[s("section",{staticClass:"itemLeftUp"},[s("ItemPage",[s("itemTwo",{key:e.date,staticClass:"zhu",attrs:{msg:e.date}})],1)],1)])],1),e._v(" "),s("el-col",{attrs:{span:120}},[s("el-card",{staticClass:"box-card_down_left",staticStyle:{"margin-left":"60px","margin-top":"15px",height:"380px"},attrs:{shadow:"hover"}},[s("section",{staticClass:"itemLeftDown"},[s("ItemPage",[s("item-five",{key:e.date,staticClass:"mult",attrs:{msg:e.date}})],1)],1)])],1)],1),e._v(" "),s("el-row",{staticStyle:{"margin-top":"0px"}},[s("el-col",{attrs:{span:120}},[s("el-card",{staticClass:"box-card_up_right",staticStyle:{"margin-top":"15px",height:"380px"},attrs:{shadow:"hover"}},[s("section",{staticClass:"itemRightUp"},[s("ItemPage",[s("itemOne",{key:e.date,staticClass:"zhe",attrs:{msg:e.date}})],1)],1)])],1),e._v(" "),s("el-col",{attrs:{span:120}},[s("el-card",{staticClass:"box-card_down_right",staticStyle:{"margin-top":"15px",height:"380px",width:"570px"},attrs:{shadow:"hover"}},[s("section",{staticClass:"itemRightDown"},[s("ItemPage",[s("item-three",{key:e.date,staticClass:"word",attrs:{msg:e.date}})],1)],1)])],1)],1)],1)],1)},staticRenderFns:[]};var ie=a("VU/8")(ne,re,!1,function(e){a("i5jg")},null,null).exports;s.default.use(i.a);var oe=new i.a({routes:[{path:"/",redirect:"/Login"},{path:"/user3",component:ie},{path:"/user",component:Y},{path:"/register",component:p},{path:"/login",component:g},{path:"/userCenter",component:x,children:[{path:"collect",component:w},{path:"evaluate",component:F},{path:"modify",component:R},{path:"back",component:te}]}]}),le=a("zL8q"),ce=a.n(le);a("wh68");s.default.use(ce.a),s.default.prototype.$http=u.a,u.a.defaults.baseURL="/api",s.default.config.productionTip=!1,new s.default({el:"#app",router:oe,components:{App:r},template:"<App/>"})},TDpB:function(e,t){},TlaB:function(e,t){},azip:function(e,t){},gAZD:function(e,t){},gTPs:function(e,t){},i5jg:function(e,t){},lRrW:function(e,t){},sUjH:function(e,t){},wh68:function(e,t){},xeDV:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8036faafc31b0eb14e6e.js.map