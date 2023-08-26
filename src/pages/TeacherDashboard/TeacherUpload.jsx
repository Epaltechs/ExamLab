import React from "react";
import { MainContainer, DefaultTableContainer } from "./GlobalStyles";
import {
  UploadBox,
  UploadText,
  InnerBox,
  InnerText,
  Upload,
  InnerUpload,
  UploadImg,
  FileText1,
  DownloadText,
  InputDiv,
  Inputs,
  Input,
  FileText2,
  Dept,
  Btn1,
  Btn2,
  InputButton,
} from "../AdminDashboard/upload/StyledUpload";
import TeacherUpcomingExam from "../../components/TeacherUpcomingExam";

const TeacherUpload = () => {
  return (
    <MainContainer>
      <DefaultTableContainer>
        <UploadBox>
          <UploadText> Upload Exam Questions</UploadText>
          <InnerText>Upload File</InnerText>
          <InnerBox>
            <Upload>
              <InnerUpload>
                <UploadImg>
                  <img src="./Icon.png" alt="" />
                </UploadImg>
                <InnerText>
                  <FileText1>Upload a file or drag and drop</FileText1>
                  <FileText2>XLS up to 5MB</FileText2>
                </InnerText>
              </InnerUpload>
            </Upload>
            <DownloadText>
              {/* eslint-disable-next-line */}
              Don't have templates? Click <a href=""> Here </a> to download
            </DownloadText>
          </InnerBox>

          <InputDiv>
            <form action="">
              <Inputs>
                <Dept>
                  <input type="text" placeholder="Class" />

                  <input type="text" placeholder="Select Course" />
                </Dept>
              </Inputs>

              <Inputs>
                <input type="text" placeholder="Course Code" />
              </Inputs>

              <Input>
                <InputButton>
                  <Btn1> Save </Btn1>
                  <Btn2> Save & Upload </Btn2>
                </InputButton>
              </Input>
            </form>
          </InputDiv>
        </UploadBox>
      </DefaultTableContainer>
      {/* side bar start here  */}
      <div style={{ marginLeft: "20px", marginTop: "80px" }}>
        <TeacherUpcomingExam />
      </div>
    </MainContainer>
  );
};

export default TeacherUpload;
