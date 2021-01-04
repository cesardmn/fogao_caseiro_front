import { Container, Print, MenuHeader, SocialIcons, MenuMain, MenuFooter } from './styles'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    width: 320,
  },
}));

export default function Menu() {

  const classes = useStyles()

  const rows = [1, 2, 3, 4, 5]

  return (
    <Container >
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
            <ul>
              {
                rows.map(row => {
                  return (
                    <li key={row}>

                      <Paper elevation={1} className={classes.paper}>

                        <Grid item xs={12}>
                          <Typography component="p">
                            <Skeleton animation="wave" />
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography component="p">
                            <Skeleton />
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography component="p">
                            <Skeleton animation="wave" />
                          </Typography>
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
}