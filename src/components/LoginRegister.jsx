import React, { useState } from 'react';
import './LoginRegister.css'

import user_icon from './Assets/username.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'


const LoginRegister = () => {
    const[action, setAction] = useState("Register");
    return (
        <div className='container'>
         <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
              <img src={user_icon} alt="" style={{ width: '15px', height: '15px' }}/>  
                <input type="text" placeholder='Name'/>
                </div>}
                <div className='input'>
                  <img src={email_icon} alt="" style={{ width: '15px', height: '15px' }} />  
                   <input type="email" placeholder='Email Id'/>
                </div>
                <div className='input'>
                <img src={password_icon} alt="" style={{ width: '15px', height: '15px' }} />  
                  <input type="password" placeholder='Password' />
                </div>
                </div>
              </div>
              {action==="Register"?<div></div>:<div className='forgot-password'>forgot password? <span>Click Here!</span></div>}
                <div className='submit-container'>
                    <div className= {action==="Login"?"submit gray":"submit"} onClick={() =>{setAction("Register")}}>Sign Up</div>
                    <div className= {action==="Register"?"submit gray":"submit"} onClick={() =>{setAction("Login")}}>Login</div>
            </div>   
        </div>
    );
}

export default LoginRegister 