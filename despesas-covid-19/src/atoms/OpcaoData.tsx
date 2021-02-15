import React from 'react';

const OpcaoData = (props: { valorCampo: string; ValorTexto: string }) => {
  return <option value={props.valorCampo}>{props.ValorTexto}</option>;
};

export default OpcaoData;
