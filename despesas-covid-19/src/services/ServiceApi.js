import 'react-toastify/dist/ReactToastify.css';
export let dataCOVID19 = [];
import { toast } from 'react-toastify';
import { trackPromise } from 'react-promise-tracker';

const notifyError = () =>
  toast.error('Acabou a mana, por favor tente mais tarde', {
    position: 'top-right',
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
  });

const notify = () =>
  toast.warning('Não existe mais respostas aqui', {
    position: 'top-right',
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
  });

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
    trackPromise(
      fetch(
        `https://cors-anywhere.herokuapp.com/http://www.portaltransparencia.gov.br/api-de-dados/coronavirus/movimento-liquido-despesa?mesAnoLancamento=${mesAnoLancamento}&pagina=${pagina}`,
        {
          headers: {
            Accept: '*/*',
            'chave-api-dados': '85260d138512b44976de13aaf7766f89',
          },
        }
      )
        .then((response) => response.json())
        .then((dados) => {
          console.log(dados);
          if (dados.length) {
            notify();
          }
          dataCOVID19 = sortItemsByPago(dados);
          resolve(dados);
        })
    ).catch(() => notifyError());
  });
};
