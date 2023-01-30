import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Link } from "react-router-dom";
// import SignUpForm from "../forms/SignUpForm";
// import AddUser from "../components1/shared/AddUser";
import work from "../images/wrk.jpeg";

const User1 = () => {

  const {connectWallet} = useContext(TransactionContext);

  return (
    <div className="pageContainer">
    {/* <h1>Main Page</h1> */}
    <div
      className="pageContainer full-bg-size bg-view "
      style={{ backgroundImage: 'url(${work})' }}
    >
   {/* <!-- Pills navs --> */}
   <div class="d-flex justify-content-center " >
    <form>
      <div class="text-center mb-3">
        <p>Sign up with:</p>
        { (<button type="button" onClick={connectWallet} class="btn btn-primary btn-lg"> Connect Wallet</button>)}
            </div>

      <p class="text-center">or:</p>

      {/* <!-- Name input --> */}
      <div class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div>

      {/* <!-- Username input --> */}
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

      {/* <!-- Email input --> */}
      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

      {/* <!-- Password input --> */}
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

      {/* <!-- Repeat Password input --> */}
      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>

      {/* <!-- Checkbox --> */}
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
</div>
{/* <!-- Pills content --> */}
    </div>
  
  );
};

export default User1;
