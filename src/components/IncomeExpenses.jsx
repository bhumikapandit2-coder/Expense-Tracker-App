import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { formatMoney } from '../utils/format';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="flex justify-between bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl rounded-3xl p-6 mb-8 border border-white/20 dark:border-gray-700/50">
      <div className="flex-1 flex flex-col items-center justify-center border-r border-gray-200 dark:border-gray-700">
        <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400 mb-2">Income</h4>
        <p className="text-2xl font-black text-emerald-500 tracking-tight">{formatMoney(income)}</p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400 mb-2">Expense</h4>
        <p className="text-2xl font-black text-rose-500 tracking-tight">{formatMoney(expense)}</p>
      </div>
    </div>
  )
}
