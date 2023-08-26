import React from "react";
import ResultSheetTable from "../Table/resultSheetTable";
import styled from "styled-components";
import data from "./resultSheetData";
import DefaultButton from "../../../components/Buttons/DefaultButton";
import SimpleHeader from "../../../components/Headers/SimpleHeader";

const ResultSheet = () => {
  console.log("Results Details");

  const requestApproval = () => {};

  return (
    <ResultsPage>
      <CustomScrollbar>
        <ContainerMain>
          <ResultsContainer>
            <Main>
              <SimpleHeader title="Results/" />
              <h5 style={{ color: "#AEB0B3", paddingTop: "2px" }}>
                Introduction to Computer Science
              </h5>
            </Main>
          </ResultsContainer>
          <ResultSheetTable data={data} />
          <ButtonWrapper>
            <Buttons style={{ color: "#AEB0B3", paddingTop: "6px" }}>
              Prev
            </Buttons>
            <p />
            1,2,3...9
            <Buttons variant="next">Next</Buttons>
            <Action>
              <DefaultButton
                width="150"
                text="Request Approval"
                action={requestApproval}
              />
            </Action>
          </ButtonWrapper>
        </ContainerMain>
      </CustomScrollbar>
    </ResultsPage>
  );
};

export default ResultSheet;

const ResultsPage = styled.div`
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

const Main = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 5px; */
  align-content: center;
  font-family: "inter";
  color: #000000;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
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

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 70px;
  margin-bottom: 30px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Buttons = styled.button`
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 5px 15px;
  border: 1px solid #aeb0b3;
  border-radius: 10px;
  margin-left: ${(props) => (props.variant === "next" ? "10px" : "0px")};
  background: #fff;
`;

const Action = styled.div`
  display: flex;
  width: 100%;
  height: auto !important;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 570px;
`;
