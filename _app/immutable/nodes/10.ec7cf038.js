import{s as T,n as E}from"../chunks/scheduler.d3757848.js";import{S as z,i as F,g as C,s as v,e as D,H as G,h as w,f as _,c as y,k as j,y as d,a as g,d as B,t as q,C as H,m as b,r as S,j as I,n as k,u as x,v as A,o as L,w as M}from"../chunks/index.9e48f9b1.js";import{a as O,P as J}from"../chunks/Pagination.6c46929f.js";import{b as K}from"../chunks/config.0fabbd6f.js";function N(l){let e,f="Oops!",m,o,r="Sorry, no posts to show here.",p,n,h="Back to blog";return{c(){e=C("h1"),e.textContent=f,m=v(),o=C("p"),o.textContent=r,p=v(),n=C("a"),n.textContent=h,this.h()},l(s){e=w(s,"H1",{["data-svelte-h"]:!0}),H(e)!=="svelte-1u3vn74"&&(e.textContent=f),m=y(s),o=w(s,"P",{["data-svelte-h"]:!0}),H(o)!=="svelte-gl524b"&&(o.textContent=r),p=y(s),n=w(s,"A",{href:!0,["data-svelte-h"]:!0}),H(n)!=="svelte-1qcn6gf"&&(n.textContent=h),this.h()},h(){j(n,"href","/blog")},m(s,c){g(s,e,c),g(s,m,c),g(s,o,c),g(s,p,c),g(s,n,c)},p:E,i:E,o:E,d(s){s&&(_(e),_(m),_(o),_(p),_(n))}}}function Q(l){let e,f,m,o,r,p,n,h,s,c,a,u,$,P;return s=new O({props:{currentPage:l[2],totalPosts:l[3]}}),a=new J({props:{posts:l[4]}}),$=new O({props:{currentPage:l[2],totalPosts:l[3]}}),{c(){e=C("h1"),f=b("Posts "),m=b(l[1]),o=b("–"),r=b(l[0]),p=b(" of "),n=b(l[3]),h=v(),S(s.$$.fragment),c=v(),S(a.$$.fragment),u=v(),S($.$$.fragment)},l(t){e=w(t,"H1",{});var i=I(e);f=k(i,"Posts "),m=k(i,l[1]),o=k(i,"–"),r=k(i,l[0]),p=k(i," of "),n=k(i,l[3]),i.forEach(_),h=y(t),x(s.$$.fragment,t),c=y(t),x(a.$$.fragment,t),u=y(t),x($.$$.fragment,t)},m(t,i){g(t,e,i),d(e,f),d(e,m),d(e,o),d(e,r),d(e,p),d(e,n),g(t,h,i),A(s,t,i),g(t,c,i),A(a,t,i),g(t,u,i),A($,t,i),P=!0},p(t,i){(!P||i&2)&&L(m,t[1]),(!P||i&1)&&L(r,t[0])},i(t){P||(B(s.$$.fragment,t),B(a.$$.fragment,t),B($.$$.fragment,t),P=!0)},o(t){q(s.$$.fragment,t),q(a.$$.fragment,t),q($.$$.fragment,t),P=!1},d(t){t&&(_(e),_(h),_(c),_(u)),M(s,t),M(a,t),M($,t)}}}function R(l){let e,f,m,o,r,p,n;document.title=e="Blog category - page "+l[2];const h=[Q,N],s=[];function c(a,u){return a[4].length?0:1}return o=c(l),r=s[o]=h[o](l),{c(){f=C("meta"),m=v(),r.c(),p=D(),this.h()},l(a){const u=G("svelte-1xb1q8q",document.head);f=w(u,"META",{"data-key":!0,name:!0}),u.forEach(_),m=y(a),r.l(a),p=D(),this.h()},h(){j(f,"data-key","description"),j(f,"name",K)},m(a,u){d(document.head,f),g(a,m,u),s[o].m(a,u),g(a,p,u),n=!0},p(a,[u]){(!n||u&4)&&e!==(e="Blog category - page "+a[2])&&(document.title=e),r.p(a,u)},i(a){n||(B(r),n=!0)},o(a){q(r),n=!1},d(a){a&&(_(m),_(p)),_(f),s[o].d(a)}}}function U(l,e,f){let m,o,{data:r}=e;const{page:p,totalPosts:n,posts:h}=r;return l.$$set=s=>{"data"in s&&f(5,r=s.data)},f(1,m=p*postsPerPage-(postsPerPage-1)||1),f(0,o=Math.min(p*postsPerPage,n)),[o,m,p,n,h,r]}class Z extends z{constructor(e){super(),F(this,e,U,R,T,{data:5})}}export{Z as component};