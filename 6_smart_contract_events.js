const Web3 = require('web3')
const rpcURL = "http://127.0.0.1:7545"
const web3 = new Web3(rpcURL)
const contract_address = "0x25d489536984bb114d09a069b60cf8720f4066e3"
let abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "age_set",
		"type": "event"
	},
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
const contract = new web3.eth.Contract(abi, contract_address);

contract.getPastEvents(
	'AllEvents',
	{
	  fromBlock: 0,
	  toBlock: 'latest'
	},
	(err, events) => { 
		if(err){
			console.log(err)
		}
		console.log(events) 
	}
  )




