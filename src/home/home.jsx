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
import { BiBroadcast } from "react-icons/bi";
import { Footer } from "../navBar/footer";
export const Home = () => {
  const pic1 = require("../images/img1.jpg");
  const pic2 = require("../images/img2.jpg");
  const pic3 = require("../images/img3.jpg");
  const [isLoading, setIsloading] = useState(true);

  // const navigation = useNavigate();

  // const services = [
  //   {
  //     title: "Our Services",
  //     desc: "Our Services include Construction, Borehole Dilling, Electrification, Electric and Electronic Supply, Networking, ICT training,ICT Gadget supply Web Design and Maintainance, Estate Delelopment, Oil and Gas import and export services",
  //     url: "/our-team",
  //   },
  //   {
  //     title: "Our Team",
  //     desc: "National Conference on Children’s Books and the Teaching of Early Grade Reading in Nigeria. By far the most significant national activity the NCRRD undertook during the year was the National Conference held on August 2019",
  //     url: "/our-team",
  //   },
  //   {
  //     title: "About us",
  //     desc: "NCRRD has commenced preparation for the publication of the maiden edition of the Nigerian Journal of Reading Research. It is expected that the journal will be launched during the next National Conference on Children’s Books and the Teaching of Early Grade Reading in Nigeria, scheduled to take place in March 2020.",
  //     url: "/our-team",
  //   },
  // ];

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
                  <h2>Our Services</h2>
                  <p>
                    Ea vitae aspernatur deserunt voluptatem impedit deserunt
                    magnam occaecati dssumenda quas ut ad dolores adipisci
                    aliquam.
                  </p>
                </div>
                <div className="row gy-5">
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
                          <i className="bi bi-activity" />
                        </div>
                        <h3>Solar Installation</h3>
                        <p>
                          Provident nihil minus qui consequatur non omnis
                          maiores. Eos accusantium minus dolores iure
                          perferendis.
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
                        <img src={pic2} className="img-fluid" alt="" />
                      </div>
                      <div className="details position-relative">
                        <div className="icon">
                          <BiBroadcast />
                        </div>
                        <h3>Eosle Commodi</h3>
                        <p>
                          Ut autem aut autem non a. Sint sint sit facilis nam
                          iusto sint. Libero corrupti neque eum hic non ut
                          nesciunt dolorem.
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
                        <img src={pic2} className="img-fluid" alt="" />
                      </div>
                      <div className="details position-relative">
                        <div className="icon">
                          <BiBroadcast />
                        </div>
                        <h3>Eosle Commodi</h3>
                        <p>
                          Ut autem aut autem non a. Sint sint sit facilis nam
                          iusto sint. Libero corrupti neque eum hic non ut
                          nesciunt dolorem.
                        </p>
                      </div>
                    </div>
                  </div>
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
