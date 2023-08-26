import React from "react";
import LecturersTable from "../Table/lecturersTable";
import styled from "styled-components";
import DefaultButton from "../../../components/Buttons/DefaultButton";
import Button from "../../../components/Buttons/ButtonStyles";
import lecturer from "../../../assets/lecturer.png";
import AddNewLecturer from "../Lecturer/AddNewLecturer";
import data from "../../../utils/lecturerData";
import { ContainerMain } from "../../Shared/globalStyleComponents";
const Lecturers = () => {
  const suspendLecturer = () => {};
  const deleteLecturer = () => {};

  return (
    <LecturerPage>
      <ContainerMain>
        <LecturerContainer>
          <div>
            <h2>Lecturers</h2>
          </div>
          <AddNewLecturer />
        </LecturerContainer>
        <LecturersTable data={data} />
      </ContainerMain>
      <LecturerProfile>
        <Action>
          <Button text="Delete Lecturer" action={deleteLecturer} />
          <DefaultButton text="Suspend Lectuer" action={suspendLecturer} />
        </Action>
        <Academic>
          <Info>Personal Info.</Info>
          <Data>Name</Data>
          <Description>Jenny Wilson</Description>
          <Data>Age</Data>
          <Description>54</Description>
          <Data>Level</Data>
          <Description>4.5 First Class</Description>
        </Academic>
        <Academic>
          <Info>Academic Info.</Info>
          <Data>Staff ID</Data>
          <Description>43178</Description>
          <Data>Department/Course</Data>
          <Description>Chemical Science/Biochemistry</Description>
          <Data>EMAIL address</Data>
          <Description>alma.lawson@example.com</Description>
        </Academic>
        <div>
          <ProfileImage
            src={lecturer}
            width="250"
            height="250"
            alt="profileImage"
          />
        </div>
      </LecturerProfile>
    </LecturerPage>
  );
};

export default Lecturers;

const LecturerPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  width: 100%;
  min-height: 100vh;
`;

const ProfileImage = styled.img`
  width: 264px;
  height: 292px;
  align-items: center;
`;

const LecturerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 90px;
  margin-bottom: 30px;
  width: 100%;
`;

const LecturerProfile = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin-top: 0px;
  min-height: 100vh;
  height: 100%;
  padding: 20px;
  width: 450px;
`;

const Academic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin-top: 20px;
  min-height: 250px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  font-weight: bold;
  font-size: 12px;
  color: grey;
  line-height: 30px;
`;

const Description = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const Action = styled.div`
  display: flex;
  width: 100%;
  height: auto !important;
  flex-direction: row;
  justify-content: space-between;
`;
