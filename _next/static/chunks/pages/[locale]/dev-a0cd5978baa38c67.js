(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{6156:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/dev",function(){return n(2997)}])},7433:function(e,s,n){"use strict";n.d(s,{Z:function(){return x}});var l=n(5893),t=n(7294),i=n(5558),a=n(5472),c=n.n(a),r=n(381),d=n.n(r),o=n(1163),m=n(2815);function x(e){let{project:s,type:n="trad",className:a="",first:r=!1,...x}=e,[p,h]=(0,t.useState)(!1),[u,j]=(0,t.useState)(),[b,g]=(0,t.useState)(),f=c()(s.history,[e=>d()(e.date,"DD/MM/YYYY").toDate()],["desc"]),{t:N}=(0,i.$G)(["common","translation","development"]),{asPath:v}=(0,o.useRouter)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"card "+(r?"lg:card-side bg-base-200 ":"lg:card-side card-bordered border-2 border-base-200 ")+a,...x,children:(0,l.jsxs)("div",{className:"card-body flex flex-col justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex gap-2 mb-2",children:[s.nsfw&&(0,l.jsxs)("div",{className:"badge badge-error gap-1",children:[(0,l.jsx)("i",{className:"fa-solid pt-px fa-hexagon-exclamation"})," ",N("nsfw")]}),("string"==typeof s.genre?[s.genre]:s.genre).map(e=>(0,l.jsx)("div",{className:"badge badge-outline",children:e},e))]}),(0,l.jsx)("h2",{className:"card-title flex font-mono my-2 "+(r?"gap-4":"justify-between"),children:s.title}),s.description&&(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:r?s.description:s.description.replace(/^(.{95}[^\s]*).*/,"$1 ...")}})]}),(0,l.jsxs)("div",{className:"card-actions mt-2",children:[(0,l.jsx)("button",{onClick:()=>{h(!0),j(s.title.replaceAll(" ","-").toLowerCase()+"-1")},className:"btn btn-square btn-sm",children:(0,l.jsx)("i",{className:"fa-solid fa-fw fa-question"})}),s.links.map((e,n)=>(0,l.jsx)(m.Z,{className:"btn btn-sm "+(0===n?"btn-primary":"hidden"),href:s.links[n].url,target:"_blank",children:s.links[n].name},n))]})]})}),b&&(0,l.jsx)("button",{onClick:()=>g(null),className:"fixed z-[99999] left-0 top-0 w-screen h-screen bg-black grid place-content-center",children:(0,l.jsx)("img",{src:"/images/"+n+"/"+b+".jpg",className:"object-contain max-h-screen max-w-screen"})}),(0,l.jsx)("div",{className:(p?"opacity-100 visible pointer-events-auto":"")+" modal modal-bottom sm:modal-middle",children:(0,l.jsxs)("div",{className:"modal-box max-h-screen translate-y-0",children:[(null==s?void 0:s.images)&&(null==s?void 0:s.images)>0&&(0,l.jsxs)("div",{className:"mb-2",children:[(0,l.jsx)("div",{className:"carousel w-full",children:(0,l.jsx)("button",{onClick:()=>g(u),className:"group carousel-item w-full",children:(0,l.jsx)("img",{src:"/images/"+n+"/"+u+".jpg",className:"w-full"})})}),s.images>1&&(0,l.jsx)("div",{className:"flex justify-center w-full py-2 gap-2",children:(()=>{let e=[];for(let n=1;n<=s.images;n++){let t=s.title.replaceAll(" ","-").toLowerCase()+"-"+n;e.push((0,l.jsx)("button",{disabled:t===u,onClick:()=>j(t),className:"btn btn-xs",children:n},t+"-btn"))}return e})()})]}),(0,l.jsx)("h3",{className:"font-bold font-mono text-xl mb-4",children:s.title}),s.description&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"underline font-semibold",children:N("description")+N("colon")}),(0,l.jsx)("p",{className:"mb-4",dangerouslySetInnerHTML:{__html:s.description}})]}),(null==s?void 0:s.workdescription)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"underline font-semibold",children:("trad"===n?N("translation:workdescription"):N("development:workdescription"))+N("colon")}),(0,l.jsx)("p",{className:"mb-4",dangerouslySetInnerHTML:{__html:s.workdescription}})]}),0!==f.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"underline font-semibold",children:N("history")+N("colon")}),f.some(e=>e.description)?(0,l.jsx)("ul",{className:"pt-1",children:f.map((e,s)=>e.description&&(0,l.jsx)("li",{dangerouslySetInnerHTML:{__html:e.date+N("colon")+e.description}},s))}):(0,l.jsx)("p",{children:N("development:startedOn")+N("colon")+f.slice(-1)[0].date})]}),(0,l.jsx)("div",{className:"card-actions mt-5",children:s.links.map((e,n)=>(0,l.jsx)(m.Z,{className:"btn btn-sm "+(0===n?"btn-primary":"btn-glass"),href:s.links[n].url,target:"_blank",children:s.links[n].name},n))}),(0,l.jsx)("div",{className:"modal-action",children:(0,l.jsx)("button",{onClick:()=>{h(!1),j(s.title.replaceAll(" ","-").toLowerCase()+"-1")},className:"btn btn-sm",children:N("close")})})]})})]})}},2997:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return p},default:function(){return h}});var l=n(5893),t=n(9008),i=n.n(t),a=n(5558),c=n(5472),r=n.n(c),d=n(381),o=n.n(d);n(2815);var m=n(7433);let x=["common","development"];var p=!0;function h(){let{t:e}=(0,a.$G)(x),s=r()(e("development:projects"),[e=>o()(r()(e.history,[e=>o()(e.date,"DD/MM/YYYY").toDate()],["desc"])[0].date,"DD/MM/YYYY").toDate()],["desc"]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i(),{children:(0,l.jsx)("title",{children:"".concat(e("sitename")," – ").concat(e("development:title"))})}),(0,l.jsxs)("main",{className:"flex flex-col mx-5 md:mx-10 my-5 md:my-10",children:[(0,l.jsxs)("div",{className:"grid p-4 card bg-base-300 rounded-box",children:[(0,l.jsx)("p",{className:"text-4xl underline underline-offset-4 mb-2",children:e("development:title")}),(0,l.jsx)("p",{className:"text-lg mb-3",children:e("development:description")}),(0,l.jsx)("u",{children:e("development:skills")}),(0,l.jsx)("ul",{className:"list-['–\\0020'] list-inside",children:e("development:skillset").map(s=>(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-mono",children:s.skill}),e("colon"),s.explanation?(0,l.jsx)("abbr",{"data-tip":s.explanation,className:"tooltip underline decoration-dashed",children:s.description}):(0,l.jsx)("span",{children:s.description})]},s.skill))}),(0,l.jsx)("i",{className:"italic text-sm pt-1",children:e("development:notonly")})]}),(0,l.jsx)("div",{className:"divider my-8"}),s.length>0?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.Z,{project:s[0],first:!0,type:"dev",className:"mb-5"}),(null==s?void 0:s.length)>1&&(0,l.jsx)("div",{className:"grid rounded-box grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5",children:s.slice(1).map((e,s)=>(0,l.jsx)(m.Z,{project:e,type:"dev"},s))})]}):(0,l.jsx)("p",{children:e("empty")})]})]})}}},function(e){e.O(0,[885,338,774,888,179],function(){return e(e.s=6156)}),_N_E=e.O()}]);