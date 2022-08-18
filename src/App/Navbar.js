import React, {Component} from "react";
import "./Css/Navabr.css";

class Navbar extends Component {
    render(){
        return (
            <nav>
                <div className="Logo">
                    <h2>DWEB</h2>
                </div>
                <div className="navSec">
                    <ul>
                        <li onClick={()=> this.props.ChangeVal("About")}>About</li>
                        <li onClick={()=> this.props.ChangeVal("Account")}>Your Account</li>
                        <li onClick={()=> this.props.ChangeVal("Join")}>Join Us</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;