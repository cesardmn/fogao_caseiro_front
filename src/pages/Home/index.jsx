import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import logoImg from '../../assets/media/logo.png'
import bgImg from '../../assets/media/bg.png'

import fitImg from '../../assets/media/fit.jpeg'
import lowCarbImg from '../../assets/media/lowcarb.jpeg'
import comboImg from '../../assets/media/combo.jpeg'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <CssBaseline />



      <AppBar position="fixed" className={classes.appBar} >
        {/* <Toolbar> */}

        <Container maxWidth="sm" className={classes.container} >
          <IconButton >
            <HomeIcon className={classes.icon} />
          </IconButton>

          <Typography variant="h5" component="h1" >
            Fogão Caseiro
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
          {/* End hero unit */}
          <Grid container spacing={4}>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={fitImg}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>

                  <Typography gutterBottom variant="h6" component="h2">
                    Diária
                  </Typography>

                  <Typography variant="body2" >
                    Pratos individuais pronto para consumo.
                  </Typography>

                  <Typography variant="caption" >
                    Fit / Low Carb / Executivo
                  </Typography>

                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    apartir de R$ 13,99
                    </Button>
                  <Button size="small" color="primary">
                    ver mais ...
                    </Button>
                </CardActions>
              </Card>
            </Grid>






            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={lowCarbImg}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>

                  <Typography gutterBottom variant="h6" component="h2">
                    Família
                  </Typography>

                  <Typography variant="body2" >
                    Pratos para divivir com sua família.
                  </Typography>

                  <Typography variant="caption" >
                    Carnes / Acompanhamentos / Frangos ...
                  </Typography>



                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    apartir de R$ 25,00
                    </Button>
                  <Button size="small" color="primary">
                    ver mais ...
                    </Button>
                </CardActions>
              </Card>
            </Grid>


            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={comboImg}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>

                  <Typography gutterBottom variant="h6" component="h2">
                    Resenha
                  </Typography>

                  <Typography variant="body2" >
                    Aperitivos para compartilhar com seus amigos.
                  </Typography>

                  <Typography variant="caption" >
                    Carne / Frango / Peixe ...
                  </Typography>

                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    apartir de R$ 59,99
                    </Button>
                  <Button size="small" color="primary">
                    ver mais ...
                    </Button>
                </CardActions>
              </Card>
            </Grid>

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
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}