import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsState } from "../../types";
import { serviceFetchAllProducts, serviceFetchProductById } from "../../services";
import { RootState } from "../store";

const initialState = {
    status: "idle",
    entities: [],
    prevProduct: undefined,
} satisfies ProductsState as ProductsState;

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "idle";
                state.entities = action.payload as any;
            })
            .addCase(fetchProduct.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = "idle";
                state.prevProduct = action.payload as any;
            });
    },
});

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await serviceFetchAllProducts();
    return response.data;
});

export const fetchProduct = createAsyncThunk(
    "/products/fetchProduct",
    async (productId: string) => {
        const response = await serviceFetchProductById(productId);
        return response.data;
    }
);

export const productsSelector = (state: RootState) => state.products.entities;

export const productSelectorById = (state: RootState, productId: string) =>
    state.products.entities.find((product) => product.id === productId);

export const fetchStatusSelector = (state: RootState) => state.products.status;
export const fetchedProductSelector = (state: RootState) => state.products.prevProduct;
export const productReducer = productsSlice.reducer;
