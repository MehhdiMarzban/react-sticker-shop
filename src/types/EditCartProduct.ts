import CartItem from "./CartItem";

interface EditCartProduct {
    type: "increase" | "decrease";
    id: CartItem["id"];
}

export default EditCartProduct;