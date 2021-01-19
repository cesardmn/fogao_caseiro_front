import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TypeList from '../../components/TypeList'

export default function ItemChoice({ group }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const typesNames = group.types


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        ver mais ...
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">

        <DialogTitle id="responsive-dialog-title">
          {group.name}
        </DialogTitle>

        {/* <DialogContent> */}
          <TypeList group={group} />
        {/* </DialogContent> */}

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}
