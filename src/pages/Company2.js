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
   <div class="position-absolute top-left"> <a class="btn btn-warning" href="#" role="button"><NavLink tag={RRNavLink} to="/signup1">
            PREV
          </NavLink></a></div>
  
   <div class="position-absolute top-right"><a class="btn btn-warning" href="#" role="button"><NavLink tag={RRNavLink} to="/signup1">
            NEXT
          </NavLink></a></div>
   
   </div>
    
   <br/>
   <br/>  <br/>
   <br/>
   <br/>
   <div class="">
   
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
  <label class="form-label" for="form4Example3">Message</label>
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
    
  </div>

  {/* <!-- Checkbox --> */}
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
    <label class="form-check-label" for="form4Example4">
      Send me a copy of this message
    </label>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
</form>
  {/* <!-- Jumbotron --> */}
</div>
</div>
  
  );
};

export default Company2;
