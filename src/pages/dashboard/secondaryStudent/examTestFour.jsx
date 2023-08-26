import React from 'react';
import { MainDiv, ContentDiv, Right, QuestionBox, QTitle, Answer, TimeBox, ButtonDiv } from './styleTest';
import ExamSidebar from '../../dashboard/course/examSidebar';

const SecondaryFour = () => {
    return ( 
        <MainDiv>

            <ContentDiv>
                
                <QuestionBox>
                <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '14px', lineHeight: '22px', 
                 color: '#000000', letterSpacing: '0.02em', marginBottom: '50px'}}> Present Examination</p>
                    <QTitle>
                        <Answer>
                            <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '14px', lineHeight: '22px', 
                            color: '#1E1E1E', letterSpacing: '0.02em', marginBottom: '5px'}}>Biology</p>
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
                    color: '#000000', letterSpacing: '0.02em', marginBottom: '30px'}}> Question 4/4 </p>

                    <p style={{ fontFamily: 'Manrope', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '28px', 
                    color: '#1E1E1E', letterSpacing: '0.02em', marginBottom: '30px'}}> 4.  Which of the following undergo cell division </p>

                </div>

                <div>
                    <div style={{display: 'flex', marginBottom: '20px'}}>
                      <input type="radio" style={{accentColor: 'black'}} />
                      <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '28px', 
                      color: '#1E1E1E', letterSpacing: '0.02em', marginLeft: '15px'}} > Prokaryotic Cell</p>
                    </div>

                    <div style={{display: 'flex', marginBottom: '20px'}}>
                      <input type="radio" style={{accentColor: 'black'}} />
                      <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '28px', 
                      color: '#1E1E1E', letterSpacing: '0.02em', marginLeft: '15px'}} > Eukaryotic Cell</p>
                    </div>

                    <div style={{display: 'flex', marginBottom: '20px'}}>
                      <input type="radio" style={{accentColor: 'black'}} />
                      <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '28px', 
                      color: '#1E1E1E', letterSpacing: '0.02em', marginLeft: '15px'}} > Both prokaryotic and eukaryotic cell</p>
                    </div>

                    <div style={{display: 'flex', marginBottom: '20px'}}>
                      <input type="radio" style={{accentColor: 'black'}} />
                      <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '28px', 
                      color: '#1E1E1E', letterSpacing: '0.02em', marginLeft: '15px'}} > Prison Cell</p>
                    </div>
                    
                </div>
                    
                </QuestionBox>

                <ButtonDiv>
                    <button style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '500', lineHeight: '28px', fontSize: '14px', background: '#ffffffff', padding: '5px', width: '110px', border: '1px solid #AEB0B3', borderRadius: '8px', cursor: 'pointer', marginRight: '15px'}}>Prev</button>
                    <button style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '500', lineHeight: '28px', fontSize: '14px', background: '#F58634', padding: '5px', width: '110px', border: '1px solid #AEB0B3', cursor: 'pointer', borderRadius: '8px'}}>Submit</button>

                </ButtonDiv>

            </ContentDiv>

            <Right>
                < ExamSidebar />

            </Right>
        </MainDiv>

     );
}
 
export default SecondaryFour;