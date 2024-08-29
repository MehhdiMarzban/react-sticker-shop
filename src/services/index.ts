import data from "../../server/db.json";

export const serviceFetchAllProducts = () => {
    return {data: data.products};
};

export const serviceFetchProductById = (productId: string) => {
    const product = data.products.find(product => product.id === productId);
    if (!product) {
        throw new Error("Product not found");
    }
    return {data: product}
}