import React from 'react';
import styled from 'styled-components';
import PageTitleNamed from '../../molecules/molecules-despesas-publicas/PageTitleNamed';

const Box = styled.div`
  padding: 15px 0;
  width: 100%;
`;

const BoxPageTitle = () => {
  return (
    <Box>
      <PageTitleNamed></PageTitleNamed>
    </Box>
  );
};

export default BoxPageTitle;
