(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function a(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=a(l);fetch(l.href,i)}})();function $(){}function P(e){return e()}function S(){return Object.create(null)}function k(e){e.forEach(P)}function H(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function F(e){return Object.keys(e).length===0}function w(e,t,a){e.insertBefore(t,a||null)}function o(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function p(){return I(" ")}function v(e,t,a){a==null?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function R(e){return Array.from(e.childNodes)}let T;function x(e){T=e}const m=[],O=[];let _=[];const q=[],V=Promise.resolve();let j=!1;function W(){j||(j=!0,V.then(A))}function E(e){_.push(e)}const N=new Set;let b=0;function A(){if(b!==0)return;const e=T;do{try{for(;b<m.length;){const t=m[b];b++,x(t),z(t.$$)}}catch(t){throw m.length=0,b=0,t}for(x(null),m.length=0,b=0;O.length;)O.pop()();for(let t=0;t<_.length;t+=1){const a=_[t];N.has(a)||(N.add(a),a())}_.length=0}while(m.length);for(;q.length;)q.pop()();j=!1,N.clear(),x(e)}function z(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}function B(e){const t=[],a=[];_.forEach(r=>e.indexOf(r)===-1?t.push(r):a.push(r)),a.forEach(r=>r()),_=t}const C=new Set;function G(e,t){e&&e.i&&(C.delete(e),e.i(t))}function K(e,t,a,r){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,a),r||E(()=>{const g=e.$$.on_mount.map(P).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...g):k(g),e.$$.on_mount=[]}),i.forEach(E)}function D(e,t){const a=e.$$;a.fragment!==null&&(B(a.after_update),k(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(m.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,a,r,l,i,g,y=[-1]){const n=T;x(e);const s=e.$$={fragment:null,ctx:[],props:i,update:$,not_equal:l,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(n?n.$$.context:[])),callbacks:S(),dirty:y,skip_bound:!1,root:t.target||n.$$.root};g&&g(s.root);let h=!1;if(s.ctx=a?a(e,t.props||{},(f,c,...u)=>{const L=u.length?u[0]:c;return s.ctx&&l(s.ctx[f],s.ctx[f]=L)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](L),h&&J(e,f)),c}):[],s.update(),h=!0,k(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const f=R(t.target);s.fragment&&s.fragment.l(f),f.forEach(o)}else s.fragment&&s.fragment.c();t.intro&&G(e.$$.fragment),K(e,t.target,t.anchor,t.customElement),A()}x(n)}class Y{$destroy(){D(this,1),this.$destroy=$}$on(t,a){if(!H(a))return $;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(a),()=>{const l=r.indexOf(a);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!F(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Z(e){let t,a,r,l,i,g,y;return{c(){t=d("p"),t.innerHTML=`<top class="svelte-1yawgw8"><em>TheWestonFiles</em></top><br/> 
    <topSub class="svelte-1yawgw8">The <b>Wikipedia</b> for <em>Nerds</em></topSub> 
  `,a=d("br"),r=p(),l=d("p"),l.innerHTML="<em>This article has very<br/> little <b>Information</b>  </em>",i=d("br"),g=p(),y=d("div"),y.innerHTML=`<h1 class="svelte-1yawgw8">Nynorn</h1><br/> 
    <box style="float:left;width:136px;height:165px;border:1px solid black;background-color:rgb(238, 238, 238);margin-right:5px;"><p style="margin-top:10px;" class="bc-text-align svelte-1yawgw8"><b>Nynorn</b><br/>Hjetmål</p> 
      <p class="svelte-1yawgw8"> <a class="svelte-1yawgw8">Family: </a><span>Germanic</span></p> 
      <p class="svelte-1yawgw8"> <a class="svelte-1yawgw8">Early Form: </a><span>Norn</span></p> 
      <p class="svelte-1yawgw8"> <a class="svelte-1yawgw8">Script: </a><span>Latin</span></p></box> 
    <p class="svelte-1yawgw8">Nynorn is a project that aims to revive the <a class="svelte-1yawgw8">Norn language</a>. <a class="svelte-1yawgw8">Norn</a> was the language spoken in the islands of <a class="svelte-1yawgw8">Shetland</a> and <a class="svelte-1yawgw8">Orkney</a>.<a class="svelte-1yawgw8">[1]</a> Nynorn as a project was started around 2006 and aims to recreate the <a class="svelte-1yawgw8">Shetland</a> dialect with few plans to revive the <a class="svelte-1yawgw8">Orkney</a> dialect.<a class="svelte-1yawgw8">[1]</a> Nynorn as a project is still in the very early stages and is very experimental.<a class="svelte-1yawgw8">[2]</a></p> 
    <h1 class="svelte-1yawgw8">Phonetics</h1><br/> 
    <p class="svelte-1yawgw8">The alphabet of Nynorn consists of 24 letters.<a class="svelte-1yawgw8">[2]</a></p><br/>
    Various letters combination sounds.<br/><br/> 
    <ul style="margin-left:5%;"><li>hj sounds similar to the English j.<a class="svelte-1yawgw8">[2]</a></li> 
      <li>sj sounds similar to the English sh.<a class="svelte-1yawgw8">[2]</a></li> 
      <li>tsj sounds similar to the English ch.<a class="svelte-1yawgw8">[2]</a></li> 
    </ul><br/> 
    <b>Alphabet</b> 
    <table class="bc-border svelte-1yawgw8"><tr class="bc-border"><th class="grid svelte-1yawgw8">Aa</th> 
        <th class="grid svelte-1yawgw8">Bb</th> 
        <th class="grid svelte-1yawgw8">Dd</th> 
        <th class="grid svelte-1yawgw8">Ðð</th> 
        <th class="grid svelte-1yawgw8">Ee</th> 
        <th class="grid svelte-1yawgw8">Ff</th> 
        <th class="grid svelte-1yawgw8">Gg</th> 
        <th class="grid svelte-1yawgw8">Hh</th></tr> 
      <tr class="bc-border"><th class="grid svelte-1yawgw8">Ii</th> 
        <th class="grid svelte-1yawgw8">Jj</th> 
        <th class="grid svelte-1yawgw8">Kk</th> 
        <th class="grid svelte-1yawgw8">Ll</th> 
        <th class="grid svelte-1yawgw8">Mm</th> 
        <th class="grid svelte-1yawgw8">Nn</th> 
        <th class="grid svelte-1yawgw8">Oo</th> 
        <th class="grid svelte-1yawgw8">Pp</th></tr> 
      <tr class="bc-border"><th class="grid svelte-1yawgw8">Rr</th> 
        <th class="grid svelte-1yawgw8">Ss</th> 
        <th class="grid svelte-1yawgw8">Tt</th> 
        <th class="grid svelte-1yawgw8">Uu</th> 
        <th class="grid svelte-1yawgw8">Vv</th> 
        <th class="grid svelte-1yawgw8">Yy</th> 
        <th class="grid svelte-1yawgw8">Øø</th> 
        <th style="gridEnd">Åå</th></tr> 
    </table><br/>
    The capital Ð is not a grammatically used letter and is only included in the alphabet for completeness.<a class="svelte-1yawgw8">[2]</a><br/><br/> 
    <h1 class="svelte-1yawgw8"><src class="svelte-1yawgw8">Sources</src></h1><br/>
    1.<a class="svelte-1yawgw8">^</a> Zui (2021-07-24). <a class="svelte-1yawgw8">&quot;Reviving a &quot;lost&quot; Viking language — The Nynorn Project&quot; <i class="fa fa-external-link" style="font-size:12px;"></i></a>. The Language Closet. Retrieved 2022-10-17.<br/> 
    <br/>2.<a class="svelte-1yawgw8">^</a>  <a class="svelte-1yawgw8">&quot;Intoduction into the Nynorn Project&quot; <i class="fa fa-external-link" style="font-size:12px;"></i></a>. nornlanguage.x10.mx. Retrieved 2022-10-17.`,v(t,"align","center"),v(t,"class","svelte-1yawgw8"),v(l,"align","center"),v(l,"class","svelte-1yawgw8"),v(y,"class","mobile svelte-1yawgw8")},m(n,s){w(n,t,s),w(n,a,s),w(n,r,s),w(n,l,s),w(n,i,s),w(n,g,s),w(n,y,s)},d(n){n&&o(t),n&&o(a),n&&o(r),n&&o(l),n&&o(i),n&&o(g),n&&o(y)}}}function Q(e){let t,a,r,l,i,g,y,n,s,h,f;return{c(){t=d("articleExtra"),t.innerHTML='<p align="center" class="svelte-1yawgw8">This article has very<br/> little <b>Information</b></p>',a=p(),r=d("top"),r.innerHTML="<em>TheWestonFiles</em>",l=d("br"),i=p(),g=d("topSub"),g.innerHTML="The <b>Wikipedia</b> for <em>Nerds</em>",y=p(),n=d("br"),s=d("br"),h=p(),f=d("main"),f.innerHTML=`<h1 class="svelte-1yawgw8">Nynorn</h1><br/> 
    <box style="float:right;width:200px;height:180px;border:1px solid black;background-color:rgb(238, 238, 238);"><p style="margin-top:10px;" class="bc-text-align svelte-1yawgw8"><b>Nynorn</b><br/>
      Hjetmål</p> 
    <p class="svelte-1yawgw8"><a class="svelte-1yawgw8"> Family</a><span>      Germanic</span> 
    </p><br/> 
    <p class="svelte-1yawgw8"> <a class="svelte-1yawgw8">Early Form</a><span>      Norn</span> 
    </p><br/> 
    <p class="svelte-1yawgw8"> <a class="svelte-1yawgw8">Writing System</a><span>     Latin</span></p></box> 
    <p class="svelte-1yawgw8">Nynorn is a project that aims to revive the <a class="svelte-1yawgw8">Norn language</a>. <a class="svelte-1yawgw8">Norn</a> was the language spoken in the islands of <a class="svelte-1yawgw8">Shetland</a> and <a class="svelte-1yawgw8">Orkney</a>.<a class="svelte-1yawgw8">[1]</a> Nynorn as a project was started around 2006 and aims to recreate the <a class="svelte-1yawgw8">Shetland</a> dialect with few plans to revive the <a class="svelte-1yawgw8">Orkney</a> dialect.<a class="svelte-1yawgw8">[1]</a> Nynorn as a project is still in the very early stages and is very experimental.<a class="svelte-1yawgw8">[2]</a></p> 
    <h1 class="fix svelte-1yawgw8">Phonetics</h1><br/> 
    <p class="svelte-1yawgw8">The alphabet of Nynorn consists of 24 letters.<a class="svelte-1yawgw8">[2]</a></p><br/>
    Various letters combination sounds.<br/><br/> 
    <ul style="margin-left:5%;"><li>hj sounds similar to the English j.<a class="svelte-1yawgw8">[2]</a></li> 
      <li>sj sounds similar to the English sh.<a class="svelte-1yawgw8">[2]</a></li> 
      <li>tsj sounds similar to the English ch.<a class="svelte-1yawgw8">[2]</a></li> 
    </ul><br/> 
    <b>Alphabet</b> 
    <table class="bc-border svelte-1yawgw8"><tr class="bc-border"><th class="grid svelte-1yawgw8">Aa</th> 
        <th class="grid svelte-1yawgw8">Bb</th> 
        <th class="grid svelte-1yawgw8">Dd</th> 
        <th class="grid svelte-1yawgw8">Ðð</th> 
        <th class="grid svelte-1yawgw8">Ee</th> 
        <th class="gridEnd svelte-1yawgw8">Ff</th> 
        <th class="grid svelte-1yawgw8">Gg</th> 
        <th class="grid svelte-1yawgw8">Hh</th> 
        <th class="grid svelte-1yawgw8">Ii</th> 
        <th class="grid svelte-1yawgw8">Jj</th> 
        <th class="grid svelte-1yawgw8">Kk</th> 
        <th class="gridEnd svelte-1yawgw8">Ll</th> 
        <th class="grid svelte-1yawgw8">Mm</th> 
        <th class="grid svelte-1yawgw8">Nn</th> 
        <th class="grid svelte-1yawgw8">Oo</th> 
        <th class="grid svelte-1yawgw8">Pp</th> 
        <th class="grid svelte-1yawgw8">Rr</th> 
        <th class="gridEnd svelte-1yawgw8">Ss</th> 
        <th class="grid svelte-1yawgw8">Tt</th> 
        <th class="grid svelte-1yawgw8">Uu</th> 
        <th class="grid svelte-1yawgw8">Vv</th> 
        <th class="grid svelte-1yawgw8">Yy</th> 
        <th class="grid svelte-1yawgw8">Øø</th> 
        <th style="gridEnd">Åå</th></tr> 
    </table><br/>
    The capital Ð is not a grammatically used letter and is only included in the alphabet for completeness.<a class="svelte-1yawgw8">[2]</a><br/><br/> 
    <h1 class="svelte-1yawgw8"><src class="svelte-1yawgw8">Sources</src></h1><br/>
     1.<a class="svelte-1yawgw8">^</a> Zui (2021-07-24). <a class="svelte-1yawgw8">&quot;Reviving a &quot;lost&quot; Viking language — The Nynorn Project&quot; <i class="fa fa-external-link" style="font-size:12px;"></i></a>. The Language Closet. Retrieved 2022-10-17.<br/>
     2.<a class="svelte-1yawgw8">^</a>  <a class="svelte-1yawgw8">&quot;Intoduction into the Nynorn Project&quot; <i class="fa fa-external-link" style="font-size:12px;"></i></a>. nornlanguage.x10.mx. Retrieved 2022-10-17.`,v(t,"class","svelte-1yawgw8"),v(r,"class","svelte-1yawgw8"),v(g,"class","svelte-1yawgw8"),v(f,"class","svelte-1yawgw8")},m(c,u){w(c,t,u),w(c,a,u),w(c,r,u),w(c,l,u),w(c,i,u),w(c,g,u),w(c,y,u),w(c,n,u),w(c,s,u),w(c,h,u),w(c,f,u)},d(c){c&&o(t),c&&o(a),c&&o(r),c&&o(l),c&&o(i),c&&o(g),c&&o(y),c&&o(n),c&&o(s),c&&o(h),c&&o(f)}}}function X(e){let t,a,r,l,i;function g(s,h){return s[0]?Z:Q}let y=g(e),n=y(e);return{c(){t=d("link"),a=p(),n.c(),r=p(),l=d("br"),i=d("br"),v(t,"rel","stylesheet"),v(t,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")},m(s,h){w(s,t,h),w(s,a,h),n.m(s,h),w(s,r,h),w(s,l,h),w(s,i,h)},p(s,[h]){y!==(y=g(s))&&(n.d(1),n=y(s),n&&(n.c(),n.m(r.parentNode,r)))},i:$,o:$,d(s){s&&o(t),s&&o(a),n.d(s),s&&o(r),s&&o(l),s&&o(i)}}}function ee(e,t,a){let r=!1;return window.innerWidth<window.innerHeight&&(r=!0),[r]}class te extends Y{constructor(t){super(),U(this,t,ee,X,M,{})}}new te({target:document.getElementById("app")});
