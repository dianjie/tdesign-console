import{a1 as P,d as W,r as i,C as J,X as ce,ax as O,av as G,j as s,aI as ae,e as o,f as j,g as X,w as t,m as le,l as e,q as ne,J as se,p as B,K as pe,aC as me,aD as fe,M as Q,_ as Y,n as L,aE as ve,aF as _e,a as be,aG as Fe,i as oe,t as ye,aH as ge}from"./index.c2521a03.js";import{u as Ce}from"./useDesign.9d0ca2bc.js";import{u as De}from"./useSetting.65510119.js";import{u as ie}from"./useRequset.5f7a0394.js";import{u as z}from"./index.d71d3bee.js";const Be=[{colKey:"serial-number",title:"\u5E8F\u53F7",width:80,align:"center",fixed:"left"},{title:"\u83DC\u5355\u540D\u79F0",colKey:"name",ellipsis:!0,width:200},{title:"\u8DEF\u7531\u5730\u5740",colKey:"path",ellipsis:!0,width:200},{title:"\u83DC\u5355\u56FE\u6807",colKey:"source",width:80,ellipsis:!0,align:"center"},{title:"\u83DC\u5355\u7F16\u53F7",colKey:"code",width:150,ellipsis:!0},{title:"\u83DC\u5355\u522B\u540D",colKey:"alias",width:80,ellipsis:!0},{title:"\u83DC\u5355\u6392\u5E8F",width:80,colKey:"sort",ellipsis:!0},{fixed:"right",width:80,colKey:"op",title:"\u64CD\u4F5C",align:"center"}],he=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"\u5E8F\u53F7",width:80,align:"center",fixed:"left"},{title:"\u6743\u9650\u540D\u79F0",colKey:"scopeName",ellipsis:!0,width:200},{title:"\u6743\u9650\u7F16\u53F7",colKey:"resourceCode",ellipsis:!0,width:200},{title:"\u6743\u9650\u5B57\u6BB5",colKey:"scopeColumn",ellipsis:!0,width:200},{title:"\u89C4\u5219\u7C7B\u578B",colKey:"scopeTypeName",ellipsis:!0,width:200},{fixed:"right",width:180,colKey:"op",title:"\u64CD\u4F5C",align:"center"}],we=[{dictKey:1,dictValue:"-"},{dictKey:2,dictValue:"create_user"},{dictKey:3,dictValue:"create_dept"},{dictKey:4,dictValue:"create_dept"},{dictKey:5,dictValue:""}],Ve=(F,C,m)=>P.get({url:"/blade-system/data-scope/list",params:{...m,current:F,size:C}},{joinTime:!1}),Ee=F=>P.get({url:"/blade-system/data-scope/detail",params:{id:F}}),ke=F=>P.post({url:"/blade-system/data-scope/remove",params:{ids:F}},{joinParamsToUrl:!0,errorMessageMode:"message"}),Te=F=>P.post({url:"/blade-system/data-scope/submit",data:F},{errorMessageMode:"message"}),xe=W({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""},rowData:{type:Object,default:()=>({})}},emits:["update:visible","update:editId","update:actionType","submit"],setup(F,{emit:C}){const m=F,N={scopeName:"",resourceCode:"",scopeColumn:"",scopeType:void 0,scopeField:"*",scopeClass:"",scopeValue:"",remark:""},R=i({scopeName:[{required:!0,message:"\u8BF7\u8F93\u5165\u6743\u9650\u7F16\u53F7",type:"error",trigger:"blur"}],resourceCode:[{required:!0,message:"\u8BF7\u8F93\u5165\u6743\u9650\u7F16\u53F7",type:"error",trigger:"blur"}],scopeColumn:[{required:!0,message:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u6BB5",type:"error",trigger:"blur"}],scopeType:[{required:!0,message:"\u8BF7\u9009\u62E9\u89C4\u5219\u7C7B\u578B",type:"error",trigger:"change"}],scopeField:[{required:!0,message:"\u8BF7\u8F93\u5165\u53EF\u89C1\u5B57\u6BB5",type:"error",trigger:"blur"}],scopeClass:[{required:!0,message:"\u8BF7\u8F93\u5165MybatisMapper\u5BF9\u5E94\u65B9\u6CD5\u7684\u5B8C\u6574\u7C7B\u540D\u8DEF\u5F84",type:"error",trigger:"blur"}]}),v=J(()=>`${{view:"\u67E5\u770B",edit:"\u7F16\u8F91",add:"\u65B0\u589E"}[m.actionType]||""}\u6570\u636E\u6743\u9650`),h=J(()=>({view:!0,edit:!1})[m.actionType]||!1),_=i([]);async function g(){const n=await me("data_scope_type");_.value=fe(n)}ce(()=>{g()});const y=i(!1),a=i({...N}),V=i(null),D=i(!1),K=({firstError:n})=>{if(n)Q.warning(n);else{D.value=!0;const{scopeType:u,scopeValue:b}=s(a),r={...a.value,scopeValue:u===5?b:"",menuId:m.rowData.id,id:m.editId};Te(r).then(()=>{C("submit",r),Q.success("\u63D0\u4EA4\u6210\u529F"),y.value=!1}).finally(()=>{D.value=!1})}},A=()=>{a.value={...N},G(()=>{C("update:editId",""),C("update:actionType","")})},E=()=>{y.value=!1};O(()=>y.value,n=>{C("update:visible",n)}),O(()=>m.visible,n=>{n&&S(),n&&m.editId&&G(()=>{Ee(m.editId).then(u=>{a.value={...u}})}),G(()=>{var u;(u=V.value)==null||u.clearValidate()}),y.value=n});function S(n){const{name:u,code:b}=s(m.rowData),r=ae(_.value,n)||"\u6682\u65E0",d=n?ae(we,n):"-";a.value={...a.value,scopeName:`${u} [${r}]`,resourceCode:b,scopeColumn:d}}const U=n=>{S(n)};return(n,u)=>{const b=o("t-input"),r=o("t-form-item"),d=o("t-col"),k=o("t-select"),T=o("t-textarea"),x=o("t-button"),w=o("t-row"),I=o("t-form"),M=o("t-dialog");return j(),X(M,{visible:y.value,"onUpdate:visible":u[8]||(u[8]=l=>y.value=l),header:s(v),width:780,footer:!1,onClosed:A},{body:t(()=>[le(" \u8868\u5355\u5185\u5BB9 "),e(I,{ref_key:"form",ref:V,class:ne({"xy-form__detail":F.actionType==="view"}),data:a.value,rules:R.value,"label-width":100,disabled:s(h)||D.value,onSubmit:K},{default:t(()=>[e(w,{gutter:[0,28]},{default:t(()=>[e(d,{span:6},{default:t(()=>[e(r,{label:"\u6743\u9650\u540D\u79F0",name:"scopeName"},{default:t(()=>[e(b,{modelValue:a.value.scopeName,"onUpdate:modelValue":u[0]||(u[0]=l=>a.value.scopeName=l),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:t(()=>[e(r,{label:"\u6743\u9650\u7F16\u53F7",name:"resourceCode"},{default:t(()=>[e(b,{modelValue:a.value.resourceCode,"onUpdate:modelValue":u[1]||(u[1]=l=>a.value.resourceCode=l),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u7F16\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:t(()=>[e(r,{label:"\u6743\u9650\u5B57\u6BB5",name:"scopeColumn"},{default:t(()=>[e(b,{modelValue:a.value.scopeColumn,"onUpdate:modelValue":u[2]||(u[2]=l=>a.value.scopeColumn=l),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u6BB5",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:t(()=>[e(r,{label:"\u89C4\u5219\u7C7B\u578B",name:"scopeType"},{default:t(()=>[e(k,{modelValue:a.value.scopeType,"onUpdate:modelValue":u[3]||(u[3]=l=>a.value.scopeType=l),options:_.value,keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"\u8BF7\u9009\u62E9\u89C4\u5219\u7C7B\u578B",onChange:U},null,8,["modelValue","options"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(r,{label:"\u53EF\u89C1\u5B57\u6BB5",name:"scopeField"},{default:t(()=>[e(b,{modelValue:a.value.scopeField,"onUpdate:modelValue":u[4]||(u[4]=l=>a.value.scopeField=l),placeholder:"\u8BF7\u8F93\u5165\u53EF\u89C1\u5B57\u6BB5",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(r,{label:"\u6743\u9650\u7C7B\u540D",name:"scopeClass"},{default:t(()=>[e(b,{modelValue:a.value.scopeClass,"onUpdate:modelValue":u[5]||(u[5]=l=>a.value.scopeClass=l),placeholder:"\u8BF7\u8F93\u5165MybatisMapper\u5BF9\u5E94\u65B9\u6CD5\u7684\u5B8C\u6574\u7C7B\u540D\u8DEF\u5F84",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),a.value.scopeType===5?(j(),X(d,{key:0,span:12},{default:t(()=>[e(r,{label:"\u89C4\u5219\u503C",name:"scopeValue"},{default:t(()=>[e(T,{modelValue:a.value.scopeValue,"onUpdate:modelValue":u[6]||(u[6]=l=>a.value.scopeValue=l),placeholder:"\u8BF7\u8F93\u5165\u89C4\u5219\u503C",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):le("v-if",!0),e(d,{span:12},{default:t(()=>[e(r,{label:"\u5907\u6CE8",name:"remark"},{default:t(()=>[e(T,{modelValue:a.value.remark,"onUpdate:modelValue":u[7]||(u[7]=l=>a.value.remark=l),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),se(e(d,{span:12},{default:t(()=>[e(r,{style:{float:"right"}},{default:t(()=>[e(x,{variant:"outline",onClick:E},{default:t(()=>[B("\u53D6\u6D88")]),_:1}),e(x,{theme:"primary",type:"submit"},{default:t(()=>[B("\u786E\u5B9A")]),_:1})]),_:1})]),_:1},512),[[pe,!s(h)]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Ke=Y(xe,[["__file","D:/Study/tdesign-console/src/viewsBusiness/authority/components/datascope/DialogForm.vue"]]),Se={class:"table-wrapper"},Ue=["onClick"],Ne=["onClick"],Ie=["onClick"],Ae=W({__name:"DialogAuthority",props:{visible:{type:Boolean,default:!1},rowData:{type:Object,default:()=>({})}},emits:["update:visible"],setup(F,{emit:C}){const m=F,N=J(()=>`[${m.rowData.name}]\u6570\u636E\u6743\u9650\u914D\u7F6E`),R={scopeName:"",resourceCode:""},v=i([]),h=i(!1),_=i({...R}),g=i(!1),y=i(!1),a=i(""),V=i(""),{fetchData:D,data:K,dataLoading:A,pagination:E}=ie(Ve,{},()=>{v.value=[]}),S=()=>{D({..._.value,menuId:m.rowData.id})},U=({row:f},c)=>{a.value=f.id,V.value=c,y.value=!0},n=({row:f})=>{x.value=f.id,w.value="one",g.value=!0},u=z(()=>{S()},300),b=f=>{v.value=f},r=f=>{E.value={...E.value,current:f.current||1,pageSize:f.pageSize},u()},k=z(async f=>{try{await ke(f),g.value=!1,Q.success("\u5220\u9664\u6210\u529F"),I(),u()}catch{g.value=!1}},300),T=()=>{!v.value.length||(w.value="check",g.value=!0)},x=i(-1),w=i(),I=()=>{x.value=-1,w.value=""},M=()=>{w.value==="check"&&k(v.value),w.value==="one"&&k([`${x.value}`])},l=()=>{I()};return O(()=>h.value,f=>{C("update:visible",f)}),O(()=>m.visible,f=>{f&&S(),h.value=f}),(f,c)=>{const Z=o("t-input"),ee=o("t-form-item"),$=o("t-col"),H=o("t-row"),q=o("t-button"),re=o("t-form"),de=o("t-table"),te=o("t-dialog");return j(),X(te,{visible:h.value,"onUpdate:visible":c[7]||(c[7]=p=>h.value=p),header:s(N),width:1080,footer:!1},{default:t(()=>[e(re,{ref:"form",data:_.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:s(u),onSubmit:s(u)},{default:t(()=>[e(H,null,{default:t(()=>[e($,{span:10},{default:t(()=>[e(H,{gutter:[16,24]},{default:t(()=>[e($,{span:4},{default:t(()=>[e(ee,{label:"\u6743\u9650\u540D\u79F0",name:"scopeName"},{default:t(()=>[e(Z,{modelValue:_.value.scopeName,"onUpdate:modelValue":c[0]||(c[0]=p=>_.value.scopeName=p),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),e($,{span:4},{default:t(()=>[e(ee,{label:"\u6743\u9650\u7F16\u53F7",name:"resourceCode"},{default:t(()=>[e(Z,{modelValue:_.value.resourceCode,"onUpdate:modelValue":c[1]||(c[1]=p=>_.value.resourceCode=p),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u7F16\u53F7"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e($,{span:2,class:"operation-wrapper"},{default:t(()=>[e(q,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[B(" \u67E5\u8BE2 ")]),_:1}),e(q,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[B(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),L("div",Se,[e(de,{data:s(K),columns:s(he),hover:!0,loading:s(A),pagination:s(E),"selected-row-keys":v.value,"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:r,onSelectChange:b},{"top-content":t(()=>[e(H,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e($,{flex:"0 0 auto"},{default:t(()=>[e(q,{onClick:c[2]||(c[2]=p=>U({row:{}},"add"))},{default:t(()=>[B("\u65B0\u589E")]),_:1}),e(q,{theme:"danger",onClick:T},{default:t(()=>[B("\u5220\u9664")]),_:1})]),_:1})]),_:1})]),op:t(p=>[L("a",{class:"t-button-link",onClick:ue=>U(p,"view")},"\u67E5\u770B",8,Ue),L("a",{class:"t-button-link",onClick:ue=>U(p,"edit")},"\u7F16\u8F91",8,Ne),L("a",{class:"t-button-link",onClick:ue=>n(p)},"\u5220\u9664",8,Ie)]),_:1},8,["data","columns","loading","pagination","selected-row-keys"]),e(te,{visible:g.value,"onUpdate:visible":c[3]||(c[3]=p=>g.value=p),header:"\u786E\u8BA4\u5220\u9664\u5F53\u524D\u6240\u9009\u6570\u636E\uFF1F","on-cancel":l,onConfirm:M},null,8,["visible"]),e(Ke,{visible:y.value,"onUpdate:visible":c[4]||(c[4]=p=>y.value=p),editId:a.value,"onUpdate:editId":c[5]||(c[5]=p=>a.value=p),actionType:V.value,"onUpdate:actionType":c[6]||(c[6]=p=>V.value=p),"row-data":m.rowData,onSubmit:s(u)},null,8,["visible","editId","actionType","row-data","onSubmit"])])]),_:1},8,["visible","header"])}}}),Me=Y(Ae,[["__file","D:/Study/tdesign-console/src/viewsBusiness/authority/components/datascope/DialogAuthority.vue"]]),$e={class:"table-wrapper"},Le=["onClick"],je=W({__name:"datascope",setup(F){const{tableVar:C}=Ce(),{getTableHeaderAffixedTop:m,getLayoutContainer:N}=De(),v=i({...{name:"",code:""}}),h=ve({childrenKey:"children",treeNodeColumnIndex:1}),_=i(!1),g=i({}),{fetchData:y,data:a,dataLoading:V}=ie(_e,v.value,ge,!1);be(()=>{y()});const D=i(!1),K=i(null),A=()=>{D.value=!D.value,D.value?K.value.expandAll():K.value.foldAll()},E=z(()=>{y()},300),S=z(A,300),U=({row:n})=>{g.value=n,_.value=!0};return(n,u)=>{const b=o("t-input"),r=o("t-form-item"),d=o("t-col"),k=o("t-row"),T=o("t-button"),x=o("t-form"),w=o("t-icon"),I=o("t-enhanced-table"),M=Fe("auth");return j(),oe("div",{class:ne(s(C))},[e(x,{ref:"form",data:v.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:s(E),onSubmit:s(E)},{default:t(()=>[e(k,null,{default:t(()=>[e(d,{span:10},{default:t(()=>[e(k,{gutter:[16,24]},{default:t(()=>[e(d,{span:4},{default:t(()=>[e(r,{label:"\u83DC\u5355\u540D\u79F0",name:"name"},{default:t(()=>[e(b,{modelValue:v.value.name,"onUpdate:modelValue":u[0]||(u[0]=l=>v.value.name=l),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:4},{default:t(()=>[e(r,{label:"\u83DC\u5355\u7F16\u53F7",name:"code"},{default:t(()=>[e(b,{modelValue:v.value.code,"onUpdate:modelValue":u[1]||(u[1]=l=>v.value.code=l),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u7F16\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{span:2,class:"operation-wrapper"},{default:t(()=>[e(T,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[B(" \u67E5\u8BE2 ")]),_:1}),e(T,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[B(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),L("div",$e,[e(I,{ref_key:"enhancedTable",ref:K,data:s(a),columns:s(Be),hover:!0,loading:s(V),tree:h,"header-affixed-top":{offsetTop:s(m),container:s(N)},"vertical-align":"top","row-key":"id",bordered:"",stripe:""},{"top-content":t(()=>[e(k,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(d,{flex:"0 0 auto"}),e(d,{flex:"0 0 auto"},{default:t(()=>[e(T,{theme:"default",onClick:s(S)},{default:t(()=>[B(ye(D.value?"\u6536\u8D77\u5168\u90E8":"\u5C55\u5F00\u5168\u90E8"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),source:t(({row:l})=>[e(w,{name:l.source},null,8,["name"])]),op:t(l=>[se((j(),oe("a",{class:"t-button-link",onClick:f=>U(l)},[B("\u6743\u9650\u914D\u7F6E")],8,Le)),[[M,"data_scope_setting"]])]),_:1},8,["data","columns","loading","tree","header-affixed-top"]),e(Me,{visible:_.value,"onUpdate:visible":u[2]||(u[2]=l=>_.value=l),"row-data":g.value},null,8,["visible","row-data"])])],2)}}}),He=Y(je,[["__file","D:/Study/tdesign-console/src/views/authority/datascope.vue"]]);export{He as default};