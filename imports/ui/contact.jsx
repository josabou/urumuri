import React, { Component } from 'react';
class contact extends Component {
  render (){

    return (

<div>
<div id="contact" className="text-center">
  <div className="container">
    <div className="section-title center">
      <h2>Contact us</h2>
      <hr/>
      <p>are you interested in our services? please contact us and we are there for you.</p>
    </div>
    <div className="col-md-8 col-md-offset-2">

      <div className="col-md-4">
        <div className="contact-item"> <i className="fa fa-envelope-o fa-2x"></i>
          <p>urumuri@gmail.com</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-item"> <i className="glyphicon glyphicon-phone fa-2x"></i>
          <p> +250783277997</p>
          <p>  +250722980546</p>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
    <div className="col-md-8 col-md-offset-2">
      <h3>Leave us a message</h3>
      <form name="sentMessage" id="contactForm" >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" id="name" className="form-control" placeholder="Name" required="required"/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
          <p className="help-block text-danger"></p>
        </div>
        <div id="success"></div>
        <button type="submit" className="btn btn-default">Send Message</button>
      </form>


      <div className="col-sm-6 col-sm-offset-1">
        <div className="single-widget">
          <h2>stay in touch</h2>
          <form action="#" className="searchform">
            <input type="text" placeholder="Your email address" />
            <button type="submit" className="btn btn-default"><i className="glyphicon glyphicon-circle-arrow-right"></i></button>
            <p>Get the most recent updates from <br />our site and be updated your self...</p>
          </form>
        </div>
        </div>

    </div>
  </div>

</div>
<div className="footer">
<a href="https://www.facebook.com/people/Salvio_Sage"><i className="glyphicon glyphicon-phone fa-2x"></i></a>
  <a href="https://twitter.com/salvio_sage"><i className="glyphicon glyphicon-phone fa-2x"></i></a>
<a href="#"><i className="glyphicon glyphicon-phone fa-2x"></i></a>
  <a href="#"><i className="glyphicon glyphicon-phone fa-2x"></i></a>
  <a href="https://www.instagram.com/salviosage/"><i className="fa fa-instagram"></i></a>
  <a href="https://rw.linkedin.com/in/dukuzwenimana-jean-salvi-205a58140"><i className="glyphicon glyphicon-phone fa-2x"></i></a>


    <p>Copyright &copy; team urumuli. Designed by <a href="http://www.salvi.alwaysdata.net" rel="nofollow">team-urumuri</a></p>
</div>
</div>

    );

}
}
export default contact;
