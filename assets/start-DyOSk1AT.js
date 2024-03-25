import{d as P,aH as G,g as d,j as J,m as Q,r as o,ax as W,o as v,c as y,a as t,w as e,b as n,s as l,e as X,a0 as D,t as b,v as Y,ay as Z}from"./index-C3aixgX8.js";import{e as ee}from"./work-10cLSsRZ.js";import{_ as te}from"./index.vue_vue_type_script_setup_true_lang-BDY8DIY-.js";import{u as ae}from"./useSetting-oU45HIOI.js";import{u as oe}from"./useDesign-CbWcZHFZ.js";import{u as ne}from"./useRequset-DXnVyzrU.js";import{g as le,f as se}from"./flowHelper-DDFyLbCI.js";import{u as re}from"./index-C0FKHvC_.js";import"./flow-BKWYNEiE.js";const ie=[{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"租户编号",colKey:"tenantId"},{title:"流程分类",colKey:"categoryName"},{title:"流程标识",colKey:"key"},{title:"流程名称",colKey:"name"},{title:"流程版本",colKey:"version"},{title:"状态",colKey:"suspensionState"},{title:"部署时间",colKey:"deploymentTime"},{fixed:"right",width:210,colKey:"op",title:"操作",align:"center"}],ue={class:"table-wrapper"},ce=["onClick"],de=["onClick"],Ce=P({__name:"start",setup(me){const{tableVar:K}=oe(),{getTableHeaderAffixedTop:F,getLayoutContainer:R}=ae(),I={category:"",name:""},h=G(),s=d({...I}),L=h.getFlowDict,m=d("1"),{fetchData:N,data:T,pagination:p,dataLoading:U}=ne(ee,s.value,Z),w=()=>{N({...s.value,category:le(s.value.category),mode:m.value})};J(()=>{w()});const c=re(()=>{w()},300),$=r=>{p.value={...p.value,current:r.current||1,pageSize:r.pageSize},c()},_=d(!1),C=d({}),B=({row:r})=>{C.value=r,_.value=!0},z=Q(),j=({row:r})=>{z.push({path:`/work/process/${se(h.getFlowRoutes,r.category)}/form/${r.id}`})};return(r,i)=>{const H=o("t-select"),V=o("t-form-item"),u=o("t-col"),M=o("t-input"),f=o("t-row"),k=o("t-button"),O=o("t-form"),x=o("t-radio-button"),q=o("t-radio-group"),g=o("t-tag"),A=o("t-table"),S=W("auth");return v(),y("div",{class:Y(n(K))},[t(O,{ref:"form",data:s.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:n(c),onSubmit:n(c)},{default:e(()=>[t(f,null,{default:e(()=>[t(u,{span:10},{default:e(()=>[t(f,{gutter:[16,24]},{default:e(()=>[t(u,{span:4},{default:e(()=>[t(V,{label:"流程分类",name:"category"},{default:e(()=>[t(H,{modelValue:s.value.category,"onUpdate:modelValue":i[0]||(i[0]=a=>s.value.category=a),options:n(L),keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择流程分类"},null,8,["modelValue","options"])]),_:1})]),_:1}),t(u,{span:4},{default:e(()=>[t(V,{label:"流程名称",name:"name"},{default:e(()=>[t(M,{modelValue:s.value.name,"onUpdate:modelValue":i[1]||(i[1]=a=>s.value.name=a),clearable:"",placeholder:"请输入流程名称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(u,{span:2,class:"operation-wrapper"},{default:e(()=>[t(k,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:e(()=>[l(" 查询 ")]),_:1}),t(k,{type:"reset",variant:"base",theme:"default"},{default:e(()=>[l(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),X("div",ue,[t(A,{data:n(T),columns:n(ie),hover:!0,loading:n(U),pagination:n(p),"header-affixed-top":{offsetTop:n(F),container:n(R)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:$},{"top-content":e(()=>[t(f,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:e(()=>[t(u,{flex:"0 0 auto"},{default:e(()=>[t(q,{modelValue:m.value,"onUpdate:modelValue":i[2]||(i[2]=a=>m.value=a),onChange:n(c)},{default:e(()=>[t(x,{value:"1"},{default:e(()=>[l("通用流程")]),_:1}),t(x,{value:"2"},{default:e(()=>[l("定制流程")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1})]),op:e(a=>[D((v(),y("a",{class:"t-button-link",onClick:E=>j(a)},[l("发起")],8,ce)),[[S,"work_start_flow"]]),D((v(),y("a",{class:"t-button-link",onClick:E=>B(a)},[l("流程图")],8,de)),[[S,"work_start_image"]])]),tenantId:e(({row:a})=>[t(g,{theme:"primary",variant:"light"},{default:e(()=>[l(b(a.tenantId?a.tenantId:"通用"),1)]),_:2},1024)]),version:e(({row:a})=>[t(g,{theme:"primary",variant:"light"},{default:e(()=>[l("v"+b(a.version),1)]),_:2},1024)]),suspensionState:e(({row:a})=>[t(g,{theme:"primary",variant:"light"},{default:e(()=>[l(b(a.suspensionState===1?"激活":"挂起"),1)]),_:2},1024)]),_:1},8,["data","columns","loading","pagination","header-affixed-top"]),t(te,{visible:_.value,"onUpdate:visible":i[3]||(i[3]=a=>_.value=a),"row-data":C.value},null,8,["visible","row-data"])])],2)}}});export{Ce as default};