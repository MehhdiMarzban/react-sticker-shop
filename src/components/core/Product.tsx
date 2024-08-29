import { Product as ProductProps } from "../../types";
import PersianNumber from "./PersianNumber";
import styles from "./Product.module.css";
import { appTexts } from "../../constants";
import { Link } from "react-router-dom";

const Product: ({ product }: { product: ProductProps }) => JSX.Element = ({ product }) => {
    const { title = "", price = "", sticker, category = "Stiker", altSticker = "" } = product;
    return (
        <div className={styles.card}>
            <img
                alt={altSticker}
                src={
                    sticker
                        ? `../../../server/public/images/${sticker}`
                        : "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                }
            />
            <div className={styles.info}>
                <div>
                    <div
                        className={`block badge badge-sm mx-auto my-1 ${
                            category === "Stiker" ? "badge-info" : "badge-warning"
                        }`}>
                        {category === "Stiker" ? "استیکر" : "قاب"}
                    </div>
                    <h1 className="text-lg">{title}</h1>
                </div>
                <div>
                    <PersianNumber
                        value={price}
                        thousandSeparator=","
                        prefix={appTexts.PRICE_PREFIX}
                        suffix={appTexts.TOMAN_SUFFIX}
                        type="text"
                        className="text-center mb-1 block bg-neutral px-2 py-1 rounded-md"
                    />
                    <button className="btn btn-sm btn-primary w-full mt-2">{appTexts.ADD_A_PRODUCT_TO_CARD_BUTTON}</button>
                    <Link className="btn btn-sm btn-primary w-full mt-2" to={`/products/${product.id}`}>
                            {appTexts.GO_TO_A_PRODUCT_PAGE}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
