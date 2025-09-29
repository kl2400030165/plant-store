import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items); // ✅ get cart from Redux store

  const plants = [
    { id: 1, name: "Snake Plant", price: 15, image: "https://picsum.photos/200/200?1" },
    { id: 2, name: "Peace Lily", price: 20, image: "https://picsum.photos/200/200?2" },
    { id: 3, name: "Aloe Vera", price: 12, image: "https://picsum.photos/200/200?3" },
    { id: 4, name: "Spider Plant", price: 18, image: "https://picsum.photos/200/200?4" },
    { id: 5, name: "Fiddle Leaf Fig", price: 25, image: "https://picsum.photos/200/200?5" },
    { id: 6, name: "Money Plant", price: 10, image: "https://picsum.photos/200/200?6" },
  ];

  return (
    <div className="products">
      <h2>Our Plants</h2>
      <div className="product-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button
              disabled={cart.find((item) => item.id === plant.id)} // ✅ uses cart correctly
              onClick={() => dispatch(addToCart(plant))}
            >
              {cart.find((item) => item.id === plant.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
