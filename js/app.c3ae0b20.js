(function(t){function e(e){for(var o,a,u=e[0],c=e[1],s=e[2],d=0,f=[];d<u.length;d++)a=u[d],i[a]&&f.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/textgame/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},"218b":function(t,e,n){"use strict";var o=n("f21a"),i=n.n(o);i.a},"505d":function(t,e,n){"use strict";var o=n("71c4"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=n("8cb8"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TextArea"),n("PlayArea")],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-box"},[0==t.current_event_num?n("div",[n("div",{staticClass:"text-box"},[n("vue-typed-js",{attrs:{strings:["The fence stretched to the horizon in both directions..."],showCursor:!1,typeSpeed:35},on:{onComplete:function(e){t.next(1e3)}}},[n("h1",{staticClass:"typing"})])],1)]):2==t.current_event_num?n("div",[n("div",{staticClass:"text-box"},[n("vue-typed-js",{attrs:{strings:["A loose panel is pried away from the fence, leaving just enough room to creep through. In the distance, the burnt out remains of a city."],showCursor:!1,typeSpeed:35},on:{onComplete:function(e){t.next(2e3)}}},[n("h1",{staticClass:"typing"})])],1)]):4==t.current_event_num?n("div",[n("div",{staticClass:"text-box"},[n("vue-typed-js",{attrs:{strings:["Somewhere in the city is the control panel..."],showCursor:!1,typeSpeed:35}},[n("h1",{staticClass:"typing"})])],1)]):t._e()])},c=[],s={name:"TextArea",data:function(){return{current_event_num:null}},methods:{next:function(t){var e=this;setTimeout(function(){console.log("next"),e.$store.commit("eventNumIncrement")},t)}},computed:{eventNum:function(){return this.current_event_num=this.$store.state.event_num,this.$store.state.event_num}},watch:{eventNum:function(t,e){this.current_event_num=t}}},l=s,d=(n("6312"),n("2877")),f=Object(d["a"])(l,u,c,!1,null,"3655a648",null);f.options.__file="TextArea.vue";var m=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-box"},[1==t.current_event_num?n("One"):3==t.current_event_num?n("Two"):t._e()],1)},v=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"one"},[n("div",[n("canvas",{attrs:{id:"canvas",width:t.width,height:t.height},on:{click:t.clickWeakPoint,mousemove:function(e){t.getMousePos(e)}}})])])},p=[],g={name:"One",data:function(){return{width:window.innerWidth,height:100,mouse_x:null,mouse_y:null}},computed:{},watch:{mouse_x:function(t,e){t>960&&t<970?this.drawWeakPoint():this.clearWeakPoint()}},methods:{clickWeakPoint:function(){this.mouse_x>960&&this.mouse_x<970&&this.$store.commit("eventNumIncrement")},clearWeakPoint:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");e.clearRect(960,0,10,100),e.beginPath(),e.strokeStyle="#FFFFFF",e.strokeRect(960,0,10,100)},drawWeakPoint:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");e.beginPath(),e.strokeStyle="#e00d29",e.strokeRect(960,0,10,100)},getMousePos:function(t){var e=document.getElementById("canvas"),n=e.getBoundingClientRect();this.mouse_x=t.clientX-n.left,this.mouse_y=t.clientY-n.left,console.log({x:t.clientX-n.left,y:t.clientY-n.top})},draw:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),n=-50,o=0;e.beginPath(),e.strokeStyle="#FFFFFF";var i=setInterval(function(){n++,e.strokeRect(10*n,o*Math.random()*5,150,100),n>1e3&&clearInterval(i)},20)}},mounted:function(){this.draw()}},_=g,w=(n("505d"),Object(d["a"])(_,F,p,!1,null,"74a6f2e2",null));w.options.__file="One.vue";var y=w.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"two"},[n("div",[n("canvas",{attrs:{id:"canvas",width:t.width,height:t.height},on:{click:function(e){t.click()},mousemove:function(e){t.getMousePos(e)}}})])])},x=[],I=n("4396"),P={name:"Two",data:function(){return{width:window.innerWidth,height:600,mouse_x:null,mouse_y:null}},computed:{},watch:{},methods:{click:function(){this.$store.commit("eventNumIncrement")},getMousePos:function(t){var e=document.getElementById("canvas"),n=e.getBoundingClientRect();this.mouse_x=t.clientX-n.left,this.mouse_y=t.clientY-n.left,console.log({x:t.clientX-n.left,y:t.clientY-n.top})},getRandomInt:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},drawBuilding:function(t,e,n,o,i,r,a,u){t.strokeStyle=o,t.fillStyle=n,e?t.fillRect(i,r,a,u):t.strokeRect(i,r,a,u)},ambience:function(){var t=this,e=document.getElementById("canvas"),n=e.getContext("2d");n.fillStyle="#6b1a55";var o=function o(i,r,a){var u=r,c=a,s=1,l=1;setTimeout(function(){Object(I["a"])(50,-5,function(e){n.clearRect(u-1,c-2,s+5,l+5),c=Math.round(e),u+=Math.random(),n.fillRect(u,c,s,l),n.fillRect(u+t.getRandomInt(0,4),c+t.getRandomInt(0,2),s,l),n.fillRect(u+t.getRandomInt(0,4),c+t.getRandomInt(0,2),s,l),n.fillRect(u+t.getRandomInt(0,4),c+t.getRandomInt(0,2),s,l),n.fillRect(u+t.getRandomInt(0,4),c+t.getRandomInt(0,2),s,l)},{time:1e3*t.getRandomInt(3,6),done:function(){u=e.width/2,c=-100,s=2,l=2,o(i,r,a)}})},i)};o(0,e.width/2,-100),o(100,e.width/2,-100),o(400,e.width/2+50,-100),o(800,e.width/2+25,-100),o(200,e.width/2+25,-100),o(600,e.width/2+10,-100),o(300,e.width/2+10,-100)},draw:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),n=t.width/2,o=100,i=100,r=200;e.beginPath(),this.drawBuilding(e,!1,"#FFFFFF","#FFFFFF",n,o,i,r),this.drawBuilding(e,!1,"#FFFFFF","#FFFFFF",n-30,o-30,i,r+30),this.drawBuilding(e,!1,"#FFFFFF","#FFFFFF",n-105,o-60,i-10,r+60),this.drawBuilding(e,!0,"#FFFFFF","#FFFFFF",n-60,o-20,i-30,r+20),this.drawBuilding(e,!1,"#FFFFFF","#FFFFFF",n-185,o-25,i-40,r+25),this.drawBuilding(e,!0,"#FFFFFF","#FFFFFF",n-180,o+20,i-5,r-20),this.drawBuilding(e,!0,"#FFFFFF","#FFFFFF",n+60,o+20,i-5,r-20)}},mounted:function(){this.ambience(),this.draw()}},R=P,k=(n("218b"),Object(d["a"])(R,b,x,!1,null,"45770c68",null));k.options.__file="Two.vue";var C=k.exports,O={name:"PlayArea",components:{One:y,Two:C},props:{},data:function(){return{current_event_num:null}},computed:{eventNum:function(){return this.current_event_num=this.$store.state.event_num,this.$store.state.event_num}},watch:{eventNum:function(t,e){this.current_event_num=t}}},j=O,B=(n("e57d"),Object(d["a"])(j,h,v,!1,null,"55cb247b",null));B.options.__file="PlayArea.vue";var S=B.exports,M={name:"app",components:{TextArea:m,PlayArea:S}},T=M,$=(n("034f"),Object(d["a"])(T,r,a,!1,null,null,null));$.options.__file="App.vue";var E=$.exports,A=n("2f62");o["a"].use(A["a"]);var N=new A["a"].Store({state:{event_num:0},mutations:{eventNumIncrement:function(t){t.event_num++}},actions:{}});o["a"].config.productionTip=!1,o["a"].use(i["default"]),new o["a"]({store:N,render:function(t){return t(E)}}).$mount("#app")},6312:function(t,e,n){"use strict";var o=n("88fe"),i=n.n(o);i.a},"64a9":function(t,e,n){},"71c4":function(t,e,n){},"88fe":function(t,e,n){},e57d:function(t,e,n){"use strict";var o=n("e9d9"),i=n.n(o);i.a},e9d9:function(t,e,n){},f21a:function(t,e,n){}});
//# sourceMappingURL=app.c3ae0b20.js.map