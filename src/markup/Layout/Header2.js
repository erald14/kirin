import React, { Component } from "react";
import { Link } from "react-router-dom";

// import {} from 'react-router-dom'
import { AppContext } from "../../context/AppContext";
import LanguangeSwitch from "../../features/internalisation/components/LanguangeSwitch";

class Header2 extends Component {
  static contextType = AppContext;

  componentDidMount() {
    // sidebar open/close

    var btn = document.querySelector(".navicon");
    var aaa = document.querySelector(".myNavbar ");

    function toggleFunc() {
      return aaa.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Sidenav li open close
    var navUl = [].slice.call(document.querySelectorAll(".navbar-nav > li"));
    for (var y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    function checkLi(current) {
      navUl.forEach(el => el.classList.remove("open"));
      current.classList.add("open");
    }
  }
  render() {
    const { config } = this.context;
    const { routes } = config;
    return (
      <header className="site-header mo-left header header-2">
        <div className="sticky-header navbar-expand-lg main-bar-wraper">
          <div className="main-bar clearfix onepage">
            <div
              // style={{ backgroundColor: "lightblue" }}
              className="container-fluid clearfix"
            >
              <div
                style={{ width: "auto", maxWidth: "auto", padding: 5 }}
                className="logo-header mostion"
              >
                <Link to={routes.home.route}>
                  <img src={config.logo} alt="" />
                </Link>
                <div className="kirin-center-title">
                  <div className="kirin-h1">TRAVEL AND TOURS</div>
                </div>
              </div>

              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>



              <div className="extra-nav desktop-lang-switch">
                <div className="extra-cell">
                  <LanguangeSwitch />
                </div>
              </div>

              <div className="extra-nav">
                <div className="extra-cell">
                  {/* <button id="quik-search-btn" type="button" className="site-button outline black"><i className="fa fa-search"></i></button> */}
                  <Link to={"./hotel"} className="site-button outline m-l5">
                    Book Now
                  </Link>
                </div>
              </div>


              <div className="dlab-quik-search bg-primary search-style-1">
                <form action="#">
                  <input
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Type to search"
                  />
                  <span id="quik-search-remove">
                    <i className="ti-close"></i>
                  </span>
                </form>
              </div>

              <div
                className="header-nav navbar-collapse collapse navbar myNavbar justify-content-center"
                id="navbarNavDropdown"
              >
                <ul className="nav navbar-nav">
                  {" "}
                  <li className="active"></li>
                  <li>
                    <Link to={routes.home.route} className="dez-page">
                      {routes.home.display}
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      {" "}
                      Pages <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"./about"} className="dez-page">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to={"./listing"} className="dez-page">
                          Listing <span class="new-page menu-new">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"./hotel"}>Hotels</Link>
                      </li>
                      <li>
                        <Link to={"./booking"}>Booking Details</Link>
                      </li>
                      <li>
                        <Link to={"./place"}>Places</Link>
                      </li>
                      <li>
                        <Link to={"./packages"}>Packages</Link>
                      </li>
                      <li>
                        <Link to={"./error"} className="dez-page">
                          Error 404
                        </Link>
                      </li>
                      <li>
                        <Link to={"./login"} className="dez-page">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to={"./register"} className="dez-page">
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link to={"./register2"} className="dez-page">
                          Register <span class="new-page menu-new">New</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={""}>
                      Hotels <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"hotel"} className="dez-page">
                          Hotel
                        </Link>
                      </li>
                      <li>
                        <Link to={"hotelbooking"} className="dez-page">
                          Hotel Booking
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={""}>
                      Blog <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"blogclassic"} className="dez-page">
                          Classic
                        </Link>
                      </li>
                      <li>
                        <Link to={"blogclassicsidebar"} className="dez-page">
                          Classic Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={"bloggrid"} className="dez-page">
                          Detailed Grid
                        </Link>
                      </li>
                      <li>
                        <Link to={"bloggridsidebar"} className="dez-page">
                          Detailed Grid Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={"blogleftsidebar"} className="dez-page">
                          Left Image Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={"blogdetails"} className="dez-page">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={routes.gallery.route} className="dez-page">
                      {routes.gallery.display}
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.about.route} className="dez-page">
                      {routes.about.display}
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.contact.route} className="dez-page">
                      {routes.contact.display}
                    </Link>
                  </li>
                  {/*Mobile language selector*/}
                  <li className="mobile-lang-switch">
                    <LanguangeSwitch />
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header2;
