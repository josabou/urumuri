import React, { Component } from 'react';
import {user} from '../api/user.js'
import {child} from '../api/child.js'
import { withTracker } from 'meteor/react-meteor-data';
import { usersdb } from '../ourdb/Users.js'
class child_register extends Component {
child(e){
  e.preventDefault();

  if (this.refs.childname.value && this.refs.age.value && this.refs.parent_id.value && this.refs.vaccine.value  && this.refs.vaccine.value && this.refs.hstd.value && this.refs.hst.value)
  {
    global.childname=this.refs.childname.value;
    global.age=this.refs.age.value;
    global.parent_id=this.refs.parent_id.value;
    global.vaccined=this.refs.vaccined.value;
    global.vaccine=this.refs.vaccine.value;
    global.hst=this.refs.hstd.value;
    global.hst=this.refs.hst.value;
    var theData={
    "childname":global.childname,
    "createdAt": new Date(),
    "age":global.age,
    "parent_id":global.parent_id,
    "vaccine":[{"time": global.vaccine,"type":global.vaccined,}],
    "hst":[{"time":global.hst, "text":global.hstd}],
    };

    child.insert(theData, function(error,result){
      if(error){
        alert("User Not Found");
      }
      if (result){
        window.open("/parents","_self")
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
    <form className="form" onSubmit={this.child.bind(this)} >
    <div className="form-group">
          IZINA RY'UMWANA:<input
          type="text" ref="childname"
          placeholder="Enter your childname" required/>
    </div>
 
    <div className="form-group">
              IMINSI UMWANA AMAZE AVUTSE:<input
              type="text" ref="age"
              placeholder="Enter yourchild's age" required />
    </div>
   
    <div className="form-group">
    AMAZINA Y'UMUBYEYI:<input
    type="text" value={  sessionStorage.getItem('username')} ref="parent_id"
    placeholder="oarent name" required />
</div>
<div className="form-group">
  INKINGO UMWANA YAFASHE:

<input type="date" ref="vaccined"
              placeholder="Enter History" required/>
              <select ref="vaccine" >

<option value="Baccille" >Baccille Calmette Guérin vaccine</option>
<option value="Poliomyélite">Poliomyélite I </option>
<option value="Pentavalent" >Pentavalent I</option>
<option value="Pneumocoque" >Pneumocoque </option>
<option value="Rougeole">Rougeole</option>
</select>
</div>
    <div className="form-group">
              History:<input
              type="date" ref="hstd"
              placeholder="Enter History" required/><input
              type="text" ref="hst"
              placeholder="Enter History" required/>
    </div>
 
    <div className="form-group">
            <button className="btn btn-info" type="submit">Register</button>
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

export default child_register;
