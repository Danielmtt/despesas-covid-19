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

export const getCovidSpendingByMonthYear = async (mesAnoLancamento, pagina) => {
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
        dataCOVID19 = sortItemsByPago(dados);
        resolve(dados);
      })
      .catch((err) => console.log(err.message));
  });
};
