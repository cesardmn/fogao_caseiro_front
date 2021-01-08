import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Card from '../Card'
import Container from '@material-ui/core/Container';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  appBar: {
    top: 65,
  },
  tabs: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  tab: {
    overflow: 'scroll',
    marginTop: 65,
    padding: '0',
  },
}));

export default function ScrollableTabsButtonAuto({ itemsNames, items }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {
            itemsNames.map((itemName, index) => {
              return (
                <Tab label={itemName} {...a11yProps(index)} key={index} />
              )
            })
          }
        </Tabs>
      </AppBar>

      {
        itemsNames.map((itemName, index) => {

          const its = items.filter(item => (String(item.group.name)) === itemName)

          return (
            <TabPanel value={value} index={index} className={classes.tab} key={index}>
              {
                its.map((it, index) => {
                  return (
                    <Card item={it} key={index} />
                  )
                })
              }
            </TabPanel>
          )
        })
      }

    </div>

  );
}