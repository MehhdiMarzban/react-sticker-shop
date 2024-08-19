import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../common";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import { Loader, LoaderManager } from "../core";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <HelmetProvider>
                <ToastContainer position="top-right" rtl closeOnClick />
                <LoaderManager />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </HelmetProvider>
            <Footer />
        </>
    );
};

export default MainLayout;
