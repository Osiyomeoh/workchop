import React from "react";
import "./styles.css";
import PrintNavbar from "./PrintNavbar";
import fallingCash from "./images/fallingCash.jpg";
import { BrowserRouter as Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";

const PrintMainPage = () => {
  return (
    <div
      className="pageContainer full-bg-size bg-view "
      style={{ backgroundImage: `url(${fallingCash})` }}
    >
      <PrintNavbar />
      <div className="title_container">
        <div className="right">
          <h1> WHERE'S MY</h1>
          <h1> MONEY???</h1>
        </div>
      </div>
      <button className="mar_30 ">
        <Link to="/expenses">Enter my Expenses</Link>
      </button>{" "}
      <br />
      <div className="center">
        <button className="center mar_30">Chart my Spending</button>
        <h3>If you want to control you're spending,</h3>
        <br />
        <h3>you have to know what you're buying!</h3>
      </div>
      <Link to="/">Login</Link>
      <br />
      <Link to="/main">Main</Link>
      <br />
      <Link to="/records">record</Link>
      <br />
      <Link to="/expenses">expenses</Link>
      <br />
      <Link to="/signup">sign-up</Link>
      <br />
    </div>
  );
};
export default PrintMainPage;
