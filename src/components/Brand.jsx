import './Brand.css'
import axios from 'axios';
// import React from 'react';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Brand extends Component {
    constructor() {

        super();
        this.state = {

        }

    }
    componentDidMount() {

        axios.get('http://localhost:3001/product/brand')
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




    render() {
        const elemento = this.state.items
        // v2005-06-01


        // console.log(elemento)
        // console.log((elemento) ? elemento[0].image : '')



        return (
            // <Carousel className='section'>
            <span className='brandSection'>
                <div className='brandName'>
                    <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/fender.gif" alt="" />
                </div>
                <div className='brandName'>
                    <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/ibanez.gif" alt="" />
                </div>
                <div className='brandName'>
                    <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/yamaha.gif" alt="" />
                </div>
                <div className='brandName'>
                    <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/korg.gif" alt="" />
                </div>
                <div className='brandName'>
                    <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/gibson.gif" alt="" />
                </div>
                    <div className='brandName'>
                        <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/pearl.gif" alt="" />
                    </div>
                </span>

                );
    
            }
            
    
        
    }
    
    export default Brand;
