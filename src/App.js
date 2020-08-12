import React from "react";
import { Route, Switch } from "react-router-dom";
import TemplateSub from "./container/TemplateSub";
import Header from "./components/Header";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Mypage from "./page/mypage/Mypage";
import Etc from "./page/etc/Etc";
import Sitemap from "./api/SitemapApi";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Header />

            <TemplateSub>
                <Switch>
                    <Route
                        path="/"
                        render={({ match }) => (
                            <Home match={match} sitemap={Sitemap} />
                        )}
                        exact
                    />
                    <Route
                        path="/about"
                        render={({ match }) => (
                            <About match={match} sitemap={Sitemap} />
                        )}
                    />
                    <Route
                        path="/mypage"
                        render={({ match }) => (
                            <Mypage match={match} sitemap={Sitemap} />
                        )}
                    />
                    <Route
                        path="/etc"
                        render={({ match }) => (
                            <Etc match={match} sitemap={Sitemap} />
                        )}
                    />
                </Switch>
            </TemplateSub>
        </div>
    );
}

export default App;
