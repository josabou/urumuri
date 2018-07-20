
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { DropdownButton} from 'react-bootstrap';
import { MenuItem} from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { NavItem} from 'react-bootstrap';

class notfound extends Component {
  render (){
  return (
    <DropdownButton
      bsStyle={"primary"}
      title={"category1"}
      id={`dropdown-basic-Default`}
    >
      <MenuItem eventKey="1"active>cat1</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" >Item</MenuItem>
      <MenuItem eventKey="4"> link</MenuItem>
    </DropdownButton>

  );
}
}




export default notfound;
