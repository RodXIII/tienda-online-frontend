import React, { Component } from 'react'
import './Item.css'
import axios from 'axios';

class Item extends Component {


    constructor(props) {

        super(props);
        this.state = {
            items: []
        }

    }
    componentWillMount() {

        axios.get('http://localhost:3001/product/allProduct')
            .then(item => {
                this.setState({
                    items: item.data
                })
                console.log(this.state.items)
            })
            .catch(err => { console.log(err) })


    }

    render() {
        return (
            <div>
                Products
                <div className='section'>
                    {this.state.items.map(item => (
                      <div className="productCard">
                        
                            <img src= {item.image}></img>
                            <h3>{item.brand} </h3>
                            <h4>{item.name} </h4>
                            <h3>{item.price} € </h3>
                    
                     </div>
                    ))}
               </div>
            </div>
        )
    }

}

export default Item;