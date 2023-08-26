// Material UI icons
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import recoverStyle from './recover-password.module.css'




const Recover = () => {
    return ( 
       
      <div className={recoverStyle.content}>
        <div className={recoverStyle.left} style={{ backgroundImage: "url(/forgotpassword.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          
        </div>
        <div className={recoverStyle.right}>
          <div className={recoverStyle.formContent}>

            <div className={recoverStyle.logo}>
            <img src="/Exam.png" width={100} alt="" />
            </div>


            <h3>Forgot Password</h3>
            <form action="">
              <div className={recoverStyle.inputBox}>
                <label htmlFor="">Recovery Email</label> <br />
                <input type="text" placeholder='Enter your email address' />
              </div>

             
              <div className={recoverStyle.inputBox}>
                <input type="submit" value='Proceed' className={recoverStyle.submitbutton}/>
              </div>

            </form>

            <div className={recoverStyle.footer}>
              <span>
              <Button><TwitterIcon className={recoverStyle.icons}/></Button>
              <Button><InstagramIcon className={recoverStyle.icons} /></Button>
              <Button><LinkedInIcon className={recoverStyle.icons} /></Button>
              <Button><YouTubeIcon className={recoverStyle.icons} /></Button>
              </span>
               
              
          </div>
          
          </div>
        </div>
       </div>
     );
}
 
export default Recover;