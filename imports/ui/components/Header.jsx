import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountsUIWrapper from '../AccountsUIWrapper.js';
export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <b>Logo</b> &nbsp;
        <NavLink className="inactive" activeClassName="active" exact to="/">Home</NavLink>
        <NavLink className="inactive" activeClassName="active" to="/about">Who We Are</NavLink>
          <NavLink className="inactive" activeClassName="active" to="/whoweare">Who We </NavLink>
        <NavLink className="inactive" activeClassName="active" to="/content">Content</NavLink>
        <NavLink className="inactive" activeClassName="active" to="/contact">Contact Us</NavLink>
        <NavLink className="inactive" activeClassName="active" to="/test">test</NavLink>
        <NavLink className="inactive" to="/bad-url">Not Found Page</NavLink>
        <a  className="inactive" href="#" data-toggle="modal" data-target="#myModal">SIGN IN  </a>

<div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">


    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Sign In</h4>
      </div>
      <div className="modal-body">
        <form>
            Username:<input
              type="text"

              placeholder="Enter your Username" className="input_text"
            /><br/>
             Password:<input
              type="Password"

              placeholder="Password" className="input_text"
            /><br/>
            <button className="btn btn-info" data-dismiss="modal">Login</button>
            <button className="btn btn-link" ><a href={"/signup"}>Create account</a></button>
          </form><br/>

      </div>

    </div>

  </div>
</div>
      </header>
    );
  }
}
