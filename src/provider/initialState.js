import {fetchCart} from '../utils/helperFunctions';

const cartInfo = fetchCart()

export const initialState = {
  user: null,
  cartItems: cartInfo,
  cartShow: false,
  displayCart: false,
};
