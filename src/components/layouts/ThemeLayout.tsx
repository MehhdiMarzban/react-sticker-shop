import { useTheme } from "../../hooks";
import { ThemeController } from "../common";

const ThemeLayout = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
    const theme = useTheme();

    return (
        <section
            data-theme={theme}
            dir="ltr">
            <section dir="rtl">
                <div className="fixed bottom-2 left-2 z-50">
                    <ThemeController />
                </div>
                {children}
            </section>
        </section>
    );
};

export default ThemeLayout;
