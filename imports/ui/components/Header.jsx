import React from 'react';
import { user } from '../../api/user.js'
import { NavLink } from 'react-router-dom';
import AccountsUIWrapper from '../AccountsUIWrapper.js';
import { withTracker } from 'meteor/react-meteor-data';
class Header extends React.Component {

  user(e) {
    e.preventDefault();
    global.username = this.refs.username.value;
    global.pswd = this.refs.pswd.value;

    sessionStorage.clear();
    var po = user.find({ username: global.username, confirmpswd: global.pswd }, { sort: { text: 1 } }).fetch();
    if (po.length==0) {
      alert("INCORRECT USERNAME/PASSWORD");
    } else {
      for (var key in po) {
        if (po.hasOwnProperty(key)) {
          console.log(key + " ->" + po[key]._id + "--" + po[key].username + "--" + po[key].position);
          if (po[key].position == "health_mentor") {
            sessionStorage.setItem('user_id', po[key]._id);
            sessionStorage.setItem('username', po[key].username);
            sessionStorage.setItem('account_type', po[key].position);
            window.open("/healthmentors", "_self");
            break;
          }
          else if (po[key].position == "parents") {
            sessionStorage.setItem('user_id', po[key]._id);
            sessionStorage.setItem('username', po[key].username);
            sessionStorage.setItem('account_type', po[key].position);
            window.open("/parents", "_self");
            break;
          }
          else if (po[key].position == "health_center") {
            sessionStorage.setItem('user_id', po[key]._id);
            sessionStorage.setItem('username', po[key].username);
            sessionStorage.setItem('account_type', po[key].position);
            window.open("/health_center", "_self");
            break;
          }
        } else {
          alert("INCORRECT USERNAME/PASSWORD");
        }
      }
    }

  }
   logOut(){
    sessionStorage.clear();
    window.open("/","_self");
   }
  render() {
    return (
      <header className=' navbar navbar-custom '>
<a class="navbar-brand" href="#"> <img src="././images/logo.png" style={{ height:"40px", width: "80px", padding: "  2px",
position: "relative"}}/></a>

        <NavLink className="inactive nav-link"  activeClassName="active" exact to="/">Home</NavLink>
        <NavLink className="inactive nav-link" activeClassName="active" to="/about">Who We Are</NavLink>

        <NavLink className="inactive  nav-link" activeClassName="active" to="/content">Content</NavLink>
        <NavLink className="inactive nav-link" activeClassName="active" to="/contact">Contact Us</NavLink>

        <a className="inactive nav-link" id="jojo_sign_in" href="#" data-toggle="modal" data-target="#myModal" style={{ float: "right"}}><span class="glyphicon glyphicon-user"></span>SIGN IN  </a>
        <a className="inactive navs" href="/" id="activitypage" style={{ display: "none"  }}>Activity Page</a>
        <a className="inactive navs" href="#" onClick={this.logOut.bind(this)} id="logout" style={{ display: "none" }}>Log out</a>

        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">


            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Sign In</h4>
              </div>
              <div className="modal-body">
                <form onSubmit={this.user.bind(this)}>
                  Username:<input
                    type="text" className="form-control"

                    placeholder="Enter your Username" className="form-control" ref="username"
                  /><br />
                  Password:<input
                    type="Password"

                    placeholder="Password" ref="pswd" className="form-control "
                  /><br />
                  <button className="btn btn-info" type="submit" >Login</button>
                  <button className="btn btn-link" ><a href={"/signup"}>Create account</a></button>
                </form><br />

              </div>

            </div>

          </div>
        </div>
        <div className="pull-right" style={{ marginRight: "10%", display: "none", marginTop: "-15px" }} id="profileUI"><span id="username_Jojo_general" style={{ padding: "8px", fontSize: "16px", borderRadius: "5px" }}></span></div>
      </header>
    );
  }
}
export default withTracker(() => {
  return {
    System_Users: user.find({}).fetch(),
    System_Users_In: user.find({ username: global.username, confirmpswd: global.pswd }).fetch(),
  };
})(Header);
