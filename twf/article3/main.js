(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();function W(){}function N(e){return e()}function L(){return Object.create(null)}function S(e){e.forEach(N)}function J(e){return typeof e=="function"}function C(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function q(e){return Object.keys(e).length===0}function h(e,t,s){e.insertBefore(t,s||null)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function v(){return R(" ")}function B(){return R("")}function g(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function G(e){return Array.from(e.childNodes)}let A;function _(e){A=e}const w=[],j=[];let k=[];const E=[],O=Promise.resolve();let M=!1;function H(){M||(M=!0,O.then(P))}function $(e){k.push(e)}const T=new Set;let y=0;function P(){if(y!==0)return;const e=A;do{try{for(;y<w.length;){const t=w[y];y++,_(t),D(t.$$)}}catch(t){throw w.length=0,y=0,t}for(_(null),w.length=0,y=0;j.length;)j.pop()();for(let t=0;t<k.length;t+=1){const s=k[t];T.has(s)||(T.add(s),s())}k.length=0}while(w.length);for(;E.length;)E.pop()();M=!1,T.clear(),_(e)}function D(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}function F(e){const t=[],s=[];k.forEach(i=>e.indexOf(i)===-1?t.push(i):s.push(i)),s.forEach(i=>i()),k=t}const K=new Set;function Z(e,t){e&&e.i&&(K.delete(e),e.i(t))}function U(e,t,s,i){const{fragment:n,after_update:a}=e.$$;n&&n.m(t,s),i||$(()=>{const r=e.$$.on_mount.map(N).filter(J);e.$$.on_destroy?e.$$.on_destroy.push(...r):S(r),e.$$.on_mount=[]}),a.forEach($)}function I(e,t){const s=e.$$;s.fragment!==null&&(F(s.after_update),S(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function V(e,t){e.$$.dirty[0]===-1&&(w.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,s,i,n,a,r,c=[-1]){const d=A;_(e);const l=e.$$={fragment:null,ctx:[],props:a,update:W,not_equal:n,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:L(),dirty:c,skip_bound:!1,root:t.target||d.$$.root};r&&r(l.root);let p=!1;if(l.ctx=s?s(e,t.props||{},(m,o,...f)=>{const x=f.length?f[0]:o;return l.ctx&&n(l.ctx[m],l.ctx[m]=x)&&(!l.skip_bound&&l.bound[m]&&l.bound[m](x),p&&V(e,m)),o}):[],l.update(),p=!0,S(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const m=G(t.target);l.fragment&&l.fragment.l(m),m.forEach(u)}else l.fragment&&l.fragment.c();t.intro&&Z(e.$$.fragment),U(e,t.target,t.anchor,t.customElement),P()}_(d)}class Y{$destroy(){I(this,1),this.$destroy=W}$on(t,s){if(!J(s))return W;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(s),()=>{const n=i.indexOf(s);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(e){let t,s,i,n,a,r;return{c(){t=b("p"),t.innerHTML=`<top class="svelte-1c7y9b1"><em>TheWestonFiles</em></top><br/> 
    <topSub class="svelte-1c7y9b1">The <b>Wikipedia</b> for <em>Nerds</em></topSub>`,s=v(),i=b("p"),i.innerHTML="<em>This article may be biased<br/>Viewer Discretion is advised</em>",n=b("br"),a=v(),r=b("div"),r.innerHTML=`<h1 class="svelte-1c7y9b1">Weston Snow</h1> 
    <p align="left" class="svelte-1c7y9b1"><img class=" svelte-1c7y9b1" style="border-radius:70px;" src="band.jpg"/></p> 
        
        <p class="svelte-1c7y9b1">Weston Snow also known as וועסטון שניי is a student currently attending a secondary school in 
          the United States of America known for language learning, conservative leaning politics, and 
          web development. Born in the early 2,000s in a suburban community Weston Snow was raised a
          <a href="https://en.wikipedia.org/wiki/Mormons" class="svelte-1c7y9b1">Mormon</a> and still continuing in the religion to the current day.</p> 
        
        <h1 class=" svelte-1c7y9b1">Life in the Mormon religion</h1> 
        <p class="svelte-1c7y9b1">Both parents, as Mormons from Utah and Seatle respectively, were raised in the religion and
          Rasied both Weston and his siblings in the religion of <a href="ttps://en.hwikipedia.org/wiki/Mormonism" class="svelte-1c7y9b1">Mormonism</a> and all siblings still 
          practice the religion currently. Weston progressed through primary and early sunday school,
          classes, the deacon, teacher, and currently in the preists quorum.</p> 
        
        <h1 class=" svelte-1c7y9b1">Web development</h1> 
        <p class="svelte-1c7y9b1">Starting with <a href="https://en.wikipedia.org/wiki/Khan_Academy" class="svelte-1c7y9b1">khan academy</a> in the 7th grade, Weston progressed coding throughout many different
          languages and engines. When begininning with khan academy Weston took only the JS game 
          development course with only a minimal use of other courses on khan academy such as the HTML
          course. With minimal time put off for coding at that point Weston&#39;s coding progressed very 
          little. Eventually learning about the Minecraft <a href="https://en.wikipedia.org/wiki/Raspberry_Pi" class="svelte-1c7y9b1">raspberry pi</a> from a video posted on Youtube
          by, Antvenom, Weston ordered a raspberry pi zero. <a href="https://www.youtube.com/watch?v=9JmZkP7XZm4" class="svelte-1c7y9b1">[1]</a> After learning <a href="https://en.wikipedia.org/wiki/JavaScript" class="svelte-1c7y9b1">Javascript</a> with normal
          HTML Weston created multiple projects as listed below.
          <br/> 
          <br/>
          • Project Darkness <a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">[2]</a><br/>
          • The last leaf <a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">[2]</a><br/>
          • Untitled fish game <a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">[2]</a><br/>
          • Rock Simulator 2022 <a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">[2]</a> 
          <br/> 
          <br/>
          Other projects not listed in there may include &quot;A final phone call&quot; made in wick editor and
          others. It is worth noting that all listed projects above 
          (excluding Untitled fish game, and Rock Simulator) are cancelled or unfinished. Eventually
          moving on to HTML as a primary coding language Weston left game development up untill now.
          Originally starting in unmodified HTML Weston tried multiple Javascript frameworks including,
          <a href="https://en.wikipedia.org/wiki/React_(software)" class="svelte-1c7y9b1">React</a>, Astro, and <a href="https://en.wikipedia.org/wiki/Svelte" class="svelte-1c7y9b1">Svelte</a>. Weston is currently coding mostly in Svelte for recent projects. [...] 
          <br/> 
          <br/>
          One of the most notable projects Weston made in Svelte was Guyot. Guyot was an orginization 
          created to fix the blocking of emulation in the American school system. Guyot has 2 members 
          with many other helpers who collaborated on the project. Guyot has created the projects 
          listed below.
          <br/> 
          <br/>
          • GuyotJS <em>emulation</em><br/>
          • The Weston Files<br/>
          • Two recreations of Tusky Time
          <br/> 
          <br/>
          Other projects created by Weston include, MossJS a minimalist game engine, PlutoCSS a css 
          mini design framework for both CSS and <a href="https://en.wikipedia.org/wiki/React_Native" class="svelte-1c7y9b1">ReactNative</a>.</p> 
        <h1 class="svelte-1c7y9b1">Language learning and creation</h1>
        Weston started learning French in the 7th grade leading him towards furthering his language goals.
        Weston continued learning French starting from homeschool (only in 7th grade) into French in 
        secondary and primary school. Weston, after learning about <a href="https://en.wikipedia.org/wiki/Duolingo" class="svelte-1c7y9b1">Duolingo</a>, decided on learning the
        language of Norwegian almost completly on Duolingo. Weston continued learning Norwegian until
        late 2022 in which he switched over too Yiddish for around 2 months. Throughout this time
        Weston picked up on basic conversation skills in languages such as German(Deutsch). Currently Weston
        is learning Dutch(Nederlands) in preperation to visit Belgium.
        <br/> 
        <br/>
        Weston begin constructing <a href="https://en.wikipedia.org/wiki/Constructed_language" class="svelte-1c7y9b1">conlangs</a> in 2021. Weston, along with his brother, constructed Kisou 
        A <a href="https://en.wikipedia.org/wiki/Constructed_language" class="svelte-1c7y9b1">conlang</a> with english derived grammar and heavy use of loanwords from a collection of sources
        including, English, French, and Norwegian.
        <br/> 
        <br/> 
        <em> - Phrase in Kisou<br/></em>
        Ki! Be tu Weston. Be tu gry. Be wer 5 tos mer fom. Mer kes sautee Valom ond Shema. Be wer 
        1 es er be kah wer veser.Be feair vou ender flacebowl er be kuh feair activitay.  
        Mer es sautea Dayshel. Be feair mer es. Mer veser sautea Lilly. Lilly feairs vou ender 
        roquet de.Mer veser kos tosh mteae. <br/> 
        <em>(Names have been modified and are placeholder names)</em> 
        <br/> 
        <br/>
        Shortly after quitting on Kisou, because his brother had no more interest in helping,
        Weston moved on too creating a &quot;polymorphic&quot; language with heavy loanwords from Greenlandic.
        This language was designed in the way that to write a sentance you would combine suffixes and 
        prefixes. Ex. Jtarluchaa Jt-arlu-chaa = I am bad.
        <br/> 
        <br/> 
        <em>  - A phrase in Kuosoian</em><br/>
        Til-yeccJtquatarpervusilaqjtnaqoschk
        <br/> 
        <br/>
        After creating Kuosoian Weston spent time learning Yiddish and eventually decided creating
        a final conlang. The conlang was called Garlandic and used loanwords from Cornish, English, 
        and <a href="https://en.wikipedia.org/wiki/V%C3%A4rmland_County" class="svelte-1c7y9b1">Varmlandic</a>. This conlang remains unfinished currently.
        <br/> 
        <br/> 
        <em>  - Phrases in Garlandic</em><br/>
        Hastum ré a dama iin a man? Ay fursta nisht iin ees furstem nisht! Studéa ú uft Garlandik?
        <br/> 
        <h1 class="svelte-1c7y9b1"><src class="svelte-1c7y9b1">Sources</src></h1>
        1.<a href="https://www.youtube.com/watch?v=9JmZkP7XZm4" class="svelte-1c7y9b1">^</a> Antvenom (2017). <a href="https://www.youtube.com/watch?v=9JmZkP7XZm4" class="svelte-1c7y9b1">MINECRAFT on a $10 COMPUTER?!</a>. Retrieved 2023-05-24.
        <br/>
        2.<a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">^</a> Snow, Weston (2023). <a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">classicmc-studios.github.io</a>. Retrieved 2023-05-24.
        <br/> 
        <br/>`,g(t,"align","center"),g(t,"class","svelte-1c7y9b1"),g(i,"align","center"),g(i,"class","svelte-1c7y9b1"),g(r,"class","mobile svelte-1c7y9b1")},m(c,d){h(c,t,d),h(c,s,d),h(c,i,d),h(c,n,d),h(c,a,d),h(c,r,d)},d(c){c&&u(t),c&&u(s),c&&u(i),c&&u(n),c&&u(a),c&&u(r)}}}function Q(e){let t,s,i,n,a,r,c,d,l,p,m;return{c(){t=b("articleExtra"),t.innerHTML='<p align="center" class="svelte-1c7y9b1">This article may be biased <br/> Discretion is advised</p>',s=v(),i=b("top"),i.innerHTML=`<em>The Weston Files</em> 
  `,n=b("br"),a=v(),r=b("topSub"),r.innerHTML="The <b>Wikipedia</b> for <em>Nerds</em>",c=v(),d=b("br"),l=b("br"),p=v(),m=b("main"),m.innerHTML=`<h1 class="svelte-1c7y9b1">Weston Snow</h1> 
    <p align="right" class="svelte-1c7y9b1"><img src="band.jpg" class="imgr bc-border svelte-1c7y9b1"/></p> 
    
    <p class="svelte-1c7y9b1">Weston Snow also known as וועסטון שניי is a student currently attending a secondary school in 
      the United States of America known for language learning, conservative leaning politics, and 
      web development. Born in the early 2,000s in a suburban community Weston Snow was raised a
      <a href="https://en.wikipedia.org/wiki/Mormons" class="svelte-1c7y9b1">Mormon</a> and still continuing in the religion to the current day.</p> 
    
    <h1 class="fix svelte-1c7y9b1">Life in the Mormon religion</h1> 
    <p class="svelte-1c7y9b1">Both parents, as Mormons from Utah and Seatle respectively, were raised in the religion and
      Rasied both Weston and his siblings in the religion of <a href="ttps://en.hwikipedia.org/wiki/Mormonism" class="svelte-1c7y9b1">Mormonism</a> and all siblings still 
      practice the religion currently. Weston progressed through primary and early sunday school,
      classes, the deacon, teacher, and currently in the preists quorum.</p> 
    
    <h1 class="fix svelte-1c7y9b1">Web development</h1> 
    <p class="svelte-1c7y9b1">Starting with <a href="https://en.wikipedia.org/wiki/Khan_Academy" class="svelte-1c7y9b1">khan academy</a> in the 7th grade, Weston progressed coding throughout many different
      languages and engines. When begininning with khan academy Weston took only the JS game 
      development course with only a minimal use of other courses on khan academy such as the HTML
      course. With minimal time put off for coding at that point Weston&#39;s coding progressed very 
      little. Eventually learning about the Minecraft <a href="https://en.wikipedia.org/wiki/Raspberry_Pi" class="svelte-1c7y9b1">raspberry pi</a> from a video posted on Youtube
      by, Antvenom, Weston ordered a raspberry pi zero. <a href="https://www.youtube.com/watch?v=9JmZkP7XZm4" class="svelte-1c7y9b1">[1]</a> After learning <a href="https://en.wikipedia.org/wiki/JavaScript" class="svelte-1c7y9b1">Javascript</a> with normal
      HTML Weston created multiple projects as listed below.
      <br/> 
      <br/>
      • Project Darkness <a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">[2]</a><br/>
      • The last leaf <a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">[2]</a><br/>
      • Untitled fish game <a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">[2]</a><br/>
      • Rock Simulator 2022 <a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">[2]</a> 
      <br/> 
      <br/>
      Other projects not listed in there may include &quot;A final phone call&quot; made in wick editor and
      others. It is worth noting that all listed projects above 
      (excluding Untitled fish game, and Rock Simulator) are cancelled or unfinished. Eventually
      moving on to HTML as a primary coding language Weston left game development up untill now.
      Originally starting in unmodified HTML Weston tried multiple Javascript frameworks including,
      <a href="https://en.wikipedia.org/wiki/React_(software)" class="svelte-1c7y9b1">React</a>, Astro, and <a href="https://en.wikipedia.org/wiki/Svelte" class="svelte-1c7y9b1">Svelte</a>. Weston is currently coding mostly in Svelte for recent projects. [...] 
      <br/> 
      <br/>
      One of the most notable projects Weston made in Svelte was Guyot. Guyot was an orginization 
      created to fix the blocking of emulation in the American school system. Guyot has 2 members 
      with many other helpers who collaborated on the project. Guyot has created the projects 
      listed below.
      <br/> 
      <br/>
      • GuyotJS <em>emulation</em><br/>
      • The Weston Files<br/>
      • Two recreations of Tusky Time
      <br/> 
      <br/>
      Other projects created by Weston include, MossJS a minimalist game engine, PlutoCSS a css 
      mini design framework for both CSS and <a href="https://en.wikipedia.org/wiki/React_Native" class="svelte-1c7y9b1">ReactNative</a>.</p> 
    <h1 class="svelte-1c7y9b1">Language learning and creation</h1>
    Weston started learning French in the 7th grade leading him towards furthering his language goals.
    Weston continued learning French starting from homeschool (only in 7th grade) into French in 
    secondary and primary school. Weston, after learning about <a href="https://en.wikipedia.org/wiki/Duolingo" class="svelte-1c7y9b1">Duolingo</a>, decided on learning the
    language of Norwegian almost completly on Duolingo. Weston continued learning Norwegian until
    late 2022 in which he switched over too Yiddish for around 2 months. Throughout this time
    Weston picked up on basic conversation skills in languages such as German(Deutsch). Currently Weston
    is learning Dutch(Nederlands) in preperation to visit Belgium.
    <br/> 
    <br/>
    Weston begin constructing <a href="https://en.wikipedia.org/wiki/Constructed_language" class="svelte-1c7y9b1">conlangs</a> in 2021. Weston, along with his brother, constructed Kisou 
    A <a href="https://en.wikipedia.org/wiki/Constructed_language" class="svelte-1c7y9b1">conlang</a> with english derived grammar and heavy use of loanwords from a collection of sources
    including, English, French, and Norwegian.
    <br/> 
    <br/> 
    <em> - Phrase in Kisou<br/></em>
    Ki! Be tu Weston. Be tu gry. Be wer 5 tos mer fom. Mer kes sautee Valom ond Shema. Be wer 
    1 es er be kah wer veser.Be feair vou ender flacebowl er be kuh feair activitay.  
    Mer es sautea Dayshel. Be feair mer es. Mer veser sautea Lilly. Lilly feairs vou ender 
    roquet de.Mer veser kos tosh mteae. <br/> 
    <em>(Names have been modified and are placeholder names)</em> 
    <br/> 
    <br/>
    Shortly after quitting on Kisou, because his brother had no more interest in helping,
    Weston moved on too creating a &quot;polymorphic&quot; language with heavy loanwords from Greenlandic.
    This language was designed in the way that to write a sentance you would combine suffixes and 
    prefixes. Ex. Jtarluchaa Jt-arlu-chaa = I am bad.
    <br/> 
    <br/> 
    <em>  - A phrase in Kuosoian</em><br/>
    Til-yeccJtquatarpervusilaqjtnaqoschk
    <br/> 
    <br/>
    After creating Kuosoian Weston spent time learning Yiddish and eventually decided creating
    a final conlang. The conlang was called Garlandic and used loanwords from Cornish, English, 
    and <a href="https://en.wikipedia.org/wiki/V%C3%A4rmland_County" class="svelte-1c7y9b1">Varmlandic</a>. This conlang remains unfinished currently.
    <br/> 
    <br/> 
    <em>  - Phrases in Garlandic</em><br/>
    Hastum ré a dama iin a man? Ay fursta nisht iin ees furstem nisht! Studéa ú uft Garlandik?
    <br/> 
    <h1 class="svelte-1c7y9b1"><src class="svelte-1c7y9b1">Sources</src></h1>
    1.<a href="https://www.youtube.com/watch?v=9JmZkP7XZm4" class="svelte-1c7y9b1">^</a> Antvenom (2017). <a href="https://www.youtube.com/watch?v=9JmZkP7XZm4" class="svelte-1c7y9b1">MINECRAFT on a $10 COMPUTER?!</a>. Retrieved 2023-05-24.
    <br/>
    2.<a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">^</a> Snow, Weston (2023). <a href="https://classicmc-studios.github.io/" class="svelte-1c7y9b1">classicmc-studios.github.io</a>. Retrieved 2023-05-24.
    <br/> 
    <br/>`,g(t,"class","svelte-1c7y9b1"),g(i,"class","svelte-1c7y9b1"),g(r,"class","svelte-1c7y9b1"),g(m,"class","svelte-1c7y9b1")},m(o,f){h(o,t,f),h(o,s,f),h(o,i,f),h(o,n,f),h(o,a,f),h(o,r,f),h(o,c,f),h(o,d,f),h(o,l,f),h(o,p,f),h(o,m,f)},d(o){o&&u(t),o&&u(s),o&&u(i),o&&u(n),o&&u(a),o&&u(r),o&&u(c),o&&u(d),o&&u(l),o&&u(p),o&&u(m)}}}function ee(e){let t;function s(a,r){return a[0]?z:Q}let i=s(e),n=i(e);return{c(){n.c(),t=B()},m(a,r){n.m(a,r),h(a,t,r)},p(a,[r]){i!==(i=s(a))&&(n.d(1),n=i(a),n&&(n.c(),n.m(t.parentNode,t)))},i:W,o:W,d(a){n.d(a),a&&u(t)}}}function te(e,t,s){let i=!1;return window.innerWidth<window.innerHeight&&(i=!0),[i]}class se extends Y{constructor(t){super(),X(this,t,te,ee,C,{})}}new se({target:document.getElementById("app")});
