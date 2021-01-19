import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    // maxHeight: '80vh',
    // scrollBehavior: 'smooth',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
    scrollBehavior: 'smooth',
  },
  paper: {
    marginBottom: 10,
    minHeight: 60,
  },
}));

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function PinnedSubheaderList({ group }) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  const typesNames = group.types

  return (

    <>


      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {
          typesNames.map((type, index) => {
            return (
              <Link href={`#${type}`}>
                <Tab label={type} {...a11yProps(index)} key={index} />
              </Link>
            )
          })
        }

      </Tabs>


      <List className={classes.root} subheader={<li />} >

        {
          typesNames.map((type, index) => {

            const items = group.items.filter(item => item.type.name === type)

            return (

              <li key={`section-${index}`} className={classes.listSection} id={type}>
                <ul className={classes.ul}>

                  <ListSubheader >
                    {type}
                  </ListSubheader>

                  {
                    items.map((item) => (
                      <Paper elevation={3} className={classes.paper} >
                        <ListItem key={item.id}>
                          <Grid container >
                            {/* <ListItemText > */}
                            {item.description}
                            {/* </ListItemText> */}
                          </Grid>
                        </ListItem>
                      </Paper>
                    ))
                  }

                </ul>
              </li>
            )
          })
        }
      </List>
    </>
  );
}
