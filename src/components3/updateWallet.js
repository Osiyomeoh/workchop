const updateWallet = async (newAddress) => {
    try {
      await state.contract.methods.update_wallet_address(state.email, newAddress);
    } catch (e) {
      console.error(e);
    }
  };

  export default updateWallet;