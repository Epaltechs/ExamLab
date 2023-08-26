import React from 'react';
import { Main, Content, LeftDiv, RightDiv, FormBox, InputDiv, PasswordBox, PasswordDiv, Address, ProImg, Details, Text } from './settings.style';
import SimpleHeader from '../../../components/Dashboard/Headers/SimpleHeader';

const Settings = () => {
    return ( 
        <Main>
            <Content>
                <LeftDiv>
                    <SimpleHeader title="Settings" />
                    <h2>Informations</h2>
                    <h3>Update your personal details.</h3>
                    <FormBox>
                        <form action="">
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                                <InputDiv>
                                    <label htmlFor="name">School Name</label>
                                    <input type="text" id="name" placeholder='Back to School'/>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="slogan">Slogan</label> 
                                    <input type="text" id="slogan" placeholder="God's Own" />
                                </InputDiv>
                                
                            </div>

                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                                <InputDiv>
                                    <label htmlFor="reg">Reg Number</label> 
                                    <input type="text" id="red" placeholder='MC6476348'/>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="email">Email Address</label> 
                                    <input type="email" id="email" placeholder='backtoschool@gmail.com' />
                                </InputDiv>
                                
                            </div>

                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                                <InputDiv>
                                    <label htmlFor="country">Country</label> 
                                    <select name="" id="country"><option value="">United State</option></select>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="state">State</label> 
                                    <input type="text" id="state" placeholder='Los Angeles' />
                                </InputDiv>

                                                               
                            </div>

                            <Address>
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" placeholder='Los Angeles' />
                            </Address>

                            <PasswordBox >
                                <label htmlFor="password">Password</label>
                                <PasswordDiv>
                                     
                                    <input type="password" name="" id="password" placeholder='••••••••••••••'/>
                                    <p> <a href="/">Change Password</a> </p>

                                </PasswordDiv>
                                
                            </PasswordBox>

                        </form>

                    </FormBox>

                </LeftDiv>

                <RightDiv>
                    <ProImg>
                        <img src="/settingImg.png" alt="" />

                    </ProImg>

                    <Details>
                        <h1>School Info</h1>
                        <Text>
                            <p>Name</p>
                            <h3>Back to School International School</h3>

                        </Text>
                        

                        <Text>
                            <p>Slogan</p>
                            <h3>God's Own</h3>

                        </Text>
                        
                        <Text>
                            <p>Status</p>
                            <h3>Approved</h3>

                        </Text>
                        
                    </Details>

                </RightDiv>

            </Content>
        </Main>
     );
}
 
export default Settings;