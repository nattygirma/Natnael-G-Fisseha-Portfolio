import React from "react";
import amazonImg from "../assets/images/amazon.png"
import etherswapImg from "../assets/images/etherswap.png"
import domainImg from "../assets/images/domain.png"
import nftImg from "../assets/images/nft.png"
import uniswapImg from "../assets/images/uniswap.png"
import todoImg from "../assets/images/todo.png"
import resumezImg from "../assets/images/resumez.png"
import veldaImg from "../assets/images/velda.png"
import locksmithImg from "../assets/images/locksmith.png"

class Works extends React.Component {

  render() {
    return (
        <div class="works">
          

           
<div class="section-container">
  <div class="container margintopneeded">
    <div class="row">
      
      <div class="col-sm-8 col-sm-offset-2 section-container-spacer">
        <div class="text-center">
          <h1 class="h2">02 : Works</h1>
          <p>I have been working on various projects the past years. below are some of the projects I have been working on.  </p>
        </div>
      </div>

      <div class="col-md-12">
     
      <div id="myCarousel" class="carousel slide projects-carousel">
     
        {/* <!-- Carousel items --> */}
       
        <div class="carousel-inner">
        <div class="item active">
      
      <div class="row">
          <div class="col-sm-4">

            <a href="https://velda-dashboard.vercel.app" title="" class="black-image-project-hover">
              <img src={veldaImg} alt="" class="img-responsive"/>
            </a>
            <div class="card-container card-container-lg">
              <h4 class="fontColorBlack">001/006</h4>
              <h3 class="fontColorBlack">Velda AI</h3>
              <p class="fontColorBlack">Velda is a personal assistant that can do repetitive things for you. <br/> Velda can learn anything!</p>
              <a href="https://velda-dashboard.vercel.app" title="" class="btn btn-default">Discover</a>
            </div>
          </div>
          <div class="col-sm-4">
            <a href="https://resumez.tech" title="" class="black-image-project-hover">
              <img src={resumezImg} alt="" class="img-responsive"/>
            </a>
            <div class="card-container card-container-lg">
              <h4 class="fontColorBlack">002/006</h4>
              <h3 class="fontColorBlack">Free Resume Generator Powered by AI</h3>
              <p class="fontColorBlack">I Help student to Make A resume tailored to a specific job. <br/> And It is free !!!</p>
              <a href="https://resumez.tech" title="" class="btn btn-default">Discover</a>
            </div>
          </div>
          <div class="col-sm-4">
                      <a href="https://pickerington-locksmith.vercel.app/" title="" class="black-image-project-hover">
                        <img src={locksmithImg} alt="" class="img-responsive"/>
                      </a>
                      <div class="card-container card-container-lg">
                        <h4 class="fontColorBlack">003/006</h4>
                        <h3 class="fontColorBlack">A Contract Work For A locksmith Company</h3>
                        <p class="fontColorBlack">I have been Involved In both the front-end and Back-end of this platform.<br/> Check it out !!!</p>
                        <a href="https://pickerington-locksmith.vercel.app/" title="" class="btn btn-default">Discover</a>
                      </div>
                 </div>
          
      </div>
      {/* <!--/row--> */}

     
     
  </div>

            <div class="item active">
      
                <div class="row">
                    <div class="col-sm-4">

                      <a href="https://nattygirma.github.io/Etherswap/" title="" class="black-image-project-hover">
                        <img src={etherswapImg} alt="" class="img-responsive"/>
                      </a>
                      <div class="card-container card-container-lg">
                        <h4 class="fontColorBlack">001/006</h4>
                        <h3 class="fontColorBlack"> Etherswap</h3>
                        <p class="fontColorBlack">Dapp used to transfer Ether with some message and GIF. <br/>It works only on goerli test network for now.</p>
                        <a href="https://nattygirma.github.io/Etherswap/" title="" class="btn btn-default">Discover</a>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <a href="https://uniswap-clone-nattygirma.vercel.app/" title="" class="black-image-project-hover">
                        <img src={uniswapImg} alt="" class="img-responsive"/>
                      </a>
                      <div class="card-container card-container-lg">
                        <h4 class="fontColorBlack">002/006</h4>
                        <h3 class="fontColorBlack">Uniswap clone project on Ethereum</h3>
                        <p class="fontColorBlack">I cloned uniswap which is popular exchange platform based on Ethereum. here you can transfer your Ether to different addresses using it. <br/> Check it out using test Ether !!!</p>
                        <a href="https://uniswap-clone-nattygirma.vercel.app/" title="" class="btn btn-default">Discover</a>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <a href="https://testnets.opensea.io/collection/natty-name-service-v2" title="" class="black-image-project-hover">
                        <img src={domainImg} alt="" class="img-responsive"/>
                      </a>
                      <div class="card-container card-container-lg">
                        <h4 class="fontColorBlack">003/006</h4>
                        <h3 class="fontColorBlack">Custom Domain name system on Polygon</h3>
                        <p class="fontColorBlack">You ever heard of ENS. It is domain name system on Ethereum network. This project is the exact thing on Polygon network where you can mint your unique domain name and It can actually be viewed from opensea.<br/> Check it out !!!</p>
                        <a href="https://nattygirma.github.io/DNS-on-polygon/" title="" class="btn btn-default">Discover</a>
                      </div>
                    </div>
                    
                </div>
                {/* <!--/row--> */}
          
               
               
            </div>
           
        
            {/* <!--/item--> */}
            <div class="item active">
                <div class="row">
                  <div class="col-sm-4">
                    <a href="https://amazon-on-web3-nattygirma.vercel.app/" class="black-image-project-hover">
                      <img src={amazonImg} alt="amazonImage" class="img-responsive"/>
                    </a>
                    <div class="card-container card-container-lg">
                      <h4 class="fontColorBlack">004/006</h4>
                      <h3 class="fontColorBlack">Amazon on web3</h3>
                      <p class="fontColorBlack">I cloned amazon but in web3 space. <br/> This is how it works... <br/>First you have to buy Amazon coins that are ERC720 coins with unlimited supply. Then you can buy any digital assets using the coins.</p>
                      <a href="https://amazon-on-web3-nattygirma.vercel.app/" class="btn btn-default">Discover</a>
                    </div>
                  </div>
                   <div class="col-sm-4">
                      <a href=" https://todo-list-on-the-blockchain-nattygirma.vercel.app" class="black-image-project-hover">
                        <img src={todoImg} alt="TodoImage" class="img-responsive"/>
                      </a>
                      <div class="card-container card-container-lg">
                        <h4 class="fontColorBlack">005/006</h4>
                        <h3 class="fontColorBlack">Todo list on the blockchain</h3>
                        <p class="fontColorBlack">Store valuable informations to the blockchain so that no one would dare to hack yor valuables.</p>
                        <a href=" https://todo-list-on-the-blockchain-nattygirma.vercel.app" class="btn btn-default">Discover</a>
                      </div>
                    </div>
                    
                    <div class="col-sm-4">
                      <a href="https://nattygirma.github.io/Nft-minting-website/" class="black-image-project-hover">
                        <img src={nftImg} alt="NftImage" class="img-responsive"/>
                      </a>
                      <div class="card-container card-container-lg">
                        <h4 class="fontColorBlack">006/006</h4>
                        <h3 class="fontColorBlack">NFT minting website</h3>
                        <p class="fontColorBlack">Users can mint a unique nft based on the word they enter. the words can be names, userNames or anything unique.
<br/>Here only one name can be minted. its like username in social media's world. so that you only have tha unique avator. </p>
                        <a href="https://nattygirma.github.io/Nft-minting-website/" class="btn btn-default">Discover</a>
                      </div>
                    </div>
                    
                </div>
               
                {/* <!--/row--> */}
              
            </div>
          
            
            {/* <!--/item--> */}
            </div>
         
        
        {/* <!--/carousel-inner-->  */}
        {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>

        <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a> */}
     </div>



    {/* <!--/myCarousel--> */}
    </div>



    </div>
  </div>
</div>




        </div>
    );
}
}

export default Works;