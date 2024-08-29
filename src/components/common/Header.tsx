import { appTexts } from "../../constants";
import { useTheme } from "../../hooks";
const Header = (): JSX.Element => {
    const theme = useTheme();
    return (
        <div
            className="hero h-80 mb-4 z-50"
            style={{
                backgroundImage: `url(/pics/hero-min.png)`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-full">
                    <h1
                        className={`mb-5 text-xl md:text-5xl font-extrabold ${
                            theme === "dark" ? "text-violet-300" : "text-white"
                        }`}>
                        {appTexts.APP_TITLE}
                    </h1>
                    <p
                        className={`mb-5 font-bold ${
                            theme === "dark" ? "text-violet-400" : "text-white"
                        }`}>
                        {appTexts.NARRATIVE}
                    </p>
                    <button className="btn btn-primary">{appTexts.START_TO_BUY}</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
