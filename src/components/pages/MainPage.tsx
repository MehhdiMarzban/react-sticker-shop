import { useSelector } from "react-redux";

import { productsSelector } from "../../redux/slices/productSlice";
import { Header, ProductList } from "../common";
import { Helmet } from "react-helmet-async";
import { appTexts } from "../../constants";
import { PaginateItems } from "../core";

const MainPage = (): JSX.Element => {
    const products = useSelector(productsSelector);
    return (
        <>
            <Helmet>
                <title>{appTexts.APP_TITLE}</title>
            </Helmet>
            <Header />
            <PaginateItems ItemsList={ProductList as any} items={products} itemsPerPage={8} />
        </>
    );
};

export default MainPage;
