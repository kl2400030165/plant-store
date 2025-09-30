import React from 'react';
import { plants } from '../data/plants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{padding: 20}}>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-list">
            {plants.filter(p => p.category === category).map(plant => {
              const isAdded = plant.id in cartItems;
              return (
                <div className="product-card" key={plant.id}>
                  <a href={plant.info} target="_blank" rel="noopener noreferrer">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: '175px',
                        height: '120px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        marginBottom: '10px',
                        boxShadow: "0 2px 8px #8cd7b1"
                      }}
                    />
                  </a>
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
  onClick={() => dispatch(addItem(plant))}
  disabled={isAdded}
  style={{
    background: isAdded ? "#bbb" : "#25A065",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    padding: "14px 24px",
    fontWeight: "bold",
    fontSize: "1.1rem",
    letterSpacing: "1px",
    marginTop: "14px",
    marginBottom: "6px",
    boxShadow: isAdded ? "none" : "0 2px 7px #a5ebc6",
    cursor: isAdded ? "not-allowed" : "pointer",
    transition: "background 0.18s, box-shadow 0.18s"
  }}
>
  {isAdded ? 'ADDED' : 'ADD TO CART 🛒'}
</button>

                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
