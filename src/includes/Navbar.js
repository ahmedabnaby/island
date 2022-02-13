function Navbar() {
  return (
      <div>
<header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4---">
  {/* ltn__header-middle-area start */}
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
                  <li><a href="#about">About</a>
                  <ul className="nav-sub-menu">
                      <div className="row"> 
                      <div className="col">
                      <li><a href="#about">Mission</a></li>
                      {/* <img src="img/new/mision-vision.png" /> */}
                      </div>
                      <div className="col">
                      <li><a href="#about">Vision</a></li>
                      {/* <img src="img/new/4.jpg" /> */}
                      </div>
                    </div>
                    </ul>
                    </li>

                  <li><a href="#strength">Strengths</a>
                  <ul className="nav-sub-menu">
                      <div className="row"> 
                      <div className="col">
                      <li><a href="#strength">ISO</a></li>
                      <img src="img/new/ISO.png" />
                      </div>
                      {/* <div className="col">
                      <li><a href="#">Quality Control</a></li>
                      <img src="img/new/4.jpg" />
                      </div> */}
                    </div>
                    </ul></li>

                  <li><a href="#saftey">Saftey</a>
                    {/* <ul className="nav-sub-menu">
                      <div className="row"> 
                      <div className="col">
                      <li><a href="#">Saftey</a></li>
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
                  <li><a href="#careers">Careers</a></li>
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
          <a href="index.html"><img src="img/new/edited-logo.png" alt="Logo" /></a>
        </div>
        <button className="ltn__utilize-close">×</button>
      </div>
      <div className="ltn__utilize-menu">
        <ul>
          <li><a href="#">Home</a>
            {/* <ul className="sub-menu">
              <li><a href="index.html">Home Style 01</a></li>
              <li><a href="index-2.html">Home Style 02</a></li>
              <li><a href="index-3.html">Home Style 03</a></li>
              <li><a href="index-4.html">Home Style 04</a></li>
              <li><a href="index-5.html">Home Style 05  <span className="menu-item-badge">video</span></a></li>
              <li><a href="index-6.html">Home Style 06</a></li>
              <li><a href="index-7.html">Home Style 07</a></li>
              <li><a href="index-8.html">Home Style 08</a></li>
              <li><a href="index-9.html">Home Style 09</a></li>
              <li><a href="index-10.html">Home Style 10 <span className="menu-item-badge">Map</span></a></li>
              <li><a href="index-11.html">Home Style 11</a></li>
            </ul> */}
          </li>
          <li><a href="#about">About</a>
          </li>
          
          <li><a href="#strengths">Strength</a>
          </li>
          <li><a href="#saftey">Health</a>
          </li>
          <li><a href="#clients">Clients</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#">News</a></li>

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
</div>
  );
}

export default Navbar;
