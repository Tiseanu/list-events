import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

// output my expenses list
const ExpensesList = (props) => {
    if (props.filteredArr.length === 0) {
        return <h2 className="expenses-list__fallback">No items for the year selected.</h2>;
    }
    return (
        <ul className="expenses-list">
            {props.filteredArr.map(item => (
				<ExpenseItem
					key={item.id}
					myTitleArr={item.title}
					myPriceArr={item.price}
					myDateArr={item.date} 
				/>
			))}
        </ul>
    )
}

export default ExpensesList;