import React from "react";
import UpcomingExamSidebar from "../../../components/UpcomingExamSidebar";
import
{MainDiv, LeftDiv, RightDiv, Content, TopText, Exam, 
ExamBox, ExamImg, ExamText, ExamTitle, ExamBody, OngoingExam,
CourseBox, CourseImg, CourseTitle,
Title, Text, TextBtn, ButtonDiv, Startbtn  } 
from "./StyledExamGuide"

const ExamGuide = () => {
    return ( 
        <Content>
            <MainDiv>
                <LeftDiv>
                    <TopText>
                        <Exam>Examination</Exam>
                        
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
                        <CourseImg> <p>BIO</p> <p>LOGY</p> </CourseImg>
                        <CourseTitle>
                            <Title> Biology </Title>
                            <Text> Biology is the study of life, from the smallest cell to the largest ecosystem. Explore the wonder and
                                 complexity of the natural world through the lens of biology. </Text>

                        <ButtonDiv>
                            
                            <TextBtn> Senior Secondary</TextBtn> 
                            <Startbtn>Start Exam</Startbtn>
                        </ButtonDiv>
                        
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
 
export default ExamGuide;