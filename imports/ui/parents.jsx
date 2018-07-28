
import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';


class parents extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            overview_visible: true,
            message_visible: false,
            upcomming_visible: false,
            announce_visible: false
        }

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
                    <div className="w3-sidebar w3-bar-block w3-dark-grey w3-animate-left" style={{ display: "none" }} id="mySidebar">
                        <button className="w3-bar-item w3-button w3-large"
                            onClick={this.w3_close.bind(this)}>Close &times;</button>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showIncomming.bind(this)}>Incomming Event</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showAnnounce.bind(this)}>Announce</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showOverview.bind(this)}>Overview</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showMessage.bind(this)}>Message</a>
                    </div>

                    <div>
                        <button style={{ width: "100px" }} className="w3-button w3-white w3-xxlarge" onClick={this.w3_open.bind(this)}>&#9776;</button>

                        <div className="center-block" style={{ margin: "0px 300px 0px 300px" }} >

                            <div className="container" style={{ width: "100%", color: "black" }}>

                                <div className={this.state.announce_visible ? "announce" : "announce_invisible"}>
                                    <h2>Announce</h2>
                                    <div>
                                        <select>
                                            <option>Health Mentor</option>
                                            <option>Health center</option>
                                            <option>Parents </option>

                                        </select>
                                        <hr></hr>
                                        <div><h3>Parents</h3>
                                            <div style={{ height: "300px", overflow: "scroll" }}>
                                                <form >
                                                    <input type="checkbox" value="Kanakuze Veddy" /> Kanakuze Veddy<br />
                                                    <input type="checkbox" value="Hitimana baptist" /> Hitimana baptist<br />
                                                    <input type="checkbox" value="Hirary JOanah" />Hirary JOanah<br /><br />
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
                                    <h2>Message</h2>
                                    <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><div style={{ width: "200px", height: "400px", overflow: "scroll" }}>
                                                        <div style={{ borderBottom: "1px solid black" }}>
                                                            <h6>Kanakuze Dativa</h6>
                                                        </div>
                                                        <div style={{ borderBottom: "1px solid black" }}>
                                                            <h6>Kanakuze Dativa</h6>
                                                        </div>
                                                        <div style={{ borderBottom: "1px solid black" }}>
                                                            <h6>Kanakuze Dativa</h6>
                                                        </div>
                                                        <div style={{ borderBottom: "1px solid black" }}>
                                                            <h6>Kanakuze Dativa</h6>
                                                        </div>
                                                    </div></td>
                                                    <td>
                                                        <div style={{ width: "400px", height: "400px" }}>
                                                            <div style={{ height: "300px", overflow: "scroll" }}>
                                                                <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>sfs9fs fsfo9hsfbsf sfohsb fsnfb sfsfbs sfn9  </div>
                                                                <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>sfs9fs fsfo9hsfbsf sfohsb fsnfb sfsfbs sfn9  </div>
                                                                <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>sfs9fs fsfo9hsfbsf sfohsb fsnfb sfsfbs sfn9  </div>
                                                                <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>sfs9fs fsfo9hsfbsf sfohsb fsnfb sfsfbs sfn9  </div>

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
                                <div className={this.state.upcomming_visible ? "upcomming" : "upcomming_invisible"}>
                                    <h4>upcomming event</h4>
                                    <div>
                                        <h5>minisante</h5>
                                        <div>dsvdshjhdsjbjhjbbhjjjj on <span>12/02/18</span></div>
                                        <h5>Health center</h5>
                                        <div>tomorrow on <span>12/02/18</span> there is action of giving vaccines t parents please inform your pe</div>
                                    </div>
                                </div>

                            </div><div className={this.state.overview_visible ? "overview" : "overview_invisible"} >
                                <div><h2>Overview</h2></div>
                                <div id="exTab2" className="container" style={{ width: "100%" }}>

                                    <ul className="nav nav-tabs">
                                        <li className="active">
                                            <a href="#1" data-toggle="tab">Parents</a>
                                        </li>
                                        <li><a href="#2" data-toggle="tab">Notifications</a>
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
                                                            <div className="col order-last" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Taken Vaccines:</h4>
                                                                <div style={{ height: "140px", overflow: "scroll" }}>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Untaken Vaccines:</h4>
                                                                <div style={{ height: "140px", overflow: "scroll" }}>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col order-first" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Child's age</h4>
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
                                                                <h4>Taken Vaccines:</h4>
                                                                <div style={{ height: "140px", overflow: "scroll" }}>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Untaken Vaccines:</h4>
                                                                <div style={{ height: "140px", overflow: "scroll" }}>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col order-first" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Child's age</h4>
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
                                                                <h4>Taken Vaccines:</h4>
                                                                <div style={{ height: "140px", overflow: "scroll" }}>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Untaken Vaccines:</h4>
                                                                <div style={{ height: "140px", overflow: "scroll" }}>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col order-first" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Child's age</h4>
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
                                                                <h4>Taken Vaccines:</h4>
                                                                <div style={{ height: "140px", overflow: "scroll" }}>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Untaken Vaccines:</h4>
                                                                <div style={{ height: "140px", overflow: "scroll" }}>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col order-first" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Child's age</h4>
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
                                                                <h4>Taken Vaccines:</h4>
                                                                <div style={{ height: "140px", overflow: "scroll" }}>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-success inactive">Taken 13/12/15</span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Untaken Vaccines:</h4>
                                                                <div style={{ height: "140px", overflow: "scroll" }}>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                    <div className="badge">Mugiga <span className="btn-danger inactive">limited age 4</span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col order-first" style={{ float: "left", width: "200px", borderLeft: "1px solid black", padding: "5px" }}>
                                                                <h4>Child's age</h4>
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
                                                        <td>Helloffndjkvnfjjfnfknkfj</td>
                                                        <td>12/02/15</td></tr>
                                                    <tr><td>Health Center</td></tr>
                                                    <tr><td><img src="images/noticon.png" style={{ maxWidth: "10px", maxHeight: "10px" }} /></td>
                                                        <td>hekngfdgdhghgdgdffddffdhgh</td>
                                                        <td>12/02/15</td></tr>
                                                </tbody>
                                            </table>
                                        </div>

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
export default parents;
