import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/pages/contact.css";

const Contact = () => {
  return (
    <div class="cont2">
      <div className="nabvar-first-appear">
        <Navbar />
      </div>
      <section className="contact-img">
        <h1 className="contact-header1">Reach us</h1>
      </section>
      <section class="contact-address-area">
        <div class="container">
          <div class="sec-title-style1 text-center max-width">
            <div class="title">Contact Us</div>
            <div class="text">
              <div class="decor-left">
                <span></span>
              </div>
              <p>Quick Contact</p>
              <div class="decor-right">
                <span></span>
              </div>
            </div>
            <div class="bottom-text">
              <p>
                Wealth Analytica allows our clients to quickly engage through
                social media with insightful client information designed to
                enhance your organic growth.
              </p>
            </div>
          </div>
          <div class="contact-address-box row">
            <div class="col-sm-4 single-contact-address-box text-center">
              <div class="icon-holder">
                <span class="icon-clock-1">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                  <span class="path5"></span>
                  <span class="path6"></span>
                  <span class="path7"></span>
                  <span class="path8"></span>
                  <span class="path9"></span>
                  <span class="path10"></span>
                  <span class="path11"></span>
                  <span class="path12"></span>
                  <span class="path13"></span>
                  <span class="path14"></span>
                  <span class="path15"></span>
                  <span class="path16"></span>
                  <span class="path17"></span>
                  <span class="path18"></span>
                  <span class="path19"></span>
                  <span class="path20"></span>
                </span>
              </div>
              <h3 className="contact-h3">Call us</h3>
              <h2 className="contact-h2">anytime during Office Hours</h2>
            </div>
            <div class="col-sm-4 single-contact-address-box main-branch">
              <h3 className="contact-h3">CAN REACH US HERE</h3>
              <div class="inner">
                <ul className="contact-ul">
                  <li>
                    <div class="title">
                      <h4 className="contact-h4">Address:</h4>
                    </div>
                    <div class="text">
                      <p>
                        2828 Connecticut Avenue,
                        <br /> NW Washington DC 20008
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4 className="contact-h4">Phone:</h4>
                    </div>
                    <div class="text">
                      <p>
                        +1 (516) 732 3364
                        <br /> +359 878 880 564
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4 className="contact-h4">Office Hrs:</h4>
                    </div>
                    <div class="text">
                      <p>
                        Mon-Fri: 9:30am - 6:30pm
                        <br /> Sat-Sun: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4 single-contact-address-box text-center">
              <div class="icon-holder">
                <span class="icon-question-2">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </span>
              </div>
              <h3 className="contact-h3">Email us</h3>
              <h2 className="contact-h2">anytime during the whole week</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-info-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="contact-form">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="sec-title-style1 float-left">
                      <div class="title">Send Your Message</div>
                      <div class="text">
                        <div class="decor-left">
                          <span></span>
                        </div>
                        <p>Contact Form</p>
                      </div>
                    </div>
                    <div class="text-box float-right">
                      <p>
                        Email us and we will try to answer as soon as possible
                        to your question or offer.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="inner-box">
                  <form
                    id="contact-form"
                    name="contact_form"
                    class="default-form"
                    action="inc/sendmail.php"
                    method="post"
                  >
                    <div class="row">
                      <div class="col-xl-6 col-lg-12">
                        <div class="row">
                          <div class="col-xl-6">
                            <div class="input-box">
                              <input
                                type="text"
                                name="form_name"
                                value=""
                                placeholder="Name"
                                required=""
                              />
                            </div>
                            <div class="input-box">
                              <input
                                type="text"
                                name="form_phone"
                                value=""
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="input-box">
                              <input
                                type="email"
                                name="form_email"
                                value=""
                                placeholder="Email"
                                required=""
                              />
                            </div>
                            <div class="input-box">
                              <input
                                type="text"
                                name="form_company"
                                value=""
                                placeholder="Company"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-xl-12">
                            <div class="input-box">
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
                      <div class="col-xl-6 col-lg-12">
                        <div class="input-box">
                          <textarea
                            name="form_message"
                            placeholder="Your Message..."
                            required=""
                          ></textarea>
                        </div>
                        <div class="button-box">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            class="form-control"
                            type="hidden"
                            value=""
                          />
                          <button
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            Send Message<span class="flaticon-next"></span>
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
