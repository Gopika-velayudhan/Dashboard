import React from 'react';

interface Props {
  expenses: number;
}

const ExpensesWidget: React.FC<Props> = ({ expenses }) => {
  return (
    <div className="col-span-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Expenses</h2>
      <p className="text-2xl">${expenses}</p>
    </div>
  );
};

export default ExpensesWidget;
