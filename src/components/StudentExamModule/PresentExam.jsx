import React from "react";
import styled from "styled-components";
import watch from "../../assets/watch.png";
import bullet from "../../assets/bx_bx-radio-circle-marked.png";
import bullet2 from "../../assets/bullet2.png";
// import { examinationData } from "../../../../constant";
import QuestionPanel from "./QuestionPanel";

const HeaderText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin-top: -120px;
  margin-bottom: ${(props) => (props.variant === "question" ? "20px" : "0px")};

  @media (max-width: 768px) {
    margin-top: 0px;
    margin-left: 80px;
  }
`;

const ContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 712px;
  height: auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 312;
    height: auto;
    margin-top: 80px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 712px;
  height: 601px;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.02);
  margin-top: 15px;
  padding: 0px 15px;
`;

const UpperContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 15px;
`;

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 10px;
`;

const Calculus = styled.h3`
  color: #54565a;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

const InstructionWrapper = styled.p`
  color: #54565a;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin-top: 7px;
`;

const TimeTag = styled.p`
  color: #54565a;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 3px;
`;

const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionNumbers = styled.p`
  color: #54565a;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: ${(props) => (props.variant === "option" ? "3px" : "40px")};
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  margin-left: 10px;
  /* justify-content: center; */
  /* align-items: center; */
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 150px;
`;

const Button = styled.button`
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 5px 15px;
  border: 1px solid #aeb0b3;
  border-radius: 10px;
  margin-left: ${(props) => (props.variant === "next" ? "10px" : "0px")};
  background: #fff;
`;

const PresentExam = () => {
  return (
    <MainContainer>
      <ContainerOne>
        <HeaderText>Present Examination</HeaderText>
        <Card>
          <UpperContentContainer>
            <HeadWrapper>
              <Calculus>Fundamental of calculus</Calculus>
              <InstructionWrapper>Answer the question below</InstructionWrapper>
            </HeadWrapper>
            <TimeWrapper>
              <img src={watch} alt="" />
              <TimeTag>00:00 Min</TimeTag>
            </TimeWrapper>
          </UpperContentContainer>

          <QuestionsWrapper>
            <QuestionNumbers>Question 1/4</QuestionNumbers>
            <QuestionNumbers>
              1. The intercepts of a linear function f are at (k, 0) and (0,
              m).If k > m > 0, which of the following describes the scope of f?
            </QuestionNumbers>
            <QuestionsContainer>
              <Icon src={bullet} />
              <QuestionNumbers variant="option">It is positive</QuestionNumbers>
            </QuestionsContainer>
            <QuestionsContainer>
              <Icon src={bullet2} />
              <QuestionNumbers variant="option">It is negative</QuestionNumbers>
            </QuestionsContainer>
            <QuestionsContainer>
              <Icon src={bullet2} />
              <QuestionNumbers variant="option">
                It is undefined
              </QuestionNumbers>
            </QuestionsContainer>
            <QuestionsContainer>
              <Icon src={bullet2} />
              <QuestionNumbers variant="option">It is zero</QuestionNumbers>
            </QuestionsContainer>
          </QuestionsWrapper>

          <ButtonWrapper>
            <Button>Prev</Button>
            <Button variant="next">Next</Button>
          </ButtonWrapper>
        </Card>
      </ContainerOne>
      <QuestionPanel />
    </MainContainer>
  );
};

export default PresentExam;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
