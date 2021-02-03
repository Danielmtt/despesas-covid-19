import React from "react";
import styled from "styled-components";

const PageTitle = (props) => {
  const title = props.title ?? "Titulo padrão";
  const Titulo = styled.h1`
    border-bottom: 1px solid #009c3b;
    color: #002776;
    font-size: 20px;
    padding: 10px;
    margin: 0 auto;
    width: fit-content;
  `;
  if (props) {
    return (
      <>
        <Titulo>{title}</Titulo>
      </>
    );
  } else {
    <></>;
  }
};

export default PageTitle;
