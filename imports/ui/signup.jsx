import React, { Component } from 'react';
function signup(){ 
  
    return (
    <div class="signup">
    <form class="form">
    <div class="form-group">
          Firstname:<input
          type="text"
          placeholder="Enter your Firstname" required/>
    </div>
    <div class="form-group">
              Lastname:<input
              type="text"
              placeholder="Enter your Lastname" required />
    </div>
    <div class="form-group">
              Tel:<input
              type="text"
              placeholder="Enter your Phone number" required />
    </div>
    <div class="form-group">
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
    <div class="form-group">
              Password:<input
              type="Password"
              placeholder="Password" required/>
    </div>
    <div class="form-group">
              ConfirmPassword:<input
              type="Password"
              placeholder="Password" required/>
    </div>
    <div class="form-group">
            <button className="btn btn-info">Submit</button>
            <button className="btn btn-basic">Cancel</button>
    </div>
   </form>
         
     </div>

    );
  
}
export default signup;