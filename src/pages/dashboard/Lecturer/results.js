import React from "react";
import ResultsTable from "../Table/resultsTable";
import styled from "styled-components";
import data from "./resultData";
import SimpleHeader from "../../../components/Headers/SimpleHeader";

const Results = () => {
  console.log("Result Details");

  return (
    <ResultsPage>
      <CustomScrollbar>
        <ContainerMain>
          <ResultsContainer>
            <div>
              <SimpleHeader title="Results" />
            </div>
          </ResultsContainer>
          <ResultsTable data={data} />
          <ButtonWrapper>
            <Button style={{ color: "#AEB0B3", paddingTop: "6px" }}>
              Prev
            </Button>
            <p />
            1,2,3...9
            <Button variant="next">Next</Button>
          </ButtonWrapper>
        </ContainerMain>
      </CustomScrollbar>
    </ResultsPage>
  );
};

export default Results;

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

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 40px;
  width: 100%;
  padding: 10px 40px;
  height: 90%;
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

const Button = styled.button`
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
