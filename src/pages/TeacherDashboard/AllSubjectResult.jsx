import React from "react";
import {
  MainContainer,
  DefaultTableContainer,
  Paragraph,
} from "./GlobalStyles";
import data from "../../utils/allSubjectData";
import AllSubjectResultTable from "../../pages/AdminDashboard/Table/SecondarySchool/AllSubjectResultTable";

const AllSubjectResult = () => {
  return (
    <MainContainer>
      <DefaultTableContainer>
        <Paragraph>Results</Paragraph>
        <AllSubjectResultTable data={data} />
      </DefaultTableContainer>
    </MainContainer>
  );
};

export default AllSubjectResult;
