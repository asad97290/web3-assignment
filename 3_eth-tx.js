var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const rpcURL = "http://127.0.0.1:7545"
const web3 = new Web3(rpcURL)

const account1 = "0xBa8e6ab585d65C91A552E18168481cFedf3E203E"
const account2 = "0x97FD83F4e47415d6A47262522c126cA88D01e811"

const privateKey1 = "c0a9382c409c37022b0c3bc6bc57b4a1e8767c6315382756d3a5f1752c7311f1"
const privateKey2 = "b914faaee3acde5706149716023e30f4b0cd3d6a56c8127fecdecda9ac259e7d"

const privatekey1Buffer = Buffer.from(privateKey1,'hex')
const privatekey2Buffer = Buffer.from(privateKey2,'hex')

web3.eth.getTransactionCount(account1, (err, txCount)=>{
	if(err){
		console.log("Error = "+err)
	}
	else{
const txObject = {
		nonce:    web3.utils.toHex(txCount),
		to:       account2,
		value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
		gasLimit: web3.utils.toHex(21000),
		gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
	}


const tx = new Tx.Transaction(txObject)
tx.sign(privatekey1Buffer)


const serializeTx = tx.serialize()

const raw = "0x"+serializeTx.toString('hex')
web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
	if(err){
		
		console.log("Error = "+err)
	}
	else{
		console.log(" transaction hash = "+txHash)
		
}})
	}
})