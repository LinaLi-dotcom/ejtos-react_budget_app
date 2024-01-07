import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const [newCurrency, setCurrency] = useState(currency);

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
      <div style={{ backgroundColor: "lightgreen", padding: '1rem', marginBottom:'1rem' }}>
        <div >
          <label 
          htmlFor="inputCurrencySElect01" >
            Currency ({newCurrency})
          </label>
        </div>
        <select
          className="custom-select"
          id="inputCurrencySelect01"
          onChange={(event) => setCurrency(event.target.value)}
        >
         <option defaultValue>Choose Currency...</option>
          <option value="Dollar $ " name="dollar">
            Dollar $
          </option>
          <option value="Pounds £ " name="pounds">
            Pounds £
          </option>
          <option value="Euro € " name="euro">
            Euro €
          </option>
          <option value="Ruppee ₹ " name="ruppee">
            Ruppee ₹
          </option>
        </select>
      </div>
      <div>
      <span>Budget:</span>
      <label htmlFor="budget"style={{ marginLeft: '1rem', size:10 }}>{newCurrency}</label>
      <input
        id="budget"
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
      </div>
    </div>
  );
};

export default Budget;
