import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {

  render() {

    return (
    <div>
        
         <div id="site-border-left"></div>
         <div id="site-border-right"></div>
         <div id="site-border-top"></div>
         <div id="site-border-bottom"></div>
     
        <header>
        <nav class="navbar  navbar-fixed-top navbar-default" id="navbar1">
            <div class="container headerContainer">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

              <div id="navbar2">
              <div class="collapse navbar-collapse" id="navbar-collapse" >
                
              <div >
                <ul class="nav navbar-nav ">
                  <li>
                    <Link to="/">
                       01 : Home
                    </Link>   
                  </li>
                  <li>
                    <Link to="/Works">
                        02 : Works
                    </Link>
                  </li>
                  <li>
                    <Link to="/Skills">
                      03 : Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="/AboutMe">
                       04 : About me
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact">
                      05 : Contact
                    </Link>
                  </li>

                </ul>
                </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

    </div>
  )
}
}

export default Header