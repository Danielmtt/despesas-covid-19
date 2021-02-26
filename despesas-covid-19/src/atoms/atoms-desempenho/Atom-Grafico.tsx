import * as React from 'react';
import { Chart } from 'react-charts';

export const AtomGrafico = () => {

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [['fev/20', 1], ['mar/20', 2], ['dez/20', 4], ['jan/21', 2], ['fev/21', 7]]
      },
      
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  )
 
  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} tooltip/>
    </div>
  )
  return lineChart;
}

export default AtomGrafico;