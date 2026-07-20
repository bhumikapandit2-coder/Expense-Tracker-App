import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { formatMoney } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [currency, setCurrency] = useState("INR");
const [rate, setRate] = useState(1);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const convertedTotal = (total * rate).toFixed(2);

const symbols = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
};

useEffect(() => {
  const fetchRate = async () => {
    if (currency === "INR") {
      setRate(1);
      return;
    }

    try {
      const res = await fetch("https://open.er-api.com/v6/latest/INR");
      const data = await res.json();

      setRate(data.rates[currency]);
    } catch (error) {
      console.log(error);
    }
  };

  fetchRate();
}, [currency]);  

  
return (
  <div className="mb-6 flex flex-col items-center sm:items-start">

    <div className="mb-4">
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white"
      >
        <option value="INR">₹ INR</option>
        <option value="USD">$ USD</option>
        <option value="EUR">€ EUR</option>
        <option value="GBP">£ GBP</option>
      </select>
    </div>

    <h4 className="text-sm uppercase font-semibold tracking-wider text-gray-500 dark:text-gray-400">
      Your Balance
    </h4>

    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-1">
      {symbols[currency]} {convertedTotal}
    </h1>

  </div>
);
}
