import React from "react";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <section className="landing">
      <h2>Welcome to Green Haven</h2>
      <p>Your one-stop shop for beautiful, healthy houseplants. Transform your space with greenery.</p>
      <a href="/products">
        <button>Get Started</button>
      </a>
    </section>
  );
};

export default Landing;
