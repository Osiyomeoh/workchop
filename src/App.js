import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import SmartContract from '../src/abis/workchop.json';
import MyNavbar from '../src/components1/shared/MyNavbar';
import "reactstrap/lib/";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "react-bootstrap/Navbar";
// import { Nav } from "react-bootstrap";
import "./styles.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ExpensesPage from "./pages/ExpensesPage";
import SignUpPage from "./pages/SignUpPage";
import RecordsPage from "./pages/RecordsPage";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
  BrowserRouter
} from "react-router-dom";



const App = () => {
  
    return (
      <> 
      <BrowserRouter>
       <MyNavbar />
         <Switch>
           <Route path="/" exact component={LoginPage} />
           <Route  path="/main" component={MainPage} />
           <Route path="/expenses"  component={ExpensesPage} /> 
           <Route path="/signup" component={SignUpPage} />
           <Route path="/records" component={RecordsPage} />
         </Switch>
       </BrowserRouter>
    
     </>
    );
  };

export default App;