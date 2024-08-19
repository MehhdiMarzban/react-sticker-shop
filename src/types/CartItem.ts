import Product from "./Product";

interface CartItem extends Product {
    cartQty: number;
}

export default CartItem;