const initWeb3 = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      try {
        const web3 = new Web3(window.ethereum);
        const account = (await web3.eth.getAccounts())[0];
        const netId = await web3.eth.net.getId();
        const address = SmartContract.networks[netId].address;
        const contract = new web3.eth.Contract(SmartContract.abi, address);
        const accountId = await contract.methods.address_to_id(account).call();
        setState({
          ...state,
          web3,
          account,
          contract,
          accountId,
          loaded: true,
        });
        console.log('setup complete');
      } catch (e) {
        alert(e);
      }
    } else {
      alert('web3 not detected');
    }
  };

  export default initWeb3 ;
  