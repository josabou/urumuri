
import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { withTracker } from 'meteor/react-meteor-data';
import { user } from '../api/user.js'
import { vaccines } from '../api/vaccines.js'
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';


class healthmentors extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            overview_visible: true,
            message_visible: false,
            upcomming_visible: false,
            m1_visible:true,
            m2_visible:false,
            m3_visible:false,
            m4_visible:false,
            m5_visible:false,
            m6_visible:false,
            m7_visible:false,
            announce_visible: false
        }

    }
    

    showM1() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });
        this.setState({ m5_visible: false });
        this.setState({ m6_visible: false });
        this.setState({ m7_visible: false });


        this.setState({ m1_visible: true });
    }
    showM2() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });
        this.setState({ m5_visible: false });
        this.setState({ m6_visible: false });
        this.setState({ m7_visible: false });


        this.setState({ m2_visible: true });
    }
    showM3() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });
        this.setState({ m5_visible: false });
        this.setState({ m6_visible: false });
        this.setState({ m7_visible: false });


        this.setState({ m3_visible: true });
    }
    showM4() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });
        this.setState({ m5_visible: false });
        this.setState({ m6_visible: false });
        this.setState({ m7_visible: false });


        this.setState({ m4_visible: true });
    }
    showM5() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });
        this.setState({ m5_visible: false });
        this.setState({ m6_visible: false });
        this.setState({ m7_visible: false });


        this.setState({ m5_visible: true });
    }
    showM6() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });
        this.setState({ m5_visible: false });
        this.setState({ m6_visible: false });
        this.setState({ m7_visible: false });


        this.setState({ m6_visible: true });
    }
    showM7() {
        this.setState({ m1_visible: false });
        this.setState({ m2_visible: false });
        this.setState({ m3_visible: false });
        this.setState({ m4_visible: false });
        this.setState({ m5_visible: false });
        this.setState({ m6_visible: false });
        this.setState({ m7_visible: false });


        this.setState({ m7_visible: true });
    }

    showIncomming() {
        this.setState({ message_visible: false });
        this.setState({ overview_visible: false });
        this.setState({ announce_visible: false });
        this.setState({ upcomming_visible: false });

        this.setState({ upcomming_visible: true });
    }
    showMessage() {
        this.setState({ message_visible: false });
        this.setState({ overview_visible: false });
        this.setState({ announce_visible: false });
        this.setState({ upcomming_visible: false });

        this.setState({ message_visible: true });
    }
    showOverview() {
        this.setState({ message_visible: false });
        this.setState({ overview_visible: false });
        this.setState({ announce_visible: false });
        this.setState({ upcomming_visible: false });

        this.setState({ overview_visible: true });
    }
    showAnnounce() {
        this.setState({ message_visible: false });
        this.setState({ overview_visible: false });
        this.setState({ announce_visible: false });
        this.setState({ upcomming_visible: false });

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
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showIncomming.bind(this)}>IBIKORWA BITEGANIJWE KUBA</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showAnnounce.bind(this)}>IMENYESHA</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showOverview.bind(this)}>INCAMAKE</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showMessage.bind(this)}>UBUTUMWA</a>
                    </div>
