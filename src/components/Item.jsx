// import React, { Component } from 'react'
import './Item.css'
import axios from 'axios';
// import React from 'react';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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

                console.log("hola")
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
                console.log("entra aqui" + this.state.items)


            })
            .catch(err => { console.log(err) })

    }
    increaseIndex = (e) => {
        console.log(this.state.i)
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
        console.log(this.state.i)
        if (this.state.i > 0) {
            this.setState({
                i: (this.state.i) - 1,
                y: (this.state.y) - 1,
                z: (this.state.z) - 1,
            })
        } else {
            this.setState({
                i: 997,
                y: 998,
                z: 999
            })

        }

    }
    render() {
        const elemento = this.state.items
        // v2005-06-01


        // console.log(elemento)
        // console.log((elemento) ? elemento[0].image : '')

        if (elemento[999]) {

            return (
                // <Carousel className='section'>
                <div className='section'>
                    <button onClick={this.increaseIndex}></button>
                    <div className='productCard'>
                        <img onClick={this.increaseIndex} src={elemento[this.state.z].image} />
                        
                            <h4>{elemento[this.state.z].brand} </h4>
                            <h5>{elemento[this.state.z].name} </h5>
                            <h4 class="price">{elemento[this.state.z].price} € </h4>
                     
                    </div>
                    <div className='productCard' id='selectedProduct'>
                        <img src={elemento[this.state.y].image} />
                   
                            <h4>{elemento[this.state.y].brand} </h4>
                            <h5>{elemento[this.state.y].name} </h5>
                            <h4 class="price">{elemento[this.state.y].price} € </h4>
                      
                    </div>
                    <div className='productCard'>
                        <img onClick={this.decreaseIndex} src={elemento[this.state.i].image} />
                       
                            <h4>{elemento[this.state.i].brand} </h4>
                            <h5>{elemento[this.state.i].name} </h5>
                            <h4 class="price">{elemento[this.state.i].price} € </h4>
                     
                    </div>
                    <button onClick={this.decreaseIndex}></button>
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

// class Item extends Component {


//     constructor(props) {

//         super(props);
//         this.state = {
//             items: []
//         }

//     }
//     componentWillMount() {

//         axios.get('http://localhost:3001/product/allProduct')
//             .then(item => {
//                 this.setState({
//                     items: item.data
//                 })

//             })
//             .catch(err => { console.log(err) })


//     }

//     render() {
//         let productPack=[]
//         console.log(this.state.items)
//         for(let i=0;i<5;i++){
//             productPack[i]=this.state.items[]
//         }
//         return (
//             <div>
//                 Products
//                 <div className='section'>
//                     {this.state.items.map(item => (
//                       <div className="productCard">

//                             <img src= {item.image}></img>
//                             <h4>{item.brand} </h4>
//                             <h4>{item.name} </h4>
//                             <h4>{item.price} € </h4>

//                      </div>
//                     ))}
//                </div>
//             </div>
//         )
//     }

// }

// export default Item;