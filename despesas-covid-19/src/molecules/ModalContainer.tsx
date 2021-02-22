import React from 'react';
import styled from 'styled-components';
import LinhaCard from '../atoms/linhaCard';
import { DespesasBolsaFamilia } from '../settings/despesasBolsaFamilia';

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  border: solid #e4cc37 5px;
  background: #fffafa;
  margin: 30px;
  height: auto;
  padding: 24px;
  box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.75);
`;

const ValueTitleStyle = styled.h2`
  color: #8fc931;
  font-size: 20px;
  margin: 0;
  text-transform: uppercase;
`;

const ValueStyle = styled.p`
  font-size: 28px;
  color: #002776;
  margin: 0;
  text-align: left;
  padding-left: 15px;
`;

const ModalContainer = (props: DespesasBolsaFamilia) => {
  if (props) {
    return (
      <CardStyle key={props.valor}>
        {/* 
        //TODO implementar data referencia na nova API
        <LinhaCard
          key={props?.dataReferencia}
          conteudo={props?.dataReferencia}
          estiloConteudo={ValueStyle}
          estiloTitulo={ValueTitleStyle}
          titulo={'Data referência'}
        /> */}
        <LinhaCard
          key={props?.municipio?.nomeIBGE}
          conteudo={
            props?.municipio?.nomeIBGE + ' / ' + props?.municipio?.nomeRegiao
          }
          estiloConteudo={ValueStyle}
          estiloTitulo={ValueTitleStyle}
          titulo={'Região'}
        />
        <LinhaCard
          key={props?.municipio?.uf}
          conteudo={props?.municipio?.uf}
          estiloConteudo={ValueStyle}
          estiloTitulo={ValueTitleStyle}
          titulo={'Sigla Região'}
        />
        <LinhaCard
          key={props?.valor?.toLocaleString()}
          conteudo={'R$ ' + props?.valor?.toLocaleString() + ',00'}
          estiloConteudo={ValueStyle}
          estiloTitulo={ValueTitleStyle}
          titulo={'Valor gasto com o Bolsa Família'}
        />
        <LinhaCard
          key={props?.quantidadeBeneficiados?.toLocaleString()}
          conteudo={props?.quantidadeBeneficiados?.toLocaleString()}
          estiloConteudo={ValueStyle}
          estiloTitulo={ValueTitleStyle}
          titulo={'quantidade de Beneficiados'}
        />
      </CardStyle>
    );
  } else {
    return <></>;
  }
};

export default ModalContainer;
