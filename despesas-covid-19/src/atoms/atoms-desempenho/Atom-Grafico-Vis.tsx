import React, {  } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineMarkSeries, XAxis, YAxis } from 'react-vis';

export default function AtomGraficoVis(props: {dados: any[]}) {
  
  return (
    <div>
      <XYPlot xType='ordinal' height={300} width={900} color='#000' style={{fill: 'none'}}
      >
        {props.dados.map((avaliacoes, index) => (
          <LineMarkSeries 
            data={avaliacoes.avaliacoes} fill='red' size='4' key={index}/>
        ))}

        <XAxis />
        <YAxis />
      </XYPlot>

    </div>
  )
  
}