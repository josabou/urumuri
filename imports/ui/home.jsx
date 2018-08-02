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
  <h2 className="text-center">frequent asked question</h2>

  <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>BREASTFEEDING</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Exclusive breastfeeding is a cornerstone of child survival and child health because it provides essential, irreplaceable nutrition for a child’s growth and development. Nonetheless, just 38% of infants are exclusively breastfed in the first six months of life globally.
Exclusive breastfeeding – defined as the practice of only giving an infant breast-milk for the first 6 months of life (no other food or water) – has the single largest potential impact on child survival of any preventive intervention. It serves as a child’s first immunization – providing protection from respiratory infections, diarrheal disease, and other potentially life-threatening illnesses. Exclusive breastfeeding also has a protective effect against obesity and certain non-communicable diseases later in life. Yet, much remains to be done to make exclusive breastfeeding during the first six months of life the norm for infant feeding. Suboptimal breastfeeding practices, including non-exclusive breastfeeding, contribute to 11.6% of childhood deaths, equivalent to roughly 800,000 child deaths annually.
In 2012, the World Health Assembly endorsed a global breastfeeding target to increase the rate of exclusive breastfeeding in the first six months of life up to at least 50% by 2025.
</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>IMPORTANCE OF A BALANCED DIET</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>A balanced diet chart is of utmost importance for the body to function properly. It needs the vitamins and minerals to maintain the cells, tissues, and organs.
Following a balanced diet chart also helps in maintaining a healthy weight, reduces body fat, provides your body with energy, promotes good sleep, and eventually gives a feeling of well-being.
Our Truweight Nutritionists always recommend a healthy, balanced diet to maintain a radiant health. The most important of all is to have the right balance of vitamins and minerals, which is scientifically proven.
</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>What foods should my baby

avoid?</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Before your baby turns 1, there are some foods you should avoid giving him or her.

Some foods should be avoided because they could cause sickness or safety concerns,

while other foods should be avoided because they are unhealthy.

Foods to avoid include:

 Cow’s milk: Drinking cow’s milk before age 1 may put your baby at risk for
intestinal bleeding. Instead of cow’s milk use breast milk or infant formula before
age 1.
Alternative milks: Alternative milks like soy milk, almond milk, rice milk, oat milk,
etc. should not substitute breast milk or formula in the first year.
 Honey: Honey (even as an ingredient) may cause a serious health problem
called botulism. Your child can start to try honey and foods that contain honey
only after he or she is 1-year-old.
 Sugary drinks: Sugary drinks like fruit juice (even 100% juice), soda, tea/coffee
or horchata encourage babies to crave sugary foods and can cause cavities,
even before your baby has all of his or her teeth.
Salty foods: Foods that are high in salt, also known as sodium, should be
avoided because babies’ kidneys can’t handle too much salt. Check food labels
to find foods low in sodium.
Choking hazards: Small, hard foods pose high risks of choking. Common foods
that are most risky include nuts, popcorn, hot dogs and whole grapes. As a tip,
you can cut grapes into small pieces and then serve them to your baby. And just
remember, anything can be a choking hazard so be sure to watch your baby
carefully as he or she eats.
By knowing the foods to avoid, you can keep your baby healthy and safe!</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>No-cook first foods</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Not all homemade baby foods require cooking. Try these easy, no-cook first foods for
babies. All you need is a fork for mashing.

Banana
Simply peel a ripe banana and mash it with a fork. Add water, breast milk or infant
formula for a smoother texture.
Avocado
Cut and peel the avocado. Mash it with a fork. Add water, breast milk or infant formula
for a smoother texture.
Canned Beans
Open a can of beans, rinse them under water, and put some in a bowl. Mash them with
a fork. Add water, breast milk or infant formula for a smoother texture.</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Is your baby ready to start

eating foods?</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>How do you know if your baby is ready for foods other than breast milk or infant
formula? Every baby is different – but you can look for these signs to tell that your baby
is developmentally ready to start trying foods:

 Your baby has good head control. Your baby can keep his or her head in a
steady, upright position.
 Your baby can sit up with little or no support. Your baby needs to be able to
sit upright in a highchair to swallow well.
 Your baby is able to grab objects. Your baby uses his or her hands to grab
and hold onto objects, like a spoon.
 Your baby shows interest in what others are eating. Your baby opens his or
her mouth and leans forward when food is offered.
 Your baby is about 6 months old. At around 6 months of age your baby’s gut
has developed to digest foods other than breast milk or formula.
If your baby can do ALL of these things then he or she is ready to try first foods.</p>
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
                <h3>INGREDIENTS IN A BALANCED DIET</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Proteins are the other important type of dietary component that you should have in your diet this should vary with your amount of body weight and age. Normally accepted amount of protein level is 1g per 1kg of body weight. Therefore healthy adult should have about 70 grams of protein in their diet Also some special people like children needs more protein in their diet. Because there growth requires large amount of amino acids. More than that protein helps to maintain your protection against inflections. You can get protein from meat  fish  eggs  milk some types of vegetarian foods like beans</p>
            </AccordionItemBody>
        </AccordionItem>

    </Accordion>
    <div id="services" className="text-center">
        <div className="section-title center">
          <h2>our Services</h2>

        </div>
        <div className="space"></div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="service"> <i className="fa fa-desktop"></i>
              <h3>Web Design</h3>
              <p>you have a company or an organisation and you need a responsive and well designed website ?, we offer you all services related to web designing .</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service"> <i className="fa fa-cogs"></i>
              <h3>Web Development</h3>
              <p>and if you are looking fof web developer, we are here for you .</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service"> <i className="fa fa-tablet"></i>
              <h3>App Design</h3>
              <p>we offer you also android/web app designing services .if you are looking for the user friendlly interface and content covering app, please lets cooperate .</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service"><i className="fa fa-html5"></i>
              <h3>PSD to HTML5</h3>
              <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque.</p>
            </div>
          </div>
        </div>
        <div className="space"></div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="service"><i className="fa fa-wordpress"></i>
              <h3>WordPress</h3>
              <p>we also offer you a web built in WordPress and is easier to edit and control all content in web.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service"><i className="fa fa-bullhorn"></i>
              <h3>Marketing</h3>
              <p>all services on an online marketing also we offer it.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service"><i className="fa fa-rocket"></i>
              <h3>Branding</h3>
              <p>we also provide services of branding. if you have an organisation or if you are looking for your branding yourself coperate with us.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service"><i className="fa fa-leaf"></i>
              <h3>graphic Design</h3>
              <p>we are also good at graphic designing software .</p>
            </div>
          </div>
        </div>
    </div>
    <div id="contact" className="text-center">
      <div className="container">


        <div >


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
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
      <div className="container">
        <p>Copyright &copy; team ueumuri. Designed by <a href="http://www.salvi.alwaysdata.net" rel="nofollow">team urumuri</a></p>
      </div>
    </div>



  </div>

    );}
    return (<div>'loading data'</div>);
}
}


export default home;
