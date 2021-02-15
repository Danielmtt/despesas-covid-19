import * as React from 'react';
import styled from 'styled-components';
import LinhaItemMenu from '../molecules/LinhaItemMenu';

const MenuSuperior = () => {

  const Menu = styled.nav`
    background-color: #002776;
    width: 100%;
  `

  const Lista = styled.ul`
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
  `

  return (
    <Menu>
      <Lista>
        <LinhaItemMenu texto="Home" caminho="/" exact={true} />
        <LinhaItemMenu texto="Despesas Covid-19" caminho="/despesas/covid-19"/>
        <LinhaItemMenu texto="Despesas Bolsa Família" caminho="/despesas/bolsa-familia"/>
      </Lista>
    </Menu>
  )
}

export default MenuSuperior