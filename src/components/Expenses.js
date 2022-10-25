import ExpenseItem from './ExpenseItem';
import Card from './Card';
import "./Expenses.css";

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem myTitleArr={props.myArr[0].title} myPriceArr={props.myArr[0].price} myDateArr={props.myArr[0].date}/>
            <ExpenseItem myTitleArr={props.myArr[1].title} myPriceArr={props.myArr[1].price} myDateArr={props.myArr[1].date}/>
            <ExpenseItem myTitleArr={props.myArr[2].title} myPriceArr={props.myArr[2].price} myDateArr={props.myArr[2].date}/>
        </Card>
    );
}

export default Expenses;