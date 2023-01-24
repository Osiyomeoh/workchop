import React from "react";
import work from "../images/wrk.jpeg";
import LoginForm from "../forms/LoginForm";
import AddUser from "../components1/shared/AddUser";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      // fix background image
      className="pageContainer full-bg-size bg-view"
      style={{ backgroundImage: `url(${work})` }}
    >
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main class="px-3">
        <div class="mx-auto">
        <img src="https://drive.google.com/uc?export=view&id=1K87l4YSlYQcvDy1owXfi7XclVs8fdQQq" class="img-fluid mx-auto d-block" width="500" height="250" alt="Responsive image"/>
        </div>
        <br />
      <br />
      <br />
      <br />
  
      <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">Name/Userid</a>
    
    <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
  </main>
      </div>
     
     </div>
  );
};

export default LandingPage;
