(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[10],{460:function(e,n,t){"use strict";var i=t(9),r=t(66),c=(t(0),t(6)),o=t(1),a=["height","width"];n.a=function(e){var n=e.height,t=e.width,s=Object(r.a)(e,a);return Object(o.jsx)(c.f,Object(i.a)({height:n,width:t,style:{borderRadius:"8px",imageRendering:"pixelated"}},s))}},477:function(e,n,t){"use strict";var i,r,c=t(21),o=(t(0),t(6)),a=t(23),s=t.n(a),d=t(152),l=t(190),u=t(40),b=t(228),j=t(8),p=t(151),h=t(460),x=t(1),f=Object(j.e)(o.m)(i||(i=Object(c.a)(["\n  border-radius: 8px;\n  margin: auto;\n  width: 275px;\n\n  "," {\n    width: 290px;\n  }\n  \n  & > div {\n    border-radius: 8px;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs})),m=Object(j.e)(o.n)(r||(r=Object(c.a)(["\n  border-radius: 8px;\n  padding: 8px;\n  margin: 0px;\n"])));n.a=function(e){var n=e.nft,t=e.hasEnded,i=void 0!==t&&t,r=null===n||void 0===n?void 0:n.id,c=null===n||void 0===n?void 0:n.key,a=Object(l.f)(r,c,i),j=a.nftInfos,O=a.isLoading,g=Object(u.b)(),v=j?new s.a(j.value._hex):new s.a(0),w=j?new s.a(j.minValue._hex):new s.a(0);return Object(x.jsx)(f,{className:"cursor-pointer",onClick:function(e){var n="/nft/".concat(c,"/").concat(r);g(Object(b.b)(window.pageYOffset)),e.stopPropagation(),e.ctrlKey||e.metaKey?window.open(n,"_blank"):d.a.push(n)},children:Object(x.jsxs)(m,{children:[Object(x.jsx)(h.a,{src:null===n||void 0===n?void 0:n.url,height:360,width:360,mb:"8px"}),n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(o.B,{justifyContent:"space-between",alignItems:"center",children:[Object(x.jsx)(o.fb,{fontSize:"12px",children:n.collectionName}),Object(x.jsxs)(o.B,{alignItems:"center",children:[Object(x.jsx)("img",{width:16,height:16,src:"/images/".concat(n.rarity,".svg"),alt:n.rarity})," ",Object(x.jsx)(o.fb,{ml:"4px",fontSize:"12px",color:"textSubtle",textTransform:"capitalize",children:n.rarity})]})]}),Object(x.jsxs)(o.B,{my:"6px",justifyContent:"space-between",alignItems:"center",children:[Object(x.jsx)(o.fb,{color:"primary",children:n.name}),Object(x.jsxs)(o.fb,{color:"textSubtle",children:["Rank: ",n.rank]})]})]}),Object(x.jsxs)(o.i,{borderTop:"1px solid",borderTopColor:"cardBorder",pt:"8px",children:[Object(x.jsxs)(o.B,{justifyContent:"space-between",alignItems:"center",mb:"6px",children:[Object(x.jsx)(o.fb,{fontSize:"12px",color:"textSubtle",maxWidth:"120px",ellipsis:!0,title:"Highest Bid",children:"Highest Bid"}),O?Object(x.jsx)(o.ab,{width:"64px",height:"16px",mt:"4px"}):j&&j.hasBid?Object(x.jsx)(p.a,{price:v}):Object(x.jsx)(o.X,{width:"16px",mt:"8px"})]}),Object(x.jsxs)(o.B,{justifyContent:"space-between",alignItems:"center",children:[Object(x.jsx)(o.fb,{fontSize:"12px",color:"textSubtle",maxWidth:"120px",ellipsis:!0,title:"Asking Price",children:"Listing Price"}),O?Object(x.jsx)(o.ab,{width:"64px",height:"16px",mt:"4px"}):j&&j.isForSale?Object(x.jsx)(p.a,{price:w}):Object(x.jsx)(o.X,{width:"16px",mt:"8px"})]})]})]})})}},478:function(e,n,t){"use strict";var i,r=t(21),c=t(8).e.div(i||(i=Object(r.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md}),(function(e){return e.theme.mediaQueries.xl}));n.a=c},485:function(e,n,t){"use strict";var i,r,c,o,a,s,d,l=t(9),u=t(17),b=t(21),j=t(0),p=t(8),h=t(6),x=t(1),f=p.e.div(i||(i=Object(b.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n  box-shadow: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  background: ",";\n  transition: border-radius 0.15s;\n"])),(function(e){return e.theme.shadows.inset}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.colors.input})),m=p.e.div(r||(r=Object(b.a)(["\n  min-width: 200px;\n  height: 0;\n  position: absolute;\n  overflow: hidden;\n  background: ",";\n  z-index: ",";\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  opacity: 0;\n  width: 100%;\n\n  "," {\n    min-width: 100%;\n  }\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.zIndices.dropdown}),(function(e){return e.theme.mediaQueries.sm})),O=p.e.div(c||(c=Object(b.a)(["\n  cursor: pointer;\n  width: ","px;\n  position: relative;\n  background: ",";\n  border-radius: 16px;\n  height: 40px;\n  min-width: 200px;\n  user-select: none;\n\n  "," {\n    min-width: 100%;\n  }\n\n  ","\n\n  svg {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"])),(function(e){return e.width}),(function(e){return e.theme.colors.input}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.isOpen&&Object(p.d)(o||(o=Object(b.a)(["\n      "," {\n        border-bottom: 1px solid ",";\n        box-shadow: ",";\n        border-radius: 16px 16px 0 0;\n      }\n\n      "," {\n        height: auto;\n        transform: scaleY(1);\n        opacity: 1;\n        border: 1px solid ",";\n        border-top-width: 0;\n        border-radius: 0 0 16px 16px;\n        box-shadow: ",";\n      }\n    "])),f,(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.tooltip.boxShadow}),m,(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.tooltip.boxShadow}))})),g=p.e.ul(a||(a=Object(b.a)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: ",";\n"])),(function(e){return e.theme.zIndices.dropdown})),v=p.e.li(s||(s=Object(b.a)(["\n  list-style: none;\n  padding: 8px 16px;\n  &:hover {\n    background: ",";\n  }\n"])),(function(e){return e.theme.colors.inputSecondary})),w=Object(p.e)(h.fb)(d||(d=Object(b.a)(["\n  padding: 8px 16px;\n  background: ",";\n  cursor-pointer: none;\n  opacity: 0.6;\n"])),(function(e){return e.theme.colors.inputSecondary}));n.a=function(e){var n=e.options,t=e.onChange,i=Object(j.useRef)(null),r=Object(j.useRef)(null),c=Object(j.useState)(!1),o=Object(u.a)(c,2),a=o[0],s=o[1],d=Object(j.useState)(0),b=Object(u.a)(d,2),p=b[0],y=b[1],k=Object(j.useState)({width:0,height:0}),S=Object(u.a)(k,2),C=S[0],z=S[1],B=function(e){s(!a),e.stopPropagation()};return Object(j.useEffect)((function(){z({width:r.current.offsetWidth,height:r.current.offsetHeight});var e=function(){s(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),Object(x.jsxs)(O,Object(l.a)(Object(l.a)({isOpen:a,ref:i},C),{},{children:[0!==C.width&&Object(x.jsx)(f,{onClick:B,children:Object(x.jsx)(h.fb,{children:n[p].label})}),Object(x.jsx)(h.c,{color:"text",onClick:B}),Object(x.jsx)(m,{children:Object(x.jsx)(g,{ref:r,children:n.map((function(e,i){return i!==p?e.disabled?Object(x.jsx)(w,{children:e.label},e.label):Object(x.jsx)(v,{onClick:(r=i,function(){y(r),s(!1),t&&t(n[r])}),children:Object(x.jsx)(h.fb,{children:e.label})},e.label):null;var r}))})})]}))}},493:function(e,n,t){"use strict";t.d(n,"b",(function(){return S})),t.d(n,"a",(function(){return C}));var i,r,c,o=t(45),a=t(3),s=t.n(a),d=t(62),l=t(20),u=t(9),b=t(17),j=t(21),p=t(0),h=t(157),x=t(6),f=t(8),m=t(485),O=t(190),g=t(42),v=t(74),w=t(477),y=t(478),k=t(1),S=f.e.div(i||(i=Object(j.a)(["\n  width: 200px;\n  margin-bottom: 1rem;\n\n  > "," {\n    font-size: 12px;\n  }\n\n  "," {\n    margin-right: 1rem;\n  }\n"])),x.fb,(function(e){return e.theme.mediaQueries.sm})),C=f.e.div(r||(r=Object(j.a)(["\n  display: flex;\n  align-items: start;\n  width: 100%;\n  padding: 8px 0px;\n  flex-direction: column;\n  margin-top: 24px;\n\n  "," {\n    flex-direction: row;\n    align-items: center;\n    width: auto;\n    padding: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),z=Object(f.e)(x.j)(c||(c=Object(j.a)(["\n  position: fixed;\n  bottom: 80px;\n  right: 15px;\n  z-index: 100;\n"])));n.c=function(){var e=Object(p.useState)([]),n=Object(b.a)(e,2),t=n[0],i=n[1],r=Object(p.useState)({per_page:24,page:0,order:"id-asc",rarity:null,key:"doggy"}),c=Object(b.a)(r,2),a=c[0],j=c[1],f=Object(p.useState)(!1),B=Object(b.a)(f,2),I=B[0],E=B[1],L=Object(p.useState)(!1),R=Object(b.a)(L,2),Q=R[0],H=R[1],T=Object(h.a)().onFetchNft,F=Object(O.d)("doggy").hasEnded,_=Object(O.d)("airdrop").hasEnded,D=Object(v.b)().vertical;Object(p.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,T(a);case 4:n=e.sent,i((function(e){return[].concat(Object(d.a)(e),Object(d.a)(n))})),H(n.length!==a.per_page);case 7:return e.prev=7,E(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[0,,7,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[a,T]);var M=function(e,n){i([]),j((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(o.a)({page:0},n,e.value))}))};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(C,{children:[Object(k.jsxs)(S,{children:[Object(k.jsx)(x.fb,{children:"Collections"}),Object(k.jsx)(m.a,{options:[{label:"Crypto Dogs",value:"doggy"},{label:"Airdrop",value:"airdrop"}],onChange:function(e){return M(e,"key")}})]}),Object(k.jsxs)(S,{children:[Object(k.jsx)(x.fb,{children:"Sort By"}),Object(k.jsx)(m.a,{options:[{label:"ID: Low to High",value:"id-asc"},{label:"ID: High to Low",value:"id-desc"},{label:"Rank: High to Low",value:"rank-asc"},{label:"Rank: Low to High",value:"rank-desc"}],onChange:function(e){return M(e,"order")}})]}),Object(k.jsxs)(S,{children:[Object(k.jsx)(x.fb,{children:"Rarities"}),Object(k.jsx)(m.a,{options:[{label:"All",value:""},{label:"Legendary",value:"legendary"},{label:"Epic",value:"epic"},{label:"Rare",value:"rare"},{label:"Uncommon",value:"uncommon"},{label:"Common",value:"common"}],onChange:function(e){return M(e,"rarity")}})]})]}),t.length<=0&&!I&&Object(k.jsx)(x.B,{mt:"24px",width:"100%",justifyContent:"center",children:Object(k.jsx)(x.fb,{children:"There is no NFTs for this criteria."})}),Object(k.jsx)(y.a,{children:t.map((function(e){return Object(k.jsx)("div",{children:Object(k.jsx)(w.a,{nft:e,hasEnded:"doggy"===e.key?F:_})},e.name)}))}),Object(k.jsx)(x.B,{width:"100%",justifyContent:"center",children:!Q&&Object(k.jsxs)(x.j,{disabled:I,onClick:function(){j((function(e){return Object(u.a)(Object(u.a)({},e),{},{page:e.page+1})}))},startIcon:I?void 0:Object(k.jsx)(g.i,{width:"24px"}),endIcon:I?Object(k.jsx)(x.e,{spin:!0,color:"currentColor"}):void 0,children:[I?"Loading":"More"," "]})}),t.length>24&&D>800&&Object(k.jsxs)(z,{onClick:function(){return window.scrollTo({top:100,left:100,behavior:"smooth"})},children:["Top ",Object(k.jsx)(x.d,{ml:"4px"})]})]})}},891:function(e,n,t){"use strict";t.r(n);var i,r=t(21),c=(t(0),t(8)),o=t(6),a=t(114),s=t(493),d=t(1),l=c.e.div(i||(i=Object(r.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 0px;\n  padding-bottom: 12px;\n"])),(function(e){return e.theme.colors.textSubtle}));n.default=function(){return Object(d.jsxs)(a.a,{children:[Object(d.jsxs)(l,{children:[Object(d.jsx)(o.D,{as:"h1",scale:"xxl",color:"secondary",children:"Marketplace"}),Object(d.jsx)(o.fb,{children:"Marketplace will be open after Minting Event"})]}),Object(d.jsx)(s.c,{})]})}}}]);