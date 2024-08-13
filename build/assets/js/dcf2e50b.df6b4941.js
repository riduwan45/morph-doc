"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[6232],{4271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const r={title:"Morph's Decentralized Sequencer Network",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},o=void 0,a={id:"how-morph-works/decentralized-sequencers/morph-decentralized-sequencer-network",title:"Morph's Decentralized Sequencer Network",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/how-morph-works/decentralized-sequencers/1-morph-decentralized-sequencer-network.md",sourceDirName:"how-morph-works/decentralized-sequencers",slug:"/how-morph-works/decentralized-sequencers/morph-decentralized-sequencer-network",permalink:"/docs/how-morph-works/decentralized-sequencers/morph-decentralized-sequencer-network",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/how-morph-works/decentralized-sequencers/1-morph-decentralized-sequencer-network.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Morph's Decentralized Sequencer Network",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},sidebar:"DeveloperSidebar",previous:{title:"Optimistic zkEVM",permalink:"/docs/how-morph-works/optimistic-zkevm"},next:{title:"Morph's Staking System Design",permalink:"/docs/how-morph-works/decentralized-sequencers/morph-staking-system-design"}},c={},l=[{value:"The Importance of Decentralized Sequencers",id:"the-importance-of-decentralized-sequencers",level:2},{value:"What is a sequencer and what does it do?",id:"what-is-a-sequencer-and-what-does-it-do",level:3},{value:"What are the problems with centralized sequencers?",id:"what-are-the-problems-with-centralized-sequencers",level:3},{value:"Vulnerability of a Single Point of Failure",id:"vulnerability-of-a-single-point-of-failure",level:4},{value:"Excessive Transaction Censorship",id:"excessive-transaction-censorship",level:4},{value:"Monopoly Over MEV",id:"monopoly-over-mev",level:4},{value:"What&#39;s Morph&#39;s Approach to Decentralized Sequencers?",id:"whats-morphs-approach-to-decentralized-sequencers",level:2},{value:"Efficiency:\u200b",id:"efficiency",level:3},{value:"Scalable and Manageable:\u200b",id:"scalable-and-manageable",level:3},{value:"Solutions Formulated on These Principles\u200b",id:"solutions-formulated-on-these-principles",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Sequencer Set Selection",id:"sequencer-set-selection",level:4},{value:"Layer 2 Blocks Generation",id:"layer-2-blocks-generation",level:3},{value:"Batching",id:"batching",level:3},{value:"Consensus Verification",id:"consensus-verification",level:3},{value:"Summary",id:"summary",level:2},{value:"Roadmap",id:"roadmap",level:2}];function h(e){const n={admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"RVP",src:t(3815).A+"",width:"4000",height:"2000"})}),"\n",(0,s.jsx)(n.h2,{id:"the-importance-of-decentralized-sequencers",children:"The Importance of Decentralized Sequencers"}),"\n",(0,s.jsx)(n.h3,{id:"what-is-a-sequencer-and-what-does-it-do",children:"What is a sequencer and what does it do?"}),"\n",(0,s.jsx)(n.p,{children:"In a traditional Layer 1 blockchain, transactions are packaged and processed by miners in proof-of-work systems or validators nodes in proof-of-stake systems. These entities earn the authority to package, sequence, and produce blocks either through the competitive task of computational mining or via staking-based elections."}),"\n",(0,s.jsx)(n.p,{children:"However, many current Layer 2 designs employ a single role, unburdened by competition or staking costs, responsible for packaging and sequencing all Layer 2 transactions. This entity is known as the \u201csequencer\u201d. Its duties extend beyond sequencing; it is also tasked with generating L2 blocks, periodically committing Layer 2 transactions and state changes to Layer 1, and addressing any potential challenges to its submissions."}),"\n",(0,s.jsx)(n.p,{children:"Centralized sequencers present a challenge due to their sole dominion over the sequencing and packaging of Layer 2 transactions. This monopoly raises concerns, largely stemming from this centralized control."}),"\n",(0,s.jsx)(n.h3,{id:"what-are-the-problems-with-centralized-sequencers",children:"What are the problems with centralized sequencers?"}),"\n",(0,s.jsx)(n.h4,{id:"vulnerability-of-a-single-point-of-failure",children:"Vulnerability of a Single Point of Failure"}),"\n",(0,s.jsx)(n.p,{children:"The proper functioning of Layer 2 is intrinsically tied to the operation of the sequencer. If the sequencer stops working, transactions from all Layer 2 users will not be processed, effectively bringing down Layer 2 operations. The problem is magnified when a single entity controls the sequencer. Should the entity fail, the entirety of the Layer 2 is paralyzed, rendering the system vulnerable to a single point of failure. Therefore, centralized sequencers pose a significant risk to the stability of Layer 2."}),"\n",(0,s.jsx)(n.h4,{id:"excessive-transaction-censorship",children:"Excessive Transaction Censorship"}),"\n",(0,s.jsx)(n.p,{children:"Centralized sequencers have the ability to reject user-submitted transactions, rendering them unprocessable \u2014 a blatant form of transaction censorship. In a scenario where a centralized Layer 2 deliberately blocks transactions involving its governance tokens, panic and selling among users is likely to follow.\nSome solutions allow users to submit their intended transactions directly on Layer 1. However, this process is time-consuming, often taking several hours, and burdens users with Layer 1 gas fees. Therefore, this alternative does not fundamentally solve the problem.\nIn a decentralized sequencer framework, should one sequencer decline a transaction, users can still relay it to alternative sequencers. The content of the next block is ultimately determined through consensus, ensuring no single entity can censor transactions based on personal interests."}),"\n",(0,s.jsx)(n.h4,{id:"monopoly-over-mev",children:"Monopoly Over MEV"}),"\n",(0,s.jsx)(n.p,{children:'Because the sequencer can determine the order (or "sequence") of received transactions, it effectively has a monopoly over all Miner Extractable Value (MEV). In this scenario, users must bear any potential losses incurred by the sequencer\u2019s exclusive control over MEV, necessitating an additional and unwarranted layer of trust in the sequencer.\nDecentralized sequencers introduce a competitive dynamic among multiple entities aiming for MEV. This competition eliminates the monopoly of any single sequencer, mitigating the adverse effects of unchecked MEV on users.'}),"\n",(0,s.jsx)(n.h2,{id:"whats-morphs-approach-to-decentralized-sequencers",children:"What's Morph's Approach to Decentralized Sequencers?"}),"\n",(0,s.jsx)(n.p,{children:"Morph is distinct from other Rollup projects due to the emphasis on establishing a decentralized sequencer network from inception. This design is guided by the following core principles:"}),"\n",(0,s.jsx)(n.h3,{id:"efficiency",children:"Efficiency:\u200b"}),"\n",(0,s.jsx)(n.p,{children:"Morph is first and foremost an Ethereum scaling solution, focused on improved efficiency and cost reduction. Our solution must guarantee fast execution and transaction confirmation at Layer 2 while maintaining the highest possible level of decentralization."}),"\n",(0,s.jsx)(n.h3,{id:"scalable-and-manageable",children:"Scalable and Manageable:\u200b"}),"\n",(0,s.jsx)(n.p,{children:"The sequencer network\u2019s design prioritizes ease of maintenance, expansion, and updating. If one network functionality requires maintenance, it should not disrupt the operation of other functionalities. In addition, the sequencer network should be adaptable and easily upgradable as new and more efficient solutions emerge."}),"\n",(0,s.jsx)(n.h3,{id:"solutions-formulated-on-these-principles",children:"Solutions Formulated on These Principles\u200b"}),"\n",(0,s.jsx)(n.p,{children:"With these principles, Morph\u2019s sequencer network design includes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Modularity: The structure emphasizes modular components that are loosely connected, allowing for swift upgrades or replacements."}),"\n",(0,s.jsx)(n.li,{children:"Byzantine Fault Tolerant (BFT) Consensus: Sequencers employ a BFT consensus for L2 block generation."}),"\n",(0,s.jsx)(n.li,{children:"BLS Signature for Batch Signing: Sequencers sign a collective of L2 blocks using the BLS signature method. The L1 contract then verifies this L2 consensus through the BLS signature."}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Why BLS signature?"}),(0,s.jsx)(n.p,{children:"A current basic signature algorithm such as ECDSA in Ethereum has an excessive cost. This issue arises because the signature data needs to be submitted to the Layer 1 contract and requires payment of the corresponding cost. As the number of validators increases, this cost will also increase proportionally. By using BLS signatures, the cost of uploading signatures can be maintained at a constant level, unaffected by the gradual growth of the sequencer's quantity."})]}),"\n",(0,s.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.p,{children:"The following is a simple illustration of Morph\u2019s decentralized sequencing network architecture."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Sequencer Network Archi",src:t(2884).A+"",width:"3840",height:"2160"})}),"\n",(0,s.jsx)(n.h4,{id:"sequencer-set-selection",children:"Sequencer Set Selection"}),"\n",(0,s.jsx)(n.p,{children:"A complete Morph decentralized sequencer network consists of two parts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sequencer Set"})," : This forms the core group that provides sequencing services"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sequencer Staking Contract"}),": This contract facilitates the selection of the sequencer set via an election process."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Through the sequencer staking contract, members are elected into the sequencer set, where they collaboratively provide services for the Morph network. Periodically, the election results are synchronized to the Layer 1 Rollup contract. This synchronized data is utilized to obtain the BLS aggregate signatures of sequencer network participants for comparison and verification."}),"\n",(0,s.jsx)(n.h3,{id:"layer-2-blocks-generation",children:"Layer 2 Blocks Generation"}),"\n",(0,s.jsx)(n.p,{children:"Given Morph's modular design, each sequencer operates a consensus client that runs BFT to communicate with other sequencers."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Block Generation",src:t(5145).A+"",width:"3540",height:"1992"})}),"\n",(0,s.jsx)(n.p,{children:"Following the BFT consensus protocol, the selected sequencer extracts transactions from the mempool, constructs blocks, and synchronizes these blocks with other sequencers to undergo verification and voting. The end result is the generation of new Layer 2 blocks."}),"\n",(0,s.jsx)(n.h3,{id:"batching",children:"Batching"}),"\n",(0,s.jsx)(n.p,{children:"Considering the costs of uploading to and validating signatures on Layer 1, sequencers will sign a batch of blocks with BLS signatures at designated checkpoints."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"BlockSign",src:t(5271).A+"",width:"3540",height:"1992"})}),"\n",(0,s.jsx)(n.p,{children:"Post-signing, the designated sequencer forwards the collective batch of blocks to Layer 1 through its batch submitter component."}),"\n",(0,s.jsx)(n.h3,{id:"consensus-verification",children:"Consensus Verification"}),"\n",(0,s.jsx)(n.p,{children:"The selected sequencer must submit to the Layer 1 contract:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The aggregated BLS signatures"}),"\n",(0,s.jsx)(n.li,{children:"The batch of transactions"}),"\n",(0,s.jsx)(n.li,{children:"The consensus-determined state"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Layer 1 contract will verify the submitted signature to confirm the transaction's consensus."}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Morph operates a native decentralized sequencer network based on BFT consensus."}),"\n",(0,s.jsx)(n.li,{children:"Through protocol and network optimization, Morph maximizes the scalability of Ethereum while ensuring decentralization."}),"\n",(0,s.jsx)(n.li,{children:"Based on BLS signatures, other participants in Layer 1 and Layer 2 can effectively verify the consensus results of Layer 2, ensuring the security provided by the sequencer network is confirmable at the Layer 1 level."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Stage 1"}),": Close test on morph beta testnet"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Stage 2"}),": Decentralized sequencer network live on mainnet"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Stage 3"}),": Open election of sequencer set"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Stage 4"}),": Open Morph's sequencer network to the public l2 space"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5271:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/batch-sign-8ddddc5b593f0238b63eff3a0f679b32.png"},5145:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/block-con-175b7060545d69ab99290496c4ca3d16.png"},3815:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dseq1-afce583c551d8ca96f458ddb7ed2eac3.jpg"},2884:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/seq1-e90d0e983252714740968a8aaaca0dd8.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);