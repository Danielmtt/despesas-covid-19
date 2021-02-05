import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  background: #ffdf00;
  height:400px;
  padding: 24px;
  margin: 10px;
  box-shadow: 3px 4px 10px 1px rgba(0,0,0,0.75);
  font- family: "Roboto";
`;

const TitleCard = styled.h1`
  color: #002776;
  font-size: 18px;
`;

const DescriptionCard = styled.p`
  color: #002776;
  font-size: 14px;
`;

const ValueTitleStyle = styled.h2`
  color: #009c3b;
  font-size: 20px;
  margin: 0;
  text-transform: uppercase;
`;

const ValueStyle = styled.p`
  font-size: 28px;
  color: #002776;
  margin: 0;
  text-align: center;
  font- family: "Roboto";
`;

const Card = (props) => {
  if (props) {
    return (
      <CardStyle>
        <div>
          <TitleCard>{props.programa}</TitleCard>
          <DescriptionCard>{props.acao}</DescriptionCard>
        </div>
        <div>
          <ValueTitleStyle>Pago</ValueTitleStyle>
          <ValueStyle>{props.pago}</ValueStyle>

          <ValueTitleStyle>Empenhado</ValueTitleStyle>
          <ValueStyle>{props.empenhado}</ValueStyle>

          <ValueTitleStyle>Liquidado</ValueTitleStyle>
          <ValueStyle>{props.liquidado}</ValueStyle>
        </div>
      </CardStyle>
    );
  }
};
export default Card;
