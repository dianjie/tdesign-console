import{g as be,s as ge,a as ye,b as he,r as Ce}from"./dept-BeI_h-HG.js";import{d as se,g as d,R as de,aA as Ie,a3 as Z,X as P,r as s,o as C,n as ae,w as t,a as e,v as ue,b as p,a0 as D,s as c,a1 as we,M as le,aB as ke,av as Ve,aC as xe,aj as Ne,j as De,ax as Te,c as B,e as Se,t as ee,aD as Ue,az as Ae,q as Ke,at as Oe,au as Re}from"./index-C3aixgX8.js";import{g as Be}from"./tenant-L_eKxp0f.js";import{u as je}from"./useSetting-oU45HIOI.js";import{u as Le}from"./useDesign-CbWcZHFZ.js";import{u as $e}from"./useRequset-DXnVyzrU.js";import{u as te}from"./index-C0FKHvC_.js";const qe=se({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""},parentId:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType","update:parentId","submit"],setup($,{emit:q}){const j={deptName:"",fullName:"",parentId:null,deptCategory:void 0,sort:void 0,remark:""},f=$,F=d({deptName:[{required:!0,message:"请输入机构名称",type:"error",trigger:"blur"}],fullName:[{required:!0,message:"请输入机构全称",type:"error",trigger:"blur"}],deptCategory:[{required:!0,message:"请选择机构类型",type:"error",trigger:"change"}],sort:[{required:!0,message:"请输入排序",type:"error",trigger:"blur"}]}),M=de(()=>`${{view:"查看",edit:"编辑",add:"新增"}[f.actionType]||""}机构`),g=de(()=>({view:!0,edit:!1})[f.actionType]||!1),v=Ie("deptCategoryOptions")||[],y=d(!1),o=d({...j}),I=d([]),k=d(null),h=d(!1),_=q,T=({firstError:u})=>{if(u)le.warning(u);else{h.value=!0;const n={...o.value,id:f.editId};ge(n).then(()=>{_("submit",n),le.success("提交成功"),y.value=!1}).finally(()=>{h.value=!1})}},S=()=>{o.value={...j},P(()=>{_("update:editId",""),_("update:actionType",""),_("update:parentId","")})},U=()=>{y.value=!1},z=()=>{ye().then(u=>{I.value=u})};return Z(()=>y.value,u=>{_("update:visible",u)}),Z(()=>f.parentId,u=>{o.value.parentId=u}),Z(()=>f.visible,u=>{u&&z(),u&&f.editId&&P(()=>{be(f.editId).then(n=>{o.value={...n}})}),P(()=>{var n;(n=k.value)==null||n.clearValidate()}),y.value=u}),(u,n)=>{const L=s("t-input"),m=s("t-form-item"),b=s("t-col"),E=s("t-tree-select"),V=s("t-select"),x=s("t-input-number"),H=s("t-textarea"),N=s("t-button"),X=s("t-row"),G=s("t-form"),oe=s("t-dialog");return C(),ae(oe,{visible:y.value,"onUpdate:visible":n[6]||(n[6]=r=>y.value=r),header:M.value,width:780,footer:!1,onClosed:S},{body:t(()=>[e(G,{ref_key:"form",ref:k,class:ue({"xy-form__detail":$.actionType==="view"}),data:o.value,rules:F.value,"label-width":100,disabled:g.value||h.value,onSubmit:T},{default:t(()=>[e(X,{gutter:[0,28]},{default:t(()=>[e(b,{span:6},{default:t(()=>[e(m,{label:"机构名称",name:"deptName"},{default:t(()=>[e(L,{modelValue:o.value.deptName,"onUpdate:modelValue":n[0]||(n[0]=r=>o.value.deptName=r),placeholder:"请输入机构名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(m,{label:"机构全称",name:"fullName"},{default:t(()=>[e(L,{modelValue:o.value.fullName,"onUpdate:modelValue":n[1]||(n[1]=r=>o.value.fullName=r),placeholder:"请输入机构全称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(m,{label:"上级机构",name:"parentId"},{default:t(()=>[e(E,{modelValue:o.value.parentId,"onUpdate:modelValue":n[2]||(n[2]=r=>o.value.parentId=r),data:I.value,"popup-props":{overlayStyle:{width:"300px"},overlayInnerStyle:{width:"300px"}},"tree-props":{keys:{label:"title",value:"id",children:"children"}},disabled:!!f.parentId,clearable:"",placeholder:"请选择上级机构"},null,8,["modelValue","data","disabled"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(m,{label:"机构类型",name:"deptCategory"},{default:t(()=>[e(V,{modelValue:o.value.deptCategory,"onUpdate:modelValue":n[3]||(n[3]=r=>o.value.deptCategory=r),options:p(v),keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择机构类型"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(m,{label:"排序",name:"sort"},{default:t(()=>[e(x,{modelValue:o.value.sort,"onUpdate:modelValue":n[4]||(n[4]=r=>o.value.sort=r),theme:"column",placeholder:"请输入排序",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:12},{default:t(()=>[e(m,{label:"备注",name:"remark"},{default:t(()=>[e(H,{modelValue:o.value.remark,"onUpdate:modelValue":n[5]||(n[5]=r=>o.value.remark=r),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),D(e(b,{span:12},{default:t(()=>[e(m,{style:{float:"right"}},{default:t(()=>[e(N,{variant:"outline",onClick:U},{default:t(()=>[c("取消")]),_:1}),e(N,{theme:"primary",type:"submit"},{default:t(()=>[c("确定")]),_:1})]),_:1})]),_:1},512),[[we,!g.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Fe=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"机构名称",colKey:"deptName",ellipsis:!0,width:200},{title:"所属租户",colKey:"tenantId",ellipsis:!0,width:200},{title:"机构全称",colKey:"fullName",ellipsis:!0,width:200},{title:"机构类型",colKey:"deptCategory",width:150,ellipsis:!0},{title:"排序",width:80,colKey:"sort",ellipsis:!0},{fixed:"right",width:180,colKey:"op",title:"操作",align:"center"}],Me={class:"table-wrapper"},ze=["onClick"],Ee=["onClick"],He=["onClick"],Xe=["onClick"],et=se({__name:"dept",setup($){const{tableVar:q}=Le(),{getTableHeaderAffixedTop:j,getLayoutContainer:f}=je(),{hasRole:F}=ke(),M={deptName:"",fullName:"",tenantId:"",parentId:""},g=d([]),v=d({...M}),y=Ve({childrenKey:"children",treeNodeColumnIndex:2}),o=d(!1),I=d(!1),k=d(""),h=d(""),_=d(""),T=d({}),S=d([]),U=d([]);async function z(){const i=await Be(),a=await Oe("org_category");S.value=i,U.value=Re(a)}xe("deptCategoryOptions",U),Ne(()=>{z()});const{fetchData:u,data:n,dataLoading:L}=$e(he,v.value,()=>{g.value=[]},!1);De(()=>{u()});const m=({row:i},a)=>{T.value=i,k.value=i.id,h.value=a,I.value=!0},b=({row:i})=>{_.value=i.id,h.value="add",I.value=!0},E=({row:i})=>{J.value=i.id,A.value="one",o.value=!0},V=d(!1),x=d(null),H=()=>{V.value=!V.value,V.value?x.value.expandAll():x.value.foldAll()},N=te(()=>{u()},300),X=te(H,300),G=i=>{g.value=i},r=te(async i=>{try{await Ce(i),o.value=!1,le.success("删除成功"),ne(),N()}catch{o.value=!1}},300),ie=()=>{g.value.length&&(A.value="check",o.value=!0)},J=d(-1),A=d(),ne=()=>{J.value=-1,A.value=""},re=()=>{A.value==="check"&&r(g.value),A.value==="one"&&r([`${J.value}`])},pe=()=>{ne()},ce=i=>{var K;const{parentId:a}=p(T.value);i.parentId!==a?u():i.id&&((K=x.value)==null||K.setData(i.id,{...T.value,...i}))};return(i,a)=>{const K=s("t-input"),Q=s("t-form-item"),w=s("t-col"),me=s("t-select"),W=s("t-row"),O=s("t-button"),fe=s("t-form"),ve=s("t-enhanced-table"),_e=s("t-dialog"),R=Te("auth");return C(),B("div",{class:ue(p(q))},[e(fe,{ref:"form",data:v.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:p(N),onSubmit:p(N)},{default:t(()=>[e(W,null,{default:t(()=>[e(w,{span:10},{default:t(()=>[e(W,{gutter:[16,24]},{default:t(()=>[e(w,{span:4},{default:t(()=>[e(Q,{label:"机构名称",name:"deptName"},{default:t(()=>[e(K,{modelValue:v.value.deptName,"onUpdate:modelValue":a[0]||(a[0]=l=>v.value.deptName=l),clearable:"",placeholder:"请输入机构名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,{span:4},{default:t(()=>[e(Q,{label:"所属租户",name:"tenantId"},{default:t(()=>[e(me,{modelValue:v.value.tenantId,"onUpdate:modelValue":a[1]||(a[1]=l=>v.value.tenantId=l),options:S.value,keys:{value:"tenantId",label:"tenantName"},clearable:"",placeholder:"请选择所属租户"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(w,{span:4},{default:t(()=>[e(Q,{label:"机构全称",name:"fullName"},{default:t(()=>[e(K,{modelValue:v.value.fullName,"onUpdate:modelValue":a[2]||(a[2]=l=>v.value.fullName=l),clearable:"",placeholder:"请输入机构全称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{span:2,class:"operation-wrapper"},{default:t(()=>[e(O,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[c(" 查询 ")]),_:1}),e(O,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[c(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),Se("div",Me,[e(ve,{ref_key:"enhancedTable",ref:x,data:p(n),columns:p(Fe),hover:!0,loading:p(L),tree:y,"selected-row-keys":g.value,"header-affixed-top":{offsetTop:p(j),container:p(f)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onSelectChange:G},{"top-content":t(()=>[e(W,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(w,{flex:"0 0 auto"},{default:t(()=>[D((C(),ae(O,{onClick:a[3]||(a[3]=l=>m({row:{}},"add"))},{default:t(()=>[c("新增")]),_:1})),[[R,"dept_add"]]),D((C(),ae(O,{theme:"danger",onClick:ie},{default:t(()=>[c("删除")]),_:1})),[[R,"dept_delete"]])]),_:1}),e(w,{flex:"0 0 auto"},{default:t(()=>[e(O,{theme:"default",onClick:p(X)},{default:t(()=>[c(ee(V.value?"收起全部":"展开全部"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),tenantId:t(({row:l})=>[c(ee(p(Ue)(S.value,l.tenantId,{id:"tenantId",name:"tenantName"})),1)]),deptCategory:t(({row:l})=>[c(ee(p(Ae)(U.value,l.deptCategory)),1)]),op:t(l=>[D((C(),B("a",{class:"t-button-link",onClick:Y=>m(l,"view")},[c("查看")],8,ze)),[[R,"dept_view"]]),D((C(),B("a",{class:"t-button-link",onClick:Y=>m(l,"edit")},[c("编辑")],8,Ee)),[[R,"dept_edit"]]),D((C(),B("a",{class:"t-button-link",onClick:Y=>E(l)},[c("删除")],8,He)),[[R,"dept_delete"]]),p(F)(["administrator","admin"])?(C(),B("a",{key:0,class:"t-button-link",onClick:Y=>b(l)}," 新增子项 ",8,Xe)):Ke("",!0)]),_:1},8,["data","columns","loading","tree","selected-row-keys","header-affixed-top"]),e(_e,{visible:o.value,"onUpdate:visible":a[4]||(a[4]=l=>o.value=l),header:"确认删除当前所选数据？","on-cancel":pe,onConfirm:re},null,8,["visible"]),e(qe,{visible:I.value,"onUpdate:visible":a[5]||(a[5]=l=>I.value=l),editId:k.value,"onUpdate:editId":a[6]||(a[6]=l=>k.value=l),actionType:h.value,"onUpdate:actionType":a[7]||(a[7]=l=>h.value=l),parentId:_.value,"onUpdate:parentId":a[8]||(a[8]=l=>_.value=l),onSubmit:ce},null,8,["visible","editId","actionType","parentId"])])],2)}}});export{et as default};