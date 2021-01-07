import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Copyright from '../../components/Copyright'
import CardP from '../../components/CardP'

import logoImg from '../../assets/media/logo.png'
import bgImg from '../../assets/media/bg.png'


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    color: 'white',
    fontSize: 30,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  logo: {
    height: 250,
    marginTop: 35,
    marginBottom: 25,
    zIndex: 2,
  },
  appBar: {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    height: 65,
    backgroundColor: 'inherit'
  },
  slogan: {
    fontSize: 20,
    marginBottom: 60,
  },
  container: {
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}));


export default function Album() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>


      <AppBar position="fixed" className={classes.appBar} >
        {/* <Toolbar> */}

        <Container maxWidth="sm" className={classes.container} >
          <IconButton >
            <HomeIcon className={classes.icon} />
          </IconButton>

          <Typography variant="h5" component="h1" >
            {/* Fogão Caseiro */}
            </Typography>



          <IconButton >
            <ShoppingCartIcon className={classes.icon} />
          </IconButton>
        </Container>

        {/* </Toolbar> */}
      </AppBar>


      <main id="home">


        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm" >


            <Grid container spacing={1} justify="center" >
              <img src={logoImg} alt="Fogão Caseiro logo" className={classes.logo} />
            </Grid>



            <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.slogan} >
              A solução para quem não tem tempo de cozinhar, mas gosta de boa comida em sua mesa.
            </Typography>


            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>

                  <Button variant="contained" color="primary">
                    <WhatsAppIcon />
                    WhatsApp
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    <InstagramIcon />
                    Instagram
                  </Button>
                </Grid>
              </Grid>
            </div>


          </Container>
        </div>


        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <CardP />
            <CardP />
            <CardP />
            <CardP />
          </Grid>
        </Container>


      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          5% de desconto
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          (pagamento com Pix, transferência, dinheiro ou débito)
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}