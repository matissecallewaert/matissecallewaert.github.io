import{e as _,i as H,g as z,t as A,j as I,f as k,a as t,s as e,d as j,k as ee,$ as te}from"../chunks/disclose-version.5-ELnYLo.js";import{d as ae,r as se,p as O,c as W,g as oe,a as ie,m as ne,e as re}from"../chunks/runtime.0oZp_sbw.js";import{b as B}from"../chunks/paths.R9-e_b0_.js";import{o as le}from"../chunks/main-client.L_kJZZ8l.js";var ce=j('<div><div class="card-inner svelte-1qbt98b"><div style="margin:-1.5rem -1.5rem 0 -1.5rem"><h3 class="text-xl font-semibold"> </h3> <p class="text-gray-700"> </p></div> <img class="mt-4 rounded-xl"></div></div>');function x(l,s){W(s,!1);let a=ne();ae(()=>{s.colorClass,ie(()=>{re(a,`${s.colorClass.replace("200","300")}`)})});var i=k(l,!0,ce),p=t(i),c=t(p),d=t(c),u=t(d),w=e(e(d)),C=t(w),f=e(e(c)),v,m;se(()=>{H(i,`${z(s.colorClass+" p-6 rounded-xl card")} svelte-1qbt98b`),H(c,`${z(oe(a))} p-3 rounded-t-xl svelte-1qbt98b`),A(u,s.title),A(C,s.description),v!==(v=s.imageUrl)&&I(f,"src",v),m!==(m=s.altText)&&I(f,"alt",m)}),_(l,i),O()}var de=j('<meta name="description" content="Portfolio of Matisse Callewaert">'),ve=j(`<main class="px-8"><section class="mt-6 flex space-x-6 items-center justify-center" style="align-items: stretch"><div class="flex-col"><div class="intro p-8 rounded-xl items-center justify-center svelte-d4b1kn"><h1 class="text-4xl font-bold text-gray-700">Hey, I’m Matisse Callewaert</h1> <p class="mt-4 text-gray-700">I am a software developer based in Belgium, holding a master's degree in Information Technology from the University of Ghent. Throughout my academic journey, I worked at a WaaS company and undertook an internship at a consultancy, gaining valuable practical experience. Driven by a passion for continuous learning and exploration, I thrive on delving into coding projects with my colleagues to unleash our creativity. Outside the world of technology, I find joy in sports and collaborative coding endeavors that allow us to push the boundaries of our imagination.</p> <div class="flex items-center space-x-2 mt-8"><a href="#" class="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 flex items-center transition duration-500 ease-in-out transform hover:scale-105">Contact me</a> <a href="https://github.com/matissecallewaert" target="_blank" rel="noopener noreferrer" class="bg-gray-700 text-white rounded-full flex items-center justify-center h-10 w-10 hover:bg-gray-800 transition duration-500 ease-in-out transform hover:scale-105"><i class="fab fa-github"></i></a> <a href="https://www.linkedin.com/in/matisse-callewaert-a32248269" target="_blank" rel="noopener noreferrer" class="bg-gray-700 text-white rounded-full flex items-center justify-center h-10 w-10 hover:bg-gray-800 transition duration-500 ease-in-out transform hover:scale-105"><i class="fab fa-linkedin-in"></i></a></div></div> <div class="w-auto h-auto mt-8 rounded-xl canvas-wrapper svelte-d4b1kn"><canvas id="myCanvas" class="svelte-d4b1kn"></canvas></div></div> <div><img alt="Matisse smiling, standing next to a river with historical buildings and trees in the background" class="rounded-xl image-class svelte-d4b1kn"></div></section> <section class="mt-10 projects-section"><h3 class="text-3xl font-bold text-gray-700">My Projects</h3> <div class="grid grid-cols-2 gap-6 mt-6"><div class="project-card left"><!></div> <div class="project-card right"><!></div> <div class="project-card left"><!></div> <div class="project-card right"><!></div></div></section></main>`);function fe(l,s){W(s,!1);let a,i=[],p=["github.svg","linux.svg","ml.svg","node.svg","py.svg","react.svg","rust.svg","sql.svg","ts.svg"];function c(){return Promise.all(p.map(n=>new Promise((r,y)=>{let o=new Image;o.onload=()=>r(o),o.onerror=y,o.src=`${B}/${n}`})))}le(()=>{a=document.getElementById("myCanvas");const n=a.getContext("2d");c().then(h=>{i=h,requestAnimationFrame(()=>q(n,i))});const r=30,y=30,o=p.length,J=2*Math.PI/o;let T=0;function q(h,F){h.clearRect(0,0,a.width,a.height);const K=a.width/2,L=a.height/2,U=Math.min(a.width,a.height)/3*2,N=.0045;for(let b=0;b<o;b++){const Q=J*b,g=(T+Q)%(2*Math.PI),V=U*Math.sin(g)/(1+Math.pow(Math.cos(g),2))+K,Z=U*Math.sin(g)*Math.cos(g)/(1+Math.pow(Math.cos(g),2))+L,$=F[b];h.drawImage($,V-r/2,Z-y/2,r,y)}T+=N,requestAnimationFrame(()=>q(h,F))}});var d=k(l,!0,ve);ee(n=>{var r=k(n,!0,de);te.title="Home",_(n,r)});var u=t(d),w=t(u),C=e(e(w)),f=t(C);I(f,"src",`${B}/me.jpg`);var v=e(e(u)),m=t(v),D=e(e(m)),P=t(D),E=t(P),M=e(e(P)),G=t(M),S=e(e(M)),R=t(S),X=e(e(S)),Y=t(X);x(E,{title:"1",description:"PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government.",imageUrl:"https://placehold.co/300x300",altText:"PS Consultancy logo",colorClass:"bg-purple-200"}),x(G,{title:"2",description:"PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government.",imageUrl:"https://placehold.co/300x300",altText:"PS Consultancy logo",colorClass:"bg-orange-200"}),x(R,{title:"3",description:"PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government.",imageUrl:"https://placehold.co/300x300",altText:"PS Consultancy logo",colorClass:"bg-white-200"}),x(Y,{title:"4",description:"PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government.",imageUrl:"https://placehold.co/300x300",altText:"PS Consultancy logo",colorClass:"bg-green-200"}),_(l,d),O()}export{fe as component};