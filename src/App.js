import React, { useState, useEffect } from 'react';
import MyNavbar from '../src/components1/shared/MyNavbar';
import Footer from '../src/components1/shared/Footer.jsx';
import "reactstrap/lib/";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "react-bootstrap/Navbar";
// import { Nav } from "react-bootstrap";
import "./styles.css";
import LandingPage from "./pages/LandingPage";
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
import { TransactionProvider } from "../src/context/TransactionContext";



const App = () => {
  
    return (
      <> 
      <BrowserRouter>
       <MyNavbar />
         <Switch>
         <Route path="/" exact component={LandingPage} />
         <TransactionProvider><Route path="/Login" exact component={LoginPage} /></TransactionProvider>  
           <Route  path="/main" component={MainPage} />
           <Route path="/expenses"  component={ExpensesPage} /> 
           <Route path="/signup" component={SignUpPage} />
           <Route path="/records" component={RecordsPage} />
         </Switch>
         <Footer/>
       </BrowserRouter>
    
     </>
    );
  };

export default App;