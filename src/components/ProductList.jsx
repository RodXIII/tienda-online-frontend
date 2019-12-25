import React, { Component } from 'react';

class ProductList extends Component{
   constructor(props){
       super(props);
   }

  render(){
      
    let item= ''
    if(this.props.sendList.data){
        item = this.props.sendList.data.map(element=>
        <div className="searchCard">
            <img src={element.image}/>
            <h2>{element.name}</h2>
            <h4>{element.brand}</h4>
            <h1>{element.price}€</h1>
        </div>
        )    
    }   
     
    return (
    <div className="searchItemsCointainer">
        {item}
    </div>
    );
      }
    
}  

export default ProductList;
