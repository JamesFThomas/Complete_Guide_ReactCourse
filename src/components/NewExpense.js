import React, { useState } from 'react';
import '../style/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  // function to capture form data after submission
  const savedExpenseData = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(), // create id key on new expense object
    };

    console.log(newExpense); // check submitted form data
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveData={savedExpenseData} />
    </div>
  );
};

export default NewExpense;
