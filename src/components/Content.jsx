import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/system";
import image from "../../src/assets/Intersect.png";
import "../styles/content.css";
import "../styles/contentLogo.css";
import play from "../../src/assets/play.png";
import imageOne from "../../src/assets/images/1649074592-unilorin 1.png";
import imageTwo from "../../src/assets/images/AU+REC+logos+-+2022-04-04T113109 1.png";
import imageThree from "../../src/assets/images/FAIRVIEW-NEW-LOGO-01 1.png";
import imageFour from "../../src/assets/images/pngegg 1.png";
import imageFive from "../../src/assets/images/pngegg (2) 1.png";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import eclipse from "../assets/eclipse.png";
import eclipse2 from "../assets/eclipse2.png";
import eclipse3 from "../assets/eclipse3.png";
import eclipse4 from "../assets/eclipse4.png";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Pricing from "./Pricing";
import MobileNavbar from "./MobileNavbar";

const schoolLogos = [
  {
    id: 1,
    url1: imageOne,
    url2: imageTwo,
    url3: imageThree,
    url4: imageFour,
    url5: imageFive,
  },
];

const Content = ({ navbar, setNavbar }) => {
  // console.log(navbar);
  const [value, setValue] = useState(2);
  return (
    <>
      <PageMainContainer className="landing-page-container">
        <Section id="home">
          <MobileNavbar navbar={navbar} setNavbar={setNavbar} />
          <UpperContentContainer className="container">
            <div className="leftside">
              <div className="leftside-content">
                <div className="introduction-content">
                  <p
                    style={{ fontSize: "25px", fontWeight: "bold" }}
                    className="solution"
                  >
                    Providing the simplest <br /> solution for
                    <span style={{ color: "#F97316" }}>
                      {" "}
                      online examination
                    </span>
                  </p>
                </div>
                <div className="lower_content">
                  <p>
                    A Nigerian based global platform provider specializing in
                    rapid exam systems.
                  </p>
                  <p>
                    We have broken through the wall of the dreaded examination
                    system
                  </p>
                </div>
              </div>

              <div className="button_container">
                <div className="get-started-container">
                  <button className="button_first">Get Started</button>
                </div>
                <div className="demo-container">
                  <button className="button_second">
                    <span>Watch Demo </span>
                    <img
                      src={play}
                      alt="play"
                      style={{ padding: "0px 8px", marginBottom: "-2px" }}
                    />
                  </button>
                </div>
              </div>
            </div>

            <FloatingButtonsContainer className="floating-container">
              <img src={image} alt="" height="500px" />
              <FirstFloatingButton type="submit" className="floating-button">
                Students
              </FirstFloatingButton>
              <MiddleFloatingButton className="floating-button-middle">
                Lecturers
              </MiddleFloatingButton>
              <LastFloatingButton className="floating-button-bottom">
                School Management
              </LastFloatingButton>
            </FloatingButtonsContainer>
          </UpperContentContainer>
        </Section>
        <ClientLogoContainer>
          {schoolLogos &&
            schoolLogos.map((logo) => {
              return (
                <div key={logo.id} className="url-logo-container">
                  <div className="content-logo">
                    <img src={logo.url1} alt="" height="50px" />
                  </div>
                  <div className="content-logo">
                    <img src={logo.url2} alt="" height="50px" />
                  </div>
                  <div className="content-logo">
                    <img src={logo.url3} alt="" height="50px" />
                  </div>
                  <div className="content-logo">
                    <img src={logo.url4} alt="" height="50px" />
                  </div>
                  <div className="content-logo">
                    <img src={logo.url5} alt="" height="50px" />
                  </div>
                </div>
              );
            })}
        </ClientLogoContainer>
        <AboutUs />
        <Features />
        <Pricing />

        <section id="feedback">
          <Box className="feedback_wrapper">
            <h3
              style={{
                textAlign: "center",
                fontWeight: "normal",
                fontSize: "35px",
              }}
            >
              Client’s Feedback
            </h3>
            <p className="help-content">
              We help people reach their goals by building an online
            </p>
            <p style={{ textAlign: "center" }}>
              examination platform that suits their needs.
            </p>
          </Box>
          <div className="rating-container">
            <div className="rating_card">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  display: "flex",
                }}
              >
                <Typography component="legend">
                  <img src={eclipse} alt="" />
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  className="rating"
                />
              </Box>
              <p>We help people reach their goals by building an online </p>
              <p>examination platform that suits their needs</p>
              <div className="review-personnel">
                <h3>Christiana Annabel</h3>
                <p>Lecturer</p>
              </div>
            </div>
            <div className="rating_card">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  display: "flex",
                }}
              >
                <Typography component="legend">
                  <img src={eclipse2} alt="" />
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  className="rating"
                />
              </Box>
              <p>ExamLab is an interesting platforms that let you take an </p>
              <p>
                online examination without stress and in an interactive way.
              </p>
              <div className="review-personnel">
                <h3>Jane Cooper</h3>
                <p>Student</p>
              </div>
            </div>
          </div>
          <div className="rating-container">
            <div className="rating_card">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  display: "flex",
                }}
              >
                <Typography component="legend">
                  <img src={eclipse3} alt="" />
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  className="rating"
                />
              </Box>
              <p>ExamLab is an interesting platforms that let you take an</p>
              <p>
                online examination without stress and in an interactive way.
              </p>
              <div className="review-personnel">
                <h3>Brooklyn Simmons</h3>
                <p>Student</p>
              </div>
            </div>
            <Box className="rating_card">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  display: "flex",
                }}
              >
                <Typography component="legend">
                  <img src={eclipse4} alt="" />
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  className="rating"
                />
              </Box>
              <p>As a leading provider of an examination platforms, </p>
              <p>we help student reach their goals.</p>
              <div className="review-personnel">
                <h3>Jacob Jones</h3>
                <p>Lecturer</p>
              </div>
            </Box>
          </div>
          <div className="action_wrapper">
            <div className="action-content">
              <div className="action-content one">
                <h3 className="action-heading">See ExamLab in Action.</h3>
                <p style={{ textAlign: "center" }}>
                  Need to Know more about how the platform works for students,
                  lecturers and Admin
                </p>
                <p style={{ textAlign: "center" }}>
                  Contact us to learn more about ExamSoft's Digital Assessment
                  Platform.
                </p>
              </div>
              <div className="action-content two">
                <button
                  className="action_button"
                  style={{ display: "block", margin: "auto" }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </PageMainContainer>
    </>
  );
};

