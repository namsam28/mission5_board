import React from "react";
import "./Gnb.scss";
import GnbDepth1 from "./GnbDepth1";
import GnbDepth2 from "./GnbDepth2";

const Gnb = ({ sitemap }) => {
    return (
        <nav className="gnb">
            <ul className="depth1">
                {sitemap.map((depth1) => {
                    return (
                        <GnbDepth1 key={depth1.path} sitemap={depth1}>
                            <GnbDepth2 sitemap={depth1} />
                        </GnbDepth1>
                    );
                })}
            </ul>
        </nav>
    );
};

export default React.memo(Gnb);
