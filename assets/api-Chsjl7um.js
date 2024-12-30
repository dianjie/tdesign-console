import{g as z,a as R}from"./api-A-4rWpEp.js";import{u as $}from"./useSetting-CnYQd1RY.js";import{u as M}from"./useDesign-CbWcZHFZ.js";import{u as P}from"./useRequset-Bj5fiv5N.js";import{d as L,f as p,J as S,a2 as q,Q as A,r as u,o as k,m as E,w as t,a as e,s as F,i as J,as as O,c as B,q as H,b as m,e as Q,W,at as G}from"./index-CqGaQ7t4.js";import{u as X}from"./index-BidCcHov.js";const Y=L({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType"],setup(w,{emit:x}){const I={serviceId:"",serverHost:"",serverIp:"",env:"",title:"",method:"",requestUri:"",createTime:"",userAgent:"",params:""},c=w,K=p({}),v=S(()=>`${{view:"查看",edit:"编辑",add:"新增"}[c.actionType]||""}接口日志`),V=S(()=>({view:!0,edit:!1})[c.actionType]||!1),f=p(!1),o=p({...I}),g=p(null),D=p(!1),_=x,C=()=>{o.value={...I},A(()=>{_("update:editId",""),_("update:actionType","")})};return q(()=>f.value,r=>{_("update:visible",r)}),q(()=>c.visible,r=>{r&&c.editId&&A(()=>{z(c.editId).then(a=>{o.value={...a}})}),A(()=>{var a;(a=g.value)==null||a.clearValidate()}),f.value=r}),(r,a)=>{const i=u("t-input"),s=u("t-form-item"),l=u("t-col"),y=u("t-textarea"),T=u("t-row"),b=u("t-form"),U=u("t-dialog");return k(),E(U,{visible:f.value,"onUpdate:visible":a[10]||(a[10]=n=>f.value=n),header:v.value,width:780,footer:!1,onClosed:C},{body:t(()=>[e(b,{ref_key:"form",ref:g,class:F({"xy-form__detail":w.actionType==="view"}),data:o.value,rules:K.value,"label-width":100,disabled:V.value||D.value},{default:t(()=>[e(T,{gutter:[0,28]},{default:t(()=>[e(l,{span:6},{default:t(()=>[e(s,{label:"服务id",name:"serviceId"},{default:t(()=>[e(i,{modelValue:o.value.serviceId,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value.serviceId=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{span:6},{default:t(()=>[e(s,{label:"服务host",name:"serverHost"},{default:t(()=>[e(i,{modelValue:o.value.serverHost,"onUpdate:modelValue":a[1]||(a[1]=n=>o.value.serverHost=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{span:6},{default:t(()=>[e(s,{label:"服务ip",name:"serverIp"},{default:t(()=>[e(i,{modelValue:o.value.serverIp,"onUpdate:modelValue":a[2]||(a[2]=n=>o.value.serverIp=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{span:6},{default:t(()=>[e(s,{label:"软件环境",name:"env"},{default:t(()=>[e(i,{modelValue:o.value.env,"onUpdate:modelValue":a[3]||(a[3]=n=>o.value.env=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{span:6},{default:t(()=>[e(s,{label:"日志名",name:"title"},{default:t(()=>[e(i,{modelValue:o.value.title,"onUpdate:modelValue":a[4]||(a[4]=n=>o.value.title=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{span:6},{default:t(()=>[e(s,{label:"请求方法",name:"method"},{default:t(()=>[e(i,{modelValue:o.value.method,"onUpdate:modelValue":a[5]||(a[5]=n=>o.value.method=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{span:6},{default:t(()=>[e(s,{label:"请求接口",name:"requestUri"},{default:t(()=>[e(i,{modelValue:o.value.requestUri,"onUpdate:modelValue":a[6]||(a[6]=n=>o.value.requestUri=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{span:6},{default:t(()=>[e(s,{label:"日志时间",name:"createTime"},{default:t(()=>[e(i,{modelValue:o.value.createTime,"onUpdate:modelValue":a[7]||(a[7]=n=>o.value.createTime=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{span:12},{default:t(()=>[e(s,{label:"用户代理",name:"userAgent"},{default:t(()=>[e(y,{modelValue:o.value.userAgent,"onUpdate:modelValue":a[8]||(a[8]=n=>o.value.userAgent=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{span:12},{default:t(()=>[e(s,{label:"请求数据",name:"params"},{default:t(()=>[e(y,{modelValue:o.value.params,"onUpdate:modelValue":a[9]||(a[9]=n=>o.value.params=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Z=[{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"服务id",colKey:"serviceId"},{title:"服务host",colKey:"serverHost"},{title:"服务ip",colKey:"serverIp"},{title:"软件环境",colKey:"env"},{title:"请求方法",colKey:"method"},{title:"请求接口",colKey:"requestUri"},{title:"日志时间",colKey:"createTime"},{fixed:"right",width:80,colKey:"op",title:"操作",align:"center"}],ee={class:"table-wrapper"},te=["onClick"],ie=L({__name:"api",setup(w){const{tableVar:x}=M(),{getTableHeaderAffixedTop:I,getLayoutContainer:c}=$(),v=p({...{serviceId:"",serverHost:""}}),V=p(!1),f=p(""),o=p(""),{fetchData:g,data:D,pagination:_,dataLoading:C}=P(R,v.value,G);J(()=>{g()});const r=({row:s},l)=>{f.value=s.id,o.value=l,V.value=!0},a=X(()=>{g()},300),i=s=>{_.value={..._.value,current:s.current||1,pageSize:s.pageSize},a()};return(s,l)=>{const y=u("t-input"),T=u("t-form-item"),b=u("t-col"),U=u("t-row"),n=u("t-button"),N=u("t-form"),h=u("t-table"),j=O("auth");return k(),B("div",{class:F(m(x))},[e(N,{ref:"form",data:v.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:m(a),onSubmit:m(a)},{default:t(()=>[e(U,null,{default:t(()=>[e(b,{span:10},{default:t(()=>[e(U,{gutter:[16,24]},{default:t(()=>[e(b,{span:4},{default:t(()=>[e(T,{label:"服务id",name:"serviceId"},{default:t(()=>[e(y,{modelValue:v.value.serviceId,"onUpdate:modelValue":l[0]||(l[0]=d=>v.value.serviceId=d),clearable:"",placeholder:"请输入服务id"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:4},{default:t(()=>[e(T,{label:"服务host",name:"serverHost"},{default:t(()=>[e(y,{modelValue:v.value.serverHost,"onUpdate:modelValue":l[1]||(l[1]=d=>v.value.serverHost=d),clearable:"",placeholder:"请输入服务host"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{span:2,class:"operation-wrapper"},{default:t(()=>[e(n,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>l[5]||(l[5]=[H(" 查询 ")])),_:1}),e(n,{type:"reset",variant:"base",theme:"default"},{default:t(()=>l[6]||(l[6]=[H(" 重置 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),Q("div",ee,[e(h,{data:m(D),columns:m(Z),hover:!0,loading:m(C),pagination:m(_),"header-affixed-top":{offsetTop:m(I),container:m(c)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:i},{op:t(d=>[W((k(),B("a",{class:"t-button-link",onClick:ae=>r(d,"view")},l[7]||(l[7]=[H("查看")]),8,te)),[[j,"log_api_view"]])]),_:1},8,["data","columns","loading","pagination","header-affixed-top"]),e(Y,{visible:V.value,"onUpdate:visible":l[2]||(l[2]=d=>V.value=d),editId:f.value,"onUpdate:editId":l[3]||(l[3]=d=>f.value=d),actionType:o.value,"onUpdate:actionType":l[4]||(l[4]=d=>o.value=d)},null,8,["visible","editId","actionType"])])],2)}}});export{ie as default};