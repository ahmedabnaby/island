// import Slider from "../../components/Slider"
import ScrollAnimation from 'react-animate-on-scroll';
function Homepage() {
  return (
  <div>
    <div className="ltn__slider-area ltn__slider-3 section-bg-2">
  <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
    {/* ltn__slide-item */}
    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="img/new/4.jpg">
      <div className="ltn__slide-item-inner text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 align-self-center">
              <div className="slide-item-info">
                <div className="slide-item-info-inner ltn__slide-animation">
                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Island</h6>
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
    <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="img/new/3.jpg">
  <div className="ltn__slide-item-inner  text-left">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 align-self-center">
          <div className="slide-item-info">
            <div className="slide-item-info-inner ltn__slide-animation">
              <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Island</h6>
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
          <img src="img/new/about-us.png" alt="About Us Image" />
        </div>
        </ScrollAnimation>
      </div>
      <div className="col-lg-6 align-self-center">
        <div className="about-us-info-wrap">
        <ScrollAnimation animateIn='bounce'
          initiallyVisible={true}
          animateOnce={true}>
          <div className="section-title-area ltn__section-title-2--- mb-30">
            {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">About Us</h6> */}
            <h1 className="section-title">About us</h1>
            <p>ISLAND is committed to provide its clients with a product meeting contractual requirements
               and clients’ needs at fair cost, within the shortest time and to the highest standards of safety</p>
          </div>  
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="flaticon-house-4" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="service-details.html">Our investment capacity</a></h4>
              <p> Financial resources that allow us to partner with clients as an investor and a contractor.</p>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="flaticon-call-center-agent" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="service-details.html">Our people</a></h4>
              <p>Their expertise, hunger for knowledge and passion to excel. Above all, their loyalty and commitment to ISLAND for contracting.</p>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={300}>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="flaticon-maps-and-location" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="service-details.html">Our entrepreneurial attitude</a></h4>
              <p>A strong appetite for investment and diversification to grow our business and increase revenue streams.</p>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120 pb-90">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 align-self-center">
        <div className="about-us-info-wrap">
          <div className="section-title-area ltn__section-title-2--- mb-20">
            {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">BUSINESS DIVISIONS</h6> */}
            <h1 className="section-title">Business Divisions</h1>
            {/* <p>Over 39,000 people work for us in more than 70 countries all over the
              This breadth of global coverage, combined with specialist services</p> */}
          </div>
          <div className="row">
            <div className="col-md-6 AboutUS">
              <h4><i className="icon-repair-1" /> Industrial</h4>
              <p><i className="icon-done" /> Steel factories, Large scale factories and Cement plants</p>
            </div>
            <div className="col-md-6 AboutUS">
              <h4><i className="icon-user" /> Tourism</h4>
              <p><i className="icon-done" /> Hotels and Resorts</p>
            </div>
            <div className="col-md-6 AboutUS">
              <h4><i className="icon-globe" /> Hospitals</h4>
              <p><i className="icon-done" /> Health care buildings</p>
            </div>
            <div className="col-md-6 AboutUS">
              <h4><i className="icon-location" /> Residential</h4>
              <p><i className="icon-done" /> Housing compounds</p>
            </div>
            <div className="col-md-6 AboutUS">
              <h4><i className="icon-maintenance" /> Administrative & Commercial</h4>
              <p><i className="icon-done" /> Office buildings, Showrooms and Banks</p>
            </div>
            <div className="col-md-6 AboutUS">
              <h4><i className="icon-car" /> Transportation & Community</h4>
              <p><i className="icon-done" /> Museums, University Buildings, Airports, Sewage stations, Water, Gas and Electricity stations</p>
            </div>
          </div>
          <div className="  ltn__animation-pulse2 text-center mt-30">
            <a className="ltn__video-play-btn bg-white--- ltn__secondary-bg" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
              <i className="icon-play  ltn__secondary-color--- white-color" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 align-self-center">
        <div className="about-us-img-wrap about-img-left">
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
          {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Upcoming Projects</h6> */}
          <h1 className="section-title  white-color">Upcoming Projects</h1>
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
                <h6 className="ltn__secondary-color">About Projects</h6>
                <h1 className="mb-30">Aswan Units</h1>
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
                <h1>Al Hamra Oil</h1>
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

  <div className="ltn__img-slider-area">
  <div className="container-fluid">
    <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
      <div className="col-lg-12">
        <div className="ltn__img-slide-item-4">
          <a href="img/new/project9.png" data-rel="lightcase:myCollection">
            <img src="img/new/project9.png" alt="Image" />
          </a>
          <div className="ltn__img-slide-info">
            <div className="ltn__img-slide-info-brief">
              <h6>Heart of NYC</h6>
              <h1><a href="portfolio-details.html">Manhattan </a></h1>
            </div>
            <div className="btn-wrapper">
              <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__img-slide-item-4">
          <a href="img/img-slide/22.jpg" data-rel="lightcase:myCollection">
            <img src="img/img-slide/22.jpg" alt="Image" />
          </a>
          <div className="ltn__img-slide-info">
            <div className="ltn__img-slide-info-brief">
              <h6>The luxury crib</h6>
              <h1><a href="portfolio-details.html">Upper East Side</a></h1>
            </div>
            <div className="btn-wrapper">
              <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
            </div>
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
                <h1>Sidi Brani Hospital</h1>
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




<div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-3 pt-110 pb-110 plr--9 d-none---">
  <div className="container-fluid">
    <div className="row ltn__brand-logo-active">
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item">
          <img src="img/brand-logo/1.png" alt="Brand Logo" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item">
          <img src="img/brand-logo/2.png" alt="Brand Logo" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item">
          <img src="img/brand-logo/3.png" alt="Brand Logo" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item">
          <img src="img/brand-logo/4.png" alt="Brand Logo" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item">
          <img src="img/brand-logo/5.png" alt="Brand Logo" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item">
          <img src="img/brand-logo/3.png" alt="Brand Logo" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ltn__img-slider-area pt-4">
  <div className="container-fluid">
    <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
      <div className="col-lg-12">
        <div className="ltn__img-slide-item-4">
          <a href="img/new/project9.png" data-rel="lightcase:myCollection">
            <img src="img/new/project9.png" alt="Image" />
          </a>
          <div className="ltn__img-slide-info">
            <div className="ltn__img-slide-info-brief">
              <h6>Aswan Units</h6>
              <h1><a href="portfolio-details.html">Aswan Units </a></h1>
            </div>
            <div className="btn-wrapper">
              <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__img-slide-item-4">
          <a href="img/new/project8.png" data-rel="lightcase:myCollection">
            <img src="img/new/project8.png" alt="Image" />
          </a>
          <div className="ltn__img-slide-info">
            <div className="ltn__img-slide-info-brief">
              <h6>The luxury crib</h6>
              <h1><a href="portfolio-details.html">Al Negila Hospital</a></h1>
            </div>
            <div className="btn-wrapper">
              <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__img-slide-item-4">
          <a href="img/new/project7.png" data-rel="lightcase:myCollection">
            <img src="img/new/project7.png" alt="Image" />
          </a>
          <div className="ltn__img-slide-info">
            <div className="ltn__img-slide-info-brief">
              <h6>Antoniadis Compound</h6>
              <h1><a href="portfolio-details.html">Antoniadis Compound</a></h1>
            </div>
            <div className="btn-wrapper">
              <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__img-slide-item-4">
          <a href="img/new/project5.png" data-rel="lightcase:myCollection">
            <img src="img/new/project5.png" alt="Image" />
          </a>
          <div className="ltn__img-slide-info">
            <div className="ltn__img-slide-info-brief">
              <h6> New Commerical Gate</h6>
              <h1><a href="portfolio-details.html">Cimpor Group </a></h1>
            </div>
            <div className="btn-wrapper">
              <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__img-slide-item-4">
          <a href="img/new/project4.png" data-rel="lightcase:myCollection">
            <img src="img/new/project4.png" alt="Image" />
          </a>
          <div className="ltn__img-slide-info">
            <div className="ltn__img-slide-info-brief">
              <h6>Alternative Fuel Project</h6>
              <h1><a href="portfolio-details.html">Cimpor Group</a></h1>
            </div>
            <div className="btn-wrapper">
              <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
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

export default Homepage;
