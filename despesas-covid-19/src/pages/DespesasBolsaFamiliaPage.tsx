import React, { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import FormularioConsultaBolsaFamilia from '../molecules/FormularioConsultaBolsaFamilia';
import BoxPageTitleBolsaFamilia from '../organisms/BoxPageTitleBolsaFamilia';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';
import { getBolsaFamiliaSpendingByMonthYearAndIbge } from '../services/BolsaFamiliaService';
import { notifyError, notify } from '../services/ServiceApi';
import meses from '../settings/consts/arrayMeses';

const DespesasBolsaFamiliaPage = () => {
  const { setDespesasBolsaFamilia, setAModalEstaAberta } = useContext<any>(BolsaFamiliaContext);
  const paramsUrl = new URLSearchParams(window.location.search);

  const verificarPossuiParametrosUrl = () => {
    if(verificarAnoMesValido()) {
      if(!!paramsUrl.get('codigoIbge') && !!paramsUrl.get('anoMes')){
        mostrarCardsAoCarregar();
      }
    } else{
      if(paramsUrl.get('anoMes')) {
        notifyError('Data informada inválida');
      }
    }
  }

  function verificarAnoMesValido(): boolean{
    if(paramsUrl.get('anoMes')){
      const arrayOpcoes: any[] = [];
      let mes = new Date().getMonth();
      let ano = new Date().getFullYear();

      for (let i = 36; i > 0; i--) {
        if (mes === 0) {
          mes = 12;
          ano--;
        }
        arrayOpcoes.push(ano + meses[mes - 1].valor);
        mes--;
      }
      return arrayOpcoes.includes(paramsUrl.get('anoMes'));
    } else{
      return false;
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