</div>
                    <div>
                        <button style={{ width: "100px" }} className="w3-button w3-white w3-xxlarge" onClick={this.w3_open.bind(this)}>&#9776;</button>

                        <div className="center-block" style={{ margin: "0px 300px 0px 300px" }} >

                            <div className="container" style={{ width: "100%",height: "100%", color: "black" }}>

                                <div className={this.state.announce_visible ? "announce" : "announce_invisible"}>
                                <div >
                                    <h2 className="text-center">IMENYESHA</h2>
                                    <div>
                                        <select >
                                            <option>Health Mentor</option>
                                            <option>Health center</option>
                                            <option>Parents </option>

                                        </select>
                                        <hr></hr>

            <div><h3 >ABABYEYI</h3>
          <div style={{ height: "300px", overflow: "scroll" }}>
                <form >
          <input type="checkbox" value="Kanakuze Veddy" /> Kanakuze Veddy<br />
          <input type="checkbox" value="Hitimana baptist" /> Hitimana baptist<br />
            <input type="checkbox" value="Hirary JOanah" />Hirary JOanah<br /><br />
              <table>
      <tbody>
    <tr>
        <td><textarea className="form-control" style={{ width: "100%", height: "80px" }}></textarea></td>
    <td><button className="btn btn-primary active" style={{width:"60px",height:"60px" }}>Send</button></td>
                      </tr>
      </tbody>
                          </table>
                  </form></div>

                                        </div>
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


                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM1.bind(this)}>mukamana emeline</button>
                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM2.bind(this)}>kanakuze dative </button>
                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM3.bind(this)}>umutoni alida</button>
                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM4.bind(this)}>mukamana </button>
                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM5.bind(this)}>kamaziga vestine</button>
                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM6.bind(this)}>mugisha </button>
                    <button className="btn btn-success" style={{width:"150px"}} onClick={this.showM7.bind(this)}>nayubu</button>


          </div></td>
                  <td>
        <div style={{ width: "640px", height: "400px" }} className={this.state.m1_visible ? "m1" : "m1_invisible"}>
            <div style={{ height: "300px", overflow: "scroll" }}>
              <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>MWARAMUTSE mubyeyi, twabibutsaga ko uyumunsi ari ugutanga inkingo  </div>
        <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>mwaramutse Mujyana, murakoze kutwibutsa </div>
        <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>yego nmwe murakoze, mubizirikane  </div>
        <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>murakoze  </div>

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
              <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>mubyeyi, mwaramutse neza, nakwibutsaga ko umana hari inkingo atarafata , harimo nurwi isru ruzatangwa muri iki cyumeru tuzabamenyesha itariki bidatinze  </div>
        <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>murakoze Mujyana, gusa narimfite ikibazo.. umwana wanjye iyo muhaye ibiryo birimo carotti agira ikibazo cy'umusarani </div>
        <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>ooh, nibyizako wamuhindurira,  ukamugaburira inombe yimbwija zivane nigitoki </div>
        <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>murakoze mujyana </div>

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

        <div style={{ width: "640px", height: "400px" }} className={this.state.m3_visible ? "m3" : "m3_invisible"}>
            <div style={{ height: "300px", overflow: "scroll" }}>
            <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>MWARAMUTSE MUJYANA, umwana wanjye arikugira ikibazo cyumusarani, nifuzaga ubufasha </div>
              <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>yooh, waba waramugabiriye ibiki muri iyiminsi? </div>


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

        <div style={{ width: "640px", height: "400px" }} className={this.state.m4_visible ? "m4" : "m4_invisible"}>
            <div style={{ height: "300px", overflow: "scroll" }}>
              <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>umwana wawe mubyeyi ntago arafata urukingo rwa mugiga, nabibutsaga ko mucyumweru gitaha ziazatangira gutangwa kukigo nderabuzima gihereye kacyiru</div>
        <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>murakoze mujyana.  </div>


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
        <div style={{ width: "640px", height: "400px" }} className={this.state.m5_visible ? "m5" : "m5_invisible"}>
            <div style={{ height: "300px", overflow: "scroll" }}>
            <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>muraho neza mujyanan </div>
              <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>muraho neza.. </div>
  


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

        <div style={{ width: "640px", height: "400px" }} className={this.state.m6_visible ? "m6" : "m6_invisible"}>
            <div style={{ height: "300px", overflow: "scroll" }}>
              <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>mwaramutse neza mubyeyi..  </div>
        <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>yego muraho mujyana  </div>


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

        <div style={{ width: "640px", height: "400px" }} className={this.state.m7_visible ? "m7" : "m7_invisible"}>
            <div style={{ height: "300px", overflow: "scroll" }}>
              <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>waramutse neza mubyeyi, nakwibutsaga ko ejo kukigo nderabuzima hari igikorwa cyo gutanga urukingo rukingira iseru urasabwa kuzinduka, ubaye uzi nundi mubyeyi wamubwira  </div>
        <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>mwaramutse neza mujyana, yego rwose tuzainduka  </div>
        <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>mubizirikane, umunsis mwiza </div>
        <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>murakoze </div>

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

      </td>
