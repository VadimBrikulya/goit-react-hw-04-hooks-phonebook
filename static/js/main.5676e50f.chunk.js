(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={filterInput:"Filter_filterInput__-LfHX"}},17:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(11),r=n.n(o),i=(n(17),n(12)),s=n(2),u=n(8),l=n.n(u),b=n(4),d=n.n(b),j=n(0),m=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),o=c[0],r=c[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),l=u[0],b=u[1],m=d.a.generate(),p=d.a.generate(),f=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":b(a);break;default:return}},h=function(){r(""),b("")};return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:o,number:l}),h()},children:[Object(j.jsxs)("label",{htmlFor:m,children:["Name ",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:f,id:m})]}),Object(j.jsxs)("label",{htmlFor:p,children:["Number ",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:f,id:p})]}),Object(j.jsx)("div",{style:{marginTop:"10px"},children:Object(j.jsx)("button",{type:"submit",disabled:!o||!l,children:"add contact"})})]})},p=n(9),f=n.n(p),h=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(j.jsxs)("li",{className:f.a.box,children:[Object(j.jsxs)("p",{children:[a,":",c]}),Object(j.jsx)("button",{className:f.a.btn,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},x=n(10),O=n.n(x),v=function(e){var t=e.value,n=e.onChange;return Object(j.jsx)("label",{className:O.a.label,children:Object(j.jsx)("input",{className:O.a.filterInput,placeholder:"Find contacts by name",type:"text",value:t,onChange:n})})},g=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(s.a)(n,2),o=c[0],r=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[e,o]),[o,r]},C=function(){var e=g("contacts",[]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),r=Object(s.a)(o,2),u=r[0],b=r[1],p=function(e,t){var n={id:d.a.generate(),name:e,number:t};console.log(n),c((function(e){return[n].concat(Object(i.a)(e))}))};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:l.a.App,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{onSubmit:function(e){var t=e.name,a=e.number;n.find((function(e){var n;return(null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(null===t||void 0===t?void 0:t.toLowerCase()))?alert("".concat(e.name,"  already exist")):p(t,a)}))}})]}),Object(j.jsxs)("div",{className:l.a.contactBox,children:[Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(v,{value:u,onChange:function(e){return b(e.toLowerCase())}}),Object(j.jsx)(h,{contacts:n.filter((function(e){var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(u)})),onDeleteContact:function(e){c(n.filter((function(t){return t.id!==e})))}})]})]})};n(27);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={App:"App_App__2T6yf",contactBox:"App_contactBox__3VhIY"}},9:function(e,t,n){e.exports={btn:"ContactList_btn__3Nqk0",box:"ContactList_box__uavSz"}}},[[28,1,2]]]);
//# sourceMappingURL=main.5676e50f.chunk.js.map