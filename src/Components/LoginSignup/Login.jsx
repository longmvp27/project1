import React, {useState} from 'react'
import './Login.css';
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const LoginSignup = () => {  
    const email = document.getElementsByClassName('email-input');
    const password = document.getElementsByClassName('password-input');
    const validateLogIn = () => {
        if(email === null || password === null) {
            alert("Please enter both email and password")
        }
    }


    return (
        <div className='BackgroundImg'>
            <div className="container">
                <div className="header">
                    <div className="text">Log in</div>
                    <div className="underline"></div>

                </div>
                <div className="inputs">
                    <div>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder='Email' className='email-input'/>
                        </div>
                            <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password' className='password-input'/>
                        </div>
                        <div className="forgot-password">Forgot password? <span>Click here!</span></div>
                    </div>
                </div>        
                <div className="submit-container">
                    <div className='submit' onClick={validateLogIn}>Login</div>
                </div>

            </div>
        </div>
    )

}

export default LoginSignup