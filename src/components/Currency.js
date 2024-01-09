import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);

return (<div
    style={{
      backgroundColor: 'lightgreen',
      padding:'0.5rem',
      marginleft: '2rem',
    }}
  >
    <div>
    <label htmlFor="inputCurrencySElect01">Currency ({newCurrency})</label>
    <select
      className="custom-select"
      id="inputCurrencySelect01"
      onChange={(event) => setNewCurrency(event.target.value)}
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
  </div>

)
};
export default Currency;
