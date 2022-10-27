import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
    const chartArr = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]; 

    for (const item of props.expenses) {
        const expenseMonth = item.date.getMonth();
        chartArr[expenseMonth].value += item.price;
    }
  
    return (
        <Chart nrOfItems={chartArr} />
    );
}

export default ExpenseChart;