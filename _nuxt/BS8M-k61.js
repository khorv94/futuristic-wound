import{d as _,a9 as m,bu as B,z as w,r as z,c as f,e as V,f as b,g,n as r,V as a,t as H,U as N,H as S,as as U,i as y,ae as $}from"./Hk4dX2zQ.js";import j from"./BV14Frac.js";const A={slots:{root:"relative my-5 group",header:"flex items-center gap-1.5 border border-(--ui-border-muted) bg-(--ui-bg) border-b-0 relative rounded-t-[calc(var(--ui-radius)*1.5)] px-4 py-3",filename:"text-(--ui-text) text-sm/6",icon:"size-4 shrink-0",copy:"absolute top-[11px] right-[11px] opacity-0 group-hover:opacity-100 transition",base:"group font-mono text-sm/6 border border-(--ui-border-muted) bg-(--ui-bg-muted) rounded-[calc(var(--ui-radius)*1.5)] px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto focus:outline-none"},variants:{filename:{true:{root:"[&>pre]:rounded-t-none [&>pre]:my-0 my-5"}}}},D=$;var h,v;const E=m({extend:m(A),...((v=(h=D.uiPro)==null?void 0:h.prose)==null?void 0:v.pre)||{}}),I=_({__name:"Pre",props:{icon:{},code:{},language:{},filename:{},highlights:{},hideHeader:{type:Boolean},meta:{},class:{},ui:{}},setup(C){const e=C,s=E(),P=B(),i=w(),n=z(!1);function k(){P.copy(e.code||""),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}return(o,O)=>{var t,c,l,p,u,d;const x=U;return y(),f("div",{class:r(a(s).root({class:[(t=e.ui)==null?void 0:t.root],filename:!!o.filename}))},[o.filename&&!o.hideHeader?(y(),f("div",{key:0,class:r(a(s).header({class:(c=e.ui)==null?void 0:c.header}))},[b(j,{icon:o.icon,filename:o.filename,class:r(a(s).icon({class:(l=e.ui)==null?void 0:l.icon}))},null,8,["icon","filename","class"]),g("span",{class:r(a(s).filename({class:(p=e.ui)==null?void 0:p.filename}))},H(o.filename),3)],2)):V("",!0),b(x,{icon:n.value?a(i).ui.icons.copyCheck:a(i).ui.icons.copy,color:"neutral",variant:"outline",size:"sm","aria-label":"Copy code to clipboard",class:r(a(s).copy({class:(u=e.ui)==null?void 0:u.copy})),tabindex:"-1",onClick:k},null,8,["icon","class"]),g("pre",S({class:a(s).base({class:[e.class,(d=e.ui)==null?void 0:d.base]})},o.$attrs),[N(o.$slots,"default")],16)],2)}}}),F=Object.assign(I,{__name:"ProsePre"});export{F as default};
