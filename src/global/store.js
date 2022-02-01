import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import showCartReducer from './features/cart/showCartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    displayCart: showCartReducer,
  },
});
