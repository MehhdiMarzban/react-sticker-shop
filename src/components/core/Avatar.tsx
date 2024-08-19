import { AvatarProps } from "../../types";

const Avatar: React.FC<AvatarProps> = ({ src, alt = "avatar profile user", ...otherProps }) => {
    return (
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" {...otherProps}>
            <div className="w-10 rounded-full">
                <img alt={alt} src={src} />
            </div>
        </div>
    );
};

export default Avatar;
