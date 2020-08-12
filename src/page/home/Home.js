import React from "react";
import "./Home.scss";

const Home = ({ match, sitemap }) => {
    const pageInfo = sitemap.find((pageTitle) => pageTitle.path === match.path);
    const pageTitle = pageInfo.pagename;
    //console.log(pageTitle);

    return (
        <article className="home">
            <h1 className="pageTit">{pageTitle}</h1>
            <section className="section">
                <p>메인 홈화면 페이지 입니다.</p>
            </section>
        </article>
    );
};

export default Home;
