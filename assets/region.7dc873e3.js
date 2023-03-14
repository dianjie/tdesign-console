import{d as G,C as k,R as de,T as ce,U as pe,a1 as U,r as v,ax as te,av as Pe,e as c,f as E,g as j,w as t,m as Te,l as e,j as d,p as A,M as B,_ as me,X as Se,aG as je,i as ae,aN as Ue,n as le,J as $,aO as Ie,aP as ze,F as Ne,H as Le,t as Me,q as qe,aC as $e,aD as Re,V as oe}from"./index.c2521a03.js";import{u as Ke}from"./useDesign.9d0ca2bc.js";import{u as He}from"./useSetting.65510119.js";import{c as ve,d as fe}from"./download.aaa56f05.js";import{u as D}from"./index.d71d3bee.js";function ne(a,n){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);n&&(r=r.filter(function(y){return Object.getOwnPropertyDescriptor(a,y).enumerable})),s.push.apply(s,r)}return s}function re(a){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?ne(Object(s),!0).forEach(function(r){pe(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):ne(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}var Ge={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.73 6.26l-.71.09A2.32 2.32 0 002 8.67c0 1.2.89 2.18 2 2.31v1a3.31 3.31 0 01-3-3.31 3.32 3.32 0 012.9-3.32A4.2 4.2 0 018 2c2 0 3.69 1.43 4.1 3.35 1.63.2 2.9 1.6 2.9 3.32a3.31 3.31 0 01-3 3.32v-1c1.11-.14 2-1.11 2-2.32 0-1.22-.9-2.2-2.02-2.32l-.71-.09-.15-.7A3.2 3.2 0 008 3a3.2 3.2 0 00-3.12 2.56l-.15.7z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M6.14 10.72L7.5 9.39l.03 5.12 1.01-.01-.03-5.1 1.37 1.34.72-.7-2.26-2.2a.5.5 0 00-.7 0l-2.22 2.18.72.7z",fillOpacity:.9}}]},Je=G({name:"CloudUploadIcon",props:{size:{type:String},onClick:{type:Function}},setup(a,n){var{attrs:s}=n,r=k(()=>a.size),{className:y,style:f}=de(r),_=k(()=>["t-icon","t-icon-cloud-upload",y.value]),w=k(()=>re(re({},f.value),s.style)),b=k(()=>({class:_.value,style:w.value,onClick:V=>{var h;return(h=a.onClick)===null||h===void 0?void 0:h.call(a,{e:V})}}));return()=>ce(Ge,b.value)}});function se(a,n){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);n&&(r=r.filter(function(y){return Object.getOwnPropertyDescriptor(a,y).enumerable})),s.push.apply(s,r)}return s}function ie(a){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?se(Object(s),!0).forEach(function(r){pe(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):se(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}var Xe={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.55 7.74c.2.12.2.4 0 .52l-5.1 2.94a.3.3 0 01-.45-.26V5.06a.3.3 0 01.45-.26l5.1 2.94z",fillOpacity:.9}}]},Qe=G({name:"PlayIcon",props:{size:{type:String},onClick:{type:Function}},setup(a,n){var{attrs:s}=n,r=k(()=>a.size),{className:y,style:f}=de(r),_=k(()=>["t-icon","t-icon-play",y.value]),w=k(()=>ie(ie({},f.value),s.style)),b=k(()=>({class:_.value,style:w.value,onClick:V=>{var h;return(h=a.onClick)===null||h===void 0?void 0:h.call(a,{e:V})}}));return()=>ce(Xe,b.value)}});const H=(a,n)=>U.get({url:"/blade-system/region/lazy-tree",params:{...n,parentCode:a}},{joinTime:!1}),We=a=>U.get({url:"/blade-system/region/detail",params:{code:a}}),Ye=a=>U.post({url:"/blade-system/region/remove",params:{id:a}},{joinParamsToUrl:!0,errorMessageMode:"message"}),Ze=a=>U.post({url:"/blade-system/region/submit",data:a},{errorMessageMode:"message"}),et=(a,n)=>U.uploadFile({url:"/blade-system/region/import-region",params:{isCovered:a},timeout:60*1e3},n),tt=()=>U.get({url:"/blade-system/region/export-template",responseType:"blob"},{isTransformResponse:!1}),ut=()=>U.get({url:"/blade-system/region/export-region",responseType:"blob",timeout:60*1e3},{joinTime:!1,isTransformResponse:!1,errorMessageMode:"message"}),at=G({__name:"DialogImport",props:{visible:{type:Boolean,default:!1}},emits:["update:visible","submit"],setup(a,{emit:n}){const s=a,r={excelFile:[],isCovered:0},y=v({excelFile:[{required:!0,message:"\u8BF7\u9009\u62E9\u6A21\u677F",type:"error",trigger:"change"}],isCovered:[{required:!0,message:"\u8BF7\u9009\u62E9\u6570\u636E\u8986\u76D6",type:"error",trigger:"change"}]}),f=v(!1),_=v({...r}),w=v(null),b=v(!1),V=v(),h=D(({firstError:g})=>{g?B.warning(g):(b.value=!0,V.value.uploadFiles())},300),l=()=>{_.value={...r}},P=()=>{f.value=!1};te(()=>f.value,g=>{n("update:visible",g)}),te(()=>s.visible,g=>{Pe(()=>{var C;(C=w.value)==null||C.clearValidate()}),f.value=g});const N=({file:g})=>{B.error(`\u6587\u4EF6 ${g.name} \u5BFC\u5165\u5931\u8D25`),b.value=!1},J=async g=>{try{const{isCovered:C}=d(_);return{status:"success",response:{...await et(C,{file:g.raw}),url:"success"}}}catch{return{status:"fail",error:"\u5BFC\u5165\u5931\u8D25"}}},I=()=>{n("submit",{}),B.success("\u5BFC\u5165\u6210\u529F"),f.value=!1,b.value=!1},X=D(()=>{tt().then(g=>{fe(g,"\u884C\u653F\u533A\u5212\u6A21\u677F.xlsx")})},300);return(g,C)=>{const R=c("t-upload"),z=c("t-form-item"),T=c("t-col"),Q=c("t-switch"),L=c("t-button"),W=c("t-row"),M=c("t-form"),Y=c("t-dialog");return E(),j(Y,{visible:f.value,"onUpdate:visible":C[2]||(C[2]=x=>f.value=x),header:"\u884C\u653F\u533A\u5212\u6570\u636E\u5BFC\u5165",width:780,footer:!1,onClosed:l},{body:t(()=>[Te(" \u8868\u5355\u5185\u5BB9 "),e(M,{ref_key:"form",ref:w,data:_.value,rules:y.value,"label-width":100,disabled:b.value,onSubmit:d(h)},{default:t(()=>[e(W,{gutter:[0,28]},{default:t(()=>[e(T,{span:12},{default:t(()=>[e(z,{label:"\u6A21\u677F\u4E0A\u4F20",name:"excelFile"},{default:t(()=>[e(R,{ref_key:"uploadRef",ref:V,modelValue:_.value.excelFile,"onUpdate:modelValue":C[0]||(C[0]=x=>_.value.excelFile=x),"auto-upload":!1,accept:".xlsx, .xls, .csv","request-method":J,disabled:b.value,onFail:N,onSuccess:I},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(T,{span:12},{default:t(()=>[e(z,{label:"\u6570\u636E\u8986\u76D6",name:"isCovered"},{default:t(()=>[e(Q,{modelValue:_.value.isCovered,"onUpdate:modelValue":C[1]||(C[1]=x=>_.value.isCovered=x),"custom-value":[1,0]},null,8,["modelValue"])]),_:1})]),_:1}),e(T,{span:12},{default:t(()=>[e(z,{label:"\u4E0B\u8F7D\u6A21\u677F",name:"exportTemplate"},{default:t(()=>[e(L,{theme:"primary",onClick:d(X)},{icon:t(()=>[e(d(ve))]),default:t(()=>[A(" \u4E0B\u8F7D\u6A21\u677F ")]),_:1},8,["onClick"])]),_:1})]),_:1}),e(T,{span:12},{default:t(()=>[e(z,{style:{float:"right"}},{default:t(()=>[e(L,{variant:"outline",onClick:P},{default:t(()=>[A("\u53D6\u6D88")]),_:1}),e(L,{theme:"primary",disabled:b.value,type:"submit"},{default:t(()=>[A("\u786E\u5B9A")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["data","rules","disabled","onSubmit"])]),_:1},8,["visible"])}}}),lt=me(at,[["__file","D:/Study/tdesign-console/src/viewsBusiness/base/components/region/DialogImport.vue"]]),ot={class:"x-button-group"},nt={class:"form-content"},rt=G({__name:"region",setup(a){const{tableVar:n}=Ke(),{getTableHeaderAffixedTop:s,getLayoutContainer:r}=He(),y=v("00"),f=v(""),_=v("[]"),w=v([]),b=v(""),V=v(null),h={parentCode:"",parentName:"",code:"",subCode:"",name:"",regionLevel:void 0,sort:void 0,remark:""},l=v({...h}),P=v(null),N=v(!1),J=v({parentCode:[{required:!0,message:"\u8BF7\u8F93\u5165\u7236\u533A\u5212\u7F16\u53F7",type:"error",trigger:"blur"}],parentName:[{required:!0,message:"\u8BF7\u8F93\u5165\u7236\u533A\u5212\u540D\u79F0",type:"error",trigger:"blur"}],code:[{required:!0,message:"\u8BF7\u8F93\u5165\u533A\u5212\u7F16\u53F7",type:"error",trigger:"blur"}],subCode:[{required:!0,message:"\u8BF7\u8F93\u5165\u533A\u5212\u5B50\u7F16\u53F7",type:"error",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u533A\u5212\u540D\u79F0",type:"error",trigger:"blur"}],regionLevel:[{required:!0,message:"\u8BF7\u9009\u62E9\u533A\u5212\u7B49\u7EA7",type:"error",trigger:"change"}],sort:[{required:!0,message:"\u8BF7\u8F93\u5165\u533A\u5212\u6392\u5E8F",type:"error",trigger:"blur"}]}),I=()=>{H(y.value).then(i=>{w.value=i.map(u=>({...u,children:u.hasChildren}))})},X=i=>new Promise(u=>{const p=i.data.id;H(p).then(F=>{u(F.map(m=>({...m,children:m.hasChildren})))})}),g=v([]);async function C(){const i=await $e("region");g.value=Re(i)}const R=D(()=>{V.value=i=>i.label.indexOf(b.value)>=0},350);Se(()=>{I(),C()});const z=D((i,{node:u})=>{var p;if(!i.length){f.value="",_.value="",l.value={...h},(p=P.value)==null||p.clearValidate();return}f.value=u.data.id,_.value=u.data.parentId,We(f.value).then(F=>{var m;(m=P.value)==null||m.clearValidate(),l.value={...F,subCode:F.code.replace(F.parentCode,"")}})},300),T=D(i=>{const{parentCode:u}=d(l);l.value.code=u+i},300);te(()=>l.value.subCode,T);const Q=D(({firstError:i})=>{if(i)B.warning(i);else{N.value=!0;const{parentCode:u}=d(l),p={...l.value},F=u===y.value?"":u;p.code=F+p.subCode,Ze(p).then(()=>{var m;B.success("\u63D0\u4EA4\u6210\u529F"),I(),(m=P.value)==null||m.reset()}).finally(()=>{N.value=!1})}},300),L=D(()=>{const{code:i,name:u,regionLevel:p}=d(l);if(!i||!u){B.warning("\u8BF7\u5148\u9009\u62E9\u4E00\u9879\u533A\u5212");return}l.value={...h,parentCode:i,parentName:u,regionLevel:p===5?5:p+1}},300),W=D(()=>{const{code:i,name:u}=d(l);if(!i||!u){B.warning("\u8BF7\u5148\u9009\u62E9\u4E00\u9879\u533A\u5212");return}const p=oe.confirm({header:"\u5220\u9664\u533A\u5212",theme:"warning",body:`\u786E\u5B9A\u5C06 [${u}] \u6570\u636E\u5220\u9664?`,onConfirm:D(()=>Ye(f.value).then(()=>{var F;B.success("\u64CD\u4F5C\u6210\u529F!"),p.destroy(),I(),(F=P.value)==null||F.reset()}),300)})},300),M=v([]),Y=()=>{M.value=[],f.value="",_.value=""},x=v(!1),ge=D(()=>{x.value=!0},300),_e=D(()=>{const i=oe.confirm({header:"\u63D0\u793A",theme:"info",body:"\u662F\u5426\u5BFC\u51FA\u884C\u653F\u533A\u5212\u6570\u636E?",onConfirm:D(()=>{ut().then(u=>{fe(u,`\u884C\u653F\u533A\u5212\u6570\u636E${+new Date}.xlsx`),B.success("\u64CD\u4F5C\u6210\u529F!"),i.destroy()})},300)})},300),Z=v(!1),ee=v([]),K=v(""),be=()=>{H(y.value).then(i=>{ee.value=i.map(u=>({...u,children:u.hasChildren}))})},Ce=i=>new Promise(u=>{const p=i.data.id;H(p).then(F=>{u(F.map(m=>({...m,children:m.hasChildren})))})}),Fe=D(()=>{Z.value=!0,be()},300),ye=()=>{K.value="",ee.value=[]},he=()=>{B.success(`\u9009\u4E2D\u503C\u4E3A${K.value}`)};return(i,u)=>{const p=c("t-input"),F=c("t-tree"),m=c("t-col"),S=c("t-button"),O=c("t-form-item"),De=c("t-input-group"),Ae=c("t-radio"),Be=c("t-radio-group"),we=c("t-input-number"),Ve=c("t-textarea"),ue=c("t-row"),xe=c("t-form"),Ee=c("t-affix"),Oe=c("t-tree-select"),ke=c("t-dialog"),q=je("auth");return E(),ae("div",{class:qe(d(n))},[e(ue,{gutter:[16,24]},{default:t(()=>[e(m,{span:4},{default:t(()=>[e(p,{modelValue:b.value,"onUpdate:modelValue":u[0]||(u[0]=o=>b.value=o),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",clearable:"",onChange:d(R)},{"suffix-icon":t(()=>[e(d(Ue),{size:"20px"})]),_:1},8,["modelValue","onChange"]),e(F,{actived:M.value,"onUpdate:actived":u[1]||(u[1]=o=>M.value=o),style:{"margin-top":"14px"},data:w.value,hover:"",activable:!0,keys:{value:"value",label:"title"},lazy:!0,filter:V.value,load:X,onActive:d(z)},null,8,["actived","data","filter","onActive"])]),_:1}),e(m,{span:8},{default:t(()=>[e(Ee,{ref:"affix","offset-top":d(s),container:d(r)},{default:t(()=>[le("div",ot,[$((E(),j(S,{theme:"primary",onClick:d(L)},{icon:t(()=>[e(d(Ie))]),default:t(()=>[A(" \u65B0\u5EFA\u4E0B\u7EA7 ")]),_:1},8,["onClick"])),[[q,"region_add"]]),$((E(),j(S,{theme:"primary",onClick:d(W)},{icon:t(()=>[e(d(ze))]),default:t(()=>[A(" \u5220\u9664 ")]),_:1},8,["onClick"])),[[q,"region_delete"]]),$((E(),j(S,{theme:"primary",onClick:d(ge)},{icon:t(()=>[e(d(Je))]),default:t(()=>[A(" \u5BFC\u5165 ")]),_:1},8,["onClick"])),[[q,"region_import"]]),$((E(),j(S,{theme:"primary",onClick:d(_e)},{icon:t(()=>[e(d(ve))]),default:t(()=>[A(" \u5BFC\u51FA ")]),_:1},8,["onClick"])),[[q,"region_export"]]),$((E(),j(S,{theme:"primary",onClick:d(Fe)},{icon:t(()=>[e(d(Qe))]),default:t(()=>[A(" \u8C03\u8BD5 ")]),_:1},8,["onClick"])),[[q,"region_debug"]])]),le("div",nt,[e(xe,{ref_key:"form",ref:P,data:l.value,rules:J.value,"label-width":100,disabled:N.value,onReset:Y,onSubmit:d(Q)},{default:t(()=>[e(ue,{gutter:[0,28]},{default:t(()=>[e(m,{span:12},{default:t(()=>[e(O,{label:"\u7236\u533A\u5212\u7F16\u53F7",name:"parentCode"},{default:t(()=>[e(p,{modelValue:l.value.parentCode,"onUpdate:modelValue":u[2]||(u[2]=o=>l.value.parentCode=o),disabled:!0,placeholder:"\u8BF7\u8F93\u5165\u7236\u533A\u5212\u7F16\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(O,{label:"\u7236\u533A\u5212\u540D\u79F0",name:"parentName"},{default:t(()=>[e(p,{modelValue:l.value.parentName,"onUpdate:modelValue":u[3]||(u[3]=o=>l.value.parentName=o),disabled:!0,placeholder:"\u8BF7\u8F93\u5165\u7236\u533A\u5212\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(O,{label:"\u533A\u5212\u7F16\u53F7",name:"subCode"},{default:t(()=>[e(De,{style:{width:"100%"}},{default:t(()=>[e(p,{modelValue:l.value.parentCode,"onUpdate:modelValue":u[4]||(u[4]=o=>l.value.parentCode=o),disabled:!0,style:{width:"80px"},placeholder:""},null,8,["modelValue"]),e(p,{modelValue:l.value.subCode,"onUpdate:modelValue":u[5]||(u[5]=o=>l.value.subCode=o),placeholder:"\u8BF7\u8F93\u5165\u5B50\u533A\u5212\u7F16\u53F7",onChange:d(T)},null,8,["modelValue","onChange"])]),_:1})]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(O,{label:"\u533A\u5212\u540D\u79F0",name:"name"},{default:t(()=>[e(p,{modelValue:l.value.name,"onUpdate:modelValue":u[6]||(u[6]=o=>l.value.name=o),placeholder:"\u8BF7\u8F93\u5165\u533A\u5212\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(O,{label:"\u533A\u5212\u7B49\u7EA7",name:"regionLevel"},{default:t(()=>[e(Be,{modelValue:l.value.regionLevel,"onUpdate:modelValue":u[7]||(u[7]=o=>l.value.regionLevel=o),name:"regionLevel"},{default:t(()=>[(E(!0),ae(Ne,null,Le(g.value,o=>(E(),j(Ae,{key:o.dictKey,value:o.dictKey},{default:t(()=>[A(Me(o.dictValue),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(O,{label:"\u533A\u5212\u6392\u5E8F",name:"sort"},{default:t(()=>[e(we,{modelValue:l.value.sort,"onUpdate:modelValue":u[8]||(u[8]=o=>l.value.sort=o),theme:"column",placeholder:"\u8BF7\u8F93\u5165\u533A\u5212\u6392\u5E8F",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(O,{label:"\u533A\u5212\u5907\u6CE8",name:"remark"},{default:t(()=>[e(Ve,{modelValue:l.value.remark,"onUpdate:modelValue":u[9]||(u[9]=o=>l.value.remark=o),placeholder:"\u8BF7\u8F93\u5165\u533A\u5212\u5907\u6CE8",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(O,null,{default:t(()=>[e(S,{theme:"primary",type:"submit"},{default:t(()=>[A("\u63D0\u4EA4")]),_:1}),e(S,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[A("\u6E05\u7A7A")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data","rules","disabled","onSubmit"])])]),_:1},8,["offset-top","container"])]),_:1})]),_:1}),e(lt,{visible:x.value,"onUpdate:visible":u[10]||(u[10]=o=>x.value=o),onSubmit:I},null,8,["visible"]),e(ke,{visible:Z.value,"onUpdate:visible":u[12]||(u[12]=o=>Z.value=o),header:"\u884C\u653F\u533A\u5212\u6570\u636E\u8C03\u8BD5","on-cancel":ye,onConfirm:he},{default:t(()=>[e(Oe,{modelValue:K.value,"onUpdate:modelValue":u[11]||(u[11]=o=>K.value=o),data:ee.value,clearable:"",placeholder:"\u8BF7\u9009\u62E9","tree-props":{keys:{value:"value",label:"title"},lazy:!0,valueMode:"all",load:Ce}},null,8,["modelValue","data","tree-props"])]),_:1},8,["visible"])],2)}}});const mt=me(rt,[["__scopeId","data-v-ea8a373c"],["__file","D:/Study/tdesign-console/src/views/base/region.vue"]]);export{mt as default};