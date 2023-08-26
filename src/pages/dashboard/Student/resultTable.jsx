import React from 'react';
import data from "../Student/resultData";
import ResultData from "../../dashboard/Table/results";
import { MainContent, ResultDiv, ResultText, Filter, Session, MasterDiv } from './resultStyles';




const Result = () => {
    return ( 
        <MasterDiv>
       
            <MainContent>
                <ResultText>
                    <p style={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '22px',
                        letterSpacing: '0.02em',
                        color: '#000000',
                        }}>Results</p>
                    <Filter>
                        <Session> 
                            <p style={{marginRight: '20px'}}>Session </p> 
                            <img src="/session.png" alt="" />
                            

                        </Session>
                        
                        <Session> 
                            <p style={{marginRight: '20px'}}>Semester </p> 
                            <img src="/semester.png" alt="" />
                            

                        </Session>
                    </Filter>
                </ResultText>
                <ResultDiv>
                    <ResultData data={data} />
                </ResultDiv>
                
            </MainContent>
        </MasterDiv>


       
     );
}
 
export default Result;