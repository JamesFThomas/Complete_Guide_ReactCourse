import React, { useState } from 'react';
import Expenses from './components/Expenses';
import initial_expenses from './data/expenseData';
import NewExpense from './components/NewExpense';

const App = () => {
  // add expenses array to initial app state
  const [expenses, setExpenses] = useState(initial_expenses);

  // func to collect new expense data from expense form
  const addNewExpense = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className='container'>
      <NewExpense onAddExpense={addNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
