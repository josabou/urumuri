
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { DropdownButton} from 'react-bootstrap';
import { MenuItem} from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { NavItem} from 'react-bootstrap';
import Async from 'react-select/lib/Async';

import Select from 'react-select';

const options = [
  { value: '1', label: 'parents' },
  { value: '2', label: 'children' },
  { value: '3', label: 'overview' }
];
const discriptions = [
  { value: '1', label: 'behaviour' },
  { value: '2', label: 'info' },
  { value: '3', label: 'nutrition' }
];


class  notFound extends React.Component {
  state = {
    selectedOption1: null,
    selectedOption2: null,
  }
  handleChange1 = (selectedOption) => {
    this.setState({selectedOption1: selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  handleChange2 = (selectedOption) => {
    this.setState({selectedOption2: selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const selected= this.state;

    return (
      <div>
      <Select value={selected.selectedOption1} onChange={this.handleChange1} options={options} />
      <Select value={selected.selectedOption2} onChange={this.handleChange2} options={discriptions} /></div>
    );
  }
}
export default notFound;
