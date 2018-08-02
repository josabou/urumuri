
import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { user } from '../api/user.js'
import { child } from '../api/child.js'
import { withTracker } from 'meteor/react-meteor-data';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';


class health_center extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            overview_visible: true,
            message_visible: false,
            m1_visible:true,
            m2_visible:false,
            m3_visible:false,
            m4_visible:false,
            announce_visible: false
        }

    }
    showM1() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });



        this.setState({ m1_visible: true });
    }
    showM2() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });
     


        this.setState({ m2_visible: true });
    }
    showM3() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });



        this.setState({ m3_visible: true });
    }
    showM4() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });



        this.setState({ m4_visible: true });
    }
    showMessage() {
        this.setState({ message_visible: false });
        this.setState({ overview_visible: false });
        this.setState({ announce_visible: false });
   

        this.setState({ message_visible: true });
    }
    showOverview() {
        this.setState({ message_visible: false });
        this.setState({ overview_visible: false });
        this.setState({ announce_visible: false });
       

        this.setState({ overview_visible: true });
    }
    showAnnounce() {
        this.setState({ message_visible: false });
        this.setState({ overview_visible: false });
        this.setState({ announce_visible: false });
       

        this.setState({ announce_visible: true });
    }
    componentDidMount() {
        
  
        if (sessionStorage.length == 0) {
            window.open("/", "_self");
        }
        document.getElementById("jojo_sign_in").style.display = "none";
        document.getElementById("profileUI").style.display = "block";
        document.getElementById("username_Jojo_general").innerHTML = "" + sessionStorage.getItem("username");
        document.getElementById("logout").style.display = "inline";

        document.getElementById("activitypage").style.display = "inline";
        document.getElementById("activitypage").href = "/healthmentors";
    }
    w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }
    w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }



    render() {
        return (

            <div style={{ background: '#2c3e50', color: '#FFF' }}>
                <div>
                    <div className="w3-sidebar w3-bar-block  w3-light-green w3-animate-left" style={{ display: "none" }} id="mySidebar">
                        <button className="w3-bar-item w3-button w3-large"
                            onClick={this.w3_close.bind(this)}>Close &times;</button>
                        
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showAnnounce.bind(this)}>IMENYESHA</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showOverview.bind(this)}>INCAMAKE</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showMessage.bind(this)}>UBUTUMWA</a>
                    </div>
