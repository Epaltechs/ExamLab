import React from "react";
import styled from "styled-components";
import guide from "../../assets/guide.png";
import more from "../../assets/more.png";
import rectangle from "../../assets/Rectangle 2047.png";
import rectangleGreen from "../../assets/RectangleGreen.png";
import rectangleYellow from "../../assets/rectangleYellow.png";
import rectangleLemon from "../../assets/RectangleLemon.png";
import { studentExamData } from "../../constant";

const ContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: auto;
  margin-top: -300px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const HeaderText = styled.h3`
  color: #000000;
  font-family: Inter, sans-serif;
  font-weight: 600;
  margin-top: -30px;
  text-align: left;
  font-size: 14px;
`;

const GuideCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.02);
  width: 716px;
  height: 146px;
  margin-top: 50px;
  padding: 0px 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 516px;
    height: 306px;

    padding-top: 35px;
  }
`;

const GuideIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding-left: -50px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const GuideContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
`;

const Img = styled.img`
  background: none;
  margin-left: -110px;
`;

const GuideText = styled.h3`
  align-items: flex-start;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #a6a6a6;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 12px;
`;

const CourseCardHeader = styled.h3`
  color: #000;
  font-family: Inter, sans-serif;
  font-weight: 600;
  margin-bottom: -30px;
  margin-top: 20px;
  font-size: 12px;
`;

const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.02);
  width: 716px;
  height: 203px;
  margin-top: 50px;
  padding: 0px 20px;

  @media (max-width: 768px) {
    width: 516px;
    height: 400px;
  }
`;

const UpperContentFrame = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const CourseIconFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding-left: -50px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const CourseTitle = styled.h3`
  color: #54565a;
  border: 1px solid #efefef;
  background: #efefef;
  border-radius: 50%;
  padding: 30px;
  width: 120px;
  height: 120px;
  text-align: center;
  font-size: 16px;
  margin-left: -90px;
`;

const CourseContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
`;

const CourseText = styled.h3`
  align-items: flex-start;
  font-size: 14px;
  margin-bottom: 20px;
`;

const CourseParagraph = styled.p`
  color: #a6a6a6;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 12px;
`;

