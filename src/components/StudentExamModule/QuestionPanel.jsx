import React from "react";
import styled from "styled-components";
import { examinationData } from "../../constant";
const QuestionPanel = () => {
  return (
    <ContainerTwo>
      <HeaderTextTwo variant="question">Questions</HeaderTextTwo>
      {examinationData &&
        examinationData.map((item) => {
          const { id, question, icon } = item;
          return (
            <QuestionCard key={id}>
              <NumberWrapper>
                <NumberTag>{question}</NumberTag>
              </NumberWrapper>
              <IconWrapper>{icon}</IconWrapper>
            </QuestionCard>
          );
        })}
    </ContainerTwo>
  );
};

export default QuestionPanel;

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 15px;
`;

const HeaderTextTwo = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin-top: 50px;
`;

const QuestionCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.02);
  width: 260px;
  height: 49px;
  border-radius: 15px;
  margin-top: 10px;
  cursor: pointer;
`;

const NumberWrapper = styled.div``;
const NumberTag = styled.p``;
const IconWrapper = styled.div`
  color: ${(props) => (props.variant === "green" ? "#22C55E" : "#AEB0B3")};
`;
