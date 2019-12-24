

// import React, { Component } from 'react'
import './style/Search.css'
import axios from 'axios';
// import ProductList from './ProductList'
// import React from 'react';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

class Search extends Component {
    constructor(props) {

        super(props);
        this.state = {
          
            item: []
        }

    }
    handleInputChange(e){
        console.log("entra en la funcion")
            // axios.get('http://localhost:3001/product/search/'+this.search.value)
            // .then(element => {
            //   console.log("query realizada")
              
            //     // this.setState({
            //     //     item: element
            //     // })
                
                
               
            // })
            // .catch(err => { console.log('ha habido un error'+err) })
        
            this.props.mostrarFrase()
    }

    render() {
        
        
            return (  
                      
                <div>
                <form className='searchContainer'>
                    <input
                    className='search'
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        // onChange={this.handleInputChange}
                        // onKeyDown={this.handleInputChange}
                    />
                    <button onClick={this.handleInputChange.bind(this)}>search</button>
                </form>
            {/* <p>{this.state.item.data[0].name}</p>
                <ProductList products={this.state.item.data}/> */}
                </div>
            )
        

    }
}

export default Search;

