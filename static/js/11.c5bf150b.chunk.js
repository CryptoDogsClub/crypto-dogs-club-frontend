(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[11],{460:function(e,t,n){"use strict";var i=n(9),r=n(66),c=(n(0),n(6)),s=n(1),a=["height","width"];t.a=function(e){var t=e.height,n=e.width,l=Object(r.a)(e,a);return Object(s.jsx)(c.f,Object(i.a)({height:t,width:n,style:{borderRadius:"8px",imageRendering:"pixelated"}},l))}},477:function(e,t,n){"use strict";var i,r,c=n(21),s=(n(0),n(6)),a=n(23),l=n.n(a),o=n(152),d=n(190),j=n(40),x=n(228),b=n(8),p=n(151),h=n(460),m=n(1),u=Object(b.e)(s.m)(i||(i=Object(c.a)(["\n  border-radius: 8px;\n  margin: auto;\n  width: 275px;\n\n  "," {\n    width: 290px;\n  }\n  \n  & > div {\n    border-radius: 8px;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs})),f=Object(b.e)(s.n)(r||(r=Object(c.a)(["\n  border-radius: 8px;\n  padding: 8px;\n  margin: 0px;\n"])));t.a=function(e){var t=e.nft,n=e.hasEnded,i=void 0!==n&&n,r=null===t||void 0===t?void 0:t.id,c=null===t||void 0===t?void 0:t.key,a=Object(d.f)(r,c,i),b=a.nftInfos,O=a.isLoading,g=Object(j.b)(),w=b?new l.a(b.value._hex):new l.a(0),y=b?new l.a(b.minValue._hex):new l.a(0);return Object(m.jsx)(u,{className:"cursor-pointer",onClick:function(e){var t="/nft/".concat(c,"/").concat(r);g(Object(x.b)(window.pageYOffset)),e.stopPropagation(),e.ctrlKey||e.metaKey?window.open(t,"_blank"):o.a.push(t)},children:Object(m.jsxs)(f,{children:[Object(m.jsx)(h.a,{src:null===t||void 0===t?void 0:t.url,height:360,width:360,mb:"8px"}),t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(s.B,{justifyContent:"space-between",alignItems:"center",children:[Object(m.jsx)(s.fb,{fontSize:"12px",children:t.collectionName}),Object(m.jsxs)(s.B,{alignItems:"center",children:[Object(m.jsx)("img",{width:16,height:16,src:"/images/".concat(t.rarity,".svg"),alt:t.rarity})," ",Object(m.jsx)(s.fb,{ml:"4px",fontSize:"12px",color:"textSubtle",textTransform:"capitalize",children:t.rarity})]})]}),Object(m.jsxs)(s.B,{my:"6px",justifyContent:"space-between",alignItems:"center",children:[Object(m.jsx)(s.fb,{color:"primary",children:t.name}),Object(m.jsxs)(s.fb,{color:"textSubtle",children:["Rank: ",t.rank]})]})]}),Object(m.jsxs)(s.i,{borderTop:"1px solid",borderTopColor:"cardBorder",pt:"8px",children:[Object(m.jsxs)(s.B,{justifyContent:"space-between",alignItems:"center",mb:"6px",children:[Object(m.jsx)(s.fb,{fontSize:"12px",color:"textSubtle",maxWidth:"120px",ellipsis:!0,title:"Highest Bid",children:"Highest Bid"}),O?Object(m.jsx)(s.ab,{width:"64px",height:"16px",mt:"4px"}):b&&b.hasBid?Object(m.jsx)(p.a,{price:w}):Object(m.jsx)(s.X,{width:"16px",mt:"8px"})]}),Object(m.jsxs)(s.B,{justifyContent:"space-between",alignItems:"center",children:[Object(m.jsx)(s.fb,{fontSize:"12px",color:"textSubtle",maxWidth:"120px",ellipsis:!0,title:"Asking Price",children:"Listing Price"}),O?Object(m.jsx)(s.ab,{width:"64px",height:"16px",mt:"4px"}):b&&b.isForSale?Object(m.jsx)(p.a,{price:y}):Object(m.jsx)(s.X,{width:"16px",mt:"8px"})]})]})]})})}},478:function(e,t,n){"use strict";var i,r=n(21),c=n(8).e.div(i||(i=Object(r.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md}),(function(e){return e.theme.mediaQueries.xl}));t.a=c},896:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var i,r,c,s,a,l=n(3),o=n.n(l),d=n(20),j=n(17),x=n(21),b=n(0),p=n(39),h=n(6),m=n(8),u=n(114),f=n(79),O=n(74),g=n(190),w=n(478),y=n(477),v=m.e.div(i||(i=Object(x.a)(["\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid ",";\n  border-bottom: 8px solid ",";\n  width: 75px;\n  height: 75px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  @-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),B=n(115),k=n(621),S=n.n(k),I=n(254),C=n(223),D=n(231),z=n(73),A=n(32),T=n(77),N=n(219),E=n(4),M=n(893),Q=n(1),F=m.e.div(r||(r=Object(x.a)(["\n  margin-bottom: 16px;\n  min-width: 320px;\n"]))),L=function(e){var t,n=e.transactions,i=e.onDismiss,r=Object(A.a)().chainId,c=Object(g.b)(n),s=c.isActive,a=c.isLoading,l=s.length>0?n.filter((function(e,t){return s[t]})):[];function o(e){var t=new Date(e);return e?Object(N.default)(t,"do MMM y"):"-"}return Object(Q.jsx)(h.N,{title:"Active Bids",onDismiss:i,children:Object(Q.jsx)(F,{children:a?Object(Q.jsx)(h.B,{flexDirection:"column",alignItems:"center",children:n.map((function(e){return Object(Q.jsx)(h.ab,{mt:"6px",width:"240px",height:"40px"},e.hash)}))}):(t=l,0===t.length?Object(Q.jsx)(h.fb,{textAlign:"center",my:"12px",children:"There is no active bids."}):Object(Q.jsx)(h.B,{flexDirection:"column",children:t.map((function(e){var t=e.summary.split(" ")[2].slice(1),n="/nft/".concat(e.key,"/").concat(t);return Object(Q.jsxs)(h.B,{my:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(Q.jsx)(h.J,{href:Object(T.a)(e.hash,"transaction",null!==r&&void 0!==r?r:E.a.MAINNET),children:e.summary}),Object(Q.jsx)(h.fb,{mx:"6px",children:o(e.addedTime)}),Object(Q.jsx)(h.J,{mx:"4px",target:"_blank",href:n,children:Object(Q.jsx)(h.j,{scale:"sm",children:Object(Q.jsx)(M.a,{width:"24px"})})})]},e.hash+e.addedTime)}))}))})})},P=m.e.div(c||(c=Object(x.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 12px;\n"])),(function(e){return e.theme.colors.textSubtle})),R=Object(m.e)(h.B)(s||(s=Object(x.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 16px;\n  padding: 0.75rem;\n"])),(function(e){return e.theme.colors.dropdown})),W=m.e.div(a||(a=Object(x.a)(["\n  display: grid;\n  grid-gap: 12px;\n  grid-template-columns: repeat(2, 1fr);\n  padding-bottom: 12px;\n  padding-top: 12px;\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),J=function(){var e=Object(b.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(b.useRef)(),c=Object(p.c)().account,s=Object(O.a)().width,a=Object(g.e)("airdrop"),l=a.nfts,x=a.isLoading,m=Object(C.i)("doggy").onWithdraw,k=Object(C.i)("airdrop").onWithdraw,A=Object(g.d)("doggy").hasEnded,T=Object(g.d)("airdrop").hasEnded,N=Object(z.a)(),E=s<=350,M=s<600,F=s<1124,J=Object(g.h)().withdrawValue,Y=J.nft.plus(J.airdrop),_=M?"column":"row",H=M?"center":"space-evenly",K=M?"0px":"16px",V=M?"16px":"0px",X=F?"0px":"16px",U=F?"16px":"0px",q=M?"100%":null,G=Object(b.useMemo)((function(){return Object.values(N).sort((function(e,t){return t.addedTime-e.addedTime}))}),[N]).filter((function(e){return e&&e.receipt&&e.key&&e.summary&&"Bid"===e.summary.split(" ")[0]})),Z=Object(h.ob)(Object(Q.jsx)(L,{transactions:G})),$=Object(j.a)(Z,1)[0];Object(b.useEffect)((function(){if(c){var e=S()(104,parseInt(c.substring(2,10),16));1===r.current.childElementCount?r.current.replaceChild(e,r.current.childNodes[0]):r.current.appendChild(e)}}),[c]);var ee=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i(!0),!J.nft.gt(0)){e.next=5;break}return e.next=5,m();case 5:if(!J.airdrop.gt(0)){e.next=8;break}return e.next=8,k();case 8:return e.prev=8,i(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[0,,8,11]])})));return function(){return e.apply(this,arguments)}}(),te=function(){return Object(Q.jsx)(h.m,{ml:X,mt:U,children:Object(Q.jsxs)(h.n,{children:[Object(Q.jsx)(h.D,{scale:"md",mb:"16px",color:"secondary",children:"Your Nfts"}),Object(Q.jsxs)(W,{children:[Object(Q.jsxs)(R,{alignSelf:"center",flexDirection:"column",children:[Object(Q.jsx)(h.fb,{fontSize:"12px",textAlign:"center",children:"Common"}),x?Object(Q.jsx)(h.ab,{width:"48px",height:"12px"}):Object(Q.jsxs)(h.B,{alignItems:"center",children:[Object(Q.jsx)("img",{width:16,height:16,src:"/images/common.svg",alt:"common"}),Object(Q.jsx)(h.fb,{ml:"4px",bold:!0,fontSize:"12px",children:l.filter((function(e){return"common"===e.rarity})).length})]})]}),Object(Q.jsxs)(R,{alignSelf:"center",flexDirection:"column",children:[Object(Q.jsx)(h.fb,{fontSize:"12px",textAlign:"center",children:"Uncommon"}),x?Object(Q.jsx)(h.ab,{width:"48px",height:"12px"}):Object(Q.jsxs)(h.B,{alignItems:"center",children:[Object(Q.jsx)("img",{width:16,height:16,src:"/images/uncommon.svg",alt:"uncommon"}),Object(Q.jsx)(h.fb,{ml:"4px",bold:!0,fontSize:"12px",children:l.filter((function(e){return"uncommon"===e.rarity})).length})]})]}),Object(Q.jsxs)(R,{alignSelf:"center",flexDirection:"column",children:[Object(Q.jsx)(h.fb,{fontSize:"12px",textAlign:"center",children:"Rare"}),x?Object(Q.jsx)(h.ab,{width:"48px",height:"12px"}):Object(Q.jsxs)(h.B,{alignItems:"center",children:[Object(Q.jsx)("img",{width:16,height:16,src:"/images/rare.svg",alt:"rare"}),Object(Q.jsx)(h.fb,{ml:"4px",bold:!0,fontSize:"12px",children:l.filter((function(e){return"rare"===e.rarity})).length})]})]}),Object(Q.jsxs)(R,{alignSelf:"center",flexDirection:"column",children:[Object(Q.jsx)(h.fb,{fontSize:"12px",textAlign:"center",children:"Epic"}),x?Object(Q.jsx)(h.ab,{width:"48px",height:"12px"}):Object(Q.jsxs)(h.B,{alignItems:"center",children:[Object(Q.jsx)("img",{width:16,height:16,src:"/images/epic.svg",alt:"epic"}),Object(Q.jsx)(h.fb,{ml:"4px",bold:!0,fontSize:"12px",children:l.filter((function(e){return"epic"===e.rarity})).length})]})]}),Object(Q.jsxs)(R,{alignSelf:"center",flexDirection:"column",children:[Object(Q.jsx)(h.fb,{fontSize:"12px",textAlign:"center",children:"Legendary"}),x?Object(Q.jsx)(h.ab,{width:"48px",height:"12px"}):Object(Q.jsxs)(h.B,{alignItems:"center",children:[Object(Q.jsx)("img",{width:16,height:16,src:"/images/legendary.svg",alt:"legendary"}),Object(Q.jsx)(h.fb,{ml:"4px",bold:!0,fontSize:"12px",children:l.filter((function(e){return"legendary"===e.rarity})).length})]})]})]})]})})},ne=function(){return Object(Q.jsxs)(P,{children:[Object(Q.jsx)(h.D,{as:"h1",scale:"xxl",color:"secondary",children:"Collection"}),Object(Q.jsx)(h.fb,{fontSize:E?"14px":"16px",children:"Your profile's information and collection."})]})};return c?Object(Q.jsxs)(u.a,{children:[ne(),Object(Q.jsx)(h.m,{children:Object(Q.jsx)(h.n,{children:Object(Q.jsxs)(h.B,{justifyContent:H,flexDirection:_,alignItems:"center",children:[Object(Q.jsx)(h.B,{justifyContent:"center",ref:r}),Object(Q.jsxs)(h.B,{ml:K,mt:V,flexDirection:"column",children:[Object(Q.jsx)(I.a,{account:c}),Object(Q.jsxs)(h.B,{alignItems:"center",flexDirection:_,mt:"10px",children:[Object(Q.jsxs)(R,{width:q,flexDirection:"row",alignItems:"center",children:[Object(Q.jsx)(h.fb,{children:"All withdrawable:"}),Object(Q.jsxs)(h.fb,{ml:"4px",bold:!0,children:[Object(f.a)(parseFloat(Object(f.d)(Y)),2,4)," BNB"]}),Object(Q.jsx)(D.a,{mt:"3px",ml:"2px",text:"Canceled bids or sold NFTs' payments in the Marketplace will appear here."})]}),Object(Q.jsx)(h.j,{width:q,ml:K,mt:V,startIcon:n?void 0:Object(Q.jsx)(h.d,{}),endIcon:n?Object(Q.jsx)(h.e,{color:"currentColor",spin:!0}):void 0,disabled:n||Y.lte(0),onClick:ee,children:n?"Pending":"Withdraw"})]}),Object(Q.jsx)(h.j,{mt:"10px",disabled:G.length<=0,startIcon:Object(Q.jsx)(h.cb,{}),onClick:$,children:"Active Bids"})]}),!F&&te()]})})}),F&&te(),x?Object(Q.jsx)(h.B,{mt:"48px",width:"100%",justifyContent:"center",children:Object(Q.jsx)(v,{})}):l.length>0?Object(Q.jsx)(w.a,{children:l.map((function(e){return Object(Q.jsx)("div",{children:Object(Q.jsx)(y.a,{nft:e,hasEnded:"doggy"===e.key?A:T})},e.name)}))}):Object(Q.jsx)(h.D,{textAlign:"center",mt:"32px",children:"You have no NFTs"})]}):Object(Q.jsxs)(u.a,{children:[ne(),Object(Q.jsx)(h.fb,{children:"Please connect app for seeing your collection"}),Object(Q.jsx)(B.a,{mt:"12px",scale:"sm"})]})}}}]);