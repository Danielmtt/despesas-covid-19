import React from 'react';
import styled from 'styled-components';
import { BotaoBusca } from '../atoms/Botao-busca';
import CampoMunicipio from '../atoms/CampoMunicipio';
import OpcaoData from '../atoms/OpcaoData';
import SeletorData from '../atoms/seletorData';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';
import { meses } from '../settings/consts/arrayMeses';
import ModalContainer from './ModalContainer';

const Card = styled.div`
  border: 1px solid #999;
  border-radius: 5px;
  width: 500px;
  margin: 15px auto;
  padding: 15px;
  line-height: 4;
`;
const Array = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const Campos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

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
        key={ano + ' / ' + meses[mes - 1].nome}
        valorCampo={ano + meses[mes - 1].valor}
        ValorTexto={ano + ' / ' + meses[mes - 1].nome}
      />
    );
    mes--;
  }
  return arrayOpcoes;
}

const FormularioConsultaBolsaFamilia = () => {
  const {
    despesasBolsaFamilia,
  }: { despesasBolsaFamilia: any[] } = React.useContext<any>(
    BolsaFamiliaContext
  );
  return (
    <>
      <Card>
        <Campos>
          <SeletorData opcoes={calcularOpcoes()} /> <CampoMunicipio />
        </Campos>
        <BotaoBusca />
      </Card>
      <Array>{despesasBolsaFamilia.map((iten) => ModalContainer(iten))}</Array>
    </>
  );
};

export default FormularioConsultaBolsaFamilia;
