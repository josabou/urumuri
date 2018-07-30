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

class contents extends Component {
  state = {
    selectedOption1: 0,
    selectedOption2: 0,
  }
  handleChange1 = (selectedOption) => {
    this.setState({selectedOption1: selectedOption.value });
    console.log(`Option selected:`, selectedOption);
  }

  handleChange2 = (selectedOption) => {
    this.setState({selectedOption2: selectedOption.value });
    console.log(`Option selected:`, selectedOption);
  }

render (){
  var num=this.state.selectedOption1;
  var label1=options[num].label
 var what =Childcolb.findOne(  { cat:label1} );
 console.log(what);
 var selected= this.state;
    return (

<div>
<div>
<Select value={selected.selectedOption1} onChange={this.handleChange1} options={options} />
<Select value={selected.selectedOption2} onChange={this.handleChange2} options={discriptions} /></div>,
<div className="contents">
<input type="text" placeholder="Search.."/>



      <button type="submitonClick={this.insert.bind(this)}">search<i className="fa fa-search"></i></button>

</div>
<div className="blankSeparator"></div>
<div className="container">
  <div className="info">
    <div className="col-xs-3">
      <h3>{what.title}</h3>

      <p>{what.body}</p>

      <a href="http://themeforest.net/item/positivo-responsive-and-fresh-wp-theme/2700306?ref=anariel7" title="" className="buttonhome">&rarr; download pdf</a> </div>
    <div className="two_third lastcolumn">
      <div className="col-xs-4">
        <h3>{what.title}</h3>
        <p>{what.body}</p>
        <a href="http://themeforest.net/item/positivo-responsive-and-fresh-wp-theme/2700306?ref=anariel7" title="" className="buttonhome">&rarr; download pdf</a> </div>
      <div className="col-xs-4 lastcolumn">
        <h3>{what.title}</h3>
        <p>{what.body}</p>
        <a href="http://themeforest.net/item/positivo-responsive-and-fresh-wp-theme/2700306?ref=anariel7" title="" className="buttonhome">&rarr; download pdf</a> </div>
    </div>
  </div>
</div>

<div className="container clients">
  <div className="sepContainer"></div>
  <h3>Our Clients</h3>
  <div className="col-xs-2"> <img src="images/client1.jpg" alt=""/> </div>

  <div className="col-xs-2"> <img src="images/client2.jpg" alt=""/> </div>

  <div className="col-xs-2"> <img src="images/client3.jpg" alt=""/> </div>

  <div className="col-xs-2"> <img src="images/client4.jpg" alt=""/> </div>

  <div className="col-xs-2"> <img src="images/client5.jpg" alt=""/> </div>

  <div className="col-xs-2 lastcolumn"> <img src="images/client6.jpg" alt=""/> </div>

</div>

<div className="container boxthree">
  <div className="sepContainer1"></div>
  <div className="blankSeparator"></div>
  <div className="col-xs-3">
    <section className="boxthreeleft"> <img src="images/home/1.png" alt=""/>
      <h3>{what.title}</h3>
      <p>{what.body}</p>
      <a className ="simple" href="#">+ Learn more</a> </section>
  </div>

  <div className="col-xs-3">
    <section className="boxthreecenter"> <img src="images/home/2.png" alt=""/>
      <h3>{what.title}</h3>
      <p>{what.body}.</p>
      <a className ="simple" href="#">+ Learn more</a> </section>
  </div>

  <div className="col-xs-3 lastcolumn">
    <section className="boxthreeright"> <img src="images/home/3.png" alt=""/>
      <h3>{what.title}</h3>
      <p>{what.body}.</p>
      <a className ="simple" href="#">+ Learn more</a> </section>
  </div>
</div>
<div className="blankSeparator1"></div>

<div className="blankSeparator1"></div>
<div>

<Accordion>
      <AccordionItem>
          <AccordionItemTitle>
              <h3>{what.title}</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
              <p>{what.body}</p>
          </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
          <AccordionItemTitle>
              <h3>Complex title</h3>
              <div>With a bit of description</div>
          </AccordionItemTitle>
          <AccordionItemBody>
              <p>{what.body}</p>
          </AccordionItemBody>
      </AccordionItem>
  </Accordion>

</div>
<div className="footer">
 <div className="container">
   <p>Copyright &copy; team urumuli. Designed by <a href="http://www.salvi.alwaysdata.net" rel="nofollow">jean-salvi.fr</a></p>
 </div>
 </div>
</div>


    );
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
}
}

export default contents;
