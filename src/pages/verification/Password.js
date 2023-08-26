// Material UI icons
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import verifyStyle from './verify.module.css'




const register = () => {
  return ( 
    <div className={verifyStyle.content}>
    <div className={verifyStyle.left} style={{ backgroundImage: "url(/forgotpassword.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      
    </div>
    <div className={verifyStyle.right}>
      <div className={verifyStyle.formContent}>

        <div className={verifyStyle.logo}>
        <img src="/Exam.png" width={100} alt="" />
        </div>


        <h3>Password Recovery</h3>
        <center>
              <p>
                A verification email have been sent to your <br />
                account, please check
              </p>
            </center>

        <div className={verifyStyle.footer}>
          <span>
          <Button><TwitterIcon className={verifyStyle.icons}/></Button>
          <Button><InstagramIcon className={verifyStyle.icons} /></Button>
          <Button><LinkedInIcon className={verifyStyle.icons} /></Button>
          <Button><YouTubeIcon className={verifyStyle.icons} /></Button>
          </span>
           
          
      </div>
      
      </div>
    </div>
   </div>
   );
}
 
export default register;