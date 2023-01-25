import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Link } from "react-router-dom";
//import SignUpForm from "../forms/SignUpForm";
// import AddUser from "../components1/shared/AddUser";
import workh from "../images/work.jpeg";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";


const SignUp1 = () => {

  const {connectWallet} = useContext(TransactionContext);

  return (
    <div className="pageContainer">
    {/* <h1>Main Page</h1> */}
    <div class="d-flex justify-content-center ">
    <br />
      <br />
      <br />
      <br />
    <div class="card " style={{width: "18rem"}}>
  <img class="card-img-top" src="https://drive.google.com/uc?export=view&id=1ecIvw6IMsvTY8dIGM9W-yj7dIfYajfTF"  width="500" height="300" alt="Card image cap"/>
  <div class="card-body justify-content-center">
 
   
    <button href="#" type="button"  class="btn btn-warning text-white"><NavLink tag={RRNavLink} to="/signup">Company</NavLink></button>
  </div>
</div>
<div class="card " style={{width: "18rem"}}>
  <img class="card-img-top" src="https://drive.google.com/uc?export=view&id=1nNstGc5iXR_pcUjBa0CWc-yxCWB3JPbD" width="500" height="300" alt="Card image cap"/>
  <div class="card-body justify-content-center">
    
   
    <button href="#" type="button"  class="btn btn-warning text-white"><NavLink tag={RRNavLink} to="/signup">Developer</NavLink></button>
  </div>
</div>
    </div>
    <br />
      <br />
      <br />
      <br />
</div>
  );
};

export default SignUp1;
