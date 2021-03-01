import * as React from 'react';
import {Chart} from 'react-google-charts';

export const AtomGraficoGoogle = () => {
  return(
  // <Chart
  //   width={400}
  //   height={'300px'}
  //   chartType="AreaChart"
  //   loader={<div>Loading Chart</div>}
  //   data={[
  //     ['Year', 'Sales', 'Expenses'],
  //     ['2013', 1000, 400],
  //     ['2014', null, 460],
  //     ['2015', 660, 1120],
  //     ['2016', 1030, 540],
  //     ['2020', null, 100],
  //   ]}
  //   options={{
  //     title: 'Company Performance',
  //     hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
  //     vAxis: { minValue: 0 },
  //     // For the legend to fit, we make the chart area smaller
  //     chartArea: { width: '50%', height: '70%' },
  //     // lineWidth: 25
  //   }}
  // />




  // <Chart
  //   chartType="ScatterChart"
  //   data={[['x', 'dogs'], [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9]]}
  //   chartEvents={[
  //     {
  //       eventName: 'select',
  //       callback: ({ chartWrapper }) => {
  //         const chart = chartWrapper.getChart()
  //         const selection = chart.getSelection()
  //         if (selection.length === 1) {
  //           const [selectedItem] = selection
  //           const dataTable = chartWrapper.getDataTable()
  //           const { row, column } = selectedItem
  //           alert(
  //             'You selected : ' +
  //               JSON.stringify({
  //                 row,
  //                 column,
  //                 value: dataTable?.getValue(row, column),
  //               }),
  //           )
  //         }
  //         console.log(selection)
  //       },
  //     },
  //   ]}
  // />
    <Chart
      width={'100%'}
      height={'500'}
      chartType="Line"
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: 'date', label: 'Data da avaliação' },
          'Average temperature',
          'Average hours of daylight',
        ],
        [new Date(2014, 0), -0.5, 5.7],
        [new Date(2014, 1), 0.4, 8.7],
        [new Date(2014, 2), 0.5, 12],
        [new Date(2014, 3), 2.9, 15.3],
        [new Date(2014, 4), 6.3, 18.6],
        [new Date(2014, 5), 9, 20.9],
        [new Date(2014, 6), 10.6, 19.8],
        [new Date(2014, 7), 10.3, 16.6],
        [new Date(2014, 8), 7.4, 13.3],
        [new Date(2014, 9), 4.4, 9.9],
        [new Date(2014, 10), 1.1, 6.6],
        [new Date(2014, 11), -0.2, 4.5],
      ]}
      options={{
        chart: {
          title:
            'Average Temperatures and Daylight in Iceland Throughout the Year',
        },
        width: 900,
        height: 500,
      }}
      rootProps={{ 'data-testid': '4' }}
    />




  )
}

export default AtomGraficoGoogle;