import React from 'react';
import LinhaAno from '../atoms/Linha-ano';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from 'styled-components';
import { LinhaAnoInterface } from '../settings/LinhaAnoInterface';
import { useParams } from 'react-router-dom';
import { DespesasContext } from '../providers/despesas-context';

const TreeViewStyle = styled.div`
  margin-left: 20px;
  padding-top: 25px;
  color: #e4cc37;
`;

const MenuLateral = (props: LinhaAnoInterface) => {
  let { ano, mes }: { ano: string; mes: string } = useParams();
  const { anoSelecionado }: any = React.useContext(DespesasContext);

  if (props.linhaAno) {
    return (
      <TreeViewStyle>
        <TreeView
          expanded={ano ? [ano] : [anoSelecionado]}
          selected={ano ? ano + mes : ''}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {LinhaAno({
            linhaAno: props.linhaAno,
            gerarLinhaMesAno: props.gerarLinhaMesAno,
          })}
        </TreeView>
      </TreeViewStyle>
    );
  } else {
    return <></>;
  }
};
export default MenuLateral;
