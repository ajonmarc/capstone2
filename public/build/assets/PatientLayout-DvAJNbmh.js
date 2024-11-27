import{r as i,J as a,K as n,$ as f,u as _,bP as w,L as e,F as k,Z as c,as as h,Y as p,ai as M,U as C,aP as P,W as T}from"./vue-x-iQoTBr.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},D={class:"bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden"},L={class:"p-4 h-96 overflow-y-auto bg-gray-50"},W={key:0,class:"text-right"},H={class:"inline-block bg-blue-500 text-white rounded-lg px-3 py-2"},N={key:1},O={class:"inline-block bg-gray-200 text-gray-900 rounded-lg px-3 py-2"},R={class:"p-4 border-t flex flex-wrap gap-2"},I=["onClick"],V={class:"p-4 border-t"},B={class:"flex"},F={__name:"PatientLayout",setup($){i(!1);const u=i(!1),r=i([{type:"bot",text:"Hello! How can I assist you today? Choose an option or type your query."}]),l=i(""),y=i([{label:"Appointment Process",text:"Tell me about the appointment process"},{label:"Total Doctors",text:"How many doctors are there?"},{label:"Total Departments",text:"What departments are available?"},{label:"Operating Hours",text:"What are the operating hours?"}]);function g(){u.value=!0}function v(){u.value=!1}function m(o){r.value.push({type:"user",text:o}),setTimeout(()=>{const t=b(o);r.value.push({type:"bot",text:t})},1e3)}function x(){l.value.trim()!==""&&(r.value.push({type:"user",text:l.value}),setTimeout(()=>{const o=b(l.value);r.value.push({type:"bot",text:o})},1e3),l.value="")}function b(o){return{"tell me about the appointment process":"You can book an appointment by visiting the 'Doctors' section and selecting a date and time.","how many doctors are there?":"We currently have 42 experienced doctors in various specialties.","what departments are available?":"Our hospital includes Cardiology, Neurology, Pediatrics, Orthopedics, and many more.","what are the operating hours?":"We are open from Monday 6:00 AM - 5:00 PM Tuesday 6:00 AM - 5:00 PM Wednesday 6:00 AM - 5:00 PM Thursday 6:00 AM - 5:00 PM Friday 6:00 AM - 5:00 PM Saturday 6:00 AM - 5:00 PM Sunday CLOSED."}[o.toLowerCase()]||"I'm sorry, I didn't understand that. Can you rephrase?"}return(o,t)=>(a(),n(c,null,[f(_(w),{title:"Home"}),e("div",null,[e("main",null,[k(o.$slots,"default",{},void 0,!0)])]),e("div",null,[e("button",{onClick:g,class:"fixed bottom-4 right-4 text-white p-3 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 transition"},t[1]||(t[1]=[e("img",{src:"/chatbot.PNG",alt:"Chatbot",class:"w-12 h-12 rounded-full"},null,-1)])),u.value?(a(),n("div",S,[e("div",D,[e("div",{class:"bg-blue-600 text-white px-4 py-2 flex justify-between items-center"},[t[2]||(t[2]=e("h2",{class:"text-lg"},"Chatbot",-1)),e("button",{onClick:v,class:"text-white hover:text-gray-200"}," ✖ ")]),e("div",L,[(a(!0),n(c,null,h(r.value,(s,d)=>(a(),n("div",{key:d,class:"mb-4"},[s.type==="user"?(a(),n("div",W,[e("p",H,p(s.text),1)])):(a(),n("div",N,[e("p",O,p(s.text),1)]))]))),128))]),e("div",R,[(a(!0),n(c,null,h(y.value,(s,d)=>(a(),n("button",{key:d,onClick:j=>m(s.text),class:"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"},p(s.label),9,I))),128))]),e("div",V,[e("form",{onSubmit:M(x,["prevent"])},[e("div",B,[C(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>l.value=s),type:"text",placeholder:"Type your message...",class:"flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[P,l.value]]),t[3]||(t[3]=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"}," Send ",-1))])],32)])])])):T("",!0)])],64))}},U=A(F,[["__scopeId","data-v-cdf2020a"]]);export{U as P};