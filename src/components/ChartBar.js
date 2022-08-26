import React from 'react';

import '../style/ChartBar.css';

const ChartBar = (props) => {
  // variable to determine chart bar fill height / %
  let fillHeight;

  // destructure values from props
  const { maxValue, value, label } = props;

  if (maxValue > 0) {
    fillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: fillHeight }}></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  );
};

export default ChartBar;
