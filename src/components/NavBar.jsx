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
        </ul> 
        )

        return (
            <nav>
                <button type="button">   
                <span/>       
                </button>
                <div>
                        <ul >
                            <li>
                                <Link to="/" >
                                    Home
                                </Link>
                            </li>
                        </ul>
                        {loginRegLink}
                    </div>
            </nav>
        )

    }
    
}

export default withRouter(Home) 
