(function(e){function r(r){for(var n,s,l=r[0],u=r[1],c=r[2],d=0,b=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);i&&i(r);while(b.length)b.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],n=!0,l=1;l<t.length;l++){var u=t[l];0!==a[u]&&(n=!1)}n&&(o.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},a={app:0},o=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=r,l=l.slice();for(var c=0;c<l.length;c++)r(l[c]);var i=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),a=t("cf05"),o=t.n(a),s={id:"app"},l=Object(n["f"])("img",{alt:"Profrec Logo",src:o.a,width:"100",height:"100"},null,-1),u=Object(n["g"])("Home"),c=Object(n["g"])(" | "),i=Object(n["g"])("Login");function d(e,r,t,a,o,d){var b=Object(n["u"])("router-link"),p=Object(n["u"])("router-view");return Object(n["q"])(),Object(n["e"])("div",s,[Object(n["f"])("nav",null,[l,Object(n["h"])(b,{to:{name:"Home"}},{default:Object(n["B"])((function(){return[u]})),_:1}),c,e.loggedIn?Object(n["d"])("",!0):(Object(n["q"])(),Object(n["c"])(b,{key:0,to:{name:"Login"}},{default:Object(n["B"])((function(){return[i]})),_:1})),Object(n["h"])(p)])])}var b=t("5530"),p=t("5502"),f=Object(b["a"])({},Object(p["b"])(["loggedIn"])),m={name:"App",computed:Object(b["a"])({},f)},O=t("6b0d"),j=t.n(O);const g=j()(m,[["render",d]]);var h=g,w=t("6c02"),v={id:"home"},y=Object(n["f"])("h1",null,"Profrec",-1),E=Object(n["f"])("p",null,"A platform for recreational sports like no other",-1),M=[y,E];function C(e,r,t,a,o,s){return Object(n["q"])(),Object(n["e"])("div",v,M)}var x={name:"Home",computed:Object(b["a"])({},f)};const P=j()(x,[["render",C]]);var A=P,S={id:"home"},U=Object(n["f"])("h1",null,"Profrec: Login",-1),k=Object(n["f"])("br",null,null,-1),R=Object(n["f"])("label",{for:"username"},"Username: ",-1),_=Object(n["f"])("br",null,null,-1),z=Object(n["f"])("label",{for:"password"},"Password: ",-1),L=Object(n["f"])("br",null,null,-1),T=Object(n["f"])("button",{type:"submit"},"Login",-1),D=Object(n["f"])("p",null,"New to this site?",-1),q=Object(n["f"])("br",null,null,-1),I=Object(n["g"])("Register");function $(e,r,t,a,o,s){var l=Object(n["u"])("router-link");return Object(n["q"])(),Object(n["e"])("div",S,[U,Object(n["f"])("form",{onSubmit:r[2]||(r[2]=Object(n["D"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(n["C"])(Object(n["f"])("p",{style:{color:"red"}},Object(n["w"])(o.loginErrorMessage),513),[[n["z"],null!=o.loginErrorMessage]]),k,R,Object(n["C"])(Object(n["f"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return o.username=e})},null,512),[[n["y"],o.username]]),_,z,Object(n["C"])(Object(n["f"])("input",{type:"password",id:"password","onUpdate:modelValue":r[1]||(r[1]=function(e){return o.password=e})},null,512),[[n["y"],o.password]]),L,T],32),D,q,Object(n["h"])(l,{to:{name:"Register"}},{default:Object(n["B"])((function(){return[I]})),_:1})])}var V=t("1da1"),B=(t("96cf"),t("bc3a")),H=t.n(B),Z=H.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),J={name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Z.post("login",{username:e.username,password:e.password});case 2:if(t=r.sent,console.log(t),t.data.successful){r.next=8;break}e.loginErrorMessage=t.data.message,r.next=16;break;case 8:return e.loginErrorMessage=null,r.t0=localStorage,r.next=12,t;case 12:return r.t1=r.sent.data.token,r.t0.setItem.call(r.t0,"token",r.t1),r.next=16,e.$router.push("/user/dashboard");case 16:case"end":return r.stop()}}),r)})))()}}};const N=j()(J,[["render",$]]);var Y=N,W={id:"home"},F=Object(n["f"])("h1",null,"Profrec: Create an Account",-1),G=Object(n["f"])("label",{for:"username"},"Username: ",-1),K=Object(n["f"])("br",null,null,-1),Q=Object(n["f"])("br",null,null,-1),X=Object(n["f"])("label",{for:"email"},"Email Address: ",-1),ee=Object(n["f"])("br",null,null,-1),re=Object(n["f"])("br",null,null,-1),te=Object(n["f"])("label",{for:"password"},"Password: ",-1),ne=Object(n["f"])("br",null,null,-1),ae={style:{color:"red"}},oe=Object(n["f"])("br",null,null,-1),se=Object(n["f"])("label",{for:"passwordconf"},"Confirm Password: ",-1),le=Object(n["f"])("br",null,null,-1),ue={style:{color:"red"}},ce=Object(n["f"])("br",null,null,-1),ie=Object(n["f"])("button",{type:"submit"},"Register",-1);function de(e,r,t,a,o,s){return Object(n["q"])(),Object(n["e"])("div",W,[F,Object(n["f"])("form",{onSubmit:r[4]||(r[4]=Object(n["D"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[G,Object(n["C"])(Object(n["f"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return o.username=e})},null,512),[[n["y"],o.username]]),K,Object(n["C"])(Object(n["f"])("p",{style:{color:"red"}},Object(n["w"])(o.usernameErrorMessage),513),[[n["z"],null!=o.usernameErrorMessage]]),Q,X,Object(n["C"])(Object(n["f"])("input",{type:"textbox",id:"email","onUpdate:modelValue":r[1]||(r[1]=function(e){return o.email=e})},null,512),[[n["y"],o.email]]),ee,Object(n["C"])(Object(n["f"])("p",{style:{color:"red"}},Object(n["w"])(o.emailErrorMessage),513),[[n["z"],null!=o.emailErrorMessage]]),re,te,Object(n["C"])(Object(n["f"])("input",{type:"password",id:"password","onUpdate:modelValue":r[2]||(r[2]=function(e){return o.password=e})},null,512),[[n["y"],o.password]]),ne,Object(n["C"])(Object(n["f"])("p",ae,"Invalid Password",512),[[n["z"],null!=o.passwordErrorMessage]]),oe,se,Object(n["C"])(Object(n["f"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":r[3]||(r[3]=function(e){return o.passwordConf=e})},null,512),[[n["y"],o.passwordConf]]),le,Object(n["C"])(Object(n["f"])("p",ue,"Passwords Do Not Match",512),[[n["z"],null!=o.passwordConfErrorMessage]]),ce,ie],32)])}t("ac1f"),t("466d");var be={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){r.next=8;break}return e.$store.dispatch("register",{username:e.username,email:e.email,password:e.password}),r.next=8,e.$router.push("/login");case 8:case"end":return r.stop()}}),r)})))()}}};const pe=j()(be,[["render",de]]);var fe=pe,me=Object(n["f"])("div",null," You need to have an account to view this page ",-1),Oe=[me];function je(e,r,t,a,o,s){return Object(n["C"])((Object(n["q"])(),Object(n["e"])("div",null,Oe,512)),[[n["z"],!this.$store.state.user]])}var ge={name:"UserDashboard",computed:Object(b["a"])({},f)};const he=j()(ge,[["render",je]]);var we=he,ve=Object(n["f"])("h1",null,"Admin Panel",-1),ye=Object(n["f"])("p",null,"You have made it to the admin panel. With great power comes great responsibility.",-1),Ee=[ve,ye];function Me(e,r,t,a,o,s){return Object(n["q"])(),Object(n["e"])("div",null,[Object(n["C"])(Object(n["f"])("div",null," Only site admins are allowed to have access to this page ",512),[[n["z"],5!==s.userdata.accountType]]),Object(n["C"])(Object(n["f"])("div",null,Ee,512),[[n["z"],5===s.userdata.accountType]])])}var Ce={name:"AdminPanel",props:{user:{type:Object,required:!0}},computed:{userdata:{get:function(){return this.$store.state.userdata}}}};const xe=j()(Ce,[["render",Me]]);var Pe=xe,Ae=[{path:"/",name:"Home",component:A},{path:"/login",name:"Login",component:Y},{path:"/register",name:"Register",component:fe},{path:"/user/dashboard",name:"User Dashboard",component:we},{path:"/admin/panel",name:"Admin Panel",component:Pe}],Se=Object(w["a"])({history:Object(w["b"])("/"),routes:Ae}),Ue=Se,ke=(t("e9c4"),new p["a"].Store({state:{user:null},mutations:{SET_USER_DATA:function(e,r){e.user=r,localStorage.setItem("user",JSON.stringify(r)),H.a.defaults.headers.common["Authorization"]="Bearer ".concat(r.token)}},actions:{register:function(e,r){var t=e.commit;return Z.post("users",r).then((function(e){var r=e.data;console.log("User Data: ",r),t("SET_USER_DATA",r)}))},login:function(e,r){var t=e.commit;return Z.post("login",r).then((function(e){var r=e.data;t("SET_USER_DATA",r)}))}},getters:{loggedIn:function(e){return!!e.user}}}));Object(n["b"])(h).use(ke).use(Ue).mount("#app")},cf05:function(e,r,t){e.exports=t.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.0efde119.js.map