import React from "react";
import { NavLink } from "react-router-dom";

const GnbDepth1 = ({ children, sitemap }) => {
    const depthLink = sitemap.path;
    const depthPageName = sitemap.pagename;
    const depth2 = sitemap.depth2;

    return (
        <li className="gnb-depth1">
            <NavLink
                activeClassName="active"
                to={depthLink}
                className={depth2 ? "isDepth2" : ""}
            >
                {depthPageName}
            </NavLink>
            {children}
        </li>
    );
};

export default React.memo(GnbDepth1);
