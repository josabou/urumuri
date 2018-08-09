import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Mongo } from 'meteor/mongo';
import {Childcolb} from '../ourdb/child.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import { NavItem} from 'react-bootstrap';
import Async from 'react-select/lib/Async';
import {ReactiveVar} from 'meteor/reactive-var';
import Select from 'react-select';
import {UnmountClosed} from 'react-collapse';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const options = [
  { value: '0', label: 'parents1' },
  { value: '1', label: 'parents2' },
  { value: '2', label: 'parents3' }
];
const discriptions = [
  { value: '0', label: 'behaviour' },
  { value: '1', label: 'info' },
  { value: '2', label: 'nutrition' }
];

class contents extends TrackerReact(Component) {
  constructor(props){
super(props);
    this.state = {
      selectedOption1: 0,
      selectedOption2: 0,
      subscribe:{
    childcolb:Meteor.subscribe('Childcolb' )
    }
    }
  }
  componentWillUnmount(){
    this.state.subscribe.childcolb.stop();
  }

  handleChange1 = (selectedOption) => {
    this.setState({selectedOption1: selectedOption.value });
    console.log(`Option1 selected:`, selectedOption);
  }

  handleChange2 = (selectedOption) => {
    this.setState({selectedOption2: selectedOption.value });
    console.log(`Option2 selected:`, selectedOption);
  }

render (){
  var num=this.state.selectedOption1;
  var num2=this.state.selectedOption2;
  var label1=options[num].label
  var label2=discriptions[num2].label
  console.log(label1);
  console.log(label2);
 var what =Childcolb.findOne(
   {
      $and: [
         {cat:label1}, {cat2:label2}
      ]
   }
);

 console.log(what);
 var selected= this.state;
 if(this.state.subscribe.childcolb.ready() && typeof what !== "undefined"){
    return (

<div id="content">
<div className="contents">


<div>
<Select className="sele" value={selected.selectedOption1} onChange={this.handleChange1} options={options} />
<Select  className="sele" value={selected.selectedOption2} onChange={this.handleChange2} options={discriptions} /></div>
</div>

<div className="blankSeparator"></div>

  <div className="info text-center">
    <div className="col-xs-12 text-center">
      <h3>{what.title[0]}</h3>

      <p >{what.body[0]}</p>

      <a href="" title="" className="buttonhome">&rarr; download pdf</a> </div>

      <div className="col-xs-12">
        <h3>{what.title[1]}</h3>
        <p>{what.body[1]}</p>
        <a href="" title="" className="buttonhome">&rarr; download pdf</a> </div>
      <div className="col-xs-12 ">
        <h3>{what.title[2]}</h3>
        <p>{what.body[2]}</p>
        <a href="" title="" className="buttonhome">&rarr; download pdf</a>
    </div>

  </div>
  <div className="info text-center">
    <div className="col-xs-12">
      <h3>{what.title[0]}</h3>

      <p>{what.body[0]}</p>

      <a href="" title="" className="buttonhome">&rarr; download pdf</a> </div>

      <div className="col-xs-12">
        <h3>{what.title[1]}</h3>
        <p>{what.body[1]}</p>
        <a href="" title="" className="buttonhome">&rarr; download pdf</a> </div>
      <div className="col-xs-12 ">
        <h3>{what.title[2]}</h3>
        <p>{what.body[2]}</p>
        <a href="" title="" className="buttonhome">&rarr; download pdf</a>
    </div>

  </div>
  <div className="info text-center">
    <div className="col-xs-12">
      <h3>{what.title[0]}</h3>

      <p>{what.body[0]}</p>

      <a href="" title="" className="buttonhome">&rarr; download pdf</a> </div>

      <div className="col-xs-12">
        <h3>{what.title[1]}</h3>
        <p>{what.body[1]}</p>
        <a href="" title="" className="buttonhome">&rarr; download pdf</a> </div>
      <div className="col-xs-12 ">
        <h3>{what.title[2]}</h3>
        <p>{what.body[2]}</p>
        <a href="" title="" className="buttonhome">&rarr; download pdf</a>
    </div>

  </div>

<div className="blankSeparator1"></div>
<div>


</div>

</div>


    );}
    return (<div>'loading data'</div>);



}
}

export default contents;
