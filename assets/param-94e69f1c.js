import{ar as R,d as Y,f as i,Q as G,a7 as J,W as z,r as n,o as h,m as P,w as a,a as e,s as Z,$ as D,q as v,a0 as ne,M as H,i as se,aw as re,c as B,b as p,e as ue}from"./index-c2e89b2e.js";import{u as ie}from"./useSetting-9ed5cec4.js";import{u as de}from"./useDesign-16212514.js";import{u as me}from"./useRequset-d7ecab22.js";import{u as X}from"./index-d5763e7f.js";const ce=(d,N,C)=>R.get({url:"/blade-system/param/list",params:{...C,current:d,size:N}},{joinTime:!1}),pe=d=>R.get({url:"/blade-system/param/detail",params:{id:d}}),fe=d=>R.post({url:"/blade-system/param/remove",params:{ids:d}},{joinParamsToUrl:!0,errorMessageMode:"message"}),ve=d=>R.post({url:"/blade-system/param/submit",data:d}),_e=Y({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType","submit"],setup(d,{emit:N}){const C={paramName:"",paramKey:"",paramValue:""},_=d,q=i({paramName:[{required:!0,message:"请输入参数名称",type:"error",trigger:"blur"}],paramKey:[{required:!0,message:"请输入参数键名",type:"error",trigger:"blur"}],paramValue:[{required:!0,message:"请输入参数键值",type:"error",trigger:"blur"}]}),g=G(()=>`${{view:"查看",edit:"编辑",add:"新增"}[_.actionType]||""}参数`),f=G(()=>({view:!0,edit:!1})[_.actionType]||!1),u=i(!1),s=i({...C}),k=i(null),y=i(!1),V=N,A=({firstError:r})=>{if(r)H.warning(r);else{y.value=!0;const t={...s.value,id:_.editId};ve(t).then(()=>{V("submit",t),H.success("提交成功"),u.value=!1}).finally(()=>{y.value=!1})}},I=()=>{s.value={...C},z(()=>{V("update:editId",""),V("update:actionType","")})},L=()=>{u.value=!1};return J(()=>u.value,r=>{V("update:visible",r)}),J(()=>_.visible,r=>{r&&_.editId&&z(()=>{pe(_.editId).then(t=>{s.value={...t}})}),z(()=>{var t;(t=k.value)==null||t.clearValidate()}),u.value=r}),(r,t)=>{const b=n("t-input"),x=n("t-form-item"),T=n("t-col"),O=n("t-textarea"),S=n("t-button"),M=n("t-row"),K=n("t-form"),w=n("t-dialog");return h(),P(w,{visible:u.value,"onUpdate:visible":t[3]||(t[3]=c=>u.value=c),header:g.value,width:780,footer:!1,onClosed:I},{body:a(()=>[e(K,{ref_key:"form",ref:k,class:Z({"xy-form__detail":d.actionType==="view"}),data:s.value,rules:q.value,"label-width":100,disabled:f.value||y.value,onSubmit:A},{default:a(()=>[e(M,{gutter:[0,28]},{default:a(()=>[e(T,{span:12},{default:a(()=>[e(x,{label:"参数名称",name:"paramName"},{default:a(()=>[e(b,{modelValue:s.value.paramName,"onUpdate:modelValue":t[0]||(t[0]=c=>s.value.paramName=c),placeholder:"请输入参数名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(T,{span:12},{default:a(()=>[e(x,{label:"参数键名",name:"paramKey"},{default:a(()=>[e(b,{modelValue:s.value.paramKey,"onUpdate:modelValue":t[1]||(t[1]=c=>s.value.paramKey=c),placeholder:"请输入参数键名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(T,{span:12},{default:a(()=>[e(x,{label:"参数键值",name:"paramValue"},{default:a(()=>[e(O,{modelValue:s.value.paramValue,"onUpdate:modelValue":t[2]||(t[2]=c=>s.value.paramValue=c),placeholder:"请输入参数键值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),D(e(T,{span:12},{default:a(()=>[e(x,{style:{float:"right"}},{default:a(()=>[e(S,{variant:"outline",onClick:L},{default:a(()=>[v("取消")]),_:1}),e(S,{theme:"primary",type:"submit"},{default:a(()=>[v("确定")]),_:1})]),_:1})]),_:1},512),[[ne,!f.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),be=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"参数名称",colKey:"paramName"},{title:"参数键名",colKey:"paramKey"},{title:"参数键值",colKey:"paramValue"},{fixed:"right",width:180,colKey:"op",title:"操作",align:"center"}],ge={class:"table-wrapper"},ye=["onClick"],Ve=["onClick"],we=["onClick"],De=Y({__name:"param",setup(d){const{tableVar:N}=de(),{getTableHeaderAffixedTop:C,getLayoutContainer:_}=ie(),q={paramName:"",paramValue:""},g=i([]),f=i({...q}),u=i(!1),s=i(!1),k=i(""),y=i(""),{fetchData:V,data:A,pagination:I,dataLoading:L}=me(ce,f.value,()=>{g.value=[]});se(()=>{V()});const r=({row:m},l)=>{k.value=m.id,y.value=l,s.value=!0},t=({row:m})=>{K.value=m.id,w.value="one",u.value=!0},b=X(()=>{V()},300),x=m=>{g.value=m},T=m=>{I.value={...I.value,current:m.current||1,pageSize:m.pageSize},b()},S=X(async m=>{try{await fe(m),u.value=!1,H.success("删除成功"),c(),b()}catch{u.value=!1}},300),M=()=>{g.value.length&&(w.value="check",u.value=!0)},K=i(-1),w=i(),c=()=>{K.value=-1,w.value=""},ee=()=>{w.value==="check"&&S(g.value),w.value==="one"&&S([`${K.value}`])},ae=()=>{c()};return(m,l)=>{const Q=n("t-input"),W=n("t-form-item"),U=n("t-col"),F=n("t-row"),j=n("t-button"),te=n("t-form"),le=n("t-table"),oe=n("t-dialog"),$=re("auth");return h(),B("div",{class:Z(p(N))},[e(te,{ref:"form",data:f.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:p(b),onSubmit:p(b)},{default:a(()=>[e(F,null,{default:a(()=>[e(U,{span:10},{default:a(()=>[e(F,{gutter:[16,24]},{default:a(()=>[e(U,{span:4},{default:a(()=>[e(W,{label:"参数名称",name:"paramName"},{default:a(()=>[e(Q,{modelValue:f.value.paramName,"onUpdate:modelValue":l[0]||(l[0]=o=>f.value.paramName=o),clearable:"",placeholder:"请输入参数名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(U,{span:4},{default:a(()=>[e(W,{label:"参数键名",name:"paramValue"},{default:a(()=>[e(Q,{modelValue:f.value.paramValue,"onUpdate:modelValue":l[1]||(l[1]=o=>f.value.paramValue=o),clearable:"",placeholder:"请输入参数键名"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{span:2,class:"operation-wrapper"},{default:a(()=>[e(j,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:a(()=>[v(" 查询 ")]),_:1}),e(j,{type:"reset",variant:"base",theme:"default"},{default:a(()=>[v(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),ue("div",ge,[e(le,{data:p(A),columns:p(be),hover:!0,loading:p(L),pagination:p(I),"selected-row-keys":g.value,"header-affixed-top":{offsetTop:p(C),container:p(_)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:T,onSelectChange:x},{"top-content":a(()=>[e(F,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:a(()=>[e(U,{flex:"0 0 auto"},{default:a(()=>[D((h(),P(j,{onClick:l[2]||(l[2]=o=>r({row:{}},"add"))},{default:a(()=>[v("新增")]),_:1})),[[$,"param_add"]]),D((h(),P(j,{theme:"danger",onClick:M},{default:a(()=>[v("删除")]),_:1})),[[$,"param_delete"]])]),_:1})]),_:1})]),op:a(o=>[D((h(),B("a",{class:"t-button-link",onClick:E=>r(o,"view")},[v("查看")],8,ye)),[[$,"param_view"]]),D((h(),B("a",{class:"t-button-link",onClick:E=>r(o,"edit")},[v("编辑")],8,Ve)),[[$,"param_edit"]]),D((h(),B("a",{class:"t-button-link",onClick:E=>t(o)},[v("删除")],8,we)),[[$,"param_delete"]])]),_:1},8,["data","columns","loading","pagination","selected-row-keys","header-affixed-top"]),e(oe,{visible:u.value,"onUpdate:visible":l[3]||(l[3]=o=>u.value=o),header:"确认删除当前所选数据？","on-cancel":ae,onConfirm:ee},null,8,["visible"]),e(_e,{visible:s.value,"onUpdate:visible":l[4]||(l[4]=o=>s.value=o),editId:k.value,"onUpdate:editId":l[5]||(l[5]=o=>k.value=o),actionType:y.value,"onUpdate:actionType":l[6]||(l[6]=o=>y.value=o),onSubmit:p(b)},null,8,["visible","editId","actionType","onSubmit"])])],2)}}});export{De as default};