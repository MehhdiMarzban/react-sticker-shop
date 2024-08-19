import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import * as animationData from "../../assets/lotties/notfound.json";
import { appTexts } from "../../constants";
import { Loader } from "../core";

//* use code spiting
const Lottie = lazy(() => import("lottie-react"));

const NotFoundPage = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <Suspense fallback={<Loader />}>
                <Lottie animationData={animationData} loop height={400} width={400} />
            </Suspense>
            <h1 className="text-center text-pretty text-3xl">{appTexts.NOT_FOUND_PAGE}</h1>
            <Link to="/" reloadDocument className="btn btn-outline btn-primary mt-2">
                {appTexts.BACK_TO_HOME}
            </Link>
        </section>
    );
};

export default NotFoundPage;
