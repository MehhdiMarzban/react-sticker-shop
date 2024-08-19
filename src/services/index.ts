import axios from "axios";
import { ApiAddresses } from "../constants";

axios.defaults.baseURL = `${ApiAddresses.BACKEND_API.IP}:${ApiAddresses.BACKEND_API.PORT}`;

export const serviceFetchAllProducts = () => {
    return axios.get("/products");
};

export const serviceFetchProductById = (productId: string) => {
    return axios.get(`/products/${productId}`)
}