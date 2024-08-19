import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { appTexts } from "../../constants";
import {
    calculateTotals,
    cartItemsSelector,
    cartTotalAmountSelector,
    cartTotalQtySelector,
} from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { PersianNumber } from "../core";

const CartButton: React.FC = () => {
    const dispatch = useDispatch();
    const cartTotalAmount = useSelector(cartTotalAmountSelector);
    const cartTotalQty = useSelector(cartTotalQtySelector);
    const cartItems = useSelector(cartItemsSelector);
    const cartItemsCounts = cartItems.length;

    useEffect(() => {
        dispatch(calculateTotals());
    }, [dispatch, cartItems]);

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator text-white text-3xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <span className="badge badge-sm indicator-item">{cartItemsCounts}</span>
                </div>
            </div>
            <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-300 z-[1] mt-3 w-72 shadow text-center">
                <div className="card-body">
                    <span className="text-lg font-bold">
                        <PersianNumber
                            value={cartItemsCounts}
                            prefix={appTexts.ITEMS}
                        />
                    </span>
                    <span className="text-lg font-bold">
                        <PersianNumber
                            value={cartTotalQty}
                            prefix={appTexts.COUNT_OF_PRODUCTS}
                        />
                    </span>
                    <span className="text-info">
                        <PersianNumber
                            value={cartTotalAmount}
                            prefix={appTexts.SUM_OF_CHECKOUT}
                            suffix={appTexts.TOMAN_SUFFIX}
                            thousandSeparator=","
                       
                       />
                    </span>
                    <div className="card-actions">
                        <Link to="/checkout" className="btn btn-primary btn-sm btn-block">
                            {appTexts.VIEW_CART}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartButton;
