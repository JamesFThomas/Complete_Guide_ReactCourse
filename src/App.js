import Expenses from './components/Expenses';
import expenses from './data/expenseData';
import NewExpense from './components/NewExpense';

const App = () => {
  // func to collect new expense data from expense form
  const addNewExpense = (expense) => {
    //check to see if data passed properly
    console.log('In App.js =========>', expense);
  };

  return (
    <div className='container'>
      <NewExpense onAddExpense={addNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
