import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { connect } from 'react-redux';
//import getCovidSpendingByMonthYear from '../services/ServiceApi.js';

const meses = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

function gerarLinhaMesAno(valorAno, props) {
  let sortItemsByPago = (arrayList) => {
    return arrayList.sort(function (a, b) {
      let aConverted = parseFloat(a.pago.replace(/[.]/g, '').replace(',', '.'));
      let bConverted = parseFloat(b.pago.replace(/[.]/g, '').replace(',', '.'));
      if (aConverted > bConverted) {
        return -1;
      }
      if (aConverted < bConverted) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
  };

  function getCovidSpendingByMonthYear(mesAnoLancamento, pagina) {
    return new Promise((resolve) => {
      fetch(
        `https://cors-anywhere.herokuapp.com/http://www.portaltransparencia.gov.br/api-de-dados/coronavirus/movimento-liquido-despesa?mesAnoLancamento=${mesAnoLancamento}&pagina=${pagina}`,
        {
          headers: {
            Accept: '*/*',
            'chave-api-dados': 'cd628a98add0946165e28dc947665a90',
          },
        }
      )
        .then((response) => response.json())
        .then((dados) => {
          props.setDespesas(sortItemsByPago(dados));
          //dataCOVID19 = sortItemsByPago(dados);
          resolve(dados);
        })
        .catch((err) => console.log(err.message));
    });
  }

  return meses.map((valor) => (
    <TreeItem
      onClick={() => getCovidSpendingByMonthYear(valorAno + valor, 1)}
      nodeId={`${valorAno}${valor}`}
      key={`${valorAno}${valor}`}
      label={`${valorAno}/${valor}`}
    />
  ));
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDespesas: (newDespesas) =>
      dispatch({
        type: 'SET_DESPESAS',
        payload: { despesas: newDespesas },
      }),
  };
};

export default connect(mapDispatchToProps)(gerarLinhaMesAno);
