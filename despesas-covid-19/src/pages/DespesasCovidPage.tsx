import React from 'react';
import DespesasCovid from '../templates/Despesas-covid';
import { ToastContainer } from 'react-toastify';
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

const DespesasCovidPage = () => {
  const { setDespesas, controlador, setControlador }: any = React.useContext(
    DespesasContext
  );
  let query = Number(useQuery().get('page'));
  let { ano, mes }: any = useParams();

  if (ano && mes && controlador === 0) {
    getCovidSpendingByMonthYear(ano + mes, query > 0 ? query : 1).then(
      (dados) => {
        setControlador(1);
        if (dados.length === 0) {
          notify();
          setDespesas([]);
        } else if (typeof dados !== 'string') {
          setDespesas(sortItemsByPago(dados));
        }
      }
    );
  }

  return (
    <>
      <ToastContainer />
      <DespesasCovid></DespesasCovid>
    </>
  );
};

export default DespesasCovidPage;
