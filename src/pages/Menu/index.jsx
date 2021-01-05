import { Container, Print, MenuHeader, SocialIcons, MenuMain, MenuFooter } from './styles'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Utils from '../../utils'
import db from '../../utils/db'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  paper: {
    padding: theme.spacing(1),
    width: 320,
  },
}));

export default function Menu() {

  const data = db.getDB()

  function getGroupNames() {
    const set = new Set()

    for (let item of data) {
      set.add(item.group.name)
    }

    const names = [...set]

    const groups = []
    for (let name of names) {
      groups.push(
        data.filter(item => item.group.name === name)
      )
    }

    return groups

  }

  const groups = getGroupNames()

  const classes = useStyles()

  return (
    <>

      {
        groups.map((group, index) => {
          return (
            <Container key={index} >
              <Print >

                <MenuHeader >
                  <div className="bg"></div>

                  <img src="https://www.fogaocaseiro.com.br/imgs/logo.png" alt="" />


                  <SocialIcons >
                    <ul>
                      <a href="https://wa.me/5521999374814" target="_blank" rel="noopener noreferrer">

                        <li>
                          <WhatsAppIcon />
                          <span>(21) 999 37 48 14</span>
                        </li>
                      </a>

                      <a href="https://www.instagram.com/fogaocaseirooficial/" target="_blank" rel="noopener noreferrer">

                        <li>
                          <InstagramIcon />
                          <span>@fogaocaseirooficial</span>
                        </li>
                      </a>
                    </ul>

                  </SocialIcons>

                </MenuHeader>


                {
                  <MenuMain >

                    <div className="title">
                      <h1>{group[0].group.name}</h1>
                      <p>(Pedido mínimo: {group[0].group.min_order} un.)</p>
                    </div>
                    <ul>
                      {
                        group.map((item, index) => {
                          return (
                            <li key={index}>

                              <Paper elevation={1} className={classes.paper}>

                                <Grid container >
                                  <Grid item xs={10} >
                                    <span className="itemID">{item.id}</span> - {item.description}
                                  </Grid>

                                  <Grid item xs={2} >
                                    <span className="salePrice">
                                      {Utils.numberToCurrencyBRL(item.sale_price)}
                                    </span>
                                  </Grid>

                                </Grid>

                              </Paper>
                            </li>
                          )
                        })
                      }
                    </ul>
                    <MenuFooter >
                      <span>5% de desconto</span>
                      <p>(pagamento com Pix, transferência, dinheiro ou débito)</p>
                    </MenuFooter>
                  </MenuMain>

                }


              </Print>
            </Container>
          )
        })
      }
    </>
  )
}