import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

const ExpenseItem = props => {
    // useState(props.myTitleArr);
    const [title, setTitle] = useState(props.myTitleArr);
    const changeTitle = () => {
        setTitle('My new Title');
        // console.log(title);
    };
    return (
        <Card className="expense-item">
            <ExpenseDate datee={props.myDateArr}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.myPriceArr}</div>
            </div>
            {/*<button onClick={() => {alert('clicked')}}>Change Title</button>-*/}
            <button onClick={changeTitle}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
