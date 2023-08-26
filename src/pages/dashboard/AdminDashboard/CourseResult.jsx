import React from "react";
import CourseResultsTable from "../../AdminDashboard/Table/courseResultTable";
import styled from "styled-components";
import data from "../../../utils/courseResultData";

const CourseResults = () => {
  return (
    <Container>
      <StudentsPage>
        <ContainerMain>
          <StudentContainer>
            <div>
              <h2>
                Results/ <Span>Introduction to Biochemistry</Span>
              </h2>
            </div>
          </StudentContainer>
          <CourseResultsTable data={data} />
          <ButtonWrapper>
            <Button>Reject</Button>
            <Button className="left">Approve</Button>
          </ButtonWrapper>
        </ContainerMain>
      </StudentsPage>
    </Container>
  );
};

export default CourseResults;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StudentsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  width: 100%;
  min-height: 100vh;
`;

const Span = styled.span`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #54565a;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 72px;
  background: rgba(34, 197, 94, 0.1);
  box-sizing: border-box;
  margin-bottom: 30px;
`;
const Button = styled.button`
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 6px 12px;
  margin-right: ${(props) => (props.className === "left" ? "16px" : "10px")};
  color: #16a34a;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 12px;
  background-color: #fff;
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 40px;
  width: 100%;
  padding: 10px 40px;
  height: 100%;
`;

const StudentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 90px;
  margin-bottom: 30px;
  width: 100%;
`;
