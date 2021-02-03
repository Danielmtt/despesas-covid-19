import React from 'react';
import styled from 'styled-components';
import PageTitleNamed from '../molecules/PageTitleNamed';

const BoxPageTitle = () => {
  const Box = styled.div`
    padding: 15px 0;
    width: 100%;
  `;

  return (
    <Box>
      <PageTitleNamed></PageTitleNamed>
    </Box>
  );
};

export default BoxPageTitle;
