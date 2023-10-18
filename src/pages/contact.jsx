import { BiCurrentLocation, BiLogoGmail, BiPhone } from "react-icons/bi";
import { NavBar } from "../navBar/navBar";
import { useEffect } from "react";
import EmailContactForm from "../components/sendEmail";

export const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return (
    <div className="">
      <NavBar />
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <center>
              <h2>Contact Us</h2>
            </center>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0843604326687!2d7.437584774934372!3d9.05606969100633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b3302c334c5%3A0xb231c03d57f4ed07!2sNationwide%20Estate%2C%20Utako%20900108%2C%20Ankuru%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1695346637768!5m2!1sen!2sng"
            frameborder="0"
            allowfullscreen
            title="t"
          ></iframe>
        </div>
        {/* <!-- End Google Maps --> */}

        <div className="container">
          <div className="row gy-5 gx-lg-5">
            <div className="col-lg-4">
              <div className="info">
                <h3>Get in touch</h3>
                <p>get in touch with our team of highly trained professionls</p>

                <div className="info-item d-flex">
                  <i className="">
                    <BiCurrentLocation />
                  </i>
                  <div>
                    <h4>Location:</h4>
                    <p>
                      BLOCK C FLAT 5 NATIONWIDE ESTATE DIMEJI BANKOLE STREET
                      WUYE ABUJA
                    </p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="">
                    <BiLogoGmail />
                  </i>
                  <div>
                    <h4>Email:</h4>
                    <p>yndiconnectnigltd@gmail.com</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="">
                    <BiPhone />
                  </i>
                  <div>
                    <h4>Call:</h4>
                    <p>(+234) 0803080805200, 08023582727</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
              </div>
            </div>

            <div className="col-lg-8">
              <center>
                <h4>Send us an email</h4>
              </center>
              <EmailContactForm />
            </div>
            {/* <!-- End Contact Form --> */}
          </div>
        </div>
      </section>
    </div>
  );
};
