import{aa as me,ab as ve,ac as ge,ad as ye,ae as be,af as xe,ag as we,ah as ke,ai as Ce,aj as Se,ak as Fe,al as $e,d as j,c as Z,am as Re,an as K,e as f,f as n,g as v,w as t,n as B,j as e,p as M,m as D,i as R,H as W,F as P,l as o,t as N,v as Ee,x as Be,_ as q,ao as te,r as J,C as F,J as ne,K as se,q as H,I as G,ap as De,aq as Q,y as z,u as ie,ar as Le,B as ue,as as Ae,at as Te,au as He,a3 as X,a2 as ee,av as Me,Q as Ne,a as de,aw as je,ax as qe,k as Ie}from"./index.8ed3877a.js";import{d as Oe}from"./dayjs.min.5a105466.js";import{L as pe,T as Pe}from"./assets-logo-full.c34358ec.js";import{p as E}from"./useDesign.9d0ca2bc.js";import{u as Ue}from"./index.74383c1c.js";import{F as ze}from"./index.2ae4f88e.js";import"./index.a5dd2dce.js";var Ge="[object Map]",Ve="[object Set]",Ze=Object.prototype,Ke=Ze.hasOwnProperty;function We(c){if(c==null)return!0;if(me(c)&&(ve(c)||typeof c=="string"||typeof c.splice=="function"||ge(c)||ye(c)||be(c)))return!c.length;var g=xe(c);if(g==Ge||g==Ve)return!c.size;if(we(c))return!ke(c).length;for(var i in c)if(Ke.call(c,i))return!1;return!0}var Ye=Ce(function(c){return Se(Fe(c,1,$e,!0))});const Je=Ye,oe=c=>(Ee("data-v-5e116835"),c=c(),Be(),c),Qe={class:"header-msg"},Xe={class:"header-msg-top"},et=oe(()=>B("p",null,"\u901A\u77E5\u4E2D\u5FC3",-1)),tt={class:"msg-content"},ot={class:"msg-type"},nt={class:"msg-time"},st={key:1,class:"empty-list"},at=oe(()=>B("img",{src:"https://tdesign.gtimg.com/pro-template/personal/nothing.png",alt:"\u7A7A"},null,-1)),ct=oe(()=>B("p",null,"\u6682\u65E0\u901A\u77E5",-1)),rt=[at,ct],lt={class:"header-msg-bottom"},it=j({__name:"Notice",setup(c){const g=Z(),i=Re(),{msgData:u,unreadMsg:a}=K(i),d=(k,x)=>{const r=u.value;k==="all"?r.forEach(s=>{s.status=!1}):r.forEach(s=>{s.id===(x==null?void 0:x.id)&&(s.status=!1)}),i.setMsgData(r)},m=()=>{g.push("/detail/secondary")};return(k,x)=>{const r=f("t-button"),s=f("t-list-item"),b=f("t-list"),C=f("t-icon"),y=f("t-badge"),p=f("t-popup");return n(),v(p,{"expand-animation":"",placement:"bottom-right",trigger:"click"},{content:t(()=>[B("div",Qe,[B("div",Xe,[et,e(a).length>0?(n(),v(r,{key:0,class:"clear-btn",variant:"text",theme:"primary",onClick:x[0]||(x[0]=S=>d("all"))},{default:t(()=>[M("\u6E05\u7A7A")]),_:1})):D("v-if",!0)]),e(a).length>0?(n(),v(b,{key:0,class:"narrow-scrollbar",split:!1},{default:t(()=>[(n(!0),R(P,null,W(e(a),(S,l)=>(n(),v(s,{key:l},{action:t(()=>[o(r,{size:"small",variant:"outline",onClick:_=>d("radio",S)},{default:t(()=>[M(" \u8BBE\u4E3A\u5DF2\u8BFB ")]),_:2},1032,["onClick"])]),default:t(()=>[B("div",null,[B("p",tt,N(S.content),1),B("p",ot,N(S.type),1)]),B("p",nt,N(S.date),1)]),_:2},1024))),128))]),_:1})):(n(),R("div",st,rt)),B("div",lt,[e(a).length>0?(n(),v(r,{key:0,class:"header-msg-bottom-link",variant:"text",theme:"default",block:"",onClick:m},{default:t(()=>[M("\u67E5\u770B\u5168\u90E8")]),_:1})):D("v-if",!0)])])]),default:t(()=>[o(y,{count:e(a).length,offset:[4,4]},{default:t(()=>[o(r,{theme:"default",shape:"square",variant:"text"},{default:t(()=>[o(C,{name:"mail"})]),_:1})]),_:1},8,["count"])]),_:1})}}});const ut=q(it,[["__scopeId","data-v-5e116835"],["__file","D:/Study/tdesign-console/src/layouts/components/Notice.vue"]]),dt={class:"my-autocomplete"},pt=["onClick"],_t={class:"title"},ht={class:"title__name"},ft={class:"addr"},mt={style:{"text-align":"center",padding:"8px"}},vt=j({__name:"SelectSearch",props:{layout:String},setup(c){const g=c,i=te(),{backMenuList:u}=K(i),a=J(""),d=J(!1),m=F(()=>g.layout==="side"),k=h=>{d.value=h},x=h=>{const A=[];function T(O){O.forEach(L=>{We(L.children)?A.push(L):T(L.children)})}return T(h),A},r=F(()=>x(u.value)),s=F(()=>a.value?r.value.filter(h=>h.title.includes(a.value)):r.value),b=h=>h.path.match(/(http|https):\/\/([\w.]+\/?)\S*/),C=h=>{var A;return(A=h.meta)!=null&&A.single?h.redirect:h.path},y=h=>h.icon&&typeof h.icon=="string",p=h=>De(h.icon)&&typeof h.icon.render=="function"?{can:!0,render:h.icon.render}:{can:!1,render:null},S=h=>{h&&window.open(h)},l=Z(),_=h=>{const A=b(h);if(A)S(A[0]);else{const T=C(h);l.push({path:T})}d.value=!1,a.value=void 0},w=Ue(h=>{a.value=h},500),$=()=>{a.value=void 0};return(h,A)=>{const T=f("t-icon"),O=f("t-select-input");return n(),R("div",{class:H({"header-menu-search":e(m),"header-menu-search-left":!e(m)})},[o(O,{value:a.value,"popup-visible":d.value,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",borderless:!0,"allow-input":"",clearable:"","popup-props":{overlayInnerClassName:["narrow-scrollbar"],overlayInnerStyle:{maxHeight:"280px",overflowY:"auto",overscrollBehavior:"contain"}},onPopupVisibleChange:k,onClear:$,onInputChange:e(w)},{label:t(()=>[o(T,{class:"icon",name:"search",size:"20",style:{"margin-right":"6px"}})]),panel:t(()=>[ne(B("ul",dt,[(n(!0),R(P,null,W(e(s),(L,V)=>(n(),R("li",{key:`${L.name}${V}`,onClick:Y=>_(L)},[B("div",_t,[y(L)?(n(),v(T,{key:0,class:"title__icon",name:L.icon},null,8,["name"])):p(L).can?(n(),v(G(p(L).render),{key:1,class:"title__icon"})):D("v-if",!0),B("span",ht,N(L.title),1)]),B("div",ft,[B("span",null,N(L.path),1)])],8,pt))),128))],512),[[se,e(s).length&&d.value]]),ne(B("div",mt,"\u6682\u65E0\u6570\u636E",512),[[se,!e(s).length&&d.value]])]),_:1},8,["value","popup-visible","onInputChange"])],2)}}});const ae=q(vt,[["__scopeId","data-v-f3e9b835"],["__file","D:/Study/tdesign-console/src/layouts/components/SelectSearch.vue"]]),gt=j({__name:"MenuContent",props:{navData:{type:Array,default:()=>[]}},setup(c){const g=c,i=F(()=>Q()),u=F(()=>{const{navData:r}=g;return d(r)}),a=r=>typeof r.icon=="string"?o(f("t-icon"),{name:r.icon},null):r.icon,d=r=>!r||r.length===0?[]:(r.sort((s,b)=>{var C,y;return(((C=s.meta)==null?void 0:C.orderNo)||0)-(((y=b.meta)==null?void 0:y.orderNo)||0)}),r.map(s=>{var b,C;return{path:s.path,title:(b=s.meta)==null?void 0:b.title,icon:(C=s.meta)==null?void 0:C.icon,children:d(s.children),meta:s.meta,redirect:s.redirect}}).filter(s=>s.meta&&s.meta.hidden!==!0)),m=r=>{const{frameSrc:s,frameBlank:b}=r.meta;return s&&b?s.match(/(http|https):\/\/([\w.]+\/?)\S*/):null},k=r=>{var s;return i.value.startsWith(r.path)?i.value:(s=r.meta)!=null&&s.single?r.redirect:r.path},x=r=>{window.open(r)};return(r,s)=>{const b=f("t-menu-item"),C=f("menu-content",!0),y=f("t-submenu");return n(),R("div",null,[(n(!0),R(P,null,W(e(u),p=>{var S;return n(),R(P,{key:p.path},[!p.children||!p.children.length||((S=p.meta)==null?void 0:S.single)?(n(),R(P,{key:0},[m(p)?(n(),v(b,{key:0,name:p.path,value:k(p),onClick:l=>x(m(p)[0])},{icon:t(()=>[(n(),v(G(a(p)),{class:"t-icon"}))]),default:t(()=>[M(" "+N(p.title),1)]),_:2},1032,["name","value","onClick"])):(n(),v(b,{key:1,name:p.path,value:k(p),to:p.path},{icon:t(()=>[(n(),v(G(a(p)),{class:"t-icon"}))]),default:t(()=>[M(" "+N(p.title),1)]),_:2},1032,["name","value","to"]))],64)):(n(),v(y,{key:1,name:p.path,value:p.path,title:p.title},{icon:t(()=>[(n(),v(G(a(p)),{class:"t-icon"}))]),default:t(()=>[p.children?(n(),v(C,{key:0,"nav-data":p.children},null,8,["nav-data"])):D("v-if",!0)]),_:2},1032,["name","value","title"]))],64)}),128))])}}}),_e=q(gt,[["__file","D:/Study/tdesign-console/src/layouts/components/MenuContent.vue"]]),yt={key:1,class:"header-operate-left"},bt={class:"operations-container"},xt={class:"header-user-account"},wt=j({__name:"Header",props:{theme:{type:String,default:"light"},layout:{type:String,default:"top"},showLogo:{type:Boolean,default:!0},menu:{type:Array,default:()=>[]},isFixed:{type:Boolean,default:!1},isCompact:{type:Boolean,default:!1},maxLevel:{type:Number,default:3}},setup(c){const g=c,i=Z(),u=z(),a=ie(),d=()=>{u.updateConfig({showSettingPanel:!0})},m=F(()=>Q()),k=F(()=>[`${E}-header-layout`]),x=F(()=>{const{isFixed:l,layout:_,isCompact:w}=g;return[{[`${E}-header-menu`]:!l,[`${E}-header-menu-fixed`]:l,[`${E}-header-menu-fixed-side`]:_==="side"&&l,[`${E}-header-menu-fixed-side-compact`]:_==="side"&&l&&w}]}),r=F(()=>g.theme),s=()=>{u.updateConfig({isSidebarCompact:!u.isSidebarCompact})},b=l=>{i.push(l)},C=()=>{a.logout(!0)},y=()=>{window.open("https://github.com/dianjie/tdesign-console")},p=()=>{window.open("https://github.com/dianjie/tdesign-console")},S=F(()=>a.avatar);return(l,_)=>{const w=f("t-icon"),$=f("t-button"),h=f("t-tooltip"),A=f("t-dropdown-item"),T=f("t-dropdown-menu"),O=f("t-avatar"),L=f("t-dropdown"),V=f("t-head-menu");return n(),R("div",{class:H(e(k))},[o(V,{class:H(e(x)),theme:e(r),"expand-type":"popup",value:e(m)},Le({logo:t(()=>[c.showLogo?(n(),R("span",{key:0,class:"header-logo-container",onClick:_[0]||(_[0]=Y=>b(e(ue)))},[o(e(pe),{class:"t-logo"})])):(n(),R("div",yt,[o($,{theme:"default",shape:"square",variant:"text",onClick:s},{default:t(()=>[o(w,{class:"collapsed-icon",name:"view-list"})]),_:1}),o(ae,{layout:c.layout},null,8,["layout"])]))]),operations:t(()=>[B("div",bt,[D(" \u641C\u7D22\u6846 "),c.layout!=="side"?(n(),v(ae,{key:0,layout:c.layout},null,8,["layout"])):D("v-if",!0),D(" \u5168\u5C40\u901A\u77E5 "),o(ut),o(h,{placement:"bottom",content:"\u4EE3\u7801\u4ED3\u5E93"},{default:t(()=>[o($,{theme:"default",shape:"square",variant:"text",onClick:y},{default:t(()=>[o(w,{name:"logo-github"})]),_:1})]),_:1}),o(h,{placement:"bottom",content:"\u5E2E\u52A9\u6587\u6863"},{default:t(()=>[o($,{theme:"default",shape:"square",variant:"text",onClick:p},{default:t(()=>[o(w,{name:"help-circle"})]),_:1})]),_:1}),o(L,{"min-column-width":135,trigger:"click"},{dropdown:t(()=>[o(T,null,{default:t(()=>[o(A,{class:"operations-dropdown-container-item",onClick:_[1]||(_[1]=Y=>b(e(Ae)))},{default:t(()=>[o(w,{name:"user-circle"}),M("\u4E2A\u4EBA\u4E2D\u5FC3 ")]),_:1}),o(A,{class:"operations-dropdown-container-item",onClick:C},{default:t(()=>[o(w,{name:"poweroff"}),M("\u9000\u51FA\u767B\u5F55 ")]),_:1})]),_:1})]),default:t(()=>[o($,{class:"header-user-btn",theme:"default",variant:"text"},{icon:t(()=>[o(O,{image:e(S),size:"small",class:"header-user-avatar"},null,8,["image"])]),suffix:t(()=>[o(w,{name:"chevron-down"})]),default:t(()=>[B("div",xt,N(e(a).account),1)]),_:1})]),_:1}),o(h,{placement:"bottom",content:"\u7CFB\u7EDF\u8BBE\u7F6E"},{default:t(()=>[o($,{theme:"default",shape:"square",variant:"text",onClick:d},{default:t(()=>[o(w,{name:"setting"})]),_:1})]),_:1})])]),_:2},[c.layout!=="side"?{name:"default",fn:t(()=>[o(_e,{class:"header-menu","nav-data":c.menu},null,8,["nav-data"])]),key:"0"}:void 0]),1032,["class","theme","value"])],2)}}});const kt=q(wt,[["__scopeId","data-v-8a4f310f"],["__file","D:/Study/tdesign-console/src/layouts/components/Header.vue"]]),Ct=j({__name:"LayoutHeader",setup(c){const g=te(),i=z(),{backMenuList:u}=K(g),a=F(()=>i.layout==="mix"?i.splitMenu?u.value.map(d=>({...d,children:[]})):[]:u.value);return(d,m)=>e(i).showHeader?(n(),v(kt,{key:0,"show-logo":e(i).showHeaderLogo,theme:e(i).displayMode,layout:e(i).layout,"is-fixed":e(i).isHeaderFixed,menu:e(a),"is-compact":e(i).isSidebarCompact},null,8,["show-logo","theme","layout","is-fixed","menu","is-compact"])):D("v-if",!0)}}),ce=q(Ct,[["__file","D:/Study/tdesign-console/src/layouts/components/LayoutHeader.vue"]]),St=j({__name:"Content",setup(c){const g=F(()=>{const u=X(),{tabRouters:a}=u;return a.filter(d=>d.isAlive).map(d=>d.name)}),i=F(()=>{const u=X(),{refreshing:a}=u;return a});return(u,a)=>{const d=f("router-view");return n(),R(P,null,[e(i)?D("v-if",!0):(n(),v(d,{key:0},{default:t(({Component:m})=>[o(He,{name:"fade",mode:"out-in"},{default:t(()=>[(n(),v(Te,{include:e(g)},[(n(),v(G(m)))],1032,["include"]))]),_:2},1024)]),_:1})),o(ze)],64)}}});const Ft=q(St,[["__scopeId","data-v-1a02c475"],["__file","D:/Study/tdesign-console/src/layouts/components/Content.vue"]]),$t=j({__name:"Breadcrumb",setup(c){const g=F(()=>{const i=ee(),u=i.path.split("/");return u.shift(),u.reduce((d,m,k)=>{var x,r,s,b,C;return((r=(x=i.matched[k])==null?void 0:x.meta)==null?void 0:r.hiddenBreadcrumb)||Object.values(i.params).includes(m)||d.push({path:m,to:d[k-1]?`/${d[k-1].path}/${m}`:`/${m}`,title:(C=(b=(s=i.matched[k])==null?void 0:s.meta)==null?void 0:b.title)!=null?C:m}),d},[])});return(i,u)=>{const a=f("t-breadcrumbItem"),d=f("t-breadcrumb");return n(),v(d,{"max-item-width":"150",class:"tdesign-breadcrumb"},{default:t(()=>[(n(!0),R(P,null,W(e(g),m=>(n(),v(a,{key:m.to,to:m.to},{default:t(()=>[M(N(m.title),1)]),_:2},1032,["to"]))),128))]),_:1})}}});const Rt=q($t,[["__scopeId","data-v-c280699b"],["__file","D:/Study/tdesign-console/src/layouts/components/Breadcrumb.vue"]]),Et=j({__name:"Footer",setup(c){return(g,i)=>(n(),R("div",{class:H(e(E)+"-footer")},"Copyright \xA9 2021-"+N(new Date().getFullYear())+" Tencent. All Rights Reserved",3))}});const Bt=q(Et,[["__scopeId","data-v-72672ba0"],["__file","D:/Study/tdesign-console/src/layouts/components/Footer.vue"]]),Dt=j({__name:"LayoutContent",setup(c){const g=ee(),i=Z(),u=z(),a=X(),d=F(()=>a.tabRouters.filter(l=>l.isAlive||l.isHome)),m=J(""),k=l=>{const{tabRouters:_}=a,w=_.find($=>$.path===l);i.push({path:l,query:w.query})},x=({value:l,index:_})=>{const{tabRouters:w}=a,$=w[_+1]||w[_-1];a.subtractCurrentTabRouter({path:l,routeIdx:_}),l===g.path&&i.push({path:$.path,query:$.query})},r=(l,_)=>{a.toggleTabRouterAlive(_),Me(()=>{a.toggleTabRouterAlive(_),i.replace({path:l.path,query:l.query})}),m.value=null},s=(l,_)=>{a.subtractTabRouterAhead({path:l,routeIdx:_}),y("ahead",_)},b=(l,_)=>{a.subtractTabRouterBehind({path:l,routeIdx:_}),y("behind",_)},C=(l,_)=>{a.subtractTabRouterOther({path:l,routeIdx:_}),y("other",_)},y=(l,_)=>{const w=i.currentRoute.value.path,{tabRouters:$}=a,h=$.findIndex(T=>T.path===w);if(l==="other"&&h!==_||l==="ahead"&&h<_||l==="behind"&&h===-1){const T=l==="behind"?$.length-1:1,O=$[T];i.push({path:O.path,query:O.query})}m.value=null},p=(l,_,w)=>{_.trigger==="document"&&(m.value=null),l&&(m.value=w)},S=l=>{const{tabRouters:_}=a;[_[l.currentIndex],_[l.targetIndex]]=[_[l.targetIndex],_[l.currentIndex]]};return(l,_)=>{const w=f("t-icon"),$=f("t-dropdown-item"),h=f("t-dropdown-menu"),A=f("t-dropdown"),T=f("t-tab-panel"),O=f("t-tabs"),L=f("t-content"),V=f("t-footer"),Y=f("t-layout");return n(),v(Y,{class:H(`${e(E)}-layout`)},{default:t(()=>[e(u).isUseTabsRouter?(n(),v(O,{key:0,"drag-sort":"",theme:"card",class:H(`${e(E)}-layout-tabs-nav`),value:l.$route.path,style:{position:"sticky",top:0,width:"100%"},onChange:k,onRemove:x,onDragSort:S},{default:t(()=>[(n(!0),R(P,null,W(e(d),(I,U)=>(n(),v(T,{key:`${I.path}_${U}`,value:I.path,removable:!I.isHome},{label:t(()=>[o(A,{trigger:"context-menu","min-column-width":128,"popup-props":{overlayClassName:"route-tabs-dropdown",onVisibleChange:(he,fe)=>p(he,fe,I.path),visible:m.value===I.path}},{dropdown:t(()=>[o(h,null,{default:t(()=>[o($,{onClick:()=>r(I,U)},{default:t(()=>[o(w,{name:"refresh"}),M(" \u5237\u65B0 ")]),_:2},1032,["onClick"]),U>1?(n(),v($,{key:0,onClick:()=>s(I.path,U)},{default:t(()=>[o(w,{name:"arrow-left"}),M(" \u5173\u95ED\u5DE6\u4FA7 ")]),_:2},1032,["onClick"])):D("v-if",!0),U<e(d).length-1?(n(),v($,{key:1,onClick:()=>b(I.path,U)},{default:t(()=>[o(w,{name:"arrow-right"}),M(" \u5173\u95ED\u53F3\u4FA7 ")]),_:2},1032,["onClick"])):D("v-if",!0),e(d).length>2?(n(),v($,{key:2,onClick:()=>C(I.path,U)},{default:t(()=>[o(w,{name:"close-circle"}),M(" \u5173\u95ED\u5176\u5B83 ")]),_:2},1032,["onClick"])):D("v-if",!0)]),_:2},1024)]),default:t(()=>[I.isHome?(n(),v(w,{key:1,name:"home"})):(n(),R(P,{key:0},[M(N(I.title),1)],64))]),_:2},1032,["popup-props"])]),_:2},1032,["value","removable"]))),128))]),_:1},8,["class","value"])):D("v-if",!0),o(L,{class:H(`${e(E)}-content-layout`)},{default:t(()=>[e(u).showBreadcrumb?(n(),v(Rt,{key:0})):D("v-if",!0),o(Ft)]),_:1},8,["class"]),e(u).showFooter?(n(),v(V,{key:1,class:H(`${e(E)}-footer-layout`)},{default:t(()=>[o(Bt)]),_:1},8,["class"])):D("v-if",!0)]),_:1},8,["class"])}}}),re=q(Dt,[["__file","D:/Study/tdesign-console/src/layouts/components/LayoutContent.vue"]]),Lt="tdesign-console",At="0.7.2",Tt={"dev:mock":"vite --open --mode mock",dev:"vite --open --mode development","dev:linux":"vite --mode development","build:mock":"vite build --mode mock","build:test":"vite build --mode test",build:"vue-tsc --noEmit && vite build --mode release",preview:"vite preview","type-check":"vue-tsc --noEmit",lint:"eslint --ext .vue,.js,.jsx,.ts,.tsx ./ --max-warnings 0","lint:fix":"eslint --ext .vue,.js,jsx,.ts,.tsx ./ --max-warnings 0 --fix",stylelint:"stylelint src/**/*.{html,vue,sass,less}","stylelint:fix":"stylelint --fix src/**/*.{html,vue,vss,sass,less}",prepare:"husky install","site:preview":"npm run build && cp -r dist _site",test:'echo "no test specified,work in process"',"test:coverage":'echo "no test:coverage specified,work in process"',"gh-pages":"gh-pages -d dist"},Ht={"@vueuse/core":"^9.3.0",axios:"^1.2.6","crypto-js":"^4.1.1",dayjs:"^1.11.7",echarts:"^5.4.0","lodash-es":"^4.17.21",nprogress:"^0.2.0",pinia:"^2.0.28","pinia-plugin-persistedstate":"^3.0.2","qrcode.vue":"^3.3.3",qs:"^6.11.0","tdesign-icons-vue-next":"^0.1.7","tdesign-vue-next":"^1.0.8","tvision-color":"^1.5.0",vue:"^3.2.45","vue-clipboard3":"^2.0.0","vue-router":"~4.1.6"},Mt={"@commitlint/cli":"^17.3.0","@commitlint/config-conventional":"^17.3.0","@types/crypto-js":"^4.1.1","@types/echarts":"^4.9.10","@types/lodash-es":"^4.17.6","@types/qs":"^6.9.7","@types/ws":"^8.5.3","@typescript-eslint/eslint-plugin":"^5.47.1","@typescript-eslint/parser":"^5.47.1","@vitejs/plugin-vue":"^3.2.0","@vitejs/plugin-vue-jsx":"^1.1.7","@vue/compiler-sfc":"^3.2.45","@vue/eslint-config-typescript":"^11.0.2",commitizen:"^4.2.4","cz-conventional-changelog":"^3.3.0",eslint:"^8.30.0","eslint-config-airbnb-base":"^15.0.0","eslint-config-prettier":"^8.5.0","eslint-plugin-import":"^2.26.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.8.0","eslint-plugin-vue-scoped-css":"^2.2.0","gh-pages":"^5.0.0",husky:"^8.0.2",less:"^4.1.3","lint-staged":"^13.1.0",mockjs:"^1.1.0","postcss-html":"^1.5.0","postcss-less":"^6.0.0",prettier:"^2.8.1",stylelint:"~14.13.0","stylelint-config-prettier":"~9.0.4","stylelint-config-recommended":"^9.0.0","stylelint-config-recommended-vue":"^1.4.0","stylelint-less":"^1.0.6","stylelint-order":"^5.0.0",typescript:"~4.9.4",vite:"^3.0.3","vite-plugin-mock":"^2.9.6","vite-svg-loader":"^4.0.0","vue-tsc":"^1.0.19"},Nt={commitizen:{path:"./node_modules/cz-conventional-changelog"}},jt="Base on tdesign-starter-cli",qt={name:Lt,version:At,scripts:Tt,dependencies:Ht,devDependencies:Mt,config:Nt,"lint-staged":{"*.{js,jsx,vue,ts,tsx}":["eslint --max-warnings 0 --fix","prettier --write"],"*.{html,vue,vss,sass,less}":["stylelint --fix"]},description:jt},It={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 32 32"},Ot=Ne('<g clip-path="url(#a)"><path fill="url(#b)" d="M9.14 8.252h-5.6a.561.561 0 0 1-.553-.66l.89-5.146A.544.544 0 0 1 4.414 2h5.792L9.14 8.252Z"></path><path fill="url(#c)" d="M13.03 21.473H6.778l2.34-13.226h6.252l-2.34 13.226Z"></path><path fill="url(#d)" d="M11.47 27.724H6.343a.566.566 0 0 1-.553-.655l.994-5.583h6.238l-1.025 5.793a.543.543 0 0 1-.525.445Z"></path><path fill="url(#e)" d="M26.666 8.252H9.141l1.105-6.239H27.58a.566.566 0 0 1 .552.66L27.22 7.82a.535.535 0 0 1-.553.432Z"></path></g><defs><linearGradient id="b" x1="2.717" x2="10.062" y1="5.128" y2="4.981" gradientUnits="userSpaceOnUse"><stop stop-color="#0062FF"></stop><stop offset=".26" stop-color="#006AFF"></stop><stop offset=".68" stop-color="#0081FF"></stop><stop offset="1" stop-color="#0097FF"></stop></linearGradient><linearGradient id="c" x1="12.383" x2="9.123" y1="7.623" y2="22.042" gradientUnits="userSpaceOnUse"><stop stop-color="#0097FF"></stop><stop offset=".32" stop-color="#0081FF"></stop><stop offset=".74" stop-color="#006AFF"></stop><stop offset="1" stop-color="#0062FF"></stop></linearGradient><linearGradient id="d" x1="5.631" x2="12.858" y1="27.363" y2="21.473" gradientUnits="userSpaceOnUse"><stop stop-color="#009EFF"></stop><stop offset=".31" stop-color="#00A3FF"></stop><stop offset=".71" stop-color="#00B3FF"></stop><stop offset="1" stop-color="#00C3FF"></stop></linearGradient><linearGradient id="e" x1="8.849" x2="27.94" y1="5.128" y2="4.746" gradientUnits="userSpaceOnUse"><stop offset=".03" stop-color="#ECFFFE"></stop><stop offset=".19" stop-color="#AFF1D9"></stop><stop offset=".34" stop-color="#79E5B9"></stop><stop offset=".49" stop-color="#4EDB9F"></stop><stop offset=".63" stop-color="#2CD48A"></stop><stop offset=".77" stop-color="#14CE7C"></stop><stop offset=".89" stop-color="#05CB73"></stop><stop offset="1" stop-color="#00CA70"></stop></linearGradient><clipPath id="a"><path fill="#fff" d="M2.978 2h25.14v25.72H2.979z"></path></clipPath></defs>',2),Pt=[Ot];function Ut(c,g){return n(),R("svg",It,Pt)}const zt={render:Ut},Gt={class:"version-container"},Vt=j({__name:"SideNav",props:{menu:{type:Array,default:()=>[]},showLogo:{type:Boolean,default:!0},isFixed:{type:Boolean,default:!0},layout:{type:String,default:""},headerHeight:{type:String,default:"64px"},theme:{type:String,default:"light"},isCompact:{type:Boolean,default:!1}},setup(c){const g=c,i=992-1,u=F(()=>z().isSidebarCompact),a=F(()=>Q()),d=F(()=>{const y=Q(),p=y.substring(0,y.lastIndexOf("/")),S=je();return Je(S,p===""?[]:[p])}),m=F(()=>{const{isCompact:y}=g;return[`${E}-sidebar-layout`,{[`${E}-sidebar-compact`]:y}]}),k=F(()=>{const{showLogo:y,isFixed:p,layout:S}=g;return[`${E}-side-nav`,{[`${E}-side-nav-no-logo`]:!y,[`${E}-side-nav-no-fixed`]:!p,[`${E}-side-nav-mix-fixed`]:S==="mix"&&p}]}),x=Z(),r=z(),s=()=>{const y=window.innerWidth<=i;r.updateConfig({isSidebarCompact:y})};de(()=>{s(),window.onresize=()=>{s()}});const b=()=>{x.push(ue)},C=()=>u.value?zt:pe;return(y,p)=>{const S=f("t-menu");return n(),R("div",{class:H(e(m))},[o(S,{class:H(e(k)),theme:c.theme,value:e(a),collapsed:e(u),"default-expanded":e(d)},{logo:t(()=>[c.showLogo?(n(),R("span",{key:0,class:H(`${e(E)}-side-nav-logo-wrapper`),onClick:b},[(n(),v(G(C()),{class:H(`${e(E)}-side-nav-logo-${e(u)?"t":"tdesign"}-logo`)},null,8,["class"]))],2)):D("v-if",!0)]),operations:t(()=>[B("span",Gt,N(e(u)?"":"TDesign Starter")+" "+N(e(qt).version),1)]),default:t(()=>[o(_e,{"nav-data":c.menu},null,8,["nav-data"])]),_:1},8,["class","theme","value","collapsed","default-expanded"]),B("div",{class:H(`${e(E)}-side-nav-placeholder${e(u)?"-hidden":""}`)},null,2)],2)}}}),Zt=q(Vt,[["__file","D:/Study/tdesign-console/src/layouts/components/SideNav.vue"]]),Kt=j({__name:"LayoutSideNav",setup(c){const g=ee(),i=te(),u=z(),{backMenuList:a}=K(i),d=F(()=>{const{layout:m,splitMenu:k}=u;let x=a.value;return m==="mix"&&k&&x.forEach(r=>{g.path.indexOf(r.path)===0&&(x=r.children.map(s=>({...s,path:`${r.path}/${s.path}`})))}),x});return(m,k)=>e(u).showSidebar?(n(),v(Zt,{key:0,"show-logo":e(u).showSidebarLogo,layout:e(u).layout,"is-fixed":e(u).isSidebarFixed,menu:e(d),theme:e(u).displayMode,"is-compact":e(u).isSidebarCompact},null,8,["show-logo","layout","is-fixed","menu","theme","is-compact"])):D("v-if",!0)}}),le=q(Kt,[["__file","D:/Study/tdesign-console/src/layouts/components/LayoutSideNav.vue"]]);const Wt=j({__name:"index",setup(c){const g=ee(),i=z(),u=X(),a=K(i),d=F(()=>[{"t-layout--with-sider":i.showSidebar}]),m=()=>{const{path:s,query:b,meta:{title:C},name:y}=g;u.appendTabRouterList({path:s,query:b,title:C,name:y,meta:g.meta,isAlive:!0})},k=J(!1),x=ie(),r=()=>{setInterval(async()=>{const s=x.getTokenTime;if(!s)return;Oe().diff(s,"second")>=Ie.tokenTime&&!k.value&&(k.value=!0,await x.handleRefreshToken(),k.value=!1,console.log("token\u5237\u65B0\u6210\u529F"))},1e4)};return de(()=>{m(),r()}),qe(()=>g.path,()=>{m(),document.querySelector(`.${E}-layout`).scrollTo({top:0,behavior:"smooth"})}),(s,b)=>{const C=f("t-aside"),y=f("t-header"),p=f("t-content"),S=f("t-layout");return n(),R("div",null,[e(a).layout.value==="side"?(n(),v(S,{key:"side",class:H(e(d))},{default:t(()=>[o(C,null,{default:t(()=>[o(le)]),_:1}),o(S,null,{default:t(()=>[o(y,null,{default:t(()=>[o(ce)]),_:1}),o(p,null,{default:t(()=>[o(re)]),_:1})]),_:1})]),_:1},8,["class"])):(n(),v(S,{key:"no-side"},{default:t(()=>[o(y,null,{default:t(()=>[o(ce)]),_:1}),o(S,{class:H(e(d))},{default:t(()=>[o(le),o(re)]),_:1},8,["class"])]),_:1})),o(Pe)])}}}),no=q(Wt,[["__file","D:/Study/tdesign-console/src/layouts/index.vue"]]);export{no as default};
