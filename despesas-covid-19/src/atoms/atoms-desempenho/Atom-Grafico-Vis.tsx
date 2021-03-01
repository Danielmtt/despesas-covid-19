import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineMarkSeries, XAxis, YAxis } from 'react-vis'

export default function AtomGraficoVis(props: {dados: any[]}) {

  // const data1 = [
  //   {x: '01/01/2018', y: 4, outraCoisa: 'sim'},
  //   {x: '01/03/2018', y: 6}
  // ]

  // const data2 = [
  //   {
  //     id: 4,
  //     mesAno: '5/2020',
  //     nota: 1,
  //     resultado: 'Adequação',
  //     x: '5/2020',
  //     y: 1
  //   },
  //   {x: 'fev/2015', y: 8}
  // ]
  console.log(props.dados);
  
  return (
    <div>
      <XYPlot xType='ordinal' height={300} width={900} color='#000' style={{fill: 'none'}}
      >
        { props.dados && props.dados.map((listaAvaliacoes) => {
          <LineMarkSeries data={listaAvaliacoes.avaliacoes} fill='red' size='4' />
        })
        }
        {/* <LineMarkSeries data={data1} stroke='red' fill='red' size='4'/>
        <LineMarkSeries data={data2} stroke='red'/> */}
        <XAxis />
        <YAxis />
      </XYPlot>

      {/* <button onClick={() => {dadosGrafico()}}>Exibir dados API</button> */}
    </div>
  )
  
}