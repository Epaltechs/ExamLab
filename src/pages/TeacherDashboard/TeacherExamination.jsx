import React from "react";
import guide from "../../assets/guide.png";
import {
  MainContainer,
  DefaultTableContainer,
  HeaderText,
  GuideCard,
  GuideIconContainer,
  GuideContentContainer,
  Paragraph,
  CourseCard,
  CourseCardHeader,
  CourseContentContainer,
  CourseIconFrame,
  CourseParagraph,
  CourseText,
  CourseTitle,
  Img,
  GuideText,
  UpperContentFrame,
  Button,
  ButtonWrapper,
  Wrapper,
} from "./GlobalStyles";
import TeacherUpcomingExam from "../../components/TeacherUpcomingExam";
import styled from "styled-components";

const TeacherExamination = () => {
  return (
    <MainContainer>
      <DefaultTableContainer>
        <HeaderText>Examination</HeaderText>
        <GuideCard>
          <GuideIconContainer>
            <Img src={guide} className="guide" />
          </GuideIconContainer>
          <GuideContentContainer>
            <GuideText>Examination Guide</GuideText>
            <CourseParagraph>
              Check the Below Tiles to View and Start your present Examination.
              Note do not hit Submit Until you are done with your exam, Incase
              you run out of time don't Panic. The exam will submit
              automatically. The left tiles shows the upcoming exam. English
              Language is the general language of communication and is the block
              on which other forms of educational knowledge is taught.
            </CourseParagraph>
          </GuideContentContainer>
        </GuideCard>
        <CourseCardHeader>Ongoing Examination</CourseCardHeader>
        {/* <CourseCard>
          <UpperContentFrame>
            <CourseIconFrame>
              <CourseTitle>English</CourseTitle>
            </CourseIconFrame>
            <CourseContentContainer>
              <Wrapper>
                <GuideText>English Language</GuideText>
              </Wrapper>
              <div>
                <CourseParagraph>
                  English Language is the general language of communication and
                  is the block on which other forms of educational knowledge is
                  taught.
                </CourseParagraph>
              </div>
            </CourseContentContainer>
          </UpperContentFrame>
          <ButtonWrapper>
            <Button variant="peach">3 Unit Course</Button>
          </ButtonWrapper>
        </CourseCard> */}

        <CourseCard>
          <UpperContentFrame>
            <CourseIconFrame>
              <CourseTitle>English</CourseTitle>
            </CourseIconFrame>
            <CourseContentContainer>
              <Wrapper>
                <GuideText>English Language</GuideText>
              </Wrapper>
              <div>
                <CourseParagraph>
                  English Language is the general language of communication and
                  is the block on which other forms of educational knowledge is
                  taught. English Language is the general language of
                  communication and is the block on which other forms of
                  educational knowledge is taught.
                </CourseParagraph>
              </div>
            </CourseContentContainer>
          </UpperContentFrame>
          <ButtonWrapper>
            <Button variant="peach">3 Unit Course</Button>
          </ButtonWrapper>
        </CourseCard>
        <CourseCardHeader>Ongoing Examination</CourseCardHeader>

        <CourseCard>
          <UpperContentFrame>
            <CourseIconFrame>
              <CourseTitle>Literature</CourseTitle>
            </CourseIconFrame>
            <CourseContentContainer>
              <Wrapper>
                <GuideText>Literature</GuideText>
              </Wrapper>
              <div>
                <CourseParagraph>
                  Literature is the systematized study of general and
                  fundamental questions, such as those about existence, reason,
                  knowledge, values, mind, and language. Some sources claim the
                  term was coined by Pythagoras.
                </CourseParagraph>
              </div>
            </CourseContentContainer>
          </UpperContentFrame>
          <ButtonWrapper>
            <Button variant="peach">3 Unit Course</Button>
          </ButtonWrapper>
        </CourseCard>
      </DefaultTableContainer>
      <div style={{ marginTop: "80px" }}>
        <TeacherUpcomingExam />
      </div>
    </MainContainer>
  );
};

export default TeacherExamination;
