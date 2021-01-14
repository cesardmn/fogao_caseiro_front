import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  title: {
    color: theme.palette.secondary.main
  },
  subtitle: {
    color: 'gray',
    marginLeft: 4,
  },
  content: {
    flexGrow: 1,
  },
}));


export default function GroupCard({ group }) {

  const classes = useStyles();

  return (
    <Grid item key={group.name} xs={12} sm={6} md={4}>

      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={group.image}
          title={group.name}
        />

        <CardContent className={classes.content}>
          <Grid container spacing={0} alignItems="flex-end">  
            <Grid container direction="row" alignItems="baseline" >
              <Typography  variant="h6" component="h2" className={classes.title}>
                {group.name}
              </Typography>
              <Typography variant="caption" className={classes.subtitle}>
                (mínimo {group.min_order} un.)
              </Typography>
            </Grid>
          </Grid>

          <Typography>
            {group.description}
          </Typography>

          {/* <Typography >
            {
              group.types.map(type => {
                return (
                  <><span>{type}</span> <span> . </span>  </>
                )
              })
            }
          </Typography> */}

        </CardContent>

        {/* <CardActions>
          <Button size="small" color="primary">
            View
                    </Button>
          <Button size="small" color="primary">
            Edit
                    </Button>
        </CardActions> */}

      </Card>
    </Grid>
  )
}