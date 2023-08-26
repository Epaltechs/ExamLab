
import React from "react";
import styled from "styled-components";

function Dashboard() {
  return <ContainerMain>{/* <DefaultNav /> */}</ContainerMain>;
}

export default Dashboard;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;