import React from 'react';
import LinhaAno from '../atoms/Linha-ano.jsx';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from 'styled-components';

const TreeViewStyle = styled.div`
  margin-left: 20px;
  padding-top: 25px;
  color: #e4cc37;
`;

const MenuLateral = (props: any) => {
  if (props.linhaAno) {
    return (
      <TreeViewStyle>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <>
            {LinhaAno({
              linhaAno: props.linhaAno,
              gerarLinhaMesAno: props.gerarLinhaMesAno,
            })}
          </>
        </TreeView>
      </TreeViewStyle>
    );
  } else {
    return <></>;
  }
};
export default MenuLateral;
