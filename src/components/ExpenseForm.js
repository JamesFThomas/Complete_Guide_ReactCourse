import React, { useState } from 'react';

import '../style/ExpenseForm.css';

const ExpenseForm = (props) => {
  // create initial state for form inputs
  const [formTitle, setFormTitle] = useState('');
  const [formAmount, setFormAmount] = useState('');
  const [formDate, setFormDate] = useState('');

  // state for conditional rendering
  const [show, setShow] = useState(false);

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

    // pass submitted form data up to NewExpense.js
    props.onSaveData(formData);

    // clear values from form after submission
    setFormTitle('');
    setFormAmount('');
    setFormDate('');
  };

  // function to render form on button click
  const showComponent = () => {
    // console.log('clicked');
    // console.log(show);
    setShow(!show);
  };

  return (
    <div>
      {show == false ? (
        <button onClick={showComponent}> Enter New Expense </button>
      ) : (
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
            <button onClick={showComponent}> Cancel </button>
            <button type='submit'> Add Expense </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
