import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-green-700 text-white fixed w-full top-0 shadow">
      <h1 className="text-xl font-bold">🌱 Plant Store</h1>
      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart 🛒 ({totalItems})</Link>
      </nav>
    </header>
  );
};

export default Header;
