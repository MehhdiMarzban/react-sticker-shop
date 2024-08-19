import { appTexts } from "../../constants";
import styles from "./Loader.module.css";
const Loader = () => {
    return (
        <div className={styles.makeCenter}>
            <div className={styles.container}>
                <div className={styles.loader}></div>
                <span className="block text-[2rem] text-center align-middle mt-4 font-bold text-slate-100">
                    {appTexts.LOADING}
                </span>
            </div>
        </div>
    );
};

export default Loader;
