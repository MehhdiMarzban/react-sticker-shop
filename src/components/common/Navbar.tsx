import { Link } from "react-router-dom";

import { appTexts } from "../../constants";
import { CartButton, ProfileButton } from "../common";

const Navbar = (): JSX.Element => {
    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost sm:text-sm md:text-xl text-white">
                    {appTexts.APP_TITLE}
                </Link>
            </div>
            <div className="flex-none">
                <CartButton />
                <ProfileButton />
            </div>
        </div>
    );
};

export default Navbar;
