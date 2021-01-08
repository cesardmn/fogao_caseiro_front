import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Utils from '../../utils/index'
import Paper from '@material-ui/core/Paper';
import db from '../../utils/db';
import { useCount } from '../../context/Cart';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(2)
  },
  container: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: 10,
    marginBottom: 20,
  },
  price: {
    color: 'green',
  },
  divider: {
    marginBottom: 20,
    marginTop: 10,
  },
  idNumber: {
    color: '#ff5700',
  }


}));

export default function Card({ item }) {
  const classes = useStyles();

  const [countItem, setCountItem] = useState(0)

  const [totalItem, setTotalItem] = useState(item.sale_price)

  const [addButton, setAddButton] = useState(true)

  const { count, setCount } = useCount()


  function addItem() {
    setCountItem(countItem + 1)
    setTotalItem((countItem + 1) * item.sale_price)
    setAddButton(false)


  }


  function removeItem() {
    if (countItem > 0) {
      setCountItem(countItem - 1)
      const factor = countItem - 1

      if (countItem > 0 && factor > 0) {
        setTotalItem(factor * item.sale_price)
      }

      factor === 0 && setAddButton(true)
    }

  }

  function setItemIntoCart() {
    setCountItem(0)
    setTotalItem(item.sale_price)
    setAddButton(true)
    db.setItemIntoCart(item, countItem)
    setCount(count + countItem)
  }

  return (

    <>
      {/* <Paper elevation={1} className={classes.paper}> */}

        <Grid container >
          <Grid item xs={10} >
            <Typography variant="body2">
              <span className={classes.idNumber} >{item.id}</span> - {item.description}
            </Typography>
          </Grid>

          <Grid item xs={2} >
            <Typography variant="caption" className={classes.price}>
              {Utils.numberToCurrencyBRL(item.sale_price)}
            </Typography>
          </Grid>
        </Grid>

        <Grid container >

          <Grid item xs={7} >
            <Button
              color="secondary"
              size="small"
              variant='outlined'
              disabled={Boolean(addButton)}
              onClick={() => setItemIntoCart()}
            >
              <Typography variant="caption">
                total {Utils.numberToCurrencyBRL(totalItem)}
              </Typography>
            </Button>

          </Grid>

          <Grid item xs={5} >
            <ButtonGroup >
              <Button size="small" onClick={() => { removeItem() }} >-</Button>
              <Button size="small" disabled>{countItem}</Button>
              <Button size="small" onClick={() => { addItem() }} >+</Button>

            </ButtonGroup>
          </Grid>
        </Grid>

      {/* </Paper> */}
      <Divider className={classes.divider} />
    </>
  )
}