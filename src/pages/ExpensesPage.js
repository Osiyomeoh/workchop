import React from "react";
import ExpensesForm from "../forms/ExpensesForm";

const ExpensesPage = () => {
  return (
    <div className=" ">
      <div className=" ">Enter Expenses</div>
      <div className=" ">
        {/* <div >{username}</div> */}
        <ExpensesForm />
      </div>
    </div>

    // if username is null  goto login page
    // if username is valid print out username
  );
};

export default ExpensesPage;
