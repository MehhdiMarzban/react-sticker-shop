import Product from "../core/Product";
// import { withLoader } from "../HOC";
import { ProductsListProps } from "../../types";

const ProductList: React.FC<ProductsListProps> = ({ items }) => {
    return (
        <div className="flex justify-center w-[80%] mx-auto flex-wrap gap-8">
            {items.map((item) => (
                <Product product={item} key={item.id} />
            ))}
        </div>
    );
};

// export default withLoader<ProductsListProps>(ProductList);
export default ProductList;
