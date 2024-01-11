import React from 'react'
import './Shipping.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Shipping = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];
  const total = location.state?.total;
  
  const totalQuantity = cartItems.reduce((total, currentItem) => {
    return total + currentItem.quantity;
  }, 0);
  const handleOrder = async () => {
    const userId = location.state?.userId;
    try {
      const response = await fetch('api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId, total}),
      });
      if (response.ok) {
        alert('Ordered successfully!');
        navigate('/Books');
      } else {
        alert('Failed to order. Please try again.');
      }
    } catch (error) {
      console.log("Error in ordering: ", error);
      alert('Please try again later!');
    }
  }
  return (
    <div className='shipping-container'>
      <div className='contact-information'>
        <h2 className='title'>Shipping information</h2>
        <form action="" className='shipping-information'>
          <label htmlFor="fullName">Enter your full name: </label>
          <input type="text" id='fullName' placeholder='Your full name' />
          <label htmlFor="address">Enter your address: </label>
          <textarea name="address" id="address" placeholder='Your address'></textarea>
          <label htmlFor="phoneNumber">Enter you phone number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Your phone number" />
        </form>
        <button className='order-button' onClick={handleOrder}>Order</button>
      </div>
      <div className='order-summary'>
        <h2 className='title'>Order summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className='order-item'>
            <img src={item.imgSrc} alt={item.name} className='order-item-image'/>
            <div className='order-item-details'>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
        <p className='total-quantity'>Total quantity: {totalQuantity} products</p>
        <p className='total-price'>Total price:<span style={{color: 'rgb(234, 157, 14)'}}> {total} VND</span> </p>
      </div>
    </div>
  )
}

export default Shipping
