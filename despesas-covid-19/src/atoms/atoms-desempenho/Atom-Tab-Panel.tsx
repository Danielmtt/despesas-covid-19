import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import { AtomTabPanelInterface, TabPanelProps } from '../../settings/AtomTabPanel';


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const AtomTabPanel = (props: AtomTabPanelInterface) => {

  return(
    <TabPanel value={props.value} index={props.index}>
      {props.componente}
    </TabPanel>
  )
}

export default AtomTabPanel;