(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react")):typeof define=="function"&&define.amd?define(["react"],n):(e=typeof globalThis<"u"?globalThis:e||self,e["react-infinite-scroll"]=n(e.React))})(this,function(e){"use strict";return({fetchMore:i,hasMore:s,loader:m=e.createElement("p",null,"Loading..."),endMessage:p=e.createElement("p",null,"No more items to load."),threshold:o=.8,position:r="bottom",className:b,style:v,children:f})=>{const[u,l]=e.useState(!1),c=e.useRef(null);return e.useEffect(()=>{const t=c.current,d=new IntersectionObserver(E=>{E[0].isIntersecting&&!u&&s&&(l(!0),i())},{threshold:o});return t&&d.observe(t),()=>{t&&d.unobserve(t)}},[s,u,i,o]),e.useEffect(()=>{l(!1)},[i]),e.createElement("div",{style:v,className:b},r==="bottom"&&f,s?e.createElement("div",{ref:c},m):p,r==="top"&&f)}});
//# sourceMappingURL=index.umd.js.map