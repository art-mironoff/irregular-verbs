(window["webpackJsonpirregular-verbs"]=window["webpackJsonpirregular-verbs"]||[]).push([[0],{14:function(e,i,t){e.exports=t(23)},22:function(e,i,t){},23:function(e,i,t){"use strict";t.r(i);var a=t(0),n=t.n(a),r=t(11),l=t.n(r),p=t(8),s=t(5),u=t(26),o=t(27),c=t(28),f=t(29),m=t(24),b=t(25),v=t(30);var P=function(e){var i=Object(a.useState)(!1),t=Object(s.a)(i,2),r=t[0],l=t[1],p=e.showHints,u=e.hint,o=e.autoFocus,c=e.name,f=e.placeholder,P=e.isValid,d=e.value,S=e.onKeyPress,h=e.onChange;return n.a.createElement(m.a,null,p?n.a.createElement(b.a,null,"Hint: ",u):null,n.a.createElement(v.a,{autoFocus:o,name:c,placeholder:f,value:d,isValid:P,isInvalid:!!d&&!r&&!P,onFocus:function(){l(!0)},onBlur:function(){l(!1)},onKeyPress:S,onChange:h}))},d=t(6);t(22);function S(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,a)}return t}var h=function(){var e=Object(a.useState)(Number(localStorage.getItem("index"))||0),i=Object(s.a)(e,2),t=i[0],r=i[1],l=Object(a.useState)({infinitive:"",pastSimple:"",pastParticiple:""}),m=Object(s.a)(l,2),b=m[0],v=m[1],h=Object(a.useState)(!1),g=Object(s.a)(h,2),w=g[0],k=g[1],y=function(e){v(function(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?S(t,!0).forEach(function(i){Object(p.a)(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}({},b,Object(p.a)({},e.target.name,e.target.value)))},O=function(e){13===e.charCode&&C()},j=function(e){var i=d.a[t];return b[e].toLowerCase()===i[e].toLowerCase()},E=function(){var e=d.a[t];return d.a.length===t+1||e.infinitive.toLowerCase()!==b.infinitive.toLowerCase()||e.pastSimple.toLowerCase()!==b.pastSimple.toLowerCase()||e.pastParticiple.toLowerCase()!==b.pastParticiple.toLowerCase()},C=function(){if(!E()){var e=t+1;r(e),v({infinitive:"",pastSimple:"",pastParticiple:""}),k(!1),localStorage.setItem("index",e.toString())}},L=d.a[t];return n.a.createElement(u.a,null,n.a.createElement(o.a,{className:"justify-content-sm-center"},n.a.createElement(c.a,{xs:12,sm:9,md:7,lg:5,xl:4},n.a.createElement("form",null,n.a.createElement("h3",null,L.ru),n.a.createElement(P,{autoFocus:!0,name:"infinitive",placeholder:"Infinitive",showHints:w,value:b.infinitive,hint:L.infinitive,isValid:j("infinitive"),onKeyPress:O,onChange:y}),n.a.createElement(P,{name:"pastSimple",placeholder:"Past Simple",showHints:w,value:b.pastSimple,hint:L.pastSimple,isValid:j("pastSimple"),onKeyPress:O,onChange:y}),n.a.createElement(P,{name:"pastParticiple",placeholder:"Past Participle",showHints:w,value:b.pastParticiple,hint:L.pastParticiple,isValid:j("pastParticiple"),onKeyPress:O,onChange:y}),n.a.createElement("div",{className:"buttons"},n.a.createElement(f.a,{className:"pull-left",onClick:function(){k(!w)}},w?"Hide hints":"Show hints"),n.a.createElement("span",null,t+1," of ",d.a.length),n.a.createElement(f.a,{className:"btn-success pull-right",disabled:E(),onClick:C},"Next"))))))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var i=e.installing;i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(n.a.createElement(h,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");g?(!function(e){fetch(e).then(function(i){404===i.status||-1===i.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):w(e)})}}()},6:function(e){e.exports=JSON.parse('{"a":[{"infinitive":"be","pastSimple":"was","pastParticiple":"been","ru":"\u0431\u044b\u0442\u044c, \u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"beat","pastSimple":"beat","pastParticiple":"beaten","ru":"\u0431\u0438\u0442\u044c, \u043a\u043e\u043b\u043e\u0442\u0438\u0442\u044c","enable":true},{"infinitive":"become","pastSimple":"became","pastParticiple":"become","ru":"\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"begin","pastSimple":"began","pastParticiple":"begun","ru":"\u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c","enable":true},{"infinitive":"bend","pastSimple":"bent","pastParticiple":"bent","ru":"\u0433\u043d\u0443\u0442\u044c","enable":true},{"infinitive":"bet","pastSimple":"bet","pastParticiple":"bet","ru":"\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0430\u0440\u0438","enable":true},{"infinitive":"bite","pastSimple":"bit","pastParticiple":"bitten","ru":"\u043a\u0443\u0441\u0430\u0442\u044c","enable":true},{"infinitive":"blow","pastSimple":"blew","pastParticiple":"blown","ru":"\u0434\u0443\u0442\u044c, \u0432\u044b\u0434\u044b\u0445\u0430\u0442\u044c","enable":true},{"infinitive":"break","pastSimple":"broke","pastParticiple":"broken","ru":"\u043b\u043e\u043c\u0430\u0442\u044c, \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0442\u044c, \u0440\u0430\u0437\u0440\u0443\u0448\u0430\u0442\u044c","enable":true},{"infinitive":"bring","pastSimple":"brought","pastParticiple":"brought","ru":"\u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442\u044c, \u043f\u0440\u0438\u0432\u043e\u0437\u0438\u0442\u044c, \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c","enable":true},{"infinitive":"build","pastSimple":"built","pastParticiple":"built","ru":"\u0441\u0442\u0440\u043e\u0438\u0442\u044c, \u0441\u043e\u043e\u0440\u0443\u0436\u0430\u0442\u044c","enable":true},{"infinitive":"buy","pastSimple":"bought","pastParticiple":"bought","ru":"\u043f\u043e\u043a\u0443\u043f\u0430\u0442\u044c, \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0430\u0442\u044c","enable":true},{"infinitive":"catch","pastSimple":"caught","pastParticiple":"caught","ru":"\u043b\u043e\u0432\u0438\u0442\u044c, \u043f\u043e\u0439\u043c\u0430\u0442\u044c, \u0441\u0445\u0432\u0430\u0442\u0438\u0442\u044c","enable":true},{"infinitive":"choose","pastSimple":"chose","pastParticiple":"chosen","ru":"\u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c, \u0438\u0437\u0431\u0438\u0440\u0430\u0442\u044c","enable":true},{"infinitive":"come","pastSimple":"came","pastParticiple":"come","ru":"\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c, \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442\u044c","enable":true},{"infinitive":"cost","pastSimple":"cost","pastParticiple":"cost","ru":"\u0441\u0442\u043e\u0438\u0442\u044c, \u043e\u0431\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"cut","pastSimple":"cut","pastParticiple":"cut","ru":"\u0440\u0435\u0437\u0430\u0442\u044c, \u0440\u0430\u0437\u0440\u0435\u0437\u0430\u0442\u044c","enable":true},{"infinitive":"deal","pastSimple":"dealt","pastParticiple":"dealt","ru":"\u0438\u043c\u0435\u0442\u044c \u0434\u0435\u043b\u043e, \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c","enable":true},{"infinitive":"dig","pastSimple":"dug","pastParticiple":"dug","ru":"\u043a\u043e\u043f\u0430\u0442\u044c, \u0440\u044b\u0442\u044c","enable":true},{"infinitive":"do","pastSimple":"did","pastParticiple":"done","ru":"\u0434\u0435\u043b\u0430\u0442\u044c, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c","enable":true},{"infinitive":"draw","pastSimple":"drew","pastParticiple":"drawn","ru":"\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c, \u0447\u0435\u0440\u0442\u0438\u0442\u044c","enable":true},{"infinitive":"drink","pastSimple":"drank","pastParticiple":"drunk","ru":"\u043f\u0438\u0442\u044c","enable":true},{"infinitive":"drive","pastSimple":"drove","pastParticiple":"driven","ru":"\u0435\u0437\u0434\u0438\u0442\u044c, \u043f\u043e\u0434\u0432\u043e\u0437\u0438\u0442\u044c","enable":true},{"infinitive":"eat","pastSimple":"ate","pastParticiple":"eaten","ru":"\u0435\u0441\u0442\u044c, \u043f\u043e\u0433\u043b\u043e\u0449\u0430\u0442\u044c, \u043f\u043e\u0435\u0434\u0430\u0442\u044c","enable":true},{"infinitive":"fall","pastSimple":"fell","pastParticiple":"fallen","ru":"\u043f\u0430\u0434\u0430\u0442\u044c","enable":true},{"infinitive":"feed","pastSimple":"fed","pastParticiple":"fed","ru":"\u043a\u043e\u0440\u043c\u0438\u0442\u044c","enable":true},{"infinitive":"feel","pastSimple":"felt","pastParticiple":"felt","ru":"\u0447\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c, \u043e\u0449\u0443\u0449\u0430\u0442\u044c","enable":true},{"infinitive":"fight","pastSimple":"fought","pastParticiple":"fought","ru":"\u0434\u0440\u0430\u0442\u044c\u0441\u044f, \u0441\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f, \u0432\u043e\u0435\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"find","pastSimple":"found","pastParticiple":"found","ru":"\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c, \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"fly","pastSimple":"flew","pastParticiple":"flown","ru":"\u043b\u0435\u0442\u0430\u0442\u044c","enable":true},{"infinitive":"forget","pastSimple":"forgot","pastParticiple":"forgotten","ru":"\u0437\u0430\u0431\u044b\u0432\u0430\u0442\u044c \u043e (\u0447\u0451\u043c-\u043b\u0438\u0431\u043e)","enable":true},{"infinitive":"forgive","pastSimple":"forgave","pastParticiple":"forgiven","ru":"\u043f\u0440\u043e\u0449\u0430\u0442\u044c","enable":true},{"infinitive":"freeze","pastSimple":"froze","pastParticiple":"frozen","ru":"\u0437\u0430\u043c\u0435\u0440\u0437\u0430\u0442\u044c, \u0437\u0430\u043c\u0438\u0440\u0430\u0442\u044c","enable":true},{"infinitive":"get","pastSimple":"got","pastParticiple":"got","ru":"\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c, \u0434\u043e\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"give","pastSimple":"gave","pastParticiple":"given","ru":"\u0434\u0430\u0442\u044c, \u043f\u043e\u0434\u0430\u0442\u044c, \u0434\u0430\u0440\u0438\u0442\u044c","enable":true},{"infinitive":"go","pastSimple":"went","pastParticiple":"gone","ru":"\u0438\u0434\u0442\u0438, \u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"grow","pastSimple":"grew","pastParticiple":"grown","ru":"\u0440\u0430\u0441\u0442\u0438, \u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"hang","pastSimple":"hung","pastParticiple":"hung","ru":"\u0432\u0435\u0448\u0430\u0442\u044c, \u0440\u0430\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u0442\u044c, \u0432\u0438\u0441\u0435\u0442\u044c","enable":true},{"infinitive":"have","pastSimple":"had","pastParticiple":"had","ru":"\u0438\u043c\u0435\u0442\u044c, \u043e\u0431\u043b\u0430\u0434\u0430\u0442\u044c","enable":true},{"infinitive":"hear","pastSimple":"heard","pastParticiple":"heard","ru":"\u0441\u043b\u0443\u0448\u0430\u0442\u044c, \u0443\u0441\u043b\u044b\u0448\u0430\u0442\u044c","enable":true},{"infinitive":"hide","pastSimple":"hid","pastParticiple":"hidden","ru":"\u043f\u0440\u044f\u0442\u0430\u0442\u044c, \u0441\u043a\u0440\u044b\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"hit","pastSimple":"hit","pastParticiple":"hit","ru":"\u0443\u0434\u0430\u0440\u044f\u0442\u044c, \u043f\u043e\u0440\u0430\u0436\u0430\u0442\u044c","enable":true},{"infinitive":"hold","pastSimple":"held","pastParticiple":"held","ru":"\u0434\u0435\u0440\u0436\u0430\u0442\u044c, \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c, \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"hurt","pastSimple":"hurt","pastParticiple":"hurt","ru":"\u0440\u0430\u043d\u0438\u0442\u044c, \u043f\u0440\u0438\u0447\u0438\u043d\u044f\u0442\u044c \u0431\u043e\u043b\u044c, \u0443\u0448\u0438\u0431\u0438\u0442\u044c","enable":true},{"infinitive":"keep","pastSimple":"kept","pastParticiple":"kept","ru":"\u0445\u0440\u0430\u043d\u0438\u0442\u044c, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"know","pastSimple":"knew","pastParticiple":"known","ru":"\u0437\u043d\u0430\u0442\u044c, \u0438\u043c\u0435\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435","enable":true},{"infinitive":"lay","pastSimple":"laid","pastParticiple":"laid","ru":"\u043a\u043b\u0430\u0441\u0442\u044c, \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c, \u043f\u043e\u043a\u0440\u044b\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"lead","pastSimple":"led","pastParticiple":"led","ru":"\u0432\u0435\u0441\u0442\u0438 \u0437\u0430 \u0441\u043e\u0431\u043e\u0439, \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u0442\u044c, \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u044c","enable":true},{"infinitive":"leave","pastSimple":"left","pastParticiple":"left","ru":"\u043f\u043e\u043a\u0438\u0434\u0430\u0442\u044c, \u0443\u0445\u043e\u0434\u0438\u0442\u044c, \u0443\u0435\u0437\u0436\u0430\u0442\u044c, \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c","enable":true},{"infinitive":"lend","pastSimple":"lent","pastParticiple":"lent","ru":"\u043e\u0434\u0430\u043b\u0436\u0438\u0432\u0430\u0442\u044c, \u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0437\u0430\u0439\u043c\u044b (\u0432 \u0434\u043e\u043b\u0433)","enable":true},{"infinitive":"let","pastSimple":"let","pastParticiple":"let","ru":"\u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0442\u044c, \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0442\u044c","enable":true},{"infinitive":"lie","pastSimple":"lay","pastParticiple":"lain","ru":"\u043b\u0435\u0436\u0430\u0442\u044c","enable":true},{"infinitive":"light","pastSimple":"lit","pastParticiple":"lit","ru":"\u0437\u0430\u0436\u0438\u0433\u0430\u0442\u044c, \u0441\u0432\u0435\u0442\u0438\u0442\u044c\u0441\u044f, \u043e\u0441\u0432\u0435\u0449\u0430\u0442\u044c","enable":true},{"infinitive":"lose","pastSimple":"lost","pastParticiple":"lost","ru":"\u0442\u0435\u0440\u044f\u0442\u044c, \u043b\u0438\u0448\u0430\u0442\u044c\u0441\u044f, \u0443\u0442\u0440\u0430\u0447\u0438\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"make","pastSimple":"made","pastParticiple":"made","ru":"\u0434\u0435\u043b\u0430\u0442\u044c, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c, \u0438\u0437\u0433\u043e\u0442\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"mean","pastSimple":"meant","pastParticiple":"meant","ru":"\u0437\u043d\u0430\u0447\u0438\u0442\u044c, \u0438\u043c\u0435\u0442\u044c \u0432 \u0432\u0438\u0434\u0443, \u043f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"meet","pastSimple":"met","pastParticiple":"met","ru":"\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0442\u044c, \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"pay","pastSimple":"paid","pastParticiple":"paid","ru":"\u043f\u043b\u0430\u0442\u0438\u0442\u044c, \u043e\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0442\u044c, \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"put","pastSimple":"put","pastParticiple":"put","ru":"\u0441\u0442\u0430\u0432\u0438\u0442\u044c, \u043f\u043e\u043c\u0435\u0449\u0430\u0442\u044c, \u043a\u043b\u0430\u0441\u0442\u044c","enable":true},{"infinitive":"read","pastSimple":"read","pastParticiple":"read","ru":"\u0447\u0438\u0442\u0430\u0442\u044c, \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c","enable":true},{"infinitive":"ride","pastSimple":"rode","pastParticiple":"ridden","ru":"\u0435\u0445\u0430\u0442\u044c \u0432\u0435\u0440\u0445\u043e\u043c, \u043a\u0430\u0442\u0430\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"ring","pastSimple":"rang","pastParticiple":"rung","ru":"\u0437\u0432\u0435\u043d\u0435\u0442\u044c, \u0437\u0432\u043e\u043d\u0438\u0442\u044c","enable":true},{"infinitive":"rise","pastSimple":"rose","pastParticiple":"risen","ru":"\u0432\u043e\u0441\u0445\u043e\u0434\u0438\u0442\u044c, \u0432\u0441\u0442\u0430\u0432\u0430\u0442\u044c, \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"run","pastSimple":"ran","pastParticiple":"run","ru":"\u0431\u0435\u0436\u0430\u0442\u044c, \u0431\u0435\u0433\u0430\u0442\u044c","enable":true},{"infinitive":"say","pastSimple":"said","pastParticiple":"said","ru":"\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c, \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u043f\u0440\u043e\u0438\u0437\u043d\u043e\u0441\u0438\u0442\u044c","enable":true},{"infinitive":"see","pastSimple":"saw","pastParticiple":"seen","ru":"\u0432\u0438\u0434\u0435\u0442\u044c","enable":true},{"infinitive":"seek","pastSimple":"sought","pastParticiple":"sought","ru":"\u0438\u0441\u043a\u0430\u0442\u044c, \u0440\u0430\u0437\u044b\u0441\u043a\u0438\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"sell","pastSimple":"sold","pastParticiple":"sold","ru":"\u043f\u0440\u043e\u0434\u0430\u0432\u0430\u0442\u044c, \u0442\u043e\u0440\u0433\u043e\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"send","pastSimple":"sent","pastParticiple":"sent","ru":"\u043f\u043e\u0441\u044b\u043b\u0430\u0442\u044c, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c, \u043e\u0442\u0441\u044b\u043b\u0430\u0442\u044c","enable":true},{"infinitive":"set","pastSimple":"set","pastParticiple":"set","ru":"\u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c, \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c, \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0442\u044c","enable":true},{"infinitive":"shake","pastSimple":"shook","pastParticiple":"shaken","ru":"\u0442\u0440\u044f\u0441\u0442\u0438, \u0432\u0441\u0442\u0440\u044f\u0445\u0438\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"shine","pastSimple":"shone","pastParticiple":"shone","ru":"\u0441\u0432\u0435\u0442\u0438\u0442\u044c, \u0441\u0438\u044f\u0442\u044c, \u043e\u0437\u0430\u0440\u044f\u0442\u044c","enable":true},{"infinitive":"shoot","pastSimple":"shot","pastParticiple":"shot","ru":"\u0441\u0442\u0440\u0435\u043b\u044f\u0442\u044c","enable":true},{"infinitive":"show","pastSimple":"showed","pastParticiple":"shown","ru":"\u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"shut","pastSimple":"shut","pastParticiple":"shut","ru":"\u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0442\u044c, \u0437\u0430\u043f\u0438\u0440\u0430\u0442\u044c, \u0437\u0430\u0442\u0432\u043e\u0440\u044f\u0442\u044c","enable":true},{"infinitive":"sing","pastSimple":"sang","pastParticiple":"sung","ru":"\u043f\u0435\u0442\u044c, \u043d\u0430\u043f\u0435\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"sink","pastSimple":"sank","pastParticiple":"sunk","ru":"\u0442\u043e\u043d\u0443\u0442\u044c, \u043f\u043e\u0433\u0440\u0443\u0436\u0430\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"sit","pastSimple":"sat","pastParticiple":"sat","ru":"\u0441\u0438\u0434\u0435\u0442\u044c, \u0441\u0430\u0434\u0438\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"sleep","pastSimple":"slept","pastParticiple":"slept","ru":"\u0441\u043f\u0430\u0442\u044c","enable":true},{"infinitive":"speak","pastSimple":"spoke","pastParticiple":"spoken","ru":"\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c, \u0440\u0430\u0437\u0433\u043e\u0432\u0430\u0440\u0438\u0432\u0430\u0442\u044c, \u0432\u044b\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"spend","pastSimple":"spent","pastParticiple":"spent","ru":"\u0442\u0440\u0430\u0442\u0438\u0442\u044c, \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432\u0430\u0442\u044c, \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c (\u0432\u0440\u0435\u043c\u044f)","enable":true},{"infinitive":"stand","pastSimple":"stood","pastParticiple":"stood","ru":"\u0441\u0442\u043e\u044f\u0442\u044c","enable":true},{"infinitive":"steal","pastSimple":"stole","pastParticiple":"stolen","ru":"\u0432\u043e\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0440\u0430\u0441\u0442\u044c","enable":true},{"infinitive":"stick","pastSimple":"stuck","pastParticiple":"stuck","ru":"\u0432\u0442\u044b\u043a\u0430\u0442\u044c, \u043f\u0440\u0438\u043a\u043b\u0435\u0438\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"strike","pastSimple":"struck","pastParticiple":"struck","ru":"\u0443\u0434\u0430\u0440\u044f\u0442\u044c, \u0431\u0438\u0442\u044c, \u043f\u043e\u0440\u0430\u0436\u0430\u0442\u044c","enable":true},{"infinitive":"swear","pastSimple":"swore","pastParticiple":"sworn","ru":"\u043a\u043b\u044f\u0441\u0442\u044c\u0441\u044f, \u043f\u0440\u0438\u0441\u044f\u0433\u0430\u0442\u044c","enable":true},{"infinitive":"sweep","pastSimple":"swept","pastParticiple":"swept","ru":"\u043c\u0435\u0441\u0442\u0438, \u043f\u043e\u0434\u043c\u0435\u0442\u0430\u0442\u044c, \u0441\u043c\u0430\u0445\u0438\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"swim","pastSimple":"swam","pastParticiple":"swum","ru":"\u043f\u043b\u0430\u0432\u0430\u0442\u044c, \u043f\u043b\u044b\u0442\u044c","enable":true},{"infinitive":"swing","pastSimple":"swung","pastParticiple":"swung","ru":"\u043a\u0430\u0447\u0430\u0442\u044c\u0441\u044f, \u0432\u0435\u0440\u0442\u0435\u0442\u044c\u0441\u044f","enable":true},{"infinitive":"take","pastSimple":"took","pastParticiple":"taken","ru":"\u0431\u0440\u0430\u0442\u044c, \u0445\u0432\u0430\u0442\u0430\u0442\u044c, \u0432\u0437\u044f\u0442\u044c","enable":true},{"infinitive":"teach","pastSimple":"taught","pastParticiple":"taught","ru":"\u0443\u0447\u0438\u0442\u044c, \u043e\u0431\u0443\u0447\u0430\u0442\u044c","enable":true},{"infinitive":"tear","pastSimple":"tore","pastParticiple":"torn","ru":"\u0440\u0432\u0430\u0442\u044c, \u043e\u0442\u0440\u044b\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"tell","pastSimple":"told","pastParticiple":"told","ru":"\u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c","enable":true},{"infinitive":"think","pastSimple":"thought","pastParticiple":"thought","ru":"\u0434\u0443\u043c\u0430\u0442\u044c, \u043c\u044b\u0441\u043b\u0438\u0442\u044c, \u0440\u0430\u0437\u043c\u044b\u0448\u043b\u044f\u0442\u044c","enable":true},{"infinitive":"throw","pastSimple":"threw","pastParticiple":"thrown","ru":"\u0431\u0440\u043e\u0441\u0430\u0442\u044c, \u043a\u0438\u0434\u0430\u0442\u044c, \u043c\u0435\u0442\u0430\u0442\u044c","enable":true},{"infinitive":"understand","pastSimple":"understood","pastParticiple":"understood","ru":"\u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c, \u043f\u043e\u0441\u0442\u0438\u0433\u0430\u0442\u044c","enable":true},{"infinitive":"wake","pastSimple":"woke","pastParticiple":"woken","ru":"\u043f\u0440\u043e\u0441\u044b\u043f\u0430\u0442\u044c\u0441\u044f, \u0431\u0443\u0434\u0438\u0442\u044c","enable":true},{"infinitive":"wear","pastSimple":"wore","pastParticiple":"worn","ru":"\u043d\u043e\u0441\u0438\u0442\u044c (\u043e\u0434\u0435\u0436\u0434\u0443)","enable":true},{"infinitive":"win","pastSimple":"won","pastParticiple":"won","ru":"\u043f\u043e\u0431\u0435\u0434\u0438\u0442\u044c, \u0432\u044b\u0439\u0433\u0440\u0430\u0442\u044c","enable":true},{"infinitive":"write","pastSimple":"wrote","pastParticiple":"written","ru":"\u043f\u0438\u0441\u0430\u0442\u044c, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c","enable":true}]}')}},[[14,1,2]]]);
//# sourceMappingURL=main.9101e456.chunk.js.map