import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Paragraph = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #000000;
  font-size: 16px;
`;

export const Span = styled.span`
  font-family: Inter, sans-serif;
  font-weight: 400;
  color: #54565a;
  font-size: 12px;
`;

export const DefaultTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
  margin-left: 74px;
`;

export const HeaderText = styled.h3`
  color: #000000;
  font-family: Inter, sans-serif;
  font-weight: 600;
  margin-top: -30px;
  text-align: left;
  font-size: 14px;
`;

export const GuideCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.02);
  width: 100%;
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

export const GuideIconContainer = styled.div`
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

export const GuideContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const Img = styled.img`
  background: none;
  margin-left: -110px;
`;

export const GuideText = styled.h3`
  align-items: flex-start;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const CourseCardHeader = styled.h3`
  color: #000;
  font-family: Inter, sans-serif;
  font-weight: 600;
  margin-bottom: -30px;
  margin-top: 20px;
  font-size: 12px;
`;

export const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.02);
  /* width: 100%; */
  height: 203px;
  margin-top: 50px;
  padding: 0px 20px;

  @media (max-width: 768px) {
    width: 516px;
    height: 400px;
  }
`;

export const UpperContentFrame = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const CourseIconFrame = styled.div`
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

export const CourseTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const CourseContentContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const CourseText = styled.h3`
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const CourseParagraph = styled.p`
  color: #a6a6a6;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 12px;
  width: 100%;
`;

export const Button = styled.button`
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
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
