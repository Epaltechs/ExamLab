import styled from "styled-components";

export const MainSearch = styled.div`
  display: flex;
  margin-left: 50px;
  justify-content: center;
  align-items: center;
`;
export const SideBar = styled.div`
  width: 322px;
  padding: 15px;
  border: none;
  background: #fdfefe;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
    padding: 15px;
    /* left: -2000; */
    border: none;
    background: #fdfefe;
    display: none;
    flex-direction: column;
    align-items: center;
  }
`;
export const SearchBars = styled.div`
  margin-bottom: 20px;
`;
export const TextBox = styled.div`
  padding: 5px;
  margin-bottom: 40px;
`;
export const ExamText = styled.p`
  margin-bottom: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #000000;
`;
export const ExamDate = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0.02em;
    color: #a6a6a6;
  }
`;
export const ExamTime = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
export const InnerExam = styled.div`
  display: flex;
  padding: 10px;
`;
export const ExamSub = styled.div`
  margin-left: 20px;
  /* padding: 15px; */
  border-left: 2px solid #f97316;
  padding-left: 15px;
`;
export const ExamSub1 = styled.div`
  margin-left: 20px;
  /* padding: 15px; */
  border-left: 2px solid #22c55e;
  padding-left: 15px;
`;
export const ExamSub2 = styled.div`
  margin-left: 20px;
  /* padding: 15px; */
  border-left: 2px solid #f59e0b;
  padding-left: 15px;
`;
export const ExamSub3 = styled.div`
  margin-left: 20px;
  /* padding: 15px; */
  border-left: 2px solid #8bbf36;
  padding-left: 15px;
`;
export const Time = styled.div`
  display: flex;
  align-items: center;

  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 10px;
    letter-spacing: 0.02em;
    color: #54565a;
  }
`;
export const CourseCode = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: 0.02em;
  color: #a6a6a6;
`;
export const CourseTitle = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0.02em;
  color: #54565a;
`;
export const Bar = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const ExamBox = styled.div``;
export const Icon = styled.div`
  @media (max-width: 1000px) {
    color: #d19d3b;
    font-size: 30px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const QuestionBox = styled.div`
  /* height: 857px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 262px;
  background: #ffffff;
  border-radius: 10px;
  height: 49px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 7px;
  cursor: pointer;

  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 10px;
    color: #54565a;
  }
`;
