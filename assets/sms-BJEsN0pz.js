import{ar as H,d as se,f as d,a2 as Y,r as n,o as _,m as R,w as t,a as e,b as i,q as g,M as P,az as _e,Q as W,W as le,s as ce,c as j,F as ye,R as Ve,t as me,p as oe,$ as A,a0 as Ce,aA as ke,aB as he,i as Ie,aw as we,e as De,ay as Ke,as as de,at as ie,ag as Te}from"./index-DSNeq6T3.js";import{u as Ue}from"./useSetting-BX_U3Mv-.js";import{u as xe}from"./useDesign-CbWcZHFZ.js";import{u as Ne}from"./useRequset-6kUC2rU0.js";import{u as z}from"./index-p6OeR1Lv.js";const Se=(c,q,K)=>H.get({url:"/blade-resource/sms/list",params:{...K,current:c,size:q}},{joinTime:!1}),$e=c=>H.get({url:"/blade-resource/sms/detail",params:{id:c}}),qe=c=>H.post({url:"/blade-resource/sms/remove",params:{ids:c}},{joinParamsToUrl:!0,errorMessageMode:"message"}),Be=c=>H.post({url:"/blade-resource/sms/submit",data:c},{errorMessageMode:"message"}),Me=c=>H.post({url:"/blade-resource/sms/enable",params:{id:c}},{joinParamsToUrl:!0}),je=c=>H.post({url:"/blade-resource/sms/endpoint/send-message",params:c},{joinParamsToUrl:!0,errorMessageMode:"message"}),Ae=se({__name:"DialogDebug",props:{visible:{type:Boolean,default:!1},code:{type:String,default:""}},emits:["update:visible","submit"],setup(c,{emit:q}){const K={code:"",phones:"",params:""},y=c,Q=d({phones:[{required:!0,message:"请输入发送手机",type:"error",trigger:"blur"}],params:[{required:!0,message:"请输入发送参数",type:"error",trigger:"blur"}]}),p=d(!1),a=d({...K}),v=d(null),f=d(!1),V=q,T=z(({firstError:C})=>{C?P.warning(C):(f.value=!0,je(a.value).then(()=>{V("submit",a.value),P.success("提交成功"),p.value=!1}).finally(()=>{f.value=!1}))},300),U=()=>{a.value={...K}},S=()=>{p.value=!1};return Y(()=>p.value,C=>{V("update:visible",C)}),Y(()=>y.visible,C=>{a.value.code=y.code,p.value=C}),(C,b)=>{const $=n("t-input"),k=n("t-form-item"),x=n("t-col"),L=n("t-button"),u=n("t-row"),l=n("t-form"),w=n("t-dialog");return _(),R(w,{visible:p.value,"onUpdate:visible":b[3]||(b[3]=h=>p.value=h),header:"手机短信发送调试",width:780,footer:!1,onClosed:U},{body:t(()=>[e(l,{ref_key:"form",ref:v,data:a.value,rules:Q.value,"label-width":100,disabled:f.value,onSubmit:i(T)},{default:t(()=>[e(u,{gutter:[0,28]},{default:t(()=>[e(x,{span:12},{default:t(()=>[e(k,{label:"资源编号",name:"code"},{default:t(()=>[e($,{modelValue:a.value.code,"onUpdate:modelValue":b[0]||(b[0]=h=>a.value.code=h),placeholder:"请输入资源编号",clearable:"",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(x,{span:12},{default:t(()=>[e(k,{label:"发送手机",name:"phones"},{default:t(()=>[e($,{modelValue:a.value.phones,"onUpdate:modelValue":b[1]||(b[1]=h=>a.value.phones=h),placeholder:"请输入发送手机",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(x,{span:12},{default:t(()=>[e(k,{label:"发送参数",name:"params"},{default:t(()=>[e($,{modelValue:a.value.params,"onUpdate:modelValue":b[2]||(b[2]=h=>a.value.params=h),placeholder:"例: {'code':2333,'title':'通知标题'}",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(x,{span:12},{default:t(()=>[e(k,{style:{float:"right"}},{default:t(()=>[e(L,{variant:"outline",onClick:S},{default:t(()=>[g("取消")]),_:1}),e(L,{theme:"primary",disabled:f.value,type:"submit"},{default:t(()=>[g("提交")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["data","rules","disabled","onSubmit"])]),_:1},8,["visible"])}}}),Re=se({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType","submit"],setup(c,{emit:q}){const K={category:1,smsCode:"",templateId:"",accessKey:"",secretKey:"",regionId:"cn-hangzhou",signName:"",remark:""},y=c,Q=_e("categoryOptions")||[],p=d(!1),a=d({...K}),v=d(null),f=d(!1),V=q,T=W(()=>{const{category:u}=i(a);return u===1?"模版内容":"模版ID"}),U=W(()=>{const{category:u}=i(a);return u===1?"apiKey":u===4?"appId":"accessKey"}),S=W(()=>{const{category:u}=i(a);return u===4?"appKey":"secretKey"}),C=d({category:[{required:!0,message:"请选择分类",type:"error",trigger:"change"}],smsCode:[{required:!0,message:"请输入资源编号",type:"error",trigger:"blur"}],templateId:[{required:!0,message:`请输入${T.value}`,type:"error",trigger:"blur"}],accessKey:[{required:!0,message:`请输入${U.value}`,type:"error",trigger:"blur"}],secretKey:[{required:!0,message:`请输入${S.value}`,type:"error",trigger:"blur"}],regionId:[{required:!0,message:"请输入regionId",type:"error",trigger:"blur"}],signName:[{required:!0,message:"请输入短信签名",type:"error",trigger:"blur"}]}),b=W(()=>`${{view:"查看",edit:"编辑",add:"新增"}[y.actionType]||""}短信配置`),$=W(()=>({view:!0,edit:!1})[y.actionType]||!1),k=({firstError:u})=>{if(u)P.warning(u);else{f.value=!0;const l={...a.value,id:y.editId};Be(l).then(()=>{V("submit",l),P.success("提交成功"),p.value=!1}).finally(()=>{f.value=!1})}},x=()=>{a.value={...K},le(()=>{V("update:editId",""),V("update:actionType","")})},L=()=>{p.value=!1};return Y(()=>p.value,u=>{V("update:visible",u)}),Y(()=>y.visible,u=>{u&&y.editId&&le(()=>{$e(y.editId).then(l=>{a.value={...l}})}),le(()=>{var l;(l=v.value)==null||l.clearValidate()}),p.value=u}),(u,l)=>{const w=n("t-radio"),h=n("t-radio-group"),I=n("t-form-item"),D=n("t-col"),N=n("t-input"),Z=n("t-textarea"),O=n("t-button"),B=n("t-row"),E=n("t-form"),ee=n("t-dialog");return _(),R(ee,{visible:p.value,"onUpdate:visible":l[8]||(l[8]=r=>p.value=r),header:b.value,width:780,footer:!1,onClosed:x},{body:t(()=>[e(E,{ref_key:"form",ref:v,class:ce({"xy-form__detail":c.actionType==="view"}),data:a.value,rules:C.value,"label-width":100,disabled:$.value||f.value,onSubmit:k},{default:t(()=>[e(B,{gutter:[0,28]},{default:t(()=>[e(D,{span:12},{default:t(()=>[e(I,{label:"分类",name:"category"},{default:t(()=>[e(h,{modelValue:a.value.category,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value.category=r),name:"category"},{default:t(()=>[(_(!0),j(ye,null,Ve(i(Q),r=>(_(),R(w,{key:r.dictKey,value:r.dictKey},{default:t(()=>[g(me(r.dictValue),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(D,{span:12},{default:t(()=>[e(I,{label:"资源编号",name:"smsCode"},{default:t(()=>[e(N,{modelValue:a.value.smsCode,"onUpdate:modelValue":l[1]||(l[1]=r=>a.value.smsCode=r),placeholder:"请输入资源编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(D,{span:12},{default:t(()=>[e(I,{label:T.value,name:"templateId"},{default:t(()=>[e(N,{modelValue:a.value.templateId,"onUpdate:modelValue":l[2]||(l[2]=r=>a.value.templateId=r),placeholder:`请输入${T.value}`,clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(D,{span:12},{default:t(()=>[e(I,{label:U.value,name:"accessKey"},{default:t(()=>[e(N,{modelValue:a.value.accessKey,"onUpdate:modelValue":l[3]||(l[3]=r=>a.value.accessKey=r),placeholder:`请输入${U.value}`,clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a.value.category!==1?(_(),R(D,{key:0,span:12},{default:t(()=>[e(I,{label:S.value,name:"secretKey"},{default:t(()=>[e(N,{modelValue:a.value.secretKey,"onUpdate:modelValue":l[4]||(l[4]=r=>a.value.secretKey=r),placeholder:`请输入${S.value}`,clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})):oe("",!0),a.value.category===3?(_(),R(D,{key:1,span:12},{default:t(()=>[e(I,{label:"regionId",name:"regionId"},{default:t(()=>[e(N,{modelValue:a.value.regionId,"onUpdate:modelValue":l[5]||(l[5]=r=>a.value.regionId=r),placeholder:"请输入regionId",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):oe("",!0),e(D,{span:12},{default:t(()=>[e(I,{label:"短信签名",name:"signName"},{default:t(()=>[e(N,{modelValue:a.value.signName,"onUpdate:modelValue":l[6]||(l[6]=r=>a.value.signName=r),placeholder:"请输入短信签名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(D,{span:12},{default:t(()=>[e(I,{label:"备注",name:"remark"},{default:t(()=>[e(Z,{modelValue:a.value.remark,"onUpdate:modelValue":l[7]||(l[7]=r=>a.value.remark=r),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),A(e(D,{span:12},{default:t(()=>[e(I,{style:{float:"right"}},{default:t(()=>[e(O,{variant:"outline",onClick:L},{default:t(()=>[g("取消")]),_:1}),e(O,{theme:"primary",type:"submit"},{default:t(()=>[g("确定")]),_:1})]),_:1})]),_:1},512),[[Ce,!$.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Le=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"分类",colKey:"category"},{title:"资源编号",colKey:"smsCode"},{title:"模版ID",colKey:"templateId"},{title:"accessKey",colKey:"accessKey"},{title:"短信签名",colKey:"signName"},{title:"是否启用",colKey:"statusName"},{fixed:"right",width:280,colKey:"op",title:"操作",align:"center"}],Oe={class:"table-wrapper"},Fe=["onClick"],ze=["onClick"],Pe=["onClick"],He=["onClick"],Qe=["onClick"],Ye=se({__name:"sms",setup(c){const{tableVar:q}=xe(),{getTableHeaderAffixedTop:K,getLayoutContainer:y}=Ue(),{hasRole:Q}=ke(),p={category:"",smsCode:"",templateId:"",status:void 0},a=d([]),v=d({...p}),f=d(!1),V=d(!1),T=d(""),U=d(""),{fetchData:S,data:C,pagination:b,dataLoading:$}=Ne(Se,v.value,()=>{a.value=[]}),k=d([]),x=d([]);he("categoryOptions",k);async function L(){const m=await de("sms"),o=await de("yes_no");k.value=ie(m),x.value=ie(o)}Ie(()=>{L(),S()});const u=({row:m},o)=>{T.value=m.id,U.value=o,V.value=!0},l=({row:m})=>{O.value=m.id,B.value="one",f.value=!0},w=z(()=>{S()},300),h=m=>{a.value=m},I=m=>{b.value={...b.value,current:m.current||1,pageSize:m.pageSize},w()},N=z(async m=>{try{await qe(m),f.value=!1,P.success("删除成功"),E(),w()}catch{f.value=!1}},300),Z=()=>{a.value.length&&(B.value="check",f.value=!0)},O=d(-1),B=d(),E=()=>{O.value=-1,B.value=""},ee=()=>{B.value==="check"&&N(a.value),B.value==="one"&&N([`${O.value}`])},r=()=>{E()},te=d(!1),ne=d(""),pe=z(({row:m})=>{ne.value=m.smsCode,te.value=!0},300),ve=z(({row:m})=>{const o=Te.confirm({header:"提示",theme:"info",body:"是否确定启用这条配置?",onConfirm:z(()=>{Me(m.id).then(()=>{P.success("启用成功"),o.destroy(),w()})},300)})},300);return(m,o)=>{const ue=n("t-select"),G=n("t-form-item"),M=n("t-col"),re=n("t-input"),ae=n("t-row"),J=n("t-button"),fe=n("t-form"),be=n("t-table"),ge=n("t-dialog"),F=we("auth");return _(),j("div",{class:ce(i(q))},[e(fe,{ref:"form",data:v.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:i(w),onSubmit:i(w)},{default:t(()=>[e(ae,null,{default:t(()=>[e(M,{span:10},{default:t(()=>[e(ae,{gutter:[16,24]},{default:t(()=>[e(M,{span:4},{default:t(()=>[e(G,{label:"分类",name:"category"},{default:t(()=>[e(ue,{modelValue:v.value.category,"onUpdate:modelValue":o[0]||(o[0]=s=>v.value.category=s),options:k.value,keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择分类"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(M,{span:4},{default:t(()=>[e(G,{label:"资源编号",name:"smsCode"},{default:t(()=>[e(re,{modelValue:v.value.smsCode,"onUpdate:modelValue":o[1]||(o[1]=s=>v.value.smsCode=s),clearable:"",placeholder:"请输入资源编号"},null,8,["modelValue"])]),_:1})]),_:1}),e(M,{span:4},{default:t(()=>[e(G,{label:"模版ID",name:"templateId"},{default:t(()=>[e(re,{modelValue:v.value.templateId,"onUpdate:modelValue":o[2]||(o[2]=s=>v.value.templateId=s),clearable:"",placeholder:"请输入模版ID"},null,8,["modelValue"])]),_:1})]),_:1}),e(M,{span:4},{default:t(()=>[e(G,{label:"是否启用",name:"status"},{default:t(()=>[e(ue,{modelValue:v.value.status,"onUpdate:modelValue":o[3]||(o[3]=s=>v.value.status=s),options:x.value,keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择是否启用"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}),e(M,{span:2,class:"operation-wrapper"},{default:t(()=>[e(J,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[g(" 查询 ")]),_:1}),e(J,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[g(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),De("div",Oe,[e(be,{data:i(C),columns:i(Le),hover:!0,loading:i($),pagination:i(b),"selected-row-keys":a.value,"header-affixed-top":{offsetTop:i(K),container:i(y)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:I,onSelectChange:h},{"top-content":t(()=>[e(ae,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(M,{flex:"0 0 auto"},{default:t(()=>[A((_(),R(J,{onClick:o[4]||(o[4]=s=>u({row:{}},"add"))},{default:t(()=>[g("新增")]),_:1})),[[F,"sms_add"]]),A((_(),R(J,{theme:"danger",onClick:Z},{default:t(()=>[g("删除")]),_:1})),[[F,"sms_delete"]])]),_:1})]),_:1})]),category:t(({row:s})=>[g(me(i(Ke)(k.value,s.category)),1)]),op:t(s=>[A((_(),j("a",{class:"t-button-link",onClick:X=>u(s,"view")},[g("查看")],8,Fe)),[[F,"sms_view"]]),A((_(),j("a",{class:"t-button-link",onClick:X=>u(s,"edit")},[g("编辑")],8,ze)),[[F,"sms_edit"]]),A((_(),j("a",{class:"t-button-link",onClick:X=>l(s)},[g("删除")],8,Pe)),[[F,"sms_delete"]]),i(Q)(["administrator","admin"])?(_(),j("a",{key:0,class:"t-button-link",onClick:X=>i(pe)(s)},"调试",8,He)):oe("",!0),A((_(),j("a",{class:"t-button-link",onClick:X=>i(ve)(s)},[g("启用")],8,Qe)),[[F,"sms_enable"]])]),_:1},8,["data","columns","loading","pagination","selected-row-keys","header-affixed-top"]),e(ge,{visible:f.value,"onUpdate:visible":o[5]||(o[5]=s=>f.value=s),header:"确认删除当前所选数据？","on-cancel":r,onConfirm:ee},null,8,["visible"]),e(Re,{visible:V.value,"onUpdate:visible":o[6]||(o[6]=s=>V.value=s),editId:T.value,"onUpdate:editId":o[7]||(o[7]=s=>T.value=s),actionType:U.value,"onUpdate:actionType":o[8]||(o[8]=s=>U.value=s),onSubmit:i(w)},null,8,["visible","editId","actionType","onSubmit"]),e(Ae,{visible:te.value,"onUpdate:visible":o[9]||(o[9]=s=>te.value=s),code:ne.value},null,8,["visible","code"])])],2)}}});export{Ye as default};