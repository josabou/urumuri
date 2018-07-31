import React, { Component } from 'react';
import {user} from '../api/user.js'
import { withTracker } from 'meteor/react-meteor-data';
import { usersdb } from '../ourdb/Users.js'
class signup extends Component {
user(e){
  e.preventDefault();

  if (this.refs.fname.value && this.refs.lname.value && this.refs.tel.value && this.refs.province.value&& this.refs.district.value && this.refs.sector.value && this.refs.position.value &&  this.refs.username.value && this.refs.confirmpswd.value && this.refs.pswd.value)
  {
    global.fname=this.refs.fname.value;
    global.lname=this.refs.lname.value;
    global.tel=this.refs.tel.value;
    global.province=this.refs.province.value;
    global.district=this.refs.district.value;
    global.sector=this.refs.sector.value;
    global.position=this.refs.position.value;
    global.username=this.refs.username.value;
    global.confirmpswd=this.refs.confirmpswd.value;
    global.pswd=this.refs.pswd.value;
    var theData={
    "fname":global.fname,
    "createdAt": new Date(),
    "lname":global.lname,
    "tel":global.tel,
    "province":global.province,
    "district":global.district,
    "sector":global.sector,
    "position":global.position,
    "username": global.username,
    "confirmpswd":global.confirmpswd,
    };

    user.insert(theData, function(error,result){
      if(error){
        alert("User Not Found");
      }
      if (result){
        if (global.position=="health_mentor") {
       //  alert("health mentor");
   sessionStorage.setItem('username',global.username);
   sessionStorage.setItem('account_type',global.position);
   window.open("/healthmentors","_self");
      }
      if (global.position=="parents"){
        sessionStorage.setItem('username',global.username);
        sessionStorage.setItem('account_type',global.position);
        window.open("/parents","_self");
      }
      if (global.position=="health_center"){
        sessionStorage.setItem('username',global.username);
        sessionStorage.setItem('account_type',global.position);
        window.open("/health_center","_self");
      }
    }});



  }
  else
  {
  alert("failed");
  }
}
  render (){
    return (
    <div className="signup">
    <div style={{height:"600px",overflow:"scroll"}}>
    <form className="form" onSubmit={this.user.bind(this)} >
    <div className="form-group">
          Firstname:<input
          type="text" ref="fname"
          placeholder="Enter your Firstname" required/>
    </div>
    <div className="form-group">
              Lastname:<input
              type="text" ref="lname"
              placeholder="Enter your Lastname" required />
    </div>
    <div className="form-group">
              Tel:<input
              type="text" ref="tel"
              placeholder="Enter your Phone number" required />
    </div>
    <div className="form-group">
    Province:
  <select ref="province" >

  <option value="northern" >northern</option>
  <option value="southern">southern </option>
  <option value="kigali city" >kigali city</option>
  <option value="eastern" >eastern </option>
  <option value="western">western</option>
  </select>
  District:
  <select ref="district">

  <option value="gasabo" >Gasabo</option>
  <option value="kicukiro">kicukiro</option>
  <option value="nyarugenge">nyarugenge</option>
  </select>
  Sector:
  <select ref="sector">

  <option value="kimihurura" >kimihurura</option>
  <option value="nyenyeri" >Bumbogo</option>
  <option  value="kamukina">Gatsata</option>
  <option value="kimihurura" >Jali</option>
  <option value="nyenyeri" >Gikomero</option>
  <option  value="kamukina">Gisozi</option>
  <option value="kimihurura" >Jabana</option>
  <option value="nyenyeri" >Kinyinya</option>
  <option  value="kamukina">Ndera</option>
  <option value="kimihurura" >Nduba</option>
  <option value="nyenyeri" >Rusororo</option>
  <option  value="kamukina">Rutunga</option>
  <option value="kimihurura" >Kacyiru</option>
  <option value="nyenyeri" >nyenyeri</option>
  <option  value="kamukina">kamukina</option>
  <option value="kimihurura" >Kimironko</option>
  <option value="nyenyeri" >Remera</option>
  </select>
  </div>
  <div className="form-group">
    Position:
  <select ref="position" >

  <option value="health_mentor" >Health mentor</option>
  <option value="parents" >Parents </option>
  <option value="health_center" >Health center</option>
  </select>
  </div>
  <div className="form-group">
  Username:<input
  type="text" ref="username"
  placeholder="UserName" required/>
</div>
    <div className="form-group">
              Password:<input
              type="Password" ref="pswd"
              placeholder="Password" required/>
    </div>
    <div className="form-group">
              ConfirmPassword:<input
              type="Password" ref="confirmpswd"
              placeholder="Password" required/>
    </div>
    <div className="form-group">
            <button className="btn btn-info" type="submit">Submit</button>
            <button className="btn btn-basic">Cancel</button>
    </div>
   </form>
   <div className="footer">

       <p>Copyright &copy; team urumuli. Designed by <a href="http://www.salvi.alwaysdata.net" rel="nofollow">team-urumuri</a></p>

   </div>

     </div>
     </div>


    );

}
}

export default signup;
