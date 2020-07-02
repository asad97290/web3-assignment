const Web3 = require('web3')
const rpcURL = "http://127.0.0.1:7545"
const web3 = new Web3(rpcURL)

web3.eth.getGasPrice().then((result)=>{
		console.log(web3.utils.fromWei(result,'ether'))
})

//build in helper hashing function
console.log(web3.utils.sha3('Asadullah khan BCC007276'))
console.log(web3.utils.keccak256('Asadullah khan BCC007276'))
// generating a random 32 byte hex
console.log(web3.utils.randomHex(32))

const _ = web3.utils._

_.each({ name: 'Asadullah khan', roll_no: 'BCC007276' }, (value, key) => {
	console.log(key + " : " + value)
})