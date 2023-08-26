import React from "react";
import UpcomingExamSidebar from "../../../components/UpcomingExamSidebar";
import
{MainDiv, LeftDiv, RightDiv, Content, TopText, Exam, Create, 
ExamBox, ExamImg, ExamText, ExamTitle, ExamBody, OngoingExam,
CourseBox, CourseImg, CourseTitle,
Title, Text, TextBtn, ButtonDiv, Startbtn, CalenderDiv,
 Date, DateTitle, Datebox, ColOne, ColTwo, ColText  } 
from "../styledComponents/outline.style"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import LaunchIcon from '@mui/icons-material/Launch';

const Calender = () => {
    return ( 
        <Content>
            <MainDiv>
                <LeftDiv>
                    <TopText>
                        <Exam>Examination</Exam>
                        <Create>Create New Exam</Create>
                    </TopText>

                    <ExamBox>
                        <ExamImg> <img src="/book.png" alt="" /> </ExamImg>
                        <ExamText>
                            <ExamTitle>Examination Guide</ExamTitle> <br />
                            <ExamBody> Check the Below Tiles to View and Start your present Examination. Note do not hit Submit Until you are 
                                done with your exam, Incase you run out of time dont Panic. The exam will submit automatically. 
                                The left tiles shows the upcoming exam
                            </ExamBody>
                        </ExamText>
                    </ExamBox>

                    <OngoingExam> Ongoing Examination </OngoingExam>

                    <CourseBox>
                        <CourseImg> <p>CSC</p> <p>211</p> </CourseImg>
                        <CourseTitle>
                            <Title>Introduction to Computer Science</Title>
                            <Text> Philosophy is the systematized study of general and fundamental questions, such as those about existence, re
                                ason, knowledge, values, mind, and language. 
                                Some sources claim the term was coined by Pythagoras, </Text>

                        <ButtonDiv>
                            
                            <TextBtn>3 Unit Course </TextBtn> 
                            <Startbtn>Start Exam</Startbtn>
                        </ButtonDiv>
                        
                        </CourseTitle>
                    </CourseBox>

                    <CalenderDiv>
                          
                        <Date>

                            <ColOne >
                            <Datebox>
                                <DateTitle>Academic Calender  </DateTitle>

                                <LaunchIcon  />


                            </Datebox>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                 <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={4} />
                                </LocalizationProvider>

                            </ColOne>

                            <ColTwo>
                            <Datebox>
                                <DateTitle>Notice Board  </DateTitle>

                                <LaunchIcon  />


                            </Datebox>

                            <img src="/student.png" alt="" />

                            <ColText>No important Notice Check Back Later</ColText>
                            
                            
                            </ColTwo>
                            
                        

                        </Date>


                    </CalenderDiv>




                    
                

                </LeftDiv>
                
                <RightDiv>
                    <UpcomingExamSidebar />
                </RightDiv>

            </MainDiv>
        </Content>
     );
}
 
export default Calender;