import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import fitImg from '../../assets/media/fit.jpeg'
// import lowCarbImg from '../../assets/media/lowcarb.jpeg'
import lowcarbImg from '../../assets/media/lowcarb.jpeg'


const useStyles = makeStyles((theme) => ({
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
  title: {
    color: theme.palette.secondary.main,
    // border: '1px solid black'
  }
}));


export default function CardP() {

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>

      <Card className={classes.card}>


        <CardMedia
          className={classes.cardMedia}
          image={lowcarbImg}
          title="Image title"
        />


        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} >
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
  )
}