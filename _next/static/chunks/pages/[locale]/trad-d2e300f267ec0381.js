(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{1178:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/trad",function(){return n(8227)}])},7433:function(e,s,n){"use strict";n.d(s,{Z:function(){return x}});var a=n(5893),l=n(7294),t=n(5558),i=n(5472),r=n.n(i),c=n(381),d=n.n(c),o=n(1163),m=n(2815);function x(e){let{project:s,type:n="trad",className:i="",first:c=!1,...x}=e,[h,u]=(0,l.useState)(!1),[b,j]=(0,l.useState)(),[p,g]=(0,l.useState)(),N=r()(s.history,[e=>d()(e.date,"DD/MM/YYYY").toDate()],["desc"]),{t:f}=(0,t.$G)(["common","translation","development"]),{asPath:v}=(0,o.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"card "+(c?"lg:card-side bg-base-200 ":"lg:card-side card-bordered border-2 border-base-200 ")+i,...x,children:(0,a.jsxs)("div",{className:"card-body flex flex-col justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex gap-2 mb-2",children:[s.nsfw&&(0,a.jsxs)("div",{className:"badge badge-error gap-1",children:[(0,a.jsx)("i",{className:"fa-solid pt-px fa-hexagon-exclamation"})," ",f("nsfw")]}),("string"==typeof s.genre?[s.genre]:s.genre).map(e=>(0,a.jsx)("div",{className:"badge badge-outline",children:e},e))]}),(0,a.jsx)("h2",{className:"card-title flex font-mono my-2 "+(c?"gap-4":"justify-between"),children:s.title}),s.description&&(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:c?s.description:s.description.replace(/^(.{95}[^\s]*).*/,"$1 ...")}})]}),(0,a.jsxs)("div",{className:"card-actions mt-2",children:[(0,a.jsx)("button",{onClick:()=>{u(!0),j(s.title.replaceAll(" ","-").toLowerCase()+"-1")},className:"btn btn-square btn-sm",children:(0,a.jsx)("i",{className:"fa-solid fa-fw fa-question"})}),s.links.map((e,n)=>(0,a.jsx)(m.Z,{className:"btn btn-sm "+(0===n?"btn-primary":"hidden"),href:s.links[n].url,target:"_blank",children:s.links[n].name},n))]})]})}),p&&(0,a.jsx)("button",{onClick:()=>g(null),className:"fixed z-[99999] left-0 top-0 w-screen h-screen bg-black grid place-content-center",children:(0,a.jsx)("img",{src:"/images/"+n+"/"+p+".jpg",className:"object-contain max-h-screen max-w-screen"})}),(0,a.jsx)("div",{className:(h?"opacity-100 visible pointer-events-auto":"")+" modal modal-bottom sm:modal-middle",children:(0,a.jsxs)("div",{className:"modal-box max-h-screen translate-y-0",children:[(null==s?void 0:s.images)&&(null==s?void 0:s.images)>0&&(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)("div",{className:"carousel w-full",children:(0,a.jsx)("button",{onClick:()=>g(b),className:"group carousel-item w-full",children:(0,a.jsx)("img",{src:"/images/"+n+"/"+b+".jpg",className:"w-full"})})}),s.images>1&&(0,a.jsx)("div",{className:"flex justify-center w-full py-2 gap-2",children:(()=>{let e=[];for(let n=1;n<=s.images;n++){let l=s.title.replaceAll(" ","-").toLowerCase()+"-"+n;e.push((0,a.jsx)("button",{disabled:l===b,onClick:()=>j(l),className:"btn btn-xs",children:n},l+"-btn"))}return e})()})]}),(0,a.jsx)("h3",{className:"font-bold font-mono text-xl mb-4",children:s.title}),s.description&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"underline font-semibold",children:f("description")+f("colon")}),(0,a.jsx)("p",{className:"mb-4",dangerouslySetInnerHTML:{__html:s.description}})]}),(null==s?void 0:s.workdescription)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"underline font-semibold",children:("trad"===n?f("translation:workdescription"):f("development:workdescription"))+f("colon")}),(0,a.jsx)("p",{className:"mb-4",dangerouslySetInnerHTML:{__html:s.workdescription}})]}),0!==N.length&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"underline font-semibold",children:f("history")+f("colon")}),N.some(e=>e.description)?(0,a.jsx)("ul",{className:"pt-1",children:N.map((e,s)=>e.description&&(0,a.jsx)("li",{dangerouslySetInnerHTML:{__html:e.date+f("colon")+e.description}},s))}):(0,a.jsx)("p",{children:f("development:startedOn")+f("colon")+N.slice(-1)[0].date})]}),(0,a.jsx)("div",{className:"card-actions mt-5",children:s.links.map((e,n)=>(0,a.jsx)(m.Z,{className:"btn btn-sm "+(0===n?"btn-primary":"btn-glass"),href:s.links[n].url,target:"_blank",children:s.links[n].name},n))}),(0,a.jsx)("div",{className:"modal-action",children:(0,a.jsx)("button",{onClick:()=>{u(!1),j(s.title.replaceAll(" ","-").toLowerCase()+"-1")},className:"btn btn-sm",children:f("close")})})]})})]})}},8227:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return h},default:function(){return u}});var a=n(5893),l=n(9008),t=n.n(l),i=n(5558),r=n(5472),c=n.n(r),d=n(381),o=n.n(d);n(2815);var m=n(7433);let x=["common","translation"];var h=!0;function u(){let{t:e}=(0,i.$G)(x),s=c()(e("translation:projects"),[e=>o()(c()(e.history,[e=>o()(e.date,"DD/MM/YYYY").toDate()],["desc"])[0].date,"DD/MM/YYYY").toDate()],["desc"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t(),{children:(0,a.jsx)("title",{children:"".concat(e("sitename")," – ").concat(e("translation:title"))})}),(0,a.jsxs)("main",{className:"flex flex-col mx-5 md:mx-10 my-5 md:my-10",children:[(0,a.jsxs)("div",{className:"grid p-4 card bg-base-300 rounded-box",children:[(0,a.jsx)("p",{className:"text-4xl underline underline-offset-4 mb-2",children:e("translation:title")}),(0,a.jsx)("p",{className:"text-lg mb-3",children:e("translation:description")}),(0,a.jsx)("u",{children:e("translation:langlevels")}),(0,a.jsx)("ul",{className:"list-['–\\0020'] list-inside",children:e("translation:levels").map(s=>{var n;return(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"font-mono",children:s.language}),e("colon"),s.explanation?(0,a.jsx)("abbr",{"data-tip":s.explanation,className:"tooltip underline decoration-dashed",children:s.level}):(0,a.jsx)("span",{children:s.level}),s.badge&&(0,a.jsxs)("span",{className:"badge ml-1",children:[(null===(n=s.badge)||void 0===n?void 0:n.icon)&&(0,a.jsx)("i",{className:s.badge.icon+" fa-duotone pt-[1px] mr-1"}),s.badge.label]})]},s.language)})}),(0,a.jsx)("i",{className:"italic text-sm pt-1",children:e("translation:evaluation")})]}),(0,a.jsx)("div",{className:"divider my-8"}),s.length>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.Z,{project:s[0],first:!0,type:"trad",className:"mb-5"}),s.length>1&&(0,a.jsx)("div",{className:"grid rounded-box grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5",children:s.slice(1).map((e,s)=>(0,a.jsx)(m.Z,{project:e,type:"trad"},s))})]}):(0,a.jsx)("p",{children:e("empty")}),e("translation:reviews").length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"divider mb-8"}),e("translation:reviews").sort(()=>.5-Math.random()).slice(0,2).map((e,s)=>(0,a.jsxs)("div",{className:"chat mb-3 "+(1&s?"chat-start":"chat-end"),children:[(0,a.jsx)("div",{className:"max-w-4xl chat-bubble bg-base-300 text-base-content",dangerouslySetInnerHTML:{__html:e.review}}),(0,a.jsxs)("div",{className:"chat-footer",children:["— ",e.author]})]},s))]})]})]})}}},function(e){e.O(0,[885,338,774,888,179],function(){return e(e.s=1178)}),_N_E=e.O()}]);