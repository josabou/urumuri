import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Mongo } from 'meteor/mongo';
import {Childcolb} from '../ourdb/child.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import { NavItem} from 'react-bootstrap';
import Async from 'react-select/lib/Async';
import {ReactiveVar} from 'meteor/reactive-var';
import { Carousel } from 'react-responsive-carousel';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
class home extends TrackerReact(Component) {
  constructor(props){
  super(props);
    this.state = {

      subscribe:{
    childcolb:Meteor.subscribe('Childcolb' )
    }
    }
  }
  componentWillUnmount(){
    this.state.subscribe.childcolb.stop();
  }
  render (){
   var what1 =Childcolb.findOne(
     {
       $and: [
          {cat:'parents1'}, {cat2:'behaviour'}
       ]
    }
 );
 console.log(what1);
 var what2 =Childcolb.findOne(
   {
      $and: [
         {cat:'parents2'}, {cat2:'behaviour'}
      ]
   }
);
 var what3 =Childcolb.findOne(
   {
      $and: [
         {cat:'parents3'}, {cat2:'behaviour'}
      ]
   }
);
var what4 =Childcolb.findOne(
  {
     $and: [
        {cat:'parents1'}, {cat2:'info'}
     ]
  }
);
var what5 =Childcolb.findOne(
 {
    $and: [
       {cat:'parents2'}, {cat2:'info'}
    ]
 }
);
var what6 =Childcolb.findOne(
 {
    $and: [
       {cat:'parents3'}, {cat2:'info'}
    ]
 }
);
var what7 =Childcolb.findOne(
  {
     $and: [
        {cat:'parents1'}, {cat2:'nutrition'}
     ]
  }
);
var what8 =Childcolb.findOne(
 {
    $and: [
       {cat:'parents2'}, {cat2:'nutrition'}
    ]
 }
);
var what9 =Childcolb.findOne(
 {
    $and: [
       {cat:'parents3'}, {cat2:'nutrition'}
    ]
 }
);
if(this.state.subscribe.childcolb.ready() && typeof what1 !== "undefined"){
    return (

    <div>

    <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>


    <div className="carousel-inner">
      <div className="item active slide">
        <img src="././images/img6.jpg" alt="Los Angeles"/>
        <div className="carousel-caption">
             <h1>The First 1,000 Days: When Nutrition Matters Most</h1>
             <p>The world of childhood nutrition and wellness is riddled with conflicting advice. Whether you are considering baby-led weaning or sleep training, there’s several experts on either side of the coin. And yet, amid the chatter, there is growing consensus around one topic: the importance of the first 1,000 days.</p>
             <button>readmore</button>
           </div>
      </div>

      <div className="item slide">
        <img src="././images/img5.jpg" alt="Chicago"/>
        <div className="carousel-caption">
             <h1>The First 1,000 Days: When Nutrition Matters Most</h1>
             <p>The world of childhood nutrition and wellness is riddled with conflicting advice. Whether you are considering baby-led weaning or sleep training, there’s several experts on either side of the coin. And yet, amid the chatter, there is growing consensus around one topic: the importance of the first 1,000 days.</p>
             <button>readmore</button>
           </div>
      </div>

      <div className="item slide">
        <img src="././images/img4.jpg" alt="New York"/>
        <div className="carousel-caption">
             <h1>The First 1,000 Days: When Nutrition Matters Most</h1>
             <p>The world of childhood nutrition and wellness is riddled with conflicting advice. Whether you are considering baby-led weaning or sleep training, there’s several experts on either side of the coin. And yet, amid the chatter, there is growing consensus around one topic: the importance of the first 1,000 days..</p>
             <button>readmore</button>
           </div>
      </div>
    </div>


    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>{what1.title[0]}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>{what1.body[0]}</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>{what2.title[0]}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>{what2.body[0]}</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>{what3.title[0]}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>{what3.body[0]}</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>{what4.title[0]}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>{what4.body[0]}</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>{what5.title[0]}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>{what5.body[0]}</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>{what6.title[0]}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>{what6.body[0]}</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>{what7.title[0]}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>{what7.body[0]}</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Complex title</h3>
                <div>With a bit of description</div>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>{what8.body[0]}</p>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>


  <div className="social">
    <h3>Follow us</h3>
    <ul>
      <li><a href="https://www.facebook.com/people/Salvio_Sage"><i className="fa fa-facebook"></i></a></li>
      <li><a href="https://twitter.com/salvio_sage"><i className="fa fa-twitter"></i></a></li>
      <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
      <li><a href="#"><i className="fa fa-github"></i></a></li>
      <li><a href="https://www.instagram.com/salviosage/"><i className="fa fa-instagram"></i></a></li>
      <li><a href="https://rw.linkedin.com/in/dukuzwenimana-jean-salvi-205a58140"><i className="fa fa-linkedin"></i></a></li>
    </ul>
  </div>,
  <div className="footer">

      <p>Copyright &copy; team urumuli. Designed by <a href="http://www.salvi.alwaysdata.net" rel="nofollow">team-urumuri</a></p>

  </div>
  </div>

    );}
    return (<div>'loading data'</div>);
}
}


export default home;
