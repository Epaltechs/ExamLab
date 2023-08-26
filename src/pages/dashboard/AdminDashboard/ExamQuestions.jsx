import React from "react";
import ExamQuestionsTable from "../../AdminDashboard/Table/examQuestionsTable";
import styled from "styled-components";
import data from "../../../utils/examQuestionsData";

const ExamQuestions = () => {
  console.log("Student Details");

  return (
    <StudentsPage>
      <ContainerMain>
        <StudentContainer>
          <div>
            <h2>ExamQuestions</h2>
          </div>
        </StudentContainer>
        <ExamQuestionsTable data={data} />
      </ContainerMain>
    </StudentsPage>
  );
};

export default ExamQuestions;

const StudentsPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  width: 100%;
  min-height: 100vh;
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
