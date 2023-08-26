import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';

import { ContentBox, ExamLogo, FormBox, LoginText, FormInput, InputBox, SubmitButton, FooterBox, QuickLinks, FooterIcon, Copyright, } from './Styledlecturer';

const LecturerLogin = () => {
    return ( 
        <ContentBox>
            <ExamLogo>
                <img src="./Exam.png" width={120} alt="" />
            </ExamLogo>
            <FormBox>
                <LoginText>Login to your account</LoginText>
                <FormInput>
                    <form action="">

                        <InputBox>
                            <label htmlFor="email">Email</label> <br />
                            <input type="email" id='email' placeholder='Enter your email address/Matric Number' />
                        </InputBox>

                        <InputBox>
                            <label htmlFor="password">Password</label> <br />
                            <input type="password" id='password' placeholder='Your password' />
                            <p>Forgot your password? <a href="#passwordrecovery">Click Here </a> for password recovery</p>

                        </InputBox>

                        <SubmitButton>
                            <input type="submit" value='Log in'/>
                        </SubmitButton>                            
                        

                    </form>
                    
                </FormInput>

                <FooterBox>
                    <QuickLinks>
                        
                         <span>
                            <Button><a href="#home">Company</a></Button>
                            <Button><a href="#about">About us</a></Button>
                            <Button><a href="#team">Team</a></Button>
                            <Button><a href="#product">Product</a></Button>
                            <Button><a href="#blog">Blog</a></Button>
                            <Button><a href="#pricing">Pricing</a></Button>
                            
                        </span>

                    </QuickLinks>

                    <FooterIcon>
                        <span>
                            <Button  ><TwitterIcon style={{backgroundColor: '#CFCFCF', padding: '2px', borderRadius: '50%', color: '#FFFFFF'}} /></Button>
                            <Button ><InstagramIcon  style={{backgroundColor: '#CFCFCF', padding: '2px', borderRadius: '50%', color: '#FFFFFF'}} /></Button>
                            <Button ><LinkedInIcon style={{backgroundColor: '#CFCFCF', padding: '2px', borderRadius: '50%', color: '#FFFFFF'}}  /></Button>
                            <Button ><YouTubeIcon style={{backgroundColor: '#CFCFCF', padding: '2px', borderRadius: '50%', color: '#FFFFFF'}} /></Button>
                        </span>
               
              
                    </FooterIcon>

                    <Copyright>
                        <p>Copyright @ 2023 ExamLab</p>
                    </Copyright>
                </FooterBox>

            </FormBox>

        </ContentBox>
     );
}
 
export default LecturerLogin;