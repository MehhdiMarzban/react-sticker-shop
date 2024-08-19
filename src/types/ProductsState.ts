import Product from "./Product";

interface ProductsState {
    entities: Product[];
    status: "loading" | "idle" | "succeeded" | "failed";
    prevProduct?: Product; 
}

export default ProductsState;