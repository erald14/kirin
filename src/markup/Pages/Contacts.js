import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleMaps from "simple-react-google-maps";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { AppContext } from "../../context/AppContext";
var bg3 = require("./../../images/banner/bnr1.jpg");
class Contacts extends Component {
  static contextType = AppContext;
  render() {
    const { config, data } = this.context;
    let contactData = data.pages.contact;
    const {
      pages: { contact }
    } = config;

    return (
      <div>
        {/*               
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Blog Classic</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Home</Link></li>
                                    <li>Blog Classic</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
        <div className="section-full content-inner bg-white contact-style-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                <div className="p-a30 border m-b30 contact-area border-1 align-self-stretch ">
                  <h4 className="m-b10">{contactData.quick_contact_title}</h4>
                  <p>{contactData.quick_contact_subtitle}</p>
                  <ul className="no-margin">
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs border-1">
                        {" "}
                        <Link className="icon-cell">
                          <i className="ti-location-pin"></i>
                        </Link>{" "}
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">
                          {contactData.address}
                        </h6>
                        <p>{contact.address}</p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left  m-b30">
                      <div className="icon-bx-xs border-1">
                        {" "}
                        <Link className="icon-cell">
                          <i className="ti-email"></i>
                        </Link>{" "}
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">
                          Email:
                        </h6>
                        <p>{contact.email}</p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left">
                      <div className="icon-bx-xs border-1">
                        {" "}
                        <Link className="icon-cell">
                          <i className="ti-mobile"></i>
                        </Link>{" "}
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">
                          {contactData.phone}
                        </h6>
                        <p>{contact.phone}</p>
                      </div>
                    </li>
                  </ul>
                  <div className="m-t20">
                    <ul className="dlab-social-icon dlab-social-icon-lg">
                      {contact.facebook !== "0" && (
                        <li>
                          <a
                            href={contact.facebook}
                            className="fa fa-facebook bg-primary"
                          ></a>
                        </li>
                      )}
                      {contact.instagram !== "0" && (
                        <li>
                          <a
                            href={contact.instagram}
                            className="fa fa-instagram bg-primary"
                          ></a>
                        </li>
                      )}
                      {contact.twitter !== "0" && (
                        <li>
                          <a
                            href={contact.twitter}
                            className="fa fa-twitter bg-primary"
                          ></a>
                        </li>
                      )}
                      {contact.linkedin !== "0" && (
                        <li>
                          <a
                            href={contact.linkedin}
                            className="fa fa-linkedin bg-primary"
                          ></a>
                        </li>
                      )}
                      {contact.pinterest !== "0" && (
                        <li>
                          <a
                            href={contact.pinterest}
                            className="fa fa-pinterest bg-primary"
                          ></a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="p-a30 m-b30 	bg-gray clearfix">
                  <h4>{contactData.send_message}</h4>
                  <div className="dzFormMsg"></div>
                  <form
                    method="post"
                    className="dzForm"
                    action="script/contact.php"
                  >
                    <input type="hidden" value="Contact" name="dzToDo" />
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              name="dzName"
                              type="text"
                              required
                              className="form-control"
                              placeholder={contactData.your_name}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              name="dzEmail"
                              type="email"
                              className="form-control"
                              required
                              placeholder={contactData.your_email}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <textarea
                              name="dzMessage"
                              rows="4"
                              className="form-control"
                              required
                              placeholder={contactData.your_message}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <div
                              className="g-recaptcha"
                              data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                              data-callback="verifyRecaptchaCallback"
                              data-expired-callback="expiredRecaptchaCallback"
                            ></div>
                            <input
                              className="form-control d-none"
                              data-recaptcha="true"
                              data-error="Please complete the Captcha"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="site-button "
                        >
                          {" "}
                          <span>{data.global.submit}</span>{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 d-lg-flex m-b30">
                <GoogleMaps
                  apiKey={"Your Google Api Key"}
                  style={{ height: "500px", width: "100%" }}
                  zoom={6}
                  center={{ lat: 37.4224764, lng: -122.0842499 }}
                  markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contacts;
