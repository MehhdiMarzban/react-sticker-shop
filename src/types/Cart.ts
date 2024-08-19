import CartItem from "./CartItem";

interface Cart {
    cartItems: CartItem[];
    cartTotalQty: number;
    cartTotalAmount: number;
}

export default Cart;