import{bO as l,R as n,J as d,S as t,$ as a,u as r,bP as p,L as e,X as u,M as f,ai as c}from"./vue-x-iQoTBr.js";import{G as w}from"./GuestLayout-CL0iaAg_.js";import{_}from"./InputError-BQ3Bnwbl.js";import{_ as b}from"./InputLabel-D4xgWYDU.js";import{P as x}from"./PrimaryButton-CB7hfhhm.js";import{_ as y}from"./TextInput-A6yfUw-H.js";import"./vendor-DaxBAlbS.js";import"./axios-B573XCF3.js";import"./ApplicationLogo-w-b1xY1C.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const P={class:"flex justify-end mt-4"},S={__name:"ConfirmPassword",setup(g){const s=l({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(V,o)=>(d(),n(w,null,{default:t(()=>[a(r(p),{title:"Confirm Password"}),o[2]||(o[2]=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),e("form",{onSubmit:c(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(y,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:r(s).password,"onUpdate:modelValue":o[0]||(o[0]=m=>r(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(_,{class:"mt-2",message:r(s).errors.password},null,8,["message"])]),e("div",P,[a(x,{class:f(["ms-4",{"opacity-25":r(s).processing}]),disabled:r(s).processing},{default:t(()=>o[1]||(o[1]=[u(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{S as default};
