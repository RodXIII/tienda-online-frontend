import React, { Component } from 'react'
import './style/Home.css'
import Item from './Item'
import Brand from './Brand'
import Sales from './Sales'
import Search from './Search'

class Home extends Component {
    constructor(){
        super();
        this.state={

            frase:''
        }
    }
    mostrarFrase(){
        console.log("MOSTRAR FRASE!!!!!!!!!!")
        this.setState({
            frase:'hola mundo'
        })
    }
    
    render() {
        console.log("el estado es "+this.state.frase)
        return (

            <div>
                <h1>Products</h1>
                <h5 className="banner">All our products are genuine and original brand new.</h5>
                <Search mostrarFrase={this.mostrarFrase.bind(this)} />
                    <p>{this.state.frase}</p>

                    <Item />
                    <Brand />
                <div className="mainContainer">
                

                </div>
                <p className="banner"><img src="http://www.allaboutcandc.com/uploads/1/0/4/6/10465076/published/great-deal-logo-header-8-18_1.png?1534784895" alt="" /></p>
                <div>
                    <Sales />
                    
                </div>

            </div>

        )
    }
}

export default Home;