import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/pages/contact.css";

const Contact = () => {
  return (
    <div className="cont2">
      <div className="nabvar-first-appear">
        <Navbar />
      </div>
      <section className="contact-img">
        <h1 className="contact-header1">Reach us</h1>
      </section>
      <section className="contact-address-area">
        <div className="container">
          <div className="sec-title-style1 text-center max-width">
            <div className="title">Contact Us</div>
            <div className="text">
              <div className="decor-left">
                <span></span>
              </div>
              <p>Quick Contact</p>
              <div className="decor-right">
                <span></span>
              </div>
            </div>
            <div className="bottom-text">
              <p>
                Wealth Analytica allows our clients to quickly engage through
                social media with insightful client information designed to
                enhance your organic growth.
              </p>
            </div>
          </div>
          <div className="contact-address-box row">
            <div className="col-sm-4 single-contact-address-box text-center">
              <div className="icon-holder">
                <span className="icon-clock-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                  <span className="path5"></span>
                  <span className="path6"></span>
                  <span className="path7"></span>
                  <span className="path8"></span>
                  <span className="path9"></span>
                  <span className="path10"></span>
                  <span className="path11"></span>
                  <span className="path12"></span>
                  <span className="path13"></span>
                  <span className="path14"></span>
                  <span className="path15"></span>
                  <span className="path16"></span>
                  <span className="path17"></span>
                  <span className="path18"></span>
                  <span className="path19"></span>
                  <span className="path20"></span>
                </span>
              </div>
              <h3 className="contact-h3">Call us</h3>
              <h2 className="contact-h2">anytime during Office Hours</h2>
            </div>
            <div className="col-sm-4 single-contact-address-box main-branch">
              <h3 className="contact-h3">CAN REACH US HERE</h3>
              <div className="inner">
                <ul className="contact-ul">
                  <li>
                    <div className="title">
                      <h4 className="contact-h4">Address:</h4>
                    </div>
                    <div className="text">
                      <p>
                        2828 Connecticut Avenue,
                        <br /> NW Washington DC 20008
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="title">
                      <h4 className="contact-h4">Phone:</h4>
                    </div>
                    <div className="text">
                      <p>
                        +1 (516) 732 3364
                        <br /> +359 878 880 564
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="title">
                      <h4 className="contact-h4">Office Hrs:</h4>
                    </div>
                    <div className="text">
                      <p>
                        Mon-Fri: 9:30am - 6:30pm
                        <br /> Sat-Sun: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 single-contact-address-box text-center">
              <div className="icon-holder">
                <span className="icon-question-2">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <h3 className="contact-h3">Email us</h3>
              <h2 className="contact-h2">anytime during the whole week</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="contact-form">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="sec-title-style1 float-left">
                      <div className="title">Send Your Message</div>
                      <div className="text">
                        <div className="decor-left">
                          <span></span>
                        </div>
                        <p>Contact Form</p>
                      </div>
                    </div>
                    <div className="text-box float-right">
                      <p>
                        Email us and we will try to answer as soon as possible
                        to your question or offer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="inner-box">
                  <form
                    id="contact-form"
                    name="contact_form"
                    className="default-form"
                    action="inc/sendmail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-12">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="input-box">
                              <input
                                type="text"
                                name="form_name"
                                value=""
                                placeholder="Name"
                                required=""
                              />
                            </div>
                            <div className="input-box">
                              <input
                                type="text"
                                name="form_phone"
                                value=""
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="input-box">
                              <input
                                type="email"
                                name="form_email"
                                value=""
                                placeholder="Email"
                                required=""
                              />
                            </div>
                            <div className="input-box">
                              <input
                                type="text"
                                name="form_company"
                                value=""
                                placeholder="Company"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="input-box">
                              <input
                                type="text"
                                name="form_subject"
                                value=""
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <div className="input-box">
                          <textarea
                            name="form_message"
                            placeholder="Your Message..."
                            required=""
                          ></textarea>
                        </div>
                        <div className="button-box">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                            value=""
                          />
                          <button
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            Send Message<span className="flaticon-next"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
