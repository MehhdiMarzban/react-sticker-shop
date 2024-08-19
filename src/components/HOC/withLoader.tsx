import { ComponentType, useEffect, useState } from "react";
import { Loader } from "../core";

const withLoader = <T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) => {
    //* that type is for props
    const HOC = (props: T) => {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const timeoutId = setTimeout(() => {
                setIsLoading(false);
            }, 3000);
            return () => {
                clearTimeout(timeoutId);
            };
        }, []);

        return <>{isLoading ? <Loader /> : <Component {...props} />}</>;
    };
    return HOC;
};

export default withLoader;
