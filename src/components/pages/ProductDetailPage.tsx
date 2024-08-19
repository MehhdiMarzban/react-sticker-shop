import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

import { fetchedProductSelector, fetchProduct } from "../../redux/slices/productSlice";
import { PersianNumber } from "../core";
import { ApiAddresses, appTexts } from "../../constants";
import { Product } from "../../types";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductDetailPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productId = "" } = useParams();
    
    const product: Product | undefined = useSelector(fetchedProductSelector);

    useEffect(() => {
        dispatch(fetchProduct(productId) as any);
    }, [productId, dispatch]);

    const handleAddToCart = () => {
        if (product) dispatch(addToCart({ ...product, cartQty: 1 }));
        navigate("/checkout");
    };

    return (
        <div className="flex flex-col align-middle justify-center items-center md:flex-row space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-8">
            {product && (
                <>
                    <Helmet>
                        <title>{product.title}</title>
                    </Helmet>
                    <div className="block w-full mx-auto md:w-1/2 rounded md:my-0 md:ml-6">
                        <div className="h-full">
                            <img
                                src={`${ApiAddresses.BACKEND_API.IP}:${ApiAddresses.BACKEND_API.PORT}/images/${product.sticker}`}
                                className="transform duration-500 ease-in-out hover:scale-105 rounded-md mx-auto"
                                alt={product.title}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between h-full w-full md:w-1/2 mx-auto">
                        <Link to="/" className="btn btn-outline btn-primary my-2">
                            {appTexts.BACK_TO_HOME}
                        </Link>

                        <div className="font-primary">
                            <h1 className="leading-relaxed text-center font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
                                {product.title}
                            </h1>
                            <p className="font-medium text-justify text-lg">
                                {product.description}
                            </p>
                            <div className="flex text-xl text-palette-primary font-medium badge badge-lg badge-ghost py-6 px-2 my-2 mx-auto">
                                <PersianNumber
                                    value={product.price}
                                    thousandSeparator=","
                                    prefix={appTexts.PRICE_PREFIX}
                                    suffix={appTexts.TOMAN_SUFFIX}
                                />
                            </div>
                        </div>

                        <div className="my-2">
                            <p className="text-success text-center">
                                {appTexts.AVAILABLE_IN_STOCK}
                            </p>
                        </div>
                        <button className="btn btn-accent btn-block" onClick={handleAddToCart}>
                            {appTexts.ADD_A_PRODUCT_TO_CARD_BUTTON}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductDetailPage;
