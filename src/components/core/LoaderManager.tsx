import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { fetchStatusSelector } from "../../redux/slices/productSlice";
import { Loader } from "../core";

const LoaderManager: React.FC = () => {
    const fetchStatus = useSelector(fetchStatusSelector);
    if (fetchStatus === "idle") return null;
    else if (fetchStatus === "failed") {
        return <Navigate to="/notfound" />;
    }

    //* this is for loading status
    return <Loader />;
};

export default LoaderManager;
