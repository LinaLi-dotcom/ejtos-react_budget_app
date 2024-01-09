import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  // const [newCurrency, setNewCurrency] = useState(currency);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    var newValue = parseInt(event.target.value);
    if (newValue > 20000) {
      alert("The value cannot exceed £20000!");
      setNewBudget("");
      return;
    } else if (newValue < totalExpenses) {
      alert("The value cannot be less than spending £" + totalExpenses);
      setNewBudget("");
      return;
    } else {
      setNewBudget(newValue);
    }
  };
  return (
    <div className="alert alert-secondary">
      <div>
      <span>Budget:</span>
      <div>
      <label 
      htmlFor="budget"
      style={{ marginLeft: '1rem', size:10 }}
      >{currency}</label>
      </div>
      <input
        id="budget"
        type="number"
        step="10"
        value={newBudget}
        onChange={
          handleBudgetChange}
      ></input>
      </div>
    </div>
  );
};

export default Budget;
