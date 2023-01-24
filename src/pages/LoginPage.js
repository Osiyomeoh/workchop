import React, { useContext } from "react";
import work from "../images/work.jpeg";
import { Link } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";


const LoginPage = () => {
  const {connectWallet, currentAccount} = useContext(TransactionContext);

  return (
    <div
      // fix background image
      className="pageContainer full-bg-size bg-view"
      style={{ backgroundImage: `url(${work})` }}
    >
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      
      
      {!currentAccount && (<button type="button" onClick={connectWallet} class="btn btn-primary btn-lg"> Connect Wallet</button>)}
            </div>
  );
};

export default LoginPage;
