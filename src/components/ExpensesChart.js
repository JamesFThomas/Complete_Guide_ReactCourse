import React from 'react';

import Chart from './Chart';

const ExpensesChart = (props) => {
  //destructure expenses from props
  const { expenses } = props;

  //console.log('expenses ++++> ', expenses); // expense objects are in expenses array prop

  // initial dataPoint objects
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // update dataPoint objects value using for-in loop
  for (let expense of expenses) {
    // get expense month from each expense object
    let expenseMonth = new Date(expense.date).getMonth();
    // update local data point object with filteredExpenses array values
    chartDataPoints[expenseMonth].value = expense.amount;
  }
  // console.log(chartDataPoints);

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
