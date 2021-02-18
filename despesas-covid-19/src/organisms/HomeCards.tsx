import React from 'react';
import styled from 'styled-components';
import PageTitle from '../atoms/PageTitle';
import CardsPaginas from '../molecules/CardsPaginas';
import coronavirusIcon from '../settings/icons/coronavirusIcon.svg';
import familyIcon from '../settings/icons/familyIcon.svg';
import { NavLink, Link } from 'react-router-dom';

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
        <Link style={{ textDecoration: 'none' }} to="/covid-19/0/0">
          <CardsPaginas icon={coronavirusIcon} titulo={'Gastos com COVID 19'} />
        </Link>
        <NavLink style={{ textDecoration: 'none' }} to="/bolsa-familia">
          <CardsPaginas icon={familyIcon} titulo={'Gastos com bolsa familia'} />
        </NavLink>
      </CardBox>
    </Box>
  );
};

export default HomeCards;
