import React from "react";
import logo from "../assets/logoWhite.png";
import "../styles/footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import line from "../assets/line.png";
import ScrollToTheTop from "./ScrollToTheTop";

// const footerButtons = ["Home", "About Us", "Features", "Pricing"];

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer">
          <div className="footer-siblings sib-one">
            <img src={logo} alt="" className="footer_logo" />
            <p>
              We help people reach their goals by building an online examination
              platform that suits their needs
            </p>
            <p></p>
            <p>
              <InstagramIcon className="icon_wrapper" />
              <TwitterIcon className="icon_wrapper" />
              <LinkedInIcon className="icon_wrapper" />
              <YouTubeIcon className="icon_wrapper" />
            </p>
          </div>
          <div className="footer-siblings sib-two">
            <h5>Contact Us</h5>
            <p>130 Olarenwaju Road, </p>
            <p>Call Us: 07012345678.</p>
            <p>help@exam-lab.com</p>
          </div>
          <div className="footer-siblings sib-three">
            <p>Sign up with your email address to recieve news and updates</p>

            <input
              type="text"
              className="footer-input"
              placeholder="Your e-mail address"
            />
          </div>
        </div>
        <ScrollToTheTop showBelow={250} style={{ color: "#f97316" }} />

        <img src={line} alt="" className="footer_line" />
        <div className="footer_copyright">
          <div className="copyright brand">
            <p className="copyright">Copyright@2022 Exam-lab.</p>
          </div>
          <div className="footer-link-container">
            <a href="#home" className="footer-link">
              Home
            </a>

            <a href="#about" className="footer-link">
              About Us
            </a>

            <a href="#features" className="footer-link">
              Features
            </a>

            <a href="#pricing" className="footer-link">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
