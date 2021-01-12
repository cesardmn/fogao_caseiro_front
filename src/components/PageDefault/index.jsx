import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import bgImg from '../../assets/media/bg.png'
import logoImg from '../../assets/media/logo.png'

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

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    height: 110,
    backgroundColor: 'inherit',
    display: 'flex',
    alignItems: 'center'
  },
  grid: {
    maxWidth: '600px',
    minWidth: '340px',
  },
  logo: {
    height: 110
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color: 'white',
    padding: '0.5rem 0',
    '& > :first-child': {
      marginRight: 10
    }
  }
}));

export default function PageDefault({ children }) {

  const classes = useStyles();

  return (
    <React.Fragment>

      <ElevationScroll >
        <AppBar className={classes.appBar} alignItems="center">

          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            className={classes.grid}
          >

            <Grid item xs={4} >
              <img src={logoImg} alt="" className={classes.logo} />
            </Grid>

            <Grid container xs={8} alignItems="center" >

              <Breadcrumbs aria-label="breadcrumb" separator="">

                <Link
                  href="https://wa.me/5521999374814"
                  target="blank"
                  rel="noopener noreferrer"
                  className={classes.social}
                >
                  <WhatsAppIcon />
                   (21) 999 37 48 14
                </Link>

                <Link 
                  href="https://www.instagram.com/fogaocaseirooficial" 
                  target="blank" 
                  rel="noopener noreferrer" 
                  className={classes.social}
                >
                  <InstagramIcon className={classes.icon} />
                    @fogaocaseirooficial
                </Link>

              </Breadcrumbs>

            </Grid>

          </Grid>
        </AppBar>
      </ElevationScroll>

      <Toolbar />

      <Container>
        <Box my={6}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
