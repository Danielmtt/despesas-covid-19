import React, { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import FormularioConsultaBolsaFamilia from '../molecules/FormularioConsultaBolsaFamilia';
import BoxPageTitleBolsaFamilia from '../organisms/BoxPageTitleBolsaFamilia';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';
import { getBolsaFamiliaSpendingByMonthYearAndIbge } from '../services/BolsaFamiliaService';
import { notify } from '../services/ServiceApi';

const DespesasBolsaFamiliaPage = () => {
  const { setDespesasBolsaFamilia, setAModalEstaAberta } = useContext<any>(BolsaFamiliaContext);
  const paramsUrl = new URLSearchParams(window.location.search);

  const verificarPossuiParametrosUrl = () => {
    if(!!paramsUrl.get('codigoIbge') && !!paramsUrl.get('anoMes')){
      mostrarCardsAoCarregar();
    }
  }

  const mostrarCardsAoCarregar = () => {
    const paramCodigoIbge = paramsUrl.get('codigoIbge');
    const paramAnoMes = paramsUrl.get('anoMes');
    if (paramAnoMes && paramCodigoIbge) {
      getBolsaFamiliaSpendingByMonthYearAndIbge(
        paramAnoMes,
        paramCodigoIbge
      ).then((resultadoApi) => {
        if (resultadoApi.length !== 0) {
          setDespesasBolsaFamilia(resultadoApi);
          setAModalEstaAberta(true);
        } else {
          notify();
        }
      });
    }
  }

  useEffect(() => {
    verificarPossuiParametrosUrl();
  }, [])

  return (
    <>
      <BoxPageTitleBolsaFamilia />
      <FormularioConsultaBolsaFamilia />
      <ToastContainer />
    </>
  );
};

export default DespesasBolsaFamiliaPage;
