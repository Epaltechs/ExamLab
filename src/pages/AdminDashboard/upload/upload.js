import React from "react";
import UpcomingExamSidebar from "../../../components/UpcomingExamSidebar";
import { MainContent, SubContent, UploadBox, UploadText, InnerBox, InnerText, Upload, InnerUpload, UploadImg, FileText1, FileText2, DownloadText, InputDiv, Inputs, Dept, Input, InputButton, Btn2, Btn1 } from "./StyledUpload";

const Uploads = () => {
  

  return (
    <MainContent>
      <SubContent>
        <UploadBox>
          <UploadText> Upload Exam Questions</UploadText>
          <InnerBox>
            <InnerText>Upload file</InnerText>
            <Upload>
              <InnerUpload>
                <UploadImg>
                  <img src="./Icon.png" alt="" />
                </UploadImg>
                <InnerText>
                  <FileText1>
                    Upload a file or drag and drop
                  </FileText1>
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
                  <input
                    type="text"
                    placeholder="Select Department and level"
                  />

                  <input type="text" placeholder="Select Course" />
                </Dept>
              </Inputs>
              <Inputs>
                <input type="text" placeholder="Prerequisite Course" />
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

        {/* side bar start here  */}
        <div style={{marginLeft: '20px'}}>
         <UpcomingExamSidebar />
        </div>
        


      </SubContent>
    </MainContent>
  );
};

export default Uploads;
