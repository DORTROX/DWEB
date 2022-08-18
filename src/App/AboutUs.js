import React, { Component } from 'react'
import './Css/AboutUs.css'
import Dvid from './Images/LOGO-1.mkv';

export default class AboutUs extends Component {
  render() {
    return (
        <div className="AboutUs">
          <div className="ScreenOverlay"></div>
            <video autoPlay loop muted>
              <source  src={Dvid}/>
            </video>
            <div className="VidContent">
              <div className="mainContent">
                <h1>
                  A Programming Enthusiast
                </h1>
                <div className="ContentWriting">
                  <p>I am a Full-Stack Web, Software and a Game Developer with some knowledge of Cyber Sec.</p>
                  <a>| Read More |</a>
                </div>
              </div>
            </div>
        </div>
    )
  }
}
