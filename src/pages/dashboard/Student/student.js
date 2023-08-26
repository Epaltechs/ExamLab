import React from "react";
import StudentsTable from "../../dashboard/Table/studentsTable";
import styled from "styled-components";
import DefaultButton from "../../../components/Buttons/DefaultButton";
import Button from "../../../components/Buttons/ButtonStyles";
import student from "../../../assets/student.png";
import AddNewStudent from "../Student/AddNewStudents";
import data from "../Student/studentData";

const Students = () => {
  console.log("Student Details");

  const suspendStudent = () => {};
  const deleteStudent = () => {};

  return (
    <StudentsPage>
      <ContainerMain>
        <StudentContainer>
          <div>
            <h2>Students</h2>
          </div>
          <AddNewStudent />
        </StudentContainer>
        <StudentsTable data={data} />
      </ContainerMain>
      <StudentProfile>
        <Action>
          <Button width="120" text="Delete Student" action={deleteStudent} />
          <DefaultButton
            width="120"
            text="Suspend Student"
            action={suspendStudent}
          />
        </Action>
        <Academic>
          <Info>Personal Info.</Info>
          <Data>Name</Data>
          <Description>Jenny Wilson</Description>
          <Data>Age</Data>
          <Description>23</Description>
          <Data>Grade</Data>
          <Description>4.5 First Class</Description>
        </Academic>
        <Academic>
          <Info>Academic Info.</Info>
          <Data>Semester</Data>
          <Description>5thyear - 2nd Semester</Description>
          <Data>Department/Course</Data>
          <Description>Chemical Science/Biochemistry</Description>
          <Data>Grade</Data>
          <Description>4.5 First sdczd Class</Description>
        </Academic>
        <div>
          <ProfileImage
            src={student}
            width="250"
            height="350"
            alt="profileImage"
          />
        </div>
      </StudentProfile>
    </StudentsPage>
  );
};

export default Students;

const StudentsPage = styled.div`
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

const StudentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 90px;
  margin-bottom: 30px;
  width: 100%;
`;

const StudentProfile = styled.div`
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
