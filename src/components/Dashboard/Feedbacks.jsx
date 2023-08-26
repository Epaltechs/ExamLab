import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import eclipse from "../../assets/eclipse.png";
import eclipse2 from "../../assets/eclipse2.png";
import eclipse3 from "../../assets/eclipse3.png";
import eclipse4 from "../../assets/eclipse4.png";
import { Box } from "@mui/system";
import { Container } from "../Banner/StyledBanner";
import styled from "styled-components";

const feedbacks = [
  {
    image: <img src={eclipse} alt="img" />,
    text: "We help people reach their goals by building an online examination platform that suits their needs",
    name: "Christiana Annabel",
    occu: "Lecturer",
  },
  {
    image: <img src={eclipse2} alt="img" />,
    text: "ExamLab is an interesting platforms that let you take an online examination without stress and in an interactive way.",
    name: "Jane Cooper",
    occu: "Student",
  },
  {
    image: <img src={eclipse3} alt="img" />,
    text: "ExamLab is an interesting platforms that let you take an online examination without stress and in an interactive way.",
    name: "Brooklyn Simmons",
    occu: "Student",
  },
  {
    image: <img src={eclipse4} alt="img" />,
    text: "As a leading provider of an examination platforms, we help student reach their goals.",
    name: "Jacob Jones",
    occu: "Lecturer",
  },
];

const Feedbacks = () => {
  const [value, setValue] = useState(5);
  return (
    <Container>
      <HeadingFlex>
        <Heading>Client's Feedback</Heading>
        <div style={{ paddingBottom: "6rem" }}>
          <Text>We help people reach their goals by building an online </Text>
          <Text>examination platform that suits their needs</Text>
        </div>
        <GridFeed>
          {feedbacks.map((feed) => (
            <Flex>
              <FlexContainer>
                <div>{feed.image}</div>
                <div>
                  <Rating
                    name="read-only"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    readOnly
                  />
                </div>
              </FlexContainer>
              <Paragraph>{feed.text}</Paragraph>
              <div>
                <Name>{feed.name}</Name>
                <Occu>{feed.occu}</Occu>
              </div>
            </Flex>
          ))}
        </GridFeed>
      </HeadingFlex>
    </Container>
  );
};

export default Feedbacks;

const HeadingFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Heading = styled.span`
  text-align: center;
  font-size: 30px;
  padding-top: 5rem;
  font-weight: 500;
  @media (min-width: 1440px) {
    font-size: 40px;
  }
`;
const Text = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #000000;
  padding: 0 20px;
  @media (min-width: 1440px) {
    padding: 0px;
    font-size: 20px;
  }
`;
const GridFeed = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: 375px) {
    padding: 0 20px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 0px;
  }
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-color: #fff;
  border: 0.5px solid #f59e0b;
  padding: 3rem;
  border-radius: 10px;
  gap: 1rem;
  box-shadow: 0px 20px 60px rgba(81, 102, 112, 0.12);
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 1rem;
`;
const Paragraph = styled.p`
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  /* or 188% */

  color: #434343;
`;
const Name = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 5px;
  color: #000000;
`;
const Occu = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #949494;
`;
