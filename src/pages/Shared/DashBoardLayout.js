import React from 'react';
import styled from 'styled-components';

const DashboardLayout = () => {

  return (
  <DashBoardContainerArea>
      <ContainerMain>
        
      </ContainerMain>
      <SidePanel>
        
      </SidePanel>
  </DashBoardContainerArea>
  )
  }

  export default DashboardLayout

  const DashBoardContainerArea = styled.div`
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

const SidePanel = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin-top: 0px;
  min-height: 100vh;
  height: 100%;
  padding:20px;
  width: 450px;
`;
