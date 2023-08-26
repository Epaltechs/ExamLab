import React from "react";
import styled from "styled-components";
import TeacherUpcomingExam from "../../components/TeacherUpcomingExam";

const Overview = () => {
  return (
    <MainContainer>
      <OverviewContainer>
        <Paragraph>Overview</Paragraph>
      </OverviewContainer>
      <div style={{ marginTop: "80px" }}>
        <TeacherUpcomingExam />
      </div>
    </MainContainer>
  );
};

export default Overview;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const OverviewContainer = styled.div`
  margin-top: 80px;
  margin-left: 74px;
  width: 100%;
`;
const Paragraph = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #000000;
  font-size: 16px;
`;
