import React from 'react';
import { Main, Content, LeftDiv, RightDiv, FormBox, InputDiv, PasswordBox, PasswordDiv, Note, Icon, NoteText, ProImg, Details, Text } from './StyledProfile';

const StudentProf = () => {
    return ( 
        <Main>
            <Content>
                <LeftDiv>
                    <h2>Profile</h2>
                    <h3>Update your personal details.</h3>
                    <FormBox>
                        <form action="">
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                                <InputDiv>
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" placeholder='Adeoti'/>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="lname">Last Name</label> 
                                    <input type="text" id="lname" placeholder='Adekunle' />
                                </InputDiv>
                                
                            </div>

                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                                <InputDiv>
                                    <label htmlFor="staffid">Staff ID</label> 
                                    <input type="text" id="staffid" placeholder='MC6476348' style={{fontWeight: 'bold'}}/>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="email">Email Address</label> 
                                    <input type="email" id="email" placeholder='Kukoyi8595' style={{fontWeight: 'bold'}} />
                                </InputDiv>
                                
                            </div>

                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                                <InputDiv>
                                    <label htmlFor="dept">Department</label> 
                                    <select name="" id="dept"><option value=""> Science</option></select>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="course">Course</label> 
                                    <input type="text" id="course" placeholder='Science' />
                                </InputDiv>
                                
                            </div>

                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                                <InputDiv>
                                    <label htmlFor="age">Age</label> 
                                    <input type="text" id="age" placeholder='20'/>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="number">Phone Number</label> 
                                    <input type="text" id="number" placeholder='+2348124567221' />
                                </InputDiv>
                                
                            </div>

                            <PasswordBox >
                                <label htmlFor="password">Password</label>
                                <PasswordDiv>
                                     
                                    <input type="password" name="" id="password" placeholder='••••••••••••••'/>
                                    <p> <a href="/">Change Password</a> </p>

                                </PasswordDiv>
                                
                            </PasswordBox>

                        </form>
                        <Note>
                            <Icon>
                                <img src="/light.png" alt="" />
                            </Icon>
                            <NoteText>
                                <h5> Note </h5>
                                <p> Only specific fields can be edited such as User's( Email Address, Password) other Fields <br /> 
                                are View only  </p>
                            </NoteText>
                        </Note>
                    </FormBox>

                </LeftDiv>

                <RightDiv>
                    <ProImg>
                        <img src="/secondary.png" alt="" />

                    </ProImg>

                    <Details>
                        <h1>Academic Info</h1>
                        <Text>
                            <p>Term</p>
                            <h3>First Term</h3>

                        </Text>
                        

                        <Text>
                            <p>Department</p>
                            <h3>Science</h3>

                        </Text>
                        
                        <Text>
                            <p>Overall Result</p>
                            <h3>90% Pass Mark</h3>

                        </Text>
                        
                    </Details>

                </RightDiv>

            </Content>
        </Main>
     );
}
 
export default StudentProf;