import './style/Purchase.css'
import axios from 'axios';
import React, { Component } from 'react';
import ProfileMenu from '../containers/ProfileMenu';
import NameLogo from '../logos/name.jpg'
import Logo from '../logos/logo.png'



class Purchase extends Component {
    constructor() {
        super();
        this.state={
            userData:[]
        }
    }
    componentDidMount() {
        
       console.log(localStorage.getItem('userId'))
       var userId=localStorage.getItem('userId')
        axios.get(`http://localhost:3001/inv/myproducts/${userId}`,{headers: {
            Accept : 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(item => {
                this.setState({
                    userData:item.data
                })
                
            })
            .catch(err => { console.log(err) })

        }   
    render() {
        const invoicesArray=this.state.userData
        console.log(invoicesArray)
        if(invoicesArray!==[]){
            //sort the array of pruchases by date
            invoicesArray.sort((a, b) =>{
                a=new Date(a.createdAt)
                b=new Date(b.createdAt)
                 return b - a
                })
            var invoice=invoicesArray.map(element=>{
                
            var date=new Date(element.createdAt)
            var product=element.products.map(item=>
            <div className="purchaseCard">
                <img className src={item.image}></img>
                <span className="purchaseDetail">{item.name}</span>
                <span className="purchaseDetail">{item.brand}</span>
                <span className="purchaseDetail">{item.Invoice_Product.Quantity}</span>
                <span className="purchaseDetail">{item.price}€</span>
            <span className="purchaseDetail">{date.getDay()}-{date.getMonth()}-{date.getFullYear()}</span>
            </div>
            ) 
            return product  
            })
            return(
                <div>
                <ProfileMenu/>
                <div className="purchaseSection">
                    
                    <h4>Purchases</h4>
                    <div>
                        {invoice} 
                    </div>
                </div>   
                </div>
            )
            

        }
        else{
            return(
                <div className="invoiceSection">
                    <h4>Sorry, you didn't purchase any product so far</h4>
                </div>
            )
        }
    }
}
export default Purchase;
