import React, { useState } from "react";
import styled from "styled-components";

import image from "../../../src/assets/Intersect.png";

import play from "../../../src/assets/play.png";
import imageOne from "../../../src/assets/images/1649074592-unilorin 1.png";
import imageTwo from "../../../src/assets/images/AU+REC+logos+-+2022-04-04T113109 1.png";
import imageThree from "../../../src/assets/images/FAIRVIEW-NEW-LOGO-01 1.png";
import imageFour from "../../../src/assets/images/pngegg 1.png";
import imageFive from "../../../src/assets/images/pngegg (2) 1.png";
import {
  Box,
  Container,
  FloatingButtonsContainer,
  FirstFloatingButton,
  MiddleFloatingButton,
  LastFloatingButton,
  FlexContainer,
  TextContainer,
  TextBox,
  Heading,
  FirstParagraph,
  SolidButton,
  OutlineButton,
  ButtonFlex,
  OutlineButtonFlex,
  Image,
  LogoContainer,
  LogoImage,
} from "./StyledBanner";

const Banner = () => {
  return (
    <Box>
      <Container>
        <FlexContainer>
          <TextContainer>
            <Heading>
              Providing the simplest <br /> solution for
              <Span> online examination</Span>
            </Heading>
            <TextBox>
              <FirstParagraph>
                A Nigerian based global platform provider specializing in rapid
                exam systems. We have broken through the wall of the dreaded
                examination system
              </FirstParagraph>
            </TextBox>
            <ButtonFlex>
              <div>
                <SolidButton>Get Started</SolidButton>
              </div>

              <OutlineButton>
                <OutlineButtonFlex>
                  <span>Watch Demo </span>
                  <img
                    src={play}
                    style={{ width: "16px", height: "16px" }}
                    alt="play"
                  />
                </OutlineButtonFlex>
              </OutlineButton>
            </ButtonFlex>
          </TextContainer>

          <FloatingButtonsContainer>
            <Image src={image} alt="" />
            <FirstFloatingButton type="submit">Students</FirstFloatingButton>
            <MiddleFloatingButton>Lecturers</MiddleFloatingButton>
            <LastFloatingButton>School Management</LastFloatingButton>
          </FloatingButtonsContainer>
        </FlexContainer>
      </Container>
      <Container>
        <LogoContainer>
          <div>
            <LogoImage src={imageOne} alt="" />
          </div>
          <div>
            <LogoImage src={imageTwo} alt="" />
          </div>
          <div>
            <LogoImage src={imageThree} alt="" />
          </div>
          <div>
            <LogoImage src={imageFour} alt="" />
          </div>
          <div>
            <LogoImage src={imageFive} alt="" />
          </div>
        </LogoContainer>
      </Container>
    </Box>
  );
};

export default Banner;

const Span = styled.span`
  color: #f97316;
`;
