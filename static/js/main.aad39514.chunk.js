(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t.n(a),l=(t(9),t(1)),i=t(3),u=function(e){var n=Object(l.useState)(""),t=Object(i.a)(n,2),a=t[0],r=t[1],u=Object(l.useState)(!1),c=Object(i.a)(u,2),s=c[0],o=c[1],d=e(a);return{value:a,isValid:d,hasError:!d&&s,valueChangeHandler:function(e){r(e.target.value)},inputBlurHandler:function(e){o(!0)},reset:function(){r(""),o(!1)}}},c=t(0),s=function(e){var n=u((function(e){return""!==e.trim()})),t=n.value,a=n.isValid,r=n.hasError,l=n.valueChangeHandler,i=n.inputBlurHandler,s=n.reset,d=u((function(e){return e.includes("@")})),b=d.value,j=d.isValid,v=d.hasError,p=d.valueChangeHandler,m=d.inputBlurHandler,h=d.reset,f=!1;a&&j&&(f=!0);var x=r?"form-control invalid":"form-control",O=v?"form-control invalid":"form-control";return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a&&(s(),h())},children:[Object(c.jsx)(o,{inputClasses:x,inputChangeHandler:l,inputBlurHandler:i,value:t,label:"Your Name",invalid:r,invalidText:"Please enter a name"}),Object(c.jsx)(o,{inputClasses:O,inputChangeHandler:p,inputBlurHandler:m,value:b,label:"Your Email",invalid:v,invalidText:"Please enter a correct email"}),Object(c.jsx)("div",{className:"form-actions",children:Object(c.jsx)("button",{disabled:!f,children:"Submit"})})]})},o=function(e){return Object(c.jsxs)("div",{className:e.inputClasses,children:[Object(c.jsx)("label",{htmlFor:e.label.replace(/\s+/g,""),children:e.label}),Object(c.jsx)("input",{type:"text",id:e.label.replace(/\s+/g,""),onChange:e.inputChangeHandler,onBlur:e.inputBlurHandler,value:e.value}),e.invalid&&Object(c.jsx)("p",{className:"error-text",children:e.invalidText})]})};var d=function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsx)(s,{onAdd:function(e){console.log(e)}})})};r.a.render(Object(c.jsx)(d,{}),document.getElementById("root"))},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.aad39514.chunk.js.map