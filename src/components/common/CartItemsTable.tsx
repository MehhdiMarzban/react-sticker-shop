import { Link } from "react-router-dom";
import { appTexts } from "../../constants";
import { CartItem } from "../../types";
import { PersianNumber, ProductInput } from "../core";

const CartItemsTable: React.FC<{
    cartItems?: CartItem[];
    handleDeleteAProduct: Function;
    handleEditCountOfAProduct: Function;
}> = ({ cartItems = [], handleDeleteAProduct = (id: string) => {}, handleEditCountOfAProduct }) => {
    return (
        <div className="w-full">
            <table className="table table-xs">
                {/* head */}
                <thead>
                    <tr className="text-center">
                        <th>{appTexts.ROW}</th>
                        <th>{appTexts.NAME}</th>
                        <th>{appTexts.COUNT}</th>
                        <th>{appTexts.PRICE}</th>
                        <th>{appTexts.DELETE}</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows*/}
                    {cartItems.map((cartItem, index) => {
                        return (
                            <tr className="text-center" key={cartItem.id}>
                                <th>
                                    <PersianNumber value={index + 1} />
                                </th>
                                <td>
                                    <Link
                                        to={`/products/${cartItem.id}`}
                                        className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={`/pics/${cartItem.sticker}`}
                                                    alt={cartItem.title}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold">{cartItem.title}</p>
                                        </div>
                                    </Link>
                                </td>
                                <td>
                                    <div className="w-fit mx-auto">
                                        <ProductInput
                                            count={cartItem.cartQty}
                                            productId={cartItem.id}
                                            handleEditCountOfAProduct={handleEditCountOfAProduct}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <PersianNumber
                                        value={Number(cartItem.cartQty) * Number(cartItem.price)}
                                        thousandSeparator=","
                                        suffix={appTexts.TOMAN_SUFFIX}
                                    />
                                </td>
                                <th>
                                    <button
                                        className="btn btn-ghost btn-xs"
                                        onClick={() => handleDeleteAProduct(cartItem.id)}>
                                        {appTexts.DELETE}
                                    </button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CartItemsTable;
