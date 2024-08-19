import { Product } from "../../types";

const ProductInput: React.FC<{
    count: number;
    productId: Product["id"];
    handleEditCountOfAProduct: Function;
}> = ({ count = 1, productId = "", handleEditCountOfAProduct }) => {
    
    return (
        <div className="flex flex-col sm:flex-row gap-1 justify-center items-center bg-neutral text-neutral-content px-1 rounded-md">
            <button
                className="btn btn-ghost p-1"
                name="increase"
                onClick={() => {
                    handleEditCountOfAProduct("increase", productId);
                }}>
                +
            </button>
            <span className="text-center badge badge-ghost disabled:text-base-content disabled:cursor-default w-10 py-3 m-0 align-middle">
                {count}
            </span>
            <button
                className="btn btn-ghost p-1"
                name="decrease"
                onClick={() => {
                    handleEditCountOfAProduct("decrease", productId);
                }}>
                -
            </button>
        </div>
    );
};

export default ProductInput;
