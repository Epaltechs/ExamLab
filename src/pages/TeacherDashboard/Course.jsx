import React from "react";
import styled from "styled-components";
import { MainContainer, Paragraph, Span } from "./GlobalStyles";
import TeacherUpcomingExam from "../../components/TeacherUpcomingExam";
import TeacherCourseTable from "../AdminDashboard/Table/SecondarySchool/TeacherCourseTable";
import data from "../../utils/teacherCourseData";

const Course = () => {
  return (
    <MainContainer>
      <CourseDataContainer>
        <Paragraph>
          Course/ <Span>temidayo kukoyi</Span>
        </Paragraph>
        <TeacherCourseTable data={data} />
      </CourseDataContainer>
      <div style={{ marginTop: "80px" }}>
        <TeacherUpcomingExam />
      </div>
    </MainContainer>
  );
};

export default Course;
const CourseDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  margin-top: 80px;
  margin-left: 74px;
`;
