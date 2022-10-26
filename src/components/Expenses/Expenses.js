import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
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

            {filteredArr.map(item => (
                <ExpenseItem 
                    key={item.id}
                    myTitleArr={item.title} 
                    myPriceArr={item.price} 
                    myDateArr={item.date} />
            ))}

            {/* <ExpenseItem myTitleArr={props.myArr[0].title} myPriceArr={props.myArr[0].price} myDateArr={props.myArr[0].date} />
            <ExpenseItem myTitleArr={props.myArr[1].title} myPriceArr={props.myArr[1].price} myDateArr={props.myArr[1].date} />
            <ExpenseItem myTitleArr={props.myArr[2].title} myPriceArr={props.myArr[2].price} myDateArr={props.myArr[2].date} /> */}
        </Card>
    );
}

export default Expenses;