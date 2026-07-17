import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        History
      </h3>
      <ul className="list-none p-0">
        {transactions.length > 0 ? transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        )) : (
          <p className="text-gray-500 dark:text-gray-400 text-sm italic text-center py-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">No transactions yet. Add one below!</p>
        )}
      </ul>
    </div>
  )
}
