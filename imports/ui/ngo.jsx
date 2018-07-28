
import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';


class  ngo extends React.Component {
      
   
    constructor(props){
        super(props);

    }

    componentDidMount(){
        if(sessionStorage.length==0){
            window.open("/","_self");
        }
        document.getElementById("jojo_sign_in").style.display="none";
        document.getElementById("profileUI").style.display="block";
        document.getElementById("username_Jojo_general").innerHTML=""+sessionStorage.getItem("username");
        document.getElementById("logout").style.display="inline";
        document.getElementById("activitypage").style.display="inline";
        document.getElementById("activitypage").href="/ngo";
    }
     w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }
     w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }



  render() {
    return  (
      
    <div style={{background: '#2c3e50', color: '#FFF'}}>
    <div>
    <div className="w3-sidebar w3-bar-block w3-dark-grey w3-animate-left" style={{display:"none"}} id="mySidebar">
  <button  className="w3-bar-item w3-button w3-large"
  onClick={this.w3_close.bind(this)}>Close &times;</button>
  <a href="#" className="w3-bar-item w3-button">Incomming Event</a>
  <a href="#" className="w3-bar-item w3-button">Annoncement</a>
  <a href="#" className="w3-bar-item w3-button">Overview</a>
  <a href="#" className="w3-bar-item w3-button">Message</a>
</div>

<div>
  <button style={{width:"100px"}} className="w3-button w3-white w3-xxlarge" onClick={this.w3_open.bind(this)}>&#9776;</button>
  <div className="w3-container">
    <h1>Animated Sidebar</h1>
    <p>Click on the "hamburger menu" to slide in the side navigation.</p>
    <p>W3.CSS provide the following animation classes if you want to experiment for yourself:</p>
    <p>w3-animate-left, w3-animate-top, w3-animate-bottom, w3-animate-right, w3-animate-opacity, w3-animate-zoom</p>
  </div>
</div>
        </div>
        
    </div>
  )
}
}
export default ngo;
