// import Slider from "../../components/Slider"
import React,{Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/categories/');
      // const res = await fetch('https://islandd-backend.herokuapp.com/api/categories/');
      const categories = await res.json();
      console.log(categories);
      this.setState({
        categories
      });
    } catch (e) {
      console.log(e);
  }
}

  render() {
    {const categories = this.state.categories;}
    return (  <div>
    {/* HOME */}
    <div className="ltn__slider-area ltn__slider-3 text-center section-bg-2">
  <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
    {/* ltn__slide-item */}

    {/* ltn__slide-item */}
    <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="img/new/new-1.jpg" id="home">
  <div className="ltn__slide-item-inner  text-left">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 align-self-center">
          <div className="slide-item-info">
            <div className="slide-item-info-inner ltn__slide-animation">
              {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Island</h6> */}
              <h1 className="slide-title animated ">THE CONSTRUCTION YOU COUNT ON</h1>
              <div className="slide-brief animated">
                <p>Has accumulated a wide and diversed experience over the years.</p>
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
<div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="img/new/new-2.jpg">
  <div className="ltn__slide-item-inner  text-left">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 align-self-center">
          <div className="slide-item-info">
            <div className="slide-item-info-inner ltn__slide-animation">
              {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Island</h6> */}
              <h1 className="slide-title animated ">The Construction You Count On</h1>
              <div className="slide-brief animated">
                <p>Has accumulated a wide and diversed experience over the years.</p>
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

{/* ABOUT */}

<div className="ltn__about-us-area pt-155 pb-155 bg-image bg-overlay-theme-black-60" data-bs-bg="img/new/cco.jpg" id="about">
  <div className="container">
    <div className="row">
      {/* <div className="col-lg-6 align-self-center">
      <ScrollAnimation animateIn="fadeInLeft">
        <div className="about-us-img-wrap about-img-left">
          <img src="img/new/covers.jpg" alt="About Us Image" />
        </div>
        </ScrollAnimation>
      </div> */}
      <div className="col-lg-12 align-self-center text-center">
        <div className="about-us-info-wrap text-color-white">
        <ScrollAnimation animateIn='bounce'
          initiallyVisible={true}
          animateOnce={true}>
          <div>
            {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">About Us</h6> */}
            <h1 className="section-title">ABOUT US</h1>
            <p>ISLAND is committed to provide its clients with a product meeting contractual requirements
               and clients’ needs at fair cost.</p>
          </div>  
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon d-mobile-none">
              <span><i className="icon-award" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="#">MISSION</a></h4>
              <p><i className="icon-done" /> &nbsp; We will work to deliver exceptional value for our shareholders by following a coherent and considered strategy.</p>
              <p><i className="icon-done" /> &nbsp; Targeting large, complex construction projects in foreigners’ markets, working in partnership with local and global leaders and maintaining our commitment to quality and safety.</p>
              <p><i className="icon-done" /> &nbsp; Promoting an environment of competitiveness amongst our employees to 
promote their sense of leadership and team working</p>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon d-mobile-none">
              <span><i className="flaticon-user" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="#">VISION</a></h4>
              <p><i className="icon-done" /> &nbsp; We are committed to delivering quality work and products, safely and on schedule.</p>
              <p><i className="icon-done" /> &nbsp; We aspire within the next five years to be recognized as the contractor of choice for large, complex and demanding construction projects in the Middle East as Egypt &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p><i className="icon-done" /> &nbsp; A company that our clients want work with, our customers can rely on through high quality & healthy working environment and our employees are proud to work for.</p>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </div>
</div>


{/* <div className="ltn__about-us-area pt-115 pb-100 " id="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 align-self-center">
      <ScrollAnimation animateIn="fadeInLeft">
        <div className="about-us-img-wrap about-img-left">
          <img src="img/new/covers.jpg" alt="About Us Image" />
        </div>
        </ScrollAnimation>
      </div>
      <div className="col-lg-6 align-self-center">
        <div className="about-us-info-wrap">
        <ScrollAnimation animateIn='bounce'
          initiallyVisible={true}
          animateOnce={true}>
          <div className="section-title-area ltn__section-title-2--- mb-30">
            <h1 className="section-title">ABOUT US</h1>
            <p>ISLAND is committed to provide its clients with a product meeting contractual requirements
               and clients’ needs at fair cost.</p>
          </div>  
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="icon-award" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="#">Mission</a></h4>
              <p> <i className="icon-done" />  &nbsp; We will work to deliver exceptional value for our shareholders by following 
a coherent and considered strategy.</p>
<p> <i className="icon-done" />  &nbsp; Targeting large, complex construction projects in foreigners’ markets.</p>
<p> <i className="icon-done" />  &nbsp; Working in partnership with local and global leaders.</p>
<p> <i className="icon-done" />  &nbsp; Maintaining our commitment to quality and safety.</p>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span><i className="flaticon-user" /></span>
            </div>
            <div className="ltn__feature-info">
              <h4><a href="#">Vision</a></h4>
              <p><i className="icon-done" /> &nbsp; We aspire within the next ë ve years to be recognized as the contractor of 
choice for large, complex and demanding construction projects in the Middle 
East as Egypt.</p>
<p><i className="icon-done" /> &nbsp; We are committed to delivering quality work and products, safely and on 
schedule.</p>
<p><i className="icon-done" /> &nbsp; A company that our clients want work with, our customers can rely on 
through high quality & healthy working environment and our employees are 
proud to work for.</p>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </div>
</div> */}


{/* <div className="ltn__about-us-area section-bg-1 pt-120 pb-90" id="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="about-us-info-wrap">
          <div className="section-title-area ltn__section-title-2--- mb-20">
            <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">About us</h6>
            <h1 className="section-title">Mission</h1>
          </div>
          <ul className="ltn__list-item-half ltn__list-item-half-2 clearfix">
            <li>
              <i className="icon-done" />
              We will work to deliver exceptional value for our shareholders by following 
a coherent and considered strategy.
            </li>
            <li>
              <i className="icon-done" />
              Targeting large, complex construction projects in foreigners’ markets.
            </li>
            <li>
              <i className="icon-done" />
              Working in partnership with local and global leaders.
            </li>
            <li>
              <i className="icon-done" />
              Maintaining our commitment to quality and safety
            </li>
            <li>
              <i className="icon-done" />
              Being a good corporate citizen wherever we operate.
            </li>
            <li>
              <i className="icon-done" />
              Providing products and services for people in developing economies
            </li>
            <li>
              <i className="icon-done" />
              Searching for new opportunities in order to deliver exceptional value.
            </li>
            <li>
              <i className="icon-done" />
              We believe that our development is strongly related to the development of 
our human resources through training
            </li>
            <li>
              <i className="icon-done" />
              Promoting an environment of competitiveness amongst our employees to 
promote their sense of leadership and team working.
            </li>
          </ul>
          
        </div>
      </div>
      <div className="col-lg-6">
      <div className="about-us-info-wrap">
          <div className="section-title-area ltn__section-title-2--- mb-20">
            <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">&nbsp;</h6>
            <h1 className="section-title">Vision</h1>
          </div>
          <ul className="ltn__list-item-half ltn__list-item-half-2 clearfix">
            <li>
              <i className="icon-done" />
              We aspire within the next ë ve years to be recognized as the contractor of 
choice for large, complex and demanding construction projects in the Middle 
East as Egypt.
            </li>
            <li>
              <i className="icon-done" />
              We are committed to delivering quality work and products, safely and on 
schedule.
            </li>
            <li>
              <i className="icon-done" />
              A company that our clients want work with, our customers can rely on 
through high quality & healthy working environment and our employees are 
proud to work for.
            </li>
            <li>
              <i className="icon-done" />
              A company with an open mind ready to embrace new opportunities and 
driven to deliver exceptional value.
            </li>
            <li>
              <i className="icon-done" />
              A company transforms the way people live and work through encouraging 
innovation and challenging convention.
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</div> */}


{/* STRENGTHS */}
<div className="ltn__feature-area pt-90 pb-90 section-bg-1" id="strength">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
      <ScrollAnimation animateIn="fadeInUp" delay={300}>

        <div className="section-title-area ltn__section-title-2--- text-center">
          {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">features</h6> */}
          <h1 className="section-title">STRENGTHS</h1>
          <p>Ultimately it is for others to judge our strengths, but we believe that these factors set us apart from our competitors</p>
        </div>
        </ScrollAnimation>
      </div>
    </div>
    <ScrollAnimation animateIn="fadeInLeft" delay={300}>

    <div className="row ltn__custom-gutter">
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6 active">
        <div className="ltn__feature-info">
            <h4><a href="#">Our resources</a></h4>
            <p>Capital resources that enable us to respond faster than our 
construction competitors, raw materials. <br/><br/></p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6">
          <div className="ltn__feature-info">
            <h4><a href="#">Our people</a></h4>
            <p>Their expertise, hunger for knowledge and passion to excel. 
Above all, their loyalty and commitment to ISLAND for contracting.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6">
        <div className="ltn__feature-info">
            <h4><a href="#">Our entrepreneurial attitude</a></h4>
            <p>A strong appetite for investment and diversication to grow our business and increase revenue streams.<br/><br/>
</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6">
        <div className="ltn__feature-info">
            <h4><a href="#">Our experience</a></h4>
            <p>A tradition for excellence and achievement reaching back 
over 17 years; an ability to share our client’s perspective that gives us a unique 
understanding of their needs throughout the project cycle.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ltn__feature-item ltn__feature-item-6">
        <div className="ltn__feature-info">
            <h4><a href="#">Our investment capacity</a></h4>
            <p>Financial resources that allow us to partner with 
clients as an investor and a contractor. The ability to self perform and to diversify into new industries.<br></br> <br/></p>
          </div>
        </div>
      </div>
    </div>
    </ScrollAnimation>
  </div>
</div>

{/* SAFTEY */}

<div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-25 " data-bs-bg="img/new/saftey.jpg" id="safety">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title-area ltn__section-title-2--- text-center---">
          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">HEALTH, SAFETY & ENVIRONMENT MANAGEMENT</h6>
          <h1 className="section-title white-color">SEE HOW WE PROVIDE <br />SAFTEY</h1>
        </div>
      </div>
    </div>
    <div className="row ltn__testimonial-slider-6-active slick-arrow-3">
      <div className="col-lg-4">
        <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
          <div className="ltn__testimoni-info">
          <p> 
            Our health, safety and environmental management system safeguards our 
day-to-day activities and is underpinned by clear communication and training 
to employees and others to raise awareness on key issues. The system allows 
ISLAND to sustain, assess, and review how well it is integrating international 
standards of health, safety and environmental excellence (such as ISO 14001 
and OHSAS 18001) into the company’s business and projects.
</p>
            
          </div>
        </div>
      </div>
      <div className="col-lg-4">
      <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
          <div className="ltn__testimoni-info">
            
          <p> 
            Ensuring a safe and healthy environment for our employees, contractors, 
clients and the wider public is our top priority. ISLAND maintains a continuous improvement culture where health, safety and environmental requirenments are integrated into the business policy, philosophy and procedures. We 
set targets and objectives, and monitor our performance through key point 
indicators (KPIs), audit and inspection to ensure compliance.
</p>

          </div>
        </div>
      </div>
      <div className="col-lg-4">
      <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
          <div className="ltn__testimoni-info">
            
          <p> 
            We implement appropriate risk reduction programs, plans, and safe systems 
of work and audit schedules in order to continuously improve on our health, 
safety and environmental performance. We meet and exceed the requirements 
laid down by the relevant occupational health and safety legislation wherever 
we operate.

</p>

          </div>
        </div>
      </div>
      <div className="col-lg-4">
      <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
          <div className="ltn__testimoni-info">
            
          <p> 
          ISLAND’s commitment of honor holds the management responsible to the 
eff ective management of Health, Safety and Environment issues as an integral 
part of our policies, philosophy and procedures.
<br/>
<br/>
<br/>
</p>

          </div>
        </div>
      </div>
      {/*  */}
    </div>
  </div>
</div>

{/* PROJECTS */}
<div className="ltn__banner-area" id="projects">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title-area ltn__section-title-2--- text-center">
          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Business Divisions</h6>
          <h1 className="section-title">PROJECTS</h1>
        </div>
      </div>
    </div>
    <ScrollAnimation animateIn="fadeInLeft" delay={300}>

    <div className="row">
  {this.state.categories.map(category => (
    <div className="col-lg-4 col-md-6" key={category.id}>
        <div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image-1" style={{backgroundImage: `url(${category.image})`}}>                        
          <div className="ltn__banner-info">
            <h3><a href={`category/${category.id}`}>{category.title}</a></h3>
            <p> • {category.description}</p>
            <mark> 13 Listings</mark>
          </div>
        </div>
      </div>
  ))
  }
    </div>
    </ScrollAnimation>
  </div>
</div>

{/* NEWS */}
<div className="ltn__blog-area pt-90 pb-70 section-bg-1" id="news">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title-area ltn__section-title-2--- text-center">
          <h6 className="section-subtitle section-subtitle-2">News &amp; Blogs</h6>
          <h1 className="section-title">LEATEST NEWS FEEDS</h1>
        </div>
      </div>
    </div>
    <ScrollAnimation animateIn="fadeInLeft" delay={300}>
    <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
      {/* Blog Item */}
      <div className="col-lg-12">
        <div className="ltn__blog-item ltn__blog-item-3">
          <div className="ltn__blog-img">
            <a href="#"><img src="img/blog/1.jpg" alt="#" /></a>
          </div>
          <div className="ltn__blog-brief">
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-author">
                  {/* <a href="#"><i className="far fa-user" />by: Admin</a> */}
                </li>
                <li className="ltn__blog-tags">
                  <a href="#"><i className="fas fa-tags" />Decorate</a>
                </li>
              </ul>
            </div>
            <h3 className="ltn__blog-title"><a href="#">10 Brilliant Ways To Decorate Your Home</a></h3>
            <div className="ltn__blog-meta-btn">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
                </ul>
              </div>
              <div className="ltn__blog-btn">
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Item */}
      <div className="col-lg-12">
        <div className="ltn__blog-item ltn__blog-item-3">
          <div className="ltn__blog-img">
            <a href="#"><img src="img/blog/2.jpg" alt="#" /></a>
          </div>
          <div className="ltn__blog-brief">
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-author">
                  {/* <a href="#"><i className="far fa-user" />by: Admin</a> */}
                </li>
                <li className="ltn__blog-tags">
                  <a href="#"><i className="fas fa-tags" />Interior</a>
                </li>
              </ul>
            </div>
            <h3 className="ltn__blog-title"><a href="#">The Most Inspiring Interior Design Of 2021</a></h3>
            <div className="ltn__blog-meta-btn">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2021</li>
                </ul>
              </div>
              <div className="ltn__blog-btn">
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Item */}
      <div className="col-lg-12">
        <div className="ltn__blog-item ltn__blog-item-3">
          <div className="ltn__blog-img">
            <a href="#"><img src="img/blog/3.jpg" alt="#" /></a>
          </div>
          <div className="ltn__blog-brief">
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-author">
                  {/* <a href="#"><i className="far fa-user" />by: Admin</a> */}
                </li>
                <li className="ltn__blog-tags">
                  <a href="#"><i className="fas fa-tags" />Estate</a>
                </li>
              </ul>
            </div>
            <h3 className="ltn__blog-title"><a href="#">Recent Commercial Real Estate Transactions</a></h3>
            <div className="ltn__blog-meta-btn">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />May 22, 2021</li>
                </ul>
              </div>
              <div className="ltn__blog-btn">
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Item */}
      <div className="col-lg-12">
        <div className="ltn__blog-item ltn__blog-item-3">
          <div className="ltn__blog-img">
            <a href="#"><img src="img/blog/4.jpg" alt="#" /></a>
          </div>
          <div className="ltn__blog-brief">
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-author">
                  {/* <a href="#"><i className="far fa-user" />by: Admin</a> */}
                </li>
                <li className="ltn__blog-tags">
                  <a href="#"><i className="fas fa-tags" />Room</a>
                </li>
              </ul>
            </div>
            <h3 className="ltn__blog-title"><a href="#">Renovating a Living Room? Experts Share Their Secrets</a></h3>
            <div className="ltn__blog-meta-btn">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
                </ul>
              </div>
              <div className="ltn__blog-btn">
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ScrollAnimation>
  </div>
</div>


{/* CLIENTS */}
<div className="ltn__img-slider-area d-mobile-none" id='clients'>
  <div className="container">
  <div className="row">
    <ScrollAnimation animateIn="fadeIn">
      <div className="col-lg-12 pt-4">
        <div className="section-title-area ltn__section-title-2--- text-center---">
          {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Upcoming Projects</h6> */}
          <h1 className="section-title text-center black-color">Clients</h1>
        </div>
      </div>
      </ScrollAnimation>
    </div>
    <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all pb-0">
      <div className="col-lg-1">
        <div className="ltn__img-slide-item-4 p-4">
          <a href="img/new/cx.jpg" data-rel="lightcase:myCollection">
            <img src="img/new/cx.jpg" alt="Image" />
          </a>
        </div>
      </div>
      
      <div className="col-lg-1">
      <div className="ltn__img-slide-item-4 p-4">
          <a href="img/new/c2.png" data-rel="lightcase:myCollection">
            <img src="img/new/c2.png" alt="Image" />
          </a>
        </div>
      </div>
      <div className="col-lg-1">
      <div className="ltn__img-slide-item-4 p-4">
          <a href="img/new/c0.png" data-rel="lightcase:myCollection">
            <img src="img/new/c0.png" alt="Image" />
          </a>
        </div>
      </div>
      <div className="col-lg-1">
      <div className="ltn__img-slide-item-4 p-4">
          <a href="img/new/c3.png" data-rel="lightcase:myCollection">
            <img src="img/new/c3.png" alt="Image" />
          </a>
        </div>
      </div>
      <div className="col-lg-1">
      <div className="ltn__img-slide-item-4 p-4">
          <a href="img/new/c7.jpg" data-rel="lightcase:myCollection">
            <img src="img/new/c7.jpg" alt="Image" />
          </a>
        </div>
      </div>
      <div className="col-lg-1">
      <div className="ltn__img-slide-item-4 p-4">
          <a href="img/new/c4.jpg" data-rel="lightcase:myCollection">
            <img src="img/new/c4.jpg" alt="Image" />
          </a>
        </div>
      </div>

    </div>
  </div>
</div>


  </div>
);
}
}

export default Homepage;
