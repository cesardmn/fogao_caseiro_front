import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'

import db from '../../utils/db'

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


const data = db.getDB()

function getGroupNames() {
  const set = new Set()

  for (let item of data) {
    set.add(item.group.name)
  }
  return [...set]
}

const itemsNames = getGroupNames()

export default function Home(props) {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar >
          <Header />
        </AppBar>
      </ElevationScroll>
      <Toolbar />

      <Tabs items={data} itemsNames={itemsNames} />

    </React.Fragment>
  )
}
