import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';
    if (props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight, 'background-color': 'blue', fontSize: '12px'}}></div>
            </div>
            <div className="chart-bar__label">{props.name}</div>
        </div>
    )
}

export default ChartBar;