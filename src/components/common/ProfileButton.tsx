import { Link } from "react-router-dom";
import Avatar from "../core/Avatar";
import { ApiAddresses } from "../../constants";

const ProfileButton: React.FC = () => {
    return (
        <div className="dropdown dropdown-end">
            <Avatar src={`${ApiAddresses.BACKEND_API.IP}:${ApiAddresses.BACKEND_API.PORT}/images/profile.png`} />
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                    <Link to="/" className="justify-between">
                        پروفایل
                        <span className="badge">جدید</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">خروج</Link>
                </li>
            </ul>
        </div>
    );
};

export default ProfileButton;