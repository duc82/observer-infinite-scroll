(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react")):typeof define=="function"&&define.amd?define(["react"],n):(e=typeof globalThis<"u"?globalThis:e||self,e["react-infinite-scroll"]=n(e.React))})(this,function(e){"use strict";return e.forwardRef(({fetchMore:i,hasMore:r,loader:m=e.createElement("p",null,"Loading..."),endMessage:p=e.createElement("p",null,"No more items to load."),threshold:o=.8,position:f="bottom",className:b,style:v,children:s},E)=>{const[u,l]=e.useState(!1),d=e.useRef(null);return e.useEffect(()=>{const t=d.current,c=new IntersectionObserver(I=>{I[0].isIntersecting&&!u&&r&&(l(!0),i())},{threshold:o});return t&&c.observe(t),()=>{t&&c.unobserve(t)}},[r,u,i,o]),e.useEffect(()=>{l(!1)},[i]),e.createElement("div",{ref:E,style:v,className:b},f==="bottom"&&s,r?e.createElement("div",{ref:d},m):p,f==="top"&&s)})});
//# sourceMappingURL=index.umd.js.map
