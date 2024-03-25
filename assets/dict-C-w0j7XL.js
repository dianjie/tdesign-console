import{d as re,g as u,R as le,a3 as J,X as Z,aQ as fe,r as o,o as w,n as B,w as t,a as e,v as me,a0 as $,s as y,a1 as _e,aR as be,M as E,aB as ge,av as ke,ax as ye,b as g,e as te,q as de,c as G,aS as Ce,aT as Ve,aU as Se,j as De,t as xe}from"./index-xQy0Awhn.js";import{u as Te}from"./useSetting-ClCIfPYr.js";import{u as Ie}from"./useDesign-CbWcZHFZ.js";import{u as we}from"./useRequset-B-inZ1Vp.js";import{u as se}from"./index-vN_i3xzp.js";const Ue=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"字典编号",colKey:"code"},{title:"字典名称",colKey:"dictValue"},{title:"字典键值",colKey:"dictKey"},{title:"字典排序",colKey:"sort"},{title:"封存",colKey:"isSealed"},{fixed:"right",width:250,colKey:"op",title:"操作",align:"center"}],Ke=re({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""},rowData:{type:Object,default:()=>({})}},emits:["update:visible","update:editId","update:actionType","submit","closed"],setup(L,{emit:O}){const R={code:"",parentId:"",parentName:"",dictValue:"",dictKey:"",sort:void 0,isSealed:0,remark:""},c=L,D=u({code:[{required:!0,message:"请选择字典编号",type:"error",trigger:"blur"}],dictValue:[{required:!0,message:"请输入字典名称",type:"error",trigger:"blur"}],dictKey:[{required:!0,message:"请输入字典键值",type:"error",trigger:"blur"}],sort:[{required:!0,message:"请输入字典排序",type:"error",trigger:"blur"}],isSealed:[{required:!0,message:"请选择是否封存",type:"error",trigger:"change"}]}),M=le(()=>`${{view:"查看",edit:"编辑",add:"新增"}[c.actionType]||""}字典`),C=le(()=>({view:!0,edit:!1})[c.actionType]||!1),p=u(!1),a=u({...R}),x=u(null),V=u(!1),v=O,k=({firstError:i})=>{if(i)E.warning(i);else{V.value=!0;const l={...a.value,id:c.editId};be(l).then(()=>{v("submit",l),E.success("提交成功"),p.value=!1}).finally(()=>{V.value=!1})}},T=()=>{a.value={...R},Z(()=>{v("update:editId",""),v("update:actionType",""),v("closed")})},U=()=>{p.value=!1};return J(()=>p.value,i=>{v("update:visible",i)}),J(()=>c.visible,i=>{i&&c.editId&&Z(()=>{fe(c.editId).then(l=>{a.value={...l}})}),Z(()=>{var l;(l=x.value)==null||l.clearValidate()}),p.value=i}),J(()=>c.rowData,i=>{a.value={...a.value,parentId:i.id,parentName:i.dictValue,code:i.code}}),(i,l)=>{const I=o("t-input"),f=o("t-form-item"),b=o("t-col"),N=o("t-input-number"),S=o("t-switch"),z=o("t-textarea"),j=o("t-button"),q=o("t-row"),F=o("t-form"),W=o("t-dialog");return w(),B(W,{visible:p.value,"onUpdate:visible":l[7]||(l[7]=n=>p.value=n),header:M.value,width:780,footer:!1,onClosed:T},{body:t(()=>[e(F,{ref_key:"form",ref:x,class:me({"xy-form__detail":L.actionType==="view"}),data:a.value,rules:D.value,"label-width":100,disabled:C.value||V.value,onSubmit:k},{default:t(()=>[e(q,{gutter:[0,28]},{default:t(()=>[e(b,{span:12},{default:t(()=>[e(f,{label:"字典编号",name:"code"},{default:t(()=>[e(I,{modelValue:a.value.code,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value.code=n),placeholder:"请输入字典编号",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"上级字典",name:"parentName"},{default:t(()=>[e(I,{modelValue:a.value.parentName,"onUpdate:modelValue":l[1]||(l[1]=n=>a.value.parentName=n),placeholder:"请输入字典名称",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典名称",name:"dictValue"},{default:t(()=>[e(I,{modelValue:a.value.dictValue,"onUpdate:modelValue":l[2]||(l[2]=n=>a.value.dictValue=n),placeholder:"请输入字典名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典键值",name:"dictKey"},{default:t(()=>[e(I,{modelValue:a.value.dictKey,"onUpdate:modelValue":l[3]||(l[3]=n=>a.value.dictKey=n),placeholder:"请输入字典键值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典排序",name:"sort"},{default:t(()=>[e(N,{modelValue:a.value.sort,"onUpdate:modelValue":l[4]||(l[4]=n=>a.value.sort=n),theme:"column",placeholder:"请输入字典排序",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"封存",name:"isSealed"},{default:t(()=>[e(S,{modelValue:a.value.isSealed,"onUpdate:modelValue":l[5]||(l[5]=n=>a.value.isSealed=n),"custom-value":[1,0]},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典备注",name:"remark"},{default:t(()=>[e(z,{modelValue:a.value.remark,"onUpdate:modelValue":l[6]||(l[6]=n=>a.value.remark=n),placeholder:"请输入字典备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),$(e(b,{span:12},{default:t(()=>[e(f,{style:{float:"right"}},{default:t(()=>[e(j,{variant:"outline",onClick:U},{default:t(()=>[y("取消")]),_:1}),e(j,{theme:"primary",type:"submit"},{default:t(()=>[y("确定")]),_:1})]),_:1})]),_:1},512),[[_e,!C.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),$e={class:"table-wrapper"},Re=["onClick"],Ne=["onClick"],je=["onClick"],Ae=["onClick"],Be=re({__name:"DialogList",props:{visible:{type:Boolean,default:!1},rowData:{type:Object,default:()=>({})}},emits:["update:visible"],setup(L,{emit:O}){const{hasRole:R}=ge(),c=L,D=u({}),M=O,C=le(()=>`[${c.rowData.dictValue}]字典配置`),p={code:"",dictValue:""},a=u([]),x=ke({childrenKey:"children",treeNodeColumnIndex:2}),V=u(!1),v=u({...p}),k=u(!1),T=u(!1),U=u(""),i=u(""),l=u(null),{fetchData:I,data:f,dataLoading:b}=we(Ce,{},()=>{a.value=[]},!1),N=()=>{I({...v.value,parentId:c.rowData.id})},S=({row:d},s)=>{U.value=d.id,i.value=s,T.value=!0},z=({row:d})=>{D.value=d,i.value="add",T.value=!0},j=({row:d})=>{Y.value=d.id,Q.value="one",k.value=!0},q=se(()=>{N()},300),F=d=>{a.value=d},n=se(async d=>{try{await Ve(d),k.value=!1,E.success("删除成功"),ae(),q()}catch{k.value=!1}},300),H=()=>{a.value.length&&(Q.value="check",k.value=!0)},Y=u(-1),Q=u(),ae=()=>{Y.value=-1,Q.value=""},h=()=>{Q.value==="check"&&n(a.value),Q.value==="one"&&n([`${Y.value}`])},_=()=>{ae()},oe=d=>{var K;const{parentId:s}=g(D.value);d.parentId!==s?N():d.id&&((K=l.value)==null||K.setData(d.id,{...D.value,...d}))},ne=()=>{D.value={...c.rowData}};return J(()=>V.value,d=>{M("update:visible",d)}),J(()=>c.visible,d=>{d&&c.rowData.id&&N(),V.value=d,D.value={...c.rowData}}),(d,s)=>{const K=o("t-input"),ie=o("t-form-item"),X=o("t-col"),P=o("t-row"),A=o("t-button"),m=o("t-form"),ee=o("t-icon"),pe=o("t-tag"),he=o("t-enhanced-table"),ve=o("t-dialog"),ue=ye("auth");return w(),B(ve,{visible:V.value,"onUpdate:visible":s[7]||(s[7]=r=>V.value=r),header:C.value,width:980,footer:!1},{default:t(()=>[e(m,{ref:"form",data:v.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:g(q),onSubmit:g(q)},{default:t(()=>[e(P,null,{default:t(()=>[e(X,{span:10},{default:t(()=>[e(P,{gutter:[16,24]},{default:t(()=>[e(X,{span:4},{default:t(()=>[e(ie,{label:"字典编号",name:"code"},{default:t(()=>[e(K,{modelValue:v.value.code,"onUpdate:modelValue":s[0]||(s[0]=r=>v.value.code=r),clearable:"",placeholder:"请输入字典编号"},null,8,["modelValue"])]),_:1})]),_:1}),e(X,{span:4},{default:t(()=>[e(ie,{label:"字典名称",name:"dictValue"},{default:t(()=>[e(K,{modelValue:v.value.dictValue,"onUpdate:modelValue":s[1]||(s[1]=r=>v.value.dictValue=r),clearable:"",placeholder:"请输入字典名称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(X,{span:2,class:"operation-wrapper"},{default:t(()=>[e(A,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[y(" 查询 ")]),_:1}),e(A,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[y(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),te("div",$e,[e(he,{ref_key:"enhancedTable",ref:l,data:g(f),columns:g(Ue),hover:!0,loading:g(b),tree:x,"selected-row-keys":a.value,"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onSelectChange:F},{"top-content":t(()=>[e(P,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(X,{flex:"0 0 auto"},{default:t(()=>[$((w(),B(A,{onClick:s[2]||(s[2]=r=>S({row:{}},"add"))},{default:t(()=>[y("新增")]),_:1})),[[ue,"dict_add"]]),$((w(),B(A,{theme:"danger",onClick:H},{default:t(()=>[y("删除")]),_:1})),[[ue,"dict_delete"]])]),_:1})]),_:1})]),source:t(({row:r})=>[e(ee,{name:r.source},null,8,["name"])]),isOpen:t(({row:r})=>[r.isOpen===0?(w(),B(pe,{key:0,theme:"warning",variant:"light"},{default:t(()=>[y(" 否 ")]),_:1})):de("",!0),r.isOpen===1?(w(),B(pe,{key:1,theme:"success",variant:"light"},{default:t(()=>[y(" 是 ")]),_:1})):de("",!0)]),op:t(r=>[te("a",{class:"t-button-link",onClick:ce=>S(r,"view")},"查看",8,Re),$((w(),G("a",{class:"t-button-link",onClick:ce=>S(r,"edit")},[y("编辑")],8,Ne)),[[ue,"dict_edit"]]),$((w(),G("a",{class:"t-button-link",onClick:ce=>j(r)},[y("删除")],8,je)),[[ue,"dict_delete"]]),g(R)(["administrator","admin"])?(w(),G("a",{key:0,class:"t-button-link",onClick:ce=>z(r)}," 新增子项 ",8,Ae)):de("",!0)]),_:1},8,["data","columns","loading","tree","selected-row-keys"]),e(ve,{visible:k.value,"onUpdate:visible":s[3]||(s[3]=r=>k.value=r),header:"确认删除当前所选数据？","on-cancel":_,onConfirm:h},null,8,["visible"]),e(Ke,{visible:T.value,"onUpdate:visible":s[4]||(s[4]=r=>T.value=r),editId:U.value,"onUpdate:editId":s[5]||(s[5]=r=>U.value=r),actionType:i.value,"onUpdate:actionType":s[6]||(s[6]=r=>i.value=r),"row-data":D.value,onClosed:ne,onSubmit:oe},null,8,["visible","editId","actionType","row-data"])])]),_:1},8,["visible","header"])}}}),Le=re({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType","submit"],setup(L,{emit:O}){const R={code:"",dictValue:"",sort:void 0,isSealed:0,remark:""},c=L,D=u({code:[{required:!0,message:"请选择字典编号",type:"error",trigger:"blur"}],dictValue:[{required:!0,message:"请输入字典名称",type:"error",trigger:"blur"}],sort:[{required:!0,message:"请输入字典排序",type:"error",trigger:"blur"}],isSealed:[{required:!0,message:"请选择是否封存",type:"error",trigger:"change"}]}),M=le(()=>`${{view:"查看",edit:"编辑",add:"新增"}[c.actionType]||""}字典`),C=le(()=>({view:!0,edit:!1})[c.actionType]||!1),p=u(!1),a=u({...R}),x=u(null),V=u(!1),v=O,k=({firstError:i})=>{if(i)E.warning(i);else{V.value=!0;const l={...a.value,id:c.editId};be(l).then(()=>{v("submit",l),E.success("提交成功"),p.value=!1}).finally(()=>{V.value=!1})}},T=()=>{a.value={...R},Z(()=>{v("update:editId",""),v("update:actionType","")})},U=()=>{p.value=!1};return J(()=>p.value,i=>{v("update:visible",i)}),J(()=>c.visible,i=>{i&&c.editId&&Z(()=>{fe(c.editId).then(l=>{a.value={...l}})}),Z(()=>{var l;(l=x.value)==null||l.clearValidate()}),p.value=i}),(i,l)=>{const I=o("t-input"),f=o("t-form-item"),b=o("t-col"),N=o("t-input-number"),S=o("t-switch"),z=o("t-textarea"),j=o("t-button"),q=o("t-row"),F=o("t-form"),W=o("t-dialog");return w(),B(W,{visible:p.value,"onUpdate:visible":l[5]||(l[5]=n=>p.value=n),header:M.value,width:780,footer:!1,onClosed:T},{body:t(()=>[e(F,{ref_key:"form",ref:x,class:me({"xy-form__detail":L.actionType==="view"}),data:a.value,rules:D.value,"label-width":100,disabled:C.value||V.value,onSubmit:k},{default:t(()=>[e(q,{gutter:[0,28]},{default:t(()=>[e(b,{span:12},{default:t(()=>[e(f,{label:"字典编号",name:"code"},{default:t(()=>[e(I,{modelValue:a.value.code,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value.code=n),placeholder:"请输入字典编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典名称",name:"dictValue"},{default:t(()=>[e(I,{modelValue:a.value.dictValue,"onUpdate:modelValue":l[1]||(l[1]=n=>a.value.dictValue=n),placeholder:"请输入字典名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典排序",name:"sort"},{default:t(()=>[e(N,{modelValue:a.value.sort,"onUpdate:modelValue":l[2]||(l[2]=n=>a.value.sort=n),theme:"column",placeholder:"请输入字典排序",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"封存",name:"isSealed"},{default:t(()=>[e(S,{modelValue:a.value.isSealed,"onUpdate:modelValue":l[3]||(l[3]=n=>a.value.isSealed=n),"custom-value":[1,0]},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(f,{label:"字典备注",name:"remark"},{default:t(()=>[e(z,{modelValue:a.value.remark,"onUpdate:modelValue":l[4]||(l[4]=n=>a.value.remark=n),placeholder:"请输入字典备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),$(e(b,{span:12},{default:t(()=>[e(f,{style:{float:"right"}},{default:t(()=>[e(j,{variant:"outline",onClick:U},{default:t(()=>[y("取消")]),_:1}),e(j,{theme:"primary",type:"submit"},{default:t(()=>[y("确定")]),_:1})]),_:1})]),_:1},512),[[_e,!C.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),qe=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"字典编号",colKey:"code"},{title:"字典名称",colKey:"dictValue"},{title:"字典排序",colKey:"sort"},{title:"封存",colKey:"isSealed"},{fixed:"right",width:240,colKey:"op",title:"操作",align:"center"}],Fe={class:"table-wrapper"},Oe=["onClick"],Me=["onClick"],ze=["onClick"],He=["onClick"],Ye=re({__name:"dict",setup(L){const{tableVar:O}=Ie(),{getTableHeaderAffixedTop:R,getLayoutContainer:c}=Te(),{hasRole:D}=ge(),M={code:"",dictValue:""},C=u([]),p=u({...M}),a=u(!1),x=u(!1),V=u(""),v=u(""),k=u(!1),T=u({}),{fetchData:U,data:i,pagination:l,dataLoading:I}=we(Se,p.value,()=>{C.value=[]});De(()=>{U()});const f=({row:h},_)=>{V.value=h.id,v.value=_,x.value=!0},b=({row:h})=>{n.value=h.id,H.value="one",a.value=!0},N=({row:h})=>{T.value=h,k.value=!0},S=se(()=>{U()},300),z=h=>{C.value=h},j=h=>{l.value={...l.value,current:h.current||1,pageSize:h.pageSize},S()},F=se(async h=>{try{await Ve(h),a.value=!1,E.success("删除成功"),Y(),S()}catch{a.value=!1}},300),W=()=>{C.value.length&&(H.value="check",a.value=!0)},n=u(-1),H=u(),Y=()=>{n.value=-1,H.value=""},Q=()=>{H.value==="check"&&F(C.value),H.value==="one"&&F([`${n.value}`])},ae=()=>{Y()};return(h,_)=>{const oe=o("t-input"),ne=o("t-form-item"),d=o("t-col"),s=o("t-row"),K=o("t-button"),ie=o("t-form"),X=o("t-table"),P=o("t-dialog"),A=ye("auth");return w(),G("div",{class:me(g(O))},[e(ie,{ref:"form",data:p.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:g(S),onSubmit:g(S)},{default:t(()=>[e(s,null,{default:t(()=>[e(d,{span:10},{default:t(()=>[e(s,{gutter:[16,24]},{default:t(()=>[e(d,{span:4},{default:t(()=>[e(ne,{label:"字典编号",name:"code"},{default:t(()=>[e(oe,{modelValue:p.value.code,"onUpdate:modelValue":_[0]||(_[0]=m=>p.value.code=m),clearable:"",placeholder:"请输入字典编号"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:4},{default:t(()=>[e(ne,{label:"字典名称",name:"dictValue"},{default:t(()=>[e(oe,{modelValue:p.value.dictValue,"onUpdate:modelValue":_[1]||(_[1]=m=>p.value.dictValue=m),clearable:"",placeholder:"请输入字典名称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{span:2,class:"operation-wrapper"},{default:t(()=>[e(K,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[y(" 查询 ")]),_:1}),e(K,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[y(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),te("div",Fe,[e(X,{data:g(i),columns:g(qe),hover:!0,loading:g(I),pagination:g(l),"selected-row-keys":C.value,"header-affixed-top":{offsetTop:g(R),container:g(c)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:j,onSelectChange:z},{"top-content":t(()=>[e(s,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(d,{flex:"0 0 auto"},{default:t(()=>[$((w(),B(K,{onClick:_[2]||(_[2]=m=>f({row:{}},"add"))},{default:t(()=>[y("新增")]),_:1})),[[A,"dict_add"]]),$((w(),B(K,{theme:"danger",onClick:W},{default:t(()=>[y("删除")]),_:1})),[[A,"dict_delete"]])]),_:1})]),_:1})]),isSealed:t(({row:m})=>[te("span",null,xe(m.isSealed?"是":"否"),1)]),op:t(m=>[te("a",{class:"t-button-link",onClick:ee=>f(m,"view")},"查看",8,Oe),$((w(),G("a",{class:"t-button-link",onClick:ee=>f(m,"edit")},[y("编辑")],8,Me)),[[A,"dict_edit"]]),$((w(),G("a",{class:"t-button-link",onClick:ee=>b(m)},[y("删除")],8,ze)),[[A,"dict_delete"]]),g(D)(["administrator","admin"])?(w(),G("a",{key:0,class:"t-button-link",onClick:ee=>N(m)}," 字典配置 ",8,He)):de("",!0)]),_:1},8,["data","columns","loading","pagination","selected-row-keys","header-affixed-top"]),e(P,{visible:a.value,"onUpdate:visible":_[3]||(_[3]=m=>a.value=m),header:"确认删除当前所选数据？","on-cancel":ae,onConfirm:Q},null,8,["visible"]),e(Le,{visible:x.value,"onUpdate:visible":_[4]||(_[4]=m=>x.value=m),editId:V.value,"onUpdate:editId":_[5]||(_[5]=m=>V.value=m),actionType:v.value,"onUpdate:actionType":_[6]||(_[6]=m=>v.value=m),onSubmit:g(S)},null,8,["visible","editId","actionType","onSubmit"]),e(Be,{visible:k.value,"onUpdate:visible":_[7]||(_[7]=m=>k.value=m),"row-data":T.value},null,8,["visible","row-data"])])],2)}}});export{Ye as default};
