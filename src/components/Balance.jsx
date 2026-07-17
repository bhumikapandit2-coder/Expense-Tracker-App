import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { formatMoney } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="mb-6 flex flex-col items-center sm:items-start">
      <h4 className="text-sm uppercase font-semibold tracking-wider text-gray-500 dark:text-gray-400">Your Balance</h4>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-1">{formatMoney(total)}</h1>
    </div>
  )
}
