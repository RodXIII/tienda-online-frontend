
import './style/Search.css'
import axios from 'axios';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Search extends Component {
    constructor(props) {

        super(props);
        this.state = {
          
            item: []
        }

    }
    handleInputChange(e){
        e.preventDefault()
        console.log("entra en la funcion")
            axios.get('http://localhost:3001/product/search/'+this.search.value)
            .then(element => {
              console.log("query realizada") 
                this.props.getProductList(element.data)
            })
            .catch(err => { console.log('ha habido un error'+err) })   
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
                    <button className="searchButton" onClick={this.handleInputChange.bind(this)}>search</button>
                </form>
                </div>
            )
        

    }
}

export default Search;

