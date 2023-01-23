const signUp = async () => {
    try {
      await state.contract.methods
        .sign_up(state.email, 'name', 'user')
        .send({ from: state.account });
      alert('signed up');
    } catch (e) {
      console.error(e);
    }
  };
   export default signUp;