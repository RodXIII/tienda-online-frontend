import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './NavBar.css'
import { Nav } from 'react-bootstrap'

class Home extends Component {

    render() {
        const loginRegLink = (


            <Nav id="nav" variant="tabs" defaultActiveKey="/register">

                <Nav.Item>
                    <Nav.Link href="/register" >Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login" > Login</Nav.Link>
                </Nav.Item>
            
            </Nav>

        )

        const userLink = (

            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Logout" >Logout</Nav.Link>
                </Nav.Item>

            
            </Nav>
        )


        return (
           
            <Nav className='menu' variant='tabs'>
                 
                <Nav.Item>
                    <Link to="/">
                        Home
                </Link>
                </Nav.Item>

                {localStorage.token ? userLink : loginRegLink}

            </Nav>

        )

    }

}

export default withRouter(Home) 
