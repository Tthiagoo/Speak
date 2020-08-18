import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Zoom from "@material-ui/core/Zoom";
import './styles.css'

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    
    
    textAlign:"center"
    
  }
}));

export default function Modal2({ open, close, children }) {
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
          timeout: 900
        }}
      >
        <Zoom in={open} style={{transitionDelay:'700ms'}}>
          <div className={classes.paper} id="content" >

            <p>{children}</p>
            
          </div>
        </Zoom>
      </Modal>
    </div>
  );
}
