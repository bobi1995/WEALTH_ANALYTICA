import React from "react";
import Navbar from "../Navbar";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div
        className="slide"
        id="slide5"
        data-slide="5"
        data-stellar-background-ratio="0.5"
      >
        <div className="container clearfix">
          <div
            className="content grid_2 contactype active"
            id="contact-mapClick"
          >
            <div className="icon-map"></div>
            <p>Map</p>
          </div>
          <div className="content grid_2 contactype" id="contact-carClick">
            <div className="icon-car"></div>
            <p>Car</p>
          </div>
          <div className="content grid_2 contactype" id="contact-busClick">
            <div className="icon-bus"></div>
            <p>Bus</p>
          </div>

          <div className="content grid_2 contactype" id="contact-bikeClick">
            <div className="icon-bike-2"></div>
            <p>Bicycle</p>
          </div>
          <div className="content grid_2 contactype" id="contact-phoneClick">
            <div className="icon-phone"></div>
            <p>Telephone</p>
          </div>
          <div
            className="content grid_2 contactype omega"
            id="contact-mailClick"
          >
            <div className="icon-mail"></div>
            <p>E-Mail</p>
          </div>

          <div className="content grid_12 contactmap" id="contact-map">
            <div className="grid_4">
              <h2>CONTACT</h2>
              <p className="information">
                <span className="icon-location"> ADRESS: </span>Maecenas
                faucibus mollis interdum.
              </p>
              <p className="information">
                <span className="icon-phone-2"> TELEPHONE: </span> 0 (123) 456
                789
              </p>
              <a
                className="btn"
                href="https://goo.gl/maps/8GlbZ"
                target="_blank"
              >
                Get Direction
              </a>
              <div className="clear"></div>
            </div>
            <div className="grid_8 omega">
              <div id="map_canvas"></div>
            </div>
          </div>

          <div className="content grid_12 contactmap dn" id="contact-car">
            <div className="grid_4">
              <h2>CAR</h2>
              <p className="information">
                <span className="icon-location"> ADRESS: </span>Maecenas
                faucibus mollis interdum.
              </p>
              <br />
              <br />
              <div className="btn">
                <span className="icon-checkmark"></span> Car Park
              </div>
            </div>
            <div className="grid_8 omega">
              <div className="grid_6 omega">
                <strong>Lorem ipsum</strong> Nulla vitae elit libero, a pharetra
                augue. Integer posuere erat a ante venenatis dapibus posuere
                velit aliquet. Donec sed odio dui. Nullam quis risus eget urna
                mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus.
                <a
                  className="btn"
                  href="https://goo.gl/maps/8GlbZ"
                  target="_blank"
                >
                  Get Direction
                </a>
              </div>
            </div>
          </div>

          <div className="content grid_12 contactmap dn" id="contact-bus">
            <div className="grid_4">
              <h2>BUS</h2>
              <p className="information">
                <span className="icon-location"> ADRESS: </span>Maecenas
                faucibus mollis interdum.
              </p>
              <br />
              <br />
              <div className="btn">
                <span className="icon-checkmark"></span> OTOPARK MEVCUT
              </div>
            </div>
            <div className="grid_8 omega">
              <div className="grid_6 omega" id="scroll2">
                Sed posuere consectetur est at lobortis. Donec ullamcorper nulla
                non metus auctor fringilla. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa
                justo sit amet risus. Maecenas sed diam eget risus varius
                blandit sit amet non magna. Maecenas sed diam eget risus varius
                blandit sit amet non magna. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem
                lacinia quam venenatis vestibulum. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Sed
                posuere consectetur est at lobortis. Etiam porta sem malesuada
                magna mollis euismod. Sed posuere consectetur est at lobortis.
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Donec ullamcorper nulla non metus auctor fringilla.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam
                eget risus varius blandit sit amet non magna. Curabitur blandit
                tempus porttitor. Sed posuere consectetur est at lobortis.
              </div>
            </div>
          </div>

          <div className="content grid_12 contactmap dn" id="contact-bike">
            <div className="grid_4">
              <h2>BIKE</h2>
              <p className="information">
                <span className="icon-location"> ADRESS: </span>Maecenas
                faucibus mollis interdum.
              </p>
              <br />
              <br />
              <div className="btn">
                <span className="icon-checkmark"></span> BİSİKLETLİK MEVCUT
              </div>
            </div>
            <div className="grid_8 omega">
              <div className="grid_6 omega">
                <span className="icon-calendar">
                  {" "}
                  Maecenas faucibus mollis interdum.
                </span>
              </div>
            </div>
          </div>

          <div className="content grid_12 contactmap dn" id="contact-phone">
            <div className="grid_4">
              <h2>TELEPHONE</h2>
              <p className="information">
                <span className="icon-location"> ADRESS: </span>Maecenas
                faucibus mollis interdum.
              </p>
            </div>
            <div className="grid_8 omega">
              <div className="grid_6 omega">0 (123) 456 789</div>
            </div>
          </div>

          <div className="content grid_12 contactmap dn" id="contact-mail">
            <div className="grid_4">
              <h2>E-MAIL</h2>
              <p className="information">
                <span className="icon-location"> ADRESS: </span>Maecenas
                faucibus mollis interdum.
              </p>
            </div>
            <div className="grid_8 omega">
              <div className="grid_6 omega">
                <a
                  href="mailto:mail@loremipsum.com?Subject=Hello"
                  className="btn"
                >
                  mail@loremipsum.com
                </a>
              </div>
            </div>
          </div>

          <div className="clear"></div>

          <footer className="content grid_12">
            <div className="btn2">&copy; Copyright</div>
            <hr />
          </footer>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
