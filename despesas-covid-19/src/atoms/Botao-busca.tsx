import * as React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { getBolsaFamiliaSpendingByMonthYearAndIbge } from '../services/BolsaFamiliaService';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';
import { toast } from 'react-toastify';
import { notify } from '../services/ServiceApi';

const CaixaBusca = styled.div`
  font-size: 10px;
  color: #002776;
  border: solid #e4cc37 2px;
  width: max-content;
  border-radius: 5px;
  background-color: #fffafa;
`;

export const BotaoBusca = () => {
  const {
    dataSelecionada,
    setDespesasBolsaFamilia,
    setAModalEstaAberta,
    municipioSelecionado
  } = React.useContext<any>(BolsaFamiliaContext);

  const saveSpending = () => {
    if (dataSelecionada && municipioSelecionado) {
      getBolsaFamiliaSpendingByMonthYearAndIbge(
        dataSelecionada,
        municipioSelecionado.municipio.id
      ).then((resultadoApi) => {
        if(resultadoApi.length !== 0){
          setDespesasBolsaFamilia(resultadoApi);
          setAModalEstaAberta(true);
        }
        else {
          notify();
        }
      });
    } else {
      toast.warning(
        `campo obrigatório (${
          !dataSelecionada ? 'data)' : 'município) '
        } não preenchido`,
        {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
        }
      );
    }
  };

  return (
    <>
      <CaixaBusca>
        <Button
          onClick={() => {
            saveSpending();
          }}
        >
          <SearchIcon />
          Buscar
        </Button>
      </CaixaBusca>
    </>
  );
};

export default BotaoBusca;
