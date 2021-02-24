import * as React from 'react';
import MoleculeTabPanel from '../../molecules/molecules-desempenho/Molecule-Tab-Panel';
import { TabsInterface } from '../../settings/TabsInterface';
import styled from 'styled-components';

const TabPanel = styled.div`
  margin: 15px;
`;

export const OrganismeTabPanel = (props: TabsInterface) => {
  return(
    <TabPanel>
      <MoleculeTabPanel arrayOpcoes={props.arrayOpcoes} />
    </TabPanel>
  ) 
}

export default OrganismeTabPanel;