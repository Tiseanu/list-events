import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

const ExpenseItem = props => {
    return (
        <Card className="expense-item">
            <ExpenseDate datee={props.myDateArr} />
            <div className='expense-item__description'>
                <h2>{props.myTitleArr}</h2>
                <div className='expense-item__price'>{props.myPriceArr}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
