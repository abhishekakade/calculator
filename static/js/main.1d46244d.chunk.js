(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(14),n(1)),l=n(2),s=n(4),u=n(3),d=n(5),m=(n(15),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={displayScreen:0},n.clearFunction=function(){n.setState({displayScreen:0})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("section",null,o.a.createElement("div",{id:"container"},o.a.createElement("span",{id:"display"},this.state.displayScreen),o.a.createElement("button",{id:"clear",onClick:this.clearFunction},"AC"),o.a.createElement("button",{className:"operator",id:"divide"},"/"),o.a.createElement("button",{className:"operator",id:"multiply"},"x"),o.a.createElement("button",{className:"num",id:"seven"},"7"),o.a.createElement("button",{className:"num",id:"eight"},"8"),o.a.createElement("button",{className:"num",id:"nine"},"9"),o.a.createElement("button",{className:"operator",id:"subtract"},"-"),o.a.createElement("button",{className:"num",id:"four"},"4"),o.a.createElement("button",{className:"num",id:"five"},"5"),o.a.createElement("button",{className:"num",id:"six"},"6"),o.a.createElement("button",{className:"operator",id:"add"},"+"),o.a.createElement("button",{className:"num",id:"one"},"1"),o.a.createElement("button",{className:"num",id:"two"},"2"),o.a.createElement("button",{className:"num",id:"three"},"3"),o.a.createElement("button",{className:"operator",id:"equals"},"="),o.a.createElement("button",{className:"num",id:"zero"},"0"),o.a.createElement("button",{className:"operator",id:"decimal"},"."))))}}]),t}(a.Component)),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={display:0,output:0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{id:"app-title"},"Calculator"),o.a.createElement(m,null))}}]),t}(a.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/calculator","/service-worker.js");p?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):b(t,e)})}}()},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.1d46244d.chunk.js.map