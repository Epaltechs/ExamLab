import React from "react";
import { useState } from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { MainSearch, Bar, Icon, SearchBars, SideBar, TextBox, ExamText, QuestionBox, Question  } from "../../../styles/StyledExamSidebar";
import ExamSearch from "../../../components/ExamSearch";




const ExamSidebar = () => {
    const [navbar, setNavbar] = useState(false);
  
    const handleShow =()=>{
      setNavbar(!navbar)

    }
    return ( 
        <>
            <MainSearch>
            <Bar>
                {navbar ? (
                <Button onClick={handleShow}>
                                      
                </Button>
                ) : (
                <Button onClick={handleShow}>
                    <Icon>
                     <TableRowsIcon  />
                    </Icon>
                    
                </Button>
                )}
            </Bar>

            <SideBar
                style={{ display: navbar ? "flex" : "" }}
            >
                <SearchBars>
                {/* search component */}
                <div style={{width: '100%'}}>
                    <ExamSearch />
                </div>
                <Bar>
                    {navbar ? (
                    <Button onClick={handleShow}>
                        <Icon>
                          <ArrowRightAltIcon  />
                        </Icon>
                        
                    </Button>
                    ) : (
                    <Button onClick={handleShow}>
                        <Icon>
                            <TableRowsIcon />
                        </Icon>
                        
                    </Button>
                    )}
                </Bar>
                </SearchBars>

                <TextBox>
                <ExamText>Questions</ExamText>
                </TextBox>

                <QuestionBox>
                    <Question>
                        <p> Question 1</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 2</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 3</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 4</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 5</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 6</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 7</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 8</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 9</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 10</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 11</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    <Question>
                        <p> Question 12</p> 
                        <img src="/green.png" alt="" /> 
                    </Question>
                    
                </QuestionBox>

               

            </SideBar>
            </MainSearch>

        </>
     );
}
 
export default ExamSidebar;