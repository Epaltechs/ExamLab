import React from "react";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import key from "../../src/assets/key.png";
import mobile from "../../src/assets/mobile.png";
import icon from "../../src/assets/icon.png";

const Features = () => {
  return (
    <>
      <section id="features">
        <div className="features-container">
          <div className="features">
            <div>
              <h3 className="features-range">
                Exam Lab covers <br /> wide Range of features
              </h3>
            </div>
            <div className="features_right">
              <p>
                We offer the following benefits when you engage with us. We
                <br /> also offer the best with quality resources you can't find
                out there.
              </p>
            </div>
          </div>
        </div>
        <div className="features_list">
          <div className="row">
            <div className="col">
              <span>
                <ShieldOutlinedIcon sx={{ color: "green" }} />
              </span>
              <h3>Secure</h3>
              <p>
                Secure exam delivery and protection against cheating. Secure
                exam delivery and protection against cheating.
              </p>
            </div>
            <div className="col">
              <span>
                <CenterFocusStrongIcon sx={{ color: "#F97316" }} />
              </span>
              <h3>Automated</h3>
              <p>
                Provide a convenient, efficient, and reliable solution for
                conducting assessments and ensuring results accuracy
              </p>
            </div>
            <div className="col">
              <span>
                <AccessTimeIcon sx={{ color: "#000000" }} />
              </span>
              <h3>Time Management</h3>
              <p>
                Providing a fair and equal amount of time to all participants by
                setting and enforcing time limits.
              </p>
            </div>
          </div>
          <div className="row features-list-two">
            <div className="col integration">
              <span>
                <img src={key} alt="" />
              </span>
              <h3>Integration</h3>
              <p>
                Offering a centralized solution for creating, conducting, and
                analysing exams, saving time and resources.
              </p>
            </div>
            <div className="col">
              <div className="col-sibling">
                <span>
                  <img src={mobile} alt="" />
                </span>
                <h3>Mobile</h3>
                <p>
                  Allow participants to take exams at their own pace, providing
                  a stress-free and efficient assessment experience.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="col-sibling-two">
                <span>
                  <img
                    src={icon}
                    alt=""
                    className="user-friendly"
                    width="30px"
                  />
                </span>
                <h3>User friendly</h3>
                <p>
                  Administrators will be able to easily create, conduct, and
                  analyse exams, reducing frustration and improving efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
