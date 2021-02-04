export let dataCOVID19 = [];

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
        resolve(dados);
      })
      .catch((err) => console.log(err.message));
  });
};