</tr>
          </tbody>
      </table>
    </div>
  </div>
    <div className={this.state.upcomming_visible ? "upcomming" : "upcomming_invisible"} style={{height:"300px"}}>
      <h4 >IBIKORWA BITEGANIJWE KUBA</h4>
            <div>
                            <h5><strong>MINISANTE</strong></h5>
                                        <div>Turabamenyesha ko ,uri uku kwezi hategnijwe igikorrw cyo gukingira abana mugiga kuri tariki ya <span>12/02/18</span></div>
                                        <h5><strong>KACYIRU HEALTH CENTER</strong></h5>
                                        <div>kuwa gatanu tariki <span>12/02/18</span> kuri health center kacyiru  hari igikorwa cyogukingira abana iseru</div>
                                    </div>
                                </div>

</div><div className={this.state.overview_visible ? "overview" : "overview_invisible"} >
                                <div><h2>INCAMAKE</h2></div>
                                <div id="exTab2" className="container" style={{ width: "100%" }}>

    <ul className="nav nav-tabs">
                                        <li className="active">
                                            <a href="#1" data-toggle="tab">ABABYEYI</a>
                                        </li>
                                        <li><a href="#2" data-toggle="tab">IMENYESHA</a>
                                        </li>

                                    </ul>

              <div className="tab-content ">
    <div className="tab-pane active" id="1">
        <div>

                  <div className="container" style={{ width: "100%" }}>
                                                    <div>
                <div className="row">
          <div className="col order-last" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>Kanakuze Dativa <span className="badge">0787374821</span> <span className="badge">Kinyinya</span></div>
                    <div style={{ clear: "both" }}></div>
                                </div>
          <div className="row">
          <div className="col order-last" style={{ float: "left", width: "30%", borderLeft: "1px solid black", padding: "5px" }}>
                    <h4>INKINGO ZITARAFATWA:</h4>
      <div style={{ height: "140px", overflow: "scroll" }}>
    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
  <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
        <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
        <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                          </div>
                                                            </div>
    <div className="col" style={{ float: "left", width: "30%", borderLeft: "1px solid black", padding: "5px" }}>
                            <h4>INKINGO ZAFASHWE:</h4>
        <div style={{ height: "140px", overflow: "scroll" }}>
        <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
      <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
            <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
  <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
        <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                </div>
                                                            </div>
  <div className="col order-first" style={{ float: "left", width: "30%", borderLeft: "1px solid black", padding: "5px" }}>
                          <h4>UKO UMWANA ANGANA</h4>
    <div style={{ height: "140px", overflow: "scroll" }}>
      <span className="badge" style={{ fontSize: "20px" }}>4</span>
   
                </div>
      </div>
    <div style={{ clear: "both" }}></div>
                </div></div>
        </div>
    </div>
        <div>

      <div className="container" style={{ width: "100%" }}>
                                                    <div>
        <div className="row">
          <div className="col order-last" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>Kanakuze Dativa <span className="badge">0787374821</span> <span className="badge">Kinyinya</span></div>
          <div style={{ clear: "both" }}></div>
                </div>
          <div className="row">
          <div className="col order-last" style={{ float: "left", width: "30%", borderLeft: "1px solid black", padding: "5px" }}>
                <h4>INKINGO ZAFASHWE:</h4>
            <div style={{ height: "140px", overflow: "scroll" }}>
          <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
          <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
            <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
            <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
      <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
            </div>
  </div>
  <div className="col" style={{ float: "left", width: "30%", borderLeft: "1px solid black", padding: "5px" }}>
        <h4>INKINGO ZITARAFATWA:</h4>
    <div style={{ height: "140px", overflow: "scroll" }}>
    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
      <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
      <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
        <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
      <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                    </div>
        </div>
  <div className="col order-first" style={{ float: "left", width: "30%", borderLeft: "1px solid black", padding: "5px" }}>
    <h4>UKO UMWANA ANGANA</h4>
      <div style={{ height: "140px", overflow: "scroll" }}>
  <span className="badge" style={{ fontSize: "20px" }}>4</span>
    </div>
    </div>
  <div style={{ clear: "both" }}></div>
    </div></div>
      </div>
      </div>
      <div>

    <div className="container" style={{ width: "100%" }}>
      <div>
      <div className="row">
    <div className="col order-last" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>Kanakuze Dativa <span className="badge">0787374821</span> <span className="badge">Kinyinya</span></div>
          <div style={{ clear: "both" }}></div>
      </div>
