import * as React from 'react';
import styled from 'styled-components';
import ItemMenuSuperior from '../atoms/ItemMenuSuperior';
import { ItemMenu } from '../settings/ItemMenu';

const LinhaItemMenu = (props: ItemMenu) => {

  const LinhaItem = styled.li`
    margin-right: 20px;
    padding: 10px 0;
  `

  return (
    <LinhaItem>
      <ItemMenuSuperior caminho={props.caminho} texto={props.texto} exact={props.exact}/>
    </LinhaItem>
  )
}

export default LinhaItemMenu;