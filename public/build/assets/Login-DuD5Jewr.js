import{f as k,U as y,aH as v,J as l,K as x,bO as _,R as c,S as m,$ as r,u as s,bP as V,Y as B,W as p,L as a,bQ as C,X as f,M as L,ai as P}from"./vue-x-iQoTBr.js";import{G as $}from"./GuestLayout-CL0iaAg_.js";import{_ as g}from"./InputError-BQ3Bnwbl.js";import{_ as b}from"./InputLabel-D4xgWYDU.js";import{P as U}from"./PrimaryButton-CB7hfhhm.js";import{_ as w}from"./TextInput-A6yfUw-H.js";import"./vendor-DaxBAlbS.js";import"./axios-B573XCF3.js";import"./ApplicationLogo-w-b1xY1C.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q=["value"],E={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(d,{emit:t}){const i=t,n=d,e=k({get(){return n.checked},set(o){i("update:checked",o)}});return(o,u)=>y((l(),x("input",{type:"checkbox",value:d.value,"onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,q)),[[v,e.value]])}},N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},R={class:"mt-4"},S={class:"block mt-4"},M={class:"flex items-center"},D={class:"flex items-center justify-end mt-4"},Q={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(d){const t=_({email:"",password:"",remember:!1}),i=()=>{t.post(route("login"),{onFinish:()=>t.reset("password")})};return(n,e)=>(l(),c($,null,{default:m(()=>[r(s(V),{title:"Log in"}),d.status?(l(),x("div",N,B(d.status),1)):p("",!0),e[6]||(e[6]=a("h1",{class:"text-4xl font-bold text-yellow-500 text-center mb-6 dark:text-yellow-400"}," Log in ",-1)),a("form",{onSubmit:P(i,["prevent"])},[a("div",null,[r(b,{for:"email",value:"Email",class:"text-gray-700 dark:text-gray-300"}),r(w,{id:"email",type:"email",class:"mt-1 block w-full bg-white-100 dark:bg-white-900 text-white-700 dark:text-white-300 border border-white-300 dark:border-white-600 focus:border-red-500 focus:ring-red-500",modelValue:s(t).email,"onUpdate:modelValue":e[0]||(e[0]=o=>s(t).email=o),required:"",autofocus:"",autocomplete:"username",placeholder:"Enter your email here.."},null,8,["modelValue"]),r(g,{class:"mt-2",message:s(t).errors.email},null,8,["message"])]),a("div",R,[r(b,{for:"password",value:"Password",class:"text-gray-700 dark:text-gray-300"}),r(w,{id:"password",type:"password",class:"mt-1 block w-full bg-white-100 dark:bg-white-900 text-white-700 dark:text-white-300 border border-white-300 dark:border-white-600 focus:border-red-500 focus:ring-red-500",modelValue:s(t).password,"onUpdate:modelValue":e[1]||(e[1]=o=>s(t).password=o),required:"",autocomplete:"current-password",placeholder:"Enter your password here.."},null,8,["modelValue"]),r(g,{class:"mt-2",message:s(t).errors.password},null,8,["message"])]),a("div",S,[a("label",M,[r(E,{name:"remember",checked:s(t).remember,"onUpdate:checked":e[2]||(e[2]=o=>s(t).remember=o)},null,8,["checked"]),e[3]||(e[3]=a("span",{class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1))])]),a("div",D,[d.canResetPassword?(l(),c(s(C),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"},{default:m(()=>e[4]||(e[4]=[f(" Forgot your password? ")])),_:1},8,["href"])):p("",!0),r(U,{class:L(["ms-4 bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",{"opacity-25":s(t).processing}]),disabled:s(t).processing},{default:m(()=>e[5]||(e[5]=[f(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{Q as default};
