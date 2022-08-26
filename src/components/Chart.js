import React from 'react';
import ChartBar from './ChartBar';
import '../style/Chart.css';

const Chart = (props) => {
  // deconstruct data points from props
  const { dataPoints } = props;

  // create array of just number values from data points array
  const dataPointValues = dataPoints.map((dp) => dp.value);

  // find largest value in data points array
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={totalMax}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
