import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { getCartItemsFromLocalStorage, setCartItemsToLoaclStorage } from "../../utils";
import { Cart, CartItem, EditCartProduct } from "../../types";
import { appTexts } from "../../constants";
import { RootState } from "../store";

const initialState = {
    cartItems: getCartItemsFromLocalStorage(),
    cartTotalQty: 0,
    cartTotalAmount: 0,
} satisfies Cart as Cart;

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: Cart, action: PayloadAction<CartItem>) => {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            //* check for exist
            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQty: state.cartItems[existingIndex].cartQty + action.payload.cartQty,
                };
                toast.info(appTexts.ADD_A_PRODUCT_THAT_ADDED_BEFORE);
            } else {
                const tempProductItem: CartItem = {
                    ...action.payload,
                    cartQty: action.payload.cartQty, //* this line is unnecessary code , and is written for better understanding
                };
                state.cartItems.push(tempProductItem);
                toast.info(appTexts.ADD_A_PRODUCT_TO_CART);
            }
            //* save to localStorage
            setCartItemsToLoaclStorage(state.cartItems);
        },
        editCartProduct: (state: Cart, action: PayloadAction<EditCartProduct>) => {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            //* check for exist
            if (existingIndex >= 0) {
                if (
                    action.payload.type === "increase" &&
                    state.cartItems[existingIndex].cartQty <= 98
                ) {
                    state.cartItems[existingIndex].cartQty++;
                    toast.info(appTexts.ADD_A_PRODUCT_THAT_ADDED_BEFORE);
                } else if (
                    action.payload.type === "decrease" &&
                    state.cartItems[existingIndex].cartQty >= 2
                ) {
                    state.cartItems[existingIndex].cartQty--;
                    toast.info(appTexts.DELETE_A_PRODUCT);
                }

                //* save to localStorage
                setCartItemsToLoaclStorage(state.cartItems);
            }
        },
        deleteFromCart: (state: Cart, action: PayloadAction<CartItem["id"]>) => {
            state.cartItems.map((item) => {
                if (item.id === action.payload) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== action.payload
                    );
                    state.cartItems = nextCartItems;
                    toast.info(appTexts.DELETE_A_PRODUCT);

                    //* save to localStorage
                    setCartItemsToLoaclStorage(state.cartItems);
                }
            });
        },
        calculateTotals: (state: Cart, action: PayloadAction) => {
            let { total, qty } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQty } = cartItem;
                    cartTotal.total += Number(price) * Number(cartQty);
                    cartTotal.qty += cartQty;
                    return cartTotal;
                },
                { total: 0, qty: 0 }
            );

            state.cartTotalAmount = parseFloat(total.toFixed());
            state.cartTotalQty = qty;
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, editCartProduct, deleteFromCart, calculateTotals } = cartSlice.actions;

//*selectors
export const cartTotalAmountSelector = (state: RootState) => state.cart.cartTotalAmount;
export const cartTotalQtySelector = (state: RootState) => state.cart.cartTotalQty;
export const cartItemsSelector = (state: RootState) => state.cart.cartItems;
