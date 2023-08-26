import React from "react";
import styled from "styled-components";
import { Container } from "../Banner/StyledBanner";

const Inaction = () => {
  return (
    <Container>
      <Box>
        <Heading>See ExamLab in Action.</Heading>
        <TextWrapper>
          <Text>
            Need to Know more about how the platform works for students,
            lectureres and Admin Contact us to learn more about ExamSoft's
            Digital Assessment Platform.
          </Text>
        </TextWrapper>
        <Button>Get Started</Button>
      </Box>
    </Container>
  );
};

export default Inaction;
const Box = styled.div`
  display: Flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  padding: 50px;
  background: linear-gradient(
    91.03deg,
    #f59e0b 1.71%,
    #f59e0b 1.72%,
    #f97316 99.41%
  );
  border-radius: 20px;
  text-align: center;
  @media (min-width: 375px) {
    margin: 0 20px;
    margin-top: 3rem;
  }
  @media (min-width: 768px) {
    margin-top: 3rem;
  }
  @media (min-width: 1440px) {
    margin-top: 3rem;
  }
`;
const Heading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;

  color: #ffffff;
`;
const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  color: #ffffff;
`;
const Button = styled.button`
  width: 200px;
  height: 59.4px;
  background-color: #fff;
  border-radius: 40px;
  color: #f97615;
  font-weight: 700;
  font-size: 14px;
  border: none;
`;
const TextWrapper = styled.div`
  width: 100%;
  height: 72px;

  @media (min-width: 1440px) {
    width: 100%;
    width: 652px;
  }
`;
