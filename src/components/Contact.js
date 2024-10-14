import React from "react";

class Contact extends React.Component {

  render() {

    return (
      <div class="contactMe">

<div class="section-container">
    <div class="container margintopneeded">
      <div class="row">
        <div class="col-xs-12">
          <div class="section-container-spacer text-center contactmarginup">
            <h1 class="h2">03 : Contact me</h1>
          </div>
          
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
               <form action="https://formsubmit.co/nattygirma28@gmail.com" method="POST" class="reveal-content">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="form-group">
                        <input type="email" name="email" class="form-control" id="email" placeholder="Email"/>
                      </div>
                      <div class="form-group">
                        <input type="text" name="_subject" class="form-control" id="subject" placeholder="Subject"/>
                      </div>
                      <div class="form-group">
                        <textarea type="text" name="message" class="form-control" rows="5" placeholder="Enter your message"/>
                      </div>
                      <input type="hidden" name="_captcha" value="false"></input>
                      <button type="submit" class="btn btn-default btn-lg">Send</button>
                    </div>
                    <div class="col-md-5 address-container">
                      <ul class="list-unstyled">
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                          </span>
                          + 1(785)-550-5526
                        </li>
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa-at" aria-hidden="true"></i>
                          </span>
                          natnaelg@buffalo.edu
                        </li>
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa-at" aria-hidden="true"></i>
                          </span>
                          nattygirma28@gmail.com
                        </li>
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa fa-map-marker" aria-hidden="true"></i>
                          </span>
                          Buffalo, NY
                        </li>
                      </ul>
                      <h3>Follow me on social networks</h3>
                      <a href="https://www.facebook.com/daniel.kebede.73345048" title="" class="fa-icon">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="https://twitter.com/natnaelgirma27" title="" class="fa-icon">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/natnael-girma-6240a8208/" title="" class="fa-icon">
                        <i class="fa fa-linkedin"></i>
                      </a>
                      <a href="https://t.me/grsc4624" title="" class="fa-icon">
                        <i class="fa fa-telegram"></i>
                      </a>
                      <a href="https://github.com/nattygirma27" title="" class="fa-icon">
                        <i class="fa fa-github"></i>
                      </a>
                      <a href="https://www.instagram.com/natnael.girma/" title="" class="fa-icon">
                        <i class="fa fa-instagram"></i>
                      </a>

                    </div>
                  </div>
                </form>
            </div>

          </div>
         
       </div>
      </div>
    </div>
  </div>
  </div>

    );
  }
}
export default Contact;