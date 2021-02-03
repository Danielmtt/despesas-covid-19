import React from "react";
import styled from "styled-components";
import PageTitleNamed from "../molecules/PageTitleNamed";

const BoxPageTitle = () => {
  const Box = styled.div`
    padding: 15px;
  `;

  return (
    <Box>
      <PageTitleNamed></PageTitleNamed>
    </Box>
  );
};

export default BoxPageTitle;
