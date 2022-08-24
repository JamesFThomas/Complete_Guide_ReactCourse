import React, { useState } from 'react';

import '../style/ExpenseForm.css';

const ExpenseForm = () => {
  // create initial state using single hook for each form input
  const [formTitle, setFormTitle] = useState('');
  const [formAmount, setFormAmount] = useState('');
  const [formDate, setFormDate] = useState('');

  // functions to capture input value change on form
  const onTitleChange = (e) => {
    setFormTitle(e.target.value);
  };
  const onAmountChange = (e) => {
    setFormAmount(e.target.value);
  };
  const onDateChange = (e) => {
    setFormDate(e.target.value);
  };

  // function to capture all form values when submitted
  const onFormSubmit = (e) => {
    // stop app from re-rendering components
    e.preventDefault();

    // gather all form values into single object
    const formData = {
      title: formTitle,
      amount: formAmount,
      date: new Date(formDate), // take form date and makes new date object
    };

    console.log(formData);
    // clear values from form after submission
    setFormTitle('');
    setFormAmount('');
    setFormDate('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={onTitleChange} value={formTitle} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            onChange={onAmountChange}
            value={formAmount}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            onChange={onDateChange}
            value={formDate}
            min='2019-01-01'
            max='2028-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
