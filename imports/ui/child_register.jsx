import React, { Component } from 'react';
import {user} from '../api/user.js'
import {child} from '../api/child.js'
import { withTracker } from 'meteor/react-meteor-data';
import { usersdb } from '../ourdb/Users.js'
class child_register extends Component {
child(e){
  e.preventDefault();

  if (this.refs.childname.value && this.refs.age.value && this.refs.parent_id.value && this.refs.hstd.value && this.refs.hst.value)
  {    global.childname=this.refs.childname.value;
    global.age=this.refs.age.value;
    global.parent_id=this.refs.parent_id.value;
    global.vaccined1=this.refs.vaccined1.value;
    global.vaccined2=this.refs.vaccined2.value; 
    global.vaccined3=this.refs.vaccined3.value;
    global.vaccined4=this.refs.vaccined4.value;
    global.vaccined5=this.refs.vaccined5.value;
    global.vaccine1=this.refs.vaccine1.checked;
    global.vaccine2=this.refs.vaccine2.checked;
    global.vaccine3=this.refs.vaccine3.checked;
    global.vaccine4=this.refs.vaccine4.checked;
    global.vaccine5=this.refs.vaccine5.checked;
    global.hst=this.refs.hstd.value;
    global.hst=this.refs.hst.value;
    var theData={
    "childname":global.childname,
    "createdAt": new Date(),
    "age":global.age,
    "parent_id":global.parent_id,
    "vaccine":[{name:"Baccille Calmette Guérin vaccine", "time": global.vaccined1,"type":global.vaccine1,},{name:"Poliomyélite I ","time": global.vaccined2,"type":global.vaccine2,},{name:"Pentavalent I","time": global.vaccined3,"type":global.vaccine3,}, {name:"Pneumocoque","time": global.vaccined4,"type":global.vaccine4,},{name:"Rougeole","time": global.vaccined5,"type":global.vaccine5,}],
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
          child's name:<input
          type="text" ref="childname"
          placeholder="Enter your childname" className="form-control" />
    </div>
 
    <div className="form-group">
              Ichild's birthday:<input
              type="date" ref="age" className="form-control"
               />
    </div>
   
    <div className="form-group">
    parent's name:<input
    type="text" value={  sessionStorage.getItem('username')} ref="parent_id"
    placeholder="parent name" className="form-control" />
</div>
<div className="form-group">
  Itaken vaccines:
  <div>
<input type="date" ref="vaccined1" className="form-control"  />
<div className="checkbox-inline">
<input type="checkbox" ref="vaccine1" className="form-control" />Baccille Calmette Guérin vaccine
    </div></div>
    <div>
    <input type="date" ref="vaccined2" className="form-control"/>
 <div className="checkbox-inline">
 <input type="checkbox"  ref="vaccine2" className="form-control"/>Poliomyélite I 
  </div></div><div>
  <input type="date" ref="vaccined3" className="form-control"/>
 <div className="checkbox-inline">
 <input type="checkbox"  ref="vaccine3" className="form-control"/>Pentavalent I
</div></div><div>
<input type="date" ref="vaccined4" />
<div className="checkbox-inline">
<input type="checkbox" ref="vaccine4" className="form-control" />Pneumocoque
</div>
</div><div>
<input type="date" ref="vaccined5" className="form-control" />
  <div className="checkbox-inline">
 <input type="checkbox"  ref="vaccine5" className="form-control"/> Rougeole
</div></div>


</div>
    <div className="form-group">
              History:<input
              type="date" ref="hstd"
              placeholder="Enter History" className="form-control"/><input
              type="text" ref="hst"
              placeholder="Enter History" className="form-control" />
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
