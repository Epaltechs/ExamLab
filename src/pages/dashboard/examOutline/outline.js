import React from "react";
import {MainDiv, LeftDiv, RightDiv, Content, TopText, Exam, Create, ExamBox, ExamImg, ExamText, ExamTitle, ExamBody, OngoingExam, CourseBox, CourseImg, CourseTitle,
Title, Text, TextBtn   } 
from "../styledComponents/outline.style"
import UpcomingExamSidebar from "../../../components/UpcomingExamSidebar";



const Outline = () => {
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

                                <TextBtn>3 Unit Course </TextBtn>
                        </CourseTitle>
                    </CourseBox>

                    <OngoingExam> Ongoing Examination </OngoingExam>

                    <CourseBox>
                        <CourseImg> <p>CSC</p> <p>211</p> </CourseImg>
                        <CourseTitle>
                            <Title>Introduction to Computer Science</Title>
                            <Text> Philosophy is the systematized study of general and fundamental questions, such as those about existence, re
                                ason, knowledge, values, mind, and language. 
                                Some sources claim the term was coined by Pythagoras, </Text>

                                <TextBtn>3 Unit Course </TextBtn>
                        </CourseTitle>
                    </CourseBox>

                    

                

                </LeftDiv>
                
                <RightDiv>
                    <UpcomingExamSidebar />
                </RightDiv>

            </MainDiv>
        </Content>
     );
}
 
export default Outline;