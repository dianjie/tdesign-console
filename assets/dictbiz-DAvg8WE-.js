import{as as ae,d as ce,g as s,R as le,a3 as Q,X as Z,r as o,o as w,n as B,w as t,a as e,v as pe,a0 as z,s as V,a1 as _e,M as E,aB as be,av as Ce,ax as ge,b as y,e as te,q as de,c as J,j as De,t as Se}from"./index-C3aixgX8.js";import{u as Te}from"./useSetting-oU45HIOI.js";import{u as xe}from"./useDesign-CbWcZHFZ.js";import{u as ye}from"./useRequset-DXnVyzrU.js";import{u as re}from"./index-C0FKHvC_.js";const Ie=(g,j,x)=>ae.get({url:"/blade-system/dict-biz/parent-list",params:{...x,current:g,size:j}},{joinTime:!1}),Ue=g=>ae.get({url:"/blade-system/dict-biz/child-list",params:g},{joinTime:!1}),Ve=g=>ae.get({url:"/blade-system/dict-biz/detail",params:{id:g}}),he=g=>ae.post({url:"/blade-system/dict-biz/remove",params:{ids:g}},{joinParamsToUrl:!0,errorMessageMode:"message"}),we=g=>ae.post({url:"/blade-system/dict-biz/submit",data:g},{errorMessageMode:"message"}),Ke=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"字典编号",colKey:"code"},{title:"字典名称",colKey:"dictValue"},{title:"字典键值",colKey:"dictKey"},{title:"字典排序",colKey:"sort"},{title:"封存",colKey:"isSealed"},{fixed:"right",width:250,colKey:"op",title:"操作",align:"center"}],$e=ce({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""},rowData:{type:Object,default:()=>({})}},emits:["update:visible","update:editId","update:actionType","submit","closed"],setup(g,{emit:j}){const x={code:"",parentId:"",parentName:"",dictValue:"",dictKey:"",sort:void 0,isSealed:0,remark:""},c=g,T=s({code:[{required:!0,message:"请选择字典编号",type:"error",trigger:"blur"}],dictValue:[{required:!0,message:"请输入字典名称",type:"error",trigger:"blur"}],dictKey:[{required:!0,message:"请输入字典键值",type:"error",trigger:"blur"}],sort:[{required:!0,message:"请输入字典排序",type:"error",trigger:"blur"}],isSealed:[{required:!0,message:"请选择是否封存",type:"error",trigger:"change"}]}),M=le(()=>`${{view:"查看",edit:"编辑",add:"新增"}[c.actionType]||""}字典`),D=le(()=>({view:!0,edit:!1})[c.actionType]||!1),p=s(!1),a=s({...x}),I=s(null),h=s(!1),v=j,C=({firstError:i})=>{if(i)E.warning(i);else{h.value=!0;const l={...a.value,id:c.editId};we(l).then(()=>{v("submit",l),E.success("提交成功"),p.value=!1}).finally(()=>{h.value=!1})}},U=()=>{a.value={...x},Z(()=>{v("update:editId",""),v("update:actionType",""),v("closed")})},$=()=>{p.value=!1};return Q(()=>p.value,i=>{v("update:visible",i)}),Q(()=>c.visible,i=>{i&&c.editId&&Z(()=>{Ve(c.editId).then(l=>{a.value={...l}})}),Z(()=>{var l;(l=I.value)==null||l.clearValidate()}),p.value=i}),Q(()=>c.rowData,i=>{a.value={...a.value,parentId:i.id,parentName:i.dictValue,code:i.code}}),(i,l)=>{const K=o("t-input"),f=o("t-form-item"),b=o("t-col"),N=o("t-input-number"),S=o("t-switch"),O=o("t-textarea"),q=o("t-button"),L=o("t-row"),F=o("t-form"),W=o("t-dialog");return w(),B(W,{visible:p.value,"onUpdate:visible":l[7]||(l[7]=n=>p.value=n),header:M.value,width:780,footer:!1,onClosed:U},{body:t(()=>[e(F,{ref_key:"form",ref:I,class:pe({"xy-form__detail":g.actionType==="view"}),data:a.value,rules:T.value,"label-width":100,disabled:D.value||h.value,onSubmit:C},{default:t(()=>[e(L,{gutter:[0,28]},{default:t(()=>[e(b,{span:12},{default:t(()=>[e(f,{label:"字典编号",name:"code"},{default:t(()=>[e(K,{modelValue:a.value.code,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value.code=n),placeholder:"请输入字典编号",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"上级字典",name:"parentName"},{default:t(()=>[e(K,{modelValue:a.value.parentName,"onUpdate:modelValue":l[1]||(l[1]=n=>a.value.parentName=n),placeholder:"请输入字典名称",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典名称",name:"dictValue"},{default:t(()=>[e(K,{modelValue:a.value.dictValue,"onUpdate:modelValue":l[2]||(l[2]=n=>a.value.dictValue=n),placeholder:"请输入字典名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典键值",name:"dictKey"},{default:t(()=>[e(K,{modelValue:a.value.dictKey,"onUpdate:modelValue":l[3]||(l[3]=n=>a.value.dictKey=n),placeholder:"请输入字典键值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典排序",name:"sort"},{default:t(()=>[e(N,{modelValue:a.value.sort,"onUpdate:modelValue":l[4]||(l[4]=n=>a.value.sort=n),theme:"column",placeholder:"请输入字典排序",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"封存",name:"isSealed"},{default:t(()=>[e(S,{modelValue:a.value.isSealed,"onUpdate:modelValue":l[5]||(l[5]=n=>a.value.isSealed=n),"custom-value":[1,0]},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典备注",name:"remark"},{default:t(()=>[e(O,{modelValue:a.value.remark,"onUpdate:modelValue":l[6]||(l[6]=n=>a.value.remark=n),placeholder:"请输入字典备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),z(e(b,{span:12},{default:t(()=>[e(f,{style:{float:"right"}},{default:t(()=>[e(q,{variant:"outline",onClick:$},{default:t(()=>[V("取消")]),_:1}),e(q,{theme:"primary",type:"submit"},{default:t(()=>[V("确定")]),_:1})]),_:1})]),_:1},512),[[_e,!D.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Re={class:"table-wrapper"},ze=["onClick"],je=["onClick"],Ne=["onClick"],qe=["onClick"],Ae=ce({__name:"DialogList",props:{visible:{type:Boolean,default:!1},rowData:{type:Object,default:()=>({})}},emits:["update:visible"],setup(g,{emit:j}){const{hasRole:x}=be(),c=g,T=s({}),M=j,D=le(()=>`[${c.rowData.dictValue}]字典配置`),p={code:"",dictValue:""},a=s([]),I=Ce({childrenKey:"children",treeNodeColumnIndex:2}),h=s(!1),v=s({...p}),C=s(!1),U=s(!1),$=s(""),i=s(""),l=s(null),{fetchData:K,data:f,dataLoading:b}=ye(Ue,{},()=>{a.value=[]},!1),N=()=>{K({...v.value,parentId:c.rowData.id})},S=({row:u},d)=>{$.value=u.id,i.value=d,U.value=!0},O=({row:u})=>{T.value=u,i.value="add",U.value=!0},q=({row:u})=>{Y.value=u.id,X.value="one",C.value=!0},L=re(()=>{N()},300),F=u=>{a.value=u},n=re(async u=>{try{await he(u),C.value=!1,E.success("删除成功"),oe(),L()}catch{C.value=!1}},300),H=()=>{a.value.length&&(X.value="check",C.value=!0)},Y=s(-1),X=s(),oe=()=>{Y.value=-1,X.value=""},k=()=>{X.value==="check"&&n(a.value),X.value==="one"&&n([`${Y.value}`])},_=()=>{oe()},ne=u=>{var R;const{parentId:d}=y(T.value);u.parentId!==d?N():u.id&&((R=l.value)==null||R.setData(u.id,{...T.value,...u}))},ie=()=>{T.value={...c.rowData}};return Q(()=>h.value,u=>{M("update:visible",u)}),Q(()=>c.visible,u=>{u&&c.rowData.id&&N(),h.value=u,T.value={...c.rowData}}),(u,d)=>{const R=o("t-input"),se=o("t-form-item"),G=o("t-col"),P=o("t-row"),A=o("t-button"),m=o("t-form"),ee=o("t-icon"),ve=o("t-tag"),ke=o("t-enhanced-table"),fe=o("t-dialog"),ue=ge("auth");return w(),B(fe,{visible:h.value,"onUpdate:visible":d[7]||(d[7]=r=>h.value=r),header:D.value,width:980,footer:!1},{default:t(()=>[e(m,{ref:"form",data:v.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:y(L),onSubmit:y(L)},{default:t(()=>[e(P,null,{default:t(()=>[e(G,{span:10},{default:t(()=>[e(P,{gutter:[16,24]},{default:t(()=>[e(G,{span:4},{default:t(()=>[e(se,{label:"字典编号",name:"code"},{default:t(()=>[e(R,{modelValue:v.value.code,"onUpdate:modelValue":d[0]||(d[0]=r=>v.value.code=r),clearable:"",placeholder:"请输入字典编号"},null,8,["modelValue"])]),_:1})]),_:1}),e(G,{span:4},{default:t(()=>[e(se,{label:"字典名称",name:"dictValue"},{default:t(()=>[e(R,{modelValue:v.value.dictValue,"onUpdate:modelValue":d[1]||(d[1]=r=>v.value.dictValue=r),clearable:"",placeholder:"请输入字典名称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(G,{span:2,class:"operation-wrapper"},{default:t(()=>[e(A,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[V(" 查询 ")]),_:1}),e(A,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[V(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),te("div",Re,[e(ke,{ref_key:"enhancedTable",ref:l,data:y(f),columns:y(Ke),hover:!0,loading:y(b),tree:I,"selected-row-keys":a.value,"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onSelectChange:F},{"top-content":t(()=>[e(P,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(G,{flex:"0 0 auto"},{default:t(()=>[z((w(),B(A,{onClick:d[2]||(d[2]=r=>S({row:{}},"add"))},{default:t(()=>[V("新增")]),_:1})),[[ue,"dictbiz_add"]]),z((w(),B(A,{theme:"danger",onClick:H},{default:t(()=>[V("删除")]),_:1})),[[ue,"dictbiz_delete"]])]),_:1})]),_:1})]),source:t(({row:r})=>[e(ee,{name:r.source},null,8,["name"])]),isOpen:t(({row:r})=>[r.isOpen===0?(w(),B(ve,{key:0,theme:"warning",variant:"light"},{default:t(()=>[V(" 否 ")]),_:1})):de("",!0),r.isOpen===1?(w(),B(ve,{key:1,theme:"success",variant:"light"},{default:t(()=>[V(" 是 ")]),_:1})):de("",!0)]),op:t(r=>[te("a",{class:"t-button-link",onClick:me=>S(r,"view")},"查看",8,ze),z((w(),J("a",{class:"t-button-link",onClick:me=>S(r,"edit")},[V("编辑")],8,je)),[[ue,"dictbiz_edit"]]),z((w(),J("a",{class:"t-button-link",onClick:me=>q(r)},[V("删除")],8,Ne)),[[ue,"dictbiz_delete"]]),y(x)(["administrator","admin"])?(w(),J("a",{key:0,class:"t-button-link",onClick:me=>O(r)}," 新增子项 ",8,qe)):de("",!0)]),_:1},8,["data","columns","loading","tree","selected-row-keys"]),e(fe,{visible:C.value,"onUpdate:visible":d[3]||(d[3]=r=>C.value=r),header:"确认删除当前所选数据？","on-cancel":_,onConfirm:k},null,8,["visible"]),e($e,{visible:U.value,"onUpdate:visible":d[4]||(d[4]=r=>U.value=r),editId:$.value,"onUpdate:editId":d[5]||(d[5]=r=>$.value=r),actionType:i.value,"onUpdate:actionType":d[6]||(d[6]=r=>i.value=r),"row-data":T.value,onClosed:ie,onSubmit:ne},null,8,["visible","editId","actionType","row-data"])])]),_:1},8,["visible","header"])}}}),Be=ce({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType","submit"],setup(g,{emit:j}){const x={code:"",dictValue:"",sort:void 0,isSealed:0,remark:""},c=g,T=s({code:[{required:!0,message:"请选择字典编号",type:"error",trigger:"blur"}],dictValue:[{required:!0,message:"请输入字典名称",type:"error",trigger:"blur"}],sort:[{required:!0,message:"请输入字典排序",type:"error",trigger:"blur"}],isSealed:[{required:!0,message:"请选择是否封存",type:"error",trigger:"change"}]}),M=le(()=>`${{view:"查看",edit:"编辑",add:"新增"}[c.actionType]||""}字典`),D=le(()=>({view:!0,edit:!1})[c.actionType]||!1),p=s(!1),a=s({...x}),I=s(null),h=s(!1),v=j,C=({firstError:i})=>{if(i)E.warning(i);else{h.value=!0;const l={...a.value,id:c.editId};we(l).then(()=>{v("submit",l),E.success("提交成功"),p.value=!1}).finally(()=>{h.value=!1})}},U=()=>{a.value={...x},Z(()=>{v("update:editId",""),v("update:actionType","")})},$=()=>{p.value=!1};return Q(()=>p.value,i=>{v("update:visible",i)}),Q(()=>c.visible,i=>{i&&c.editId&&Z(()=>{Ve(c.editId).then(l=>{a.value={...l}})}),Z(()=>{var l;(l=I.value)==null||l.clearValidate()}),p.value=i}),(i,l)=>{const K=o("t-input"),f=o("t-form-item"),b=o("t-col"),N=o("t-input-number"),S=o("t-switch"),O=o("t-textarea"),q=o("t-button"),L=o("t-row"),F=o("t-form"),W=o("t-dialog");return w(),B(W,{visible:p.value,"onUpdate:visible":l[5]||(l[5]=n=>p.value=n),header:M.value,width:780,footer:!1,onClosed:U},{body:t(()=>[e(F,{ref_key:"form",ref:I,class:pe({"xy-form__detail":g.actionType==="view"}),data:a.value,rules:T.value,"label-width":100,disabled:D.value||h.value,onSubmit:C},{default:t(()=>[e(L,{gutter:[0,28]},{default:t(()=>[e(b,{span:12},{default:t(()=>[e(f,{label:"字典编号",name:"code"},{default:t(()=>[e(K,{modelValue:a.value.code,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value.code=n),placeholder:"请输入字典编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典名称",name:"dictValue"},{default:t(()=>[e(K,{modelValue:a.value.dictValue,"onUpdate:modelValue":l[1]||(l[1]=n=>a.value.dictValue=n),placeholder:"请输入字典名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典排序",name:"sort"},{default:t(()=>[e(N,{modelValue:a.value.sort,"onUpdate:modelValue":l[2]||(l[2]=n=>a.value.sort=n),theme:"column",placeholder:"请输入字典排序",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"封存",name:"isSealed"},{default:t(()=>[e(S,{modelValue:a.value.isSealed,"onUpdate:modelValue":l[3]||(l[3]=n=>a.value.isSealed=n),"custom-value":[1,0]},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典备注",name:"remark"},{default:t(()=>[e(O,{modelValue:a.value.remark,"onUpdate:modelValue":l[4]||(l[4]=n=>a.value.remark=n),placeholder:"请输入字典备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),z(e(b,{span:12},{default:t(()=>[e(f,{style:{float:"right"}},{default:t(()=>[e(q,{variant:"outline",onClick:$},{default:t(()=>[V("取消")]),_:1}),e(q,{theme:"primary",type:"submit"},{default:t(()=>[V("确定")]),_:1})]),_:1})]),_:1},512),[[_e,!D.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Le=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"字典编号",colKey:"code"},{title:"字典名称",colKey:"dictValue"},{title:"字典排序",colKey:"sort"},{title:"封存",colKey:"isSealed"},{fixed:"right",width:240,colKey:"op",title:"操作",align:"center"}],Fe={class:"table-wrapper"},Me=["onClick"],Oe=["onClick"],He=["onClick"],Xe=["onClick"],Ze=ce({__name:"dictbiz",setup(g){const{tableVar:j}=xe(),{getTableHeaderAffixedTop:x,getLayoutContainer:c}=Te(),{hasRole:T}=be(),M={code:"",dictValue:""},D=s([]),p=s({...M}),a=s(!1),I=s(!1),h=s(""),v=s(""),C=s(!1),U=s({}),{fetchData:$,data:i,pagination:l,dataLoading:K}=ye(Ie,p.value,()=>{D.value=[]});De(()=>{$()});const f=({row:k},_)=>{h.value=k.id,v.value=_,I.value=!0},b=({row:k})=>{n.value=k.id,H.value="one",a.value=!0},N=({row:k})=>{U.value=k,C.value=!0},S=re(()=>{$()},300),O=k=>{D.value=k},q=k=>{l.value={...l.value,current:k.current||1,pageSize:k.pageSize},S()},F=re(async k=>{try{await he(k),a.value=!1,E.success("删除成功"),Y(),S()}catch{a.value=!1}},300),W=()=>{D.value.length&&(H.value="check",a.value=!0)},n=s(-1),H=s(),Y=()=>{n.value=-1,H.value=""},X=()=>{H.value==="check"&&F(D.value),H.value==="one"&&F([`${n.value}`])},oe=()=>{Y()};return(k,_)=>{const ne=o("t-input"),ie=o("t-form-item"),u=o("t-col"),d=o("t-row"),R=o("t-button"),se=o("t-form"),G=o("t-table"),P=o("t-dialog"),A=ge("auth");return w(),J("div",{class:pe(y(j))},[e(se,{ref:"form",data:p.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:y(S),onSubmit:y(S)},{default:t(()=>[e(d,null,{default:t(()=>[e(u,{span:10},{default:t(()=>[e(d,{gutter:[16,24]},{default:t(()=>[e(u,{span:4},{default:t(()=>[e(ie,{label:"字典编号",name:"code"},{default:t(()=>[e(ne,{modelValue:p.value.code,"onUpdate:modelValue":_[0]||(_[0]=m=>p.value.code=m),clearable:"",placeholder:"请输入字典编号"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:4},{default:t(()=>[e(ie,{label:"字典名称",name:"dictValue"},{default:t(()=>[e(ne,{modelValue:p.value.dictValue,"onUpdate:modelValue":_[1]||(_[1]=m=>p.value.dictValue=m),clearable:"",placeholder:"请输入字典名称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{span:2,class:"operation-wrapper"},{default:t(()=>[e(R,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[V(" 查询 ")]),_:1}),e(R,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[V(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),te("div",Fe,[e(G,{data:y(i),columns:y(Le),hover:!0,loading:y(K),pagination:y(l),"selected-row-keys":D.value,"header-affixed-top":{offsetTop:y(x),container:y(c)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:q,onSelectChange:O},{"top-content":t(()=>[e(d,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(u,{flex:"0 0 auto"},{default:t(()=>[z((w(),B(R,{onClick:_[2]||(_[2]=m=>f({row:{}},"add"))},{default:t(()=>[V("新增")]),_:1})),[[A,"dictbiz_add"]]),z((w(),B(R,{theme:"danger",onClick:W},{default:t(()=>[V("删除")]),_:1})),[[A,"dictbiz_delete"]])]),_:1})]),_:1})]),isSealed:t(({row:m})=>[te("span",null,Se(m.isSealed?"是":"否"),1)]),op:t(m=>[te("a",{class:"t-button-link",onClick:ee=>f(m,"view")},"查看",8,Me),z((w(),J("a",{class:"t-button-link",onClick:ee=>f(m,"edit")},[V("编辑")],8,Oe)),[[A,"dictbiz_edit"]]),z((w(),J("a",{class:"t-button-link",onClick:ee=>b(m)},[V("删除")],8,He)),[[A,"dictbiz_delete"]]),y(T)(["administrator","admin"])?(w(),J("a",{key:0,class:"t-button-link",onClick:ee=>N(m)}," 字典配置 ",8,Xe)):de("",!0)]),_:1},8,["data","columns","loading","pagination","selected-row-keys","header-affixed-top"]),e(P,{visible:a.value,"onUpdate:visible":_[3]||(_[3]=m=>a.value=m),header:"确认删除当前所选数据？","on-cancel":oe,onConfirm:X},null,8,["visible"]),e(Be,{visible:I.value,"onUpdate:visible":_[4]||(_[4]=m=>I.value=m),editId:h.value,"onUpdate:editId":_[5]||(_[5]=m=>h.value=m),actionType:v.value,"onUpdate:actionType":_[6]||(_[6]=m=>v.value=m),onSubmit:y(S)},null,8,["visible","editId","actionType","onSubmit"]),e(Ae,{visible:C.value,"onUpdate:visible":_[7]||(_[7]=m=>C.value=m),"row-data":U.value},null,8,["visible","row-data"])])],2)}}});export{Ze as default};