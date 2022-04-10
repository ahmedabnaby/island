function Navbar() {
  return (
      <div>
<header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4---">
  {/* ltn__header-middle-area start */}
  <div className="ltn__header-top-area section-bg-8 top-area-color-white---">
  <div className="container">
    <div className="row">
      <div className="col-md-7">
        <div className="ltn__top-bar-menu">
          <ul>
            <li><a href="mailto:info@islandeg.com?Subject=Greetings%20to%20you"><i className="icon-mail" /> info@islandeg.com</a></li>
            <li><a href="https://www.google.com/maps/dir/30.047652,31.4570441/Island+Agencies+%26+Services,+26+Aden+St,+Giza+Governorate/@30.029835,31.1855104,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14584136222ead29:0x60e0447f0acde3fa!2m2!1d31.1949225!2d30.0518536"><i className="icon-placeholder" /> 26 Aden St., Shehab St. Mohandessin - Giza</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-5">
        <div className="top-bar-right text-end">
          <div className="ltn__top-bar-menu">
            <ul>
              {/* <li className="d-none">
                <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                  <ul>
                    <li><a href="#" className="dropdown-toggle"><span className="active-currency">English</span></a>
                      <ul>
                        <li><a href="#">Arabic</a></li>
                        <li><a href="#">Bengali</a></li>
                        <li><a href="#">Chinese</a></li>
                        <li><a href="#">English</a></li>
                        <li><a href="#">French</a></li>
                        <li><a href="#">Hindi</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li> */}
              <li>
                {/* ltn__social-media */}
                {/* <div className="ltn__social-media">
                  <ul>
                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
                    <li><a href="#" title="Dribbble"><i className="fab fa-dribbble" /></a></li>
                  </ul>
                </div> */}
              </li>
            <li><a href="files/Website-portfolio-island-2022.pdf" download={true}><i className="icon-down-arrow" /> Download our portfolio</a></li>
              <li>
                {/* header-top-btn */}
                <div className="header-top-btn">
                  <a href="#contact">Contact Us</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="site-logo-wrap">
          <a href="#">
            <div className="site-logo">
              <img src="img/new/edited-logo.png" alt="Logo"/>
            </div>
            </a>
          </div>
        </div>
        <div className="col header-menu-column menu-color-white">
          <div className="header-menu d-none d-xl-block">
            <nav>
              <div className="ltn__main-menu">
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About us</a>
                  <ul className="nav-sub-menu">
                      <div className="row"> 
                      <div className="col">
                      <li><a href="#about">Mission</a></li>
                      </div>
                      <div className="col">
                      <li><a href="#about">Vision</a></li>
                      {/* <img src="img/new/4.jpg" /> */}
                      </div>
                      <div className="row">
                        <div className="col">
                          <img src="img/new/mision-vision.png" />
                        </div>
                      </div>
                    </div>
                    </ul>
                    </li>

                  <li><a href="#quality-controls">Quality Control</a>
                  {/* <ul className="nav-sub-menu">
                      <div className="row"> 
                      <div className="col">
                      <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#iso">ISO</a></li>
                      <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#iso"><img src="img/new/ISO.png" /></a>
                      </div>
                      <div className="col">
                      <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quality-control">Quality Control</a></li>
                      <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quality-control"><img src="img/new/quality.png" /></a>
                      </div>
                    </div>
                    </ul>*/}
                    </li> 

                  <li><a href="#safety">Safety</a>
                    {/* <ul className="nav-sub-menu">
                      <div className="row"> 
                      <div className="col">
                      <li><a href="#">Safety</a></li>
                      <img src="img/new/1.jpg" />
                      </div>
                      <div className="col">
                      <li><a href="#">Environment Management</a></li>
                      <img src="img/new/3.jpg" />
                      </div>
                    </div>
                    </ul> */}
                  </li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#clients">Clients</a></li>
                  <li><a href="files/Job-Application-Form.docx" download={true}>Careers</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="col--- ltn__header-options ltn__header-options-2 ">
          {/* Mobile Menu Button */}
          <div className="mobile-menu-toggle d-xl-none">
            <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
              <svg viewBox="0 0 800 600" style={{backgroundColor:'white'}}>
                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
                <path d="M300,320 L540,320" id="middle" />
                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ltn__header-middle-area end */}
</header>
{/* Utilize Mobile Menu Start */}
<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
    <div className="ltn__utilize-menu-inner ltn__scrollbar">
      <div className="ltn__utilize-menu-head">
        <div className="site-logo">
          <a href="#"><img src="img/new/edited-logo.png" alt="Logo" /></a>
        </div>
        <button className="ltn__utilize-close">×</button>
      </div>
      <div className="ltn__utilize-menu">
        <ul>
          <li><a href="#">Home</a>
          </li>
          <li><a href="#about">About us</a>
          <ul className="sub-menu">
              <li><a href="#about">Mission</a></li>
              <li><a href="#about">Vision</a></li>
            </ul>
          </li>
          
          <li><a href="#quality-controls">Quality Control</a>
          {/* <ul className="sub-menu">
              <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#iso">ISO</a></li>
              <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quality-control">Quality Control</a></li>
            </ul> */}
          </li>
          <li><a href="#safety">Health</a>
          </li>
          {/* <li><a href="#clients">Clients</a></li> */}

          <li><a href="#projects">Projects</a></li>

          <li><a href="#news">News</a></li>

          <li><a href="#">Careers</a></li>
          
        </ul>
      </div>
      {/* <div className="ltn__social-media-2">
        <ul>
          <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
          <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
          <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
          <li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
        </ul>
      </div> */}
    </div>
  </div>
  {/* Utilize Mobile Menu End */}
  <div className="ltn__utilize-overlay" />

  <div className="ltn__modal-area ltn__quick-view-modal-area">
  <div className="modal fade" id="quality-control" tabIndex={-1}>
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            {/* <i class="fas fa-times"></i> */}
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                {/* <div className="col-lg-6 col-12">
                  <div className="modal-product-img">
                    <img src="img/new/QC.jpg" alt="#" />
                  </div>
                </div> */}
                <div className="col-lg-12 col-12">
                  <div className="modal-product-info">
                    <h3>Quality Control</h3>
                    {/* <div className="product-price">
                      <span>$149.00</span>
                      <del>$165.00</del>
                    </div> */}
                    <div className="modal-product-meta ltn__product-details-menu-1">
                      <p>•ISLAND adopts an updated 
                          QA/QC system conforming to 
                          both local and international 
                          standards.
                          </p>
                          <p>
                          •ISLAND implements an 
                          advanced management 
                          system and planning techniques to optimize the usage 
                          of time and resource
                          </p>
                          <p>
                          •The management of Island Contracting CO. has a strict commitment to 
                            customer satisfaction through distinguished quality and punctual delivery of 
                            its projects.
                          </p>
                          <p>
                          •All jobs are subject to comply with the local and international relevant standards. 
                          Projects programs consider and refer to the latest publications of standards,
                           statutory and requirements in accordance with the project specifications as stipulated by the customer.
                          </p>
                          <p>
                          •All employees observe and practice the methods and procedures detailed in 
                          the company’s established quality and safety systems, and ensure to provide 
                          cost eff ective quality performance with timely completion of contracts.
                          </p>
                          <p>
                          •The organization encourages employees to develop new skills as technology 
                            change and improve work practices to ensure continual improvement.
                            The company engraves safety practices in everyone’s objectives, as it’s a compound responsibility by 
                            all employees to achieve the standards set by the business.
                          </p>
                          <p>•Our Quality Policy is implemented and understood by all levels through the 
                              Quality Procedures, operating and maintaining Island Contracting CO.
                              Quality System in compliance with ISO 9001:2000 requirements.
                          </p>

                      {/* <ul>
                        <li>
                          <strong>Categories:</strong> 
                          <span>
                            <a href="#">Parts</a>
                            <a href="#">Car</a>
                            <a href="#">Seat</a>
                            <a href="#">Cover</a>
                          </span>
                        </li>
                      </ul> */}
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ltn__modal-area ltn__quick-view-modal-area">
  <div className="modal fade" id="iso" tabIndex={-1}>
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            {/* <i class="fas fa-times"></i> */}
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                {/* <div className="col-lg-6 col-12">
                  <div className="modal-product-img">
                    <img src="img/new/QC.jpg" alt="#" />
                  </div>
                </div> */}
                <div className="col-lg-12 col-12 iso-img">
                  <div className="modal-product-info">
                    <h3>ISO 9001:2008</h3>
                    
                     <img src="img/new/full-iso.png" role="..."/>

                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ltn__modal-area ltn__quick-view-modal-area">
  <div className="modal fade" id="hr" tabIndex={-1}>
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            {/* <i class="fas fa-times"></i> */}
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                {/* <div className="col-lg-6 col-12">
                  <div className="modal-product-img">
                    <img src="img/new/QC.jpg" alt="#" />
                  </div>
                </div> */}
                <div className="col-lg-12 col-12 iso-img">
                  <div className="modal-product-info">
                    {/* <h3>ISO 9001:2008</h3> */}
                    
                     <img src="img/new/hr.png" role="..."/>

                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ltn__modal-area ltn__quick-view-modal-area">
  <div className="modal fade" id="bd" tabIndex={-1}>
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            {/* <i class="fas fa-times"></i> */}
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                {/* <div className="col-lg-6 col-12">
                  <div className="modal-product-img">
                    <img src="img/new/QC.jpg" alt="#" />
                  </div>
                </div> */}
                <div className="col-lg-12 col-12 iso-img">
                  <div className="modal-product-info">
                    {/* <h3>ISO 9001:2008</h3> */}
                    
                     <img src="img/new/bd.png" role="..."/>

                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="ltn__modal-area ltn__quick-view-modal-area">
  <div className="modal fade" id="mission" tabIndex={-1}>
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            {/* <i class="fas fa-times"></i> */}
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                {/* <div className="col-lg-6 col-12">
                  <div className="modal-product-img">
                    <img src="img/new/QC.jpg" alt="#" />
                  </div>
                </div> */}
                <div className="col-lg-12 col-12">
                  <div className="modal-product-info">
                    {/* <h3>ISO 9001:2008</h3> */}
                    
                     <img src="img/new/mission.png" className="mission-img" role="..."/>

                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="ltn__modal-area ltn__quick-view-modal-area">
  <div className="modal fade" id="vision" tabIndex={-1}>
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            {/* <i class="fas fa-times"></i> */}
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                {/* <div className="col-lg-6 col-12">
                  <div className="modal-product-img">
                    <img src="img/new/QC.jpg" alt="#" />
                  </div>
                </div> */}
                <div className="col-lg-12 col-12">
                  <div className="modal-product-info">
                    {/* <h3>ISO 9001:2008</h3> */}
                    
                     <img src="img/new/vision.png" className="vision-img" role="..."/>

                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="ltn__modal-area ltn__quick-view-modal-area">
  <div className="modal fade" id="values" tabIndex={-1}>
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            {/* <i class="fas fa-times"></i> */}
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                {/* <div className="col-lg-6 col-12">
                  <div className="modal-product-img">
                    <img src="img/new/QC.jpg" alt="#" />
                  </div>
                </div> */}
                <div className="col-lg-12 col-12">
                  <div className="modal-product-info">
                    {/* <h3>ISO 9001:2008</h3> */}
                    
                     <img src="img/new/values.png" className="values-img" role="..."/>

                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ltn__modal-area ltn__quick-view-modal-area">
  <div className="modal fade" id="strengths-modal" tabIndex={-1}>
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            {/* <i class="fas fa-times"></i> */}
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                {/* <div className="col-lg-6 col-12">
                  <div className="modal-product-img">
                    <img src="img/new/QC.jpg" alt="#" />
                  </div>
                </div> */}
                <div className="col-lg-12 col-12">
                  <div className="modal-product-info">
                    {/* <h3>ISO 9001:2008</h3> */}
                    
                     <img src="img/new/strengths.png" className="vision-img" role="..."/>

                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ltn__modal-area ltn__quick-view-modal-area">
  <div className="modal fade" id="chart" tabIndex={-1}>
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            {/* <i class="fas fa-times"></i> */}
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                {/* <div className="col-lg-6 col-12">
                  <div className="modal-product-img">
                    <img src="img/new/QC.jpg" alt="#" />
                  </div>
                </div> */}
                <div className="col-lg-12 col-12">
                  <div className="modal-product-info">
                    {/* <h3>ISO 9001:2008</h3> */}
                    
                     <img src="img/new/company-chart1.png" role="..."/>

                      
                  </div>
                </div>
                <div className="col-lg-12 col-12">
                  <div className="modal-product-info">
                    {/* <h3>ISO 9001:2008</h3> */}
                    
                     <img src="img/new/company-chart2.png" role="..."/>

                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ltn__modal-area ltn__quick-view-modal-area">
  <div className="modal fade" id="bv" tabIndex={-1}>
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            {/* <i class="fas fa-times"></i> */}
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                {/* <div className="col-lg-6 col-12">
                  <div className="modal-product-img">
                    <img src="img/new/QC.jpg" alt="#" />
                  </div>
                </div> */}
                <div className="col-lg-12 col-12">
                  <div className="modal-product-info">
                    {/* <h3>ISO 9001:2008</h3> */}
                    
                     <img src="img/new/TT.png" role="..."/>

                      
                  </div>
                </div>
                <div className="col-lg-12 col-12">
                  <div className="modal-product-info">
                    {/* <h3>ISO 9001:2008</h3> */}
                    
                     <img src="img/new/UU.png" role="..."/>

                      
                  </div>
                </div>
              </div>
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

export default Navbar;
