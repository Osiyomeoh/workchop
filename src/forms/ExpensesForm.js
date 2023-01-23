import React, { useState } from "react";

const ExpensesForm = () => {
  const initalFormState = {
    // username: { username },
    date: "",
    type: "",
    description: "",
    amount: ""
  };
  const [expense, setExpense] = useState(initalFormState);

  const printExpenses = (e) => {
    e.preventDefault();
    // check expense
    console.log(
      expense.date,
      expense.type,
      expense.description,
      expense.amount
    );
  };

  const updateExpenses = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    });
  };
  console.log(expense);
  return (
    <form className="center" onSubmit={printExpenses}>
      <hr />
      <br />
      <label>
        Date::
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={updateExpenses}
        />
      </label>
      <br />
      <label>
        Type:
        <input
          // change to dropdown menu
          type="text"
          name="type"
          value={expense.type}
          onChange={updateExpenses}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={expense.username}
          onChange={updateExpenses}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          // change to numerical
          type="text"
          name="amount"
          value={expense.password}
          onChange={updateExpenses}
        />
      </label>
      <br />
      <br />
      <br />
      <hr />
      <button className="mar_30">Next Entry</button>
      {/* on submit add entries into ApiInfo array then clear fields for next entry */}
      <button>Done</button>
      {/* on click goto main page */}
    </form>
  );
};
export default ExpensesForm;
