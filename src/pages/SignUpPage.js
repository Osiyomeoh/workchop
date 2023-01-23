import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../forms/SignUpForm";
import AddUser from "../components1/shared/AddUser";

const SignUpPage = () => {
  return (
    <div className="bgColor-ltblue">
      <div className=" ">Sign-Up</div>
      <br />
      <div>
        <SignUpForm AddUser={AddUser} />
      </div>
    </div>
  );
};

export default SignUpPage;
