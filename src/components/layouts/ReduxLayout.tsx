import { Provider } from "react-redux";

import { LayoutPropsType } from "../../types";
import store from "../../redux/store";

const ReduxLayout = ({ children }: LayoutPropsType): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxLayout;
