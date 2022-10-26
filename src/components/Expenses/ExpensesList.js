import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

// output my expenses list
const ExpensesList = (props) => {
    let filteredContent = <i>No items for this year</i>;
    if (props.filteredArr.length > 0) {
        filteredContent = props.filteredArr.map(item => (
            <ExpenseItem
                key={item.id}
                myTitleArr={item.title}
                myPriceArr={item.price}
                myDateArr={item.date} 
            />
        ))
    }

    return (
        <ul className="expenses-list">
            {filteredContent}
        </ul>
    )
}

export default ExpensesList;