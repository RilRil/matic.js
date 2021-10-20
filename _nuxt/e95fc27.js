(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{172:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Setup",url:"setup",children:[{text:"Web3.js",url:"web3js"},{text:"Ethers",url:"ethers"}]},{text:"API Architecture",url:"api-architecture"},{text:"POS",url:"pos",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"deposit",url:"deposit"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"isWithdrawExited",url:"is-withdraw-exited"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"isApproved",url:"is-approved"},{text:"isApprovedAll",url:"is-approved-all"},{text:"approve",url:"approve"},{text:"approveAll",url:"approve-all"},{text:"deposit",url:"deposit"},{text:"depositMany",url:"deposit-many"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawStartMany",url:"withdraw-start-many"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitMany",url:"withdraw-exit-many"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"withdrawExitFasterMany",url:"withdraw-exit-faster-many"},{text:"isWithdrawExited",url:"is-withdraw-exited"},{text:"isWithdrawExitedMany",url:"is-withdraw-exited-many"},{text:"transfer",url:"transfer"}]},{text:"isCheckPointed",url:"is-check-pointed"},{text:"depositEther",url:"deposit-ether"}]},{text:"Plasma",url:"plasma",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawChallenge",url:"withdraw-challenge"},{text:"withdrawChallengeFaster",url:"withdraw-challenge-faster"},{text:"withdrawExit",url:"withdraw-exit"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"safeDeposit",url:"safe-deposit"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawChallenge",url:"withdraw-challenge"},{text:"withdrawChallengeFaster",url:"withdraw-challenge-faster"},{text:"withdrawExit",url:"withdraw-exit"},{text:"transfer",url:"transfer"}]},{text:"isCheckPointed",url:"is-check-pointed"},{text:"withdrawExit",url:"withdraw-exit"},{text:"depositEther",url:"deposit-ether"}]},{text:"setProofApi",url:"set-proof-api"},{text:"Advanced",url:"advanced",expand:!0,children:[{text:"ABIManager",url:"abi-manager"},{text:"Plugin",url:"plugin"}]}]},173:function(t,e,r){"use strict";var n={components:{Docs:r(174).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(172);this.savedLinks=t}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v3/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},203:function(t,e,r){"use strict";r.r(e);var n={components:{Layout:r(173).a}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"API Architecture",description:"The library follows common api architecture throughout",keywords:"api architecture, api type, read, write, polygon",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/v3/docs/api-architecture.md"}},[r("p",[t._v("The library follows common api architecture throughout and APIS are divided into two type -")]),t._v(" "),r("ol",[r("li",[t._v("Read API")]),t._v(" "),r("li",[t._v("Write API")])]),t._v(" "),r("h2",{attrs:{id:"readapi"}},[t._v("Read API")]),t._v(" "),r("p",[t._v("Read api does not publish anything on blockchain, so do not consume any gas. Example of read apis are - "),r("code",[t._v("getBalance")]),t._v(", "),r("code",[t._v("isWithdrawExited")]),t._v(" etc.")]),t._v(" "),r("p",[t._v("Let's see an example of read api -")]),t._v(" "),r("pre",[r("code",[t._v("const erc20 = posClient.erc20('<token address>');\nconst balance = await erc20.getBalance('<user address>')\n")])]),t._v(" "),r("p",[t._v("read api are very simple and returns result directly.")]),t._v(" "),r("h2",{attrs:{id:"2writeapi"}},[t._v("2. Write API")]),t._v(" "),r("p",[t._v("Write api publish some data on blokchain, so consume gas. Example of write apis are - "),r("code",[t._v("approve")]),t._v(", "),r("code",[t._v("deposit")]),t._v(" etc.")]),t._v(" "),r("p",[t._v("When you are calling a write API - you need two data from the result.")]),t._v(" "),r("ol",[r("li",[t._v("TransactionHash")]),t._v(" "),r("li",[t._v("TransactionReceipt")])]),t._v(" "),r("p",[r("br"),t._v("\nLet's see an example of write api and get transactionhash and receipt -")]),t._v(" "),r("pre",[r("code",[t._v("const erc20 = posClient.erc20('<token address>');\n\n// send the transaction\nconst result = await erc20.approve(10);\n\n// get transaction hash\n\nconst txHash = await result.getTransactionHash();\n\n// get receipt\n\nconst receipt = await result.getReceipt();\n")])]),t._v(" "),r("h3",{attrs:{id:"transactionoption"}},[t._v("Transaction option")]),t._v(" "),r("p",[t._v("There are some configurable option available for all API. The configuration can be passed in parameter.")]),t._v(" "),r("p",[t._v("Available configuration are -")]),t._v(" "),r("ul",[r("li",[t._v("from?: string | number - The address transactions should be made from.")]),t._v(" "),r("li",[t._v("to?: string - The address transactions should be made to.")]),t._v(" "),r("li",[t._v("value?: number | string | BN - The value transferred for the transaction in wei.")]),t._v(" "),r("li",[t._v("gasLimit?: number | string - The maximum gas provided for a transaction (gas limit).")]),t._v(" "),r("li",[t._v("gasPrice?: number | string | BN - The gas price in wei to use for transactions.")]),t._v(" "),r("li",[t._v("data?: string - The byte code of the contract.")]),t._v(" "),r("li",[t._v("nonce?: number;")]),t._v(" "),r("li",[t._v("chainId?: number;")]),t._v(" "),r("li",[t._v("chain?: string;")]),t._v(" "),r("li",[t._v("hardfork?: string;")]),t._v(" "),r("li",[t._v("returnTransaction?: boolean - making it true will return the transaction object which can be used to send transaction manually.")])]),t._v(" "),r("p",[r("br"),t._v("\nLet's see an example by configuring gasPrice -")]),t._v(" "),r("pre",[r("code",[t._v("const erc20RootToken = posClient.erc20(<root token address>,true);\n\n// approve 100 amount\nconst approveResult = await erc20Token.approve(100, {\n    gasPrice: '4000000000',\n});\n\nconst txHash = await approveResult.getTransactionHash();\n\nconst txReceipt = await approveResult.getReceipt();\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);