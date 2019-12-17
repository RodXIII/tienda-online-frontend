import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Home extends Component {

    render() {
        const loginRegLink = (
        <ul>
            <li>
                <Link to="/register">
                Register
                </Link>
            </li>
            <li>
            <Link to="/login">
                Login
                </Link>
            </li>
        </ul> 
        )

        const logoutProfLink = (
            <ul>
                <li>
                    <Link to="/logout">
                    Logout
                    </Link>
                </li>
            </ul> 
            )

        return (
            <nav>
                <div>
                        <ul >
                            <li>
                                <Link to="/" >
                                    Home
                                </Link>
                            </li>
                        </ul>
                        {loginRegLink}
                        {logoutProfLink}
                    </div>
            </nav>
        )

    }
    
}

export default withRouter(Home) 
