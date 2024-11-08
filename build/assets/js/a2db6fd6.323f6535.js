"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[3654],{524:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(6070),o=n(1582);const i={},l="Enumeration: MessageStatus",d={id:"build-on-morph/sdk/enumerations/MessageStatus",title:"MessageStatus",description:"@morph-l2/sdk \u2022 Docs",source:"@site/docs/build-on-morph/sdk/enumerations/MessageStatus.md",sourceDirName:"build-on-morph/sdk/enumerations",slug:"/build-on-morph/sdk/enumerations/MessageStatus",permalink:"/docs/build-on-morph/sdk/enumerations/MessageStatus",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/sdk/enumerations/MessageStatus.md",tags:[],version:"current",frontMatter:{}},t={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"FAILED_L1_TO_L2_MESSAGE",id:"failed_l1_to_l2_message",level:3},{value:"Source",id:"source",level:4},{value:"IN_CHALLENGE_PERIOD",id:"in_challenge_period",level:3},{value:"Source",id:"source-1",level:4},{value:"READY_FOR_RELAY",id:"ready_for_relay",level:3},{value:"Source",id:"source-2",level:4},{value:"READY_TO_PROVE",id:"ready_to_prove",level:3},{value:"Source",id:"source-3",level:4},{value:"RELAYED",id:"relayed",level:3},{value:"Source",id:"source-4",level:4},{value:"UNCONFIRMED_L1_TO_L2_MESSAGE",id:"unconfirmed_l1_to_l2_message",level:3},{value:"Source",id:"source-5",level:4},{value:"WITHDRAWAL_HASH_NOT_SYNC",id:"withdrawal_hash_not_sync",level:3},{value:"Source",id:"source-6",level:4},{value:"WITHDRAWAL_ROOT_NOT_PUBLISHED",id:"withdrawal_root_not_published",level:3},{value:"Source",id:"source-7",level:4}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/build-on-morph/sdk/globals",children:(0,r.jsx)(s.strong,{children:"@morph-l2/sdk"})})," \u2022 ",(0,r.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/build-on-morph/sdk/globals",children:"@morph-l2/sdk"})," / MessageStatus"]}),"\n",(0,r.jsx)(s.h1,{id:"enumeration-messagestatus",children:"Enumeration: MessageStatus"}),"\n",(0,r.jsx)(s.p,{children:"Enum describing the status of a message."}),"\n",(0,r.jsx)(s.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,r.jsx)(s.h3,{id:"failed_l1_to_l2_message",children:"FAILED_L1_TO_L2_MESSAGE"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"FAILED_L1_TO_L2_MESSAGE"}),": ",(0,r.jsx)(s.code,{children:"1"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Message is an L1 to L2 message and the transaction to execute the message failed.\nWhen this status is returned, you will need to resend the L1 to L2 message, probably with a\nhigher gas limit."}),"\n",(0,r.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:"src/interfaces/types.ts:186"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"in_challenge_period",children:"IN_CHALLENGE_PERIOD"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"IN_CHALLENGE_PERIOD"}),": ",(0,r.jsx)(s.code,{children:"5"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Message is a proved L2 to L1 message and is undergoing the challenge period."}),"\n",(0,r.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:"src/interfaces/types.ts:206"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"ready_for_relay",children:"READY_FOR_RELAY"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"READY_FOR_RELAY"}),": ",(0,r.jsx)(s.code,{children:"6"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Message is ready to be relayed."}),"\n",(0,r.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:"src/interfaces/types.ts:211"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"ready_to_prove",children:"READY_TO_PROVE"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"READY_TO_PROVE"}),": ",(0,r.jsx)(s.code,{children:"4"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Message is ready to be proved on L1 to initiate the challenge period."}),"\n",(0,r.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:"src/interfaces/types.ts:201"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"relayed",children:"RELAYED"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"RELAYED"}),": ",(0,r.jsx)(s.code,{children:"7"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Message has been relayed."}),"\n",(0,r.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:"src/interfaces/types.ts:216"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"unconfirmed_l1_to_l2_message",children:"UNCONFIRMED_L1_TO_L2_MESSAGE"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"UNCONFIRMED_L1_TO_L2_MESSAGE"}),": ",(0,r.jsx)(s.code,{children:"0"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Message is an L1 to L2 message and has not been processed by the L2."}),"\n",(0,r.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:"src/interfaces/types.ts:179"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"withdrawal_hash_not_sync",children:"WITHDRAWAL_HASH_NOT_SYNC"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"WITHDRAWAL_HASH_NOT_SYNC"}),": ",(0,r.jsx)(s.code,{children:"3"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Message is an L2 to L1 message and withdrawal hash has not been published to backend yet."}),"\n",(0,r.jsx)(s.h4,{id:"source-6",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:"src/interfaces/types.ts:196"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"withdrawal_root_not_published",children:"WITHDRAWAL_ROOT_NOT_PUBLISHED"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"WITHDRAWAL_ROOT_NOT_PUBLISHED"}),": ",(0,r.jsx)(s.code,{children:"2"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Message is an L2 to L1 message and withdrawal root has not been published yet."}),"\n",(0,r.jsx)(s.h4,{id:"source-7",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:"src/interfaces/types.ts:191"})]})}function a(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1582:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var r=n(758);const o={},i=r.createContext(o);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);