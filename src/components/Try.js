import React from "react";

class Try extends React.Component {
  render() {
    return (
      <div class="try" style={{ backgroundImage: "url('./assets/images/a.jpg')" }}>
        <div class="container">
        <div class="row">
      <div class="col-sm-8 col-sm-offset-2 section-container-spacer">
        <div class="text-center">
          <h1 class="h2">02 : Works</h1>
          <p style={{ fontColor: "white"}}>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies, nisl nunc pulvinar ligula, id sodales arcu sapien in nisi. Quisque libero enim, mattis non augue posuere, venenatis dapibus urna.</p>
        </div>
      </div>

      <div id="myCarousel" class="carousel slide projects-carousel">
      <div class="carousel-inner">
      <div class="item active">
                <div class="row">
                    <div class="col-sm-4">

                      <a href="./work.html" title="" class="black-image-project-hover">
                        <img src="./assets/images/work01-hover.jpg" alt="" class="img-responsive"/>
                      </a>
                      <div class="card-container card-container-lg">
                        <h4>001/006</h4>
                        <h3>Fringilla sit amet</h3>
                        <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.</p>
                        <a href="./work.html" title="" class="btn btn-default">Discover</a>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <a href="./work.html" title="" class="black-image-project-hover">
                        <img src="./assets/images/work02-hover.jpg" alt="" class="img-responsive"/>
                      </a>
                      <div class="card-container card-container-lg">
                        <h4>002/006</h4>
                        <h3>Nulla scelerisque</h3>
                        <p>Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.</p>
                        <a href="./work.html" title="" class="btn btn-default">Discover</a>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <a href="./work.html" title="" class="black-image-project-hover">
                        <img src="./assets/images/work03-hover.jpg" alt="" class="img-responsive"/>
                      </a>
                      <div class="card-container card-container-lg">
                        <h4>003/006</h4>
                        <h3>Vivamus vestibulum</h3>
                        <p>Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.</p>
                        <a href="./work.html" title="" class="btn btn-default">Discover</a>
                      </div>
                    </div>
                    
                </div>
                {/* <!--/row--> */}
            </div>
            
            <div class="item">
                <div class="row">
                  <div class="col-sm-4">
                    <a href="./work.html" class="black-image-project-hover">
                      <img src="./assets/images/work02-hover.jpg" alt="Image" class="img-responsive"/>
                    </a>
                    <div class="card-container">
                      <h4>004/006</h4>
                      <h3>Nulla scelerisque</h3>
                      <p>Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.</p>
                      <a href="./work.html" class="btn btn-default">Discover</a>
                    </div>
                  </div>
                   <div class="col-sm-4">
                      <a href="./work.html" class="black-image-project-hover">
                        <img src="./assets/images/work01-hover.jpg" alt="Image" class="img-responsive"/>
                      </a>
                      <div class="card-container">
                        <h4>005/006</h4>
                        <h3>Fringilla sit amet</h3>
                        <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.</p>
                        <a href="./work.html" class="btn btn-default">Discover</a>
                      </div>
                    </div>
                    
                    <div class="col-sm-4">
                      <a href="./work.html" class="black-image-project-hover">
                        <img src="./assets/images/work03-hover.jpg" alt="Image" class="img-responsive"/>
                      </a>
                      <div class="card-container">
                        <h4>006/006</h4>
                        <h3>Vivamus vestibulum</h3>
                        <p>Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.</p>
                        <a href="./work.html" class="btn btn-default">Discover</a>
                      </div>
                    </div>
                    
                </div>
                {/* <!--/row--> */}
            </div>
</div>
<a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>

<a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
</div>

</div>
</div>

      </div>

    );
  }
}

export default Try;
