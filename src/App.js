import ExpenseItem from "./components/ExpenseItem";

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(Date.UTC(2012, 10, 2, 3)).toLocaleString(),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(Date.UTC(2022, 1, 7, 1)).toLocaleString()
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(Date.UTC(2022, 22, 4, 4)).toLocaleString(),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(Date.UTC(2022, 11, 3, 5)).toLocaleString(),
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />

    </div>
  );
}

export default App;
