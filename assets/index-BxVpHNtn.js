import{R as _}from"./index-BhEQYMgh.js";import{d as i,R as p,o as u,c as m,v as h,f as d,r as b,n as g,w as c,e as t,a,s as v,y as f,z as w}from"./index-C3aixgX8.js";const y=["src"],x=i({__name:"index",props:{url:String,type:{type:String,default:"layout"}},setup(e){const n=e,o=p(()=>{const{type:s}=n;return["thumbnail-container",{"thumbnail-circle":s==="circle","thumbnail-layout":s==="layout"}]});return(s,V)=>(u(),m("img",{class:h(o.value),src:e.url},null,10,y))}}),l=d(x,[["__scopeId","data-v-4f65a3b0"]]),r=e=>(f("data-v-e118bd5e"),e=e(),w(),e),B={class:"result-slot-container"},C={class:"recommend-container"},I=r(()=>t("div",null,"TDesign Starter 推荐以下主流浏览器",-1)),S={class:"recommend-browser"},k=r(()=>t("div",null,"Chrome",-1)),N=r(()=>t("div",null,"QQ Browser",-1)),R={name:"ResultBrowserIncompatible"},T=i({...R,setup(e){return(n,o)=>{const s=b("t-button");return u(),g(_,{title:"浏览器不兼容",type:"ie",tip:"抱歉，您正在使用的浏览器版本过低，无法打开当前网页。"},{default:c(()=>[t("div",B,[a(s,{class:"result-button",onClick:o[0]||(o[0]=()=>n.$router.push("/"))},{default:c(()=>[v("返回首页")]),_:1}),t("div",C,[I,t("div",S,[t("div",null,[a(l,{class:"browser-icon",url:"https://tdesign.gtimg.com/starter/result-page/chorme.png"}),k]),t("div",null,[a(l,{class:"browser-icon",url:"https://tdesign.gtimg.com/starter/result-page/qq-browser.png"}),N])])])])]),_:1})}}}),z=d(T,[["__scopeId","data-v-e118bd5e"]]);export{z as default};