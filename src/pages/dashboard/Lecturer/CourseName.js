import React from "react";
import CourseNameTable from "../Table/coursesNameTable";
import styled from "styled-components";
import data from "./CourseNameData";
import SimpleHeader from "../../../components/Headers/SimpleHeader";

const CourseName = () => {
  console.log("Course Details");

  return (
    <CoursesPage>
      <CustomScrollbar>
        <ContainerMain>
          <CourseContainer>
            <Main>
              <SimpleHeader title="Courses/" />
              <h5 style={{ color: "#AEB0B3", paddingTop: "2px" }}>
                Introduction to Computer Science
              </h5>
            </Main>
          </CourseContainer>
          <CourseNameTable data={data} />
        </ContainerMain>
      </CustomScrollbar>
    </CoursesPage>
  );
};

export default CourseName;

const CoursesPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  width: 100%;
  /* min-height: 100vh; */
  /* overflow-y: scroll; */
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

const Main = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 5px; */
  align-content: center;
  font-family: "inter";
  color: #000000;
  font-weight: 600;
  font-size: 16px;
  /* margin-bottom: 35px; */
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
