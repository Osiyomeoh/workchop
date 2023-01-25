import React, { useState, useEffect } from 'react';
import MyNavbar from '../src/components1/shared/MyNavbar';
import Footer from '../src/components1/shared/Footer.jsx';
import "reactstrap/lib/";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "react-bootstrap/Navbar";
// import { Nav } from "react-bootstrap";
import "./styles.css";
import LandingPage from "./pages/LandingPage";
import SignUp1 from "./pages/SignUp1";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ExpensesPage from "./pages/ExpensesPage";
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
         <TransactionProvider><Route path="/Login" exact component={LoginPage} />
         <Route path="/signup1" component={SignUp1} />
          <Route path="/signup" component={SignUpPage} />
           <Route  path="/main" component={MainPage} />
           <Route path="/expenses" component={ExpensesPage} /> 
          
           <Route path="/records" component={RecordsPage} />
           </TransactionProvider>  
         </Switch>
         <Footer/>
       </BrowserRouter>
    
     </>
    );
  };

export default App;