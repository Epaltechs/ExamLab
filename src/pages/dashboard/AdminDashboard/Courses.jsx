import React from "react";
import CoursesTable from "../../AdminDashboard/Table/coursesTable";
import styled from "styled-components";
import data from "../../../utils/coursesData";
import AddNewCourse from "./AddNewCourse";

const Courses = () => {
  return (
    <StudentsPage>
      <ContainerMain>
        <StudentContainer>
          <div>
            <h2>Courses</h2>
          </div>
          <AddNewCourse />
        </StudentContainer>
        <CoursesTable data={data} />
      </ContainerMain>
    </StudentsPage>
  );
};

export default Courses;

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
