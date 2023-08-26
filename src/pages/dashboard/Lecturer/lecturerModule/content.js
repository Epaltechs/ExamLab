import React from "react";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import WatchIcon from "@mui/icons-material/Watch";
import { MainBox, MainContent, Content, SecondRow,  BoxContent, SubContent, BoxContent1,  BoxOne, BoxTwo, Course, Courses, Setting, DateIcon, Date, Title, Author, AuthorName, Name  } from "./StyledContent";

const TutorDashboard = () => {
  return (
    
    <MainBox>
          <MainContent>
      <Content>
        <h2>Welcome Back, Prof. Adekunle👋🏽</h2>

        <h4>Present Examination</h4>

        <BoxContent>
          <div>
            <BoxOne
              style={{
                backgroundImage: "url(/python.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></BoxOne>
            <BoxTwo>
              <div>
                <Course>
                  <p> PYTHON </p>
                  <p> COM414</p>
                </Course>
                <Title>
                  Answer the following question as shown in the screen below
                </Title>
                <Course>
                  <Setting>
                    <DateIcon>
                      <HourglassEmptyIcon style={{ width: '10.5px', height: '13.5px'}} />
                    </DateIcon>
                    <Date>
                      <p> 13 April 2023 </p>
                    </Date>
                  </Setting>

                  <Setting>
                    <DateIcon>
                      <WatchIcon style={{ width: '10.5px', height: '13.5px'}}/>
                    </DateIcon>
                    <Date>
                      <p> 2hrs 30 min </p>
                    </Date>
                  </Setting>
                </Course>
                <Author>
                  <div>
                    <img src="/prof.png" alt="" />
                  </div>
                  <AuthorName>
                    <p>By Prof. Adekunle</p>
                  </AuthorName>
                </Author>
              </div>
            </BoxTwo>
          </div>
        </BoxContent>
      </Content>

      <SecondRow>
        <h4>Upcoming Examinations</h4> <br />
        <SubContent>
          <BoxContent1>
            <div>
              <BoxOne
                style={{
                  backgroundImage: "url(/course.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></BoxOne>
              <BoxTwo>
                <div>
                  <Courses>
                    <p> Data Analysis with Python </p>
                    <p> COM414</p>
                  </Courses>
                  <Title>
                    Answer the following question as shown in the screen below
                  </Title>
                  <Course>
                    <Setting>
                      <DateIcon>
                        <HourglassEmptyIcon style={{ width: '10.5px', height: '13.5px', color: '#8B8B8B'}} />
                      </DateIcon>
                      <Date>
                        <p> 13 April 2023 </p>
                      </Date>
                    </Setting>

                    <Setting>
                      <DateIcon>
                        <WatchIcon style={{ width: '10.5px', height: '13.5px', color: '#8B8B8B'}} />
                      </DateIcon>
                      <Date>
                        <p> 2hrs 30 min </p>
                      </Date>
                    </Setting>
                  </Course>
                  <Author>
                    <div>
                      <img src="/prof.png" alt="" />
                    </div>
                    <AuthorName>
                      <Name>By Prof. Adekunle</Name>
                    </AuthorName>
                  </Author>
                </div>
              </BoxTwo>
            </div>
            
          </BoxContent1>

          <BoxContent1>
            <div>
              <BoxOne
                style={{
                  backgroundImage: "url(/course.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></BoxOne>
              <BoxTwo>
                <div>
                  <Courses>
                    <p> Data Analysis with Python </p>
                    <p> COM414</p>
                  </Courses>
                  <Title>
                    Answer the following question as shown in the screen below
                  </Title>
                  <Course>
                    <Setting>
                      <DateIcon>
                        <HourglassEmptyIcon style={{ width: '10.5px', height: '13.5px', color: '#8B8B8B'}} />
                      </DateIcon>
                      <Date>
                        <p> 13 April 2023 </p>
                      </Date>
                    </Setting>

                    <Setting>
                      <DateIcon>
                        <WatchIcon style={{ width: '10.5px', height: '13.5px', color: '#8B8B8B'}} />
                      </DateIcon>
                      <Date>
                        <p> 2hrs 30 min </p>
                      </Date>
                    </Setting>
                  </Course>
                  <Author>
                    <div>
                      <img src="/prof.png" alt="" />
                    </div>
                    <AuthorName>
                      <Name>By Prof. Adekunle</Name>
                    </AuthorName>
                  </Author>
                </div>
              </BoxTwo>
            </div>
            
          </BoxContent1>

          <BoxContent1>
            <div>
              <BoxOne
                style={{
                  backgroundImage: "url(/course.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></BoxOne>
              <BoxTwo>
                <div>
                  <Courses>
                    <p> Data Analysis with Python </p>
                    <p> COM414</p>
                  </Courses>
                  <Title>
                    Answer the following question as shown in the screen below
                  </Title>
                  <Course>
                    <Setting>
                      <DateIcon>
                        <HourglassEmptyIcon style={{ width: '10.5px', height: '13.5px', color: '#8B8B8B'}} />
                      </DateIcon>
                      <Date>
                        <p> 13 April 2023 </p>
                      </Date>
                    </Setting>

                    <Setting>
                      <DateIcon>
                        <WatchIcon style={{ width: '10.5px', height: '13.5px', color: '#8B8B8B'}} />
                      </DateIcon>
                      <Date>
                        <p> 2hrs 30 min </p>
                      </Date>
                    </Setting>
                  </Course>
                  <Author>
                    <div>
                      <img src="/prof.png" alt="" />
                    </div>
                    <AuthorName>
                      <Name>By Prof. Adekunle</Name>
                    </AuthorName>
                  </Author>
                </div>
              </BoxTwo>
            </div>
            
          </BoxContent1>
          
        </SubContent>
      </SecondRow>
    </MainContent>
    
    </MainBox>
    
  );
};

export default TutorDashboard;
