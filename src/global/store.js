import { configureStore } from '@reduxjs/toolkit';
import addItemReducer from './features/cart/addItemSlice';
import quantityReducer from './features/cart/quantitySlice';

export default configureStore({
  reducer: {
    addItem: addItemReducer,
    quantity: quantityReducer,
  },
});
