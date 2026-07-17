import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { formatMoney } from '../utils/format';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const colorClass = transaction.amount < 0 
    ? 'border-r-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20' 
    : 'border-r-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20';
  
  const textClass = transaction.amount < 0 ? 'text-rose-500' : 'text-emerald-500';

  return (
    <li className={`group relative bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 mb-3 flex justify-between items-center border-r-4 ${colorClass} transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md cursor-default`}>
      <span className="font-medium text-gray-800 dark:text-gray-200">{transaction.text}</span>
      <span className={`font-bold ${textClass}`}>{sign}{formatMoney(Math.abs(transaction.amount))}</span>
      <button 
        onClick={() => deleteTransaction(transaction.id)}
        className="absolute -left-3 top-1/2 -translate-y-1/2 bg-rose-500 text-white w-7 h-7 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-sm shadow-sm hover:bg-rose-600 focus:outline-none cursor-pointer"
        aria-label="Delete transaction"
      >
        x
      </button>
    </li>
  )
}
