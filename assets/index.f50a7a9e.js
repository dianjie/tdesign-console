import{d as o,c as p,j as _,f as i,i as d,_ as l}from"./index.c2521a03.js";const u=o({__name:"index",setup(f){const{currentRoute:n,replace:s}=p(),{params:e,query:a}=_(n),{path:r,_redirect_type:c="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return s(c==="name"?{name:t,query:a,params:e}:{path:t.startsWith("/")?t:`/${t}`,query:a}),(m,y)=>(i(),d("div"))}}),x=l(u,[["__file","D:/Study/tdesign-console/src/pages/redirect/index.vue"]]);export{x as default};