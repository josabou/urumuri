import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { Mongo } from 'meteor/mongo';
import {Childcolb} from '../ourdb/child.jsx';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
function home(){

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
                <h3>Simple title</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Body content</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Complex title</h3>
                <div>With a bit of description</div>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Body content</p>
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

    );

}


export default home;
