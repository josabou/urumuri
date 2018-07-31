import React, { Component } from 'react';
import {user} from '../api/user.js'
import {child} from '../api/child.js'
import { withTracker } from 'meteor/react-meteor-data';
import { usersdb } from '../ourdb/Users.js'
class child_register extends Component {
child(e){
  e.preventDefault();

  if (this.refs.childname.value && this.refs.age.value && this.refs.parent_id.value &&
     ((this.refs.vaccined1.value  && this.refs.vaccine1.value) || (this.refs.vaccined2.value  && this.refs.vaccine2.value) || (this.refs.vaccined3.value  && this.refs.vaccine3.value) || (this.refs.vaccined4.value  && this.refs.vaccine4.value)|| (this.refs.vaccined5.value  && this.refs.vaccine5.value)  )&& this.refs.hstd.value && this.refs.hst.value)
  {
    global.childname=this.refs.childname.value;
    global.age=this.refs.age.value;
    global.parent_id=this.refs.parent_id.value;
    global.vaccined1=this.refs.vaccined1.value;
    global.vaccined2=this.refs.vaccined2.value; 
    global.vaccined3=this.refs.vaccined3.value;
    global.vaccined4=this.refs.vaccined4.value;
    global.vaccined5=this.refs.vaccined5.value;
    global.vaccine1=this.refs.vaccine1.value;
    global.vaccine2=this.refs.vaccine2.value;
    global.vaccine3=this.refs.vaccine3.value;
    global.vaccine4=this.refs.vaccine4.value;
    global.vaccine5=this.refs.vaccine5.value;
    global.hst=this.refs.hstd.value;
    global.hst=this.refs.hst.value;
    var theData={
    "childname":global.childname,
    "createdAt": new Date(),
    "age":global.age,
    "parent_id":global.parent_id,
    "vaccine1":[{"time": global.vaccine1,"type":global.vaccined1,}],
    "vaccine2":[{"time": global.vaccine2,"type":global.vaccined2,}],
    "vaccine3":[{"time": global.vaccine3,"type":global.vaccined3,}],
    "vaccine4":[{"time": global.vaccine4,"type":global.vaccined4,}],
    "vaccine5":[{"time": global.vaccine5,"type":global.vaccined5,}],
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
          placeholder="Enter your childname" />
    </div>
 
    <div className="form-group">
              IMINSI UMWANA AMAZE AVUTSE:<input
              type="text" ref="age"
              placeholder="Enter yourchild's age"  />
    </div>
   
    <div className="form-group">
    AMAZINA Y'UMUBYEYI:<input
    type="text" value={  sessionStorage.getItem('username')} ref="parent_id"
    placeholder="parent name"  />
</div>
<div className="form-group">
  INKINGO UMWANA YAFASHE:
  <div>
<input type="date" ref="vaccined1"
placeholder="Enter History" />
<div className="checkbox-inline">
<input type="checkbox" ref="vaccine1" />Baccille Calmette Guérin vaccine
    </div></div><div>
    <input type="date" ref="vaccined2"
placeholder="Enter History" />
 <div className="checkbox-inline">
 <input type="checkbox"  ref="vaccine2"/>Poliomyélite I 
  </div></div><div>
  <input type="date" ref="vaccined3"
placeholder="Enter History" />
 <div className="checkbox-inline">
 <input type="checkbox"  ref="vaccine3"/>Pentavalent I
</div></div><div>
<input type="date" ref="vaccined4"
placeholder="Enter History" />
<div className="checkbox-inline">
<input type="checkbox" ref="vaccine4"/>Pneumocoque
</div>
</div><div>
<input type="date" ref="vaccined5"
placeholder="Enter History" />
  <div className="checkbox-inline">
 <input type="checkbox"  ref="vaccine5"/> Rougeole
</div></div>


</div>
    <div className="form-group">
              History:<input
              type="date" ref="hstd"
              placeholder="Enter History" /><input
              type="text" ref="hst"
              placeholder="Enter History" />
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
