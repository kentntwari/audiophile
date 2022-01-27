import { createSlice } from '@reduxjs/toolkit';

const addItemSlice = createSlice({
  name: 'addItem',
  initialState: [],

  reducers: {
    itemAdded: {
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
  },
});

export const { itemAdded } = addItemSlice.actions;

export default addItemSlice.reducer;
