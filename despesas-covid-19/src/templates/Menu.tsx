import * as React from 'react';
import MenuSuperior from '../organisms/orgamismes-despesas-publicas/MenuSuperior';
import { useLocation } from 'react-router-dom';

const Menu = () => {
  const currentUrl = useLocation();

  return <>{currentUrl.pathname !== '/' && <MenuSuperior></MenuSuperior>}</>;
};

export default Menu;
