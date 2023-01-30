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

const Company1 = () => {

  const {connectWallet} = useContext(TransactionContext);

  return (
    <div className="pageContainer">
    {/* <h1>Main Page</h1> */}
    
   {/* <!-- Pills navs --> */}
   <div>
   <div class="position-absolute top-left"> <a class="btn btn-warning" href="#" role="button"><NavLink tag={RRNavLink} to="/signup1">
            PREV
          </NavLink></a></div>
  
   <div class="position-absolute top-right"><a class="btn btn-warning" href="#" role="button"><NavLink tag={RRNavLink} to="/company2">
            NEXT
          </NavLink></a></div>
   
   </div>
    
   <br/>
   <br/>  <br/>
   <br/>
   <br/>
   <div class="d-flex justify-content-center " >
   <div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right" style={{
            background: "hsla(0, 0%, 100%, 0.55);",
            // backdrop-filter: "blur(30px);"
         }} >
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Sign up now</h2>
            <form>
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" />
                    <label class="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>
 

              {/* <!-- Submit button --> */}
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Sign up
              </button>

              {/* <!-- Register buttons --> */}
              <div class="text-center">
                <p>or sign up with:</p>
                <button type="button" onClick={connectWallet} class="btn btn-warning bouton-image monBouton">Metamask</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
  {/* <!-- Jumbotron --> */}
</div>
    </div>
  
  );
};

export default Company1;