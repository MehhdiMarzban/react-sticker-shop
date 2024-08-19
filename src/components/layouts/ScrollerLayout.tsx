const ScrollerLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            className="overflow-x-hidden scrollbar-thin scrollbar-corner-current scrollbar-track-transparent scrollbar-thumb-primary"
            dir="ltr">
            {children}
        </div>
    );
};

export default ScrollerLayout;
