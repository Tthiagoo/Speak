import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import './styles.css'

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "rgb(51 135 232 / 54%)",
    borderRadius:10,
    boxShadow: theme.shadows[12],
    padding: theme.spacing(2, 4, 3),
    color:"white",
    textAlign:"center"
    
  }
}));

export default function ModalSala({ open, close }) {
  const classes = useStyles();
  


  return (
    <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Digite o nome da sala</h2>
            <input type="text" id="RoomName"/>
            <button type="submit" id="RoomButton">Criar</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
