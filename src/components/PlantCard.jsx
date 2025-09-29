import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const inCart = useSelector((state) =>
    state.cart.items.find((i) => i.id === plant.id)
  );

  return (
    <div className="border rounded p-4 shadow">
      <img src={plant.img} alt={plant.name} className="w-full h-40 object-cover" />
      <h3 className="font-semibold mt-2">{plant.name}</h3>
      <p>${plant.price}</p>
      <button
        onClick={() => dispatch(addToCart(plant))}
        disabled={inCart}
        className={`mt-2 px-4 py-2 rounded ${
          inCart ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
        } text-white`}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default PlantCard;
