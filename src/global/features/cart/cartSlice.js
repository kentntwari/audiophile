import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'addToCart',
  initialState: [],

  reducers: {
    addedToCart: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(image, item, price, quantity) {
        return {
          payload: {
            image,
            item,
            price,
            quantity,
          },
        };
      },
    },

    updateCart: {
      reducer(state, action) {
        state.splice(action.payload.index, 1, action.payload);
      },

      prepare(index, image, item, price, quantity) {
        return {
          payload: {
            index,
            image,
            item,
            price,
            quantity,
          },
        };
      },
    },

 
  },
});

export const { addedToCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
