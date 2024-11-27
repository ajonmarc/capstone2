import{bO as p,R as w,S as m,J as f,$ as t,u as r,bP as g,L as a,X as n,bQ as b,M as h,ai as x}from"./vue-x-iQoTBr.js";import{G as y}from"./GuestLayout-CL0iaAg_.js";import{_ as d}from"./InputError-BQ3Bnwbl.js";import{_ as l}from"./InputLabel-D4xgWYDU.js";import{P as k}from"./PrimaryButton-CB7hfhhm.js";import{_ as i}from"./TextInput-A6yfUw-H.js";import{S as V}from"./vendor-DaxBAlbS.js";import"./axios-B573XCF3.js";import"./ApplicationLogo-w-b1xY1C.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _={class:"mt-4"},v={class:"mt-4"},R={class:"mt-4"},q={class:"mt-4"},E={class:"mt-4"},P={class:"flex items-center justify-end mt-4"},O={__name:"Register",setup(S){const e=p({name:"",email:"",role:"patient",phone:"",address:"",password:"",password_confirmation:""}),u=()=>{e.post(route("register"),{onSuccess:()=>{V.fire({title:"Successfully Registered!",text:"You have been successfully created your account.",icon:"success",confirmButtonText:"OK"})},onFinish:()=>e.reset("password","password_confirmation")})};return(c,s)=>(f(),w(y,null,{default:m(()=>[t(r(g),{title:"Register"}),a("form",{onSubmit:x(u,["prevent"])},[s[8]||(s[8]=a("h1",{class:"text-4xl font-bold text-yellow-500 text-center mb-6 dark:text-yellow-400"}," Register ",-1)),a("div",null,[t(l,{for:"name",value:"Name",class:"text-gray-700 dark:text-gray-300"}),t(i,{id:"name",type:"text",class:"mt-1 block w-full bg-white-100 dark:bg-white-900 text-white-700 dark:text-white-300 border border-white-300 dark:border-white-600 focus:border-red-500 focus:ring-red-500",modelValue:r(e).name,"onUpdate:modelValue":s[0]||(s[0]=o=>r(e).name=o),required:"",autofocus:"",autocomplete:"name",placeholder:"Enter your name..."},null,8,["modelValue"]),t(d,{class:"mt-2",message:r(e).errors.name},null,8,["message"])]),a("div",_,[t(l,{for:"phone",value:"Phone",class:"text-gray-700 dark:text-gray-300"}),t(i,{id:"phone",type:"text",class:"mt-1 block w-full bg-white-100 dark:bg-white-900 text-white-700 dark:text-white-300 border border-white-300 dark:border-white-600 focus:border-red-500 focus:ring-red-500",modelValue:r(e).phone,"onUpdate:modelValue":s[1]||(s[1]=o=>r(e).phone=o),required:"",autocomplete:"phone",placeholder:"Enter your contact#..."},null,8,["modelValue"]),t(d,{class:"mt-2",message:r(e).errors.phone},null,8,["message"])]),a("div",v,[t(l,{for:"address",value:"Address",class:"text-gray-700 dark:text-gray-300"}),t(i,{id:"address",type:"text",class:"mt-1 block w-full bg-white-100 dark:bg-white-900 text-white-700 dark:text-white-300 border border-white-300 dark:border-white-600 focus:border-red-500 focus:ring-red-500",modelValue:r(e).address,"onUpdate:modelValue":s[2]||(s[2]=o=>r(e).address=o),required:"",autocomplete:"address",placeholder:"Enter your address..."},null,8,["modelValue"]),t(d,{class:"mt-2",message:r(e).errors.address},null,8,["message"])]),a("div",R,[t(l,{for:"email",value:"Email",class:"text-gray-700 dark:text-gray-300"}),t(i,{id:"email",type:"email",class:"mt-1 block w-full bg-white-100 dark:bg-white-900 text-white-700 dark:text-white-300 border border-white-300 dark:border-white-600 focus:border-red-500 focus:ring-red-500",modelValue:r(e).email,"onUpdate:modelValue":s[3]||(s[3]=o=>r(e).email=o),required:"",autocomplete:"username",placeholder:"Enter your email..."},null,8,["modelValue"]),t(d,{class:"mt-2",message:r(e).errors.email},null,8,["message"])]),a("div",q,[t(l,{for:"password",value:"Password",class:"text-gray-700 dark:text-gray-300"}),t(i,{id:"password",type:"password",class:"mt-1 block w-full bg-white-100 dark:bg-white-900 text-white-700 dark:text-white-300 border border-white-300 dark:border-white-600 focus:border-red-500 focus:ring-red-500",modelValue:r(e).password,"onUpdate:modelValue":s[4]||(s[4]=o=>r(e).password=o),required:"",autocomplete:"new-password",placeholder:"Enter your password..."},null,8,["modelValue"]),t(d,{class:"mt-2",message:r(e).errors.password},null,8,["message"])]),a("div",E,[t(l,{for:"password_confirmation",value:"Confirm Password",class:"text-gray-700 dark:text-gray-300"}),t(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full bg-white-100 dark:bg-white-900 text-white-700 dark:text-white-300 border border-white-300 dark:border-white-600 focus:border-red-500 focus:ring-red-500",modelValue:r(e).password_confirmation,"onUpdate:modelValue":s[5]||(s[5]=o=>r(e).password_confirmation=o),required:"",autocomplete:"new-password",placeholder:"Repeat password..."},null,8,["modelValue"]),t(d,{class:"mt-2",message:r(e).errors.password_confirmation},null,8,["message"])]),a("div",P,[t(r(b),{href:c.route("login"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"},{default:m(()=>s[6]||(s[6]=[n(" Already registered? ")])),_:1},8,["href"]),t(k,{class:h(["ms-4 bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",{"opacity-25":r(e).processing}]),disabled:r(e).processing},{default:m(()=>s[7]||(s[7]=[n(" Register ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{O as default};
