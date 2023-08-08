export const actionType = {
  SET_USER: "SET_USER",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_DIS_CART: "SET_DIS_CART",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    case actionType.SET_DIS_CART:
      return {
        ...state,
        displayCart: action.displayCart 
      }
    default:
      return state;
  }
};

export default reducer;
