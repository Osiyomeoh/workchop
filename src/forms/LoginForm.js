import React, { useState } from "react";
const LoginForm = () => {
  const initialFormState = { id: null, username: "", password: "" };
  const [user, setUser] = useState(initialFormState);

  const printValues = (e) => {
    e.preventDefault();
    // check user
    console.log(user.username, user.password);
  };

  const updateField = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  // const handleInputChange = (event) => {
  //   const { username, value } = event.target;
  //   setUser({ ...user, [username]: value });
  // };
  console.log(user);
  return (
    <form className="center" onSubmit={printValues}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={updateField}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={updateField}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};
// I need to add username and password to userInfo array
export default LoginForm;
