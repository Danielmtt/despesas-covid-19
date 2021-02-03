import './App.css';
import D from '../templates/D.jsx'
import React from 'react';

function App() {
  // let getResultadoApi = async() => {
  //   const response = await getCovidSpendingByMonthYear('202012', '1');
  //   console.log(response);
  // }

  // const headers = new Headers();
  // headers.append('chave-api-dados', '85260d138512b44976de13aaf7766f89');
  // headers.append('Content-Type', 'application/x-www-form-urlencoded');
  // headers.append('Accepted', '*/*');
  // const params = {
  //     method: 'GET',
  //     headers: {
  //       "chave-api-dados": "85260d138512b44976de13aaf7766f89",
  //       "Accept": "*/*",
  //     },
  // }
  // fetch("http://www.portaltransparencia.gov.br/api-de-dados/coronavirus/movimento-liquido-despesa?mesAnoLancamento=202012&pagina=2", {headers: {
  //   "Accept": "*/*",
  // "chave-api-dados": "cd628a98add0946165e28dc947665a90"
  // }})
  //     .then((response)=>response.json())
  //     .then((dados) => {
  //         console.log(dados);
  //     })
  //     .catch(err => console.log(err.message));
  const request = new XMLHttpRequest()

  request.open('GET', 'http://www.portaltransparencia.gov.br/api-de-dados/coronavirus/movimento-liquido-despesa?mesAnoLancamento=202012&pagina=2')
  request.setRequestHeader('chave-api-dados', 'cd628a98add0946165e28dc947665a90');
  request.setRequestHeader('Accept', '*/*');
  request.onload = function () {
    console.log(JSON.parse(this.responseText))
  }

  request.onerror = function () {
    console.log('erro ao executar a requisição')
  }

  request.send()
  return (<>
    <D></D>
    <button>Buscar usuários</button> 
    </>)
  ;
}
 
export default App;

