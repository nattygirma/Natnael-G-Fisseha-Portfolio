import React from "react";
import ReactTypingEffect from "react-typing-effect";

class Home extends React.Component {
//   componentDidMount() {
//       document.addEventListener('DOMContentLoaded', function(event) {
//         console.log('DOMContentLoaded in componentDidMount:');
//         // window.type();
//         // window.movingBackgroundImage();
//       });
//    }
  render() {
    return (
       <div>

        <div
          class="hero-full-container background-image-container white-text-container home-outer"
        
        >
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="hero-full-wrapper">
                  <div class="text-content">
                    <div class="homeTypeWriter">
                      
                      Hello, I'm Natnael G Fisseha
                      <br />
                      <ReactTypingEffect
                        text={[
                          
                          "Software Developer",
                          "Machine Learning Developer",
                          "AI enthusiast",
                          // "Working as a Freelance",
                          "Feel free to connect !!",
                        ]}
                        speed={100}
                        eraseSpeed={20}
                        typingDelay={500}
                        eraseDelay={600}
                      />
                      </div>
                    
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

export default Home;
