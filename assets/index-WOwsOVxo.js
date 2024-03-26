import{d as ve}from"./dayjs.min-DdJFB__8.js";import{z as ge,A as ye,C as be,D as we,E as xe,G as ke,H as Ce,I as Se,J as $e,K as Re,L as Fe,N as Te,O as Le,P as Ae,d as q,Q as L,r as f,o,m as g,w as e,c as S,R as Y,F as P,q as E,t as N,S as V,_ as W,T as Be,U,p as H,a as t,V as Z,s as j,b as v,u as z,f as G,l as J,W as Me,X as He,Y as Q,e as T,x as je,y as De,Z as ee,$ as ne,a0 as se,a1 as Ee,k as ie,a2 as te,a3 as Ne,B as ue,a4 as qe,a5 as pe,a6 as Oe,i as de,a7 as Pe,n as Ie}from"./index-CEBUqFKN.js";import{p as F}from"./useDesign-CbWcZHFZ.js";import{F as ze}from"./index-ClXC1QG_.js";import{L as he,_ as Ue}from"./page-config.vue_vue_type_style_index_0_lang-COUZNwH_.js";import{u as Ge}from"./index-BPVHnpx-.js";var Ve="[object Boolean]";function Ke(n){return n===!0||n===!1||ge(n)&&ye(n)==Ve}var Ye="[object Map]",We="[object Set]",Je=Object.prototype,Qe=Je.hasOwnProperty;function Xe(n){if(n==null)return!0;if(be(n)&&(we(n)||typeof n=="string"||typeof n.splice=="function"||xe(n)||ke(n)||Ce(n)))return!n.length;var y=Se(n);if(y==Ye||y==We)return!n.size;if($e(n))return!Re(n).length;for(var l in n)if(Qe.call(n,l))return!1;return!0}function Ze(n){return n===void 0}var et=Fe(function(n){return Te(Le(n,1,Ae,!0))});const tt=q({__name:"Breadcrumb",setup(n){const y=L(()=>{const l=V(),p=l.path.split("/");return p.shift(),p.reduce((i,u,b)=>{var r,h,w;const a=(r=l.matched[b])==null?void 0:r.meta;return a!=null&&a.hiddenBreadcrumb||Object.values(l.params).includes(u)||i.push({path:u,to:i[b-1]?`/${i[b-1].path}/${u}`:`/${u}`,title:((w=(h=l.matched[b])==null?void 0:h.meta)==null?void 0:w.title)??u}),i},[])});return(l,p)=>{const s=f("t-breadcrumbItem"),i=f("t-breadcrumb");return o(),g(i,{"max-item-width":"150",class:"tdesign-breadcrumb"},{default:e(()=>[(o(!0),S(P,null,Y(y.value,u=>(o(),g(s,{key:u.to,to:u.to},{default:e(()=>[E(N(u.title),1)]),_:2},1032,["to"]))),128))]),_:1})}}}),ot=W(tt,[["__scopeId","data-v-e3e9c388"]]),nt=q({__name:"Content",setup(n){const y=L(()=>{const p=Z(),{tabRouters:s}=p;return s.filter(i=>{var a;const u=(a=i.meta)==null?void 0:a.keepAlive,b=Ze(u)||Ke(u)&&u;return i.isAlive&&b}).map(i=>i.name)}),l=L(()=>{const p=Z(),{refreshing:s}=p;return s});return(p,s)=>{const i=f("router-view");return o(),S(P,null,[l.value?H("",!0):(o(),g(i,{key:0},{default:e(({Component:u})=>[(o(),g(Be,{include:y.value},[(o(),g(U(u)))],1032,["include"]))]),_:1})),t(ze)],64)}}}),st=q({__name:"Footer",setup(n){return(y,l)=>(o(),S("div",{class:j(v(F)+"-footer")},"Copyright © 2021-"+N(new Date().getFullYear())+" Tencent. All Rights Reserved",3))}}),at=W(st,[["__scopeId","data-v-244838c5"]]),ae=q({__name:"LayoutContent",setup(n){const y=V(),l=J(),p=z(),s=Z(),i=L(()=>s.tabRouters.filter(d=>d.isAlive||d.isHome)),u=G(""),b=d=>{const{tabRouters:m}=s,x=m.find(C=>C.path===d);l.push({path:d,query:x.query})},a=d=>{const{tabRouters:m}=s,x=m[d.index+1]||m[d.index-1];s.subtractCurrentTabRouter({path:d.value,routeIdx:d.index}),d.value===y.path&&l.push({path:x.path,query:x.query})},r=(d,m)=>{s.toggleTabRouterAlive(m),Me(()=>{s.toggleTabRouterAlive(m),l.replace({path:d.path,query:d.query})}),u.value=null},h=(d,m)=>{s.subtractTabRouterAhead({path:d,routeIdx:m}),c("ahead",m)},w=(d,m)=>{s.subtractTabRouterBehind({path:d,routeIdx:m}),c("behind",m)},$=(d,m)=>{s.subtractTabRouterOther({path:d,routeIdx:m}),c("other",m)},c=(d,m)=>{const x=l.currentRoute.value.path,{tabRouters:C}=s,_=C.findIndex(B=>B.path===x);if(d==="other"&&_!==m||d==="ahead"&&_<m||d==="behind"&&_===-1){const B=d==="behind"?C.length-1:1,O=C[B];l.push({path:O.path,query:O.query})}u.value=null},R=(d,m,x)=>{m.trigger==="document"&&(u.value=null),d&&(u.value=x)},k=d=>{const{tabRouters:m}=s;[m[d.currentIndex],m[d.targetIndex]]=[m[d.targetIndex],m[d.currentIndex]]};return(d,m)=>{const x=f("t-icon"),C=f("t-dropdown-item"),_=f("t-dropdown-menu"),A=f("t-dropdown"),B=f("t-tab-panel"),O=f("t-tabs"),M=f("t-content"),K=f("t-footer"),X=f("t-layout");return o(),g(X,{class:j(`${v(F)}-layout`)},{default:e(()=>[v(p).isUseTabsRouter?(o(),g(O,{key:0,"drag-sort":"",theme:"card",class:j(`${v(F)}-layout-tabs-nav`),value:d.$route.path,style:{position:"sticky",top:0,width:"100%"},onChange:b,onRemove:a,onDragSort:k},{default:e(()=>[(o(!0),S(P,null,Y(i.value,(D,I)=>(o(),g(B,{key:`${D.path}_${I}`,value:D.path,removable:!D.isHome,draggable:!D.isHome},{label:e(()=>[t(A,{trigger:"context-menu","min-column-width":128,"popup-props":{overlayClassName:"route-tabs-dropdown",onVisibleChange:(me,fe)=>R(me,fe,D.path),visible:u.value===D.path}},{dropdown:e(()=>[t(_,null,{default:e(()=>[t(C,{onClick:()=>r(D,I)},{default:e(()=>[t(x,{name:"refresh"}),E(" 刷新 ")]),_:2},1032,["onClick"]),I>1?(o(),g(C,{key:0,onClick:()=>h(D.path,I)},{default:e(()=>[t(x,{name:"arrow-left"}),E(" 关闭左侧 ")]),_:2},1032,["onClick"])):H("",!0),I<i.value.length-1?(o(),g(C,{key:1,onClick:()=>w(D.path,I)},{default:e(()=>[t(x,{name:"arrow-right"}),E(" 关闭右侧 ")]),_:2},1032,["onClick"])):H("",!0),i.value.length>2?(o(),g(C,{key:2,onClick:()=>$(D.path,I)},{default:e(()=>[t(x,{name:"close-circle"}),E(" 关闭其它 ")]),_:2},1032,["onClick"])):H("",!0)]),_:2},1024)]),default:e(()=>[D.isHome?(o(),g(x,{key:1,name:"home"})):(o(),S(P,{key:0},[E(N(D.title),1)],64))]),_:2},1032,["popup-props"])]),_:2},1032,["value","removable","draggable"]))),128))]),_:1},8,["class","value"])):H("",!0),t(M,{class:j(`${v(F)}-content-layout`)},{default:e(()=>[v(p).showBreadcrumb?(o(),g(ot,{key:0})):H("",!0),t(nt)]),_:1},8,["class"]),v(p).showFooter?(o(),g(K,{key:1,class:j(`${v(F)}-footer-layout`)},{default:e(()=>[t(at)]),_:1},8,["class"])):H("",!0)]),_:1},8,["class"])}}}),_e=q({__name:"MenuContent",props:{navData:{type:Array,default:()=>[]}},setup(n){const y=n,l=L(()=>{const{navData:a}=y;return s(a)}),p=a=>typeof a.icon=="string"?t(f("t-icon"),{name:a.icon},null):a.icon,s=a=>!a||a.length===0?[]:(a.sort((r,h)=>{var w,$;return(((w=r.meta)==null?void 0:w.orderNo)||0)-((($=h.meta)==null?void 0:$.orderNo)||0)}),a.map(r=>{var h,w;return{path:r.path,title:(h=r.meta)==null?void 0:h.title,icon:(w=r.meta)==null?void 0:w.icon,children:s(r.children),meta:r.meta,redirect:r.redirect}}).filter(r=>r.meta&&r.meta.hidden!==!0)),i=a=>{const{frameSrc:r,frameBlank:h}=a.meta;return r&&h?r.match(/(http|https):\/\/([\w.]+\/?)\S*/):null},u=a=>{var r;return(r=a.meta)!=null&&r.single?a.redirect:a.path},b=a=>{window.open(a)};return(a,r)=>{const h=f("t-menu-item"),w=f("menu-content",!0),$=f("t-submenu");return o(),S("div",null,[(o(!0),S(P,null,Y(l.value,c=>{var R;return o(),S(P,{key:c.path},[!c.children||!c.children.length||(R=c.meta)!=null&&R.single?(o(),S(P,{key:0},[i(c)?(o(),g(h,{key:0,name:c.path,value:u(c),onClick:k=>b(i(c)[0])},{icon:e(()=>[(o(),g(U(p(c)),{class:"t-icon"}))]),default:e(()=>[E(" "+N(c.title),1)]),_:2},1032,["name","value","onClick"])):(o(),g(h,{key:1,name:c.path,value:u(c),to:c.path},{icon:e(()=>[(o(),g(U(p(c)),{class:"t-icon"}))]),default:e(()=>[E(" "+N(c.title),1)]),_:2},1032,["name","value","to"]))],64)):(o(),g($,{key:1,name:c.path,value:c.path,title:c.title},{icon:e(()=>[(o(),g(U(p(c)),{class:"t-icon"}))]),default:e(()=>[c.children?(o(),g(w,{key:0,"nav-data":c.children},null,8,["nav-data"])):H("",!0)]),_:2},1032,["name","value","title"]))],64)}),128))])}}}),oe=n=>(je("data-v-e657e3e6"),n=n(),De(),n),rt={class:"header-msg"},ct={class:"header-msg-top"},lt=oe(()=>T("p",null,"通知中心",-1)),it={class:"msg-content"},ut={class:"msg-type"},pt={class:"msg-time"},dt={key:1,class:"empty-list"},ht=oe(()=>T("img",{src:"https://tdesign.gtimg.com/pro-template/personal/nothing.png",alt:"空"},null,-1)),_t=oe(()=>T("p",null,"暂无通知",-1)),mt=[ht,_t],ft={class:"header-msg-bottom"},vt=q({__name:"Notice",setup(n){const y=J(),l=He(),{msgData:p,unreadMsg:s}=Q(l),i=(b,a)=>{const r=p.value;b==="all"?r.forEach(h=>{h.status=!1}):r.forEach(h=>{h.id===(a==null?void 0:a.id)&&(h.status=!1)}),l.setMsgData(r)},u=()=>{y.push("/detail/secondary")};return(b,a)=>{const r=f("t-button"),h=f("t-list-item"),w=f("t-list"),$=f("t-icon"),c=f("t-badge"),R=f("t-popup");return o(),g(R,{"expand-animation":"",placement:"bottom-right",trigger:"click"},{content:e(()=>[T("div",rt,[T("div",ct,[lt,v(s).length>0?(o(),g(r,{key:0,class:"clear-btn",variant:"text",theme:"primary",onClick:a[0]||(a[0]=k=>i("all"))},{default:e(()=>[E("清空")]),_:1})):H("",!0)]),v(s).length>0?(o(),g(w,{key:0,class:"narrow-scrollbar",split:!1},{default:e(()=>[(o(!0),S(P,null,Y(v(s),(k,d)=>(o(),g(h,{key:d},{action:e(()=>[t(r,{size:"small",variant:"outline",onClick:m=>i("radio",k)},{default:e(()=>[E(" 设为已读 ")]),_:2},1032,["onClick"])]),default:e(()=>[T("div",null,[T("p",it,N(k.content),1),T("p",ut,N(k.type),1)]),T("p",pt,N(k.date),1)]),_:2},1024))),128))]),_:1})):(o(),S("div",dt,mt)),T("div",ft,[v(s).length>0?(o(),g(r,{key:0,class:"header-msg-bottom-link",variant:"text",theme:"default",block:"",onClick:u},{default:e(()=>[E("查看全部")]),_:1})):H("",!0)])])]),default:e(()=>[t(c,{count:v(s).length,offset:[4,4]},{default:e(()=>[t(r,{theme:"default",shape:"square",variant:"text"},{default:e(()=>[t($,{name:"mail"})]),_:1})]),_:1},8,["count"])]),_:1})}}}),gt=W(vt,[["__scopeId","data-v-e657e3e6"]]),yt={class:"my-autocomplete"},bt=["onClick"],wt={class:"title"},xt={class:"title__name"},kt={class:"addr"},Ct={style:{"text-align":"center",padding:"8px"}},St=q({__name:"SelectSearch",props:{layout:String},setup(n){const y=n,l=ee(),{backMenuList:p}=Q(l),s=G(""),i=G(!1),u=L(()=>y.layout==="side"),b=_=>{i.value=_},a=_=>{const A=[];function B(O){O.forEach(M=>{Xe(M.children)?A.push(M):B(M.children)})}return B(_),A},r=L(()=>a(p.value)),h=L(()=>s.value?r.value.filter(_=>_.title.includes(s.value)):r.value),w=_=>_.path.match(/(http|https):\/\/([\w.]+\/?)\S*/),$=_=>{var A;return(A=_.meta)!=null&&A.single?_.redirect:_.path},c=_=>_.icon&&typeof _.icon=="string",R=_=>Ee(_.icon)&&typeof _.icon.render=="function"?{can:!0,render:_.icon.render}:{can:!1,render:null},k=_=>{_&&window.open(_)},d=J(),m=_=>{const A=w(_);if(A)k(A[0]);else{const B=$(_);d.push({path:B})}i.value=!1,s.value=void 0},x=Ge(_=>{s.value=_},500),C=()=>{s.value=void 0};return(_,A)=>{const B=f("t-icon"),O=f("t-select-input");return o(),S("div",{class:j({"header-menu-search":u.value,"header-menu-search-left":!u.value})},[t(O,{value:s.value,"popup-visible":i.value,placeholder:"请输入搜索内容",borderless:!0,"allow-input":"",clearable:"","popup-props":{overlayInnerClassName:["narrow-scrollbar"],overlayInnerStyle:{maxHeight:"280px",overflowY:"auto",overscrollBehavior:"contain"}},onPopupVisibleChange:b,onClear:C,onInputChange:v(x)},{label:e(()=>[t(B,{class:"icon",name:"search",size:"20",style:{"margin-right":"6px"}})]),panel:e(()=>[ne(T("ul",yt,[(o(!0),S(P,null,Y(h.value,(M,K)=>(o(),S("li",{key:`${M.name}${K}`,onClick:X=>m(M)},[T("div",wt,[c(M)?(o(),g(B,{key:0,class:"title__icon",name:M.icon},null,8,["name"])):R(M).can?(o(),g(U(R(M).render),{key:1,class:"title__icon"})):H("",!0),T("span",xt,N(M.title),1)]),T("div",kt,[T("span",null,N(M.path),1)])],8,bt))),128))],512),[[se,h.value.length&&i.value]]),ne(T("div",Ct,"暂无数据",512),[[se,!h.value.length&&i.value]])]),_:1},8,["value","popup-visible","onInputChange"])],2)}}}),re=W(St,[["__scopeId","data-v-c8b02533"]]),$t={key:1,class:"header-operate-left"},Rt={class:"operations-container"},Ft={class:"header-user-account"},Tt=q({__name:"Header",props:{theme:{type:String,default:"light"},layout:{type:String,default:"top"},showLogo:{type:Boolean,default:!0},menu:{type:Array,default:()=>[]},isFixed:{type:Boolean,default:!1},isCompact:{type:Boolean,default:!1},maxLevel:{type:Number,default:3}},setup(n){const y=n,l=J(),p=z(),s=ie(),i=()=>{p.updateConfig({showSettingPanel:!0})},u=V(),b=G("");te(()=>u.path,()=>{b.value=pe(u)},{immediate:!0});const a=L(()=>[`${F}-header-layout`]),r=L(()=>{const{isFixed:m,layout:x,isCompact:C}=y;return[{[`${F}-header-menu`]:!m,[`${F}-header-menu-fixed`]:m,[`${F}-header-menu-fixed-side`]:x==="side"&&m,[`${F}-header-menu-fixed-side-compact`]:x==="side"&&m&&C}]}),h=L(()=>y.theme),w=()=>{p.updateConfig({isSidebarCompact:!p.isSidebarCompact})},$=m=>{l.push(m)},c=()=>{s.logout(!0)},R=()=>{window.open("https://github.com/dianjie/tdesign-console")},k=()=>{window.open("https://github.com/dianjie/tdesign-console")},d=L(()=>s.avatar);return(m,x)=>{const C=f("t-icon"),_=f("t-button"),A=f("t-tooltip"),B=f("t-dropdown-item"),O=f("t-dropdown-menu"),M=f("t-avatar"),K=f("t-dropdown"),X=f("t-head-menu");return o(),S("div",{class:j(a.value)},[t(X,{class:j(r.value),theme:h.value,"expand-type":"popup",value:b.value},Ne({logo:e(()=>[n.showLogo?(o(),S("span",{key:0,class:"header-logo-container",onClick:x[0]||(x[0]=D=>$(v(ue)))},[t(v(he),{class:"t-logo"})])):(o(),S("div",$t,[t(_,{theme:"default",shape:"square",variant:"text",onClick:w},{default:e(()=>[t(C,{class:"collapsed-icon",name:"view-list"})]),_:1}),t(re,{layout:n.layout},null,8,["layout"])]))]),operations:e(()=>[T("div",Rt,[n.layout!=="side"?(o(),g(re,{key:0,layout:n.layout},null,8,["layout"])):H("",!0),t(gt),t(A,{placement:"bottom",content:"代码仓库"},{default:e(()=>[t(_,{theme:"default",shape:"square",variant:"text",onClick:R},{default:e(()=>[t(C,{name:"logo-github"})]),_:1})]),_:1}),t(A,{placement:"bottom",content:"帮助文档"},{default:e(()=>[t(_,{theme:"default",shape:"square",variant:"text",onClick:k},{default:e(()=>[t(C,{name:"help-circle"})]),_:1})]),_:1}),t(K,{"min-column-width":135,trigger:"click"},{dropdown:e(()=>[t(O,null,{default:e(()=>[t(B,{class:"operations-dropdown-container-item",onClick:x[1]||(x[1]=D=>$(v(qe)))},{default:e(()=>[t(C,{name:"user-circle"}),E("个人中心 ")]),_:1}),t(B,{class:"operations-dropdown-container-item",onClick:c},{default:e(()=>[t(C,{name:"poweroff"}),E("退出登录 ")]),_:1})]),_:1})]),default:e(()=>[t(_,{class:"header-user-btn",theme:"default",variant:"text"},{icon:e(()=>[t(M,{image:d.value,size:"small",class:"header-user-avatar"},null,8,["image"])]),suffix:e(()=>[t(C,{name:"chevron-down"})]),default:e(()=>[T("div",Ft,N(v(s).account),1)]),_:1})]),_:1}),t(A,{placement:"bottom",content:"系统设置"},{default:e(()=>[t(_,{theme:"default",shape:"square",variant:"text",onClick:i},{default:e(()=>[t(C,{name:"setting"})]),_:1})]),_:1})])]),_:2},[n.layout!=="side"?{name:"default",fn:e(()=>[t(_e,{class:"header-menu","nav-data":n.menu},null,8,["nav-data"])]),key:"0"}:void 0]),1032,["class","theme","value"])],2)}}}),Lt=W(Tt,[["__scopeId","data-v-2c838329"]]),ce=q({__name:"LayoutHeader",setup(n){const y=ee(),l=z(),{backMenuList:p}=Q(y),s=L(()=>l.layout==="mix"?l.splitMenu?p.value.map(i=>({...i,children:[]})):[]:p.value);return(i,u)=>v(l).showHeader?(o(),g(Lt,{key:0,"show-logo":v(l).showHeaderLogo,theme:v(l).displayMode,layout:v(l).layout,"is-fixed":v(l).isHeaderFixed,menu:s.value,"is-compact":v(l).isSidebarCompact},null,8,["show-logo","theme","layout","is-fixed","menu","is-compact"])):H("",!0)}}),At={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 32 32"},Bt=Oe('<g clip-path="url(#a)"><path fill="url(#b)" d="M9.14 8.252h-5.6a.56.56 0 0 1-.553-.66l.89-5.146A.544.544 0 0 1 4.414 2h5.792z"></path><path fill="url(#c)" d="M13.03 21.473H6.778l2.34-13.226h6.252z"></path><path fill="url(#d)" d="M11.47 27.725H6.343a.566.566 0 0 1-.553-.656l.994-5.583h6.238l-1.025 5.793a.54.54 0 0 1-.525.445"></path><path fill="url(#e)" d="M26.666 8.252H9.141l1.105-6.239H27.58a.566.566 0 0 1 .552.66L27.22 7.82a.535.535 0 0 1-.553.432"></path></g><defs><linearGradient id="b" x1="2.717" x2="10.062" y1="5.128" y2="4.981" gradientUnits="userSpaceOnUse"><stop stop-color="#0062FF"></stop><stop offset=".26" stop-color="#006AFF"></stop><stop offset=".68" stop-color="#0081FF"></stop><stop offset="1" stop-color="#0097FF"></stop></linearGradient><linearGradient id="c" x1="12.383" x2="9.123" y1="7.623" y2="22.042" gradientUnits="userSpaceOnUse"><stop stop-color="#0097FF"></stop><stop offset=".32" stop-color="#0081FF"></stop><stop offset=".74" stop-color="#006AFF"></stop><stop offset="1" stop-color="#0062FF"></stop></linearGradient><linearGradient id="d" x1="5.631" x2="12.858" y1="27.363" y2="21.473" gradientUnits="userSpaceOnUse"><stop stop-color="#009EFF"></stop><stop offset=".31" stop-color="#00A3FF"></stop><stop offset=".71" stop-color="#00B3FF"></stop><stop offset="1" stop-color="#00C3FF"></stop></linearGradient><linearGradient id="e" x1="8.849" x2="27.94" y1="5.128" y2="4.746" gradientUnits="userSpaceOnUse"><stop offset=".03" stop-color="#ECFFFE"></stop><stop offset=".19" stop-color="#AFF1D9"></stop><stop offset=".34" stop-color="#79E5B9"></stop><stop offset=".49" stop-color="#4EDB9F"></stop><stop offset=".63" stop-color="#2CD48A"></stop><stop offset=".77" stop-color="#14CE7C"></stop><stop offset=".89" stop-color="#05CB73"></stop><stop offset="1" stop-color="#00CA70"></stop></linearGradient><clipPath id="a"><path fill="#fff" d="M2.978 2h25.14v25.72H2.979z"></path></clipPath></defs>',2),Mt=[Bt];function Ht(n,y){return o(),S("svg",At,[...Mt])}const jt={render:Ht},Dt="tdesign-console",Et="0.9.0",Nt="module",qt={"dev:mock":"vite --open --mode mock",dev:"vite --open --mode development","dev:linux":"vite --mode development","build:mock":"vite build --mode mock","build:test":"vite build --mode test",build:"vue-tsc --noEmit && vite build --mode release",preview:"vite preview","type-check":"vue-tsc --noEmit",lint:"eslint --ext .vue,.js,.jsx,.ts,.tsx ./ --max-warnings 0","lint:fix":"eslint --ext .vue,.js,jsx,.ts,.tsx ./ --max-warnings 0 --fix",stylelint:"stylelint src/**/*.{html,vue,sass,less}","stylelint:fix":"stylelint --fix src/**/*.{html,vue,css,sass,less}",prepare:"husky install","site:preview":"npm run build && cp -r dist _site",test:'echo "no test specified,work in process"',"test:coverage":'echo "no test:coverage specified,work in process"',"gh-pages":"gh-pages -d dist"},Ot={"@vueuse/core":"^10.7.2",axios:"^1.6.2","crypto-js":"^4.1.1",dayjs:"^1.11.10",echarts:"5.1.2","lodash-es":"^4.17.21",nprogress:"^0.2.0",pinia:"^2.1.7","pinia-plugin-persistedstate":"^3.2.0","qrcode.vue":"^3.4.1",qs:"^6.11.2","tdesign-icons-vue-next":"^0.2.2","tdesign-vue-next":"^1.8.1","tvision-color":"^1.6.0",vue:"^3.4.21","vue-clipboard3":"^2.0.0","vue-i18n":"^9.9.1","vue-router":"~4.2.4"},Pt={"@commitlint/cli":"^18.6.0","@commitlint/config-conventional":"^18.6.0","@types/crypto-js":"^4.1.1","@types/echarts":"^4.9.21","@types/lodash-es":"^4.17.6","@types/nprogress":"^0.2.3","@types/qs":"^6.9.11","@typescript-eslint/eslint-plugin":"^6.21.0","@typescript-eslint/parser":"^6.11.0","@vitejs/plugin-vue":"^5.0.4","@vitejs/plugin-vue-jsx":"^3.0.2","@vue/compiler-sfc":"^3.3.8","@vue/eslint-config-typescript":"^12.0.0",commitizen:"^4.3.0","cz-conventional-changelog":"^3.3.0",eslint:"^8.56.0","eslint-config-airbnb-base":"^15.0.0","eslint-config-prettier":"^9.0.0","eslint-plugin-import":"^2.29.1","eslint-plugin-prettier":"^5.1.3","eslint-plugin-simple-import-sort":"^12.0.0","eslint-plugin-vue":"^9.21.1","eslint-plugin-vue-scoped-css":"^2.7.2","gh-pages":"^5.0.0",husky:"^9.0.10",less:"^4.2.0","lint-staged":"^15.2.2","postcss-html":"^1.6.0","postcss-less":"^6.0.0",prettier:"^3.2.5",stylelint:"~16.2.1","stylelint-config-standard":"^36.0.0","stylelint-order":"~6.0.4",typescript:"~5.3.3",vite:"^5.1.0","vite-plugin-mock":"^3.0.1","vite-svg-loader":"^5.1.0","vue-tsc":"^1.8.27"},It={commitizen:{path:"./node_modules/cz-conventional-changelog"}},zt="Base on tdesign-starter-cli",Ut={node:">=18.0.0"},Gt={name:Dt,version:Et,type:Nt,scripts:qt,dependencies:Ot,devDependencies:Pt,config:It,"lint-staged":{"*.{js,jsx,vue,ts,tsx}":["eslint --max-warnings 0 --fix","prettier --write"],"*.{html,vue,vss,sass,less}":["stylelint --fix"]},description:zt,engines:Ut},Vt={class:"version-container"},Kt=991,Yt=q({__name:"SideNav",props:{menu:{type:Array,default:()=>[]},showLogo:{type:Boolean,default:!0},isFixed:{type:Boolean,default:!0},layout:{type:String,default:""},headerHeight:{type:String,default:"64px"},theme:{type:String,default:"light"},isCompact:{type:Boolean,default:!1}},setup(n){const y=n,l=L(()=>z().isSidebarCompact),p=V(),s=G("");te(()=>p.path,()=>{s.value=pe(p)},{immediate:!0});const i=L(()=>{const c=s.value,R=c.substring(0,c.lastIndexOf("/")),k=Pe();return et(k,R===""?[]:[R])}),u=L(()=>{const{isCompact:c}=y;return[`${F}-sidebar-layout`,{[`${F}-sidebar-compact`]:c}]}),b=L(()=>{const{showLogo:c,isFixed:R,layout:k}=y;return[`${F}-side-nav`,{[`${F}-side-nav-no-logo`]:!c,[`${F}-side-nav-no-fixed`]:!R,[`${F}-side-nav-mix-fixed`]:k==="mix"&&R}]}),a=J(),r=z(),h=()=>{const c=window.innerWidth<=Kt;r.updateConfig({isSidebarCompact:c})};de(()=>{h(),window.onresize=()=>{h()}});const w=()=>{a.push(ue)},$=()=>l.value?jt:he;return(c,R)=>{const k=f("t-menu");return o(),S("div",{class:j(u.value)},[t(k,{class:j(b.value),theme:n.theme,value:s.value,collapsed:l.value,"default-expanded":i.value},{logo:e(()=>[n.showLogo?(o(),S("span",{key:0,class:j(`${v(F)}-side-nav-logo-wrapper`),onClick:w},[(o(),g(U($()),{class:j(`${v(F)}-side-nav-logo-${l.value?"t":"tdesign"}-logo`)},null,8,["class"]))],2)):H("",!0)]),operations:e(()=>[T("span",Vt,N(l.value?"":"TDesign Starter")+" "+N(v(Gt).version),1)]),default:e(()=>[t(_e,{"nav-data":n.menu},null,8,["nav-data"])]),_:1},8,["class","theme","value","collapsed","default-expanded"]),T("div",{class:j(`${v(F)}-side-nav-placeholder${l.value?"-hidden":""}`)},null,2)],2)}}}),le=q({__name:"LayoutSideNav",setup(n){const y=V(),l=ee(),p=z(),{backMenuList:s}=Q(l),i=L(()=>{const{layout:u,splitMenu:b}=p;let a=s.value;return u==="mix"&&b&&a.forEach(r=>{y.path.indexOf(r.path)===0&&(a=r.children.map(h=>({...h,path:`${r.path}/${h.path}`})))}),a});return(u,b)=>v(p).showSidebar?(o(),g(Yt,{key:0,"show-logo":v(p).showSidebarLogo,layout:v(p).layout,"is-fixed":v(p).isSidebarFixed,menu:i.value,theme:v(p).displayMode,"is-compact":v(p).isSidebarCompact},null,8,["show-logo","layout","is-fixed","menu","theme","is-compact"])):H("",!0)}}),to=q({__name:"index",setup(n){const y=V(),l=z(),p=Z(),s=Q(l),i=L(()=>[{"t-layout--with-sider":l.showSidebar}]),u=()=>{const{path:h,query:w,meta:{title:$},name:c}=y;p.appendTabRouterList({path:h,query:w,title:$,name:c,meta:y.meta,isAlive:!0})},b=G(!1),a=ie(),r=()=>{setInterval(async()=>{const h=a.getTokenTime;if(!h)return;ve().diff(h,"second")>=Ie.tokenTime&&!b.value&&(b.value=!0,await a.handleRefreshToken(),b.value=!1,console.log("token刷新成功"))},1e4)};return de(()=>{u(),r()}),te(()=>y.path,()=>{u(),document.querySelector(`.${F}-layout`).scrollTo({top:0,behavior:"smooth"})}),(h,w)=>{const $=f("t-aside"),c=f("t-header"),R=f("t-content"),k=f("t-layout");return o(),S("div",null,[v(s).layout.value==="side"?(o(),g(k,{key:"side",class:j(i.value)},{default:e(()=>[t($,null,{default:e(()=>[t(le)]),_:1}),t(k,null,{default:e(()=>[t(c,null,{default:e(()=>[t(ce)]),_:1}),t(R,null,{default:e(()=>[t(ae)]),_:1})]),_:1})]),_:1},8,["class"])):(o(),g(k,{key:"no-side"},{default:e(()=>[t(c,null,{default:e(()=>[t(ce)]),_:1}),t(k,{class:j(i.value)},{default:e(()=>[t(le),t(ae)]),_:1},8,["class"])]),_:1})),t(Ue)])}}});export{to as default};
