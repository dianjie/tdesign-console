import{an as H,d as Y,f as r,J as W,ad as de,a2 as E,Q,b as c,au as le,r as s,o as R,m as X,w as t,a as e,s as ne,p as ce,W as se,q as D,X as pe,ao as me,ap as fe,M as G,e as B,aq as ve,ar as be,i as _e,as as ye,c as oe,t as ge,at as Ce}from"./index-CqGaQ7t4.js";import{u as we}from"./useSetting-CnYQd1RY.js";import{u as Ve}from"./useDesign-CbWcZHFZ.js";import{u as ue}from"./useRequset-Bj5fiv5N.js";import{u as P}from"./index-BidCcHov.js";const he=(b,I,w)=>H.get({url:"/blade-system/data-scope/list",params:{...w,current:b,size:I}},{joinTime:!1}),ke=b=>H.get({url:"/blade-system/data-scope/detail",params:{id:b}}),Te=b=>H.post({url:"/blade-system/data-scope/remove",params:{ids:b}},{joinParamsToUrl:!0,errorMessageMode:"message"}),De=b=>H.post({url:"/blade-system/data-scope/submit",data:b},{errorMessageMode:"message"}),xe=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"权限名称",colKey:"scopeName",ellipsis:!0,width:200},{title:"权限编号",colKey:"resourceCode",ellipsis:!0,width:200},{title:"权限字段",colKey:"scopeColumn",ellipsis:!0,width:200},{title:"规则类型",colKey:"scopeTypeName",ellipsis:!0,width:200},{fixed:"right",width:180,colKey:"op",title:"操作",align:"center"}],Ke=[{dictKey:1,dictValue:"-"},{dictKey:2,dictValue:"create_user"},{dictKey:3,dictValue:"create_dept"},{dictKey:4,dictValue:"create_dept"},{dictKey:5,dictValue:""}],Ue=Y({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""},rowData:{type:Object,default:()=>({})}},emits:["update:visible","update:editId","update:actionType","submit"],setup(b,{emit:I}){const w={scopeName:"",resourceCode:"",scopeColumn:"",scopeType:void 0,scopeField:"*",scopeClass:"",scopeValue:"",remark:""},y=b,O=r({scopeName:[{required:!0,message:"请输入权限编号",type:"error",trigger:"blur"}],resourceCode:[{required:!0,message:"请输入权限编号",type:"error",trigger:"blur"}],scopeColumn:[{required:!0,message:"请输入权限字段",type:"error",trigger:"blur"}],scopeType:[{required:!0,message:"请选择规则类型",type:"error",trigger:"change"}],scopeField:[{required:!0,message:"请输入可见字段",type:"error",trigger:"blur"}],scopeClass:[{required:!0,message:"请输入MybatisMapper对应方法的完整类名路径",type:"error",trigger:"blur"}]}),h=W(()=>`${{view:"查看",edit:"编辑",add:"新增"}[y.actionType]||""}数据权限`),k=W(()=>({view:!0,edit:!1})[y.actionType]||!1),g=r([]);async function V(){const l=await me("data_scope_type");g.value=fe(l)}de(()=>{V()});const p=r(!1),o=r({...w}),K=r(null),C=r(!1),T=I,j=({firstError:l})=>{if(l)G.warning(l);else{C.value=!0;const{scopeType:a,scopeValue:v}=c(o),u={...o.value,scopeValue:a===5?v:"",menuId:y.rowData.id,id:y.editId};De(u).then(()=>{T("submit",u),G.success("提交成功"),p.value=!1}).finally(()=>{C.value=!1})}},F=()=>{o.value={...w},Q(()=>{T("update:editId",""),T("update:actionType","")})},M=()=>{p.value=!1};E(()=>p.value,l=>{T("update:visible",l)}),E(()=>y.visible,l=>{l&&$(),l&&y.editId&&Q(()=>{ke(y.editId).then(a=>{o.value={...a}})}),Q(()=>{var a;(a=K.value)==null||a.clearValidate()}),p.value=l});function $(l){const{name:a,code:v}=c(y.rowData),u=le(g.value,l)||"暂无",m=l?le(Ke,l):"-";o.value={...o.value,scopeName:`${a} [${u}]`,resourceCode:v,scopeColumn:m}}const U=l=>{$(l)};return(l,a)=>{const v=s("t-input"),u=s("t-form-item"),m=s("t-col"),N=s("t-select"),A=s("t-textarea"),S=s("t-button"),x=s("t-row"),L=s("t-form"),_=s("t-dialog");return R(),X(_,{visible:p.value,"onUpdate:visible":a[8]||(a[8]=i=>p.value=i),header:h.value,width:780,footer:!1,onClosed:F},{body:t(()=>[e(L,{ref_key:"form",ref:K,class:ne({"xy-form__detail":b.actionType==="view"}),data:o.value,rules:O.value,"label-width":100,disabled:k.value||C.value,onSubmit:j},{default:t(()=>[e(x,{gutter:[0,28]},{default:t(()=>[e(m,{span:6},{default:t(()=>[e(u,{label:"权限名称",name:"scopeName"},{default:t(()=>[e(v,{modelValue:o.value.scopeName,"onUpdate:modelValue":a[0]||(a[0]=i=>o.value.scopeName=i),placeholder:"请输入权限名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:6},{default:t(()=>[e(u,{label:"权限编号",name:"resourceCode"},{default:t(()=>[e(v,{modelValue:o.value.resourceCode,"onUpdate:modelValue":a[1]||(a[1]=i=>o.value.resourceCode=i),placeholder:"请输入权限编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:6},{default:t(()=>[e(u,{label:"权限字段",name:"scopeColumn"},{default:t(()=>[e(v,{modelValue:o.value.scopeColumn,"onUpdate:modelValue":a[2]||(a[2]=i=>o.value.scopeColumn=i),placeholder:"请输入权限字段",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:6},{default:t(()=>[e(u,{label:"规则类型",name:"scopeType"},{default:t(()=>[e(N,{modelValue:o.value.scopeType,"onUpdate:modelValue":a[3]||(a[3]=i=>o.value.scopeType=i),options:g.value,keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择规则类型",onChange:U},null,8,["modelValue","options"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(u,{label:"可见字段",name:"scopeField"},{default:t(()=>[e(v,{modelValue:o.value.scopeField,"onUpdate:modelValue":a[4]||(a[4]=i=>o.value.scopeField=i),placeholder:"请输入可见字段",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(u,{label:"权限类名",name:"scopeClass"},{default:t(()=>[e(v,{modelValue:o.value.scopeClass,"onUpdate:modelValue":a[5]||(a[5]=i=>o.value.scopeClass=i),placeholder:"请输入MybatisMapper对应方法的完整类名路径",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o.value.scopeType===5?(R(),X(m,{key:0,span:12},{default:t(()=>[e(u,{label:"规则值",name:"scopeValue"},{default:t(()=>[e(A,{modelValue:o.value.scopeValue,"onUpdate:modelValue":a[6]||(a[6]=i=>o.value.scopeValue=i),placeholder:"请输入规则值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):ce("",!0),e(m,{span:12},{default:t(()=>[e(u,{label:"备注",name:"remark"},{default:t(()=>[e(A,{modelValue:o.value.remark,"onUpdate:modelValue":a[7]||(a[7]=i=>o.value.remark=i),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),se(e(m,{span:12},{default:t(()=>[e(u,{style:{float:"right"}},{default:t(()=>[e(S,{variant:"outline",onClick:M},{default:t(()=>a[9]||(a[9]=[D("取消")])),_:1}),e(S,{theme:"primary",type:"submit"},{default:t(()=>a[10]||(a[10]=[D("确定")])),_:1})]),_:1})]),_:1},512),[[pe,!k.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Ne={class:"table-wrapper"},Se=["onClick"],Ie=["onClick"],Me=["onClick"],$e=Y({__name:"DialogAuthority",props:{visible:{type:Boolean,default:!1},rowData:{type:Object,default:()=>({})}},emits:["update:visible"],setup(b,{emit:I}){const w=b,y=W(()=>`[${w.rowData.name}]数据权限配置`),O=I,h={scopeName:"",resourceCode:""},k=r([]),g=r(!1),V=r({...h}),p=r(!1),o=r(!1),K=r(""),C=r(""),{fetchData:T,data:j,dataLoading:F,pagination:M}=ue(he,{},()=>{k.value=[]}),$=()=>{T({...V.value,menuId:w.rowData.id})},U=({row:f},n)=>{K.value=f.id,C.value=n,o.value=!0},l=({row:f})=>{S.value=f.id,x.value="one",p.value=!0},a=P(()=>{$()},300),v=f=>{k.value=f},u=f=>{M.value={...M.value,current:f.current||1,pageSize:f.pageSize},a()},N=P(async f=>{try{await Te(f),p.value=!1,G.success("删除成功"),L(),a()}catch{p.value=!1}},300),A=()=>{k.value.length&&(x.value="check",p.value=!0)},S=r(-1),x=r(),L=()=>{S.value=-1,x.value=""},_=()=>{x.value==="check"&&N(k.value),x.value==="one"&&N([`${S.value}`])},i=()=>{L()};return E(()=>g.value,f=>{O("update:visible",f)}),E(()=>w.visible,f=>{f&&$(),g.value=f}),(f,n)=>{const Z=s("t-input"),ee=s("t-form-item"),q=s("t-col"),J=s("t-row"),z=s("t-button"),ie=s("t-form"),re=s("t-table"),te=s("t-dialog");return R(),X(te,{visible:g.value,"onUpdate:visible":n[7]||(n[7]=d=>g.value=d),header:y.value,width:1080,footer:!1},{default:t(()=>[e(ie,{ref:"form",data:V.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:c(a),onSubmit:c(a)},{default:t(()=>[e(J,null,{default:t(()=>[e(q,{span:10},{default:t(()=>[e(J,{gutter:[16,24]},{default:t(()=>[e(q,{span:4},{default:t(()=>[e(ee,{label:"权限名称",name:"scopeName"},{default:t(()=>[e(Z,{modelValue:V.value.scopeName,"onUpdate:modelValue":n[0]||(n[0]=d=>V.value.scopeName=d),clearable:"",placeholder:"请输入权限名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(q,{span:4},{default:t(()=>[e(ee,{label:"权限编号",name:"resourceCode"},{default:t(()=>[e(Z,{modelValue:V.value.resourceCode,"onUpdate:modelValue":n[1]||(n[1]=d=>V.value.resourceCode=d),clearable:"",placeholder:"请输入权限编号"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(q,{span:2,class:"operation-wrapper"},{default:t(()=>[e(z,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>n[8]||(n[8]=[D(" 查询 ")])),_:1}),e(z,{type:"reset",variant:"base",theme:"default"},{default:t(()=>n[9]||(n[9]=[D(" 重置 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),B("div",Ne,[e(re,{data:c(j),columns:c(xe),hover:!0,loading:c(F),pagination:c(M),"selected-row-keys":k.value,"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:u,onSelectChange:v},{"top-content":t(()=>[e(J,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(q,{flex:"0 0 auto"},{default:t(()=>[e(z,{onClick:n[2]||(n[2]=d=>U({row:{}},"add"))},{default:t(()=>n[10]||(n[10]=[D("新增")])),_:1}),e(z,{theme:"danger",onClick:A},{default:t(()=>n[11]||(n[11]=[D("删除")])),_:1})]),_:1})]),_:1})]),op:t(d=>[B("a",{class:"t-button-link",onClick:ae=>U(d,"view")},"查看",8,Se),B("a",{class:"t-button-link",onClick:ae=>U(d,"edit")},"编辑",8,Ie),B("a",{class:"t-button-link",onClick:ae=>l(d)},"删除",8,Me)]),_:1},8,["data","columns","loading","pagination","selected-row-keys"]),e(te,{visible:p.value,"onUpdate:visible":n[3]||(n[3]=d=>p.value=d),header:"确认删除当前所选数据？","on-cancel":i,onConfirm:_},null,8,["visible"]),e(Ue,{visible:o.value,"onUpdate:visible":n[4]||(n[4]=d=>o.value=d),editId:K.value,"onUpdate:editId":n[5]||(n[5]=d=>K.value=d),actionType:C.value,"onUpdate:actionType":n[6]||(n[6]=d=>C.value=d),"row-data":w.rowData,onSubmit:c(a)},null,8,["visible","editId","actionType","row-data","onSubmit"])])]),_:1},8,["visible","header"])}}}),Fe=[{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"菜单名称",colKey:"name",ellipsis:!0,width:200},{title:"路由地址",colKey:"path",ellipsis:!0,width:200},{title:"菜单图标",colKey:"source",width:80,ellipsis:!0,align:"center"},{title:"菜单编号",colKey:"code",width:150,ellipsis:!0},{title:"菜单别名",colKey:"alias",width:80,ellipsis:!0},{title:"菜单排序",width:80,colKey:"sort",ellipsis:!0},{fixed:"right",width:80,colKey:"op",title:"操作",align:"center"}],Ae={class:"table-wrapper"},Le=["onClick"],ze=Y({__name:"datascope",setup(b){const{tableVar:I}=Ve(),{getTableHeaderAffixedTop:w,getLayoutContainer:y}=we(),h=r({...{name:"",code:""}}),k=ve({childrenKey:"children",treeNodeColumnIndex:1}),g=r(!1),V=r({}),{fetchData:p,data:o,dataLoading:K}=ue(be,h.value,Ce,!1);_e(()=>{p()});const C=r(!1),T=r(null),j=()=>{C.value=!C.value,C.value?T.value.expandAll():T.value.foldAll()},F=P(()=>{p()},300),M=P(j,300),$=({row:U})=>{V.value=U,g.value=!0};return(U,l)=>{const a=s("t-input"),v=s("t-form-item"),u=s("t-col"),m=s("t-row"),N=s("t-button"),A=s("t-form"),S=s("t-icon"),x=s("t-enhanced-table"),L=ye("auth");return R(),oe("div",{class:ne(c(I))},[e(A,{ref:"form",data:h.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:c(F),onSubmit:c(F)},{default:t(()=>[e(m,null,{default:t(()=>[e(u,{span:10},{default:t(()=>[e(m,{gutter:[16,24]},{default:t(()=>[e(u,{span:4},{default:t(()=>[e(v,{label:"菜单名称",name:"name"},{default:t(()=>[e(a,{modelValue:h.value.name,"onUpdate:modelValue":l[0]||(l[0]=_=>h.value.name=_),placeholder:"请输入菜单名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:4},{default:t(()=>[e(v,{label:"菜单编号",name:"code"},{default:t(()=>[e(a,{modelValue:h.value.code,"onUpdate:modelValue":l[1]||(l[1]=_=>h.value.code=_),placeholder:"请输入菜单编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{span:2,class:"operation-wrapper"},{default:t(()=>[e(N,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>l[3]||(l[3]=[D(" 查询 ")])),_:1}),e(N,{type:"reset",variant:"base",theme:"default"},{default:t(()=>l[4]||(l[4]=[D(" 重置 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),B("div",Ae,[e(x,{ref_key:"enhancedTable",ref:T,data:c(o),columns:c(Fe),hover:!0,loading:c(K),tree:k,"header-affixed-top":{offsetTop:c(w),container:c(y)},"vertical-align":"top","row-key":"id",bordered:"",stripe:""},{"top-content":t(()=>[e(m,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(u,{flex:"0 0 auto"}),e(u,{flex:"0 0 auto"},{default:t(()=>[e(N,{theme:"default",onClick:c(M)},{default:t(()=>[D(ge(C.value?"收起全部":"展开全部"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),source:t(({row:_})=>[e(S,{name:_.source},null,8,["name"])]),op:t(_=>[se((R(),oe("a",{class:"t-button-link",onClick:i=>$(_)},l[5]||(l[5]=[D("权限配置")]),8,Le)),[[L,"data_scope_setting"]])]),_:1},8,["data","columns","loading","tree","header-affixed-top"]),e($e,{visible:g.value,"onUpdate:visible":l[2]||(l[2]=_=>g.value=_),"row-data":V.value},null,8,["visible","row-data"])])],2)}}});export{ze as default};