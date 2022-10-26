import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleInputData = (event) => {
        setEnteredTitle(event.target.value);
    }
    const priceInputData = (event) => {
		setEnteredPrice(event.target.value);
    }
    const dateInputData = (event) => {
        setEnteredDate(event.target.value);
    }

    const getSubmitData = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSubmitExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={getSubmitData}>
            <div className="new-expense__controls">
                <div className="d-flex">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleInputData} />
                    </div>
                    <div className="new-expense__control">
                        <label>Price</label>
                        <input type="number" value={enteredPrice} min="0.01" step="0.01" onChange={priceInputData} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateInputData} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;