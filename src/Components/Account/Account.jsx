import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './Account.css'
import AvatarAccount from '../Assets/avatarAccount.png'
const Account = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  const name = location.state?.name;
  const email = location.state?.email;
  const address = location.state?.address;
  const phoneNumber = location.state?.phoneNumber;

  return (
    <div>
        <div className='Header'>
          <div className='brandName'>Bookstore <span className='spanBrandname'>ABC</span></div>
            <ul className='nav'>
                <li><Link to="/books">Books</Link></li>
                <li><Link>Password</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>

        <div className='user-info'>
          <img src={AvatarAccount} alt="" />
          <form action="" className='user-information'>
            <label htmlFor="fullName">Your full name (*): </label>
            <input type="text" id='fullName' value={name} />

            <label htmlFor="email">Your email (*): </label>
            <input type='email' id="text" value={email} ></input>

            <label htmlFor="address">Your address: </label>
            <input type='address' id="address" value={address} ></input>

            <label htmlFor="phoneNumber">Your phone number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} />
          </form>
          <button className='update-button'>Update</button>
        </div>

    </div>
  )
}

export default Account
