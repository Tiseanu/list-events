import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = props => {
    const [cYear, newYear] = useState('2020');

    const getYearFilterFct = (yearSelected) => {
        newYear(yearSelected);
    }

    const filteredArr = props.myArr.filter(item => {
        return cYear.toString() === item.date.getFullYear().toString();
    });

    return (
        <Card className="expenses">
            <ExpensesFilter getYearFilter={getYearFilterFct} selectedYear={cYear} />
            <ExpensesList filteredArr={filteredArr} />
        </Card>
    );
}

export default Expenses;