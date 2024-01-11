import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const LoginSignup = () => {  
    const email = document.getElementsByClassName('email-input')[0];
    const password = document.getElementsByClassName('password-input')[0];
    const navigate = useNavigate();
    const validateLogIn = async () => {
        if(email.value === '' || password.value === '') {
            alert("Please fill in both email and password");
            return;
        }
        try {
            const response = await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: email.value, password: password.value}),
            });
            if(response.ok) {
                alert('Login successful!');
                const userData = await response.json();
                const userId = userData.userId;
                navigate('/Books', {state: {userId: userId}});
            } else {
                alert('Login failed. Please check your email or password!');
            }
        } catch (error) {
            console.log('Error in login: ', error);
            alert('Please try again later!')
        }
    };
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
                    <button className='submit' onClick={validateLogIn}>Login</button>
                </div>

            </div>
        </div>
    )

}

export default LoginSignup