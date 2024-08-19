import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { MainLayout } from "../layouts";
import { NotFoundPage } from "../pages";

//* code spliting
// const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetailPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));

const Routes = (): JSX.Element => {
    //* Suspense is in the MainLayout and cover the Outlet component to support code spliting
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <NotFoundPage />,
            children: [
                {
                    path: "/",
                    element: <MainPage />,
                },
                {
                    path: "/products/:productId",
                    // loader: ({ params : {productId = ""}}) => {
                    //     const product = useSelector((state: RootState) =>
                    //         productSelectorById(state, productId)
                    //     );
                    //     return {product}
                    // },
                    element: <ProductDetailPage />,
                },
                {
                    path: "/checkout",
                    element: <CheckoutPage />
                }
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;
