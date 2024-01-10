import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const Signup = () => {

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
                            <input type="text" placeholder='Name'/>
                        </div>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder='Email'/>
                        </div>
                            <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password'/>
                        </div>
                    </div>
                </div>    
                <div className='having-account'>Already have an account? <button className='log-in'><Link to="/Login" style={{textDecoration:'none', color: 'rgb(234, 157, 14)'}}>Log in</Link></button></div>    
                <div className="submit-container">
                    <div className='submit'>Sign up</div>
                </div>

            </div>
        </div>
  )
}

export default Signup
