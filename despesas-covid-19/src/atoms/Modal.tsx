import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: 'solid #e4cc37 5px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function TransitionsModal(props: { corpoModal: any }) {
  const classes = useStyles();

  const { aModalEstaAberta, setAModalEstaAberta } = React.useContext<any>(
    BolsaFamiliaContext
  );

  const handleClose = () => {
    setAModalEstaAberta(false);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={aModalEstaAberta}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={aModalEstaAberta}>{props?.corpoModal}</Fade>
      </Modal>
    </div>
  );
}
