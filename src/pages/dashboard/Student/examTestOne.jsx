import React from 'react';
import { MainDiv, ContentDiv, Right, QuestionBox, QTitle, Answer, TimeBox, ButtonDiv } from './styleTest';
import ExamSidebar from '../../dashboard/course/examSidebar';
const TestOne = () => {
    return ( 
        <MainDiv>

            <ContentDiv>
                
                <QuestionBox>
                <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '14px', lineHeight: '22px', 
                 color: '#000000', letterSpacing: '0.02em', marginBottom: '50px'}}> Present Examination</p>
                    <QTitle>
                        <Answer>
                            <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '14px', lineHeight: '22px', 
                            color: '#1E1E1E', letterSpacing: '0.02em', marginBottom: '5px'}}>Fundamentals of Calculus</p>
                            <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '17px', 
                            color: '#696F79', letterSpacing: '0.02em'}}>Answer the Question Below</p>
                        </Answer>
                        <TimeBox>
                            <img src="/clock.png" alt="" />
                            <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '30px', 
                            color: '#000000', letterSpacing: '0.02em', marginLeft: '7px'}}>00.00 Min</p>
                        </TimeBox>
                    </QTitle>
                <div>
                    <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '14px', lineHeight: '22px', 
                    color: '#000000', letterSpacing: '0.02em', marginBottom: '30px'}}> Question 1/4 </p>

                    <p style={{ fontFamily: 'Manrope', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '28px', 
                    color: '#1E1E1E', letterSpacing: '0.02em', marginBottom: '30px'}}> 1.  The intercepts of a linear function f are at (k,0) and (o,m).If K m 0, which of the following <br /> describes the scope of f? </p>

                </div>

                <div>
                    <div style={{display: 'flex', marginBottom: '20px'}}>
                      <input type="radio" style={{accentColor: 'black'}} />
                      <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '28px', 
                      color: '#1E1E1E', letterSpacing: '0.02em', marginLeft: '15px'}} > Its is positive</p>
                    </div>

                    <div style={{display: 'flex', marginBottom: '20px'}}>
                      <input type="radio" style={{accentColor: 'black'}} />
                      <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '28px', 
                      color: '#1E1E1E', letterSpacing: '0.02em', marginLeft: '15px'}} > Its is negative</p>
                    </div>

                    <div style={{display: 'flex', marginBottom: '20px'}}>
                      <input type="radio" style={{accentColor: 'black'}} />
                      <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '28px', 
                      color: '#1E1E1E', letterSpacing: '0.02em', marginLeft: '15px'}} > Its is undefined</p>
                    </div>

                    <div style={{display: 'flex', marginBottom: '20px'}}>
                      <input type="radio" style={{accentColor: 'black'}} />
                      <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '28px', 
                      color: '#1E1E1E', letterSpacing: '0.02em', marginLeft: '15px'}} > Its is zero</p>
                    </div>
                    
                </div>
                    
                </QuestionBox>

                <ButtonDiv>
                    <button style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '500', lineHeight: '28px', fontSize: '14px', background: '#ffffffff', padding: '5px', width: '110px', border: '1px solid #AEB0B3', borderRadius: '8px', cursor: 'pointer', marginRight: '15px'}}>Prev</button>
                    <button style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '500', lineHeight: '28px', fontSize: '14px', background: '#ffffffff', padding: '5px', width: '110px', border: '1px solid #AEB0B3', cursor: 'pointer', borderRadius: '8px'}}>Next</button>

                </ButtonDiv>

            </ContentDiv>

            <Right>
                < ExamSidebar />

            </Right>
        </MainDiv>

     );
}
 
export default TestOne;