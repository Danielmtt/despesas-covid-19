import React from 'react';
import OpcaoData from '../atoms/OpcaoData';
import SeletorData from '../atoms/seletorData';
import meses from '../settings/consts/arrayMeses';

function calcularOpcoes() {
  const arrayOpcoes: any[] = [];
  let mes = new Date().getMonth();
  let ano = new Date().getFullYear();

  for (let i = 36; i > 0; i--) {
    if (mes === 0) {
      mes = 12;
      ano--;
    }

    arrayOpcoes.push(
      <OpcaoData
        valorCampo={ano + meses[mes - 1].valor}
        ValorTexto={ano + ' / ' + meses[mes - 1].nome}
      />
    );
    mes--;
  }

  return arrayOpcoes;
}

const FiltroData = () => {
  return <SeletorData opcoes={calcularOpcoes()} />;
};

export default FiltroData;
