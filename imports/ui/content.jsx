import React, { Component } from 'react';
function content(){

    return (
<div>
<div className="gotit">
<input type="text" placeholder="Search.."/>
<div className="dropdown">
    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">choose category
    <span className="caret"></span></button>
    <ul className="dropdown-menu">
      <li><a href="#">umubyeyi </a></li>
      <li><a href="#">aratwite</a></li>
      <li><a href="#">umwana</a></li>
    </ul>
  </div>
  <div className="dropdown">
      <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">choose category
      <span className="caret"></span></button>
      <ul className="dropdown-menu">
        <li><a href="#">umubyeyi </a></li>
        <li><a href="#">aratwite</a></li>
        <li><a href="#">umwana</a></li>
      </ul>
    </div>
    <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">choose category
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li><a href="#">umubyeyi </a></li>
          <li><a href="#">aratwite</a></li>
          <li><a href="#">umwana</a></li>
        </ul>
      </div>
      <button type="submit"><i class="fa fa-search"></i></button>
</div>
</div>
    );

}
export default content;
