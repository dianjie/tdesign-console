import{b as _e,g as ge,s as ye,c as Ve,e as ke,r as Ce}from"./oss-D2p6EILS.js";import{d as ee,g as i,a3 as J,r as n,o as y,n as O,w as t,a as e,b as f,s as g,M as q,R as se,aA as Ke,X as Y,v as de,c as S,F as he,S as we,t as ie,q as Z,a0 as N,a1 as De,aB as Ue,aC as Ie,j as xe,ax as Te,e as Se,az as Ne,at as ne,au as ue,ah as Oe}from"./index-xQy0Awhn.js";import{u as qe}from"./useSetting-ClCIfPYr.js";import{u as Be}from"./useDesign-CbWcZHFZ.js";import{u as Re}from"./useRequset-B-inZ1Vp.js";import{u as $}from"./index-vN_i3xzp.js";const Ae=ee({__name:"DialogDebug",props:{visible:{type:Boolean,default:!1},code:{type:String,default:""}},emits:["update:visible","submit"],setup(F,{emit:L}){const I={backgroundUrl:[],code:""},V=F,j=i({backgroundUrl:[{required:!0,message:"请选择图片",type:"error",trigger:"change"}]}),K=i(!1),m=i({...I}),_=i(null),r=i(!1),l=i(),h=L,w=$(({firstError:a})=>{a?q.warning(a):(r.value=!0,l.value.uploadFiles())},300),D=()=>{m.value={...I}},M=()=>{K.value=!1};J(()=>K.value,a=>{h("update:visible",a)}),J(()=>V.visible,a=>{m.value.code=V.code,K.value=a});const x=({file:a})=>{q.error(`文件 ${a.name} 上传失败`),r.value=!1},z=async a=>{try{const b=await _e({code:m.value.code,file:a.raw});return{status:"success",response:{...b,url:b.link}}}catch{return{status:"fail",error:"上传失败"}}},p=()=>{h("submit",{}),q.success("上传成功"),r.value=!1};return(a,b)=>{const U=n("t-input"),c=n("t-form-item"),d=n("t-col"),k=n("t-upload"),B=n("t-button"),H=n("t-row"),R=n("t-form"),P=n("t-dialog");return y(),O(P,{visible:K.value,"onUpdate:visible":b[2]||(b[2]=C=>K.value=C),header:"对象存储上传调试",width:780,footer:!1,onClosed:D},{body:t(()=>[e(R,{ref_key:"form",ref:_,data:m.value,rules:j.value,"label-width":100,disabled:r.value,onSubmit:f(w)},{default:t(()=>[e(H,{gutter:[0,28]},{default:t(()=>[e(d,{span:12},{default:t(()=>[e(c,{label:"资源编号",name:"code"},{default:t(()=>[e(U,{modelValue:m.value.code,"onUpdate:modelValue":b[0]||(b[0]=C=>m.value.code=C),placeholder:"请输入资源编号",clearable:"",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(c,{label:"上传图片",name:"backgroundUrl"},{default:t(()=>[e(k,{ref_key:"uploadRef",ref:l,modelValue:m.value.backgroundUrl,"onUpdate:modelValue":b[1]||(b[1]=C=>m.value.backgroundUrl=C),theme:"image",tips:"单张图片文件上传",accept:"image/*",locale:{triggerUploadText:{image:"请选择图片"}},"request-method":z,disabled:r.value,onFail:x,onSuccess:p},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(c,{style:{float:"right"}},{default:t(()=>[e(B,{variant:"outline",onClick:M},{default:t(()=>[g("关闭")]),_:1}),e(B,{theme:"primary",disabled:r.value,type:"submit"},{default:t(()=>[g("上传")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["data","rules","disabled","onSubmit"])]),_:1},8,["visible"])}}}),$e=ee({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType","submit"],setup(F,{emit:L}){const I={category:void 0,ossCode:"",endpoint:"",bucketName:"",accessKey:"",secretKey:"",appId:"",region:"",remark:""},V=F,j=i({category:[{required:!0,message:"请选择分类",type:"error",trigger:"change"}],ossCode:[{required:!0,message:"请输入资源编号",type:"error",trigger:"blur"}],endpoint:[{required:!0,message:"请输入资源地址",type:"error",trigger:"blur"}],bucketName:[{required:!0,message:"请输入空间名",type:"error",trigger:"blur"}],accessKey:[{required:!0,message:"请输入accessKey",type:"error",trigger:"blur"}],secretKey:[{required:!0,message:"请输入secretKey",type:"error",trigger:"blur"}]}),K=se(()=>({view:"查看",edit:"编辑",add:"新增"})[V.actionType]||""),m=se(()=>({view:!0,edit:!1})[V.actionType]||!1),_=Ke("categoryOptions")||[],r=i(!1),l=i({...I}),h=i(null),w=i(!1),D=L,M=({firstError:p})=>{if(p)q.warning(p);else{w.value=!0;const{category:a,appId:b,region:U}=f(l),c={appId:a===4?b:"",region:a===4?U:""},d={...l.value,...c,id:V.editId};ye(d).then(()=>{D("submit",d),q.success("提交成功"),r.value=!1}).finally(()=>{w.value=!1})}},x=()=>{l.value={...I},Y(()=>{D("update:editId",""),D("update:actionType","")})},z=()=>{r.value=!1};return J(()=>r.value,p=>{D("update:visible",p)}),J(()=>V.visible,p=>{p&&V.editId&&Y(()=>{ge(V.editId).then(a=>{l.value={...a}})}),Y(()=>{var a;(a=h.value)==null||a.clearValidate()}),r.value=p}),(p,a)=>{const b=n("t-radio"),U=n("t-radio-group"),c=n("t-form-item"),d=n("t-col"),k=n("t-input"),B=n("t-textarea"),H=n("t-button"),R=n("t-row"),P=n("t-form"),C=n("t-dialog");return y(),O(C,{visible:r.value,"onUpdate:visible":a[9]||(a[9]=o=>r.value=o),header:K.value,width:780,footer:!1,onClosed:x},{body:t(()=>[e(P,{ref_key:"form",ref:h,class:de({"xy-form__detail":F.actionType==="view"}),data:l.value,rules:j.value,"label-width":100,disabled:m.value||w.value,onSubmit:M},{default:t(()=>[e(R,{gutter:[0,28]},{default:t(()=>[e(d,{span:12},{default:t(()=>[e(c,{label:"分类",name:"category"},{default:t(()=>[e(U,{modelValue:l.value.category,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value.category=o),name:"category"},{default:t(()=>[(y(!0),S(he,null,we(f(_),o=>(y(),O(b,{key:o.dictKey,value:o.dictKey},{default:t(()=>[g(ie(o.dictValue),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(c,{label:"资源编号",name:"ossCode"},{default:t(()=>[e(k,{modelValue:l.value.ossCode,"onUpdate:modelValue":a[1]||(a[1]=o=>l.value.ossCode=o),placeholder:"请输入资源编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(c,{label:"资源地址",name:"endpoint"},{default:t(()=>[e(k,{modelValue:l.value.endpoint,"onUpdate:modelValue":a[2]||(a[2]=o=>l.value.endpoint=o),placeholder:"请输入资源地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(c,{label:"空间名",name:"bucketName"},{default:t(()=>[e(k,{modelValue:l.value.bucketName,"onUpdate:modelValue":a[3]||(a[3]=o=>l.value.bucketName=o),placeholder:"请输入空间名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(c,{label:"accessKey",name:"accessKey"},{default:t(()=>[e(k,{modelValue:l.value.accessKey,"onUpdate:modelValue":a[4]||(a[4]=o=>l.value.accessKey=o),placeholder:"请输入accessKey",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(c,{label:"secretKey",name:"secretKey"},{default:t(()=>[e(k,{modelValue:l.value.secretKey,"onUpdate:modelValue":a[5]||(a[5]=o=>l.value.secretKey=o),placeholder:"请输入secretKey",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l.value.category===4?(y(),O(d,{key:0,span:12},{default:t(()=>[e(c,{label:"appId",name:"appId"},{default:t(()=>[e(k,{modelValue:l.value.appId,"onUpdate:modelValue":a[6]||(a[6]=o=>l.value.appId=o),placeholder:"请输入appId",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):Z("",!0),l.value.category===4?(y(),O(d,{key:1,span:12},{default:t(()=>[e(c,{label:"region",name:"region"},{default:t(()=>[e(k,{modelValue:l.value.region,"onUpdate:modelValue":a[7]||(a[7]=o=>l.value.region=o),placeholder:"请输入region",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):Z("",!0),e(d,{span:12},{default:t(()=>[e(c,{label:"备注",name:"remark"},{default:t(()=>[e(B,{modelValue:l.value.remark,"onUpdate:modelValue":a[8]||(a[8]=o=>l.value.remark=o),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),N(e(d,{span:12},{default:t(()=>[e(c,{style:{float:"right"}},{default:t(()=>[e(H,{variant:"outline",onClick:z},{default:t(()=>[g("取消")]),_:1}),e(H,{theme:"primary",type:"submit"},{default:t(()=>[g("确定")]),_:1})]),_:1})]),_:1},512),[[De,!m.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Fe=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"分类",colKey:"category"},{title:"资源编号",colKey:"ossCode"},{title:"资源地址",colKey:"endpoint"},{title:"空间名",colKey:"bucketName"},{title:"accessKey",colKey:"accessKey"},{title:"secretKey",colKey:"secretKey"},{title:"是否启用",colKey:"statusName"},{fixed:"right",width:280,colKey:"op",title:"操作",align:"center"}],Le={class:"table-wrapper"},je=["onClick"],Me=["onClick"],ze=["onClick"],He=["onClick"],Pe=["onClick"],Ye=ee({__name:"oss",setup(F){const{tableVar:L}=Be(),{getTableHeaderAffixedTop:I,getLayoutContainer:V}=qe(),{hasRole:j}=Ue(),K={category:"",ossCode:"",accessKey:"",status:void 0},m=i([]),_=i({...K}),r=i(!1),l=i(!1),h=i(""),w=i(""),{fetchData:D,data:M,pagination:x,dataLoading:z}=Re(Ve,_.value,()=>{m.value=[]}),p=i([]),a=i([]);Ie("categoryOptions",p);async function b(){const v=await ne("oss"),s=await ne("yes_no");p.value=ue(v),a.value=ue(s)}xe(()=>{b(),D()});const U=({row:v},s)=>{h.value=v.id,w.value=s,l.value=!0},c=({row:v})=>{C.value=v.id,o.value="one",r.value=!0},d=$(()=>{D()},300),k=v=>{m.value=v},B=v=>{x.value={...x.value,current:v.current||1,pageSize:v.pageSize},d()},R=$(async v=>{try{await Ce(v),r.value=!1,q.success("删除成功"),te(),d()}catch{r.value=!1}},300),P=()=>{m.value.length&&(o.value="check",r.value=!0)},C=i(-1),o=i(),te=()=>{C.value=-1,o.value=""},re=()=>{o.value==="check"&&R(m.value),o.value==="one"&&R([`${C.value}`])},ce=()=>{te()},Q=i(!1),ae=i(""),me=$(({row:v})=>{ae.value=v.ossCode,Q.value=!0},300),pe=$(({row:v})=>{const s=Oe.confirm({header:"提示",theme:"info",body:"是否确定启用这条配置?",onConfirm:$(()=>{ke(v.id).then(()=>{q.success("启用成功"),s.destroy(),d()})},300)})},300);return(v,s)=>{const le=n("t-select"),X=n("t-form-item"),T=n("t-col"),oe=n("t-input"),W=n("t-row"),E=n("t-button"),ve=n("t-form"),fe=n("t-table"),be=n("t-dialog"),A=Te("auth");return y(),S("div",{class:de(f(L))},[e(ve,{ref:"form",data:_.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:f(d),onSubmit:f(d)},{default:t(()=>[e(W,null,{default:t(()=>[e(T,{span:10},{default:t(()=>[e(W,{gutter:[16,24]},{default:t(()=>[e(T,{span:4},{default:t(()=>[e(X,{label:"分类",name:"category"},{default:t(()=>[e(le,{modelValue:_.value.category,"onUpdate:modelValue":s[0]||(s[0]=u=>_.value.category=u),options:p.value,keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择分类"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(T,{span:4},{default:t(()=>[e(X,{label:"资源编号",name:"ossCode"},{default:t(()=>[e(oe,{modelValue:_.value.ossCode,"onUpdate:modelValue":s[1]||(s[1]=u=>_.value.ossCode=u),clearable:"",placeholder:"请输入资源编号"},null,8,["modelValue"])]),_:1})]),_:1}),e(T,{span:4},{default:t(()=>[e(X,{label:"accessKey",name:"accessKey"},{default:t(()=>[e(oe,{modelValue:_.value.accessKey,"onUpdate:modelValue":s[2]||(s[2]=u=>_.value.accessKey=u),clearable:"",placeholder:"请输入accessKey"},null,8,["modelValue"])]),_:1})]),_:1}),e(T,{span:4},{default:t(()=>[e(X,{label:"是否启用",name:"status"},{default:t(()=>[e(le,{modelValue:_.value.status,"onUpdate:modelValue":s[3]||(s[3]=u=>_.value.status=u),options:a.value,keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择是否启用"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}),e(T,{span:2,class:"operation-wrapper"},{default:t(()=>[e(E,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[g(" 查询 ")]),_:1}),e(E,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[g(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),Se("div",Le,[e(fe,{data:f(M),columns:f(Fe),hover:!0,loading:f(z),pagination:f(x),"selected-row-keys":m.value,"header-affixed-top":{offsetTop:f(I),container:f(V)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:B,onSelectChange:k},{"top-content":t(()=>[e(W,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(T,{flex:"0 0 auto"},{default:t(()=>[N((y(),O(E,{onClick:s[4]||(s[4]=u=>U({row:{}},"add"))},{default:t(()=>[g("新增")]),_:1})),[[A,"oss_add"]]),N((y(),O(E,{theme:"danger",onClick:P},{default:t(()=>[g("删除")]),_:1})),[[A,"oss_delete"]])]),_:1})]),_:1})]),category:t(({row:u})=>[g(ie(f(Ne)(p.value,u.category)),1)]),op:t(u=>[N((y(),S("a",{class:"t-button-link",onClick:G=>U(u,"view")},[g("查看")],8,je)),[[A,"oss_view"]]),N((y(),S("a",{class:"t-button-link",onClick:G=>U(u,"edit")},[g("编辑")],8,Me)),[[A,"oss_edit"]]),N((y(),S("a",{class:"t-button-link",onClick:G=>c(u)},[g("删除")],8,ze)),[[A,"oss_delete"]]),f(j)(["administrator","admin"])?(y(),S("a",{key:0,class:"t-button-link",onClick:G=>f(me)(u)},"调试",8,He)):Z("",!0),N((y(),S("a",{class:"t-button-link",onClick:G=>f(pe)(u)},[g("启用")],8,Pe)),[[A,"oss_enable"]])]),_:1},8,["data","columns","loading","pagination","selected-row-keys","header-affixed-top"]),e(be,{visible:r.value,"onUpdate:visible":s[5]||(s[5]=u=>r.value=u),header:"确认删除当前所选数据？","on-cancel":ce,onConfirm:re},null,8,["visible"]),e($e,{visible:l.value,"onUpdate:visible":s[6]||(s[6]=u=>l.value=u),editId:h.value,"onUpdate:editId":s[7]||(s[7]=u=>h.value=u),actionType:w.value,"onUpdate:actionType":s[8]||(s[8]=u=>w.value=u),onSubmit:f(d)},null,8,["visible","editId","actionType","onSubmit"]),e(Ae,{visible:Q.value,"onUpdate:visible":s[9]||(s[9]=u=>Q.value=u),code:ae.value},null,8,["visible","code"])])],2)}}});export{Ye as default};
