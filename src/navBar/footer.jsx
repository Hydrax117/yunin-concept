import {
  BiCheck,
  BiLocationPlus,
  BiLogoGmail,
  BiPhone,
  BiRightArrowAlt,
  BiTime,
} from "react-icons/bi";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        {/* start of site map */}
        <div className="col-md-4 mt-5">
          <span className="title-text"> SITE MAP</span>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6304666763085!2d7.477044474934913!3d9.097387290966688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a899107f5f3%3A0x76665f909042afad!2s11%20Thames%20Street%2C%20Maitama%20900001%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1694829723429!5m2!1sen!2sng"
              frameborder="0"
              allowfullscreen
              title="title"
            ></iframe>
          </div>
        </div>
        {/* end of site map */}

        {/* start of information */}
        <div className="col-md-4 mt-5">
          <span className="title-text">INFORMATION</span>
          <div className="mt-5 d-flex flex-row">
            <div className="">
              <span>
                <BiRightArrowAlt fontSize={20} />
                <span className="ms-2">Home</span>
              </span>
            </div>
            <div
              style={{
                marginLeft: "150px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>
                <BiRightArrowAlt fontSize={20} />
                <span className="ms-2">About</span>
              </span>

              <span className="mt-2">
                <BiRightArrowAlt fontSize={20} />
                <span className="ms-2 ">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/our-team"
                  >
                    OUR TEAM
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* end of information  */}

        {/* start of contact info */}
        <div className="col-md-4 mt-5">
          <span className="title-text">CONTACT INFO</span>
          <div className="d-flex flex-column mt-5">
            <span>
              <BiLocationPlus fontSize={20} />
              <span className="ms-2">
                11 Thames Street Maitama Abuja Nigeria
              </span>
            </span>
            <span className="mt-2">
              <BiPhone fontSize={20} />
              <span className="ms-2 ">(+234) 08030805200</span>
            </span>
            <span className="mt-2">
              <BiLogoGmail fontSize={20} />
              <span className="ms-2 ">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="mailto:yuninconceptltd@gmail.com"
                >
                  yuninconceptltd@gmail.com
                </Link>
              </span>
            </span>

            <span className="mt-2">
              <BiTime fontSize={20} />
              <span className="ms-2 ">Mon-Fri: 9:00am-5:00pm</span>
            </span>

            <span className="mt-2">
              <BiCheck fontSize={20} />
              <span className="ms-2 ">RC 934236</span>
            </span>
          </div>
        </div>
        {/* end of contact info  */}
      </div>
    </div>
  );
};