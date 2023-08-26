import styled from "styled-components"
export const Content = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* padding-left: 20px; */


`

export const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

`

export const LeftDiv = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-left: 20px;
    margin-right: 30px;


    
`
export const RightDiv = styled.div`
    width: 300px;
    margin-top: 50px;

    

`

export const TopText = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const Exam = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #000000;


`

export const Create = styled.button`
    padding: 0px 25px;
    border: none;
    border-radius: 50px;
    color: #ffffff;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 22px;
    cursor: pointer;
`

export const ExamBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
    @media (max-width: 1000px){
    flex-direction: column;

    }
`

export const ExamImg = styled.div`
    

`

export const ExamText = styled.div`
    margin-left: 12px;
    
`

export const ExamBody = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #A6A6A6;

`

export const ExamTitle = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #54565A;
`

export const OngoingExam = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #000000;
    margin-top: 40px;
    margin-bottom: 70px;

`
export const CourseBox = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px){
    flex-direction: column;

    }
    /* justify-content: center;
    align-items: center; */
`

export const CourseImg = styled.div`
    background: #EFEFEF;
    border-radius: 70px;
    padding-right: 50px;
    padding-left: 50px;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-bottom: 20px;
    line-height: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    color: #54565A;
    @media (max-width: 1000px){
    justify-content: center;
    align-items: center;
    align-self: center;
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 25px;
    padding-bottom: 25px;
    width: 30%;

    }

`


export const CourseTitle = styled.div`
    margin-left: 40px;

`

export const Title = styled.h4`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
    color: #54565A;

`

export const Text = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #A6A6A6;

`

export const TextBtn = styled.button`
    cursor: pointer;
    float: right;
    border: none;
    background: #FFF0D7;
    border-radius: 10px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 24px;
    color: #54565A;
    padding: 0px 25px;
    margin-top: 20px;
    
`

/* styled componenets for calender */

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const Startbtn = styled.button`
    cursor: pointer;
    float: right;
    border: none;
    background: #F58634;
    border-radius: 10px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 24px;
    color: #FFFFFF;
    padding: 0px 35px;
    margin-top: 20px;
    margin-left: 10px;
    
`

export const CalenderDiv = styled.div`
    display: flex;
    margin-top: 70px;
    flex-direction: column;


`

export const Date = styled.div`
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    /* width: 524px; */
    @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
  }


`

export const DateTitle = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #111827;
    margin-right: 5px;


`

export const Datebox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const ColOne = styled.div`
    width: 500px;
    align-self: stretch;
    /* background: #000; */

`

export const ColTwo = styled.div`

`

export const ColText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    /* or 167% */

    text-align: center;

    color: #C4C4C4;

    `