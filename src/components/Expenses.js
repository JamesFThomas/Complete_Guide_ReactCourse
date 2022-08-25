import React, { useState } from 'react';
import '../style/Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const { expenses } = props; // destructure expenses array from props

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {
        // dynamically render all items in the expenses array
        expenses.map((e) => (
          <ExpenseItem date={e.date} title={e.title} amount={e.amount} />
        ))
      }
    </div>
  );
};

export default Expenses;
