export const reducer = (state, action) => {
  if (action.type === "GET-TOTAL") {
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { item_Price, amount } = cartItem;
        const itemTotal = item_Price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        console.log(item_Price, amount);
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    return { ...state, total, amount };
  }
  if (action.type === "PRODUCT-FETCHED") {
    console.log(action.payload);
    return { ...state, cart: action.payload };
  }

  return state;
};
