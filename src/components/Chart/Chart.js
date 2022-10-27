import ChartBar from './ChartBar';
import './Chart.css';
import './ChartBar.css';

const Chart = (props) => {
    return (
        <div className="chart">
            {props.nrOfItems.map((item) => 
                <ChartBar 
                key={item.name} 
                value={item.value} 
                maxValue={null} 
                label={item.name} />)
            }
        </div>
    )
}

export default Chart;