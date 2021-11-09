// import Slider from "../../components/Slider"
import ScrollAnimation from 'react-animate-on-scroll';
function Homepage() {
  return (
  <div>
    <div className="ltn__slider-area ltn__slider-3 section-bg-2">
  <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
    {/* ltn__slide-item */}
    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="img/new/slider2.jpg">
      <div className="ltn__slide-item-inner text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 align-self-center">
              <div className="slide-item-info">
                <div className="slide-item-info-inner ltn__slide-animation">
                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
                  <h1 className="slide-title animated ">Find Your Dream <br /> House By Us</h1>
                  <div className="slide-brief animated">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                  <div className="btn-wrapper animated">
                    <a href="shop.html" className="theme-btn-1 btn btn-effect-1">Make An Enquiry</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ltn__slide-item */}
    <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="img/new/slider1.jpg">
  <div className="ltn__slide-item-inner  text-left">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 align-self-center">
          <div className="slide-item-info">
            <div className="slide-item-info-inner ltn__slide-animation">
              <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
              <h1 className="slide-title animated ">Find Your Dream <br /> House By Us</h1>
              <div className="slide-brief animated">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div className="btn-wrapper animated">
                <a href="shop.html" className="theme-btn-1 btn btn-effect-1">Make An Enquiry</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    {/* ltn__slide-item */}
  </div>
</div>

<div className="ltn__about-us-area pt-115 pb-100 ">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 align-self-center">
      <ScrollAnimation animateIn="fadeInLeft">
        <div className="about-us-img-wrap about-img-left">
          <img src="img/new/slider2.png" alt="About Us Image" />
        </div>
        </ScrollAnimation>
      </div>
      <div className="col-lg-6 align-self-center">
        <div className="about-us-info-wrap">
        <ScrollAnimation animateIn='bounce'
          initiallyVisible={true}
          animateOnce={true}>
          <div className="section-title-area ltn__section-title-2--- mb-30">
            <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">About Us</h6>
            <h1 className="section-title">Dream Living Spaces
              Setting New Build</h1>
            <p>Over 39,000 people work for us in more than 70 countries all over the
              This breadth of global coverage, combined with specialist services</p>
          </div>  
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="flaticon-house-4" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="service-details.html">The Perfect Residency</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="flaticon-call-center-agent" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="service-details.html">Global Architect Experts</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={300}>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="flaticon-maps-and-location" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="service-details.html">Built-in Storage Cupboards</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-115 pb-65" data-bs-bg="img/new/projects.jpg">
  <div className="container">
    <div className="row">
    <ScrollAnimation animateIn="fadeIn">
      <div className="col-lg-12">
        <div className="section-title-area ltn__section-title-2--- text-center---">
          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Upcoming Projects</h6>
          <h1 className="section-title  white-color">Dream Living Space <br />
            Setting New Standards</h1>
        </div>
      </div>
      </ScrollAnimation>
    </div>
    <div className="row ltn__upcoming-project-slider-1-active slick-arrow-3">
      {/* upcoming-project-item */}
      <div className="col-lg-12">
        <div className="ltn__upcoming-project-item">
          <div className="row">
            <div className="col-lg-7">
              <div className="ltn__upcoming-project-img">
                <img src="img/new/project1.png" alt="#" />
              </div>
            </div>
            <div className="col-lg-5 section-bg-1">
              <div className="ltn__upcoming-project-info ltn__menu-widget">
                <h6 className="section-subtitle ltn__secondary-color mb-0">About Projects</h6>
                <h1 className="mb-30">Upcoming Projects</h1>
                <ul className="mt">
                  <li>1. Project Name: <span>Quarter</span></li>
                  <li>2. Project Type: <span>Apartment / Home</span></li>
                  <li>3. Building Location: <span>New York, USA</span></li>
                  <li>4. No. Of Apartments: <span>568</span></li>
                  <li>5. Total Investment: <span>$14,500,00</span></li>
                </ul>
                <div className="btn-wrapper animated">
                  <a href="contact.html" className="theme-btn-1 btn btn-effect-1">Download Brochure</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* upcoming-project-item */}
      <div className="col-lg-12">
        <div className="ltn__upcoming-project-item">
          <div className="row">
            <div className="col-lg-7">
              <div className="ltn__upcoming-project-img">
                <img src="img/new/project2.png" alt="#" />
              </div>
            </div>
            <div className="col-lg-5 section-bg-1">
              <div className="ltn__upcoming-project-info ltn__menu-widget">
                <h6 className="ltn__secondary-color">About Projects</h6>
                <h1>Upcoming Projects</h1>
                <ul>
                  <li>1. Project Name: <span>Quarter</span></li>
                  <li>2. Project Type: <span>Apartment / Home</span></li>
                  <li>3. Building Location: <span>New York, USA</span></li>
                  <li>4. No. Of Apartments: <span>568</span></li>
                  <li>5. Total Investment: <span>$14,500,00</span></li>
                </ul>
                <div className="btn-wrapper animated">
                  <a href="contact.html" className="theme-btn-1 btn btn-effect-1">Download Brochure</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* upcoming-project-item */}
      <div className="col-lg-12">
        <div className="ltn__upcoming-project-item">
          <div className="row">
            <div className="col-lg-7">
              <div className="ltn__upcoming-project-img">
                <img src="img/new/project3.png" alt="#" />
              </div>
            </div>
            <div className="col-lg-5 section-bg-1">
              <div className="ltn__upcoming-project-info ltn__menu-widget">
                <h6 className="ltn__secondary-color">About Projects</h6>
                <h1>Upcoming Projects</h1>
                <ul>
                  <li>1. Project Name: <span>Quarter</span></li>
                  <li>2. Project Type: <span>Apartment / Home</span></li>
                  <li>3. Building Location: <span>New York, USA</span></li>
                  <li>4. No. Of Apartments: <span>568</span></li>
                  <li>5. Total Investment: <span>$14,500,00</span></li>
                </ul>
                <div className="btn-wrapper animated">
                  <a href="contact.html" className="theme-btn-1 btn btn-effect-1">Download Brochure</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  </div>
