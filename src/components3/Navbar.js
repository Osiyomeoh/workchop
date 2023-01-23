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

const NavBar = () => {
  return (
    <div>
      <Nav>
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
      </Nav>
    </div>
  );
};

export default NavBar;
