import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ItemMenu } from '../../settings/ItemMenu';

const Item = styled.span`
  color: #fff;
`;

const ItemMenuSuperior = (props: ItemMenu) => {
  return (
    <Item key={props.caminho}>
      <NavLink
        className="item-menu"
        activeClassName="activeRoute"
        to={props.caminho}
        exact={props.exact ?? false}
      >
        {props.texto}
      </NavLink>
    </Item>
  );
};

export default ItemMenuSuperior;
