(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4040)}])},4040:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Q}});var t=r(5893),o=r(9008),a=r(7294),i=r(2814),s=r(1417),c=r(590),l=r.n(c),u=function(){return(0,t.jsxs)("footer",{className:l().Footer,children:[(0,t.jsxs)("div",{className:l().marketing,children:[(0,t.jsxs)("div",{className:l().marketing__contacto,children:[(0,t.jsx)("h2",{children:"Contacto"}),(0,t.jsx)("a",{href:"mailto:ivan.gutierrezc92@gmail.com",children:"ivan.gutierrezc92@gmail.com"}),(0,t.jsx)("p",{children:"Tel: +569 99181472"})]}),(0,t.jsxs)("div",{className:l().marketing__social,children:[(0,t.jsx)("h2",{children:"Encuentrame tambi\xe9n en:"}),(0,t.jsxs)("div",{className:l()["marketing__social-icons"],children:[(0,t.jsx)("a",{href:"https://github.com/llamafluida",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(i.G,{icon:s.zhw,className:"fa-2x"})}),(0,t.jsx)("a",{href:"https://www.linkedin.com/in/ivan-gutierrez-castro/",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(i.G,{icon:s.D9H,className:"fa-2x"})})]})]})]}),(0,t.jsx)("div",{children:"Creado por Iv\xe1n Guti\xe9rrez Castro, 2022"})]})},d=r(1240),_=r.n(d),m=function(e){var n=e.minutes,r=e.seconds,o=e.startOrStop;return(0,t.jsxs)("button",{type:"button",onClick:o,className:_().Counter__button,children:[n<10?"0".concat(n):n,":",r<10?"0".concat(r):r]})},f=r(6122),p=r.n(f),b=r(1436);function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){y(e,n,r[n])}))}return e}function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return h(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){var r=x(a.useReducer(N,v()),2),t=r[0],o=r[1],i=t.error,s=t.loading,c=t.item,l=function(e){return o({type:k.error,payload:e})};a.useEffect((function(){try{var r,t=localStorage.getItem(e);t?r=JSON.parse(t):(localStorage.setItem(e,JSON.stringify(n)),r=n),function(e){o({type:k.success,payload:e})}(r)}catch(a){l(a)}}),[]);return{item:c,saveItem:function(n){try{localStorage.setItem(e,JSON.stringify(n)),function(e){o({type:k.save,payload:e})}(n)}catch(r){l(r)}},loading:s,error:i}}var v=function(){return{loading:!0,error:!1,item:null}},k={error:"ERROR",success:"SUCCESS",save:"SAVE"},N=function(e,n){return function(e,n){var r;return y(r={},k.error,g({},e,{error:!0})),y(r,k.success,g({},e,{loading:!1,item:n})),y(r,k.save,g({},e,{item:n})),r}(e,n.payload)[n.type]||e},S=r(5495),O=r.n(S),P=function(){return(0,t.jsx)("div",{className:O().Loading,children:(0,t.jsx)("h1",{className:O().Loading__title,children:"Cargando..."})})},I=r(2175),w=r(4154),E=r.n(w);function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function C(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function M(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){C(e,n,r[n])}))}return e}function A(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function F(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return T(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z=function(e){var n=e.label,r=A(e,["label"]),o=F((0,I.U$)(r),2),a=o[0];o[1];return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:E().MyTextInput,children:[(0,t.jsx)("label",{htmlFor:r.id||r.name,children:n}),(0,t.jsx)("input",M({className:E().MyTextInput__input},a,r))]})})},q=r(3193),H=r.n(q),G=function(e){var n=e.sessionNumber,r=e.breakNumber,o=e.saveItem,a=e.started,i=e.setModalOpened,s=e.stopTimer;return(0,t.jsxs)("div",{className:H().FormContainer,children:[(0,t.jsx)("button",{className:H().closeButton,onClick:function(){return i(!1)},children:"X"}),(0,t.jsx)(I.J9,{initialValues:{session:n,break:r},onSubmit:function(e,n){(0,n.setSubmitting)(!1),a&&!confirm("Esta acci\xf3n reiniciar\xe1 el contador \xbfDesea continuar?")||(o({session:60*e.session,break:60*e.break}),s(),i(!1))},children:(0,t.jsxs)(I.l0,{children:[(0,t.jsx)(z,{label:"Sesi\xf3n",name:"session",type:"number",min:1,max:999}),(0,t.jsx)(z,{label:"Descanso",name:"break",type:"number",min:1,max:999}),(0,t.jsx)("button",{type:"submit",className:H().submitButton,children:"Guardar"})]})})]})},L=r(4619),D=r.n(L),R=function(e){var n=e.children;return(0,t.jsx)("div",{className:D().Modal,children:n})},U=r(3167),X=r.n(U),J=function(){return(0,t.jsx)("div",{className:X().Error,children:(0,t.jsx)("h1",{className:X().Error__title,children:"ups, sucedi\xf3 un error"})})},Y=function(){var e=j("pomodoro-times",{session:1500,break:300}),n=e.item,r=e.saveItem,o=e.loading,s=e.error,c=function(e){if(n)return n[e]<60?60:n[e]>59940?59940:n[e]},l=c("session"),u=c("break"),d=(0,a.useState)(!0),_=d[0],f=d[1],h=(0,a.useState)(!1),y=h[0],g=h[1],x=(0,a.useState)(0),v=x[0],k=x[1],N=(0,a.useState)(!1),S=N[0],O=N[1],I=(0,a.useRef)(null),w=(0,a.useRef)("");(0,a.useEffect)((function(){k(c(_?"session":"break"))}),[n]);var E=function(){k((function(e){return e>0?e-1:(k((function(){return _?u:l})),I.current.play(),f((function(e){return!e})),0)}))},T=function(){clearInterval(w.current),g(!1)},C=function(){((y||v!=_?u:l)||confirm("Esta acci\xf3n reiniciar\xe1 el contador \xbfDesea continuar?"))&&(k(_?u:l),f((function(e){return!e})),T())},M=_?p()["session__background--primary"]:p()["break__background--primary"],A=_?p()["session__background--secondary"]:p()["break__background--secondary"];return(0,t.jsxs)(t.Fragment,{children:[(o||!n)&&!s&&(0,t.jsx)(P,{}),s&&(0,t.jsx)(J,{}),!s&&!o&&!!n&&(0,t.jsxs)("div",{className:"".concat(p().Main," ").concat(p().fadeTransition," ").concat(M),children:[(0,t.jsx)("nav",{className:p().navbar,children:(0,t.jsx)("button",{className:"".concat(p()["navbar__button--options"],"  ").concat(p().fadeTransition," ").concat(A),onClick:function(){O(!0)},children:(0,t.jsx)(i.G,{icon:b.gr5})})}),(0,t.jsx)("h1",{className:p().Main__title,children:"Pomodoro"}),(0,t.jsxs)("div",{className:p().Pomodoro,children:[(0,t.jsxs)("div",{className:p().Tabs,children:[(0,t.jsx)("button",{onClick:C,disabled:_,className:"".concat(p().tab," ").concat(_&&p()["session__background--tertiary"]," ").concat(p().fadeTransition),children:"Sesi\xf3n"}),(0,t.jsx)("button",{onClick:C,disabled:!_,className:"".concat(p().tab," ").concat(!_&&p()["break__background--tertiary"]," ").concat(p().fadeTransition," "),children:"Descanso"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(m,{minutes:Math.floor(v/60),seconds:v%60,isSession:_,startOrStop:function(){y?T():(w.current=setInterval(E,1e3),g(!0))}})}),(0,t.jsx)("audio",{ref:I,children:(0,t.jsx)("source",{src:"sounds/alarm-clock-01.mp3"})})]})]}),S?(0,t.jsx)(R,{children:(0,t.jsx)(G,{sessionNumber:Math.floor(l/60),breakNumber:Math.floor(u/60),saveItem:r,setSeconds:k,setModalOpened:O,started:y,setStarted:g,stopTimer:T})}):null]})},B=r(8186),W=r.n(B);function Q(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("title",{children:"Pomodoro"}),(0,t.jsx)("meta",{name:"description",content:"\xa1App Pomodoro para mejorar tu productividad!"})]}),(0,t.jsxs)("main",{children:[(0,t.jsx)(Y,{}),(0,t.jsxs)("section",{className:W().info,children:[(0,t.jsx)("h2",{className:W().info__title,children:"Pomodoro, una t\xe9cnica de estudio y concentraci\xf3n"}),(0,t.jsxs)("article",{className:W().sectionInfo,children:[(0,t.jsx)("h3",{className:W().sectionInfo__title,children:"\xbfQu\xe9 es pomodoro?"}),(0,t.jsx)("p",{children:"Pomodoro es una t\xe9cnica de gesti\xf3n de tiempo creada por Francesco Cirillo, que consiste en separar el tiempo de trabajo en intervalos de tiempo, generalmente de 25 minutos, y separados por un tiempo de descanso, en pos de aumentar la productividad y concentraci\xf3n. Adem\xe1s de eso, Pomodoro significa tomate en italiano (basado en un temporizador de cocina que el autor de esta t\xe9cnica ten\xeda)."})]}),(0,t.jsxs)("article",{className:W().sectionInfo,children:[(0,t.jsx)("h3",{className:W().sectionInfo__title,children:"\xbfQu\xe9 puede hacer esta aplicacion?"}),(0,t.jsx)("p",{children:"La aplicaci\xf3n ayuda a la ejecuci\xf3n de la t\xe9cnica Pomodoro, pudiendo alternar entre la sesi\xf3n de trabajo y el descanso. Adem\xe1s, se puede configurar cu\xe1nto dura la sesi\xf3n y el descanso. Finalmente, la p\xe1gina puede ser instalada como aplicaci\xf3n."})]}),(0,t.jsxs)("article",{className:W().sectionInfo,children:[(0,t.jsx)("h3",{className:W().sectionInfo__title,children:"\xbfPor qu\xe9 esta aplicaci\xf3n?"}),(0,t.jsxs)("p",{children:["Cuando estaba aprendiendo desarrollo web, una de las primeras aplicaciones que tuve que hacer fue la de Pomodoro. Ahora que tengo algo m\xe1s de experiencia, decid\xed que pod\xeda mejorar esa aplicaci\xf3n y generarle algo m\xe1s de valor, para poder colocarla con orgullo en mi portafolio web. Tambi\xe9n quiero destacar la genial aplicaci\xf3n"," ",(0,t.jsx)("a",{href:"https://pomofocus.io/",target:"_blank",rel:"noreferrer",children:"pomofocus"}),", de Yuya Uzu, por demostrar a lo que una aplicaci\xf3n como esta debe aspirar."]})]})]}),(0,t.jsx)(u,{})]})]})}},1240:function(e){e.exports={Counter__button:"Counter_Counter__button__AEfvt"}},3167:function(e){e.exports={Error:"Error_Error__GUG0c",Error__title:"Error_Error__title__hcWGr"}},590:function(e){e.exports={Footer:"Footer_Footer__v4Xk3",marketing:"Footer_marketing__Tithp",marketing__contacto:"Footer_marketing__contacto__zu0bi",marketing__social:"Footer_marketing__social__8Qqxy","marketing__contacto-icons":"Footer_marketing__contacto-icons__iRo5y","marketing__social-icons":"Footer_marketing__social-icons__A6YzO"}},5495:function(e){e.exports={Loading:"Loading_Loading__cz94g",Loading__title:"Loading_Loading__title__6HI3P"}},4154:function(e){e.exports={MyTextInput:"MyTextInput_MyTextInput__pNHYT",MyTextInput__input:"MyTextInput_MyTextInput__input__3AAJf"}},3193:function(e){e.exports={FormContainer:"SettingsForm_FormContainer__Pg81J",closeButton:"SettingsForm_closeButton__Dnozf",submitButton:"SettingsForm_submitButton__90vex"}},4619:function(e){e.exports={Modal:"Modal_Modal__CcAKg"}},6122:function(e){e.exports={Main:"Pomodoro_Main__po0dX",Main__title:"Pomodoro_Main__title__4fX7_",navbar:"Pomodoro_navbar__3axuC","navbar__button--options":"Pomodoro_navbar__button--options__HYD3Y",Pomodoro:"Pomodoro_Pomodoro__mHqHs",Tabs:"Pomodoro_Tabs__ZOZ9c",tab:"Pomodoro_tab__kWz15","session__background--primary":"Pomodoro_session__background--primary__UM8WX","break__background--primary":"Pomodoro_break__background--primary__wWNu3","session__background--secondary":"Pomodoro_session__background--secondary__6fOFH","break__background--secondary":"Pomodoro_break__background--secondary__Wpspf","session__background--tertiary":"Pomodoro_session__background--tertiary__voH5t","break__background--tertiary":"Pomodoro_break__background--tertiary__oGiOR",fadeTransition:"Pomodoro_fadeTransition__zyIgY"}},8186:function(e){e.exports={info:"Home_info__1UJLZ",sectionInfo:"Home_sectionInfo__Gq_t5",sectionInfo__title:"Home_sectionInfo__title__h0YSP",info__title:"Home_info__title__bnAVX"}}},function(e){e.O(0,[523,112,74,774,888,179],(function(){return n=3685,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=index-f6525aa05cdebc63.js.map