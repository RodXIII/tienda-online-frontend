import './style/Invoice.css'
import axios from 'axios';
// import SimpleModal from './DetailModal'
import React, { Component } from 'react';
import ProfileMenu from '../containers/ProfileMenu';
import NameLogo from '../logos/name.jpg'
import Logo from '../logos/logo.png'



class Invoice extends Component {
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
            invoicesArray.sort((a, b) =>{
                a=new Date(a.createdAt)
                b=new Date(b.createdAt)
                 return b - a
                })
            var invoice=invoicesArray.map(element=>{

            var date=new Date(element.createdAt)

            var product=element.products.map(item=>
            <div className="productInvoiceContainer">
                <span className="invoiceP">Id: {item.id}</span>
                <span className="invoiceP">{item.name}</span>
                <span className="invoiceP">Quant: {item.Invoice_Product.Quantity}</span>
                <span className="invoiceP">Price: {item.price}€</span>
            </div>
            )
            return <div className="invoiceContainer">
                <div className='invoiceLogoContainer'>
                    <img className='invoiceLogoName' src={NameLogo} alt=""/>
                    <img className='invoiceLogo' src={Logo} alt=""/>
                    <div className="invoiceInfoContainer">
                        <div>
                        <p className="invoiceP">Invoice number: { element.id }</p>
                        <p>Date: {date.getDay()}-{date.getMonth()}-{date.getFullYear()}</p>
                        </div>
                        
                        <p> {localStorage.getItem('userName') }</p>
                    </div>
                </div>
                
                <p>PRODUCTS</p>
                {product}
                <p className="invoiceInfoContainer">Total: { element.totalAmount }€</p>  
                <button>Print</button>
            </div>
            })
            return(
                <div>
                <ProfileMenu/>
                <div className="invoiceSection">
                    
                    <h4>Invoices</h4>
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
export default Invoice;
