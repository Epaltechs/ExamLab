// import './login.css';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import registerStyle from './registration.module.css'



const Register = () => {
    return ( 
       
      <div className={registerStyle.content}>
      <div className={registerStyle.left} style={{ backgroundImage: "url(/registar.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        
      </div>
      <div className={registerStyle.right}>
        <div className={registerStyle.formContent}>

          <div className={registerStyle.logo}>
          <img src="/Exam.png" width={100} alt="" />
          </div>


          <h3>Create an account</h3>
          <form action="">
            <div className={registerStyle.inputBox}>
              <label htmlFor="">Email</label> <br />
              <input type="text" placeholder='Enter your email/Matric No' />
            </div>

            <div className={registerStyle.inputBox}>
              <label htmlFor="">Password</label> <br />
              <input type="password" placeholder='Enter your password' />
              
            </div>

            <div className={registerStyle.inputBox}>
              <label htmlFor=""> Confirm Password</label> <br />
              <input type="password" placeholder='Enter your password' />
              
            </div>
            <div className={registerStyle.inputBox}>
              <input type="submit" value='Sign up' className={registerStyle.submitbutton}/>
            </div>

          </form>

          <div className={registerStyle.footer}>
            <span>
            <Button><TwitterIcon className={registerStyle.icons}/></Button>
            <Button><InstagramIcon className={registerStyle.icons} /></Button>
            <Button><LinkedInIcon className={registerStyle.icons} /></Button>
            <Button><YouTubeIcon className={registerStyle.icons} /></Button>
            </span>
             
            
        </div>
        <p className={registerStyle.signup}> Already have an account? <a href='/login'> Sign in </a> </p>
        </div>
      </div>
     </div>
  
     );
}
 
export default Register;