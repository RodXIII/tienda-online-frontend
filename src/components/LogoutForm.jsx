import React, { Component } from 'react'
import { logout } from './logoutController'
import { Redirect } from 'react-router'
import './style/Logout.css'

class Logout extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirect:false
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()

        logout().then(res => {
            localStorage.clear();
            console.log('Token removed')
            this.setState({
                redirect:true
            })
        })
       
    }

    render() {
        if(localStorage.getItem('token')){
            console.log("entra en logout")
        return (
        
            <div className="logoutForm">
                <form noValidate onSubmit={this.onSubmit}>
                    <h4 className="Logout">Are you sure u want to leave?</h4>
                    <button className="formButton"  type="submit">
                        Logout
                    </button>
                </form>
            </div>
        )
        }else{
            console.log("entra en redirect")

            return(
                <div>
                  <Redirect to="/" />
                </div>
              )
        }
    }
}

export default Logout