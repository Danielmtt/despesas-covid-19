import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { TabsInterface } from '../../settings/TabsInterface';
import AtomTabPanel from './Atom-Tab-Panel';

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 180,
  },
  tabs: {
    borderRight: '1px solid #002776',
  },
  indicator: {
    backgroundColor: '#002776'
  }
}));

export default function AtomTabs(props: TabsInterface) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        indicatorColor={'secondary'}
        classes={{
          indicator: classes.indicator,
        }}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      > 
        {props.arrayOpcoes.map((item, index) => {
          return <Tab label={item.nomeTab} key={index} {...a11yProps(index)} />
        })}
      </Tabs>
      {
        props.arrayOpcoes.map((item, index) => {
          return <AtomTabPanel key={index} value={value} index={index} componente={item.componente}/>
        })
      }
    </div>
  );
}