(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),o=(n(9),n(2)),r=n(1),s=n(0),i=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!1),l=Object(o.a)(i,2),j=l[0],u=l[1],b=Object(r.useState)(!1),d=Object(o.a)(b,2),m=d[0],O=d[1];Object(r.useEffect)((function(){j||console.log("Name is invalid")}),[j]);var f=!j&&m,h=f?"form-control invalid":"form-control";return Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O(!0),0!==c.trim().length?(e.onAdd(c),a("")):u(!1)},children:[Object(s.jsxs)("div",{className:h,children:[Object(s.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(s.jsx)("input",{type:"text",id:"name",onChange:function(e){a(e.target.value),u(!0)},value:c}),f&&Object(s.jsx)("p",{className:"error-text",children:"Please enter a name"})]}),Object(s.jsx)("div",{className:"form-actions",children:Object(s.jsx)("button",{children:"Submit"})})]})};var l=function(){return Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(i,{onAdd:function(e){console.log(e)}})})};a.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.be30733a.chunk.js.map