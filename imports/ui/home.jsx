import React, { Component } from 'react';
function home(){ 
  
    return (
    <div><ul className="nav navbar-nav">
    <li><a href={'/'}>Home</a></li>
    <li><a href={'/about'}>About</a></li>
    <li><a href={'/content'}>Contents</a></li>
    <li><a href={'/whoweare'}>Who We Are</a></li>
    <li><a href={'/contact'}>Contact Us</a></li>
    <li><a href={'/login'}>Sign in</a></li>
     </ul></div>
    );
  
}
export default home;