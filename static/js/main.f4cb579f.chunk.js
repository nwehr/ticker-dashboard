(this.webpackJsonptdash=this.webpackJsonptdash||[]).push([[0],{98:function(t,e,n){},99:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(49),s=n.n(r),o=n(3),i=n(2),u=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],r=Object(c.useCallback)((function(t){a(t.currentTarget.value)}),[]),s=Object(c.useCallback)((function(t){t.preventDefault(),localStorage.setItem("finnhub_api_token",n),window.location.reload()}),[n]);return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:s,className:"token",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("a",{href:"https://finnhub.io/",children:"Finnhub"})," API Token"]}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"text",onChange:r})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"submit",value:"Submit"})})]})})},l=function(){var t=function(t,e){var n=Object(c.useState)(null),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var n=localStorage.getItem(t);null===n&&localStorage.setItem(t,e),n=localStorage.getItem(t),s(n)}),[t,e]),{value:r,setValue:function(e){localStorage.setItem(t,e),s(e)}}}("finnhub_symbols","AAPL, NVDA"),e=t.value,n=t.setValue;return{symbols:null===e||void 0===e?void 0:e.split(",").map((function(t){return t.trim()})),setSymbols:function(t){n(t.map((function(t){return t.trim()})).join(", "))}}},b=function(t){var e=t.symbols,n=t.setSymbols,a=Object(c.useState)(!0),r=Object(o.a)(a,2),s=r[0],u=r[1],l=Object(c.useState)([]),b=Object(o.a)(l,2),j=b[0],f=b[1];Object(c.useEffect)((function(){e&&s&&(console.log("symbols",e),f(e),u(!1))}),[e,s]);return Object(i.jsx)("div",{className:"symbols-editor",children:Object(i.jsx)("form",{onSubmit:function(t){t.preventDefault(),n(j)},children:Object(i.jsx)("input",{type:"text",value:j.join(","),onChange:function(t){var e=t.currentTarget.value.split(",");f(e)}})})})},j=n(29),f=n(6),h=n.n(f),O=n(10),d=n(13),m=n.n(d),p=n(51),v=n.n(p),g=[],x=function(t,e){g.push({url:t,callback:e})},y=function(){var t=Object(O.a)(h.a.mark((function t(){var e,n,c,a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!g.length){t.next=8;break}return e=g.shift(),n=e.url,c=e.callback,t.next=4,v.a.get(n);case 4:a=t.sent,r=a.data,console.log(n),c(r);case 8:setTimeout(y,1e3);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(t){var e=function(t){var e=Object(c.useState)(""),n=Object(o.a)(e,2),a=n[0],r=n[1],s=Object(c.useState)(0),i=Object(o.a)(s,2),u=i[0],l=i[1],b=Object(c.useState)(0),j=Object(o.a)(b,2),f=j[0],p=j[1],v=Object(c.useState)([]),g=Object(o.a)(v,2),y=g[0],S=g[1],k=Object(c.useState)(0),w=Object(o.a)(k,2),I=w[0],N=w[1],C=Object(c.useState)(0),T=Object(o.a)(C,2),D=T[0],_=T[1],E=Object(c.useCallback)(function(){var e=Object(O.a)(h.a.mark((function e(n){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c="https://finnhub.io/api/v1/stock/profile2?symbol=".concat(t,"&token=").concat(n),x(c,(function(t){r(t.name)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),F=Object(c.useCallback)(function(){var e=Object(O.a)(h.a.mark((function e(n){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c="https://finnhub.io/api/v1/quote?symbol=".concat(t,"&token=").concat(n),x(c,(function(t){var e=t.c,n=t.c-t.o,c=Object(d.now)();l(e),p(n),N(c)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),A=Object(c.useCallback)(function(){var e=Object(O.a)(h.a.mark((function e(n){var c,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=m()().unix(),a=m()().subtract(6,"months").unix(),r="https://finnhub.io/api/v1/stock/candle?symbol=".concat(t,"&token=").concat(n,"&resolution=D&from=").concat(a,"&to=").concat(c),x(r,(function(t){var e=[];if(t.c)for(var n=0;n<t.c.length;n++)e.push({x:n+1,y:t.c[n]});S(e),_(Object(d.now)())}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(c.useEffect)((function(){console.log("dependencies:",[t,E,F,A]);var e=localStorage.getItem("finnhub_api_token");E(e),F(e),A(e);var n=setInterval((function(){F(e)}),3e4),c=setInterval((function(){A(e)}),3e5);return function(){clearInterval(n),clearInterval(c)}}),[t,E,F,A]),{name:a,current:u,change:f,chartData:y,quoteUpdatedTime:I,chartUpdatedTime:D}}(t.symbol),n=e.name,a=e.current,r=e.change,s=e.chartData,u=Object(c.useState)(a),l=Object(o.a)(u,2),b=l[0],f=l[1],p=Object(c.useState)(0),v=Object(o.a)(p,2),g=v[0],y=v[1],S=Object(c.useState)("widget"),k=Object(o.a)(S,2),w=k[0],I=k[1];return Object(c.useEffect)((function(){a!==b&&y(a-b),f(a)}),[a,b]),Object(c.useEffect)((function(){I(g<0?"widget blink-red":"widget blink-green");var t=setTimeout((function(){I("widget")}),1e3);return function(){clearTimeout(t)}}),[g]),Object(i.jsxs)("div",{className:w,children:[Object(i.jsxs)("div",{className:"grid-container",children:[Object(i.jsxs)("div",{className:"profile",children:[Object(i.jsx)("h3",{children:t.symbol}),Object(i.jsx)("p",{children:n})]}),Object(i.jsxs)("div",{className:"quote",children:[Object(i.jsx)("h3",{children:a}),Object(i.jsx)("p",{className:r<0?"red":"green",children:Math.round(100*r)/100})]})]}),s.length?Object(i.jsx)("div",{className:"chart",children:Object(i.jsx)(j.b,{width:300,height:80,margin:0,style:{fill:"none"},children:Object(i.jsx)(j.a,{strokeWidth:2,color:s[s.length-1].y-s[0].y<0?"#dc322f":"#859900",data:s})})}):null]})},k=function(){var t=l(),e=t.symbols,n=t.setSymbols;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{symbols:e,setSymbols:n}),Object(i.jsx)("div",{className:"widget-list",children:null===e||void 0===e?void 0:e.map((function(t){return Object(i.jsx)(S,{symbol:t},t)}))})]})},w=function(){return localStorage.getItem("finnhub_api_token")?Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(k,{})}):Object(i.jsx)(u,{})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};n(98);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),y(),I()}},[[99,1,2]]]);
//# sourceMappingURL=main.f4cb579f.chunk.js.map