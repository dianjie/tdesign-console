import{d as b}from"./dayjs.min-70acf2cf.js";import{d as S,f as d,S as q,l as B,V as N,ai as A,an as M,r as s,o as L,c as P,a as e,w as t,b as m,q as j,s as z,e as F,M as g}from"./index-357a89bc.js";import{l as O}from"./leave-cfe8b6c7.js";import{u as E}from"./useDesign-16212514.js";import{u as v}from"./index-1d3f8cec.js";const G=F("p",{class:"form__title"},"发起请假",-1),Y=S({__name:"form",setup(H){const{tableVar:V}=E(),h={taskUser:"",startTime:"",endTime:"",reason:""},T=d({taskUser:[{required:!0,message:"请选择审批人员",type:"error",trigger:"change"}],startTime:[{required:!0,message:"请选择开始时间",type:"error",trigger:"change"}],endTime:[{required:!0,message:"请选择结束时间",type:"error",trigger:"change"}],reason:[{required:!0,message:"请输入请假理由",type:"error",trigger:"blur"}]}),o=d({...h}),p=d([]),i=d(!1),c=q(),k=B(),f=N(),{tabRouters:y}=f;A(()=>{M().then(l=>{p.value=l})});const w=v(()=>{const l=y.findIndex(a=>a.path===c.path);f.subtractCurrentTabRouter({path:c.path,routeIdx:l}),k.replace({path:"/work/start"})},300),U=v(({firstError:l})=>{if(l)g.warning(l);else{i.value=!0;const a={processDefinitionId:c.params.processDefinitionId,...o.value};O(a).then(()=>{g.success("提交成功"),w()}).finally(()=>{i.value=!1})}},300);return(l,a)=>{const x=s("t-select"),n=s("t-form-item"),u=s("t-col"),_=s("t-date-picker"),D=s("t-textarea"),I=s("t-button"),C=s("t-row"),R=s("t-form");return L(),P("div",{class:z(m(V))},[G,e(R,{ref:"form",data:o.value,"label-width":80,disabled:i.value,rules:T.value,onSubmit:m(U)},{default:t(()=>[e(C,{gutter:[0,28]},{default:t(()=>[e(u,{span:12},{default:t(()=>[e(n,{label:"审批人员",name:"taskUser"},{default:t(()=>[e(x,{modelValue:o.value.taskUser,"onUpdate:modelValue":a[0]||(a[0]=r=>o.value.taskUser=r),options:p.value,keys:{value:"id",label:"account"},clearable:"",placeholder:"请选择审批人员"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(u,{span:12},{default:t(()=>[e(n,{label:"开始时间",name:"startTime"},{default:t(()=>[e(_,{modelValue:o.value.startTime,"onUpdate:modelValue":a[1]||(a[1]=r=>o.value.startTime=r),"disable-date":{before:m(b)().subtract(1,"day").format()},"enable-time-picker":"","allow-input":"",clearable:"",placeholder:"请选择开始时间",style:{width:"100%"}},null,8,["modelValue","disable-date"])]),_:1})]),_:1}),e(u,{span:12},{default:t(()=>[e(n,{label:"结束时间",name:"endTime"},{default:t(()=>[e(_,{modelValue:o.value.endTime,"onUpdate:modelValue":a[2]||(a[2]=r=>o.value.endTime=r),"disable-date":{before:m(b)().subtract(1,"day").format()},"enable-time-picker":"","allow-input":"",clearable:"",placeholder:"请选择结束时间",style:{width:"100%"}},null,8,["modelValue","disable-date"])]),_:1})]),_:1}),e(u,{span:12},{default:t(()=>[e(n,{label:"请假理由",name:"reason"},{default:t(()=>[e(D,{modelValue:o.value.reason,"onUpdate:modelValue":a[3]||(a[3]=r=>o.value.reason=r),placeholder:"请输入请假理由"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:12},{default:t(()=>[e(n,null,{default:t(()=>[e(I,{theme:"primary",type:"submit"},{default:t(()=>[j("提交")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data","disabled","rules","onSubmit"])],2)}}});export{Y as default};