const Button = styled.button`
  border-radius: 20px;
  background-color: ${(props) =>
    props.variant === "peach" ? "#FFF0D7" : "#F58634"};
  border: 1px solid
    ${(props) => (props.variant === "peach" ? "#FFF0D7" : "#F58634")};
  padding: ${(props) => (props.variant === "peach" ? "3px 20px" : "3px 25px")};
  color: ${(props) => (props.variant === "peach" ? "#54565A" : "#FFFFFF")};
  cursor: pointer;
  float: right;
  margin: 0px 7px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StudentExam = () => {
  return (
    <MainContainer>
      <ContainerOne>
        <HeaderText>Examination</HeaderText>
        <GuideCard>
          <GuideIconContainer>
            <Img src={guide} className="guide" />
          </GuideIconContainer>
          <GuideContentContainer>
            <GuideText>Examination Guide</GuideText>
            <Paragraph>
              Check the Below Tiles to View and Start your present Examination.
              Note do not hit Submit Until you are done with your exam, Incase
              you run out of time don't Panic. The exam will submit
              automatically. The left tiles shows the upcoming exam.
            </Paragraph>
          </GuideContentContainer>
        </GuideCard>
        <CourseCardHeader>Ongoing Examination</CourseCardHeader>
        <CourseCard>
          <UpperContentFrame>
            <CourseIconFrame>
              <CourseTitle>GST 221</CourseTitle>
            </CourseIconFrame>
            <CourseContentContainer>
              <CourseText>Philosophy of Land, Water and Air</CourseText>
              <CourseParagraph>
                Philosophy is the systematized study of general and fundamental
                questions, such as those about existence, reason, knowledge,
                values, mind, and language. Some sources claim the term was
                coined by Pythagoras.
              </CourseParagraph>
            </CourseContentContainer>
          </UpperContentFrame>
          <ButtonWrapper>
            <Button variant="peach">3 Unit Course</Button>
            <Button variant="orange">Start Exam</Button>
          </ButtonWrapper>
        </CourseCard>
      </ContainerOne>
      <ContainerTwo>
        <Title>Upcoming Examination</Title>
        {studentExamData &&
          studentExamData.map((examData) => {
            const {
              id,
              headings,
              bodyTop,
              bodyBottom,
              bodyLast,
              bodyFourth,
            } = examData;
            return (
              <BodyCard key={id}>
                <div>
                  {headings.map((heading) => {
                    const { id, date, icon } = heading;
                    return (
                      <HeadWrapper key={id}>
                        <DateWrapper>
                          <DateTag>{date}</DateTag>
                        </DateWrapper>
                        <div>
                          <img src={more} alt="" />
                        </div>
                      </HeadWrapper>
                    );
                  })}

                  {bodyTop.map((item) => {
                    const { id, time, icon, courseCode, courseTitle } = item;
                    return (
                      <TopWrapper key={id}>
                        <TopContentContainer>
                          <div>{time}</div>
                          <div>
                            <RectangleImg src={rectangle} alt="" />
                          </div>
                          <CourseContainer>
                            <div>
                              <CourseCode>{courseTitle}</CourseCode>
                              <CourseCode>{courseCode}</CourseCode>
                            </div>
                            <div>
                              {/* <CourseTitleTag>{courseTitle}</CourseTitleTag> */}
                            </div>
                          </CourseContainer>
                        </TopContentContainer>

                        {bodyBottom &&
                          bodyBottom.map((data) => {
                            const {
                              id,
                              time,
                              icon,
                              courseCode,
                              courseTitle,
                            } = data;
                            return (
                              <MiddleContentContainer>
                                <div>{time}</div>
                                <div>
                                  <img src={rectangleGreen} alt="" />
                                </div>
                                <CourseContainer>
                                  <div>
                                    <CourseCode>{courseTitle}</CourseCode>
                                    <CourseCode>{courseCode}</CourseCode>
                                  </div>
                                  <div>
                                    <CourseTitleTag>
                                      {/* {courseTitle} */}
                                    </CourseTitleTag>
                                  </div>
                                </CourseContainer>
                              </MiddleContentContainer>
                            );
                          })}
                        {bodyLast &&
                          bodyLast.map((data) => {
                            const {
                              id,
                              time,
                              icon,
                              courseCode,
                              courseTitle,
                            } = data;
                            return (
                              <MiddleContentContainer>
                                <div>{time}</div>
                                <div>
                                  <img src={rectangleYellow} alt="" />
                                </div>
                                <CourseContainer>
                                  <div>
                                    <CourseCode>{courseTitle}</CourseCode>
                                    <CourseCode>{courseCode}</CourseCode>
                                  </div>
                                  <div>
                                    <CourseTitleTag>
                                      {/* {courseTitle} */}
                                    </CourseTitleTag>
                                  </div>
                                </CourseContainer>
                              </MiddleContentContainer>
                            );
                          })}
                        {bodyFourth &&
                          bodyFourth.map((data) => {
                            const {
                              id,
                              time,
                              icon,
                              courseCode,
                              courseTitle,
                            } = data;
                            return (
                              <MiddleContentContainer>
                                <div>{time}</div>
                                <div>
                                  <img src={rectangleLemon} alt="" />
                                </div>
                                <CourseContainer>
                                  <div>
                                    <CourseCode>{courseTitle}</CourseCode>
                                    <CourseCode>{courseCode}</CourseCode>
                                  </div>
                                  <div>
                                    <CourseTitleTag>
                                      {/* {courseTitle} */}
                                    </CourseTitleTag>
                                  </div>
                                </CourseContainer>
                              </MiddleContentContainer>
                            );
                          })}
                      </TopWrapper>
                    );
                  })}
                </div>
              </BodyCard>
            );
          })}
      </ContainerTwo>
    </MainContainer>
  );
};

export default StudentExam;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 260px;
  height: auto;
  margin-top: 50px;
`;

const Title = styled.h3`
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #000000;
  font-size: 12px;
  margin: 50px 0 0 38px;
`;

const DateWrapper = styled.div``;
const DateTag = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 10px;
`;

const BodyCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: auto;
  margin: 40px 38px 0px 38px;
`;

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TopWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px 0px;
  width: 100%;
`;

const TopContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const MiddleContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  /* width: 100%; */
`;

const RectangleImg = styled.img`
  width: 2px;
  height: 23px;
`;

const CourseCode = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: #54565a;
`;
const CourseTitleTag = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: #54565a;
`;
