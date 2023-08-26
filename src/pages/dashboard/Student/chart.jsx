import React from "react";
import UpcomingExamSidebar from "../../../components/UpcomingExamSidebar";
import
{MainDiv, LeftDiv, RightDiv, Content, CalenderDiv,
 Date, DateTitle, Datebox, ColOne, ColTwo, ColText  } 
from "./StyledCharts"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import LaunchIcon from '@mui/icons-material/Launch';

const StudentChart = () => {
    return ( 
        <Content>
            <MainDiv>
                <LeftDiv>
                  <div style={{ height: '400px'}}>

                  </div>

                    <CalenderDiv>
                          
                        <Date>

                            <ColOne >
                            <Datebox>
                                <DateTitle>Academic Calender  </DateTitle>

                                <LaunchIcon  />


                            </Datebox>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                 <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={4} />
                                </LocalizationProvider>

                            </ColOne>

                            <ColTwo>
                            <Datebox>
                                <DateTitle>Notice Board  </DateTitle>

                                <LaunchIcon  />


                            </Datebox>

                            <img src="/student.png" alt="" />

                            <ColText>No important Notice Check Back Later</ColText>
                            
                            
                            </ColTwo>
                            
                        

                        </Date>


                    </CalenderDiv>




                    
                

                </LeftDiv>
                
                <RightDiv>
                    <UpcomingExamSidebar />
                </RightDiv>

            </MainDiv>
        </Content>
     );
}
 
export default StudentChart;