import React from "react";
import CoursesTable from "../Table/coursesTable";
import styled from "styled-components";
import data from "../../dashboard/Lecturer/courseData";
import SimpleHeader from "../../../components/Headers/SimpleHeader";

const Courses = () => {
  console.log("Course Details");

  return (
    <CoursesPage>
      <CustomScrollbar>
        <ContainerMain>
          <CourseContainer>
            <div>
              <SimpleHeader title="Courses"></SimpleHeader>
            </div>
          </CourseContainer>
          <CoursesTable data={data} />
        </ContainerMain>
      </CustomScrollbar>
    </CoursesPage>
  );
};

export default Courses;

const CoursesPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  width: 100%;
  min-height: 100vh;
`;

const CustomScrollbar = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
    background: #f97316;
  }
  ::-webkit-scrollbar-thumb {
    background: #f97316;
  }
  ::-webkit-scrollbar-track {
    background: #f97316;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
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

const CourseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 90px;
  margin-bottom: 30px;
  width: 100%;
`;
