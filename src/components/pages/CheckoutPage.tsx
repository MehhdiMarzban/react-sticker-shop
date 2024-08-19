import { useDispatch, useSelector } from "react-redux";

import {
    cartItemsSelector,
    cartTotalAmountSelector,
    cartTotalQtySelector,
    deleteFromCart,
    editCartProduct,
} from "../../redux/slices/cartSlice";
import { CartItemsTable, CheckoutStat } from "../common";
import { appTexts } from "../../constants";
import { EditCartProduct } from "../../types";

const CheckoutPage: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemsSelector);
    const cartTotalAmount = useSelector(cartTotalAmountSelector);
    const cartTotalQty = useSelector(cartTotalQtySelector);

    const handleDeleteAProduct = (id: string) => {
        dispatch(deleteFromCart(id));
    };

    const handleEditCountOfAProduct = (
        type: EditCartProduct["type"],
        id: EditCartProduct["id"],
    ) => {
        if (type === "increase" || type === "decrease") dispatch(editCartProduct({ id, type }));
    };

    return (
        <section className="my-4 w-full md:w-2/3 lg:w-1/2 mx-auto">
            {cartItems.length > 0 ? (
                <>
                    <h2 className="text-3xl font-bold text-center mb-4">
                        {appTexts.YOUR_ORDER_LIST}
                    </h2>
                    <hr className="border-neutral-content border-1" />
                    <CartItemsTable
                        cartItems={cartItems}
                        handleDeleteAProduct={handleDeleteAProduct}
                        handleEditCountOfAProduct={handleEditCountOfAProduct}
                    />
                    <div className="my-8 mx-auto w-11/12 md:w-full">
                        <CheckoutStat
                            cartTotalAmount={cartTotalAmount}
                            cartTotalQty={cartTotalQty}
                        />
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center">
                    <p className="badge badge-lg badge-neutral px-8 py-6 my-4">
                        {appTexts.EMPTY_BASKET}
                    </p>
                </div>
            )}
        </section>
    );
};

export default CheckoutPage;
