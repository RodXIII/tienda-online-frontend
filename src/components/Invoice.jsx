// import './style/Item.css'
import axios from 'axios';
// import SimpleModal from './DetailModal'
import React, { Component } from 'react';
import ProfileMenu from '../containers/ProfileMenu';



class Invoice extends Component {
    constructor() {
        super();
        this.state={
            userData:[]
        }
    }
    componentDidMount() {
       
        axios.get(`http://localhost:3001/inv/invoices`,
        {headers: {
            Accept : 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(item => {
                this.setState({
                    userData:item.data
                })
                console.log(item.data)
            })
            .catch(err => { console.log(err) })

        }   
    render() {
        console.log("entra aquiiiiiiiiiiiiiiiiiiiiiiiiiii")
        if(localStorage.userId){
            return(
               
                <div>
                    <ProfileMenu/>
                    <p>{this.state.userData.userName}</p>
                </div>
            )
            

        }
        else{
            return(
                <div>
                    <p>Sorry, you need to login first</p>
                </div>
            )
        }
    }
}
export default Invoice;
