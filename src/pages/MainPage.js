import React from "react";
import fallingCash from "../images/fallingCash.jpg";
import { Link } from "react-router-dom";
const MainPage = () => (
  <div className="pageContainer">
    {/* <h1>Main Page</h1> */}
    <div
      className="pageContainer full-bg-size bg-view "
      style={{ backgroundImage: `url(${fallingCash})` }}
    >
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
        <button className="center mar_30">
          <Link to="/records">Chart my Spending</Link>
        </button>
        <h3>If you want to control you're spending,</h3>
        <br />
        <h3>you have to know what you're buying!</h3>
      </div>
    </div>
  </div>
);

export default MainPage;
