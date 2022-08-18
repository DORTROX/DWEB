import React, { useState } from 'react'
import '../Css/Account.css';
import Kaizen from './Programs/Kaizen';
import Raijin from './Programs/Raijin';
import Phantasm from './Programs/Phantasm';

const Account = () => {
    const[Programs,setPrograms]=useState("KAIZEN");
    function displayPrograms (ProfileN) {
      return setPrograms(ProfileN);
    }

    return (
      <>
      <div className='Account'>
        <div className="headerSec">
          <h1>PROGRAMS</h1>
          <ul>
            <li style={Programs === "KAIZEN"? {borderBottom: '2px solid white',}: null} onClick={()=> displayPrograms("KAIZEN")}>KAIZEN</li>
            <li style={Programs === "PHANTASM"? {borderBottom: '2px solid white',}: null} onClick={()=> displayPrograms("PHANTASM")}>PHANTASM</li>
            <li style={Programs === "RAIJIN"? {borderBottom: '2px solid white',}: null} onClick={()=> displayPrograms("RAIJIN")}>RAIJIN</li>
          </ul>
        </div>
        { 
        (() => {
          if(Programs === "KAIZEN") {
            return <Kaizen/>
          } else if (Programs === "PHANTASM") {
            return <Phantasm/>
          } else {
            return <Raijin/>
          }
        })()
      }
      </div>
      </>
    )
}

export default Account;