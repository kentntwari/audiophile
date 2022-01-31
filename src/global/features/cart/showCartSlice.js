import { createSlice } from '@reduxjs/toolkit';

const showCartSlice = createSlice({
  name: 'displayCart',
  initialState: false,

  reducers: {
    displayCart: (state) => (state === false ? (state = true) : (state = false)),
  },
});

export const { displayCart } = showCartSlice.actions;

export default showCartSlice.reducer;
