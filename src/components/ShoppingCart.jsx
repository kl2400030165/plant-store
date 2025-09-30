import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../store/CartSlice';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
  const items = useSelector(state => state.cart.items);
  const totalCount = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const plantsArray = Object.values(items);

  const totalCost = plantsArray.reduce((sum, plant) => sum + plant.price * plant.quantity, 0);

  const handleCheckout = () => {
    setCheckoutMessage('Coming Soon');
  };

  return (
    <div style={{padding: 20}}>
      <h1>Shopping Cart</h1>
      {plantsArray.length === 0 && <p>Your cart is empty.</p>}
      {plantsArray.map(plant => (
        <div key={plant.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 10, borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
          <img src={plant.thumbnail} alt={plant.name} style={{width: 100, height: 100, objectFit: 'cover', marginRight: 10}} />
          <div style={{flexGrow: 1}}>
            <h3>{plant.name}</h3>
            <p>Unit Price: ${plant.price}</p>
            <p>Quantity: {plant.quantity}</p>
            <p>Subtotal: ${plant.price * plant.quantity}</p>
            <button onClick={() => dispatch(incrementQuantity(plant.id))}>+</button>
            <button onClick={() => dispatch(decrementQuantity(plant.id))} disabled={plant.quantity <= 1}>-</button>
            <button onClick={() => dispatch(removeItem(plant.id))}>Delete</button>
          </div>
        </div>
      ))}
      <div style={{marginTop: 20}}>
        <p>Total Plants: {totalCount}</p>
        <p>Total Cost: ${totalCost}</p>
      </div>
      <button onClick={handleCheckout} style={{marginRight: 10}}>Checkout</button>
      <button onClick={() => navigate('/products')}>Continue Shopping</button>
      {checkoutMessage && <p>{checkoutMessage}</p>}
    </div>
  
);
}
