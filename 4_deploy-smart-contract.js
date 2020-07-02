var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const rpcURL = "http://127.0.0.1:7545"
const web3 = new Web3(rpcURL)

const account = "0xBa8e6ab585d65C91A552E18168481cFedf3E203E"
const privateKey = "c0a9382c409c37022b0c3bc6bc57b4a1e8767c6315382756d3a5f1752c7311f1"
const data = "0x6080604052601760005534801561001557600080fd5b5060c7806100246000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063967e6e65146037578063d5dcf127146053575b600080fd5b603d607e565b6040518082815260200191505060405180910390f35b607c60048036036020811015606757600080fd5b81019080803590602001909291905050506087565b005b60008054905090565b806000819055505056fea2646970667358221220b3eaa3476ab7ad77de35599f835a34ad273b8b5ea9291717c24578b3c071243664736f6c63430006000033"
const privatekeyBuffer = Buffer.from(privateKey,'hex')

web3.eth.getTransactionCount(account, (err, txCount)=>{
	if(err){
	console.log("Error = "+err)
	}

	else{
		const txObject = {
			nonce:    web3.utils.toHex(txCount),
			gasLimit: web3.utils.toHex(1000000),
			gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
			data : data
		}

		const tx = new Tx.Transaction(txObject)
		tx.sign(privatekeyBuffer)
		const serializeTx = tx.serialize()
		const raw = "0x"+serializeTx.toString('hex')

		web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
			if(err){
				console.log("Error = "+err)
			}
			else{
				console.log(" transaction hash = "+txHash)
			}
		})
	}
})

