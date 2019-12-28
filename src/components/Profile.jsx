import './style/Profile.css'
import axios from 'axios';
// import SimpleModal from './DetailModal'
import React, { Component } from 'react';
import ProfileMenu from '../containers/ProfileMenu';


class Profile extends Component {
    constructor() {
        super();
        this.state={
            userData:[]
        }
    }
    componentDidMount() {
        var userId= localStorage.getItem('userId')
        axios.get(`http://localhost:3001/auth/${userId}`,
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
        if(localStorage.userId){
            return(
               
                <div>
                    <ProfileMenu/>
                    <div className='profileContainer' >
                        <div className='titleTag'>
                            <h3>{this.state.userData.userName}'s PROFILE</h3>
                        </div>
                        <div className='dataTag'>
                        <span className='Tag'>Name: </span><span className='data'>{this.state.userData.userName}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>Email: </span><span className='data'>{this.state.userData.email}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>Adress: </span><span className='data'>{this.state.userData.address}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>Country: </span><span className='data'>{this.state.userData.country}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>Credit Card: </span><span className='data'>{this.state.userData.creditcardNumber}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>C.C. type: </span>   <span className='data'>{this.state.userData.creditcardType}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>Sign In Date: </span>   <span className='data'>{this.state.userData.createdAt}</span>
                        </div>   
                        
                    </div>
                   
                </div>
            )
            

        }
        else{
            return(
                <div>
                    <span className='data'>Sorry, you need to login first</span>
                </div>
            )
        }
    }
}
export default Profile;

