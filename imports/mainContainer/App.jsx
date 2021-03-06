import {Meteor} from 'meteor/meteor';
import React from 'react';
import {user} from '../api/user.js'
import {child} from '../api/child.js'
import {vaccines} from '../api/vaccines.js'
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../ui/home.jsx';
import Content from '../ui/content.jsx';
import about from '../ui/about.jsx';
import contact from '../ui/contact.jsx';
import login from '../ui/login.jsx';
import test from '../ui/test.jsx';
import healthmentors from '../ui/healthmentors.jsx';
import parents from '../ui/parents.jsx';
import health_center from '../ui/health_center.jsx';
import signup from '../ui/signup.jsx';
import child_register from '../ui/child_register.jsx';
import NotFound from '../ui/NotFound.jsx';
import AccountsUIWrapper from '../ui/AccountsUIWrapper.js';
import Header from '../ui/components/Header.jsx';


export default class App extends React.Component{

     render(){
     return(
     <BrowserRouter>
     <div>
         <Header/>
     	<Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/content" component={Content}/>
          <Route  path="/about" component={about}/>
          <Route  path="/contact" component={contact}/>
          <Route  path="/login" component={login}/>
          <Route  path="/signup" component={signup}/>
          <Route  path="/test" component={test}/>
          <Route  path="/child_register" component={child_register}/>
          <Route  path="/healthmentors" component={healthmentors}/>
          <Route  path="/parents" component={parents}/>
          <Route  path="/health_center" component={health_center}/>
       	  <Route component={NotFound}/>
          AccountsUIWrapper

          </Switch>
      </div>
     </BrowserRouter>

     );
     }
}
