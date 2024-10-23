"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[707],{3912:function(e,t,a){var s=a(1082),l=a(3723),c=a(7294);t.Z=function(e){let{bgColour:t}=e,r="bg-white";return"blue"===t&&(r="bg-light_blue"),c.createElement("div",{className:` ${r} px-12 py-10 lg:hidden `},c.createElement("div",{className:"logo w-32 "},c.createElement(s.Link,{to:"/"},c.createElement(l.S,{src:"../../images/logo/fls_logo_white.svg",alt:"Logo",__imageData:a(610)}))))}},9341:function(e,t,a){var s=a(7294);t.Z=function(e){let{pageColour:t}=e,a="#9fc2e0",l="text-white/60";return"white"==t&&(a="#afb3b8",l="text-black/30"),s.createElement("div",{className:"internal absolute z-10 top-0 right-0 overflow-hidden pointer-events-none"},s.createElement("div",{className:" absolute top-10 right-4 lg:right-20 w-fit text-xl"},s.createElement("p",{className:`${l} conthrax-bold uppercase text-xs lg:text-base`},"13.7781"),s.createElement("p",{className:`${l} conthrax-bold uppercase text-xs lg:text-base`},"100.443412")),s.createElement("svg",{className:"svg-circle-dash absolute"},s.createElement("circle",{id:"svg-circle",stroke:a,className:"svg-circle",cx:"210",cy:"210",r:"200"})))}},8678:function(e,t,a){a(1082);var s=a(3723),l=a(7294),c=a(5331),r=a(3912),i=a(9341),n=a(4062),o=a(1204);t.Z=e=>{let{children:t,title:m}=e;const d=l.useRef();return l.createElement(l.Fragment,null,l.createElement("div",{className:"internal-pages"},l.createElement("div",{className:"absolute w-16 left-0 top-0 z-10"},l.createElement(s.S,{src:"../../images/white-corner.png",alt:"white-corner",__imageData:a(4409)})),l.createElement(i.Z,null),l.createElement(c.h,{bgColour:"blue",footerRef:d}),l.createElement(o.Z,{whiteButton:!0}),l.createElement(r.Z,{bgColour:"blue"}),l.createElement("div",{className:"bg-light_blue pb-12 lg:py-12 lg:pt-32 lg:pl-[200px] xl:pl-[50px]"},l.createElement("main",{className:"container z-30 mx-auto px-12 xl:pr-[8rem] xl:pl-[12rem]"},l.createElement("h1",{className:"text-white text-[24px] lg:text-6xl uppercase mb-12 lg:mb-20 col-span-2"},m),t))),l.createElement(n.Z,{ref:d}))}},3269:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var s=a(7294),l=a(8678),c=a(5785),r=a(1082),i=a(3723),n=a(2051),o=a(1801);var m=e=>{var t,a,l,c;let{project:i}=e;const n=null==i||null===(t=i.featuredImage)||void 0===t||null===(a=t.node.localFile.childrenImageSharp[0].fluid)||void 0===a?void 0:a.src;return s.createElement(r.Link,{to:`/our-work/${null==i?void 0:i.slug}`,className:"col-span-1 mb-10 h-auto our-work__item"},s.createElement("div",{className:"relative h-56 our-work__image",style:{backgroundImage:`url(${n})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}},s.createElement("div",{className:"flex absolute bottom-3 left-3 right-3 z-10 work__title__title-wrapper"},s.createElement("h5",{className:"our-work__title text-green uppercase text-left text-sm lg:text-base "},null==i||null===(l=i.ourWork)||void 0===l?void 0:l.projectName)),s.createElement("div",{className:"overlay"})),s.createElement("div",{className:"image-text flex flex-col items-start"},s.createElement("p",{className:"project-desc text-white text-left text-xs lg:text-base mb-5 lg:mb-0 lg:mt-2"},null==i||null===(c=i.ourWork)||void 0===c?void 0:c.projectDescription)))};n.ZP.use([n.pt]);var d=function(e){let{ourWorkData:t,filter:l,capability:n,industry:d}=e;const p=(0,r.useStaticQuery)("1915445364"),{title:g,description:f}=p.wp.acfOptionsArchives.ourWorkPage;let{0:b,1:u}=(0,s.useState)((0,c.Z)(t.slice(0,9)));(0,s.useEffect)((()=>{u((0,c.Z)(t.slice(0,9)))}),[t]);const{0:w,1:x}=(0,s.useState)(!1),{0:h,1:v}=(0,s.useState)(t.length>9);return(0,s.useEffect)((()=>{if(w&&h){const e=b.length,a=e<t.length?t.slice(e,e+9):[];u([].concat((0,c.Z)(b),(0,c.Z)(a))),x(!1)}}),[w,h]),(0,s.useEffect)((()=>{const e=b.length<t.length;v(e)}),[b]),s.createElement("section",{className:"ourwork-section bg-light_blue relative"},s.createElement("div",{className:""},s.createElement("div",{className:"main-content"},s.createElement("p",{className:"mt-10 mb-4 text-white font-semibold hidden lg:block"},f),s.createElement("div",{className:"hoz-icon select-none hidden lg:block"},s.createElement("p",{className:"text-white mb-7 text-sm"},g),s.createElement(o.t,{slidesPerView:5,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper"},s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-10",src:"../../images/svgs/automotive.svg",alt:"Placeholder",__imageData:a(6127)}),s.createElement("p",{className:"text-white text-[14px] "},"Automotive"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-10",src:"../../images/svgs/power.svg",alt:"Placeholder",__imageData:a(8323)}),s.createElement("p",{className:"text-white text-[14px] "},"Power"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-10",src:"../../images/svgs/components-and-spare-parts.svg",alt:"Placeholder",__imageData:a(9105)}),s.createElement("p",{className:"text-white text-[14px] "},"Components"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-10",src:"../../images/svgs/dangerous-goods.svg",alt:"Placeholder",__imageData:a(5421)}),s.createElement("p",{className:"text-white text-[14px] "},"Dangerous goods"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-10",src:"../../images/svgs/feed-and-food.svg",alt:"Placeholder",__imageData:a(4584)}),s.createElement("p",{className:"text-white text-[14px] "},"Food"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-10",src:"../../images/svgs/consumer-goods.svg",alt:"Placeholder",__imageData:a(5169)}),s.createElement("p",{className:"text-white text-[14px] "},"Consumer",s.createElement("br",null),"goods"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-12",src:"../../images/svgs/infrastructure.svg",alt:"Placeholder",__imageData:a(1722)}),s.createElement("p",{className:"text-white text-[14px] "},"Infrastructure"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-12",src:"../../images/svgs/investment.svg",alt:"Placeholder",__imageData:a(2984)}),s.createElement("p",{className:"text-white text-[14px] "},"Investment"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-12",src:"../../images/svgs/mining.svg",alt:"Placeholder",__imageData:a(1464)}),s.createElement("p",{className:"text-white text-[14px] "},"Mining"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text"},s.createElement(i.S,{className:"w-12",src:"../../images/svgs/oil-and-gas.svg",alt:"Placeholder",__imageData:a(6404)}),s.createElement("p",{className:"text-white text-[14px] "},"Oil and Gas"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-12",src:"../../images/svgs/raw-materials.svg",alt:"Placeholder",__imageData:a(8515)}),s.createElement("p",{className:"text-white text-[14px] "},"Raw Materials"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-12",src:"../../images/svgs/renewable-engergy.svg",alt:"Placeholder",__imageData:a(5468)}),s.createElement("p",{className:"text-white text-[14px] "},"Energy"))),s.createElement(o.o,null,s.createElement("div",{className:"flex flex-col items-center text-center"},s.createElement(i.S,{className:"w-12",src:"../../images/svgs/steel.svg",alt:"Placeholder",__imageData:a(2727)}),s.createElement("p",{className:"text-white text-[14px] "},"Steel"))))),s.createElement("div",{className:"filter-group lg:flex mb-10 mt-9"},s.createElement("select",{className:" w-full lg:w-1/2 mb-4 lg:mb-0 mr-8 p-2 bg-light_blue text-white uppercase text-base border cursor-pointer",onChange:l,name:"capabilties"},s.createElement("option",{className:"bg-light_blue ",value:"all"},"All Capabilities"),null==n?void 0:n.map(((e,t)=>s.createElement("option",{className:"bg-light_blue ",value:e.name,key:t},e.name)))),s.createElement("select",{className:"w-full lg:w-1/2 p-2 bg-light_blue text-white uppercase border cursor-pointer",onChange:l,name:"industries"},s.createElement("option",{className:"bg-light_blue ",value:"all"},"All Industries"),null==d?void 0:d.map(((e,t)=>s.createElement("option",{className:"bg-light_blue ",value:e.name,key:t},e.name))))),s.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-16"},b.map(((e,t)=>s.createElement(m,{key:t,project:e})))),h?s.createElement("div",{className:"text-white text-center w-fit mx-auto"},s.createElement("button",{className:"text-black bg-white p-3 rounded hover:text-light_blue transition-colors\t",onClick:()=>{x(!0)}},"Load More...")):0===t.length?s.createElement("p",{className:"text-center text-white"},"No results"):s.createElement("p",{className:"text-center text-white"},"No more results"))))},p=a(8183);var g=e=>{let{data:t,pageContext:a}=e;const[c,r]=s.useState({capabilties:a.capability,industries:a.industries});let i=t.allWpOurWork.nodes;let n=null==i?void 0:i.filter((e=>"all"===c.capabilties&&"all"===c.industries?e:"all"===c.capabilties?e.industries.nodes.some((e=>e.name===c.industries)):"all"===c.industries?e.capabilities.nodes.some((e=>e.name===c.capabilties)):e.capabilities.nodes.some((e=>e.name===c.capabilties))&&e.industries.nodes.some((e=>e.name===c.industries))));return s.createElement(s.Fragment,null,s.createElement(l.Z,{title:"Our Work"},s.createElement(p.Z,{title:"Our work"}),s.createElement(d,{ourWorkData:n,capability:t.allWpCapability.nodes,industry:t.allWpIndustry.nodes,filter:e=>{const{value:t,name:a}=e.target;r({...c,[a]:t})}})))}},4409:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/2cd45beef60a072fdf2aeda996af9269/c21e0/white-corner.png","srcSet":"/static/2cd45beef60a072fdf2aeda996af9269/c21e0/white-corner.png 413w","sizes":"(min-width: 413px) 413px, 100vw"},"sources":[{"srcSet":"/static/2cd45beef60a072fdf2aeda996af9269/032b1/white-corner.webp 413w","type":"image/webp","sizes":"(min-width: 413px) 413px, 100vw"}]},"width":413,"height":413}')},8515:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/8a6047c6322e26ea9cb4dc293e33daba/41f25/raw-materials.svg","srcSet":"/static/8a6047c6322e26ea9cb4dc293e33daba/41f25/raw-materials.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/8a6047c6322e26ea9cb4dc293e33daba/d16d0/raw-materials.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},6404:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/618135fe73b3fc092ff0ab0d33b39488/41f25/oil-and-gas.svg","srcSet":"/static/618135fe73b3fc092ff0ab0d33b39488/41f25/oil-and-gas.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/618135fe73b3fc092ff0ab0d33b39488/d16d0/oil-and-gas.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},1464:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/c93fb69928a0a4587646e881adc9628f/41f25/mining.svg","srcSet":"/static/c93fb69928a0a4587646e881adc9628f/41f25/mining.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/c93fb69928a0a4587646e881adc9628f/d16d0/mining.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},8323:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/ddf6a766198cd39ce58285e9ac0823a7/41f25/power.svg","srcSet":"/static/ddf6a766198cd39ce58285e9ac0823a7/41f25/power.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/ddf6a766198cd39ce58285e9ac0823a7/d16d0/power.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},6127:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/4bbcc7a2fa2451d8fd21da77e14bd929/41f25/automotive.svg","srcSet":"/static/4bbcc7a2fa2451d8fd21da77e14bd929/41f25/automotive.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/4bbcc7a2fa2451d8fd21da77e14bd929/d16d0/automotive.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},4584:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/d564b21ad9fb7076263c571b534bcbd4/41f25/feed-and-food.svg","srcSet":"/static/d564b21ad9fb7076263c571b534bcbd4/41f25/feed-and-food.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/d564b21ad9fb7076263c571b534bcbd4/d16d0/feed-and-food.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},2984:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/4466a2a19b148af66a2a5f51b335498c/41f25/investment.svg","srcSet":"/static/4466a2a19b148af66a2a5f51b335498c/41f25/investment.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/4466a2a19b148af66a2a5f51b335498c/d16d0/investment.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},2727:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/c1370f0ff194097d3638f35a0ad95fcf/41f25/steel.svg","srcSet":"/static/c1370f0ff194097d3638f35a0ad95fcf/41f25/steel.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/c1370f0ff194097d3638f35a0ad95fcf/d16d0/steel.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},9105:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/00e764631f5d61b7300d9baff6fdaf25/41f25/components-and-spare-parts.svg","srcSet":"/static/00e764631f5d61b7300d9baff6fdaf25/41f25/components-and-spare-parts.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/00e764631f5d61b7300d9baff6fdaf25/d16d0/components-and-spare-parts.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},5421:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/2ea60febe43a1afdf59f615651939d3e/41f25/dangerous-goods.svg","srcSet":"/static/2ea60febe43a1afdf59f615651939d3e/41f25/dangerous-goods.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/2ea60febe43a1afdf59f615651939d3e/d16d0/dangerous-goods.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},5468:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/ee0b161b08e06fbba6939404fa8dc866/41f25/renewable-engergy.svg","srcSet":"/static/ee0b161b08e06fbba6939404fa8dc866/41f25/renewable-engergy.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/ee0b161b08e06fbba6939404fa8dc866/d16d0/renewable-engergy.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},1722:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/d5a5494798f781f826deb8047512125d/41f25/infrastructure.svg","srcSet":"/static/d5a5494798f781f826deb8047512125d/41f25/infrastructure.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/d5a5494798f781f826deb8047512125d/d16d0/infrastructure.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')},5169:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/a67beac8eee4e7381dd90b096c285886/41f25/consumer-goods.svg","srcSet":"/static/a67beac8eee4e7381dd90b096c285886/41f25/consumer-goods.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/a67beac8eee4e7381dd90b096c285886/d16d0/consumer-goods.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')}}]);
//# sourceMappingURL=component---src-templates-our-work-js-59f147f94f4d3f258ee4.js.map