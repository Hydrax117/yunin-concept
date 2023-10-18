import AOS from "aos";
import "aos/dist/aos.css";
import { NavBar } from "../navBar/navBar";
import { Footer } from "../navBar/footer";
import { useState, useEffect } from "react";

export const About = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    AOS.init();
    document.title = "About Us";
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
          <div className=""></div>
          <div className="container about-height " data-aos="fade-up">
            <center>
              <h2 className="mt-5">About Y & I CONNECTS NIG LTD</h2>
            </center>
            <center>
              <p>
                Founded on the principles of innovation, excellence, and
                integrity, Y & I CONNECTS NIG LTD has grown to become a beacon
                of reliability and progress in the industries we serve. Our
                journey began with a singular vision: to provide unparalleled
                solutions that empower businesses, enrich communities, and drive
                the progress of sectors vital to our world's growth and
                development. A Multi-Faceted Approach At Y & I CONNECTS NIG LTD,
                we recognize the interwoven tapestry of modern demands. In
                response, we've cultivated a diverse portfolio of services,
                ensuring that our clients receive comprehensive solutions from a
                single trusted partner. Construction: Grounded in precision and
                architectural finesse, we've erected infrastructures that define
                skylines and provide lasting value. Borehole Drilling: With
                every borehole we drill, we tap into nature's reservoir,
                bringing essential resources to those who need them most.
                Electrification: Our commitment to progress is epitomized by our
                ventures in electrification, illuminating lives and industries.
                Electric and Electronic Supply: Acting as a conduit for quality
                and reliability, our supply chain is fortified with the best
                electrical and electronic components available. Networking and
                ICT Training: In the age of digital connection, our networking
                solutions streamline communication, while our ICT training
                programs empower the next generation of tech leaders. CT Gadget
                Supply: We keep our clients at technology's forefront, providing
                them with the latest and most efficient CT gadgets. Web Design
                and Maintenance: Our digital artisans sculpt online experiences
                that captivate, engage, and convert. Estate Development: Beyond
                bricks and mortar, we craft homes and communities that resonate
                with aspirations and dreams. Oil and Gas Import and Export
                Services: Steadfast in our approach, we've solidified our
                position in the global oil and gas supply chain, ensuring
                seamless trade and consistent value. Our Commitment At the heart
                of Y & I CONNECTS NIG LTD's operations is an unwavering
                commitment to our clients, our people, and our planet. We
                continually invest in research, technology, and training,
                ensuring that we stay ahead of industry curves and deliver value
                in every project we undertake. As we chart our course into the
                future, we invite you to join us. Experience the Y & I CONNECTS
                NIG LTD difference, where every service rendered is a testament
                to our dedication and passion. Welcome to Y & I CONNECTS NIG LTD
                - Building Today for Tomorrow's World.
              </p>
            </center>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
