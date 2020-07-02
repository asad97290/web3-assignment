const rpcURL = "https://ropsten.infura.io/v3/cd536b1fb6694ff3813e8b82134919a4"
const account = "0xb3aef82e52372CC56cB6209308af77977d0dd55e"
const web3 = new Web3(rpcURL)
web3.eth.getBalance(account, (err, wei) => {
	if(err){
		console.log("Error = "+err)
	}
	else{
		balance = web3.utils.fromWei(wei, 'ether')
		console.log(balance)
	}
})