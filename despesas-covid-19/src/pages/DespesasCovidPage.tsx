import React from 'react';
import DespesasCovid from '../templates/Despesas-covid';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation, useParams } from 'react-router-dom';
import {
  getCovidSpendingByMonthYear,
  notify,
  sortItemsByPago,
} from '../services/ServiceApi';
import { DespesasContext } from '../providers/despesas-context';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function validaURL(mes: string, ano: string): boolean {
  console.log(mes, ano);

  if (ano?.length === 4 && mes.length === 2 && parseInt(mes, 10) <= 12) {
    return true;
  } else if (!ano && !mes) {
    return false;
  } else if (parseInt(mes, 10) > 12) {
    toast.warning('O signo da serpente não existe mais, use os doze zodiacos', {
      position: 'top-right',
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
    });
    return false;
  } else {
    toast.warning('grande fonte de poder são as URL, mas essa esta errada', {
      position: 'top-right',
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
    });
    return false;
  }
}

const DespesasCovidPage = () => {
  const {
    setDespesas,
    controlador,
    setControlador,
    setPaginaAtual,
  }: any = React.useContext(DespesasContext);
  let query = Number(useQuery().get('page'));
  let { ano, mes }: { ano: string; mes: string } = useParams();

  if (controlador === 0) {
    if (validaURL(mes, ano)) {
      getCovidSpendingByMonthYear(ano + mes, query > 0 ? query : 1).then(
        (dados) => {
          setControlador(1);
          setPaginaAtual(query || 1);
          if (dados.length === 0) {
            notify();
            setDespesas([]);
          } else if (typeof dados !== 'string') {
            setDespesas(sortItemsByPago(dados));
          }
        }
      );
    }
  }

  return (
    <>
      <ToastContainer />
      <DespesasCovid></DespesasCovid>
    </>
  );
};

export default DespesasCovidPage;
