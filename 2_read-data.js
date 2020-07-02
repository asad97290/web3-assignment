const Web3 = require('web3')
const rpcURL = "http://127.0.0.1:7545"
const web3 = new Web3(rpcURL)
const address = "0xbdb9b2d484cded60856dfe7cb7851590ccc86d00"
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
const contract = new web3.eth.Contract(abi, address);
contract.methods.getAge().call((err, result) => {
	if(err){
		console.log("There is an error ",err);
	}
	else{
	   console.log("Age = ",result) 
	}
});




