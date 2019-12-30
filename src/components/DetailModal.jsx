import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './style/DetailModal.css'
import ProductList from './ProductList'


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
        width: 1000,
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
    const getRelatedProducts = (items) => {
       
        if(items.length){ 
            var array = items
                var i = array.length;
                while (i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                }
                return array
            }else{
                var array=items;
                return array
            }
        
    };
   const addBasket=(item)=>{
       if(localStorage.getItem('cart')){
            const shoppingCart=JSON.parse(localStorage.getItem('cart'))
            console.log(shoppingCart)
            shoppingCart.push(item)
            localStorage.setItem('cart', JSON.stringify(shoppingCart))
            console.log(item)
       }
   };   

    const related = getRelatedProducts(props.productArray)

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
                    <div >
                        <div className="modalContainer">
                        <div className="imageContainer">

                            <img className="imageModal" src={props.productDetails.image} />
                            <h3 >
                                {props.productDetails.brand} </h3>
                            <h1 >
                                {props.productDetails.price} € </h1>
                        </div>

                        <div className="detailContainer" >
                            <h5 id="simple-modal-title">{props.productDetails.name}</h5>
                            <p id="simple-modal-description">
                                {props.productDetails.description}
                            </p>
                            <button onClick={()=>addBasket(props.productDetails)}>Add to basket</button>
                        </div>
                        </div>
                        <h3 className="relatedTitle">RELATED PRODUCTS</h3>
                        <div className="relatedProducts">
                            
                            <ProductList sendList={related} />
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    );
}