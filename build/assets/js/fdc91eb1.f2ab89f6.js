"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[4908],{3949:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=i(4848),o=i(8453);const t={title:"Difference between Morph and Ethereum",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},s=void 0,d={id:"how-morph-works/general-protocol-design/difference-between-ethereum-and-morph",title:"Difference between Morph and Ethereum",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/how-morph-works/general-protocol-design/5-difference-between-ethereum-and-morph.md",sourceDirName:"how-morph-works/general-protocol-design",slug:"/how-morph-works/general-protocol-design/difference-between-ethereum-and-morph",permalink:"/docs/how-morph-works/general-protocol-design/difference-between-ethereum-and-morph",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/how-morph-works/general-protocol-design/5-difference-between-ethereum-and-morph.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Difference between Morph and Ethereum",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},sidebar:"DeveloperSidebar",previous:{title:"Transactions Life Cycle",permalink:"/docs/how-morph-works/general-protocol-design/transactions-life-cycle"},next:{title:"Understand Transaction Cost on Morph",permalink:"/docs/build-on-morph/build-on-morph/understand-transaction-cost-on-morph"}},c={},l=[{value:"EVM Opcodes",id:"evm-opcodes",level:2},{value:"EVM Precompiles",id:"evm-precompiles",level:2},{value:"Precompile Limits",id:"precompile-limits",level:3},{value:"State Account",id:"state-account",level:2},{value:"<strong>Additional Fields</strong>",id:"additional-fields",level:3},{value:"<strong>CodeHash</strong>",id:"codehash",level:3},{value:"CodeSize",id:"codesize",level:3},{value:"Block Time",id:"block-time",level:2},{value:"Future EIPs",id:"future-eips",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"There are several technical differences between Ethereum\u2019s EVM and Morph's optimistic zkEVM. We\u2019ve compiled a list to help you understand these distinctions better."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"For most Solidity developers, these technical details won't significantly impact your development experience."})}),"\n",(0,r.jsx)(n.h2,{id:"evm-opcodes",children:"EVM Opcodes"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Opcode"}),(0,r.jsx)(n.th,{children:"Solidity equivalent"}),(0,r.jsx)(n.th,{children:"Morph Behavior"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"BLOCKHASH"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"block.blockhash"})}),(0,r.jsxs)(n.td,{children:["Returns ",(0,r.jsx)(n.code,{children:"keccak(chain_id || block_number)"})," for the last 256 blocks."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"COINBASE"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"block.coinbase"})}),(0,r.jsxs)(n.td,{children:["Returns the pre-deployed fee vault contract address. See ",(0,r.jsx)(n.a,{href:"/docs/build-on-morph/developer-resources/contracts",children:"Contracts"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"DIFFICULTY"})," / ",(0,r.jsx)(n.code,{children:"PREVRANDAO"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"block.difficulty"})}),(0,r.jsx)(n.td,{children:"Returns 0."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"BASEFEE"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"block.basefee"})}),(0,r.jsx)(n.td,{children:"Disabled. If the opcode is encountered, the transaction will be reverted."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SELFDESTRUCT"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"selfdestruct"})}),(0,r.jsx)(n.td,{children:"Disabled. If the opcode is encountered, the transaction will be reverted."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"evm-precompiles",children:"EVM Precompiles"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RIPEMD-160"})," (address ",(0,r.jsx)(n.code,{children:"0x3"}),") ",(0,r.jsx)(n.code,{children:"blake2f"})," (address ",(0,r.jsx)(n.code,{children:"0x9"}),"), and ",(0,r.jsx)(n.code,{children:"point evaluation"})," (address ",(0,r.jsx)(n.code,{children:"0x0a"}),") precompiles are currently not supported. Calls to unsupported precompiled contracts will revert. We plan to enable these precompiles in future hard forks."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"modexp"})," precompile is supported but only supports inputs of size less than or equal to 32 bytes (i.e. ",(0,r.jsx)(n.code,{children:"u256"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ecPairing"})," precompile is supported, but the number of points(sets, pairs) is limited to 4, instead of 6."]}),"\n",(0,r.jsxs)(n.p,{children:["The other EVM precompiles are all supported: ",(0,r.jsx)(n.code,{children:"ecRecover"}),", ",(0,r.jsx)(n.code,{children:"identity"}),", ",(0,r.jsx)(n.code,{children:"ecAdd"}),", ",(0,r.jsx)(n.code,{children:"ecMul"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"precompile-limits",children:"Precompile Limits"}),"\n",(0,r.jsx)(n.p,{children:"Because of a bounded size of the zkEVM circuits, there is an upper limit on the number of calls that can be made for some precompiles. These transactions will not revert, but simply be skipped by the sequencer if they cannot fit into the space of the circuit."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Precompile / Opcode"}),(0,r.jsx)(n.th,{children:"Limit"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"keccak256"})}),(0,r.jsx)(n.td,{children:"3157"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ecRecover"})}),(0,r.jsx)(n.td,{children:"119"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"modexp"})}),(0,r.jsx)(n.td,{children:"23"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ecAdd"})}),(0,r.jsx)(n.td,{children:"50"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ecMul"})}),(0,r.jsx)(n.td,{children:"50"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ecPairing"})}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Dencun upgrade opcode not available",type:"tip",children:(0,r.jsxs)(n.p,{children:["Opcodes from the Dencun upgrade are not yet available on Morph, including ",(0,r.jsx)(n.code,{children:"MCOPY"}),", ",(0,r.jsx)(n.code,{children:"TSTORE"}),", ",(0,r.jsx)(n.code,{children:"TLOAD"}),", ",(0,r.jsx)(n.code,{children:"BLOBHASH"})," and ",(0,r.jsx)(n.code,{children:"BLOBBASEFEE"}),". Additionally, ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-4788",children:"EIP-4788"})," for accessing the Beacon Chain block root is not supported. We recommend using ",(0,r.jsx)(n.code,{children:"shanghai"})," as your EVM target and avoiding using a Solidity version higher than ",(0,r.jsx)(n.code,{children:"0.8.23"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"state-account",children:"State Account"}),"\n",(0,r.jsx)(n.h3,{id:"additional-fields",children:(0,r.jsx)(n.strong,{children:"Additional Fields"})}),"\n",(0,r.jsxs)(n.p,{children:["We added two fields in the current ",(0,r.jsx)(n.code,{children:"StateAccount"})," object: ",(0,r.jsx)(n.code,{children:"PoseidonCodehash"})," and ",(0,r.jsx)(n.code,{children:"CodeSize"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type StateAccount struct {\n\tNonce    uint64\n\tBalance  *big.Int\n\tRoot     common.Hash // merkle root of the storage trie\n\tKeccakCodeHash []byte // still the Keccak codehash\n\t// added fields\n\tPoseidonCodeHash []byte // the Poseidon codehash\n\tCodeSize uint64\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"codehash",children:(0,r.jsx)(n.strong,{children:"CodeHash"})}),"\n",(0,r.jsx)(n.p,{children:"Related to this, we maintain two types of codehash for each contract bytecode: Keccak hash and Poseidon hash."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"KeccakCodeHash"})," is kept to maintain compatibility for ",(0,r.jsx)(n.code,{children:"EXTCODEHASH"}),". ",(0,r.jsx)(n.code,{children:"PoseidonCodeHash"})," is used for verifying the correctness of bytecodes loaded in the zkEVM, where Poseidon hashing is far more efficient."]}),"\n",(0,r.jsx)(n.h3,{id:"codesize",children:"CodeSize"}),"\n",(0,r.jsxs)(n.p,{children:["When verifying ",(0,r.jsx)(n.code,{children:"EXTCODESIZE"}),", it is expensive to load the whole contract data into the zkEVM. Instead, we store the contract size in storage during contract creation. This way, we do not need to load the code \u2014 a storage proof is sufficient to verify this opcode."]}),"\n",(0,r.jsx)(n.h2,{id:"block-time",children:"Block Time"}),"\n",(0,r.jsx)(n.admonition,{title:"Block Time Subject to Change",type:"tip",children:(0,r.jsx)(n.p,{children:"Blocks are produced every second, with an empty block generated if there are no transactions for 5 seconds. However, this frequency may change in the future."})}),"\n",(0,r.jsx)(n.p,{children:"To compare, Ethereum has a block time of ~12 seconds."}),"\n",(0,r.jsx)(n.p,{children:"Reasons for Faster Block Time in Morph\nUser Experience:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A faster, consistent block time provides quicker feedback, enhancing the user experience."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Optimization: As we refine the zkEVM circuits in our testnets, we can achieve higher throughput than Ethereum, even with a smaller gas limit per block or batch."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Notice:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TIMESTAMP"})," will return the timestamp of the block. It will update every second."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BLOCKNUMBER"})," will return an actual block number. It will update every second. The one-to-one mapping between blocks and transactions will no longer apply."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"future-eips",children:"Future EIPs"}),"\n",(0,r.jsxs)(n.p,{children:["Morph closely monitors emerging Ethereum Improvement Proposals (EIPs) and adopts them when suitable. For more specifics, join our community forum or ",(0,r.jsx)(n.a,{href:"https://discord.gg/L2Morph",children:"Discord"})," for discussions."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var r=i(6540);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);