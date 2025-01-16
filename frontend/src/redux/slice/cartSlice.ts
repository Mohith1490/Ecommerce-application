import { createSlice } from "@reduxjs/toolkit";

export type cartLayout = {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
  quantity: number,
}

type initialStateType = {
  items: cartLayout[],
  totalPrice: number,
  totalItems: number
}

const initialState: initialStateType = {
  items: [],
  totalPrice: 0,
  totalItems: 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item?.id === newItem.id)
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += existingItem.price;
      } else {
        state.items.push({
          ...newItem
        })
        state.totalItems += 1;
        state.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem!.quantity > 0) {
        existingItem!.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= existingItem!.price;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalItems -= existingItem!.quantity;
      state.totalPrice -= existingItem!.price * existingItem!.quantity;
    },
    couponApplied(state,action){
      if(action.payload === "MOHITH"){
        state.totalPrice -= (state.totalItems * 0.1)
      }
    }
  }
})

export const { addToCart, removeFromCart, deleteItem,couponApplied } = cartSlice.actions;
export default cartSlice.reducer;