<div className="row">
  <div className="col order-last" style={{ float: "left", width: "30%", borderLeft: "1px solid black", padding: "5px" }}>
      <h4>INKINGO ZAFASHWE:</h4>
  <div style={{ height: "140px", overflow: "scroll" }}>
  <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
      <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
            <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
        </div>
    </div>
    <div className="col" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
      <h4>INKINGO ZITARAFATWA:</h4>
      <div style={{ height: "140px", overflow: "scroll" }}>
      <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
      <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
          <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
          <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                      </div>
            </div>
  <div className="col order-first" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
      <h4>UKO UMWANA ANGANA</h4>
      <div style={{ height: "140px", overflow: "scroll" }}>
    <span className="badge" style={{ fontSize: "20px" }}>4</span>
      </div>
      </div>
  <div style={{ clear: "both" }}></div>
      </div></div>
    </div>
</div>
    <div>

      <div className="container" style={{ width: "100%" }}>
  <div>
        <div className="row">
    <div className="col order-last" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>Kanakuze Dativa <span className="badge">0787374821</span> <span className="badge">Kinyinya</span></div>
      <div style={{ clear: "both" }}></div>
      </div>
<div className="row">
    <div className="col order-last" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
  <h4>INKINGO ZAFASHWE:</h4>
      <div style={{ height: "140px", overflow: "scroll" }}>
      <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
            <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
          <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
      <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
      <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
          </div>
        </div>
    <div className="col" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
    <h4>INKINGO ZITARAFATWA:</h4>
      <div style={{ height: "140px", overflow: "scroll" }}>
      <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
        <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
            <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                    </div>
          </div>
    <div className="col order-first" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
        <h4>UKO UMWANA ANGANA</h4>
      <div style={{ height: "140px", overflow: "scroll" }}>
              <span className="badge" style={{ fontSize: "20px" }}>4</span>
                                                                </div>
              </div>
  <div style={{ clear: "both" }}></div>
      </div></div>
        </div>
    </div>
                <div>

  <div className="container" style={{ width: "100%" }}>
        <div>
        <div className="row">
        <div className="col order-last" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>Kanakuze Dativa <span className="badge">0787374821</span> <span className="badge">Kinyinya</span></div>
  <div style={{ clear: "both" }}></div>
            </div>
        <div className="row">
    <div className="col order-last" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
      <h4>INKINGO ZAFASHWE:</h4>
          <div style={{ height: "140px", overflow: "scroll" }}>
                  <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
          <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
          <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
      <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                </div>
            </div>
  <div className="col" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
      <h4>INKINGO ZITARAFATWA:</h4>
    <div style={{ height: "140px", overflow: "scroll" }}>
      <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
          <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
        <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
      <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
              <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                    </div>
      </div>
        <div className="col order-first" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
      <h4>UKO UMWANA ANGANA</h4>
      <div style={{ height: "140px", overflow: "scroll" }}>
                  <span className="badge" style={{ fontSize: "20px" }}>4</span>
                                                                </div>
              </div>
          <div style={{ clear: "both" }}></div>
                </div></div>
              </div>
        </div>
  </div>
    <div className="tab-pane" id="2">
            <table>
      <tbody>
    <tr><td>Kanakuze Dativa</td></tr>
    <tr><td><img src="images/noticon.png" style={{ maxWidth: "10px", maxHeight: "10px" }} /></td>
  <td>Mwiriwe neza mujyana, nafuzaga kubabaza kubijyanye numwana wanjye..</td>
                                                        <td>12/02/15</td></tr>
    <tr><td>Health Center</td></tr>
    <tr><td><img src="images/noticon.png" style={{ maxWidth: "10px", maxHeight: "10px" }} /></td>
      <td>Wiriwe Mujyana, twakumenyashaga ko hari igikorwa giteganijwe mumurenge wacu cyo gutera abana inshinge twashakaga ko ubigenza kuba turage bawe
      icyo gikorwa kiba giteganijwe kuwa</td>
        <td> 12/02/15</td></tr>
                </tbody>
      </table>
    </div>

          </div>
          </div>
                            </div>
                        </div>
                    </div>


            </div>
        )
    }
}

export default healthmentors;