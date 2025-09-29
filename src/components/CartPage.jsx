import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, deleteItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="pt-20 px-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total cost: ${total}</p>

      <div className="grid gap-4 mt-6">
        {items.map((i) => (
          <div
            key={i.id}
            className="flex items-center justify-between border p-4 rounded"
          >
            <img src={i.img} alt={i.name} className="w-20 h-20" />
            <div>
              <h3>{i.name}</h3>
              <p>${i.price}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(increment(i.id))}
                className="px-2 bg-green-500 text-white rounded"
              >
                +
              </button>
              <span>{i.quantity}</span>
              <button
                onClick={() => dispatch(decrement(i.id))}
                className="px-2 bg-yellow-500 text-white rounded"
              >
                -
              </button>
            </div>
            <button
              onClick={() => dispatch(deleteItem(i.id))}
              className="px-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded">
          Checkout (Coming Soon)
        </button>
        <Link
          to="/products"
          className="px-6 py-2 bg-gray-500 text-white rounded"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
