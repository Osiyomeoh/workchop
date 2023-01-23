import React, { useState } from "react";
const SignUpForm = () => {
  const initialFormState = {
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  };
  const [signUp, setSignUp] = useState(initialFormState);

  const printSignUps = (e) => {
    e.preventDefault();
    // check user
    console.log(
      signUp.firstname,
      signUp.lastname,
      signUp.username,
      signUp.password
    );
  };

  const updateSignUp = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value
    });
  };
  // const handleInputChange = (event) => {
  //   const { username, value } = event.target;
  //   setUser({ ...user, [username]: value });
  // };
  console.log(signUp);
  return (
    <form className="center" onSubmit={printSignUps}>
      <hr />
      <br />
      <label>
        Firstname:
        <input
          type="text"
          name="firstname"
          value={signUp.firstname}
          onChange={updateSignUp}
        />
      </label>
      <br />
      <label>
        Lastname:
        <input
          type="text"
          name="lastname"
          value={signUp.lastname}
          onChange={updateSignUp}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={signUp.username}
          onChange={updateSignUp}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={signUp.password}
          onChange={updateSignUp}
        />
      </label>
      <br />
      <br />
      <br />
      <hr />
      <button>Submit</button>
      {/* on submit add entries into ApiInfo array then goto main page */}
    </form>
  );
};
export default SignUpForm;
