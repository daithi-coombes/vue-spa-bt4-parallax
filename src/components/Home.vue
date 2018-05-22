<template>
  <div>
    <div>
      <carousel :autoplay="true" :perPage="1">
        <slide>
          <div class="carousel-container">
            <img src="../assets/adult-boss-business-70292-1910x1276.jpg" class="img-fluid">
            <div class="carousel-background"></div>
            <div class="centered">
              <span class="carousel-title">Providing Quality</span>
              <span class="carousel-title">Consulting Service</span>
              <p class="carousel-text">
                We're knowledgable about making your benefits higher.
              </p>
              <b-button variant="success" size="sm">Get Appointment</b-button>
            </div>
          </div>
        </slide>
        <slide>
          <div class="carousel-container">
            <img src="../assets/businesswoman-2817567_1920-1910x1276.jpg" class="img-fluid">
            <div class="carousel-background"></div>
            <div class="centered">
              <span class="carousel-title">Provide Best</span>
              <span class="carousel-title">Consulting Service</span>
              <p class="carousel-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
              <b-button variant="success" size="sm">Button 1</b-button>
              <b-button variant="outline-success" size="sm">Button 2</b-button>
            </div>
          </div>
        </slide>
        <slide>
          <div class="carousel-container">
            <img src="../assets/advice-advise-advisor-7075.jpg" class="img-fluid">
            <div class="carousel-background"></div>
            <div class="centered">
              <p class="carousel-title">Provide Best</p>
              <p class="carousel-title">Consulting Service</p>
              <p class="carousel-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
              <b-button variant="success" size="sm">Button 1</b-button>
              <b-button variant="outline-success" size="sm">Button 2</b-button>
            </div>
          </div>
        </slide>
      </carousel>
    </div>

    <hr>

    <div>
      <b-container>
        <b-row>
          <b-col>
            <b-card title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <hr>

    <div style="height: 150px; overflow: hidden">
      <parallax
        speedFactor="0.1">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/snowy-winter-vignette-bokeh-night-snow-falling-free-stock-photo.jpg">
        <h1>Parallax Effect</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </parallax>
    </div>

    <hr>

    <b-container>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </b-container>

    <hr>

    <footer>
      <b-container>
        <b-row>
          <b-col>
            <b-navbar toggleable="md">
              <b-navbar-nav>
                <b-nav-item href="#">HELP</b-nav-item>
                <b-nav-item href="#">TOS</b-nav-item>
                <b-nav-item href="#">LEGAL</b-nav-item>
                <b-nav-item href="#">CONTACT-US</b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto social-links">
                <b-nav-item href="#"><i class="fa fa-facebook-square fa-lg"></i></b-nav-item>
                <b-nav-item href="#"><i class="fa fa-twitter fa-lg"></i></b-nav-item>
                <b-nav-item href="#"><i class="fa fa-linkedin fa-lg"></i></b-nav-item>
                <b-nav-item href="#"><i class="fa fa-google-plus fa-lg"></i></b-nav-item>
                <b-nav-item href="#"><i class="fa fa-instagram fa-lg"></i></b-nav-item>
                <b-nav-item href="#"><i class="fa fa-youtube-play fa-lg"></i></b-nav-item>
              </b-navbar-nav>

            </b-navbar>
          </b-col>
        </b-row>
        <hr>
        <b-row class="footer-last-row">
          <b-col lg="7">
            <div class="align-middle">COMPANY © {{ new Date().getFullYear() }}</div>
          </b-col>
          <b-col lg="2">
            <div class="align-middle text-center" style="margin: auto;">NEWSLETTER</div>
          </b-col>
          <b-col class="text-right" lg="3">
            <b-input-group>
              <b-form-input type="email" placeholder="Email" />
              <b-input-group-button>
                <b-button>Go!</b-button>
              </b-input-group-button>
            </b-input-group>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script scoped>
  import { Carousel, Slide } from 'vue-carousel'
  import Parallax from 'vue-parallaxy'
    
  export default{
    name: 'Home',
    components: { Carousel, Slide, Parallax },
    data(){
      return {}
    }
  }
</script>

<style scoped>
  .VueCarousel-slide div:first{
    height: 957px;
    max-height: 70vh;
    overflow: hidden;
  }
  .carousel-container {
     position: relative;
     text-align: center;
  }
  .carousel-background{
    background: #000;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0.4;
  }
  .carousel-container img{
    opacity: 0.7;
  }
  .carousel-title{
    font-size: 6vw;
    color: white;
  }
  .carousel-text{
    font-size: 4vw;
    color: #C0C0C0;
  }
  .centered {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     width: 80vw;
  }
</style>
