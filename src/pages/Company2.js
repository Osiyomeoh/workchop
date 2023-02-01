import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Link } from "react-router-dom";
// import SignUpForm from "../forms/SignUpForm";
// import AddUser from "../components1/shared/AddUser";
import work from "../images/wrk.jpeg";
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

const Company2 = () => {

  const {connectWallet} = useContext(TransactionContext);

  return (
    <div className="pageContainer">
    {/* <h1>Main Page</h1> */}
    
   {/* <!-- Pills navs --> */}
   <div>
   <div class="position-absolute top-left"> <a class="btn btn-warning" href="#" role="button"><NavLink tag={RRNavLink} to="/company1">
            Back
          </NavLink></a></div>
  
   
   
   </div>
    
   <br/>
   <br/>  <br/>
   <br/>
   <br/>
   <div class="mx-auto" style={{width: `700px`}}>
   
   <form>
  {/* <!-- Name input --> */}

  <div class="form-outline mb-2">
  <label class="form-label" for="form4Example1">Company's Description</label>
  <textarea class="form-control" id="form4Example3" rows="4"></textarea>
   
  </div>

  {/* <!-- Email input --> */}
  <div class="form-outline mb-4 col-xs-4">
  <label class="form-label" for="form4Example2">Official website</label>
    <input type="email" id="form4Example2" class="form-control" />
    
  </div>

  {/* <!-- Message input --> */}
  <div class="form-outline mb-4">
  <label class="form-label" for="form4Example3">Enter your Company's first two managers</label>
    <textarea class="form-control" id="form4Example3" placeholder="Manager 1" rows="1"></textarea>
    
    <textarea class="form-control" id="form4Example3" placeholder="Manager 2"  rows="1"></textarea>
    
  </div>

  

  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-warning btn-block"><NavLink tag={RRNavLink} to="/company3">
            Finish
          </NavLink></button>
</form>
  {/* <!-- Jumbotron --> */}
</div>
</div>
  
  );
};

export default Company2;
