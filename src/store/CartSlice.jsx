import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // { plantId: { ...plantData, quantity } }
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const id = plant.id;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = {...plant, quantity: 1};
      }
      state.totalQuantity += 1;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.totalQuantity -= state.items[id].quantity;
        delete state.items[id];
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (!state.items[id]) return;
      state.totalQuantity += quantity - state.items[id].quantity;
      state.items[id].quantity = quantity > 0 ? quantity : 1;
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
