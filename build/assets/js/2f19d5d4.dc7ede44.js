"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[9640],{582:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=o(3274),t=o(2333);const l={title:"Deploy Contracts on Morph",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},i=void 0,s={id:"build-on-morph/code-examples/deploy-contract-on-morph",title:"Deploy Contracts on Morph",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/build-on-morph/code-examples/1-deploy-contract-on-morph.md",sourceDirName:"build-on-morph/code-examples",slug:"/build-on-morph/code-examples/deploy-contract-on-morph",permalink:"/docs/build-on-morph/code-examples/deploy-contract-on-morph",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/code-examples/1-deploy-contract-on-morph.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Deploy Contracts on Morph",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},sidebar:"DevSidebar",previous:{title:"Create a Safe Multi-Signature Wallet",permalink:"/docs/build-on-morph/developer-resources/create-a-safe-multi-signature-wallet"},next:{title:"Intro to SDK",permalink:"/docs/build-on-morph/sdk/globals"}},a={},c=[{value:"Deploy with Hardhat",id:"deploy-with-hardhat",level:2},{value:"Clone the repo",id:"clone-the-repo",level:3},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Compile",id:"compile",level:3},{value:"Test",id:"test",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify your contracts on Morph Explorer",id:"verify-your-contracts-on-morph-explorer",level:3},{value:"Deploy contracts with Foundry",id:"deploy-contracts-with-foundry",level:2},{value:"Clone the repo",id:"clone-the-repo-1",level:3},{value:"Install Foundry",id:"install-foundry",level:3},{value:"Compile",id:"compile-1",level:3},{value:"Deploy",id:"deploy-1",level:3},{value:"Verify",id:"verify",level:3},{value:"Questions and Feedback",id:"questions-and-feedback",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The Morph Holesky Testnet allows anyone to deploy a smart contract on Morph. In this tutorial, you will learn how to deploy a contract on Morph Holesky using common tools for developing on Ethereum."}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.a,{href:"https://github.com/morph-l2/morph-examples/tree/main/contract-deployment-demos",children:"demo repo"})," illustrates contract deployment with ",(0,r.jsx)(n.a,{href:"https://hardhat.org/",children:"Hardhat"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/foundry-rs/foundry",children:"Foundry"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Before you start deploying the contract, you need to request test tokens from a Holesky faucet and use the\n",(0,r.jsx)(n.a,{href:"https://bridge-holesky.morphl2.io",children:"bridge"})," to transfer some test ETH from ",(0,r.jsx)(n.em,{children:"Holesky"})," to ",(0,r.jsx)(n.em,{children:"Morph Holesky"}),"."]}),(0,r.jsxs)(n.p,{children:["See our ",(0,r.jsx)(n.a,{href:"/docs/quick-start/faucet",children:"Faucet"})," for details."]})]}),"\n",(0,r.jsx)(n.h2,{id:"deploy-with-hardhat",children:"Deploy with Hardhat"}),"\n",(0,r.jsx)(n.h3,{id:"clone-the-repo",children:"Clone the repo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/morph-l2/morph-examples.git\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["If you haven't already, install ",(0,r.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"nodejs"})," and ",(0,r.jsx)(n.a,{href:"https://classic.yarnpkg.com/lang/en/docs/install",children:"yarn"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd contract-deployment-demos/hardhat-demo\nyarn install\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will install everything you need include hardhat for you."}),"\n",(0,r.jsx)(n.h3,{id:"compile",children:"Compile"}),"\n",(0,r.jsx)(n.p,{children:"Compile your contract"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn compile\n"})}),"\n",(0,r.jsx)(n.h3,{id:"test",children:"Test"}),"\n",(0,r.jsx)(n.p,{children:"This will run the test script in test/Lock.ts"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn test\n"})}),"\n",(0,r.jsx)(n.h3,{id:"deploy",children:"Deploy"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:".env"})," file following the example ",(0,r.jsx)(n.code,{children:".env.example"})," in the root directory. Change ",(0,r.jsx)(n.code,{children:"PRIVATE_KEY"})," to your own account private key in the ",(0,r.jsx)(n.code,{children:".env"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"And Change the network settings in the hardhat.config.ts file with the following information:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:' morphTestnet: {\n   url: process.env.MORPH_TESTNET_URL || "",\n   accounts:\n     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n }\n'})}),"\n",(0,r.jsx)(n.p,{children:"Then run the following command to deploy the contract on the Morph Holesky Testnet. This will run the deployment script that set the initialing parameters, you can edit the script in scripts/deploy.ts"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn deploy:morphTestnet\n"})}),"\n",(0,r.jsx)(n.h3,{id:"verify-your-contracts-on-morph-explorer",children:"Verify your contracts on Morph Explorer"}),"\n",(0,r.jsx)(n.p,{children:"To verify your contract through hardhat, you need to add the following Etherscan and Sourcify configs to your hardhat.config.js file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  networks: {\n    morphTestnet: { ... }\n  },\n  etherscan: {\n    apiKey: {\n      morphTestnet: 'anything',\n    },\n    customChains: [\n      {\n        network: 'morphTestnet',\n        chainId: 2810,\n        urls: {\n          apiURL: 'https://explorer-api-holesky.morphl2.io/api? ',\n          browserURL: 'https://explorer-holesky.morphl2.io/',\n        },\n      },\n    ],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then run the hardhat verify command to finish the verification"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx hardhat verify --network morphTestnet DEPLOYED_CONTRACT_ADDRESS <ConstructorParameter>\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx hardhat verify --network morphTestnet 0x8025985e35f1bAFfd661717f66fC5a434417448E '0.00001'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once succeed, you can check your contract and the deployment transaction on ",(0,r.jsx)(n.a,{href:"https://explorer-holesky.morphl2.io",children:"Morph Holesky Explorer"})]}),"\n",(0,r.jsx)(n.h2,{id:"deploy-contracts-with-foundry",children:"Deploy contracts with Foundry"}),"\n",(0,r.jsx)(n.h3,{id:"clone-the-repo-1",children:"Clone the repo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/morph-l2/morph-examples.git\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-foundry",children:"Install Foundry"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -L https://foundry.paradigm.xyz | bash\nfoundryup\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then go the right folder of our example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd contract-deployment-demos/foundry-demo\n"})}),"\n",(0,r.jsx)(n.h3,{id:"compile-1",children:"Compile"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"forge build\n"})}),"\n",(0,r.jsx)(n.h3,{id:"deploy-1",children:"Deploy"}),"\n",(0,r.jsx)(n.p,{children:"A Deployment script and use of environment variables has already been set up for you. You can view the script at script/Counter.s.sol"}),"\n",(0,r.jsx)(n.p,{children:"Rename your .env.example file to .env and fill in your private key. The RPC URL has already been filled in along with the verifier URL."}),"\n",(0,r.jsx)(n.p,{children:"To use the variables in your .env file run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"source .env\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can now deploy to Morph with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"forge script script/Counter.s.sol --rpc-url $RPC_URL --broadcast --private-key $DEPLOYER_PRIVATE_KEY --legacy\n"})}),"\n",(0,r.jsx)(n.p,{children:"Adjust as needed for your own script names."}),"\n",(0,r.jsx)(n.h3,{id:"verify",children:"Verify"}),"\n",(0,r.jsx)(n.p,{children:"Verification requires some flags passed to the normal verification script. You can verify using the command below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" forge verify-contract YourContractAddress Counter\\\n  --chain 2810 \\\n  --verifier-url $VERIFIER_URL \\\n  --verifier blockscout --watch\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once succeed, you can check your contract and the deployment transaction on ",(0,r.jsx)(n.a,{href:"https://explorer-holesky.morphl2.io",children:"Morph Holesky Explorer"})]}),"\n",(0,r.jsx)(n.h2,{id:"questions-and-feedback",children:"Questions and Feedback"}),"\n",(0,r.jsxs)(n.p,{children:["Thank you for participating in and developing on the Morph Holesky Testnet! If you encounter any issues, join our ",(0,r.jsx)(n.a,{href:"https://discord.com/invite/5SmG4yhzVZ",children:"Discord"})," and find us at #dev-help channel."]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2333:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var r=o(9474);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);