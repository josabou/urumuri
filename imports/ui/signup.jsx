import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { usersdb } from '../ourdb/Users.js'
class signup extends Component {
  render (){

    return (
    <div className="signup">
    <form className="form">
    <div className="form-group">
          Firstname:<input
          type="text"
          placeholder="Enter your Firstname" required/>
    </div>
    <div className="form-group">
              Lastname:<input
              type="text"
              placeholder="Enter your Lastname" required />
    </div>
    <div className="form-group">
              Tel:<input
              type="text"
              placeholder="Enter your Phone number" required />
    </div>
    <div className="form-group">
    Province:
  <select required>
  <option >--select--</option>
  <option >Saab</option>
  <option >Opel</option>
  <option >Audi</option>
  </select>
  District:
  <select required>
  <option >--select--</option>
  <option >Gasabo</option>
  <option >Opel</option>
  <option >Audi</option>
  </select>
  Sector:
  <select required>
  <option >--select--</option>
  <option >Saab</option>
  <option >Opel</option>
  <option >Audi</option>
  </select>
  </div>
    <div className="form-group">
              Password:<input
              type="Password"
              placeholder="Password" required/>
    </div>
    <div className="form-group">
              ConfirmPassword:<input
              type="Password"
              placeholder="Password" required/>
    </div>
    <div className="form-group">
            <button className="btn btn-info">Submit</button>
            <button className="btn btn-basic">Cancel</button>
    </div>
   </form>

     </div>

    );

}
}

export default signup;
