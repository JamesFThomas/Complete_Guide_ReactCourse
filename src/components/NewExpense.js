import React, { useState } from 'react';
import '../style/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  // function to capture form data after submission
  const savedExpenseData = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toFixed(2).toString(), // create id key on new expense object
    };

    // pass new expense data to prop func from parent component
    props.onAddExpense(newExpense);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveData={savedExpenseData} />
    </div>
  );
};

export default NewExpense;
