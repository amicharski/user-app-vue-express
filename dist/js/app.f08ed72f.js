(function(e){function r(r){for(var n,s,u=r[0],l=r[1],c=r[2],d=0,p=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(r);while(p.length)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(n=!1)}n&&(a.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},o={app:0},a=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=r,u=u.slice();for(var c=0;c<u.length;c++)r(u[c]);var i=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),o=t("cf05"),a=t.n(o),s={id:"app"},u=Object(n["e"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1),l=Object(n["f"])("Home"),c=Object(n["f"])(" | "),i=Object(n["f"])("Login");function d(e,r,t,o,a,d){var p=Object(n["t"])("router-link"),b=Object(n["t"])("router-view");return Object(n["p"])(),Object(n["d"])("div",s,[Object(n["e"])("nav",null,[u,Object(n["g"])(p,{to:{name:"Home"}},{default:Object(n["A"])((function(){return[l]})),_:1}),c,e.loggedIn?(Object(n["p"])(),Object(n["d"])("button",{key:1,onClick:r[0]||(r[0]=function(){return d.logout&&d.logout.apply(d,arguments)})},"Logout")):(Object(n["p"])(),Object(n["c"])(p,{key:0,to:{name:"Login"}},{default:Object(n["A"])((function(){return[i]})),_:1})),Object(n["g"])(b)])])}var p=t("5530"),b=t("5502"),m=Object(p["a"])({},Object(b["b"])(["loggedIn"])),O={name:"App",computed:Object(p["a"])({},m),methods:{logout:function(){this.$store.dispatch("logout")}}},j=t("6b0d"),f=t.n(j);const g=f()(O,[["render",d]]);var h=g,w=t("6c02"),v={id:"home"},y=Object(n["e"])("h1",null,"Profrec",-1),E=Object(n["e"])("p",null,"A platform for recreational sports like no other",-1),M=[y,E];function x(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",v,M)}var A={name:"Home",computed:Object(p["a"])({},m)};const U=f()(A,[["render",x]]);var k=U,P={id:"home"},R=Object(n["e"])("h1",null,"Profrec: Login",-1),S=Object(n["e"])("br",null,null,-1),_=Object(n["e"])("label",{for:"username"},"Username: ",-1),B=Object(n["e"])("br",null,null,-1),C=Object(n["e"])("label",{for:"password"},"Password: ",-1),L=Object(n["e"])("br",null,null,-1),T=Object(n["e"])("button",{type:"submit"},"Login",-1),I=Object(n["e"])("p",null,"New to this site?",-1),$=Object(n["e"])("br",null,null,-1),z=Object(n["f"])("Register");function D(e,r,t,o,a,s){var u=Object(n["t"])("router-link");return Object(n["p"])(),Object(n["d"])("div",P,[R,Object(n["e"])("form",{onSubmit:r[2]||(r[2]=Object(n["C"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.loginErrorMessage),513),[[n["y"],null!=a.loginErrorMessage]]),S,_,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.username=e})},null,512),[[n["x"],a.username]]),B,C,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"password","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.password=e})},null,512),[[n["x"],a.password]]),L,T],32),I,$,Object(n["g"])(u,{to:{name:"Register"}},{default:Object(n["A"])((function(){return[z]})),_:1})])}var H=t("1da1"),V=(t("96cf"),{name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("login",{username:e.username,password:e.password});case 2:if(t=r.sent,t.successful){r.next=7;break}e.loginErrorMessage=t.message,r.next=11;break;case 7:return e.loginErrorMessage=null,localStorage.setItem("token",t.token),r.next=11,e.$router.push("/user/dashboard");case 11:case"end":return r.stop()}}),r)})))()}}});const N=f()(V,[["render",D]]);var Z=N,J={id:"home"},W=Object(n["e"])("h1",null,"Profrec: Create an Account",-1),F=Object(n["e"])("label",{for:"username"},"Username: ",-1),G=Object(n["e"])("br",null,null,-1),q=Object(n["e"])("br",null,null,-1),Y=Object(n["e"])("label",{for:"email"},"Email Address: ",-1),K=Object(n["e"])("br",null,null,-1),Q=Object(n["e"])("br",null,null,-1),X=Object(n["e"])("label",{for:"password"},"Password: ",-1),ee=Object(n["e"])("br",null,null,-1),re={style:{color:"red"}},te=Object(n["e"])("br",null,null,-1),ne=Object(n["e"])("label",{for:"passwordconf"},"Confirm Password: ",-1),oe=Object(n["e"])("br",null,null,-1),ae={style:{color:"red"}},se=Object(n["e"])("br",null,null,-1),ue=Object(n["e"])("button",{type:"submit"},"Register",-1);function le(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",J,[W,Object(n["e"])("form",{onSubmit:r[4]||(r[4]=Object(n["C"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[F,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.username=e})},null,512),[[n["x"],a.username]]),G,Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.usernameErrorMessage),513),[[n["y"],null!=a.usernameErrorMessage]]),q,Y,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"email","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.email=e})},null,512),[[n["x"],a.email]]),K,Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.emailErrorMessage),513),[[n["y"],null!=a.emailErrorMessage]]),Q,X,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"password","onUpdate:modelValue":r[2]||(r[2]=function(e){return a.password=e})},null,512),[[n["x"],a.password]]),ee,Object(n["B"])(Object(n["e"])("p",re,"Invalid Password",512),[[n["y"],null!=a.passwordErrorMessage]]),te,ne,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":r[3]||(r[3]=function(e){return a.passwordConf=e})},null,512),[[n["x"],a.passwordConf]]),oe,Object(n["B"])(Object(n["e"])("p",ae,"Passwords Do Not Match",512),[[n["y"],null!=a.passwordConfErrorMessage]]),se,ue],32)])}t("ac1f"),t("466d");var ce={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){r.next=8;break}return e.$store.dispatch("register",{username:e.username,email:e.email,password:e.password}),r.next=8,e.$router.push("/user/dashboard");case 8:case"end":return r.stop()}}),r)})))()}}};const ie=f()(ce,[["render",le]]);var de=ie;function pe(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",null," Welcome "+Object(n["v"])(e.getUsername),1)}var be={name:"UserDashboard",computed:Object(p["a"])(Object(p["a"])({},m),Object(b["b"])(["getUsername"]))};const me=f()(be,[["render",pe]]);var Oe=me,je=Object(n["e"])("h1",null,"Admin Panel",-1),fe=Object(n["e"])("p",null,"You have made it to the admin panel. With great power comes great responsibility.",-1),ge=[je,fe];function he(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["B"])(Object(n["e"])("div",null," Only site admins are allowed to have access to this page ",512),[[n["y"],5!==s.userdata.accountType]]),Object(n["B"])(Object(n["e"])("div",null,ge,512),[[n["y"],5===s.userdata.accountType]])])}var we={name:"AdminPanel",props:{user:{type:Object,required:!0}},computed:{userdata:{get:function(){return this.$store.state.userdata}}}};const ve=f()(we,[["render",he]]);var ye=ve,Ee=Object(n["e"])("h2",null,"Whoops this page doesn't exist",-1),Me=Object(n["f"])("Home");function xe(e,r,t,o,a,s){var u=Object(n["t"])("router-link");return Object(n["p"])(),Object(n["d"])("div",null,[Ee,Object(n["g"])(u,{to:{name:"Home"}},{default:Object(n["A"])((function(){return[Me]})),_:1})])}var Ae={name:"NotFound"};const Ue=f()(Ae,[["render",xe]]);var ke=Ue,Pe=[{path:"/",name:"Home",component:k},{path:"/login",name:"Login",component:Z},{path:"/register",name:"Register",component:de},{path:"/user/dashboard",name:"User Dashboard",component:Oe},{path:"/admin/panel",name:"Admin Panel",component:ye},{path:"/:catchAll(.*)",name:"NotFound",component:ke}],Re=Object(w["a"])({history:Object(w["b"])("/"),routes:Pe}),Se=Re,_e=(t("e9c4"),t("bc3a")),Be=t.n(_e),Ce=Be.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),Le=new b["a"]({state:{user:null},mutations:{SET_USER_DATA:function(e,r){e.user=r,localStorage.setItem("user",JSON.stringify(r)),Be.a.defaults.headers.common["Authorization"]="Bearer ".concat(r.token)},LOGOUT:function(){localStorage.removeItem("user"),location.reload()}},actions:{register:function(e,r){return Object(H["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.abrupt("return",Ce.post("users",r).then((function(e){var r=e.data;n("SET_USER_DATA",r)})));case 2:case"end":return t.stop()}}),t)})))()},login:function(e,r){return Object(H["a"])(regeneratorRuntime.mark((function t(){var n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Ce.post("login",r);case 3:return o=t.sent,a=o.data,n("SET_USER_DATA",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){var r=e.commit;r("LOGOUT")}},getters:{loggedIn:function(e){return!!e.user},getUsername:function(e){return e.user.username}}});Object(n["b"])(h).use(Le).use(Se).mount("#app")},cf05:function(e,r,t){e.exports=t.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.f08ed72f.js.map