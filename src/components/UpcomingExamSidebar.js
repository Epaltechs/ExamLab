import React from 'react';
import { useState } from "react";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SearchBar from './searchbar';
import { MainSearch, SideBar, SearchBars, TextBox, ExamText, ExamBox, ExamDate, 
        ExamTime, InnerExam, ExamSub, ExamSub1, ExamSub2, ExamSub3, Time, CourseCode, 
        CourseTitle, Bar, Icon } from '../styles/StyledExamSidebar';

const UpcomingExamSidebar = () => {
    const [navbar, setNavbar] = useState(false);

    const handleShow = () => {
        setNavbar(!navbar);
  };
    return ( 
        <>
            <MainSearch>
            <Bar>
                {navbar ? (
                <Button onClick={handleShow}>
                                      
                </Button>
                ) : (
                <Button onClick={handleShow}>
                    <Icon>
                     <TableRowsIcon  />
                    </Icon>
                    
                </Button>
                )}
            </Bar>

            <SideBar
                style={{ display: navbar ? "flex" : "" }}
            >
                <SearchBars>
                {/* search component */}
                <div style={{width: '10%'}}>
                    <SearchBar />
                </div>
                <Bar>
                    {navbar ? (
                    <Button onClick={handleShow}>
                        <Icon>
                          <ArrowRightAltIcon  />
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
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub>
                            <CourseCode>CHM212</CourseCode>
                            <CourseTitle>Analytical Chemistry</CourseTitle>
                        </ExamSub>
                        </InnerExam>

                        <InnerExam>
                        <Time>
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub1>
                            <CourseCode>BCH312</CourseCode>
                            <CourseTitle>Clinical Biochemistry</CourseTitle>
                        </ExamSub1>
                        </InnerExam>
                    </ExamTime>
                </ExamBox>

                {/* sub 2 */}

                <ExamBox>
                    <ExamDate>
                        <p> 15 March </p>
                        <p> ooo </p>
                    </ExamDate>

                    <ExamTime>
                        <InnerExam>
                        <Time>
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub>
                            <CourseCode>CHM212</CourseCode>
                            <CourseTitle>Analytical Chemistry</CourseTitle>
                        </ExamSub>
                        </InnerExam>

                        <InnerExam>
                        <Time>
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub1>
                            <CourseCode>BCH312</CourseCode>
                            <CourseTitle>Clinical Biochemistry</CourseTitle>
                        </ExamSub1>
                        </InnerExam>

                        <InnerExam>
                        <Time>
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub2>
                            <CourseCode>BCH312</CourseCode>
                            <CourseTitle>Clinical Biochemistry</CourseTitle>
                        </ExamSub2>
                        </InnerExam>

                        

                    </ExamTime>
                </ExamBox>
    

                {/* sub 3 */}

                <ExamBox>
                    <ExamDate>
                        <p> 15 March </p>
                        <p> ooo </p>
                    </ExamDate>

                    <ExamTime>
                        <InnerExam>
                        <Time>
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub>
                            <CourseCode>CHM212</CourseCode>
                            <CourseTitle>Analytical Chemistry</CourseTitle>
                        </ExamSub>
                        </InnerExam>

                        <InnerExam>
                        <Time>
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub1>
                            <CourseCode>BCH312</CourseCode>
                            <CourseTitle>Clinical Biochemistry</CourseTitle>
                        </ExamSub1>
                        </InnerExam>
                    </ExamTime>
                </ExamBox>

     

                {/* sub 4 */}

                <ExamBox>
                    <ExamDate>
                        <p> 15 March </p>
                        <p> ooo </p>
                    </ExamDate>

                    <ExamTime>
                        <InnerExam>
                        <Time>
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub>
                            <CourseCode>CHM212</CourseCode>
                            <CourseTitle>Analytical Chemistry</CourseTitle>
                        </ExamSub>
                        </InnerExam>

                        <InnerExam>
                        <Time>
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub1>
                            <CourseCode>BCH312</CourseCode>
                            <CourseTitle>Clinical Biochemistry</CourseTitle>
                        </ExamSub1>
                        </InnerExam>

                        <InnerExam>
                        <Time>
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub2>
                            <CourseCode>BCH312</CourseCode>
                            <CourseTitle>Clinical Biochemistry</CourseTitle>
                        </ExamSub2>
                        </InnerExam>

                        <InnerExam>
                        <Time>
                            <p> 09:00 </p>
                        </Time>
                        <ExamSub3>
                            <CourseCode>BCH312</CourseCode>
                            <CourseTitle>Clinical Biochemistry</CourseTitle>
                        </ExamSub3>
                        </InnerExam>

                    </ExamTime>
                </ExamBox>

            </SideBar>
            </MainSearch>
        </>
     );
}
 
export default UpcomingExamSidebar;