import{an as B,d as Z,f as i,J as X,a2 as G,Q,r,o as D,m as P,w as t,a as e,s as ee,b as m,W as j,q as g,X as se,M as E,i as ue,as as de,c as A,e as ie}from"./index-CqGaQ7t4.js";import{u as me}from"./useSetting-CnYQd1RY.js";import{u as ce}from"./useDesign-CbWcZHFZ.js";import{u as pe}from"./useRequset-Bj5fiv5N.js";import{u as Y}from"./index-BidCcHov.js";const ve=(c,U,x)=>B.get({url:"/blade-develop/datasource/list",params:{...x,current:c,size:U}},{joinTime:!1}),fe=c=>B.get({url:"/blade-develop/datasource/detail",params:{id:c}}),be=c=>B.post({url:"/blade-develop/datasource/remove",params:{ids:c}},{joinParamsToUrl:!0,errorMessageMode:"message"}),_e=c=>B.post({url:"/blade-develop/datasource/submit",data:c},{errorMessageMode:"message"}),ge=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{colKey:"serial-number",title:"序号",width:80,align:"center",fixed:"left"},{title:"名称",colKey:"name"},{title:"驱动类",colKey:"driverClass"},{title:"用户名",colKey:"username"},{title:"连接地址",colKey:"url"},{fixed:"right",width:180,colKey:"op",title:"操作",align:"center"}],te=[{dictKey:"com.mysql.cj.jdbc.Driver",dictValue:"com.mysql.cj.jdbc.Driver"},{dictKey:"org.postgresql.Driver",dictValue:"org.postgresql.Driver"},{dictKey:"oracle.jdbc.OracleDriver",dictValue:"oracle.jdbc.OracleDriver"},{dictKey:"com.microsoft.sqlserver.jdbc.SQLServerDriver",dictValue:"com.microsoft.sqlserver.jdbc.SQLServerDriver"},{dictKey:"dm.jdbc.driver.DmDriver",dictValue:"dm.jdbc.driver.DmDriver"}],ye=Z({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},editId:{type:String,default:""},actionType:{type:String,default:""}},emits:["update:visible","update:editId","update:actionType","submit"],setup(c,{emit:U}){const x={name:"",driverClass:"",username:"",password:"",url:"",remark:""},y=c,$=i({name:[{required:!0,message:"请输入名称",type:"error",trigger:"blur"}],driverClass:[{required:!0,message:"请选择驱动类",type:"error",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",type:"error",trigger:"blur"}],password:[{required:!0,message:"请输入密码",type:"error",trigger:"blur"}],url:[{required:!0,message:"请输入连接地址",type:"error",trigger:"blur"}]}),V=X(()=>`${{view:"查看",edit:"编辑",add:"新增"}[y.actionType]||""}数据源`),p=X(()=>({view:!0,edit:!1})[y.actionType]||!1),d=i(!1),o=i({...x}),T=i(null),C=i(!1),w=U,N=({firstError:u})=>{if(u)E.warning(u);else{C.value=!0;const l={...o.value,id:y.editId};_e(l).then(()=>{w("submit",l),E.success("提交成功"),d.value=!1}).finally(()=>{C.value=!1})}},I=()=>{o.value={...x},Q(()=>{w("update:editId",""),w("update:actionType","")})},F=()=>{d.value=!1};return G(()=>d.value,u=>{w("update:visible",u)}),G(()=>y.visible,u=>{u&&y.editId&&Q(()=>{fe(y.editId).then(l=>{o.value={...l}})}),Q(()=>{var l;(l=T.value)==null||l.clearValidate()}),d.value=u}),(u,l)=>{const f=r("t-input"),b=r("t-form-item"),_=r("t-col"),H=r("t-select"),K=r("t-textarea"),L=r("t-button"),q=r("t-row"),k=r("t-form"),R=r("t-dialog");return D(),P(R,{visible:d.value,"onUpdate:visible":l[6]||(l[6]=s=>d.value=s),header:V.value,width:780,footer:!1,onClosed:I},{body:t(()=>[e(k,{ref_key:"form",ref:T,class:ee({"xy-form__detail":c.actionType==="view"}),data:o.value,rules:$.value,"label-width":100,disabled:p.value||C.value,onSubmit:N},{default:t(()=>[e(q,{gutter:[0,28]},{default:t(()=>[e(_,{span:6},{default:t(()=>[e(b,{label:"名称",name:"name"},{default:t(()=>[e(f,{modelValue:o.value.name,"onUpdate:modelValue":l[0]||(l[0]=s=>o.value.name=s),clearable:"",placeholder:"请输入名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:6},{default:t(()=>[e(b,{label:"驱动类",name:"driverClass"},{default:t(()=>[e(H,{modelValue:o.value.driverClass,"onUpdate:modelValue":l[1]||(l[1]=s=>o.value.driverClass=s),options:m(te),keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择驱动类"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(_,{span:6},{default:t(()=>[e(b,{label:"用户名",name:"username"},{default:t(()=>[e(f,{modelValue:o.value.username,"onUpdate:modelValue":l[2]||(l[2]=s=>o.value.username=s),clearable:"",placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:6},{default:t(()=>[e(b,{label:"密码",name:"password"},{default:t(()=>[e(f,{modelValue:o.value.password,"onUpdate:modelValue":l[3]||(l[3]=s=>o.value.password=s),clearable:"",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:t(()=>[e(b,{label:"连接地址",name:"url"},{default:t(()=>[e(K,{modelValue:o.value.url,"onUpdate:modelValue":l[4]||(l[4]=s=>o.value.url=s),placeholder:"请输入连接地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:t(()=>[e(b,{label:"备注",name:"remark"},{default:t(()=>[e(K,{modelValue:o.value.remark,"onUpdate:modelValue":l[5]||(l[5]=s=>o.value.remark=s),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),j(e(_,{span:12},{default:t(()=>[e(b,{style:{float:"right"}},{default:t(()=>[e(L,{variant:"outline",onClick:F},{default:t(()=>l[7]||(l[7]=[g("取消")])),_:1}),e(L,{theme:"primary",type:"submit"},{default:t(()=>l[8]||(l[8]=[g("确定")])),_:1})]),_:1})]),_:1},512),[[se,!p.value]])]),_:1})]),_:1},8,["class","data","rules","disabled"])]),_:1},8,["visible","header"])}}}),Ve={class:"table-wrapper"},Ce=["onClick"],we=["onClick"],ke=["onClick"],Ue=Z({__name:"datasource",setup(c){const{tableVar:U}=ce(),{getTableHeaderAffixedTop:x,getLayoutContainer:y}=me(),$={name:"",driverClass:"",username:""},V=i([]),p=i({...$}),d=i(!1),o=i(!1),T=i(""),C=i(""),{fetchData:w,data:N,pagination:I,dataLoading:F}=pe(ve,p.value,()=>{V.value=[]});ue(()=>{w()});const u=({row:v},a)=>{T.value=v.id,C.value=a,o.value=!0},l=({row:v})=>{q.value=v.id,k.value="one",d.value=!0},f=Y(()=>{w()},300),b=v=>{V.value=v},_=v=>{I.value={...I.value,current:v.current||1,pageSize:v.pageSize},f()},K=Y(async v=>{try{await be(v),d.value=!1,E.success("删除成功"),R(),f()}catch{d.value=!1}},300),L=()=>{V.value.length&&(k.value="check",d.value=!0)},q=i(-1),k=i(),R=()=>{q.value=-1,k.value=""},s=()=>{k.value==="check"&&K(V.value),k.value==="one"&&K([`${q.value}`])},ae=()=>{R()};return(v,a)=>{const J=r("t-input"),z=r("t-form-item"),S=r("t-col"),le=r("t-select"),O=r("t-row"),M=r("t-button"),oe=r("t-form"),ne=r("t-table"),re=r("t-dialog"),h=de("auth");return D(),A("div",{class:ee(m(U))},[e(oe,{ref:"form",data:p.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:m(f),onSubmit:m(f)},{default:t(()=>[e(O,null,{default:t(()=>[e(S,{span:10},{default:t(()=>[e(O,{gutter:[16,24]},{default:t(()=>[e(S,{span:4},{default:t(()=>[e(z,{label:"名称",name:"name"},{default:t(()=>[e(J,{modelValue:p.value.name,"onUpdate:modelValue":a[0]||(a[0]=n=>p.value.name=n),clearable:"",placeholder:"请输入名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(S,{span:4},{default:t(()=>[e(z,{label:"驱动类",name:"driverClass"},{default:t(()=>[e(le,{modelValue:p.value.driverClass,"onUpdate:modelValue":a[1]||(a[1]=n=>p.value.driverClass=n),options:m(te),keys:{value:"dictKey",label:"dictValue"},clearable:"",placeholder:"请选择驱动类"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(S,{span:4},{default:t(()=>[e(z,{label:"用户名",name:"username"},{default:t(()=>[e(J,{modelValue:p.value.username,"onUpdate:modelValue":a[2]||(a[2]=n=>p.value.username=n),clearable:"",placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(S,{span:2,class:"operation-wrapper"},{default:t(()=>[e(M,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>a[8]||(a[8]=[g(" 查询 ")])),_:1}),e(M,{type:"reset",variant:"base",theme:"default"},{default:t(()=>a[9]||(a[9]=[g(" 重置 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"]),ie("div",Ve,[e(ne,{data:m(N),columns:m(ge),hover:!0,loading:m(F),pagination:m(I),"selected-row-keys":V.value,"header-affixed-top":{offsetTop:m(x),container:m(y)},"vertical-align":"top","row-key":"id",bordered:"",stripe:"",onPageChange:_,onSelectChange:b},{"top-content":t(()=>[e(O,{justify:"space-between",style:{"margin-bottom":"10px"}},{default:t(()=>[e(S,{flex:"0 0 auto"},{default:t(()=>[j((D(),P(M,{onClick:a[3]||(a[3]=n=>u({row:{}},"add"))},{default:t(()=>a[10]||(a[10]=[g("新增")])),_:1})),[[h,"datasource_add"]]),j((D(),P(M,{theme:"danger",onClick:L},{default:t(()=>a[11]||(a[11]=[g("删除")])),_:1})),[[h,"datasource_delete"]])]),_:1})]),_:1})]),op:t(n=>[j((D(),A("a",{class:"t-button-link",onClick:W=>u(n,"view")},a[12]||(a[12]=[g("查看")]),8,Ce)),[[h,"datasource_view"]]),j((D(),A("a",{class:"t-button-link",onClick:W=>u(n,"edit")},a[13]||(a[13]=[g("编辑")]),8,we)),[[h,"datasource_edit"]]),j((D(),A("a",{class:"t-button-link",onClick:W=>l(n)},a[14]||(a[14]=[g("删除")]),8,ke)),[[h,"datasource_delete"]])]),_:1},8,["data","columns","loading","pagination","selected-row-keys","header-affixed-top"]),e(re,{visible:d.value,"onUpdate:visible":a[4]||(a[4]=n=>d.value=n),header:"确认删除当前所选数据？","on-cancel":ae,onConfirm:s},null,8,["visible"]),e(ye,{visible:o.value,"onUpdate:visible":a[5]||(a[5]=n=>o.value=n),editId:T.value,"onUpdate:editId":a[6]||(a[6]=n=>T.value=n),actionType:C.value,"onUpdate:actionType":a[7]||(a[7]=n=>C.value=n),onSubmit:m(f)},null,8,["visible","editId","actionType","onSubmit"])])],2)}}});export{Ue as default};