import { CartItem } from "../types";

export const getCartItemsFromLocalStorage = () : CartItem[] => {
    const localCart = localStorage.getItem("cartItems");
    return localCart ? JSON.parse(localCart) : [];
}

export const setCartItemsToLoaclStorage = (cardItems : CartItem[]) : void => {
    localStorage.setItem("cartItems", JSON.stringify((cardItems)));
}