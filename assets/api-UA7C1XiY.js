import{g as R,a as z}from"./api-B8kygZD1.js";import{u as $}from"./useSetting-ClCIfPYr.js";import{u as M}from"./useDesign-CbWcZHFZ.js";import{u as P}from"./useRequset-B-inZ1Vp.js";import{d as B,g as p,R as K,a3 as S,X as h,r as u,o as H,n as E,w as t,a as e,v as L,j as O,ax as X,c as q,s as A,b as m,e as G,a0 as J,ay as Q}from"./index-xQy0Awhn.js";import{u as W}from"./index-vN_i3xzp.js";const Y=B({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType"],setup(w,{emit:x}){const I={serviceId:"",serverHost:"",serverIp:"",env:"",title:"",method:"",requestUri:"",createTime:"",userAgent:"",params:""},c=w,k=p({}),v=K(()=>`${{view:"查看",edit:"编辑",add:"新增"}[c.actionType]||""}接口日志`),V=K(()=>({view:!0,edit:!1})[c.actionType]||!1),f=p(!1),l=p({...I}),g=p(null),D=p(!1),_=x,C=()=>{l.value={...I},h(()=>{_("update:editId",""),_("update:actionType","")})};return S(()=>f.value,r=>{_("update:visible",r)}),S(()=>c.visible,r=>{r&&c.editId&&h(()=>{R(c.editId).then(a=>{l.value={...a}})}),h(()=>{var a;(a=g.value)==null||a.clearValidate()}),f.value=r}),(r,a)=>{const i=u("t-input"),s=u("t-form-item"),n=u("t-col"),y=u("t-textarea"),T=u("t-row"),b=u("t-form"),U=u("t-dialog");return H(),E(U,{visible:f.value,"onUpdate:visible":a[10]||(a[10]=o=>f.value=o),header:v.value,width:780,footer:!1,onClosed:C},{body:t(()=>[e(b,{ref_key:"form",ref:g,class:L({"xy-form__detail":w.actionType==="view"}),data:l.value,rules:k.value,"label-width":100,disabled:V.value||D.value},{default:t(()=>[e(T,{gutter:[0,28]},{default:t(()=>[e(n,{span:6},{default:t(()=>[e(s,{label:"服务id",name:"serviceId"},{default:t(()=>[e(i,{modelValue:l.value.serviceId,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value.serviceId=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:6},{default:t(()=>[e(s,{label:"服务host",name:"serverHost"},{default:t(()=>[e(i,{modelValue:l.value.serverHost,"onUpdate:modelValue":a[1]||(a[1]=o=>l.value.serverHost=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:6},{default:t(()=>[e(s,{label:"服务ip",name:"serverIp"},{default:t(()=>[e(i,{modelValue:l.value.serverIp,"onUpdate:modelValue":a[2]||(a[2]=o=>l.value.serverIp=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:6},{default:t(()=>[e(s,{label:"软件环境",name:"env"},{default:t(()=>[e(i,{modelValue:l.value.env,"onUpdate:modelValue":a[3]||(a[3]=o=>l.value.env=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:6},{default:t(()=>[e(s,{label:"日志名",name:"title"},{default:t(()=>[e(i,{modelValue:l.value.title,"onUpdate:modelValue":a[4]||(a[4]=o=>l.value.title=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:6},{default:t(()=>[e(s,{label:"请求方法",name:"method"},{default:t(()=>[e(i,{modelValue:l.value.method,"onUpdate:modelValue":a[5]||(a[5]=o=>l.value.method=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:6},{default:t(()=>[e(s,{label:"请求接口",name:"requestUri"},{default:t(()=>[e(i,{modelValue:l.value.requestUri,"onUpdate:modelValue":a[6]||(a[6]=o=>l.value.requestUri=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:6},{default:t(()=>[e(s,{label:"日志时间",name:"createTime"},{default:t(()=>[e(i,{modelValue:l.value.createTime,"onUpdate:modelValue":a[7]||(a[7]=o=>l.value.createTime=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:t(()=>[e(s,{label:"用户代理",name:"userAgent"},{default:t(()=>[e(y,{modelValue:l.value.userAgent,"onUpdate:modelValue":a[8]||(a[8]=o=>l.value.userAgent=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:t(()=>[e(s,{label:"请求数据",name:"params"},{default:t(()=>[e(y,{modelValue:l.value.params,"onUpdate:modelValue":a[9]||(a[9]=o=>l.value.params=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Z=[{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"服务id",colKey:"serviceId"},{title:"服务host",colKey:"serverHost"},{title:"服务ip",colKey:"serverIp"},{title:"软件环境",colKey:"env"},{title:"请求方法",colKey:"method"},{title:"请求接口",colKey:"requestUri"},{title:"日志时间",colKey:"createTime"},{fixed:"right",width:80,colKey:"op",title:"操作",align:"center"}],ee={class:"table-wrapper"},te=["onClick"],ie=B({__name:"api",setup(w){const{tableVar:x}=M(),{getTableHeaderAffixedTop:I,getLayoutContainer:c}=$(),v=p({...{serviceId:"",serverHost:""}}),V=p(!1),f=p(""),l=p(""),{fetchData:g,data:D,pagination:_,dataLoading:C}=P(z,v.value,Q);O(()=>{g()});const r=({row:s},n)=>{f.value=s.id,l.value=n,V.value=!0},a=W(()=>{g()},300),i=s=>{_.value={..._.value,current:s.current||1,pageSize:s.pageSize},a()};return(s,n)=>{const y=u("t-input"),T=u("t-form-item"),b=u("t-col"),U=u("t-row"),o=u("t-button"),j=u("t-form"),F=u("t-table"),N=X("auth");return H(),q("div",{class:L(m(x))},[e(j,{ref:"form",data:v.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:m(a),onSubmit:m(a)},{default:t(()=>[e(U,null,{default:t(()=>[e(b,{span:10},{default:t(()=>[e(U,{gutter:[16,24]},{default:t(()=>[e(b,{span:4},{default:t(()=>[e(T,{label:"服务id",name:"serviceId"},{default:t(()=>[e(y,{modelValue:v.value.serviceId,"onUpdate:modelValue":n[0]||(n[0]=d=>v.value.serviceId=d),clearable:"",placeholder:"请输入服务id"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:4},{default:t(()=>[e(T,{label:"服务host",name:"serverHost"},{default:t(()=>[e(y,{modelValue:v.value.serverHost,"onUpdate:modelValue":n[1]||(n[1]=d=>v.value.serverHost=d),clearable:"",placeholder:"请输入服务host"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{span:2,class:"operation-wrapper"},{default:t(()=>[e(o,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[A(" 查询 ")]),_:1}),e(o,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[A(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),G("div",ee,[e(F,{data:m(D),columns:m(Z),hover:!0,loading:m(C),pagination:m(_),"header-affixed-top":{offsetTop:m(I),container:m(c)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:i},{op:t(d=>[J((H(),q("a",{class:"t-button-link",onClick:ae=>r(d,"view")},[A("查看")],8,te)),[[N,"log_api_view"]])]),_:1},8,["data","columns","loading","pagination","header-affixed-top"]),e(Y,{visible:V.value,"onUpdate:visible":n[2]||(n[2]=d=>V.value=d),editId:f.value,"onUpdate:editId":n[3]||(n[3]=d=>f.value=d),actionType:l.value,"onUpdate:actionType":n[4]||(n[4]=d=>l.value=d)},null,8,["visible","editId","actionType"])])],2)}}});export{ie as default};
