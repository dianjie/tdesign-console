import{b as p}from"./index-C3aixgX8.js";function f(t){return typeof t=="function"?t():p(t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const s=()=>{};function b(t,n){function r(...e){return new Promise((i,o)=>{Promise.resolve(t(()=>n.apply(this,e),{fn:n,thisArg:this,args:e})).then(i).catch(o)})}return r}function h(t,n={}){let r,e,i=s;const o=u=>{clearTimeout(u),i(),i=s};return u=>{const a=f(t),l=f(n.maxWait);return r&&o(r),a<=0||l!==void 0&&l<=0?(e&&(o(e),e=null),Promise.resolve(u())):new Promise((c,m)=>{i=n.rejectOnCancel?m:c,l&&!e&&(e=setTimeout(()=>{r&&o(r),e=null,c(u())},l)),r=setTimeout(()=>{e&&o(e),e=null,c(u())},a)})}}function x(t,n=200,r={}){return b(h(n,r),t)}export{x as u};