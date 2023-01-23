const login = async () => {
    try {
      const accountType = await state.contract.methods.login(state.email).call({
        from: state.account,
      });
      console.log('account type:', accountType);
      setState({ ...state, signedIn: true });
    } catch (e) {
      console.error(e);
    }
  };

  export default login;