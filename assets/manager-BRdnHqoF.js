import{m as oe,b as le,c as ne}from"./flow-BKWYNEiE.js";import{_ as se}from"./index.vue_vue_type_script_setup_true_lang-BDY8DIY-.js";import{u as ie}from"./useSetting-oU45HIOI.js";import{u as re}from"./useDesign-CbWcZHFZ.js";import{u as ue}from"./useRequset-DXnVyzrU.js";import{d as de,g as i,aH as ce,j as me,r as n,ax as pe,o as _,c as v,a as e,w as t,b as s,s as r,e as fe,a0 as x,t as S,v as _e,ah as ve,M as B,ay as ge}from"./index-C3aixgX8.js";import{g as ye}from"./flowHelper-DDFyLbCI.js";import{u as M}from"./index-C0FKHvC_.js";const be=[{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"租户编号",colKey:"tenantId"},{title:"流程主键",colKey:"id"},{title:"流程标识",colKey:"key"},{title:"流程名称",colKey:"name"},{title:"流程分类",colKey:"categoryName"},{title:"流程版本",colKey:"version"},{title:"状态",colKey:"suspensionState"},{title:"部署时间",colKey:"deploymentTime"},{fixed:"right",width:210,colKey:"op",title:"操作",align:"center"}],he={class:"table-wrapper"},we=["onClick"],Ce=["onClick"],ke=["onClick"],Ne=de({__name:"manager",setup(De){const{tableVar:R}=re(),{getTableHeaderAffixedTop:$,getLayoutContainer:z}=ie(),u=i({...{key:"",category:""}}),p=i(!1),O=ce().getFlowDict,g=i("1"),{fetchData:P,data:j,pagination:y,dataLoading:q}=ue(oe,u.value,ge),I=()=>{P({...u.value,category:ye(u.value.category),mode:g.value})};me(()=>{I()});const d=M(()=>{I()},300),H=l=>{y.value={...y.value,current:l.current||1,pageSize:l.pageSize},d()},E=({row:l})=>{const o=ve.confirm({header:"提示",theme:"warning",body:"确认删除当前所选数据?",onConfirm:M(async()=>{await le(l.deploymentId),B.success("删除成功"),o.destroy(),d()},300)})},G={type:""},J=i({type:[{required:!0,message:"请选择流程状态",type:"error",trigger:"change"}]}),Q=[{value:"active",label:"激活"},{value:"suspend",label:"挂起"}],c=i(!1),f=i({...G}),b=i(null),h=i(""),W=()=>{var l;(l=b.value)==null||l.validate({fields:["type"]}).then(async o=>{if(o===!0){c.value=!0;try{await ne({processId:h.value,state:f.value.type}),p.value=!1,c.value=!1,B.success("变更成功"),d()}catch{c.value=!1}}})},X=()=>{var l;(l=b.value)==null||l.reset(),h.value=""},Y=({row:l})=>{h.value=l.id,p.value=!0},w=i(!1),K=i({}),Z=({row:l})=>{K.value=l,w.value=!0};return(l,o)=>{const F=n("t-input"),C=n("t-form-item"),m=n("t-col"),T=n("t-select"),k=n("t-row"),U=n("t-button"),L=n("t-form"),N=n("t-radio-button"),ee=n("t-radio-group"),D=n("t-tag"),te=n("t-table"),ae=n("t-dialog"),V=pe("auth");return _(),v("div",{class:_e(s(R))},[e(L,{ref:"form",data:u.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:s(d),onSubmit:s(d)},{default:t(()=>[e(k,null,{default:t(()=>[e(m,{span:10},{default:t(()=>[e(k,{gutter:[16,24]},{default:t(()=>[e(m,{span:4},{default:t(()=>[e(C,{label:"流程标识",name:"key"},{default:t(()=>[e(F,{modelValue:u.value.key,"onUpdate:modelValue":o[0]||(o[0]=a=>u.value.key=a),clearable:"",placeholder:"请输入流程标识"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:4},{default:t(()=>[e(C,{label:"流程分类",name:"category"},{default:t(()=>[e(T,{modelValue:u.value.category,"onUpdate:modelValue":o[1]||(o[1]=a=>u.value.category=a),options:s(O),keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择流程分类"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{span:2,class:"operation-wrapper"},{default:t(()=>[e(U,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[r(" 查询 ")]),_:1}),e(U,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[r(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),fe("div",he,[e(te,{data:s(j),columns:s(be),hover:!0,loading:s(q),pagination:s(y),"header-affixed-top":{offsetTop:s($),container:s(z)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:H},{"top-content":t(()=>[e(k,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(m,{flex:"0 0 auto"},{default:t(()=>[e(ee,{modelValue:g.value,"onUpdate:modelValue":o[2]||(o[2]=a=>g.value=a),onChange:s(d)},{default:t(()=>[e(N,{value:"1"},{default:t(()=>[r("通用流程")]),_:1}),e(N,{value:"2"},{default:t(()=>[r("定制流程")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1})]),op:t(a=>[x((_(),v("a",{class:"t-button-link",onClick:A=>Y(a)},[r("变更状态")],8,we)),[[V,"flow_manager_state"]]),x((_(),v("a",{class:"t-button-link",onClick:A=>Z(a)},[r("流程图")],8,Ce)),[[V,"flow_manager_image"]]),x((_(),v("a",{class:"t-button-link",onClick:A=>E(a)},[r("删除")],8,ke)),[[V,"flow_manager_remove"]])]),tenantId:t(({row:a})=>[e(D,{theme:"primary",variant:"light"},{default:t(()=>[r(S(a.tenantId?a.tenantId:"通用"),1)]),_:2},1024)]),version:t(({row:a})=>[e(D,{theme:"primary",variant:"light"},{default:t(()=>[r("v"+S(a.version),1)]),_:2},1024)]),suspensionState:t(({row:a})=>[e(D,{theme:"primary",variant:"light"},{default:t(()=>[r(S(a.suspensionState===1?"激活":"挂起"),1)]),_:2},1024)]),_:1},8,["data","columns","loading","pagination","header-affixed-top"]),e(ae,{visible:p.value,"onUpdate:visible":o[4]||(o[4]=a=>p.value=a),header:"流程变更","confirm-btn":{loading:c.value},onConfirm:W,onClosed:X},{body:t(()=>[e(L,{ref_key:"form2",ref:b,data:f.value,rules:J.value,"label-width":100,disabled:c.value,style:{padding:"25px 0"}},{default:t(()=>[e(C,{label:"流程状态",name:"type"},{default:t(()=>[e(T,{modelValue:f.value.type,"onUpdate:modelValue":o[3]||(o[3]=a=>f.value.type=a),options:Q,placeholder:"请选择流程状态",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["data","rules","disabled"])]),_:1},8,["visible","confirm-btn"]),e(se,{visible:w.value,"onUpdate:visible":o[5]||(o[5]=a=>w.value=a),"row-data":K.value},null,8,["visible","row-data"])])],2)}}});export{Ne as default};