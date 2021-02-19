import * as React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { getBolsaFamiliaSpendingByMonthYearAndIbge } from '../services/BolsaFamiliaService';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';
import { toast } from 'react-toastify';
import { notify } from '../services/ServiceApi';
import { Distrito } from '../settings/Municipio';

const CaixaBusca = styled.div`
  font-size: 10px;
  color: #002776;
  border: solid #e4cc37 2px;
  width: max-content;
  border-radius: 5px;
  background-color: #fffafa;
  margin-left: 400px;
`;

export const BotaoBusca = () => {
  const {
    dataSelecionada,
    setDespesasBolsaFamilia,
    setAModalEstaAberta,
    municipioSelecionado,
  } = React.useContext<any>(BolsaFamiliaContext);

  const saveSpending = () => {
    const rotaAtual = window.location.pathname;
    let codigosMunicipiosConcatenados = '';
    if(!municipioSelecionado?.length){
      codigosMunicipiosConcatenados = municipioSelecionado.municipio.id;
    } else{
      municipioSelecionado.map((municipio: Distrito, index: number) => {
        codigosMunicipiosConcatenados += (index === 0 ? municipio.municipio.id : `,${municipio.municipio.id}`)
      })
    }

    if (dataSelecionada && municipioSelecionado) {
      window.history.pushState(
        null,
        '',
        `${rotaAtual}?anoMes=${dataSelecionada}&&codigoIbge=${codigosMunicipiosConcatenados}`
      );
      const urlParams = new URLSearchParams(window.location.search);
      const paramCodigoIbge = urlParams.get('codigoIbge');
      const paramAnoMes = urlParams.get('anoMes');
      if (paramAnoMes && paramCodigoIbge) {
        getBolsaFamiliaSpendingByMonthYearAndIbge(
          paramAnoMes,
          paramCodigoIbge
        ).then((resultadoApi) => {
          if (resultadoApi?.length !== 0) {
            setDespesasBolsaFamilia(resultadoApi);
            setAModalEstaAberta(true);
          } else {
            notify();
          }
        });
      }
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
