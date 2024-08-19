import ProductType from "./Product";

//* jsx.intrinsicAttributes is for HOC function
interface ProductListProps extends JSX.IntrinsicAttributes {
    items: ProductType[];
}

export default ProductListProps;
