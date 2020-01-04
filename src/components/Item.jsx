
import './style/Item.css'
import axios from 'axios';
import SimpleModal from './DetailModal'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Item extends Component {
    constructor() {

        super();
        this.state = {
            items: [],
            i: 0,
            y: 1,
            z: 2
        }

    }
    componentDidMount() {

        axios.get('http://localhost:3001/product/allProduct')
            .then(item => {

        
                var array = item.data
                var i = array.length;
                while (i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                }
                this.setState({
                    items: array
                })
               


            })
            .catch(err => { console.log(err) })

    }
    increaseIndex = (e) => {
    
        if (this.state.z < 999) {
        this.setState({
            i: (this.state.i) + 1,
            y: (this.state.y) + 1,
            z: (this.state.z) + 1,
        })
    }
    else{
        this.setState({
            i: 0,
            y: 1,
            z: 2
        }) 
    }
    }
    decreaseIndex = (e) => {
      console.log(this.state.items.length)
        if (this.state.i > 0) {
            this.setState({
                i: (this.state.i) - 1,
                y: (this.state.y) - 1,
                z: (this.state.z) - 1,
            })
        } else {
            this.setState({
                i: this.state.items.length-3,
                y: this.state.items.length-2,
                z: this.state.items.length-1
            })

        }

    }
    render() {
        const elemento = this.state.items
        
        if (elemento.length>0) {
 
            return (
                
                <div className='section'>
                    
                    <div className='productCard' onClick={this.increaseIndex} >
                    
                        <img className="productImage" alt="right item"  src={elemento[this.state.i].image} />
                        <img alt="right arrow" className='imageArrow'src="https://image.flaticon.com/icons/png/512/130/130882.png" />
                            <h4>{elemento[this.state.i].brand} </h4>
                            <h5>{elemento[this.state.i].name} </h5>
                            <h4 className="price">{elemento[this.state.i].price} € </h4>
                     
                    </div>
                   
                    <div className='productCard' id='selectedProduct'>
                    
                        <   img  className="productImage" alt="center item" src={elemento[this.state.y].image} />
                        
                            <h4>{elemento[this.state.y].brand} </h4>
                            <h5>{elemento[this.state.y].name} </h5>
                            <h4 className="price">{elemento[this.state.y].price} € </h4>
                            <SimpleModal productDetails={elemento[this.state.y]} productArray={elemento} />
                      
                    </div>
                    

                    <div className='productCard' onClick={this.decreaseIndex}>
                    <img alt="left arrow " className='imageArrow'src="https://image.flaticon.com/icons/png/512/130/130884.png"/>
                        <img className="productImage" alt="left item " src={elemento[this.state.z].image}  />
                            <h4>{elemento[this.state.z].brand} </h4>
                            <h5>{elemento[this.state.z].name} </h5>
                            <h4 className="price">{elemento[this.state.z].price} € </h4>
                     
                    </div  >
                </div>

            );

        }
        else {
            return (
                <p>
                    Cargando...
                </p>
            )
        }

    }
}

export default Item;

