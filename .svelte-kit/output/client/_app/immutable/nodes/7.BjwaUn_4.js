import{p as R,t as y,e as ie,a as u,s as v,c as ve}from"../chunks/Cp7EwV3K.js";import{i as V}from"../chunks/C6gcHL8Z.js";import{R as X,W as t,V as e,S as M,d as o,_ as W,a8 as ne,X as a,Y as me,a1 as pe,a0 as Y,T as E,aa as ce,ab as de,a9 as N,a5 as _e}from"../chunks/BbjLgv-f.js";import{i as H}from"../chunks/Nn1O9p7-.js";import{r as z,a as ue,s as fe,b as B}from"../chunks/DtMnDJjb.js";import{a as ge,e as be}from"../chunks/D9383O2b.js";import{b as xe}from"../chunks/DK56ITja.js";import{b as he,M as ye,C as $e,T as we}from"../chunks/l17r96g0.js";import{g as De}from"../chunks/BmfEcAX3.js";const Te=async({params:$,fetch:c})=>{const n=$.imdbID;return{movie:await(await c(`https://www.omdbapi.com/?i=${n}&apikey=4b24ca2c`)).json()}},Ne=Object.freeze(Object.defineProperty({__proto__:null,load:Te},Symbol.toStringTag,{value:"Module"}));var Pe=y('<small class="svelte-13oxm5n"> </small>'),Ie=y('<div class="container svelte-13oxm5n"><form method="POST" action="?/log" class="svelte-13oxm5n"><h2 class="svelte-13oxm5n">Log Your Movie</h2> <div class="form-item svelte-13oxm5n"><label for="status" class="svelte-13oxm5n">Status</label> <select id="status" name="status" required class="svelte-13oxm5n"><option class="svelte-13oxm5n">Watching</option><option class="svelte-13oxm5n">Completed</option><option class="svelte-13oxm5n">Dropped</option><option class="svelte-13oxm5n">Plan to Watch</option></select></div> <div class="form-item svelte-13oxm5n"><label for="rating" class="svelte-13oxm5n">Rating</label> <input type="number" id="rating" name="rating" min="1" max="10" placeholder="Rate from 1 to 10" required> <!></div> <input type="hidden" name="imdbID" class="svelte-13oxm5n"> <button type="submit" class="submit-button svelte-13oxm5n">Log Movie</button></form></div>');function Me($,c){X(c,!1);let n=R(c,"form",8),s=R(c,"movie",8),f=W("watching"),w=W("");V();var g=Ie(),b=t(g),D=e(t(b),2),T=e(t(D),2);M(()=>{o(f),ne(()=>{})});var i=t(T);i.value=(i.__value="watching")==null?"":"watching";var m=e(i);m.value=(m.__value="completed")==null?"":"completed";var p=e(m);p.value=(p.__value="dropped")==null?"":"dropped";var P=e(p);P.value=(P.__value="plan-to-watch")==null?"":"plan-to-watch",a(T),a(D);var d=e(D,2),_=e(t(d),2);z(_);var I=e(_,2);{var L=r=>{var l=Pe(),S=t(l,!0);a(l),M(()=>{var h;return v(S,(h=n())==null?void 0:h.message)}),u(r,l)};H(I,r=>{var l;(l=n())!=null&&l.error&&r(L)})}a(d);var x=e(d,2);z(x),me(2),a(b),ge(b,r=>{var l;return(l=be)==null?void 0:l(r)}),pe(()=>ie("submit",b,()=>De("/"))),a(g),M(()=>{var r;ue(_,1,(r=n())!=null&&r.error?"field-error":"","svelte-13oxm5n"),fe(x,s().imdbID)}),he(T,()=>o(f),r=>Y(f,r)),xe(_,()=>o(w),r=>Y(w,r)),u($,g),E()}var Re=y('<button class="svelte-196vv6l">📖 Log</button>'),Le=y("<!> <!>",1),Se=y('<div class="movie-container svelte-196vv6l"><img class="movie-poster svelte-196vv6l"> <div class="movie-details svelte-196vv6l"><h1 class="svelte-196vv6l"> <span class="svelte-196vv6l"> </span></h1> <p class="genre svelte-196vv6l"><strong>Genre:</strong> </p> <p><strong>Type:</strong> </p> <p><strong>Director:</strong> </p> <p><strong>Actors:</strong> </p> <p><strong>Released:</strong> </p> <p><strong>Language:</strong> </p> <p><strong>IMDB Rating:</strong> </p> <p class="plot svelte-196vv6l"> </p> <div class="actions svelte-196vv6l"><!></div></div></div>'),je=y('<div class="no-movies">No movie found</div>');function ze($,c){X(c,!1);let n=R(c,"data",8),s=W(n().movie),f=R(c,"form",8);async function w(i){const p=await fetch(`https://www.omdbapi.com/?i=${i}&apikey=4b24ca2c`);if(!p.ok){console.error("Failed to fetch movie data");return}Y(s,await p.json())}ce(()=>_e(n()),()=>{n().movie.imdbID&&w(n().movie.imdbID)}),de(),V();var g=ve(),b=N(g);{var D=i=>{var m=Se(),p=t(m),P=e(p,2),d=t(P),_=t(d),I=e(_),L=t(I);a(I),a(d);var x=e(d,2),r=e(t(x));a(x);var l=e(x,2),S=e(t(l));a(l);var h=e(l,2),J=e(t(h));a(h);var j=e(h,2),Q=e(t(j));a(j);var k=e(j,2),U=e(t(k));a(k);var K=e(k,2),Z=e(t(K));a(K);var A=e(K,2),ee=e(t(A));a(A);var C=e(A,2),te=t(C,!0);a(C);var q=e(C,2),ae=t(q);ye(ae,{basic:!0,small:!0,children:(se,ke)=>{var F=Le(),G=N(F);$e(G,{class:"modal-content",children:(O,re)=>{Me(O,{get movie(){return o(s)},get form(){return f()}})},$$slots:{default:!0}});var oe=e(G,2);we(oe,{children:(O,re)=>{var le=Re();u(O,le)},$$slots:{default:!0}}),u(se,F)},$$slots:{default:!0}}),a(q),a(P),a(m),M(()=>{B(p,"src",o(s).Poster),B(p,"alt",o(s).Title),v(_,`${o(s).Title??""} `),v(L,`(${o(s).Year??""})`),v(r,` ${o(s).Genre??""}`),v(S,` ${o(s).Type??""}`),v(J,` ${o(s).Director??""}`),v(Q,` ${o(s).Actors??""}`),v(U,` ${o(s).Released??""}`),v(Z,` ${o(s).Language??""}`),v(ee,` ⭐ ${o(s).imdbRating??"N/A"}`),v(te,o(s).Plot)}),u(i,m)},T=i=>{var m=je();u(i,m)};H(b,i=>{o(s)?i(D):i(T,!1)})}u($,g),E()}export{ze as component,Ne as universal};
