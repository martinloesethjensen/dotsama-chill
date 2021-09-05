(this["webpackJsonpdotsama-chill"]=this["webpackJsonpdotsama-chill"]||[]).push([[0],{119:function(e,t,n){},124:function(e,t){},134:function(e,t){},157:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(89),a=n.n(s),o=(n(119),n(12)),i=n.n(o),l=n(14),u=n(19),d=n(2),b=n(37),j=n(9),O=r.a.createContext(null),m=n(6),x=function(e){var t=e.address,n=e.amount,r=e.idx,s=Object(c.useContext)(O),a=s.selectedNominators,o=s.setSelectedNominators,i=function(){return a.includes(t)};return Object(m.jsxs)("div",{className:"flex justify-between p-2 pr-4 border-gray-200 border items-center "+(r%2!==0?"bg-gray-100":"bg-white"),children:[Object(m.jsx)("input",{checked:i(),onChange:function(){o((function(e){return i()?e.filter((function(e){return e!==t})):[].concat(Object(j.a)(e),[t])}))},type:"checkbox",className:"w-1/12 text-left"}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"w-8/12 text-left self-center",children:"".concat(t.substring(0,5),"...").concat(t.substring(t.length-6,t.length-1))})}),Object(m.jsx)("p",{className:"mx-4 w-3/12 text-right",children:n})]})},h=r.a.createContext(null),f=n(54),p=n.n(f),N=function(e){switch(e){case g.POLKADOT:return"wss://rpc.polkadot.io";case g.KUSAMA:return"wss://kusama-rpc.polkadot.io";default:throw Error("Unknown Provider ".concat(e))}},g=Object.freeze({POLKADOT:"POLKADOT",KUSAMA:"KUSAMA"}),v=Object.freeze({POLKADOT:"#E6007A",KUSAMA:"#4E4E4E",YELLOW:"#FCD34D",RED:"#EF4444",GREEN:"#10B981"}),w=r.a.createContext(null),k=function(e){Object(b.a)(e);var t=Object(c.useContext)(w).selectedNetwork,n=Object(c.useContext)(h).setNominators,r=Object.freeze({ASC:!1,DESC:!0}),s=Object(c.useState)(r.ASC),a=Object(d.a)(s,2),o=a[0],i=a[1],l=t===g.POLKADOT?v.POLKADOT:v.KUSAMA;return Object(m.jsxs)("div",{className:"flex items-center ",children:[Object(m.jsx)("p",{className:"pr-2 ",children:"".concat(o===r.ASC?"ASC":"DESC")}),Object(m.jsx)(p.a,{onChange:function(e){i(e),n((function(t){var n=Object(j.a)(t);return e===r.ASC?n.sort((function(e,t){return e.amount>t.amount?1:-1})):n.sort((function(e,t){return e.amount<t.amount?1:-1})),n}))},onColor:l,offColor:l,checked:o,checkedIcon:!1,uncheckedIcon:!1})]})},A=function(e){var t=e.name,n=e.onClick,c=e.color,r=void 0===c?"#E6007A":c;return Object(m.jsx)("button",{style:{borderColor:r,backgroundColor:r},onClick:n,className:"h-full items-center border-2 py-2 px-6  h-fit text-lg text-white tracking-wider font-bold rounded-sm",children:t})},C=n(180),S=n(178),y=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N(t),c=new C.a(n),e.next=4,S.a.create({provider:c});case 4:return r=e.sent,e.next=7,r.rpc.system.chain();case 7:return s=e.sent,console.log("Connected to node ".concat(s)),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=n(48),L=Object.freeze({ON_IS_BROADCAST:"broadcast",ON_IS_IN_BLOCK:"is-in-block",ON_IS_FINALIZED:"is-finalized",ON_IS_FAILED:"is-failed",ON_IS_NO_THRESHOLD:"is-no-threshold"}),_={isVisible:!1,name:"",mode:L.ON_IS_BROADCAST},E=function(){var e=Object(l.a)(i.a.mark((function e(t,n,c,r,s){var a,o,l,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(r);case 2:return a=e.sent,o=t.chillableAmount,l=c.map((function(e){return a.tx.staking.chillOther(e)})),c.length>o&&c.slice(0,o-1),e.next=8,Object(I.c)(n.meta.source);case 8:return u=e.sent,d=a.tx.utility.batch(l),e.next=12,d.signAndSend(n.address,{signer:u.signer},(function(e){var t=e.status,n=d.meta.name;t.isInBlock?(s(L.ON_IS_IN_BLOCK,n,t.asInBlock),console.log("\ud83d\udcc0 Transaction ".concat(n," included at blockHash ").concat(t.asInBlock))):t.isBroadcast?(s(L.ON_IS_BROADCAST),console.log("\ud83d\ude80 Transaction broadcasted.")):t.isFinalized?(s(L.ON_IS_FINALIZED,n,t.asFinalized),console.log("\ud83d\udcaf Transaction ".concat(n,"(..) Finalized at blockHash ").concat(t.asFinalized))):t.isReady||(s(L.ON_IS_FINALIZED,t),console.log("\ud83e\udd37 Other status ".concat(t)))}));case 12:case"end":return e.stop()}}),e)})));return function(t,n,c,r,s){return e.apply(this,arguments)}}(),D=r.a.createContext(null),T=r.a.createContext(null),B=r.a.createContext(null),K=function(){var e=Object(c.useContext)(O).selectedNominators,t=Object(c.useContext)(D).statistics,n=Object(c.useContext)(T).selectedAccount,r=Object(c.useContext)(w).selectedNetwork,s=(Object(c.useContext)(h).nominators,Object(c.useContext)(B).showBanner),a=r===g.POLKADOT?v.POLKADOT:v.KUSAMA;return Object(m.jsx)(A,{onClick:function(){t.chillThreshold.isNone?s(L.ON_IS_NO_THRESHOLD):0!==e.length&&E(t,n,e,r,s)},name:"Chill ".concat(e.length),color:a})},P=function(){var e=Object(c.useContext)(h).nominators;return Object(m.jsxs)("div",{className:"text-lg",children:[Object(m.jsxs)("div",{className:"flex justify-between mb-2  p-4  bg-white items-center",children:[Object(m.jsxs)("p",{className:"text-2xl ",children:["Nominators (",e.length,")"]}),Object(m.jsxs)("div",{className:"flex justify-between items-center w-4/12 ",children:[Object(m.jsx)(k,{}),Object(m.jsx)(K,{})]})]}),Object(m.jsxs)("div",{className:"flex items-center font-bold px-4 py-2 bg-white ",children:[Object(m.jsx)("p",{className:"w-1/12 text-left",children:"Wanna Chill ? "}),Object(m.jsx)("p",{className:"w-8/12",children:"Address"}),Object(m.jsx)("p",{className:"w-3/12 text-right  ",children:"Amount"})]})]})},F=function(){var e=Object(c.useContext)(O),t=(e.selectedNominators,e.setSelectedNominators),n=Object(c.useContext)(h).nominators;return Object(m.jsxs)("div",{className:"flex justify-between p-2 border-gray-200 border items-center bg-gray-100",children:[Object(m.jsx)("input",{onChange:function(e){return function(e){var c=e.target.checked;t((function(e){return c?Object(j.a)(n.map((function(e){return e.address}))):[]}))}(e)},type:"checkbox",className:"w-1/12 text-left"}),Object(m.jsx)("p",{className:"w-8/12 text-left self-center font-bold",children:"Chill all nominators"}),Object(m.jsx)("p",{className:"mx-4 w-3/12 text-right"})]})},H=function(){return Object(m.jsx)("div",{className:"flex flex-col justify-center items-center w-full",children:Object(m.jsx)("p",{children:"Nominators are beeing loaded"})})},M=function(e){var t=e.isLoading,n=Object(c.useContext)(h),r=n.nominators;n.onNominatorsFetched;return t?Object(m.jsx)(H,{}):!1===t&&0===r.length?Object(m.jsx)("p",{children:"Empty"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(P,{}),Object(m.jsx)(F,{}),r.map((function(e,t){return Object(c.createElement)(x,Object(u.a)(Object(u.a)({},e),{},{idx:t,key:e.address}))}))]})},R=function(){var e=Object(l.a)(i.a.mark((function e(t,n,c){var r,s,a,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.nominatorIds,s=n.minNominatorBond,a=r.map(function(){var e=Object(l.a)(i.a.mark((function e(n){var c,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.query.staking.bonded(n);case 2:return c=e.sent.unwrap(),e.next=5,t.query.staking.ledger(c);case 5:return r=e.sent,s=r.unwrapOrDefault().total.toBn(),e.abrupt("return",{controller:c,stake:s,ledger:r});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(a);case 4:o=e.sent,u=o.filter((function(e){var t=e.controller,n=e.stake,c=e.ledger;return!n.isZero()||!c.isNone||(console.log("\ud83d\ude31 ".concat(t," seems to have no ledger. This is a state bug.")),!1)})).filter((function(e){return e.stake<s.toNumber()})).map((function(e){var t=e.controller,n=e.stake;return{address:t.toHuman(),amount:n.toHuman()}})),c(u);case 7:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,r,s,a,o,l,u,b,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.query.staking.nominators.keys(),t.query.staking.minNominatorBond(),t.query.staking.maxNominatorsCount(),t.query.staking.chillThreshold(),t.query.staking.currentEra()]);case 2:if(n=e.sent,c=Object(d.a)(n,5),r=c[0],s=c[1],a=c[2],o=c[3],l=c[4],u=r.map((function(e){return Object(d.a)(e.args,1)[0]})),b=o/100*a,j=u.length-b,!(u.length<b)){e.next=15;break}return console.log("You can't chill others when nominators (".concat(u.length,") is below threshold (").concat(b,")")),e.abrupt("return");case 15:return e.abrupt("return",{chillableAmount:j,nominatorIds:u,threshold:b,minNominatorBond:s,currentEra:l,maxNominatorsCount:a,chillThreshold:o});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){var t=e.count,n=e.name,c=e.textColor;return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"text-4xl pb-2 ",children:t}),Object(m.jsx)("p",{className:"text-lg text-"+c,children:n})]})},q=function(e){var t=e.first,n=e.second;return Object(m.jsxs)("div",{className:"gap-8  bg-white border-white rounded-2xl mb-4 p-12 px-16 grid grid-rows-2",children:[Object(m.jsx)(U,Object(u.a)({},t)),Object(m.jsx)(U,Object(u.a)({},n))]})},Z=function(e){var t=e.chillableAmount,n=e.nominatorIds,c=e.threshold,r=e.minNominatorBond,s=e.currentEra,a=e.maxNominatorsCount,o=e.isLoading;return Object(m.jsxs)("div",{className:"flex justify-between mb-8",children:[Object(m.jsx)(q,{first:{name:"Nominator Threshold",count:o?"Loading":c,textColor:"red-500"},second:{name:"Nominator Count",count:o?"Loading":n.length,textColor:"red-500"}}),Object(m.jsx)("div",{}),Object(m.jsx)(q,{first:{name:"Max Chillable Amount",count:o?"Loading":t,textColor:"yellow-300"},second:{name:"Current Era",count:o?"Loading":s.toHuman(),textColor:"yellow-300"}}),Object(m.jsx)("div",{}),Object(m.jsx)(q,{first:{name:"Minimum Nominator Bond",count:o?"Loading":r.toHuman(),textColor:"blue-500"},second:{name:"Maximum Nominator Count",count:o?"Loading":a.toHuman(),textColor:"blue-500"}})]})},V=n(179),W=n(181),Y=n(74);function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function J(){var e=Object(c.useContext)(w).selectedNetwork,t=Object(c.useContext)(T),n=t.selectedAccount,r=t.setSelectedAccount,s=Object(c.useState)([]),a=Object(d.a)(s,2),o=a[0],u=a[1],b=Object(c.useState)(""),j=Object(d.a)(b,2),O=j[0],x=j[1],h=Object(c.useState)(!0),f=Object(d.a)(h,2),p=f[0],N=f[1],g=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching Accounts"),N(!0),e.next=4,Object(I.b)("dotsama-chill");case 4:return e.sent,e.next=7,Object(I.a)();case 7:return t=e.sent,console.log("got accounts"),u(t),r(t[0]),console.log(n),e.next=14,k(t[0]);case 14:N(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),r(t),e.next=4,k(t);case 4:N(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var t=Object(l.a)(i.a.mark((function t(n){var c,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:return c=t.sent,t.next=5,c.query.system.account(n.address);case 5:r=t.sent,s=r.data.free,x(s.toHuman());case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){g()}),[]),0===o.length?Object(m.jsx)("p",{children:"Please connect Polkadot.js Wallet"}):Object(m.jsxs)("div",{className:"flex items-center",children:[Object(m.jsx)("p",{className:"pr-4",children:p?"Fetching...":O}),Object(m.jsx)(V.a,{value:n,onChange:v,children:function(e){var t=e.open;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"mt-1 relative pr-4",children:[Object(m.jsxs)(V.a.Button,{className:"relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm",children:[Object(m.jsx)("span",{className:"flex items-center",children:Object(m.jsx)("span",{className:"ml-3 block truncate",children:n.meta.name})}),Object(m.jsx)("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:Object(m.jsx)(Y.b,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),Object(m.jsx)(W.a,{show:t,as:c.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(m.jsx)(V.a.Options,{className:"absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",children:o.map((function(e){return Object(m.jsx)(V.a.Option,{className:function(e){return G(e.active?"text-white bg-black":"text-gray-900","cursor-default select-none relative py-2 pl-3 pr-9")},value:e,children:function(t){var n=t.selected,c=t.active;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"flex items-center",children:Object(m.jsx)("span",{className:G(n?"font-semibold":"font-normal","ml-3 block truncate"),children:e.meta.name})}),n?Object(m.jsx)("span",{className:G(c?"text-white":"text-black","absolute inset-y-0 right-0 flex items-center pr-4"),children:Object(m.jsx)(Y.a,{className:"h-5 w-5","aria-hidden":"true"})}):null]})}},e.address)}))})})]})})}})]})}var Q=n.p+"static/media/kusamaLogo.445b5ac3.svg",X=n.p+"static/media/polkadotLogo.fbd6b0a6.svg",$=function(e){var t=e.network===g.POLKADOT?X:Q;return Object(m.jsx)("div",{className:"m-2",children:Object(m.jsx)("div",{className:"flex items-center",style:{width:"30px",height:"30px"},children:Object(m.jsx)("img",{src:t})})})},ee=function(){var e=Object(c.useContext)(w),t=e.selectedNetwork,n=e.setSelectedNetwork;g.POLKADOT;return Object(m.jsxs)("div",{className:"flex items-center ",children:[Object(m.jsx)($,{network:g.KUSAMA}),Object(m.jsx)(p.a,{onColor:v.POLKADOT,offColor:v.KUSAMA,checked:t===g.POLKADOT,onChange:function(e){return n(e?g.POLKADOT:g.KUSAMA)},checkedIcon:!1,uncheckedIcon:!1}),Object(m.jsx)($,{network:g.POLKADOT})]})},te=function(e){Object(b.a)(e);var t=Object(c.useContext)(T),n=t.selectedAccount,r=t.setSelectedAccount,s=Object(c.useContext)(w),a=s.selectedNetwork,o=s.setSelectedNetwork;return Object(m.jsxs)("div",{className:"flex justify-between items-start pb-6",children:[Object(m.jsx)(ee,{selectedNetwork:a,setSelectedNetwork:o}),Object(m.jsx)(J,{selectedAccount:n,setSelectedAccount:r})]})},ne=function(e){var t=e.bannerState,n=e.setBannerState,c={headline:"\ud83d\udcc0 Transaction ".concat(t.name," included at blockHash ").concat(t.status),color:"bg-black-400"},r="\ud83d\ude80 Transaction broadcasted.",s={headline:"\ud83d\udcaf Transaction ".concat(t.name,"(..) Finalized at blockHash ").concat(t.status),color:"bg-green-400"},a={headline:"\ud83e\udd37 Other status ".concat(t.name),color:"bg-red-400"},o="Chilling is currently not possible on this network since there is no threshold set for chilling";return t.isVisible&&Object(m.jsx)("div",{style:{backgroundColor:function(){switch(t.mode){case L.ON_IS_IN_BLOCK:return v.POLKADOT;case L.ON_IS_BROADCAST:return v.YELLOW;case L.ON_IS_FINALIZED:return v.GREEN;case L.ON_IS_FAILED:case L.ON_IS_NO_THRESHOLD:return v.RED;default:return""}}()},className:" w-3/6  border rounded-2xl absolute top-5 right-10 z-50",children:Object(m.jsx)("div",{className:"py-3 px-3 ",children:Object(m.jsxs)("div",{className:"flex items-center justify-between flex-wrap",children:[Object(m.jsx)("div",{className:"w-0 flex-1 flex items-center",children:Object(m.jsx)("p",{className:"ml-3 font-medium text-white ",children:function(){switch(t.mode){case L.ON_IS_IN_BLOCK:return c.headline;case L.ON_IS_BROADCAST:return r;case L.ON_IS_FINALIZED:return s.headline;case L.ON_IS_FAILED:return a.headline;case L.ON_IS_NO_THRESHOLD:return o;default:return""}}()})}),Object(m.jsx)("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-3",children:Object(m.jsxs)("button",{onClick:function(){return n((function(e){return Object(u.a)(Object(u.a)({},e),{},{isVisible:!1})}))},type:"button",className:"-mr-1 flex p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2",children:[Object(m.jsx)("span",{className:"sr-only",children:"Dismiss"}),Object(m.jsx)("svg",{className:"h-6 w-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(m.jsx)("path",{d:"M6 18L18 6M6 6l12 12"})})]})})]})})})},ce=function(e){Object(b.a)(e);var t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)([]),o=Object(d.a)(a,2),j=o[0],x=o[1],f=Object(c.useState)(g.POLKADOT),p=Object(d.a)(f,2),N=p[0],v=p[1],k=Object(c.useState)({chillableAmount:0,nominatorIds:0,threshold:0,minNominatorBond:0,currentEra:0,maxNominatorsCount:0}),A=Object(d.a)(k,2),C=A[0],S=A[1],I=Object(c.useState)({address:null,meta:{name:null}}),L=Object(d.a)(I,2),E=L[0],K=L[1],P=Object(c.useState)(!0),F=Object(d.a)(P,2),H=F[0],U=F[1],q=Object(c.useState)(!0),V=Object(d.a)(q,2),W=V[0],Y=V[1],G=Object(c.useState)(Object(u.a)({},_)),J=Object(d.a)(G,2),Q=J[0],X=J[1];Object(c.useEffect)((function(){$()}),[N]);var $=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),Y(!0),e.next=4,y(N);case 4:return t=e.sent,e.next=7,z(t);case 7:n=e.sent,R(t,n,ee),S(n),Y(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(e){e.sort((function(e,t){return e.amount>t.amount?1:-1})),s(e),U(!1)};return Object(m.jsx)(h.Provider,{value:{nominators:r,setNominators:s},children:Object(m.jsx)(O.Provider,{value:{selectedNominators:j,setSelectedNominators:x},children:Object(m.jsx)(D.Provider,{value:{statistics:C},children:Object(m.jsx)(T.Provider,{value:{selectedAccount:E,setSelectedAccount:K},children:Object(m.jsx)(w.Provider,{value:{selectedNetwork:N,setSelectedNetwork:v},children:Object(m.jsxs)(B.Provider,{value:{showBanner:function(e,t,n){return function(e,t,n,c){(0,e.setBannerState)((function(e){return Object(u.a)(Object(u.a)({},e),{},{isVisible:!0,mode:t,name:n,status:c})}))}({setBannerState:X},e,t,n)}},children:[Object(m.jsx)(ne,{bannerState:Q,setBannerState:X}),Object(m.jsxs)("div",{className:"px-24 py-8 h-screen",style:{backgroundColor:"#f5f3f1"},children:[Object(m.jsx)(te,{}),Object(m.jsx)("p",{className:"text-md pb-6",children:"A tool to list nominators below threshold and has the option to chill multiple nominators in a batch."}),Object(m.jsx)("p",{className:"text-md pb-6 text-red-400",children:"PLEASE NOTE: chilling is not an economically valuable task. Anyone submitting the chill merely loses transaction fees, with no reward."}),Object(m.jsx)(Z,Object(u.a)(Object(u.a)({},C),{},{isLoading:W})),Object(m.jsx)(M,{isLoading:H})]})]})})})})})})};a.a.render(Object(m.jsx)(ce,{}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.b231feec.chunk.js.map