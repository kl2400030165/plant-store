import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header style={{display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ccc'}}>
      <div>
        <Link to="/">Plant Store</Link>
      </div>
      <nav>
        <Link to="/">Home</Link> | {' '}
        <Link to="/products">Products</Link> | {' '}
        <Link to="/cart">
          Cart ({totalQuantity})
        </Link>
      </nav>
    </header>
  );
}
