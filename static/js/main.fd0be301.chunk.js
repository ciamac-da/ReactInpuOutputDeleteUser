(this["webpackJsonpreact-input-output-delete-user"]=this["webpackJsonpreact-input-output-delete-user"]||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(9),i=n.n(a),c=(n(17),n(18),n(19),n(11)),l=n(5),u=n(25),s=n(26),d=n(27);var f=function(e){var t=e.hinzufuegen,n=e.titel,r=o.a.useState(""),a=Object(l.a)(r,2),i=a[0],c=a[1];return o.a.createElement(u.a,null,o.a.createElement(s.a,{value:i,onChange:function(e){return c(e.target.value)}}),o.a.createElement(u.a.Append,null,o.a.createElement(d.a,{onClick:function(e){t(i),c("")}},n)))},h=n(24);var v=function(e){var t=e.wert,n=(e.key,e.loeschen);return o.a.createElement("tr",null,o.a.createElement("td",null,t),o.a.createElement("td",{width:"1%"},o.a.createElement(d.a,{onClick:n},"x")))};var p,g=function(e){var t=e.todo,n=e.loeschen;return o.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},o.a.createElement("tbody",null,t.map((function(e,t){return o.a.createElement(v,{key:t,wert:e,loeschen:n.bind(null,t)})}))))};try{p=JSON.parse(localStorage.getItem("liste"))||[]}catch(k){p=[]}var m=function(e){try{localStorage.setItem("liste",JSON.stringify(e))}catch(k){}};var w=function(){var e=Object(r.useState)(p),t=Object(l.a)(e,2),n=t[0],a=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{hinzufuegen:function(e){var t=[e].concat(Object(c.a)(n));a(t),m(t)},titel:"+"}),o.a.createElement(g,{todo:n,loeschen:function(e){var t=n.filter((function(t,n){return!(n===e)}));a(t),m(t)}}))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(w,null),document.getElementById("todo")),function(e){if("serviceWorker"in navigator){if(new URL("/react-input-output-delete-user",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-input-output-delete-user","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.fd0be301.chunk.js.map