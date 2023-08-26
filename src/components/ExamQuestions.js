import * as React from "react";
import styled from 'styled-components';


const ExamQuestions = () => {
  
    return (
      <ExamProfile>
        <Bar>
        <Button>Cancel</Button>
        <Button>Approve</Button>
        </Bar>
        <Questions> 
            <Data>Question 3/4</Data>
            <Desc>3. The Intercepts of a linear function f are at [k,D] and [o,m]. if K >m>D, which of the following describes the scope of f?</Desc><br/>
            <Description>
            <input type="radio" name="select" checked/>     It is Positive  <br/> <br/>
            <input type="radio" name="select"/>     It is negative  <br/> <br/>
            <input type="radio" name="select"/>     It is undefined  <br/> <br/>
            <input type="radio" name="select" />    It is zero
            </Description>
            
            <Data>Question 3/4</Data>
            <Desc>3. The Intercepts of a linear function f are at [k,D] and [o,m]. if K >m>D, which of the following describes the scope of f?</Desc><br/>
            <Descript>
            <input type="radio" color="black" name="selection" checked/>     It is Positive <br/> <br/>
            <input type="radio"   name="selection"/>     It is negative  <br/>
            </Descript>
            <br/>
        </Questions>
        <Main> 
          <Header> <h4 style={{ color: '#000000', fontWeight: 600 }}>Exam Question/</h4> <h6 style={{ color: '#54565A', paddingTop: '6px'}}> CSC30</h6></Header>
            <Data>Fundamentals of Calculus</Data>
            <Question>Answer the question below</Question>
        </Main>
      </ExamProfile>
    )
}


export default ExamQuestions;

const ExamProfile = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-content: center;
  margin-top: 50px;
  height: 100%;
  margin-left: 50px;
  margin-right: 20px;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 10px;
`;

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin-top: 6px;
  width: 65%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-content: center;
  font-family: 'inter';
  color: #000000;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 35px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  font-family: 'inter';
  color: #1E1E1E;
  font-weight: 600;
  margin-left: 40px;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-family: 'inter';
  font-weight: 400;
  font-size: 14px;
  color: #1E1E1E;
  margin-left: 40px;
  margin-bottom: 30px;
`;

const Descript = styled.div`
  font-family: 'inter';
  font-weight: 400;
  font-size: 14px;
  color: #1E1E1E;
  margin-left: 40px;
`;

const Desc = styled.div`
  font-family: 'inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1E1E1E;
  margin-left: 40px;
`;

const Question = styled.div`
  font-family: 'inter';
  font-size: 14px;
  color: #696F79;
  margin-left: 40px;
  margin-bottom: 20px;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: flex-end;
  padding: 10px 10px;
  gap: 10px;
  width: 80%;
  height: 62px;
  background-color: rgba(34, 197, 94, 0.1);
`;

const Button = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  height: 10px;
  color: #16A34A;
  padding: 25px;
  padding-top: 10px;
  background-color: white;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
