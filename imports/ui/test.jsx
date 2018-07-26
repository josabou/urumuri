
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

import Async from 'react-select/lib/Async';
import {ReactiveVar} from 'meteor/reactive-var';
import Select from 'react-select';

import { Form, Text } from 'react-form';
import {UnmountClosed} from 'react-collapse';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
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

const validate = value => ({
  error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
  warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
  success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
})
class  notFound extends React.Component {
  state = {
    selectedOption1: null,
    selectedOption2: null,
  }
  handleChange1 = (selectedOption) => {
    this.setState({selectedOption1: selectedOption });
    console.log(`Option selected:`, selectedOption);
    let i =selectedOption.label;
  }

  handleChange2 = (selectedOption) => {
    this.setState({selectedOption2: selectedOption });
    console.log(`Option selected:`, selectedOption);
    let i =selectedOption.label;
  }


  render() {
const selected= this.state;
    return (

      <Form>
      <div>
      <Select value={selected.selectedOption1} onChange={this.handleChange1} options={options} />
      <Select value={selected.selectedOption2} onChange={this.handleChange2} options={discriptions} /></div>,
    {

      <form onSubmit={this.submitForm} id="form1" className="mb-4">
        <label htmlFor="hello">Hello World</label>
        <Text field="hello" id="hello" value="enter a name or"validate={validate} />
        <label htmlFor="hello">Hello World</label>
        <Text field="hello" id="hello" value="enter a name or"validate={validate} />
        <label htmlFor="hello">Hello World</label>
        <textarea field="hello" id="hello" value="enter a name or"validate={validate} />
        <label htmlFor="hello">Hello World</label>
        <Text field="hello" id="hello" value="enter a name or"validate={validate} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    }
  </Form>
  )}
}
export default notFound;