</div>
                    <div>
                        <button style={{ width: "100px" }} className="w3-button w3-white w3-xxlarge" onClick={this.w3_open.bind(this)}>&#9776;</button>

                        <div className="center-block" style={{ margin: "0px 300px 0px 300px" }} >

                            <div className="container" style={{ width: "100%", color: "black" }}>

                                <div className={this.state.announce_visible ? "announce" : "announce_invisible"}>
                                    <h2>IMENYESHA</h2>
                                    <div>
                         
                                        <hr></hr>
                                        <div><h3>IMIRENGE</h3>
                                            <div style={{ height: "300px", overflow: "scroll" }}>
                                                <form >
                                                    <input type="checkbox" value="Kanakuze Veddy" /> Bumbogo<br />
                                                    <input type="checkbox" value="Hitimana baptist" /> Gatsata<br />
                                                    <input type="checkbox" value="Hirary JOanah" /> Jali<br />
                                                    <input type="checkbox" value="Kanakuze Veddy" /> Gikomero<br />
                                                    <input type="checkbox" value="Hitimana baptist" /> Gisozi<br />
                                                    <input type="checkbox" value="Hirary JOanah" /> Jabana<br />
                                                    <input type="checkbox" value="Kanakuze Veddy" /> Kinyinya<br />
                                                    <input type="checkbox" value="Hitimana baptist" /> Ndera<br />
                                                    <input type="checkbox" value="Hirary JOanah" /> Nduba<br />
                                                    <input type="checkbox" value="Hitimana baptist" /> Rusororo<br />
                                                    <input type="checkbox" value="Hirary JOanah" /> Rutunga<br />
                                                    <input type="checkbox" value="Kanakuze Veddy" /> Kacyiru<br />
                                                    <input type="checkbox" value="Hitimana baptist" /> Kimihurura<br />
                                                    <input type="checkbox" value="Hirary JOanah" /> Kimironko<br />
                                                    <input type="checkbox" value="Hirary JOanah" /> Remera<br />
                                                    <br />
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><textarea className="form-control" style={{ width: "250px", height: "80px" }}></textarea></td>
                                                                <td><button className="btn-success" style={{ width: "120px", height: "40px" }}>Send</button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </form></div>

                                        </div>
                                    </div>

                                </div>
                                <div className={this.state.message_visible ? "message" : "message_invisible"}>
                                    <h2>UBUTUMWA</h2>
                                    <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><div style={{ width: "200px", height: "400px", overflow: "scroll" }}>
                                                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM1.bind(this)}>NIYITUGENERA Josiane</button>
                                                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM2.bind(this)}>Germain </button>
                                                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM3.bind(this)}>Salvi</button>
                                                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM4.bind(this)}>Gilbert </button>
                                                    </div></td>
                                                    <td>
                                                    <div style={{ width: "640px", height: "400px" }} className={this.state.m1_visible ? "m1" : "m1_invisible"}>
            <div style={{ height: "300px", overflow: "scroll" }}>

            <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>Mujyana, mwaramutse neza, nakwibutsaga ko umana hari inkingo atarafata , nifuzaga ko ubyibutsa abaturage bawe  </div>
            <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>murakoze Mujyana, gusa narimfite ikibazo.. turabyitaho </div>
             


      </div>
                    <div>
                <table>
                  <tbody>
              <tr>
  <td><textarea className="form-control" style={{ width: "500px", height: "40px" }}></textarea></td>
  <td><button className="btn-success" style={{ width: "120px", height: "40px" }}>Send</button></td>
                    </tr>
    </tbody>
    </table>
          </div>
        </div>
                                                        <div style={{ width: "640px", height: "400px" }} className={this.state.m2_visible ? "m2" : "m2_invisible"}>
                                                        <div style={{ height: "300px", overflow: "scroll" }}>
                                                        <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>Mujyanama, mwaramutse neza mumurenge aho n'amahoro!?  </div>
                                                        <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>yego turaho  </div>
                                                        <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>yeeh namahoro noneho</div>
                                                        
                                                            </div>
                                                            <div>
                                                                <table>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><textarea className="form-control" style={{ width: "250px", height: "80px" }}></textarea></td>
                                                                            <td><button className="btn-success" style={{ width: "120px", height: "40px" }}>Send</button></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>


                            </div>
                            <div className={this.state.overview_visible ? "overview" : "overview_invisible"} >
                                                            <div><h2>INCAMAKE</h2></div>
                                                             
                                                                        <div>
                            
                                                                            <div className="container" style={{ width: "100%" }}>
                                                                                <div>
                                                                                    <div className="row">
                                                                                        <div className="col order-last" style={{ float: "left", width: "400px", borderLeft: "1px solid black", padding: "5px" }}>GASABO</div>
                                                                                        <div style={{ clear: "both" }}></div>
                                                                                    </div>
                                                                                   <div className="row" style={{width:"100%"}}>
                                                                               <div className="col order-first" style={{ float: "left", width: "400px" }}>
                                                                                            <div className="badge" style={{color:"black",background:"blue"}}>UKO ABAJYANAMA B'UBUZIMA BANGANA</div>
                                                                                            <div >
                                                                                                <span className="badge" style={{ fontSize: "20px" }}>4</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col order-last" style={{ float: "left", width: "300px" }}>
                                                                                            <div className="badge" style={{color:"black",background:"blue"}}>INKINGO ZAFASHWE:</div>
                                                                                            <div >
                                                                                                <div className="badge">Baccille Calmette Guérin vaccine <span className="btn-success inactive"style={{ fontSize: "20px" }}>40</span> </div>
                                                                                                <div className="badge">Poliomyélite I <span className="btn-success inactive"  style={{ fontSize: "20px" }}>50</span> </div>
                                                                                                <div className="badge">Pentavalent I <span className="btn-success inactive" style={{ fontSize: "20px" }}>60</span> </div>
                                                                                            </div>
                                                                                        </div>
                                                                               
                                                                                  
                                                                                        <div style={{ clear: "both" }}></div>
                                                                                    </div>
                                                                                    <div className="row" style={{width:"100%"}}>
                                                                                    <div className="col" style={{ float: "left", width: "300px" }}>
                                                                                            <div className="badge" style={{color:"black",background:"blue"}}>INKINGO ZITARAFATWA:</div>
                                                                                            <div >
                                                                                         
                                                                                                <div className="badge">Pneumocoque <span className="btn-danger inactive" style={{ fontSize: "20px" }}> 4</span> </div>
                                                                                                <div className="badge">Rougeole <span className="btn-danger inactive" style={{ fontSize: "20px" }}>10</span> </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col order-first" style={{ float: "left", width: "200px"}}>
                                                                                            <div className="badge" style={{color:"black",background:"blue"}}>UKO ABATURAGE BANGANA</div>
                                                                                            <div>
                                                                                                <span className="badge" style={{ fontSize: "20px" }}>200</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div style={{ clear: "both" }}></div>
                                                                                    </div>
                                                                                    
                                                                                    
                                                                                    </div>
                                                                                    </div></div></div>
                                                                
                        </div>
                    </div>
               

            </div>
        )
    }
}
export default health_center;
