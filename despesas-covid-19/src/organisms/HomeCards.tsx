import React from 'react';
import styled from 'styled-components';
import PageTitle from '../atoms/PageTitle';
import CardsPaginas from '../molecules/CardsPaginas';
import coronavirusIcon from '../settings/icons/coronavirusIcon.svg';
import familyIcon from '../settings/icons/familyIcon.svg';

const Box = styled.div`
  padding: 15px 0;
  width: 100%;
`;
const CardBox = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: center;
  width: 100%;
`;

const HomeCards = () => {
  return (
    <Box>
      <PageTitle title={'Escolha o gastos públicos'}></PageTitle>
      <CardBox>
        <CardsPaginas icon={coronavirusIcon} titulo={'Gastos com COVID 19'} />
        <CardsPaginas icon={familyIcon} titulo={'Gastos com bolsa familia'} />
      </CardBox>
    </Box>
  );
};

export default HomeCards;
