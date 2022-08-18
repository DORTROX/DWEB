import React, {useState } from 'react';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import AccountNav from './Account/AccountNav';

const App = () => {
  const[Page,setPage]=useState("Account");
  function displayPage (PageN) {
    return setPage(PageN);
  }
    return (
        <>
        <Navbar ChangeVal = {displayPage}/>
        { 
        (() => {
          if(Page === "About") {
            return <AboutUs/>
          } else if (Page === "Account") {
            return <AccountNav/>
          } else {
            
          }
        })()
      }
        </>
    )
}

export default App;