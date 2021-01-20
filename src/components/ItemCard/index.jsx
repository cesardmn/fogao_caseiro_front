import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import utils from '../../utils'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderBottom: '1px solid #e2e2e2',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  id: {
    color: theme.palette.secondary.main,
  },
  salePrice: {
    color: theme.palette.primary.main,
    marginTop: 5,
  }
}));

export default function ItemCard({ item }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography>
            <span className={classes.id}>
              {item.id}
            </span> - {item.description}
          </Typography>
          <Typography className={classes.salePrice} >{utils.numberToCurrencyBRL(item.sale_price)}</Typography>
        </CardContent>

      </div>
    </Card>
  );
}
