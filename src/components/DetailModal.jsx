import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './style/DetailModal.css'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   
    return (
      <div>
        <button type="button" onClick={handleOpen}>
          Details
        </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <div className="modalContainer">
                <div className="imageContainer">
                
          <img className="imageModal" src={props.productDetails.image}/>
          <h3 id="simple-modal-description">
                {props.productDetails.brand} </h3>
                <h1 id="simple-modal-description">
                                {props.productDetails.price} € </h1>    
            </div>
            
          <div className="detailContainer" >
            <h5 id="simple-modal-title">{props.productDetails.name}</h5>
            <p id="simple-modal-description">
                {props.productDetails.description}
            </p>
            </div>
            </div>
          </div>
        </Modal>
        <button>Add to basket</button>
      </div>
    );
  }