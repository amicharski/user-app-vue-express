(function(e){function t(t){for(var n,s,u=t[0],c=t[1],l=t[2],d=0,b=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);i&&i(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var i=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=r("53ca"),a=r("cf05"),s=r.n(a),u={id:"app"},c=Object(n["d"])("img",{alt:"Profrec Logo",src:s.a,width:"100",height:"100"},null,-1),l=Object(n["e"])("Home"),i=Object(n["e"])(" | "),d=Object(n["e"])("Login"),b=Object(n["e"])("Logout");function p(e,t,r,a,s,p){var m=Object(n["s"])("router-link"),O=Object(n["s"])("router-view");return Object(n["o"])(),Object(n["c"])("div",u,[Object(n["d"])("nav",null,[c,Object(n["f"])(m,{to:{name:"Home"}},{default:Object(n["z"])((function(){return[l]})),_:1}),i,Object(n["A"])(Object(n["f"])(m,{to:{name:"Login"}},{default:Object(n["z"])((function(){return[d]})),_:1},512),[[n["x"],void 0===Object(o["a"])(p.user)]]),Object(n["A"])(Object(n["f"])(m,{to:{name:"UserLogout"}},{default:Object(n["z"])((function(){return[b]})),_:1},512),[[n["x"],void 0!==Object(o["a"])(p.user)]]),Object(n["f"])(O)])])}var m={name:"App",computed:{user:{get:function(){return this.$store.state.userdata}}}},O=r("6b0d"),f=r.n(O);const j=f()(m,[["render",p]]);var g=j,h=r("6c02"),w={id:"home"},v=Object(n["d"])("h1",null,"Profrec",-1),y=Object(n["d"])("p",null,"A platform for recreational sports like no other",-1),x=[v,y];function E(e,t,r,o,a,s){return Object(n["o"])(),Object(n["c"])("div",w,x)}var M={name:"Home"};const A=f()(M,[["render",E]]);var U=A,P={id:"home"},L=Object(n["d"])("h1",null,"Profrec: Login",-1),R=Object(n["d"])("br",null,null,-1),k=Object(n["d"])("label",{for:"username"},"Username: ",-1),S=Object(n["d"])("br",null,null,-1),_=Object(n["d"])("label",{for:"password"},"Password: ",-1),C=Object(n["d"])("br",null,null,-1),z=Object(n["d"])("button",{type:"submit"},"Login",-1),$=Object(n["d"])("p",null,"New to this site?",-1),T=Object(n["d"])("br",null,null,-1),I=Object(n["e"])("Register");function V(e,t,r,o,a,s){var u=Object(n["s"])("router-link");return Object(n["o"])(),Object(n["c"])("div",P,[L,Object(n["d"])("form",{onSubmit:t[2]||(t[2]=Object(n["B"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(n["A"])(Object(n["d"])("p",{style:{color:"red"}},Object(n["u"])(a.loginErrorMessage),513),[[n["x"],null!=a.loginErrorMessage]]),R,k,Object(n["A"])(Object(n["d"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["w"],a.username]]),S,_,Object(n["A"])(Object(n["d"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["w"],a.password]]),C,z],32),$,T,Object(n["f"])(u,{to:{name:"Register"}},{default:Object(n["z"])((function(){return[I]})),_:1})])}var H=r("1da1"),D=(r("96cf"),r("bc3a")),G=r.n(D),N=G.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json"}}),Z=r("1c46"),B={name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=N.post("login",{username:e.username,password:Z.createHash("md5").update(e.password).digest("hex")}),console.log(r),r){t.next=6;break}e.loginErrorMessage="Username or Password is incorrect",t.next=10;break;case 6:return e.loginErrorMessage=null,localStorage.setItem("token",r.data.token),t.next=10,e.$router.push("/user/dashboard");case 10:case"end":return t.stop()}}),t)})))()}}};const J=f()(B,[["render",V]]);var W=J,Y={id:"home"},q=Object(n["d"])("h1",null,"Profrec: Create an Account",-1),F=Object(n["d"])("label",{for:"username"},"Username: ",-1),K=Object(n["d"])("br",null,null,-1),Q=Object(n["d"])("br",null,null,-1),X=Object(n["d"])("label",{for:"email"},"Email Address: ",-1),ee=Object(n["d"])("br",null,null,-1),te=Object(n["d"])("br",null,null,-1),re=Object(n["d"])("label",{for:"password"},"Password: ",-1),ne=Object(n["d"])("br",null,null,-1),oe={style:{color:"red"}},ae=Object(n["d"])("br",null,null,-1),se=Object(n["d"])("label",{for:"passwordconf"},"Confirm Password: ",-1),ue=Object(n["d"])("br",null,null,-1),ce={style:{color:"red"}},le=Object(n["d"])("br",null,null,-1),ie=Object(n["d"])("button",{type:"submit"},"Register",-1);function de(e,t,r,o,a,s){return Object(n["o"])(),Object(n["c"])("div",Y,[q,Object(n["d"])("form",{onSubmit:t[4]||(t[4]=Object(n["B"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[F,Object(n["A"])(Object(n["d"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["w"],a.username]]),K,Object(n["A"])(Object(n["d"])("p",{style:{color:"red"}},Object(n["u"])(a.usernameErrorMessage),513),[[n["x"],null!=a.usernameErrorMessage]]),Q,X,Object(n["A"])(Object(n["d"])("input",{type:"textbox",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.email=e})},null,512),[[n["w"],a.email]]),ee,Object(n["A"])(Object(n["d"])("p",{style:{color:"red"}},Object(n["u"])(a.emailErrorMessage),513),[[n["x"],null!=a.emailErrorMessage]]),te,re,Object(n["A"])(Object(n["d"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[n["w"],a.password]]),ne,Object(n["A"])(Object(n["d"])("p",oe,"Invalid Password",512),[[n["x"],null!=a.passwordErrorMessage]]),ae,se,Object(n["A"])(Object(n["d"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.passwordConf=e})},null,512),[[n["w"],a.passwordConf]]),ue,Object(n["A"])(Object(n["d"])("p",ce,"Passwords Do Not Match",512),[[n["x"],null!=a.passwordConfErrorMessage]]),le,ie],32)])}r("ac1f"),r("466d");var be={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){t.next=9;break}return t.next=7,N.post("users",{username:e.username,email:e.email,password:e.password});case 7:return t.next=9,e.$router.push("/login");case 9:case"end":return t.stop()}}),t)})))()}}};const pe=f()(be,[["render",de]]);var me=pe,Oe=Object(n["d"])("h1",null,"User Dashboard",-1),fe=Object(n["e"])("Admin Panel");function je(e,t,r,o,a,s){var u=Object(n["s"])("router-link");return Object(n["o"])(),Object(n["c"])("div",null,[Object(n["A"])(Object(n["d"])("div",null," You need to be logged in to be able to visit this page ",512),[[n["x"],null===s.user]]),Object(n["A"])(Object(n["d"])("div",null,[Oe,Object(n["d"])("p",null,"Welcome "+Object(n["u"])(s.user.username),1),Object(n["A"])(Object(n["d"])("div",null,[Object(n["f"])(u,{to:{name:"AdminPanel"}},{default:Object(n["z"])((function(){return[fe]})),_:1})],512),[[n["x"],5===s.user.accountType]])],512),[[n["x"],null!==s.user]])])}var ge={name:"UserDashboard",computed:{user:{get:function(){return this.$store.state.userdata}}},created:function(){return Object(H["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("user",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})))()}};const he=f()(ge,[["render",je]]);var we=he;function ve(e,t,r,o,a,s){return Object(n["o"])(),Object(n["c"])("div",null," Sorry but your account has been suspended. Contact the site administrator for details. ")}var ye={name:"Suspended"};const xe=f()(ye,[["render",ve]]);var Ee=xe,Me=Object(n["d"])("h1",null,"Admin Panel",-1),Ae=Object(n["d"])("p",null,"You have made it to the admin panel. With great power comes great responsibility.",-1),Ue=[Me,Ae];function Pe(e,t,r,o,a,s){return Object(n["o"])(),Object(n["c"])("div",null,[Object(n["A"])(Object(n["d"])("div",null," Only site admins are allowed to have access to this page ",512),[[n["x"],5!==s.userdata.accountType]]),Object(n["A"])(Object(n["d"])("div",null,Ue,512),[[n["x"],5===s.userdata.accountType]])])}var Le={name:"AdminPanel",props:{user:{type:Object,required:!0}},computed:{userdata:{get:function(){return this.$store.state.userdata}}}};const Re=f()(Le,[["render",Pe]]);var ke=Re;function Se(e,t,r,o,a,s){return Object(n["o"])(),Object(n["c"])("div")}var _e={name:"UserLogout",created:function(){var e=this;this.$store.dispatch("nullUserdata").then((function(){e.$router.push("/login")}))}};const Ce=f()(_e,[["render",Se]]);var ze=Ce,$e=[{path:"/",name:"Home",component:U},{path:"/login",name:"Login",component:W},{path:"/register",name:"Register",component:me},{path:"/user/dashboard",name:"User Dashboard",component:we},{path:"/suspended",name:"Suspended",component:Ee},{path:"/admin/panel",name:"Admin Panel",component:ke},{path:"/user/logout",name:"UserLogout",component:ze}],Te=Object(h["a"])({history:Object(h["b"])("/"),routes:$e}),Ie=Te,Ve=r("5502"),He=Object(Ve["a"])({state:{userdata:{}},mutations:{LOGIN_USER:function(e,t){e.userdata=t},LOGOUT_USER:function(e){e.userdata=null}},actions:{pushUserdata:function(e,t){var r=e.commit;return r("LOGIN_USER",t)},nullUserdata:function(e){var t=e.commit;return t("LOGOUT_USER")}}});Object(n["b"])(g).use(He).use(Ie).mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},cf05:function(e,t,r){e.exports=r.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.d1de0553.js.map