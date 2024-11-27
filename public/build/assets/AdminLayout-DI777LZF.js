import{A as p}from"./ApplicationLogo-w-b1xY1C.js";import{a as f,_ as h}from"./DropdownLink-DGhkVnCP.js";import{r as b,aL as w,J as v,K as c,L as e,$ as t,S as l,u as a,bQ as d,M as n,X as o,F as m,Y as x,bS as y}from"./vue-x-iQoTBr.js";const k={class:"flex h-screen overflow-hidden bg-blue-100"},S={class:"flex items-center justify-between mb-5"},C={class:"space-y-2 font-medium"},L={class:"flex-1 flex flex-col overflow-hidden"},$={class:"bg-white shadow"},M={class:"max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8"},A={class:"flex justify-between items-center"},B={class:"flex-grow"},j={class:"inline-flex rounded-md"},D={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},N={class:"flex-1 overflow-y-auto p-6 bg-gray-100"},H={__name:"AdminLayout",setup(V){const i=b(!1);return(r,s)=>{const u=w("font-awesome-icon");return v(),c("div",k,[e("aside",{class:n([{"-translate-x-full":!i.value,"translate-x-0":i.value},"transform top-0 left-0 w-64 bg-blue border-r border-blue-100 p-4 fixed h-full transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 overflow-y-auto bg-blue-100 dark:bg-blue-800 z-50"])},[e("div",S,[t(a(d),{href:r.route("admin.dashboard"),class:"flex items-center ps-2.5"},{default:l(()=>[t(p),s[2]||(s[2]=e("span",{class:"self-center text-xl font-semibold whitespace-nowrap dark:text-white"},"S.H.S.I",-1))]),_:1},8,["href"]),e("button",{onClick:s[0]||(s[0]=g=>i.value=!1),class:"text-gray-500 hover:text-red-500 sm:hidden"},s[3]||(s[3]=[e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),e("ul",C,[e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.dashboard")})},[t(a(d),{href:r.route("admin.dashboard"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[4]||(s[4]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-gauge me-2"}),o(" Dashboard ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.schedule")})},[t(a(d),{href:r.route("admin.schedule"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[5]||(s[5]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-clock me-2"}),o(" Schedules ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.appointment")})},[t(a(d),{href:r.route("admin.appointment"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[6]||(s[6]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-calendar-alt me-2"}),o(" Appointments ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.users")})},[t(a(d),{href:r.route("admin.users"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[7]||(s[7]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-user me-2"}),o(" Users ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.rooms")})},[t(a(d),{href:r.route("admin.rooms"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[8]||(s[8]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-bed me-2"}),o(" Rooms ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.departments")})},[t(a(d),{href:r.route("admin.departments"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[9]||(s[9]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-building me-2"}),o(" Departments ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.specialtys")})},[t(a(d),{href:r.route("admin.specialtys"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[10]||(s[10]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-heartbeat me-2"}),o(" Specialty ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.doctors")})},[t(a(d),{href:r.route("admin.doctors"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[11]||(s[11]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-user-md me-2"}),o(" Doctors ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.services")})},[t(a(d),{href:r.route("admin.services"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[12]||(s[12]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-concierge-bell me-2"}),o(" Services ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.research_labs")})},[t(a(d),{href:r.route("admin.research_labs"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[13]||(s[13]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-flask me-2"}),o(" Research Labs ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.awards")})},[t(a(d),{href:r.route("admin.awards"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[14]||(s[14]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-trophy me-2"}),o(" Awards ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.testimonials")})},[t(a(d),{href:r.route("admin.testimonials"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[15]||(s[15]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-star me-2"}),o(" Testimonials ")],-1)])),_:1},8,["href"])],2),e("li",{class:n({"bg-yellow-300 rounded-lg":r.route().current("admin.settings")})},[t(a(d),{href:r.route("admin.settings"),class:"flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-red-700 group"},{default:l(()=>s[16]||(s[16]=[e("span",{class:"ms-3"},[e("i",{class:"fas fa-cog me-2"}),o(" Settings ")],-1)])),_:1},8,["href"])],2)])],2),e("div",L,[e("header",$,[e("div",M,[e("div",A,[e("button",{onClick:s[1]||(s[1]=g=>i.value=!i.value),class:"text-gray-500 hover:text-gray-900 sm:hidden"},s[17]||(s[17]=[e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])),e("div",B,[m(r.$slots,"header")]),t(h,{align:"right",width:"48"},{trigger:l(()=>[e("span",j,[e("button",D,[o(x(r.$page.props.auth.user.name)+" ",1),s[18]||(s[18]=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:l(()=>[t(f,{href:r.route("admin.profile")},{default:l(()=>[t(u,{icon:["fas","user"],class:"me-2"}),s[19]||(s[19]=o("Profile"))]),_:1},8,["href"]),t(f,{href:r.route("logout"),method:"post",as:"button"},{default:l(()=>[t(u,{icon:["fas","right-from-bracket"],class:"me-2"}),s[20]||(s[20]=o("Log Out"))]),_:1},8,["href"])]),_:1})])])]),e("main",N,[m(r.$slots,"default")]),s[21]||(s[21]=y('<footer class="bg-white shadow-inner py-4"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center text-gray-500 text-sm"><p>© 2024 Surigao Health. All rights reserved.</p><p><a href="#" class="text-blue-500 hover:underline">Privacy Policy</a> | <a href="#" class="text-blue-500 hover:underline">Terms of Service</a></p></div></div></footer>',1))])])}}};export{H as _};
