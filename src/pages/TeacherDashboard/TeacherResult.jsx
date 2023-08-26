import React from "react";
import styled from "styled-components";
import Sidebar from "../../components/searchbar";
import {
  MainContainer,
  Paragraph,
  DefaultTableContainer,
} from "./GlobalStyles";
import data from "../../utils/teacherResultData";
import TeacherResultTable from "../AdminDashboard/Table/SecondarySchool/TeacherResultTable";

const TeacherResult = () => {
  return (
    <MainContainer>
      <DefaultTableContainer>
        <Paragraph>Results</Paragraph>
        <TeacherResultTable data={data} />
      </DefaultTableContainer>
      <div style={{ marginTop: "80px" }}>
        <Sidebar />
      </div>
    </MainContainer>
  );
};

export default TeacherResult;
