
import './style/Search.css'
import axios from 'axios';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Search extends Component {
    constructor(props) {

        super(props);
        this.state = {
          
            item: [],
            isChecked: false
        }

    }
    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
    }
    handleInputChange(e){
        e.preventDefault()
        console.log("entra en la funcion")
            axios.get('http://localhost:3001/product/search/'+this.search.value)
            .then(element => {
              console.log("query realizada")
              let items=element.data

              if (this.state.isChecked){
                  console.log("entra en sort")
                items.sort((a, b) =>{
                     return b.price - a.price
                    })
              }

             this.props.getProductList(items)

            })
            .catch(err => { console.log('ha habido un error'+err) })   
    }

    render() {
        
            return (              
                <div>
                <form className='searchContainer'>
                    <input
                    onChange={this.handleInputChange.bind(this)}
                    className='search'
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        // onChange={this.handleInputChange}
                        // onKeyDown={this.handleInputChange}
                    />
                    <button className="searchButton" onClick={this.handleInputChange.bind(this)}>search</button>
                    <div className="sortBox">
                        <label  htmlFor="SortPrice">Sort</label>
                        <input
                        checked={this.state.isChecked}
                        onChange={this.toggleChange}
                        className= "sortItems"
                         id="sortPrice"
                         type="checkbox"/>
                    </div>
                    
                </form>
                </div>
            )
        

    }
}

export default Search;

