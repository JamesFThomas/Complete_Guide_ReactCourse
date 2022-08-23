import Expenses from './components/Expenses';
import expenses from './data/expenseData';
import NewExpense from './components/NewExpense';

const App = () => {
  return (
    <div className='container'>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
