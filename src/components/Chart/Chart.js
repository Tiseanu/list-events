import ChartBar from './ChartBar';
import './Chart.css';
import './ChartBar.css';

const Chart = (props) => {
    console.log(props.nrOfItems);
    const valueArray = props.nrOfItems.map(item => item.value);
    const totalMax = Math.max(...valueArray);

    return (
        <div className="chart">
            {props.nrOfItems.map((item, key) => 
                <ChartBar 
                key={key} 
                value={item.value} 
                maxValue={totalMax} 
                label={item.label} />)
            }
        </div>
    )
} 

export default Chart;