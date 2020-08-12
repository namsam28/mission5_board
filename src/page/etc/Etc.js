import React from "react";

const Etc = ({ match, sitemap }) => {
    const pageInfo = sitemap.find((pageTitle) => pageTitle.path === match.path);
    const pageTitle = pageInfo.pagename;

    return (
        <article className="mypage">
            <h1 className="pageTit">{pageTitle}</h1>
        </article>
    );
};

export default Etc;
