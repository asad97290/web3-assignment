const Web3 = require('web3')
var Tx = require('ethereumjs-tx')
const rpcURL = "http://127.0.0.1:7545"
const web3 = new Web3(rpcURL)
const account = "0xBa8e6ab585d65C91A552E18168481cFedf3E203E"
const contract_address = "0xbdb9b2d484cded60856dfe7cb7851590ccc86d00"
const privateKey = "c0a9382c409c37022b0c3bc6bc57b4a1e8767c6315382756d3a5f1752c7311f1"

const privatekeyBuffer = Buffer.from(privateKey,'hex')
let abi = [
	{
		"inputs": [],
		"name": "getAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setAge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const contract = new web3.eth.Contract(abi, contract_address)
web3.eth.getTransactionCount(account, (err, txCount)=>{
	if(err){
	console.log("Error = "+err)
	}

	else{
		const txObject = {
			nonce:    web3.utils.toHex(txCount),
			gasLimit: web3.utils.toHex(1000000),
			gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
			to: contract_address,
			data : contract.methods.setAge(23).encodeABI()
		}

		const tx = new Tx.Transaction(txObject)
		tx.sign(privatekeyBuffer)
		const serializeTx = tx.serialize()
		const raw = "0x"+serializeTx.toString('hex')

		web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
			if(err){
				console.log("Error in producing hash= "+err)
			}
			else{
				console.log("transaction hash = "+txHash)
			}
		})
	}
})

contract.methods.getAge().call((err, result) => {
	if(err){
		console.log("There is an error ",err);
	}
	else{
	   console.log("Age = ",result) 
	}
})
