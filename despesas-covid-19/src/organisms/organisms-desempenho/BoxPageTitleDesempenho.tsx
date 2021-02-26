import React from 'react';
import styled from 'styled-components';
import PageTitleDesempenho from '../../molecules/molecules-desempenho/PageTitleDesempenho';

const Box = styled.div`
  padding: 15px 0;
  width: 100%;
  text-align: center;
`;

const BoxPageTitleDesempenho = () => {
  return (
    <Box>
      <PageTitleDesempenho />
    </Box>
  );
};

export default BoxPageTitleDesempenho;
