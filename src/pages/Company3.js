import React, { useContext, useState } from "react";
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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const Company3 = () => {

  const {connectWallet} = useContext(TransactionContext);
  const [key, setKey] = useState('home');

  return (
    <div className="pageContainer">
    {/* <h1>Main Page</h1> */}
    
   {/* <!-- Pills navs --> */}
   <div>
   <div class="position-absolute top-left"> <a class="btn btn-warning" href="#" role="button"><NavLink tag={RRNavLink} to="/company1">
            Back
          </NavLink></a></div>
  
   
   
   </div>
    
   <br/>
   <br/>  <br/>
   <br/>
   <br/>
   <div class="mx-auto" style={{width: `1200px`}}>
   
 
{/* <!------ Include the above in your HEAD tag ----------> */}

<div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://icon-library.com/images/icon-company/icon-company-26.jpg" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        Company Profile
                                    </h5>
                                    <h6>
                                        Company Name
                                    </h6>
                                    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="edit" title="Edit Details">
        <p class="text-dark">new</p>
      </Tab>
      <Tab eventKey="team" title="Edit Team">
        <p class="text-dark">From you have I been absent in the spring, When proud-pied April, dress'd in all his trim, Hath put a spirit of youth in every thing, That heavy Saturn laugh'd and leap'd with him. Yet nor the lays of birds, nor the sweet smell Of different flowers in odour and in hue, Could make me any summer's story tell, Or from their proud lap pluck them where they grew: Nor did I wonder at the lily's white, Nor praise the deep vermilion in the rose;</p>
      </Tab>
      <Tab eventKey="request" title="Request" >
        
      </Tab>
    </Tabs>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                </div>
                    </form>  
                </div>
                    
        </div>
</div>

  
  );
};

export default Company3;
