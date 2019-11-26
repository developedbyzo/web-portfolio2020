import React from 'react';
import { MDBAnimation } from 'mdbreact';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="/img/logo.png" alt="logo" id="portfolio-logo"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#web">Web Design</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#graphic">Graphic Design</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>

<section id="jumbo-img">
  <img src="img/headerImgC.jpg"/>
</section>

<section id="skills">
{/* <div className="skills-carousel">
        <div id="myCarousel" className="carousel slide" data-interval={3000} data-ride="carousel">
          Carousel indicators
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
            <li data-target="#myCarousel" data-slide-to={3} />
            <li data-target="#myCarousel" data-slide-to={4} />
            <li data-target="#myCarousel" data-slide-to={5} />
            <li data-target="#myCarousel" data-slide-to={6} />
            <li data-target="#myCarousel" data-slide-to={7} />
          </ol>
          Wrapper for carousel items
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img class="d-block img-fluid" src="https://image.flaticon.com/icons/svg/919/919827.svg" alt="HTML5" height="50px" width="50px"/>
              
            </div>
            <div className="carousel-item">
              <div><img class="d-block img-fluid" src="https://image.flaticon.com/icons/svg/919/919826.svg" alt="CSS3" height="50px" width="50px"/></div>
              
            </div>
            <div className="carousel-item">
              <div><img class="d-block img-fluid" src="https://image.flaticon.com/icons/svg/919/919828.svg" alt="JavaScript" height="50px" width="50px"/></div>
              
            </div>
            <div className="carousel-item">
              <div><img class="d-block img-fluid" src="https://image.flaticon.com/icons/svg/919/919851.svg" alt="React" height="50px" width="50px"/></div>
              
            </div>
            <div className="carousel-item">
              <div><img class="d-block img-fluid" src="https://image.flaticon.com/icons/svg/919/919825.svg" alt="NodeJS" height="50px" width="50px"/></div>
             
            </div>
            <div className="carousel-item">
              <div><img class="d-block img-fluid" src="https://image.flaticon.com/icons/svg/541/541586.svg" alt="Photoshop" height="50px" width="50px"/></div>
              
            </div>
            <div className="carousel-item">
              <div><img class="d-block img-fluid" src="https://image.flaticon.com/icons/svg/541/541608.svg" alt="Illustrator" height="50px" width="50px"/></div>
              
            </div>
            <div className="carousel-item">
              <div><img class="d-block img-fluid" src="https://image.flaticon.com/icons/svg/541/541630.svg" alt="InDesign" height="50px" width="50px"/></div>
              
            </div>
          </div>
          Carousel controls
          <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#myCarousel" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div> */} 
      <div id="skills" className="container mx-auto d-block">
        <div className="row">
          <div className="col-6 col-md-3">
          <img class="mx-auto d-block mt-3" src="https://image.flaticon.com/icons/svg/919/919827.svg" alt="HTML5" height="50px" width="50px"/>
          </div>
          <div className="col-6 col-md-3">
          <img class="mx-auto d-block mt-3" src="https://image.flaticon.com/icons/svg/919/919826.svg" alt="CSS3" height="50px" width="50px"/>
          </div>
          <div className="col-6 col-md-3">
          <img class="mx-auto d-block mt-3" src="https://image.flaticon.com/icons/svg/919/919828.svg" alt="JavaScript" height="50px" width="50px"/>
          </div>
          <div className="col-6 col-md-3">
          <img class="mx-auto d-block mt-3" src="https://image.flaticon.com/icons/svg/919/919851.svg" alt="React" height="50px" width="50px"/>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-md-4">
          <img class="mx-auto d-block mt-5 mb-3" src="https://image.flaticon.com/icons/svg/541/541586.svg" alt="Photoshop" height="50px" width="50px"/>
          </div>
          <div className="col-6 col-md-4">
          <img class="mx-auto d-block mt-5 mb-3" src="https://image.flaticon.com/icons/svg/541/541608.svg" alt="Illustrator" height="50px" width="50px"/>
          </div>
          <div className="col-6 col-md-4">
          <img class="mx-auto d-block mt-5 mb-3" src="https://image.flaticon.com/icons/svg/541/541630.svg" alt="InDesign" height="50px" width="50px"/>
          </div>
        </div>
      </div>
      
</section>

<section id="projects" className="bg-dark">
<section id="project-web-title" className="bg-dark">
<div className="container mx-auto d-block">
    <div className="row text-center">
      <div className="col-8 mx-auto d-block mt-1 mb-2 text-light"><h1>Web Projects</h1></div>
    </div>
  </div>
</section>
{/*Web Projects*/}
  <div className="container mx-auto d-block bg-info">
    <div className="row text-center">
      <div className="col-6 col-md-2 mx-auto d-block mt-3"></div>
      <div className="col-6 col-md-7 mx-auto d-block"><img src="img/p-dex4.png" alt="P-Dex" width="100%" /></div>
      <div className="col-6 col-md-2 mx-auto d-block mt-3"></div>
    </div>
  </div>
<br/>
  <div className="container mx-auto d-block bg-info">
    <div className="row text-center">
      <div className="col-6 col-md-2 mx-auto d-block mt-3"></div>
      <div className="col-6 col-md-7 mx-auto d-block"><img src="img/game.png" alt="Present Saver: Santa" width="100%" /></div>
      <div className="col-6 col-md-2 mx-auto d-block mt-3"></div>
    </div>
  </div>
  <br/>
  <br/>
  <section id="project-web-title" className="bg-dark">
<div className="container mx-auto d-block">
    <div className="row text-center">
      <div className="col-8 mx-auto d-block mt-1 mb-2 text-light"><h1>Design Projects</h1></div>
    </div>
  </div>
</section>
  {/*Design Projects*/}
  <div className="container mx-auto d-block bg-info">
    <div className="row text-center">
      <div className="col-6 col-md-2 mx-auto d-block mt-3"></div>
      <div className="col-6 col-md-7 mx-auto d-block"><img src="img/Plumage_of_the_Phoenix_small.png" alt="Plumage of the Phoenix" width="100%" /></div>
      <div className="col-6 col-md-2 mx-auto d-block mt-3"></div>
    </div>
  </div>
<br/>
<div className="container mx-auto d-block bg-info">
    <div className="row text-center">
      <div className="col-6 col-md-2 mx-auto d-block mt-3"></div>
      <div className="col-6 col-md-7 mx-auto d-block"><img src="img/Plumage_of_the_Phoenix_small.png" alt="Plumage of the Phoenix" width="100%" /></div>
      <div className="col-6 col-md-2 mx-auto d-block mt-3"></div>
    </div>
  </div>
<br/>
<div className="container mx-auto d-block bg-info">
    <div className="row text-center">
      <div className="col-6 col-md-2 mx-auto d-block mt-3"></div>
      <div className="col-6 col-md-7 mx-auto d-block"><img src="img/Plumage_of_the_Phoenix_small.png" alt="Plumage of the Phoenix" width="100%" /></div>
      <div className="col-6 col-md-2 mx-auto d-block mt-3"></div>
    </div>
  </div>
<br/>
</section>

<footer>
  <div><p>Something is here!</p></div>
</footer>
</div>
  );
}

export default App;
