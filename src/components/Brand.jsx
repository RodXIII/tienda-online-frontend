import './style/Brand.css'
import axios from 'axios';
import React, { Component } from 'react';;

class Brand extends Component {
    constructor() {
        super();
        this.state={
            items :[]
        }

    }
    getProductsBrand(brand) {

        axios.get(`http://localhost:3001/product/br/${brand}`)
            .then(item => {
                
                var array = item.data
                var i = array.length;
                while (i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                }
                this.props.getProductList(array)
            })
            .catch(err => { console.log(err) })

    }

    render() {
       
        return (
  
            <span className='brandSection'>
                <div className='brandName' onClick={()=>this.getProductsBrand('fender')}>
                    <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/fender.gif" alt="" />
                </div>
                <div className='brandName' onClick={()=>this.getProductsBrand('ibanez')}>
                    <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/ibanez.gif" alt="" />
                </div>
                <div className='brandName' onClick={()=>this.getProductsBrand('yamaha')}>
                    <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/yamaha.gif" alt="" />
                </div>
                <div className='brandName' onClick={()=>this.getProductsBrand('korg')}>
                    <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/korg.gif" alt="" />
                </div>
                <div className='brandName' onClick={()=>this.getProductsBrand('gibson')}>
                    <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/gibson.gif" alt="" />
                </div>
                    <div className='brandName' onClick={()=>this.getProductsBrand('pearl')}>
                        <img src="https://thumbs.static-thomann.de/thumb/thumb100x46/pics/herstlogos/pearl.gif" alt="" />
                    </div>
                    
                </span>
                
                );
    
            }
            
    
        
    }
    
    export default Brand;
