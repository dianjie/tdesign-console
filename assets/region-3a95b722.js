import{d as G,Q as S,ad as ce,ae as pe,af as me,ar as z,f as v,M as D,a7 as ae,W as je,r as c,o as P,m as L,w as t,a as e,b as d,q as x,ai as Ie,ag as oe,aw as Ue,c as ne,aD as Fe,e as re,$ as E,aE as Le,aF as ze,F as qe,R as Me,t as Ne,s as Ae,as as Be,at as $e,_ as Re}from"./index-357a89bc.js";import{u as Ee}from"./useSetting-8eb1f197.js";import{u as Ke}from"./useDesign-16212514.js";import{d as ve,C as fe}from"./download-21c0fcb4.js";import{u as V}from"./index-1d3f8cec.js";function se(l,s){var r=Object.keys(l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(l);s&&(u=u.filter(function(w){return Object.getOwnPropertyDescriptor(l,w).enumerable})),r.push.apply(r,u)}return r}function ue(l){for(var s=1;s<arguments.length;s++){var r=arguments[s]!=null?arguments[s]:{};s%2?se(Object(r),!0).forEach(function(u){me(l,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach(function(u){Object.defineProperty(l,u,Object.getOwnPropertyDescriptor(r,u))})}return l}var He={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.6 6.28a7.5 7.5 0 0114.8 0 6.5 6.5 0 011.06 12.01l-.9.46-.9-1.78.88-.46a4.5 4.5 0 00-1.23-8.44l-.77-.14-.05-.78a5.5 5.5 0 00-10.98 0l-.05.78-.77.14a4.5 4.5 0 00-1.23 8.44l.89.46-.91 1.78-.9-.46a6.5 6.5 0 011.06-12zm7.4 3.3L17.41 15 16 16.41l-3-3V23h-2v-9.59l-3 3L6.59 15 12 9.59z"}}]},Qe=G({name:"CloudUploadIcon",props:{size:{type:String},onClick:{type:Function}},setup(l,s){var{attrs:r}=s,u=S(()=>l.size),{className:w,style:f}=ce(u),g=S(()=>["t-icon","t-icon-cloud-upload",w.value]),O=S(()=>ue(ue({},f.value),r.style)),b=S(()=>({class:g.value,style:O.value,onClick:k=>{var y;return(y=l.onClick)===null||y===void 0?void 0:y.call(l,{e:k})}}));return()=>pe(He,b.value)}});const We=Qe;function ie(l,s){var r=Object.keys(l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(l);s&&(u=u.filter(function(w){return Object.getOwnPropertyDescriptor(l,w).enumerable})),r.push.apply(r,u)}return r}function de(l){for(var s=1;s<arguments.length;s++){var r=arguments[s]!=null?arguments[s]:{};s%2?ie(Object(r),!0).forEach(function(u){me(l,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach(function(u){Object.defineProperty(l,u,Object.getOwnPropertyDescriptor(r,u))})}return l}var Ge={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M18.25 12L8.5 17.63V6.37L18.25 12z"}}]},Je=G({name:"PlayIcon",props:{size:{type:String},onClick:{type:Function}},setup(l,s){var{attrs:r}=s,u=S(()=>l.size),{className:w,style:f}=ce(u),g=S(()=>["t-icon","t-icon-play",w.value]),O=S(()=>de(de({},f.value),r.style)),b=S(()=>({class:g.value,style:O.value,onClick:k=>{var y;return(y=l.onClick)===null||y===void 0?void 0:y.call(l,{e:k})}}));return()=>pe(Ge,b.value)}});const Xe=Je,W=(l,s)=>z.get({url:"/blade-system/region/lazy-tree",params:{...s,parentCode:l}},{joinTime:!1}),Ye=l=>z.get({url:"/blade-system/region/detail",params:{code:l}}),Ze=l=>z.post({url:"/blade-system/region/remove",params:{id:l}},{joinParamsToUrl:!0,errorMessageMode:"message"}),et=l=>z.post({url:"/blade-system/region/submit",data:l},{errorMessageMode:"message"}),tt=(l,s)=>z.uploadFile({url:"/blade-system/region/import-region",params:{isCovered:l},timeout:60*1e3},s),at=()=>z.get({url:"/blade-system/region/export-template",responseType:"blob"},{isTransformResponse:!1}),lt=()=>z.get({url:"/blade-system/region/export-region",responseType:"blob",timeout:60*1e3},{joinTime:!1,isTransformResponse:!1,errorMessageMode:"message"}),ot=G({__name:"DialogImport",props:{visible:{type:Boolean,default:!1}},emits:["update:visible","submit"],setup(l,{emit:s}){const r={excelFile:[],isCovered:0},u=l,w=v({excelFile:[{required:!0,message:"请选择模板",type:"error",trigger:"change"}],isCovered:[{required:!0,message:"请选择数据覆盖",type:"error",trigger:"change"}]}),f=v(!1),g=v({...r}),O=v(null),b=v(!1),k=v(),y=s,o=V(({firstError:_})=>{_?D.warning(_):(b.value=!0,k.value.uploadFiles())},300),j=()=>{g.value={...r}},N=()=>{f.value=!1};ae(()=>f.value,_=>{y("update:visible",_)}),ae(()=>u.visible,_=>{je(()=>{var C;(C=O.value)==null||C.clearValidate()}),f.value=_});const J=({file:_})=>{D.error(`文件 ${_.name} 导入失败`),b.value=!1},q=async _=>{try{const{isCovered:C}=d(g);return{status:"success",response:{...await tt(C,{file:_.raw}),url:"success"}}}catch{return{status:"fail",error:"导入失败"}}},X=()=>{y("submit",{}),D.success("导入成功"),f.value=!1,b.value=!1},K=V(()=>{at().then(_=>{ve(_,"行政区划模板.xlsx")})},300);return(_,C)=>{const H=c("t-upload"),I=c("t-form-item"),M=c("t-col"),Y=c("t-switch"),A=c("t-button"),B=c("t-row"),Z=c("t-form"),$=c("t-dialog");return P(),L($,{visible:f.value,"onUpdate:visible":C[2]||(C[2]=U=>f.value=U),header:"行政区划数据导入",width:780,footer:!1,onClosed:j},{body:t(()=>[e(Z,{ref_key:"form",ref:O,data:g.value,rules:w.value,"label-width":100,disabled:b.value,onSubmit:d(o)},{default:t(()=>[e(B,{gutter:[0,28]},{default:t(()=>[e(M,{span:12},{default:t(()=>[e(I,{label:"模板上传",name:"excelFile"},{default:t(()=>[e(H,{ref_key:"uploadRef",ref:k,modelValue:g.value.excelFile,"onUpdate:modelValue":C[0]||(C[0]=U=>g.value.excelFile=U),"auto-upload":!1,accept:".xlsx, .xls, .csv","request-method":q,disabled:b.value,onFail:J,onSuccess:X},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(M,{span:12},{default:t(()=>[e(I,{label:"数据覆盖",name:"isCovered"},{default:t(()=>[e(Y,{modelValue:g.value.isCovered,"onUpdate:modelValue":C[1]||(C[1]=U=>g.value.isCovered=U),"custom-value":[1,0]},null,8,["modelValue"])]),_:1})]),_:1}),e(M,{span:12},{default:t(()=>[e(I,{label:"下载模板",name:"exportTemplate"},{default:t(()=>[e(A,{theme:"primary",onClick:d(K)},{icon:t(()=>[e(d(fe))]),default:t(()=>[x(" 下载模板 ")]),_:1},8,["onClick"])]),_:1})]),_:1}),e(M,{span:12},{default:t(()=>[e(I,{style:{float:"right"}},{default:t(()=>[e(A,{variant:"outline",onClick:N},{default:t(()=>[x("取消")]),_:1}),e(A,{theme:"primary",disabled:b.value,type:"submit"},{default:t(()=>[x("确定")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["data","rules","disabled","onSubmit"])]),_:1},8,["visible"])}}}),nt={class:"x-button-group"},rt={class:"form-content"},st=G({__name:"region",setup(l){const{tableVar:s}=Ke(),{getTableHeaderAffixedTop:r,getLayoutContainer:u}=Ee(),w=v("00"),f=v(""),g=v("[]"),O=v([]),b=v(""),k=v(null),y={parentCode:"",parentName:"",code:"",subCode:"",name:"",regionLevel:void 0,sort:void 0,remark:""},o=v({...y}),j=v(null),N=v(!1),J=v({parentCode:[{required:!0,message:"请输入父区划编号",type:"error",trigger:"blur"}],parentName:[{required:!0,message:"请输入父区划名称",type:"error",trigger:"blur"}],code:[{required:!0,message:"请输入区划编号",type:"error",trigger:"blur"}],subCode:[{required:!0,message:"请输入区划子编号",type:"error",trigger:"blur"}],name:[{required:!0,message:"请输入区划名称",type:"error",trigger:"blur"}],regionLevel:[{required:!0,message:"请选择区划等级",type:"error",trigger:"change"}],sort:[{required:!0,message:"请输入区划排序",type:"error",trigger:"blur"}]}),q=()=>{W(w.value).then(i=>{O.value=i.map(a=>({...a,children:a.hasChildren}))})},X=i=>new Promise(a=>{const p=i.data.id;W(p).then(h=>{a(h.map(m=>({...m,children:m.hasChildren})))})}),K=v([]);async function _(){const i=await Be("region");K.value=$e(i)}const C=V(()=>{k.value=i=>i.label.indexOf(b.value)>=0},350);Ie(()=>{q(),_()});const H=V((i,{node:a})=>{var p;if(!i.length){f.value="",g.value="",o.value={...y},(p=j.value)==null||p.clearValidate();return}f.value=a.data.id,g.value=a.data.parentId,Ye(f.value).then(h=>{var m;(m=j.value)==null||m.clearValidate(),o.value={...h,subCode:h.code.replace(h.parentCode,"")}})},300),I=V(i=>{const{parentCode:a}=d(o);o.value.code=a+i},300);ae(()=>o.value.subCode,I);const M=V(({firstError:i})=>{if(i)D.warning(i);else{N.value=!0;const{parentCode:a}=d(o),p={...o.value},h=a===w.value?"":a;p.code=h+p.subCode,et(p).then(()=>{var m;D.success("提交成功"),q(),(m=j.value)==null||m.reset()}).finally(()=>{N.value=!1})}},300),Y=V(()=>{const{code:i,name:a,regionLevel:p}=d(o);if(!i||!a){D.warning("请先选择一项区划");return}o.value={...y,parentCode:i,parentName:a,regionLevel:p===5?5:p+1}},300),A=V(()=>{const{code:i,name:a}=d(o);if(!i||!a){D.warning("请先选择一项区划");return}const p=oe.confirm({header:"删除区划",theme:"warning",body:`确定将 [${a}] 数据删除?`,onConfirm:V(()=>Ze(f.value).then(()=>{var h;D.success("操作成功!"),p.destroy(),q(),(h=j.value)==null||h.reset()}),300)})},300),B=v([]),Z=()=>{B.value=[],f.value="",g.value=""},$=v(!1),U=V(()=>{$.value=!0},300),ge=V(()=>{const i=oe.confirm({header:"提示",theme:"info",body:"是否导出行政区划数据?",onConfirm:V(()=>{lt().then(a=>{ve(a,`行政区划数据${+new Date}.xlsx`),D.success("操作成功!"),i.destroy()})},300)})},300),ee=v(!1),te=v([]),Q=v(""),_e=()=>{W(w.value).then(i=>{te.value=i.map(a=>({...a,children:a.hasChildren}))})},be=i=>new Promise(a=>{const p=i.data.id;W(p).then(h=>{a(h.map(m=>({...m,children:m.hasChildren})))})}),ye=V(()=>{ee.value=!0,_e()},300),Ce=()=>{Q.value="",te.value=[]},he=()=>{D.success(`选中值为${Q.value}`)};return(i,a)=>{const p=c("t-input"),h=c("t-tree"),m=c("t-col"),F=c("t-button"),T=c("t-form-item"),we=c("t-input-group"),Ve=c("t-radio"),xe=c("t-radio-group"),De=c("t-input-number"),Oe=c("t-textarea"),le=c("t-row"),ke=c("t-form"),Pe=c("t-affix"),Te=c("t-tree-select"),Se=c("t-dialog"),R=Ue("auth");return P(),ne("div",{class:Ae(d(s))},[e(le,{gutter:[16,24]},{default:t(()=>[e(m,{span:4},{default:t(()=>[e(p,{modelValue:b.value,"onUpdate:modelValue":a[0]||(a[0]=n=>b.value=n),placeholder:"请输入关键词",clearable:"",onChange:d(C)},{"suffix-icon":t(()=>[e(d(Fe),{size:"20px"})]),_:1},8,["modelValue","onChange"]),e(h,{actived:B.value,"onUpdate:actived":a[1]||(a[1]=n=>B.value=n),style:{"margin-top":"14px"},data:O.value,hover:"",activable:!0,keys:{value:"value",label:"title"},lazy:!0,filter:k.value,load:X,onActive:d(H)},null,8,["actived","data","filter","onActive"])]),_:1}),e(m,{span:8},{default:t(()=>[e(Pe,{ref:"affix","offset-top":d(r),container:d(u)},{default:t(()=>[re("div",nt,[E((P(),L(F,{theme:"primary",onClick:d(Y)},{icon:t(()=>[e(d(Le))]),default:t(()=>[x(" 新建下级 ")]),_:1},8,["onClick"])),[[R,"region_add"]]),E((P(),L(F,{theme:"primary",onClick:d(A)},{icon:t(()=>[e(d(ze))]),default:t(()=>[x(" 删除 ")]),_:1},8,["onClick"])),[[R,"region_delete"]]),E((P(),L(F,{theme:"primary",onClick:d(U)},{icon:t(()=>[e(d(We))]),default:t(()=>[x(" 导入 ")]),_:1},8,["onClick"])),[[R,"region_import"]]),E((P(),L(F,{theme:"primary",onClick:d(ge)},{icon:t(()=>[e(d(fe))]),default:t(()=>[x(" 导出 ")]),_:1},8,["onClick"])),[[R,"region_export"]]),E((P(),L(F,{theme:"primary",onClick:d(ye)},{icon:t(()=>[e(d(Xe))]),default:t(()=>[x(" 调试 ")]),_:1},8,["onClick"])),[[R,"region_debug"]])]),re("div",rt,[e(ke,{ref_key:"form",ref:j,data:o.value,rules:J.value,"label-width":100,disabled:N.value,onReset:Z,onSubmit:d(M)},{default:t(()=>[e(le,{gutter:[0,28]},{default:t(()=>[e(m,{span:12},{default:t(()=>[e(T,{label:"父区划编号",name:"parentCode"},{default:t(()=>[e(p,{modelValue:o.value.parentCode,"onUpdate:modelValue":a[2]||(a[2]=n=>o.value.parentCode=n),disabled:!0,placeholder:"请输入父区划编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(T,{label:"父区划名称",name:"parentName"},{default:t(()=>[e(p,{modelValue:o.value.parentName,"onUpdate:modelValue":a[3]||(a[3]=n=>o.value.parentName=n),disabled:!0,placeholder:"请输入父区划名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(T,{label:"区划编号",name:"subCode"},{default:t(()=>[e(we,{style:{width:"100%"}},{default:t(()=>[e(p,{modelValue:o.value.parentCode,"onUpdate:modelValue":a[4]||(a[4]=n=>o.value.parentCode=n),disabled:!0,style:{width:"80px"},placeholder:""},null,8,["modelValue"]),e(p,{modelValue:o.value.subCode,"onUpdate:modelValue":a[5]||(a[5]=n=>o.value.subCode=n),placeholder:"请输入子区划编号",onChange:d(I)},null,8,["modelValue","onChange"])]),_:1})]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(T,{label:"区划名称",name:"name"},{default:t(()=>[e(p,{modelValue:o.value.name,"onUpdate:modelValue":a[6]||(a[6]=n=>o.value.name=n),placeholder:"请输入区划名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(T,{label:"区划等级",name:"regionLevel"},{default:t(()=>[e(xe,{modelValue:o.value.regionLevel,"onUpdate:modelValue":a[7]||(a[7]=n=>o.value.regionLevel=n),name:"regionLevel"},{default:t(()=>[(P(!0),ne(qe,null,Me(K.value,n=>(P(),L(Ve,{key:n.dictKey,value:n.dictKey},{default:t(()=>[x(Ne(n.dictValue),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(T,{label:"区划排序",name:"sort"},{default:t(()=>[e(De,{modelValue:o.value.sort,"onUpdate:modelValue":a[8]||(a[8]=n=>o.value.sort=n),theme:"column",placeholder:"请输入区划排序",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(T,{label:"区划备注",name:"remark"},{default:t(()=>[e(Oe,{modelValue:o.value.remark,"onUpdate:modelValue":a[9]||(a[9]=n=>o.value.remark=n),placeholder:"请输入区划备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(T,null,{default:t(()=>[e(F,{theme:"primary",type:"submit"},{default:t(()=>[x("提交")]),_:1}),e(F,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[x("清空")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data","rules","disabled","onSubmit"])])]),_:1},8,["offset-top","container"])]),_:1})]),_:1}),e(ot,{visible:$.value,"onUpdate:visible":a[10]||(a[10]=n=>$.value=n),onSubmit:q},null,8,["visible"]),e(Se,{visible:ee.value,"onUpdate:visible":a[12]||(a[12]=n=>ee.value=n),header:"行政区划数据调试","on-cancel":Ce,onConfirm:he},{default:t(()=>[e(Te,{modelValue:Q.value,"onUpdate:modelValue":a[11]||(a[11]=n=>Q.value=n),data:te.value,clearable:"",placeholder:"请选择","tree-props":{keys:{value:"value",label:"title"},lazy:!0,valueMode:"all",load:be}},null,8,["modelValue","data","tree-props"])]),_:1},8,["visible"])],2)}}});const mt=Re(st,[["__scopeId","data-v-9d98b00d"]]);export{mt as default};
