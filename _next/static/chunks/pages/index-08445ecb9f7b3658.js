(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4040)}])},4040:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return W}});var t=r(5893),o=r(9008),a=r(7294),i=r(2814),s=r(1417),c=r(590),l=r.n(c),u=function(){return(0,t.jsxs)("footer",{className:l().Footer,children:[(0,t.jsxs)("div",{className:l().marketing,children:[(0,t.jsxs)("div",{className:l().marketing__contacto,children:[(0,t.jsx)("h2",{children:"Contacto"}),(0,t.jsx)("a",{href:"mailto:ivan.gutierrezc92@gmail.com",children:"ivan.gutierrezc92@gmail.com"}),(0,t.jsx)("p",{children:"Tel: +569 99181472"})]}),(0,t.jsxs)("div",{className:l().marketing__social,children:[(0,t.jsx)("h2",{children:"Encuentrame tambi\xe9n en:"}),(0,t.jsxs)("div",{className:l()["marketing__social-icons"],children:[(0,t.jsx)("a",{href:"https://github.com/ivangutierrez92",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(i.G,{icon:s.zhw,className:"fa-2x"})}),(0,t.jsx)("a",{href:"https://www.linkedin.com/in/ivan-gutierrez-castro/",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(i.G,{icon:s.D9H,className:"fa-2x"})})]})]})]}),(0,t.jsx)("div",{children:"Creado por Iv\xe1n Guti\xe9rrez Castro, 2022"})]})},d=r(1240),_=r.n(d),m=function(e){var n=e.minutes,r=e.seconds,o=e.startOrStop;return(0,t.jsxs)("button",{type:"button",onClick:o,className:_().Counter__button,children:[n<10?"0".concat(n):n,":",r<10?"0".concat(r):r]})},f=r(6122),b=r.n(f),p=r(1436);function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function g(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){g(e,n,r[n])}))}return e}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return h(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,n){var r=j(a.useReducer(N,v()),2),t=r[0],o=r[1],i=t.error,s=t.loading,c=t.item,l=function(e){return o({type:k.error,payload:e})};a.useEffect((function(){try{var r,t=localStorage.getItem(e);t?r=JSON.parse(t):(localStorage.setItem(e,JSON.stringify(n)),r=n),function(e){o({type:k.success,payload:e})}(r)}catch(a){l(a)}}),[]);return{item:c,saveItem:function(n){try{localStorage.setItem(e,JSON.stringify(n)),function(e){o({type:k.save,payload:e})}(n)}catch(r){l(r)}},loading:s,error:i}}var v=function(){return{loading:!0,error:!1,item:null}},k={error:"ERROR",success:"SUCCESS",save:"SAVE"},N=function(e,n){return function(e,n){var r;return g(r={},k.error,x({},e,{error:!0})),g(r,k.success,x({},e,{loading:!1,item:n})),g(r,k.save,x({},e,{item:n})),r}(e,n.payload)[n.type]||e},S=r(5495),O=r.n(S),P=function(){return(0,t.jsx)("div",{className:O().Loading,children:(0,t.jsx)("h1",{className:O().Loading__title,children:"Cargando..."})})},I=r(2175),w=r(4154),E=r.n(w);function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function M(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function A(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){M(e,n,r[n])}))}return e}function C(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function F(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return T(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z=function(e){var n=e.label,r=C(e,["label"]),o=F((0,I.U$)(r),2),a=o[0];o[1];return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:E().MyTextInput,children:[(0,t.jsx)("label",{htmlFor:r.id||r.name,children:n}),(0,t.jsx)("input",A({className:E().MyTextInput__input},a,r))]})})},q=r(3193),H=r.n(q),D=function(e){var n=e.sessionNumber,r=e.breakNumber,o=e.saveItem,a=e.started,i=e.setModalOpened,s=e.stopTimer;return(0,t.jsxs)("div",{className:H().Form,children:[(0,t.jsx)("button",{className:H()["Form__button--close"],onClick:function(){return i(!1)},children:"X"}),(0,t.jsx)(I.J9,{initialValues:{session:n,break:r},onSubmit:function(e,n){(0,n.setSubmitting)(!1),a&&!confirm("Esta acci\xf3n reiniciar\xe1 el contador \xbfDesea continuar?")||(o({session:60*e.session,break:60*e.break}),s(),i(!1))},children:(0,t.jsxs)(I.l0,{children:[(0,t.jsx)(z,{label:"Sesi\xf3n",name:"session",type:"number",min:1,max:999}),(0,t.jsx)(z,{label:"Descanso",name:"break",type:"number",min:1,max:999}),(0,t.jsx)("button",{type:"submit",className:H()["button--submit"],children:"Guardar"})]})})]})},L=r(4619),G=r.n(L),X=function(e){var n=e.children;return(0,t.jsx)("div",{className:G().Modal,children:n})},U=r(3167),Y=r.n(U),J=function(){return(0,t.jsx)("div",{className:Y().Error,children:(0,t.jsx)("h1",{className:Y().Error__title,children:"ups, sucedi\xf3 un error"})})},R=function(){var e=y("pomodoro-times",{session:1500,break:300}),n=e.item,r=e.saveItem,o=e.loading,s=e.error,c=function(e){if(n)return n[e]<60?60:n[e]>59940?59940:n[e]},l=c("session"),u=c("break"),d=(0,a.useState)(!0),_=d[0],f=d[1],h=(0,a.useState)(!1),g=h[0],x=h[1],j=(0,a.useState)(0),v=j[0],k=j[1],N=(0,a.useState)(!1),S=N[0],O=N[1],I=(0,a.useRef)(null),w=(0,a.useRef)("");(0,a.useEffect)((function(){k(c(_?"session":"break"))}),[n]);var E=function(){k((function(e){return e>0?e-1:(k((function(){return _?u:l})),I.current.play(),f((function(e){return!e})),0)}))},T=function(){clearInterval(w.current),x(!1)},M=function(){((g||v!=_?u:l)||confirm("Esta acci\xf3n reiniciar\xe1 el contador \xbfDesea continuar?"))&&(k(_?u:l),f((function(e){return!e})),T())},A=_?b().session__background:b().break__background,C=_?b()["session__background--light"]:b()["break__background--light"];return(0,t.jsxs)(t.Fragment,{children:[(o||!n)&&!s&&(0,t.jsx)(P,{}),s&&(0,t.jsx)(J,{}),!s&&!o&&!!n&&(0,t.jsxs)("div",{className:"".concat(b().Main," ").concat(b().fadeTransition," ").concat(A),children:[(0,t.jsx)("nav",{className:b().navbar,children:(0,t.jsx)("button",{className:"".concat(b()["navbar__button--options"],"  ").concat(b().fadeTransition," ").concat(C),onClick:function(){O(!0)},children:(0,t.jsx)(i.G,{icon:p.gr5})})}),(0,t.jsx)("h1",{className:b().Main__title,children:"Pomodoro"}),(0,t.jsxs)("div",{className:b().Pomodoro,children:[(0,t.jsxs)("div",{className:b().Tabs,children:[(0,t.jsx)("button",{onClick:M,disabled:_,className:"".concat(b().tab," ").concat(_&&b()["session__background--dark"]," ").concat(b().fadeTransition),children:"Sesi\xf3n"}),(0,t.jsx)("button",{onClick:M,disabled:!_,className:"".concat(b().tab," ").concat(!_&&b()["break__background--dark"]," ").concat(b().fadeTransition," "),children:"Descanso"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(m,{minutes:Math.floor(v/60),seconds:v%60,isSession:_,startOrStop:function(){g?T():(w.current=setInterval(E,1e3),x(!0))}})}),(0,t.jsx)("audio",{ref:I,children:(0,t.jsx)("source",{src:"sounds/alarm-clock-01.mp3"})})]})]}),S?(0,t.jsx)(X,{children:(0,t.jsx)(D,{sessionNumber:Math.floor(l/60),breakNumber:Math.floor(u/60),saveItem:r,setSeconds:k,setModalOpened:O,started:g,setStarted:x,stopTimer:T})}):null]})},Q=r(8186),V=r.n(Q);function W(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("title",{children:"Pomodoro"}),(0,t.jsx)("meta",{name:"description",content:"\xa1App Pomodoro para mejorar tu productividad!"})]}),(0,t.jsxs)("main",{children:[(0,t.jsx)(R,{}),(0,t.jsxs)("section",{className:V().info,children:[(0,t.jsx)("h2",{className:V().info__title,children:"Pomodoro, una t\xe9cnica de estudio y concentraci\xf3n"}),(0,t.jsxs)("article",{className:V().sectionInfo,children:[(0,t.jsx)("h3",{className:V().sectionInfo__title,children:"\xbfQu\xe9 es pomodoro?"}),(0,t.jsx)("p",{children:"Pomodoro es una t\xe9cnica de gesti\xf3n de tiempo creada por Francesco Cirillo, que consiste en separar el tiempo de trabajo en intervalos de tiempo, generalmente de 25 minutos, y separados por un tiempo de descanso, en pos de aumentar la productividad y concentraci\xf3n. Adem\xe1s de eso, Pomodoro significa tomate en italiano (basado en un temporizador de cocina que el autor de esta t\xe9cnica ten\xeda)."})]}),(0,t.jsxs)("article",{className:V().sectionInfo,children:[(0,t.jsx)("h3",{className:V().sectionInfo__title,children:"\xbfQu\xe9 puede hacer esta aplicacion?"}),(0,t.jsx)("p",{children:"La aplicaci\xf3n ayuda a la ejecuci\xf3n de la t\xe9cnica Pomodoro, pudiendo alternar entre la sesi\xf3n de trabajo y el descanso. Adem\xe1s, se puede configurar cu\xe1nto dura la sesi\xf3n y el descanso. Finalmente, la p\xe1gina puede ser instalada como aplicaci\xf3n."})]}),(0,t.jsxs)("article",{className:V().sectionInfo,children:[(0,t.jsx)("h3",{className:V().sectionInfo__title,children:"\xbfPor qu\xe9 esta aplicaci\xf3n?"}),(0,t.jsxs)("p",{children:["Cuando estaba aprendiendo desarrollo web, una de las primeras aplicaciones que tuve que hacer fue la de Pomodoro. Ahora que tengo algo m\xe1s de experiencia, decid\xed que pod\xeda mejorar esa aplicaci\xf3n y generarle algo m\xe1s de valor, para poder colocarla con orgullo en mi portafolio web. Tambi\xe9n quiero destacar la genial aplicaci\xf3n"," ",(0,t.jsx)("a",{href:"https://pomofocus.io/",target:"_blank",rel:"noreferrer",children:"pomofocus"}),", de Yuya Uzu, por demostrar a lo que una aplicaci\xf3n como esta debe aspirar."]})]})]}),(0,t.jsx)(u,{})]})]})}},1240:function(e){e.exports={Counter__button:"Counter_Counter__button__AEfvt"}},3167:function(e){e.exports={Error:"Error_Error__GUG0c",Error__title:"Error_Error__title__hcWGr"}},590:function(e){e.exports={Footer:"Footer_Footer__v4Xk3",marketing:"Footer_marketing__Tithp",marketing__contacto:"Footer_marketing__contacto__zu0bi",marketing__social:"Footer_marketing__social__8Qqxy","marketing__social-icons":"Footer_marketing__social-icons__A6YzO"}},5495:function(e){e.exports={Loading:"Loading_Loading__cz94g",Loading__title:"Loading_Loading__title__6HI3P"}},4154:function(e){e.exports={MyTextInput:"MyTextInput_MyTextInput__pNHYT",MyTextInput__input:"MyTextInput_MyTextInput__input__3AAJf"}},3193:function(e){e.exports={Form:"SettingsForm_Form__lqzek","Form__button--close":"SettingsForm_Form__button--close__1Ctvy","button--submit":"SettingsForm_button--submit__ANBka"}},4619:function(e){e.exports={Modal:"Modal_Modal__CcAKg"}},6122:function(e){e.exports={Main:"Pomodoro_Main__po0dX",Main__title:"Pomodoro_Main__title__4fX7_",navbar:"Pomodoro_navbar__3axuC","navbar__button--options":"Pomodoro_navbar__button--options__HYD3Y",Pomodoro:"Pomodoro_Pomodoro__mHqHs",Tabs:"Pomodoro_Tabs__ZOZ9c",tab:"Pomodoro_tab__kWz15",session__background:"Pomodoro_session__background__NIS90",break__background:"Pomodoro_break__background__HAelX","session__background--light":"Pomodoro_session__background--light__4cFWi","break__background--light":"Pomodoro_break__background--light__as2DM","session__background--dark":"Pomodoro_session__background--dark__cg8I1","break__background--dark":"Pomodoro_break__background--dark__X9NBD",fadeTransition:"Pomodoro_fadeTransition__zyIgY"}},8186:function(e){e.exports={info:"Home_info__1UJLZ",sectionInfo:"Home_sectionInfo__Gq_t5",sectionInfo__title:"Home_sectionInfo__title__h0YSP",info__title:"Home_info__title__bnAVX"}}},function(e){e.O(0,[523,112,74,774,888,179],(function(){return n=3685,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=index-08445ecb9f7b3658.js.map