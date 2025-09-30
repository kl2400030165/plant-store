import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "85vh",
        background: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 16px",
      }}
    >
      <h1 style={{
        fontSize: "3.3rem",
        background: "rgba(34,139,69,0.82)",
        color: "white",
        padding: "8px 28px",
        borderRadius: "23px",
        marginBottom: "22px",
        boxShadow: "0 2px 8px #255c38",
      }}>Plant Store</h1>
      <p style={{
        maxWidth: "780px",
        background: "rgba(248,255,246,0.85)",
        borderRadius: "10px",
        color: "#176038",
        fontSize: "1.25rem",
        padding: "18px",
        boxShadow: "0 1px 7px #8cd7b1",
        marginBottom: "26px",
      }}>
        Welcome to the Plant Store! We help bring green into every home with curated houseplants chosen for style, easy care, and lasting beauty. Start shopping your favorites and enjoy a healthier, greener space!
      </p>
      <button
        onClick={() => navigate('/products')}
        style={{
          fontSize: "1.4rem",
          padding: "16px 40px",
          background: "#25a065",
          color: "white",
          borderRadius: "9px",
          boxShadow: "0 1px 4px #8ad6b0",
          cursor: "pointer"
        }}
      >Get Started</button>
    </div>
  );
}
