import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (expenses) => {

    const date = expenses.date
    const title = expenses.title
    const amount = expenses.amount

    return (
        <div className="expense-item">
            <ExpenseDate dateS={date} />
            <div className="expense-item__description">
                <h2> {title}</h2>
            </div>
            <div className="expense-item__price" > {amount} </div>
        </div>
    );
}

export default ExpenseItem;