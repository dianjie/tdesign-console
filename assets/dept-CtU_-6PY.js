import{g as _e,s as ge,a as ye,b as Ie,r as Ce}from"./dept-Ciu_4XbM.js";import{d as se,f as d,J as de,av as we,a2 as Z,Q as P,r as s,o as C,m as ae,w as t,a as e,s as ue,b as p,W as D,q as m,X as ke,M as le,aw as Ve,aq as xe,ax as Ne,ad as he,i as De,as as Te,c as B,e as Se,t as ee,ay as Ue,au as Ae,p as Ke,ao as Oe,ap as Re}from"./index-CqGaQ7t4.js";import{g as Be}from"./tenant-BajJal67.js";import{u as Le}from"./useSetting-CnYQd1RY.js";import{u as $e}from"./useDesign-CbWcZHFZ.js";import{u as qe}from"./useRequset-Bj5fiv5N.js";import{u as te}from"./index-BidCcHov.js";const je=se({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""},parentId:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType","update:parentId","submit"],setup(q,{emit:j}){const L={deptName:"",fullName:"",parentId:null,deptCategory:void 0,sort:void 0,remark:""},f=q,F=d({deptName:[{required:!0,message:"请输入机构名称",type:"error",trigger:"blur"}],fullName:[{required:!0,message:"请输入机构全称",type:"error",trigger:"blur"}],deptCategory:[{required:!0,message:"请选择机构类型",type:"error",trigger:"change"}],sort:[{required:!0,message:"请输入排序",type:"error",trigger:"blur"}]}),M=de(()=>`${{view:"查看",edit:"编辑",add:"新增"}[f.actionType]||""}机构`),g=de(()=>({view:!0,edit:!1})[f.actionType]||!1),v=we("deptCategoryOptions")||[],y=d(!1),n=d({...L}),w=d([]),V=d(null),I=d(!1),b=j,T=({firstError:u})=>{if(u)le.warning(u);else{I.value=!0;const l={...n.value,id:f.editId};ge(l).then(()=>{b("submit",l),le.success("提交成功"),y.value=!1}).finally(()=>{I.value=!1})}},S=()=>{n.value={...L},P(()=>{b("update:editId",""),b("update:actionType",""),b("update:parentId","")})},U=()=>{y.value=!1},z=()=>{ye().then(u=>{w.value=u})};return Z(()=>y.value,u=>{b("update:visible",u)}),Z(()=>f.parentId,u=>{n.value.parentId=u}),Z(()=>f.visible,u=>{u&&z(),u&&f.editId&&P(()=>{_e(f.editId).then(l=>{n.value={...l}})}),P(()=>{var l;(l=V.value)==null||l.clearValidate()}),y.value=u}),(u,l)=>{const $=s("t-input"),c=s("t-form-item"),_=s("t-col"),E=s("t-tree-select"),x=s("t-select"),N=s("t-input-number"),H=s("t-textarea"),h=s("t-button"),J=s("t-row"),Q=s("t-form"),oe=s("t-dialog");return C(),ae(oe,{visible:y.value,"onUpdate:visible":l[6]||(l[6]=r=>y.value=r),header:M.value,width:780,footer:!1,onClosed:S},{body:t(()=>[e(Q,{ref_key:"form",ref:V,class:ue({"xy-form__detail":q.actionType==="view"}),data:n.value,rules:F.value,"label-width":100,disabled:g.value||I.value,onSubmit:T},{default:t(()=>[e(J,{gutter:[0,28]},{default:t(()=>[e(_,{span:6},{default:t(()=>[e(c,{label:"机构名称",name:"deptName"},{default:t(()=>[e($,{modelValue:n.value.deptName,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value.deptName=r),placeholder:"请输入机构名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:6},{default:t(()=>[e(c,{label:"机构全称",name:"fullName"},{default:t(()=>[e($,{modelValue:n.value.fullName,"onUpdate:modelValue":l[1]||(l[1]=r=>n.value.fullName=r),placeholder:"请输入机构全称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:6},{default:t(()=>[e(c,{label:"上级机构",name:"parentId"},{default:t(()=>[e(E,{modelValue:n.value.parentId,"onUpdate:modelValue":l[2]||(l[2]=r=>n.value.parentId=r),data:w.value,"popup-props":{overlayStyle:{width:"300px"},overlayInnerStyle:{width:"300px"}},"tree-props":{keys:{label:"title",value:"id",children:"children"}},disabled:!!f.parentId,clearable:"",placeholder:"请选择上级机构"},null,8,["modelValue","data","disabled"])]),_:1})]),_:1}),e(_,{span:6},{default:t(()=>[e(c,{label:"机构类型",name:"deptCategory"},{default:t(()=>[e(x,{modelValue:n.value.deptCategory,"onUpdate:modelValue":l[3]||(l[3]=r=>n.value.deptCategory=r),options:p(v),keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择机构类型"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(_,{span:6},{default:t(()=>[e(c,{label:"排序",name:"sort"},{default:t(()=>[e(N,{modelValue:n.value.sort,"onUpdate:modelValue":l[4]||(l[4]=r=>n.value.sort=r),theme:"column",placeholder:"请输入排序",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:t(()=>[e(c,{label:"备注",name:"remark"},{default:t(()=>[e(H,{modelValue:n.value.remark,"onUpdate:modelValue":l[5]||(l[5]=r=>n.value.remark=r),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),D(e(_,{span:12},{default:t(()=>[e(c,{style:{float:"right"}},{default:t(()=>[e(h,{variant:"outline",onClick:U},{default:t(()=>l[7]||(l[7]=[m("取消")])),_:1}),e(h,{theme:"primary",type:"submit"},{default:t(()=>l[8]||(l[8]=[m("确定")])),_:1})]),_:1})]),_:1},512),[[ke,!g.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Fe=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"机构名称",colKey:"deptName",ellipsis:!0,width:200},{title:"所属租户",colKey:"tenantId",ellipsis:!0,width:200},{title:"机构全称",colKey:"fullName",ellipsis:!0,width:200},{title:"机构类型",colKey:"deptCategory",width:150,ellipsis:!0},{title:"排序",width:80,colKey:"sort",ellipsis:!0},{fixed:"right",width:180,colKey:"op",title:"操作",align:"center"}],Me={class:"table-wrapper"},ze=["onClick"],Ee=["onClick"],He=["onClick"],Je=["onClick"],et=se({__name:"dept",setup(q){const{tableVar:j}=$e(),{getTableHeaderAffixedTop:L,getLayoutContainer:f}=Le(),{hasRole:F}=Ve(),M={deptName:"",fullName:"",tenantId:"",parentId:""},g=d([]),v=d({...M}),y=xe({childrenKey:"children",treeNodeColumnIndex:2}),n=d(!1),w=d(!1),V=d(""),I=d(""),b=d(""),T=d({}),S=d([]),U=d([]);async function z(){const i=await Be(),a=await Oe("org_category");S.value=i,U.value=Re(a)}Ne("deptCategoryOptions",U),he(()=>{z()});const{fetchData:u,data:l,dataLoading:$}=qe(Ie,v.value,()=>{g.value=[]},!1);De(()=>{u()});const c=({row:i},a)=>{T.value=i,V.value=i.id,I.value=a,w.value=!0},_=({row:i})=>{b.value=i.id,I.value="add",w.value=!0},E=({row:i})=>{W.value=i.id,A.value="one",n.value=!0},x=d(!1),N=d(null),H=()=>{x.value=!x.value,x.value?N.value.expandAll():N.value.foldAll()},h=te(()=>{u()},300),J=te(H,300),Q=i=>{g.value=i},r=te(async i=>{try{await Ce(i),n.value=!1,le.success("删除成功"),ne(),h()}catch{n.value=!1}},300),ie=()=>{g.value.length&&(A.value="check",n.value=!0)},W=d(-1),A=d(),ne=()=>{W.value=-1,A.value=""},re=()=>{A.value==="check"&&r(g.value),A.value==="one"&&r([`${W.value}`])},pe=()=>{ne()},me=i=>{var K;const{parentId:a}=p(T.value);i.parentId!==a?u():i.id&&((K=N.value)==null||K.setData(i.id,{...T.value,...i}))};return(i,a)=>{const K=s("t-input"),X=s("t-form-item"),k=s("t-col"),ce=s("t-select"),G=s("t-row"),O=s("t-button"),fe=s("t-form"),ve=s("t-enhanced-table"),be=s("t-dialog"),R=Te("auth");return C(),B("div",{class:ue(p(j))},[e(fe,{ref:"form",data:v.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:p(h),onSubmit:p(h)},{default:t(()=>[e(G,null,{default:t(()=>[e(k,{span:10},{default:t(()=>[e(G,{gutter:[16,24]},{default:t(()=>[e(k,{span:4},{default:t(()=>[e(X,{label:"机构名称",name:"deptName"},{default:t(()=>[e(K,{modelValue:v.value.deptName,"onUpdate:modelValue":a[0]||(a[0]=o=>v.value.deptName=o),clearable:"",placeholder:"请输入机构名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,{span:4},{default:t(()=>[e(X,{label:"所属租户",name:"tenantId"},{default:t(()=>[e(ce,{modelValue:v.value.tenantId,"onUpdate:modelValue":a[1]||(a[1]=o=>v.value.tenantId=o),options:S.value,keys:{value:"tenantId",label:"tenantName"},clearable:"",placeholder:"请选择所属租户"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(k,{span:4},{default:t(()=>[e(X,{label:"机构全称",name:"fullName"},{default:t(()=>[e(K,{modelValue:v.value.fullName,"onUpdate:modelValue":a[2]||(a[2]=o=>v.value.fullName=o),clearable:"",placeholder:"请输入机构全称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(k,{span:2,class:"operation-wrapper"},{default:t(()=>[e(O,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>a[9]||(a[9]=[m(" 查询 ")])),_:1}),e(O,{type:"reset",variant:"base",theme:"default"},{default:t(()=>a[10]||(a[10]=[m(" 重置 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),Se("div",Me,[e(ve,{ref_key:"enhancedTable",ref:N,data:p(l),columns:p(Fe),hover:!0,loading:p($),tree:y,"selected-row-keys":g.value,"header-affixed-top":{offsetTop:p(L),container:p(f)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onSelectChange:Q},{"top-content":t(()=>[e(G,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(k,{flex:"0 0 auto"},{default:t(()=>[D((C(),ae(O,{onClick:a[3]||(a[3]=o=>c({row:{}},"add"))},{default:t(()=>a[11]||(a[11]=[m("新增")])),_:1})),[[R,"dept_add"]]),D((C(),ae(O,{theme:"danger",onClick:ie},{default:t(()=>a[12]||(a[12]=[m("删除")])),_:1})),[[R,"dept_delete"]])]),_:1}),e(k,{flex:"0 0 auto"},{default:t(()=>[e(O,{theme:"default",onClick:p(J)},{default:t(()=>[m(ee(x.value?"收起全部":"展开全部"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),tenantId:t(({row:o})=>[m(ee(p(Ue)(S.value,o.tenantId,{id:"tenantId",name:"tenantName"})),1)]),deptCategory:t(({row:o})=>[m(ee(p(Ae)(U.value,o.deptCategory)),1)]),op:t(o=>[D((C(),B("a",{class:"t-button-link",onClick:Y=>c(o,"view")},a[13]||(a[13]=[m("查看")]),8,ze)),[[R,"dept_view"]]),D((C(),B("a",{class:"t-button-link",onClick:Y=>c(o,"edit")},a[14]||(a[14]=[m("编辑")]),8,Ee)),[[R,"dept_edit"]]),D((C(),B("a",{class:"t-button-link",onClick:Y=>E(o)},a[15]||(a[15]=[m("删除")]),8,He)),[[R,"dept_delete"]]),p(F)(["administrator","admin"])?(C(),B("a",{key:0,class:"t-button-link",onClick:Y=>_(o)}," 新增子项 ",8,Je)):Ke("",!0)]),_:1},8,["data","columns","loading","tree","selected-row-keys","header-affixed-top"]),e(be,{visible:n.value,"onUpdate:visible":a[4]||(a[4]=o=>n.value=o),header:"确认删除当前所选数据？","on-cancel":pe,onConfirm:re},null,8,["visible"]),e(je,{visible:w.value,"onUpdate:visible":a[5]||(a[5]=o=>w.value=o),editId:V.value,"onUpdate:editId":a[6]||(a[6]=o=>V.value=o),actionType:I.value,"onUpdate:actionType":a[7]||(a[7]=o=>I.value=o),parentId:b.value,"onUpdate:parentId":a[8]||(a[8]=o=>b.value=o),onSubmit:me},null,8,["visible","editId","actionType","parentId"])])],2)}}});export{et as default};
