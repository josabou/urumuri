import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../ui/home.jsx'; 
import Content from '../ui/content.jsx';
import about from '../ui/about.jsx'; 
import whoweare from '../ui/whoweare.jsx';
import contact from '../ui/contact.jsx'; 
import login from '../ui/login.jsx'; 
import NotFound from '../ui/NotFound.jsx';
import AccountsUIWrapper from '../ui/AccountsUIWrapper.js';
import Header from '../ui/components/Header.jsx'; 
export default class App extends React.Component{
 
     render(){
     return(
     <BrowserRouter>
     <div>
       <Header />
     	<Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/content" component={Content}/>
          <Route  path="/about" component={about}/>
          <Route  path="/whoweare" component={whoweare}/>
          <Route  path="/contact" component={contact}/>
       	  <Route component={NotFound}/>
          </Switch>
      </div>
     </BrowserRouter>
     
     );
     }
}


