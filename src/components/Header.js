import React, { useState, useCallback } from "react";
import Gnb from "./Gnb";
import Sitemap from "../api/SitemapApi";
import "./Header.scss";

const Header = () => {
    const [isLnb, setLnb] = useState(false);
    const handleLnbClick = useCallback(() => {
        setLnb(!isLnb);
    }, [isLnb]);

    return (
        <header id="header" className={isLnb ? "active" : ""}>
            <button className="btn-lnb" onClick={handleLnbClick}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <Gnb sitemap={Sitemap} />
        </header>
    );
};

export default React.memo(Header);
