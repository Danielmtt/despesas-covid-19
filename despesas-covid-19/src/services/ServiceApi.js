import { useDispatch} from 'react-redux';

export let dataCOVID19 = [];

export let sortItemsByPago = (arrayList) => {
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

export default function response(dadosResponse){
  const dispatch = useDispatch();

  const handleResponseSpending = () => {
    dispatch({
      type: 'SET_DESPESAS',
      payload: { despesas: dadosResponse}
    })
    return null;
  }
  console.log(handleResponseSpending);
}

export function getCovidSpendingByMonthYear (mesAnoLancamento, pagina)  {


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
      dataCOVID19 = sortItemsByPago(dados);
      response([{alo: '123'}]);
    })
    .catch((err) => console.log(err.message));
}