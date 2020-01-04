import React from 'react'
import './style/NavBar.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className="menu">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        // onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Home" href="/" />
        <Tab label="Register" href="/register" />
        <Tab label="Login" href="/login" />
        <Tab label="Logout" href="/logout" />
        <Tab label="Profile" href="/profile" /> 
        <Tab label="Shopping Cart" href="/cart" /> 
      </Tabs>
      <nav>
        <ul>
          <li className="dropDown"><a href="#">CATEGORY</a>
            <ul>
              <li><a href="/cat/electric-guitar">ELECTRIC GUITAR</a></li>
              <li><a href="/cat/electric-bass">ELECTRIC BASS</a></li>
              <li><a href="/cat/concerto-guitar">CONCERTO GUITAR</a></li>
              <li><a href="/cat/drums">DRUMS</a></li>
              <li><a href="/cat/keyboard">KEYBOARD</a></li>
            </ul>
          </li>
      </ul>
    </nav>
    </Paper>
  );
}
