import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import GroupCard from '../../components/GroupCard';
import PageDefault from '../../components/PageDefault'

import db from '../../utils/db'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Home() {

  const classes = useStyles();

  const groups = db.getGroups()

  return (
    <PageDefault >
      <main>
        <Container className={classes.cardGrid} maxWidth="md"  >
          <Grid container spacing={4} justify="center" >
            {
              groups.map((group, index) => {
                return (
                  <GroupCard group={group} key={index} />
                )
              })
            }
          </Grid>
        </Container>
      </main>
    </PageDefault>
  )
}
