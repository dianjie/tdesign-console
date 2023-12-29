import{ar as H,d as Y,f as i,Q as G,ai as de,a7 as E,W,b as c,ay as le,r as n,o as q,m as J,w as t,a as e,s as ne,p as ce,$ as se,q as x,a0 as pe,as as me,at as fe,M as X,e as R,au as ve,av as _e,i as be,aw as ye,c as oe,t as ge,ax as we}from"./index-c2e89b2e.js";import{u as Ce}from"./useSetting-9ed5cec4.js";import{u as he}from"./useDesign-16212514.js";import{u as ue}from"./useRequset-d7ecab22.js";import{u as P}from"./index-d5763e7f.js";const Ve=(_,I,C)=>H.get({url:"/blade-system/data-scope/list",params:{...C,current:_,size:I}},{joinTime:!1}),ke=_=>H.get({url:"/blade-system/data-scope/detail",params:{id:_}}),Te=_=>H.post({url:"/blade-system/data-scope/remove",params:{ids:_}},{joinParamsToUrl:!0,errorMessageMode:"message"}),xe=_=>H.post({url:"/blade-system/data-scope/submit",data:_},{errorMessageMode:"message"}),De=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"权限名称",colKey:"scopeName",ellipsis:!0,width:200},{title:"权限编号",colKey:"resourceCode",ellipsis:!0,width:200},{title:"权限字段",colKey:"scopeColumn",ellipsis:!0,width:200},{title:"规则类型",colKey:"scopeTypeName",ellipsis:!0,width:200},{fixed:"right",width:180,colKey:"op",title:"操作",align:"center"}],Ke=[{dictKey:1,dictValue:"-"},{dictKey:2,dictValue:"create_user"},{dictKey:3,dictValue:"create_dept"},{dictKey:4,dictValue:"create_dept"},{dictKey:5,dictValue:""}],Ue=Y({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""},rowData:{type:Object,default:()=>({})}},emits:["update:visible","update:editId","update:actionType","submit"],setup(_,{emit:I}){const C={scopeName:"",resourceCode:"",scopeColumn:"",scopeType:void 0,scopeField:"*",scopeClass:"",scopeValue:"",remark:""},y=_,O=i({scopeName:[{required:!0,message:"请输入权限编号",type:"error",trigger:"blur"}],resourceCode:[{required:!0,message:"请输入权限编号",type:"error",trigger:"blur"}],scopeColumn:[{required:!0,message:"请输入权限字段",type:"error",trigger:"blur"}],scopeType:[{required:!0,message:"请选择规则类型",type:"error",trigger:"change"}],scopeField:[{required:!0,message:"请输入可见字段",type:"error",trigger:"blur"}],scopeClass:[{required:!0,message:"请输入MybatisMapper对应方法的完整类名路径",type:"error",trigger:"blur"}]}),V=G(()=>`${{view:"查看",edit:"编辑",add:"新增"}[y.actionType]||""}数据权限`),k=G(()=>({view:!0,edit:!1})[y.actionType]||!1),g=i([]);async function h(){const o=await me("data_scope_type");g.value=fe(o)}de(()=>{h()});const p=i(!1),l=i({...C}),K=i(null),w=i(!1),T=I,j=({firstError:o})=>{if(o)X.warning(o);else{w.value=!0;const{scopeType:a,scopeValue:v}=c(l),s={...l.value,scopeValue:a===5?v:"",menuId:y.rowData.id,id:y.editId};xe(s).then(()=>{T("submit",s),X.success("提交成功"),p.value=!1}).finally(()=>{w.value=!1})}},F=()=>{l.value={...C},W(()=>{T("update:editId",""),T("update:actionType","")})},M=()=>{p.value=!1};E(()=>p.value,o=>{T("update:visible",o)}),E(()=>y.visible,o=>{o&&$(),o&&y.editId&&W(()=>{ke(y.editId).then(a=>{l.value={...a}})}),W(()=>{var a;(a=K.value)==null||a.clearValidate()}),p.value=o});function $(o){const{name:a,code:v}=c(y.rowData),s=le(g.value,o)||"暂无",m=o?le(Ke,o):"-";l.value={...l.value,scopeName:`${a} [${s}]`,resourceCode:v,scopeColumn:m}}const U=o=>{$(o)};return(o,a)=>{const v=n("t-input"),s=n("t-form-item"),m=n("t-col"),N=n("t-select"),A=n("t-textarea"),S=n("t-button"),D=n("t-row"),L=n("t-form"),b=n("t-dialog");return q(),J(b,{visible:p.value,"onUpdate:visible":a[8]||(a[8]=u=>p.value=u),header:V.value,width:780,footer:!1,onClosed:F},{body:t(()=>[e(L,{ref_key:"form",ref:K,class:ne({"xy-form__detail":_.actionType==="view"}),data:l.value,rules:O.value,"label-width":100,disabled:k.value||w.value,onSubmit:j},{default:t(()=>[e(D,{gutter:[0,28]},{default:t(()=>[e(m,{span:6},{default:t(()=>[e(s,{label:"权限名称",name:"scopeName"},{default:t(()=>[e(v,{modelValue:l.value.scopeName,"onUpdate:modelValue":a[0]||(a[0]=u=>l.value.scopeName=u),placeholder:"请输入权限名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:6},{default:t(()=>[e(s,{label:"权限编号",name:"resourceCode"},{default:t(()=>[e(v,{modelValue:l.value.resourceCode,"onUpdate:modelValue":a[1]||(a[1]=u=>l.value.resourceCode=u),placeholder:"请输入权限编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:6},{default:t(()=>[e(s,{label:"权限字段",name:"scopeColumn"},{default:t(()=>[e(v,{modelValue:l.value.scopeColumn,"onUpdate:modelValue":a[2]||(a[2]=u=>l.value.scopeColumn=u),placeholder:"请输入权限字段",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:6},{default:t(()=>[e(s,{label:"规则类型",name:"scopeType"},{default:t(()=>[e(N,{modelValue:l.value.scopeType,"onUpdate:modelValue":a[3]||(a[3]=u=>l.value.scopeType=u),options:g.value,keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择规则类型",onChange:U},null,8,["modelValue","options"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(s,{label:"可见字段",name:"scopeField"},{default:t(()=>[e(v,{modelValue:l.value.scopeField,"onUpdate:modelValue":a[4]||(a[4]=u=>l.value.scopeField=u),placeholder:"请输入可见字段",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:t(()=>[e(s,{label:"权限类名",name:"scopeClass"},{default:t(()=>[e(v,{modelValue:l.value.scopeClass,"onUpdate:modelValue":a[5]||(a[5]=u=>l.value.scopeClass=u),placeholder:"请输入MybatisMapper对应方法的完整类名路径",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l.value.scopeType===5?(q(),J(m,{key:0,span:12},{default:t(()=>[e(s,{label:"规则值",name:"scopeValue"},{default:t(()=>[e(A,{modelValue:l.value.scopeValue,"onUpdate:modelValue":a[6]||(a[6]=u=>l.value.scopeValue=u),placeholder:"请输入规则值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):ce("",!0),e(m,{span:12},{default:t(()=>[e(s,{label:"备注",name:"remark"},{default:t(()=>[e(A,{modelValue:l.value.remark,"onUpdate:modelValue":a[7]||(a[7]=u=>l.value.remark=u),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),se(e(m,{span:12},{default:t(()=>[e(s,{style:{float:"right"}},{default:t(()=>[e(S,{variant:"outline",onClick:M},{default:t(()=>[x("取消")]),_:1}),e(S,{theme:"primary",type:"submit"},{default:t(()=>[x("确定")]),_:1})]),_:1})]),_:1},512),[[pe,!k.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Ne={class:"table-wrapper"},Se=["onClick"],Ie=["onClick"],Me=["onClick"],$e=Y({__name:"DialogAuthority",props:{visible:{type:Boolean,default:!1},rowData:{type:Object,default:()=>({})}},emits:["update:visible"],setup(_,{emit:I}){const C=_,y=G(()=>`[${C.rowData.name}]数据权限配置`),O=I,V={scopeName:"",resourceCode:""},k=i([]),g=i(!1),h=i({...V}),p=i(!1),l=i(!1),K=i(""),w=i(""),{fetchData:T,data:j,dataLoading:F,pagination:M}=ue(Ve,{},()=>{k.value=[]}),$=()=>{T({...h.value,menuId:C.rowData.id})},U=({row:f},r)=>{K.value=f.id,w.value=r,l.value=!0},o=({row:f})=>{S.value=f.id,D.value="one",p.value=!0},a=P(()=>{$()},300),v=f=>{k.value=f},s=f=>{M.value={...M.value,current:f.current||1,pageSize:f.pageSize},a()},N=P(async f=>{try{await Te(f),p.value=!1,X.success("删除成功"),L(),a()}catch{p.value=!1}},300),A=()=>{k.value.length&&(D.value="check",p.value=!0)},S=i(-1),D=i(),L=()=>{S.value=-1,D.value=""},b=()=>{D.value==="check"&&N(k.value),D.value==="one"&&N([`${S.value}`])},u=()=>{L()};return E(()=>g.value,f=>{O("update:visible",f)}),E(()=>C.visible,f=>{f&&$(),g.value=f}),(f,r)=>{const Z=n("t-input"),ee=n("t-form-item"),B=n("t-col"),Q=n("t-row"),z=n("t-button"),ie=n("t-form"),re=n("t-table"),te=n("t-dialog");return q(),J(te,{visible:g.value,"onUpdate:visible":r[7]||(r[7]=d=>g.value=d),header:y.value,width:1080,footer:!1},{default:t(()=>[e(ie,{ref:"form",data:h.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:c(a),onSubmit:c(a)},{default:t(()=>[e(Q,null,{default:t(()=>[e(B,{span:10},{default:t(()=>[e(Q,{gutter:[16,24]},{default:t(()=>[e(B,{span:4},{default:t(()=>[e(ee,{label:"权限名称",name:"scopeName"},{default:t(()=>[e(Z,{modelValue:h.value.scopeName,"onUpdate:modelValue":r[0]||(r[0]=d=>h.value.scopeName=d),clearable:"",placeholder:"请输入权限名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(B,{span:4},{default:t(()=>[e(ee,{label:"权限编号",name:"resourceCode"},{default:t(()=>[e(Z,{modelValue:h.value.resourceCode,"onUpdate:modelValue":r[1]||(r[1]=d=>h.value.resourceCode=d),clearable:"",placeholder:"请输入权限编号"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(B,{span:2,class:"operation-wrapper"},{default:t(()=>[e(z,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[x(" 查询 ")]),_:1}),e(z,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[x(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),R("div",Ne,[e(re,{data:c(j),columns:c(De),hover:!0,loading:c(F),pagination:c(M),"selected-row-keys":k.value,"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:s,onSelectChange:v},{"top-content":t(()=>[e(Q,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(B,{flex:"0 0 auto"},{default:t(()=>[e(z,{onClick:r[2]||(r[2]=d=>U({row:{}},"add"))},{default:t(()=>[x("新增")]),_:1}),e(z,{theme:"danger",onClick:A},{default:t(()=>[x("删除")]),_:1})]),_:1})]),_:1})]),op:t(d=>[R("a",{class:"t-button-link",onClick:ae=>U(d,"view")},"查看",8,Se),R("a",{class:"t-button-link",onClick:ae=>U(d,"edit")},"编辑",8,Ie),R("a",{class:"t-button-link",onClick:ae=>o(d)},"删除",8,Me)]),_:1},8,["data","columns","loading","pagination","selected-row-keys"]),e(te,{visible:p.value,"onUpdate:visible":r[3]||(r[3]=d=>p.value=d),header:"确认删除当前所选数据？","on-cancel":u,onConfirm:b},null,8,["visible"]),e(Ue,{visible:l.value,"onUpdate:visible":r[4]||(r[4]=d=>l.value=d),editId:K.value,"onUpdate:editId":r[5]||(r[5]=d=>K.value=d),actionType:w.value,"onUpdate:actionType":r[6]||(r[6]=d=>w.value=d),"row-data":C.rowData,onSubmit:c(a)},null,8,["visible","editId","actionType","row-data","onSubmit"])])]),_:1},8,["visible","header"])}}}),Fe=[{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"菜单名称",colKey:"name",ellipsis:!0,width:200},{title:"路由地址",colKey:"path",ellipsis:!0,width:200},{title:"菜单图标",colKey:"source",width:80,ellipsis:!0,align:"center"},{title:"菜单编号",colKey:"code",width:150,ellipsis:!0},{title:"菜单别名",colKey:"alias",width:80,ellipsis:!0},{title:"菜单排序",width:80,colKey:"sort",ellipsis:!0},{fixed:"right",width:80,colKey:"op",title:"操作",align:"center"}],Ae={class:"table-wrapper"},Le=["onClick"],ze=Y({__name:"datascope",setup(_){const{tableVar:I}=he(),{getTableHeaderAffixedTop:C,getLayoutContainer:y}=Ce(),V=i({...{name:"",code:""}}),k=ve({childrenKey:"children",treeNodeColumnIndex:1}),g=i(!1),h=i({}),{fetchData:p,data:l,dataLoading:K}=ue(_e,V.value,we,!1);be(()=>{p()});const w=i(!1),T=i(null),j=()=>{w.value=!w.value,w.value?T.value.expandAll():T.value.foldAll()},F=P(()=>{p()},300),M=P(j,300),$=({row:U})=>{h.value=U,g.value=!0};return(U,o)=>{const a=n("t-input"),v=n("t-form-item"),s=n("t-col"),m=n("t-row"),N=n("t-button"),A=n("t-form"),S=n("t-icon"),D=n("t-enhanced-table"),L=ye("auth");return q(),oe("div",{class:ne(c(I))},[e(A,{ref:"form",data:V.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:c(F),onSubmit:c(F)},{default:t(()=>[e(m,null,{default:t(()=>[e(s,{span:10},{default:t(()=>[e(m,{gutter:[16,24]},{default:t(()=>[e(s,{span:4},{default:t(()=>[e(v,{label:"菜单名称",name:"name"},{default:t(()=>[e(a,{modelValue:V.value.name,"onUpdate:modelValue":o[0]||(o[0]=b=>V.value.name=b),placeholder:"请输入菜单名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:4},{default:t(()=>[e(v,{label:"菜单编号",name:"code"},{default:t(()=>[e(a,{modelValue:V.value.code,"onUpdate:modelValue":o[1]||(o[1]=b=>V.value.code=b),placeholder:"请输入菜单编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{span:2,class:"operation-wrapper"},{default:t(()=>[e(N,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[x(" 查询 ")]),_:1}),e(N,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[x(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),R("div",Ae,[e(D,{ref_key:"enhancedTable",ref:T,data:c(l),columns:c(Fe),hover:!0,loading:c(K),tree:k,"header-affixed-top":{offsetTop:c(C),container:c(y)},"vertical-align":"top","row-key":"id",bordered:"",stripe:""},{"top-content":t(()=>[e(m,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(s,{flex:"0 0 auto"}),e(s,{flex:"0 0 auto"},{default:t(()=>[e(N,{theme:"default",onClick:c(M)},{default:t(()=>[x(ge(w.value?"收起全部":"展开全部"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),source:t(({row:b})=>[e(S,{name:b.source},null,8,["name"])]),op:t(b=>[se((q(),oe("a",{class:"t-button-link",onClick:u=>$(b)},[x("权限配置")],8,Le)),[[L,"data_scope_setting"]])]),_:1},8,["data","columns","loading","tree","header-affixed-top"]),e($e,{visible:g.value,"onUpdate:visible":o[2]||(o[2]=b=>g.value=b),"row-data":h.value},null,8,["visible","row-data"])])],2)}}});export{ze as default};