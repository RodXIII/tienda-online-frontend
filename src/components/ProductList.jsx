import React, { Component } from 'react';
import SimpleModal from './DetailModal'

class ProductList extends Component{
   constructor(props){
       super(props);
   }

  render(){
      console.log("entra aquiiiiiiiiii")
      console.log(this.props.sendList)
    let item= ''
    if(this.props.sendList.data){
        item = this.props.sendList.data.map(element=>
        <div className="searchCard">
            <img className="details" src={element.image}/>
            <h3 className="details">{element.name}</h3>
            <h4 className="details">{element.brand}</h4>
            <h1 className="details">{element.price}€</h1>
            <SimpleModal productDetails={element} />
        </div>
        )    
    }else{
        item = this.props.sendList.map(element=>
            <div className="searchCard">
                <img className="details" src={element.image}/>
                <h3 className="details">{element.name}</h3>
                <h4 className="details">{element.brand}</h4>
                <h1 className="details">{element.price}€</h1>
                <SimpleModal productDetails={element} />
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
