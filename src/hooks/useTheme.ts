import { useSelector } from "react-redux";

import { themeSelector } from "../redux/slices/themeSlice";

const useTheme = () => {
    const theme = useSelector(themeSelector);
    return theme;
};

export default useTheme;
