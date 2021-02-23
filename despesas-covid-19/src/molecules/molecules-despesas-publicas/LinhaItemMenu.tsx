import * as React from 'react';
import styled from 'styled-components';
import ItemMenuSuperior from '../../atoms/atmos-despesas-publicas/ItemMenuSuperior';
import { ItemMenu } from '../../settings/ItemMenu';

const LinhaItem = styled.li`
  margin-right: 20px;
  padding: 10px 0;
`;

const LinhaItemMenu = (props: ItemMenu) => {
  return (
    <LinhaItem>
      <ItemMenuSuperior
        caminho={props.caminho}
        texto={props.texto}
        exact={props.exact}
      />
    </LinhaItem>
  );
};

export default LinhaItemMenu;
