import AOS from "aos";
import "aos/dist/aos.css";
import { NavBar } from "../navBar/navBar";
import { Footer } from "../navBar/footer";
import { useState, useEffect } from "react";

export const About = () => {
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
          <div className="container" data-aos="fade-up">
            <center>
              <h2>About</h2>
            </center>
            <center>
              <p>
                Established in 2023, Yunin Concept Ltd has steadily risen as a
                beacon of innovation, trust, and excellence in the realm of
                multifaceted service solutions. With a rich history and a
                forward-looking vision, our firm stands at the intersection of
                tradition and modernity, a testimony to our unwavering
                commitment to offering unparalleled services. Our foundation was
                built on the cornerstone of Construction – where every brick
                laid and every building erected represents our dedication to
                quality craftsmanship. With time, we recognized the growing
                needs of our communities and industries, which led us to
                diversify and expand our portfolio. In Borehole Drilling, we
                plumb the depths to provide an essential life resource,
                reflecting our pledge to sustainability. Our Electrification
                projects are a testament to our ambition of illuminating lives,
                while our ventures in Electric and Electronic Supply support
                businesses and homes, ensuring they operate at peak efficiency.
                The digital age beckoned, and we responded. Our Networking
                solutions knit the world closer together, and our comprehensive
                ICT Training programs offer a gateway to digital proficiency.
                With CT Gadget Supply, we remain at the forefront of
                technological trends, catering to a tech-savvy generation hungry
                for the latest innovations. Understanding the pivotal role of a
                robust online identity, our Web Design and Maintenance division
                creates and sustains compelling digital narratives. In the realm
                of Estate Development, we don't just construct buildings; we
                shape communities, crafting living experiences. Venturing into
                the global arena, our Oil and Gas Import and Export Services
                have become synonymous with reliability and seamless
                transactions. Our intricate understanding of the market nuances
                ensures that we deliver value at every stage. Our diverse
                offerings, underpinned by a singular vision of excellence, have
                cemented our reputation in each sector we delve into. At Yunin
                Concept Ltd, we believe in the power of synergy and
                collaboration. Every service we provide, every project we
                undertake, and every client we serve is a testament to our
                overarching ethos: to elevate, innovate, and serve with
                integrity. Join us, as we continue our journey of shaping
                futures, building legacies, and crafting a world where every
                ambition is within reach. Welcome to Yunin Concept Ltd, where
                dreams meet reality.
              </p>
            </center>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
