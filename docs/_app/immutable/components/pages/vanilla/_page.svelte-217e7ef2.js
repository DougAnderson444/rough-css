import{S as J,i as B,s as P,B as W,k as _,a as x,H as z,l as h,h as p,c as C,m as L,n as d,F as M,b as g,C as Q,D as X,E as Y,f as k,t as v,I as D,v as R,w as S,x as w,J as Z,K as F,y as E,L as K,q as T,r as A,p as ee,A as U}from"../../../chunks/index-bb017bd1.js";import{R as I,a as te,b as se,c as j,d as ne}from"../../../chunks/RoughDiamond-9ad9af9e.js";function ae(c){let e,t,a,r,s,o,i;document.title=e=c[0];const $=c[3].default,n=W($,c,c[2],null);return{c(){t=_("meta"),a=_("meta"),r=_("link"),s=x(),o=_("main"),n&&n.c(),this.h()},l(l){const f=z('[data-svelte="svelte-1ewye6t"]',document.head);t=h(f,"META",{property:!0,content:!0}),a=h(f,"META",{property:!0,content:!0}),r=h(f,"LINK",{rel:!0,href:!0}),f.forEach(p),s=C(l),o=h(l,"MAIN",{class:!0});var b=L(o);n&&n.l(b),b.forEach(p),this.h()},h(){d(t,"property","og:title"),d(t,"content",c[0]),d(a,"property","og:image"),d(a,"content",c[1]),d(r,"rel","stylesheet"),d(r,"href","https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-okaidia.css"),d(o,"class","svelte-1rtzkvk")},m(l,f){M(document.head,t),M(document.head,a),M(document.head,r),g(l,s,f),g(l,o,f),n&&n.m(o,null),i=!0},p(l,[f]){(!i||f&1)&&e!==(e=l[0])&&(document.title=e),(!i||f&1)&&d(t,"content",l[0]),(!i||f&2)&&d(a,"content",l[1]),n&&n.p&&(!i||f&4)&&Q(n,$,l,l[2],i?Y($,l[2],f,null):X(l[2]),null)},i(l){i||(k(n,l),i=!0)},o(l){v(n,l),i=!1},d(l){p(t),p(a),p(r),l&&p(s),l&&p(o),n&&n.d(l)}}}function oe(c,e,t){let{$$slots:a={},$$scope:r}=e,{title:s=""}=e,{coverImageUrl:o=""}=e;return c.$$set=i=>{"title"in i&&t(0,s=i.title),"coverImageUrl"in i&&t(1,o=i.coverImageUrl),"$$scope"in i&&t(2,r=i.$$scope)},[s,o,r,a]}class le extends J{constructor(e){super(),B(this,e,oe,ae,P,{title:0,coverImageUrl:1})}}function ue(c){let e;return{c(){e=T("About")},l(t){e=A(t,"About")},m(t,a){g(t,e,a)},d(t){t&&p(e)}}}function re(c){let e,t,a,r,s,o,i='<code class="language-sh"><span class="token function">npm</span> i github:douganderson444/rough-css</code>',$;return e=new j({props:{$$slots:{default:[ue]},$$scope:{ctx:c}}}),{c(){R(e.$$.fragment),t=T("\nLike `RoughJS` but with `CSS` and `HTML` instead of `JS` and `SVG`.\n    "),a=_("p"),r=T("This is all HTML + CSS! NO SVGs. Just a bit of JS to get some random widths."),s=x(),o=_("pre"),this.h()},l(n){S(e.$$.fragment,n),t=A(n,"\nLike `RoughJS` but with `CSS` and `HTML` instead of `JS` and `SVG`.\n    "),a=h(n,"P",{});var l=L(a);r=A(l,"This is all HTML + CSS! NO SVGs. Just a bit of JS to get some random widths."),l.forEach(p),s=C(n),o=h(n,"PRE",{class:!0});var f=L(o);f.forEach(p),this.h()},h(){d(o,"class","language-sh")},m(n,l){w(e,n,l),g(n,t,l),g(n,a,l),M(a,r),g(n,s,l),g(n,o,l),o.innerHTML=i,$=!0},p(n,l){const f={};l&2&&(f.$$scope={dirty:l,ctx:n}),e.$set(f)},i(n){$||(k(e.$$.fragment,n),$=!0)},o(n){v(e.$$.fragment,n),$=!1},d(n){E(e,n),n&&p(t),n&&p(a),n&&p(s),n&&p(o)}}}function pe(c){let e;return{c(){e=T("Use RoughCSS")},l(t){e=A(t,"Use RoughCSS")},m(t,a){g(t,e,a)},d(t){t&&p(e)}}}function ce(c){let e,t,a,r,s,o,i=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
        RoughBox<span class="token punctuation">,</span>
        RoughTitleBox<span class="token punctuation">,</span>
        RoughUnderline<span class="token punctuation">,</span>
        RoughCircle<span class="token punctuation">,</span>
        RoughDiamond
    <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@douganderson444/rough-css'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RoughBox</span><span class="token punctuation">></span></span>
    A sketched box
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RoughBox</span><span class="token punctuation">></span></span></code>`,$;return e=new j({props:{$$slots:{default:[pe]},$$scope:{ctx:c}}}),{c(){R(e.$$.fragment),t=T(`
It's easy to import into a Svetle Project. It could be compiled to WebComponents too...
`),a=_("br"),r=x(),s=_("small"),o=_("pre"),this.h()},l(n){S(e.$$.fragment,n),t=A(n,`
It's easy to import into a Svetle Project. It could be compiled to WebComponents too...
`),a=h(n,"BR",{style:!0}),r=C(n),s=h(n,"SMALL",{});var l=L(s);o=h(l,"PRE",{class:!0});var f=L(o);f.forEach(p),l.forEach(p),this.h()},h(){ee(a,"clear","both"),d(o,"class","language-svelte")},m(n,l){w(e,n,l),g(n,t,l),g(n,a,l),g(n,r,l),g(n,s,l),M(s,o),o.innerHTML=i,$=!0},p(n,l){const f={};l&2&&(f.$$scope={dirty:l,ctx:n}),e.$set(f)},i(n){$||(k(e.$$.fragment,n),$=!0)},o(n){v(e.$$.fragment,n),$=!1},d(n){E(e,n),n&&p(t),n&&p(a),n&&p(r),n&&p(s)}}}function ie(c){let e,t,a=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RoughCircle</span><span class="token punctuation">></span></span>
    Circles round and round
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RoughCircle</span><span class="token punctuation">></span></span></code>`;return{c(){e=_("small"),t=_("pre"),this.h()},l(r){e=h(r,"SMALL",{});var s=L(e);t=h(s,"PRE",{class:!0});var o=L(t);o.forEach(p),s.forEach(p),this.h()},h(){d(t,"class","language-svelte")},m(r,s){g(r,e,s),M(e,t),t.innerHTML=a},p:U,d(r){r&&p(e)}}}function fe(c){let e,t,a=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RoughDiamond</span><span class="token punctuation">></span></span>
    Diamond
    in the
    RoughCss
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RoughDiamond</span><span class="token punctuation">></span></span></code>`;return{c(){e=_("small"),t=_("pre"),this.h()},l(r){e=h(r,"SMALL",{});var s=L(e);t=h(s,"PRE",{class:!0});var o=L(t);o.forEach(p),s.forEach(p),this.h()},h(){d(t,"class","language-svelte")},m(r,s){g(r,e,s),M(e,t),t.innerHTML=a},p:U,d(r){r&&p(e)}}}function $e(c){let e;return{c(){e=T("Twitter")},l(t){e=A(t,"Twitter")},m(t,a){g(t,e,a)},d(t){t&&p(e)}}}function me(c){let e;return{c(){e=T("@DougAnderson444")},l(t){e=A(t,"@DougAnderson444")},m(t,a){g(t,e,a)},d(t){t&&p(e)}}}function ge(c){let e,t,a,r;return e=new j({props:{background:"#1DA1F2",$$slots:{default:[$e]},$$scope:{ctx:c}}}),a=new ne({props:{$$slots:{default:[me]},$$scope:{ctx:c}}}),{c(){R(e.$$.fragment),t=x(),R(a.$$.fragment)},l(s){S(e.$$.fragment,s),t=C(s),S(a.$$.fragment,s)},m(s,o){w(e,s,o),g(s,t,o),w(a,s,o),r=!0},p(s,o){const i={};o&2&&(i.$$scope={dirty:o,ctx:s}),e.$set(i);const $={};o&2&&($.$$scope={dirty:o,ctx:s}),a.$set($)},i(s){r||(k(e.$$.fragment,s),k(a.$$.fragment,s),r=!0)},o(s){v(e.$$.fragment,s),v(a.$$.fragment,s),r=!1},d(s){E(e,s),s&&p(t),E(a,s)}}}function _e(c){let e,t,a,r,s,o,i,$,n,l,f,b,H;return r=new I({props:{$$slots:{default:[re]},$$scope:{ctx:c}}}),o=new I({props:{$$slots:{default:[ce]},$$scope:{ctx:c}}}),$=new te({props:{$$slots:{default:[ie]},$$scope:{ctx:c}}}),l=new se({props:{$$slots:{default:[fe]},$$scope:{ctx:c}}}),b=new I({props:{$$slots:{default:[ge]},$$scope:{ctx:c}}}),{c(){e=_("h3"),t=T("ReadMe"),a=x(),R(r.$$.fragment),s=x(),R(o.$$.fragment),i=x(),R($.$$.fragment),n=x(),R(l.$$.fragment),f=x(),R(b.$$.fragment)},l(u){e=h(u,"H3",{});var m=L(e);t=A(m,"ReadMe"),m.forEach(p),a=C(u),S(r.$$.fragment,u),s=C(u),S(o.$$.fragment,u),i=C(u),S($.$$.fragment,u),n=C(u),S(l.$$.fragment,u),f=C(u),S(b.$$.fragment,u)},m(u,m){g(u,e,m),M(e,t),g(u,a,m),w(r,u,m),g(u,s,m),w(o,u,m),g(u,i,m),w($,u,m),g(u,n,m),w(l,u,m),g(u,f,m),w(b,u,m),H=!0},p(u,m){const G={};m&2&&(G.$$scope={dirty:m,ctx:u}),r.$set(G);const N={};m&2&&(N.$$scope={dirty:m,ctx:u}),o.$set(N);const V={};m&2&&(V.$$scope={dirty:m,ctx:u}),$.$set(V);const q={};m&2&&(q.$$scope={dirty:m,ctx:u}),l.$set(q);const y={};m&2&&(y.$$scope={dirty:m,ctx:u}),b.$set(y)},i(u){H||(k(r.$$.fragment,u),k(o.$$.fragment,u),k($.$$.fragment,u),k(l.$$.fragment,u),k(b.$$.fragment,u),H=!0)},o(u){v(r.$$.fragment,u),v(o.$$.fragment,u),v($.$$.fragment,u),v(l.$$.fragment,u),v(b.$$.fragment,u),H=!1},d(u){u&&p(e),u&&p(a),E(r,u),u&&p(s),E(o,u),u&&p(i),E($,u),u&&p(n),E(l,u),u&&p(f),E(b,u)}}}function he(c){let e,t;const a=[c[0],O];let r={$$slots:{default:[_e]},$$scope:{ctx:c}};for(let s=0;s<a.length;s+=1)r=D(r,a[s]);return e=new le({props:r}),{c(){R(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,o){w(e,s,o),t=!0},p(s,[o]){const i=o&1?Z(a,[o&1&&F(s[0]),o&0&&F(O)]):{};o&2&&(i.$$scope={dirty:o,ctx:s}),e.$set(i)},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){E(e,s)}}}const O={layout:"handwritten",title:"Guide"};function de(c,e,t){return c.$$set=a=>{t(0,e=D(D({},e),K(a)))},e=K(e),[e]}class ke extends J{constructor(e){super(),B(this,e,de,he,P,{})}}function ve(c){let e,t;return e=new ke({}),{c(){R(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,r){w(e,a,r),t=!0},p:U,i(a){t||(k(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){E(e,a)}}}class Se extends J{constructor(e){super(),B(this,e,null,ve,P,{})}}export{Se as default};
