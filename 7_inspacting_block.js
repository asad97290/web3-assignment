const Web3 = require('web3')
const rpcURL = "http://127.0.0.1:7545"
const web3 = new Web3(rpcURL)

web3.eth.getBlockNumber().then(console.log)
web3.eth.getBlock('latest').then(console.log)

//print last 5 blocks in the chain.
web3.eth.getBlockNumber().then((latest) => {
		for (let i = 0; i < 5; i++) {
			web3.eth.getBlock(latest - i).then(console.log)
		}
})

const hash = "0x23161acfcaa2b1a522ee47a2229b81c216eb09ab790b931a8828d33de63d828d"
web3.eth.getTransactionFromBlock(hash,0).then(console.log)