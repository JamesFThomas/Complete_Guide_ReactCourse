import { useState } from 'react';
import '../style/ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

const ExpenseItem = (expenses) => {
  const [title, setTitle] = useState(expenses.title);

  const date = expenses.date;
  // console.log(typeof date);
  //   const title = expenses.title;
  const amount = expenses.amount;

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  return (
    <div className='expense-item'>
      <ExpenseDate dateS={date} />
      <div className='expense-item__description'>
        <h2> {title}</h2>
      </div>
      <div className='expense-item__price'> {amount} </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
