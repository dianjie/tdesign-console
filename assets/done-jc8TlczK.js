import{d as A,aC as E,f as m,i as H,l as P,r as l,as as W,o as f,c as _,a as e,w as o,b as n,q as r,e as j,W as V,t as G,s as J,at as Q}from"./index-CqGaQ7t4.js";import{d as X}from"./work-EOGau8jX.js";import{_ as Y}from"./index.vue_vue_type_script_setup_true_lang-ojmq6q2F.js";import{u as Z}from"./useSetting-CnYQd1RY.js";import{u as ee}from"./useDesign-CbWcZHFZ.js";import{u as te}from"./useRequset-Bj5fiv5N.js";import{g as oe,f as ae}from"./flowHelper-BpDILVBW.js";import{u as ne}from"./index-BidCcHov.js";import"./flow-DzSZmebQ.js";const se=[{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"流程分类",colKey:"categoryName"},{title:"流程名称",colKey:"processDefinitionName"},{title:"当前步骤",colKey:"taskName"},{title:"流程版本",colKey:"processDefinitionVersion"},{title:"申请时间",colKey:"createTime"},{fixed:"right",width:180,colKey:"op",title:"操作",align:"center"}],le={class:"table-wrapper"},ie=["onClick"],re=["onClick"],ye=A({__name:"done",setup(ce){const{tableVar:k}=ee(),{getTableHeaderAffixedTop:C,getLayoutContainer:x}=Z(),N={category:"",processDefinitionName:""},g=E(),i=m({...N}),S=g.getFlowDict,{fetchData:F,data:K,pagination:u,dataLoading:R}=te(X,i.value,Q),v=()=>{F({...i.value,category:oe(i.value.category)})};H(()=>{v()});const d=ne(()=>{v()},300),$=s=>{u.value={...u.value,current:s.current||1,pageSize:s.pageSize},d()},p=m(!1),b=m({}),L=({row:s})=>{b.value=s,p.value=!0},T=P(),B=({row:s})=>{T.push({path:`/work/process/${ae(g.getFlowRoutes,s.category)}/detail/${s.processInstanceId}/${s.businessId}`})};return(s,t)=>{const I=l("t-select"),y=l("t-form-item"),c=l("t-col"),U=l("t-input"),w=l("t-row"),D=l("t-button"),z=l("t-form"),q=l("t-tag"),M=l("t-table"),h=W("auth");return f(),_("div",{class:J(n(k))},[e(z,{ref:"form",data:i.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:n(d),onSubmit:n(d)},{default:o(()=>[e(w,null,{default:o(()=>[e(c,{span:10},{default:o(()=>[e(w,{gutter:[16,24]},{default:o(()=>[e(c,{span:4},{default:o(()=>[e(y,{label:"流程分类",name:"category"},{default:o(()=>[e(I,{modelValue:i.value.category,"onUpdate:modelValue":t[0]||(t[0]=a=>i.value.category=a),options:n(S),keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择流程分类"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(c,{span:4},{default:o(()=>[e(y,{label:"流程名称",name:"processDefinitionName"},{default:o(()=>[e(U,{modelValue:i.value.processDefinitionName,"onUpdate:modelValue":t[1]||(t[1]=a=>i.value.processDefinitionName=a),clearable:"",placeholder:"请输入流程名称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{span:2,class:"operation-wrapper"},{default:o(()=>[e(D,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:o(()=>t[3]||(t[3]=[r(" 查询 ")])),_:1}),e(D,{type:"reset",variant:"base",theme:"default"},{default:o(()=>t[4]||(t[4]=[r(" 重置 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),j("div",le,[e(M,{data:n(K),columns:n(se),hover:!0,loading:n(R),pagination:n(u),"header-affixed-top":{offsetTop:n(C),container:n(x)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:$},{op:o(a=>[V((f(),_("a",{class:"t-button-link",onClick:O=>B(a)},t[5]||(t[5]=[r("详情")]),8,ie)),[[h,"work_done_detail"]]),V((f(),_("a",{class:"t-button-link",onClick:O=>L(a)},t[6]||(t[6]=[r("流程图")]),8,re)),[[h,"work_done_follow"]])]),processDefinitionVersion:o(({row:a})=>[e(q,{theme:"primary",variant:"light"},{default:o(()=>[r("v"+G(a.processDefinitionVersion),1)]),_:2},1024)]),_:1},8,["data","columns","loading","pagination","header-affixed-top"]),e(Y,{visible:p.value,"onUpdate:visible":t[2]||(t[2]=a=>p.value=a),"row-data":b.value,type:"diagram"},null,8,["visible","row-data"])])],2)}}});export{ye as default};
