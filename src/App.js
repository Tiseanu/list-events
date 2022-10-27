import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Chart from './components/Chart/Chart';

let expensesArr = [
  { id: 'e1', title: 'Toilet Paper', price: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', price: 799.49, date: new Date(2022, 2, 12) },
  { id: 'e3', title: 'Car Insurance', price: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', price: 450, date: new Date(2021, 5, 12) }
];

const App = () => {
  const [cArr, updatedArr] = useState(expensesArr);
  
  const AddToExpenseObjectFct = (newExpense) => {
    expensesArr = [
      newExpense,
      ...expensesArr
    ]
    updatedArr(expensesArr);
  }

  const nrOfItemsArr = [
    {name: 'Jan', value: '2'},
  ]

  return (
    <div id='expenseWrapper'>
      <h1>List of items</h1>
      <NewExpense onAddToExpenseObject={AddToExpenseObjectFct} />

      <Chart nrOfItems={nrOfItemsArr} />

      <Expenses myArr={cArr} />
    </div>
  );
}

export default App;