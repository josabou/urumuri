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
      <div>
      <div class="row " >
    <form className="form" onSubmit={this.user.bind(this)} >
    <div className="signup"  style={{width:"700px",height:"70%",overflow:"scroll"}}>
    <header className="registration_form"> Registration-Form</header><hr></hr>
    <div className="col-sm-12">
    <div className="row">
    <div className="col-xs-4">
              <label className="firstname">First Name :</label> </div>
              <div className="col-xs-8">
              <input
          type="text" ref="fname"  className="form-control"
          placeholder="Enter your Firstname" required/>
    </div>
    </div>
		 </div>
     <div className="col-sm-12">
    <div className="row">
    <div className="col-xs-4">
    <label className="firstname">Last Name :</label> </div>
    <div className="col-xs-8">
<input className="form-control"
               placeholder="Enter your Lastname" type="text" ref="lname"/>
       </div>
       </div>
        </div>
     <div className="col-sm-12">
    <div className="row">
    <div className="col-xs-4">

    <label >Tel :</label> </div>
<div className="col-xs-8">
<input
              type="text" ref="tel" className="form-control"/>
              </div>
    </div>
		 </div>
     <div className="col-xs-12">
     <div className="row">
     <div className="col-xs-3 ">
     <label >Province:</label>
  <select ref="province" className="form-control" >

  <option value="northern" >northern</option>
  <option value="southern">southern </option>
  <option value="kigali city" >kigali city</option>
  <option value="eastern" >eastern </option>
  <option value="western">western</option>
  </select> </div>
  <div className="col-xs-3">
  <label cl>District:</label>

  <select ref="district" className="form-control">

  <option value="gasabo" >Gasabo</option>
  <option value="kicukiro">kicukiro</option>
  <option value="nyarugenge">nyarugenge</option>
  </select></div></div> <div class="col-xs-3 ">
  <label className="loation">Sector:</label>

  <select ref="sector" className="form-control">

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
  </select></div></div>
  <div className="col-sm-12">
     <div className="row">
     <div className="col-xs-4 ">
  <label className="loation">Position:</label></div>
  <div className="col-xs-4 ">
 <select ref="position" className="form-control">

  <option value="health_mentor" >Health mentor</option>
  <option value="parents" >Parents </option>
  <option value="health_center" >Health center</option>
  </select></div>
  </div></div>

  <div className="col-sm-12">
  <div className="row">
  <div className="col-xs-4">
          <label class="pass">Password :</label></div>
<div className="col-xs-8"><input
              type="Password" ref="pswd" className="form-control"/>
     		 </div>
          </div>
		  </div>
      <div className="col-sm-12">
<div className="row">
<div className="col-xs-4">
        <label class="pass">Confirm Password :</label></div>
<div class="col-xs-8"><input
              type="Password" ref="confirmpswd" className="form-control"
              placeholder="Password" required />
		 </div>
          </div>
		  </div>

            <button className="btn btn-info" type="submit">Submit</button>

            <button className="btn btn-basic">Cancel</button>
    </div>
   </form>


   </div>




</div>
    );

}
}

export default signup;
