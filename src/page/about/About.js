import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMain from "./AboutMain";
import AboutMotion from "./AboutMotion";
import AboutTab from "./AboutTab";
import "./About.scss";

const About = ({ match, sitemap }) => {
    const pageInfo = sitemap.find((pageTitle) => pageTitle.path === match.path);
    const pageTitle = pageInfo.pagename;

    return (
        <article className="about">
            <h1 className="pageTit">{pageTitle}</h1>
            <Switch>
                <Route path="/about/motion" component={AboutMotion} />
                <Route path="/about/tab" component={AboutTab} />
                <Route path="*" component={AboutMain} />
            </Switch>
        </article>
    );
};

export default About;
