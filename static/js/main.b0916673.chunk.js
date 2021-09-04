(this["webpackJsonpdotsama-chill"]=this["webpackJsonpdotsama-chill"]||[]).push([[0],{119:function(e,t,n){},124:function(e,t){},134:function(e,t){},157:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(89),s=n.n(a),o=(n(119),n(12)),i=n.n(o),l=n(13),u=n(19),d=n(2),j=n(37),b=n(9),m=r.a.createContext(null),O=n(6),x=function(e){var t=e.address,n=e.amount,r=e.idx,a=Object(c.useContext)(m),s=a.selectedNominators,o=a.setSelectedNominators,i=function(){return s.includes(t)};return Object(O.jsxs)("div",{className:"flex justify-between p-2 pr-4 border-gray-200 border items-center "+(r%2!==0?"bg-gray-100":"bg-white"),children:[Object(O.jsx)("input",{checked:i(),onChange:function(){o((function(e){return i()?e.filter((function(e){return e!==t})):[].concat(Object(b.a)(e),[t])}))},type:"checkbox",className:"w-1/12 text-left"}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"w-8/12 text-left self-center",children:"".concat(t.substring(0,5),"...").concat(t.substring(t.length-6,t.length-1))})}),Object(O.jsx)("p",{className:"mx-4 w-3/12 text-right",children:n})]})},h=r.a.createContext(null),f=n(54),p=n.n(f),N=function(e){switch(e){case g.POLKADOT:return"wss://rpc.polkadot.io";case g.KUSAMA:return"wss://kusama-rpc.polkadot.io";default:throw Error("Unknown Provider ".concat(e))}},g=Object.freeze({POLKADOT:"POLKADOT",KUSAMA:"KUSAMA"}),v=Object.freeze({POLKADOT:"#E6007A",KUSAMA:"#4E4E4E",YELLOW:"#FCD34D",RED:"#EF4444",GREEN:"#10B981"}),w=r.a.createContext(null),k=function(e){Object(j.a)(e);var t=Object(c.useContext)(w).selectedNetwork,n=Object(c.useContext)(h).setNominators,r=Object.freeze({ASC:!1,DESC:!0}),a=Object(c.useState)(r.ASC),s=Object(d.a)(a,2),o=s[0],i=s[1],l=t===g.POLKADOT?v.POLKADOT:v.KUSAMA;return Object(O.jsxs)("div",{className:"flex items-center ",children:[Object(O.jsx)("p",{className:"pr-2 ",children:"".concat(o===r.ASC?"ASC":"DESC")}),Object(O.jsx)(p.a,{onChange:function(e){i(e),n((function(t){var n=Object(b.a)(t);return e===r.ASC?n.sort((function(e,t){return e.amount>t.amount?1:-1})):n.sort((function(e,t){return e.amount<t.amount?1:-1})),n}))},onColor:l,offColor:l,checked:o,checkedIcon:!1,uncheckedIcon:!1})]})},A=function(e){var t=e.name,n=e.onClick,c=e.color,r=void 0===c?"#E6007A":c;return Object(O.jsx)("button",{style:{borderColor:r,backgroundColor:r},onClick:n,className:"h-full items-center border-2 py-2 px-6  h-fit text-lg text-white tracking-wider font-bold rounded-sm",children:t})},C=n(180),S=n(178),y=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N(t),c=new C.a(n),e.next=4,S.a.create({provider:c});case 4:return r=e.sent,e.next=7,r.rpc.system.chain();case 7:return a=e.sent,console.log("Connected to node ".concat(a)),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=n(48),L=Object.freeze({ON_IS_BROADCAST:"success",ON_DELETED:"deleted",ON_IS_IN_BLOCK:"edited",ON_IS_FINALIZED:"success-category",ON_IS_FAILED:"edited-category"}),D={isVisible:!1,name:"",mode:L.ON_IS_BROADCAST},_=function(){var e=Object(l.a)(i.a.mark((function e(t,n,c,r,a){var s,o,l,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(r);case 2:return s=e.sent,o=t.chillableAmount,l=c.map((function(e){return s.tx.staking.chillOther(e)})),c.length>o&&c.slice(0,o-1),e.next=8,Object(I.c)(n.meta.source);case 8:return u=e.sent,d=s.tx.utility.batch(l),e.next=12,d.signAndSend(n.address,{signer:u.signer},(function(e){var t=e.status,n=d.meta.name;t.isInBlock?(a(L.ON_IS_IN_BLOCK,n,t.asInBlock),console.log("\ud83d\udcc0 Transaction ".concat(n," included at blockHash ").concat(t.asInBlock))):t.isBroadcast?(a(L.ON_IS_BROADCAST),console.log("\ud83d\ude80 Transaction broadcasted.")):t.isFinalized?(a(L.ON_IS_FINALIZED,n,t.asFinalized),console.log("\ud83d\udcaf Transaction ".concat(n,"(..) Finalized at blockHash ").concat(t.asFinalized))):t.isReady||(a(L.ON_IS_FINALIZED,t),console.log("\ud83e\udd37 Other status ".concat(t)))}));case 12:case"end":return e.stop()}}),e)})));return function(t,n,c,r,a){return e.apply(this,arguments)}}(),E=r.a.createContext(null),B=r.a.createContext(null),T=r.a.createContext(null),K=function(){var e=Object(c.useContext)(m).selectedNominators,t=Object(c.useContext)(E).statistics,n=Object(c.useContext)(B).selectedAccount,r=Object(c.useContext)(w).selectedNetwork,a=(Object(c.useContext)(h).nominators,Object(c.useContext)(T).showBanner),s=r===g.POLKADOT?v.POLKADOT:v.KUSAMA;return Object(O.jsx)(A,{onClick:function(){0!==e.length&&_(t,n,e,r,a)},name:"Chill ".concat(e.length),color:s})},P=function(){var e=Object(c.useContext)(h).nominators;return Object(O.jsxs)("div",{className:"text-lg",children:[Object(O.jsxs)("div",{className:"flex justify-between mb-2  p-4  bg-white items-center",children:[Object(O.jsxs)("p",{className:"text-2xl ",children:["Nominators (",e.length,")"]}),Object(O.jsxs)("div",{className:"flex justify-between items-center w-4/12 ",children:[Object(O.jsx)(k,{}),Object(O.jsx)(K,{})]})]}),Object(O.jsxs)("div",{className:"flex items-center font-bold px-4 py-2 bg-white ",children:[Object(O.jsx)("p",{className:"w-1/12 text-left",children:"Wanna Chill ? "}),Object(O.jsx)("p",{className:"w-8/12",children:"Address"}),Object(O.jsx)("p",{className:"w-3/12 text-right  ",children:"Amount"})]})]})},F=function(){var e=Object(c.useContext)(m),t=(e.selectedNominators,e.setSelectedNominators),n=Object(c.useContext)(h).nominators;return Object(O.jsxs)("div",{className:"flex justify-between p-2 border-gray-200 border items-center bg-gray-100",children:[Object(O.jsx)("input",{onChange:function(e){return function(e){var c=e.target.checked;t((function(e){return c?Object(b.a)(n.map((function(e){return e.address}))):[]}))}(e)},type:"checkbox",className:"w-1/12 text-left"}),Object(O.jsx)("p",{className:"w-8/12 text-left self-center font-bold",children:"Chill all nominators"}),Object(O.jsx)("p",{className:"mx-4 w-3/12 text-right"})]})},M=function(){return Object(O.jsx)("div",{className:"flex flex-col justify-center items-center w-full",children:Object(O.jsx)("p",{children:"Nominators are beeing loaded"})})},z=function(e){var t=e.isLoading,n=Object(c.useContext)(h),r=n.nominators;n.onNominatorsFetched;return t?Object(O.jsx)(M,{}):!1===t&&0===r.length?Object(O.jsx)("p",{children:"Empty"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{}),Object(O.jsx)(F,{}),r.map((function(e,t){return Object(c.createElement)(x,Object(u.a)(Object(u.a)({},e),{},{idx:t,key:e.address}))}))]})},H=function(){var e=Object(l.a)(i.a.mark((function e(t,n,c){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.nominatorIds,a=n.minNominatorBond,e.next=3,t.query.staking.bonded.multi(r).then(function(){var e=Object(l.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.map((function(e){return e.unwrapOrDefault()})),e.next=3,t.query.staking.ledger.multi(r).then(function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.map((function(e){return e.unwrapOrDefault()})).filter((function(e){return e.total.toBn()<a.toNumber()})).map((function(e){var t=e.stash,n=e.total;return{address:t.toHuman(),amount:n.toHuman()}})),c(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,r,a,s,o,l,u,j,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.query.staking.nominators.keys(),t.query.staking.minNominatorBond(),t.query.staking.maxNominatorsCount(),t.query.staking.chillThreshold(),t.query.staking.currentEra()]);case 2:if(n=e.sent,c=Object(d.a)(n,5),r=c[0],a=c[1],s=c[2],o=c[3],l=c[4],u=r.map((function(e){return Object(d.a)(e.args,1)[0]})),j=o/100*s,b=u.length-j,!(u.length<j)){e.next=15;break}return console.log("You can't chill others when nominators (".concat(u.length,") is below threshold (").concat(j,")")),e.abrupt("return");case 15:return e.abrupt("return",{chillableAmount:b,nominatorIds:u,threshold:j,minNominatorBond:a,currentEra:l,maxNominatorsCount:s});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){var t=e.count,n=e.name,c=e.textColor;return Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"text-4xl pb-2 ",children:t}),Object(O.jsx)("p",{className:"text-lg text-"+c,children:n})]})},q=function(e){var t=e.first,n=e.second;return Object(O.jsxs)("div",{className:"gap-8  bg-white border-white rounded-2xl mb-4 p-12 px-16 grid grid-rows-2",children:[Object(O.jsx)(U,Object(u.a)({},t)),Object(O.jsx)(U,Object(u.a)({},n))]})},Z=function(e){var t=e.chillableAmount,n=e.nominatorIds,c=e.threshold,r=e.minNominatorBond,a=e.currentEra,s=e.maxNominatorsCount,o=e.isLoading;return Object(O.jsxs)("div",{className:"flex justify-between mb-8",children:[Object(O.jsx)(q,{first:{name:"Threshold",count:o?"Loading":c,textColor:"red-500"},second:{name:"Nominator Ids",count:o?"Loading":n.length,textColor:"red-500"}}),Object(O.jsx)("div",{}),Object(O.jsx)(q,{first:{name:"Max Chillable Amount",count:o?"Loading":t,textColor:"yellow-300"},second:{name:"Current Era",count:o?"Loading":a.toHuman(),textColor:"yellow-300"}}),Object(O.jsx)("div",{}),Object(O.jsx)(q,{first:{name:"Minimum Nominator Bond",count:o?"Loading":r.toHuman(),textColor:"blue-500"},second:{name:"Maximum Nominator Count",count:o?"Loading":s.toHuman(),textColor:"blue-500"}})]})},V=n(179),W=n(181),Y=n(74);function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function J(){var e=Object(c.useContext)(w).selectedNetwork,t=Object(c.useContext)(B),n=t.selectedAccount,r=t.setSelectedAccount,a=Object(c.useState)([]),s=Object(d.a)(a,2),o=s[0],u=s[1],j=Object(c.useState)(""),b=Object(d.a)(j,2),m=b[0],x=b[1],h=Object(c.useState)(!0),f=Object(d.a)(h,2),p=f[0],N=f[1],g=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching Accounts"),N(!0),e.next=4,Object(I.b)("dotsama-chill");case 4:return e.sent,e.next=7,Object(I.a)();case 7:return t=e.sent,console.log("got accounts"),u(t),r(t[0]),console.log(n),e.next=14,k(t[0]);case 14:N(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),r(t),e.next=4,k(t);case 4:N(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var t=Object(l.a)(i.a.mark((function t(n){var c,r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:return c=t.sent,t.next=5,c.query.system.account(n.address);case 5:r=t.sent,a=r.data.free,x(a.toHuman());case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){g()}),[]),0===o.length?Object(O.jsx)("p",{children:"Please connect Polkadot.js Wallet"}):Object(O.jsxs)("div",{className:"flex items-center",children:[Object(O.jsx)("p",{className:"pr-4",children:p?"Fetching...":m}),Object(O.jsx)(V.a,{value:n,onChange:v,children:function(e){var t=e.open;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"mt-1 relative pr-4",children:[Object(O.jsxs)(V.a.Button,{className:"relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm",children:[Object(O.jsx)("span",{className:"flex items-center",children:Object(O.jsx)("span",{className:"ml-3 block truncate",children:n.meta.name})}),Object(O.jsx)("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:Object(O.jsx)(Y.b,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),Object(O.jsx)(W.a,{show:t,as:c.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(O.jsx)(V.a.Options,{className:"absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",children:o.map((function(e){return Object(O.jsx)(V.a.Option,{className:function(e){return G(e.active?"text-white bg-black":"text-gray-900","cursor-default select-none relative py-2 pl-3 pr-9")},value:e,children:function(t){var n=t.selected,c=t.active;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"flex items-center",children:Object(O.jsx)("span",{className:G(n?"font-semibold":"font-normal","ml-3 block truncate"),children:e.meta.name})}),n?Object(O.jsx)("span",{className:G(c?"text-white":"text-black","absolute inset-y-0 right-0 flex items-center pr-4"),children:Object(O.jsx)(Y.a,{className:"h-5 w-5","aria-hidden":"true"})}):null]})}},e.address)}))})})]})})}})]})}var Q=n.p+"static/media/kusamaLogo.445b5ac3.svg",X=n.p+"static/media/polkadotLogo.fbd6b0a6.svg",$=function(e){var t=e.network===g.POLKADOT?X:Q;return Object(O.jsx)("div",{className:"m-2",children:Object(O.jsx)("div",{className:"flex items-center",style:{width:"30px",height:"30px"},children:Object(O.jsx)("img",{src:t})})})},ee=function(){var e=Object(c.useContext)(w),t=e.selectedNetwork,n=e.setSelectedNetwork;g.POLKADOT;return Object(O.jsxs)("div",{className:"flex items-center ",children:[Object(O.jsx)($,{network:g.KUSAMA}),Object(O.jsx)(p.a,{onColor:v.POLKADOT,offColor:v.KUSAMA,checked:t===g.POLKADOT,onChange:function(e){return n(e?g.POLKADOT:g.KUSAMA)},checkedIcon:!1,uncheckedIcon:!1}),Object(O.jsx)($,{network:g.POLKADOT})]})},te=function(e){Object(j.a)(e);var t=Object(c.useContext)(B),n=t.selectedAccount,r=t.setSelectedAccount,a=Object(c.useContext)(w),s=a.selectedNetwork,o=a.setSelectedNetwork;return Object(O.jsxs)("div",{className:"flex justify-between items-start pb-6",children:[Object(O.jsx)(ee,{selectedNetwork:s,setSelectedNetwork:o}),Object(O.jsx)(J,{selectedAccount:n,setSelectedAccount:r})]})},ne=function(e){var t=e.bannerState,n=e.setBannerState,c={headline:"\ud83d\udcc0 Transaction ".concat(t.name," included at blockHash ").concat(t.status),color:"bg-black-400"},r="\ud83d\ude80 Transaction broadcasted.",a={headline:"\ud83d\udcaf Transaction ".concat(t.name,"(..) Finalized at blockHash ").concat(t.status),color:"bg-green-400"},s={headline:"\ud83e\udd37 Other status ".concat(t.name),color:"bg-red-400"};return t.isVisible&&Object(O.jsx)("div",{style:{backgroundColor:function(){switch(t.mode){case L.ON_IS_IN_BLOCK:return v.POLKADOT;case L.ON_IS_BROADCAST:return v.YELLOW;case L.ON_IS_FINALIZED:return v.GREEN;case L.ON_IS_FAILED:return v.RED;default:return""}}()},className:" w-3/6  border rounded-2xl absolute top-5 right-10 z-50",children:Object(O.jsx)("div",{className:"py-3 px-3 ",children:Object(O.jsxs)("div",{className:"flex items-center justify-between flex-wrap",children:[Object(O.jsx)("div",{className:"w-0 flex-1 flex items-center",children:Object(O.jsx)("p",{className:"ml-3 font-medium text-white ",children:function(){switch(t.mode){case L.ON_IS_IN_BLOCK:return c.headline;case L.ON_IS_BROADCAST:return r;case L.ON_IS_FINALIZED:return a.headline;case L.ON_IS_FAILED:return s.headline;default:return""}}()})}),Object(O.jsx)("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-3",children:Object(O.jsxs)("button",{onClick:function(){return n((function(e){return Object(u.a)(Object(u.a)({},e),{},{isVisible:!1})}))},type:"button",className:"-mr-1 flex p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2",children:[Object(O.jsx)("span",{className:"sr-only",children:"Dismiss"}),Object(O.jsx)("svg",{className:"h-6 w-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(O.jsx)("path",{d:"M6 18L18 6M6 6l12 12"})})]})})]})})})},ce=function(e){Object(j.a)(e);var t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),o=Object(d.a)(s,2),b=o[0],x=o[1],f=Object(c.useState)(g.POLKADOT),p=Object(d.a)(f,2),N=p[0],v=p[1],k=Object(c.useState)({chillableAmount:0,nominatorIds:0,threshold:0,minNominatorBond:0,currentEra:0,maxNominatorsCount:0}),A=Object(d.a)(k,2),C=A[0],S=A[1],I=Object(c.useState)({address:null,meta:{name:null}}),L=Object(d.a)(I,2),_=L[0],K=L[1],P=Object(c.useState)(!0),F=Object(d.a)(P,2),M=F[0],U=F[1],q=Object(c.useState)(!0),V=Object(d.a)(q,2),W=V[0],Y=V[1],G=Object(c.useState)(Object(u.a)({},D)),J=Object(d.a)(G,2),Q=J[0],X=J[1];Object(c.useEffect)((function(){$()}),[N]);var $=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),Y(!0),e.next=4,y(N);case 4:return t=e.sent,e.next=7,R(t);case 7:n=e.sent,H(t,n,ee),S(n),Y(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(e){e.sort((function(e,t){return e.amount>t.amount?1:-1})),a(e),U(!1)};return Object(O.jsx)(h.Provider,{value:{nominators:r,setNominators:a},children:Object(O.jsx)(m.Provider,{value:{selectedNominators:b,setSelectedNominators:x},children:Object(O.jsx)(E.Provider,{value:{statistics:C},children:Object(O.jsx)(B.Provider,{value:{selectedAccount:_,setSelectedAccount:K},children:Object(O.jsx)(w.Provider,{value:{selectedNetwork:N,setSelectedNetwork:v},children:Object(O.jsxs)(T.Provider,{value:{showBanner:function(e,t,n){return function(e,t,n,c){(0,e.setBannerState)((function(e){return Object(u.a)(Object(u.a)({},e),{},{isVisible:!0,mode:t,name:n,status:c})}))}({setBannerState:X},e,t,n)}},children:[Object(O.jsx)(ne,{bannerState:Q,setBannerState:X}),Object(O.jsxs)("div",{className:"px-24 py-8 h-screen",style:{backgroundColor:"#f5f3f1"},children:[Object(O.jsx)(te,{}),Object(O.jsx)("p",{className:"text-md pb-6",children:"A tool to list nominators below threshold and has the option to chill multiple nominators in a batch."}),Object(O.jsx)(Z,Object(u.a)(Object(u.a)({},C),{},{isLoading:W})),Object(O.jsx)(z,{isLoading:M})]})]})})})})})})};s.a.render(Object(O.jsx)(ce,{}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.b0916673.chunk.js.map