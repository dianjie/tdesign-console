import{N,aH as W,aI as B,i as A,j as K,d as x,f as b,u as C,Q as _,a2 as O,r as I,o as h,c as p,a as X,w as j,e as J,s as y,b as f,aJ as v,_ as $,l as M,V as Q,aK as G,F as R,R as Y,$ as Z,a0 as ee,m as te,p as H}from"./index-CEBUqFKN.js";import{u as ne}from"./useDesign-CbWcZHFZ.js";function oe(e,n){return e&&e.length?N(e,W(n)):[]}function re(e,n,c=150){const r=B(e,c),m=()=>{n&&n.immediate&&e(),window.addEventListener("resize",r)},s=()=>{window.removeEventListener("resize",r)};return A(()=>{m()}),K(()=>{s()}),[m,s]}const se=["src"],ae=x({__name:"FrameContent",props:{frameSrc:String},setup(e){const n=b(!0),c=b(window.innerHeight),r=b(),{prefixCls:m}=ne("iframe-page"),s=C(),d=_(()=>({height:`${f(c)}px`})),i=getComputedStyle(document.documentElement),w=i.getPropertyValue("--td-comp-size-xxxl"),o=i.getPropertyValue("--td-comp-paddingTB-xxl");function t(a){let u=a.clientHeight;const l=window.getComputedStyle(a);return u+=parseInt(l.marginTop,10),u+=parseInt(l.marginBottom,10),u+=parseInt(l.borderTopWidth,10),u+=parseInt(l.borderBottomWidth,10),u}function g(){const a=f(r);if(!a)return;let u=0;const{showFooter:l,isUseTabsRouter:z,showBreadcrumb:T}=s,P=parseFloat(w),k=document.querySelector(".t-tabs__nav"),L=z?t(k):0,V=document.querySelector(".t-breadcrumb"),q=T?t(V):0,D=parseFloat(o)*2,E=document.querySelector(".t-layout__footer"),U=l?t(E):0,F=P+L+q+D+U+2;c.value=window.innerHeight-F,u=document.documentElement.clientHeight-F,a.style.height=`${u}px`}function S(){n.value=!1,g()}return re(g,{immediate:!0}),O([()=>s.showFooter,()=>s.isUseTabsRouter,()=>s.showBreadcrumb],B(g,250)),(a,u)=>{const l=I("t-loading");return h(),p("div",{class:y(f(m)),style:v(d.value)},[X(l,{loading:n.value,size:"large",style:v(d.value)},{default:j(()=>[J("iframe",{ref_key:"frameRef",ref:r,src:e.frameSrc,class:y(`${f(m)}__main`),onLoad:S},null,42,se)]),_:1},8,["loading","style"])],6)}}}),ce=$(ae,[["__scopeId","data-v-fe38759a"]]);function ie(){const e=M(),{currentRoute:n}=e,{isUseTabsRouter:c}=C(),r=Q(),m=_(()=>d(G(e.getRoutes()))||[]),s=_(()=>r.tabRouters.reduce((o,t)=>(t.meta&&Reflect.has(t.meta,"frameSrc")&&o.push(t.name),o),[]));function d(o){let t=[];for(const g of o){const{meta:{frameSrc:S}={},children:a}=g;S&&t.push(g),a&&a.length&&t.push(...d(a))}return t=oe(t,"name"),t}function i(o){return o.name===f(n).name}function w(o){return f(c)?f(s).includes(o):e.currentRoute.value.name===o}return{hasRenderFrame:w,getFramePages:m,showIframe:i,getAllFramePages:d}}const ue=x({name:"FrameLayout",components:{FrameContent:ce},setup(){const{getFramePages:e,hasRenderFrame:n,showIframe:c}=ie(),r=_(()=>f(e).length>0);return{getFramePages:e,hasRenderFrame:n,showIframe:c,showFrame:r}}}),me={key:0};function de(e,n,c,r,m,s){const d=I("frame-content");return e.showFrame?(h(),p("div",me,[(h(!0),p(R,null,Y(e.getFramePages,i=>(h(),p(R,{key:i.path},[e.hasRenderFrame(i.name)?Z((h(),te(d,{key:0,"frame-src":i.meta.frameSrc},null,8,["frame-src"])),[[ee,e.showIframe(i)]]):H("",!0)],64))),128))])):H("",!0)}const ge=$(ue,[["render",de]]);export{ge as F};
