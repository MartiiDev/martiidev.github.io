(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[313],{2339:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/admin/trad",function(){return n(1734)}])},7433:function(e,s,n){"use strict";n.d(s,{Z:function(){return x}});var l=n(5893),a=n(7294),t=n(5558),i=n(5472),r=n.n(i),c=n(381),d=n.n(c),o=n(1163),m=n(2815);function x(e){let{project:s,type:n="trad",className:i="",first:c=!1,...x}=e,[h,u]=(0,a.useState)(!1),[p,g]=(0,a.useState)(),[b,j]=(0,a.useState)(),f=r()(s.history,[e=>d()(e.date,"DD/MM/YYYY").toDate()],["desc"]),{t:N}=(0,t.$G)(["common","translation","development"]),{asPath:v}=(0,o.useRouter)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"card "+(c?"lg:card-side bg-base-200 ":"lg:card-side card-bordered border-2 border-base-200 ")+i,...x,children:(0,l.jsxs)("div",{className:"card-body flex flex-col justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex gap-2 mb-2",children:[s.nsfw&&(0,l.jsxs)("div",{className:"badge badge-error gap-1",children:[(0,l.jsx)("i",{className:"fa-solid pt-px fa-hexagon-exclamation"})," ",N("nsfw")]}),("string"==typeof s.genre?[s.genre]:s.genre).map(e=>(0,l.jsx)("div",{className:"badge badge-outline",children:e},e))]}),(0,l.jsx)("h2",{className:"card-title flex font-mono my-2 "+(c?"gap-4":"justify-between"),children:s.title}),s.description&&(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:c?s.description:s.description.replace(/^(.{95}[^\s]*).*/,"$1 ...")}})]}),(0,l.jsxs)("div",{className:"card-actions mt-2",children:[(0,l.jsx)("button",{onClick:()=>{u(!0),g(s.title.replaceAll(" ","-").toLowerCase()+"-1")},className:"btn btn-square btn-sm",children:(0,l.jsx)("i",{className:"fa-solid fa-fw fa-question"})}),s.links.map((e,n)=>(0,l.jsx)(m.Z,{className:"btn btn-sm "+(0===n?"btn-primary":"hidden"),href:s.links[n].url,target:"_blank",children:s.links[n].name},n))]})]})}),b&&(0,l.jsx)("button",{onClick:()=>j(null),className:"fixed z-[99999] left-0 top-0 w-screen h-screen backdrop-blur-xl bg-black/50 grid place-content-center",title:N("toggleimage"),children:(0,l.jsx)("img",{src:"/images/"+n+"/"+b+".jpg",className:"object-contain max-h-screen max-w-screen"})}),(0,l.jsx)("div",{className:(h?"opacity-100 visible pointer-events-auto":"")+" modal modal-bottom sm:modal-middle",children:(0,l.jsxs)("div",{className:"modal-box max-h-screen translate-y-0",children:[(null==s?void 0:s.images)&&(null==s?void 0:s.images)>0&&(0,l.jsxs)("div",{className:"mb-2",children:[(0,l.jsx)("div",{className:"carousel w-full",children:(0,l.jsx)("button",{onClick:()=>j(p),className:"group carousel-item w-full",title:N("toggleimage"),children:(0,l.jsx)("img",{src:p?"/images/"+n+"/"+p+".jpg":void 0,className:"w-full"})})}),s.images>1&&(0,l.jsx)("div",{className:"flex justify-center w-full py-2 gap-2",children:(()=>{let e=[];for(let n=1;n<=s.images;n++){let a=s.title.replaceAll(" ","-").toLowerCase()+"-"+n;e.push((0,l.jsx)("button",{disabled:a===p,onClick:()=>g(a),className:"btn btn-xs",children:n},a+"-btn"))}return e})()})]}),(0,l.jsx)("h3",{className:"font-bold font-mono text-xl mb-4",children:s.title}),s.description&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"underline font-semibold",children:N("description")+N("colon")}),(0,l.jsx)("p",{className:"mb-4",dangerouslySetInnerHTML:{__html:s.description}})]}),(null==s?void 0:s.workdescription)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"underline font-semibold",children:("trad"===n?N("translation:workdescription"):N("development:workdescription"))+N("colon")}),(0,l.jsx)("p",{className:"mb-4",dangerouslySetInnerHTML:{__html:s.workdescription}})]}),0!==f.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"underline font-semibold",children:N("history")+N("colon")}),f.some(e=>e.description)?(0,l.jsx)("ul",{className:"pt-1",children:f.map((e,s)=>e.description&&(0,l.jsx)("li",{dangerouslySetInnerHTML:{__html:e.date+N("colon")+e.description}},s))}):(0,l.jsx)("p",{children:N("development:startedOn")+N("colon")+f.slice(-1)[0].date})]}),(0,l.jsx)("div",{className:"card-actions mt-5",children:s.links.map((e,n)=>(0,l.jsx)(m.Z,{className:"btn btn-sm "+(0===n?"btn-primary":"btn-glass"),href:s.links[n].url,target:"_blank",children:s.links[n].name},n))}),(0,l.jsx)("div",{className:"modal-action",children:(0,l.jsx)("button",{onClick:()=>{u(!1),g(s.title.replaceAll(" ","-").toLowerCase()+"-1")},className:"btn btn-sm",children:N("close")})})]})})]})}},1734:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return h},default:function(){return u}});var l=n(5893),a=n(9008),t=n.n(a),i=n(5558),r=n(5472),c=n.n(r),d=n(381),o=n.n(d);n(2815);var m=n(7433);let x=["common","translation"];var h=!0;function u(){let{t:e}=(0,i.$G)(x),s={close:e("close"),nsfw:e("translation:nsfw")},n=c()(e("translation:projects"),[e=>o()(c()(e.history,[e=>o()(e.date,"DD/MM/YYYY").toDate()],["desc"])[0].date,"DD/MM/YYYY").toDate()],["desc"]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t(),{children:(0,l.jsx)("title",{children:"".concat(e("sitename")," – ").concat(e("translation:title"))})}),(0,l.jsxs)("main",{className:"flex flex-col mx-5 md:mx-10 my-5 md:my-10",children:[(0,l.jsxs)("div",{className:"grid p-4 card bg-base-300 rounded-box",children:[(0,l.jsx)("p",{className:"text-4xl underline underline-offset-4 mb-2",children:e("translation:title")}),(0,l.jsx)("p",{className:"text-lg mb-3",children:e("translation:description")}),(0,l.jsx)("u",{children:e("translation:langlevels")}),(0,l.jsx)("ul",{className:"list-['–\\0020'] list-inside",children:e("translation:levels").map(s=>{var n;return(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-mono",children:s.language}),e("colon"),s.explanation?(0,l.jsx)("abbr",{"data-tip":s.explanation,className:"tooltip underline decoration-dashed",children:s.level}):(0,l.jsx)("span",{children:s.level}),s.badge&&(0,l.jsxs)("span",{className:"badge ml-1",children:[(null===(n=s.badge)||void 0===n?void 0:n.icon)&&(0,l.jsx)("i",{className:s.badge.icon+" fa-duotone hidden sm:inline pt-[1px] mr-1"}),s.badge.label]})]},s.language)})}),(0,l.jsx)("i",{className:"italic text-sm pt-1",children:e("translation:evaluation")})]}),(0,l.jsx)("div",{className:"divider"}),n.length>0?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.Z,{project:n[0],first:!0,strings:s,className:"mb-5"}),n.length>1&&(0,l.jsx)("div",{className:"grid rounded-box grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5",children:n.slice(1).map((e,n)=>(0,l.jsx)(m.Z,{project:e,strings:s},n))})]}):(0,l.jsx)("p",{children:e("translation:empty")})]})]})}}},function(e){e.O(0,[885,338,774,888,179],function(){return e(e.s=2339)}),_N_E=e.O()}]);