export default Content;

const PageMainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Section = styled.section``;

const UpperContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  align-content: center;
  margin: 65px 65px;
`;

// const Leftside = styled.div`
//   margin-top: -30px;
// `;

// const LeftsideContent = styled.div``;
// const IntroductionContent = styled.div``;
// const SolutionTag = styled.p``;

// const Span = styled.span``;

// const LowerContent = styled.div`
//   font-weight: lighter;
//   margin-top: 15px;
// `;

// const ButtonContainer = styled.div`
//   cursor: pointer;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   justify-items: center;
//   align-content: center;
//   width: 100%;
//   margin-left: -130px;
//   margin-top: 15px;
// `;

// const GetStartedContainer = styled.div``;

// const FirstButton = styled.button`
//   margin: 10px;
//   padding: 8px 35px;
//   background-color: #f97316;
//   color: #ffffff;
//   border-radius: 15px;
//   border: none;
//   cursor: pointer;
// `;

// const DemoContainer = styled.div``;

// const SecondButton = styled.button`
//   box-sizing: border-box;
//   margin: 10px;
//   padding: 6px 15px;
//   background-color: #fff;
//   color: #000;
//   border-radius: 20px;
//   border: 1px solid #000000;
//   cursor: pointer;
// `;

const FloatingButtonsContainer = styled.div`
  position: relative;
`;

const FirstFloatingButton = styled.button`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #ffffff;
  color: #000;
  font-weight: bold;
  padding: 10px 15px;
  position: absolute;
  top: 10%;
  left: 95%;
  transform: translate(-50%, -50%);
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 10vw;
`;

const MiddleFloatingButton = styled.button`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #ffffff;
  color: rgb(0, 0, 0, 0.5);
  font-weight: bold;
  padding: 10px 15px;
  position: absolute;
  top: 70%;
  left: 5%;
  transform: translate(-50%, -50%);
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #f97316;
  width: 10vw;
`;

const LastFloatingButton = styled.button`
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  color: rgb(0, 0, 0, 0.5);
  font-weight: bold;
  padding: 10px;
  position: absolute;
  top: 90%;
  left: 95%;
  transform: translate(-50%, -50%);
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 12vw;
`;

const ClientLogoContainer = styled.div``;
// const LogosContainer = styled.div``;
// const ContentLogo = styled.div``;
