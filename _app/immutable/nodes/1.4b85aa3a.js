import{s as k,n as M,e as P}from"../chunks/scheduler.d3757848.js";import{S as j,i as q,g as h,m as $,s as d,h as v,j as x,n as C,f as r,c as g,C as E,k as z,a as u,y as S,o as T}from"../chunks/index.9e48f9b1.js";import{s as U}from"../chunks/singletons.1b399fd8.js";const w=()=>{const s=U;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},A={subscribe(s){return w().page.subscribe(s)}};function B(s){let a,n=s[0].status+"",i,c,l,m=s[0].error.message+"",f,_,o,H="<strong>Sorry!</strong> Maybe try one of these links?",b,p,y='<li><a href="/">Home</a></li>';return{c(){a=h("h2"),i=$(n),c=d(),l=h("p"),f=$(m),_=d(),o=h("p"),o.innerHTML=H,b=d(),p=h("ul"),p.innerHTML=y,this.h()},l(e){a=v(e,"H2",{});var t=x(a);i=C(t,n),t.forEach(r),c=g(e),l=v(e,"P",{class:!0});var L=x(l);f=C(L,m),L.forEach(r),_=g(e),o=v(e,"P",{["data-svelte-h"]:!0}),E(o)!=="svelte-1pizp4"&&(o.innerHTML=H),b=g(e),p=v(e,"UL",{["data-svelte-h"]:!0}),E(p)!=="svelte-2n7loh"&&(p.innerHTML=y),this.h()},h(){z(l,"class","subhead")},m(e,t){u(e,a,t),S(a,i),u(e,c,t),u(e,l,t),S(l,f),u(e,_,t),u(e,o,t),u(e,b,t),u(e,p,t)},p(e,[t]){t&1&&n!==(n=e[0].status+"")&&T(i,n),t&1&&m!==(m=e[0].error.message+"")&&T(f,m)},i:M,o:M,d(e){e&&(r(a),r(c),r(l),r(_),r(o),r(b),r(p))}}}function D(s,a,n){let i;return P(s,A,c=>n(0,i=c)),[i]}let J=class extends j{constructor(a){super(),q(this,a,D,B,k,{})}};export{J as component};