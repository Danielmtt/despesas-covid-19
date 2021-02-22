import 'react-toastify/dist/ReactToastify.css';
export let dataCOVID19 = [];
import { toast } from 'react-toastify';
import { trackPromise } from 'react-promise-tracker';

export const notifyError = (
  mensagem = 'Acabou a mana, por favor tente mais tarde'
) =>
  toast.error(mensagem, {
    position: 'top-right',
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
  });

export const notify = () =>
  toast.warning('Não existe mais respostas aqui!', {
    position: 'top-right',
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
  });

export let sortItemsByPago = (arrayList) => {
  if (arrayList && typeof arrayList[0] === 'object') {
    return arrayList?.sort(function (a, b) {
      let aConverted = parseFloat(
        a.pago.replace(' ', '').replace(/[.]/g, '').replace(',', '.')
      );
      let bConverted = parseFloat(
        b.pago.replace(' ', '').replace(/[.]/g, '').replace(',', '.')
      );
      if (aConverted > bConverted) {
        return -1;
      }
      if (aConverted < bConverted) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
  }
};

export const getCovidSpendingByMonthYear = async (ano, mes, pagina) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        trackPromise(
          fetch(
            `http://localhost:8080/despesas/covid/${ano}/${mes}?pagina=${pagina}`
          )
            .then((response) => response.json())
            .catch(() => notifyError())
        )
      );
    }, 300);
  });
};
