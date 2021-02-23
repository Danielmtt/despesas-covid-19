import * as React from 'react';
import AtomTabs from '../../atoms/atoms-desempenho/Atom-Tabs';
import { TabsInterface } from '../../settings/TabsInterface';

export const MoleculeTabPanel = (props: TabsInterface) => {
  return (
    <AtomTabs 
      arrayOpcoes={props.arrayOpcoes}
    />
  )
}

export default MoleculeTabPanel;