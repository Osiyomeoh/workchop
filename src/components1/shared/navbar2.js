import React from "react";
import { Link } from "react-router-dom";
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

const Navbar2 = () => {
  return (
    <div>
      {/* <Nav>
        <NavItem>
          <NavLink tag={RRNavLink} to="/main">
            Main
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/expenses">
            Expenses
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/signup">
            Sign Up
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/records">
            Records
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/">
            Log in/out
          </NavLink>
        </NavItem>
      </Nav> */}
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
{/* <!------ Include the above in your HEAD tag ----------> */}

<div class="container">
	<div class="row">
		
	</div>
	
	<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">
    <img src="https://drive.google.com/uc?export=view&id=10ok1M84hpnqNgFbIR7Ux0UZKCguLy9aO" width="50" height="50" class="d-inline-block align-top" alt=""/>
    WorkHub
  </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto topnav">
                <li class="nav-item active">
                    <span class="sr-only">(current)</span>
                </li>
            
               
                <li class="nav-item">
                    <a class="nav-link btn btn-danger text-white" type="button" tag={RRNavLink} to="/signup" data-toggle="modal" data-target="#myModal"><NavLink tag={RRNavLink} to="/signup1">
            Log Out
          </NavLink></a>
                </li>
            </ul>
        </div>

            {/* <!-- The Modal --> */}
    
            

    </nav>
</div>
    </div>
  );
};

export default Navbar2;
