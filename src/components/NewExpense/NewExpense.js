import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = props => {
    const onSubmitExpenseDataFct = (enteredInfos) => {
        // enteredInfos - comes as an object
        const expenseDataObj = {
            ...enteredInfos,
            id: Math.random().toString() // adding new element to the object
        }
        // console.log(expenseDataObj);

        props.onAddToExpenseObject(expenseDataObj);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpenseData={onSubmitExpenseDataFct} />
        </div>
    );
}

export default NewExpense;