import React from 'react'
// import React, { Component } from 'react'
// import { Link, withRouter } from 'react-router-dom'
import './style/NavBar.css'
// import { Nav } from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        // onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Home" href="/" />
        <Tab label="Categories" href="/categories" />
        <Tab label="Register" href="/register" />
        <Tab label="Login" href="/login" />
        <Tab label="Logout" href="/logout" />
        <Tab label="Profile" href="/profile" />
      </Tabs>
    </Paper>
  );
}
// class Home extends Component {



//     render() {
//         const loginRegLink = (

//             <Paper square>
//                 <Tabs
//                     value={value}
//                     indicatorColor="primary"
//                     textColor="primary"
//                     onChange={handleChange}
//                     aria-label="disabled tabs example"
//                 >
//                     <Tab label="Active" />
//                     <Tab label="Disabled" disabled />
//                     <Tab label="Active" />
//                 </Tabs>
//             </Paper>
//             // <Nav id="nav" variant="tabs" defaultActiveKey="/register">

//             //     <Nav.Item>
//             //         <Nav.Link href="/register" >Register</Nav.Link>
//             //     </Nav.Item>
//             //     <Nav.Item>
//             //         <Nav.Link href="/login" > Login</Nav.Link>
//             //     </Nav.Item>

//             // </Nav>

//         )

//         const userLink = (

//             <Nav variant="tabs">
//                 <Nav.Item>
//                     <Nav.Link href="/profile">Profile</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link href="/Logout" >Logout</Nav.Link>
//                 </Nav.Item>


//             </Nav>
//         )


//         return (

//             <Nav className='menu' variant='tabs'>

//                 <Nav.Item>
//                     <Link to="/">
//                         Home
//                 </Link>
//                 </Nav.Item>

//                 {localStorage.token ? userLink : loginRegLink}

//             </Nav>

//         )

//     }

// }

// export default withRouter(Home) 
