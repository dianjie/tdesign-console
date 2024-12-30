import{an as E,d as X,f as s,J as Q,ad as re,a2 as P,Q as J,r as o,o as O,m as le,w as t,a as e,s as oe,W as ne,q as T,X as de,ao as ce,ap as pe,M as W,b as m,e as R,aq as me,ar as fe,i as ve,as as be,c as ae,t as _e,at as ge}from"./index-CqGaQ7t4.js";import{u as ye}from"./useSetting-CnYQd1RY.js";import{u as we}from"./useDesign-CbWcZHFZ.js";import{u as se}from"./useRequset-Bj5fiv5N.js";import{u as z}from"./index-BidCcHov.js";const he=(v,S,_)=>E.get({url:"/blade-system/api-scope/list",params:{..._,current:v,size:S}},{joinTime:!1}),Ce=v=>E.get({url:"/blade-system/api-scope/detail",params:{id:v}}),ke=v=>E.post({url:"/blade-system/api-scope/remove",params:{ids:v}},{joinParamsToUrl:!0,errorMessageMode:"message"}),Ve=v=>E.post({url:"/blade-system/api-scope/submit",data:v},{errorMessageMode:"message"}),xe=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"权限名称",colKey:"scopeName",ellipsis:!0,width:200},{title:"权限编号",colKey:"resourceCode",ellipsis:!0,width:200},{title:"权限路径",colKey:"scopePath",ellipsis:!0,width:200},{title:"接口类型",colKey:"scopeTypeName",ellipsis:!0,width:200},{fixed:"right",width:180,colKey:"op",title:"操作",align:"center"}],De=X({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""},rowData:{type:Object,default:()=>({})}},emits:["update:visible","update:editId","update:actionType","submit"],setup(v,{emit:S}){const _={scopeName:"",resourceCode:"",scopePath:"",scopeType:"",remark:""},g=v,q=s({scopeName:[{required:!0,message:"请输入权限编号",type:"error",trigger:"blur"}],resourceCode:[{required:!0,message:"请输入权限编号",type:"error",trigger:"blur"}],scopePath:[{required:!0,message:"请输入权限路径",type:"error",trigger:"blur"}],scopeType:[{required:!0,message:"请选择接口类型",type:"error",trigger:"change"}]}),k=Q(()=>`${{view:"查看",edit:"编辑",add:"新增"}[g.actionType]||""}接口权限`),V=Q(()=>({view:!0,edit:!1})[g.actionType]||!1),y=s([]);async function w(){const r=await ce("api_scope_type");y.value=pe(r)}re(()=>{w()});const d=s(!1),n=s({..._}),N=s(null),b=s(!1),x=S,M=({firstError:r})=>{if(r)W.warning(r);else{b.value=!0;const a={...n.value,menuId:g.rowData.id,id:g.editId};Ve(a).then(()=>{x("submit",a),W.success("提交成功"),d.value=!1}).finally(()=>{b.value=!1})}},A=()=>{n.value={..._},J(()=>{x("update:editId",""),x("update:actionType","")})},I=()=>{d.value=!1};return P(()=>d.value,r=>{x("update:visible",r)}),P(()=>g.visible,r=>{r&&g.editId&&J(()=>{Ce(g.editId).then(a=>{n.value={...a}})}),J(()=>{var a;(a=N.value)==null||a.clearValidate()}),d.value=r}),(r,a)=>{const i=o("t-input"),f=o("t-form-item"),h=o("t-col"),D=o("t-select"),L=o("t-textarea"),U=o("t-button"),j=o("t-row"),$=o("t-form"),K=o("t-dialog");return O(),le(K,{visible:d.value,"onUpdate:visible":a[5]||(a[5]=c=>d.value=c),header:k.value,width:780,footer:!1,onClosed:A},{body:t(()=>[e($,{ref_key:"form",ref:N,class:oe({"xy-form__detail":v.actionType==="view"}),data:n.value,rules:q.value,"label-width":100,disabled:V.value||b.value,onSubmit:M},{default:t(()=>[e(j,{gutter:[0,28]},{default:t(()=>[e(h,{span:6},{default:t(()=>[e(f,{label:"权限名称",name:"scopeName"},{default:t(()=>[e(i,{modelValue:n.value.scopeName,"onUpdate:modelValue":a[0]||(a[0]=c=>n.value.scopeName=c),placeholder:"请输入权限名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(h,{span:6},{default:t(()=>[e(f,{label:"权限编号",name:"resourceCode"},{default:t(()=>[e(i,{modelValue:n.value.resourceCode,"onUpdate:modelValue":a[1]||(a[1]=c=>n.value.resourceCode=c),placeholder:"请输入权限编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(h,{span:6},{default:t(()=>[e(f,{label:"权限路径",name:"scopePath"},{default:t(()=>[e(i,{modelValue:n.value.scopePath,"onUpdate:modelValue":a[2]||(a[2]=c=>n.value.scopePath=c),placeholder:"请输入权限路径",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(h,{span:6},{default:t(()=>[e(f,{label:"接口类型",name:"scopeType"},{default:t(()=>[e(D,{modelValue:n.value.scopeType,"onUpdate:modelValue":a[3]||(a[3]=c=>n.value.scopeType=c),options:y.value,keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择接口类型"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(h,{span:12},{default:t(()=>[e(f,{label:"备注",name:"remark"},{default:t(()=>[e(L,{modelValue:n.value.remark,"onUpdate:modelValue":a[4]||(a[4]=c=>n.value.remark=c),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),ne(e(h,{span:12},{default:t(()=>[e(f,{style:{float:"right"}},{default:t(()=>[e(U,{variant:"outline",onClick:I},{default:t(()=>a[6]||(a[6]=[T("取消")])),_:1}),e(U,{theme:"primary",type:"submit"},{default:t(()=>a[7]||(a[7]=[T("确定")])),_:1})]),_:1})]),_:1},512),[[de,!V.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Te={class:"table-wrapper"},Ue=["onClick"],Ke=["onClick"],Ne=["onClick"],Se=X({__name:"DialogAuthority",props:{visible:{type:Boolean,default:!1},rowData:{type:Object,default:()=>({})}},emits:["update:visible"],setup(v,{emit:S}){const _=v,g=Q(()=>`[${_.rowData.name}]接口权限配置`),q=S,k={scopeName:"",resourceCode:""},V=s([]),y=s(!1),w=s({...k}),d=s(!1),n=s(!1),N=s(""),b=s(""),{fetchData:x,data:M,dataLoading:A,pagination:I}=se(he,{},()=>{V.value=[]}),r=()=>{x({...w.value,menuId:_.rowData.id})},a=({row:p},l)=>{N.value=p.id,b.value=l,n.value=!0},i=({row:p})=>{$.value=p.id,K.value="one",d.value=!0},f=z(()=>{r()},300),h=p=>{V.value=p},D=p=>{I.value={...I.value,current:p.current||1,pageSize:p.pageSize},f()},U=z(async p=>{try{await ke(p),d.value=!1,W.success("删除成功"),c(),f()}catch{d.value=!1}},300),j=()=>{V.value.length&&(K.value="check",d.value=!0)},$=s(-1),K=s(),c=()=>{$.value=-1,K.value=""},C=()=>{K.value==="check"&&U(V.value),K.value==="one"&&U([`${$.value}`])},G=()=>{c()};return P(()=>y.value,p=>{q("update:visible",p)}),P(()=>_.visible,p=>{p&&r(),y.value=p}),(p,l)=>{const Y=o("t-input"),Z=o("t-form-item"),B=o("t-col"),H=o("t-row"),F=o("t-button"),ie=o("t-form"),ue=o("t-table"),ee=o("t-dialog");return O(),le(ee,{visible:y.value,"onUpdate:visible":l[7]||(l[7]=u=>y.value=u),header:g.value,width:1080,footer:!1},{default:t(()=>[e(ie,{ref:"form",data:w.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:m(f),onSubmit:m(f)},{default:t(()=>[e(H,null,{default:t(()=>[e(B,{span:10},{default:t(()=>[e(H,{gutter:[16,24]},{default:t(()=>[e(B,{span:4},{default:t(()=>[e(Z,{label:"权限名称",name:"scopeName"},{default:t(()=>[e(Y,{modelValue:w.value.scopeName,"onUpdate:modelValue":l[0]||(l[0]=u=>w.value.scopeName=u),clearable:"",placeholder:"请输入权限名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(B,{span:4},{default:t(()=>[e(Z,{label:"权限编号",name:"resourceCode"},{default:t(()=>[e(Y,{modelValue:w.value.resourceCode,"onUpdate:modelValue":l[1]||(l[1]=u=>w.value.resourceCode=u),clearable:"",placeholder:"请输入权限编号"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(B,{span:2,class:"operation-wrapper"},{default:t(()=>[e(F,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>l[8]||(l[8]=[T(" 查询 ")])),_:1}),e(F,{type:"reset",variant:"base",theme:"default"},{default:t(()=>l[9]||(l[9]=[T(" 重置 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),R("div",Te,[e(ue,{data:m(M),columns:m(xe),hover:!0,loading:m(A),pagination:m(I),"selected-row-keys":V.value,"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:D,onSelectChange:h},{"top-content":t(()=>[e(H,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(B,{flex:"0 0 auto"},{default:t(()=>[e(F,{onClick:l[2]||(l[2]=u=>a({row:{}},"add"))},{default:t(()=>l[10]||(l[10]=[T("新增")])),_:1}),e(F,{theme:"danger",onClick:j},{default:t(()=>l[11]||(l[11]=[T("删除")])),_:1})]),_:1})]),_:1})]),op:t(u=>[R("a",{class:"t-button-link",onClick:te=>a(u,"view")},"查看",8,Ue),R("a",{class:"t-button-link",onClick:te=>a(u,"edit")},"编辑",8,Ke),R("a",{class:"t-button-link",onClick:te=>i(u)},"删除",8,Ne)]),_:1},8,["data","columns","loading","pagination","selected-row-keys"]),e(ee,{visible:d.value,"onUpdate:visible":l[3]||(l[3]=u=>d.value=u),header:"确认删除当前所选数据？","on-cancel":G,onConfirm:C},null,8,["visible"]),e(De,{visible:n.value,"onUpdate:visible":l[4]||(l[4]=u=>n.value=u),editId:N.value,"onUpdate:editId":l[5]||(l[5]=u=>N.value=u),actionType:b.value,"onUpdate:actionType":l[6]||(l[6]=u=>b.value=u),"row-data":_.rowData,onSubmit:m(f)},null,8,["visible","editId","actionType","row-data","onSubmit"])])]),_:1},8,["visible","header"])}}}),Ie=[{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"菜单名称",colKey:"name",ellipsis:!0,width:200},{title:"路由地址",colKey:"path",ellipsis:!0,width:200},{title:"菜单图标",colKey:"source",width:80,ellipsis:!0,align:"center"},{title:"菜单编号",colKey:"code",width:150,ellipsis:!0},{title:"菜单别名",colKey:"alias",width:80,ellipsis:!0},{title:"菜单排序",width:80,colKey:"sort",ellipsis:!0},{fixed:"right",width:80,colKey:"op",title:"操作",align:"center"}],$e={class:"table-wrapper"},Ae=["onClick"],qe=X({__name:"apiscope",setup(v){const{tableVar:S}=we(),{getTableHeaderAffixedTop:_,getLayoutContainer:g}=ye(),k=s({...{name:"",code:""}}),V=me({childrenKey:"children",treeNodeColumnIndex:1}),y=s(!1),w=s({}),{fetchData:d,data:n,dataLoading:N}=se(fe,k.value,ge,!1);ve(()=>{d()});const b=s(!1),x=s(null),M=()=>{b.value=!b.value,b.value?x.value.expandAll():x.value.foldAll()},A=z(()=>{d()},300),I=z(M,300),r=({row:a})=>{w.value=a,y.value=!0};return(a,i)=>{const f=o("t-input"),h=o("t-form-item"),D=o("t-col"),L=o("t-row"),U=o("t-button"),j=o("t-form"),$=o("t-icon"),K=o("t-enhanced-table"),c=be("auth");return O(),ae("div",{class:oe(m(S))},[e(j,{ref:"form",data:k.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:m(A),onSubmit:m(A)},{default:t(()=>[e(L,null,{default:t(()=>[e(D,{span:10},{default:t(()=>[e(L,{gutter:[16,24]},{default:t(()=>[e(D,{span:4},{default:t(()=>[e(h,{label:"菜单名称",name:"name"},{default:t(()=>[e(f,{modelValue:k.value.name,"onUpdate:modelValue":i[0]||(i[0]=C=>k.value.name=C),placeholder:"请输入菜单名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(D,{span:4},{default:t(()=>[e(h,{label:"菜单编号",name:"code"},{default:t(()=>[e(f,{modelValue:k.value.code,"onUpdate:modelValue":i[1]||(i[1]=C=>k.value.code=C),placeholder:"请输入菜单编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(D,{span:2,class:"operation-wrapper"},{default:t(()=>[e(U,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>i[3]||(i[3]=[T(" 查询 ")])),_:1}),e(U,{type:"reset",variant:"base",theme:"default"},{default:t(()=>i[4]||(i[4]=[T(" 重置 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),R("div",$e,[e(K,{ref_key:"enhancedTable",ref:x,data:m(n),columns:m(Ie),hover:!0,loading:m(N),tree:V,"header-affixed-top":{offsetTop:m(_),container:m(g)},"vertical-align":"top","row-key":"id",bordered:"",stripe:""},{"top-content":t(()=>[e(L,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(D,{flex:"0 0 auto"}),e(D,{flex:"0 0 auto"},{default:t(()=>[e(U,{theme:"default",onClick:m(I)},{default:t(()=>[T(_e(b.value?"收起全部":"展开全部"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),source:t(({row:C})=>[e($,{name:C.source},null,8,["name"])]),op:t(C=>[ne((O(),ae("a",{class:"t-button-link",onClick:G=>r(C)},i[5]||(i[5]=[T("权限配置")]),8,Ae)),[[c,"api_scope_setting"]])]),_:1},8,["data","columns","loading","tree","header-affixed-top"]),e(Se,{visible:y.value,"onUpdate:visible":i[2]||(i[2]=C=>y.value=C),"row-data":w.value},null,8,["visible","row-data"])])],2)}}});export{qe as default};