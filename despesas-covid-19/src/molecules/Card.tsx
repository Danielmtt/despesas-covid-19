import React from 'react';
import styled from 'styled-components';
import LinhaCard from '../atoms/linhaCard';
import { DespesasCard } from '../settings/despesasCard';

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  border: solid #e4cc37 5px;
  background: #fffafa;
  height: auto;
  padding: 24px;
  margin: 10px;
  box-shadow: 3px 4px 10px 1px rgba(0,0,0,0.75);
  font- family: "Roboto";
`;

const DescriptionCard = styled.p`
  color: #002776;
  font-size: 14px;
`;

const DescriptionCard2 = styled(DescriptionCard)`
  font-weight: bold;
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
  font- family: "Roboto";
`;

function Card(props: DespesasCard) {
  if (props) {
    return (
      <CardStyle>
        <div>
          <LinhaCard
            conteudo={props.programa}
            estiloConteudo={DescriptionCard2}
            estiloTitulo={ValueTitleStyle}
            titulo={'Programa'}
          />
          <LinhaCard
            conteudo={props.acao}
            estiloConteudo={DescriptionCard}
            estiloTitulo={ValueTitleStyle}
            titulo={'Ação'}
          />
        </div>
        <div>
          <LinhaCard
            conteudo={props.pago}
            estiloConteudo={ValueStyle}
            estiloTitulo={ValueTitleStyle}
            titulo={'Pago'}
          />
          <LinhaCard
            conteudo={props.empenhado}
            estiloConteudo={ValueStyle}
            estiloTitulo={ValueTitleStyle}
            titulo={'Empenhado'}
          />
          <LinhaCard
            conteudo={props.liquidado}
            estiloConteudo={ValueStyle}
            estiloTitulo={ValueTitleStyle}
            titulo={'Liquidado'}
          />
        </div>
      </CardStyle>
    );
  } else {
    return <></>;
  }
}
export default Card;
