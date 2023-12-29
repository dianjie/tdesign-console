import{ar as O,d as H,f as m,M as F,a7 as j,r as o,o as V,m as P,w as t,a as e,b as u,q as _,i as Q,aw as W,c as I,e as X,$ as z,s as Y}from"./index-c2e89b2e.js";import{u as Z}from"./useSetting-9ed5cec4.js";import{u as ee}from"./useDesign-16212514.js";import{u as te}from"./useRequset-d7ecab22.js";import{a as ae}from"./oss-b0d0354a.js";import{u as K}from"./index-d5763e7f.js";const oe=(v,g,h)=>O.get({url:"/blade-resource/attach/list",params:{...h,current:v,size:g}},{joinTime:!1}),le=v=>O.post({url:"/blade-resource/attach/remove",params:{ids:v}},{joinParamsToUrl:!0,errorMessageMode:"message"}),ne=H({__name:"DialogUpload",props:{visible:{type:Boolean,default:!1}},emits:["update:visible","submit"],setup(v,{emit:g}){const h={attachFile:[]},N=v,R=m({attachFile:[{required:!0,message:"请选择附件",type:"error",trigger:"change"}]}),i=m(!1),n=m({...h}),f=m(null),d=m(!1),y=m(),x=g,w=K(({firstError:a})=>{a?F.warning(a):(d.value=!0,y.value.uploadFiles())},300),B=()=>{var a;(a=f.value)==null||a.reset()},T=()=>{i.value=!1};j(()=>i.value,a=>{x("update:visible",a)}),j(()=>N.visible,a=>{i.value=a});const b=({file:a})=>{F.error(`文件 ${a.name} 上传失败`),d.value=!1},M=async a=>{try{const p=await ae({file:a.raw});return{status:"success",response:{...p,url:p.link}}}catch{return{status:"fail",error:"上传失败"}}},q=()=>{x("submit",{}),F.success("上传成功"),d.value=!1};return(a,p)=>{const L=o("t-upload"),U=o("t-form-item"),S=o("t-col"),s=o("t-button"),l=o("t-row"),C=o("t-form"),k=o("t-dialog");return V(),P(k,{visible:i.value,"onUpdate:visible":p[1]||(p[1]=c=>i.value=c),header:"对象存储上传调试",width:580,footer:!1,onClosed:B},{body:t(()=>[e(C,{ref_key:"form",ref:f,data:n.value,rules:R.value,"label-width":100,disabled:d.value,onSubmit:u(w)},{default:t(()=>[e(l,{gutter:[0,28]},{default:t(()=>[e(S,{span:12},{default:t(()=>[e(U,{label:"附件上传",name:"attachFile"},{default:t(()=>[e(L,{ref_key:"uploadRef",ref:y,modelValue:n.value.attachFile,"onUpdate:modelValue":p[0]||(p[0]=c=>n.value.attachFile=c),"auto-upload":!1,"request-method":M,disabled:d.value,onFail:b,onSuccess:q},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(S,{span:12},{default:t(()=>[e(U,{style:{float:"right"}},{default:t(()=>[e(s,{variant:"outline",onClick:T},{default:t(()=>[_("关闭")]),_:1}),e(s,{theme:"primary",disabled:d.value,type:"submit"},{default:t(()=>[_("上传")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["data","rules","disabled","onSubmit"])]),_:1},8,["visible"])}}}),se=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"附件地址",colKey:"link"},{title:"附件域名",colKey:"domainUrl"},{title:"附件名称",colKey:"name"},{title:"附件原名",colKey:"originalName"},{title:"附件拓展名",colKey:"extension"},{title:"附件大小(KB)",colKey:"attachSize"},{fixed:"right",width:100,colKey:"op",title:"操作",align:"center"}],ie={class:"table-wrapper"},re=["onClick"],ve=H({__name:"attach",setup(v){const{tableVar:g}=ee(),{getTableHeaderAffixedTop:h,getLayoutContainer:N}=Z(),R={domainUrl:"",name:"",originalName:""},i=m([]),n=m({...R}),f=m(!1),d=m(!1),{fetchData:y,data:x,pagination:w,dataLoading:B}=te(oe,n.value,()=>{i.value=[]});Q(()=>{y()});const T=({row:s})=>{window.open(`${s.link}`)},b=K(()=>{y()},300),M=s=>{i.value=s},q=s=>{w.value={...w.value,current:s.current||1,pageSize:s.pageSize},b()},a=()=>{i.value.length&&(f.value=!0)},L=K(async s=>{try{await le(s),f.value=!1,F.success("删除成功"),b()}catch{f.value=!1}},300),U=()=>{L(i.value)},S=K(()=>{d.value=!0},300);return(s,l)=>{const C=o("t-input"),k=o("t-form-item"),c=o("t-col"),A=o("t-row"),D=o("t-button"),E=o("t-form"),G=o("t-table"),J=o("t-dialog"),$=W("auth");return V(),I("div",{class:Y(u(g))},[e(E,{ref:"form",data:n.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:u(b),onSubmit:u(b)},{default:t(()=>[e(A,null,{default:t(()=>[e(c,{span:10},{default:t(()=>[e(A,{gutter:[16,24]},{default:t(()=>[e(c,{span:4},{default:t(()=>[e(k,{label:"附件域名",name:"domainUrl"},{default:t(()=>[e(C,{modelValue:n.value.domainUrl,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value.domainUrl=r),clearable:"",placeholder:"请输入附件域名"},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{span:4},{default:t(()=>[e(k,{label:"附件名称",name:"name"},{default:t(()=>[e(C,{modelValue:n.value.name,"onUpdate:modelValue":l[1]||(l[1]=r=>n.value.name=r),clearable:"",placeholder:"请输入附件名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{span:4},{default:t(()=>[e(k,{label:"附件原名",name:"originalName"},{default:t(()=>[e(C,{modelValue:n.value.originalName,"onUpdate:modelValue":l[2]||(l[2]=r=>n.value.originalName=r),clearable:"",placeholder:"请输入附件原名"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{span:2,class:"operation-wrapper"},{default:t(()=>[e(D,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[_(" 查询 ")]),_:1}),e(D,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[_(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),X("div",ie,[e(G,{data:u(x),columns:u(se),hover:!0,loading:u(B),pagination:u(w),"selected-row-keys":i.value,"header-affixed-top":{offsetTop:u(h),container:u(N)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:q,onSelectChange:M},{"top-content":t(()=>[e(A,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(c,{flex:"0 0 auto"},{default:t(()=>[z((V(),P(D,{onClick:u(S)},{default:t(()=>[_("上传")]),_:1},8,["onClick"])),[[$,"attach_upload"]]),z((V(),P(D,{theme:"danger",onClick:a},{default:t(()=>[_("删除")]),_:1})),[[$,"attach_delete"]])]),_:1})]),_:1})]),op:t(r=>[z((V(),I("a",{class:"t-button-link",onClick:ue=>T(r)},[_("下载")],8,re)),[[$,"attach_download"]])]),_:1},8,["data","columns","loading","pagination","selected-row-keys","header-affixed-top"]),e(J,{visible:f.value,"onUpdate:visible":l[3]||(l[3]=r=>f.value=r),header:"确认删除当前所选数据？",onConfirm:U},null,8,["visible"]),e(ne,{visible:d.value,"onUpdate:visible":l[4]||(l[4]=r=>d.value=r)},null,8,["visible"])])],2)}}});export{ve as default};