import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { NavBar } from "../navBar/navBar";
import { Footer } from "../navBar/footer";
import { Link } from "react-router-dom";
export const Home = () => {
  const catering = require("../images/img1.jpg");
  const pic2 = require("../images/img2.jpg");
  const pic3 = require("../images/img3.jpg");
  const fashion = require("../images/fashion.png");
  const skill_aquisition = require("../images/skill.jpg");
  const oil = require("../images/Oil-and-Gas.jpg");
  const repairs = require("../images/maintenance-technician.jpeg");

  // const constructionImg = require("../images/construction.png");

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    AOS.init();
    document.title = "home";
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading === true ? (
        <>
          <div class="spinner-wrapper">
            <div class="spinner">
              <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <NavBar />
          <div className="k">
            <section className="welcome">
              <div
                className="welcome-container"
                data-aos="zoom-in"
                data-aos-delay={600}
              >
                <center>
                  <span className="welcome-text">
                    Welcome To
                    <span style={{ color: "green", fontStyle: "italic" }}>
                      Y & I CONNECTS NIG LTD
                    </span>
                  </span>
                  <br />
                  <span className="mt-5 subtext">
                    At Y & I CONNECTS NIG LTD, we bridge the future with
                    innovation, commitment, and unparalleled service. From the
                    foundational bricks of infrastructure to the vast expanses
                    of the digital realm, our expertise spans a diverse range of
                    sectors, ensuring that our clients receive holistic
                    solutions tailored to their unique needs.
                  </span>
                  <br />

                  <div className="btn btn-primary mt-5">
                    <Link
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: "20px",
                      }}
                      to="/our-services"
                    >
                      Our Services
                    </Link>
                  </div>
                </center>
              </div>
            </section>
            <div className="">
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={repairs} alt="Swiper" />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "-100px",
                      zIndex: "9999",
                      fontSize: "35px",
                      color: "white",
                    }}
                  >
                    Repairs and maintenance and ICT Consultancy services
                  </p>
                </SwiperSlide>

                <SwiperSlide>
                  <img src={oil} alt="Swiper" />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "-100px",
                      zIndex: "9999",
                      fontSize: "35px",
                      color: "white",
                    }}
                  >
                    Oil and Gas import and export services
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fashion} alt="Swiper" />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "-100px",
                      zIndex: "9999",
                      fontSize: "35px",
                      color: "white",
                    }}
                  >
                    Design and fashion training{" "}
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={catering} alt="Swiper" />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "-100px",
                      zIndex: "9999",
                      fontSize: "35px",
                      color: "white",
                    }}
                  >
                    Catering Training
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pic2} alt="Swiper" />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "-100px",
                      zIndex: "9999",
                      fontSize: "35px",
                      color: "white",
                    }}
                  >
                    Solar installation and services
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pic3} alt="Swiper" />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "-100px",
                      zIndex: "9999",
                      fontSize: "35px",
                      color: "white",
                    }}
                  >
                    ICT Training
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={skill_aquisition} alt="Swiper" />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "-100px",
                      zIndex: "9999",
                      fontSize: "33px",
                      color: "white",
                    }}
                  >
                    Skill aquisition
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
