
import './style/Sales.css'
import axios from 'axios';
import SimpleModal from './DetailModal'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Sales extends Component {
    constructor() {

        super();
        this.state = {
            items: [],
            i: 0    
        }

    }
    componentDidMount() {

        axios.get('http://localhost:3001/product/allProduct')
            .then(item => {

                var array = item.data;
                var arraySales;
                var i = array.length;
                while (i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                    
                }
                arraySales=array.filter(product=>product.price <150)
              
                this.setState({
                    items: arraySales,
                    productsNumber: arraySales.length

                })

            })
            .catch(err => { console.log(err) })

    }
    increaseIndex = (e) => {
        console.log(this.state.i)
        if (this.state.i < (this.state.items.length)-1) {
        this.setState({
            i: (this.state.i) + 1,
            
        })
    }
    else{
        this.setState({
            i: 0
        }) 
    }
    }
    decreaseIndex = (e) => {
        if (this.state.i > 0) {
            this.setState({
                i: (this.state.i) - 1,
            })
        } else {
            this.setState({
                i: (this.state.productsNumber)-1,     
            })

        }

    }
    render() {
        const elemento = this.state.items
        
        if (elemento.length===this.state.productsNumber) {
            const arrayImg=elemento[this.state.i].image.split("150x150")
            let bigImg=`${arrayImg[0]}300x300${arrayImg[1]}`
            return (
               
                  <div className='salesContainer'>
                        
                      <button onClick={this.increaseIndex} className='button'></button>
                    
                   
                    <div className='saleCard' >
        
                        <img alt ="item" src={bigImg} />
                        <div className='salesDetail'>
                        <h2>{elemento[this.state.i].brand} </h2>
                            <h4>{elemento[this.state.i].name}</h4> 
                            <h1 className="price">{elemento[this.state.i].price} € </h1>
                            <SimpleModal productDetails={elemento[this.state.i]} productArray={elemento} />
                          <img className="saleTag"  src=" https://www.digdevdirect.com/wp-content/uploads/2017/06/SALE.jpg" alt=""/> 
                        </div>
                    </div>
                    
                       <button onClick={this.decreaseIndex} className='button'></button> 
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

export default Sales;

