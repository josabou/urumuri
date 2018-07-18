import React, { Component } from 'react';
function about(){

    return (
    <div>
<div> <div id="about">
  <div className="container">
    <div className="section-title text-center center">
      <h2>About us</h2>
      <hr/>
    </div>
    <div className="row">
      <div className="col-md-4"><img src="img/about.png" className="img-responsive"/></div>
      <div className="col-md-4" >
        <div className="about-text">
          <h4>who we are</h4>
          <p>
I software developer. In addition to my love of computers  programming,I like to Meet New Friends , Grobal Network, Local Network, IT Security.</p>
          <p> I have the technical & communication knowledge. I assist people in managing their help desk or work with them to devise a contingency plan for proper computer maintenance and troubleshooting </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="about-text">
          <h4>what we do</h4>

          <p>I am a very skilled in programming and development of the system especially web/android app . and i'm good at data science .</p>
          <ul>
            <li>computer programming</li>
            <li>web/android apps development </li>
            <li>web designing and development</li>
            <li>database configuring experience with wamp/XAMP/MAMP and db like pl & sql</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div></div>
     </div>
    );

}
export default about;
