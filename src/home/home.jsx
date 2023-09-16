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
import { BiBuildings, BiBulb, BiGasPump, BiLaptop } from "react-icons/bi";
import { Footer } from "../navBar/footer";
export const Home = () => {
  const pic1 = require("../images/img1.jpg");
  const pic2 = require("../images/img2.jpg");
  const pic3 = require("../images/img3.jpg");
  const constructionImg = require("../images/construction.png");

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
          <div className="loader-container">
            <div className="loader"></div>
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
                    Welcome To Yunin
                    <span style={{ color: "green", fontStyle: "italic" }}>
                      Concept Ltd
                    </span>
                  </span>
                  <br />
                  <span className="mt-5 subtext">
                    At Yunin Concept Ltd, we bridge the future with innovation,
                    commitment, and unparalleled service. From the foundational
                    bricks of infrastructure to the vast expanses of the digital
                    realm, our expertise spans a diverse range of sectors,
                    ensuring that our clients receive holistic solutions
                    tailored to their unique needs.
                  </span>
                  <br />

                  <div className="btn btn-primary mt-5">
                    <a
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: "20px",
                      }}
                      href="#services"
                    >
                      Our Services
                    </a>
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
                  <img src={pic1} alt="Swiper" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pic2} alt="Swiper" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pic3} alt="Swiper" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pic2} alt="Swiper" />
                </SwiperSlide>
              </Swiper>
            </div>

            <section id="services" className="services">
              <div className="container" data-aos="fade-up">
                <div className="section-header">
                  <center>
                    <h2 className="mt-5">Our Services</h2>
                  </center>
                </div>
                <div className="row gy-5 mt-5">
                  <div
                    className="col-xl-4 col-md-6"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                  >
                    <div className="service-item">
                      <div className="img">
                        <img src={pic2} className="img-fluid" alt="" />
                      </div>
                      <div className="details position-relative">
                        <div className="icon">
                          <BiBulb />
                        </div>
                        <h3>Solar Installation</h3>
                        <p>
                          We provide premier Solar Panel Installation Services,
                          dedicated to harnessing the sun's power to fuel your
                          energy needs. Our expert team manages every step, from
                          consultation to installation, ensuring optimal
                          positioning and performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-md-6"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="service-item">
                      <div className="img">
                        <img
                          src={constructionImg}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="details position-relative">
                        <div className="icon">
                          <BiBuildings />
                        </div>
                        <h3>Construction & Estate Delelopment</h3>
                        <p>
                          Our company offers premier Construction & Estate
                          Development services, tailored to transform visions
                          into tangible realities. With an expert blend of
                          innovative design and engineering precision, we
                          undertake construction projects ranging from
                          individual homes to expansive estates.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of service item */}
                  <div
                    className="col-xl-4 col-md-6"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="service-item">
                      <div className="img">
                        <img src={pic3} className="img-fluid" alt="" />
                      </div>
                      <div className="details position-relative">
                        <div className="icon">
                          <BiLaptop />
                        </div>
                        <h3>ICT Training & Networking</h3>
                        <p>
                          Our company delivers cutting-edge ICT & Networking
                          Services, designed to empower businesses in the
                          digital age. We specialize in setting up, maintaining,
                          and optimizing information and communication
                          technology infrastructures
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of service item */}
                  <div
                    className="col-xl-4 col-md-6"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="service-item">
                      <div className="img">
                        <img src={pic1} className="img-fluid" alt="" />
                      </div>
                      <div className="details position-relative">
                        <div className="icon">
                          <BiLaptop />
                        </div>
                        <h3>Web Design and Maintainance</h3>
                        <p>
                          We offer premier Web Design & Maintenance Services
                          tailored to your digital presence needs. Our skilled
                          designers craft visually captivating websites that
                          resonate with your target audience, while our
                          maintenance team ensures optimal performance and
                          uptime.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of service item */}

                  <div
                    className="col-xl-4 col-md-6"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="service-item">
                      <div className="img">
                        <img src={pic1} className="img-fluid" alt="" />
                      </div>
                      <div className="details position-relative">
                        <div className="icon">
                          <BiBulb />
                        </div>
                        <h3>Electric and Electronic Supply</h3>
                        <p>
                          We are a leading provider of Electric & Electronic
                          Supply Services, catering to a diverse range of
                          sectors. Our extensive inventory includes the latest
                          and most reliable electric and electronic components.
                          From industrial machinery parts to cutting-edge
                          consumer electronics, we source, stock, and deliver
                          with precision and efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of service item */}

                  <div
                    className="col-xl-4 col-md-6"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="service-item">
                      <div className="img">
                        <img src={pic1} className="img-fluid" alt="" />
                      </div>
                      <div className="details position-relative">
                        <div className="icon">
                          <BiGasPump />
                        </div>
                        <h3>Oil and Gas import and export services</h3>
                        <p>
                          Our company stands at the forefront of the energy
                          sector, offering specialized Oil & Gas Importation and
                          Exportation Services. With a global network and
                          industry expertise, we facilitate the seamless
                          transfer of energy resources across borders.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of service item */}
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
