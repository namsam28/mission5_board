import React from "react";
import { Switch, Route } from "react-router-dom";

const Mypage = ({ match, sitemap }) => {
    const pageInfo = sitemap.find((pageTitle) => pageTitle.path === match.path);
    const pageTitle = pageInfo.pagename;

    return (
        <article className="mypage">
            <h1 className="pageTit">{pageTitle}</h1>
            <Switch>
                <Route path="/mypage/info" render={() => <div>정보</div>} />
                <Route
                    path="/mypage/secession"
                    render={() => <div>탈퇴</div>}
                />
                <Route path="*" render={() => <div>홈</div>} />
            </Switch>
        </article>
    );
};

export default Mypage;
