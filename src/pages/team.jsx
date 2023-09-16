import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { useState } from "react";
import { NavBar } from "../navBar/navBar";
import { Footer } from "../navBar/footer";

export const Team = () => {
  const img = require("../images/pro.jpg");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    AOS.init();
    document.title = "Our Team";
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading === true ? (
        <>
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </>
      ) : (
        <>
          <NavBar />
          <section id="team" className="team mt-5">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <center>
                  <h2>Our Team</h2>
                </center>
              </div>
              <div className="row gy-5 mt-5">
                <div
                  className="col-xl-4 col-md-6 d-flex"
                  data-aos="zoom-in"
                  data-aos-delay={600}
                >
                  <div className="team-member">
                    <div className="member-img">
                      <img src={img} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <div className="social">
                        <span className="s-icons">
                          <BiLogoTwitter />
                        </span>
                        <span className="s-icons">
                          <BiLogoFacebook />
                        </span>
                        <span className="s-icons">
                          <BiLogoInstagram />
                        </span>
                        <span className="s-icons">
                          <BiLogoLinkedin />
                        </span>
                      </div>
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </>
  );
};
