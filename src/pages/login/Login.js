// Material UI icons
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import loginStyle from './login.module.css'





const Login = () => {
    return ( 
       <div className={loginStyle.content}>
        <div className={loginStyle.left} style={{ backgroundImage: "url(/login.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          
        </div>
        <div className={loginStyle.right}>
          <div className={loginStyle.formContent}>

            <div className={loginStyle.logo}>
            <img src="/Exam.png" width={100} alt="" />
            </div>


            <h3>Login to your account</h3>
            <form action="">
              <div className={loginStyle.inputBox}>
                <label htmlFor="">Email</label> <br />
                <input type="text" placeholder='Enter your email/Matric No' />
              </div>

              <div className={loginStyle.inputBox}>
                <label htmlFor="">Password</label> <br />
                <input type="password" placeholder='Enter your password' />
              <p>Forgot your password? <a href="/recover">Click Here </a> for password recovery</p>
              </div>
              <div className={loginStyle.inputBox}>
                <input type="submit" value='Log in' className={loginStyle.submitbutton}/>
              </div>

            </form>

            <div className={loginStyle.footer}>
              <span>
              <Button><TwitterIcon className={loginStyle.icons}/></Button>
              <Button><InstagramIcon className={loginStyle.icons} /></Button>
              <Button><LinkedInIcon className={loginStyle.icons} /></Button>
              <Button><YouTubeIcon className={loginStyle.icons} /></Button>
              </span>
               
              
          </div>
          <p className={loginStyle.signup}> Don't have an account Yet? <a href='/register'> Sign Up </a> </p>
          </div>
        </div>
       </div>
  
     );
}
 
export default Login;