
function Footer() {
  return (

    <footer className="ltn__footer-area" id="contact">
  <div className="footer-top-area  section-bg-1 plr--5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-4 col-md-6 col-sm-6 col-12">
          <div className="footer-widget footer-about-widget">
            <div className="footer-logo">
              <div className="site-logo">
                <img src="img/new/logonobg.png" alt="Logo" />
              </div>
            </div>
            <p>Feel free to contact us.</p>
            <div className="footer-address pt-10">
              <ul>
                <li>
                  <div className="footer-address-icon">
                    <i className="icon-placeholder" />
                  </div>
                  <div className="footer-address-info">
                  <a href="https://www.google.com/maps/dir/30.047652,31.4570441/Island+Agencies+%26+Services,+26+Aden+St,+Giza+Governorate/@30.029835,31.1855104,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14584136222ead29:0x60e0447f0acde3fa!2m2!1d31.1949225!2d30.0518536">26 Aden St., Shehab St. Mohandessin - Giza</a>
                  </div>
                </li>
                {/* <li>
                  <div className="footer-address-icon">
                    <i className="icon-call" />
                  </div>
                  <div className="footer-address-info">
                    <p><a href="tel:+201273890100">+(2) 012 - 7389- 0100</a></p>
                  </div>
                </li> */}
                <li>
                  <div className="footer-address-icon">
                    <i className="icon-mail" />
                  </div>
                  <div className="footer-address-info">
                    <p><a href="mailto:info@islandeg.com">info@islandeg.com</a></p>
                  </div>
                </li>
              </ul>
            </div>
            {/* <div className="ltn__social-media mt-20">
              <ul>
                <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                <li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-6 col-12">
          <div className="footer-widget footer-menu-widget clearfix">
            <h4 className="footer-title">QUICK LINKS</h4>
            <div className="footer-menu">
              <ul>
                <li><a href="#safety"> Health & Safety</a></li>
                <li><a href="#strengths">Strengths</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#news">News</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 col-sm-6 col-12">
          <div className="footer-widget footer-menu-widget clearfix">
            <h4 className="footer-title">CONTACT US</h4>
            <div className="footer-menu">
              <ul>
                <li><a href="tel:+20233356239">Landline - (+202) 333-562-39</a> &nbsp;
                    <a href="tel:+20233356238">- (+202) 333-562-38</a></li>
                <li><a href="#">Fax - (+202) 333-563-90</a></li>
                <li><a href="tel:+201273890100">Phone - (+20) 127 - 389 - 0100</a> &nbsp;
                    <a href="tel:+201223927306">- (+20) 122 - 392 - 7306</a></li>
                <li><a href="https://www.google.com/maps/dir/30.047652,31.4570441/Island+Agencies+%26+Services,+26+Aden+St,+Giza+Governorate/@30.029835,31.1855104,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14584136222ead29:0x60e0447f0acde3fa!2m2!1d31.1949225!2d30.0518536">Address - 26 Aden St., Shehab St. Mohandessin - Giza</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="col-xl-4 col-md-6 col-sm-6 col-12">
          <div className="footer-widget footer-menu-widget clearfix">
            <h4 className="footer-title">COMPANY</h4>
            <div className="footer-menu">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="https://www.google.com/maps/dir/30.047652,31.4570441/Island+Agencies+%26+Services,+26+Aden+St,+Giza+Governorate/@30.029835,31.1855104,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14584136222ead29:0x60e0447f0acde3fa!2m2!1d31.1949225!2d30.0518536">Locations Map</a></li>
                <li><a href="#">Fax - (+202) 333-563-90</a></li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* <div className="col-xl-3 col-md-6 col-sm-6 col-12">
          <a href="#">
          <div className="footer-widget footer-menu-widget clearfix">
            <img src="img/new/map.jpg" role="..." alt="..." className="map-img"/>
          </div>
          </a>
        </div> */}
      </div>
    </div>
  </div>
  <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
    <div className="container-fluid ltn__border-top-2">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="ltn__copyright-design clearfix">
            <p>All Rights Reserved &copy; Island <span className="current-year" /></p>
          </div>
        </div>
        {/* <div className="col-md-6 col-12 align-self-center">
          <div className="ltn__copyright-menu text-end">
            <ul>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy &amp; Policy</a></li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
