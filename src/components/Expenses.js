import React, { useState } from 'react';
import '../style/Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const { expenses } = props; // destructure expenses array from props

  // function to capture selected year from drop down menu in ExpenseFilter
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filter expense list by year filteredYear, value for drop down in ExpenseFilter
  const filteredExpenses = expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <div className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {
        //conditionally render expenses list unfiltered if filteredYear value is All
        filteredYear === 'All' ? (
          expenses.map((e) => (
            <ExpenseItem
              key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
            />
          ))
        ) : // conditionally render text message if no expense dates match filteredYear
        !filteredExpenses.length ? (
          <p style={{ color: 'whitesmoke' }}>No Items Found.</p>
        ) : (
          // dynamically render all items in the expenses array after being filtered
          filteredExpenses.map((e) => (
            <ExpenseItem
              key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
            />
          ))
        )
      }
    </div>
  );
};

export default Expenses;
