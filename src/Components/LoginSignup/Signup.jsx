import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const Signup = () => {
    const name = document.getElementsByClassName('name-input')[0];
    const email = document.getElementsByClassName('email-input')[0];
    const password = document.getElementsByClassName('password-input')[0];
    const navigate = useNavigate();
    const validateSignUp = async () => {
        if(name.value === '' || email.value === '' || password.value === '') {
            alert("Please fill in completely !");
            return;
        }
        try {
           const response = await fetch('api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: name.value, email: email.value, password: password.value}),
            });
            if(response.ok) {
                alert('Sign up successfully!');
                navigate('/Login');
            } else {
                alert('Sign up failed. Please check your information and try again!');
            }
        } catch (error) {
            console.log('Error in sign up: ', error);
            alert('Please try again later!');
        }
    };
    
  return (
    <div className='BackgroundImg'>
            <div className="container">
                <div className="header">
                    <div className="text">Sign up</div>
                    <div className="underline"></div>

                </div>
                <div className="inputs">
                    <div>
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder='Name' className='name-input'/>
                        </div>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder='Email' className='email-input'/>
                        </div>
                            <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password' className='password-input'/>
                        </div>
                    </div>
                </div>    
                <div className='having-account'>Already have an account? <button className='log-in'><Link to="/Login" style={{textDecoration:'none', color: 'rgb(234, 157, 14)'}}>Log in</Link></button></div>    
                <div className="submit-container">
                    <div className='submit' onClick={validateSignUp}>Sign up</div>
                </div>

            </div>
        </div>
  )
}

export default Signup
