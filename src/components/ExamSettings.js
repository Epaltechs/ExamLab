import * as React from "react";
import styled from 'styled-components';
import Logo from '../assets/Logo.png';


const ExamSettings = () => {

  return (

    <MainContainer>      
            <Main> 
            <Set>Settings</Set>               
              <SetData>Informations</SetData>
              <SetDesc>Update your personal details.</SetDesc>
              <br/>
              
              <Form>
              <Schoolform>
                      
                        <Label htmlFor="name">School Name</Label>
                        <Forminput type="text" name="schoolname" placeholder="  Back to School"/>
                                      
                        <Label htmlFor="registrationNumber">Reg Number</Label>
                        <Forminput type="text" name="registrationNumber" placeholder='  +234 23481345783' />
                                       
                        <Label for="html">Country</Label>
                        <Forminput type="text" name="country" placeholder='  United States'/>
                    

                        <Account>
                        <Label for="html">Address</Label>
                        <Accountinput type="text" name="address" placeholder='  2972 Westminster Road, Santa Aria, Illinois 85486' />
                                       
                        <Label for="html">Password</Label>
                        <Accountpassword type="text" name="password" placeholder='  ................                                                                                                                                     Change Password' />
                      </Account>
                </Schoolform>

                <Accountform>
                
                        <Label htmlFor="name">Slogan</Label>
                        <Forminput type="text" name="slogan" placeholder='  Gods Own' />
                  
                        <Label htmlFor="Email Address">Email Address</Label>
                        <Forminput type="text" name="emailaddress" placeholder='  backtoschool@gmail.com' />
                   
                        <Label htmlFor="html">State</Label>
                        <Forminput type="text" name="state" placeholder='  Los Angeles' />

                </Accountform>
                </Form>
              
            </Main>
            
          <Academic> 
          <Img src={Logo} width="150" height="150" alt="Logo" />
                <Info>School Info.</Info>
                <Data>Name</Data>
                <Description>Back to School International School</Description>
                 <Data>Slogan</Data>
                <Description>God's Own</Description>
                <Data>Status</Data>
                <Description>Approved</Description>
          </Academic>
          
        </MainContainer>
      )
  }
  
  export default ExamSettings;
  
const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    height: 100%;
    width: 90%;
  `;
  
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    height: 90%;
    width: 50%;
    margin-left: 100px;
    margin-top: 20px;
  `;

const Form = styled.div`
    display: flex;
    flex-direction: row;
    align-content: left;
    margin-top: 10px;
    margin-left: 20px;
    width: 40%;    
  `;

const Account = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
  `;
  
const Schoolform = styled.div`
    font-family: 'inter';
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    height: 100%;
    width: 100%;  
  `;
  
const Accountform = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 180px;
    font-family: 'inter';
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    height: 100%;
  `;

const Label = styled.div`
    font-family: 'inter';
    font-weight: bold;
    color: #171717;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
  `;
 
const Forminput = styled.input`
    width: 450px;
    height: 45px;
    border: 0.3px solid #d0d0d0;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    color: #171717;
    margin-top: 8px;
    margin-bottom: 15px;
`;

const Accountinput = styled.input`
    width: 935px;
    height: 45px;
    border: 0.3px solid #d0d0d0;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    color: #171717;
    margin-top: 8px;
    margin-bottom: 15px;
`;

const Accountpassword = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 935px;
    height: 45px;
    border: 0.3px solid #d0d0d0;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    color: #F59E0B;
    margin-top: 8px;
    margin-bottom: 15px;
    flex-grow: 1;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    font-family: 'inter';
    font-weight: bold;
    color: #171717;
    font-size: 18px;
    margin-bottom: 30px;
    margin-left: 20px;
  `;
  
const Set = styled.div`
    margin-top: 60px;
    margin-left: 20px;
    margin-bottom: 60px;
    width: 67px;
    height: 23px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #000000;
  `;

const SetData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    font-family: 'inter';
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    width: 90%;
    margin-left: 20px;
  `; 

const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    font-family: 'inter';
    font-weight: bold;
    font-size: 18px;
    color: grey;
    line-height: 28px;
    width: 90%;
  `; 

const Description = styled.div`
    font-family: 'inter';
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    height: 70%;
    margin-bottom: 20px;
  `;

const SetDesc = styled.div`
    font-family: 'inter';
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    color: grey;
    height: 70%;
    margin-left: 20px;
  `;

const Academic = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-top: 40px;
    margin-bottom: 300px;
    width: 25%;
`;

const Img = styled.img`
    margin-left: 50px;
    margin-top: 30px;
    margin-bottom: 20px
`;
