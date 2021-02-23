import * as React from 'react';
import MoleculeTabPanel from '../../molecules/molecules-desempenho/Molecule-Tab-Panel';
import { TabsInterface } from '../../settings/TabsInterface';

export const OrganismeTabPanel = (props: TabsInterface) => {
  return(
    <MoleculeTabPanel arrayOpcoes={props.arrayOpcoes} />
  ) 
}

export default OrganismeTabPanel;