</div>

<div className="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title-area ltn__section-title-2--- text-center">
          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Our Services</h6>
          <h1 className="section-title">Our Main Focus</h1>
        </div>
      </div>
    </div>
    <div className="row ltn__custom-gutter---  justify-content-center">
      <div className="col-lg-4 col-sm-6 col-12">
    <ScrollAnimation animateIn="fadeIn">
        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
          <div className="ltn__feature-icon">
            {/* <span><i class="flaticon-house"></i></span> */}
            <img src="img/icons/icon-img/21.png" alt="#" />
          </div>
          <div className="ltn__feature-info">
            <h3><a href="service-details.html">Buy a home</a></h3>
            <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
            <a className="ltn__service-btn" href="service-details.html">Find A Home <i className="flaticon-right-arrow" /></a>
          </div>
        </div>
      </ScrollAnimation>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
    <ScrollAnimation animateIn="fadeIn" delay={300}>
        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
          <div className="ltn__feature-icon">
            {/* <span><i class="flaticon-house-3"></i></span> */}
            <img src="img/icons/icon-img/22.png" alt="#" />
          </div>
          <div className="ltn__feature-info">
            <h3><a href="service-details.html">Rent a home</a></h3>
            <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
            <a className="ltn__service-btn" href="service-details.html">Find A Home <i className="flaticon-right-arrow" /></a>
          </div>
        </div>
      </ScrollAnimation>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
      <ScrollAnimation animateIn="fadeIn" delay={500}>
        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
          <div className="ltn__feature-icon">
            {/* <span><i class="flaticon-deal-1"></i></span> */}
            <img src="img/icons/icon-img/23.png" alt="#" />
          </div>
          <div className="ltn__feature-info">
            <h3><a href="service-details.html">Sell a home</a></h3>
            <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
            <a className="ltn__service-btn" href="service-details.html">Find A Home <i className="flaticon-right-arrow" /></a>
          </div>
        </div>
      </ScrollAnimation>
      </div>
    </div>
  </div>
</div>


  </div>
  );
}

export default Homepage;
