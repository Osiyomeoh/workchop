import React from "react";
import "./styles.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
const PrintNavbar = () => {
  return (
    <Navbar className="bgColor-ltblue">
      <Nav className="font-32 pad-20lr">
        <span className="pad-20lr">
          <Link to="/main">Main</Link>
        </span>
        <span className="pad-20lr">
          <Link to="/expenses">Expenses</Link>
        </span>
        <span className="pad-20lr">
          <Link to="/records">Records</Link>
        </span>
        <span className="pad-20lr">
          <Link to="/">Log-out</Link>
        </span>
      </Nav>
    </Navbar>
  );
};
export default PrintNavbar;
