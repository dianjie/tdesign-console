import{d as de,f as d,J as re,a2 as z,Q as le,aY as _e,r as u,o as v,m as x,w as t,a as e,s as ie,q as c,p as E,c as D,F as be,K as ge,e as pe,W as O,X as ye,aZ as Ve,M as oe,a_ as we,aw as ke,aq as Ie,a$ as xe,i as Ce,as as he,b as f,t as Te,b0 as Se}from"./index-CqGaQ7t4.js";import{u as Ue}from"./useSetting-CnYQd1RY.js";import{u as De}from"./useDesign-CbWcZHFZ.js";import{u as Oe}from"./useRequset-Bj5fiv5N.js";import{m as qe}from"./manifest-Bm0FoDWf.js";import{u as ae}from"./index-BidCcHov.js";const Ae=de({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""},parentId:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType","update:parentId","submit"],setup(H,{emit:J}){const F={name:"",path:"",parentId:null,source:null,code:"",category:void 0,alias:"",sort:void 0,isOpen:null,remark:""},_=H,q=d({name:[{required:!0,message:"请输入菜单名称",type:"error",trigger:"blur"}],path:[{required:!1,message:"请输入路由地址",type:"error",trigger:"blur"}],source:[{required:!0,message:"请选择菜单图标",type:"error",trigger:"change"}],code:[{required:!0,message:"请输入菜单编号",type:"error",trigger:"blur"}],category:[{required:!0,message:"请选择菜单类型",type:"error",trigger:"change"}],alias:[{required:!0,message:"请输入菜单别名",type:"error",trigger:"blur"}],sort:[{required:!0,message:"请输入菜单排序",type:"error",trigger:"blur"}],isOpen:[{required:!0,message:"请选择是否新开窗口",type:"error",trigger:"change"}]}),Q=re(()=>`${{view:"查看",edit:"编辑",add:"新增"}[_.actionType]||""}菜单`),g=re(()=>({view:!0,edit:!1})[_.actionType]||!1),y=d(qe),V=d(!1),o=d({...F}),I=d([]),C=d(null),w=d(!1),b=J,A=({firstError:r})=>{if(r)oe.warning(r);else{w.value=!0;const l={...o.value,id:_.editId};Ve(l).then(()=>{b("submit",l),oe.success("提交成功"),V.value=!1}).finally(()=>{w.value=!1})}},K=()=>{o.value={...F},le(()=>{b("update:editId",""),b("update:actionType",""),b("update:parentId","")})},W=()=>{V.value=!1},X=()=>{we().then(r=>{I.value=r})};return z(()=>V.value,r=>{b("update:visible",r)}),z(()=>_.parentId,r=>{o.value.parentId=r}),z(()=>_.visible,r=>{r&&X(),r&&_.editId&&le(()=>{_e(_.editId).then(l=>{o.value={...l}})}),le(()=>{var l;(l=C.value)==null||l.clearValidate()}),V.value=r}),z(()=>o.value.category,r=>{q.value.path[0].required=r===1,q.value.source[0].required=r===1}),(r,l)=>{const h=u("t-input"),i=u("t-form-item"),p=u("t-col"),T=u("t-radio"),S=u("t-radio-group"),Y=u("t-tree-select"),M=u("t-icon"),ne=u("t-option"),N=u("t-select"),Z=u("t-input-number"),R=u("t-textarea"),k=u("t-button"),j=u("t-row"),G=u("t-form"),P=u("t-dialog");return v(),x(P,{visible:V.value,"onUpdate:visible":l[10]||(l[10]=n=>V.value=n),header:Q.value,width:780,footer:!1,onClosed:K},{body:t(()=>[e(G,{ref_key:"form",ref:C,class:ie({"xy-form__detail":H.actionType==="view"}),data:o.value,rules:q.value,"label-width":100,disabled:g.value||w.value,onSubmit:A},{default:t(()=>[e(j,{gutter:[0,28]},{default:t(()=>[e(p,{span:6},{default:t(()=>[e(i,{label:"菜单名称",name:"name"},{default:t(()=>[e(h,{modelValue:o.value.name,"onUpdate:modelValue":l[0]||(l[0]=n=>o.value.name=n),placeholder:"请输入菜单名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(i,{label:"菜单类型",name:"category",placeholder:"请选择菜单类型"},{default:t(()=>[e(S,{modelValue:o.value.category,"onUpdate:modelValue":l[1]||(l[1]=n=>o.value.category=n)},{default:t(()=>[e(T,{value:1},{default:t(()=>l[11]||(l[11]=[c("菜单")])),_:1}),e(T,{value:2},{default:t(()=>l[12]||(l[12]=[c("按钮")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(i,{label:"上级菜单",name:"parentId"},{default:t(()=>[e(Y,{modelValue:o.value.parentId,"onUpdate:modelValue":l[2]||(l[2]=n=>o.value.parentId=n),data:I.value,"popup-props":{overlayStyle:{width:"300px"},overlayInnerStyle:{width:"300px"}},"tree-props":{keys:{label:"title",value:"id",children:"children"}},clearable:"",placeholder:"请选择上级菜单"},null,8,["modelValue","data"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(i,{label:"路由地址",name:"path"},{default:t(()=>[e(h,{modelValue:o.value.path,"onUpdate:modelValue":l[3]||(l[3]=n=>o.value.path=n),placeholder:"请输入路由地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(i,{label:"菜单图标",name:"source"},{default:t(()=>[e(N,{modelValue:o.value.source,"onUpdate:modelValue":l[4]||(l[4]=n=>o.value.source=n),placeholder:"请选择菜单图标",clearable:"","popup-props":{overlayStyle:{width:"350px"},overlayInnerStyle:{width:"350px"}}},{prefixIcon:t(()=>[o.value.source?(v(),x(M,{key:0,name:o.value.source,style:{marginRight:"8px"}},null,8,["name"])):E("",!0)]),default:t(()=>[(v(!0),D(be,null,ge(y.value,n=>(v(),x(ne,{key:n.stem,value:n.stem,label:n.stem,style:{display:"inline-block","font-size":"20px"}},{default:t(()=>[pe("div",null,[e(M,{name:n.stem},null,8,["name"])])]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(i,{label:"菜单编号",name:"code"},{default:t(()=>[e(h,{modelValue:o.value.code,"onUpdate:modelValue":l[5]||(l[5]=n=>o.value.code=n),theme:"column",placeholder:"请输入菜单编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(i,{label:"菜单别名",name:"alias"},{default:t(()=>[e(h,{modelValue:o.value.alias,"onUpdate:modelValue":l[6]||(l[6]=n=>o.value.alias=n),placeholder:"请输入菜单别名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(i,{label:"菜单排序",name:"sort"},{default:t(()=>[e(Z,{modelValue:o.value.sort,"onUpdate:modelValue":l[7]||(l[7]=n=>o.value.sort=n),theme:"column",placeholder:"请输入菜单排序",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(i,{label:"是否新窗口",name:"isOpen"},{default:t(()=>[e(S,{modelValue:o.value.isOpen,"onUpdate:modelValue":l[8]||(l[8]=n=>o.value.isOpen=n),placeholder:"请选择是否新窗口"},{default:t(()=>[e(T,{value:0},{default:t(()=>l[13]||(l[13]=[c("否")])),_:1}),e(T,{value:1},{default:t(()=>l[14]||(l[14]=[c("是")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:t(()=>[e(i,{label:"菜单备注",name:"remark"},{default:t(()=>[e(R,{modelValue:o.value.remark,"onUpdate:modelValue":l[9]||(l[9]=n=>o.value.remark=n),placeholder:"请输入菜单备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),O(e(p,{span:12},{default:t(()=>[e(i,{style:{float:"right"}},{default:t(()=>[e(k,{variant:"outline",onClick:W},{default:t(()=>l[15]||(l[15]=[c("取消")])),_:1}),e(k,{theme:"primary",type:"submit"},{default:t(()=>l[16]||(l[16]=[c("确定")])),_:1})]),_:1})]),_:1},512),[[ye,!g.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Ke=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"菜单名称",colKey:"name",ellipsis:!0,width:200},{title:"路由地址",colKey:"path",ellipsis:!0,width:200},{title:"菜单图标",colKey:"source",width:80,ellipsis:!0,align:"center"},{title:"菜单编号",colKey:"code",width:150,ellipsis:!0},{title:"新窗口",colKey:"isOpen",width:80,ellipsis:!0},{title:"菜单排序",width:80,colKey:"sort",ellipsis:!0},{fixed:"right",width:180,colKey:"op",title:"操作",align:"center"}],Re={class:"table-wrapper"},$e=["onClick"],Be=["onClick"],Le=["onClick"],Fe=["onClick"],Je=de({__name:"menu",setup(H){const{tableVar:J}=De(),{getTableHeaderAffixedTop:F,getLayoutContainer:_}=Ue(),{hasRole:q}=ke(),Q={name:"",code:""},g=d([]),y=d({...Q}),V=Ie({childrenKey:"children",treeNodeColumnIndex:2}),o=d(!1),I=d(!1),C=d(""),w=d(""),b=d(""),A=d({}),{fetchData:K,data:W,dataLoading:X}=Oe(xe,y.value,()=>{g.value=[]},!1);Ce(()=>{K()});const r=({row:m},a)=>{A.value=m,C.value=m.id,w.value=a,I.value=!0},l=({row:m})=>{b.value=m.id,w.value="add",I.value=!0},h=({row:m})=>{R.value=m.id,k.value="one",o.value=!0},i=d(!1),p=d(null),T=()=>{i.value=!i.value,i.value?p.value.expandAll():p.value.foldAll()},S=ae(()=>{K()},300),Y=ae(T,300),M=m=>{g.value=m},N=ae(async m=>{try{await Se(m),o.value=!1,oe.success("删除成功"),j(),S()}catch{o.value=!1}},300),Z=()=>{g.value.length&&(k.value="check",o.value=!0)},R=d(-1),k=d(),j=()=>{R.value=-1,k.value=""},G=()=>{k.value==="check"&&N(g.value),k.value==="one"&&N([`${R.value}`])},P=()=>{j()},n=m=>{var $;const{parentId:a}=f(A.value);m.parentId!==a?K():m.id&&(($=p.value)==null||$.setData(m.id,{...A.value,...m}))};return(m,a)=>{const $=u("t-input"),ue=u("t-form-item"),U=u("t-col"),ee=u("t-row"),B=u("t-button"),me=u("t-form"),ce=u("t-icon"),se=u("t-tag"),ve=u("t-enhanced-table"),fe=u("t-dialog"),L=he("auth");return v(),D("div",{class:ie(f(J))},[e(me,{ref:"form",data:y.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:f(S),onSubmit:f(S)},{default:t(()=>[e(ee,null,{default:t(()=>[e(U,{span:10},{default:t(()=>[e(ee,{gutter:[16,24]},{default:t(()=>[e(U,{span:4},{default:t(()=>[e(ue,{label:"菜单名称",name:"name"},{default:t(()=>[e($,{modelValue:y.value.name,"onUpdate:modelValue":a[0]||(a[0]=s=>y.value.name=s),placeholder:"请输入菜单名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(U,{span:4},{default:t(()=>[e(ue,{label:"菜单编号",name:"code"},{default:t(()=>[e($,{modelValue:y.value.code,"onUpdate:modelValue":a[1]||(a[1]=s=>y.value.code=s),placeholder:"请输入菜单编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{span:2,class:"operation-wrapper"},{default:t(()=>[e(B,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>a[8]||(a[8]=[c(" 查询 ")])),_:1}),e(B,{type:"reset",variant:"base",theme:"default"},{default:t(()=>a[9]||(a[9]=[c(" 重置 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),pe("div",Re,[e(ve,{ref_key:"enhancedTable",ref:p,data:f(W),columns:f(Ke),hover:!0,loading:f(X),tree:V,"selected-row-keys":g.value,"header-affixed-top":{offsetTop:f(F),container:f(_)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onSelectChange:M},{"top-content":t(()=>[e(ee,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(U,{flex:"0 0 auto"},{default:t(()=>[O((v(),x(B,{onClick:a[2]||(a[2]=s=>r({row:{}},"add"))},{default:t(()=>a[10]||(a[10]=[c("新增")])),_:1})),[[L,"menu_add"]]),O((v(),x(B,{theme:"danger",onClick:Z},{default:t(()=>a[11]||(a[11]=[c("删除")])),_:1})),[[L,"menu_delete"]])]),_:1}),e(U,{flex:"0 0 auto"},{default:t(()=>[e(B,{theme:"default",onClick:f(Y)},{default:t(()=>[c(Te(i.value?"收起全部":"展开全部"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),source:t(({row:s})=>[e(ce,{name:s.source},null,8,["name"])]),isOpen:t(({row:s})=>[s.isOpen===0?(v(),x(se,{key:0,theme:"warning",variant:"light"},{default:t(()=>a[12]||(a[12]=[c(" 否 ")])),_:1})):E("",!0),s.isOpen===1?(v(),x(se,{key:1,theme:"success",variant:"light"},{default:t(()=>a[13]||(a[13]=[c(" 是 ")])),_:1})):E("",!0)]),op:t(s=>[O((v(),D("a",{class:"t-button-link",onClick:te=>r(s,"view")},a[14]||(a[14]=[c("查看")]),8,$e)),[[L,"menu_view"]]),O((v(),D("a",{class:"t-button-link",onClick:te=>r(s,"edit")},a[15]||(a[15]=[c("编辑")]),8,Be)),[[L,"menu_edit"]]),O((v(),D("a",{class:"t-button-link",onClick:te=>h(s)},a[16]||(a[16]=[c("删除")]),8,Le)),[[L,"menu_delete"]]),f(q)(["administrator","admin"])?(v(),D("a",{key:0,class:"t-button-link",onClick:te=>l(s)}," 新增子项 ",8,Fe)):E("",!0)]),_:1},8,["data","columns","loading","tree","selected-row-keys","header-affixed-top"]),e(fe,{visible:o.value,"onUpdate:visible":a[3]||(a[3]=s=>o.value=s),header:"确认删除当前所选数据？","on-cancel":P,onConfirm:G},null,8,["visible"]),e(Ae,{visible:I.value,"onUpdate:visible":a[4]||(a[4]=s=>I.value=s),editId:C.value,"onUpdate:editId":a[5]||(a[5]=s=>C.value=s),actionType:w.value,"onUpdate:actionType":a[6]||(a[6]=s=>w.value=s),parentId:b.value,"onUpdate:parentId":a[7]||(a[7]=s=>b.value=s),onSubmit:n},null,8,["visible","editId","actionType","parentId"])])],2)}}});export{Je as default};
