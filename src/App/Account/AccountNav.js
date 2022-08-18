import React, {useState } from 'react';
import '../Css/AccountNav.css'
import Account from './Account';
import Privacy from './Privacy';
import Subscribe from './Subscribe'

const App = () => {
  const[Profile,setProfile]=useState("My Profile");
  function displayPage (ProfileN) {
    return setProfile(ProfileN);
  }
    return (
        <>
        <div className='main'>
        <div className="prof">
            <ul>
              <li style={Profile === "My Profile"? {backgroundColor: ' rgb(42, 39, 58)',}: null} onClick={()=> displayPage("My Profile")}>My Profile</li>
              <li style={Profile === "Privacy & Security"? {backgroundColor: ' rgb(42, 39, 58)',}: null } onClick={()=> displayPage("Privacy & Security")}>Privacy & Security</li>
              <li style={Profile === "Subscribe"? {backgroundColor: ' rgb(42, 39, 58)',}: null } onClick={()=> displayPage("Subscribe")}>Subscribe</li>
            </ul>
        </div>
        {
        (() => {
          if(Profile === "My Profile") {
            return <Account/>
          } else if (Profile === "Privacy & Security") {
            return <Privacy/>
          } else {
            return <Subscribe/>
          }
        })()
      }
        </div>
        </>
    )
}

export default App;