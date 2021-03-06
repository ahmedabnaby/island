// import Slider from "../../components/Slider"
import ScrollAnimation from 'react-animate-on-scroll';
function Homepage() {
  return (
  <div>
    <div className="ltn__slider-area ltn__slider-3 section-bg-2">
  <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
    {/* ltn__slide-item */}
    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="img/new/new-5.jpg">
      <div className="ltn__slide-item-inner text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 align-self-center">
              <div className="slide-item-info">
                <div className="slide-item-info-inner ltn__slide-animation">
                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> The Construction You Count On</h6>
                    <img src="img/new/edited-logo.png" alt="Logo" className='slider-logo'/>
                  {/* <h1 className="slide-title animated ">Island For Construction</h1> */}
                  <div className="slide-brief animated">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                  <div className="btn-wrapper animated">
                    <a href="#about" className="theme-btn-1 btn btn-effect-1">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ltn__slide-item */}
    <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="img/new/new-4.jpg">
  <div className="ltn__slide-item-inner  text-left">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 align-self-center">
          <div className="slide-item-info">
            <div className="slide-item-info-inner ltn__slide-animation">
              <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Island For Construction</h6>
              <h1 className="slide-title animated ">The Construction You Count On</h1>
              <div className="slide-brief animated">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div className="btn-wrapper animated">
                <a href="#about" className="theme-btn-1 btn btn-effect-1">Learn more</a>
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


<div className="ltn__about-us-area pt-115 pb-100 " id="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 align-self-center">
      <ScrollAnimation animateIn="fadeInLeft">
        <div className="about-us-img-wrap about-img-left">
          <img src="img/new/about-us1.png" alt="About Us Image" />
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
               and clients??? needs at fair cost, within the shortest time and to the highest standards of safety</p>
          </div>  
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="icon-award" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="#">Our investment capacity</a></h4>
              <p> Financial resources that allow us to partner with clients as an investor and a contractor.</p>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="flaticon-user" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="#">Our people</a></h4>
              <p>Their expertise, hunger for knowledge and passion to excel. Above all, their loyalty and commitment to ISLAND for contracting.</p>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={300}>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="icon-star-1" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="#">Our entrepreneurial attitude</a></h4>
              <p>A strong appetite for investment and diversification to grow our business and increase revenue streams.</p>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="ltn__feature-area pt-90 pb-90 section-bg-1">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
      <ScrollAnimation animateIn="fadeInUp" delay={300}>

        <div className="section-title-area ltn__section-title-2--- text-center">
          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">features</h6>
          <h1 className="section-title">Business Divisions</h1>
        </div>
        </ScrollAnimation>
      </div>
    </div>
    <ScrollAnimation animateIn="fadeInLeft" delay={300}>

    <div className="row ltn__custom-gutter">
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6">
          <div className="ltn__feature-icon">
            <span><i className="icon-maintenance" /></span>
          </div>
          <div className="ltn__feature-info">
            <h4><a href="#">Industrial</a></h4>
            <p>Steel factories, Large scale factories and Cement plants.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6 active">
          <div className="ltn__feature-icon">
            <span><i className="icon-quotation" /></span>
          </div>
          <div className="ltn__feature-info">
            <h4><a href="#">Tourism</a></h4>
            <p>Hotels and Resorts. <br/> <br/></p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6">
          <div className="ltn__feature-icon">
            <span><i className="icon-globe" /></span>
          </div>
          <div className="ltn__feature-info">
            <h4><a href="#">Hospitals</a></h4>
            <p>Health care buildings. <br/> <br/></p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6">
          <div className="ltn__feature-icon">
            <span><i className="flaticon-apartment" /></span>
          </div>
          <div className="ltn__feature-info">
            <h4><a href="#">Residential</a></h4>
            <p>Housing compounds. <br/> <br/> <br/></p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6">
          <div className="ltn__feature-icon pt-1">
            <span><i className="icon-tag" /></span>
          </div>
          <div className="ltn__feature-info">
            <h4><a href="#">Transportation & Community</a></h4>
            <p>Museums, University Buildings, Airports, Sewage stations, Water, Gas and Electricity stations.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6">
          <div className="ltn__feature-icon pt-1">
            <span><i className="icon-cog" /></span>
          </div>
          <div className="ltn__feature-info">
            <h4><a href="#">Administrative & Commercial</a></h4>
            <p>Office buildings, Showrooms and Banks. <br/> <br/> <br/></p>
          </div>
        </div>
      </div>

    </div>
    </ScrollAnimation>
  </div>
</div>


{/* <div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120 pb-90">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 align-self-center">
        <div className="about-us-info-wrap dark-bg">
          <div className="section-title-area ltn__section-title-2--- mb-20">
            <h1 className="section-title">Business Divisions</h1>
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
        </div>
      </div>
      <div className="col-lg-6 align-self-center">
        <div className="about-us-img-wrap about-img-left">
        </div>
      </div>
    </div>
  </div>
</div> */}




<div className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-115 pb-65" data-bs-bg="img/new/projects.jpg">
  <div className="container">
    <div className="row">
    <ScrollAnimation animateIn="fadeIn">
      <div className="col-lg-12">
        <div className="section-title-area ltn__section-title-2--- text-center---">
          {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Upcoming Projects</h6> */}
          <h1 className="section-title  white-color">Ongoing Projects</h1>
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
                {/* <div className="btn-wrapper animated">
                  <a href="contact.html" className="theme-btn-1 btn btn-effect-1">Download Brochure</a>
                </div> */}
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
                {/* <div className="btn-wrapper animated">
                  <a href="contact.html" className="theme-btn-1 btn btn-effect-1">Download Brochure</a>
                </div> */}
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
                  {/* <a href="contact.html" className="theme-btn-1 btn btn-effect-1">Download Brochure</a> */}
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


<div className="ltn__img-slider-area">
  <div className="container-fluid">
  <div className="row">
    <ScrollAnimation animateIn="fadeIn">
      <div className="col-lg-12">
        <div className="section-title-area ltn__section-title-2--- text-center--- pt-5">
          {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Upcoming Projects</h6> */}
          <h1 className="section-title text-center white-color">Project's Gallery</h1>
        </div>
      </div>
      </ScrollAnimation>
    </div>
    <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all pb-0">
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



<div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-5 pt-50 pb-50 plr--9 d-none---">
  <div className="container-fluid">
    <div className="row ltn__brand-logo-active">
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item">
          <img src="img/new/c1.jpg" alt="Brand Logo" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item">
          <img src="img/new/c2.png" alt="Brand Logo" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item">
          <img src="img/new/c4.jpg" alt="Brand Logo" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item pt-5">
          <img src="img/new/c6.png" alt="Brand Logo" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ltn__brand-logo-item pt-3">
          <img src="img/new/c3.png" alt="Brand Logo" />
        </div>
      </div>
    </div>
  </div>
</div>


  </div>
  );
}

export default Homepage;
