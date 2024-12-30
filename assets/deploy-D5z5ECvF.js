import{d as B}from"./flow-DzSZmebQ.js";import{g as T}from"./tenant-BajJal67.js";import{u as A}from"./useDesign-CbWcZHFZ.js";import{d as O,aC as L,f as m,ad as R,r as n,o as v,c as j,a as e,w as a,b as c,q as f,m as z,p as K,s as P,M as _}from"./index-CqGaQ7t4.js";import{g as $}from"./flowHelper-BpDILVBW.js";import{u as E}from"./index-BidCcHov.js";const Z=O({__name:"deploy",setup(G){const{tableVar:y}=A(),V=L().getFlowDict,g=m([]);async function w(){const l=await T();g.value=l}R(()=>{w()});const F={categoryValue:"",flowMode:1,tenantId:[],attachFile:[]},I=m({categoryValue:[{required:!0,message:"请选择流程类型",type:"error",trigger:"change"}],flowMode:[{required:!0,message:"请选择流程模式",type:"error",trigger:"change"}],tenantId:[{required:!0,message:"请选择所属租户",type:"error",trigger:"change"}],attachFile:[{required:!0,message:"请选择附件",type:"error",trigger:"change"}]}),o=m({...F}),M=m(null),d=m(!1),b=m(),k=E(({firstError:l})=>{l?_.warning(l):(d.value=!0,b.value.uploadFiles())},300),h=({file:l})=>{_.error(`流程 ${l.name} 部署失败`),d.value=!1},q=async l=>{try{const{categoryValue:t,flowMode:i,tenantId:s}=c(o),u={tenantId:i===2?s.join(","):""};return{status:"success",response:{...await B($(t),u.tenantId,l.raw),url:"success"}}}catch{return{status:"fail",error:"部署失败"}}},C=()=>{_.success("部署成功"),d.value=!1};return(l,t)=>{const i=n("t-select"),s=n("t-form-item"),u=n("t-col"),p=n("t-radio"),D=n("t-radio-group"),S=n("t-upload"),x=n("t-button"),N=n("t-row"),U=n("t-form");return v(),j("div",{class:P(c(y))},[e(U,{ref_key:"form",ref:M,data:o.value,rules:I.value,"label-width":100,disabled:d.value,onSubmit:c(k)},{default:a(()=>[e(N,{gutter:[0,28]},{default:a(()=>[e(u,{span:6},{default:a(()=>[e(s,{label:"流程类型",name:"categoryValue"},{default:a(()=>[e(i,{modelValue:o.value.categoryValue,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value.categoryValue=r),options:c(V),keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择流程类型"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(u,{span:12},{default:a(()=>[e(s,{label:"流程模式",name:"flowMode"},{default:a(()=>[e(D,{modelValue:o.value.flowMode,"onUpdate:modelValue":t[1]||(t[1]=r=>o.value.flowMode=r)},{default:a(()=>[e(p,{value:1},{default:a(()=>t[4]||(t[4]=[f("通用流程")])),_:1}),e(p,{value:2},{default:a(()=>t[5]||(t[5]=[f("定制流程")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),o.value.flowMode===2?(v(),z(u,{key:0,span:6},{default:a(()=>[e(s,{label:"所属租户",name:"tenantId"},{default:a(()=>[e(i,{modelValue:o.value.tenantId,"onUpdate:modelValue":t[2]||(t[2]=r=>o.value.tenantId=r),multiple:"",options:g.value,keys:{value:"tenantId",label:"tenantName"},clearable:"",placeholder:"请选择所属租户"},null,8,["modelValue","options"])]),_:1})]),_:1})):K("",!0),e(u,{span:12},{default:a(()=>[e(s,{label:"附件上传",name:"attachFile"},{default:a(()=>[e(S,{ref_key:"uploadRef",ref:b,modelValue:o.value.attachFile,"onUpdate:modelValue":t[3]||(t[3]=r=>o.value.attachFile=r),tips:"请上传 bpmn20.xml 标准格式文件","auto-upload":!1,"request-method":q,disabled:d.value,onFail:h,onSuccess:C},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(u,{span:12},{default:a(()=>[e(s,null,{default:a(()=>[e(x,{theme:"primary",disabled:d.value,type:"submit"},{default:a(()=>t[6]||(t[6]=[f("部署")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["data","rules","disabled","onSubmit"])],2)}}});export{Z as default};