import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../types";

const productApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    endpoints: (builder) => ({
        getAllProductsAPI: builder.query<Product[], void>({
            query: () => "/stickers",
        }),
    }),
});

export const {useGetAllProductsAPIQuery} = productApi;
export default productApi;