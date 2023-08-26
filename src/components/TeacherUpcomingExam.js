import React from "react";
import { useState } from "react";
import styled from "styled-components";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SearchBar from "./searchbar";
import {
  MainSearch,
  SideBar,
  SearchBars,
  TextBox,
  ExamText,
  ExamBox,
  ExamDate,
  ExamTime,
  InnerExam,
  ExamSub,
  ExamSub1,
  ExamSub2,
  ExamSub3,
  Time,
  CourseCode,
  Bar,
  Icon,
} from "../styles/StyledExamSidebar";

const TeacherUpcomingExam = () => {
  const [navbar, setNavbar] = useState(false);

  const handleShow = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <MainSearch>
        <Bar>
          {navbar ? (
            <Button onClick={handleShow}></Button>
          ) : (
            <Button onClick={handleShow}>
              <Icon>
                <TableRowsIcon />
              </Icon>
            </Button>
          )}
        </Bar>

        <SideBar style={{ display: navbar ? "flex" : "" }}>
          <SearchBars>
            {/* search component */}
            <div style={{ width: "10%" }}>
              <SearchBar />
            </div>
            <Bar>
              {navbar ? (
                <Button onClick={handleShow}>
                  <Icon>
                    <ArrowRightAltIcon />
                  </Icon>
                </Button>
              ) : (
                <Button onClick={handleShow}>
                  <Icon>
                    <TableRowsIcon />
                  </Icon>
                </Button>
              )}
            </Bar>
          </SearchBars>

          <TextBox>
            <ExamText>Upcoming Examination</ExamText>
          </TextBox>

          <ExamBox>
            <ExamDate>
              <p> 15 March </p>
              <p> ooo </p>
            </ExamDate>

            <ExamTime>
              <InnerExam>
                <Time>
                  <p> 08:30 </p>
                </Time>
                <ExamSub>
                  <CourseCode>Mathematics</CourseCode>
                </ExamSub>
              </InnerExam>
              <InnerExam>
                <Time>
                  <p style={{ marginLeft: "5px" }}> 11:00 </p>
                </Time>
                <ExamSub1>
                  <CourseCode>Art</CourseCode>
                </ExamSub1>
              </InnerExam>
            </ExamTime>
          </ExamBox>

          {/* sub 2 */}

          <ExamBox>
            <ExamDate>
              <p> 16 March </p>
              <p> ooo </p>
            </ExamDate>

            <ExamTime>
              <InnerExam>
                <Time>
                  <p> 09:30 </p>
                </Time>
                <ExamSub>
                  <CourseCode>Physics</CourseCode>
                </ExamSub>
              </InnerExam>

              <InnerExam style={{ marginRight: "13px" }}>
                <Time>
                  <p style={{ marginLeft: "3px" }}> 12:00 </p>
                </Time>
                <ExamSub1>
                  <CourseCode>Introtech</CourseCode>
                </ExamSub1>
              </InnerExam>
            </ExamTime>
          </ExamBox>

          {/* sub 3 */}

          <ExamBox>
            <ExamDate>
              <p> 18 March </p>
              <p> ooo </p>
            </ExamDate>

            <ExamTime>
              <InnerExam>
                <Time>
                  <p> 08:30 </p>
                </Time>
                <ExamSub>
                  <CourseCode>Biology</CourseCode>
                </ExamSub>
              </InnerExam>

              <InnerExam>
                <Time>
                  <p style={{ marginLeft: "3px" }}> 10:00 </p>
                </Time>
                <ExamSub1>
                  <CourseCode>Agriculture</CourseCode>
                </ExamSub1>
              </InnerExam>
              <InnerExam>
                <Time>
                  <p style={{ marginLeft: "3px" }}> 01:00 </p>
                </Time>
                <ExamSub1>
                  <CourseCode>Economics</CourseCode>
                </ExamSub1>
              </InnerExam>
            </ExamTime>
          </ExamBox>

          {/* sub 4 */}

          <ExamBox>
            <ExamDate>
              <p> 20 March </p>
              <p> ooo </p>
            </ExamDate>

            <ExamTimeLast>
              <InnerExam style={{ marginRight: "" }}>
                <Time>
                  <p> 09:00 </p>
                </Time>
                <ExamSub>
                  <CourseCode>Chemistry</CourseCode>
                </ExamSub>
              </InnerExam>

              <InnerExam>
                <Time>
                  <p> 09:00 </p>
                </Time>
                <ExamSub1>
                  <CourseCode>Further Maths</CourseCode>
                </ExamSub1>
              </InnerExam>

              <InnerExam>
                <Time>
                  <p> 09:00 </p>
                </Time>
                <ExamSub2>
                  <CourseCode>Home Economics</CourseCode>
                </ExamSub2>
              </InnerExam>

              <InnerExam>
                <Time>
                  <p> 09:00 </p>
                </Time>
                <ExamSub3>
                  <CourseCode>Yoruba</CourseCode>
                </ExamSub3>
              </InnerExam>
            </ExamTimeLast>
          </ExamBox>
        </SideBar>
      </MainSearch>
    </>
  );
};

export default TeacherUpcomingExam;
const ExamTimeLast = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin-left: 20px;
`;
