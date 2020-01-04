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
  
  if(localStorage.getItem('role') == 1){
    console.log("entra en el menu admin")
  return (
    <Paper square className="adminMenu">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        // onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Admin" href="/profileData" />
        <Tab label="Costumer Invoice" href="/profile/adminInvoice" />
        <Tab label="Sales History" href="/profile/salesHistory" />
        <Tab label="Edit Product" href="/profile/edit" />
       </Tabs>
    </Paper>
  );
}else{
  console.log("entra en el menu normal")
  return (
    <Paper square className="profileMenu">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        // onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Profile" href="/profileData" />
        <Tab label="Invoice" href="/profile/invoice" />
        <Tab label="Purchase History" href="/profile/purchases" />
       </Tabs>
    </Paper>
  );
  }
}
